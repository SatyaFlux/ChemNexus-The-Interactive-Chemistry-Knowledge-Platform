// src/pages/ProfilePage.jsx
import React, { useState } from 'react';
import { useAuth } from '@/context/AuthContext';
import { User, Mail, GraduationCap, Thermometer, Shield, LogOut, Check, Sparkles } from 'lucide-react';
import { storageUtils } from '@/utils/storageUtils';

export default function ProfilePage() {
  const { user, profile, isGuest, updateUserProfile, signOut, isConfigured } = useAuth();

  const [fullName, setFullName] = useState(profile?.full_name || user?.name || '');
  const [studyLevel, setStudyLevel] = useState(profile?.study_level || 'Undergraduate');
  const [saved, setSaved] = useState(false);
  const [loading, setLoading] = useState(false);

  const initialPrefs = storageUtils.getPreferences();
  const [tempUnit, setTempUnit] = useState(initialPrefs.tempUnit || 'C');

  const handleSave = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await updateUserProfile({
        full_name: fullName,
        study_level: studyLevel,
      });

      storageUtils.savePreferences({
        ...initialPrefs,
        tempUnit,
      });

      setSaved(true);
      setTimeout(() => setSaved(false), 2500);
    } catch (err) {
      console.error('Error saving profile:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Title */}
      <div className="space-y-1">
        <div className="inline-flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-cyan-400">
          <User className="w-4 h-4" />
          <span>Account Settings</span>
        </div>
        <h1 className="text-3xl font-extrabold text-white">Scholar Profile & Preferences</h1>
        <p className="text-sm text-slate-400">
          Customize your study preferences and view session credentials.
        </p>
      </div>

      {/* Main Profile Card */}
      <div className="bg-slate-900/80 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6">
        <form onSubmit={handleSave} className="space-y-6">
          {/* Identity Section */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400 border-b border-slate-800 pb-2">
              Personal Information
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-medium text-slate-300 block mb-1.5">
                  Full Name
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-500 absolute left-3.5 top-3 pointer-events-none" />
                  <input
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 focus:border-cyan-500 rounded-xl pl-10 pr-4 py-2.5 text-sm text-slate-100 focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-medium text-slate-300 block mb-1.5">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-slate-500 absolute left-3.5 top-3 pointer-events-none" />
                  <input
                    type="email"
                    disabled
                    value={user?.email || 'guest@chemnexus.edu'}
                    className="w-full bg-slate-950/60 border border-slate-900 rounded-xl pl-10 pr-4 py-2.5 text-sm text-slate-400 cursor-not-allowed"
                  />
                </div>
              </div>
            </div>

            <div>
              <label className="text-xs font-medium text-slate-300 block mb-1.5">
                Current Chemistry Academic Level
              </label>
              <select
                value={studyLevel}
                onChange={(e) => setStudyLevel(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 focus:border-cyan-500 rounded-xl px-4 py-2.5 text-sm text-slate-100 focus:outline-none cursor-pointer"
              >
                <option value="High School">High School Chemistry</option>
                <option value="Undergraduate">Undergraduate B.Sc / B.Tech</option>
                <option value="Graduate / Researcher">Graduate / PhD / Researcher</option>
                <option value="Chemistry Educator">Chemistry Educator / Faculty</option>
                <option value="Enthusiast">Independent Science Enthusiast</option>
              </select>
            </div>
          </div>

          {/* Preferences Section */}
          <div className="space-y-4 pt-2">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400 border-b border-slate-800 pb-2">
              Display & Unit Preferences
            </h3>

            <div>
              <label className="text-xs font-medium text-slate-300 block mb-1.5">
                Default Temperature Display
              </label>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { id: 'C', label: 'Celsius (°C)' },
                  { id: 'K', label: 'Kelvin (K)' },
                  { id: 'F', label: 'Fahrenheit (°F)' },
                ].map((unit) => (
                  <button
                    key={unit.id}
                    type="button"
                    onClick={() => setTempUnit(unit.id)}
                    className={`py-2 px-3 rounded-xl text-xs font-medium border transition-colors ${
                      tempUnit === unit.id
                        ? 'bg-cyan-500/10 text-cyan-300 border-cyan-500/40 font-bold'
                        : 'bg-slate-950 text-slate-400 border-slate-800 hover:text-white'
                    }`}
                  >
                    {unit.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Save Button */}
          <div className="pt-2 flex items-center justify-between">
            <button
              type="submit"
              disabled={loading}
              className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 disabled:opacity-50 text-white font-semibold text-xs flex items-center space-x-2 shadow-lg shadow-cyan-500/20 transition-all cursor-pointer"
            >
              {saved ? (
                <>
                  <Check className="w-4 h-4 text-white" />
                  <span>Preferences Saved!</span>
                </>
              ) : (
                <span>Save Profile Changes</span>
              )}
            </button>
          </div>
        </form>

        {/* Security & Storage Status */}
        <div className="pt-6 border-t border-slate-800 text-xs text-slate-400 space-y-2">
          <div className="flex items-center space-x-2">
            <Shield className="w-4 h-4 text-emerald-400" />
            <span>
              Database Connection:{' '}
              <strong className={isConfigured ? 'text-emerald-400' : 'text-amber-400'}>
                {isConfigured ? 'Connected to Supabase PostgreSQL' : 'Local Storage Mode'}
              </strong>
            </span>
          </div>
          <p className="text-[11px] text-slate-500">
            Row Level Security (RLS) ensures bookmarks and quiz metrics are isolated to your user account.
          </p>
        </div>

        {/* Sign Out CTA */}
        <div className="pt-4 border-t border-slate-800 flex justify-end">
          <button
            onClick={signOut}
            className="px-4 py-2 rounded-xl bg-rose-500/10 hover:bg-rose-500/20 text-rose-400 border border-rose-500/30 text-xs font-semibold flex items-center space-x-2 transition-colors cursor-pointer"
          >
            <LogOut className="w-4 h-4" />
            <span>Sign Out of ChemNexus</span>
          </button>
        </div>
      </div>
    </div>
  );
}
