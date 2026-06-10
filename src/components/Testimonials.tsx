/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, Star, Quote, ChevronLeft, ChevronRight, Award } from 'lucide-react';
import { TESTIMONIALS } from '../data/hospitalData';

interface TestimonialsProps {
  isDark: boolean;
}

export const Testimonials: React.FC<TestimonialsProps> = ({ isDark }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  return (
    <section
      id="reviews"
      className={`relative py-24 overflow-hidden transition-all duration-500 ${
        isDark ? 'bg-[#000a1a]' : 'bg-[#F8FAFC]'
      }`}
    >
      
      {/* Background Graphic Accents */}
      <div className="absolute top-10 right-10 w-80 h-80 bg-blue-600/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-amber-400/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* SECTION TITLE HEADER */}
        <div className="text-center mb-16">
          <motion.div
            className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#D4AF37]"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <MessageSquare className="h-3.5 w-3.5" />
            Patient Testimonials
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
            Trusted by Thousands
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
            Hear direct clinical recovery histories from patients of Begusarai, Barauni, and surrounding regional circles on general surgeries and pediatric wellness.
          </motion.p>
        </div>

        {/* LUXURIOUS SLIDING CASE CARDS */}
        <div className="relative">
          
          {/* Big decorative quotation mark */}
          <div className="absolute -top-10 -left-6 z-0 text-amber-400/10 opacity-30 select-none">
            <Quote className="h-32 w-32" />
          </div>

          <div className="relative z-10 w-full min-h-[300px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                className={`w-full rounded-3xl border p-8 sm:p-12 md:p-14 relative overflow-hidden backdrop-blur-md flex flex-col justify-between ${
                  isDark
                    ? 'glass-panel-dark border-white/10 shadow-2xl'
                    : 'bg-white border-blue-100 shadow-xl shadow-blue-500/5'
                }`}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
              >
                {/* Micro gold shimmer */}
                <div className="shimmer-bg absolute inset-0 opacity-10 pointer-events-none" />

                <div>
                  {/* FIVE GOLD STARS */}
                  <div className="flex gap-1 mb-6 text-amber-400">
                    {Array.from({ length: TESTIMONIALS[index].rating }).map((_, sIdx) => (
                      <Star key={sIdx} className="h-5 w-5 fill-amber-400 shadow-[0_0_8px_rgba(212,175,55,0.4)]" />
                    ))}
                  </div>

                  {/* Patient Review Comment */}
                  <p className={`font-display text-base sm:text-lg md:text-xl font-medium italic leading-relaxed ${
                    isDark ? 'text-stone-100' : 'text-slate-900 font-semibold'
                  }`}>
                    "{TESTIMONIALS[index].comment}"
                  </p>
                </div>

                {/* Reviewer Information block */}
                <div className="mt-8 pt-6 border-t border-white/5 flex flex-col sm:flex-row gap-4 items-center justify-between">
                  <div>
                    <h3 className={`font-heading text-sm sm:text-base font-bold tracking-wide uppercase ${
                      isDark ? 'text-amber-400' : 'text-blue-900'
                    }`}>
                      {TESTIMONIALS[index].name}
                    </h3>
                    <p className={`text-xs mt-1 ${isDark ? 'text-gray-400 font-mono' : 'text-slate-500'}`}>
                      Verified Patient • {TESTIMONIALS[index].location}
                    </p>
                  </div>
                  
                  {/* Timestamp */}
                  <span className={`text-[10px] font-mono font-bold tracking-widest uppercase ${
                    isDark ? 'text-stone-500' : 'text-slate-400'
                  }`}>
                    {TESTIMONIALS[index].date}
                  </span>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

          {/* SAGER CONTROLS DECK */}
          <div className="flex justify-center items-center gap-4 mt-8 relative z-10">
            <button
              onClick={handlePrev}
              className={`flex h-11 w-11 items-center justify-center rounded-full border transition-all duration-300 ${
                isDark
                  ? 'border-gray-800 bg-slate-950 text-white hover:border-amber-400 hover:text-amber-400'
                  : 'border-slate-200 bg-white text-slate-800 hover:border-blue-600 hover:text-blue-600 shadow-sm'
              }`}
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            {/* Slide dots indicator */}
            <div className="flex gap-2">
              {TESTIMONIALS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setIndex(idx)}
                  className={`h-2 rounded-full transition-all duration-500 ${
                    index === idx ? 'w-6 bg-amber-400' : 'w-2 bg-gray-400/40 hover:bg-gray-400/80'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className={`flex h-11 w-11 items-center justify-center rounded-full border transition-all duration-300 ${
                isDark
                  ? 'border-gray-800 bg-slate-950 text-white hover:border-amber-400 hover:text-amber-400'
                  : 'border-slate-200 bg-white text-slate-800 hover:border-blue-600 hover:text-blue-600 shadow-sm'
              }`}
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
