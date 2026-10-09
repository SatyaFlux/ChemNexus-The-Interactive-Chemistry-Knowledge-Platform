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
  Box,
  FileText,
  SlidersHorizontal
} from 'lucide-react';
import { useAuth } from '@/context/AuthContext';
import { useBookmarks } from '@/context/BookmarkContext';
import { useLanguage } from '@/context/LanguageContext';
import LanguageToggle from '@/components/common/LanguageToggle';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);
  const [guidesDropdownOpen, setGuidesDropdownOpen] = useState(false);
  const { user, profile, isGuest, signOut } = useAuth();
  const { bookmarks } = useBookmarks();
  const { t, isHindi } = useLanguage();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await signOut();
    setUserDropdownOpen(false);
    navigate(isHindi ? '/hi' : '/');
  };

  const prefix = isHindi ? '/hi' : '';

  const mainNavLinks = [
    { name: t('nav_periodicTable'), path: `${prefix}/periodic-table`, icon: TableProperties },
    { name: t('nav_atlas3d'), path: `${prefix}/periodic-table-3d`, icon: Box, badge: '3D' },
    { name: t('nav_reactions'), path: `${prefix}/reactions`, icon: FlaskConical },
    { name: t('nav_quizzes'), path: `${prefix}/quizzes`, icon: HelpCircle },
    { name: t('nav_aiAssistant'), path: '/assistant', icon: Sparkles },
    { name: t('nav_search'), path: `${prefix}/search`, icon: Search },
  ];

  const guideLinks = [
    { name: isHindi ? 'अभिक्रिया प्रकार' : 'Reaction Types', path: `${prefix}/reaction-types`, icon: Compass },
    { name: isHindi ? 'समीकरण संतुलन' : 'Balancing Equations', path: `${prefix}/balancing-equations`, icon: FlaskConical },
    { name: isHindi ? 'रासायनिक सूत्र' : 'Chemical Formulas', path: `${prefix}/chemical-formulas`, icon: Box },
    { name: isHindi ? 'आवर्त प्रवृत्तियाँ' : 'Periodic Trends', path: `${prefix}/periodic-trends`, icon: SlidersHorizontal },
    { name: isHindi ? 'रसायन नोट्स & FAQs' : 'Chemistry Notes & Q&A', path: `${prefix}/chemistry-notes`, icon: FileText },
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

            <Link to={prefix || '/'} className="flex items-center space-x-3 group">
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
            {mainNavLinks.map((link) => {
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

            {/* Guides Dropdown Menu */}
            <div className="relative">
              <button
                onClick={() => setGuidesDropdownOpen(!guidesDropdownOpen)}
                onBlur={() => setTimeout(() => setGuidesDropdownOpen(false), 200)}
                className="px-3 py-2 rounded-lg text-sm font-medium flex items-center space-x-1 text-slate-300 hover:text-white hover:bg-slate-800/60 transition-colors"
              >
                <Compass className="w-4 h-4 text-cyan-400" />
                <span>{t('nav_guides')}</span>
                <span className="text-[10px] ml-0.5">▼</span>
              </button>

              {guidesDropdownOpen && (
                <div className="absolute left-0 mt-2 w-56 rounded-xl bg-slate-900 border border-slate-800 shadow-2xl py-2 z-50">
                  {guideLinks.map((g) => {
                    const Icon = g.icon;
                    return (
                      <Link
                        key={g.path}
                        to={g.path}
                        onClick={() => setGuidesDropdownOpen(false)}
                        className="flex items-center space-x-2.5 px-4 py-2.5 text-xs font-medium text-slate-300 hover:bg-slate-800 hover:text-cyan-300 transition-colors"
                      >
                        <Icon className="w-3.5 h-3.5 text-cyan-400" />
                        <span>{g.name}</span>
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>
          </div>

          {/* Right Action Icons & User Menu */}
          <div className="hidden md:flex items-center space-x-3">
            {/* Bilingual Language Switcher with Links */}
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
                  className="px-3 py-1.5 rounded-lg text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
                >
                  {t('nav_logIn')}
                </Link>
                <Link
                  to="/signup"
                  className="px-3.5 py-1.5 rounded-lg text-sm font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/20 hover:from-cyan-400 hover:to-blue-500 transition-all"
                >
                  {t('nav_getStarted')}
                </Link>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center space-x-2">
            <LanguageToggle />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-900 border-b border-slate-800 px-4 pt-2 pb-6 space-y-3">
          <div className="grid grid-cols-2 gap-2 pt-2">
            {mainNavLinks.map((link) => {
              const Icon = link.icon;
              return (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center space-x-2 px-3 py-2 rounded-lg text-sm text-slate-300 hover:bg-slate-800 hover:text-cyan-400"
                >
                  <Icon className="w-4 h-4 text-cyan-400" />
                  <span>{link.name}</span>
                </NavLink>
              );
            })}
          </div>

          <div className="border-t border-slate-800 pt-3">
            <p className="text-xs uppercase text-slate-500 font-semibold mb-2">{t('nav_guides')}</p>
            <div className="grid grid-cols-2 gap-2">
              {guideLinks.map((g) => {
                const Icon = g.icon;
                return (
                  <Link
                    key={g.path}
                    to={g.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center space-x-2 px-3 py-1.5 rounded-lg text-xs text-slate-300 hover:bg-slate-800 hover:text-cyan-400"
                  >
                    <Icon className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{g.name}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
