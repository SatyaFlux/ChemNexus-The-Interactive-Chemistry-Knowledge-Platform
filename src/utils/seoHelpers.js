// src/utils/seoHelpers.js
// ChemNexus Structured Data (Schema.org) Generators & Canonical URL Helpers
// Generates valid WebSite, Organization, BreadcrumbList, ChemicalSubstance/DefinedTerm, Article, and FAQPage JSON-LD.

export const SITE_URL = (typeof process !== 'undefined' && process.env?.VITE_SITE_URL) || 'https://chemnexus.vercel.app';

export function getFullUrl(path = '') {
  if (!path) return SITE_URL;
  if (path.startsWith('http')) return path;
  return `${SITE_URL}${path.startsWith('/') ? '' : '/'}${path}`;
}

export function createWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'ChemNexus',
    alternateName: ['ChemNexus Chemistry Platform', 'केमनेक्सस रसायन विज्ञान मंच'],
    url: SITE_URL,
    description: 'A complete bilingual chemistry learning platform covering all 118 periodic table elements, reactions, formulas, and equations in English and Hindi.',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${SITE_URL}/search?q={search_term_string}`
      },
      'query-input': 'required name=search_term_string'
    },
    inLanguage: ['en', 'hi']
  };
}

export function createOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'ChemNexus',
    url: SITE_URL,
    logo: `${SITE_URL}/favicon.svg`,
    description: 'Open-access, research-grade bilingual chemistry knowledge platform designed for students, researchers, and science educators.',
    sameAs: [
      'https://github.com/chemnexus',
      'https://twitter.com/chemnexus'
    ]
  };
}

export function createBreadcrumbSchema(items = []) {
  // items: [{ name: 'Home', path: '/' }, { name: 'Periodic Table', path: '/periodic-table' }]
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: getFullUrl(item.path)
    }))
  };
}

export function createElementSchema(element, lang = 'en') {
  const isHi = lang === 'hi';
  const name = isHi && element.hindiName ? element.hindiName : element.name;
  const summary = isHi && element.hindiSummary ? element.hindiSummary : element.summary;

  return {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': getFullUrl(isHi ? `/hi/element/${element.symbol}` : `/element/${element.symbol}`)
    },
    headline: `${name} (${element.symbol}) — Atomic Number ${element.number}, Chemical Properties & Valency`,
    description: summary,
    inLanguage: isHi ? 'hi' : 'en',
    author: {
      '@type': 'Organization',
      name: 'ChemNexus Science Team'
    },
    publisher: {
      '@type': 'Organization',
      name: 'ChemNexus',
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/favicon.svg`
      }
    },
    about: {
      '@type': 'DefinedTerm',
      name: `${element.name} (${element.symbol})`,
      termCode: element.symbol,
      description: summary,
      inDefinedTermSet: {
        '@type': 'DefinedTermSet',
        name: 'IUPAC Periodic Table of Elements'
      }
    }
  };
}

export function createReactionSchema(reaction, lang = 'en') {
  const isHi = lang === 'hi';
  const title = isHi && reaction.hindiTitle ? reaction.hindiTitle : reaction.title;
  const explanation = isHi && reaction.hindiExplanation ? reaction.hindiExplanation : reaction.explanation;
  const path = isHi ? `/hi/reaction/${reaction.id}` : `/reaction/${reaction.id}`;

  return {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': getFullUrl(path)
    },
    headline: `${title} — Balanced Chemical Equation & Mechanism`,
    description: explanation,
    inLanguage: isHi ? 'hi' : 'en',
    author: {
      '@type': 'Organization',
      name: 'ChemNexus Chemistry Editorial Team'
    },
    publisher: {
      '@type': 'Organization',
      name: 'ChemNexus',
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/favicon.svg`
      }
    },
    about: {
      '@type': 'Thing',
      name: reaction.equation,
      description: `${reaction.type}: Reactants (${reaction.reactants?.join(', ')}) -> Products (${reaction.products?.join(', ')})`
    }
  };
}

export function createGuideSchema({ title, description, path, lang = 'en' }) {
  const isHi = lang === 'hi';
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': getFullUrl(path)
    },
    headline: title,
    description: description,
    inLanguage: isHi ? 'hi' : 'en',
    author: {
      '@type': 'Organization',
      name: 'ChemNexus Science Curriculum Board'
    },
    publisher: {
      '@type': 'Organization',
      name: 'ChemNexus',
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/favicon.svg`
      }
    }
  };
}

export function createFAQSchema(faqs = [], lang = 'en') {
  // Only create FAQPage if there are valid FAQs
  if (!faqs || faqs.length === 0) return null;
  const isHi = lang === 'hi';

  const validEntities = faqs.map((faq) => {
    const questionText = isHi ? (faq.hiQ || faq.hiQuestion || faq.q || faq.question) : (faq.q || faq.question);
    const answerText = isHi ? (faq.hiA || faq.hiAnswer || faq.a || faq.answer) : (faq.a || faq.answer);

    return {
      '@type': 'Question',
      name: questionText,
      acceptedAnswer: {
        '@type': 'Answer',
        text: answerText
      }
    };
  }).filter((item) => item.name && item.acceptedAnswer.text);

  if (validEntities.length === 0) return null;

  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: validEntities
  };
}

