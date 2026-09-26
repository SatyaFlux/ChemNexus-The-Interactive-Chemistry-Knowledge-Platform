// src/components/reactions/ReactionCard.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Copy, Check, ExternalLink, Flame, Info } from 'lucide-react';
import { formatChemicalFormula } from '@/utils/chemistryUtils';

export default function ReactionCard({ reaction }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(reaction.equation);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-slate-900/70 border border-slate-800 hover:border-cyan-500/40 rounded-2xl p-5 transition-all shadow-lg flex flex-col justify-between group">
      <div>
        {/* Header & Badges */}
        <div className="flex items-start justify-between gap-2 mb-3">
          <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
            {reaction.type}
          </span>
          <button
            onClick={handleCopy}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
            title="Copy chemical equation"
          >
            {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
          </button>
        </div>

        {/* Title */}
        <h4 className="text-base font-bold text-white mb-2 group-hover:text-cyan-200 transition-colors">
          {reaction.title}
        </h4>

        {/* Balanced Equation Box */}
        <div className="bg-slate-950 border border-slate-800/80 rounded-xl p-3 my-3">
          <span className="text-xs text-slate-500 block mb-1 uppercase font-mono tracking-wider">
            Balanced Equation
          </span>
          <div className="text-sm sm:text-base font-mono font-bold text-cyan-300 break-words">
            {formatChemicalFormula(reaction.equation)}
          </div>
        </div>

        {/* Reaction Conditions */}
        {reaction.conditions && (
          <div className="text-xs text-slate-400 mb-2 flex items-start space-x-1.5">
            <Flame className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
            <span><strong className="text-slate-300">Conditions:</strong> {reaction.conditions}</span>
          </div>
        )}

        {/* Scientific Explanation */}
        <p className="text-xs text-slate-300/90 leading-relaxed mb-4">
          {reaction.explanation}
        </p>
      </div>

      {/* Footer with Related Element Chips */}
      <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between flex-wrap gap-2 text-xs">
        <span className="text-slate-400">Related Elements:</span>
        <div className="flex items-center space-x-1.5">
          {reaction.relatedElements.map((symbol) => (
            <Link
              key={symbol}
              to={`/element/${symbol}`}
              className="px-2 py-0.5 rounded bg-slate-950 hover:bg-cyan-500/20 text-cyan-400 font-mono font-bold border border-slate-800 hover:border-cyan-500/40 transition-colors"
            >
              {symbol}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

