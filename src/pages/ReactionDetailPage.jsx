// src/pages/ReactionDetailPage.jsx
// Dedicated SEO-optimized page for every chemical reaction in ChemNexus.
// Fully bilingual with balanced equations, thermodynamic conditions, step-by-step mechanism, safety, practical applications, and Schema.org markup.

import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { reactionsData } from '@/data/reactionsData';
import { formatChemicalFormula } from '@/utils/chemistryUtils';
import { useLanguage } from '@/context/LanguageContext';
import SEOHead from '@/components/seo/SEOHead';
import { createBreadcrumbSchema, createReactionSchema } from '@/utils/seoHelpers';
import {
  FlaskConical,
  Flame,
  ArrowLeft,
  ChevronRight,
  ShieldAlert,
  Sparkles,
  Layers,
  CheckCircle2,
  TableProperties
} from 'lucide-react';

export default function ReactionDetailPage() {
  const { id } = useParams();
  const { isHindi } = useLanguage();
  const prefix = isHindi ? '/hi' : '';

  // Look up reaction by ID or by slug
  const reaction = reactionsData.find((rx) => {
    return (
      rx.id.toLowerCase() === id.toLowerCase() ||
      rx.slug?.toLowerCase() === id.toLowerCase()
    );
  });

  if (!reaction) {
    return (
      <div className="max-w-3xl mx-auto py-20 px-4 text-center space-y-4">
        <FlaskConical className="w-12 h-12 text-cyan-400 mx-auto" />
        <h2 className="text-2xl font-bold text-white">
          {isHindi ? 'रासायनिक अभिक्रिया नहीं मिली' : 'Chemical Reaction Not Found'}
        </h2>
        <p className="text-sm text-slate-400">
          {isHindi
            ? `ID या स्लग "${id}" से कोई रासायनिक अभिक्रिया उपलब्ध नहीं है।`
            : `Could not find a chemical reaction matching identifier "${id}".`}
        </p>
        <div className="pt-4">
          <Link
            to={`${prefix}/reactions`}
            className="px-5 py-2.5 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-semibold text-xs inline-flex items-center space-x-2"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>{isHindi ? 'अभिक्रिया सूची पर वापस जाएँ' : 'Back to Reaction Explorer'}</span>
          </Link>
        </div>
      </div>
    );
  }

  const title = isHindi ? reaction.hindiTitle : reaction.title;
  const reactionType = isHindi ? reaction.hindiType : reaction.type;
  const explanation = isHindi ? reaction.hindiExplanation : reaction.explanation;
  const conditions = isHindi ? reaction.hindiConditions : reaction.conditions;
  const steps = isHindi ? reaction.hindiStepByStep : reaction.stepByStep;
  const practicalExamples = isHindi ? reaction.hindiPracticalExamples : reaction.practicalExamples;
  const safetyNotes = isHindi ? (reaction.hindiSafety || reaction.safety) : reaction.safety;

  // SEO Titles & Metadata
  const pageTitle = isHindi
    ? `${reaction.hindiTitle} — संतुलित समीकरण, परिस्थितियाँ एवं व्याख्या`
    : `${reaction.title} — Balanced Equation, Mechanism & Conditions`;

  const pageDescription = isHindi
    ? `${reaction.hindiTitle}: संतुलित रासायनिक समीकरण ${reaction.equation}। ${reaction.hindiExplanation.slice(0, 140)}...`
    : `${reaction.title}: Balanced chemical equation ${reaction.equation}. ${reaction.explanation.slice(0, 140)}...`;

  const keywords = isHindi
    ? `${reaction.hindiTitle}, ${reaction.title}, रासायनिक अभिक्रिया, संतुलित समीकरण, ${reaction.equation}, रसायन विज्ञान`
    : `${reaction.title}, chemical reaction, balanced equation, ${reaction.equation}, reaction mechanism, chemistry`;

  // Breadcrumbs
  const breadcrumbItems = [
    { name: isHindi ? 'होम' : 'Home', path: isHindi ? '/hi' : '/' },
    { name: isHindi ? 'रासायनिक अभिक्रियाएँ' : 'Chemical Reactions', path: `${prefix}/reactions` },
    { name: title, path: `${prefix}/reaction/${reaction.id}` }
  ];

  const structuredData = [
    createBreadcrumbSchema(breadcrumbItems),
    createReactionSchema(reaction, isHindi ? 'hi' : 'en')
  ];

  return (
    <>
      <SEOHead
        title={pageTitle}
        description={pageDescription}
        keywords={keywords}
        canonicalPath={`${prefix}/reaction/${reaction.id}`}
        enPath={`/reaction/${reaction.id}`}
        hiPath={`/hi/reaction/${reaction.id}`}
        structuredData={structuredData}
        lang={isHindi ? 'hi' : 'en'}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="flex items-center space-x-2 text-xs text-slate-400">
          <Link to={prefix || '/'} className="hover:text-cyan-400 transition-colors">
            {isHindi ? 'होम' : 'Home'}
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
          <Link to={`${prefix}/reactions`} className="hover:text-cyan-400 transition-colors">
            {isHindi ? 'अभिक्रियाएँ' : 'Reactions'}
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
          <span className="text-slate-200 truncate max-w-xs">{title}</span>
        </nav>

        {/* Hero Card */}
        <article className="bg-gradient-to-br from-slate-900 via-slate-900/90 to-slate-950 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden">
          <div className="space-y-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 rounded-md text-xs font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
                {reactionType}
              </span>
              <span className="px-3 py-1 rounded-md text-xs font-mono bg-slate-800 text-slate-300 border border-slate-700">
                ID: {reaction.id}
              </span>
            </div>

            <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              {title}
            </h1>

            {/* Prominent Balanced Chemical Equation Box */}
            <div className="bg-slate-950/90 border border-cyan-500/30 rounded-2xl p-5 my-4 shadow-inner">
              <span className="text-xs text-cyan-400 font-semibold uppercase tracking-wider block mb-1">
                {isHindi ? 'संतुलित रासायनिक समीकरण (Balanced Chemical Equation)' : 'Balanced Chemical Equation'}
              </span>
              <div className="text-xl sm:text-2xl lg:text-3xl font-mono font-bold text-cyan-300 break-words py-1">
                {formatChemicalFormula(reaction.equation)}
              </div>
            </div>

            {/* Reaction Conditions */}
            {conditions && (
              <div className="flex items-start space-x-2 text-xs sm:text-sm text-slate-300 bg-slate-900/60 rounded-xl p-3 border border-slate-800">
                <Flame className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white">{isHindi ? 'अभिक्रिया परिस्थितियाँ: ' : 'Conditions: '}</strong>
                  {conditions}
                </div>
              </div>
            )}
          </div>
        </article>

        {/* Reactants and Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-5">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-emerald-400 mb-3 flex items-center gap-2">
              <Layers className="w-4 h-4" />
              <span>{isHindi ? 'अभिकारक (Reactants)' : 'Reactants'}</span>
            </h2>
            <ul className="space-y-2">
              {reaction.reactants?.map((r, i) => (
                <li key={i} className="text-xs sm:text-sm text-slate-200 font-mono flex items-center gap-2 bg-slate-950/50 p-2.5 rounded-lg border border-slate-800/60">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                  <span>{formatChemicalFormula(r)}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-5">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-cyan-400 mb-3 flex items-center gap-2">
              <Sparkles className="w-4 h-4" />
              <span>{isHindi ? 'उत्पाद (Products)' : 'Products'}</span>
            </h2>
            <ul className="space-y-2">
              {reaction.products?.map((p, i) => (
                <li key={i} className="text-xs sm:text-sm text-slate-200 font-mono flex items-center gap-2 bg-slate-950/50 p-2.5 rounded-lg border border-slate-800/60">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                  <span>{formatChemicalFormula(p)}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Detailed Scientific Explanation */}
        <section className="bg-slate-900/70 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-4">
          <h2 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
            <FlaskConical className="w-5 h-5 text-cyan-400" />
            <span>{isHindi ? 'रासायनिक क्रियाविधि एवं वैज्ञानिक व्याख्या' : 'Reaction Mechanism & Explanation'}</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            {explanation}
          </p>

          {/* Bilingual Dual Explanation if viewing either language */}
          <div className="mt-4 p-4 rounded-xl bg-slate-950/60 border border-slate-800 text-xs text-slate-400 space-y-1">
            <span className="font-semibold text-slate-300 block">
              {isHindi ? 'English Scientific Abstract:' : 'हिंदी सारांश:'}
            </span>
            <p className="italic">
              {isHindi ? reaction.explanation : reaction.hindiExplanation}
            </p>
          </div>
        </section>

        {/* Step-by-Step Stoichiometric / Mechanistic Stages */}
        {steps && steps.length > 0 && (
          <section className="bg-slate-900/70 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-4">
            <h2 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-400" />
              <span>{isHindi ? 'चरणबद्ध क्रियाविधि (Step-by-Step Process)' : 'Step-by-Step Mechanism'}</span>
            </h2>
            <div className="space-y-3">
              {steps.map((st, i) => (
                <div key={i} className="flex items-start gap-3 bg-slate-950/60 p-3.5 rounded-xl border border-slate-800/80">
                  <span className="w-6 h-6 rounded-full bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                    {i + 1}
                  </span>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {st}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Practical Applications & Laboratory Significance */}
        {practicalExamples && practicalExamples.length > 0 && (
          <section className="bg-slate-900/70 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-4">
            <h2 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-amber-400" />
              <span>{isHindi ? 'व्यावहारिक अनुप्रयोग एवं औद्योगिक महत्व' : 'Real-World Practical Applications'}</span>
            </h2>
            <ul className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {practicalExamples.map((ex, i) => (
                <li key={i} className="bg-slate-950/60 p-4 rounded-xl border border-slate-800/80 text-xs sm:text-sm text-slate-300">
                  {ex}
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Safety Precautions */}
        {safetyNotes && (
          <section className="bg-rose-950/20 border border-rose-500/30 rounded-2xl p-5 sm:p-6 space-y-2">
            <div className="flex items-center space-x-2 text-rose-400 font-semibold text-sm">
              <ShieldAlert className="w-4 h-4" />
              <span>{isHindi ? 'प्रयोगशाला सुरक्षा एवं सावधानियाँ' : 'Laboratory Safety & Precautions'}</span>
            </div>
            <p className="text-xs sm:text-sm text-rose-200/90 leading-relaxed">
              {safetyNotes}
            </p>
          </section>
        )}

        {/* Related Elements Badges */}
        {reaction.relatedElements && reaction.relatedElements.length > 0 && (
          <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
            <span className="text-xs text-slate-400 font-medium">
              {isHindi ? 'संबंधित रासायनिक तत्व (Related Elements):' : 'Participating Chemical Elements:'}
            </span>
            <div className="flex items-center space-x-2">
              {reaction.relatedElements.map((sym) => (
                <Link
                  key={sym}
                  to={`${prefix}/element/${sym}`}
                  className="px-3 py-1 rounded-xl bg-slate-900 hover:bg-cyan-500/20 text-cyan-400 font-mono font-bold text-xs border border-slate-800 hover:border-cyan-500/40 transition-colors"
                >
                  {sym}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
}

