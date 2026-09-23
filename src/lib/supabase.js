// src/lib/supabase.js
// Supabase Client Initialization and Service Helpers with graceful fallback

import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const isConfigured = Boolean(
  supabaseUrl &&
  supabaseAnonKey &&
  supabaseUrl !== 'https://your-project-id.supabase.co' &&
  !supabaseUrl.includes('placeholder')
);

// Gracefully instantiate client or a dummy client to prevent crashes
export const supabase = isConfigured
  ? createClient(supabaseUrl, supabaseAnonKey, {
      auth: {
        persistSession: true,
        autoRefreshToken: true,
        detectSessionInUrl: true,
      },
    })
  : null;

export const isSupabaseConfigured = () => isConfigured;

// Database Service Helpers with RLS support
export const dbService = {
  // Profiles
  async getProfile(userId) {
    if (!isConfigured || !supabase) return null;
    const { data, error } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', userId)
      .single();
    if (error && error.code !== 'PGRST116') {
      console.error('Error fetching profile:', error);
    }
    return data;
  },

  async updateProfile(userId, updates) {
    if (!isConfigured || !supabase) return null;
    const { data, error } = await supabase
      .from('profiles')
      .upsert({ id: userId, updated_at: new Date().toISOString(), ...updates })
      .select()
      .single();
    if (error) throw error;
    return data;
  },

  // Bookmarks
  async getBookmarks(userId) {
    if (!isConfigured || !supabase) return [];
    const { data, error } = await supabase
      .from('bookmarks')
      .select('*')
      .eq('user_id', userId)
      .order('created_at', { ascending: false });
    if (error) {
      console.error('Error fetching bookmarks:', error);
      return [];
    }
    return data || [];
  },

  async addBookmark(userId, elementSymbol, elementNumber, notes = '') {
    if (!isConfigured || !supabase) return null;
    const { data, error } = await supabase
      .from('bookmarks')
      .insert([{ user_id: userId, element_symbol: elementSymbol, element_number: elementNumber, notes }])
      .select()
      .single();
    if (error) throw error;
    return data;
  },

  async removeBookmark(userId, elementSymbol) {
    if (!isConfigured || !supabase) return true;
    const { error } = await supabase
      .from('bookmarks')
      .delete()
      .eq('user_id', userId)
      .eq('element_symbol', elementSymbol);
    if (error) throw error;
    return true;
  },

  // Learning Progress
  async getLearningProgress(userId) {
    if (!isConfigured || !supabase) return [];
    const { data, error } = await supabase
      .from('learning_progress')
      .select('*')
      .eq('user_id', userId);
    if (error) {
      console.error('Error fetching progress:', error);
      return [];
    }
    return data || [];
  },

  async recordElementView(userId, elementSymbol, elementNumber, status = 'viewed') {
    if (!isConfigured || !supabase) return null;
    const { data, error } = await supabase
      .from('learning_progress')
      .upsert({
        user_id: userId,
        element_symbol: elementSymbol,
        element_number: elementNumber,
        status,
        last_viewed_at: new Date().toISOString(),
      }, { onConflict: 'user_id, element_symbol' })
      .select()
      .single();
    if (error) {
      console.warn('Error recording element view:', error);
    }
    return data;
  },

  // Quiz Results
  async getQuizResults(userId) {
    if (!isConfigured || !supabase) return [];
    const { data, error } = await supabase
      .from('quiz_results')
      .select('*')
      .eq('user_id', userId)
      .order('completed_at', { ascending: false });
    if (error) {
      console.error('Error fetching quiz results:', error);
      return [];
    }
    return data || [];
  },

  async saveQuizResult(userId, resultData) {
    if (!isConfigured || !supabase) return null;
    const { data, error } = await supabase
      .from('quiz_results')
      .insert([{
        user_id: userId,
        quiz_id: resultData.quizId,
        quiz_title: resultData.quizTitle,
        score: resultData.score,
        total_questions: resultData.totalQuestions,
        percentage: resultData.percentage,
        time_spent_seconds: resultData.timeSpentSeconds || 0,
        completed_at: new Date().toISOString(),
      }])
      .select()
      .single();
    if (error) throw error;
    return data;
  }
};

export default supabase;
