// src/pages/QuizzesPage.jsx
import React, { useState } from 'react';
import { quizzesData } from '@/data/quizzesData';
import QuizCard from '@/components/quiz/QuizCard';
import { useProgress } from '@/context/ProgressContext';
import { HelpCircle, Trophy, Award, Clock } from 'lucide-react';

export default function QuizzesPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const { stats, quizResults } = useProgress();

  const categories = [
    { id: 'all', label: 'All Quizzes' },
    { id: 'Periodic Trends', label: 'Periodic Trends' },
    { id: 'Fundamentals', label: 'Fundamentals' },
    { id: 'Reactions', label: 'Reactions' },
    { id: 'Advanced Materials', label: 'Advanced Chemistry' },
  ];

  const filteredQuizzes = quizzesData.filter((q) => {
    if (selectedCategory !== 'all' && q.category !== selectedCategory) {
      return false;
    }
    return true;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Title */}
      <div className="space-y-2">
        <div className="inline-flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-cyan-400">
          <HelpCircle className="w-4 h-4" />
          <span>Interactive Chemistry Evaluations</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white">
          Chemistry Quiz Challenges
        </h1>
        <p className="text-sm text-slate-400 max-w-2xl leading-relaxed">
          Test your conceptual understanding of chemical periodicity, valence configurations, stoichiometry, and industrial materials.
        </p>
      </div>

      {/* User Performance Overview Card */}
      <div className="bg-gradient-to-r from-slate-900 via-slate-900/80 to-slate-900 border border-slate-800 rounded-3xl p-6 shadow-xl grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
        <div className="p-3">
          <span className="text-xs text-slate-400 block mb-1">Quizzes Completed</span>
          <span className="text-3xl font-extrabold font-mono text-cyan-400">{stats.totalQuizzes}</span>
        </div>
        <div className="p-3 border-y sm:border-y-0 sm:border-x border-slate-800">
          <span className="text-xs text-slate-400 block mb-1">Average Accuracy</span>
          <span className="text-3xl font-extrabold font-mono text-white">{stats.averageScore}%</span>
        </div>
        <div className="p-3">
          <span className="text-xs text-slate-400 block mb-1">Total Available Questions</span>
          <span className="text-3xl font-extrabold font-mono text-blue-400">
            {quizzesData.reduce((acc, q) => acc + q.questions.length, 0)}
          </span>
        </div>
      </div>

      {/* Category Pills */}
      <div className="flex flex-wrap items-center gap-2">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id)}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all ${
              selectedCategory === cat.id
                ? 'bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-500/20'
                : 'bg-slate-900 text-slate-300 hover:text-white border border-slate-800 hover:bg-slate-800'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Quiz Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredQuizzes.map((quiz) => (
          <QuizCard key={quiz.id} quiz={quiz} />
        ))}
      </div>
    </div>
  );
}

