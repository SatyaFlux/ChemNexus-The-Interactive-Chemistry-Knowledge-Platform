// src/pages/HomePage.jsx
import React, { useState, useRef, useEffect, useMemo } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Atom,
  TableProperties,
  FlaskConical,
  Sparkles,
  ArrowRight,
  ArrowLeft,
  Search,
  ShieldCheck,
  Zap,
  BookOpen,
  Bookmark,
  Box,
  Compass,
  FileText,
  SlidersHorizontal,
  Scale
} from 'lucide-react';
import { elementsData } from '@/data/elementsData';
import { getCategoryMeta, formatChemicalFormula } from '@/utils/chemistryUtils';
import { useBookmarks } from '@/context/BookmarkContext';
import { useLanguage } from '@/context/LanguageContext';
import SEOHead from '@/components/seo/SEOHead';
import { createWebSiteSchema, createOrganizationSchema } from '@/utils/seoHelpers';

// Helper to find best matching element by symbol, name, Hindi name, or atomic number
function findElementMatch(query) {
  if (!query || !query.trim()) return null;
  const q = query.trim().toLowerCase();

  // 1. Exact match by symbol (e.g. "Fe", "H", "Au", "O")
  const exactSymbol = elementsData.find((el) => el.symbol.toLowerCase() === q);
  if (exactSymbol) return exactSymbol;

  // 2. Exact match by English name (e.g. "Iron", "Gold", "Hydrogen")
  const exactName = elementsData.find((el) => el.name.toLowerCase() === q);
  if (exactName) return exactName;

  // 3. Exact match by Hindi name (e.g. "हाइड्रोजन", "लोहा", "कार्बन")
  const exactHindiName = elementsData.find((el) => el.hindiName && el.hindiName.toLowerCase() === q);
  if (exactHindiName) return exactHindiName;

  // 4. Exact match by atomic number (e.g. "26", "1", "79", "118")
  const atomicNum = parseInt(q, 10);
  if (!isNaN(atomicNum) && atomicNum >= 1 && atomicNum <= 118) {
    const numMatch = elementsData.find((el) => el.number === atomicNum);
    if (numMatch) return numMatch;
  }

  // 5. Starts with symbol (e.g. "fe") or name starts with query (e.g. "hydr")
  const startsWithSymbol = elementsData.find((el) => el.symbol.toLowerCase().startsWith(q));
  if (startsWithSymbol) return startsWithSymbol;

  const startsWithName = elementsData.find((el) => el.name.toLowerCase().startsWith(q));
  if (startsWithName) return startsWithName;

  // 6. Name or Hindi name contains query
  const containsName = elementsData.find((el) => el.name.toLowerCase().includes(q) || (el.hindiName && el.hindiName.toLowerCase().includes(q)));
  if (containsName) return containsName;

  return null;
}

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);
  const searchContainerRef = useRef(null);
  const navigate = useNavigate();
  const { toggleBookmark, isBookmarked } = useBookmarks();
  const { t, getTranslatedCategory, isHindi } = useLanguage();
  const prefix = isHindi ? '/hi' : '';

  // Featured Element of the Day (Cycles by day of year)
  const dayOfYear = Math.floor((new Date() - new Date(new Date().getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);
  const featuredIndex = dayOfYear % elementsData.length;
  const featuredElement = elementsData[featuredIndex] || elementsData[25]; // Iron default

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchContainerRef.current && !searchContainerRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Compute live search matches for instant dropdown suggestions
  const searchMatches = useMemo(() => {
    if (!searchQuery || !searchQuery.trim()) return [];
    const q = searchQuery.trim().toLowerCase();

    return elementsData
      .filter((el) => {
        const matchSymbol = el.symbol.toLowerCase().startsWith(q);
        const matchName = el.name.toLowerCase().includes(q);
        const matchHindi = el.hindiName && el.hindiName.toLowerCase().includes(q);
        const matchNumber = el.number.toString() === q;
        return matchSymbol || matchName || matchHindi || matchNumber;
      })
      .slice(0, 6);
  }, [searchQuery]);

  // Form submission: open element page or fallback to deep search
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;

    setShowDropdown(false);
    const matched = findElementMatch(searchQuery);
    if (matched) {
      navigate(`${prefix}/element/${matched.symbol}`);
    } else {
      navigate(`${prefix}/search?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  const handleQuickOpen = (elementName) => {
    const matched = findElementMatch(elementName);
    if (matched) {
      navigate(`${prefix}/element/${matched.symbol}`);
    } else {
      navigate(`${prefix}/search?q=${encodeURIComponent(elementName)}`);
    }
  };

  const featureCards = [
    {
      title: t('home_mod_periodicTable'),
      desc: t('home_mod_periodicTableDesc'),
      icon: TableProperties,
      link: `${prefix}/periodic-table`,
      color: 'from-cyan-500 to-blue-600',
    },
    {
      title: t('home_mod_reactionDb'),
      desc: t('home_mod_reactionDbDesc'),
      icon: FlaskConical,
      link: `${prefix}/reactions`,
      color: 'from-blue-500 to-indigo-600',
    },
    {
      title: t('home_mod_quizzes'),
      desc: t('home_mod_quizzesDesc'),
      image: '/images/quiz-icon.png',
      link: `${prefix}/quizzes`,
      color: 'from-emerald-500 to-teal-600',
    },
    {
      title: t('home_mod_assistant'),
      desc: t('home_mod_assistantDesc'),
      icon: Sparkles,
      link: '/assistant',
      color: 'from-purple-500 to-pink-600',
    },
  ];

  const guideCards = [
    {
      title: isHindi ? 'रासायनिक अभिक्रियाओं के प्रकार' : 'Types of Chemical Reactions',
      desc: isHindi ? 'संयोजन, वियोजन, विस्थापन, रेडॉक्स, दहन एवं उदासीनीकरण के 10 प्रकार।' : '10 reaction types with general formulas, mechanisms, and examples.',
      icon: Compass,
      link: `${prefix}/reaction-types`,
    },
    {
      title: isHindi ? 'समीकरण संतुलित करना' : 'Balancing Chemical Equations',
      desc: isHindi ? 'द्रव्यमान संरक्षण का नियम और चरणबद्ध परमाणु गणना तालिका।' : 'Step-by-step balancing with atom tally tables and practice problems.',
      icon: Scale,
      link: `${prefix}/balancing-equations`,
    },
    {
      title: isHindi ? 'महत्वपूर्ण रासायनिक सूत्र' : 'Chemical Formulas & Names',
      desc: isHindi ? '100+ यौगिकों के IUPAC नाम, साधारण नाम और कैंची नियम।' : '100+ essential compounds, IUPAC nomenclature, and criss-cross rules.',
      icon: Box,
      link: `${prefix}/chemical-formulas`,
    },
    {
      title: isHindi ? 'आवर्त प्रवृत्तियाँ एवं संयोजकता' : 'Periodic Trends & Valency',
      desc: isHindi ? 'परमाणु त्रिज्या, आयनन ऊर्जा, विद्युतऋणात्मकता और आउफबाऊ नियम।' : 'Atomic radius, electronegativity, ionization energy, and configurations.',
      icon: SlidersHorizontal,
      link: `${prefix}/periodic-trends`,
    },
    {
      title: isHindi ? 'रसायन विज्ञान नोट्स & FAQs' : 'Chemistry Notes & Q&A',
      desc: isHindi ? 'कक्षा 9-12, NEET और JEE के लिए अध्याय सारांश और प्रश्नोत्तरी।' : 'High-yield revision notes, core concepts, and high-yield chemistry FAQs.',
      icon: FileText,
      link: `${prefix}/chemistry-notes`,
    },
  ];

  // SEO Titles, Descriptions & Structured Data
  const pageTitle = isHindi
    ? 'ChemNexus — द्विभाषी रसायन विज्ञान ज्ञान मंच | आवर्त सारणी एवं अभिक्रियाएँ'
    : 'ChemNexus — Bilingual Chemistry Learning Platform | Periodic Table & Reactions';

  const pageDescription = isHindi
    ? 'ChemNexus: भारत और विश्वभर के विद्यार्थियों के लिए संपूर्ण रसायन विज्ञान मंच। सभी 118 तत्वों, 150+ रासायनिक अभिक्रियाओं, सूत्रों, समीकरणों और आवर्त प्रवृत्तियों का अध्ययन करें।'
    : 'ChemNexus is an authoritative bilingual chemistry platform covering all 118 periodic table elements, 150+ balanced chemical reactions, formulas, and step-by-step equation balancing.';

  const keywords = isHindi
    ? 'chemistry learning website, periodic table in Hindi, chemistry in Hindi, chemistry reactions in Hindi, avart sarani, rasayanik abhikriya, chemistry ke notes, chemical formula in hindi, आवर्त सारणी, रासायनिक अभिक्रियाएँ'
    : 'chemistry learning website, periodic table, interactive periodic table, all 118 elements, chemical reactions, balanced chemical equations, chemistry formulas, periodic table in Hindi, chemistry in Hindi';

  const structuredData = [
    createWebSiteSchema(),
    createOrganizationSchema()
  ];

  return (
    <>
      <SEOHead
        title={pageTitle}
        description={pageDescription}
        keywords={keywords}
        canonicalPath={prefix || '/'}
        enPath="/"
        hiPath="/hi"
        structuredData={structuredData}
        lang={isHindi ? 'hi' : 'en'}
      />

      <div className="space-y-12 sm:space-y-16 pb-16">
        {/* Top Back Page Navigation Button */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 sm:pt-6">
          <button
            onClick={() => {
              if (window.history.length > 1) {
                navigate(-1);
              } else {
                window.history.back();
              }
            }}
            className="inline-flex items-center space-x-2 px-4 py-2 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 hover:border-cyan-500/50 text-xs sm:text-sm font-medium shadow-md hover:shadow-cyan-500/10 transition-all group cursor-pointer"
            title={t('home_backButton')}
            aria-label={t('home_backButton')}
          >
            <ArrowLeft className="w-4 h-4 text-cyan-400 group-hover:-translate-x-1 transition-transform" />
            <span>{t('home_backButton')}</span>
          </button>
        </div>

        {/* HERO SECTION */}
        <section className="relative pt-6 sm:pt-10 pb-8 text-center space-y-6">
          {/* Subtle Ambient Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[600px] h-[350px] bg-cyan-500/10 blur-[130px] rounded-full pointer-events-none -z-10" />

          {/* IUPAC Badge */}
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-semibold shadow-inner">
            <ShieldCheck className="w-4 h-4 text-cyan-400" />
            <span>{t('home_iupacBadge')}</span>
          </div>

          {/* Hero Heading */}
          <div className="space-y-3 max-w-4xl mx-auto px-4">
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight">
              {t('home_heroTitle1')}{' '}
              <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-blue-500 bg-clip-text text-transparent">
                {t('home_heroTitle2')}
              </span>
            </h1>
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
              {t('home_heroSubtitle')}
            </p>
          </div>

          {/* Hero Quick Search Bar with Instant Element Autocomplete & Direct Opening */}
          <div ref={searchContainerRef} className="max-w-xl mx-auto px-4 pt-2 relative z-30">
            <form onSubmit={handleSearchSubmit} className="relative flex items-center shadow-2xl">
              <Search className="w-5 h-5 text-slate-400 absolute left-4 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onFocus={() => setShowDropdown(true)}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setShowDropdown(true);
                }}
                onKeyDown={(e) => {
                  if (e.key === 'Escape') {
                    setShowDropdown(false);
                  }
                }}
                placeholder={t('home_searchPlaceholder')}
                className="w-full bg-slate-900/95 border border-slate-700/80 focus:border-cyan-400 rounded-2xl pl-12 pr-28 py-3.5 text-sm text-slate-100 placeholder-slate-400 focus:outline-none transition-all shadow-inner"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => {
                    setSearchQuery('');
                    setShowDropdown(false);
                  }}
                  className="absolute right-24 text-xs text-slate-400 hover:text-white px-2 py-1 transition-colors cursor-pointer"
                >
                  {t('home_clear')}
                </button>
              )}
              <button
                type="submit"
                className="absolute right-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold text-xs rounded-xl shadow-md transition-all cursor-pointer"
              >
                {t('home_searchButton')}
              </button>
            </form>

            {/* Live Autocomplete Dropdown */}
            {showDropdown && searchQuery.trim() && (
              <div className="absolute left-4 right-4 mt-2 bg-slate-900/95 backdrop-blur-xl border border-slate-700 rounded-2xl shadow-2xl overflow-hidden z-50 animate-in fade-in slide-in-from-top-2 text-left">
                {searchMatches.length > 0 ? (
                  <div>
                    <div className="px-4 py-2 bg-slate-950/80 border-b border-slate-800 text-[11px] font-semibold text-slate-400 uppercase tracking-wider flex items-center justify-between">
                      <span>{t('home_matchingTitle')} "{searchQuery}"</span>
                      <span className="text-cyan-400 font-normal lowercase text-[10px]">{t('home_clickToOpen')}</span>
                    </div>
                    <div className="divide-y divide-slate-800/60 max-h-72 overflow-y-auto">
                      {searchMatches.map((el) => {
                        const cat = getCategoryMeta(el.category);
                        const catDisplayName = getTranslatedCategory(el.category, cat.name);
                        const elName = isHindi && el.hindiName ? el.hindiName : el.name;
                        return (
                          <div
                            key={el.symbol}
                            onClick={() => {
                              navigate(`${prefix}/element/${el.symbol}`);
                              setSearchQuery('');
                              setShowDropdown(false);
                            }}
                            className="flex items-center justify-between px-4 py-3 hover:bg-slate-800/80 cursor-pointer transition-colors group"
                          >
                            <div className="flex items-center space-x-3">
                              <span
                                className="w-10 h-10 rounded-xl flex items-center justify-center font-bold text-white text-base shadow-md group-hover:scale-105 transition-transform"
                                style={{ backgroundColor: cat.solidBg }}
                              >
                                {el.symbol}
                              </span>
                              <div>
                                <div className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors flex items-center gap-2">
                                  <span>{elName}</span>
                                  {isHindi && el.hindiName && (
                                    <span className="text-xs text-slate-400 font-normal">({el.name})</span>
                                  )}
                                  <span className="text-xs text-cyan-400 font-mono">#{el.number}</span>
                                </div>
                                <div className="text-xs text-slate-400">
                                  {catDisplayName} • <span className="font-mono">{el.atomicMass} u</span>
                                </div>
                              </div>
                            </div>
                            <div className="text-xs text-cyan-400 font-medium flex items-center gap-1 opacity-80 group-hover:opacity-100 group-hover:translate-x-1 transition-all">
                              <span>{t('home_open')}</span>
                              <ArrowRight className="w-3.5 h-3.5" />
                            </div>
                          </div>
                        );
                      })}
                    </div>
                    <div
                      onClick={() => {
                        navigate(`${prefix}/search?q=${encodeURIComponent(searchQuery.trim())}`);
                        setShowDropdown(false);
                      }}
                      className="px-4 py-2.5 bg-slate-950 hover:bg-slate-800/60 text-center text-xs text-slate-400 hover:text-cyan-300 cursor-pointer border-t border-slate-800 transition-colors"
                    >
                      {t('home_viewAllDeepSearch')} "{searchQuery}" {t('home_inDeepSearch')}
                    </div>
                  </div>
                ) : (
                  <div className="p-4 text-center text-xs text-slate-400">
                    <p>"{searchQuery}" {t('home_noMatches')}.</p>
                    <button
                      onClick={() => {
                        navigate(`${prefix}/search?q=${encodeURIComponent(searchQuery.trim())}`);
                        setShowDropdown(false);
                      }}
                      className="mt-2 text-cyan-400 hover:underline font-medium cursor-pointer"
                    >
                      {t('home_searchAllCompounds')}
                    </button>
                  </div>
                )}
              </div>
            )}

            {/* Quick suggestions */}
            <div className="flex items-center justify-center space-x-2 mt-3 text-xs text-slate-400">
              <span>{t('home_popular')}</span>
              {['Hydrogen', 'Iron', 'Gold', 'Uranium', 'Lithium'].map((name) => (
                <button
                  key={name}
                  type="button"
                  onClick={() => handleQuickOpen(name)}
                  className="hover:text-cyan-400 underline underline-offset-2 transition-colors cursor-pointer"
                >
                  {name}
                </button>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
            <Link
              to={`${prefix}/periodic-table`}
              className="px-6 py-3 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold text-sm flex items-center space-x-2 shadow-lg shadow-cyan-500/20 transition-all hover:scale-105"
            >
              <TableProperties className="w-4 h-4" />
              <span>{t('home_openPeriodicTable')}</span>
            </Link>

            <Link
              to={`${prefix}/periodic-table-3d`}
              className="px-6 py-3 rounded-2xl bg-gradient-to-r from-purple-600/80 to-cyan-600/80 hover:from-purple-500 hover:to-cyan-500 text-white font-semibold text-sm flex items-center space-x-2 border border-cyan-400/30 shadow-lg shadow-cyan-500/20 transition-all hover:scale-105"
            >
              <Box className="w-4 h-4 text-cyan-300" />
              <span>{t('home_launch3DAtlas')}</span>
            </Link>

            <Link
              to={`${prefix}/reactions`}
              className="px-6 py-3 rounded-2xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 font-semibold text-sm flex items-center space-x-2 transition-all hover:border-slate-600"
            >
              <FlaskConical className="w-4 h-4 text-cyan-400" />
              <span>{t('home_reactionDatabase')}</span>
            </Link>
          </div>
        </section>

        {/* FEATURED ELEMENT OF THE DAY */}
        <section className="max-w-5xl mx-auto px-4">
          <div className="bg-gradient-to-r from-slate-900/90 via-slate-900/60 to-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="space-y-3">
                <div className="flex items-center space-x-2 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
                  <Sparkles className="w-4 h-4" />
                  <span>{t('home_elementOfDay')}</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center font-bold text-2xl text-white shadow-xl"
                    style={{ backgroundColor: getCategoryMeta(featuredElement.category).solidBg }}
                  >
                    {featuredElement.symbol}
                  </div>
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-white">
                      {isHindi && featuredElement.hindiName ? featuredElement.hindiName : featuredElement.name}
                    </h3>
                    <p className="text-xs text-slate-400 font-mono">
                      {t('home_atomicNum')}{featuredElement.number} • {t('home_mass')} {featuredElement.atomicMass} u • {getTranslatedCategory(featuredElement.category, getCategoryMeta(featuredElement.category).name)}
                    </p>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-2xl">
                  {isHindi && featuredElement.hindiSummary ? featuredElement.hindiSummary : featuredElement.summary}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row md:flex-col gap-2 shrink-0">
                <Link
                  to={`${prefix}/element/${featuredElement.symbol}`}
                  className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold text-xs flex items-center justify-center space-x-1.5 shadow-md shadow-cyan-500/20 transition-all"
                >
                  <span>{t('home_viewFullProfile')}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <button
                  onClick={() => toggleBookmark(featuredElement)}
                  className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-medium flex items-center justify-center space-x-1.5 transition-colors border border-slate-700"
                >
                  <Bookmark className={`w-3.5 h-3.5 ${isBookmarked(featuredElement.symbol) ? 'text-amber-400 fill-amber-400' : ''}`} />
                  <span>{isBookmarked(featuredElement.symbol) ? t('home_bookmarked') : t('home_bookmarkElement')}</span>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* CORE PLATFORM MODULES */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              {t('home_modulesHeading')}
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 max-w-xl mx-auto">
              {t('home_modulesSubheading')}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featureCards.map((feat, idx) => {
              const Icon = feat.icon;
              return (
                <Link
                  key={idx}
                  to={feat.link}
                  className="bg-slate-900/60 border border-slate-800 hover:border-cyan-500/40 rounded-3xl p-6 transition-all hover:shadow-xl hover:shadow-cyan-500/10 flex flex-col justify-between group"
                >
                  <div className="space-y-4">
                    {feat.image ? (
                      <div className="w-12 h-12 rounded-2xl overflow-hidden shadow-lg shadow-emerald-500/10 group-hover:scale-110 transition-transform bg-slate-950 border border-slate-700/60 flex items-center justify-center">
                        <img
                          src={feat.image}
                          alt={feat.title}
                          className="w-full h-full object-cover scale-105"
                        />
                      </div>
                    ) : (
                      <div className={`w-12 h-12 rounded-2xl bg-gradient-to-tr ${feat.color} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform`}>
                        <Icon className="w-6 h-6" />
                      </div>
                    )}
                    <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {feat.title}
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {feat.desc}
                    </p>
                  </div>

                  <div className="pt-4 flex items-center text-xs font-semibold text-cyan-400 group-hover:translate-x-1 transition-transform">
                    <span>{t('home_exploreModule')}</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1" />
                  </div>
                </Link>
              );
            })}
          </div>
        </section>

        {/* CHEMISTRY STUDY GUIDES & CURRICULUM SECTION */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="text-center space-y-2">
            <div className="inline-flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-cyan-400">
              <BookOpen className="w-4 h-4" />
              <span>{isHindi ? 'रसायन विज्ञान पाठ्यक्रम एवं मार्गदर्शिका' : 'Chemistry Curriculum & Guides'}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              {isHindi ? 'परीक्षा और शोध के लिए विशेष अध्ययन सामग्री' : 'Specialized Chemistry Reference Guides'}
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 max-w-xl mx-auto">
              {isHindi
                ? 'अभिक्रिया प्रकार, संतुलित समीकरण, सूत्र, प्रवृत्तियाँ और महत्वपूर्ण प्रश्नोत्तर।'
                : 'Deep-dive into reaction mechanisms, balancing equations, nomenclature, periodic trends, and revision notes.'}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {guideCards.map((guide, idx) => {
              const Icon = guide.icon;
              return (
                <Link
                  key={idx}
                  to={guide.link}
                  className="bg-slate-900/50 border border-slate-800/90 hover:border-cyan-500/40 rounded-2xl p-5 transition-all hover:shadow-lg flex flex-col justify-between group"
                >
                  <div className="space-y-3">
                    <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 flex items-center justify-center group-hover:scale-105 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {guide.title}
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {guide.desc}
                    </p>
                  </div>
                  <div className="pt-4 flex items-center text-xs font-semibold text-cyan-400 group-hover:translate-x-1 transition-transform">
                    <span>{isHindi ? 'मार्गदर्शिका पढ़ें' : 'Open Guide'}</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1" />
                  </div>
                </Link>
              );
            })}
          </div>
        </section>

        {/* PLATFORM STATS */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-900/40 border border-slate-800/80 rounded-3xl p-6 sm:p-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <span className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 font-mono">
                  118
                </span>
                <p className="text-xs text-slate-400 mt-1">{t('home_statElements')}</p>
              </div>
              <div>
                <span className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500 font-mono">
                  156+
                </span>
                <p className="text-xs text-slate-400 mt-1">{isHindi ? 'सत्यापित रासायनिक अभिक्रियाएँ' : 'Verified Reactions'}</p>
              </div>
              <div>
                <span className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-500 font-mono">
                  100%
                </span>
                <p className="text-xs text-slate-400 mt-1">{t('home_statVerified')}</p>
              </div>
              <div>
                <span className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 font-mono">
                  {t('home_statFree')}
                </span>
                <p className="text-xs text-slate-400 mt-1">{t('home_statEducation')}</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
