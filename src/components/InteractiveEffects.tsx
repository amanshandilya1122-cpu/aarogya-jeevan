/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Sun, Moon, HeartPulse } from 'lucide-react';

// PAGE LOADER COMPONENT
export const PageLoader: React.FC = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          id="page-loader-screen"
          className="fixed inset-0 z-100 flex flex-col items-center justify-center bg-[#070F1E] text-white"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8, ease: 'easeInOut' } }}
        >
          {/* Glowing Background Radial */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.15),transparent_50%)]" />

          {/* Golden Heartbeat Animation Container */}
          <motion.div
            id="loader-pulse-container"
            className="relative mb-8"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: [0.9, 1.1, 0.95, 1.15, 1], opacity: 1 }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            {/* Pulsating Ring */}
            <div className="absolute -inset-4 rounded-full border border-amber-400/20 animate-ping opacity-45" />
            <div className="flex h-24 w-24 items-center justify-center rounded-full bg-[#0B2545] border-2 border-amber-400 text-amber-400 luxury-glow-intense">
              <HeartPulse className="h-12 w-12 animate-pulse" />
            </div>
          </motion.div>

          {/* Animated Text Reveal */}
          <div className="text-center">
            <motion.h1
              id="loader-title-1"
              className="font-heading text-2xl tracking-widest text-amber-400 md:text-3xl"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              AAROGYA JEEVAN
            </motion.h1>
            <motion.p
              id="loader-title-2"
              className="mt-2 font-display text-xs tracking-[0.25em] text-blue-200 uppercase md:text-sm"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              Multi Speciality Hospital Pvt. Ltd.
            </motion.p>
            <motion.div
              id="loader-status-bar"
              className="mx-auto mt-6 h-[2px] w-32 bg-amber-400/10 overflow-hidden"
              initial={{ width: 0 }}
              animate={{ width: 128 }}
              transition={{ delay: 0.8, duration: 1 }}
            >
              <div className="h-full bg-gradient-to-r from-amber-400 to-yellow-200 animate-[shimmer_1.5s_infinite]" style={{ width: '100%' }} />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// BACKGROUND FLOATING PARTICLES
export const FloatingParticles: React.FC = () => {
  const [particles, setParticles] = useState<Array<{ id: number; left: number; top: number; size: number; duration: number }>>([]);

  useEffect(() => {
    // Generate static details for floating nodes safely
    const arr = Array.from({ length: 25 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      size: Math.random() * 4 + 2,
      duration: Math.random() * 15 + 10,
    }));
    setParticles(arr);
  }, []);

  return (
    <div id="ambient-particles" className="pointer-events-none absolute inset-0 overflow-hidden z-0">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-amber-400/15"
          style={{
            left: `${p.left}%`,
            top: `${p.top}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
          }}
          animate={{
            y: [-25, -200],
            opacity: [0, 0.4, 0.6, 0.3, 0],
            x: [0, Math.random() * 40 - 20],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      ))}
    </div>
  );
};

// HEARTBEAT ECG WAVE SIMULATOR
export const HeartbeatECG: React.FC<{ active?: boolean; className?: string }> = ({ active = true, className = '' }) => {
  if (!active) return null;
  return (
    <div className={`relative pointer-events-none opacity-20 ${className}`}>
      <svg className="w-full h-16" viewBox="0 0 100 16" preserveAspectRatio="none">
        <path
          className="ecg-line"
          d="M 0 8 L 20 8 L 23 8 L 26 2 L 29 14 L 32 8 L 35 8 L 40 8 L 43 5 L 46 11 L 49 8 L 55 8 L 60 8 L 62 8 L 65 0 L 68 16 L 71 8 L 80 8 L 83 8 L 86 5 L 89 11 L 92 8 L 100 8"
          fill="none"
          stroke="url(#ecgGradient)"
          strokeWidth="0.5"
        />
        <defs>
          <linearGradient id="ecgGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#134074" stopOpacity="0.4" />
            <stop offset="50%" stopColor="#D4AF37" stopOpacity="1" />
            <stop offset="100%" stopColor="#134074" stopOpacity="0.4" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

// LIGHT / DARK THEME TOGGLE BUTTON
interface ThemeToggleProps {
  isDark: boolean;
  onToggle: () => void;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ isDark, onToggle }) => {
  return (
    <motion.button
      id="theme-mode-toggle-btn"
      onClick={onToggle}
      className={`fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full border shadow-2xl transition-all duration-300 focus:outline-none ${
        isDark
          ? 'bg-gradient-to-br from-[#0B2545] to-[#134074] border-amber-400/40 text-amber-400 hover:border-amber-400'
          : 'bg-white border-blue-200 text-blue-800 hover:border-blue-600 hover:text-blue-900 shadow-blue-200/50'
      }`}
      whileHover={{ scale: 1.1, rotate: 15 }}
      whileTap={{ scale: 0.9 }}
      aria-label="Toggle luxury themes"
    >
      <div className="relative">
        <AnimatePresence mode="wait">
          {isDark ? (
            <motion.div
              key="darkIcon"
              initial={{ opacity: 0, rotate: -45 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 45 }}
              transition={{ duration: 0.3 }}
            >
              <Sun className="h-6 w-6 animate-[pulse_3s_infinite]" />
            </motion.div>
          ) : (
            <motion.div
              key="lightIcon"
              initial={{ opacity: 0, rotate: 45 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: -45 }}
              transition={{ duration: 0.3 }}
            >
              <Moon className="h-6 w-6" />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Pulsing ring indicator */}
      <span className="absolute -top-1 -right-1 flex h-3 w-3">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-3 w-3 bg-amber-500"></span>
      </span>
    </motion.button>
  );
};
