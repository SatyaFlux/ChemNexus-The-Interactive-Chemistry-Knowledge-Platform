// src/utils/storageUtils.js
// Safe local storage helpers for guest mode, offline browsing, and fallback caching

const KEYS = {
  BOOKMARKS: 'chemnexus_bookmarks',
  PROGRESS: 'chemnexus_progress',
  QUIZ_RESULTS: 'chemnexus_quiz_results',
  GUEST_USER: 'chemnexus_guest_user',
  PREFERENCES: 'chemnexus_user_prefs',
};

export const storageUtils = {
  // Bookmarks
  getBookmarks() {
    try {
      const data = localStorage.getItem(KEYS.BOOKMARKS);
      return data ? JSON.parse(data) : [];
    } catch {
      return [];
    }
  },

  saveBookmarks(bookmarks) {
    try {
      localStorage.setItem(KEYS.BOOKMARKS, JSON.stringify(bookmarks));
    } catch (e) {
      console.warn('LocalStorage save error:', e);
    }
  },

  // Explored Elements & Progress
  getProgress() {
    try {
      const data = localStorage.getItem(KEYS.PROGRESS);
      return data ? JSON.parse(data) : { viewed: [], mastered: [] };
    } catch {
      return { viewed: [], mastered: [] };
    }
  },

  saveProgress(progress) {
    try {
      localStorage.setItem(KEYS.PROGRESS, JSON.stringify(progress));
    } catch (e) {
      console.warn('LocalStorage save error:', e);
    }
  },

  // Quiz Results History
  getQuizResults() {
    try {
      const data = localStorage.getItem(KEYS.QUIZ_RESULTS);
      return data ? JSON.parse(data) : [];
    } catch {
      return [];
    }
  },

  saveQuizResult(result) {
    try {
      const existing = this.getQuizResults();
      const updated = [result, ...existing];
      localStorage.setItem(KEYS.QUIZ_RESULTS, JSON.stringify(updated));
      return updated;
    } catch (e) {
      console.warn('LocalStorage save error:', e);
      return [];
    }
  },

  // User Preferences
  getPreferences() {
    try {
      const data = localStorage.getItem(KEYS.PREFERENCES);
      return data ? JSON.parse(data) : { tempUnit: 'C', displayMode: 'standard', colorScheme: 'dark' };
    } catch {
      return { tempUnit: 'C', displayMode: 'standard', colorScheme: 'dark' };
    }
  },

  savePreferences(prefs) {
    try {
      localStorage.setItem(KEYS.PREFERENCES, JSON.stringify(prefs));
    } catch (e) {
      console.warn('LocalStorage save error:', e);
    }
  }
};

export default storageUtils;

