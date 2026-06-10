/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Image, X, ChevronLeft, ChevronRight, Eye, Sparkles, Building2, HelpCircle } from 'lucide-react';
import { FACILITIES } from '../data/hospitalData';

interface FacilitiesProps {
  isDark: boolean;
}

export const Facilities: React.FC<FacilitiesProps> = ({ isDark }) => {
  const [filter, setFilter] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Filter categories
  const categories = ['All', 'Surgical', 'Wards', 'Critical', 'Diagnostics', 'Pharmacy', 'Emergency'];

  const filteredFacilities = filter === 'All' 
    ? FACILITIES 
    : FACILITIES.filter(f => f.category === filter);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : FACILITIES.length - 1));
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev !== null && prev < FACILITIES.length - 1 ? prev + 1 : 0));
  };

  return (
    <section
      id="gallery"
      className={`relative py-24 overflow-hidden transition-all duration-500 ${
        isDark ? 'bg-gradient-to-b from-[#000a1a] via-[#000c22] to-[#000a1a]' : 'bg-gradient-to-b from-white via-blue-50/20 to-white'
      }`}
    >
      
      {/* Background Graphic Accents */}
      <div className="absolute top-10 left-0 w-80 h-80 bg-amber-400/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-blue-600/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* SECTION TITLE HEADER */}
        <div className="text-center mb-12">
          <motion.div
            className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#D4AF37]"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Image className="h-3.5 w-3.5" />
            Infrastructure Walkthrough
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
            Inside Our Medical Sanctuary
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
            Browse high-definition photography of Aarogya Jeevan Hospital units. Our facility meets international standards in clinical design.
          </motion.p>
        </div>

        {/* DYNAMIC CATEGORY FILTER RAILS */}
        <div id="gallery-filters" className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10 pb-2">
          {categories.map((cat, idx) => (
            <button
               key={idx}
               onClick={() => setFilter(cat)}
               className={`rounded-full px-5 py-2 text-xs font-bold uppercase tracking-wider transition-all duration-300 focus:outline-none ${
                 filter === cat
                   ? 'bg-amber-400 text-slate-950 shadow-lg shadow-amber-500/20 font-bold border border-amber-400'
                   : isDark
                     ? 'glass-panel-dark border-white/5 text-gray-300 hover:border-white/20 hover:text-white'
                     : 'bg-white border border-slate-200 text-slate-700 hover:border-blue-500 hover:text-blue-600 shadow-sm'
               }`}
             >
              {cat}
            </button>
          ))}
        </div>

        {/* PHOTO MASONRY/GRID CARDS */}
        <div id="gallery-items-grid" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredFacilities.map((fac) => {
              // Get original index in complete list for accurate lightbox binds
              const originalIndex = FACILITIES.findIndex((f) => f.id === fac.id);
              return (
                <motion.div
                  key={fac.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className={`group rounded-2xl border overflow-hidden cursor-pointer relative ${
                    isDark ? 'border-white/5 glass-panel-dark' : 'border-slate-200 bg-white shadow-sm'
                  }`}
                  onClick={() => setLightboxIndex(originalIndex)}
                >
                  {/* Aspect Locked Photo Wrapper */}
                  <div className="relative aspect-video overflow-hidden">
                    <img
                      src={fac.image}
                      alt={fac.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      referrerPolicy="no-referrer"
                    />
                    
                    {/* Dark Glass Overlay with Eye Icon */}
                    <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-all duration-300 backdrop-blur-[2px]">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-400/90 text-slate-950 shadow-lg scale-0 group-hover:scale-100 transition-all duration-300">
                        <Eye className="h-5 w-5" />
                      </div>
                    </div>

                    {/* Category Stamp */}
                    <span className="absolute top-3 left-3 rounded-full bg-slate-950/80 border border-amber-400/30 px-2.5 py-0.5 font-mono text-[9px] font-bold text-amber-400 tracking-widest uppercase">
                      {fac.category}
                    </span>
                  </div>

                  {/* Descriptions block */}
                  <div className="p-5">
                    <h3 className={`font-heading text-sm font-bold tracking-wide uppercase ${
                      isDark ? 'text-white' : 'text-slate-900'
                    }`}>
                      {fac.title}
                    </h3>
                    <p className={`text-xs mt-1 leading-relaxed line-clamp-2 ${
                      isDark ? 'text-gray-400' : 'text-slate-500'
                    }`}>
                      {fac.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

      </div>

      {/* LUXURY COMPREHENSIVE FULLSCREEN LIGHTBOX PORTAL */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            id="lightbox-fullscreen-overlay"
            className="fixed inset-0 z-100 flex flex-col items-center justify-center bg-slate-950/98 backdrop-blur-xl p-4 sm:p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setLightboxIndex(null)}
          >
            {/* Close Button top deck */}
            <button
              onClick={() => setLightboxIndex(null)}
              className="absolute top-6 right-6 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white border border-white/10 hover:border-amber-400 hover:text-amber-400 transition-all duration-300"
              aria-label="Exit walkthrough viewer"
            >
              <X className="h-6 w-6" />
            </button>

            {/* Slider Deck */}
            <div className="relative w-full max-w-4xl max-h-[75vh] flex items-center justify-center">
              
              {/* Left back selector */}
              <button
                onClick={handlePrev}
                className="absolute left-2 sm:left-4 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white border border-white/10 hover:border-amber-400 hover:text-amber-400 transition-all duration-300 active:scale-90"
                aria-label="Backward slideshow slide"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>

              {/* Central high resolution locked image */}
              <motion.img
                key={lightboxIndex}
                src={FACILITIES[lightboxIndex].image}
                alt={FACILITIES[lightboxIndex].title}
                className="max-w-full max-h-[70vh] object-contain rounded-2xl border-2 border-amber-400/40 shadow-2xl luxury-glow-intense"
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3 }}
                referrerPolicy="no-referrer"
              />

              {/* Right forward selector */}
              <button
                onClick={handleNext}
                className="absolute right-2 sm:right-4 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white border border-white/10 hover:border-amber-400 hover:text-amber-400 transition-all duration-300 active:scale-90"
                aria-label="Forward slideshow slide"
              >
                <ChevronRight className="h-6 w-6" />
              </button>

            </div>

            {/* Overlay descriptive dashboard */}
            <div className="mt-6 text-center max-w-2xl px-4 text-white">
              <span className="font-mono text-xs font-bold tracking-widest text-amber-400 uppercase bg-black/40 px-3 py-1.5 rounded-full border border-amber-400/25 mb-3 inline-block">
                {FACILITIES[lightboxIndex].category} Unit
              </span>
              <h3 className="font-heading text-xl sm:text-2xl font-extrabold tracking-wide uppercase mt-2">
                {FACILITIES[lightboxIndex].title}
              </h3>
              <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mt-2.5">
                {FACILITIES[lightboxIndex].description}
              </p>
              
              <div className="mt-4 text-gray-500 font-mono text-[10px] tracking-widest uppercase">
                Slide {lightboxIndex + 1} of {FACILITIES.length}
              </div>
            </div>

          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
};
