/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { PageLoader, FloatingParticles, HeartbeatECG, ThemeToggle } from './components/InteractiveEffects';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Specialities } from './components/Specialities';
import { Doctors } from './components/Doctors';
import { Stats } from './components/Stats';
import { Facilities } from './components/Facilities';
import { Testimonials } from './components/Testimonials';
import { Appointment } from './components/Appointment';
import { Location } from './components/Location';
import { Footer } from './components/Footer';

export default function App() {
  const [isDark, setIsDark] = useState(true);

  // Apply corresponding CSS class to index document body for custom themes
  useEffect(() => {
    const root = window.document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      root.classList.remove('light');
    } else {
      root.classList.add('light');
      root.classList.remove('dark');
    }
  }, [isDark]);

  // Smooth scroll helper when patient clicks key scheduler CTA triggers
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-500 relative ${
        isDark ? 'bg-[#000a1a] text-white' : 'bg-[#F8FAFC] text-slate-900'
      }`}
    >
      {/* 1. INITIAL ULTRA-LUXURY INTRO LOADING PANEL */}
      <PageLoader />

      {/* 2. BACKGROUND AMBIENT SPARKLING EFFECTS */}
      <div className="absolute inset-x-0 top-0 h-full pointer-events-none overflow-hidden z-0">
        <FloatingParticles />
      </div>

      {/* 3. FLOATING COMPREHENSIVE MEDICAL BRAND HEADER */}
      <Header
        isDark={isDark}
        onAppointmentClick={() => scrollToSection('appointment')}
        onEmergencyClick={() => scrollToSection('emergency-alert-deck')}
      />

      {/* 4. MAIN CORPORATE SECTIONS */}
      <main className="relative z-10">
        
        {/* HERO CAROUSEL BLOCK */}
        <div id="home">
          <Hero
            isDark={isDark}
            onAppointmentClick={() => scrollToSection('appointment')}
            onEmergencyClick={() => scrollToSection('emergency-alert-deck')}
          />
        </div>

        {/* SECTION 1: ABOUT SERVICES (Tabular highlights) */}
        <div id="about">
          <About isDark={isDark} />
        </div>

        {/* SECTION 2: SPECIALITIES GRID PORTALS */}
        <div id="specialities">
          <Specialities isDark={isDark} />
        </div>

        {/* SECTION 3: SENIOR DOCTORS PROF LISTS */}
        <div id="doctors">
          <Doctors isDark={isDark} onAppointmentClick={() => scrollToSection('appointment')} />
        </div>

        {/* SECTION 4: WHY CHOOSE US (Counters and cards) */}
        <div id="why-choose-us">
          <Stats isDark={isDark} />
        </div>

        {/* DYNAMIC AMBIENT HEARTBEAT WAVE SPACING */}
        <div className="py-2 overflow-hidden opacity-30">
          <HeartbeatECG active={true} />
        </div>

        {/* SECTION 5: INFRASTRUCTURE HD GALLERY */}
        <div id="gallery">
          <Facilities isDark={isDark} />
        </div>

        {/* SECTION 6: TESTIMONIALS TOUCH SLIDES */}
        <div id="reviews">
          <Testimonials isDark={isDark} />
        </div>

        {/* SECTION 7: APPOINTMENT SYSTEMS */}
        <div id="appointment">
          <Appointment isDark={isDark} />
        </div>

        {/* SECTION 8, 9, 10: RED ALERT COAX, INTERACTIVE MAPS & CONTACT DETAILS */}
        <div id="location-contact">
          <Location isDark={isDark} onAppointmentClick={() => scrollToSection('appointment')} />
        </div>

      </main>

      {/* 5. FOOTER & CLOSING BADGES */}
      <Footer
        isDark={isDark}
        onAppointmentClick={() => scrollToSection('appointment')}
        onEmergencyClick={() => scrollToSection('emergency-alert-deck')}
      />

      {/* 6. FLOATING THEME CONTROL NODE TABS */}
      <ThemeToggle isDark={isDark} onToggle={() => setIsDark(!isDark)} />

    </div>
  );
}

