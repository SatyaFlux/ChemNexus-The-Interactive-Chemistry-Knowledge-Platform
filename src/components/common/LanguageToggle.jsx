// src/components/common/LanguageToggle.jsx
import React from 'react';
import { useLanguage } from '@/context/LanguageContext';

export default function LanguageToggle({ className = '' }) {
  const { language, setLanguage, toggleLanguage } = useLanguage();
  const isEn = language === 'en';
  const isHi = language === 'hi';

  return (
    <div
      role="group"
      aria-label="Language selection"
      className={`inline-flex items-center rounded-2xl bg-white border border-slate-200 shadow-sm px-3 py-1 sm:py-1.5 transition-all select-none hover:shadow hover:border-slate-300 cursor-pointer ${className}`}
      onClick={(e) => {
        // If clicking background/slash, toggle
        if (e.target.tagName !== 'BUTTON') {
          toggleLanguage();
        }
      }}
    >
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          setLanguage('en');
        }}
        className={`text-sm leading-none transition-colors duration-150 cursor-pointer ${
          isEn
            ? 'font-bold text-[#059669]'
            : 'font-medium text-slate-400 hover:text-slate-600'
        }`}
        title="Switch to English"
        aria-pressed={isEn}
      >
        EN
      </button>

      <span className="mx-1 text-xs text-slate-300 select-none">/</span>

      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          setLanguage('hi');
        }}
        className={`text-sm leading-none transition-colors duration-150 cursor-pointer ${
          isHi
            ? 'font-bold text-[#059669]'
            : 'font-medium text-slate-400 hover:text-slate-600'
        }`}
        title="हिंदी में बदलें (Switch to Hindi)"
        aria-pressed={isHi}
      >
        हि
      </button>
    </div>
  );
}

