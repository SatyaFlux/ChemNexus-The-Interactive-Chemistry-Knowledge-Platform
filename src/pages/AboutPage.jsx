// src/pages/AboutPage.jsx
import React from 'react';
import { Atom, ShieldCheck, Database, Cpu, BookOpen, Layers, CheckCircle2 } from 'lucide-react';
import SEOHead from '@/components/seo/SEOHead';
import { useLanguage } from '@/context/LanguageContext';

export default function AboutPage() {
  const { isHindi } = useLanguage();

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      <SEOHead
        title={
          isHindi
            ? 'ChemNexus के बारे में | रसायन विज्ञान शिक्षा और वैज्ञानिक संदर्भ'
            : 'About ChemNexus | Chemistry Learning Platform & Scientific Sources'
        }
        description={
          isHindi
            ? 'ChemNexus के शैक्षिक मिशन, IUPAC वैज्ञानिक स्रोतों और हिंदी-अंग्रेजी द्विभाषी रसायन विज्ञान अध्ययन मंच के बारे में जानें।'
            : 'Learn about ChemNexus, our educational mission, IUPAC and NIST verified scientific sources, and our comprehensive bilingual chemistry learning platform.'
        }
        keywords={[
          'about ChemNexus',
          'chemistry learning website',
          'IUPAC chemistry sources',
          'bilingual chemistry India',
          'रसायन विज्ञान के नोट्स',
          'chemistry ke notes',
        ]}
        breadcrumbs={[
          { name: isHindi ? 'गृह पृष्ठ' : 'Home', path: isHindi ? '/hi' : '/' },
          { name: isHindi ? 'हमारे बारे में' : 'About Us', path: isHindi ? '/hi/about' : '/about' },
        ]}
      />

      {/* Title */}
      <div className="text-center space-y-3">
        <div className="inline-flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-cyan-400">
          <Atom className="w-4 h-4" />
          <span>{isHindi ? 'मंच मिशन और वैज्ञानिक स्रोत' : 'Platform Mission & Sources'}</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white">
          {isHindi ? 'ChemNexus के बारे में' : 'About ChemNexus'}
        </h1>
        <p className="text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
          {isHindi
            ? '“प्रत्येक तत्व को जानें। हर रासायनिक अभिक्रिया को समझें।”'
            : '“Explore Every Element. Understand Every Reaction.”'}
        </p>
      </div>

      {/* Mission Section */}
      <div className="bg-slate-900/70 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-4">
        <h2 className="text-xl font-bold text-white">The Educational Mission</h2>
        <p className="text-sm text-slate-300 leading-relaxed">
          ChemNexus was created to resolve a major obstacle faced by modern chemistry students: fragmented, inconsistent, and ad-cluttered scientific information. Traditionally, learning about a chemical element requires navigating across Wikipedia, static tables, safety data sheet PDF archives, and academic textbooks.
        </p>
        <p className="text-sm text-slate-300 leading-relaxed">
          ChemNexus centralizes verified physical parameters, electronic configurations, occurrence, industrial extraction methods, reaction mechanisms, and practical applications for all 118 chemical elements into one modern, responsive platform.
        </p>
      </div>

      {/* Scientific Reference Standards */}
      <div className="space-y-4">
        <h3 className="text-xl font-bold text-white">Scientific Data Sources & Standards</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-5 space-y-2">
            <div className="flex items-center space-x-2 text-cyan-400 font-semibold text-sm">
              <ShieldCheck className="w-5 h-5" />
              <span>IUPAC Nomenclature & Masses</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Standard atomic weights, element names, and symbols strictly adhere to the International Union of Pure and Applied Chemistry (IUPAC) Commission on Isotopic Abundances and Atomic Weights.
            </p>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-5 space-y-2">
            <div className="flex items-center space-x-2 text-blue-400 font-semibold text-sm">
              <Database className="w-5 h-5" />
              <span>NIST Atomic Spectra & Ionization</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Ionization energies, electron configurations, and ground state terms cross-verified against the National Institute of Standards and Technology (NIST) Atomic Spectra Database.
            </p>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-5 space-y-2">
            <div className="flex items-center space-x-2 text-emerald-400 font-semibold text-sm">
              <BookOpen className="w-5 h-5" />
              <span>CRC Handbook of Chemistry & Physics</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Thermodynamic data including melting points, boiling points, densities, and Pauling electronegativities calibrated to standard CRC reference standards.
            </p>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-5 space-y-2">
            <div className="flex items-center space-x-2 text-purple-400 font-semibold text-sm">
              <Cpu className="w-5 h-5" />
              <span>GHS Safety & Toxicological Data</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Handling precautions, radiological warnings, and GHS classification insights referenced from OSHA, NIOSH, and PubChem safety documentation.
            </p>
          </div>
        </div>
      </div>

      {/* Technical Architecture */}
      <div className="bg-slate-900/70 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-4">
        <h3 className="text-xl font-bold text-white">Full-Stack Architecture</h3>
        <ul className="space-y-2 text-sm text-slate-300">
          <li className="flex items-start space-x-2">
            <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
            <span><strong>Frontend:</strong> React 18, Vite 6, Tailwind CSS, Lucide Icons, React Router v6.</span>
          </li>
          <li className="flex items-start space-x-2">
            <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
            <span><strong>Backend & Auth:</strong> Supabase Authentication, PostgreSQL database with Row Level Security (RLS).</span>
          </li>
          <li className="flex items-start space-x-2">
            <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
            <span><strong>AI Engine:</strong> Vercel Serverless Function architecture for Google Gemini AI with built-in offline chemical heuristics.</span>
          </li>
          <li className="flex items-start space-x-2">
            <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
            <span><strong>Deployment:</strong> Optimized for zero-configuration deployment to Vercel.</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

