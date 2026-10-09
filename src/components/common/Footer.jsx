// src/components/common/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Atom, Shield, Sparkles, BookOpen, Compass, FileText, SlidersHorizontal, Box } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function Footer() {
  const { t, isHindi } = useLanguage();
  const prefix = isHindi ? '/hi' : '';

  return (
    <footer className="bg-slate-950 border-t border-slate-800/80 text-slate-400 py-12 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Info */}
          <div className="md:col-span-1 space-y-3">
            <Link to={prefix || '/'} className="flex items-center space-x-2.5">
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
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <Link to={`${prefix}/periodic-table`} className="hover:text-cyan-400 transition-colors">
                  {t('footer_periodicTable')}
                </Link>
              </li>
              <li>
                <Link to={`${prefix}/reactions`} className="hover:text-cyan-400 transition-colors">
                  {t('footer_reactions')}
                </Link>
              </li>
              <li>
                <Link to={`${prefix}/quizzes`} className="hover:text-cyan-400 transition-colors">
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
                <Link to={`${prefix}/search`} className="hover:text-cyan-400 transition-colors">
                  {t('footer_deepSearch')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Chemistry Guides */}
          <div>
            <h4 className="text-sm font-semibold text-slate-200 tracking-wider uppercase mb-3">
              {isHindi ? 'रसायन विज्ञान मार्गदर्शिका' : 'Chemistry Study Guides'}
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <Link to={`${prefix}/reaction-types`} className="hover:text-cyan-400 transition-colors flex items-center gap-1.5">
                  <Compass className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{isHindi ? 'रासायनिक अभिक्रियाओं के प्रकार' : 'Types of Chemical Reactions'}</span>
                </Link>
              </li>
              <li>
                <Link to={`${prefix}/balancing-equations`} className="hover:text-cyan-400 transition-colors flex items-center gap-1.5">
                  <Box className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{isHindi ? 'रासायनिक समीकरण संतुलित करना' : 'Balancing Chemical Equations'}</span>
                </Link>
              </li>
              <li>
                <Link to={`${prefix}/chemical-formulas`} className="hover:text-cyan-400 transition-colors flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{isHindi ? 'महत्वपूर्ण रासायनिक सूत्र' : 'Chemical Formulas & Names'}</span>
                </Link>
              </li>
              <li>
                <Link to={`${prefix}/periodic-trends`} className="hover:text-cyan-400 transition-colors flex items-center gap-1.5">
                  <SlidersHorizontal className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{isHindi ? 'आवर्त प्रवृत्तियाँ एवं संयोजकता' : 'Periodic Trends & Valency'}</span>
                </Link>
              </li>
              <li>
                <Link to={`${prefix}/chemistry-notes`} className="hover:text-cyan-400 transition-colors flex items-center gap-1.5">
                  <FileText className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{isHindi ? 'रसायन विज्ञान नोट्स एवं महत्वपूर्ण प्रश्न' : 'Chemistry Notes & FAQs'}</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Student Hub & About */}
          <div>
            <h4 className="text-sm font-semibold text-slate-200 tracking-wider uppercase mb-3">
              {t('footer_about')}
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
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
                <Link to={`${prefix}/about`} className="hover:text-cyan-400 transition-colors">
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

        <div className="border-t border-slate-900 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} ChemNexus Platform. {t('footer_copyright')}</p>
          <div className="flex items-center space-x-4">
            <Link to="/" hrefLang="en" className="hover:text-cyan-400">English (Global)</Link>
            <span>•</span>
            <Link to="/hi" hrefLang="hi" className="hover:text-cyan-400">हिन्दी (India)</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
