// src/components/common/SkeletonLoader.jsx
import React from 'react';

export default function SkeletonLoader({ type = 'card', count = 1 }) {
  const items = Array.from({ length: count });

  if (type === 'card') {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
        {items.map((_, i) => (
          <div
            key={i}
            className="animate-pulse bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-4"
          >
            <div className="flex justify-between items-center">
              <div className="h-6 w-12 bg-slate-800 rounded-md"></div>
              <div className="h-4 w-20 bg-slate-800 rounded-full"></div>
            </div>
            <div className="space-y-2">
              <div className="h-8 w-24 bg-slate-800 rounded"></div>
              <div className="h-4 w-32 bg-slate-800 rounded"></div>
            </div>
            <div className="pt-2 border-t border-slate-800 flex justify-between">
              <div className="h-3 w-16 bg-slate-800 rounded"></div>
              <div className="h-3 w-16 bg-slate-800 rounded"></div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (type === 'table') {
    return (
      <div className="w-full space-y-2 animate-pulse">
        <div className="h-10 bg-slate-800/80 rounded-xl w-full"></div>
        <div className="h-64 bg-slate-900/60 border border-slate-800 rounded-2xl w-full"></div>
      </div>
    );
  }

  return (
    <div className="animate-pulse space-y-3 w-full">
      <div className="h-6 bg-slate-800 rounded w-1/3"></div>
      <div className="h-4 bg-slate-800/60 rounded w-2/3"></div>
      <div className="h-24 bg-slate-900 rounded-xl w-full"></div>
    </div>
  );
}
