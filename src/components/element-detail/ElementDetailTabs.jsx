// src/components/element-detail/ElementDetailTabs.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Info,
  Flame,
  Atom,
  Cpu,
  Pickaxe,
  FlaskConical,
  Boxes,
  Briefcase,
  History,
  AlertTriangle,
  ArrowRight,
  ExternalLink
} from 'lucide-react';
import { kelvinToCelsius, kelvinToFahrenheit, formatChemicalFormula, formatElectronConfig, getCategoryMeta } from '@/utils/chemistryUtils';
import BohrAtomModel from './BohrAtomModel';

export default function ElementDetailTabs({ element, allElements }) {
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { id: 'overview', label: 'Overview', icon: Info },
    { id: 'physical', label: 'Physical', icon: Flame },
    { id: 'chemical', label: 'Chemical', icon: FlaskConical },
    { id: 'atomic', label: 'Atomic & Shells', icon: Atom },
    { id: 'reactions', label: 'Reactions', icon: Cpu },
    { id: 'compounds', label: 'Compounds', icon: Boxes },
    { id: 'extraction', label: 'Occurrence & Extraction', icon: Pickaxe },
    { id: 'applications', label: 'Applications', icon: Briefcase },
    { id: 'history', label: 'Discovery', icon: History },
    { id: 'safety', label: 'Safety', icon: AlertTriangle },
  ];

  // Related elements in the same group or period
  const sameGroup = allElements.filter((e) => e.group === element.group && e.symbol !== element.symbol);
  const samePeriod = allElements.filter((e) => e.period === element.period && e.symbol !== element.symbol);

  return (
    <div className="space-y-6">
      {/* Tab Navigation Buttons */}
      <div className="flex items-center overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-slate-800 gap-1.5 border-b border-slate-800">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-2 px-3.5 py-2 rounded-xl text-xs font-medium whitespace-nowrap transition-all ${
                isActive
                  ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 shadow-sm'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900 border border-transparent'
              }`}
            >
              <Icon className="w-3.5 h-3.5" />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Tab Content Display */}
      <div className="bg-slate-900/60 border border-slate-800/80 rounded-2xl p-6 min-h-[380px]">
        {/* OVERVIEW TAB */}
        {activeTab === 'overview' && (
          <div className="space-y-6 animate-in fade-in duration-200">
            <div>
              <h3 className="text-lg font-bold text-white mb-2">Scientific Summary</h3>
              <p className="text-sm text-slate-300 leading-relaxed max-w-3xl">
                {element.summary}
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              <div className="bg-slate-950/70 border border-slate-800/80 rounded-xl p-3.5">
                <span className="text-xs text-slate-400 block mb-1">Atomic Number</span>
                <span className="text-xl font-bold font-mono text-cyan-400">{element.number}</span>
              </div>
              <div className="bg-slate-950/70 border border-slate-800/80 rounded-xl p-3.5">
                <span className="text-xs text-slate-400 block mb-1">Standard Atomic Weight</span>
                <span className="text-xl font-bold font-mono text-white">{element.atomicMass} <span className="text-xs font-normal text-slate-400">u</span></span>
              </div>
              <div className="bg-slate-950/70 border border-slate-800/80 rounded-xl p-3.5">
                <span className="text-xs text-slate-400 block mb-1">Category</span>
                <span className="text-sm font-semibold text-slate-200 block truncate">{getCategoryMeta(element.category).name}</span>
              </div>
              <div className="bg-slate-950/70 border border-slate-800/80 rounded-xl p-3.5">
                <span className="text-xs text-slate-400 block mb-1">State at STP</span>
                <span className="text-lg font-bold text-white">{element.state}</span>
              </div>
              <div className="bg-slate-950/70 border border-slate-800/80 rounded-xl p-3.5">
                <span className="text-xs text-slate-400 block mb-1">Group, Period, Block</span>
                <span className="text-sm font-bold font-mono text-slate-200">Group {element.group}, Period {element.period} ({element.block}-block)</span>
              </div>
              <div className="bg-slate-950/70 border border-slate-800/80 rounded-xl p-3.5">
                <span className="text-xs text-slate-400 block mb-1">Electron Configuration</span>
                <span className="text-sm font-bold font-mono text-cyan-300">{formatElectronConfig(element.electronConfiguration)}</span>
              </div>
              <div className="bg-slate-950/70 border border-slate-800/80 rounded-xl p-3.5">
                <span className="text-xs text-slate-400 block mb-1">Electronegativity (Pauling)</span>
                <span className="text-xl font-bold font-mono text-white">{element.electronegativity ?? 'None'}</span>
              </div>
              <div className="bg-slate-950/70 border border-slate-800/80 rounded-xl p-3.5">
                <span className="text-xs text-slate-400 block mb-1">Oxidation States</span>
                <span className="text-sm font-bold font-mono text-cyan-400">
                  {element.oxidationStates?.map(o => (o > 0 ? `+${o}` : o)).join(', ') || '0'}
                </span>
              </div>
            </div>
          </div>
        )}

        {/* PHYSICAL PROPERTIES TAB */}
        {activeTab === 'physical' && (
          <div className="space-y-6 animate-in fade-in duration-200">
            <h3 className="text-lg font-bold text-white">Physical & Thermodynamic Properties</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-slate-950/70 border border-slate-800 rounded-xl p-4 space-y-1">
                <span className="text-xs text-slate-400">Melting Point</span>
                <div className="text-xl font-bold font-mono text-white">
                  {element.meltingPoint ? `${element.meltingPoint} K` : 'Unknown'}
                </div>
                {element.meltingPoint && (
                  <p className="text-xs text-slate-400">
                    {kelvinToCelsius(element.meltingPoint)} °C / {kelvinToFahrenheit(element.meltingPoint)} °F
                  </p>
                )}
              </div>

              <div className="bg-slate-950/70 border border-slate-800 rounded-xl p-4 space-y-1">
                <span className="text-xs text-slate-400">Boiling Point</span>
                <div className="text-xl font-bold font-mono text-white">
                  {element.boilingPoint ? `${element.boilingPoint} K` : 'Unknown'}
                </div>
                {element.boilingPoint && (
                  <p className="text-xs text-slate-400">
                    {kelvinToCelsius(element.boilingPoint)} °C / {kelvinToFahrenheit(element.boilingPoint)} °F
                  </p>
                )}
              </div>

              <div className="bg-slate-950/70 border border-slate-800 rounded-xl p-4 space-y-1">
                <span className="text-xs text-slate-400">Density</span>
                <div className="text-xl font-bold font-mono text-cyan-400">
                  {element.density ? `${element.density} g/cm³` : 'Unknown'}
                </div>
                <p className="text-xs text-slate-400">Measured at room temperature</p>
              </div>

              <div className="bg-slate-950/70 border border-slate-800 rounded-xl p-4 space-y-1">
                <span className="text-xs text-slate-400">Atomic Radius</span>
                <div className="text-xl font-bold font-mono text-white">
                  {element.atomicRadius ? `${element.atomicRadius} pm` : 'Not determined'}
                </div>
                <p className="text-xs text-slate-400">Calculated empirical radius in picometers</p>
              </div>

              <div className="bg-slate-950/70 border border-slate-800 rounded-xl p-4 space-y-1">
                <span className="text-xs text-slate-400">First Ionization Energy</span>
                <div className="text-xl font-bold font-mono text-white">
                  {element.ionizationEnergy ? `${element.ionizationEnergy} kJ/mol` : 'Unknown'}
                </div>
                <p className="text-xs text-slate-400">Energy required to remove one electron</p>
              </div>

              <div className="bg-slate-950/70 border border-slate-800 rounded-xl p-4 space-y-1">
                <span className="text-xs text-slate-400">Electron Affinity</span>
                <div className="text-xl font-bold font-mono text-white">
                  {element.electronAffinity !== null && element.electronAffinity !== undefined
                    ? `${element.electronAffinity} kJ/mol`
                    : 'Unknown'}
                </div>
                <p className="text-xs text-slate-400">Energy released upon electron addition</p>
              </div>
            </div>
          </div>
        )}

        {/* CHEMICAL PROPERTIES TAB */}
        {activeTab === 'chemical' && (
          <div className="space-y-6 animate-in fade-in duration-200">
            <h3 className="text-lg font-bold text-white">Chemical Reactivity & Bonding Characteristics</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="bg-slate-950/70 border border-slate-800 rounded-xl p-4 space-y-3">
                <h4 className="text-sm font-semibold text-cyan-300">Oxidation & Valency</h4>
                <div className="space-y-2 text-xs">
                  <div className="flex justify-between py-1 border-b border-slate-800">
                    <span className="text-slate-400">Common Oxidation States:</span>
                    <span className="font-mono font-bold text-white">
                      {element.oxidationStates?.map(o => (o > 0 ? `+${o}` : o)).join(', ') || '0'}
                    </span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-800">
                    <span className="text-slate-400">Electronegativity:</span>
                    <span className="font-mono font-bold text-white">{element.electronegativity ?? 'N/A'}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-800">
                    <span className="text-slate-400">Block Subshell:</span>
                    <span className="font-mono font-bold text-cyan-400">{element.block}-block</span>
                  </div>
                </div>
              </div>

              <div className="bg-slate-950/70 border border-slate-800 rounded-xl p-4 space-y-3">
                <h4 className="text-sm font-semibold text-cyan-300">Periodic Classification</h4>
                <div className="space-y-2 text-xs">
                  <div className="flex justify-between py-1 border-b border-slate-800">
                    <span className="text-slate-400">Group Name:</span>
                    <span className="font-medium text-white">{getCategoryMeta(element.category).name}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-800">
                    <span className="text-slate-400">Valence Electrons:</span>
                    <span className="font-mono font-bold text-white">
                      {element.electronsPerShell ? element.electronsPerShell[element.electronsPerShell.length - 1] : 0}
                    </span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-800">
                    <span className="text-slate-400">Reactivity Trend:</span>
                    <span className="text-slate-300">
                      {element.category.includes('metal') ? 'Electropositive reducing agent' : 'Electronegative oxidizing nonmetal'}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ATOMIC & SHELLS TAB (INCLUDES BOHR ATOM MODEL) */}
        {activeTab === 'atomic' && (
          <div className="space-y-6 animate-in fade-in duration-200">
            <h3 className="text-lg font-bold text-white">Atomic Structure & Electron Shell Architecture</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              {/* Animated Bohr Model Visualizer */}
              <BohrAtomModel element={element} />

              {/* Electron Configuration Details */}
              <div className="space-y-4">
                <div className="bg-slate-950/70 border border-slate-800 rounded-xl p-4">
                  <span className="text-xs text-slate-400 block mb-1">Full Configuration</span>
                  <div className="text-base font-mono font-bold text-cyan-300">
                    {formatElectronConfig(element.electronConfiguration)}
                  </div>
                </div>

                <div className="bg-slate-950/70 border border-slate-800 rounded-xl p-4">
                  <span className="text-xs text-slate-400 block mb-1">Electrons per Shell (K, L, M, N...)</span>
                  <div className="text-sm font-mono text-white flex flex-wrap gap-2 mt-1">
                    {element.electronsPerShell?.map((count, i) => (
                      <span key={i} className="bg-slate-900 border border-slate-700/80 px-2 py-0.5 rounded">
                        Shell {i + 1}: <strong className="text-cyan-400">{count}</strong>
                      </span>
                    ))}
                  </div>
                </div>

                <div className="bg-slate-950/70 border border-slate-800 rounded-xl p-4">
                  <span className="text-xs text-slate-400 block mb-1">Nuclear Composition</span>
                  <div className="grid grid-cols-2 gap-2 text-xs mt-1">
                    <p className="text-slate-300">Protons (Z): <strong className="text-white font-mono">{element.number}</strong></p>
                    <p className="text-slate-300">Electrons: <strong className="text-white font-mono">{element.number}</strong></p>
                    <p className="text-slate-300">Neutrons (most stable): <strong className="text-white font-mono">{Math.round(element.atomicMass) - element.number}</strong></p>
                    <p className="text-slate-300">Mass Number (A): <strong className="text-white font-mono">{Math.round(element.atomicMass)}</strong></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* REACTIONS TAB */}
        {activeTab === 'reactions' && (
          <div className="space-y-6 animate-in fade-in duration-200">
            <h3 className="text-lg font-bold text-white">Representative Chemical Reactions</h3>
            {element.reactions && element.reactions.length > 0 ? (
              <div className="space-y-3">
                {element.reactions.map((rx, idx) => (
                  <div
                    key={idx}
                    className="bg-slate-950 border border-slate-800 rounded-xl p-4 space-y-2"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
                        {rx.type}
                      </span>
                    </div>
                    <div className="text-sm sm:text-base font-mono font-bold text-white tracking-wide py-1">
                      {formatChemicalFormula(rx.equation)}
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {rx.description}
                    </p>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8 text-slate-500 text-sm">
                No specific single-replacement reactions cataloged under ambient laboratory conditions.
              </div>
            )}
          </div>
        )}

        {/* IMPORTANT COMPOUNDS TAB */}
        {activeTab === 'compounds' && (
          <div className="space-y-6 animate-in fade-in duration-200">
            <h3 className="text-lg font-bold text-white">Essential Chemical Compounds</h3>
            {element.importantCompounds && element.importantCompounds.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {element.importantCompounds.map((comp, idx) => (
                  <div
                    key={idx}
                    className="bg-slate-950 border border-slate-800 rounded-xl p-4 space-y-1.5"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-base font-bold font-mono text-cyan-400">
                        {formatChemicalFormula(comp.formula)}
                      </span>
                      <span className="text-[11px] font-medium text-slate-400 bg-slate-900 px-2 py-0.5 rounded">
                        Compound
                      </span>
                    </div>
                    <h5 className="text-sm font-semibold text-slate-200">{comp.name}</h5>
                    <p className="text-xs text-slate-400 leading-relaxed">{comp.use}</p>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8 text-slate-500 text-sm">
                Does not readily form standard stable neutral compounds under ambient laboratory conditions.
              </div>
            )}
          </div>
        )}

        {/* OCCURRENCE & EXTRACTION TAB */}
        {activeTab === 'extraction' && (
          <div className="space-y-6 animate-in fade-in duration-200">
            <div>
              <h3 className="text-lg font-bold text-white mb-2">Natural Occurrence</h3>
              <p className="text-sm text-slate-300 leading-relaxed bg-slate-950/70 border border-slate-800 rounded-xl p-4">
                {element.occurrence}
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-white mb-2">Extraction & Industrial Processing</h3>
              <p className="text-sm text-slate-300 leading-relaxed bg-slate-950/70 border border-slate-800 rounded-xl p-4">
                {element.extraction}
              </p>
            </div>
          </div>
        )}

        {/* APPLICATIONS TAB */}
        {activeTab === 'applications' && (
          <div className="space-y-6 animate-in fade-in duration-200">
            <h3 className="text-lg font-bold text-white">Technological & Everyday Applications</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {element.applications?.map((app, idx) => (
                <div
                  key={idx}
                  className="bg-slate-950 border border-slate-800 rounded-xl p-3.5 flex items-start space-x-3"
                >
                  <div className="w-6 h-6 rounded-md bg-cyan-500/10 text-cyan-400 flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                    {idx + 1}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-medium">
                    {app}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* HISTORY & DISCOVERY TAB */}
        {activeTab === 'history' && (
          <div className="space-y-6 animate-in fade-in duration-200">
            <h3 className="text-lg font-bold text-white">Historical Context & Discovery</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-slate-950/70 border border-slate-800 rounded-xl p-4 space-y-1">
                <span className="text-xs text-slate-400">Discoverer / Isolation</span>
                <div className="text-base font-bold text-white">{element.discoveredBy}</div>
              </div>
              <div className="bg-slate-950/70 border border-slate-800 rounded-xl p-4 space-y-1">
                <span className="text-xs text-slate-400">Year of Discovery</span>
                <div className="text-base font-bold font-mono text-cyan-400">{element.yearDiscovered}</div>
              </div>
            </div>
            <p className="text-sm text-slate-300 leading-relaxed">
              Named according to IUPAC systematic scientific nomenclature, reflecting its elemental characteristics, geological origins, or commemorating prominent scientists.
            </p>
          </div>
        )}

        {/* SAFETY TAB */}
        {activeTab === 'safety' && (
          <div className="space-y-6 animate-in fade-in duration-200">
            <div className="flex items-center space-x-2 text-rose-400">
              <AlertTriangle className="w-5 h-5" />
              <h3 className="text-lg font-bold">Safety, Hazards & Precautions</h3>
            </div>
            <div className="bg-rose-950/20 border border-rose-500/30 rounded-xl p-4 text-sm text-rose-200 leading-relaxed">
              {element.safety}
            </div>
            <div className="text-xs text-slate-500">
              Always adhere to standard laboratory Safety Data Sheet (SDS) guidelines when handling chemical elements or their concentrated reagents.
            </div>
          </div>
        )}
      </div>

      {/* Related Elements Carousel / Navigation */}
      <div className="pt-4 border-t border-slate-800">
        <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">
          Related Group {element.group} Neighbors
        </h4>
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-2">
          {sameGroup.slice(0, 6).map((rel) => (
            <Link
              key={rel.symbol}
              to={`/element/${rel.symbol}`}
              className="bg-slate-900 border border-slate-800 hover:border-cyan-500/50 rounded-xl p-2.5 flex items-center space-x-2 transition-all hover:bg-slate-800/80 group"
            >
              <span
                className="w-7 h-7 rounded-lg flex items-center justify-center font-bold text-white text-xs"
                style={{ backgroundColor: getCategoryMeta(rel.category).solidBg }}
              >
                {rel.symbol}
              </span>
              <div className="truncate">
                <span className="text-xs font-semibold text-slate-200 group-hover:text-cyan-300 block truncate">
                  {rel.name}
                </span>
                <span className="text-[10px] text-slate-500 font-mono">
                  #{rel.number}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

