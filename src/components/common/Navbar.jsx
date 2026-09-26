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
  Compass
} from 'lucide-react';
import { useAuth } from '@/context/AuthContext';
import { useBookmarks } from '@/context/BookmarkContext';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);
  const { user, profile, isGuest, signOut } = useAuth();
  const { bookmarks } = useBookmarks();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await signOut();
    setUserDropdownOpen(false);
    navigate('/');
  };

  const navLinks = [
    { name: 'Periodic Table', path: '/periodic-table', icon: TableProperties },
    { name: 'Reactions', path: '/reactions', icon: FlaskConical },
    { name: 'Quizzes', path: '/quizzes', icon: HelpCircle },
    { name: 'AI Assistant', path: '/assistant', icon: Sparkles },
    { name: 'Search', path: '/search', icon: Search },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm">
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
              className="p-2 rounded-xl bg-white hover:bg-slate-100 text-slate-600 hover:text-cyan-600 border border-slate-200 hover:border-cyan-500/40 transition-all flex items-center space-x-1 text-xs font-medium cursor-pointer shadow-sm"
              title="Go to back page"
              aria-label="Go to back page"
            >
              <ArrowLeft className="w-4 h-4 text-cyan-600" />
              <span className="hidden sm:inline">Back</span>
            </button>

            <Link to="/" className="flex items-center space-x-3 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-600 to-blue-600 flex items-center justify-center shadow-lg shadow-cyan-500/20 group-hover:scale-105 transition-transform">
                <Atom className="w-6 h-6 text-white animate-spin-slow" />
              </div>
              <div>
                <span className="text-xl font-bold tracking-tight text-slate-900 flex items-center gap-1.5">
                  Chem<span className="text-cyan-600">Nexus</span>
                </span>
                <span className="hidden sm:block text-[10px] text-slate-500 tracking-wider uppercase font-medium">
                  Chemistry Knowledge Platform
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
                        ? 'bg-cyan-50 text-cyan-700 border border-cyan-200 font-semibold'
                        : 'text-slate-600 hover:text-cyan-600 hover:bg-slate-100'
                    }`
                  }
                >
                  <Icon className="w-4 h-4" />
                  <span>{link.name}</span>
                </NavLink>
              );
            })}
          </div>

          {/* Right Action Icons & User Menu */}
          <div className="hidden md:flex items-center space-x-3">
            {/* Bookmarks Quick Link */}
            <Link
              to="/bookmarks"
              className="p-2 text-slate-600 hover:text-cyan-600 hover:bg-slate-100 rounded-lg relative transition-colors"
              title="Saved Bookmarks"
            >
              <Bookmark className="w-5 h-5" />
              {bookmarks.length > 0 && (
                <span className="absolute top-1.5 right-1.5 w-4 h-4 text-[10px] font-bold bg-cyan-600 text-white rounded-full flex items-center justify-center">
                  {bookmarks.length}
                </span>
              )}
            </Link>

            {/* User State */}
            {user ? (
              <div className="relative">
                <button
                  onClick={() => setUserDropdownOpen(!userDropdownOpen)}
                  className="flex items-center space-x-2 p-1.5 rounded-lg hover:bg-slate-100 text-slate-800 transition-colors border border-slate-200"
                >
                  <div className="w-8 h-8 rounded-full bg-cyan-100 border border-cyan-300 flex items-center justify-center text-cyan-800 font-semibold text-sm">
                    {user.email ? user.email.charAt(0).toUpperCase() : 'U'}
                  </div>
                  <span className="text-sm font-medium text-slate-800 max-w-[120px] truncate">
                    {profile?.full_name || user.email?.split('@')[0] || 'Scholar'}
                  </span>
                </button>

                {/* Dropdown Menu */}
                {userDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-56 rounded-xl bg-white border border-slate-200 shadow-2xl py-2 z-50">
                    <div className="px-4 py-2 border-b border-slate-100">
                      <p className="text-xs text-slate-500">Signed in as</p>
                      <p className="text-sm font-medium text-slate-900 truncate">{user.email}</p>
                      {isGuest && (
                        <span className="inline-block mt-1 px-2 py-0.5 text-[10px] font-semibold bg-amber-500/10 text-amber-700 border border-amber-500/30 rounded">
                          Guest Demo Mode
                        </span>
                      )}
                    </div>

                    <Link
                      to="/dashboard"
                      onClick={() => setUserDropdownOpen(false)}
                      className="flex items-center space-x-2 px-4 py-2.5 text-sm text-slate-700 hover:bg-slate-50 hover:text-cyan-700"
                    >
                      <LayoutDashboard className="w-4 h-4 text-cyan-600" />
                      <span>Student Dashboard</span>
                    </Link>

                    <Link
                      to="/bookmarks"
                      onClick={() => setUserDropdownOpen(false)}
                      className="flex items-center space-x-2 px-4 py-2.5 text-sm text-slate-700 hover:bg-slate-50 hover:text-cyan-700"
                    >
                      <Bookmark className="w-4 h-4 text-cyan-600" />
                      <span>Bookmarked Elements ({bookmarks.length})</span>
                    </Link>

                    <Link
                      to="/profile"
                      onClick={() => setUserDropdownOpen(false)}
                      className="flex items-center space-x-2 px-4 py-2.5 text-sm text-slate-700 hover:bg-slate-50 hover:text-cyan-700"
                    >
                      <User className="w-4 h-4 text-cyan-600" />
                      <span>Profile & Settings</span>
                    </Link>

                    <div className="border-t border-slate-100 my-1"></div>

                    <button
                      onClick={handleSignOut}
                      className="w-full flex items-center space-x-2 px-4 py-2.5 text-sm text-rose-600 hover:bg-rose-50 text-left"
                    >
                      <LogOut className="w-4 h-4" />
                      <span>Sign Out</span>
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex items-center space-x-2">
                <Link
                  to="/login"
                  className="px-3.5 py-1.5 text-sm font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors"
                >
                  Log In
                </Link>
                <Link
                  to="/signup"
                  className="px-3.5 py-1.5 text-sm font-medium bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-lg hover:from-cyan-500 hover:to-blue-500 shadow-md shadow-cyan-500/20 transition-all"
                >
                  Get Started
                </Link>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center space-x-2">
            <Link
              to="/bookmarks"
              className="p-2 text-slate-600 hover:text-cyan-600 relative"
            >
              <Bookmark className="w-5 h-5" />
              {bookmarks.length > 0 && (
                <span className="absolute top-1.5 right-1.5 w-4 h-4 text-[10px] font-bold bg-cyan-600 text-white rounded-full flex items-center justify-center">
                  {bookmarks.length}
                </span>
              )}
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-slate-900 rounded-lg focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/98 border-b border-slate-200 px-4 pt-2 pb-6 space-y-3 shadow-lg">
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
                        ? 'bg-cyan-50 text-cyan-700 border border-cyan-200 font-semibold'
                        : 'text-slate-700 hover:bg-slate-100'
                    }`
                  }
                >
                  <Icon className="w-5 h-5" />
                  <span>{link.name}</span>
                </NavLink>
              );
            })}
          </div>

          <div className="pt-3 border-t border-slate-200">
            {user ? (
              <div className="space-y-2">
                <Link
                  to="/dashboard"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center space-x-3 px-3 py-2 text-slate-800 hover:bg-slate-100 rounded-lg"
                >
                  <LayoutDashboard className="w-5 h-5 text-cyan-600" />
                  <span>Student Dashboard</span>
                </Link>
                <Link
                  to="/profile"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center space-x-3 px-3 py-2 text-slate-800 hover:bg-slate-100 rounded-lg"
                >
                  <User className="w-5 h-5 text-cyan-600" />
                  <span>Profile Settings</span>
                </Link>
                <button
                  onClick={() => {
                    handleSignOut();
                    setMobileMenuOpen(false);
                  }}
                  className="w-full flex items-center space-x-3 px-3 py-2 text-rose-600 hover:bg-rose-50 rounded-lg text-left"
                >
                  <LogOut className="w-5 h-5" />
                  <span>Sign Out</span>
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-2 pt-1">
                <Link
                  to="/login"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-center py-2 px-3 text-sm font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg"
                >
                  Log In
                </Link>
                <Link
                  to="/signup"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-center py-2 px-3 text-sm font-medium text-white bg-cyan-600 hover:bg-cyan-500 rounded-lg shadow-sm"
                >
                  Sign Up
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}

