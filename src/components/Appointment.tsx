/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, User, Phone, Clipboard, CheckCircle, Smartphone, Send, AlertTriangle, ShieldCheck, Mail } from 'lucide-react';
import { AppointmentInput } from '../types';

interface AppointmentProps {
  isDark: boolean;
}

export const Appointment: React.FC<AppointmentProps> = ({ isDark }) => {
  const [form, setForm] = useState<AppointmentInput>({
    name: '',
    mobile: '',
    age: '',
    gender: '',
    department: '',
    doctor: '',
    preferredDate: '',
    message: ''
  });

  const [errors, setErrors] = useState<Partial<AppointmentInput>>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  // Departments list matching Specialities
  const departments = [
    'General Surgery',
    'Laparoscopic Surgery',
    'Pediatric Care',
    'OPD Consultancy',
    'Executive Health Checkups',
    'Pathiatric Diagnostics',
    'Women Healthcare'
  ];

  // Doctors list matching Data
  const doctors = [
    'Dr. Amrendra Kumar (Senior General & Laparoscopic Surgeon)',
    'Dr. Deepsikha Kumari (Female Surgeon & Child Specialist)'
  ];

  // Intelligent dynamic doctor binding based on selected department
  useEffect(() => {
    if (form.department === 'Pediatric Care') {
      setForm((prev) => ({ ...prev, doctor: 'Dr. Deepsikha Kumari (Female Surgeon & Child Specialist)' }));
    } else if (form.department === 'Laparoscopic Surgery' || form.department === 'General Surgery') {
      setForm((prev) => ({ ...prev, doctor: 'Dr. Amrendra Kumar (Senior General & Laparoscopic Surgeon)' }));
    }
  }, [form.department]);

  // Handle text modifications
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    // Clear error
    if (errors[name as keyof AppointmentInput]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  // Enforces structural form validations
  const validateForm = () => {
    const newErrors: Partial<AppointmentInput> = {};
    const IndianMobileRegex = /^[6-9]\d{9}$/;

    if (!form.name.trim()) newErrors.name = 'Please provide full patient name.';
    if (!form.mobile.trim()) {
      newErrors.mobile = 'Mobile contact is mandatory.';
    } else if (!IndianMobileRegex.test(form.mobile)) {
      newErrors.mobile = 'Provide a valid 10-digit Indian mobile number.';
    }
    if (!form.age.trim()) {
      newErrors.age = 'Patient age is required.';
    } else if (isNaN(Number(form.age)) || Number(form.age) <= 0 || Number(form.age) > 120) {
      newErrors.age = 'Provide a valid biological age.';
    }
    if (!form.gender) newErrors.gender = 'Please select biological gender.';
    if (!form.department) newErrors.department = 'Please select clinical department.';
    if (!form.doctor) newErrors.doctor = 'Please assign a consulting surgeon or specialist.';
    if (!form.preferredDate) newErrors.preferredDate = 'Please select preferred consultation date.';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Form submission sequence simulating database sync & routing
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    // Simulate API pipeline duration
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  const getCustomWhatsAppLink = () => {
    const textFormat = `*AAROGYA JEEVAN HOSPITAL APPOINTMENT REQUISITION*%0A---------------------------------------------------%0A*Patient Name:* ${form.name}%0A*Contact:* ${form.mobile}%0A*Age/Gender:* ${form.age} Years / ${form.gender}%0A*Department:* ${form.department}%0A*Consulting Doctor:* ${form.doctor}%0A*Preferred Date:* ${form.preferredDate}%0A*Patient Message:* ${form.message || 'N/A'}%0A---------------------------------------------------%0A_Please confirm my consultation schedule slots._`;
    return `https://wa.me/919430488701?text=${textFormat}`;
  };

  const handleReset = () => {
    setForm({
      name: '',
      mobile: '',
      age: '',
      gender: '',
      department: '',
      doctor: '',
      preferredDate: '',
      message: ''
    });
    setSubmitted(false);
  };

  return (
    <section
      id="appointment"
      className={`relative py-24 overflow-hidden transition-all duration-500 ${
        isDark ? 'bg-[#000a1a]' : 'bg-white'
      }`}
    >
      
      {/* Background vectors */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-amber-400/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* SECTION TITLE HEADER */}
        <div className="text-center mb-12">
          <motion.div
            className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#D4AF37]"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Calendar className="h-3.5 w-3.5" />
            Digital Scheduling Desk
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
            Book Your Consultation
          </motion.h2>
          <motion.p
            className={`mx-auto mt-4 max-w-xl text-sm sm:text-base ${
              isDark ? 'text-blue-200/80' : 'text-slate-600'
            }`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Fill out the official patient registration form below. We will coordinate schedule slots, notify you over email, and secure mobile confirmation instantly.
          </motion.p>
        </div>

        {/* REGISTRATION CORE CASE CONTAINER */}
        <div
          className={`rounded-3xl border p-6 sm:p-10 md:p-12 relative overflow-hidden transition-all duration-500 backdrop-blur-md ${
            isDark
              ? 'glass-panel-dark border-white/10 shadow-2xl shadow-black/40'
              : 'bg-gradient-to-br from-[#F8FAFC] to-blue-50/20 border-blue-200 shadow-xl shadow-blue-500/5'
          }`}
        >
          <div className="shimmer-bg absolute inset-0 opacity-10 pointer-events-none" />

          <AnimatePresence mode="wait">
            {!submitted ? (
              <motion.form
                id="hospital-appointment-form"
                key="form-view"
                onSubmit={handleSubmit}
                className="space-y-6 sm:space-y-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                {/* 2-Column Fields Deck */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-7">
                  
                  {/* Name field */}
                  <div className="flex flex-col">
                    <label className={`text-xs font-bold uppercase tracking-wider mb-2 ${isDark ? 'text-gray-300' : 'text-slate-700'}`}>
                      Patient Full Name <span className="text-amber-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-amber-400">
                        <User className="h-4.5 w-4.5" />
                      </div>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Ex. Amarendra Kishor Azad"
                        className={`w-full pl-10 pr-4 py-3 rounded-xl border text-sm transition-all duration-300 focus:outline-none focus:ring-1 ${
                          isDark
                            ? 'bg-slate-950/70 border-gray-800 text-white focus:border-amber-400 focus:ring-amber-400/30'
                            : 'bg-white border-slate-300 text-slate-950 focus:border-blue-600 focus:ring-blue-600/30'
                        } ${errors.name ? 'border-red-500' : ''}`}
                      />
                    </div>
                    {errors.name && <span className="text-xs text-red-500 font-semibold mt-1.5">{errors.name}</span>}
                  </div>

                  {/* Contact field */}
                  <div className="flex flex-col">
                    <label className={`text-xs font-bold uppercase tracking-wider mb-2 ${isDark ? 'text-gray-300' : 'text-slate-700'}`}>
                      Mobile Contact Number <span className="text-amber-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-amber-400">
                        <Phone className="h-4.5 w-4.5" />
                      </div>
                      <input
                        type="tel"
                        name="mobile"
                        value={form.mobile}
                        onChange={handleChange}
                        placeholder="Ex. 9431243100"
                        className={`w-full pl-10 pr-4 py-3 rounded-xl border text-sm transition-all duration-300 focus:outline-none focus:ring-1 ${
                          isDark
                            ? 'bg-slate-950/70 border-gray-800 text-white focus:border-amber-400 focus:ring-amber-400/30'
                            : 'bg-white border-slate-300 text-slate-950 focus:border-blue-600 focus:ring-blue-600/30'
                        } ${errors.mobile ? 'border-red-500' : ''}`}
                      />
                    </div>
                    {errors.mobile && <span className="text-xs text-red-500 font-semibold mt-1.5">{errors.mobile}</span>}
                  </div>

                  {/* Age Field */}
                  <div className="flex flex-col">
                    <label className={`text-xs font-bold uppercase tracking-wider mb-2 ${isDark ? 'text-gray-300' : 'text-slate-700'}`}>
                      Biological Age <span className="text-amber-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-amber-400">
                        <Clipboard className="h-4.5 w-4.5" />
                      </div>
                      <input
                        type="number"
                        name="age"
                        value={form.age}
                        onChange={handleChange}
                        placeholder="Ex. 34"
                        className={`w-full pl-10 pr-4 py-3 rounded-xl border text-sm transition-all duration-300 focus:outline-none focus:ring-1 ${
                          isDark
                            ? 'bg-slate-950/70 border-gray-800 text-white focus:border-amber-400 focus:ring-amber-400/30'
                            : 'bg-white border-slate-300 text-slate-950 focus:border-blue-600 focus:ring-blue-600/30'
                        } ${errors.age ? 'border-red-500' : ''}`}
                      />
                    </div>
                    {errors.age && <span className="text-xs text-red-500 font-semibold mt-1.5">{errors.age}</span>}
                  </div>

                  {/* Gender selection */}
                  <div className="flex flex-col">
                    <label className={`text-xs font-bold uppercase tracking-wider mb-2 ${isDark ? 'text-gray-300' : 'text-slate-700'}`}>
                      Biological Gender <span className="text-amber-500">*</span>
                    </label>
                    <select
                      name="gender"
                      value={form.gender}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-xl border text-sm transition-all duration-500 focus:outline-none focus:ring-1 ${
                        isDark
                          ? 'bg-slate-950 border-gray-800 text-gray-300 focus:border-amber-400 focus:ring-amber-400/30'
                          : 'bg-white border-slate-300 text-slate-900 focus:border-blue-600 focus:ring-blue-600/30'
                      } ${errors.gender ? 'border-red-500' : ''}`}
                    >
                      <option value="">-- Choose Biological Gender --</option>
                      <option value="Male">Male Patient</option>
                      <option value="Female">Female Patient</option>
                      <option value="Child/Other">Pediatric Case</option>
                    </select>
                    {errors.gender && <span className="text-xs text-red-500 font-semibold mt-1.5">{errors.gender}</span>}
                  </div>

                  {/* Department selection */}
                  <div className="flex flex-col">
                    <label className={`text-xs font-bold uppercase tracking-wider mb-2 ${isDark ? 'text-gray-300' : 'text-slate-700'}`}>
                      Clinical Department <span className="text-amber-500">*</span>
                    </label>
                    <select
                      name="department"
                      value={form.department}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-xl border text-sm transition-all duration-500 focus:outline-none focus:ring-1 ${
                        isDark
                          ? 'bg-slate-950 border-gray-800 text-gray-300 focus:border-amber-400 focus:ring-amber-400/30'
                          : 'bg-white border-slate-300 text-slate-900 focus:border-blue-600 focus:ring-blue-600/30'
                      } ${errors.department ? 'border-red-500' : ''}`}
                    >
                      <option value="">-- Choose Clinical Department --</option>
                      {departments.map((dep, dIdx) => (
                        <option key={dIdx} value={dep}>{dep}</option>
                      ))}
                    </select>
                    {errors.department && <span className="text-xs text-red-500 font-semibold mt-1.5">{errors.department}</span>}
                  </div>

                  {/* Doctor selection (intelligently matches department in real-time) */}
                  <div className="flex flex-col">
                    <label className={`text-xs font-bold uppercase tracking-wider mb-2 ${isDark ? 'text-gray-300' : 'text-slate-700'}`}>
                      Assigned Doctor Specialist <span className="text-amber-500">*</span>
                    </label>
                    <select
                      name="doctor"
                      value={form.doctor}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-xl border text-sm transition-all duration-500 focus:outline-none focus:ring-1 ${
                        isDark
                          ? 'bg-slate-950 border-gray-800 text-gray-300 focus:border-amber-400 focus:ring-amber-400/30'
                          : 'bg-white border-slate-300 text-slate-900 focus:border-blue-600 focus:ring-blue-600/30'
                      } ${errors.doctor ? 'border-red-500' : ''}`}
                    >
                      <option value="">-- Select Specialist --</option>
                      {doctors.map((doc, docIdx) => (
                        <option key={docIdx} value={doc}>{doc}</option>
                      ))}
                    </select>
                    {errors.doctor && <span className="text-xs text-red-500 font-semibold mt-1.5">{errors.doctor}</span>}
                  </div>

                  {/* Preferred consultation Date */}
                  <div className="flex flex-col sm:col-span-2">
                    <label className={`text-xs font-bold uppercase tracking-wider mb-2 ${isDark ? 'text-gray-300' : 'text-slate-700'}`}>
                      Preferred Consultation Date <span className="text-amber-500">*</span>
                    </label>
                    <input
                      type="date"
                      name="preferredDate"
                      value={form.preferredDate}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-xl border text-sm transition-all duration-500 focus:outline-none focus:ring-1 ${
                        isDark
                          ? 'bg-slate-950 border-gray-800 text-gray-300 focus:border-amber-400 focus:ring-amber-400/30'
                          : 'bg-white border-slate-300 text-slate-900 focus:border-blue-600 focus:ring-blue-600/30'
                      } ${errors.preferredDate ? 'border-red-500' : ''}`}
                    />
                    {errors.preferredDate && <span className="text-xs text-red-500 font-semibold mt-1.5">{errors.preferredDate}</span>}
                  </div>

                  {/* Custom Patient Message brief */}
                  <div className="flex flex-col sm:col-span-2">
                    <label className={`text-xs font-bold uppercase tracking-wider mb-2 ${isDark ? 'text-gray-300' : 'text-slate-700'}`}>
                      Brief Clinical Concern / History Message <span className="text-gray-400">(Optional)</span>
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Brief your surgical history or medical symptoms regarding child medicine..."
                      className={`w-full px-4 py-3 rounded-xl border text-sm transition-all duration-500 focus:outline-none focus:ring-1 ${
                        isDark
                          ? 'bg-slate-950 border-gray-800 text-gray-300 focus:border-amber-400 focus:ring-amber-400/30'
                          : 'bg-white border-slate-300 text-slate-950 focus:border-blue-600 focus:ring-blue-600/30'
                      }`}
                    />
                  </div>

                </div>

                {/* Submit Register Area */}
                <div className="pt-4 flex flex-col sm:flex-row gap-4 items-center justify-between border-t border-white/5">
                  <div className="flex items-center gap-2 text-xs text-amber-500 font-bold uppercase tracking-wider text-center sm:text-left">
                    <ShieldCheck className="h-4.5 w-4.5" />
                    Double Encrypted HIPAA-Compliant Registration
                  </div>
                  
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full sm:w-auto flex items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 px-8 py-4 text-xs font-extrabold uppercase tracking-widest text-white border border-amber-400/20 shadow-lg hover:from-amber-400 hover:to-amber-500 hover:scale-105 active:scale-95 disabled:opacity-50 disabled:pointer-events-none transition-all duration-300"
                  >
                    {loading ? (
                      <>
                        <div className="h-4 w-4 rounded-full border-2 border-white/40 border-t-white animate-spin" />
                        Routing Securely...
                      </>
                    ) : (
                      <>
                        <Send className="h-4.5 w-4.5" />
                        Submit Appointment Form
                      </>
                    )}
                  </button>
                </div>

              </motion.form>
            ) : (
              // SUBMITTED GRAPHIC SUCCESS CONFIRMATION PLATE
              <motion.div
                key="success-view"
                id="form-success-case"
                className="text-center py-10"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ type: 'spring', damping: 15 }}
              >
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-emerald-500/10 border border-emerald-500 text-emerald-400 mb-8 animate-[pulse_2s_infinite]">
                  <CheckCircle className="h-10 w-10" />
                </div>

                <h3 className={`font-heading text-2xl sm:text-3xl font-bold tracking-tight ${
                  isDark ? 'text-white' : 'text-slate-900'
                }`}>
                  Registration Structured Successfully!
                </h3>
                
                {/* Email notification simulator card */}
                <div className={`my-8 rounded-2xl border p-5 max-w-xl mx-auto flex items-start gap-4 text-left ${
                  isDark ? 'bg-black/30 border-amber-400/10' : 'bg-slate-50 border-slate-200'
                }`}>
                  <div className="h-9 w-9 shrink-0 flex items-center justify-center rounded-lg bg-amber-400/10 text-amber-500">
                    <Mail className="h-4.5 w-4.5 animate-bounce" />
                  </div>
                  <div>
                    <h4 className={`text-xs font-bold uppercase tracking-wider ${isDark ? 'text-blue-200' : 'text-blue-900'}`}>
                      Simulated Patient Mail Dispatched
                    </h4>
                    <p className={`text-xs mt-1 leading-relaxed ${isDark ? 'text-gray-400' : 'text-slate-600'}`}>
                      An executive reservation ticket copy has been structured for delivery to the hospital triage database and patient inbox. A medical representative will audit slots inside 15 minutes.
                    </p>
                  </div>
                </div>

                <p className={`mx-auto max-w-lg text-sm sm:text-base mb-10 ${
                  isDark ? 'text-stone-300' : 'text-slate-600'
                }`}>
                  We highly recommend confirming your reservation directly on our central digital triage desk via *WhatsApp Live Sync* below to speed up coordination.
                </p>

                {/* Triple actions deck */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  
                  {/* WhatsApp Direct verification dispatch */}
                  <a
                    href={getCustomWhatsAppLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto flex items-center justify-center gap-2.5 rounded-xl bg-emerald-600 border border-emerald-500 px-6 py-4 text-xs font-bold uppercase tracking-widest text-white hover:bg-emerald-700 hover:scale-105 active:scale-95 transition-all duration-300 shadow-md"
                  >
                    <Smartphone className="h-4.5 w-4.5" />
                    Verify on WhatsApp
                  </a>

                  {/* Booking Reset */}
                  <button
                    onClick={handleReset}
                    className={`w-full sm:w-auto px-6 py-4 text-xs font-bold uppercase tracking-widest rounded-xl border transition-all duration-300 ${
                      isDark
                        ? 'border-gray-800 bg-slate-950 text-gray-300 hover:border-amber-400 hover:text-amber-400'
                        : 'border-slate-200 bg-white text-slate-800 hover:border-blue-600 hover:text-blue-600'
                    }`}
                  >
                    Register Another Patient
                  </button>

                </div>

              </motion.div>
            )}
          </AnimatePresence>

        </div>

      </div>
    </section>
  );
};
