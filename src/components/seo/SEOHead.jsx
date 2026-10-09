// src/components/seo/SEOHead.jsx
// Production-Grade Head and Metadata Component powered by react-helmet-async
// Manages localized titles, canonicals, bilingual hreflangs, OpenGraph, Twitter, and Schema.org JSON-LD.

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { getFullUrl, SITE_URL } from '@/utils/seoHelpers';

export default function SEOHead({
  title,
  description,
  keywords,
  canonicalPath,
  enPath,
  hiPath,
  ogType = 'website',
  ogImage = '/favicon.svg',
  structuredData,
  noindex = false,
  lang
}) {
  const location = useLocation();

  // Determine current language from prop or URL
  const currentPath = location.pathname;
  const isHi = lang ? lang === 'hi' : (currentPath === '/hi' || currentPath.startsWith('/hi/'));
  const htmlLang = isHi ? 'hi' : 'en';

  // Compute canonical and alternate URLs
  const effectiveCanonicalPath = canonicalPath || currentPath;
  const canonicalUrl = getFullUrl(effectiveCanonicalPath);

  // Compute English and Hindi alternate URLs
  let resolvedEnPath = enPath;
  let resolvedHiPath = hiPath;

  if (!resolvedEnPath) {
    if (currentPath === '/hi') resolvedEnPath = '/';
    else if (currentPath.startsWith('/hi/')) resolvedEnPath = currentPath.replace(/^\/hi/, '');
    else resolvedEnPath = currentPath;
  }

  if (!resolvedHiPath) {
    if (currentPath === '/') resolvedHiPath = '/hi';
    else if (currentPath.startsWith('/hi')) resolvedHiPath = currentPath;
    else resolvedHiPath = `/hi${currentPath}`;
  }

  const enUrl = getFullUrl(resolvedEnPath);
  const hiUrl = getFullUrl(resolvedHiPath);
  const xDefaultUrl = enUrl; // English as global x-default

  // Fallback defaults
  const metaTitle = title
    ? `${title} | ChemNexus`
    : (isHi
      ? 'ChemNexus — इंटरैक्टिव रसायन विज्ञान ज्ञान मंच | आवर्त सारणी एवं अभिक्रियाएँ'
      : 'ChemNexus — Interactive Chemistry Knowledge Platform | Periodic Table & Reactions');

  const metaDescription = description || (isHi
    ? 'ChemNexus आपका केंद्रीय, शोध-स्तरीय रसायन विज्ञान ज्ञान मंच है। सभी 118 तत्वों, रासायनिक अभिक्रियाओं, सूत्रों और समीकरणों का अध्ययन करें।'
    : 'ChemNexus is your research-grade chemistry knowledge platform. Explore all 118 elements, balanced chemical reactions, formulas, and equations in English and Hindi.');

  const fullOgImage = ogImage.startsWith('http') ? ogImage : getFullUrl(ogImage);

  // Normalize structured data to array
  const schemaList = structuredData
    ? (Array.isArray(structuredData) ? structuredData : [structuredData]).filter(Boolean)
    : [];

  return (
    <Helmet>
      {/* HTML Language Attribute */}
      <html lang={htmlLang} />

      {/* Primary Meta Tags */}
      <title>{metaTitle}</title>
      <meta name="title" content={metaTitle} />
      <meta name="description" content={metaDescription} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="author" content="ChemNexus Educational Team" />

      {/* Robots Directive */}
      {noindex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      )}

      {/* Google Search Console Verification Placeholder */}
      <meta name="google-site-verification" content="chemnexus-gsc-verification-verified-2026" />

      {/* Canonical Link */}
      <link rel="canonical" href={canonicalUrl} />

      {/* Hreflang Multi-Language Annotations */}
      <link rel="alternate" hrefLang="en" href={enUrl} />
      <link rel="alternate" hrefLang="hi" href={hiUrl} />
      <link rel="alternate" hrefLang="x-default" href={xDefaultUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content="ChemNexus" />
      <meta property="og:title" content={metaTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={fullOgImage} />
      <meta property="og:locale" content={isHi ? 'hi_IN' : 'en_US'} />
      <meta property="og:locale:alternate" content={isHi ? 'en_US' : 'hi_IN'} />

      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@chemnexus" />
      <meta name="twitter:creator" content="@chemnexus" />
      <meta name="twitter:title" content={metaTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={fullOgImage} />

      {/* Schema.org Structured Data Scripts */}
      {schemaList.map((schema, idx) => (
        <script key={`schema-${idx}`} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
}

