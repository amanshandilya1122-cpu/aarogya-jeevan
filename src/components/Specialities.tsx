/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  HeartPulse, 
  Tv, 
  Baby, 
  Activity, 
  Stethoscope, 
  ClipboardCheck, 
  Microscope, 
  Pill, 
  ShieldAlert, 
  CheckCircle2, 
  ArrowRight,
  ChevronDown,
  ChevronUp,
  Sparkles,
  UserRound,
  ShieldCheck,
  Award
} from 'lucide-react';
import { SPECIALITIES } from '../data/hospitalData';

interface SpecialitiesProps {
  isDark: boolean;
}

export const Specialities: React.FC<SpecialitiesProps> = ({ isDark }) => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  // Helper to map Lucide Icons dynamically based on string ID
  const renderIcon = (iconName: string) => {
    const iconProps = { className: "h-6 w-6 text-amber-400 group-hover:scale-110 transition-transform duration-300" };
    switch (iconName) {
      case 'Activity':
        return <Activity {...iconProps} />;
      case 'Sparkles':
        return <Sparkles {...iconProps} />;
      case 'Baby':
        return <Baby {...iconProps} />;
      case 'HeartPulse':
        return <HeartPulse {...iconProps} />;
      case 'Stethoscope':
        return <Stethoscope {...iconProps} />;
      case 'ClipboardCheck':
        return <ClipboardCheck {...iconProps} />;
      case 'Microscope':
        return <Microscope {...iconProps} />;
      case 'Pills':
        return <Pill {...iconProps} />;
      case 'ShieldAlert':
        return <ShieldAlert {...iconProps} />;
      case 'UserCheck':
        return <UserRound {...iconProps} />;
      default:
        return <HeartPulse {...iconProps} />;
    }
  };

  return (
    <section
      id="specialities"
      className={`relative py-24 overflow-hidden transition-all duration-500 ${
        isDark ? 'bg-[#000a1a]' : 'bg-[#F8FAFC]'
      }`}
    >
      
      {/* Background Graphic Accents */}
      <div className="absolute top-1/4 left-10 w-80 h-80 bg-blue-600/5 rounded-full blur-[100px] pointer-events-none animate-pulse" />
      <div className="absolute bottom-1/4 right-10 w-80 h-80 bg-amber-400/5 rounded-full blur-[100px] pointer-events-none animate-pulse" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* SECTION TITLE HEADER */}
        <div className="text-center mb-16">
          <motion.div
            className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#D4AF37]"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Award className="h-3.5 w-3.5" />
            Medical Disciplines
          </motion.div>
          <motion.h2
            className={`mt-4 font-heading text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Our Multi Speciality Care
          </motion.h2>
          <motion.p
            className={`mx-auto mt-4 max-w-2xl text-sm sm:text-base ${
              isDark ? 'text-blue-200/80' : 'text-slate-600'
            }`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Explore our state-of-the-art medical services. Each wing is led by specialized experts and supported by high-fidelity diagnostics.
          </motion.p>
        </div>

        {/* 10 SPECIALITY CARDS GRID LAYOUT */}
        <div id="specialities-card-grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SPECIALITIES.map((spec, idx) => {
            const isExpanded = expandedId === spec.id;
            return (
              <motion.div
                key={spec.id}
                id={`card-spec-${spec.id}`}
                className={`group rounded-3xl border p-6 transition-all duration-500 relative flex flex-col justify-between overflow-hidden cursor-pointer ${
                  isExpanded
                    ? isDark
                      ? 'glass bg-gradient-to-br from-[#000a1a]/85 to-[#8e6d13]/25 border-amber-400 shadow-2xl luxury-glow-intense'
                      : 'bg-white border-blue-600 shadow-2xl shadow-blue-500/10'
                    : isDark
                      ? 'glass-panel-dark border-white/5 hover:border-amber-400/40 hover:bg-white/10 shadow-lg'
                      : 'bg-white border-slate-200 hover:border-blue-500 hover:shadow-xl hover:shadow-slate-200/50 shadow'
                }`}
                whileHover={{ y: -6, scale: isExpanded ? 1 : 1.015 }}
                transition={{ type: 'spring', stiffness: 200, damping: 20 }}
                onClick={() => toggleExpand(spec.id)}
              >
                {/* Visual Glass Shimmer on card */}
                <div className="shimmer-bg absolute inset-0 opacity-10 pointer-events-none" />

                {/* Card Context */}
                <div>
                  <div className="flex justify-between items-start mb-5">
                    {/* Glowing Circular Icon Bubble */}
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-900 border border-amber-400/40 shadow-inner group-hover:border-amber-400 transition-all duration-300">
                      {renderIcon(spec.icon)}
                    </div>
                    {/* Index Serial indicator */}
                    <span className="font-mono text-xs font-bold text-amber-500/40">
                      /{String(idx + 1).padStart(2, '0')}
                    </span>
                  </div>

                  <h3 className={`font-heading text-lg font-bold tracking-wide uppercase ${
                    isDark ? 'text-white' : 'text-slate-950'
                  }`}>
                    {spec.title}
                  </h3>

                  <p className={`mt-3 text-xs sm:text-sm line-clamp-3 leading-relaxed ${
                    isDark ? 'text-blue-200/85' : 'text-slate-600'
                  }`}>
                    {spec.description}
                  </p>
                </div>

                {/* COLLAPSIBLE HIGHLIGHT DETAILS */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      id={`spec-collapsible-${spec.id}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: 'easeInOut' }}
                      className="overflow-hidden mt-6 pt-5 border-t border-amber-400/15"
                    >
                      <h4 className="text-amber-400 text-xs font-semibold uppercase tracking-wider mb-3 flex items-center gap-1.5">
                        <ShieldCheck className="h-3.5 w-3.5" />
                        Clinical Highlights:
                      </h4>
                      <ul className="space-y-2 mb-4">
                        {spec.detailedHighlights.map((hl, hIdx) => (
                          <li key={hIdx} className="flex items-start gap-2.5">
                            <CheckCircle2 className="h-4 w-4 text-[#D4AF37] shrink-0 mt-0.5" />
                            <span className={`text-xs ${isDark ? 'text-gray-300' : 'text-slate-700'}`}>
                              {hl}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* BOTTOM ACTION RAIL */}
                <div className="flex justify-between items-center mt-6 pt-4 border-t border-white/5">
                  <span className={`text-xs font-bold uppercase tracking-wider flex items-center gap-1 transition-all duration-300 ${
                    isExpanded 
                      ? 'text-amber-400' 
                      : isDark ? 'text-gray-400 group-hover:text-amber-400' : 'text-slate-500 group-hover:text-blue-600'
                  }`}>
                    {isExpanded ? 'Collapse Highlights' : 'Explore Highlights'}
                  </span>
                  
                  <div className={`h-8 w-8 rounded-full flex items-center justify-center border transition-all duration-300 ${
                    isExpanded
                      ? 'bg-amber-400 text-slate-900 border-amber-400'
                      : isDark 
                        ? 'border-gray-800 bg-slate-950 text-white group-hover:border-amber-400 group-hover:text-amber-400'
                        : 'border-slate-200 bg-white text-slate-800 group-hover:border-blue-500 group-hover:text-blue-600'
                  }`}>
                    {isExpanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
