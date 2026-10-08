// src/components/periodic-table/PeriodicFilters.jsx
import React from 'react';
import {
  Layers,
  Thermometer,
  Zap,
  Grid,
  List,
  LayoutGrid,
  Filter,
  Check,
  Box
} from 'lucide-react';
import { CATEGORY_CONFIG } from '@/utils/chemistryUtils';

export default function PeriodicFilters({
  activeCategory,
  setActiveCategory,
  activeBlock,
  setActiveBlock,
  activeState,
  setActiveState,
  heatmapMode,
  setHeatmapMode,
  viewMode,
  setViewMode,
  searchTerm,
  setSearchTerm,
}) {
  const blocks = [
    { id: 'all', label: 'All Blocks' },
    { id: 's', label: 's-block' },
    { id: 'p', label: 'p-block' },
    { id: 'd', label: 'd-block' },
    { id: 'f', label: 'f-block' },
  ];

  const states = [
    { id: 'all', label: 'All States' },
    { id: 'Solid', label: 'Solid' },
    { id: 'Liquid', label: 'Liquid' },
    { id: 'Gas', label: 'Gas' },
  ];

  const heatmaps = [
    { id: 'standard', label: 'Category View' },
    { id: 'electronegativity', label: 'Electronegativity' },
    { id: 'atomicRadius', label: 'Atomic Radius' },
    { id: 'ionizationEnergy', label: 'Ionization Energy' },
    { id: 'density', label: 'Density' },
    { id: 'meltingPoint', label: 'Melting Point' },
    { id: 'boilingPoint', label: 'Boiling Point' },
  ];

  return (
    <div className="bg-slate-900/80 backdrop-blur-md border border-slate-800 rounded-2xl p-4 sm:p-5 mb-6 space-y-4">
      {/* Top Row: Search and View Mode Buttons */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
        {/* Quick Element Search Bar */}
        <div className="relative flex-1 max-w-md">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search by name, symbol, number (e.g. Iron, Fe, 26)..."
            className="w-full bg-slate-950 border border-slate-800 focus:border-cyan-500 rounded-xl px-4 py-2.5 text-sm text-slate-100 placeholder-slate-500 focus:outline-none transition-colors"
          />
          {searchTerm && (
            <button
              onClick={() => setSearchTerm('')}
              className="absolute right-3 top-2.5 text-xs text-slate-400 hover:text-white"
            >
              Clear
            </button>
          )}
        </div>

        {/* Heatmap & View Mode Toggles */}
        <div className="flex flex-wrap items-center gap-2">
          {/* Heatmap selector */}
          <div className="flex items-center space-x-1.5 bg-slate-950 border border-slate-800 rounded-xl px-3 py-1.5 text-xs">
            <Zap className="w-3.5 h-3.5 text-cyan-400" />
            <span className="text-slate-400 font-medium">Display:</span>
            <select
              value={heatmapMode}
              onChange={(e) => setHeatmapMode(e.target.value)}
              aria-label="Heatmap display property"
              className="bg-transparent text-cyan-300 font-semibold focus:outline-none cursor-pointer"
            >
              {heatmaps.map((h) => (
                <option key={h.id} value={h.id} className="bg-slate-900 text-slate-200">
                  {h.label}
                </option>
              ))}
            </select>
          </div>

          {/* View Mode Buttons */}
          <div className="flex items-center bg-slate-950 border border-slate-800 rounded-xl p-1">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-1.5 rounded-lg text-xs font-medium flex items-center space-x-1 transition-colors ${
                viewMode === 'grid'
                  ? 'bg-cyan-500 text-slate-950 font-bold'
                  : 'text-slate-400 hover:text-white'
              }`}
              title="18-Column Periodic Grid"
            >
              <Grid className="w-4 h-4" />
              <span className="hidden sm:inline">Grid</span>
            </button>

            <button
              onClick={() => setViewMode('3d')}
              className={`p-1.5 rounded-lg text-xs font-medium flex items-center space-x-1.5 transition-colors ${
                viewMode === '3d'
                  ? 'bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-500/20'
                  : 'text-slate-400 hover:text-white'
              }`}
              title="Interactive 3D Periodic Atlas"
            >
              <Box className="w-4 h-4" />
              <span className="hidden sm:inline">3D View</span>
            </button>

            <button
              onClick={() => setViewMode('cards')}
              className={`p-1.5 rounded-lg text-xs font-medium flex items-center space-x-1 transition-colors ${
                viewMode === 'cards'
                  ? 'bg-cyan-500 text-slate-950 font-bold'
                  : 'text-slate-400 hover:text-white'
              }`}
              title="Card Grid View"
            >
              <LayoutGrid className="w-4 h-4" />
              <span className="hidden sm:inline">Cards</span>
            </button>

            <button
              onClick={() => setViewMode('list')}
              className={`p-1.5 rounded-lg text-xs font-medium flex items-center space-x-1 transition-colors ${
                viewMode === 'list'
                  ? 'bg-cyan-500 text-slate-950 font-bold'
                  : 'text-slate-400 hover:text-white'
              }`}
              title="Table List View"
            >
              <List className="w-4 h-4" />
              <span className="hidden sm:inline">List</span>
            </button>
          </div>
        </div>
      </div>

      {/* Category Pills Bar */}
      <div>
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
            <Filter className="w-3 h-3 text-cyan-400" />
            Filter by Category
          </span>
          {activeCategory !== 'all' && (
            <button
              onClick={() => setActiveCategory('all')}
              className="text-[11px] text-cyan-400 hover:underline"
            >
              Reset filter
            </button>
          )}
        </div>
        <div className="flex flex-wrap gap-1.5">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-all ${
              activeCategory === 'all'
                ? 'bg-white text-slate-950 font-semibold shadow'
                : 'bg-slate-950 text-slate-400 hover:text-white border border-slate-800'
            }`}
          >
            All Categories
          </button>
          {Object.entries(CATEGORY_CONFIG).map(([key, config]) => {
            const isSelected = activeCategory === key;
            return (
              <button
                key={key}
                onClick={() => setActiveCategory(isSelected ? 'all' : key)}
                className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-all flex items-center gap-1.5 border ${
                  isSelected
                    ? 'ring-2 ring-white text-white font-semibold'
                    : 'text-slate-300 hover:text-white'
                }`}
                style={{
                  backgroundColor: isSelected ? config.solidBg : 'rgba(15, 23, 42, 0.6)',
                  borderColor: config.color + '40',
                }}
              >
                <span
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: config.color }}
                />
                <span>{config.name}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Block & State Secondary Filters */}
      <div className="flex flex-wrap items-center justify-between pt-2 border-t border-slate-800/80 gap-3 text-xs">
        {/* Blocks */}
        <div className="flex items-center space-x-1.5">
          <span className="text-slate-400 font-medium">Block:</span>
          {blocks.map((b) => (
            <button
              key={b.id}
              onClick={() => setActiveBlock(b.id)}
              className={`px-2 py-0.5 rounded-md text-xs font-mono transition-colors ${
                activeBlock === b.id
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 font-bold'
                  : 'bg-slate-950 text-slate-400 hover:text-slate-200 border border-slate-800'
              }`}
            >
              {b.label}
            </button>
          ))}
        </div>

        {/* States of Matter */}
        <div className="flex items-center space-x-1.5">
          <span className="text-slate-400 font-medium">State (STP):</span>
          {states.map((s) => (
            <button
              key={s.id}
              onClick={() => setActiveState(s.id)}
              className={`px-2 py-0.5 rounded-md text-xs transition-colors ${
                activeState === s.id
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 font-semibold'
                  : 'bg-slate-950 text-slate-400 hover:text-slate-200 border border-slate-800'
              }`}
            >
              {s.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

