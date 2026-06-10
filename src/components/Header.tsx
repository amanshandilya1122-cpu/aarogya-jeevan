/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Phone, CalendarCheck, HeartPulse, Sparkles } from 'lucide-react';

interface HeaderProps {
  isDark: boolean;
  onAppointmentClick: () => void;
  onEmergencyClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({ isDark, onAppointmentClick, onEmergencyClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'Home', href: '#home' },
    { name: 'About Hospital', href: '#about' },
    { name: 'Our Specialities', href: '#specialities' },
    { name: 'Doctors Profile', href: '#doctors' },
    { name: 'Why Choose Us', href: '#why-choose-us' },
    { name: 'Facilities Gallery', href: '#gallery' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Location & Contact', href: '#location-contact' },
  ];

  return (
    <header
      id="main-luxury-header"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        scrolled
          ? isDark
            ? 'glass-header-dark py-3 shadow-2xl shadow-black/30'
            : 'glass-header-light py-3 shadow-md shadow-royal-base/5'
          : 'bg-transparent py-5 border-b border-white/5'
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* ROYAL MEDICAL BRAND LOGO */}
          <a href="#home" className="flex items-center gap-3 group focus:outline-none">
            <div className="relative flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-tr from-[#0B2545] to-[#134074] border border-amber-400 group-hover:border-amber-400/80 transition-all duration-300 shadow-lg">
              {/* Outer Golden Spark Arc */}
              <div className="absolute -inset-1 rounded-full border border-amber-400/40 animate-pulse active:scale-110" />
              <HeartPulse className="h-6 w-6 text-amber-400 group-hover:scale-110 transition-transform duration-500" />
            </div>
            
            <div className="flex flex-col">
              <span className="font-heading text-base font-bold tracking-wider text-amber-400 sm:text-lg">
                AAROGYA JEEVAN
              </span>
              <span className={`font-display text-[8px] sm:text-[9px] tracking-[0.25em] font-medium uppercase ${
                isDark ? 'text-blue-200' : 'text-royal-base'
              }`}>
                Multi Speciality Hospital
              </span>
            </div>
          </a>

          {/* DESKTOP NAVIGATION SCHEDULER LINKS */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {menuItems.map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                className={`relative font-display text-[11px] xl:text-[12px] uppercase tracking-wider font-semibold transition-all duration-300 hover:text-amber-400 ${
                  isDark ? 'text-gray-300' : 'text-gray-700'
                }`}
              >
                {item.name}
                <span className="absolute left-0 right-0 bottom-[-4px] h-[1.5px] bg-gradient-to-r from-amber-400 to-amber-500 scale-x-0 origin-left transition-transform duration-300 hover:scale-x-100" />
              </a>
            ))}
          </nav>

          {/* EMERGENCY + APPOINTMENT TRIGGER BADGES */}
          <div className="hidden md:flex items-center gap-4">
            {/* Quick Consultation Badge */}
            <button
              onClick={onEmergencyClick}
              className="flex items-center gap-2 rounded-full bg-red-600 px-4 py-2 text-xs font-bold uppercase tracking-wider text-white transition-all duration-300 hover:bg-red-700 hover:shadow-lg hover:shadow-red-500/20 active:scale-95"
            >
              <HeartPulse className="h-4 w-4 animate-bounce" />
              <span className="flex items-center gap-1.5">
                24/7 Red Alert
                <span className="h-1.5 w-1.5 rounded-full bg-white animate-ping" />
              </span>
            </button>

            <button
              onClick={onAppointmentClick}
              className="flex items-center gap-2 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white border border-amber-400/30 transition-all duration-300 hover:from-amber-400 hover:to-amber-500 hover:shadow-lg hover:scale-[1.03] active:scale-95"
            >
              <CalendarCheck className="h-4 w-4" />
              Book Care
            </button>
          </div>

          {/* MOBILE TOGGLE DRAWER HAMBURGER */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={onEmergencyClick}
              className="md:hidden flex h-10 w-10 items-center justify-center rounded-full bg-red-600 text-white shadow-md active:scale-90"
              aria-label="Direct red-line launch"
            >
              <HeartPulse className="h-5 w-5 animate-pulse" />
            </button>
            
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`flex h-10 w-10 items-center justify-center rounded-full border transition-all duration-300 ${
                isDark 
                  ? 'border-gray-700 bg-royal-dark/90 text-white hover:border-amber-400' 
                  : 'border-gray-200 bg-white text-gray-800 hover:border-blue-600'
              }`}
              aria-label="Menu system"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* MOBILE COMPREHENSIVE MENU DRAWER */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-nav-panel"
            className={`lg:hidden fixed inset-x-0 top-[100%] h-screen overflow-y-auto px-4 py-8 shadow-2xl transition-all duration-300 ${
              isDark 
                ? 'bg-[#000a1a]/98 text-white border-t border-amber-400/10' 
                : 'bg-white/98 text-slate-900 border-t border-blue-100'
            }`}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col gap-5 px-2">
              {menuItems.map((item, idx) => (
                <motion.a
                  key={idx}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`text-base font-display font-medium tracking-wide uppercase transition-colors duration-300 ${
                    isDark ? 'text-gray-300 hover:text-amber-400 border-b border-white/5 pb-2' : 'text-gray-700 hover:text-blue-600 border-b border-gray-100 pb-2'
                  }`}
                  whileHover={{ x: 8 }}
                  transition={{ type: 'spring', stiffness: 200 }}
                >
                  {item.name}
                </motion.a>
              ))}

              <div className="flex flex-col gap-3 mt-4">
                <button
                  onClick={() => {
                    setIsOpen(false);
                    onEmergencyClick();
                  }}
                  className="flex w-full items-center justify-center gap-3 rounded-xl bg-red-600 py-3 text-center text-sm font-bold uppercase tracking-wider text-white hover:bg-red-700"
                >
                  <Phone className="h-5 w-5 animate-pulse" />
                  +91 Emergency hotline
                </button>
                <button
                  onClick={() => {
                    setIsOpen(false);
                    onAppointmentClick();
                  }}
                  className="flex w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 py-3 text-center text-sm font-bold uppercase tracking-wide text-white border border-amber-400/30"
                >
                  <CalendarCheck className="h-5 w-5" />
                  Request Appointment
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
