// src/components/periodic-table/ElementCell.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Bookmark } from 'lucide-react';
import { getCategoryMeta, getHeatmapColor } from '@/utils/chemistryUtils';
import { useBookmarks } from '@/context/BookmarkContext';

export default function ElementCell({
  element,
  heatmapMode = 'standard',
  heatmapExtremes = {},
  isDimmed = false,
  isSelected = false,
  onHover,
  onLeave,
}) {
  const { isBookmarked } = useBookmarks();
  const bookmarked = isBookmarked(element.symbol);
  const categoryMeta = getCategoryMeta(element.category);

  // Compute cell background
  let cellStyle = {};
  let borderClass = 'border-slate-800 hover:border-cyan-400';

  if (heatmapMode !== 'standard' && heatmapExtremes[heatmapMode]) {
    const val = element[heatmapMode];
    const { min, max } = heatmapExtremes[heatmapMode];
    const bgColor = getHeatmapColor(val, min, max, heatmapMode);
    cellStyle = { backgroundColor: bgColor };
  }

  // Display value for secondary line
  const getSubtext = () => {
    if (heatmapMode === 'electronegativity') {
      return element.electronegativity ?? '—';
    }
    if (heatmapMode === 'atomicRadius') {
      return element.atomicRadius ? `${element.atomicRadius} pm` : '—';
    }
    if (heatmapMode === 'ionizationEnergy') {
      return element.ionizationEnergy ? `${Math.round(element.ionizationEnergy)}` : '—';
    }
    if (heatmapMode === 'density') {
      return element.density ?? '—';
    }
    if (heatmapMode === 'meltingPoint') {
      return element.meltingPoint ? `${element.meltingPoint} K` : '—';
    }
    if (heatmapMode === 'boilingPoint') {
      return element.boilingPoint ? `${element.boilingPoint} K` : '—';
    }
    return element.name;
  };

  return (
    <Link
      to={`/element/${element.symbol}`}
      onMouseEnter={() => onHover && onHover(element)}
      onMouseLeave={() => onLeave && onLeave()}
      style={cellStyle}
      className={`relative group flex flex-col justify-between p-1.5 rounded-lg border transition-all duration-200 select-none cursor-pointer overflow-hidden ${
        heatmapMode === 'standard' ? categoryMeta.bgClass : 'border-white/10'
      } ${
        isDimmed
          ? 'opacity-20 grayscale scale-95 pointer-events-none'
          : 'hover:scale-110 hover:z-30 hover:shadow-xl hover:shadow-cyan-500/20'
      } ${isSelected ? 'ring-2 ring-cyan-400 ring-offset-2 ring-offset-slate-950 z-20' : ''}`}
    >
      {/* Top Bar: Atomic number & Bookmark Indicator */}
      <div className="flex items-center justify-between w-full text-[10px] font-mono leading-none">
        <span className="font-semibold text-slate-300 group-hover:text-white">
          {element.number}
        </span>
        {bookmarked && (
          <Bookmark className="w-2.5 h-2.5 text-amber-400 fill-amber-400" />
        )}
      </div>

      {/* Center: Symbol */}
      <div className="my-0.5 text-center">
        <span className="text-base sm:text-lg font-bold tracking-tight text-white drop-shadow group-hover:text-cyan-200">
          {element.symbol}
        </span>
      </div>

      {/* Bottom Bar: Name or Property Metric */}
      <div className="text-center truncate text-[9px] font-medium text-slate-300/90 leading-tight">
        {getSubtext()}
      </div>

      {/* Subtle indicator bar for state of matter */}
      <div
        className="absolute bottom-0 left-0 right-0 h-0.5 opacity-60"
        style={{
          backgroundColor:
            element.state === 'Gas'
              ? '#38bdf8'
              : element.state === 'Liquid'
              ? '#818cf8'
              : element.state === 'Solid'
              ? '#94a3b8'
              : '#64748b',
        }}
      />
    </Link>
  );
}
