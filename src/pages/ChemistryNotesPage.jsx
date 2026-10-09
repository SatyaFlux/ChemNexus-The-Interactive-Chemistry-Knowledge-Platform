// src/pages/ChemistryNotesPage.jsx
// High-yield chemistry revision notes, core concepts explained, and verified questions & answers.

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { highYieldNotes, chemistryFaqQuestions } from '@/data/chemistryNotesData';
import { useLanguage } from '@/context/LanguageContext';
import SEOHead from '@/components/seo/SEOHead';
import { createBreadcrumbSchema, createGuideSchema, createFAQSchema } from '@/utils/seoHelpers';
import {
  FileText,
  ChevronRight,
  ChevronDown,
  HelpCircle,
  BookOpen,
  Sparkles,
  Layers,
  GraduationCap
} from 'lucide-react';

export default function ChemistryNotesPage() {
  const { isHindi } = useLanguage();
  const prefix = isHindi ? '/hi' : '';
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const pageTitle = isHindi
    ? 'रसायन विज्ञान के संपूर्ण नोट्स एवं महत्वपूर्ण प्रश्नोत्तर (NCERT & NEET/JEE) | ChemNexus'
    : 'Comprehensive Chemistry Notes & High-Yield Questions & Answers | ChemNexus';

  const pageDescription = isHindi
    ? 'कक्षा 9, 10, 11, 12 एवं NEET/JEE के लिए रसायन विज्ञान के उच्च-स्तरीय नोट्स (Chemistry Notes in Hindi), मुख्य अवधारणाएँ और बार-बार पूछे जाने वाले महत्वपूर्ण प्रश्न।'
    : 'Free high-yield chemistry revision notes, fundamental concepts explained, chapter summaries, and high-yield chemistry questions and answers for students.';

  const keywords = isHindi
    ? 'रसायन विज्ञान के नोट्स, रसायन विज्ञान के महत्वपूर्ण प्रश्न, chemistry ke notes, chemistry questions in hindi, ncert chemistry notes hindi, board exam chemistry questions'
    : 'chemistry notes, chemistry concepts explained, chemistry questions and answers, chemistry ke notes, high school chemistry revision, chemistry study guide';

  const canonicalPath = `${prefix}/chemistry-notes`;

  const breadcrumbItems = [
    { name: isHindi ? 'होम' : 'Home', path: isHindi ? '/hi' : '/' },
    { name: isHindi ? 'रसायन विज्ञान नोट्स' : 'Chemistry Notes', path: canonicalPath }
  ];

  const structuredData = [
    createBreadcrumbSchema(breadcrumbItems),
    createGuideSchema({
      title: pageTitle,
      description: pageDescription,
      path: canonicalPath,
      lang: isHindi ? 'hi' : 'en'
    }),
    createFAQSchema(chemistryFaqQuestions, isHindi ? 'hi' : 'en')
  ];

  return (
    <>
      <SEOHead
        title={pageTitle}
        description={pageDescription}
        keywords={keywords}
        canonicalPath={canonicalPath}
        enPath="/chemistry-notes"
        hiPath="/hi/chemistry-notes"
        structuredData={structuredData}
        lang={isHindi ? 'hi' : 'en'}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="flex items-center space-x-2 text-xs text-slate-400">
          <Link to={prefix || '/'} className="hover:text-cyan-400 transition-colors">
            {isHindi ? 'होम' : 'Home'}
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
          <span className="text-slate-200">
            {isHindi ? 'रसायन विज्ञान नोट्स एवं प्रश्न' : 'Chemistry Notes & Q&A'}
          </span>
        </nav>

        {/* Hero Header */}
        <header className="space-y-3">
          <div className="inline-flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-cyan-400">
            <GraduationCap className="w-4 h-4" />
            <span>{isHindi ? 'अध्ययन सामग्री एवं परीक्षा तैयारी' : 'Study Notes & Exam Preparation'}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {isHindi ? 'रसायन विज्ञान के संपूर्ण नोट्स एवं महत्वपूर्ण प्रश्न' : 'High-Yield Chemistry Revision Notes & Q&A'}
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-3xl leading-relaxed">
            {isHindi
              ? 'कक्षा 9, 10, 11, 12, CBSE, State Boards, NEET एवं JEE की तैयारी के लिए सटीक वैज्ञानिक नोट्स, नियम, सूत्र और महत्वपूर्ण प्रश्नोत्तरी।'
              : 'Clear, authoritative chapter summaries, fundamental laws, and high-yield questions with detailed step-by-step answers in English and Hindi.'}
          </p>
        </header>

        {/* Chapter-Wise Revision Notes */}
        <section className="space-y-6">
          <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-cyan-400" />
            <span>{isHindi ? 'अध्याय-वार मुख्य अवधारणाएँ' : 'Chapter-by-Chapter Core Concepts'}</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {highYieldNotes.map((note) => (
              <article
                key={note.chapterId}
                className="bg-slate-900/60 border border-slate-800 rounded-3xl p-6 sm:p-7 space-y-4 shadow-lg hover:border-cyan-500/30 transition-all flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-cyan-400">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>{note.chapterId}</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-white">
                    {isHindi ? note.hindiTitle : note.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {isHindi ? note.hindiSummary : note.summary}
                  </p>

                  <div className="pt-2 space-y-2 border-t border-slate-800/80">
                    <span className="text-[11px] font-bold uppercase text-slate-400 tracking-wider block">
                      {isHindi ? 'प्रमुख बिंदु (Key Takeaways):' : 'Key Takeaways:'}
                    </span>
                    <ul className="space-y-1.5 text-xs text-slate-300">
                      {(isHindi ? note.hindiKeyPoints : note.keyPoints).map((kp, idx) => (
                        <li key={idx} className="flex items-start gap-2 bg-slate-950/60 p-2.5 rounded-xl border border-slate-800/60">
                          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 shrink-0"></span>
                          <span>{kp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* High-Yield Chemistry Questions & Answers (Google FAQPage Schema Compliant) */}
        <section className="bg-slate-900/70 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl">
          <div className="space-y-1">
            <div className="flex items-center space-x-2 text-amber-400 text-xs font-semibold uppercase tracking-wider">
              <HelpCircle className="w-4 h-4" />
              <span>{isHindi ? 'परीक्षा उपयोगी प्रश्न बैंक' : 'Exam Practice Q&A'}</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-white">
              {isHindi ? 'रसायन विज्ञान के महत्वपूर्ण प्रश्न एवं सटीक उत्तर' : 'Frequently Asked Chemistry Questions & Solutions'}
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              {isHindi
                ? 'बोर्ड परीक्षाओं और प्रतियोगी परीक्षाओं में सर्वाधिक पूछे जाने वाले प्रश्नों के स्पष्ट वैज्ञानिक उत्तर।'
                : 'Verified answers for conceptual and numerical questions most frequently tested in chemistry exams.'}
            </p>
          </div>

          <div className="space-y-3 pt-2">
            {chemistryFaqQuestions.map((q, idx) => {
              const isOpen = openFaqIndex === idx;
              const question = isHindi ? q.hiQuestion : q.question;
              const answer = isHindi ? q.hiAnswer : q.answer;

              return (
                <div
                  key={q.id}
                  className="bg-slate-950/70 border border-slate-800 rounded-2xl overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-900/50 transition-colors"
                    aria-expanded={isOpen}
                  >
                    <span className="text-xs sm:text-sm font-bold text-slate-100 flex items-start gap-2.5">
                      <span className="text-cyan-400 font-mono font-bold">Q{idx + 1}.</span>
                      <span>{question}</span>
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-cyan-400 transition-transform duration-200 shrink-0 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-4 pb-5 sm:px-5 border-t border-slate-900 pt-3 text-xs sm:text-sm text-slate-300 leading-relaxed animate-in fade-in duration-150">
                      <strong className="text-emerald-400 block mb-1">
                        {isHindi ? 'वैज्ञानिक उत्तर:' : 'Scientific Solution:'}
                      </strong>
                      <p>{answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </>
  );
}

