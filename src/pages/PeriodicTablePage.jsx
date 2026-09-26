// src/pages/PeriodicTablePage.jsx
import React, { useState, useMemo } from 'react';
import PeriodicFilters from '@/components/periodic-table/PeriodicFilters';
import PeriodicTableGrid from '@/components/periodic-table/PeriodicTableGrid';
import MobileElementList from '@/components/periodic-table/MobileElementList';
import { elementsData } from '@/data/elementsData';
import { TableProperties, Sparkles } from 'lucide-react';

export default function PeriodicTablePage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeBlock, setActiveBlock] = useState('all');
  const [activeState, setActiveState] = useState('all');
  const [heatmapMode, setHeatmapMode] = useState('standard');
  const [viewMode, setViewMode] = useState('grid');
  const [searchTerm, setSearchTerm] = useState('');

  // Filtered elements for cards/list view modes
  const filteredElements = useMemo(() => {
    return elementsData.filter((el) => {
      if (searchTerm) {
        const q = searchTerm.toLowerCase().trim();
        const matchName = el.name.toLowerCase().includes(q);
        const matchSymbol = el.symbol.toLowerCase().startsWith(q) || el.symbol.toLowerCase() === q;
        const matchNumber = el.number.toString() === q;
        if (!matchName && !matchSymbol && !matchNumber) return false;
      }
      if (activeCategory !== 'all' && el.category !== activeCategory) return false;
      if (activeBlock !== 'all' && el.block !== activeBlock) return false;
      if (activeState !== 'all' && el.state !== activeState) return false;
      return true;
    });
  }, [searchTerm, activeCategory, activeBlock, activeState]);

  return (
    <div className="space-y-6 max-w-7xl mx-auto px-2 sm:px-4 lg:px-8 py-4 sm:py-8">
      {/* Page Title & Subtitle */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <div className="inline-flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-cyan-400 mb-1.5">
            <TableProperties className="w-4 h-4" />
            <span>Interactive Chemistry Atlas</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white">
            The Periodic Table of Elements
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Click any element to inspect its electronic shells, thermodynamic states, compounds, and verified reactions.
          </p>
        </div>

        <div className="text-xs text-slate-400 bg-slate-900 border border-slate-800 px-3.5 py-1.5 rounded-xl font-mono self-start md:self-auto">
          Displaying: <strong className="text-white">{filteredElements.length}</strong> / 118 Elements
        </div>
      </div>

      {/* Filter and View Mode Controls */}
      <PeriodicFilters
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
        activeBlock={activeBlock}
        setActiveBlock={setActiveBlock}
        activeState={activeState}
        setActiveState={setActiveState}
        heatmapMode={heatmapMode}
        setHeatmapMode={setHeatmapMode}
        viewMode={viewMode}
        setViewMode={setViewMode}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />

      {/* Primary Display View */}
      {viewMode === 'grid' ? (
        <div className="bg-slate-900/40 border border-slate-800 rounded-3xl p-3 sm:p-5 shadow-2xl">
          <PeriodicTableGrid
            activeCategory={activeCategory}
            activeBlock={activeBlock}
            activeState={activeState}
            heatmapMode={heatmapMode}
            searchTerm={searchTerm}
          />
        </div>
      ) : (
        <MobileElementList
          elements={filteredElements}
          viewMode={viewMode}
        />
      )}
    </div>
  );
}

