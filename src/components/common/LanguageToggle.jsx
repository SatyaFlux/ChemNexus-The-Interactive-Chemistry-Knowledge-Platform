// src/components/common/LanguageToggle.jsx
// Accessible bilingual language switcher linking equivalent Hindi and English pages with correct hreflang attributes.

import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/context/LanguageContext';

export default function LanguageToggle({ className = '' }) {
  const { language, getEquivalentPath } = useLanguage();
  const isEn = language === 'en';
  const isHi = language === 'hi';

  const enPath = getEquivalentPath('en');
  const hiPath = getEquivalentPath('hi');

  return (
    <nav
      aria-label="Language options"
      className={`inline-flex items-center rounded-2xl bg-slate-900 border border-slate-700/80 shadow-md px-3 py-1 sm:py-1.5 transition-all select-none hover:border-cyan-500/50 ${className}`}
    >
      <Link
        to={enPath}
        hrefLang="en"
        className={`text-xs sm:text-sm font-semibold transition-colors duration-150 px-1 py-0.5 rounded ${
          isEn
            ? 'text-cyan-400 font-bold bg-cyan-500/10'
            : 'text-slate-400 hover:text-slate-200'
        }`}
        title="Switch to English"
        aria-current={isEn ? 'true' : undefined}
      >
        EN
      </Link>

      <span className="mx-1 text-xs text-slate-600 select-none">/</span>

      <Link
        to={hiPath}
        hrefLang="hi"
        className={`text-xs sm:text-sm font-semibold transition-colors duration-150 px-1 py-0.5 rounded ${
          isHi
            ? 'text-cyan-400 font-bold bg-cyan-500/10'
            : 'text-slate-400 hover:text-slate-200'
        }`}
        title="हिंदी में पढ़ें (Read in Hindi)"
        aria-current={isHi ? 'true' : undefined}
      >
        हिन्दी
      </Link>
    </nav>
  );
}
