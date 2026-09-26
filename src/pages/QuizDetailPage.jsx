// src/pages/QuizDetailPage.jsx
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { quizzesData } from '@/data/quizzesData';
import QuizSession from '@/components/quiz/QuizSession';
import QuizScoreSummary from '@/components/quiz/QuizScoreSummary';
import { useProgress } from '@/context/ProgressContext';
import { HelpCircle, ArrowLeft, Sparkles } from 'lucide-react';

export default function QuizDetailPage() {
  const { id } = useParams();
  const quiz = quizzesData.find((q) => q.id === id);
  const { recordQuizCompletion } = useProgress();

  const [completed, setCompleted] = useState(false);
  const [finalScore, setFinalScore] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});

  if (!quiz) {
    return (
      <div className="max-w-2xl mx-auto py-20 px-4 text-center space-y-4">
        <Sparkles className="w-12 h-12 text-cyan-400 mx-auto" />
        <h2 className="text-2xl font-bold text-white">Quiz Not Found</h2>
        <p className="text-sm text-slate-400">
          The requested chemistry quiz could not be located.
        </p>
        <Link
          to="/quizzes"
          className="px-5 py-2.5 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-semibold text-xs inline-flex items-center space-x-2"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Quizzes</span>
        </Link>
      </div>
    );
  }

  const handleQuizComplete = async (score, answers) => {
    setFinalScore(score);
    setUserAnswers(answers);
    setCompleted(true);

    const percentage = Math.round((score / quiz.questions.length) * 100);
    await recordQuizCompletion({
      quizId: quiz.id,
      quizTitle: quiz.title,
      score,
      totalQuestions: quiz.questions.length,
      percentage,
    });
  };

  const handleRetake = () => {
    setCompleted(false);
    setFinalScore(0);
    setUserAnswers({});
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
      {/* Breadcrumb Back Link */}
      <Link
        to="/quizzes"
        className="inline-flex items-center space-x-1.5 text-xs text-slate-400 hover:text-cyan-400 font-medium transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Back to All Quizzes</span>
      </Link>

      {!completed ? (
        <QuizSession quiz={quiz} onComplete={handleQuizComplete} />
      ) : (
        <QuizScoreSummary
          quiz={quiz}
          score={finalScore}
          totalQuestions={quiz.questions.length}
          userAnswers={userAnswers}
          onRetake={handleRetake}
        />
      )}
    </div>
  );
}

