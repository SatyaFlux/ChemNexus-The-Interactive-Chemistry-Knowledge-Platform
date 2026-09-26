// src/components/quiz/QuizSession.jsx
import React, { useState } from 'react';
import { CheckCircle2, XCircle, Lightbulb, ArrowRight, Flag } from 'lucide-react';

export default function QuizSession({ quiz, onComplete }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});
  const [selectedOption, setSelectedOption] = useState(null);
  const [showHint, setShowHint] = useState(false);
  const [isAnswered, setIsAnswered] = useState(false);

  const currentQuestion = quiz.questions[currentIndex];
  const total = quiz.questions.length;
  const progressPercent = Math.round(((currentIndex + 1) / total) * 100);

  const handleSelectOption = (index) => {
    if (isAnswered) return;
    setSelectedOption(index);
    setIsAnswered(true);

    const updatedAnswers = { ...userAnswers, [currentIndex]: index };
    setUserAnswers(updatedAnswers);
  };

  const handleNext = () => {
    if (currentIndex < total - 1) {
      setCurrentIndex(currentIndex + 1);
      setSelectedOption(userAnswers[currentIndex + 1] ?? null);
      setIsAnswered(userAnswers[currentIndex + 1] !== undefined);
      setShowHint(false);
    } else {
      // Calculate final score
      let calculatedScore = 0;
      quiz.questions.forEach((q, idx) => {
        if (userAnswers[idx] === q.correctIndex) {
          calculatedScore += 1;
        }
      });
      onComplete(calculatedScore, userAnswers);
    }
  };

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      {/* Quiz Progress Header */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 shadow-lg">
        <div className="flex items-center justify-between text-xs font-semibold text-slate-400 mb-2">
          <span>
            Question <strong className="text-white font-mono text-sm">{currentIndex + 1}</strong> of {total}
          </span>
          <span className="font-mono text-cyan-400">{progressPercent}% Completed</span>
        </div>
        {/* Progress Bar Track */}
        <div className="w-full bg-slate-950 rounded-full h-2 overflow-hidden border border-slate-800">
          <div
            className="bg-gradient-to-r from-cyan-500 to-blue-600 h-full rounded-full transition-all duration-300"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>

      {/* Question Card */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6">
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono font-semibold px-2.5 py-0.5 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
              {quiz.category}
            </span>
            {currentQuestion.hint && !showHint && !isAnswered && (
              <button
                onClick={() => setShowHint(true)}
                className="text-xs text-amber-400 hover:text-amber-300 flex items-center space-x-1"
              >
                <Lightbulb className="w-3.5 h-3.5" />
                <span>Need a Hint?</span>
              </button>
            )}
          </div>

          <h3 className="text-lg sm:text-xl font-bold text-white leading-snug">
            {currentQuestion.question}
          </h3>

          {/* Hint Card */}
          {showHint && currentQuestion.hint && (
            <div className="bg-amber-950/20 border border-amber-500/30 rounded-xl p-3 text-xs text-amber-300 flex items-start space-x-2 animate-in fade-in">
              <Lightbulb className="w-4 h-4 shrink-0 mt-0.5 text-amber-400" />
              <span><strong>Hint:</strong> {currentQuestion.hint}</span>
            </div>
          )}
        </div>

        {/* Options List */}
        <div className="space-y-3">
          {currentQuestion.options.map((option, index) => {
            const isSelected = selectedOption === index;
            const isCorrect = currentQuestion.correctIndex === index;

            let optionStyle = 'bg-slate-950/80 border-slate-800 hover:border-slate-700 text-slate-200';
            if (isAnswered) {
              if (isCorrect) {
                optionStyle = 'bg-emerald-950/30 border-emerald-500 text-emerald-200 ring-1 ring-emerald-500 font-semibold';
              } else if (isSelected && !isCorrect) {
                optionStyle = 'bg-rose-950/30 border-rose-500 text-rose-200 ring-1 ring-rose-500';
              } else {
                optionStyle = 'bg-slate-950/40 border-slate-900 text-slate-500 opacity-60';
              }
            }

            return (
              <button
                key={index}
                onClick={() => handleSelectOption(index)}
                disabled={isAnswered}
                className={`w-full text-left p-4 rounded-2xl border transition-all text-sm flex items-center justify-between ${optionStyle} ${
                  !isAnswered ? 'hover:scale-[1.01] cursor-pointer' : 'cursor-default'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <span className="w-7 h-7 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center font-mono font-bold text-xs text-slate-400 shrink-0">
                    {String.fromCharCode(65 + index)}
                  </span>
                  <span className="leading-relaxed">{option}</span>
                </div>

                {isAnswered && (
                  <div>
                    {isCorrect && <CheckCircle2 className="w-5 h-5 text-emerald-400" />}
                    {isSelected && !isCorrect && <XCircle className="w-5 h-5 text-rose-400" />}
                  </div>
                )}
              </button>
            );
          })}
        </div>

        {/* Post-Answer Explanation Box */}
        {isAnswered && (
          <div className="bg-slate-950 border border-slate-800/80 rounded-2xl p-4 text-xs text-slate-300 leading-relaxed animate-in fade-in space-y-1">
            <span className="text-cyan-400 font-bold block text-xs uppercase tracking-wider">
              Educational Breakdown:
            </span>
            <p>{currentQuestion.explanation}</p>
          </div>
        )}

        {/* Next / Finish Button */}
        {isAnswered && (
          <div className="pt-3 flex justify-end">
            <button
              onClick={handleNext}
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold text-xs flex items-center space-x-2 shadow-lg shadow-cyan-500/20 transition-all hover:scale-[1.02]"
            >
              <span>{currentIndex === total - 1 ? 'Finish & View Score' : 'Next Question'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

