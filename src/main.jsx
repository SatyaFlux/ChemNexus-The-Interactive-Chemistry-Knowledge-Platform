// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { AuthProvider } from './context/AuthContext';
import { BookmarkProvider } from './context/BookmarkContext';
import { ProgressProvider } from './context/ProgressContext';
import './styles/index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <BookmarkProvider>
          <ProgressProvider>
            <App />
          </ProgressProvider>
        </BookmarkProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
