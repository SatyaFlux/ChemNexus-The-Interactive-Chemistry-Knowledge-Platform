// src/pages/ElementDetailPage.jsx
import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { elementsData } from '@/data/elementsData';
import { getCategoryMeta } from '@/utils/chemistryUtils';
import { useBookmarks } from '@/context/BookmarkContext';
import { useProgress } from '@/context/ProgressContext';
import ElementDetailTabs from '@/components/element-detail/ElementDetailTabs';
import {
  Bookmark,
  ChevronLeft,
  ChevronRight,
  ArrowLeft,
  Sparkles,
  ExternalLink,
  TableProperties
} from 'lucide-react';

export default function ElementDetailPage() {
  const { symbol } = useParams();
  const navigate = useNavigate();
  const { isBookmarked, toggleBookmark } = useBookmarks();
  const { recordView } = useProgress();

  // Find element by symbol or atomic number
  const element = elementsData.find((el) => {
    return (
      el.symbol.toLowerCase() === symbol.toLowerCase() ||
      el.number.toString() === symbol
    );
  });

  // Track progress on element visit
  useEffect(() => {
    if (element) {
      recordView(element.symbol, element.number);
    }
  }, [element]);

  if (!element) {
    return (
      <div className="max-w-2xl mx-auto py-20 px-4 text-center space-y-4">
        <Sparkles className="w-12 h-12 text-cyan-400 mx-auto" />
        <h2 className="text-2xl font-bold text-white">Element Not Found</h2>
        <p className="text-sm text-slate-400">
          We could not find an element matching "<span className="text-cyan-300 font-mono">{symbol}</span>".
        </p>
        <div className="pt-4">
          <Link
            to="/periodic-table"
            className="px-5 py-2.5 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-semibold text-xs inline-flex items-center space-x-2"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Periodic Table</span>
          </Link>
        </div>
      </div>
    );
  }

  const categoryMeta = getCategoryMeta(element.category);
  const bookmarked = isBookmarked(element.symbol);

  // Prev & Next Elements
  const prevElement = elementsData.find((e) => e.number === element.number - 1);
  const nextElement = elementsData.find((e) => e.number === element.number + 1);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 space-y-8">
      {/* Top Breadcrumb & Next/Prev Controls */}
      <div className="flex items-center justify-between">
        <Link
          to="/periodic-table"
          className="inline-flex items-center space-x-1.5 text-xs text-slate-400 hover:text-cyan-400 font-medium transition-colors"
        >
          <TableProperties className="w-4 h-4" />
          <span>Back to Periodic Table</span>
        </Link>

        {/* Prev / Next Element Navigation */}
        <div className="flex items-center space-x-2">
          {prevElement && (
            <Link
              to={`/element/${prevElement.symbol}`}
              className="px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 text-xs text-slate-300 hover:text-white flex items-center space-x-1 transition-colors"
              title={`Previous: ${prevElement.name}`}
            >
              <ChevronLeft className="w-3.5 h-3.5" />
              <span className="font-mono">{prevElement.symbol}</span>
            </Link>
          )}

          {nextElement && (
            <Link
              to={`/element/${nextElement.symbol}`}
              className="px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 text-xs text-slate-300 hover:text-white flex items-center space-x-1 transition-colors"
              title={`Next: ${nextElement.name}`}
            >
              <span className="font-mono">{nextElement.symbol}</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </Link>
          )}
        </div>
      </div>

      {/* Primary Element Hero Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-slate-900/80 to-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex items-start sm:items-center space-x-5">
            {/* Element Tile Big */}
            <div
              className="w-20 h-20 sm:w-24 sm:h-24 rounded-3xl flex flex-col items-center justify-center font-bold text-white shadow-2xl shrink-0 border border-white/20"
              style={{ backgroundColor: categoryMeta.solidBg }}
            >
              <span className="text-[11px] font-mono opacity-80">{element.number}</span>
              <span className="text-3xl sm:text-4xl tracking-tight leading-none my-0.5">
                {element.symbol}
              </span>
              <span className="text-[10px] font-mono opacity-80">{element.atomicMass}</span>
            </div>

            {/* Title & Category Tags */}
            <div className="space-y-1.5">
              <div className="flex flex-wrap items-center gap-2">
                <span className={`px-2.5 py-0.5 rounded-md text-[11px] font-semibold ${categoryMeta.badgeClass}`}>
                  {categoryMeta.name}
                </span>
                <span className="px-2.5 py-0.5 rounded-md text-[11px] font-mono bg-slate-800 text-slate-300 border border-slate-700">
                  {element.block}-block
                </span>
                <span className="px-2.5 py-0.5 rounded-md text-[11px] bg-slate-800 text-slate-300 border border-slate-700">
                  {element.state}
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                {element.name}
              </h1>

              <p className="text-xs sm:text-sm text-slate-400 font-mono">
                Group {element.group} • Period {element.period} • Electron Config: {element.electronConfiguration}
              </p>
            </div>
          </div>

          {/* Bookmark & Actions */}
          <div className="flex items-center space-x-3 self-start md:self-center">
            <button
              onClick={() => toggleBookmark(element)}
              className={`px-4 py-2.5 rounded-2xl border text-xs font-semibold flex items-center space-x-2 transition-all shadow-md ${
                bookmarked
                  ? 'bg-amber-500/20 text-amber-300 border-amber-500/40 hover:bg-amber-500/30'
                  : 'bg-slate-800 hover:bg-slate-700 text-slate-200 border-slate-700'
              }`}
            >
              <Bookmark className={`w-4 h-4 ${bookmarked ? 'text-amber-400 fill-amber-400' : ''}`} />
              <span>{bookmarked ? 'Saved to Bookmarks' : 'Bookmark Element'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Multi-Tab Comprehensive Inspection Suite */}
      <ElementDetailTabs element={element} allElements={elementsData} />
    </div>
  );
}

