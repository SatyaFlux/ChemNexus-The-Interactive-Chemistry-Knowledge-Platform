// src/components/dashboard/QuickStats.jsx
import React from 'react';
import { Atom, Compass, Bookmark, HelpCircle, Trophy } from 'lucide-react';

export default function QuickStats({ stats, bookmarksCount }) {
  const statCards = [
    {
      label: 'Elements Explored',
      value: `${stats.exploredCount} / ${stats.totalElements}`,
      subtext: `${stats.exploredPercentage}% of Periodic Table`,
      icon: Atom,
      color: 'from-cyan-500 to-blue-600',
      badgeColor: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30',
    },
    {
      label: 'Bookmarked',
      value: bookmarksCount,
      subtext: 'Saved for quick study',
      icon: Bookmark,
      color: 'from-amber-500 to-orange-600',
      badgeColor: 'bg-amber-500/10 text-amber-400 border-amber-500/30',
    },
    {
      label: 'Quizzes Completed',
      value: stats.totalQuizzes,
      subtext: 'Chemistry challenges solved',
      icon: HelpCircle,
      color: 'from-emerald-500 to-teal-600',
      badgeColor: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30',
    },
    {
      label: 'Average Score',
      value: `${stats.averageScore}%`,
      subtext: stats.totalQuizzes > 0 ? 'Across all attempts' : 'Take a quiz to start',
      icon: Trophy,
      color: 'from-purple-500 to-pink-600',
      badgeColor: 'bg-purple-500/10 text-purple-400 border-purple-500/30',
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {statCards.map((item, idx) => {
        const Icon = item.icon;
        return (
          <div
            key={idx}
            className="bg-slate-900/70 border border-slate-800 rounded-2xl p-5 shadow-lg flex flex-col justify-between"
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-semibold text-slate-400">{item.label}</span>
              <div className={`w-8 h-8 rounded-xl bg-gradient-to-tr ${item.color} flex items-center justify-center text-white shadow-md`}>
                <Icon className="w-4 h-4" />
              </div>
            </div>

            <div>
              <div className="text-2xl sm:text-3xl font-bold font-mono text-white mb-1">
                {item.value}
              </div>
              <p className="text-xs text-slate-400">{item.subtext}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
