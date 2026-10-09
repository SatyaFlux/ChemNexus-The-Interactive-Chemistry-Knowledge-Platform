// src/components/reactions/ReactionCard.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Copy, Check, ExternalLink, Flame, ArrowRight, Layers } from 'lucide-react';
import { formatChemicalFormula } from '@/utils/chemistryUtils';
import { useLanguage } from '@/context/LanguageContext';

export default function ReactionCard({ reaction }) {
  const [copied, setCopied] = useState(false);
  const { isHindi } = useLanguage();
  const prefix = isHindi ? '/hi' : '';

  const handleCopy = (e) => {
    e.stopPropagation();
    navigator.clipboard.writeText(reaction.equation);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const title = isHindi && reaction.hindiTitle ? reaction.hindiTitle : reaction.title;
  const reactionType = isHindi && reaction.hindiType ? reaction.hindiType : reaction.type;
  const explanation = isHindi && reaction.hindiExplanation ? reaction.hindiExplanation : reaction.explanation;
  const conditions = isHindi && reaction.hindiConditions ? reaction.hindiConditions : reaction.conditions;

  const detailUrl = `${prefix}/reaction/${reaction.id}`;

  return (
    <div className="bg-slate-900/70 border border-slate-800 hover:border-cyan-500/40 rounded-2xl p-5 transition-all shadow-lg flex flex-col justify-between group">
      <div>
        {/* Header & Badges */}
        <div className="flex items-start justify-between gap-2 mb-3">
          <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
            {reactionType}
          </span>
          <button
            onClick={handleCopy}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
            title="Copy chemical equation"
            aria-label="Copy chemical equation"
          >
            {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
          </button>
        </div>

        {/* Title */}
        <h4 className="text-base font-bold text-white mb-2 group-hover:text-cyan-200 transition-colors">
          <Link to={detailUrl} className="hover:underline">
            {title}
          </Link>
        </h4>

        {/* Balanced Equation Box */}
        <div className="bg-slate-950 border border-slate-800/80 rounded-xl p-3 my-3">
          <span className="text-[10px] text-slate-500 block mb-1 uppercase font-mono tracking-wider">
            {isHindi ? 'संतुलित समीकरण' : 'Balanced Equation'}
          </span>
          <div className="text-sm sm:text-base font-mono font-bold text-cyan-300 break-words">
            {formatChemicalFormula(reaction.equation)}
          </div>
        </div>

        {/* Reaction Conditions */}
        {conditions && (
          <div className="text-xs text-slate-400 mb-2 flex items-start space-x-1.5">
            <Flame className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
            <span><strong className="text-slate-300">{isHindi ? 'परिस्थितियाँ:' : 'Conditions:'}</strong> {conditions}</span>
          </div>
        )}

        {/* Scientific Explanation */}
        <p className="text-xs text-slate-300/90 leading-relaxed mb-4 line-clamp-3">
          {explanation}
        </p>
      </div>

      {/* Footer with Related Elements & Deep Link */}
      <div className="pt-3 border-t border-slate-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
        <div className="flex items-center space-x-1.5 flex-wrap">
          <span className="text-slate-500 text-[11px]">{isHindi ? 'तत्व:' : 'Elements:'}</span>
          {reaction.relatedElements?.map((symbol) => (
            <Link
              key={symbol}
              to={`${prefix}/element/${symbol}`}
              className="px-2 py-0.5 rounded bg-slate-950 hover:bg-cyan-500/20 text-cyan-400 font-mono font-bold border border-slate-800 hover:border-cyan-500/40 transition-colors text-[11px]"
            >
              {symbol}
            </Link>
          ))}
        </div>

        <Link
          to={detailUrl}
          className="text-cyan-400 hover:text-cyan-300 font-medium inline-flex items-center space-x-1 text-xs self-end sm:self-auto group-hover:translate-x-0.5 transition-transform"
        >
          <span>{isHindi ? 'संपूर्ण क्रियाविधि देखें' : 'View Mechanism'}</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
}
