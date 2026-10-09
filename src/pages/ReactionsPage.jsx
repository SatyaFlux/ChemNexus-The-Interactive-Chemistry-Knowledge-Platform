// src/pages/ReactionsPage.jsx
import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { reactionsData } from '@/data/reactionsData';
import ReactionCard from '@/components/reactions/ReactionCard';
import { useLanguage } from '@/context/LanguageContext';
import SEOHead from '@/components/seo/SEOHead';
import { createBreadcrumbSchema, createGuideSchema } from '@/utils/seoHelpers';
import { FlaskConical, Search, Filter, Sparkles, ChevronRight, Compass, Scale } from 'lucide-react';

export default function ReactionsPage() {
  const { isHindi } = useLanguage();
  const prefix = isHindi ? '/hi' : '';
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('all');

  const reactionTypes = [
    { id: 'all', label: isHindi ? 'सभी अभिक्रिया प्रकार' : 'All Reaction Types' },
    { id: 'Combustion / Synthesis', label: isHindi ? 'दहन एवं संयोजन' : 'Combustion & Synthesis' },
    { id: 'Synthesis', label: isHindi ? 'संयोजन (Synthesis)' : 'Synthesis / Combination' },
    { id: 'Combustion', label: isHindi ? 'दहन (Combustion)' : 'Combustion' },
    { id: 'Single Displacement', label: isHindi ? 'एकल विस्थापन' : 'Single Displacement' },
    { id: 'Double Displacement', label: isHindi ? 'द्विविस्थापन' : 'Double Displacement' },
    { id: 'Decomposition', label: isHindi ? 'अपघटन (Decomposition)' : 'Decomposition' },
    { id: 'Redox', label: isHindi ? 'रेडॉक्स एवं ऑक्सीकरण' : 'Redox & Electrochemistry' },
    { id: 'Neutralization', label: isHindi ? 'उदासीनीकरण (Neutralization)' : 'Acid-Base Neutralization' },
    { id: 'Precipitation', label: isHindi ? 'अवक्षेपण (Precipitation)' : 'Precipitation' },
    { id: 'Disproportionation', label: isHindi ? 'विषमानुपातन' : 'Disproportionation' },
    { id: 'Electrochemical', label: isHindi ? 'विद्युत-रासायनिक' : 'Electrochemical & Batteries' },
    { id: 'Hydrolysis', label: isHindi ? 'जल अपघटन' : 'Hydrolysis & Saponification' },
  ];

  const filteredReactions = useMemo(() => {
    return reactionsData.filter((rx) => {
      // Search filter (English and Hindi)
      if (searchTerm) {
        const q = searchTerm.toLowerCase().trim();
        const matchTitle = rx.title.toLowerCase().includes(q);
        const matchHindiTitle = rx.hindiTitle && rx.hindiTitle.toLowerCase().includes(q);
        const matchEq = rx.equation.toLowerCase().includes(q);
        const matchElements = rx.relatedElements?.some((sym) => sym.toLowerCase() === q);
        const matchReactants = rx.reactants?.some((r) => r.toLowerCase().includes(q));
        const matchProducts = rx.products?.some((p) => p.toLowerCase().includes(q));
        const matchExplanation = rx.explanation?.toLowerCase().includes(q) || (rx.hindiExplanation && rx.hindiExplanation.toLowerCase().includes(q));

        if (!matchTitle && !matchHindiTitle && !matchEq && !matchElements && !matchReactants && !matchProducts && !matchExplanation) {
          return false;
        }
      }

      // Type filter
      if (selectedType !== 'all') {
        const typeLower = (rx.type || '').toLowerCase();
        const hindiTypeLower = (rx.hindiType || '').toLowerCase();
        if (selectedType === 'Combustion / Synthesis') {
          if (!typeLower.includes('combustion') && !typeLower.includes('synthesis')) {
            return false;
          }
        } else if (!typeLower.includes(selectedType.toLowerCase()) && !hindiTypeLower.includes(selectedType.toLowerCase())) {
          return false;
        }
      }

      return true;
    });
  }, [searchTerm, selectedType]);

  const pageTitle = isHindi
    ? 'रासायनिक अभिक्रियाएँ एवं समीकरण — 150+ अभिक्रियाएँ उदाहरण सहित | ChemNexus'
    : 'Chemical Reactions Database: 150+ Verified Equations & Mechanisms | ChemNexus';

  const pageDescription = isHindi
    ? 'रासायनिक अभिक्रियाएँ उदाहरण सहित: 150+ संतुलित रासायनिक समीकरण, अभिक्रिया परिस्थितियाँ, क्रियाविधि और प्रकार। कक्षा 10, 11, 12 एवं NEET/JEE के लिए।'
    : 'Explore 150+ verified chemical reactions with balanced equations, thermodynamic conditions, catalysts, and step-by-step explanations in English and Hindi.';

  const keywords = isHindi
    ? 'रासायनिक अभिक्रियाएँ, रासायनिक अभिक्रियाओं के प्रकार, रासायनिक समीकरण, rasayanik abhikriya, chemistry reactions in hindi, रासायनिक अभिक्रियाएँ उदाहरण सहित, संतुलित रासायनिक समीकरण'
    : 'chemical reactions, types of chemical reactions, chemical reaction equations, balanced chemical equations, rasayanik abhikriya, chemistry reactions in hindi, chemical reaction mechanisms';

  const canonicalPath = `${prefix}/reactions`;

  const breadcrumbItems = [
    { name: isHindi ? 'होम' : 'Home', path: isHindi ? '/hi' : '/' },
    { name: isHindi ? 'रासायनिक अभिक्रियाएँ' : 'Chemical Reactions', path: canonicalPath }
  ];

  const structuredData = [
    createBreadcrumbSchema(breadcrumbItems),
    createGuideSchema({
      title: pageTitle,
      description: pageDescription,
      path: canonicalPath,
      lang: isHindi ? 'hi' : 'en'
    })
  ];

  return (
    <>
      <SEOHead
        title={pageTitle}
        description={pageDescription}
        keywords={keywords}
        canonicalPath={canonicalPath}
        enPath="/reactions"
        hiPath="/hi/reactions"
        structuredData={structuredData}
        lang={isHindi ? 'hi' : 'en'}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="flex items-center space-x-2 text-xs text-slate-400">
          <Link to={prefix || '/'} className="hover:text-cyan-400 transition-colors">
            {isHindi ? 'होम' : 'Home'}
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
          <span className="text-slate-200">
            {isHindi ? 'रासायनिक अभिक्रियाएँ' : 'Chemical Reactions'}
          </span>
        </nav>

        {/* Page Title & Intro */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-2">
            <div className="inline-flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-cyan-400">
              <FlaskConical className="w-4 h-4" />
              <span>{isHindi ? 'रासायनिक अभिक्रिया डेटाबेस' : 'Chemical Reaction Explorer'}</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white">
              {isHindi ? 'सत्यापित रासायनिक अभिक्रियाएँ एवं समीकरण' : 'Verified Chemical Reactions & Stoichiometry'}
            </h1>
            <p className="text-sm text-slate-400 max-w-2xl leading-relaxed">
              {isHindi
                ? 'संतुलित समीकरण, ऊष्मागतिकी और अभिक्रिया परिस्थितियों के साथ आवश्यक औद्योगिक संश्लेषण, जैविक पथ और प्रयोगशाला अभिक्रियाओं का अन्वेषण करें।'
                : 'Study essential industrial syntheses, biological pathways, and laboratory benchmark reactions with balanced equations, thermodynamics, and reaction conditions.'}
            </p>
          </div>

          {/* Quick Guide Links */}
          <div className="flex items-center space-x-2 shrink-0">
            <Link
              to={`${prefix}/reaction-types`}
              className="px-3.5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-cyan-300 border border-slate-700 hover:border-cyan-500/40 text-xs font-semibold flex items-center space-x-1.5 transition-all shadow-sm"
            >
              <Compass className="w-3.5 h-3.5" />
              <span>{isHindi ? 'अभिक्रिया प्रकार' : 'Reaction Types'}</span>
            </Link>
            <Link
              to={`${prefix}/balancing-equations`}
              className="px-3.5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-cyan-300 border border-slate-700 hover:border-cyan-500/40 text-xs font-semibold flex items-center space-x-1.5 transition-all shadow-sm"
            >
              <Scale className="w-3.5 h-3.5" />
              <span>{isHindi ? 'समीकरण संतुलन' : 'Balancing Guide'}</span>
            </Link>
          </div>
        </div>

        {/* Filter and Search Bar */}
        <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-4 sm:p-5 flex flex-col md:flex-row md:items-center justify-between gap-4">
          {/* Search */}
          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3 pointer-events-none" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder={isHindi ? 'अभिक्रिया, सूत्र या तत्व खोजें (उदा. Haber, H2, Fe, जल)...' : 'Search by reaction, formula, or element (e.g. Haber, H2, Fe)...'}
              className="w-full bg-slate-950 border border-slate-800 focus:border-cyan-500 rounded-xl pl-10 pr-4 py-2.5 text-xs sm:text-sm text-slate-100 placeholder-slate-500 focus:outline-none transition-colors"
            />
          </div>

          {/* Reaction Type Selector */}
          <div className="flex items-center space-x-2 text-xs">
            <Filter className="w-3.5 h-3.5 text-cyan-400" />
            <span className="text-slate-400 font-medium">{isHindi ? 'प्रकार:' : 'Type:'}</span>
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-cyan-300 font-semibold focus:outline-none cursor-pointer"
            >
              {reactionTypes.map((t) => (
                <option key={t.id} value={t.id} className="bg-slate-900 text-slate-200">
                  {t.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Results Count */}
        <div className="flex items-center justify-between text-xs text-slate-400 px-1 font-mono">
          <span>{isHindi ? 'प्रदर्शित अभिक्रियाएँ:' : 'Showing'} <strong className="text-white">{filteredReactions.length}</strong> {isHindi ? 'अभिक्रियाएँ' : 'reactions'}</span>
        </div>

        {/* Reactions Grid */}
        {filteredReactions.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredReactions.map((rx) => (
              <ReactionCard key={rx.id} reaction={rx} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-slate-900/40 rounded-3xl border border-slate-800">
            <Sparkles className="w-10 h-10 text-slate-600 mx-auto mb-3" />
            <h3 className="text-base font-semibold text-slate-300">
              {isHindi ? 'कोई अभिक्रिया नहीं मिली' : 'No Reactions Match Your Criteria'}
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              {isHindi
                ? 'खोज शब्द बदलकर या फ़िल्टर रीसेट करके पुनः प्रयास करें।'
                : 'Try adjusting your search keywords or resetting the reaction type filter.'}
            </p>
          </div>
        )}
      </div>
    </>
  );
}
