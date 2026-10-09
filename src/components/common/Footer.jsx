// src/components/common/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Atom, Shield, Sparkles } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-slate-950 border-t border-slate-800/80 text-slate-400 py-12 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Info */}
          <div className="md:col-span-1 space-y-3">
            <Link to="/" className="flex items-center space-x-2.5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center">
                <Atom className="w-5 h-5 text-white" />
              </div>
              <span className="text-lg font-bold tracking-tight text-white">
                Chem<span className="text-cyan-400">Nexus</span>
              </span>
            </Link>
            <p className="text-xs text-slate-400 leading-relaxed">
              {t('footer_tagline')}
            </p>
            <div className="flex items-center space-x-2 text-xs text-slate-500">
              <Shield className="w-3.5 h-3.5 text-cyan-400" />
              <span>{t('footer_iupacVerified')}</span>
            </div>
          </div>

          {/* Platform Exploration */}
          <div>
            <h4 className="text-sm font-semibold text-slate-200 tracking-wider uppercase mb-3">
              {t('footer_platform')}
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/periodic-table" className="hover:text-cyan-400 transition-colors">
                  {t('footer_periodicTable')}
                </Link>
              </li>
              <li>
                <Link to="/reactions" className="hover:text-cyan-400 transition-colors">
                  {t('footer_reactions')}
                </Link>
              </li>
              <li>
                <Link to="/quizzes" className="hover:text-cyan-400 transition-colors">
                  {t('footer_quizzes')}
                </Link>
              </li>
              <li>
                <Link to="/assistant" className="hover:text-cyan-400 transition-colors flex items-center gap-1">
                  <span>{t('footer_assistant')}</span>
                  <Sparkles className="w-3 h-3 text-cyan-400" />
                </Link>
              </li>
              <li>
                <Link to="/search" className="hover:text-cyan-400 transition-colors">
                  {t('footer_deepSearch')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Categories */}
          <div>
            <h4 className="text-sm font-semibold text-slate-200 tracking-wider uppercase mb-3">
              {t('footer_resources')}
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <Link to="/periodic-table" className="text-red-400/90 hover:underline">
                Alkali Metals
              </Link>
              <Link to="/periodic-table" className="text-orange-400/90 hover:underline">
                Alkaline Earth
              </Link>
              <Link to="/periodic-table" className="text-yellow-400/90 hover:underline">
                Transition Metals
              </Link>
              <Link to="/periodic-table" className="text-emerald-400/90 hover:underline">
                Post-Transition
              </Link>
              <Link to="/periodic-table" className="text-cyan-400/90 hover:underline">
                Metalloids
              </Link>
              <Link to="/periodic-table" className="text-blue-400/90 hover:underline">
                Nonmetals
              </Link>
              <Link to="/periodic-table" className="text-purple-400/90 hover:underline">
                Noble Gases
              </Link>
              <Link to="/periodic-table" className="text-pink-400/90 hover:underline">
                Lanthanides
              </Link>
            </div>
          </div>

          {/* Student Hub */}
          <div>
            <h4 className="text-sm font-semibold text-slate-200 tracking-wider uppercase mb-3">
              {t('footer_about')}
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/dashboard" className="hover:text-cyan-400 transition-colors">
                  {t('nav_studentDashboard')}
                </Link>
              </li>
              <li>
                <Link to="/bookmarks" className="hover:text-cyan-400 transition-colors">
                  {t('nav_bookmarkedElements')}
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-cyan-400 transition-colors">
                  {t('footer_aboutChemNexus')}
                </Link>
              </li>
              <li>
                <Link to="/login" className="hover:text-cyan-400 transition-colors">
                  {t('nav_logIn')}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-900 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500">
          <p>© {new Date().getFullYear()} ChemNexus Platform. {t('footer_copyright')}</p>
          <div className="flex items-center space-x-1 mt-3 sm:mt-0">
            <span>Built with precision for chemistry education worldwide</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

