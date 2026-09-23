// src/components/dashboard/ProgressOverview.jsx
import React from 'react';
import { elementsData } from '@/data/elementsData';
import { Link } from 'react-router-dom';
import { Compass, CheckCircle2, ArrowRight } from 'lucide-react';

export default function ProgressOverview({ viewedElements }) {
  const total = 118;
  const exploredCount = viewedElements.length;
  const percentage = Math.round((exploredCount / total) * 100);

  // Calculate block breakdowns
  const sBlockTotal = elementsData.filter((e) => e.block === 's').length;
  const pBlockTotal = elementsData.filter((e) => e.block === 'p').length;
  const dBlockTotal = elementsData.filter((e) => e.block === 'd').length;
  const fBlockTotal = elementsData.filter((e) => e.block === 'f').length;

  const sBlockExplored = viewedElements.filter((sym) => {
    const el = elementsData.find((e) => e.symbol === sym);
    return el && el.block === 's';
  }).length;

  const pBlockExplored = viewedElements.filter((sym) => {
    const el = elementsData.find((e) => e.symbol === sym);
    return el && el.block === 'p';
  }).length;

  const dBlockExplored = viewedElements.filter((sym) => {
    const el = elementsData.find((e) => e.symbol === sym);
    return el && el.block === 'd';
  }).length;

  const fBlockExplored = viewedElements.filter((sym) => {
    const el = elementsData.find((e) => e.symbol === sym);
    return el && el.block === 'f';
  }).length;

  // Unexplored element recommendations
  const unexplored = elementsData.filter((e) => !viewedElements.includes(e.symbol)).slice(0, 5);

  return (
    <div className="bg-slate-900/70 border border-slate-800 rounded-3xl p-6 shadow-xl space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        <div>
          <h3 className="text-lg font-bold text-white">Periodic Table Mastery</h3>
          <p className="text-xs text-slate-400">
            Track your journey through all 118 chemical elements
          </p>
        </div>
        <span className="text-sm font-mono font-bold text-cyan-400 bg-cyan-500/10 border border-cyan-500/30 px-3 py-1 rounded-xl self-start sm:self-auto">
          {percentage}% Explored
        </span>
      </div>

      {/* Main Overall Progress Bar */}
      <div>
        <div className="w-full bg-slate-950 rounded-full h-3.5 overflow-hidden border border-slate-800 p-0.5">
          <div
            className="bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 h-full rounded-full transition-all duration-500 shadow-sm shadow-cyan-500/30"
            style={{ width: `${percentage}%` }}
          />
        </div>
      </div>

      {/* Block Progress Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
        <div className="bg-slate-950 border border-slate-800 rounded-2xl p-3.5 space-y-1.5">
          <div className="flex justify-between items-center text-slate-400">
            <span className="font-mono font-semibold text-red-400">s-block</span>
            <span className="font-mono">{sBlockExplored}/{sBlockTotal}</span>
          </div>
          <div className="w-full bg-slate-900 rounded-full h-1.5 overflow-hidden">
            <div
              className="bg-red-500 h-full rounded-full"
              style={{ width: `${(sBlockExplored / sBlockTotal) * 100}%` }}
            />
          </div>
        </div>

        <div className="bg-slate-950 border border-slate-800 rounded-2xl p-3.5 space-y-1.5">
          <div className="flex justify-between items-center text-slate-400">
            <span className="font-mono font-semibold text-blue-400">p-block</span>
            <span className="font-mono">{pBlockExplored}/{pBlockTotal}</span>
          </div>
          <div className="w-full bg-slate-900 rounded-full h-1.5 overflow-hidden">
            <div
              className="bg-blue-500 h-full rounded-full"
              style={{ width: `${(pBlockExplored / pBlockTotal) * 100}%` }}
            />
          </div>
        </div>

        <div className="bg-slate-950 border border-slate-800 rounded-2xl p-3.5 space-y-1.5">
          <div className="flex justify-between items-center text-slate-400">
            <span className="font-mono font-semibold text-yellow-400">d-block</span>
            <span className="font-mono">{dBlockExplored}/{dBlockTotal}</span>
          </div>
          <div className="w-full bg-slate-900 rounded-full h-1.5 overflow-hidden">
            <div
              className="bg-yellow-500 h-full rounded-full"
              style={{ width: `${(dBlockExplored / dBlockTotal) * 100}%` }}
            />
          </div>
        </div>

        <div className="bg-slate-950 border border-slate-800 rounded-2xl p-3.5 space-y-1.5">
          <div className="flex justify-between items-center text-slate-400">
            <span className="font-mono font-semibold text-pink-400">f-block</span>
            <span className="font-mono">{fBlockExplored}/{fBlockTotal}</span>
          </div>
          <div className="w-full bg-slate-900 rounded-full h-1.5 overflow-hidden">
            <div
              className="bg-pink-500 h-full rounded-full"
              style={{ width: `${(fBlockExplored / fBlockTotal) * 100}%` }}
            />
          </div>
        </div>
      </div>

      {/* Suggested Next Elements to Explore */}
      {unexplored.length > 0 && (
        <div className="pt-2">
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 block mb-2">
            Suggested Next Elements to Explore:
          </span>
          <div className="flex flex-wrap gap-2">
            {unexplored.map((el) => (
              <Link
                key={el.symbol}
                to={`/element/${el.symbol}`}
                className="bg-slate-950 hover:bg-slate-800 border border-slate-800 hover:border-cyan-500/40 px-3 py-1.5 rounded-xl text-xs flex items-center space-x-2 transition-all group"
              >
                <span className="font-mono font-bold text-cyan-400">{el.symbol}</span>
                <span className="text-slate-300 group-hover:text-white">{el.name}</span>
                <ArrowRight className="w-3 h-3 text-slate-500 group-hover:text-cyan-400 transition-colors" />
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
