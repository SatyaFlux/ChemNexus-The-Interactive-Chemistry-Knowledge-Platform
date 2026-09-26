// src/pages/DashboardPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';
import { useProgress } from '@/context/ProgressContext';
import { useBookmarks } from '@/context/BookmarkContext';
import QuickStats from '@/components/dashboard/QuickStats';
import ProgressOverview from '@/components/dashboard/ProgressOverview';
import RecentActivity from '@/components/dashboard/RecentActivity';
import {
  LayoutDashboard,
  TableProperties,
  FlaskConical,
  HelpCircle,
  Sparkles,
  ArrowRight
} from 'lucide-react';

export default function DashboardPage() {
  const { user, profile, isGuest } = useAuth();
  const { stats, viewedElements, recentViews, quizResults } = useProgress();
  const { bookmarks } = useBookmarks();

  const displayName = profile?.full_name || user?.email?.split('@')[0] || 'Chemistry Scholar';

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Welcome Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-slate-900/90 to-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
                {profile?.study_level || 'Chemistry Scholar'}
              </span>
              {isGuest && (
                <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/30">
                  Guest Demo Mode
                </span>
              )}
            </div>

            <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              Welcome back, <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">{displayName}</span>
            </h1>

            <p className="text-xs sm:text-sm text-slate-300 max-w-xl leading-relaxed">
              Track your chemical element exploration progress, revisit bookmarked concepts, and review quiz performance.
            </p>
          </div>

          <div className="flex items-center space-x-3">
            <Link
              to="/periodic-table"
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold text-xs flex items-center space-x-1.5 shadow-md shadow-cyan-500/20 transition-all"
            >
              <TableProperties className="w-4 h-4" />
              <span>Resume Table Exploration</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Key Metric Overview Cards */}
      <QuickStats stats={stats} bookmarksCount={bookmarks.length} />

      {/* Periodic Table Mastery & Block Breakdown */}
      <ProgressOverview viewedElements={viewedElements} />

      {/* Recently Explored Elements & Quiz History */}
      <RecentActivity recentViews={recentViews} quizResults={quizResults} />
    </div>
  );
}

