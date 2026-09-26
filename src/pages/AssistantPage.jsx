// src/pages/AssistantPage.jsx
import React from 'react';
import AssistantChatWindow from '@/components/assistant/AssistantChatWindow';
import { Sparkles, Shield, Cpu } from 'lucide-react';

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

      {/* Security and Intelligence Disclosure Banner */}
      <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-slate-400">
        <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-4 flex items-start space-x-3">
          <Shield className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
          <p>
            <strong className="text-slate-200">Zero-Secret Security:</strong> External AI queries are processed through a secure Vercel serverless function (<code className="text-cyan-300">/api/assistant</code>). No private API keys are ever bundled or exposed in client JavaScript.
          </p>
        </div>

        <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-4 flex items-start space-x-3">
          <Cpu className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
          <p>
            <strong className="text-slate-200">Dual-Engine Intelligence:</strong> Equipped with an embedded offline chemical knowledge engine covering all 118 elements and classical reactions, seamlessly augmented by Google Gemini when configured.
          </p>
        </div>
      </div>
    </div>
  );
}

