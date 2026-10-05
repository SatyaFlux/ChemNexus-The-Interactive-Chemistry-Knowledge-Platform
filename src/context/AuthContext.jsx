// src/context/AuthContext.jsx
import React, { createContext, useContext, useState, useEffect } from 'react';
import { supabase, isSupabaseConfigured, dbService } from '@/lib/supabase';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [session, setSession] = useState(null);
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isGuest, setIsGuest] = useState(false);

  useEffect(() => {
    let mounted = true;

    async function initAuth() {
      try {
        if (!isSupabaseConfigured() || !supabase) {
          // Check if guest user session exists in local storage
          const guest = localStorage.getItem('chemnexus_guest_user');
          if (guest && mounted) {
            const parsed = JSON.parse(guest);
            setUser(parsed);
            setProfile({ full_name: parsed.name, study_level: 'Student' });
            setIsGuest(true);
          }
          if (mounted) setLoading(false);
          return;
        }

        // Supabase is configured
        const { data: { session: initialSession } } = await supabase.auth.getSession();
        if (mounted) {
          setSession(initialSession);
          if (initialSession?.user) {
            setUser(initialSession.user);
            const userProfile = await dbService.getProfile(initialSession.user.id);
            setProfile(userProfile);
          }
          setLoading(false);
        }

        const { data: { subscription } } = supabase.auth.onAuthStateChange(async (event, currentSession) => {
          if (!mounted) return;
          setSession(currentSession);
          if (currentSession?.user) {
            setUser(currentSession.user);
            setIsGuest(false);
            const userProfile = await dbService.getProfile(currentSession.user.id);
            setProfile(userProfile);
          } else {
            setUser(null);
            setProfile(null);
          }
          setLoading(false);
        });

        return () => {
          subscription?.unsubscribe();
        };
      } catch (err) {
        console.error('Auth initialization error:', err);
        if (mounted) setLoading(false);
      }
    }

    initAuth();

    return () => {
      mounted = false;
    };
  }, []);

  const signUp = async (email, password, fullName = '') => {
    if (!isSupabaseConfigured() || !supabase) {
      // Simulate account creation for demo/guest
      const guestId = 'demo-' + Math.random().toString(36).substring(2, 9);
      const guestUser = { id: guestId, email, name: fullName || 'Chemistry Scholar' };
      localStorage.setItem('chemnexus_guest_user', JSON.stringify(guestUser));
      setUser(guestUser);
      setProfile({ full_name: guestUser.name, study_level: 'Undergraduate' });
      setIsGuest(true);
      return { user: guestUser, session: { user: guestUser }, requiresEmailConfirmation: false, error: null };
    }

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: { full_name: fullName }
      }
    });

    if (error) throw error;

    // Detect if user already exists (Supabase returns user with empty identities when email confirmation is active)
    if (data.user && Array.isArray(data.user.identities) && data.user.identities.length === 0) {
      throw new Error('An account with this email address already exists. Please sign in instead.');
    }

    // If an immediate session is returned (email confirmation disabled in Supabase), sync profile
    if (data.user && data.session) {
      try {
        await dbService.updateProfile(data.user.id, { full_name: fullName, email });
      } catch (err) {
        console.warn('Profile database sync notice (run supabase/schema.sql in Supabase SQL Editor if tables not created):', err);
      }
    }

    const requiresEmailConfirmation = Boolean(data.user && !data.session);
    return {
      ...data,
      requiresEmailConfirmation
    };
  };

  const signIn = async (email, password) => {
    if (!isSupabaseConfigured() || !supabase) {
      const guestId = 'demo-' + Math.random().toString(36).substring(2, 9);
      const guestUser = { id: guestId, email, name: email.split('@')[0] };
      localStorage.setItem('chemnexus_guest_user', JSON.stringify(guestUser));
      setUser(guestUser);
      setProfile({ full_name: guestUser.name, study_level: 'Scholar' });
      setIsGuest(true);
      return { user: guestUser, error: null };
    }

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) throw error;
    return data;
  };

  const signOut = async () => {
    if (isSupabaseConfigured() && supabase) {
      await supabase.auth.signOut();
    }
    localStorage.removeItem('chemnexus_guest_user');
    setUser(null);
    setProfile(null);
    setIsGuest(false);
  };

  const continueAsGuest = () => {
    const guestUser = {
      id: 'guest-' + Date.now(),
      email: 'guest@chemnexus.edu',
      name: 'Guest Explorer',
    };
    localStorage.setItem('chemnexus_guest_user', JSON.stringify(guestUser));
    setUser(guestUser);
    setProfile({ full_name: 'Guest Explorer', study_level: 'Enthusiast' });
    setIsGuest(true);
  };

  const updateUserProfile = async (updates) => {
    if (user && !isGuest && isSupabaseConfigured()) {
      const updated = await dbService.updateProfile(user.id, updates);
      setProfile(updated);
      return updated;
    } else if (user) {
      const updated = { ...profile, ...updates };
      setProfile(updated);
      return updated;
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        session,
        profile,
        loading,
        isGuest,
        isConfigured: isSupabaseConfigured(),
        signUp,
        signIn,
        signOut,
        continueAsGuest,
        updateUserProfile,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

