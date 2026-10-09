// src/pages/ElementDetailPage.jsx
// Production-grade bilingual element detail page for all 118 chemical elements.
// Fully compliant with Google Technical SEO, Schema.org (TechArticle, DefinedTerm, FAQPage, BreadcrumbList), and bilingual hreflangs.

import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { elementsData } from '@/data/elementsData';
import { getCategoryMeta } from '@/utils/chemistryUtils';
import { useBookmarks } from '@/context/BookmarkContext';
import { useProgress } from '@/context/ProgressContext';
import { useLanguage } from '@/context/LanguageContext';
import ElementDetailTabs from '@/components/element-detail/ElementDetailTabs';
import SEOHead from '@/components/seo/SEOHead';
import {
  createElementSchema,
  createBreadcrumbSchema,
  createFAQSchema
} from '@/utils/seoHelpers';
import {
  Bookmark,
  ChevronLeft,
  ChevronRight,
  ArrowLeft,
  Sparkles,
  TableProperties,
  BookOpen,
  HelpCircle,
  ExternalLink,
  ChevronDown
} from 'lucide-react';

export default function ElementDetailPage() {
  const { symbol } = useParams();
  const navigate = useNavigate();
  const { isBookmarked, toggleBookmark } = useBookmarks();
  const { recordView } = useProgress();
  const { isHindi, getTranslatedCategory } = useLanguage();
  const prefix = isHindi ? '/hi' : '';
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  // Find element by symbol or atomic number
  const element = elementsData.find((el) => {
    return (
      el.symbol.toLowerCase() === symbol.toLowerCase() ||
      el.number.toString() === symbol
    );
  });

  // Track progress on element visit
  useEffect(() => {
    if (element) {
      recordView(element.symbol, element.number);
    }
  }, [element]);

  if (!element) {
    return (
      <div className="max-w-2xl mx-auto py-20 px-4 text-center space-y-4">
        <Sparkles className="w-12 h-12 text-cyan-400 mx-auto" />
        <h2 className="text-2xl font-bold text-white">
          {isHindi ? 'तत्व नहीं मिला' : 'Element Not Found'}
        </h2>
        <p className="text-sm text-slate-400">
          {isHindi
            ? `प्रतीक या क्रमांक "${symbol}" से कोई रासायनिक तत्व उपलब्ध नहीं है।`
            : `We could not find an element matching "${symbol}".`}
        </p>
        <div className="pt-4">
          <Link
            to={`${prefix}/periodic-table`}
            className="px-5 py-2.5 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-semibold text-xs inline-flex items-center space-x-2"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>{isHindi ? 'आवर्त सारणी पर वापस जाएँ' : 'Return to Periodic Table'}</span>
          </Link>
        </div>
      </div>
    );
  }

  const categoryMeta = getCategoryMeta(element.category);
  const categoryName = getTranslatedCategory(element.category, categoryMeta.name);
  const bookmarked = isBookmarked(element.symbol);

  // Localized Strings
  const elName = isHindi && element.hindiName ? element.hindiName : element.name;
  const elSummary = isHindi && element.hindiSummary ? element.hindiSummary : element.summary;
  const valency = element.valency || 'N/A';
  const references = element.references || [
    'IUPAC Periodic Table of Elements (2024)',
    'NIST Atomic Spectra Database',
    'Royal Society of Chemistry Chemistry World'
  ];

  // Prev & Next Elements
  const prevElement = elementsData.find((e) => e.number === element.number - 1);
  const nextElement = elementsData.find((e) => e.number === element.number + 1);

  // SEO Titles, Descriptions & Keywords
  const pageTitle = isHindi
    ? `${element.hindiName || element.name} (${element.symbol}) — परमाणु क्रमांक ${element.number}, द्रव्यमान, संयोजकता एवं गुण | ChemNexus`
    : `${element.name} (${element.symbol}) — Atomic Number ${element.number}, Mass, Valency & Properties | ChemNexus`;

  const pageDescription = isHindi
    ? `${element.hindiName || element.name} (${element.symbol}): परमाणु क्रमांक ${element.number}, परमाणु द्रव्यमान ${element.atomicMass} u, संयोजकता ${valency}, इलेक्ट्रॉनिक विन्यास ${element.electronConfiguration}। ${element.hindiSummary.slice(0, 110)}...`
    : `${element.name} (${element.symbol}) element properties: Atomic number ${element.number}, atomic mass ${element.atomicMass} u, valency ${valency}, group ${element.group}, period ${element.period}, electron configuration ${element.electronConfiguration}.`;

  // Specific keyword tuning for key elements (O, C, H, Na)
  let customKeywords = '';
  if (element.symbol === 'O') {
    customKeywords = 'oxygen element properties, atomic number 8, oxygen atomic mass, valency of oxygen, oxygen electron configuration, ऑक्सीजन के गुण, oxygen reactions';
  } else if (element.symbol === 'C') {
    customKeywords = 'carbon element properties, atomic number 6, carbon valency, allotropes of carbon, diamond graphite, catenation, कार्बन के गुण';
  } else if (element.symbol === 'H') {
    customKeywords = 'hydrogen element properties, atomic number 1, hydrogen atomic mass, valency of hydrogen, isotopes of hydrogen, हाइड्रोजन के गुण';
  } else if (element.symbol === 'Na') {
    customKeywords = 'sodium element properties, atomic number 11, sodium valency, alkali metal properties, sodium reactions with water, सोडियम के गुण';
  } else {
    customKeywords = `${element.name} properties, ${element.name} atomic number, ${element.symbol} valency, ${element.name} in Hindi, ${element.hindiName || ''}, periodic table element ${element.number}`;
  }

  // Breadcrumbs
  const breadcrumbItems = [
    { name: isHindi ? 'होम' : 'Home', path: isHindi ? '/hi' : '/' },
    { name: isHindi ? 'आवर्त सारणी' : 'Periodic Table', path: `${prefix}/periodic-table` },
    { name: `${element.name} (${element.symbol})`, path: `${prefix}/element/${element.symbol}` }
  ];

  // Visible FAQs matching Schema.org
  const elementFaqs = [
    {
      q: `What is the atomic number and atomic mass of ${element.name}?`,
      hiQ: `${elName} का परमाणु क्रमांक और परमाणु द्रव्यमान क्या है?`,
      a: `${element.name} has atomic number ${element.number} (having ${element.number} protons in its nucleus) and a standard atomic mass of ${element.atomicMass} unified atomic mass units (u).`,
      hiA: `${elName} का परमाणु क्रमांक ${element.number} है (इसके नाभिक में ${element.number} प्रोटॉन होते हैं) और इसका मानक परमाणु द्रव्यमान ${element.atomicMass} u है।`
    },
    {
      q: `What is the valency and electron configuration of ${element.name}?`,
      hiQ: `${elName} की संयोजकता और इलेक्ट्रॉनिक विन्यास क्या है?`,
      a: `The electron configuration of ${element.name} is ${element.electronConfiguration}, and its common chemical valency is ${valency}.`,
      hiA: `${elName} का इलेक्ट्रॉनिक विन्यास ${element.electronConfiguration} है, तथा इसकी सामान्य रासायनिक संयोजकता ${valency} है।`
    },
    {
      q: `What are the primary applications and uses of ${element.name}?`,
      hiQ: `${elName} के प्रमुख व्यावहारिक उपयोग क्या हैं?`,
      a: `${element.name} is primarily used in: ${element.applications?.slice(0, 3).join(', ') || 'scientific research and material chemistry'}.`,
      hiA: `${elName} का मुख्य उपयोग: ${element.applications?.slice(0, 3).join(', ') || 'वैज्ञानिक अनुसंधान और रासायनिक संश्लेषण'} में होता है।`
    }
  ];

  const structuredData = [
    createBreadcrumbSchema(breadcrumbItems),
    createElementSchema(element, isHindi ? 'hi' : 'en'),
    createFAQSchema(elementFaqs, isHindi ? 'hi' : 'en')
  ];

  return (
    <>
      <SEOHead
        title={pageTitle}
        description={pageDescription}
        keywords={customKeywords}
        canonicalPath={`${prefix}/element/${element.symbol}`}
        enPath={`/element/${element.symbol}`}
        hiPath={`/hi/element/${element.symbol}`}
        structuredData={structuredData}
        lang={isHindi ? 'hi' : 'en'}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 space-y-8">
        {/* Top Breadcrumb & Next/Prev Controls */}
        <div className="flex items-center justify-between">
          <Link
            to={`${prefix}/periodic-table`}
            className="inline-flex items-center space-x-1.5 text-xs text-slate-400 hover:text-cyan-400 font-medium transition-colors"
          >
            <TableProperties className="w-4 h-4" />
            <span>{isHindi ? 'आवर्त सारणी पर वापस जाएँ' : 'Back to Periodic Table'}</span>
          </Link>

          {/* Prev / Next Element Navigation */}
          <div className="flex items-center space-x-2">
            {prevElement && (
              <Link
                to={`${prefix}/element/${prevElement.symbol}`}
                className="px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 text-xs text-slate-300 hover:text-white flex items-center space-x-1 transition-colors"
                title={`Previous: ${prevElement.name}`}
              >
                <ChevronLeft className="w-3.5 h-3.5" />
                <span className="font-mono">{prevElement.symbol}</span>
                <span className="hidden sm:inline text-[11px] text-slate-400">({prevElement.number})</span>
              </Link>
            )}

            {nextElement && (
              <Link
                to={`${prefix}/element/${nextElement.symbol}`}
                className="px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 text-xs text-slate-300 hover:text-white flex items-center space-x-1 transition-colors"
                title={`Next: ${nextElement.name}`}
              >
                <span className="hidden sm:inline text-[11px] text-slate-400">({nextElement.number})</span>
                <span className="font-mono">{nextElement.symbol}</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            )}
          </div>
        </div>

        {/* Primary Element Hero Banner */}
        <article className="bg-gradient-to-r from-slate-900 via-slate-900/90 to-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex items-start sm:items-center space-x-5">
              {/* Element Tile Big */}
              <div
                className="w-20 h-20 sm:w-24 sm:h-24 rounded-3xl flex flex-col items-center justify-center font-bold text-white shadow-2xl shrink-0 border border-white/20"
                style={{ backgroundColor: categoryMeta.solidBg }}
              >
                <span className="text-[11px] font-mono opacity-80">{element.number}</span>
                <span className="text-3xl sm:text-4xl tracking-tight leading-none my-0.5">
                  {element.symbol}
                </span>
                <span className="text-[10px] font-mono opacity-80">{element.atomicMass}</span>
              </div>

              {/* Title & Category Tags */}
              <div className="space-y-1.5">
                <div className="flex flex-wrap items-center gap-2">
                  <span className={`px-2.5 py-0.5 rounded-md text-[11px] font-semibold ${categoryMeta.badgeClass}`}>
                    {categoryName}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-md text-[11px] font-mono bg-slate-800 text-slate-300 border border-slate-700">
                    {element.block}-block
                  </span>
                  <span className="px-2.5 py-0.5 rounded-md text-[11px] bg-slate-800 text-slate-300 border border-slate-700">
                    {element.state}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-md text-[11px] font-mono bg-cyan-950/60 text-cyan-300 border border-cyan-500/30">
                    {isHindi ? `संयोजकता: ${valency}` : `Valency: ${valency}`}
                  </span>
                </div>

                <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight flex items-baseline gap-3">
                  <span>{elName}</span>
                  {element.hindiName && (
                    <span className="text-lg sm:text-xl font-normal text-slate-400 font-sans">
                      ({element.name})
                    </span>
                  )}
                </h1>

                <p className="text-xs sm:text-sm text-slate-400 font-mono">
                  Group {element.group} • Period {element.period} • Electron Config: {element.electronConfiguration}
                </p>
              </div>
            </div>

            {/* Bookmark & Actions */}
            <div className="flex items-center space-x-3 self-start md:self-center">
              <button
                onClick={() => toggleBookmark(element)}
                className={`px-4 py-2.5 rounded-2xl border text-xs font-semibold flex items-center space-x-2 transition-all shadow-md ${
                  bookmarked
                    ? 'bg-amber-500/20 text-amber-300 border-amber-500/40 hover:bg-amber-500/30'
                    : 'bg-slate-800 hover:bg-slate-700 text-slate-200 border-slate-700'
                }`}
              >
                <Bookmark className={`w-4 h-4 ${bookmarked ? 'text-amber-400 fill-amber-400' : ''}`} />
                <span>{bookmarked ? (isHindi ? 'बुकमार्क में सहेजा गया' : 'Saved to Bookmarks') : (isHindi ? 'तत्व बुकमार्क करें' : 'Bookmark Element')}</span>
              </button>
            </div>
          </div>
        </article>

        {/* Multi-Tab Comprehensive Inspection Suite */}
        <ElementDetailTabs element={element} allElements={elementsData} />

        {/* On-Page Frequently Asked Chemistry Questions (FAQPage Eligible) */}
        <section className="bg-slate-900/60 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-4 shadow-xl">
          <div className="space-y-1">
            <h2 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-amber-400" />
              <span>{isHindi ? `${elName} से जुड़े महत्वपूर्ण प्रश्नोत्तर (FAQ)` : `Frequently Asked Questions About ${element.name}`}</span>
            </h2>
            <p className="text-xs text-slate-400">
              {isHindi
                ? `${elName} के परमाणु गुण, संयोजकता और रासायनिक अनुप्रयोगों के त्वरित उत्तर।`
                : `Quick educational answers to essential questions regarding ${element.name} properties, valency, and uses.`}
            </p>
          </div>

          <div className="space-y-2 pt-2">
            {elementFaqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div key={idx} className="bg-slate-950/70 border border-slate-800 rounded-2xl overflow-hidden">
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    className="w-full text-left p-4 flex items-center justify-between text-xs sm:text-sm font-semibold text-slate-200 hover:text-cyan-300 transition-colors"
                  >
                    <span>{isHindi ? faq.hiQ : faq.q}</span>
                    <ChevronDown className={`w-4 h-4 text-cyan-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {isOpen && (
                    <div className="px-4 pb-4 text-xs text-slate-300 leading-relaxed border-t border-slate-900 pt-2 animate-in fade-in duration-150">
                      {isHindi ? faq.hiA : faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* Reliable Scientific References Section */}
        <section className="bg-slate-900/40 border border-slate-800/80 rounded-2xl p-5 space-y-2 text-xs">
          <h3 className="font-semibold text-slate-300 flex items-center gap-1.5 uppercase tracking-wider text-[11px]">
            <BookOpen className="w-3.5 h-3.5 text-cyan-400" />
            <span>{isHindi ? 'प्रामाणिक वैज्ञानिक संदर्भ (Reliable Scientific References)' : 'Authoritative Scientific References'}</span>
          </h3>
          <ul className="space-y-1 text-slate-400 list-disc list-inside">
            {references.map((ref, idx) => (
              <li key={idx} className="text-slate-400">
                {ref}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </>
  );
}
