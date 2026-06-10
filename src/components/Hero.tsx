/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, Calendar, MessageSquare, ChevronLeft, ChevronRight, HeartPulse, ShieldCheck, Sparkles } from 'lucide-react';
import { HERO_SLIDES } from '../data/hospitalData';

interface HeroProps {
  isDark: boolean;
  onAppointmentClick: () => void;
  onEmergencyClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ isDark, onAppointmentClick, onEmergencyClick }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  // Safe WhatsApp Link Generator for Aarogya Jeevan Hospital
  const getWhatsAppLink = () => {
    const text = encodeURIComponent("Hello Aarogya Jeevan Hospital! I want to consult a specialist doctor regarding healthcare services. Please share available slots.");
    return `https://wa.me/919430488701?text=${text}`; // Realistically configured for patient reach
  };

  return (
    <section id="home" className="relative h-screen min-h-[650px] w-full overflow-hidden bg-[#000a1a]">
      
      {/* CINEMATIC SLIDESHOW CANVAS WITH KEN BURNS FOCUS */}
      <div id="hero-carousel-viewport" className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            className="absolute inset-0 h-full w-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: 'easeInOut' }}
          >
            {/* The Ken Burns Zoom Image */}
            <div className="absolute inset-0 h-full w-full overflow-hidden">
              <img
                src={HERO_SLIDES[currentSlide].image}
                alt={HERO_SLIDES[currentSlide].title}
                className="kenburns-active h-full w-full object-cover filter brightness-[0.32] contrast-[1.08]"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Ambient luxury blue/black background overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#000a1a] via-[#000a1a]/20 to-[#000a1a]/40" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(11,37,69,0.2),transparent_70%)]" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* DYNAMIC AMBIENT MEDICAL HEARTBEAT VECTOR AT THE LOWER DECK */}
      <div className="absolute bottom-16 left-0 right-0 z-10 hidden md:block">
        <div className="mx-auto max-w-7xl px-8 flex justify-between items-center text-xs font-mono text-amber-400/50">
          <span className="tracking-widest flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-amber-400 animate-ping" />
            LIVE TRAUMA HUB (NH-31 BEGUSARAI)
          </span>
          <svg className="w-1/3 h-8 opacity-40" viewBox="0 0 100 16" preserveAspectRatio="none">
            <path
              className="ecg-line"
              d="M 0 8 L 20 8 L 22 8 L 25 2 L 28 14 L 31 8 L 40 8 L 42 5 L 45 11 L 48 8 L 60 8 L 62 8 L 65 0 L 68 16 L 71 8 L 80 8"
              fill="none"
              stroke="#D4AF37"
              strokeWidth="0.75"
            />
          </svg>
          <span className="tracking-wider text-right">SYNERGIZED HEALTHCARE METRICS: ACTIVE</span>
        </div>
      </div>

      {/* CAROUSEL MANUAL CONTROLS */}
      <button
        onClick={handlePrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 hidden md:flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-slate-950/40 text-white backdrop-blur-md transition-all duration-300 hover:border-amber-400 hover:text-amber-400 hover:bg-slate-900/60"
        aria-label="Previous luxury backdrop"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 hidden md:flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-slate-950/40 text-white backdrop-blur-md transition-all duration-300 hover:border-amber-400 hover:text-amber-400 hover:bg-slate-900/60"
        aria-label="Next luxury backdrop"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* CORE BRAND & CTA INFRASTRUCTURE (CENTERED AT MASSIVE SCREEN SCALE) */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-4 text-center text-white">
        <div className="max-w-4xl px-2">
          
          {/* LOGO ANIME EMBLEM */}
          <motion.div
            id="hero-logo-emblem"
            className="mb-6 flex justify-center"
            initial={{ scale: 0, rotate: -180, opacity: 0 }}
            animate={{ scale: 1, rotate: 0, opacity: 1 }}
            transition={{ type: 'spring', damping: 15, delay: 0.3, duration: 1.2 }}
          >
            <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-[#0B2545]/90 border-[2px] border-amber-400 shadow-2xl luxury-glow-intense">
              <div className="absolute inset-1 rounded-full border border-amber-400/20 animate-spin" style={{ animationDuration: '10s' }} />
              <HeartPulse className="h-10 w-10 text-amber-400 animate-pulse" />
            </div>
          </motion.div>

          {/* GRAND DOUBLE-LAYER TEXT REVEAL */}
          <div className="overflow-hidden mb-2">
            <motion.h1
              id="hero-headline-1"
              className="font-heading text-4xl font-extrabold tracking-[0.25em] text-amber-400 sm:text-6xl md:text-7xl lg:text-8xl"
              initial={{ y: 70, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ ease: 'easeOut', duration: 1.2, delay: 0.5 }}
            >
              AAROGYA JEEVAN
            </motion.h1>
          </div>

          <div className="overflow-hidden mb-6">
            <motion.p
              id="hero-headline-2"
              className="font-display text-sm font-semibold tracking-[0.35em] text-stone-200 uppercase sm:text-lg md:text-2xl lg:text-3xl border-b border-amber-400/20 pb-4 max-w-3xl mx-auto"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ ease: 'easeOut', duration: 1.2, delay: 0.9 }}
            >
              MULTI SPECIALITY HOSPITAL PVT. LTD.
            </motion.p>
          </div>

          {/* HEALTHCARE TAGLINE */}
          <motion.div
            id="hero-tagline-container"
            className="mb-10 flex flex-wrap justify-center items-center gap-3 md:gap-5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.8 }}
          >
            <span className="flex items-center gap-1.5 font-display text-[11px] font-bold tracking-widest text-[#D4AF37] uppercase bg-black/40 px-3 py-1.5 rounded-full border border-amber-400/20 whitespace-nowrap">
              <ShieldCheck className="h-3.5 w-3.5" />
              Advanced Healthcare
            </span>
            <span className="text-gray-400 hidden sm:inline">•</span>
            <span className="flex items-center gap-1.5 font-display text-[11px] font-bold tracking-widest text-white uppercase bg-black/40 px-3 py-1.5 rounded-full border border-white/5 whitespace-nowrap">
              <Sparkles className="h-3.5 w-3.5" />
              Trusted Care
            </span>
            <span className="text-gray-400 hidden sm:inline">•</span>
            <span className="flex items-center gap-1.5 font-display text-[11px] font-bold tracking-widest text-[#D4AF37] uppercase bg-black/40 px-3 py-1.5 rounded-full border border-amber-400/20 whitespace-nowrap">
              <HeartPulse className="h-3.5 w-3.5" />
              Better Life
            </span>
          </motion.div>

          {/* TRIPLE HIGH-PRIORITY ACTION DECKS */}
          <motion.div
            id="hero-cta-button-deck"
            className="flex flex-col sm:flex-row flex-wrap justify-center items-stretch sm:items-center gap-4 max-w-2xl mx-auto px-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8, duration: 0.8 }}
          >
            {/* Emergency Speed Call */}
            <a
              href="tel:+919430488701"
              id="hero-call-emergency-btn"
              className="flex items-center justify-center gap-2.5 rounded-xl bg-red-600 px-6 py-4 text-xs font-extrabold uppercase tracking-widest text-white transition-all duration-300 hover:bg-red-700 hover:scale-105 active:scale-95 hover:shadow-lg hover:shadow-red-500/30"
            >
              <Phone className="h-4.5 w-4.5 animate-[pulse_1s_infinite]" />
              Emergency Call +91 94304 88701
            </a>

            {/* Book Appointment Scheduler */}
            <button
              onClick={onAppointmentClick}
              id="hero-book-appointment-btn"
              className="flex items-center justify-center gap-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 px-6 py-4 text-xs font-extrabold uppercase tracking-widest text-white border border-amber-400/30 transition-all duration-300 hover:from-amber-400 hover:to-amber-500 hover:scale-105 active:scale-95 hover:shadow-lg hover:shadow-amber-500/20"
            >
              <Calendar className="h-4.5 w-4.5" />
              Book Appointment
            </button>

            {/* WhatsApp live advisor desk */}
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              id="hero-whatsapp-consult-btn"
              className="flex items-center justify-center gap-2.5 rounded-xl bg-emerald-600 px-6 py-4 text-xs font-extrabold uppercase tracking-widest text-white transition-all duration-300 hover:bg-emerald-700 hover:scale-105 active:scale-95 hover:shadow-lg hover:shadow-emerald-500/20"
            >
              <MessageSquare className="h-4.5 w-4.5" />
              WhatsApp Consultation
            </a>
          </motion.div>

        </div>
      </div>

      {/* CAROUSEL PAGINATION BLOCKS */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {HERO_SLIDES.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              currentSlide === idx ? 'w-8 bg-amber-400 shadow-[0_0_8px_rgba(212,175,55,1)]' : 'w-2 bg-white/40 hover:bg-white/70'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>

    </section>
  );
};
