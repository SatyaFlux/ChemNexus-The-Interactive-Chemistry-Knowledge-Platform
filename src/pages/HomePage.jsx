// src/pages/HomePage.jsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Atom,
  TableProperties,
  FlaskConical,
  HelpCircle,
  Sparkles,
  ArrowRight,
  Search,
  ShieldCheck,
  Zap,
  BookOpen,
  Bookmark
} from 'lucide-react';
import { elementsData } from '@/data/elementsData';
import { getCategoryMeta, formatChemicalFormula } from '@/utils/chemistryUtils';
import { useBookmarks } from '@/context/BookmarkContext';

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();
  const { toggleBookmark, isBookmarked } = useBookmarks();

  // Featured Element of the Day (Cycles by day of year)
  const dayOfYear = Math.floor((new Date() - new Date(new Date().getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);
  const featuredIndex = dayOfYear % elementsData.length;
  const featuredElement = elementsData[featuredIndex] || elementsData[25]; // Iron default

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
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
      icon: HelpCircle,
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
    <div className="space-y-20 pb-16">
      {/* HERO SECTION */}
      <section className="relative pt-12 sm:pt-20 text-center space-y-6">
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

        {/* Hero Quick Search Bar */}
        <div className="max-w-xl mx-auto px-4 pt-2">
          <form onSubmit={handleSearchSubmit} className="relative flex items-center shadow-2xl">
            <Search className="w-5 h-5 text-slate-400 absolute left-4 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by element name, symbol, number, or compound (e.g. Iron, Fe, 26)..."
              className="w-full bg-slate-900/90 border border-slate-700/80 focus:border-cyan-400 rounded-2xl pl-12 pr-28 py-3.5 text-sm text-slate-100 placeholder-slate-400 focus:outline-none transition-all shadow-inner"
            />
            <button
              type="submit"
              className="absolute right-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold text-xs rounded-xl shadow-md transition-all"
            >
              Search
            </button>
          </form>
          {/* Quick suggestions */}
          <div className="flex items-center justify-center space-x-2 mt-3 text-xs text-slate-400">
            <span>Popular:</span>
            {['Hydrogen', 'Iron', 'Gold', 'Uranium', 'Lithium'].map((name) => (
              <button
                key={name}
                onClick={() => navigate(`/search?q=${name}`)}
                className="hover:text-cyan-400 underline underline-offset-2 transition-colors"
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
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-tr ${feat.color} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform`}>
                    <Icon className="w-6 h-6" />
                  </div>
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
