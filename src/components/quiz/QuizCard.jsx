// src/components/quiz/QuizCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { HelpCircle, Clock, Award, ArrowRight } from 'lucide-react';

export default function QuizCard({ quiz }) {
  const getDifficultyBadge = (difficulty) => {
    switch (difficulty) {
      case 'Beginner':
        return 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30';
      case 'Intermediate':
        return 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30';
      case 'Advanced':
        return 'bg-purple-500/10 text-purple-400 border-purple-500/30';
      default:
        return 'bg-slate-800 text-slate-300 border-slate-700';
    }
  };

  return (
    <div className="bg-slate-900/70 border border-slate-800 hover:border-cyan-500/40 rounded-2xl p-6 transition-all hover:shadow-xl hover:shadow-cyan-500/10 flex flex-col justify-between group">
      <div>
        {/* Top Badges */}
        <div className="flex items-center justify-between mb-4">
          <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
            {quiz.category}
          </span>
          <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full border ${getDifficultyBadge(quiz.difficulty)}`}>
            {quiz.difficulty}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
          {quiz.title}
        </h3>

        {/* Description */}
        <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-6">
          {quiz.description}
        </p>
      </div>

      {/* Meta Specs & CTA */}
      <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
        <div className="flex items-center space-x-3 text-xs text-slate-400">
          <div className="flex items-center space-x-1">
            <HelpCircle className="w-3.5 h-3.5 text-cyan-400" />
            <span>{quiz.questions.length} Questions</span>
          </div>
          <div className="flex items-center space-x-1">
            <Clock className="w-3.5 h-3.5 text-cyan-400" />
            <span>{quiz.estimatedMinutes} mins</span>
          </div>
        </div>

        <Link
          to={`/quiz/${quiz.id}`}
          className="inline-flex items-center space-x-1 px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-medium text-xs shadow-md shadow-cyan-500/20 transition-all"
        >
          <span>Start Quiz</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
}

