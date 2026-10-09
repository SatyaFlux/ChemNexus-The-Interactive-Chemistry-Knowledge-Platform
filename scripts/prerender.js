// scripts/prerender.js
// Advanced Bilingual Pre-renderer and XML Sitemap / Robots Generator for ChemNexus
// Generates static HTML snapshots for all 588+ public routes (EN & HI)
// for instantaneous crawlability by Googlebot, Bingbot, and other search engines.

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { elementsData } from '../src/data/elementsData.js';
import { reactionsData } from '../src/data/reactionsData.js';
import { reactionTypesData } from '../src/data/reactionTypesData.js';
import { workedBalancingExamples, practiceEquations } from '../src/data/balancingEquationsData.js';
import { chemicalCompoundsList, formulaRules } from '../src/data/chemicalFormulasData.js';
import { periodicTrendsData } from '../src/data/periodicTrendsData.js';
import { highYieldNotes, chemistryFaqQuestions } from '../src/data/chemistryNotesData.js';
import { seoKeywordMap } from '../src/data/seoKeywordMap.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '..');
const DIST_DIR = path.resolve(ROOT_DIR, 'dist');
const PUBLIC_DIR = path.resolve(ROOT_DIR, 'public');

const SITE_URL = 'https://chemnexus.vercel.app';

// Helper: Escape HTML characters
function escapeHtml(str) {
  if (str === null || str === undefined) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

// Helper: Escape XML characters for sitemap
function escapeXml(str) {
  if (str === null || str === undefined) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

// Today's ISO date string
const TODAY = new Date().toISOString().split('T')[0];

console.log('--- ChemNexus SEO Pre-rendering Engine Starting ---');

// 1. Verify dist/index.html exists
const baseIndexPath = path.resolve(DIST_DIR, 'index.html');
if (!fs.existsSync(baseIndexPath)) {
  console.error('Error: dist/index.html not found! Run "vite build" first.');
  process.exit(1);
}
const rawBaseHtml = fs.readFileSync(baseIndexPath, 'utf-8');

// Pristine clean template containing ONLY the base head tags and Vite compiled script/css links
const baseHtmlTemplate = rawBaseHtml
  .replace(/<title>[\s\S]*?<\/title>/gi, '')
  .replace(/<meta\s+name="description"[\s\S]*?>/gi, '')
  .replace(/<meta\s+name="keywords"[\s\S]*?>/gi, '')
  .replace(/<link\s+rel="canonical"[\s\S]*?>/gi, '')
  .replace(/<link\s+rel="alternate"\s+hreflang[\s\S]*?>/gi, '')
  .replace(/<meta\s+property="og:[^"]*"[\s\S]*?>/gi, '')
  .replace(/<meta\s+name="twitter:[^"]*"[\s\S]*?>/gi, '')
  .replace(/<script\s+type="application\/ld\+json">[\s\S]*?<\/script>/gi, '')
  .replace(/<div id="root">[\s\S]*?<\/div>/i, '<div id="root"></div>')
  .replace(/<html\s+lang="[^"]*"/i, '<html lang="en"');

// Container for all indexable pages to register in sitemap
const sitemapEntries = [];

/**
 * Register and write a pre-rendered page
 */
function renderPage({
  route,
  enEquivalent,
  hiEquivalent,
  isHindi,
  title,
  description,
  keywords = [],
  breadcrumbs = [],
  schemas = [],
  semanticBodyHtml = '',
  priority = '0.7',
  changefreq = 'weekly',
}) {
  const canonicalUrl = `${SITE_URL}${route === '/' ? '' : route}`;
  const enUrl = `${SITE_URL}${enEquivalent === '/' ? '' : enEquivalent}`;
  const hiUrl = `${SITE_URL}${hiEquivalent}`;

  // 1. Prepare Schema.org JSON-LD
  // Always include WebSite, Organization, and BreadcrumbList
  const baseSchemas = [
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'ChemNexus',
      url: SITE_URL,
      description:
        'Interactive chemistry knowledge platform covering all 118 elements and chemical reaction mechanisms.',
      potentialAction: {
        '@type': 'SearchAction',
        target: `${SITE_URL}/search?q={search_term_string}`,
        'query-input': 'required name=search_term_string',
      },
      inLanguage: ['en-US', 'hi-IN'],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'ChemNexus',
      url: SITE_URL,
      logo: `${SITE_URL}/favicon.svg`,
    },
  ];

  if (breadcrumbs.length > 0) {
    baseSchemas.push({
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: breadcrumbs.map((crumb, idx) => ({
        '@type': 'ListItem',
        position: idx + 1,
        name: crumb.name,
        item: `${SITE_URL}${crumb.path === '/' ? '' : crumb.path}`,
      })),
    });
  }

  const allSchemas = [...baseSchemas, ...schemas];

  // 2. Build Injected Head Tags
  const headInjections = [
    `<title>${escapeHtml(title)}</title>`,
    `<meta name="description" content="${escapeHtml(description)}" />`,
    keywords.length > 0 ? `<meta name="keywords" content="${escapeHtml(keywords.join(', '))}" />` : '',
    `<link rel="canonical" href="${canonicalUrl}" />`,
    `<link rel="alternate" hreflang="en" href="${enUrl}" />`,
    `<link rel="alternate" hreflang="hi" href="${hiUrl}" />`,
    `<link rel="alternate" hreflang="x-default" href="${enUrl}" />`,
    // Open Graph
    `<meta property="og:type" content="website" />`,
    `<meta property="og:url" content="${canonicalUrl}" />`,
    `<meta property="og:title" content="${escapeHtml(title)}" />`,
    `<meta property="og:description" content="${escapeHtml(description)}" />`,
    `<meta property="og:site_name" content="ChemNexus" />`,
    `<meta property="og:locale" content="${isHindi ? 'hi_IN' : 'en_US'}" />`,
    `<meta property="og:image" content="${SITE_URL}/og-image.png" />`,
    // Twitter
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${escapeHtml(title)}" />`,
    `<meta name="twitter:description" content="${escapeHtml(description)}" />`,
    `<meta name="twitter:image" content="${SITE_URL}/og-image.png" />`,
    // Structured Data JSON-LD
    ...allSchemas.map((s) => `<script type="application/ld+json">${JSON.stringify(s)}</script>`),
  ].filter(Boolean).join('\n    ');

  // 3. Assemble full HTML from base template
  let pageHtml = baseHtmlTemplate;

  // Replace default title & description
  pageHtml = pageHtml.replace(/<title>.*?<\/title>/i, '');
  pageHtml = pageHtml.replace(/<meta name="description".*?>/i, '');
  pageHtml = pageHtml.replace('</head>', `    ${headInjections}\n  </head>`);

  // Update html lang attribute
  if (isHindi) {
    pageHtml = pageHtml.replace('<html lang="en"', '<html lang="hi"');
  }

  // Pre-render semantic body inside <div id="root">
  const renderedRootHtml = `<div id="root">${semanticBodyHtml}</div>`;
  pageHtml = pageHtml.replace('<div id="root"></div>', renderedRootHtml);

  // 4. Write to disk in dist/
  const targetSubdir = route === '/' ? '' : route.replace(/^\//, '');
  const targetDir = path.resolve(DIST_DIR, targetSubdir);
  fs.mkdirSync(targetDir, { recursive: true });
  fs.writeFileSync(path.resolve(targetDir, 'index.html'), pageHtml, 'utf-8');

  // 5. Add to Sitemap Entries
  sitemapEntries.push({
    loc: canonicalUrl,
    enUrl,
    hiUrl,
    lastmod: TODAY,
    changefreq,
    priority,
  });
}

// ==========================================
// 1. CORE PAGES (EN & HI)
// ==========================================

// --- Home Page ---
renderPage({
  route: '/',
  enEquivalent: '/',
  hiEquivalent: '/hi',
  isHindi: false,
  title: 'ChemNexus — Interactive Chemistry Knowledge Platform & 118 Periodic Table Elements',
  description:
    'Comprehensive interactive chemistry platform covering all 118 periodic table elements, 156+ chemical reaction mechanisms, balancing equations, chemical formulas, periodic trends, and NCERT revision notes.',
  keywords: [
    'periodic table',
    'interactive periodic table',
    'all 118 elements',
    'chemical reactions',
    'chemistry formulas',
    'balanced chemical equations',
    'chemistry learning website',
  ],
  breadcrumbs: [{ name: 'Home', path: '/' }],
  priority: '1.0',
  changefreq: 'daily',
  semanticBodyHtml: `
    <header class="p-6 bg-slate-900 border-b border-slate-800">
      <h1 class="text-3xl font-extrabold text-white">ChemNexus — Interactive Chemistry Knowledge Platform</h1>
      <p class="text-slate-300 mt-2">Explore every element. Understand every reaction. Complete bilingual chemistry learning for students in India and worldwide.</p>
    </header>
    <main class="p-6 space-y-6">
      <nav aria-label="Chemistry Modules" class="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <a href="/periodic-table" class="p-4 bg-slate-800 rounded-lg text-cyan-400 font-semibold">Interactive Periodic Table (118 Elements)</a>
        <a href="/reactions" class="p-4 bg-slate-800 rounded-lg text-cyan-400 font-semibold">Chemical Reactions Library (156+ Equations)</a>
        <a href="/reaction-types" class="p-4 bg-slate-800 rounded-lg text-cyan-400 font-semibold">10 Types of Chemical Reactions</a>
        <a href="/balancing-equations" class="p-4 bg-slate-800 rounded-lg text-cyan-400 font-semibold">Balancing Chemical Equations Guide</a>
        <a href="/chemical-formulas" class="p-4 bg-slate-800 rounded-lg text-cyan-400 font-semibold">Chemical Formulas & Nomenclature</a>
        <a href="/periodic-trends" class="p-4 bg-slate-800 rounded-lg text-cyan-400 font-semibold">Periodic Trends & Configurations</a>
        <a href="/chemistry-notes" class="p-4 bg-slate-800 rounded-lg text-cyan-400 font-semibold">High-Yield Chemistry Revision Notes</a>
        <a href="/quizzes" class="p-4 bg-slate-800 rounded-lg text-cyan-400 font-semibold">Chemistry Practice Quizzes</a>
      </nav>
      <section>
        <h2 class="text-xl font-bold text-white">Periodic Table of 118 Elements</h2>
        <p class="text-slate-300">Detailed properties for Hydrogen, Helium, Lithium, Beryllium, Boron, Carbon, Nitrogen, Oxygen, Fluorine, Neon, Sodium, Magnesium, Aluminum, Silicon, Phosphorus, Sulfur, Chlorine, Argon, Potassium, Calcium, Iron, Copper, Gold, and all 118 elements.</p>
      </section>
    </main>
  `,
});

renderPage({
  route: '/hi',
  enEquivalent: '/',
  hiEquivalent: '/hi',
  isHindi: true,
  title: 'ChemNexus — आधुनिक आवर्त सारणी और संपूर्ण 118 तत्वों का ज्ञान (हिंदी में)',
  description:
    'रसायन विज्ञान का संपूर्ण द्विभाषी शिक्षण मंच। सभी 118 रासायनिक तत्वों के नाम, प्रतीक, परमाणु क्रमांक, रासायनिक अभिक्रियाओं के प्रकार, समीकरण संतुलन, सूत्र और अध्ययन नोट्स।',
  keywords: [
    'आवर्त सारणी',
    'सभी 118 तत्वों के नाम',
    'तत्वों के नाम और प्रतीक',
    'परमाणु क्रमांक',
    'रासायनिक अभिक्रियाएँ',
    'रासायनिक सूत्र',
    'रसायन विज्ञान के नोट्स',
    'periodic table in Hindi',
  ],
  breadcrumbs: [{ name: 'गृह पृष्ठ', path: '/hi' }],
  priority: '1.0',
  changefreq: 'daily',
  semanticBodyHtml: `
    <header class="p-6 bg-slate-900 border-b border-slate-800">
      <h1 class="text-3xl font-extrabold text-white">ChemNexus — आधुनिक आवर्त सारणी और संपूर्ण 118 तत्वों का ज्ञान</h1>
      <p class="text-slate-300 mt-2">प्रत्येक तत्व को जानें। हर रासायनिक अभिक्रिया को समझें। हिंदी एवं अंग्रेजी माध्यम के छात्रों के लिए भारत का प्रमुख रसायन विज्ञान मंच।</p>
    </header>
    <main class="p-6 space-y-6">
      <nav aria-label="रसायन विज्ञान मॉड्यूल" class="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <a href="/hi/periodic-table" class="p-4 bg-slate-800 rounded-lg text-cyan-400 font-semibold">आवर्त सारणी (118 तत्व)</a>
        <a href="/hi/reactions" class="p-4 bg-slate-800 rounded-lg text-cyan-400 font-semibold">रासायनिक अभिक्रियाएँ और समीकरण</a>
        <a href="/hi/reaction-types" class="p-4 bg-slate-800 rounded-lg text-cyan-400 font-semibold">रासायनिक अभिक्रियाओं के प्रकार</a>
        <a href="/hi/balancing-equations" class="p-4 bg-slate-800 rounded-lg text-cyan-400 font-semibold">रासायनिक समीकरण संतुलित करना</a>
        <a href="/hi/chemical-formulas" class="p-4 bg-slate-800 rounded-lg text-cyan-400 font-semibold">रासायनिक सूत्र और नाम</a>
        <a href="/hi/periodic-trends" class="p-4 bg-slate-800 rounded-lg text-cyan-400 font-semibold">आवर्त सारणी की प्रवृत्तियाँ एवं विन्यास</a>
        <a href="/hi/chemistry-notes" class="p-4 bg-slate-800 rounded-lg text-cyan-400 font-semibold">रसायन विज्ञान के नोट्स व प्रश्नोत्तर</a>
        <a href="/hi/quizzes" class="p-4 bg-slate-800 rounded-lg text-cyan-400 font-semibold">अभ्यास क्विज</a>
      </nav>
      <section>
        <h2 class="text-xl font-bold text-white">सभी 118 रासायनिक तत्व (हिंदी में)</h2>
        <p class="text-slate-300">हाइड्रोजन, हीलियम, लिथियम, बेरिलियम, बोरॉन, कार्बन, नाइट्रोजन, ऑक्सीजन, फ्लोरीन, नियॉन, सोडियम, मैग्नीशियम, एल्युमिनियम, सिलिकॉन, फॉस्फोरस, सल्फर, क्लोरीन, आर्गन, पोटैशियम, कैल्शियम, आयरन, कॉपर, गोल्ड और ओगनेसन सहित सभी 118 तत्वों का विस्तृत विवरण।</p>
      </section>
    </main>
  `,
});

// --- Periodic Table Page ---
renderPage({
  route: '/periodic-table',
  enEquivalent: '/periodic-table',
  hiEquivalent: '/hi/periodic-table',
  isHindi: false,
  title: 'Interactive Periodic Table of Elements (All 118 Elements with Names & Atomic Numbers) | ChemNexus',
  description:
    'Explore the interactive periodic table with all 118 chemical elements, atomic numbers, atomic masses, electron configurations, valencies, groups, periods, and periodic trends.',
  keywords: [
    'periodic table',
    'interactive periodic table',
    'periodic table with names',
    'periodic table with atomic numbers',
    'all 118 elements',
    'chemical elements list',
    'periodic table with symbols',
    'element properties',
  ],
  breadcrumbs: [
    { name: 'Home', path: '/' },
    { name: 'Periodic Table', path: '/periodic-table' },
  ],
  priority: '0.9',
  semanticBodyHtml: `
    <header class="p-6 bg-slate-900 border-b border-slate-800">
      <h1 class="text-3xl font-extrabold text-white">Interactive Periodic Table of Elements (All 118 Elements)</h1>
      <p class="text-slate-300 mt-2">Comprehensive reference table with IUPAC atomic masses, symbols, atomic numbers, periods, groups, blocks, and electron configurations.</p>
    </header>
    <main class="p-6">
      <div class="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-2">
        ${elementsData
          .map(
            (e) => `
          <a href="/element/${e.symbol}" class="p-3 bg-slate-800/80 rounded border border-slate-700 hover:border-cyan-400 block text-center">
            <span class="text-xs text-slate-400">${e.number}</span>
            <div class="text-xl font-bold text-white">${e.symbol}</div>
            <div class="text-xs text-slate-300 truncate">${e.name}</div>
            <div class="text-[10px] text-cyan-400">${e.atomicMass}</div>
          </a>
        `
          )
          .join('')}
      </div>
    </main>
  `,
});

renderPage({
  route: '/hi/periodic-table',
  enEquivalent: '/periodic-table',
  hiEquivalent: '/hi/periodic-table',
  isHindi: true,
  title: 'आवर्त सारणी हिंदी में — सभी 118 तत्वों के नाम, प्रतीक, परमाणु क्रमांक और द्रव्यमान | ChemNexus',
  description:
    'आधुनिक आवर्त सारणी (Periodic Table in Hindi): सभी 118 रासायनिक तत्वों के नाम, प्रतीक, परमाणु क्रमांक, परमाणु भार, इलेक्ट्रॉनिक विन्यास, संयोजकता और आवर्त सारणी के गुणधर्म।',
  keywords: [
    'आवर्त सारणी',
    'सभी 118 तत्वों के नाम',
    'तत्वों के नाम और प्रतीक',
    'परमाणु क्रमांक',
    'परमाणु द्रव्यमान',
    'आवर्त सारणी हिंदी में',
    'periodic table in Hindi',
    'avart sarani',
    'elements name in Hindi and English',
  ],
  breadcrumbs: [
    { name: 'गृह पृष्ठ', path: '/hi' },
    { name: 'आवर्त सारणी', path: '/hi/periodic-table' },
  ],
  priority: '0.9',
  semanticBodyHtml: `
    <header class="p-6 bg-slate-900 border-b border-slate-800">
      <h1 class="text-3xl font-extrabold text-white">आवर्त सारणी (Periodic Table in Hindi) — सभी 118 तत्वों के नाम और प्रतीक</h1>
      <p class="text-slate-300 mt-2">आधुनिक आवर्त सारणी के सभी 118 तत्वों के हिंदी नाम, प्रतीक, परमाणु क्रमांक और परमाणु द्रव्यमान का संपूर्ण विवरण।</p>
    </header>
    <main class="p-6">
      <div class="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-2">
        ${elementsData
          .map(
            (e) => `
          <a href="/hi/element/${e.symbol}" class="p-3 bg-slate-800/80 rounded border border-slate-700 hover:border-cyan-400 block text-center">
            <span class="text-xs text-slate-400">${e.number}</span>
            <div class="text-xl font-bold text-white">${e.symbol}</div>
            <div class="text-xs text-slate-300 truncate">${e.hindiName || e.name}</div>
            <div class="text-[10px] text-cyan-400">${e.atomicMass}</div>
          </a>
        `
          )
          .join('')}
      </div>
    </main>
  `,
});

// --- Chemical Reactions Page ---
renderPage({
  route: '/reactions',
  enEquivalent: '/reactions',
  hiEquivalent: '/hi/reactions',
  isHindi: false,
  title: 'Chemical Reactions Library (156+ Equations, Types & Mechanisms) | ChemNexus',
  description:
    'Search 156+ verified chemical reaction equations, reaction types (redox, acid-base, combination, decomposition, precipitation), balanced equations, and step-by-step mechanisms.',
  keywords: [
    'chemical reactions',
    'types of chemical reactions',
    'chemical reaction equations',
    'balanced chemical equations',
    'chemistry equations and solutions',
    'redox reactions explained',
  ],
  breadcrumbs: [
    { name: 'Home', path: '/' },
    { name: 'Reactions', path: '/reactions' },
  ],
  priority: '0.9',
  semanticBodyHtml: `
    <header class="p-6 bg-slate-900 border-b border-slate-800">
      <h1 class="text-3xl font-extrabold text-white">Chemical Reactions Library (156+ Balanced Equations)</h1>
      <p class="text-slate-300 mt-2">Browse chemical reaction equations categorized by mechanism, conditions, and stoichiometry.</p>
    </header>
    <main class="p-6">
      <div class="space-y-4">
        ${reactionsData
          .slice(0, 50)
          .map(
            (rx) => `
          <article class="p-4 bg-slate-800/70 border border-slate-700 rounded-lg">
            <a href="/reaction/${rx.id}" class="text-lg font-bold text-cyan-400 hover:underline">${escapeHtml(rx.title)}</a>
            <p class="text-sm font-mono text-slate-200 mt-1">${escapeHtml(rx.equation)}</p>
            <p class="text-xs text-slate-400 mt-1">Type: ${escapeHtml(rx.type)} | Reactants: ${escapeHtml(rx.reactants.join(', '))} | Products: ${escapeHtml(rx.products.join(', '))}</p>
          </article>
        `
          )
          .join('')}
      </div>
    </main>
  `,
});

renderPage({
  route: '/hi/reactions',
  enEquivalent: '/reactions',
  hiEquivalent: '/hi/reactions',
  isHindi: true,
  title: 'रासायनिक अभिक्रियाएँ और संतुलित समीकरण (Chemical Reactions in Hindi) | ChemNexus',
  description:
    '156 से अधिक रासायनिक अभिक्रियाएँ, संतुलित रासायनिक समीकरण, अभिक्रियाओं के प्रकार (संयोजन, अपघटन, विस्थापन, ऑक्सीकरण और अपचयन), क्रियाविधि और उदाहरण।',
  keywords: [
    'रासायनिक अभिक्रियाएँ',
    'रासायनिक अभिक्रियाओं के प्रकार',
    'रासायनिक समीकरण',
    'रासायनिक समीकरण संतुलित करना',
    'रासायनिक अभिक्रियाएँ उदाहरण सहित',
    'chemistry reactions in Hindi',
    'rasayanik abhikriya',
  ],
  breadcrumbs: [
    { name: 'गृह पृष्ठ', path: '/hi' },
    { name: 'रासायनिक अभिक्रियाएँ', path: '/hi/reactions' },
  ],
  priority: '0.9',
  semanticBodyHtml: `
    <header class="p-6 bg-slate-900 border-b border-slate-800">
      <h1 class="text-3xl font-extrabold text-white">रासायनिक अभिक्रियाएँ एवं संतुलित समीकरण (Chemical Reactions in Hindi)</h1>
      <p class="text-slate-300 mt-2">सभी प्रमुख रासायनिक समीकरणों की व्याख्या, अभिकारक, उत्पाद और क्रियाविधि हिंदी में।</p>
    </header>
    <main class="p-6">
      <div class="space-y-4">
        ${reactionsData
          .slice(0, 50)
          .map(
            (rx) => `
          <article class="p-4 bg-slate-800/70 border border-slate-700 rounded-lg">
            <a href="/hi/reaction/${rx.id}" class="text-lg font-bold text-cyan-400 hover:underline">${escapeHtml(rx.hindiTitle || rx.title)}</a>
            <p class="text-sm font-mono text-slate-200 mt-1">${escapeHtml(rx.equation)}</p>
            <p class="text-xs text-slate-400 mt-1">प्रकार: ${escapeHtml(rx.type)} | अभिकारक: ${escapeHtml(rx.reactants.join(', '))}</p>
          </article>
        `
          )
          .join('')}
      </div>
    </main>
  `,
});

// --- 10 Reaction Types Hub ---
renderPage({
  route: '/reaction-types',
  enEquivalent: '/reaction-types',
  hiEquivalent: '/hi/reaction-types',
  isHindi: false,
  title: 'Types of Chemical Reactions — Definitions, Equations & Examples | ChemNexus',
  description:
    'Learn the 10 fundamental types of chemical reactions: combination, decomposition, displacement, double displacement, neutralization, precipitation, combustion, and redox reactions.',
  keywords: [
    'types of chemical reactions',
    'combination reactions',
    'decomposition reactions',
    'displacement reactions',
    'double displacement reactions',
    'neutralization reactions',
    'precipitation reactions',
    'combustion reactions',
    'redox reactions explained',
    'acid base reactions',
  ],
  breadcrumbs: [
    { name: 'Home', path: '/' },
    { name: 'Reaction Types', path: '/reaction-types' },
  ],
  priority: '0.85',
  semanticBodyHtml: `
    <header class="p-6 bg-slate-900 border-b border-slate-800">
      <h1 class="text-3xl font-extrabold text-white">10 Major Types of Chemical Reactions</h1>
      <p class="text-slate-300 mt-2">Master chemical reaction classification with balanced equations, mechanisms, and real-world examples.</p>
    </header>
    <main class="p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
      ${reactionTypesData
        .map(
          (t) => `
        <div class="p-5 bg-slate-800 rounded-xl border border-slate-700">
          <a href="/reaction-types/${t.id}" class="text-xl font-bold text-cyan-400 hover:underline">${escapeHtml(t.title)}</a>
          <p class="text-sm font-mono text-cyan-300 mt-1">General: ${escapeHtml(t.generalFormula)}</p>
          <p class="text-sm text-slate-300 mt-2">${escapeHtml(t.summary)}</p>
          <p class="text-xs font-mono text-slate-400 mt-2">Example: ${escapeHtml(t.examples?.[0]?.equation || '')}</p>
        </div>
      `
        )
        .join('')}
    </main>
  `,
});

renderPage({
  route: '/hi/reaction-types',
  enEquivalent: '/reaction-types',
  hiEquivalent: '/hi/reaction-types',
  isHindi: true,
  title: 'रासायनिक अभिक्रियाओं के प्रकार (Types of Chemical Reactions in Hindi) | ChemNexus',
  description:
    'रासायनिक अभिक्रियाओं के 10 मुख्य प्रकार: संयोजन अभिक्रिया, अपघटन अभिक्रिया, विस्थापन अभिक्रिया, द्विविस्थापन अभिक्रिया, उदासीनीकरण अभिक्रिया, दहन और ऑक्सीकरण-अपचयन (Redox)।',
  keywords: [
    'रासायनिक अभिक्रियाओं के प्रकार',
    'संयोजन अभिक्रिया',
    'अपघटन अभिक्रिया',
    'विस्थापन अभिक्रिया',
    'द्विविस्थापन अभिक्रिया',
    'दहन अभिक्रिया',
    'उदासीनीकरण अभिक्रिया',
    'ऑक्सीकरण और अपचयन',
    'अम्ल और क्षार की अभिक्रिया',
  ],
  breadcrumbs: [
    { name: 'गृह पृष्ठ', path: '/hi' },
    { name: 'अभिक्रिया प्रकार', path: '/hi/reaction-types' },
  ],
  priority: '0.85',
  semanticBodyHtml: `
    <header class="p-6 bg-slate-900 border-b border-slate-800">
      <h1 class="text-3xl font-extrabold text-white">रासायनिक अभिक्रियाओं के 10 मुख्य प्रकार (हिंदी में)</h1>
      <p class="text-slate-300 mt-2">परिभाषा, सामान्य सूत्र, संतुलित रासायनिक समीकरण और उदाहरण सहित संपूर्ण अध्ययन।</p>
    </header>
    <main class="p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
      ${reactionTypesData
        .map(
          (t) => `
        <div class="p-5 bg-slate-800 rounded-xl border border-slate-700">
          <a href="/hi/reaction-types/${t.id}" class="text-xl font-bold text-cyan-400 hover:underline">${escapeHtml(t.hindiTitle)} (${escapeHtml(t.title)})</a>
          <p class="text-sm font-mono text-cyan-300 mt-1">सामान्य सूत्र: ${escapeHtml(t.generalFormula)}</p>
          <p class="text-sm text-slate-300 mt-2">${escapeHtml(t.hindiSummary)}</p>
          <p class="text-xs font-mono text-slate-400 mt-2">उदाहरण: ${escapeHtml(t.examples?.[0]?.equation || '')}</p>
        </div>
      `
        )
        .join('')}
    </main>
  `,
});

// --- Balancing Equations Guide ---
renderPage({
  route: '/balancing-equations',
  enEquivalent: '/balancing-equations',
  hiEquivalent: '/hi/balancing-equations',
  isHindi: false,
  title: 'How to Balance Chemical Equations — Step-by-Step Guide with Worked Examples | ChemNexus',
  description:
    'Master balancing chemical equations using the Law of Conservation of Mass. Step-by-step rules, worked atom count tally tables, and practice problems.',
  keywords: [
    'balanced chemical equations',
    'chemical reaction equations',
    'chemistry equations and solutions',
    'how to balance chemical equations',
    'balancing equations practice',
  ],
  breadcrumbs: [
    { name: 'Home', path: '/' },
    { name: 'Balancing Equations', path: '/balancing-equations' },
  ],
  priority: '0.85',
  semanticBodyHtml: `
    <header class="p-6 bg-slate-900 border-b border-slate-800">
      <h1 class="text-3xl font-extrabold text-white">Balancing Chemical Equations Step-by-Step</h1>
      <p class="text-slate-300 mt-2">Learn the 5-step systematic inspection and algebraic method with worked atom count tables.</p>
    </header>
    <main class="p-6 space-y-6">
      <section class="bg-slate-800/80 p-5 rounded-xl border border-slate-700">
        <h2 class="text-xl font-bold text-white">Law of Conservation of Mass</h2>
        <p class="text-sm text-slate-300 mt-2">In an isolated system, matter cannot be created or destroyed. The number of atoms of each element must remain equal on both reactant and product sides.</p>
      </section>
      <section class="space-y-4">
        <h2 class="text-xl font-bold text-white">Worked Balancing Examples</h2>
        ${workedBalancingExamples
          .map(
            (ex) => `
          <div class="p-4 bg-slate-800 rounded-lg">
            <h3 class="font-bold text-cyan-400">${escapeHtml(ex.title)}</h3>
            <p class="text-xs font-mono text-slate-400">Unbalanced: ${escapeHtml(ex.unbalanced)}</p>
            <p class="text-sm font-mono text-emerald-400 font-bold mt-1">Balanced: ${escapeHtml(ex.balanced)}</p>
            <p class="text-xs text-slate-300 mt-2">${escapeHtml(ex.explanation)}</p>
          </div>
        `
          )
          .join('')}
      </section>
    </main>
  `,
});

renderPage({
  route: '/hi/balancing-equations',
  enEquivalent: '/balancing-equations',
  hiEquivalent: '/hi/balancing-equations',
  isHindi: true,
  title: 'रासायनिक समीकरण संतुलित करना — चरणबद्ध नियम और हल सहित उदाहरण | ChemNexus',
  description:
    'रासायनिक समीकरण संतुलित करने की सबसे आसान विधि: द्रव्यमान संरक्षण का नियम, 5 चरणबद्ध नियम, परमाणु गणना तालिका और हल सहित अभ्यास प्रश्न।',
  keywords: [
    'रासायनिक समीकरण संतुलित करना',
    'रासायनिक समीकरण',
    'द्रव्यमान संरक्षण का नियम',
    'रासायनिक अभिक्रियाओं के प्रकार',
  ],
  breadcrumbs: [
    { name: 'गृह पृष्ठ', path: '/hi' },
    { name: 'समीकरण संतुलन', path: '/hi/balancing-equations' },
  ],
  priority: '0.85',
  semanticBodyHtml: `
    <header class="p-6 bg-slate-900 border-b border-slate-800">
      <h1 class="text-3xl font-extrabold text-white">रासायनिक समीकरण संतुलित करना (Step-by-Step Guide)</h1>
      <p class="text-slate-300 mt-2">द्रव्यमान संरक्षण का नियम, 5-चरणीय विधि, और हल किए गए उदाहरणों सहित संपूर्ण मार्गदर्शिका।</p>
    </header>
    <main class="p-6 space-y-6">
      <section class="bg-slate-800/80 p-5 rounded-xl border border-slate-700">
        <h2 class="text-xl font-bold text-white">द्रव्यमान संरक्षण का नियम (Law of Conservation of Mass)</h2>
        <p class="text-sm text-slate-300 mt-2">किसी भी रासायनिक अभिक्रिया में द्रव्यमान का न तो निर्माण होता है और न ही विनाश। इसलिए अभिकारकों के परमाणुओं की संख्या उत्पादों के परमाणुओं की संख्या के ठीक बराबर होनी चाहिए।</p>
      </section>
    </main>
  `,
});

// --- Chemical Formulas Directory ---
renderPage({
  route: '/chemical-formulas',
  enEquivalent: '/chemical-formulas',
  hiEquivalent: '/hi/chemical-formulas',
  isHindi: false,
  title: 'Chemical Formulas & Names Directory (100+ Compounds & Valency Rules) | ChemNexus',
  description:
    'Search 100+ chemical formulas, IUPAC names, common names, molar masses, and criss-cross valency formula writing rules for chemistry students.',
  keywords: [
    'chemistry formulas',
    'chemical formulas and names',
    'chemical formula directory',
    'criss cross valency method',
    'chemical compound names',
  ],
  breadcrumbs: [
    { name: 'Home', path: '/' },
    { name: 'Chemical Formulas', path: '/chemical-formulas' },
  ],
  priority: '0.85',
  semanticBodyHtml: `
    <header class="p-6 bg-slate-900 border-b border-slate-800">
      <h1 class="text-3xl font-extrabold text-white">Chemical Formulas and Scientific Names Directory</h1>
      <p class="text-slate-300 mt-2">Comprehensive list of chemical formulas, IUPAC nomenclature, and criss-cross valency formula derivation.</p>
    </header>
    <main class="p-6">
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
        ${chemicalCompoundsList
          .slice(0, 30)
          .map(
            (c) => `
          <div class="p-3 bg-slate-800 rounded border border-slate-700">
            <div class="text-lg font-mono font-bold text-cyan-400">${escapeHtml(c.formula)}</div>
            <div class="text-sm font-semibold text-white">${escapeHtml(c.iupacName)}</div>
            <div class="text-xs text-slate-400">Common: ${escapeHtml(c.commonName)} | Mass: ${escapeHtml(c.molarMass)}</div>
          </div>
        `
          )
          .join('')}
      </div>
    </main>
  `,
});

renderPage({
  route: '/hi/chemical-formulas',
  enEquivalent: '/chemical-formulas',
  hiEquivalent: '/hi/chemical-formulas',
  isHindi: true,
  title: 'रासायनिक सूत्र और नाम (Chemical Formulas in Hindi) — 100+ यौगिक एवं नियम | ChemNexus',
  description:
    'प्रमुख रासायनिक सूत्र और उनके वैज्ञानिक नाम: जल, नमक, बेकिंग सोडा, सल्फ्यूरिक अम्ल सहित 100+ यौगिकों के रासायनिक सूत्र और क्रिस-क्रॉस संयोजकता विधि।',
  keywords: [
    'रासायनिक सूत्र',
    'रासायनिक सूत्र और नाम',
    'तत्वों की संयोजकता',
    'chemical formula in Hindi',
  ],
  breadcrumbs: [
    { name: 'गृह पृष्ठ', path: '/hi' },
    { name: 'रासायनिक सूत्र', path: '/hi/chemical-formulas' },
  ],
  priority: '0.85',
  semanticBodyHtml: `
    <header class="p-6 bg-slate-900 border-b border-slate-800">
      <h1 class="text-3xl font-extrabold text-white">रासायनिक सूत्र और उनके नाम (Chemical Formulas in Hindi)</h1>
      <p class="text-slate-300 mt-2">दैनिक जीवन एवं परीक्षा के लिए 100+ महत्वपूर्ण रासायनिक यौगिकों के सूत्र, सामान्य नाम और अणुभार।</p>
    </header>
  `,
});

// --- Periodic Trends Page ---
renderPage({
  route: '/periodic-trends',
  enEquivalent: '/periodic-trends',
  hiEquivalent: '/hi/periodic-trends',
  isHindi: false,
  title: 'Periodic Table Trends — Atomic Radius, Ionization Energy, Valency & Configuration | ChemNexus',
  description:
    'Comprehensive guide to periodic table trends across periods and down groups: atomic radius, ionization energy, electronegativity, electron affinity, valency, and electronic configurations.',
  keywords: [
    'periodic table trends',
    'atomic number and atomic mass',
    'electronic configuration of elements',
    'valency of elements',
    'ionization energy trend',
    'electronegativity trend',
  ],
  breadcrumbs: [
    { name: 'Home', path: '/' },
    { name: 'Periodic Trends', path: '/periodic-trends' },
  ],
  priority: '0.85',
  semanticBodyHtml: `
    <header class="p-6 bg-slate-900 border-b border-slate-800">
      <h1 class="text-3xl font-extrabold text-white">Periodic Table Trends Explained</h1>
      <p class="text-slate-300 mt-2">Understand variation of physical and chemical properties across periods and groups.</p>
    </header>
    <main class="p-6 space-y-4">
      <section class="bg-slate-800 p-4 rounded-lg">
        <h2 class="text-lg font-bold text-white">Atomic Radius Trend</h2>
        <p class="text-sm text-slate-300">Decreases across a period due to increased effective nuclear charge; increases down a group due to addition of electron shells.</p>
      </section>
      <section class="bg-slate-800 p-4 rounded-lg">
        <h2 class="text-lg font-bold text-white">Ionization Energy Trend</h2>
        <p class="text-sm text-slate-300">Increases across a period as atomic size decreases; decreases down a group due to increased electron shielding.</p>
      </section>
      <section class="bg-slate-800 p-4 rounded-lg">
        <h2 class="text-lg font-bold text-white">Electronegativity Trend</h2>
        <p class="text-sm text-slate-300">Increases across a period (highest in Fluorine = 3.98); decreases down a group.</p>
      </section>
    </main>
  `,
});

renderPage({
  route: '/hi/periodic-trends',
  enEquivalent: '/periodic-trends',
  hiEquivalent: '/hi/periodic-trends',
  isHindi: true,
  title: 'आवर्त सारणी की प्रवृत्तियाँ (Periodic Table Trends in Hindi) — परमाणु त्रिज्या, आयनन ऊर्जा, संयोजकता | ChemNexus',
  description:
    'आवर्त सारणी की आवर्ती प्रवृत्तियाँ: परमाणु त्रिज्या, आयनन ऊर्जा, विद्युत ऋणात्मकता, इलेक्ट्रॉन लब्धि एन्थैल्पी, तत्वों की संयोजकता और इलेक्ट्रॉनिक विन्यास के नियम।',
  keywords: [
    'आवर्त सारणी',
    'परमाणु क्रमांक',
    'परमाणु द्रव्यमान',
    'तत्वों की संयोजकता',
    'इलेक्ट्रॉनिक विन्यास',
    'तत्वों के गुण हिंदी में',
    'avart sarani',
  ],
  breadcrumbs: [
    { name: 'गृह पृष्ठ', path: '/hi' },
    { name: 'आवर्त सारणी प्रवृत्तियाँ', path: '/hi/periodic-trends' },
  ],
  priority: '0.85',
  semanticBodyHtml: `
    <header class="p-6 bg-slate-900 border-b border-slate-800">
      <h1 class="text-3xl font-extrabold text-white">आवर्त सारणी की प्रवृत्तियाँ (Periodic Trends in Hindi)</h1>
      <p class="text-slate-300 mt-2">आवर्त में बाएं से दाएं और वर्ग में ऊपर से नीचे गुणों में परिवर्तन के वैज्ञानिक नियम।</p>
    </header>
  `,
});

// --- Chemistry Notes & Q&A Page ---
renderPage({
  route: '/chemistry-notes',
  enEquivalent: '/chemistry-notes',
  hiEquivalent: '/hi/chemistry-notes',
  isHindi: false,
  title: 'Chemistry Revision Notes & High-Yield Questions and Answers | ChemNexus',
  description:
    'Comprehensive chemistry revision notes, core concepts explained, NCERT high-yield topics, and verified chemistry questions and answers for high school and college exams.',
  keywords: [
    'chemistry notes',
    'chemistry concepts explained',
    'chemistry questions and answers',
    'chemistry learning website',
    'chemistry ke notes',
    'chemistry questions in Hindi',
  ],
  breadcrumbs: [
    { name: 'Home', path: '/' },
    { name: 'Chemistry Notes', path: '/chemistry-notes' },
  ],
  priority: '0.85',
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: chemistryFaqQuestions.map((faq) => ({
        '@type': 'Question',
        name: faq.q,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.a,
        },
      })),
    },
  ],
  semanticBodyHtml: `
    <header class="p-6 bg-slate-900 border-b border-slate-800">
      <h1 class="text-3xl font-extrabold text-white">Chemistry Revision Notes & Important Questions</h1>
      <p class="text-slate-300 mt-2">Concise, scientifically verified study notes and frequently asked chemistry questions.</p>
    </header>
    <main class="p-6 space-y-6">
      <section class="space-y-4">
        <h2 class="text-xl font-bold text-white">Frequently Asked Chemistry Questions & Answers</h2>
        ${chemistryFaqQuestions
          .map(
            (faq) => `
          <div class="p-4 bg-slate-800 rounded-lg">
            <h3 class="text-base font-bold text-cyan-400">${escapeHtml(faq.q)}</h3>
            <p class="text-sm text-slate-300 mt-2">${escapeHtml(faq.a)}</p>
          </div>
        `
          )
          .join('')}
      </section>
    </main>
  `,
});

renderPage({
  route: '/hi/chemistry-notes',
  enEquivalent: '/chemistry-notes',
  hiEquivalent: '/hi/chemistry-notes',
  isHindi: true,
  title: 'रसायन विज्ञान के नोट्स और महत्वपूर्ण प्रश्नोत्तर (Chemistry Notes in Hindi) | ChemNexus',
  description:
    'कक्षा 10, 11 व 12 के लिए रसायन विज्ञान के संक्षिप्त नोट्स, महत्वपूर्ण सूत्र, अभिक्रियाओं के नियम और परीक्षा में बार-बार पूछे जाने वाले प्रश्न उत्तर सहित।',
  keywords: [
    'रसायन विज्ञान के नोट्स',
    'रसायन विज्ञान के महत्वपूर्ण प्रश्न',
    'chemistry ke notes',
    'chemistry in Hindi',
    'chemistry questions in Hindi',
  ],
  breadcrumbs: [
    { name: 'गृह पृष्ठ', path: '/hi' },
    { name: 'रसायन विज्ञान नोट्स', path: '/hi/chemistry-notes' },
  ],
  priority: '0.85',
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: chemistryFaqQuestions.map((faq) => ({
        '@type': 'Question',
        name: faq.qHi || faq.q,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.aHi || faq.a,
        },
      })),
    },
  ],
  semanticBodyHtml: `
    <header class="p-6 bg-slate-900 border-b border-slate-800">
      <h1 class="text-3xl font-extrabold text-white">रसायन विज्ञान के नोट्स और महत्वपूर्ण प्रश्नोत्तर (हिंदी में)</h1>
      <p class="text-slate-300 mt-2">बोर्ड परीक्षा एवं प्रतियोगी परीक्षाओं (NEET / JEE) के लिए उच्च-अंकदायी रसायन विज्ञान नोट्स।</p>
    </header>
    <main class="p-6 space-y-6">
      <section class="space-y-4">
        <h2 class="text-xl font-bold text-white">महत्वपूर्ण प्रश्न और उत्तर (FAQ)</h2>
        ${chemistryFaqQuestions
          .map(
            (faq) => `
          <div class="p-4 bg-slate-800 rounded-lg">
            <h3 class="text-base font-bold text-cyan-400">${escapeHtml(faq.qHi || faq.q)}</h3>
            <p class="text-sm text-slate-300 mt-2">${escapeHtml(faq.aHi || faq.a)}</p>
          </div>
        `
          )
          .join('')}
      </section>
    </main>
  `,
});

// --- Quizzes Page ---
renderPage({
  route: '/quizzes',
  enEquivalent: '/quizzes',
  hiEquivalent: '/hi/quizzes',
  isHindi: false,
  title: 'Chemistry Practice Quizzes & Self-Assessment Tests | ChemNexus',
  description:
    'Test your knowledge with interactive chemistry quizzes on the periodic table, chemical reactions, balancing equations, bonding, and stoichiometry.',
  keywords: [
    'chemistry practice quiz',
    'chemistry questions and answers',
    'periodic table quiz',
    'chemical reactions quiz',
  ],
  breadcrumbs: [
    { name: 'Home', path: '/' },
    { name: 'Quizzes', path: '/quizzes' },
  ],
  priority: '0.7',
  semanticBodyHtml: `
    <header class="p-6 bg-slate-900 border-b border-slate-800">
      <h1 class="text-3xl font-extrabold text-white">Chemistry Practice Quizzes</h1>
      <p class="text-slate-300 mt-2">Test your understanding with periodic table and reaction quizzes.</p>
    </header>
  `,
});

renderPage({
  route: '/hi/quizzes',
  enEquivalent: '/quizzes',
  hiEquivalent: '/hi/quizzes',
  isHindi: true,
  title: 'रसायन विज्ञान अभ्यास क्विज और टेस्ट (Chemistry Practice Quiz in Hindi) | ChemNexus',
  description:
    'आवर्त सारणी, रासायनिक अभिक्रियाओं और सूत्रों पर आधारित इंटरएक्टिव क्विज से अपनी तैयारी की जांच करें।',
  keywords: [
    'रसायन विज्ञान के महत्वपूर्ण प्रश्न',
    'chemistry practice quiz',
    'chemistry questions in Hindi',
  ],
  breadcrumbs: [
    { name: 'गृह पृष्ठ', path: '/hi' },
    { name: 'क्विज', path: '/hi/quizzes' },
  ],
  priority: '0.7',
  semanticBodyHtml: `
    <header class="p-6 bg-slate-900 border-b border-slate-800">
      <h1 class="text-3xl font-extrabold text-white">रसायन विज्ञान अभ्यास क्विज (हिंदी में)</h1>
      <p class="text-slate-300 mt-2">आवर्त सारणी और रासायनिक अभिक्रियाओं पर अपनी पकड़ मजबूत करें।</p>
    </header>
  `,
});

// --- About Page ---
renderPage({
  route: '/about',
  enEquivalent: '/about',
  hiEquivalent: '/hi/about',
  isHindi: false,
  title: 'About ChemNexus — Interactive Chemistry Learning Platform & Scientific Sources',
  description:
    'Learn about ChemNexus educational mission, IUPAC and NIST verified scientific sources, and our comprehensive bilingual chemistry learning platform.',
  keywords: ['about ChemNexus', 'chemistry learning website', 'IUPAC chemistry sources'],
  breadcrumbs: [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
  ],
  priority: '0.6',
  semanticBodyHtml: `
    <header class="p-6 bg-slate-900 border-b border-slate-800">
      <h1 class="text-3xl font-extrabold text-white">About ChemNexus</h1>
      <p class="text-slate-300 mt-2">Dedicated to making chemistry intuitive, comprehensive, and accessible to students worldwide.</p>
    </header>
  `,
});

renderPage({
  route: '/hi/about',
  enEquivalent: '/about',
  hiEquivalent: '/hi/about',
  isHindi: true,
  title: 'ChemNexus के बारे में — रसायन विज्ञान शिक्षा और वैज्ञानिक संदर्भ | ChemNexus',
  description:
    'ChemNexus के शैक्षिक मिशन, IUPAC वैज्ञानिक स्रोतों और हिंदी-अंग्रेजी द्विभाषी रसायन विज्ञान अध्ययन मंच के बारे में जानें।',
  keywords: ['about ChemNexus', 'chemistry in Hindi', 'bilingual chemistry India'],
  breadcrumbs: [
    { name: 'गृह पृष्ठ', path: '/hi' },
    { name: 'हमारे बारे में', path: '/hi/about' },
  ],
  priority: '0.6',
  semanticBodyHtml: `
    <header class="p-6 bg-slate-900 border-b border-slate-800">
      <h1 class="text-3xl font-extrabold text-white">ChemNexus के बारे में</h1>
      <p class="text-slate-300 mt-2">हिंदी एवं अंग्रेजी माध्यम के विद्यार्थियों के लिए वैज्ञानिक रूप से प्रमाणित रसायन विज्ञान मंच।</p>
    </header>
  `,
});

// ==========================================
// 2. ALL 118 ELEMENTS (EN & HI)
// ==========================================
console.log(`Pre-rendering all ${elementsData.length} elements in English & Hindi...`);

for (const elem of elementsData) {
  const symbol = elem.symbol;
  const enRoute = `/element/${symbol}`;
  const hiRoute = `/hi/element/${symbol}`;

  const hindiName = elem.hindiName || elem.name;
  const hindiSummary = elem.hindiSummary || elem.summary;
  const valencyStr = elem.valency ? String(elem.valency) : 'Variable';
  const atomicMassStr = elem.atomicMass ? String(elem.atomicMass) : 'N/A';
  const electronConfigStr = elem.electronConfiguration || 'N/A';
  const phaseStr = elem.state || elem.phase || 'N/A';

  // Specific FAQs for this element
  const enFaqs = [
    {
      q: `What is the atomic number and atomic mass of ${elem.name}?`,
      a: `${elem.name} (${elem.symbol}) has an atomic number of ${elem.number} and a standard atomic mass of ${atomicMassStr} u according to IUPAC standards.`,
    },
    {
      q: `What is the electron configuration and valency of ${elem.name} (${elem.symbol})?`,
      a: `The electron configuration of ${elem.name} is ${electronConfigStr}. Its common valency is ${valencyStr}.`,
    },
    {
      q: `What group, period, and block does ${elem.name} belong to?`,
      a: `${elem.name} is located in Period ${elem.period}, Group ${elem.group || 'N/A'}, and belongs to the ${elem.block}-block of the periodic table. Its classification is ${elem.category}.`,
    },
  ];

  const hiFaqs = [
    {
      q: `${hindiName} का परमाणु क्रमांक और परमाणु द्रव्यमान क्या है?`,
      a: `${hindiName} (${elem.symbol}) का परमाणु क्रमांक ${elem.number} तथा IUPAC द्वारा निर्धारित मानक परमाणु द्रव्यमान ${atomicMassStr} u है।`,
    },
    {
      q: `${hindiName} (${elem.symbol}) का इलेक्ट्रॉनिक विन्यास और संयोजकता क्या है?`,
      a: `${hindiName} का इलेक्ट्रॉनिक विन्यास ${electronConfigStr} है और इसकी मुख्य संयोजकता ${valencyStr} है।`,
    },
    {
      q: `${hindiName} आवर्त सारणी के किस वर्ग और आवर्त में स्थित है?`,
      a: `${hindiName} आवर्त ${elem.period}, वर्ग ${elem.group || 'लागू नहीं'} और ${elem.block}-ब्लॉक में स्थित ${elem.category} श्रेणी का तत्व है।`,
    },
  ];

  // Specific high-value keyword targets for prominent elements
  const specificElementKeywords = [];
  if (elem.name.toLowerCase() === 'oxygen') {
    specificElementKeywords.push('oxygen element properties', 'oxygen gas', 'atomic number of oxygen');
  } else if (elem.name.toLowerCase() === 'carbon') {
    specificElementKeywords.push('carbon element properties', 'valency of carbon', 'allotropes of carbon');
  } else if (elem.name.toLowerCase() === 'hydrogen') {
    specificElementKeywords.push('hydrogen element properties', 'isotopes of hydrogen', 'atomic number 1');
  } else if (elem.name.toLowerCase() === 'sodium') {
    specificElementKeywords.push('sodium element properties', 'valency of sodium', 'sodium reactions');
  }

  // --- English Element Page ---
  renderPage({
    route: enRoute,
    enEquivalent: enRoute,
    hiEquivalent: hiRoute,
    isHindi: false,
    title: `${elem.name} (${elem.symbol}) — Atomic Number ${elem.number}, Mass, Valency & Properties | ChemNexus`,
    description: `Complete guide for ${elem.name} (${elem.symbol}): atomic number ${elem.number}, atomic mass ${atomicMassStr} u, electron configuration ${electronConfigStr}, valency ${valencyStr}, category ${elem.category}, and key chemical properties.`,
    keywords: [
      `${elem.name.toLowerCase()} element properties`,
      `${elem.name.toLowerCase()} atomic number`,
      `${elem.name.toLowerCase()} valency`,
      `${elem.name.toLowerCase()} electron configuration`,
      'element properties',
      'atomic number and atomic mass',
      ...specificElementKeywords,
    ],
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Periodic Table', path: '/periodic-table' },
      { name: `${elem.name} (${elem.symbol})`, path: enRoute },
    ],
    priority: '0.8',
    schemas: [
      {
        '@context': 'https://schema.org',
        '@type': 'DefinedTerm',
        name: elem.name,
        termCode: elem.symbol,
        description: elem.summary,
        inDefinedTermSet: 'https://chemnexus.vercel.app/periodic-table',
      },
      {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        headline: `${elem.name} (${elem.symbol}) Element Properties & Atomic Data`,
        description: elem.summary,
        url: `${SITE_URL}${enRoute}`,
      },
      {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: enFaqs.map((f) => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: { '@type': 'Answer', text: f.a },
        })),
      },
    ],
    semanticBodyHtml: `
      <article class="p-6 max-w-4xl mx-auto space-y-6">
        <header class="border-b border-slate-800 pb-4">
          <div class="text-xs uppercase text-cyan-400 font-bold">Element ${elem.number} • ${elem.category}</div>
          <h1 class="text-3xl sm:text-4xl font-extrabold text-white mt-1">${escapeHtml(elem.name)} (${escapeHtml(elem.symbol)})</h1>
          <p class="text-slate-300 mt-2 leading-relaxed">${escapeHtml(elem.summary)}</p>
        </header>

        <section class="bg-slate-800/80 rounded-xl p-5 border border-slate-700">
          <h2 class="text-xl font-bold text-white mb-4">Fundamental Properties</h2>
          <dl class="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm">
            <div><dt class="text-slate-400">Atomic Number:</dt><dd class="text-cyan-400 font-bold">${elem.number}</dd></div>
            <div><dt class="text-slate-400">Chemical Symbol:</dt><dd class="text-white font-bold">${elem.symbol}</dd></div>
            <div><dt class="text-slate-400">Atomic Mass:</dt><dd class="text-white font-bold">${atomicMassStr} u</dd></div>
            <div><dt class="text-slate-400">Valency:</dt><dd class="text-emerald-400 font-bold">${valencyStr}</dd></div>
            <div><dt class="text-slate-400">Period / Group:</dt><dd class="text-white">Period ${elem.period}, Group ${elem.group || 'N/A'}</dd></div>
            <div><dt class="text-slate-400">Block:</dt><dd class="text-white">${elem.block}-block</dd></div>
            <div><dt class="text-slate-400">Electron Configuration:</dt><dd class="text-cyan-300 font-mono">${escapeHtml(electronConfigStr)}</dd></div>
            <div><dt class="text-slate-400">Standard Phase:</dt><dd class="text-white">${phaseStr}</dd></div>
            <div><dt class="text-slate-400">Electronegativity:</dt><dd class="text-white">${elem.electronegativity || 'N/A'}</dd></div>
          </dl>
        </section>

        <section class="space-y-3">
          <h2 class="text-xl font-bold text-white">Frequently Asked Questions</h2>
          ${enFaqs
            .map(
              (f) => `
            <div class="p-4 bg-slate-800 rounded-lg">
              <h3 class="font-bold text-cyan-400 text-sm">${escapeHtml(f.q)}</h3>
              <p class="text-xs text-slate-300 mt-1">${escapeHtml(f.a)}</p>
            </div>
          `
            )
            .join('')}
        </section>

        <footer class="text-xs text-slate-500 pt-4 border-t border-slate-800">
          References: IUPAC Standard Atomic Weights, NIST Atomic Spectra Database, CRC Handbook of Chemistry and Physics.
        </footer>
      </article>
    `,
  });

  // --- Hindi Element Page ---
  renderPage({
    route: hiRoute,
    enEquivalent: enRoute,
    hiEquivalent: hiRoute,
    isHindi: true,
    title: `${hindiName} (${elem.symbol}) — परमाणु क्रमांक ${elem.number}, द्रव्यमान, संयोजकता और गुण | ChemNexus`,
    description: `${hindiName} (${elem.symbol}) की संपूर्ण जानकारी: परमाणु क्रमांक ${elem.number}, परमाणु भार ${atomicMassStr} u, इलेक्ट्रॉनिक विन्यास ${electronConfigStr}, संयोजकता ${valencyStr}, भौतिक व रासायनिक गुणधर्म।`,
    keywords: [
      `${hindiName} के गुण`,
      `${hindiName} परमाणु क्रमांक`,
      'तत्वों के गुण हिंदी में',
      'तत्वों की संयोजकता',
      'इलेक्ट्रॉनिक विन्यास',
      'परमाणु क्रमांक',
      'परमाणु द्रव्यमान',
      'elements name in Hindi and English',
    ],
    breadcrumbs: [
      { name: 'गृह पृष्ठ', path: '/hi' },
      { name: 'आवर्त सारणी', path: '/hi/periodic-table' },
      { name: `${hindiName} (${elem.symbol})`, path: hiRoute },
    ],
    priority: '0.8',
    schemas: [
      {
        '@context': 'https://schema.org',
        '@type': 'DefinedTerm',
        name: `${hindiName} (${elem.name})`,
        termCode: elem.symbol,
        description: hindiSummary,
        inDefinedTermSet: 'https://chemnexus.vercel.app/hi/periodic-table',
      },
      {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        headline: `${hindiName} (${elem.symbol}) - परमाणु क्रमांक एवं रासायनिक गुणधर्म`,
        description: hindiSummary,
        url: `${SITE_URL}${hiRoute}`,
      },
      {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: hiFaqs.map((f) => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: { '@type': 'Answer', text: f.a },
        })),
      },
    ],
    semanticBodyHtml: `
      <article class="p-6 max-w-4xl mx-auto space-y-6">
        <header class="border-b border-slate-800 pb-4">
          <div class="text-xs uppercase text-cyan-400 font-bold">तत्व क्रमांक ${elem.number} • ${elem.category}</div>
          <h1 class="text-3xl sm:text-4xl font-extrabold text-white mt-1">${escapeHtml(hindiName)} (${escapeHtml(elem.name)} - ${escapeHtml(elem.symbol)})</h1>
          <p class="text-slate-300 mt-2 leading-relaxed">${escapeHtml(hindiSummary)}</p>
        </header>

        <section class="bg-slate-800/80 rounded-xl p-5 border border-slate-700">
          <h2 class="text-xl font-bold text-white mb-4">प्रमुख भौतिक एवं रासायनिक गुणधर्म</h2>
          <dl class="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm">
            <div><dt class="text-slate-400">परमाणु क्रमांक:</dt><dd class="text-cyan-400 font-bold">${elem.number}</dd></div>
            <div><dt class="text-slate-400">रासायनिक प्रतीक:</dt><dd class="text-white font-bold">${elem.symbol}</dd></div>
            <div><dt class="text-slate-400">परमाणु द्रव्यमान:</dt><dd class="text-white font-bold">${atomicMassStr} u</dd></div>
            <div><dt class="text-slate-400">संयोजकता:</dt><dd class="text-emerald-400 font-bold">${valencyStr}</dd></div>
            <div><dt class="text-slate-400">आवर्त / वर्ग:</dt><dd class="text-white">आवर्त ${elem.period}, वर्ग ${elem.group || 'लागू नहीं'}</dd></div>
            <div><dt class="text-slate-400">ब्लॉक:</dt><dd class="text-white">${elem.block}-ब्लॉक</dd></div>
            <div><dt class="text-slate-400">इलेक्ट्रॉनिक विन्यास:</dt><dd class="text-cyan-300 font-mono">${escapeHtml(electronConfigStr)}</dd></div>
            <div><dt class="text-slate-400">अवस्था (STP):</dt><dd class="text-white">${phaseStr}</dd></div>
          </dl>
        </section>

        <section class="space-y-3">
          <h2 class="text-xl font-bold text-white">परीक्षा हेतु महत्वपूर्ण प्रश्नोत्तर (FAQ)</h2>
          ${hiFaqs
            .map(
              (f) => `
            <div class="p-4 bg-slate-800 rounded-lg">
              <h3 class="font-bold text-cyan-400 text-sm">${escapeHtml(f.q)}</h3>
              <p class="text-xs text-slate-300 mt-1">${escapeHtml(f.a)}</p>
            </div>
          `
            )
            .join('')}
        </section>

        <footer class="text-xs text-slate-500 pt-4 border-t border-slate-800">
          वैज्ञानिक संदर्भ: IUPAC मानक परमाणु भार आयोग, NCERT रसायन विज्ञान कक्षा 11 एवं 12।
        </footer>
      </article>
    `,
  });
}

// ==========================================
// 3. 10 INDIVIDUAL REACTION TYPES (EN & HI)
// ==========================================
console.log(`Pre-rendering all ${reactionTypesData.length} reaction types...`);

for (const type of reactionTypesData) {
  const enRoute = `/reaction-types/${type.id}`;
  const hiRoute = `/hi/reaction-types/${type.id}`;

  const typeFaqsEn = [
    {
      q: `What is a ${type.title} in chemistry?`,
      a: `${type.summary} Its general formula is ${type.generalFormula}.`,
    },
    {
      q: `What is an example equation of a ${type.title}?`,
      a: `A classic example is: ${type.examples?.[0]?.equation || ''} (${type.examples?.[0]?.title || ''}).`,
    },
  ];

  const typeFaqsHi = [
    {
      q: `${type.hindiTitle} किसे कहते हैं?`,
      a: `${type.hindiSummary} इसका सामान्य सूत्र ${type.generalFormula} है।`,
    },
    {
      q: `${type.hindiTitle} का एक संतुलित समीकरण उदाहरण दीजिए?`,
      a: `प्रमुख उदाहरण: ${type.examples?.[0]?.equation || ''} (${type.examples?.[0]?.hindiTitle || type.examples?.[0]?.title || ''})।`,
    },
  ];

  // English Reaction Type Page
  renderPage({
    route: enRoute,
    enEquivalent: enRoute,
    hiEquivalent: hiRoute,
    isHindi: false,
    title: `${type.title} — Definition, Equations, Mechanism & Examples | ChemNexus`,
    description: `Complete guide to ${type.title} in chemistry: definition, general formula ${type.generalFormula}, mechanism, real-world examples, and balanced chemical equations.`,
    keywords: [
      `${type.title.toLowerCase()}`,
      'types of chemical reactions',
      'chemical reaction equations',
      'balanced chemical equations',
      `${type.id} reaction chemistry`,
    ],
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Reaction Types', path: '/reaction-types' },
      { name: type.title, path: enRoute },
    ],
    priority: '0.8',
    schemas: [
      {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        headline: `${type.title} Explained - Mechanism and Examples`,
        description: type.summary,
        url: `${SITE_URL}${enRoute}`,
      },
      {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: typeFaqsEn.map((f) => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: { '@type': 'Answer', text: f.a },
        })),
      },
    ],
    semanticBodyHtml: `
      <article class="p-6 max-w-4xl mx-auto space-y-6">
        <header class="border-b border-slate-800 pb-4">
          <div class="text-xs uppercase text-cyan-400 font-bold">Chemical Reaction Classification</div>
          <h1 class="text-3xl font-extrabold text-white mt-1">${escapeHtml(type.title)}</h1>
          <p class="text-lg font-mono text-cyan-300 mt-2">General Representation: ${escapeHtml(type.generalFormula)}</p>
          <p class="text-slate-300 mt-2 leading-relaxed">${escapeHtml(type.summary)}</p>
        </header>

        <section class="bg-slate-800/80 rounded-xl p-5 border border-slate-700">
          <h2 class="text-xl font-bold text-white mb-2">Key Benchmark Example</h2>
          <div class="text-lg font-mono text-emerald-400 font-bold">${escapeHtml(type.examples?.[0]?.equation || '')}</div>
          <p class="text-xs text-slate-300 mt-2">${escapeHtml(type.examples?.[0]?.notes || '')}</p>
        </section>

        <section class="space-y-3">
          <h2 class="text-xl font-bold text-white">Frequently Asked Questions</h2>
          ${typeFaqsEn
            .map(
              (f) => `
            <div class="p-4 bg-slate-800 rounded-lg">
              <h3 class="font-bold text-cyan-400 text-sm">${escapeHtml(f.q)}</h3>
              <p class="text-xs text-slate-300 mt-1">${escapeHtml(f.a)}</p>
            </div>
          `
            )
            .join('')}
        </section>
      </article>
    `,
  });

  // Hindi Reaction Type Page
  renderPage({
    route: hiRoute,
    enEquivalent: enRoute,
    hiEquivalent: hiRoute,
    isHindi: true,
    title: `${type.hindiTitle} (${type.title}) — परिभाषा, सूत्र, समीकरण और उदाहरण | ChemNexus`,
    description: `${type.hindiTitle} की संपूर्ण व्याख्या: सामान्य सूत्र ${type.generalFormula}, संतुलित रासायनिक समीकरण, क्रियाविधि और दैनिक जीवन में उदाहरण।`,
    keywords: [
      `${type.hindiTitle}`,
      'रासायनिक अभिक्रियाओं के प्रकार',
      'रासायनिक समीकरण',
      'रासायनिक अभिक्रियाएँ उदाहरण सहित',
    ],
    breadcrumbs: [
      { name: 'गृह पृष्ठ', path: '/hi' },
      { name: 'अभिक्रिया प्रकार', path: '/hi/reaction-types' },
      { name: `${type.hindiTitle}`, path: hiRoute },
    ],
    priority: '0.8',
    schemas: [
      {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        headline: `${type.hindiTitle} - परिभाषा एवं उदाहरण`,
        description: type.hindiSummary,
        url: `${SITE_URL}${hiRoute}`,
      },
      {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: typeFaqsHi.map((f) => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: { '@type': 'Answer', text: f.a },
        })),
      },
    ],
    semanticBodyHtml: `
      <article class="p-6 max-w-4xl mx-auto space-y-6">
        <header class="border-b border-slate-800 pb-4">
          <div class="text-xs uppercase text-cyan-400 font-bold">रासायनिक अभिक्रिया वर्गीकरण</div>
          <h1 class="text-3xl font-extrabold text-white mt-1">${escapeHtml(type.hindiTitle)} (${escapeHtml(type.title)})</h1>
          <p class="text-lg font-mono text-cyan-300 mt-2">सामान्य सूत्र: ${escapeHtml(type.generalFormula)}</p>
          <p class="text-slate-300 mt-2 leading-relaxed">${escapeHtml(type.hindiSummary)}</p>
        </header>

        <section class="bg-slate-800/80 rounded-xl p-5 border border-slate-700">
          <h2 class="text-xl font-bold text-white mb-2">मुख्य उदाहरण समीकरण</h2>
          <div class="text-lg font-mono text-emerald-400 font-bold">${escapeHtml(type.examples?.[0]?.equation || '')}</div>
          <p class="text-xs text-slate-300 mt-2">${escapeHtml(type.examples?.[0]?.hindiNotes || type.examples?.[0]?.notes || '')}</p>
        </section>
      </article>
    `,
  });
}

// ==========================================
// 4. ALL 156 INDIVIDUAL REACTIONS (EN & HI)
// ==========================================
console.log(`Pre-rendering all ${reactionsData.length} reactions in English & Hindi...`);

for (const rx of reactionsData) {
  const enRoute = `/reaction/${rx.id}`;
  const hiRoute = `/hi/reaction/${rx.id}`;

  const rxTitle = rx.title || 'Chemical Reaction';
  const rxTitleHi = rx.hindiTitle || rxTitle;
  const reactantsStr = rx.reactants ? rx.reactants.join(', ') : '';
  const productsStr = rx.products ? rx.products.join(', ') : '';
  const practicalStr = Array.isArray(rx.practicalExamples)
    ? rx.practicalExamples.join(' ')
    : (rx.practicalExamples || '');
  const practicalStrHi = Array.isArray(rx.hindiPracticalExamples)
    ? rx.hindiPracticalExamples.join(' ')
    : (rx.hindiPracticalExamples || practicalStr);

  // English Reaction Page
  renderPage({
    route: enRoute,
    enEquivalent: enRoute,
    hiEquivalent: hiRoute,
    isHindi: false,
    title: `${rxTitle} — Balanced Equation & Mechanism | ChemNexus`,
    description: `Learn the chemical reaction ${rxTitle}: ${rx.equation}. Reactants: ${reactantsStr}, Products: ${productsStr}. Step-by-step mechanism, conditions, and real-world applications.`,
    keywords: [
      `${rxTitle.toLowerCase()}`,
      'balanced chemical equations',
      'chemical reaction equations',
      `${(rx.type || 'chemical').toLowerCase()}`,
      'chemistry equations and solutions',
    ],
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: 'Reactions', path: '/reactions' },
      { name: rxTitle, path: enRoute },
    ],
    priority: '0.75',
    schemas: [
      {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        headline: `${rxTitle} Chemical Reaction`,
        description: `Balanced chemical equation: ${rx.equation}. Reactants: ${reactantsStr}. Products: ${productsStr}.`,
        url: `${SITE_URL}${enRoute}`,
      },
    ],
    semanticBodyHtml: `
      <article class="p-6 max-w-4xl mx-auto space-y-6">
        <header class="border-b border-slate-800 pb-4">
          <div class="text-xs uppercase text-cyan-400 font-bold">${escapeHtml(rx.type)} Reaction</div>
          <h1 class="text-3xl font-extrabold text-white mt-1">${escapeHtml(rxTitle)}</h1>
          <div class="mt-4 p-4 bg-slate-900 rounded-xl border border-cyan-500/30">
            <span class="text-xs text-slate-400 block mb-1">Balanced Chemical Equation:</span>
            <div class="text-xl font-mono text-cyan-300 font-bold">${escapeHtml(rx.equation)}</div>
          </div>
        </header>

        <section class="bg-slate-800/80 rounded-xl p-5 border border-slate-700">
          <h2 class="text-xl font-bold text-white mb-3">Reaction Parameters</h2>
          <dl class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
            <div><dt class="text-slate-400">Reactants:</dt><dd class="text-white font-medium">${escapeHtml(reactantsStr)}</dd></div>
            <div><dt class="text-slate-400">Products:</dt><dd class="text-white font-medium">${escapeHtml(productsStr)}</dd></div>
            <div><dt class="text-slate-400">Reaction Type:</dt><dd class="text-cyan-400">${escapeHtml(rx.type)}</dd></div>
            <div><dt class="text-slate-400">Conditions:</dt><dd class="text-white">${escapeHtml(rx.conditions || 'Standard conditions')}</dd></div>
          </dl>
        </section>

        ${
          practicalStr
            ? `
          <section class="bg-slate-800/60 rounded-xl p-5 border border-slate-700">
            <h2 class="text-lg font-bold text-white">Practical Application</h2>
            <p class="text-sm text-slate-300 mt-2">${escapeHtml(practicalStr)}</p>
          </section>
        `
            : ''
        }

        ${
          rx.safety
            ? `
          <section class="bg-amber-950/30 border border-amber-800/50 rounded-xl p-4">
            <h3 class="text-sm font-bold text-amber-400">Safety & Handling Note</h3>
            <p class="text-xs text-amber-200/80 mt-1">${escapeHtml(rx.safety)}</p>
          </section>
        `
            : ''
        }
      </article>
    `,
  });

  // Hindi Reaction Page
  renderPage({
    route: hiRoute,
    enEquivalent: enRoute,
    hiEquivalent: hiRoute,
    isHindi: true,
    title: `${rxTitleHi} — संतुलित रासायनिक समीकरण, क्रियाविधि और उपयोग | ChemNexus`,
    description: `${rxTitleHi} की विस्तृत व्याख्या: संतुलित समीकरण ${rx.equation}, अभिकारक: ${reactantsStr}, उत्पाद: ${productsStr}, अभिक्रिया तंत्र और औद्योगिक उपयोग।`,
    keywords: [
      `${rxTitleHi}`,
      'रासायनिक समीकरण',
      'रासायनिक समीकरण संतुलित करना',
      'रासायनिक अभिक्रियाएँ उदाहरण सहित',
      'rasayanik abhikriya',
      'chemistry reactions in Hindi',
    ],
    breadcrumbs: [
      { name: 'गृह पृष्ठ', path: '/hi' },
      { name: 'रासायनिक अभिक्रियाएँ', path: '/hi/reactions' },
      { name: rxTitleHi, path: hiRoute },
    ],
    priority: '0.75',
    schemas: [
      {
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        headline: `${rxTitleHi} रासायनिक अभिक्रिया`,
        description: `संतुलित समीकरण: ${rx.equation}. अभिकारक: ${reactantsStr}. उत्पाद: ${productsStr}.`,
        url: `${SITE_URL}${hiRoute}`,
      },
    ],
    semanticBodyHtml: `
      <article class="p-6 max-w-4xl mx-auto space-y-6">
        <header class="border-b border-slate-800 pb-4">
          <div class="text-xs uppercase text-cyan-400 font-bold">${escapeHtml(rx.hindiType || rx.type)} अभिक्रिया</div>
          <h1 class="text-3xl font-extrabold text-white mt-1">${escapeHtml(rxTitleHi)} (${escapeHtml(rxTitle)})</h1>
          <div class="mt-4 p-4 bg-slate-900 rounded-xl border border-cyan-500/30">
            <span class="text-xs text-slate-400 block mb-1">संतुलित रासायनिक समीकरण:</span>
            <div class="text-xl font-mono text-cyan-300 font-bold">${escapeHtml(rx.equation)}</div>
          </div>
        </header>

        <section class="bg-slate-800/80 rounded-xl p-5 border border-slate-700">
          <h2 class="text-xl font-bold text-white mb-3">अभिक्रिया विवरण</h2>
          <dl class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
            <div><dt class="text-slate-400">अभिकारक (Reactants):</dt><dd class="text-white font-medium">${escapeHtml(reactantsStr)}</dd></div>
            <div><dt class="text-slate-400">उत्पाद (Products):</dt><dd class="text-white font-medium">${escapeHtml(productsStr)}</dd></div>
            <div><dt class="text-slate-400">प्रकार:</dt><dd class="text-cyan-400">${escapeHtml(rx.hindiType || rx.type)}</dd></div>
            <div><dt class="text-slate-400">परिस्थितियाँ:</dt><dd class="text-white">${escapeHtml(rx.hindiConditions || rx.conditions || 'सामान्य ताप व दाब')}</dd></div>
          </dl>
        </section>

        ${
          practicalStrHi
            ? `
          <section class="bg-slate-800/60 rounded-xl p-5 border border-slate-700">
            <h2 class="text-lg font-bold text-white">व्यावहारिक उपयोग</h2>
            <p class="text-sm text-slate-300 mt-2">${escapeHtml(practicalStrHi)}</p>
          </section>
        `
            : ''
        }

        ${
          rx.safety
            ? `
          <section class="bg-amber-950/30 border border-amber-800/50 rounded-xl p-4">
            <h3 class="text-sm font-bold text-amber-400">सुरक्षा चेतावनी</h3>
            <p class="text-xs text-amber-200/80 mt-1">${escapeHtml(rx.safety)}</p>
          </section>
        `
            : ''
        }
      </article>
    `,
  });
}

// ==========================================
// 5. XML SITEMAP GENERATION
// ==========================================
console.log(`Writing XML Sitemap with ${sitemapEntries.length} entries...`);

const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${sitemapEntries
  .map(
    (entry) => `  <url>
    <loc>${escapeXml(entry.loc)}</loc>
    <xhtml:link rel="alternate" hreflang="en" href="${escapeXml(entry.enUrl)}" />
    <xhtml:link rel="alternate" hreflang="hi" href="${escapeXml(entry.hiUrl)}" />
    <xhtml:link rel="alternate" hreflang="x-default" href="${escapeXml(entry.enUrl)}" />
    <lastmod>${entry.lastmod}</lastmod>
    <changefreq>${entry.changefreq}</changefreq>
    <priority>${entry.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

fs.writeFileSync(path.resolve(DIST_DIR, 'sitemap.xml'), sitemapXml, 'utf-8');
fs.writeFileSync(path.resolve(PUBLIC_DIR, 'sitemap.xml'), sitemapXml, 'utf-8');

// ==========================================
// 6. ROBOTS.TXT GENERATION
// ==========================================
console.log('Writing robots.txt...');

const robotsTxt = `# robots.txt for ChemNexus (https://chemnexus.vercel.app)
# Educational Chemistry Platform - All Public Pages Crawlable

User-agent: *
Allow: /
Allow: /hi/
Allow: /element/
Allow: /hi/element/
Allow: /reactions
Allow: /hi/reactions
Allow: /reaction/
Allow: /hi/reaction/
Allow: /reaction-types
Allow: /hi/reaction-types
Allow: /balancing-equations
Allow: /hi/balancing-equations
Allow: /chemical-formulas
Allow: /hi/chemical-formulas
Allow: /periodic-trends
Allow: /hi/periodic-trends
Allow: /chemistry-notes
Allow: /hi/chemistry-notes
Allow: /quizzes
Allow: /hi/quizzes
Allow: /about
Allow: /hi/about

# Disallow private user account, authentication, and API endpoints
Disallow: /dashboard
Disallow: /profile
Disallow: /login
Disallow: /signup
Disallow: /bookmarks
Disallow: /assistant
Disallow: /api/
Disallow: /hi/dashboard
Disallow: /hi/profile
Disallow: /hi/login
Disallow: /hi/signup
Disallow: /hi/bookmarks
Disallow: /hi/assistant

# XML Sitemap declaration
Sitemap: ${SITE_URL}/sitemap.xml
`;

fs.writeFileSync(path.resolve(DIST_DIR, 'robots.txt'), robotsTxt, 'utf-8');
fs.writeFileSync(path.resolve(PUBLIC_DIR, 'robots.txt'), robotsTxt, 'utf-8');

console.log(`--- ChemNexus SEO Pre-rendering Complete: ${sitemapEntries.length} Pages Generated! ---`);
