/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        chem: {
          dark: '#0a0f1d',
          card: '#111827',
          border: '#1f293d',
          surface: '#162032',
          accent: '#06b6d4',
          accentHover: '#0891b2',
        },
        category: {
          'alkali-metal': '#ef4444',
          'alkaline-earth': '#f97316',
          'transition-metal': '#eab308',
          'post-transition-metal': '#10b981',
          'metalloid': '#06b6d4',
          'reactive-nonmetal': '#3b82f6',
          'noble-gas': '#8b5cf6',
          'lanthanide': '#ec4899',
          'actinide': '#f43f5e',
          'unknown': '#64748b',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 12s linear infinite',
      }
    },
  },
  plugins: [],
};

