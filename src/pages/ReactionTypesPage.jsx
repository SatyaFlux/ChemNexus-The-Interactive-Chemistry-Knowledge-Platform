// src/pages/ReactionTypesPage.jsx
// Comprehensive guide to all 10 types of chemical reactions in English and Hindi.
// Covers general formulas, mechanisms, verified equations, and Google FAQPage structured data.

import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { reactionTypesData } from '@/data/reactionTypesData';
import { formatChemicalFormula } from '@/utils/chemistryUtils';
import { useLanguage } from '@/context/LanguageContext';
import SEOHead from '@/components/seo/SEOHead';
import { createBreadcrumbSchema, createFAQSchema, createGuideSchema } from '@/utils/seoHelpers';
import {
  Compass,
  Layers,
  ChevronRight,
  HelpCircle,
  FlaskConical,
  CheckCircle2,
  Atom,
  Sparkles
} from 'lucide-react';

export default function ReactionTypesPage() {
  const { typeId } = useParams();
  const { isHindi } = useLanguage();
  const prefix = isHindi ? '/hi' : '';

  // Selected type if accessed via /reaction-types/:typeId
  const selectedType = typeId
    ? reactionTypesData.find((rt) => rt.id === typeId || rt.slug === typeId)
    : null;

  const displayList = selectedType ? [selectedType] : reactionTypesData;

  // SEO metadata calculation
  const pageTitle = selectedType
    ? (isHindi
      ? `${selectedType.hindiTitle} — परिभाषा, नियम एवं समीकरण | ChemNexus`
      : `${selectedType.title} — Definition, Formula & Examples | ChemNexus`)
    : (isHindi
      ? 'रासायनिक अभिक्रियाओं के प्रकार (10 मुख्य प्रकार उदाहरण सहित) | ChemNexus'
      : 'Types of Chemical Reactions (10 Major Types with Equations) | ChemNexus');

  const pageDescription = selectedType
    ? (isHindi
      ? `${selectedType.hindiSummary.slice(0, 150)}...`
      : `${selectedType.summary.slice(0, 150)}...`)
    : (isHindi
      ? 'रासायनिक अभिक्रियाओं के 10 प्रमुख प्रकार: संयोजन, वियोजन/अपघटन, विस्थापन, द्विविस्थापन, ऑक्सीकरण, अपचयन, दहन, उदासीनीकरण और अवक्षेपण अभिक्रियाएँ।'
      : 'Explore the 10 major types of chemical reactions with balanced equations, formulas, mechanisms, and real-life examples: Combination, Decomposition, Displacement, Redox, and Neutralization.');

  const keywords = isHindi
    ? 'रासायनिक अभिक्रियाओं के प्रकार, संयोजन अभिक्रिया, अपघटन अभिक्रिया, विस्थापन अभिक्रिया, द्विविस्थापन अभिक्रिया, ऑक्सीकरण और अपचयन, दहन अभिक्रिया, उदासीनीकरण अभिक्रिया, rasayanik abhikriya ke prakar'
    : 'types of chemical reactions, combination reactions, decomposition reactions, displacement reactions, double displacement, oxidation reduction, redox reactions explained, neutralization reactions, combustion reactions';

  const canonicalPath = selectedType
    ? `${prefix}/reaction-types/${selectedType.slug}`
    : `${prefix}/reaction-types`;

  const enPath = selectedType
    ? `/reaction-types/${selectedType.slug}`
    : `/reaction-types`;

  const hiPath = selectedType
    ? `/hi/reaction-types/${selectedType.slug}`
    : `/hi/reaction-types`;

  // Breadcrumbs
  const breadcrumbItems = [
    { name: isHindi ? 'होम' : 'Home', path: isHindi ? '/hi' : '/' },
    { name: isHindi ? 'अभिक्रिया प्रकार' : 'Reaction Types', path: `${prefix}/reaction-types` },
  ];
  if (selectedType) {
    breadcrumbItems.push({
      name: isHindi ? selectedType.hindiTitle : selectedType.title,
      path: canonicalPath
    });
  }

  // Schema structured data
  const allFaqs = displayList.flatMap((t) => t.faqs || []);
  const structuredData = [
    createBreadcrumbSchema(breadcrumbItems),
    createGuideSchema({
      title: pageTitle,
      description: pageDescription,
      path: canonicalPath,
      lang: isHindi ? 'hi' : 'en'
    }),
    createFAQSchema(allFaqs, isHindi ? 'hi' : 'en')
  ].filter(Boolean);

  return (
    <>
      <SEOHead
        title={pageTitle}
        description={pageDescription}
        keywords={keywords}
        canonicalPath={canonicalPath}
        enPath={enPath}
        hiPath={hiPath}
        structuredData={structuredData}
        lang={isHindi ? 'hi' : 'en'}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="flex items-center space-x-2 text-xs text-slate-400">
          <Link to={prefix || '/'} className="hover:text-cyan-400 transition-colors">
            {isHindi ? 'होम' : 'Home'}
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
          <Link to={`${prefix}/reaction-types`} className="hover:text-cyan-400 transition-colors">
            {isHindi ? 'अभिक्रिया प्रकार' : 'Reaction Types'}
          </Link>
          {selectedType && (
            <>
              <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
              <span className="text-slate-200">
                {isHindi ? selectedType.hindiTitle : selectedType.title}
              </span>
            </>
          )}
        </nav>

        {/* Hero Header */}
        <header className="space-y-3">
          <div className="inline-flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-cyan-400">
            <Compass className="w-4 h-4" />
            <span>{isHindi ? 'रसायन विज्ञान मार्गदर्शिका' : 'Chemistry Knowledge Guide'}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {selectedType
              ? (isHindi ? selectedType.hindiTitle : selectedType.title)
              : (isHindi ? 'रासायनिक अभिक्रियाओं के प्रमुख प्रकार' : 'Types of Chemical Reactions Explained')}
          </h1>
          <p className="text-sm sm:text-base text-slate-400 max-w-3xl leading-relaxed">
            {selectedType
              ? (isHindi ? selectedType.hindiSummary : selectedType.summary)
              : (isHindi
                ? 'कक्षा 10, 11 और 12 के पाठ्यक्रम के अनुसार सभी 10 मुख्य रासायनिक अभिक्रियाओं के सामान्य सूत्र, क्रियाविधि, संतुलित समीकरण और परीक्षा-उपयोगी प्रश्न।'
                : 'Master all fundamental chemical reaction classes with balanced equations, thermodynamic mechanisms, general formulas, and classroom examples.')}
          </p>

          {/* Type Quick Navigation Pills */}
          {!selectedType && (
            <div className="flex flex-wrap gap-2 pt-3">
              {reactionTypesData.map((t) => (
                <Link
                  key={t.id}
                  to={`${prefix}/reaction-types/${t.slug}`}
                  className="px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-500/40 text-xs font-medium text-slate-300 hover:text-cyan-300 transition-colors"
                >
                  {isHindi ? t.hindiTitle.split(' ')[0] : t.title.split(' ')[0]}
                </Link>
              ))}
            </div>
          )}
        </header>

        {/* Reaction Types Cards */}
        <div className="space-y-8">
          {displayList.map((type) => {
            const title = isHindi ? type.hindiTitle : type.title;
            const summary = isHindi ? type.hindiSummary : type.summary;
            const mechanism = isHindi ? type.hindiMechanism : type.mechanism;
            const characteristics = isHindi ? type.hindiKeyCharacteristics : type.keyCharacteristics;

            return (
              <article
                key={type.id}
                id={type.id}
                className="bg-slate-900/60 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl"
              >
                {/* Header & Formula */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800/80 pb-5">
                  <div className="space-y-1">
                    <span className="text-[11px] font-mono font-semibold uppercase text-cyan-400">
                      Class ID: {type.id}
                    </span>
                    <h2 className="text-xl sm:text-2xl font-bold text-white">
                      {title}
                    </h2>
                  </div>

                  {/* General Formula Box */}
                  <div className="bg-slate-950 px-4 py-2.5 rounded-xl border border-cyan-500/30 text-right">
                    <span className="text-[10px] text-slate-400 uppercase font-mono block">
                      {isHindi ? 'सामान्य सूत्र (General Formula)' : 'General Formula'}
                    </span>
                    <span className="text-base sm:text-lg font-mono font-bold text-cyan-300">
                      {type.generalFormula}
                    </span>
                  </div>
                </div>

                {/* Summary & Mechanism */}
                <div className="space-y-3">
                  <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
                    {summary}
                  </p>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {mechanism}
                  </p>
                </div>

                {/* Key Characteristics */}
                <div className="bg-slate-950/60 rounded-2xl p-4 sm:p-5 border border-slate-800/80 space-y-2">
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-300 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>{isHindi ? 'प्रमुख विशेषताएँ (Key Characteristics)' : 'Key Characteristics'}</span>
                  </h3>
                  <ul className="grid grid-cols-1 md:grid-cols-3 gap-2 pt-1">
                    {characteristics?.map((c, i) => (
                      <li key={i} className="text-xs text-slate-300 flex items-start gap-2 bg-slate-900/80 p-2.5 rounded-xl border border-slate-800">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 shrink-0"></span>
                        <span>{c}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Verified Examples Grid */}
                <div className="space-y-3">
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-300 flex items-center gap-1.5">
                    <FlaskConical className="w-4 h-4 text-cyan-400" />
                    <span>{isHindi ? 'प्रमाणित रासायनिक समीकरण एवं उदाहरण' : 'Verified Chemical Equations & Examples'}</span>
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {type.examples?.map((ex, i) => (
                      <div
                        key={i}
                        className="bg-slate-950/80 border border-slate-800/90 rounded-2xl p-4 space-y-2 hover:border-cyan-500/30 transition-colors"
                      >
                        <span className="text-xs font-bold text-white block">
                          {isHindi ? ex.hindiTitle : ex.title}
                        </span>
                        <div className="font-mono text-sm sm:text-base font-bold text-cyan-300 break-words py-1">
                          {formatChemicalFormula(ex.equation)}
                        </div>
                        <p className="text-[11px] text-slate-400 leading-relaxed">
                          {isHindi ? ex.hindiNotes : ex.notes}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Educational FAQs Matching Schema.org */}
                {type.faqs && type.faqs.length > 0 && (
                  <div className="border-t border-slate-800/80 pt-4 space-y-3">
                    <h3 className="text-xs font-semibold uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
                      <HelpCircle className="w-4 h-4" />
                      <span>{isHindi ? 'अक्सर पूछे जाने वाले प्रश्न (FAQ)' : 'Frequently Asked Questions'}</span>
                    </h3>
                    <div className="space-y-2">
                      {type.faqs.map((faq, i) => (
                        <div key={i} className="bg-slate-950/50 rounded-xl p-3 border border-slate-800/60 text-xs space-y-1">
                          <p className="font-semibold text-slate-200">
                            Q: {isHindi ? faq.hiQ : faq.q}
                          </p>
                          <p className="text-slate-400 leading-relaxed">
                            A: {isHindi ? faq.hiA : faq.a}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </article>
            );
          })}
        </div>

        {/* Back to all types link when viewing single type */}
        {selectedType && (
          <div className="pt-4 text-center">
            <Link
              to={`${prefix}/reaction-types`}
              className="px-5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-500/40 text-xs font-semibold text-slate-300 hover:text-white inline-flex items-center space-x-2"
            >
              <Compass className="w-4 h-4 text-cyan-400" />
              <span>{isHindi ? 'सभी 10 अभिक्रिया प्रकार देखें' : 'View All 10 Reaction Types'}</span>
            </Link>
          </div>
        )}
      </div>
    </>
  );
}

