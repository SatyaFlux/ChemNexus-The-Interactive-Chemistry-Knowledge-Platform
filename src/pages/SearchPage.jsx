import React, { useState, useEffect, useMemo } from 'react';
import { useSearchParams, Link, useNavigate } from 'react-router-dom';
import { elementsData } from '@/data/elementsData';
import { Search, Filter, Sparkles, ArrowRight, Bookmark } from 'lucide-react';
import { getCategoryMeta } from '@/utils/chemistryUtils';
import { useBookmarks } from '@/context/BookmarkContext';

export default function SearchPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialQuery = searchParams.get('q') || '';
  const [query, setQuery] = useState(initialQuery);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedBlock, setSelectedBlock] = useState('all');
  const [selectedState, setSelectedState] = useState('all');
  const { toggleBookmark, isBookmarked } = useBookmarks();
  const navigate = useNavigate();

  useEffect(() => {
    const q = searchParams.get('q');
    if (q !== null && q !== query) {
      setQuery(q);
    }
  }, [searchParams]);

  const handleQueryChange = (val) => {
    setQuery(val);
    setSearchParams(val ? { q: val } : {});
  };

  const results = useMemo(() => {
    const cleanQ = query.toLowerCase().trim();

    return elementsData.filter((el) => {
      // Query filter
      if (cleanQ) {
        const matchName = el.name.toLowerCase().includes(cleanQ);
        const matchSymbol = el.symbol.toLowerCase() === cleanQ || el.symbol.toLowerCase().startsWith(cleanQ);
        const matchNumber = el.number.toString() === cleanQ;
        const matchCategory = el.category.toLowerCase().includes(cleanQ);
        const matchOccurrence = el.occurrence?.toLowerCase().includes(cleanQ);
        const matchExtraction = el.extraction?.toLowerCase().includes(cleanQ);
        const matchApplications = el.applications?.some((a) => a.toLowerCase().includes(cleanQ));
        const matchCompounds = el.importantCompounds?.some((c) =>
          c.formula.toLowerCase().includes(cleanQ) || c.name.toLowerCase().includes(cleanQ)
        );

        if (
          !matchName &&
          !matchSymbol &&
          !matchNumber &&
          !matchCategory &&
          !matchOccurrence &&
          !matchExtraction &&
          !matchApplications &&
          !matchCompounds
        ) {
          return false;
        }
      }

      // Filter attributes
      if (selectedCategory !== 'all' && el.category !== selectedCategory) return false;
      if (selectedBlock !== 'all' && el.block !== selectedBlock) return false;
      if (selectedState !== 'all' && el.state !== selectedState) return false;

      return true;
    });
  }, [query, selectedCategory, selectedBlock, selectedState]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Title */}
      <div className="space-y-2">
        <div className="inline-flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-cyan-400">
          <Search className="w-4 h-4" />
          <span>Universal Chemistry Search</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white">
          Deep Chemical Element Search
        </h1>
        <p className="text-sm text-slate-400 max-w-2xl leading-relaxed">
          Search across atomic properties, electronic configurations, occurrence, industrial applications, and chemical compounds.
        </p>
      </div>

      {/* Main Search Bar & Multi-Filters */}
      <div className="bg-slate-900/80 border border-slate-800 rounded-3xl p-5 space-y-4 shadow-xl">
        <div className="relative">
          <Search className="w-5 h-5 text-slate-400 absolute left-4 top-3.5 pointer-events-none" />
          <input
            type="text"
            value={query}
            onChange={(e) => handleQueryChange(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                const cleanQ = query.trim().toLowerCase();
                const exact = elementsData.find(
                  (el) =>
                    el.symbol.toLowerCase() === cleanQ ||
                    el.name.toLowerCase() === cleanQ ||
                    el.number.toString() === cleanQ
                );
                if (exact) {
                  navigate(`/element/${exact.symbol}`);
                } else if (results.length > 0) {
                  navigate(`/element/${results[0].symbol}`);
                }
              }
            }}
            placeholder="Type any element, symbol, atomic number, mineral, or application (e.g. Titanium, Au, battery, bauxite)..."
            className="w-full bg-slate-950 border border-slate-800 focus:border-cyan-500 rounded-2xl pl-12 pr-10 py-3.5 text-sm text-slate-100 placeholder-slate-500 focus:outline-none transition-colors"
          />
          {query && (
            <button
              onClick={() => handleQueryChange('')}
              className="absolute right-4 top-3.5 text-xs text-slate-400 hover:text-white"
            >
              Clear
            </button>
          )}
        </div>

        {/* Filter Selectors */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs pt-1">
          <div>
            <label className="text-slate-400 block mb-1 font-medium">Category</label>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-slate-200 focus:border-cyan-500 focus:outline-none"
            >
              <option value="all">All Categories</option>
              <option value="alkali-metal">Alkali Metals</option>
              <option value="alkaline-earth">Alkaline Earth</option>
              <option value="transition-metal">Transition Metals</option>
              <option value="post-transition-metal">Post-Transition Metals</option>
              <option value="metalloid">Metalloids</option>
              <option value="reactive-nonmetal">Reactive Nonmetals</option>
              <option value="noble-gas">Noble Gases</option>
              <option value="lanthanide">Lanthanides</option>
              <option value="actinide">Actinides</option>
            </select>
          </div>

          <div>
            <label className="text-slate-400 block mb-1 font-medium">Block</label>
            <select
              value={selectedBlock}
              onChange={(e) => setSelectedBlock(e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-slate-200 focus:border-cyan-500 focus:outline-none"
            >
              <option value="all">All Blocks</option>
              <option value="s">s-block</option>
              <option value="p">p-block</option>
              <option value="d">d-block</option>
              <option value="f">f-block</option>
            </select>
          </div>

          <div>
            <label className="text-slate-400 block mb-1 font-medium">State (STP)</label>
            <select
              value={selectedState}
              onChange={(e) => setSelectedState(e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-slate-200 focus:border-cyan-500 focus:outline-none"
            >
              <option value="all">All States</option>
              <option value="Solid">Solid</option>
              <option value="Liquid">Liquid</option>
              <option value="Gas">Gas</option>
            </select>
          </div>
        </div>
      </div>

      {/* Results Header */}
      <div className="flex items-center justify-between text-xs text-slate-400 font-mono px-1">
        <span>Found <strong className="text-white">{results.length}</strong> matching elements</span>
      </div>

      {/* Results Grid */}
      {results.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {results.map((el) => {
            const cat = getCategoryMeta(el.category);
            const bookmarked = isBookmarked(el.symbol);

            return (
              <div
                key={el.symbol}
                className="bg-slate-900/70 border border-slate-800 hover:border-cyan-500/40 rounded-2xl p-4 transition-all hover:shadow-xl hover:shadow-cyan-500/10 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-start justify-between mb-3">
                    <Link to={`/element/${el.symbol}`} className="flex items-center space-x-3 group/link">
                      <span
                        className="w-10 h-10 rounded-xl flex items-center justify-center font-bold text-white text-base shadow-md group-hover/link:scale-105 transition-transform"
                        style={{ backgroundColor: cat.solidBg }}
                      >
                        {el.symbol}
                      </span>
                      <div>
                        <h4 className="text-sm font-bold text-white group-hover/link:text-cyan-300 transition-colors">
                          {el.name}
                        </h4>
                        <span className="text-[10px] text-slate-400 font-mono">
                          #{el.number} • {el.atomicMass} u
                        </span>
                      </div>
                    </Link>

                    <button
                      onClick={() => toggleBookmark(el)}
                      className="p-1.5 rounded-lg text-slate-400 hover:text-amber-400 hover:bg-slate-800"
                    >
                      <Bookmark className={`w-3.5 h-3.5 ${bookmarked ? 'text-amber-400 fill-amber-400' : ''}`} />
                    </button>
                  </div>

                  <span className={`inline-block px-2 py-0.5 rounded text-[10px] font-medium mb-2 ${cat.badgeClass}`}>
                    {cat.name}
                  </span>

                  <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed mb-4">
                    {el.summary}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs">
                  <span className="font-mono text-slate-400">{el.electronConfiguration}</span>
                  <Link
                    to={`/element/${el.symbol}`}
                    className="inline-flex items-center space-x-1 text-cyan-400 hover:text-cyan-300 font-medium"
                  >
                    <span>Inspect</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="text-center py-20 bg-slate-900/40 rounded-3xl border border-slate-800">
          <Sparkles className="w-10 h-10 text-slate-600 mx-auto mb-3" />
          <h3 className="text-base font-semibold text-slate-300">No Elements Found</h3>
          <p className="text-xs text-slate-500 mt-1">
            Try adjusting your search keywords or clearing active category filters.
          </p>
        </div>
      )}
    </div>
  );
}

