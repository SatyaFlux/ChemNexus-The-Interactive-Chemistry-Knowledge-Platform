// src/components/element-detail/BohrAtomModel.jsx
import React from 'react';
import { getCategoryMeta } from '@/utils/chemistryUtils';

export default function BohrAtomModel({ element }) {
  const shells = element.electronsPerShell || [1];
  const maxRadius = 140;
  const nucleusRadius = 24;
  const categoryMeta = getCategoryMeta(element.category);

  // Shell labels K, L, M, N, O, P, Q
  const shellNames = ['K', 'L', 'M', 'N', 'O', 'P', 'Q'];

  return (
    <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-5 flex flex-col items-center justify-between">
      <div className="w-full flex items-center justify-between mb-2">
        <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
          Bohr Electron Shell Model
        </h4>
        <span className="text-[11px] font-mono text-cyan-400 font-medium">
          {element.electronConfiguration}
        </span>
      </div>

      {/* SVG Canvas */}
      <div className="relative w-72 h-72 flex items-center justify-center my-2">
        <svg
          viewBox="-160 -160 320 320"
          className="w-full h-full select-none"
        >
          <defs>
            <radialGradient id="nucleusGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor={categoryMeta.solidBg} stopOpacity="1" />
              <stop offset="70%" stopColor={categoryMeta.solidBg} stopOpacity="0.8" />
              <stop offset="100%" stopColor="#0a0f1d" stopOpacity="0.1" />
            </radialGradient>
          </defs>

          {/* Electron Orbit Rings */}
          {shells.map((count, index) => {
            const shellRadius = nucleusRadius + ((index + 1) / (shells.length + 0.5)) * (maxRadius - nucleusRadius);
            return (
              <g key={`orbit-${index}`}>
                {/* Orbit path circle */}
                <circle
                  cx="0"
                  cy="0"
                  r={shellRadius}
                  fill="none"
                  stroke="#334155"
                  strokeWidth="1.2"
                  strokeDasharray="3 3"
                  className="opacity-70"
                />

                {/* Electrons placed evenly along the circumference */}
                {Array.from({ length: count }).map((_, electronIndex) => {
                  const angle = (electronIndex / count) * 2 * Math.PI;
                  const electronX = shellRadius * Math.cos(angle);
                  const electronY = shellRadius * Math.sin(angle);

                  return (
                    <circle
                      key={`electron-${index}-${electronIndex}`}
                      cx={electronX}
                      cy={electronY}
                      r="4"
                      fill="#38bdf8"
                      stroke="#0369a1"
                      strokeWidth="1"
                      className="shadow-sm shadow-cyan-400"
                    />
                  );
                })}
              </g>
            );
          })}

          {/* Central Nucleus */}
          <circle
            cx="0"
            cy="0"
            r={nucleusRadius}
            fill="url(#nucleusGlow)"
            stroke="#ffffff"
            strokeWidth="1.5"
            strokeOpacity="0.4"
            className="animate-pulse"
          />

          {/* Nucleus Symbol */}
          <text
            x="0"
            y="6"
            textAnchor="middle"
            fill="#ffffff"
            fontSize="15"
            fontWeight="bold"
            fontFamily="Inter, sans-serif"
          >
            {element.symbol}
          </text>
        </svg>
      </div>

      {/* Shell Breakdown Badges */}
      <div className="w-full flex items-center justify-center gap-1.5 flex-wrap pt-3 border-t border-slate-800 text-[11px]">
        {shells.map((count, idx) => (
          <div
            key={idx}
            className="flex items-center space-x-1 bg-slate-950 border border-slate-800 px-2 py-0.5 rounded-md"
          >
            <span className="font-semibold text-slate-400">{shellNames[idx] || `n=${idx+1}`}:</span>
            <span className="font-mono text-cyan-300 font-bold">{count}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
