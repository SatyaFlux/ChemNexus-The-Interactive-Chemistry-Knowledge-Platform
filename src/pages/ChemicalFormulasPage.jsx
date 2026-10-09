// src/pages/ChemicalFormulasPage.jsx
// Comprehensive searchable directory of chemical formulas, IUPAC names, common names, and criss-cross rules.

import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { chemicalCompoundsList, formulaRules } from '@/data/chemicalFormulasData';
import { formatChemicalFormula } from '@/utils/chemistryUtils';
import { useLanguage } from '@/context/LanguageContext';
import SEOHead from '@/components/seo/SEOHead';
import { createBreadcrumbSchema, createGuideSchema, createFAQSchema } from '@/utils/seoHelpers';
import {
  BookOpen,
  Search,
  Filter,
  ChevronRight,
  HelpCircle,
  Sparkles,
  Layers
} from 'lucide-react';

export default function ChemicalFormulasPage() {
  const { isHindi } = useLanguage();
  const prefix = isHindi ? '/hi' : '';
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', label: isHindi ? 'सभी यौगिक' : 'All Compounds' },
    { id: 'Mineral Acid', label: isHindi ? 'खनिज अम्ल' : 'Mineral Acids' },
    { id: 'Base', label: isHindi ? 'क्षार' : 'Bases' },
    { id: 'Ionic', label: isHindi ? 'आयनिक लवण' : 'Ionic Salts' },
    { id: 'Hydrated Salt', label: isHindi ? 'जलयोजित लवण' : 'Hydrated Salts' },
    { id: 'Covalent', label: isHindi ? 'सहसंयोजक यौगिक' : 'Covalent Compounds' },
  ];

  const filteredCompounds = useMemo(() => {
    return chemicalCompoundsList.filter((item) => {
      // Category match
      if (selectedCategory !== 'all') {
        if (!item.category.toLowerCase().includes(selectedCategory.toLowerCase())) {
          return false;
        }
      }

      // Search match
      if (searchTerm) {
        const q = searchTerm.toLowerCase().trim();
        const matchFormula = item.formula.toLowerCase().includes(q);
        const matchName = item.name.toLowerCase().includes(q);
        const matchHindi = item.hindiName?.toLowerCase().includes(q);
        const matchCommon = item.commonName?.toLowerCase().includes(q);
        const matchHindiCommon = item.hindiCommonName?.toLowerCase().includes(q);
        const matchIupac = item.iupacName?.toLowerCase().includes(q);
        return matchFormula || matchName || matchHindi || matchCommon || matchHindiCommon || matchIupac;
      }

      return true;
    });
  }, [searchTerm, selectedCategory]);

  const pageTitle = isHindi
    ? 'महत्वपूर्ण रासायनिक सूत्र एवं रासायनिक नाम (100+ यौगिकों की सूची) | ChemNexus'
    : 'Chemistry Formulas and Names Chart: 100+ Essential Compounds | ChemNexus';

  const pageDescription = isHindi
    ? 'दैनिक जीवन और परीक्षा में प्रयुक्त होने वाले महत्वपूर्ण रासायनिक सूत्र (Chemical Formulas), साधारण नाम, IUPAC नाम और सूत्र बनाने का कैंची नियम (Criss-Cross Rule)।'
    : 'Comprehensive list of chemical formulas and names. Search ionic and covalent formulas, common names (baking soda, washing soda), IUPAC names, and molar masses.';

  const keywords = isHindi
    ? 'रासायनिक सूत्र, रासायनिक नाम, chemical formula in hindi, महत्वपूर्ण रासायनिक सूत्र, बेकिंग सोडा का सूत्र, धावन सोडा सूत्र, विरंजक चूर्ण, रासायनिक यौगिक'
    : 'chemistry formulas, chemical formulas and names, chemistry formulas list, chemical formula in hindi, baking soda formula, common chemical compounds, chemical formula chart';

  const canonicalPath = `${prefix}/chemical-formulas`;

  const breadcrumbItems = [
    { name: isHindi ? 'होम' : 'Home', path: isHindi ? '/hi' : '/' },
    { name: isHindi ? 'रासायनिक सूत्र' : 'Chemical Formulas', path: canonicalPath }
  ];

  const faqs = [
    {
      q: 'What is the Criss-Cross method for writing chemical formulas?',
      hiQ: 'रासायनिक सूत्र लिखने का कैंची नियम (Criss-Cross Rule) क्या है?',
      a: 'In the Criss-Cross method, the numerical value of each ion\'s valency/charge is crossed over to become the subscript of the other ion. Signs are dropped and ratios simplified to lowest integers.',
      hiA: 'कैंची नियम में धनायन और ऋणायन के आवेशों के संख्यात्मक मानों को एक-दूसरे के पादांक (Subscript) में तिरछा बदलकर लिख दिया जाता है और अनुपात को न्यूनतम पूर्णांक में सरल करते हैं।'
    },
    {
      q: 'What is the chemical formula for Baking Soda and Washing Soda?',
      hiQ: 'बेकिंग सोडा (खाने का सोडा) और वाशिंग सोडा (धोने का सोडा) का सूत्र क्या है?',
      a: 'Baking Soda is Sodium Bicarbonate (NaHCO3). Washing Soda is Sodium Carbonate Decahydrate (Na2CO3·10H2O).',
      hiA: 'बेकिंग सोडा: NaHCO₃ (सोडियम हाइड्रोजन कार्बोनेट)। वाशिंग सोडा: Na₂CO₃·10H₂O (सोडियम कार्बोनेट डेकाहाइड्रेट)।'
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
        enPath="/chemical-formulas"
        hiPath="/hi/chemical-formulas"
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
          <span className="text-slate-200">
            {isHindi ? 'रासायनिक सूत्र एवं नाम' : 'Chemical Formulas'}
          </span>
        </nav>

        {/* Hero Header */}
        <header className="space-y-3">
          <div className="inline-flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-cyan-400">
            <BookOpen className="w-4 h-4" />
            <span>{isHindi ? 'रासायनिक नामकरण एवं सूत्र' : 'Nomenclature & Formulas'}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {isHindi ? 'महत्वपूर्ण रासायनिक सूत्र एवं नाम निर्देशिका' : 'Essential Chemical Formulas & Names'}
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-3xl leading-relaxed">
            {isHindi
              ? 'दैनिक जीवन, उद्योग और रसायन विज्ञान पाठ्यक्रम के सभी प्रमुख यौगिकों के रासायनिक सूत्र, IUPAC नाम, साधारण नाम और सूत्र निर्माण का कैंची नियम।'
              : 'Search and study essential chemical compounds, formulas, IUPAC systematic nomenclature, common commercial names, molar masses, and valency rules.'}
          </p>
        </header>

        {/* Criss-Cross Valency Rule Card */}
        <section className="bg-slate-900/70 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-4 shadow-xl">
          <div className="flex items-center space-x-2 text-cyan-400 font-semibold text-sm">
            <Sparkles className="w-4 h-4" />
            <span>{isHindi ? formulaRules.crissCross.hindiTitle : formulaRules.crissCross.title}</span>
          </div>
          <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
            {isHindi ? formulaRules.crissCross.hi : formulaRules.crissCross.en}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-2">
            {formulaRules.ionTypes.map((it, i) => (
              <div key={i} className="bg-slate-950/70 p-3.5 rounded-xl border border-slate-800 text-xs space-y-1">
                <span className="font-bold text-white block">
                  {isHindi ? it.hindiType : it.type}
                </span>
                <p className="font-mono text-cyan-300 text-[11px]">{it.examples}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Search & Category Filter */}
        <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-4 sm:p-5 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3 pointer-events-none" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder={isHindi ? 'सूत्र, यौगिक नाम या साधारण नाम खोजें (उदा. CaCO3, Baking Soda)...' : 'Search by formula, name, or common name (e.g. CaCO3, Bleaching Powder)...'}
              className="w-full bg-slate-950 border border-slate-800 focus:border-cyan-500 rounded-xl pl-10 pr-4 py-2.5 text-xs sm:text-sm text-slate-100 placeholder-slate-500 focus:outline-none transition-colors"
            />
          </div>

          <div className="flex items-center space-x-2 text-xs">
            <Filter className="w-3.5 h-3.5 text-cyan-400" />
            <span className="text-slate-400 font-medium">{isHindi ? 'वर्ग:' : 'Category:'}</span>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-cyan-300 font-semibold focus:outline-none cursor-pointer"
            >
              {categories.map((c) => (
                <option key={c.id} value={c.id} className="bg-slate-900 text-slate-200">
                  {c.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Compound Directory Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredCompounds.map((item, i) => (
            <article
              key={i}
              className="bg-slate-900/60 border border-slate-800 hover:border-cyan-500/40 rounded-2xl p-5 space-y-3 transition-all shadow-md flex flex-col justify-between group"
            >
              <div className="space-y-2">
                <div className="flex items-start justify-between gap-2">
                  <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                    {item.category}
                  </span>
                  <span className="text-[10px] font-mono text-slate-400">
                    {item.molarMass}
                  </span>
                </div>

                {/* Big Formula */}
                <div className="bg-slate-950 p-3 rounded-xl border border-slate-800/80 my-1">
                  <div className="text-xl sm:text-2xl font-mono font-bold text-cyan-300 group-hover:text-cyan-200 transition-colors">
                    {formatChemicalFormula(item.formula)}
                  </div>
                </div>

                {/* Names */}
                <div>
                  <h3 className="text-base font-bold text-white">
                    {isHindi ? item.hindiName : item.name}
                  </h3>
                  <p className="text-xs text-slate-400 font-mono">
                    IUPAC: {item.iupacName}
                  </p>
                  {(item.commonName || item.hindiCommonName) && (
                    <p className="text-xs text-amber-300/90 font-medium mt-0.5">
                      {isHindi ? `साधारण नाम: ${item.hindiCommonName || item.commonName}` : `Common Name: ${item.commonName}`}
                    </p>
                  )}
                </div>

                <p className="text-xs text-slate-300/90 leading-relaxed pt-1">
                  {item.uses}
                </p>
              </div>

              {/* Elements Chips */}
              <div className="pt-3 border-t border-slate-800/80 flex items-center space-x-1.5 text-xs">
                <span className="text-slate-500 text-[11px]">{isHindi ? 'तत्व:' : 'Elements:'}</span>
                {item.elements.map((sym) => (
                  <Link
                    key={sym}
                    to={`${prefix}/element/${sym}`}
                    className="px-2 py-0.5 rounded bg-slate-950 hover:bg-cyan-500/20 text-cyan-400 font-mono font-bold border border-slate-800 hover:border-cyan-500/40 transition-colors text-[11px]"
                  >
                    {sym}
                  </Link>
                ))}
              </div>
            </article>
          ))}
        </div>

        {/* FAQs */}
        <section className="bg-slate-900/70 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-4">
          <h2 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-amber-400" />
            <span>{isHindi ? 'रासायनिक सूत्रों से जुड़े महत्वपूर्ण प्रश्नोत्तर (FAQ)' : 'Frequently Asked Questions'}</span>
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

