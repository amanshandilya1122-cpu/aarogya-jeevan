/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Phone, 
  MapPin, 
  Mail, 
  Navigation, 
  Compass, 
  AlertOctagon, 
  Facebook, 
  Instagram, 
  Youtube, 
  MessageSquare, 
  CalendarClock, 
  ArrowRight,
  ShieldAlert,
  Award
} from 'lucide-react';

interface LocationProps {
  isDark: boolean;
  onAppointmentClick: () => void;
}

export const Location: React.FC<LocationProps> = ({ isDark, onAppointmentClick }) => {
  const [copiedText, setCopiedText] = useState(false);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText("Aarogya Jeevan Multi Speciality Hospital Pvt. Ltd., Muhammadpur, NH-31, Begusarai, Bihar - 851129");
    setCopiedText(true);
    setTimeout(() => setCopiedText(false), 2500);
  };

  // Google Maps safe premium embed coordinates for NH-31, Begusarai, Bihar
  const MAPS_EMBED_URL = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14378.106598511252!2d86.12642539999999!3d25.3871891!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f21ce35db83ebd%3A0xc6cb5a6e828d1dfc!2sBegusarai%2C%20Bihar!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin";

  return (
    <div id="location-and-emergency-hub" className="relative w-full">
      
      {/* ==============================================
          SECTION 8: STANDALONE RED EMERGENCY ALERT
         ============================================== */}
      <section id="emergency-alert-deck" className="relative bg-red-700 text-white overflow-hidden py-10">
        {/* Rapid heartbeat ambient pulse circle */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.15),transparent_60%)] animate-pulse" />
        
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            
            {/* Warning call layout */}
            <div className="flex items-center gap-4 text-center lg:text-left">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-white text-red-700 shadow-xl animate-bounce">
                <AlertOctagon className="h-8 w-8" />
              </div>
              <div>
                <span className="rounded bg-black/30 border border-white/20 px-2.5 py-0.5 font-mono text-[9px] font-bold tracking-widest uppercase inline-block mb-1">
                  24/7 Priority Emergency Care Available
                </span>
                <h2 className="font-heading text-2xl sm:text-3xl font-extrabold tracking-wide uppercase">
                  Critical Trauma Red Line
                </h2>
                <p className="text-red-100 text-xs sm:text-sm mt-1 max-w-xl">
                  Immediate surgical triage, pediatric resuscitation, and oxygenated ambulance dispatch. Located right on bypass NH-31 for zero transit latency.
                </p>
              </div>
            </div>

            {/* Direct Instant Action Call Hooks */}
            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              {/* Emergency dial hotlink */}
              <a
                href="tel:+919430488701"
                className="flex items-center justify-center gap-2 rounded-xl bg-white text-[#B91C1C] px-5 py-4 text-xs font-extrabold uppercase tracking-widest hover:bg-red-50 hover:scale-105 active:scale-95 transition-all duration-300 shadow-lg"
              >
                <Phone className="h-4.5 w-4.5 animate-[pulse_1s_infinite]" />
                Dial Hotline +91 94304 88701
              </a>

              {/* Ambulance Request trigger */}
              <a
                href="tel:+919430488701"
                className="flex items-center justify-center gap-2 rounded-xl bg-red-900 border border-red-500 text-white px-5 py-4 text-xs font-extrabold uppercase tracking-widest hover:bg-red-950 hover:scale-105 active:scale-95 transition-all duration-300 shadow-lg"
              >
                <Navigation className="h-4.5 w-4.5" />
                Ambulance Dispatch
              </a>

              {/* Fast track booking */}
              <button
                onClick={onAppointmentClick}
                className="flex items-center justify-center gap-2 rounded-xl bg-[#E0F2FE] text-red-700 px-5 py-4 text-xs font-extrabold uppercase tracking-widest hover:bg-sky-100 hover:scale-105 active:scale-95 transition-all duration-300 shadow-lg"
              >
                <CalendarClock className="h-4.5 w-4.5" />
                Alert Triage Desk
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* ==============================================
          SECTION 9 & 10: GEOLOCATION AND LOBBY CONTACTS
         ============================================== */}
      <section
        id="location-contact"
        className={`relative py-24 overflow-hidden transition-all duration-500 ${
          isDark ? 'bg-[#000a1a]' : 'bg-[#F8FAFC]'
        }`}
      >
        <div className="absolute top-1/2 left-1/4 w-80 h-80 bg-blue-600/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-amber-400/5 rounded-full blur-[100px] pointer-events-none animate-pulse" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
            
            {/* SECTION 10: CORE CONTACT LOBBY (5 COLUMNS) */}
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#D4AF37]">
                  <Compass className="h-3.5 w-3.5" />
                  Consolidated Contacts
                </span>
                <h2 className={`mt-4 font-heading text-3xl font-bold tracking-tight sm:text-4xl ${
                  isDark ? 'text-white' : 'text-slate-900'
                }`}>
                  Reach Out To Us
                </h2>
                <p className={`mt-4 text-sm leading-relaxed ${isDark ? 'text-blue-200/80' : 'text-slate-600'}`}>
                  Have questions regarding surgical parameters, pediatrics immunization, or general OPD bookings? Contact our central consulting desk.
                </p>

                {/* Information Nodes */}
                <div className="mt-8 space-y-6">
                  {/* Address info */}
                  <div className="flex gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-amber-400/10 border border-amber-400/20 text-[#D4AF37]">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className={`text-xs font-bold uppercase tracking-wider ${isDark ? 'text-blue-200' : 'text-slate-900'}`}>
                        Our Location Spot
                      </h4>
                      <p className={`text-xs sm:text-sm mt-1 leading-relaxed ${isDark ? 'text-gray-300' : 'text-slate-700'}`}>
                        Muhammadpur, NH-31, Begusarai,<br />Bihar – 851129, India
                      </p>
                    </div>
                  </div>

                  {/* Phone lines info */}
                  <div className="flex gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-amber-400/10 border border-amber-400/20 text-[#D4AF37]">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className={`text-xs font-bold uppercase tracking-wider ${isDark ? 'text-blue-200' : 'text-slate-900'}`}>
                        Consulting Line / Helpline
                      </h4>
                      <p className={`text-xs sm:text-sm mt-1 font-semibold ${isDark ? 'text-amber-200' : 'text-blue-900'}`}>
                        Mobile: <a href="tel:+919430488701" className="hover:underline">+91 94304 88701</a> (Dr. Desk)<br />
                        Office Phone available 24/7 for alerts.
                      </p>
                    </div>
                  </div>

                  {/* E-mail Support */}
                  <div className="flex gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-amber-400/10 border border-amber-400/20 text-[#D4AF37]">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className={`text-xs font-bold uppercase tracking-wider ${isDark ? 'text-blue-200' : 'text-slate-900'}`}>
                        Email Support Desks
                      </h4>
                      <p className={`text-xs sm:text-sm mt-1 font-semibold ${isDark ? 'text-amber-200' : 'text-slate-700'}`}>
                        <a href="mailto:info@aarogyajeevanhospital.com" className="hover:underline text-amber-500">
                          info@aarogyajeevanhospital.com
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* SOCIAL BUTTON DECKS */}
              <div className="mt-10 pt-8 border-t border-white/5">
                <h4 className="text-xs font-bold tracking-widest text-[#D4AF37] uppercase mb-4">
                  Connect on Media Channels:
                </h4>
                <div id="social-media-channels" className="flex items-center gap-3">
                  {/* WhatsApp */}
                  <a
                    href="https://wa.me/919430488701"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-600/10 border border-emerald-500/20 text-emerald-500 hover:bg-emerald-600 hover:text-white transition-all duration-300"
                    aria-label="Connect over Aarogya Jeevan dynamic WhatsApp link"
                  >
                    <MessageSquare className="h-5 w-5" />
                  </a>

                  {/* Facebook */}
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600/10 border border-blue-500/20 text-blue-500 hover:bg-blue-600 hover:text-white transition-all duration-300"
                    aria-label="Aarogya Jeevan Facebook channel"
                  >
                    <Facebook className="h-5 w-5" />
                  </a>

                  {/* Instagram */}
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-11 w-11 items-center justify-center rounded-xl bg-pink-600/10 border border-pink-500/20 text-pink-500 hover:bg-pink-600 hover:text-white transition-all duration-300"
                    aria-label="Aarogya Jeevan Instagram stream"
                  >
                    <Instagram className="h-5 w-5" />
                  </a>

                  {/* YouTube */}
                  <a
                    href="https://youtube.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-11 w-11 items-center justify-center rounded-xl bg-red-600/10 border border-red-500/20 text-red-500 hover:bg-red-600 hover:text-white transition-all duration-300"
                    aria-label="Aarogya Jeevan YouTube educational channels"
                  >
                    <Youtube className="h-5 w-5" />
                  </a>
                </div>
              </div>

            </div>

            {/* SECTION 9: GEOLOCATION VIEW AND INTERACTIVE MAP DESK (7 COLUMNS) */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              <div
                className={`rounded-3xl border p-4 h-full flex flex-col justify-between transition-all duration-500 overflow-hidden relative shadow-xl backdrop-blur-md ${
                  isDark
                    ? 'glass-panel-dark border-white/10 shadow-black'
                    : 'bg-white border-blue-200 shadow-blue-500/5'
                }`}
              >
                
                {/* Embedded Map Container */}
                <div className="w-full h-80 sm:h-96 rounded-2xl border border-amber-400/15 overflow-hidden relative">
                  <iframe
                    src={MAPS_EMBED_URL}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    title="Aarogya Jeevan location on NH-31 Bypass"
                    referrerPolicy="no-referrer"
                    className="grayscale-[0.25] brightness-[0.95] contrast-[1.05]"
                  />
                  
                  {/* Floating compass pin on map preview */}
                  <div className="absolute top-4 right-4 z-10 bg-slate-950/80 border border-amber-400/40 rounded-lg p-2 flex items-center gap-2 text-white">
                    <Navigation className="h-4 w-4 text-emerald-400 animate-pulse" />
                    <span className="font-mono text-[9px] font-bold tracking-widest uppercase">
                      NH-31 BYPASS ROUTE ACCESSIBLE
                    </span>
                  </div>
                </div>

                {/* Route coordinates guide */}
                <div className="mt-5 flex flex-col sm:flex-row gap-4 items-center justify-between">
                  <div className="text-center sm:text-left">
                    <h3 className={`font-display text-xs font-bold uppercase tracking-wider ${isDark ? 'text-amber-400' : 'text-blue-900'}`}>
                      Access Directions Guidance
                    </h3>
                    <p className={`text-xs mt-1 leading-relaxed ${isDark ? 'text-gray-300' : 'text-slate-600'}`}>
                      Muhammadpur bypass intersection. Look for corporate landmarks on NH-31 expressway Begusarai.
                    </p>
                  </div>

                  {/* Copy directions helper */}
                  <button
                    onClick={handleCopyAddress}
                    className="w-full sm:w-auto flex shrink-0 items-center justify-center gap-1.5 rounded-xl bg-amber-400/10 border border-amber-400/20 text-amber-400 px-4 py-2.5 text-xs font-bold uppercase tracking-wide hover:bg-amber-400 hover:text-slate-950 transition-all duration-300"
                  >
                    <Compass className="h-4 w-4" />
                    {copiedText ? 'Copy Completed!' : 'Copy Location Text'}
                  </button>
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
};
