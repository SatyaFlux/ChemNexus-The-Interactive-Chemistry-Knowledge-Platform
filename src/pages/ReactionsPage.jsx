// src/pages/ReactionsPage.jsx
import React, { useState, useMemo } from 'react';
import { reactionsData } from '@/data/reactionsData';
import ReactionCard from '@/components/reactions/ReactionCard';
import { FlaskConical, Search, Filter, Sparkles } from 'lucide-react';

export default function ReactionsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('all');

  const reactionTypes = [
    { id: 'all', label: 'All Reaction Types' },
    { id: 'Synthesis', label: 'Synthesis / Combination' },
    { id: 'Combustion', label: 'Combustion' },
    { id: 'Single Displacement', label: 'Single Displacement' },
    { id: 'Double Displacement', label: 'Double Displacement' },
    { id: 'Decomposition', label: 'Decomposition' },
    { id: 'Redox', label: 'Redox & Electrochemistry' },
    { id: 'Neutralization', label: 'Acid-Base Neutralization' },
    { id: 'Precipitation', label: 'Precipitation' },
    { id: 'Disproportionation', label: 'Disproportionation' },
    { id: 'Electrochemical', label: 'Electrochemical & Batteries' },
    { id: 'Hydrolysis', label: 'Hydrolysis & Saponification' },
  ];

  const filteredReactions = useMemo(() => {
    return reactionsData.filter((rx) => {
      // Search filter
      if (searchTerm) {
        const q = searchTerm.toLowerCase().trim();
        const matchTitle = rx.title.toLowerCase().includes(q);
        const matchEq = rx.equation.toLowerCase().includes(q);
        const matchElements = rx.relatedElements.some((sym) => sym.toLowerCase() === q);
        const matchReactants = rx.reactants.some((r) => r.toLowerCase().includes(q));
        const matchProducts = rx.products.some((p) => p.toLowerCase().includes(q));
        if (!matchTitle && !matchEq && !matchElements && !matchReactants && !matchProducts) {
          return false;
        }
      }

      // Type filter
      if (selectedType !== 'all') {
        if (!rx.type.toLowerCase().includes(selectedType.toLowerCase())) {
          return false;
        }
      }

      return true;
    });
  }, [searchTerm, selectedType]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Page Title & Intro */}
      <div className="space-y-2">
        <div className="inline-flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-cyan-400">
          <FlaskConical className="w-4 h-4" />
          <span>Chemical Reaction Explorer</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white">
          Verified Chemical Reactions & Stoichiometry
        </h1>
        <p className="text-sm text-slate-400 max-w-2xl leading-relaxed">
          Study essential industrial syntheses, biological pathways, and laboratory benchmark reactions with balanced equations, thermodynamics, and reaction conditions.
        </p>
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
            placeholder="Search by reaction, formula, or element (e.g. Haber, H2, Fe)..."
            className="w-full bg-slate-950 border border-slate-800 focus:border-cyan-500 rounded-xl pl-10 pr-4 py-2.5 text-xs sm:text-sm text-slate-100 placeholder-slate-500 focus:outline-none transition-colors"
          />
        </div>

        {/* Reaction Type Selector */}
        <div className="flex items-center space-x-2 text-xs">
          <Filter className="w-3.5 h-3.5 text-cyan-400" />
          <span className="text-slate-400 font-medium">Type:</span>
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
        <span>Showing <strong className="text-white">{filteredReactions.length}</strong> reactions</span>
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
          <h3 className="text-base font-semibold text-slate-300">No Reactions Match Your Criteria</h3>
          <p className="text-xs text-slate-500 mt-1">
            Try adjusting your search keywords or resetting the reaction type filter.
          </p>
        </div>
      )}
    </div>
  );
}

