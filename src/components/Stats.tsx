/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Smile, Award, Cpu, ShieldCheck, CheckCircle, Radio, Sparkles, Building2, HelpCircle, Clock } from 'lucide-react';
import { COUNTERS } from '../data/hospitalData';

// Single count-up metrics card component
const StatCounterCard: React.FC<{
  label: string;
  value: number;
  suffix: string;
  icon: string;
  index: number;
  isDark: boolean;
}> = ({ label, value, suffix, icon, index, isDark }) => {
  const [count, setCount] = useState(0);
  const cardRef = useRef(null);
  // Detects when the specific metric panel is scanned into viewport active frame
  const isInView = useInView(cardRef, { once: true, margin: '-50px' });

  useEffect(() => {
    if (!isInView) return;
    
    let start = 0;
    const duration = 2000; // ms transition length
    const steps = 60;
    const increment = value / steps;
    const stepTime = duration / steps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isInView, value]);

  // Map icons from lucide
  const renderIcon = () => {
    const iconProps = { className: "h-6 w-6 text-amber-400 group-hover:scale-110 transition-transform duration-300" };
    switch (icon) {
      case 'Smile':
        return <Smile {...iconProps} />;
      case 'Radio':
        return <Radio {...iconProps} />;
      case 'Cpu':
        return <Cpu {...iconProps} />;
      case 'Award':
        return <Award {...iconProps} />;
      case 'ShieldCheck':
        return <ShieldCheck {...iconProps} />;
      case 'CheckCircle':
        return <CheckCircle {...iconProps} />;
      default:
        return <Sparkles {...iconProps} />;
    }
  };

  return (
    <motion.div
      ref={cardRef}
      className={`rounded-3xl border p-6 flex items-center gap-5 transition-all duration-500 relative overflow-hidden ${
        isDark
          ? 'glass-panel-dark border-white/5 hover:border-amber-400/40 hover:bg-white/10 shadow-xl'
          : 'bg-white border-slate-200 hover:border-blue-600 hover:shadow-xl shadow-md'
      }`}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.6 }}
    >
      {/* Decorative Shimmer */}
      <div className="shimmer-bg absolute inset-0 opacity-10 pointer-events-none" />

      {/* Symbol Plate */}
      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-slate-900 border border-amber-400/20 shadow-md">
        {renderIcon()}
      </div>

      <div>
        <div className="flex items-baseline gap-1">
          <span className={`font-heading text-2xl sm:text-3xl font-extrabold ${isDark ? 'text-amber-400' : 'text-blue-900'}`}>
            {count.toLocaleString()}
          </span>
          <span className="font-heading text-lg font-bold text-amber-500">
            {suffix}
          </span>
        </div>
        <p className={`text-xs sm:text-sm font-medium mt-1 font-display tracking-wide uppercase ${isDark ? 'text-blue-200/70' : 'text-slate-600'}`}>
          {label}
        </p>
      </div>

    </motion.div>
  );
};

interface StatsProps {
  isDark: boolean;
}

export const Stats: React.FC<StatsProps> = ({ isDark }) => {
  return (
    <section
      id="why-choose-us"
      className={`relative py-24 overflow-hidden transition-all duration-500 ${
        isDark ? 'bg-[#000a1a]' : 'bg-white'
      }`}
    >
      
      {/* Absolute vectors */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-600/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-400/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* UPPER DIPLOMATIC CARDS ABOUT SERVICES */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          
          <div className="lg:col-span-6">
            <div className="flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#D4AF37] w-fit">
              <Building2 className="h-3.5 w-3.5" />
              Corporate Merit
            </div>
            <h2 className={`mt-4 font-heading text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}>
              Why Hundreds Choose Aarogya Jeevan
            </h2>
            <p className={`mt-6 text-sm sm:text-base leading-relaxed ${
              isDark ? 'text-blue-200/80' : 'text-slate-600'
            }`}>
              Our institution is renowned for combining world-class multi-speciality medical competence with accessible healthcare economics. We offer specialized surgery panels operated by Dr. Amrendra Kumar and specialized child healthcare clinics backed by Dr. Deepsikha Kumari.
            </p>
            <p className={`mt-4 text-sm sm:text-base leading-relaxed ${
              isDark ? 'text-blue-200/70' : 'text-slate-500'
            }`}>
              Conveniently situated right on Bypass National Highway 31, Muhammadpur in Begusarai, Bihar, our trauma, ambulance, and diagnostic wings operate seamlessly round-the-clock.
            </p>
          </div>

          <div className="lg:col-span-6 relative">
            {/* Visual Glassmorphic Showcase card with list */}
            <div className={`rounded-3xl border p-8 backdrop-blur-md relative overflow-hidden ${
              isDark
                ? 'glass-panel-dark border-white/10 shadow-2xl shadow-black'
                : 'bg-blue-50/50 border-blue-200 shadow-xl shadow-blue-500/5'
            }`}>
              <div className="absolute top-0 right-0 h-24 w-24 bg-amber-400/5 rounded-bl-full border-l border-b border-amber-500/15" />
              
              <h3 className={`font-heading text-lg font-bold tracking-wide mb-6 uppercase ${isDark ? 'text-amber-400' : 'text-blue-900'}`}>
                Premium Client Support Accents
              </h3>

              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-400/10 border border-amber-400/20 text-[#D4AF37]">
                    <ShieldCheck className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className={`font-display text-sm font-bold uppercase ${isDark ? 'text-white' : 'text-slate-900'}`}>
                      Zero Infection (Sterilization Scheme)
                    </h4>
                    <p className={`text-xs mt-1 ${isDark ? 'text-gray-400' : 'text-slate-600'}`}>
                      All modular theatres pass certified HEPA particulate filter protocols weekly.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-400/10 border border-amber-400/20 text-[#D4AF37]">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className={`font-display text-sm font-bold uppercase ${isDark ? 'text-white' : 'text-slate-900'}`}>
                      Immediate Care Triage (ICT)
                    </h4>
                    <p className={`text-xs mt-1 ${isDark ? 'text-gray-400' : 'text-slate-600'}`}>
                      No administrative delays. Critical patients are taken directly inside stabilization rooms.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-400/10 border border-amber-400/20 text-[#D4AF37]">
                    <CheckCircle className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className={`font-display text-sm font-bold uppercase ${isDark ? 'text-white' : 'text-slate-900'}`}>
                      In-House Diagnostics & Pharmacy
                    </h4>
                    <p className={`text-xs mt-1 ${isDark ? 'text-gray-400' : 'text-slate-600'}`}>
                      Pathology reports are synced directly to wards and pharmacy counters instantly.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* 6 ANIMATED STATISTICAL METRICS */}
        <div id="stats-number-grid" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {COUNTERS.map((cnt, idx) => (
            <StatCounterCard
              key={cnt.id}
              label={cnt.label}
              value={cnt.value}
              suffix={cnt.suffix}
              icon={cnt.icon}
              index={idx}
              isDark={isDark}
            />
          ))}
        </div>

      </div>
    </section>
  );
};
