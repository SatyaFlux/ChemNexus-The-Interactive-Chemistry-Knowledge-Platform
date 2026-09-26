// src/components/dashboard/RecentActivity.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { elementsData } from '@/data/elementsData';
import { History, Award, ArrowRight, Clock } from 'lucide-react';
import { getCategoryMeta } from '@/utils/chemistryUtils';

export default function RecentActivity({ recentViews, quizResults }) {
  const recentElements = recentViews
    .map((sym) => elementsData.find((e) => e.symbol === sym))
    .filter(Boolean);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Recently Viewed Elements */}
      <div className="bg-slate-900/70 border border-slate-800 rounded-3xl p-6 shadow-xl flex flex-col justify-between">
        <div>
          <div className="flex items-center space-x-2 mb-4">
            <History className="w-4 h-4 text-cyan-400" />
            <h3 className="text-base font-bold text-white">Recently Explored Elements</h3>
          </div>

          {recentElements.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
              {recentElements.slice(0, 6).map((el) => {
                const cat = getCategoryMeta(el.category);
                return (
                  <Link
                    key={el.symbol}
                    to={`/element/${el.symbol}`}
                    className="bg-slate-950 border border-slate-800 hover:border-cyan-500/40 rounded-2xl p-3 flex items-center space-x-3 transition-all hover:bg-slate-800/60 group"
                  >
                    <span
                      className="w-9 h-9 rounded-xl flex items-center justify-center font-bold text-white text-sm shadow-md"
                      style={{ backgroundColor: cat.solidBg }}
                    >
                      {el.symbol}
                    </span>
                    <div className="truncate">
                      <span className="text-xs font-bold text-white group-hover:text-cyan-300 block truncate">
                        {el.name}
                      </span>
                      <span className="text-[10px] text-slate-400 font-mono">
                        #{el.number}
                      </span>
                    </div>
                  </Link>
                );
              })}
            </div>
          ) : (
            <div className="py-10 text-center text-slate-500 text-xs">
              No elements explored yet. Click any element on the periodic table to begin tracking your learning!
            </div>
          )}
        </div>

        <div className="pt-4 border-t border-slate-800/80 mt-4 flex justify-end">
          <Link
            to="/periodic-table"
            className="text-xs font-medium text-cyan-400 hover:text-cyan-300 inline-flex items-center space-x-1"
          >
            <span>Open Periodic Table</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>

      {/* Recent Quiz History */}
      <div className="bg-slate-900/70 border border-slate-800 rounded-3xl p-6 shadow-xl flex flex-col justify-between">
        <div>
          <div className="flex items-center space-x-2 mb-4">
            <Award className="w-4 h-4 text-cyan-400" />
            <h3 className="text-base font-bold text-white">Recent Quiz History</h3>
          </div>

          {quizResults.length > 0 ? (
            <div className="space-y-2.5">
              {quizResults.slice(0, 4).map((q) => {
                const passed = q.percentage >= 60;
                return (
                  <div
                    key={q.id}
                    className="bg-slate-950 border border-slate-800/80 rounded-2xl p-3.5 flex items-center justify-between"
                  >
                    <div>
                      <h4 className="text-xs sm:text-sm font-semibold text-slate-200">
                        {q.quizTitle}
                      </h4>
                      <div className="flex items-center space-x-3 text-[11px] text-slate-500 mt-1 font-mono">
                        <span>Score: {q.score}/{q.totalQuestions}</span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {new Date(q.completedAt).toLocaleDateString()}
                        </span>
                      </div>
                    </div>

                    <span
                      className={`text-xs font-mono font-bold px-2.5 py-1 rounded-xl border ${
                        passed
                          ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30'
                          : 'bg-amber-500/10 text-amber-400 border-amber-500/30'
                      }`}
                    >
                      {q.percentage}%
                    </span>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="py-10 text-center text-slate-500 text-xs">
              No quizzes completed yet. Test your chemistry knowledge with interactive challenges!
            </div>
          )}
        </div>

        <div className="pt-4 border-t border-slate-800/80 mt-4 flex justify-end">
          <Link
            to="/quizzes"
            className="text-xs font-medium text-cyan-400 hover:text-cyan-300 inline-flex items-center space-x-1"
          >
            <span>Explore Quizzes</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}

