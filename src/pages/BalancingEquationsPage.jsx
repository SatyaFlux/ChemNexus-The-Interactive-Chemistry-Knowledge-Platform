// src/pages/BalancingEquationsPage.jsx
// Comprehensive guide to balancing chemical equations with worked atom tables, conservation laws, and practice problems.

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { balancingPrinciples, workedBalancingExamples, practiceEquations } from '@/data/balancingEquationsData';
import { formatChemicalFormula } from '@/utils/chemistryUtils';
import { useLanguage } from '@/context/LanguageContext';
import SEOHead from '@/components/seo/SEOHead';
import { createBreadcrumbSchema, createGuideSchema, createFAQSchema } from '@/utils/seoHelpers';
import {
  Scale,
  ChevronRight,
  CheckCircle2,
  HelpCircle,
  Sparkles,
  ArrowRight,
  Eye,
  EyeOff
} from 'lucide-react';

export default function BalancingEquationsPage() {
  const { isHindi } = useLanguage();
  const prefix = isHindi ? '/hi' : '';
  const [revealedSolutions, setRevealedSolutions] = useState({});

  const toggleReveal = (id) => {
    setRevealedSolutions((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const pageTitle = isHindi
    ? 'रासायनिक समीकरण संतुलित करना सीखें (स्टेप-बाय-स्टेप विधि एवं अभ्यास) | ChemNexus'
    : 'How to Balance Chemical Equations: Step-by-Step Rules & Practice | ChemNexus';

  const pageDescription = isHindi
    ? 'द्रव्यमान संरक्षण के नियम के आधार पर रासायनिक समीकरण संतुलित करने की सबसे आसान विधि। परमाणुओं की संख्या तालिका, हल किए गए उदाहरण और अभ्यास प्रश्न।'
    : 'Learn how to balance chemical equations step by step using the Law of Conservation of Mass. Includes worked atom tables, inspection rules, and practice problems.';

  const keywords = isHindi
    ? 'रासायनिक समीकरण संतुलित करना, रासायनिक समीकरण, संतुलित रासायनिक समीकरण, द्रव्यमान संरक्षण का नियम, rasayanik samikaran santulit karna, chemistry equations in hindi'
    : 'balanced chemical equations, balancing chemical equations, chemical reaction equations, chemistry equations and solutions, law of conservation of mass, how to balance equations';

  const canonicalPath = `${prefix}/balancing-equations`;

  const breadcrumbItems = [
    { name: isHindi ? 'होम' : 'Home', path: isHindi ? '/hi' : '/' },
    { name: isHindi ? 'समीकरण संतुलन' : 'Balancing Equations', path: canonicalPath }
  ];

  const faqs = [
    {
      q: 'Why can we never change the subscripts when balancing an equation?',
      hiQ: 'समीकरण संतुलित करते समय हम पादांक (Subscripts) क्यों नहीं बदल सकते?',
      a: 'Changing subscripts alters the chemical identity of the compound (e.g. changing H2O to H2O2 turns harmless water into toxic hydrogen peroxide). You can only adjust stoichiometric coefficients in front.',
      hiA: 'पादांक बदलने से पदार्थ की रासायनिक पहचान बदल जाती है (जैसे H₂O को H₂O₂ करने से जल की जगह विषैला हाइड्रोजन परॉक्साइड बन जाएगा)। आप केवल आगे के गुणांक (Coefficients) बदल सकते हैं।'
    },
    {
      q: 'What is the Law of Conservation of Mass in chemistry?',
      hiQ: 'रसायन विज्ञान में द्रव्यमान संरक्षण का नियम क्या है?',
      a: 'In any closed system, mass is neither created nor destroyed by chemical reactions. The total mass of reactants equals the total mass of products.',
      hiA: 'किसी रासायनिक अभिक्रिया में द्रव्यमान का न तो निर्माण होता है और न ही विनाश। अभिकारकों का कुल द्रव्यमान उत्पादों के कुल द्रव्यमान के बराबर होता है।'
    }
  ];

  const structuredData = [
    createBreadcrumbSchema(breadcrumbItems),
    createGuideSchema({
      title: pageTitle,
      description: pageDescription,
      path: canonicalPath,
      lang: isHindi ? 'hi' : 'en'
    }),
    createFAQSchema(faqs, isHindi ? 'hi' : 'en')
  ];

  return (
    <>
      <SEOHead
        title={pageTitle}
        description={pageDescription}
        keywords={keywords}
        canonicalPath={canonicalPath}
        enPath="/balancing-equations"
        hiPath="/hi/balancing-equations"
        structuredData={structuredData}
        lang={isHindi ? 'hi' : 'en'}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="flex items-center space-x-2 text-xs text-slate-400">
          <Link to={prefix || '/'} className="hover:text-cyan-400 transition-colors">
            {isHindi ? 'होम' : 'Home'}
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
          <span className="text-slate-200">
            {isHindi ? 'रासायनिक समीकरण संतुलित करना' : 'Balancing Equations'}
          </span>
        </nav>

        {/* Hero Banner */}
        <header className="space-y-3">
          <div className="inline-flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-cyan-400">
            <Scale className="w-4 h-4" />
            <span>{isHindi ? 'रससमीकरणमिति एवं समीकरण' : 'Stoichiometry & Equations'}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {isHindi ? 'रासायनिक समीकरण संतुलित करने की सम्पूर्ण विधि' : 'How to Balance Chemical Equations'}
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-3xl leading-relaxed">
            {isHindi
              ? 'द्रव्यमान संरक्षण के नियम के आधार पर रासायनिक समीकरणों को चरणबद्ध तरीके से संतुलित करना सीखें। परमाणु गणना सारणी और परीक्षा अभ्यास प्रश्न।'
              : 'Master the art of balancing chemical equations using atom tally tables, the Law of Conservation of Mass, and inspection strategies.'}
          </p>
        </header>

        {/* Fundamental Law of Conservation of Mass */}
        <section className="bg-gradient-to-r from-cyan-950/30 via-slate-900 to-slate-900 border border-cyan-500/30 rounded-3xl p-6 sm:p-8 space-y-3">
          <div className="flex items-center space-x-2 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
            <Scale className="w-4 h-4" />
            <span>{isHindi ? balancingPrinciples.law.hindiTitle : balancingPrinciples.law.title}</span>
          </div>
          <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-medium">
            "{isHindi ? balancingPrinciples.law.hi : balancingPrinciples.law.en}"
          </p>
        </section>

        {/* 5-Step Golden Rules */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-emerald-400" />
            <span>{isHindi ? 'समीकरण संतुलित करने के 5 मूलभूत नियम' : '5 Golden Rules for Balancing Equations'}</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {balancingPrinciples.rules.map((rule) => (
              <div
                key={rule.step}
                className="bg-slate-900/70 border border-slate-800 rounded-2xl p-5 space-y-2"
              >
                <div className="flex items-center space-x-3">
                  <span className="w-7 h-7 rounded-full bg-cyan-500/20 text-cyan-400 font-bold text-xs flex items-center justify-center border border-cyan-500/30">
                    {rule.step}
                  </span>
                  <h3 className="text-sm font-bold text-white">
                    {isHindi ? rule.hindiTitle : rule.title}
                  </h3>
                </div>
                <p className="text-xs text-slate-300/90 leading-relaxed pl-10">
                  {isHindi ? rule.hi : rule.en}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Worked Examples with Atom Counting Tables */}
        <section className="space-y-6">
          <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-amber-400" />
            <span>{isHindi ? 'हल किए गए उदाहरण (चरणबद्ध परमाणु गणना तालिका)' : 'Worked Examples with Atom Counting Tables'}</span>
          </h2>

          <div className="space-y-6">
            {workedBalancingExamples.map((ex) => (
              <article
                key={ex.id}
                className="bg-slate-900/60 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-5 shadow-lg"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-4">
                  <div>
                    <span className="text-[10px] font-mono text-cyan-400 uppercase font-semibold">
                      {ex.type}
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold text-white">
                      {isHindi ? ex.hindiTitle : ex.title}
                    </h3>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] text-slate-400 block font-mono">Unbalanced:</span>
                    <code className="text-xs text-rose-300 font-mono">{ex.unbalanced}</code>
                  </div>
                </div>

                {/* Final Balanced Box */}
                <div className="bg-slate-950 p-4 rounded-2xl border border-emerald-500/30">
                  <span className="text-[10px] uppercase font-mono text-emerald-400 font-bold block mb-1">
                    {isHindi ? 'अंतिम संतुलित समीकरण (Final Balanced Equation)' : 'Final Balanced Equation'}
                  </span>
                  <div className="text-base sm:text-xl font-mono font-bold text-emerald-300">
                    {formatChemicalFormula(ex.balanced)}
                  </div>
                </div>

                {/* Step-by-Step Table Progression */}
                <div className="space-y-3">
                  <h4 className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                    {isHindi ? 'चरणबद्ध संतुलन प्रक्रिया:' : 'Step-by-Step Progression:'}
                  </h4>
                  {ex.steps.map((st) => (
                    <div key={st.stepNum} className="bg-slate-950/70 p-4 rounded-xl border border-slate-800/80 space-y-3">
                      <p className="text-xs sm:text-sm text-cyan-300 font-medium">
                        Step {st.stepNum}: {isHindi ? st.hindiAction : st.action}
                      </p>

                      {/* Atom Table */}
                      <table className="w-full text-left text-xs font-mono border-collapse">
                        <thead>
                          <tr className="border-b border-slate-800 text-slate-400">
                            <th className="py-1">Element</th>
                            <th className="py-1">Reactants (LHS)</th>
                            <th className="py-1">Products (RHS)</th>
                            <th className="py-1">Status</th>
                          </tr>
                        </thead>
                        <tbody>
                          {st.table.map((row) => (
                            <tr key={row.element} className="border-b border-slate-900 text-slate-300">
                              <td className="py-1.5 font-bold text-white">{row.element}</td>
                              <td className="py-1.5">{row.lhs}</td>
                              <td className="py-1.5">{row.rhs}</td>
                              <td className="py-1.5">
                                <span className={`px-2 py-0.5 rounded text-[10px] font-semibold ${
                                  row.status === 'Balanced'
                                    ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                                    : 'bg-rose-500/20 text-rose-300 border border-rose-500/30'
                                }`}>
                                  {row.status}
                                </span>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  ))}
                </div>

                <p className="text-xs text-slate-300 leading-relaxed pt-2">
                  {isHindi ? ex.hindiExplanation : ex.explanation}
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* Practice Exercises with Show/Hide Solution */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
            <Scale className="w-5 h-5 text-cyan-400" />
            <span>{isHindi ? 'स्वयं अभ्यास करें (Practice Equations)' : 'Practice Balancing Equations'}</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {practiceEquations.map((p) => {
              const isRevealed = revealedSolutions[p.id];
              return (
                <div
                  key={p.id}
                  className="bg-slate-900/60 border border-slate-800 rounded-2xl p-5 space-y-3"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-white">
                      {isHindi ? p.hindiTitle : p.title}
                    </span>
                    <button
                      onClick={() => toggleReveal(p.id)}
                      className="px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs flex items-center space-x-1.5 transition-colors"
                    >
                      {isRevealed ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                      <span>{isRevealed ? (isHindi ? 'छिपाएं' : 'Hide') : (isHindi ? 'उत्तर देखें' : 'Show Answer')}</span>
                    </button>
                  </div>

                  <div className="bg-slate-950 p-3 rounded-xl border border-slate-800/80 font-mono text-sm text-cyan-300">
                    {p.unbalanced}
                  </div>

                  <p className="text-[11px] text-slate-400 italic">
                    Hint: {p.hint}
                  </p>

                  {isRevealed && (
                    <div className="bg-emerald-950/30 border border-emerald-500/30 rounded-xl p-3 animate-in fade-in duration-150">
                      <span className="text-[10px] uppercase font-mono text-emerald-400 font-bold block mb-1">
                        {isHindi ? 'संतुलित समीकरण:' : 'Balanced Equation:'}
                      </span>
                      <div className="font-mono text-sm font-bold text-emerald-300">
                        {formatChemicalFormula(p.balanced)}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* FAQs Section */}
        <section className="bg-slate-900/70 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-4">
          <h2 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-amber-400" />
            <span>{isHindi ? 'महत्वपूर्ण प्रश्नोत्तर (FAQ)' : 'Frequently Asked Questions'}</span>
          </h2>
          <div className="space-y-3">
            {faqs.map((f, i) => (
              <div key={i} className="bg-slate-950/60 p-4 rounded-xl border border-slate-800 text-xs sm:text-sm space-y-1">
                <p className="font-bold text-slate-200">Q: {isHindi ? f.hiQ : f.q}</p>
                <p className="text-slate-400 leading-relaxed">A: {isHindi ? f.hiA : f.a}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}

