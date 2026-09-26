// src/App.jsx
import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from '@/components/common/Navbar';
import Footer from '@/components/common/Footer';
import ProtectedRoute from '@/components/common/ProtectedRoute';

// Pages
import HomePage from '@/pages/HomePage';
import PeriodicTablePage from '@/pages/PeriodicTablePage';
import ElementDetailPage from '@/pages/ElementDetailPage';
import ReactionsPage from '@/pages/ReactionsPage';
import SearchPage from '@/pages/SearchPage';
import QuizzesPage from '@/pages/QuizzesPage';
import QuizDetailPage from '@/pages/QuizDetailPage';
import AssistantPage from '@/pages/AssistantPage';
import BookmarksPage from '@/pages/BookmarksPage';
import DashboardPage from '@/pages/DashboardPage';
import LoginPage from '@/pages/LoginPage';
import SignupPage from '@/pages/SignupPage';
import ProfilePage from '@/pages/ProfilePage';
import AboutPage from '@/pages/AboutPage';
import NotFoundPage from '@/pages/NotFoundPage';

// Scroll to top helper on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <div className="flex flex-col min-h-screen bg-[#0a0f1d] text-slate-100 font-sans selection:bg-cyan-500 selection:text-black">
      <ScrollToTop />
      <Navbar />

      <main className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/periodic-table" element={<PeriodicTablePage />} />
          <Route path="/element/:symbol" element={<ElementDetailPage />} />
          <Route path="/reactions" element={<ReactionsPage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/quizzes" element={<QuizzesPage />} />
          <Route path="/quiz/:id" element={<QuizDetailPage />} />
          <Route path="/assistant" element={<AssistantPage />} />
          <Route path="/bookmarks" element={<BookmarksPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />

          {/* Protected Routes */}
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <DashboardPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <ProfilePage />
              </ProtectedRoute>
            }
          />

          {/* 404 Route */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

