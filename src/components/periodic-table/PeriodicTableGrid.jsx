// src/components/periodic-table/PeriodicTableGrid.jsx
import React, { useState } from 'react';
import ElementCell from './ElementCell';
import { elementsData } from '@/data/elementsData';
import { getCategoryMeta } from '@/utils/chemistryUtils';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight, Bookmark, X } from 'lucide-react';
import { useBookmarks } from '@/context/BookmarkContext';

export default function PeriodicTableGrid({
  activeCategory,
  activeBlock,
  activeState,
  heatmapMode,
  searchTerm,
}) {
  const [hoveredElement, setHoveredElement] = useState(null);
  const { toggleBookmark, isBookmarked } = useBookmarks();

  // Extremes for property heatmaps
  const heatmapExtremes = {
    electronegativity: { min: 0.7, max: 4.0 },
    atomicRadius: { min: 30, max: 260 },
    ionizationEnergy: { min: 375, max: 2372 },
    density: { min: 0.089, max: 22.6 },
    meltingPoint: { min: 0.95, max: 3823 },
    boilingPoint: { min: 4.22, max: 5869 },
  };

  // Filter check
  const isElementVisible = (el) => {
    // Search
    if (searchTerm) {
      const q = searchTerm.toLowerCase().trim();
      const matchName = el.name.toLowerCase().includes(q);
      const matchSymbol = el.symbol.toLowerCase() === q || el.symbol.toLowerCase().startsWith(q);
      const matchNumber = el.number.toString() === q;
      if (!matchName && !matchSymbol && !matchNumber) return false;
    }
    // Category
    if (activeCategory !== 'all' && el.category !== activeCategory) {
      return false;
    }
    // Block
    if (activeBlock !== 'all' && el.block !== activeBlock) {
      return false;
    }
    // State
    if (activeState !== 'all' && el.state !== activeState) {
      return false;
    }
    return true;
  };

  // Group element lookup
  const elementMap = new Map();
  elementsData.forEach((el) => elementMap.set(el.number, el));

  // Build grid positions for main body (Periods 1-7, Groups 1-18)
  const renderCellAt = (row, col) => {
    let elNumber = null;

    if (row === 1) {
      if (col === 1) elNumber = 1;
      if (col === 18) elNumber = 2;
    } else if (row === 2) {
      if (col === 1) elNumber = 3;
      if (col === 2) elNumber = 4;
      if (col >= 13 && col <= 18) elNumber = 5 + (col - 13);
    } else if (row === 3) {
      if (col === 1) elNumber = 11;
      if (col === 2) elNumber = 12;
      if (col >= 13 && col <= 18) elNumber = 13 + (col - 13);
    } else if (row === 4) {
      elNumber = 19 + (col - 1);
    } else if (row === 5) {
      elNumber = 37 + (col - 1);
    } else if (row === 6) {
      if (col === 1) elNumber = 55;
      if (col === 2) elNumber = 56;
      if (col === 3) {
        // Lanthanide placeholder
        return (
          <div
            key={`placeholder-lanthanide`}
            className="flex flex-col items-center justify-center p-1 rounded-lg border border-pink-500/30 bg-pink-500/10 text-pink-300 text-[10px] font-mono font-semibold"
          >
            <span>57-71</span>
            <span className="text-[8px] uppercase tracking-tighter">La-Lu</span>
          </div>
        );
      }
      if (col >= 4 && col <= 18) elNumber = 72 + (col - 4);
    } else if (row === 7) {
      if (col === 1) elNumber = 87;
      if (col === 2) elNumber = 88;
      if (col === 3) {
        // Actinide placeholder
        return (
          <div
            key={`placeholder-actinide`}
            className="flex flex-col items-center justify-center p-1 rounded-lg border border-rose-500/30 bg-rose-500/10 text-rose-300 text-[10px] font-mono font-semibold"
          >
            <span>89-103</span>
            <span className="text-[8px] uppercase tracking-tighter">Ac-Lr</span>
          </div>
        );
      }
      if (col >= 4 && col <= 18) elNumber = 104 + (col - 4);
    }

    if (!elNumber) {
      return <div key={`empty-${row}-${col}`} className="pointer-events-none" />;
    }

    const element = elementMap.get(elNumber);
    if (!element) return <div key={`empty-${row}-${col}`} />;

    const visible = isElementVisible(element);

    return (
      <ElementCell
        key={element.symbol}
        element={element}
        heatmapMode={heatmapMode}
        heatmapExtremes={heatmapExtremes}
        isDimmed={!visible}
        onHover={(el) => setHoveredElement(el)}
        onLeave={() => {}}
      />
    );
  };

  // Lanthanides & Actinides series
  const lanthanides = elementsData.filter((e) => e.number >= 57 && e.number <= 71);
  const actinides = elementsData.filter((e) => e.number >= 89 && e.number <= 103);

  // Group columns headers (1 to 18)
  const groupNumbers = Array.from({ length: 18 }, (_, i) => i + 1);

  return (
    <div className="relative">
      {/* Scrollable Container with Subtle Gradient Edges */}
      <div className="overflow-x-auto pb-6 scrollbar-thin scrollbar-thumb-slate-800 scrollbar-track-transparent">
        <div className="min-w-[1080px] p-2">
          {/* Group Header numbers (1-18) */}
          <div className="periodic-grid mb-1 text-center text-[10px] font-mono text-slate-500">
            {groupNumbers.map((g) => (
              <div key={`group-${g}`} className="font-semibold">
                {g}
              </div>
            ))}
          </div>

          {/* Main 7-Period Body */}
          <div className="space-y-[5px]">
            {[1, 2, 3, 4, 5, 6, 7].map((row) => (
              <div key={`row-${row}`} className="periodic-grid">
                {groupNumbers.map((col) => renderCellAt(row, col))}
              </div>
            ))}
          </div>

          {/* Separator / Lanthanoid & Actinoid Gap */}
          <div className="mt-8 pt-4 border-t border-slate-800/80">
            {/* Lanthanide series row */}
            <div className="flex items-center gap-2 mb-2">
              <div className="w-20 text-right text-[11px] font-mono text-pink-400 font-semibold uppercase pr-2">
                Lanthanides
              </div>
              <div className="flex-1 grid grid-cols-15 gap-[5px]">
                {lanthanides.map((el) => (
                  <ElementCell
                    key={el.symbol}
                    element={el}
                    heatmapMode={heatmapMode}
                    heatmapExtremes={heatmapExtremes}
                    isDimmed={!isElementVisible(el)}
                    onHover={(e) => setHoveredElement(e)}
                  />
                ))}
              </div>
            </div>

            {/* Actinide series row */}
            <div className="flex items-center gap-2">
              <div className="w-20 text-right text-[11px] font-mono text-rose-400 font-semibold uppercase pr-2">
                Actinides
              </div>
              <div className="flex-1 grid grid-cols-15 gap-[5px]">
                {actinides.map((el) => (
                  <ElementCell
                    key={el.symbol}
                    element={el}
                    heatmapMode={heatmapMode}
                    heatmapExtremes={heatmapExtremes}
                    isDimmed={!isElementVisible(el)}
                    onHover={(e) => setHoveredElement(e)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Hover Card Inspector */}
      {hoveredElement && (
        <div className="fixed bottom-6 right-6 z-40 max-w-sm w-full bg-slate-900/95 backdrop-blur-xl border border-slate-700/80 shadow-2xl rounded-2xl p-5 animate-in fade-in slide-in-from-bottom-3 duration-200">
          <div className="flex items-start justify-between">
            <div className="flex items-center space-x-3">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center font-bold text-xl text-white shadow-lg"
                style={{ backgroundColor: getCategoryMeta(hoveredElement.category).solidBg }}
              >
                {hoveredElement.symbol}
              </div>
              <div>
                <h4 className="text-lg font-bold text-white leading-tight">
                  {hoveredElement.name}
                </h4>
                <p className="text-xs text-slate-400">
                  Atomic #{hoveredElement.number} • Group {hoveredElement.group}, Period {hoveredElement.period}
                </p>
              </div>
            </div>
            <button
              onClick={() => setHoveredElement(null)}
              className="p-1.5 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors cursor-pointer"
              title="Close card"
              aria-label="Close card"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Quick Metrics */}
          <div className="grid grid-cols-2 gap-2 my-3 text-xs bg-slate-950/70 rounded-xl p-3 border border-slate-800">
            <div>
              <span className="text-slate-500 block">Atomic Mass</span>
              <span className="text-slate-200 font-mono font-medium">
                {hoveredElement.atomicMass} u
              </span>
            </div>
            <div>
              <span className="text-slate-500 block">Category</span>
              <span className="text-cyan-400 font-medium truncate block">
                {getCategoryMeta(hoveredElement.category).name}
              </span>
            </div>
            <div>
              <span className="text-slate-500 block">Electronegativity</span>
              <span className="text-slate-200 font-mono font-medium">
                {hoveredElement.electronegativity ?? 'N/A'}
              </span>
            </div>
            <div>
              <span className="text-slate-500 block">State (STP)</span>
              <span className="text-slate-200 font-medium">
                {hoveredElement.state}
              </span>
            </div>
          </div>

          <p className="text-xs text-slate-300 line-clamp-2 mb-4 leading-relaxed">
            {hoveredElement.summary}
          </p>

          <div className="flex items-center space-x-2">
            <Link
              to={`/element/${hoveredElement.symbol}`}
              className="flex-1 py-2 px-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-medium text-xs flex items-center justify-center space-x-1.5 shadow-md shadow-cyan-500/20 transition-all"
            >
              <span>Explore Full Element Profile</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <button
              onClick={() => toggleBookmark(hoveredElement)}
              className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
              title="Toggle Bookmark"
              aria-label="Toggle Bookmark"
            >
              <Bookmark
                className={`w-4 h-4 ${
                  isBookmarked(hoveredElement.symbol)
                    ? 'text-amber-400 fill-amber-400'
                    : 'text-slate-400'
                }`}
              />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

