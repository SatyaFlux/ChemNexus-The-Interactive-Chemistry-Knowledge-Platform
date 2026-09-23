// src/components/quiz/QuizScoreSummary.jsx
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import confetti from 'canvas-confetti';
import { Award, CheckCircle2, XCircle, RotateCcw, LayoutDashboard, ArrowRight } from 'lucide-react';

export default function QuizScoreSummary({
  quiz,
  score,
  totalQuestions,
  userAnswers,
  onRetake,
}) {
  const percentage = Math.round((score / totalQuestions) * 100);

  useEffect(() => {
    if (percentage >= 60) {
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#06b6d4', '#3b82f6', '#10b981', '#ec4899'],
        });
      } catch (e) {
        console.log('Confetti effect unavailable:', e);
      }
    }
  }, [percentage]);

  const getGrade = () => {
    if (percentage >= 90) return { label: 'Master Chemist (A+)', color: 'text-emerald-400' };
    if (percentage >= 75) return { label: 'Advanced Scholar (B+)', color: 'text-cyan-400' };
    if (percentage >= 60) return { label: 'Good Knowledge (C)', color: 'text-blue-400' };
    return { label: 'Needs Further Review', color: 'text-amber-400' };
  };

  const grade = getGrade();

  return (
    <div className="max-w-2xl mx-auto space-y-6 animate-in fade-in duration-300">
      {/* Score Hero Card */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 text-center shadow-2xl relative overflow-hidden">
        <div className="w-20 h-20 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center mx-auto mb-4 text-cyan-400">
          <Award className="w-10 h-10" />
        </div>

        <h2 className="text-2xl font-bold text-white mb-1">{quiz.title} Complete!</h2>
        <p className={`text-sm font-semibold mb-6 ${grade.color}`}>{grade.label}</p>

        {/* Big Score Display */}
        <div className="flex items-center justify-center space-x-6 py-4 border-y border-slate-800 my-4">
          <div>
            <span className="text-3xl sm:text-4xl font-mono font-extrabold text-cyan-400">
              {percentage}%
            </span>
            <span className="text-xs text-slate-400 block mt-1">Accuracy</span>
          </div>
          <div className="h-10 w-px bg-slate-800"></div>
          <div>
            <span className="text-3xl sm:text-4xl font-mono font-extrabold text-white">
              {score}/{totalQuestions}
            </span>
            <span className="text-xs text-slate-400 block mt-1">Score</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-3">
          <button
            onClick={onRetake}
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium text-xs flex items-center justify-center space-x-1.5 transition-colors"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Retake Quiz</span>
          </button>
          <Link
            to="/dashboard"
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-medium text-xs flex items-center justify-center space-x-1.5 shadow-md shadow-cyan-500/20 transition-all"
          >
            <LayoutDashboard className="w-4 h-4" />
            <span>View in Dashboard</span>
          </Link>
          <Link
            to="/quizzes"
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium text-xs flex items-center justify-center space-x-1.5 transition-colors"
          >
            <span>All Quizzes</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Question by Question Review */}
      <div className="space-y-4">
        <h3 className="text-base font-bold text-white px-1">Detailed Question Review</h3>
        {quiz.questions.map((q, idx) => {
          const userAnswer = userAnswers[idx];
          const isCorrect = userAnswer === q.correctIndex;

          return (
            <div
              key={q.id}
              className="bg-slate-900/60 border border-slate-800 rounded-2xl p-5 space-y-3"
            >
              <div className="flex items-start justify-between gap-3">
                <span className="text-xs font-mono font-semibold text-slate-500">
                  Question {idx + 1}
                </span>
                {isCorrect ? (
                  <span className="flex items-center space-x-1 text-xs font-semibold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-md border border-emerald-500/30">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Correct</span>
                  </span>
                ) : (
                  <span className="flex items-center space-x-1 text-xs font-semibold text-rose-400 bg-rose-500/10 px-2 py-0.5 rounded-md border border-rose-500/30">
                    <XCircle className="w-3.5 h-3.5" />
                    <span>Incorrect</span>
                  </span>
                )}
              </div>

              <h4 className="text-sm font-semibold text-white leading-relaxed">
                {q.question}
              </h4>

              <div className="space-y-1.5 pt-1 text-xs font-medium">
                {q.options.map((opt, optIdx) => {
                  const wasChosen = userAnswer === optIdx;
                  const isTheRightOne = q.correctIndex === optIdx;

                  let optClass = 'bg-slate-950/80 border-slate-800/80 text-slate-400';
                  if (isTheRightOne) {
                    optClass = 'bg-emerald-950/30 border-emerald-500/50 text-emerald-300 font-semibold';
                  } else if (wasChosen && !isCorrect) {
                    optClass = 'bg-rose-950/30 border-rose-500/50 text-rose-300';
                  }

                  return (
                    <div
                      key={optIdx}
                      className={`p-2.5 rounded-xl border flex items-center justify-between ${optClass}`}
                    >
                      <span>{opt}</span>
                      {isTheRightOne && <CheckCircle2 className="w-4 h-4 text-emerald-400" />}
                      {wasChosen && !isCorrect && <XCircle className="w-4 h-4 text-rose-400" />}
                    </div>
                  );
                })}
              </div>

              {/* Explanation Note */}
              <div className="bg-slate-950 border border-slate-800/80 rounded-xl p-3 text-xs text-slate-300 leading-relaxed">
                <strong className="text-cyan-400 block mb-0.5">Explanation:</strong>
                {q.explanation}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
