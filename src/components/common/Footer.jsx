// src/components/common/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Atom, ExternalLink, Heart, Shield, Sparkles } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-200/70 border-t border-slate-300 text-slate-600 py-12 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Info */}
          <div className="md:col-span-1 space-y-3">
            <Link to="/" className="flex items-center space-x-2.5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-600 to-blue-600 flex items-center justify-center shadow-md">
                <Atom className="w-5 h-5 text-white" />
              </div>
              <span className="text-lg font-bold tracking-tight text-slate-900">
                Chem<span className="text-cyan-600">Nexus</span>
              </span>
            </Link>
            <p className="text-xs text-slate-600 leading-relaxed">
              Explore Every Element. Understand Every Reaction. A centralized, research-grade chemistry knowledge platform designed for students, researchers, and science educators.
            </p>
            <div className="flex items-center space-x-2 text-xs text-slate-600">
              <Shield className="w-3.5 h-3.5 text-cyan-600" />
              <span>IUPAC Standard Verified Reference Data</span>
            </div>
          </div>

          {/* Platform Exploration */}
          <div>
            <h4 className="text-sm font-bold text-slate-800 tracking-wider uppercase mb-3">
              Platform
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/periodic-table" className="hover:text-cyan-700 transition-colors">
                  Interactive Periodic Table
                </Link>
              </li>
              <li>
                <Link to="/reactions" className="hover:text-cyan-700 transition-colors">
                  Chemical Reaction Explorer
                </Link>
              </li>
              <li>
                <Link to="/quizzes" className="hover:text-cyan-700 transition-colors">
                  Chemistry Quiz Challenges
                </Link>
              </li>
              <li>
                <Link to="/assistant" className="hover:text-cyan-700 transition-colors flex items-center gap-1">
                  <span>AI Chemistry Assistant</span>
                  <Sparkles className="w-3 h-3 text-cyan-600" />
                </Link>
              </li>
              <li>
                <Link to="/search" className="hover:text-cyan-700 transition-colors">
                  Deep Element Search
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Categories */}
          <div>
            <h4 className="text-sm font-bold text-slate-800 tracking-wider uppercase mb-3">
              Element Blocks
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <span className="text-red-700 hover:underline cursor-pointer font-medium">Alkali Metals</span>
              <span className="text-orange-700 hover:underline cursor-pointer font-medium">Alkaline Earth</span>
              <span className="text-yellow-700 hover:underline cursor-pointer font-medium">Transition Metals</span>
              <span className="text-emerald-700 hover:underline cursor-pointer font-medium">Post-Transition</span>
              <span className="text-cyan-700 hover:underline cursor-pointer font-medium">Metalloids</span>
              <span className="text-blue-700 hover:underline cursor-pointer font-medium">Nonmetals</span>
              <span className="text-purple-700 hover:underline cursor-pointer font-medium">Noble Gases</span>
              <span className="text-pink-700 hover:underline cursor-pointer font-medium">Lanthanides</span>
            </div>
          </div>

          {/* Student Hub */}
          <div>
            <h4 className="text-sm font-bold text-slate-800 tracking-wider uppercase mb-3">
              Account & Info
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/dashboard" className="hover:text-cyan-700 transition-colors">
                  Student Learning Dashboard
                </Link>
              </li>
              <li>
                <Link to="/bookmarks" className="hover:text-cyan-700 transition-colors">
                  Bookmarked Elements
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-cyan-700 transition-colors">
                  About ChemNexus & Sources
                </Link>
              </li>
              <li>
                <Link to="/login" className="hover:text-cyan-700 transition-colors">
                  Sign In / Register
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-300 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-600">
          <p>© {new Date().getFullYear()} ChemNexus Platform. All 118 elements and reaction standards documented.</p>
          <div className="flex items-center space-x-1 mt-3 sm:mt-0">
            <span>Built with precision for chemistry education worldwide</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

