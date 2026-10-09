// src/components/common/Navbar.jsx
import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import {
  Atom,
  ArrowLeft,
  TableProperties,
  FlaskConical,
  Sparkles,
  HelpCircle,
  Bookmark,
  LayoutDashboard,
  Search,
  User,
  LogOut,
  Menu,
  X,
  Compass,
  Box
} from 'lucide-react';
import { useAuth } from '@/context/AuthContext';
import { useBookmarks } from '@/context/BookmarkContext';
import { useLanguage } from '@/context/LanguageContext';
import LanguageToggle from '@/components/common/LanguageToggle';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);
  const { user, profile, isGuest, signOut } = useAuth();
  const { bookmarks } = useBookmarks();
  const { t } = useLanguage();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await signOut();
    setUserDropdownOpen(false);
    navigate('/');
  };

  const navLinks = [
    { name: t('nav_periodicTable'), path: '/periodic-table', icon: TableProperties },
    { name: t('nav_atlas3d'), path: '/periodic-table-3d', icon: Box, badge: '3D' },
    { name: t('nav_reactions'), path: '/reactions', icon: FlaskConical },
    { name: t('nav_quizzes'), path: '/quizzes', icon: HelpCircle },
    { name: t('nav_aiAssistant'), path: '/assistant', icon: Sparkles },
    { name: t('nav_search'), path: '/search', icon: Search },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-[#0a0f1d]/90 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand Logo & Back Action */}
          <div className="flex items-center space-x-2.5">
            <button
              onClick={() => {
                if (window.history.length > 1) {
                  navigate(-1);
                } else {
                  window.history.back();
                }
              }}
              className="p-2 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-400 hover:text-cyan-400 border border-slate-800 hover:border-cyan-500/40 transition-all flex items-center space-x-1 text-xs font-medium cursor-pointer"
              title="Go to back page"
              aria-label="Go to back page"
            >
              <ArrowLeft className="w-4 h-4 text-cyan-400" />
              <span className="hidden sm:inline">{t('nav_back')}</span>
            </button>

            <Link to="/" className="flex items-center space-x-3 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg shadow-cyan-500/20 group-hover:scale-105 transition-transform">
                <Atom className="w-6 h-6 text-white animate-spin-slow" />
              </div>
              <div>
                <span className="text-xl font-bold tracking-tight text-white flex items-center gap-1.5">
                  Chem<span className="text-cyan-400">Nexus</span>
                </span>
                <span className="hidden sm:block text-[10px] text-slate-400 tracking-wider uppercase font-medium">
                  {t('nav_subtitle')}
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `px-3 py-2 rounded-lg text-sm font-medium flex items-center space-x-1.5 transition-colors ${
                      isActive
                        ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/20'
                        : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                    }`
                  }
                >
                  <Icon className="w-4 h-4" />
                  <span>{link.name}</span>
                  {link.badge && (
                    <span className="text-[9px] font-extrabold uppercase px-1.5 py-0.5 rounded bg-gradient-to-r from-cyan-500 to-blue-500 text-slate-950 shadow-sm leading-none ml-0.5">
                      {link.badge}
                    </span>
                  )}
                </NavLink>
              );
            })}
          </div>

          {/* Right Action Icons & User Menu */}
          <div className="hidden md:flex items-center space-x-3">
            {/* Language Switcher [EN / हि] */}
            <LanguageToggle />

            {/* Bookmarks Quick Link */}
            <Link
              to="/bookmarks"
              className="p-2 text-slate-300 hover:text-cyan-400 hover:bg-slate-800 rounded-lg relative transition-colors"
              title={t('nav_savedBookmarks')}
            >
              <Bookmark className="w-5 h-5" />
              {bookmarks.length > 0 && (
                <span className="absolute top-1.5 right-1.5 w-4 h-4 text-[10px] font-bold bg-cyan-500 text-slate-950 rounded-full flex items-center justify-center">
                  {bookmarks.length}
                </span>
              )}
            </Link>

            {/* User State */}
            {user ? (
              <div className="relative">
                <button
                  onClick={() => setUserDropdownOpen(!userDropdownOpen)}
                  className="flex items-center space-x-2 p-1.5 rounded-lg hover:bg-slate-800 text-slate-200 transition-colors border border-slate-700/60"
                >
                  <div className="w-8 h-8 rounded-full bg-cyan-900/50 border border-cyan-500/40 flex items-center justify-center text-cyan-300 font-semibold text-sm">
                    {user.email ? user.email.charAt(0).toUpperCase() : 'U'}
                  </div>
                  <span className="text-sm font-medium text-slate-200 max-w-[120px] truncate">
                    {profile?.full_name || user.email?.split('@')[0] || t('nav_scholar')}
                  </span>
                </button>

                {/* Dropdown Menu */}
                {userDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-56 rounded-xl bg-slate-900 border border-slate-800 shadow-2xl py-2 z-50">
                    <div className="px-4 py-2 border-b border-slate-800">
                      <p className="text-xs text-slate-400">{t('nav_signedInAs')}</p>
                      <p className="text-sm font-medium text-white truncate">{user.email}</p>
                      {isGuest && (
                        <span className="inline-block mt-1 px-2 py-0.5 text-[10px] font-semibold bg-amber-500/10 text-amber-400 border border-amber-500/30 rounded">
                          {t('nav_guestMode')}
                        </span>
                      )}
                    </div>

                    <Link
                      to="/dashboard"
                      onClick={() => setUserDropdownOpen(false)}
                      className="flex items-center space-x-2 px-4 py-2.5 text-sm text-slate-300 hover:bg-slate-800 hover:text-white"
                    >
                      <LayoutDashboard className="w-4 h-4 text-cyan-400" />
                      <span>{t('nav_studentDashboard')}</span>
                    </Link>

                    <Link
                      to="/bookmarks"
                      onClick={() => setUserDropdownOpen(false)}
                      className="flex items-center space-x-2 px-4 py-2.5 text-sm text-slate-300 hover:bg-slate-800 hover:text-white"
                    >
                      <Bookmark className="w-4 h-4 text-cyan-400" />
                      <span>{t('nav_bookmarkedElements')} ({bookmarks.length})</span>
                    </Link>

                    <Link
                      to="/profile"
                      onClick={() => setUserDropdownOpen(false)}
                      className="flex items-center space-x-2 px-4 py-2.5 text-sm text-slate-300 hover:bg-slate-800 hover:text-white"
                    >
                      <User className="w-4 h-4 text-cyan-400" />
                      <span>{t('nav_profileSettings')}</span>
                    </Link>

                    <div className="border-t border-slate-800 my-1"></div>

                    <button
                      onClick={handleSignOut}
                      className="w-full flex items-center space-x-2 px-4 py-2.5 text-sm text-rose-400 hover:bg-rose-500/10 text-left"
                    >
                      <LogOut className="w-4 h-4" />
                      <span>{t('nav_signOut')}</span>
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex items-center space-x-2">
                <Link
                  to="/login"
                  className="px-3.5 py-1.5 text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
                >
                  {t('nav_logIn')}
                </Link>
                <Link
                  to="/signup"
                  className="px-3.5 py-1.5 text-sm font-medium bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:from-cyan-400 hover:to-blue-500 shadow-md shadow-cyan-500/20 transition-all"
                >
                  {t('nav_getStarted')}
                </Link>
              </div>
            )}
          </div>

          {/* Mobile Menu Button & Language Toggle */}
          <div className="flex md:hidden items-center space-x-2">
            <LanguageToggle />
            <Link
              to="/bookmarks"
              className="p-1.5 text-slate-300 hover:text-cyan-400 relative"
              title={t('nav_savedBookmarks')}
            >
              <Bookmark className="w-5 h-5" />
              {bookmarks.length > 0 && (
                <span className="absolute top-1 right-1 w-4 h-4 text-[10px] font-bold bg-cyan-500 text-slate-950 rounded-full flex items-center justify-center">
                  {bookmarks.length}
                </span>
              )}
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-300 hover:text-white rounded-lg focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-900/95 border-b border-slate-800 px-4 pt-2 pb-6 space-y-3">
          <div className="space-y-1">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center space-x-3 px-3 py-2.5 rounded-lg text-base font-medium ${
                      isActive
                        ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/20'
                        : 'text-slate-300 hover:bg-slate-800'
                    }`
                  }
                >
                  <Icon className="w-5 h-5" />
                  <span>{link.name}</span>
                  {link.badge && (
                    <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 text-slate-950 leading-none ml-auto">
                      {link.badge}
                    </span>
                  )}
                </NavLink>
              );
            })}
          </div>

          <div className="pt-3 border-t border-slate-800">
            {user ? (
              <div className="space-y-2">
                <Link
                  to="/dashboard"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center space-x-3 px-3 py-2 text-slate-200 hover:bg-slate-800 rounded-lg"
                >
                  <LayoutDashboard className="w-5 h-5 text-cyan-400" />
                  <span>{t('nav_studentDashboard')}</span>
                </Link>
                <Link
                  to="/profile"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center space-x-3 px-3 py-2 text-slate-200 hover:bg-slate-800 rounded-lg"
                >
                  <User className="w-5 h-5 text-cyan-400" />
                  <span>{t('nav_profileSettings')}</span>
                </Link>
                <button
                  onClick={() => {
                    handleSignOut();
                    setMobileMenuOpen(false);
                  }}
                  className="w-full flex items-center space-x-3 px-3 py-2 text-rose-400 hover:bg-rose-500/10 rounded-lg text-left"
                >
                  <LogOut className="w-5 h-5" />
                  <span>{t('nav_signOut')}</span>
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-2 pt-1">
                <Link
                  to="/login"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-center py-2 px-3 text-sm font-medium text-slate-200 bg-slate-800 hover:bg-slate-700 rounded-lg"
                >
                  {t('nav_logIn')}
                </Link>
                <Link
                  to="/signup"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-center py-2 px-3 text-sm font-medium text-white bg-cyan-600 hover:bg-cyan-500 rounded-lg"
                >
                  {t('nav_signUp')}
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}

