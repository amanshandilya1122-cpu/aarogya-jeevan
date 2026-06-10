/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { HeartPulse, Award, ShieldAlert, BadgeCheck, Stethoscope, Baby, Microscope, Flame, Bed, Scissors } from 'lucide-react';

interface AboutProps {
  isDark: boolean;
}

export const About: React.FC<AboutProps> = ({ isDark }) => {
  const [activeTab, setActiveTab] = useState(0);

  const pillars = [
    {
      title: 'Modern Operation Theatre',
      description: 'Zero-bacteria environment equipped with shadowless lights, computerized anesthesia workstations, and ultra-HD laparoscopic surgery monitors for high-precision interventions.',
      icon: Scissors,
      tag: 'STATE-OF-THE-ART',
      img: 'https://images.unsplash.com/photo-1551601651-2a8555f1a136?q=80&w=600&auto=format&fit=crop'
    },
    {
      title: 'Emergency Services',
      description: '24/7 dedicated trauma critical wing with senior emergency general surgeons, oxygen pipelines, shock cardiac monitors, and instant ambulance response grids.',
      icon: Flame,
      tag: '24/7 RED ALERT',
      img: 'https://images.unsplash.com/photo-1612277795421-9bc7e6573f54?q=80&w=600&auto=format&fit=crop'
    },
    {
      title: 'Pediatric Care',
      description: 'Comprehensive wellness hub for newborns, adolescent medicine, full immunization schedules, and supportive counseling by Child Specialist Dr. Deepsikha Kumari.',
      icon: Baby,
      tag: 'NURTURING WELLNESS',
      img: 'https://images.unsplash.com/photo-1594824813573-246434de83fb?q=80&w=600&auto=format&fit=crop'
    },
    {
      title: 'General & Laparoscopic Surgery',
      description: 'Leading keyhole minimally-invasive surgery units specializing in gallbladder removal, hernia mesh repair, laparoscopic appendectomy, and comprehensive trauma care.',
      icon: HeartPulse,
      tag: 'SURGICAL PRECISION',
      img: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=600&auto=format&fit=crop'
    },
    {
      title: 'Diagnostic Facilities',
      description: 'Fully-automated computational pathology systems, radiology scanners, and ultrasound hubs providing instantaneous and highly reliable digital reports.',
      icon: Microscope,
      tag: 'CLINICAL METRICS',
      img: 'https://images.unsplash.com/photo-1579154204601-01588f351167?q=80&w=600&auto=format&fit=crop'
    },
    {
      title: 'Inpatient Care',
      description: 'Luxurious corporate suites and air-conditioned recovery wards fitted with telemetry screens, automated adjustable beds, and round-the-clock supportive nursing care.',
      icon: Bed,
      tag: 'LUXURY PATIENT LIFE',
      img: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=600&auto=format&fit=crop'
    }
  ];

  return (
    <section
      id="about"
      className={`relative py-24 overflow-hidden transition-all duration-500 ${
        isDark ? 'bg-gradient-to-b from-[#000a1a] via-[#000c22] to-[#000a1a]' : 'bg-gradient-to-b from-white via-blue-50/30 to-white'
      }`}
    >
      
      {/* BACKGROUND GRAPHIC ACCENTS */}
      <div className="absolute top-10 right-0 w-96 h-96 bg-amber-400/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* SECTION HEADER BLOCK */}
        <div className="text-center mb-16">
          <motion.div
            className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#D4AF37]"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Award className="h-3.5 w-3.5" />
            Who We Are
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
            Elite Corporate Healing & Care
          </motion.h2>
          <motion.p
            className={`mx-auto mt-4 max-w-3xl text-sm sm:text-base leading-relaxed ${
              isDark ? 'text-blue-200/80' : 'text-slate-600'
            }`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Aarogya Jeevan Multi Speciality Hospital Pvt. Ltd. is dedicated to providing advanced healthcare services with modern medical technology, experienced doctors, and compassionate patient care. Located in high-frequency Muhammadpur NH-31, Begusarai, we redefine luxury healing.
          </motion.p>
        </div>

        {/* LUXURY INTERACTIVE PORTAL LAYOUT */}
        <div id="about-interactive-portal" className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* TAB SELECTION COLUMN (5 COLUMNS) */}
          <div className="lg:col-span-5 flex flex-col justify-center gap-3">
            {pillars.map((item, idx) => {
              const Icon = item.icon;
              const isActive = activeTab === idx;
              return (
                <motion.button
                  key={idx}
                  onClick={() => setActiveTab(idx)}
                  className={`flex items-center text-left gap-4 p-4 rounded-2xl border transition-all duration-300 focus:outline-none focus:ring-1 focus:ring-amber-500/30 ${
                    isActive
                      ? isDark
                        ? 'bg-gradient-to-r from-[#c5a021] to-[#8e6d13] border-[#d4af37] text-white shadow-xl luxury-glow'
                        : 'bg-white border-blue-600 text-blue-900 shadow-xl shadow-blue-500/10'
                      : isDark
                        ? 'bg-white/5 border-white/10 text-gray-400 hover:border-white/20 hover:bg-white/10'
                        : 'bg-white/80 border-slate-200 text-slate-700 hover:border-blue-300 hover:bg-slate-50'
                  }`}
                  whileHover={{ x: 8 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                >
                  <div
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl transition-colors duration-300 ${
                      isActive
                        ? 'bg-amber-400 text-slate-950 shadow-md'
                        : isDark
                          ? 'bg-white/10 text-amber-400 border border-white/10'
                          : 'bg-slate-100 text-blue-800'
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-sm sm:text-base tracking-wide uppercase transition-colors">
                      {item.title}
                    </h3>
                    <p className={`text-xs mt-1 line-clamp-1 ${isActive ? (isDark ? 'text-amber-200/80' : 'text-blue-800/80') : 'text-gray-400'}`}>
                      {item.tag}
                    </p>
                  </div>
                </motion.button>
              );
            })}
          </div>

          {/* DYNAMIC SHOWER GRID DISPLAY PANEL (7 COLUMNS) */}
          <div className="lg:col-span-7">
            <div
              className={`h-full flex flex-col justify-between rounded-3xl p-6 sm:p-8 md:p-10 border transition-all duration-500 relative overflow-hidden ${
                isDark
                  ? 'glass-panel-dark border-white/10 shadow-2xl shadow-black/40'
                  : 'bg-gradient-to-br from-white to-blue-50/50 border-blue-200 shadow-xl shadow-blue-500/5'
              }`}
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.1),transparent_40%)]" />

              {/* Shimmer overlay effect */}
              <div className="shimmer-bg absolute inset-0 opacity-20 pointer-events-none" />

              {/* Pillars Display Block with motion animations */}
              <div id="dynamic-pillar-showcase">
                <div className="flex items-center gap-2 mb-4 text-[#D4AF37] font-mono text-xs font-bold tracking-widest uppercase">
                  <span className="h-1 lg:h-1.5 w-6 rounded bg-amber-400" />
                  {pillars[activeTab].tag}
                </div>
                
                <h3 className={`font-heading text-xl sm:text-2xl md:text-3xl font-extrabold tracking-wide ${
                  isDark ? 'text-white' : 'text-slate-900'
                }`}>
                  {pillars[activeTab].title}
                </h3>
                
                <p className={`mt-5 text-sm sm:text-base leading-relaxed ${
                  isDark ? 'text-stone-300' : 'text-slate-700'
                }`}>
                  {pillars[activeTab].description}
                </p>

                {/* Sublist Bullet checklist */}
                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-center gap-3">
                    <BadgeCheck className="h-5 w-5 text-amber-400 shrink-0" />
                    <span className={`text-xs sm:text-sm ${isDark ? 'text-gray-300' : 'text-slate-700'}`}>Highly Qualified Medical Staff</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <BadgeCheck className="h-5 w-5 text-amber-400 shrink-0" />
                    <span className={`text-xs sm:text-sm ${isDark ? 'text-gray-300' : 'text-slate-700'}`}>International Sterilization Standards</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <BadgeCheck className="h-5 w-5 text-amber-400 shrink-0" />
                    <span className={`text-xs sm:text-sm ${isDark ? 'text-gray-300' : 'text-slate-700'}`}>Advanced Life Support Equipment</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <BadgeCheck className="h-5 w-5 text-amber-400 shrink-0" />
                    <span className={`text-xs sm:text-sm ${isDark ? 'text-gray-300' : 'text-slate-700'}`}>Patient Comfort Oriented Care</span>
                  </div>
                </div>
              </div>

              {/* Graphic Mock of the Facility Image */}
              <div className="mt-8 h-48 sm:h-56 overflow-hidden rounded-2xl border border-amber-400/25 relative group">
                <img
                  src={pillars[activeTab].img}
                  alt={pillars[activeTab].title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                  <span className="text-white text-xs font-mono font-bold tracking-widest uppercase">
                    AAROGYA JEEVAN OFFICIAL DECK RECORD
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
