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
  Bookmark
} from 'lucide-react';
import { elementsData } from '@/data/elementsData';
import { getCategoryMeta, formatChemicalFormula } from '@/utils/chemistryUtils';
import { useBookmarks } from '@/context/BookmarkContext';

// Helper to find best matching element by symbol, name, or atomic number
function findElementMatch(query) {
  if (!query || !query.trim()) return null;
  const q = query.trim().toLowerCase();

  // 1. Exact match by symbol (e.g. "Fe", "H", "Au", "O")
  const exactSymbol = elementsData.find((el) => el.symbol.toLowerCase() === q);
  if (exactSymbol) return exactSymbol;

  // 2. Exact match by name (e.g. "Iron", "Gold", "Hydrogen")
  const exactName = elementsData.find((el) => el.name.toLowerCase() === q);
  if (exactName) return exactName;

  // 3. Exact match by atomic number (e.g. "26", "1", "79", "118")
  const atomicNum = parseInt(q, 10);
  if (!isNaN(atomicNum) && atomicNum >= 1 && atomicNum <= 118) {
    const numMatch = elementsData.find((el) => el.number === atomicNum);
    if (numMatch) return numMatch;
  }

  // 4. Starts with symbol (e.g. "fe") or name starts with query (e.g. "hydr")
  const startsWithSymbol = elementsData.find((el) => el.symbol.toLowerCase().startsWith(q));
  if (startsWithSymbol) return startsWithSymbol;

  const startsWithName = elementsData.find((el) => el.name.toLowerCase().startsWith(q));
  if (startsWithName) return startsWithName;

  // 5. Name contains query
  const containsName = elementsData.find((el) => el.name.toLowerCase().includes(q));
  if (containsName) return containsName;

  return null;
}

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);
  const searchContainerRef = useRef(null);
  const navigate = useNavigate();
  const { toggleBookmark, isBookmarked } = useBookmarks();

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

  // Compute live search matches
  const searchMatches = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return [];

    return elementsData
      .filter((el) => {
        const symbolExact = el.symbol.toLowerCase() === q;
        const nameExact = el.name.toLowerCase() === q;
        const numberExact = el.number.toString() === q;
        const symbolStarts = el.symbol.toLowerCase().startsWith(q);
        const nameStarts = el.name.toLowerCase().startsWith(q);
        const nameContains = el.name.toLowerCase().includes(q);
        return symbolExact || nameExact || numberExact || symbolStarts || nameStarts || nameContains;
      })
      .slice(0, 6);
  }, [searchQuery]);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    const q = searchQuery.trim();
    if (!q) return;

    // Check if directly matches an element
    const matched = findElementMatch(q);
    if (matched) {
      navigate(`/element/${matched.symbol}`);
      setSearchQuery('');
      setShowDropdown(false);
    } else if (searchMatches.length > 0) {
      navigate(`/element/${searchMatches[0].symbol}`);
      setSearchQuery('');
      setShowDropdown(false);
    } else {
      navigate(`/search?q=${encodeURIComponent(q)}`);
      setShowDropdown(false);
    }
  };

  const handleQuickOpen = (elementName) => {
    const matched = findElementMatch(elementName);
    if (matched) {
      navigate(`/element/${matched.symbol}`);
    } else {
      navigate(`/search?q=${encodeURIComponent(elementName)}`);
    }
  };

  const featureCards = [
    {
      title: 'Interactive Periodic Table',
      desc: 'Explore all 118 elements with heatmaps for electronegativity, ionization energy, and density.',
      icon: TableProperties,
      link: '/periodic-table',
      color: 'from-cyan-500 to-blue-600',
    },
    {
      title: 'Reaction Database',
      desc: 'Understand balanced chemical equations, stoichiometry, industrial catalysts, and conditions.',
      icon: FlaskConical,
      link: '/reactions',
      color: 'from-blue-500 to-indigo-600',
    },
    {
      title: 'Interactive Quizzes',
      desc: 'Challenge your knowledge with periodic trends, chemical properties, and stoichiometry questions.',
      image: '/images/quiz-icon.png',
      link: '/quizzes',
      color: 'from-emerald-500 to-teal-600',
    },
    {
      title: 'AI Chemistry Assistant',
      desc: 'Ask complex chemistry questions, balance reactions, and clarify concepts 24/7.',
      icon: Sparkles,
      link: '/assistant',
      color: 'from-purple-500 to-pink-600',
    },
  ];

  return (
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
          title="Go to back page"
          aria-label="Go to back page"
        >
          <ArrowLeft className="w-4 h-4 text-cyan-400 group-hover:-translate-x-1 transition-transform" />
          <span>Go to Back Page</span>
        </button>
      </div>

      {/* HERO SECTION */}
      <section className="relative pt-6 sm:pt-10 text-center space-y-6">
        {/* Glow backdrop */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

        {/* Announcement Tag */}
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-semibold">
          <Atom className="w-3.5 h-3.5 text-cyan-400" />
          <span>IUPAC-Compliant Periodic Table of All 118 Elements</span>
        </div>

        {/* Primary Headline */}
        <div className="space-y-3 max-w-4xl mx-auto px-4">
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Explore Every Element.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400">
              Understand Every Reaction.
            </span>
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            ChemNexus is your centralized, research-grade chemistry knowledge platform. Study physical and chemical properties, atomic shells, reaction mechanisms, and real-world applications in one unified interface.
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
              placeholder="Search any element (e.g. Iron, Fe, 26, Gold, H)..."
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
                Clear
              </button>
            )}
            <button
              type="submit"
              className="absolute right-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold text-xs rounded-xl shadow-md transition-all cursor-pointer"
            >
              Search
            </button>
          </form>

          {/* Live Autocomplete Dropdown */}
          {showDropdown && searchQuery.trim() && (
            <div className="absolute left-4 right-4 mt-2 bg-slate-900/95 backdrop-blur-xl border border-slate-700 rounded-2xl shadow-2xl overflow-hidden z-50 animate-in fade-in slide-in-from-top-2 text-left">
              {searchMatches.length > 0 ? (
                <div>
                  <div className="px-4 py-2 bg-slate-950/80 border-b border-slate-800 text-[11px] font-semibold text-slate-400 uppercase tracking-wider flex items-center justify-between">
                    <span>Elements Matching "{searchQuery}"</span>
                    <span className="text-cyan-400 font-normal lowercase text-[10px]">click to open</span>
                  </div>
                  <div className="divide-y divide-slate-800/60 max-h-72 overflow-y-auto">
                    {searchMatches.map((el) => {
                      const cat = getCategoryMeta(el.category);
                      return (
                        <div
                          key={el.symbol}
                          onClick={() => {
                            navigate(`/element/${el.symbol}`);
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
                                <span>{el.name}</span>
                                <span className="text-xs text-cyan-400 font-mono">#{el.number}</span>
                              </div>
                              <div className="text-xs text-slate-400">
                                {cat.name} • <span className="font-mono">{el.atomicMass} u</span>
                              </div>
                            </div>
                          </div>
                          <div className="text-xs text-cyan-400 font-medium flex items-center gap-1 opacity-80 group-hover:opacity-100 group-hover:translate-x-1 transition-all">
                            <span>Open</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  <div
                    onClick={() => {
                      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
                      setShowDropdown(false);
                    }}
                    className="px-4 py-2.5 bg-slate-950 hover:bg-slate-800/60 text-center text-xs text-slate-400 hover:text-cyan-300 cursor-pointer border-t border-slate-800 transition-colors"
                  >
                    View all comprehensive results for "{searchQuery}" in Deep Search →
                  </div>
                </div>
              ) : (
                <div className="p-4 text-center text-xs text-slate-400">
                  <p>No exact element matches "{searchQuery}".</p>
                  <button
                    onClick={() => {
                      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
                      setShowDropdown(false);
                    }}
                    className="mt-2 text-cyan-400 hover:underline font-medium cursor-pointer"
                  >
                    Search all compounds, reactions and topics →
                  </button>
                </div>
              )}
            </div>
          )}

          {/* Quick suggestions */}
          <div className="flex items-center justify-center space-x-2 mt-3 text-xs text-slate-400">
            <span>Popular:</span>
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
            to="/periodic-table"
            className="px-6 py-3 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold text-sm flex items-center space-x-2 shadow-lg shadow-cyan-500/20 transition-all hover:scale-105"
          >
            <TableProperties className="w-4 h-4" />
            <span>Open Periodic Table</span>
          </Link>

          <Link
            to="/reactions"
            className="px-6 py-3 rounded-2xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 font-semibold text-sm flex items-center space-x-2 transition-all hover:border-slate-600"
          >
            <FlaskConical className="w-4 h-4 text-cyan-400" />
            <span>Reaction Database</span>
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
                <span>Element of the Day</span>
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
                    {featuredElement.name}
                  </h3>
                  <p className="text-xs text-slate-400 font-mono">
                    Atomic #{featuredElement.number} • Mass: {featuredElement.atomicMass} u • {getCategoryMeta(featuredElement.category).name}
                  </p>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-2xl">
                {featuredElement.summary}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row md:flex-col gap-2 shrink-0">
              <Link
                to={`/element/${featuredElement.symbol}`}
                className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold text-xs flex items-center justify-center space-x-1.5 shadow-md shadow-cyan-500/20 transition-all"
              >
                <span>View Full Element Profile</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <button
                onClick={() => toggleBookmark(featuredElement)}
                className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-medium flex items-center justify-center space-x-1.5 transition-colors border border-slate-700"
              >
                <Bookmark className={`w-3.5 h-3.5 ${isBookmarked(featuredElement.symbol) ? 'text-amber-400 fill-amber-400' : ''}`} />
                <span>{isBookmarked(featuredElement.symbol) ? 'Bookmarked' : 'Bookmark Element'}</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CORE PLATFORM MODULES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-2">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            Everything You Need to Master Chemistry
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 max-w-xl mx-auto">
            A comprehensive suite of interactive tools designed to bridge textbook theory with practical molecular understanding.
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
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {feat.desc}
                  </p>
                </div>

                <div className="pt-6 flex items-center space-x-1 text-xs font-semibold text-cyan-400 group-hover:translate-x-1 transition-transform">
                  <span>Explore Module</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* STATS BANNER */}
      <section className="max-w-6xl mx-auto px-4">
        <div className="bg-slate-900/40 border border-slate-800/80 rounded-3xl p-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <div className="text-3xl sm:text-4xl font-extrabold font-mono text-cyan-400">118</div>
            <p className="text-xs text-slate-400 mt-1">Chemical Elements Cataloged</p>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-extrabold font-mono text-blue-400">10</div>
            <p className="text-xs text-slate-400 mt-1">Periodic Classifications</p>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-extrabold font-mono text-emerald-400">100%</div>
            <p className="text-xs text-slate-400 mt-1">IUPAC Verified Data</p>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-extrabold font-mono text-purple-400">Free</div>
            <p className="text-xs text-slate-400 mt-1">Open Chemistry Education</p>
          </div>
        </div>
      </section>
    </div>
  );
}

