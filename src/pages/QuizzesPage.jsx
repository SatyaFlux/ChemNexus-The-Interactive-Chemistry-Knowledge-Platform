// src/pages/QuizzesPage.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { quizzesData } from '@/data/quizzesData';
import QuizCard from '@/components/quiz/QuizCard';
import { useProgress } from '@/context/ProgressContext';
import { useLanguage } from '@/context/LanguageContext';
import SEOHead from '@/components/seo/SEOHead';
import { createBreadcrumbSchema } from '@/utils/seoHelpers';
import { HelpCircle, ChevronRight } from 'lucide-react';

export default function QuizzesPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const { stats } = useProgress();
  const { isHindi } = useLanguage();
  const prefix = isHindi ? '/hi' : '';

  const categories = [
    { id: 'all', label: isHindi ? 'सभी क्विज़' : 'All Quizzes' },
    { id: 'Periodic Trends', label: isHindi ? 'आवर्त प्रवृत्तियाँ' : 'Periodic Trends' },
    { id: 'Fundamentals', label: isHindi ? 'मूलभूत अवधारणाएँ' : 'Fundamentals' },
    { id: 'Reactions', label: isHindi ? 'अभिक्रियाएँ' : 'Reactions' },
    { id: 'Organic Chemistry', label: isHindi ? 'कार्बनिक रसायन' : 'Organic' },
    { id: 'Physical Chemistry', label: isHindi ? 'भौतिक रसायन' : 'Physical Chemistry' },
    { id: 'Atomic Physics', label: isHindi ? 'परमाणु संरचना' : 'Atomic Structure' },
    { id: 'Chemical Bonding', label: isHindi ? 'रासायनिक आबंधन' : 'Bonding & VSEPR' },
    { id: 'Analytical Chemistry', label: isHindi ? 'अम्ल एवं क्षार' : 'Acids & Bases' },
    { id: 'Electrochemistry', label: isHindi ? 'विद्युत रसायन' : 'Electrochemistry' },
    { id: 'Inorganic Chemistry', label: isHindi ? 'उपसहसंयोजन' : 'Coordination' },
    { id: 'Environmental Chemistry', label: isHindi ? 'पर्यावरणीय रसायन' : 'Environmental' },
    { id: 'Biochemistry', label: isHindi ? 'जैव रसायन' : 'Biochemistry' },
    { id: 'Advanced Materials', label: isHindi ? 'उन्नत पदार्थ' : 'Advanced Materials' },
  ];

  const filteredQuizzes = quizzesData.filter((q) => {
    if (selectedCategory !== 'all' && q.category !== selectedCategory) {
      return false;
    }
    return true;
  });

  const pageTitle = isHindi
    ? 'रसायन विज्ञान अभ्यास क्विज़ एवं प्रश्नोत्तरी | ChemNexus'
    : 'Chemistry Practice Quiz: Test Your Knowledge with Instant Feedback | ChemNexus';

  const pageDescription = isHindi
    ? 'आवर्त सारणी, रासायनिक अभिक्रियाओं, बंधों और रससमीकरणमिति पर इंटरैक्टिव रसायन विज्ञान अभ्यास क्विज़। तुरंत परिणाम और व्याख्या।'
    : 'Take interactive chemistry practice quizzes on Periodic Trends, Acids & Bases, Organic Mechanisms, and Stoichiometry. Instant grading and explanations.';

  const keywords = isHindi
    ? 'chemistry practice quiz, chemistry questions and answers, रसायन विज्ञान के महत्वपूर्ण प्रश्न, chemistry practice quiz in hindi, रसायन विज्ञान क्विज'
    : 'chemistry practice quiz, chemistry questions and answers, chemistry quiz online, test chemistry knowledge, chemistry multiple choice questions';

  const canonicalPath = `${prefix}/quizzes`;

  const breadcrumbItems = [
    { name: isHindi ? 'होम' : 'Home', path: isHindi ? '/hi' : '/' },
    { name: isHindi ? 'क्विज़' : 'Quizzes', path: canonicalPath }
  ];

  const structuredData = [
    createBreadcrumbSchema(breadcrumbItems)
  ];

  return (
    <>
      <SEOHead
        title={pageTitle}
        description={pageDescription}
        keywords={keywords}
        canonicalPath={canonicalPath}
        enPath="/quizzes"
        hiPath="/hi/quizzes"
        structuredData={structuredData}
        lang={isHindi ? 'hi' : 'en'}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        {/* Breadcrumbs */}
        <nav aria-label="Breadcrumb" className="flex items-center space-x-2 text-xs text-slate-400">
          <Link to={prefix || '/'} className="hover:text-cyan-400 transition-colors">
            {isHindi ? 'होम' : 'Home'}
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
          <span className="text-slate-200">
            {isHindi ? 'क्विज़ चुनौतियाँ' : 'Chemistry Quizzes'}
          </span>
        </nav>

        {/* Title */}
        <div className="space-y-2">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white">
            {isHindi ? 'रसायन विज्ञान क्विज़ चुनौतियाँ' : 'Chemistry Practice Quiz Challenges'}
          </h1>
          <p className="text-sm text-slate-400 max-w-2xl leading-relaxed">
            {isHindi
              ? 'आवर्त प्रवृत्तियों, संयोजकता, रासायनिक अभिक्रियाओं और यौगिकों पर अपने वैचारिक ज्ञान का स्व-मूल्यांकन करें।'
              : 'Test your conceptual understanding of chemical periodicity, valence configurations, stoichiometry, and industrial materials.'}
          </p>
        </div>

        {/* User Performance Overview Card */}
        <div className="bg-gradient-to-r from-slate-900 via-slate-900/80 to-slate-900 border border-slate-800 rounded-3xl p-6 shadow-xl grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
          <div className="p-3">
            <span className="text-xs text-slate-400 block mb-1">
              {isHindi ? 'पूरे किए गए क्विज़' : 'Quizzes Completed'}
            </span>
            <span className="text-3xl font-extrabold font-mono text-cyan-400">{stats.totalQuizzes}</span>
          </div>
          <div className="p-3 border-y sm:border-y-0 sm:border-x border-slate-800">
            <span className="text-xs text-slate-400 block mb-1">
              {isHindi ? 'औसत सटीकता' : 'Average Accuracy'}
            </span>
            <span className="text-3xl font-extrabold font-mono text-white">{stats.averageScore}%</span>
          </div>
          <div className="p-3">
            <span className="text-xs text-slate-400 block mb-1">
              {isHindi ? 'उपलब्ध कुल प्रश्न' : 'Total Available Questions'}
            </span>
            <span className="text-3xl font-extrabold font-mono text-blue-400">
              {quizzesData.reduce((acc, q) => acc + q.questions.length, 0)}
            </span>
          </div>
        </div>

        {/* Categories Bar */}
        <div className="flex items-center overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-slate-800 gap-2 border-b border-slate-800">
          {categories.map((c) => (
            <button
              key={c.id}
              onClick={() => setSelectedCategory(c.id)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-colors ${
                selectedCategory === c.id
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                  : 'text-slate-400 hover:text-white hover:bg-slate-900 border border-transparent'
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        {/* Quizzes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredQuizzes.map((quiz) => (
            <QuizCard key={quiz.id} quiz={quiz} />
          ))}
        </div>
      </div>
    </>
  );
}
