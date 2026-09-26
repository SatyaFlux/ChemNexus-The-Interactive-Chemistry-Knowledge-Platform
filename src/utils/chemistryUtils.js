// src/utils/chemistryUtils.js
// Utility helpers for chemistry calculations, formatting, and category visuals

export const CATEGORY_CONFIG = {
  'alkali-metal': {
    name: 'Alkali Metal',
    color: '#ef4444',
    bgClass: 'bg-red-500/20 text-red-300 border-red-500/40 hover:bg-red-500/30',
    badgeClass: 'bg-red-500/10 text-red-400 border border-red-500/30',
    solidBg: '#ef4444',
  },
  'alkaline-earth': {
    name: 'Alkaline Earth Metal',
    color: '#f97316',
    bgClass: 'bg-orange-500/20 text-orange-300 border-orange-500/40 hover:bg-orange-500/30',
    badgeClass: 'bg-orange-500/10 text-orange-400 border border-orange-500/30',
    solidBg: '#f97316',
  },
  'transition-metal': {
    name: 'Transition Metal',
    color: '#eab308',
    bgClass: 'bg-yellow-500/20 text-yellow-300 border-yellow-500/40 hover:bg-yellow-500/30',
    badgeClass: 'bg-yellow-500/10 text-yellow-400 border border-yellow-500/30',
    solidBg: '#eab308',
  },
  'post-transition-metal': {
    name: 'Post-Transition Metal',
    color: '#10b981',
    bgClass: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40 hover:bg-emerald-500/30',
    badgeClass: 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30',
    solidBg: '#10b981',
  },
  'metalloid': {
    name: 'Metalloid',
    color: '#06b6d4',
    bgClass: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40 hover:bg-cyan-500/30',
    badgeClass: 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/30',
    solidBg: '#06b6d4',
  },
  'reactive-nonmetal': {
    name: 'Reactive Nonmetal',
    color: '#3b82f6',
    bgClass: 'bg-blue-500/20 text-blue-300 border-blue-500/40 hover:bg-blue-500/30',
    badgeClass: 'bg-blue-500/10 text-blue-400 border border-blue-500/30',
    solidBg: '#3b82f6',
  },
  'noble-gas': {
    name: 'Noble Gas',
    color: '#8b5cf6',
    bgClass: 'bg-purple-500/20 text-purple-300 border-purple-500/40 hover:bg-purple-500/30',
    badgeClass: 'bg-purple-500/10 text-purple-400 border border-purple-500/30',
    solidBg: '#8b5cf6',
  },
  'lanthanide': {
    name: 'Lanthanide',
    color: '#ec4899',
    bgClass: 'bg-pink-500/20 text-pink-300 border-pink-500/40 hover:bg-pink-500/30',
    badgeClass: 'bg-pink-500/10 text-pink-400 border border-pink-500/30',
    solidBg: '#ec4899',
  },
  'actinide': {
    name: 'Actinide',
    color: '#f43f5e',
    bgClass: 'bg-rose-500/20 text-rose-300 border-rose-500/40 hover:bg-rose-500/30',
    badgeClass: 'bg-rose-500/10 text-rose-400 border border-rose-500/30',
    solidBg: '#f43f5e',
  },
  'unknown': {
    name: 'Unknown Properties',
    color: '#64748b',
    bgClass: 'bg-slate-500/20 text-slate-300 border-slate-500/40 hover:bg-slate-500/30',
    badgeClass: 'bg-slate-500/10 text-slate-400 border border-slate-500/30',
    solidBg: '#64748b',
  },
};

export function getCategoryMeta(categoryKey) {
  return CATEGORY_CONFIG[categoryKey] || CATEGORY_CONFIG['unknown'];
}

// Convert chemical formula with numbers into unicode subscripts or JSX
export function formatChemicalFormula(formula) {
  if (!formula) return '';
  const subscripts = {
    '0': '₀', '1': '₁', '2': '₂', '3': '₃', '4': '₄',
    '5': '₅', '6': '₆', '7': '₇', '8': '₈', '9': '₉',
    '+': '⁺', '-': '⁻'
  };
  // Replace numbers that follow a letter with subscripts
  return formula.replace(/([A-Za-z)\]])([0-9]+)/g, (_, letter, digits) => {
    const subDigits = digits.split('').map(d => subscripts[d] || d).join('');
    return `${letter}${subDigits}`;
  });
}

// Format electron configurations like 1s2 2s2 2p6 to 1s² 2s² 2p⁶
export function formatElectronConfig(config) {
  if (!config) return '';
  const superscripts = {
    '0': '⁰', '1': '¹', '2': '²', '3': '³', '4': '⁴',
    '5': '⁵', '6': '⁶', '7': '⁷', '8': '⁸', '9': '⁹'
  };
  return config.replace(/([spdf])([0-9]+)/gi, (_, subshell, digits) => {
    const supDigits = digits.split('').map(d => superscripts[d] || d).join('');
    return `${subshell}${supDigits}`;
  });
}

// Temperature conversions from Kelvin
export function kelvinToCelsius(kelvin) {
  if (kelvin === null || kelvin === undefined) return null;
  return +(kelvin - 273.15).toFixed(1);
}

export function kelvinToFahrenheit(kelvin) {
  if (kelvin === null || kelvin === undefined) return null;
  return +((kelvin - 273.15) * (9 / 5) + 32).toFixed(1);
}

// Calculate Heatmap Color scale (0.0 to 1.0)
export function getHeatmapColor(value, min, max, propertyType = 'electronegativity') {
  if (value === null || value === undefined || isNaN(value)) {
    return 'rgba(30, 41, 59, 0.4)'; // Neutral slate
  }
  const clamped = Math.max(min, Math.min(max, value));
  const ratio = (clamped - min) / (max - min || 1);

  // Gradient: cyan (low) -> blue (mid) -> fuchsia / red (high)
  if (ratio < 0.5) {
    const localRatio = ratio / 0.5;
    // from (6, 182, 212) cyan to (59, 130, 246) blue
    const r = Math.round(6 + (59 - 6) * localRatio);
    const g = Math.round(182 + (130 - 182) * localRatio);
    const b = Math.round(212 + (246 - 212) * localRatio);
    return `rgba(${r}, ${g}, ${b}, 0.85)`;
  } else {
    const localRatio = (ratio - 0.5) / 0.5;
    // from (59, 130, 246) blue to (236, 72, 153) pink/red
    const r = Math.round(59 + (236 - 59) * localRatio);
    const g = Math.round(130 + (72 - 130) * localRatio);
    const b = Math.round(246 + (153 - 246) * localRatio);
    return `rgba(${r}, ${g}, ${b}, 0.85)`;
  }
}

