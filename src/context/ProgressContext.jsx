// src/context/ProgressContext.jsx
import React, { createContext, useContext, useState, useEffect } from 'react';
import { useAuth } from './AuthContext';
import { dbService, isSupabaseConfigured } from '@/lib/supabase';
import { storageUtils } from '@/utils/storageUtils';

const ProgressContext = createContext(null);

export function ProgressProvider({ children }) {
  const { user, isGuest } = useAuth();
  const [viewedElements, setViewedElements] = useState([]);
  const [recentViews, setRecentViews] = useState([]);
  const [quizResults, setQuizResults] = useState([]);
  const [loading, setLoading] = useState(true);

  // Load progress and quiz results on user change
  useEffect(() => {
    async function loadData() {
      setLoading(true);
      try {
        if (user && !isGuest && isSupabaseConfigured()) {
          // Fetch from Supabase
          const progressRows = await dbService.getLearningProgress(user.id);
          const viewedSymbols = progressRows.map((r) => r.element_symbol);
          setViewedElements(viewedSymbols);

          // Order recent views by last_viewed_at
          const sorted = [...progressRows].sort(
            (a, b) => new Date(b.last_viewed_at) - new Date(a.last_viewed_at)
          );
          setRecentViews(sorted.map((r) => r.element_symbol).slice(0, 10));

          const quizRows = await dbService.getQuizResults(user.id);
          setQuizResults(
            quizRows.map((q) => ({
              id: q.id,
              quizId: q.quiz_id,
              quizTitle: q.quiz_title,
              score: q.score,
              totalQuestions: q.total_questions,
              percentage: Number(q.percentage),
              timeSpentSeconds: q.time_spent_seconds,
              completedAt: q.completed_at,
            }))
          );
        } else {
          // Fetch from Local Storage
          const localProgress = storageUtils.getProgress();
          setViewedElements(localProgress.viewed || []);
          setRecentViews((localProgress.recent || []).slice(0, 10));
          const localQuizzes = storageUtils.getQuizResults();
          setQuizResults(localQuizzes);
        }
      } catch (err) {
        console.error('Error loading progress:', err);
      } finally {
        setLoading(false);
      }
    }

    loadData();
  }, [user, isGuest]);

  // Record an element view
  const recordView = async (symbol, number) => {
    if (!symbol) return;

    // Update state
    setViewedElements((prev) => (prev.includes(symbol) ? prev : [...prev, symbol]));
    setRecentViews((prev) => {
      const filtered = prev.filter((s) => s !== symbol);
      return [symbol, ...filtered].slice(0, 10);
    });

    // Update local storage
    const local = storageUtils.getProgress();
    const updatedViewed = local.viewed.includes(symbol) ? local.viewed : [...local.viewed, symbol];
    const updatedRecent = [symbol, ...(local.recent || []).filter((s) => s !== symbol)].slice(0, 10);
    storageUtils.saveProgress({ ...local, viewed: updatedViewed, recent: updatedRecent });

    // Sync to Supabase
    if (user && !isGuest && isSupabaseConfigured()) {
      try {
        await dbService.recordElementView(user.id, symbol, number);
      } catch (err) {
        console.error('Error saving view to Supabase:', err);
      }
    }
  };

  // Save quiz result
  const recordQuizCompletion = async (resultData) => {
    const formattedResult = {
      id: 'qr-' + Date.now(),
      quizId: resultData.quizId,
      quizTitle: resultData.quizTitle,
      score: resultData.score,
      totalQuestions: resultData.totalQuestions,
      percentage: Number(resultData.percentage),
      timeSpentSeconds: resultData.timeSpentSeconds || 0,
      completedAt: new Date().toISOString(),
    };

    setQuizResults((prev) => [formattedResult, ...prev]);
    storageUtils.saveQuizResult(formattedResult);

    if (user && !isGuest && isSupabaseConfigured()) {
      try {
        await dbService.saveQuizResult(user.id, resultData);
      } catch (err) {
        console.error('Error saving quiz result to Supabase:', err);
      }
    }
  };

  // Computed statistics
  const totalElements = 118;
  const exploredCount = viewedElements.length;
  const exploredPercentage = Math.round((exploredCount / totalElements) * 100);
  const totalQuizzes = quizResults.length;
  const averageScore = totalQuizzes > 0
    ? Math.round(quizResults.reduce((acc, q) => acc + q.percentage, 0) / totalQuizzes)
    : 0;

  return (
    <ProgressContext.Provider
      value={{
        viewedElements,
        recentViews,
        quizResults,
        loading,
        recordView,
        recordQuizCompletion,
        stats: {
          exploredCount,
          totalElements,
          exploredPercentage,
          totalQuizzes,
          averageScore,
        },
      }}
    >
      {children}
    </ProgressContext.Provider>
  );
}

export function useProgress() {
  const context = useContext(ProgressContext);
  if (!context) {
    throw new Error('useProgress must be used within a ProgressProvider');
  }
  return context;
}
