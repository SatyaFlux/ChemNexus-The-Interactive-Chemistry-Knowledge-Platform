// src/pages/BookmarksPage.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { elementsData } from '@/data/elementsData';
import { useBookmarks } from '@/context/BookmarkContext';
import { getCategoryMeta } from '@/utils/chemistryUtils';
import { Bookmark, ArrowRight, Trash2, TableProperties, Sparkles } from 'lucide-react';

export default function BookmarksPage() {
  const { bookmarks, toggleBookmark } = useBookmarks();
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Lookup full element records for bookmarked symbols
  const bookmarkedElements = bookmarks
    .map((sym) => elementsData.find((e) => e.symbol === sym))
    .filter(Boolean);

  const filteredElements = bookmarkedElements.filter((el) => {
    if (selectedCategory !== 'all' && el.category !== selectedCategory) {
      return false;
    }
    return true;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Title */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-amber-400 mb-1">
            <Bookmark className="w-4 h-4" />
            <span>Saved Study Collection</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white">
            Bookmarked Elements
          </h1>
          <p className="text-sm text-slate-400 mt-1">
            Fast access to elements you have marked for review or study.
          </p>
        </div>

        <div className="text-xs text-slate-400 bg-slate-900 border border-slate-800 px-4 py-2 rounded-xl font-mono self-start sm:self-auto">
          Saved: <strong className="text-amber-400">{bookmarks.length}</strong> Elements
        </div>
      </div>

      {bookmarkedElements.length > 0 ? (
        <div className="space-y-6">
          {/* Elements Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filteredElements.map((el) => {
              const cat = getCategoryMeta(el.category);
              return (
                <div
                  key={el.symbol}
                  className="bg-slate-900/70 border border-slate-800 hover:border-cyan-500/40 rounded-2xl p-5 transition-all hover:shadow-xl hover:shadow-cyan-500/10 flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center space-x-3">
                        <span
                          className="w-11 h-11 rounded-xl flex items-center justify-center font-bold text-white text-base shadow-md group-hover:scale-105 transition-transform"
                          style={{ backgroundColor: cat.solidBg }}
                        >
                          {el.symbol}
                        </span>
                        <div>
                          <h4 className="text-base font-bold text-white group-hover:text-cyan-300">
                            {el.name}
                          </h4>
                          <span className="text-[11px] text-slate-400 font-mono">
                            #{el.number} • {el.atomicMass} u
                          </span>
                        </div>
                      </div>

                      <button
                        onClick={() => toggleBookmark(el)}
                        className="p-1.5 rounded-lg text-amber-400 hover:text-rose-400 hover:bg-slate-800 transition-colors"
                        title="Remove Bookmark"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>

                    <span className={`inline-block px-2 py-0.5 rounded text-[10px] font-medium mb-3 ${cat.badgeClass}`}>
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
                      <span>Study Details</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <div className="text-center py-20 bg-slate-900/40 rounded-3xl border border-slate-800 space-y-4">
          <Bookmark className="w-12 h-12 text-slate-600 mx-auto" />
          <div className="space-y-1">
            <h3 className="text-lg font-bold text-slate-200">No Elements Bookmarked Yet</h3>
            <p className="text-xs text-slate-400 max-w-sm mx-auto">
              Browse the periodic table and click the bookmark icon on any element to save it to your personal study dashboard.
            </p>
          </div>
          <div className="pt-2">
            <Link
              to="/periodic-table"
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold text-xs inline-flex items-center space-x-1.5 shadow-md shadow-cyan-500/20"
            >
              <TableProperties className="w-4 h-4" />
              <span>Explore Periodic Table</span>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

