// src/pages/PeriodicTrendsPage.jsx
// Comprehensive guide to periodic table trends, valency, and electronic configurations.

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { periodicTrendsData } from '@/data/periodicTrendsData';
import { useLanguage } from '@/context/LanguageContext';
import SEOHead from '@/components/seo/SEOHead';
import { createBreadcrumbSchema, createGuideSchema, createFAQSchema } from '@/utils/seoHelpers';
import {
  SlidersHorizontal,
  ChevronRight,
  TrendingUp,
  Atom,
  HelpCircle,
  Sparkles,
  Layers,
  ArrowRight
} from 'lucide-react';

export default function PeriodicTrendsPage() {
  const { isHindi } = useLanguage();
  const prefix = isHindi ? '/hi' : '';
  const [activeTrendId, setActiveTrendId] = useState('atomic-radius');

  const activeTrend = periodicTrendsData.trends.find((t) => t.id === activeTrendId) || periodicTrendsData.trends[0];

  const pageTitle = isHindi
    ? 'आवर्त सारणी की प्रवृत्तियाँ, संयोजकता एवं इलेक्ट्रॉनिक विन्यास | ChemNexus'
    : 'Periodic Table Trends, Valency & Electronic Configuration | ChemNexus';

  const pageDescription = isHindi
    ? 'आवर्त सारणी की प्रमुख प्रवृत्तियाँ: परमाणु त्रिज्या, आयनन ऊर्जा, विद्युतऋणात्मकता, इलेक्ट्रॉन लब्धि एन्थैल्पी, तत्वों की संयोजकता और आउफबाऊ नियम अनुसार इलेक्ट्रॉनिक विन्यास।'
    : 'Master periodic table trends across periods and groups: atomic radius, ionization energy, electronegativity, valency of elements, and electronic configuration rules.';

  const keywords = isHindi
    ? 'आवर्त प्रवृत्तियाँ, तत्वों की संयोजकता, इलेक्ट्रॉनिक विन्यास, परमाणु क्रमांक, परमाणु द्रव्यमान, आउफबाऊ नियम, विद्युतऋणात्मकता, आयनन ऊर्जा, avart sarani trends'
    : 'periodic table trends, valency of elements, electronic configuration of elements, electronegativity trends, atomic radius trend, ionization energy, aufbau principle, periodic trends guide';

  const canonicalPath = `${prefix}/periodic-trends`;

  const breadcrumbItems = [
    { name: isHindi ? 'होम' : 'Home', path: isHindi ? '/hi' : '/' },
    { name: isHindi ? 'आवर्त सारणी' : 'Periodic Table', path: `${prefix}/periodic-table` },
    { name: isHindi ? 'आवर्त प्रवृत्तियाँ' : 'Periodic Trends', path: canonicalPath }
  ];

  const faqs = [
    {
      q: 'Why does electronegativity increase across a period from left to right?',
      hiQ: 'किसी आवर्त में बाएं से दाएं जाने पर विद्युतऋणात्मकता क्यों बढ़ती है?',
      a: 'Across a period, nuclear charge increases while atomic radius decreases. This allows the nucleus to exert a stronger electrostatic pull on shared electron pairs in covalent bonds.',
      hiA: 'आवर्त में प्रभावी नाभिकीय आवेश बढ़ता है और परमाणु का आकार छोटा होता है, जिससे नाभिक सहसंयोजक बंध के साझी के इलेक्ट्रॉनों को अधिक दृढ़ता से आकर्षित करता है।'
    },
    {
      q: 'Why do Chromium and Copper have anomalous electronic configurations?',
      hiQ: 'क्रोमियम और कॉपर का इलेक्ट्रॉनिक विन्यास सामान्य नियम से भिन्न क्यों होता है?',
      a: 'Half-filled (d5 for Cr) and fully-filled (d10 for Cu) d-subshells possess exceptional thermodynamic stability due to symmetrical electron distribution and maximum quantum exchange energy.',
      hiA: 'अर्ध-पूरित (Cr के लिए 3d⁵) और पूर्ण-पूरित (Cu के लिए 3d¹⁰) d-उपकोश सममित इलेक्ट्रॉन वितरण और अधिकतम विनिमय ऊर्जा के कारण अतिरिक्त स्थायित्व प्राप्त करते हैं।'
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
        enPath="/periodic-trends"
        hiPath="/hi/periodic-trends"
        structuredData={structuredData}
        lang={isHindi ? 'hi' : 'en'}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="flex items-center space-x-2 text-xs text-slate-400">
          <Link to={prefix || '/'} className="hover:text-cyan-400 transition-colors">
            {isHindi ? 'होम' : 'Home'}
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
          <Link to={`${prefix}/periodic-table`} className="hover:text-cyan-400 transition-colors">
            {isHindi ? 'आवर्त सारणी' : 'Periodic Table'}
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
          <span className="text-slate-200">
            {isHindi ? 'आवर्त प्रवृत्तियाँ एवं संयोजकता' : 'Periodic Trends'}
          </span>
        </nav>

        {/* Hero Header */}
        <header className="space-y-3">
          <div className="inline-flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-cyan-400">
            <SlidersHorizontal className="w-4 h-4" />
            <span>{isHindi ? 'आवर्ती नियम एवं सिद्धांत' : 'Periodic Law & Mechanics'}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {isHindi ? 'आवर्त सारणी की प्रवृत्तियाँ एवं संयोजकता' : 'Periodic Table Trends & Electronic Structures'}
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-3xl leading-relaxed">
            {isHindi ? periodicTrendsData.overview.hi : periodicTrendsData.overview.en}
          </p>
        </header>

        {/* Interactive Trend Selector Tab Group */}
        <section className="space-y-4">
          <div className="flex items-center overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-slate-800 gap-2 border-b border-slate-800">
            {periodicTrendsData.trends.map((t) => (
              <button
                key={t.id}
                onClick={() => setActiveTrendId(t.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all ${
                  activeTrendId === t.id
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm'
                    : 'text-slate-400 hover:text-white hover:bg-slate-900 border border-transparent'
                }`}
              >
                {isHindi ? t.hindiName : t.name}
              </button>
            ))}
          </div>

          {/* Active Trend Detailed Card */}
          <div className="bg-slate-900/70 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl">
            <div className="border-b border-slate-800 pb-4">
              <span className="text-[10px] font-mono font-semibold uppercase text-cyan-400">
                Property Analysis
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                {isHindi ? activeTrend.hindiName : activeTrend.name}
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
                {isHindi ? activeTrend.hindiDefinition : activeTrend.definition}
              </p>
            </div>

            {/* Across Period vs Down Group Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Across Period */}
              <div className="bg-slate-950/70 border border-slate-800 rounded-2xl p-5 space-y-2">
                <span className="text-[10px] uppercase font-mono text-cyan-400 font-bold block">
                  {isHindi ? 'आवर्त में (बाएं से दाएं →)' : 'Across Period (Left to Right →)'}
                </span>
                <div className="text-lg font-bold text-white">
                  {isHindi ? activeTrend.hindiAcrossPeriod : activeTrend.acrossPeriod}
                </div>
                <p className="text-xs text-slate-400 leading-relaxed pt-1">
                  {isHindi ? activeTrend.hindiAcrossPeriodReason : activeTrend.acrossPeriodReason}
                </p>
              </div>

              {/* Down Group */}
              <div className="bg-slate-950/70 border border-slate-800 rounded-2xl p-5 space-y-2">
                <span className="text-[10px] uppercase font-mono text-cyan-400 font-bold block">
                  {isHindi ? 'समूह में (ऊपर से नीचे ↓)' : 'Down Group (Top to Bottom ↓)'}
                </span>
                <div className="text-lg font-bold text-white">
                  {isHindi ? activeTrend.hindiDownGroup : activeTrend.downGroup}
                </div>
                <p className="text-xs text-slate-400 leading-relaxed pt-1">
                  {isHindi ? activeTrend.hindiDownGroupReason : activeTrend.downGroupReason}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Electronic Configuration Principles (Aufbau, Hund, Pauli) */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
            <Atom className="w-5 h-5 text-cyan-400" />
            <span>{isHindi ? 'इलेक्ट्रॉनिक विन्यास लिखने के प्रमुख नियम' : 'Rules for Writing Electronic Configurations'}</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {periodicTrendsData.configurationRules.map((cr, i) => (
              <div
                key={i}
                className="bg-slate-900/60 border border-slate-800 rounded-2xl p-5 space-y-2 shadow-md"
              >
                <div className="flex items-center space-x-2 text-cyan-400 font-bold text-sm">
                  <Sparkles className="w-4 h-4 text-cyan-400" />
                  <span>{isHindi ? cr.hindiRule : cr.rule}</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {isHindi ? cr.hi : cr.en}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQs */}
        <section className="bg-slate-900/70 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-4">
          <h2 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-amber-400" />
            <span>{isHindi ? 'आवर्त प्रवृत्तियों से जुड़े महत्वपूर्ण प्रश्नोत्तर (FAQ)' : 'Frequently Asked Questions'}</span>
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

