// src/components/periodic-table/MobileElementList.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Bookmark, ArrowRight, Sparkles } from 'lucide-react';
import { getCategoryMeta } from '@/utils/chemistryUtils';
import { useBookmarks } from '@/context/BookmarkContext';

export default function MobileElementList({ elements, viewMode = 'cards' }) {
  const { isBookmarked, toggleBookmark } = useBookmarks();

  if (elements.length === 0) {
    return (
      <div className="text-center py-16 bg-slate-900/40 rounded-2xl border border-slate-800">
        <Sparkles className="w-10 h-10 text-slate-600 mx-auto mb-3" />
        <h3 className="text-base font-semibold text-slate-300">No Elements Found</h3>
        <p className="text-xs text-slate-500 mt-1 max-w-sm mx-auto">
          Try adjusting your filter options or clearing the search query.
        </p>
      </div>
    );
  }

  if (viewMode === 'list') {
    return (
      <div className="bg-slate-900/60 border border-slate-800 rounded-2xl overflow-hidden shadow-xl">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-950 text-slate-400 font-mono uppercase tracking-wider text-[11px] border-b border-slate-800">
              <tr>
                <th className="py-3 px-4">#</th>
                <th className="py-3 px-4">Element</th>
                <th className="py-3 px-4">Category</th>
                <th className="py-3 px-4">Mass (u)</th>
                <th className="py-3 px-4">Electronegativity</th>
                <th className="py-3 px-4">State</th>
                <th className="py-3 px-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60 font-sans">
              {elements.map((el) => {
                const categoryMeta = getCategoryMeta(el.category);
                const bookmarked = isBookmarked(el.symbol);
                return (
                  <tr
                    key={el.symbol}
                    className="hover:bg-slate-800/40 transition-colors group"
                  >
                    <td className="py-3 px-4 font-mono font-semibold text-slate-400">
                      {el.number}
                    </td>
                    <td className="py-3 px-4">
                      <Link
                        to={`/element/${el.symbol}`}
                        className="flex items-center space-x-2.5 group-hover:text-cyan-400"
                      >
                        <span
                          className="w-7 h-7 rounded-lg flex items-center justify-center font-bold text-white text-xs shadow-sm"
                          style={{ backgroundColor: categoryMeta.solidBg }}
                        >
                          {el.symbol}
                        </span>
                        <div>
                          <span className="font-semibold text-slate-200 block">
                            {el.name}
                          </span>
                          <span className="text-[10px] text-slate-500 font-mono">
                            {el.electronConfiguration}
                          </span>
                        </div>
                      </Link>
                    </td>
                    <td className="py-3 px-4">
                      <span className={`inline-block px-2 py-0.5 rounded text-[10px] font-medium ${categoryMeta.badgeClass}`}>
                        {categoryMeta.name}
                      </span>
                    </td>
                    <td className="py-3 px-4 font-mono text-slate-300">
                      {el.atomicMass}
                    </td>
                    <td className="py-3 px-4 font-mono text-slate-300">
                      {el.electronegativity ?? '—'}
                    </td>
                    <td className="py-3 px-4 text-slate-400">
                      {el.state}
                    </td>
                    <td className="py-3 px-4 text-right">
                      <div className="flex items-center justify-end space-x-2">
                        <button
                          onClick={() => toggleBookmark(el)}
                          className="p-1.5 rounded-lg text-slate-400 hover:text-amber-400 hover:bg-slate-800"
                        >
                          <Bookmark
                            className={`w-3.5 h-3.5 ${
                              bookmarked ? 'text-amber-400 fill-amber-400' : ''
                            }`}
                          />
                        </button>
                        <Link
                          to={`/element/${el.symbol}`}
                          className="p-1.5 rounded-lg text-slate-400 hover:text-cyan-400 hover:bg-slate-800"
                        >
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }

  // 'cards' grid view
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {elements.map((el) => {
        const categoryMeta = getCategoryMeta(el.category);
        const bookmarked = isBookmarked(el.symbol);

        return (
          <div
            key={el.symbol}
            className="bg-slate-900/70 border border-slate-800 hover:border-cyan-500/50 rounded-2xl p-4 transition-all hover:shadow-xl hover:shadow-cyan-500/10 flex flex-col justify-between group"
          >
            <div>
              {/* Header */}
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center space-x-3">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center font-bold text-lg text-white shadow-md group-hover:scale-105 transition-transform"
                    style={{ backgroundColor: categoryMeta.solidBg }}
                  >
                    {el.symbol}
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {el.name}
                    </h4>
                    <p className="text-xs text-slate-400 font-mono">
                      #{el.number} • Group {el.group}
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => toggleBookmark(el)}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-amber-400 hover:bg-slate-800 transition-colors"
                  title="Bookmark Element"
                >
                  <Bookmark
                    className={`w-4 h-4 ${
                      bookmarked ? 'text-amber-400 fill-amber-400' : ''
                    }`}
                  />
                </button>
              </div>

              {/* Category Badge */}
              <div className="mb-3">
                <span className={`inline-block px-2.5 py-0.5 rounded-md text-[11px] font-medium ${categoryMeta.badgeClass}`}>
                  {categoryMeta.name}
                </span>
              </div>

              {/* Summary */}
              <p className="text-xs text-slate-300/90 line-clamp-2 leading-relaxed mb-4">
                {el.summary}
              </p>
            </div>

            {/* Bottom Specs & Link */}
            <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs">
              <div className="text-slate-400">
                <span className="font-mono text-slate-200 font-semibold">{el.atomicMass}</span> u
              </div>

              <Link
                to={`/element/${el.symbol}`}
                className="inline-flex items-center space-x-1 text-cyan-400 hover:text-cyan-300 font-medium"
              >
                <span>Details</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
}
