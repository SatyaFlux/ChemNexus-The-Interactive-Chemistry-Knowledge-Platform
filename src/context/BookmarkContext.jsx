// src/context/BookmarkContext.jsx
import React, { createContext, useContext, useState, useEffect } from 'react';
import { useAuth } from './AuthContext';
import { dbService, isSupabaseConfigured } from '@/lib/supabase';
import { storageUtils } from '@/utils/storageUtils';

const BookmarkContext = createContext(null);

export function BookmarkProvider({ children }) {
  const { user, isGuest } = useAuth();
  const [bookmarks, setBookmarks] = useState([]);
  const [loading, setLoading] = useState(true);

  // Load bookmarks on user change
  useEffect(() => {
    async function loadBookmarks() {
      setLoading(true);
      try {
        if (user && !isGuest && isSupabaseConfigured()) {
          const remoteData = await dbService.getBookmarks(user.id);
          const symbols = remoteData.map((b) => b.element_symbol);
          setBookmarks(symbols);
        } else {
          const localData = storageUtils.getBookmarks();
          setBookmarks(localData);
        }
      } catch (err) {
        console.error('Error loading bookmarks:', err);
        setBookmarks(storageUtils.getBookmarks());
      } finally {
        setLoading(false);
      }
    }

    loadBookmarks();
  }, [user, isGuest]);

  const isBookmarked = (symbol) => {
    return bookmarks.includes(symbol);
  };

  const toggleBookmark = async (element) => {
    const symbol = element.symbol;
    const exists = bookmarks.includes(symbol);

    let nextBookmarks;
    if (exists) {
      nextBookmarks = bookmarks.filter((s) => s !== symbol);
    } else {
      nextBookmarks = [...bookmarks, symbol];
    }
    setBookmarks(nextBookmarks);

    // Save to local storage as continuous fallback
    storageUtils.saveBookmarks(nextBookmarks);

    // If logged in with Supabase, sync with database
    if (user && !isGuest && isSupabaseConfigured()) {
      try {
        if (exists) {
          await dbService.removeBookmark(user.id, symbol);
        } else {
          await dbService.addBookmark(user.id, symbol, element.number);
        }
      } catch (err) {
        console.error('Error syncing bookmark with Supabase:', err);
      }
    }
  };

  return (
    <BookmarkContext.Provider
      value={{
        bookmarks,
        loading,
        isBookmarked,
        toggleBookmark,
      }}
    >
      {children}
    </BookmarkContext.Provider>
  );
}

export function useBookmarks() {
  const context = useContext(BookmarkContext);
  if (!context) {
    throw new Error('useBookmarks must be used within a BookmarkProvider');
  }
  return context;
}

