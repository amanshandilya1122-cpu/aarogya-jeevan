/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Award, GraduationCap, Clock, CheckCircle, HeartPulse, UserCircle } from 'lucide-react';
import { DOCTORS } from '../data/hospitalData';

// Reusable Counter component that ticks up to target count-up value
const ExperienceCounter: React.FC<{ target: number }> = ({ target }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1500; // milliseconds
    const increment = target / (duration / 16); // 60 FPS
    
    const interval = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(interval);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(interval);
  }, [target]);

  return (
    <span className="font-mono text-3xl font-extrabold text-amber-400 sm:text-4xl">
      {count}+
    </span>
  );
};

interface DoctorsProps {
  isDark: boolean;
  onAppointmentClick: () => void;
}

export const Doctors: React.FC<DoctorsProps> = ({ isDark, onAppointmentClick }) => {
  return (
    <section
      id="doctors"
      className={`relative py-24 overflow-hidden transition-all duration-500 ${
        isDark ? 'bg-gradient-to-b from-[#000a1a] via-[#000c22] to-[#000a1a]' : 'bg-gradient-to-b from-slate-100 via-white to-slate-100'
      }`}
    >
      
      {/* Background Graphic Accents */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-400/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* SECTION HEADER BLOCK */}
        <div className="text-center mb-16">
          <motion.div
            className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#D4AF37]"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <UserCircle className="h-3.5 w-3.5" />
            Medical Pioneers
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
            Our Senior Consultants
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
            Consult highly experienced general & laparoscopic surgeons and pediatric specialists. Dedicated to safe, medical excellence in Begusarai, Bihar.
          </motion.p>
        </div>

        {/* TWO PREMIUM DOCTOR CARDS */}
        <div id="doctors-profile-deck" className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {DOCTORS.map((doc, idx) => (
            <motion.div
              key={doc.id}
              id={`doctor-card-${doc.id}`}
              className={`rounded-3xl border p-6 sm:p-8 flex flex-col justify-between transition-all duration-500 relative overflow-hidden backdrop-blur-md ${
                isDark
                  ? 'glass-panel-dark border-white/10 shadow-2xl shadow-black/40 hover:border-amber-400/50'
                  : 'bg-white border-blue-200 shadow-xl shadow-blue-500/5 hover:border-blue-600'
              }`}
              initial={{ opacity: 0, x: idx === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              {/* Dynamic luxury shimmer overlay */}
              <div className="shimmer-bg absolute inset-0 opacity-10 pointer-events-none" />

              <div>
                {/* DOCTOR INTRO BLOCK */}
                <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start mb-6 pb-6 border-b border-white/5">
                  
                  {/* Highly polished golden-bordered circular avatar */}
                  <div className="relative h-32 w-32 shrink-0 rounded-full border-2 border-amber-400 bg-slate-950 overflow-hidden shadow-2xl p-1.5 flex items-center justify-center">
                    {doc.image ? (
                      <img
                        src={doc.image}
                        alt={doc.name}
                        className="h-full w-full object-cover rounded-full"
                        referrerPolicy="no-referrer"
                      />
                    ) : (
                      <div className="h-full w-full rounded-full bg-gradient-to-br from-slate-900 via-[#0B1B30] to-slate-950 flex flex-col items-center justify-center text-center p-2 border border-white/5">
                        <UserCircle className="h-10 w-10 text-amber-400 mb-0.5" />
                        <span className="text-[8px] font-mono tracking-widest font-extrabold text-[#D4AF37] uppercase">
                          NO PHOTO
                        </span>
                      </div>
                    )}
                    <div className="absolute -bottom-1 -right-1 flex h-8 w-8 items-center justify-center rounded-full bg-amber-400 border border-slate-900 text-slate-900 shadow-md">
                      <GraduationCap className="h-4.5 w-4.5" />
                    </div>
                  </div>

                  {/* Text introductions */}
                  <div className="text-center sm:text-left">
                    <div className="flex flex-wrap justify-center sm:justify-start items-center gap-2 mb-2">
                      <span className="rounded bg-amber-400/10 px-2 py-0.5 font-mono text-[10px] font-bold tracking-wider text-amber-400 uppercase">
                        {doc.id === 'dr-amrendra' ? 'Senior Maestro' : 'Associate Specialist'}
                      </span>
                      <span className={`text-xs uppercase font-semibold ${isDark ? 'text-gray-400' : 'text-slate-500'}`}>
                        {doc.gender === 'male' ? 'Male Surgeon' : 'Female Surgeon'}
                      </span>
                    </div>

                    <h3 className={`font-heading text-xl sm:text-2xl font-bold tracking-wide ${
                      isDark ? 'text-white' : 'text-slate-900'
                    }`}>
                      {doc.name}
                    </h3>

                    <p className="mt-1 text-xs font-semibold text-amber-500 uppercase tracking-widest font-display">
                      {doc.role}
                    </p>

                    <div className={`mt-3 flex items-start gap-2 max-w-md ${isDark ? 'text-blue-200/75' : 'text-slate-600'}`}>
                      <GraduationCap className="h-4.5 w-4.5 text-amber-400 shrink-0 mt-0.5" />
                      <span className="text-xs leading-relaxed font-medium">
                        {doc.qualification}
                      </span>
                    </div>
                  </div>

                </div>

                {/* ANIMATED EXPERIENCE BLOCK & BIO */}
                <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 mb-6">
                  {/* Experience Ticker inside premium container */}
                  <div className="sm:col-span-4 rounded-2xl bg-black/30 border border-amber-400/20 p-4 flex flex-col items-center justify-center text-center">
                    <Clock className="h-5 w-5 text-amber-400 mb-1" />
                    <ExperienceCounter target={doc.experience} />
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mt-1">
                      Years Clinical Experience
                    </span>
                  </div>

                  {/* Bio brief */}
                  <div className="sm:col-span-8 flex flex-col justify-center">
                    <p className={`text-xs sm:text-sm leading-relaxed ${isDark ? 'text-stone-300' : 'text-slate-700'}`}>
                      {doc.bio}
                    </p>
                  </div>
                </div>

                {/* SPECIALIZATIONS AREA */}
                <div className="mb-8">
                  <h4 className="text-amber-400 text-xs font-bold uppercase tracking-wider mb-3 flex items-center gap-1.5">
                    <Award className="h-3.5 w-3.5" />
                    Specialized Competencies:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {doc.specialization.map((spec, sIdx) => (
                      <div key={sIdx} className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-[#D4AF37] shrink-0 mt-0.5" />
                        <span className={`text-xs ${isDark ? 'text-gray-300' : 'text-slate-700'}`}>
                          {spec}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* TIMING RAIL + BOOK APPOINTMENT CTA BUTTON */}
              <div className="mt-auto pt-5 border-t border-white/5 flex flex-col sm:flex-row gap-4 items-center justify-between">
                <div className="text-center sm:text-left">
                  <span className={`text-[10px] font-mono font-bold uppercase tracking-wider block ${isDark ? 'text-gray-400' : 'text-slate-500'}`}>
                    Weekly Consultancy Hours
                  </span>
                  <span className={`text-xs font-bold font-display tracking-wide uppercase ${isDark ? 'text-amber-200' : 'text-blue-900'}`}>
                    {doc.availability}
                  </span>
                </div>
                
                <button
                  onClick={onAppointmentClick}
                  className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 px-5 py-3 text-xs font-bold uppercase tracking-wider text-white border border-amber-400/30 transition-all duration-300 hover:from-amber-400 hover:to-amber-500 hover:scale-105 active:scale-95"
                >
                  <HeartPulse className="h-4 w-4" />
                  Consult Doctor
                </button>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
