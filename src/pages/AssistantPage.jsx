// src/pages/AssistantPage.jsx
import React from 'react';
import AssistantChatWindow from '@/components/assistant/AssistantChatWindow';
import { Sparkles } from 'lucide-react';

export default function AssistantPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Header */}
      <div className="text-center space-y-2 max-w-2xl mx-auto">
        <div className="inline-flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-cyan-400">
          <Sparkles className="w-4 h-4" />
          <span>Interactive Chemistry Tutor</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white">
          AI Chemistry Assistant
        </h1>
        <p className="text-sm text-slate-400 leading-relaxed">
          Ask questions about electron configurations, oxidation states, reaction mechanisms, or periodic trends. Designed specifically for chemistry students and researchers.
        </p>
      </div>

      {/* Main Chat Interface */}
      <AssistantChatWindow />
    </div>
  );
}

