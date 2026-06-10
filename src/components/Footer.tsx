/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { HeartPulse, Star, Compass, Award, ExternalLink, ShieldCheck, Milestone, CheckCircle, HelpCircle } from 'lucide-react';

interface FooterProps {
  isDark: boolean;
  onAppointmentClick: () => void;
  onEmergencyClick: () => void;
}

export const Footer: React.FC<FooterProps> = ({ isDark, onAppointmentClick, onEmergencyClick }) => {
  const currentYear = new Date().getFullYear();

  const footerLinksLeft = [
    { name: 'About Hospital', href: '#about' },
    { name: 'Our Specialities', href: '#specialities' },
    { name: 'Doctors Profile', href: '#doctors' },
    { name: 'Infrastructure', href: '#gallery' },
  ];

  const footerLinksRight = [
    { name: 'Why Choose Us', href: '#why-choose-us' },
    { name: 'Testimonials', href: '#reviews' },
    { name: 'Digital Booking', href: '#appointment' },
    { name: 'Route Map', href: '#location-contact' },
  ];

  const specialtyLinks = [
    { name: 'Laparoscopic Surgery', href: '#specialities' },
    { name: 'General Surgery', href: '#specialities' },
    { name: 'Pediatric Care', href: '#specialities' },
    { name: 'OPD Consultancy', href: '#specialities' },
    { name: 'ICU Critical Care', href: '#specialities' },
  ];

  return (
    <div id="footer-and-closing-master-wrapper" className="relative w-full overflow-hidden">
      
      {/* ==============================================
          FINAL SECTION: MAJESTIC CLOSING BLOCK
         ============================================== */}
      <section id="closing-grand-badge-panel" className="relative py-20 bg-gradient-to-b from-[#000a1a] via-[#000815] to-[#000a1a] text-white border-t border-amber-400/10">
        
        {/* Dynamic golden radial glow in background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.08),transparent_60%)]" />

        <div className="mx-auto max-w-4xl px-4 text-center relative z-10">
          
          {/* Sparkles stars rating */}
          <motion.div
            id="grand-stars-badge"
            className="flex items-center justify-center gap-1.5 mb-6 text-amber-400"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Star className="h-6 w-6 fill-amber-400 shadow-[0_0_12px_rgba(212,175,55,1)] animate-pulse" />
            <Star className="h-6 w-6 fill-amber-400 shadow-[0_0_12px_rgba(212,175,55,1)]" />
            <Star className="h-6 w-6 fill-amber-400 shadow-[0_0_12px_rgba(212,175,55,1)] animate-pulse" />
            <Star className="h-6 w-6 fill-amber-400 shadow-[0_0_12px_rgba(212,175,55,1)]" />
            <Star className="h-6 w-6 fill-amber-400 shadow-[0_0_12px_rgba(212,175,55,1)] animate-pulse" />
          </motion.div>

          <motion.div
            id="grand-closing-tag"
            className="font-mono text-xs font-bold tracking-[0.25em] text-amber-400 uppercase bg-black/40 px-4 py-1.5 rounded-full border border-amber-400/20 w-fit mx-auto mb-4"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Trusted by Thousands of Patients
          </motion.div>

          <motion.h2
            id="grand-closing-headline"
            className="font-heading text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-wide uppercase mt-4 text-white"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Aarogya Jeevan Multi Speciality Hospital Pvt. Ltd.
          </motion.h2>

          <motion.p
            className="mt-4 text-xs sm:text-sm text-gray-400 max-w-xl mx-auto leading-relaxed"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            Deliverance of premium, high-tech laparoscopic surgery, general surgery, pediatric care, and trauma management services. Redefining medical excellence on National Highway 31, Begusarai.
          </motion.p>

          <motion.div
            className="mt-8 flex justify-center gap-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
          >
            <span className="h-1.5 w-16 bg-amber-400 rounded-full" />
            <span className="h-1.5 w-4 bg-amber-500 rounded-full" />
            <span className="h-1.5 w-1.5 bg-[#D4AF37] rounded-full animate-ping" />
          </motion.div>

        </div>
      </section>

      {/* ==============================================
          FOOTER: LUXURY DARK CORPORATE FOOTER
         ============================================== */}
      <footer id="main-luxury-footer" className="bg-[#000815] text-white pt-20 pb-10 border-t border-white/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            
            {/* COLUMN 1: CORPORATE ENTITY BRAND DESC */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#0B2545] border border-amber-400 text-amber-400">
                  <HeartPulse className="h-5.5 w-5.5" />
                </div>
                <div>
                  <h3 className="font-heading text-sm font-bold tracking-widest text-amber-400 uppercase">
                    AAROGYA JEEVAN
                  </h3>
                  <span className="font-display text-[8px] tracking-[0.2em] font-medium text-gray-400 uppercase block">
                    Multi Speciality Care
                  </span>
                </div>
              </div>

              <p className="text-xs text-gray-400 leading-relaxed">
                Aarogya Jeevan Multi Speciality Hospital Pvt. Ltd. represents the peak of surgical and pediatric precision in Bihar. Conveniently accessible on Bypass NH-31, Begusarai.
              </p>

              <div className="flex gap-2.5">
                <span className="flex items-center gap-1 font-mono text-[9px] font-bold text-amber-400 uppercase border border-amber-400/20 bg-black/40 px-2.5 py-1 rounded">
                  <ShieldCheck className="h-3 w-3" />
                  GOV APPROVED
                </span>
                <span className="flex items-center gap-1 font-mono text-[9px] font-bold text-gray-400 uppercase border border-white/5 bg-black/40 px-2.5 py-1 rounded">
                  ★ ISO 9001
                </span>
              </div>
            </div>

            {/* COLUMN 2: QUICK LINK SECTORS */}
            <div>
              <h3 className="font-heading text-xs font-bold tracking-widest text-[#D4AF37] uppercase mb-6">
                Hospital Resources
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-3">
                  {footerLinksLeft.map((link, idx) => (
                    <a
                      key={idx}
                      href={link.href}
                      className="text-xs text-gray-400 hover:text-amber-400 font-medium transition-colors"
                    >
                      {link.name}
                    </a>
                  ))}
                </div>
                <div className="flex flex-col gap-3">
                  {footerLinksRight.map((link, idx) => (
                    <a
                      key={idx}
                      href={link.href}
                      className="text-xs text-gray-400 hover:text-amber-400 font-medium transition-colors"
                    >
                      {link.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* COLUMN 3: CLINICAL DEPARTMENTS */}
            <div className="space-y-6">
              <h3 className="font-heading text-xs font-bold tracking-widest text-[#D4AF37] uppercase">
                Care Departments
              </h3>
              <div className="flex flex-col gap-3">
                {specialtyLinks.map((link, idx) => (
                  <a
                    key={idx}
                    href={link.href}
                    className="text-xs text-gray-400 hover:text-amber-400 font-medium transition-colors flex items-center gap-2"
                  >
                    <span className="h-1 w-1.5 rounded-full bg-amber-400" />
                    {link.name}
                  </a>
                ))}
              </div>
            </div>

            {/* COLUMN 4: DOCTOR DECK INSTRUCTIONS */}
            <div className="space-y-6">
              <h3 className="font-heading text-xs font-bold tracking-widest text-[#D4AF37] uppercase">
                Specialist Rosters
              </h3>
              <div className="space-y-3.5">
                <div>
                  <h4 className="text-xs font-bold text-white uppercase tracking-wide">
                    Dr. Amrendra Kumar
                  </h4>
                  <p className="text-[10px] text-gray-400 mt-0.5">
                    Senior General & Laparoscopic Surgeon<br />
                    Mon - Sat: 10:00 AM - 5:00 PM
                  </p>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white uppercase tracking-wide">
                    Dr. Deepsikha Kumari
                  </h4>
                  <p className="text-[10px] text-gray-400 mt-0.5">
                    Pediatrician & Female Surgeon<br />
                    Mon - Sat: 11:00 AM - 6:00 PM
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* LOWER DECK COPYRIGHT RAILS */}
          <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between text-[11px] text-gray-500 gap-4">
            <p>
              &copy; {currentYear} Aarogya Jeevan Multi Speciality Hospital Pvt. Ltd. All rights reserved.
            </p>
            
            <div className="flex items-center gap-5">
              <a href="#location-contact" className="hover:text-amber-400 transition-colors">
                NH-31 Muhammadpur Bypass, Begusarai
              </a>
              <span>•</span>
              <a href="#emergency-alert-deck" className="text-red-500 hover:text-red-400 transition-colors font-bold flex items-center gap-1.5 animate-pulse">
                Ambulance Helpline: +91 9430488701
              </a>
            </div>
          </div>

        </div>
      </footer>

    </div>
  );
};
