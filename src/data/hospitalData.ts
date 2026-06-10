/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Doctor, Speciality, Facility, Testimonial, CounterItem } from '../types';

export const HERO_SLIDES = [
  {
    image: 'https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?q=80&w=1920&auto=format&fit=crop',
    title: 'Aarogya Jeevan Multi Speciality',
    caption: 'Leading the era of modern premium medicine with surgical and pediatric precision.',
  },
  {
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1920&auto=format&fit=crop',
    title: 'World-Class Infrastructure',
    caption: 'Designed for absolute healing, luxury comfort, and rapid trauma intervention.',
  },
  {
    image: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?q=80&w=1920&auto=format&fit=crop',
    title: 'State-of-the-Art ICU & Ward Care',
    caption: 'Round-the-clock intensive clinical vigilance paired with personalized luxury.',
  },
  {
    image: 'https://images.unsplash.com/photo-1551601651-2a8555f1a136?q=80&w=1920&auto=format&fit=crop',
    title: 'Precision Laparoscopic Surgical Theatre',
    caption: 'Minimally invasive keyhole techniques for safer, scarless, and rapid recovery.',
  },
  {
    image: 'https://images.unsplash.com/photo-1579684389782-64d84b5e9053?q=80&w=1920&auto=format&fit=crop',
    title: 'Premier Pediatric & Neonate Wellness',
    caption: 'Nurturing the future with specialist pediatric care and developmental tracking.',
  }
];

export const SPECIALITIES: Speciality[] = [
  {
    id: 'gen-surgery',
    title: 'General Surgery',
    description: 'Expert comprehensive surgical procedures delivered with gold-standard precision guidelines.',
    icon: 'Activity',
    gradient: 'from-blue-600/20 to-indigo-600/20 hover:border-amber-400/40',
    detailedHighlights: ['Advanced hernia repairs', 'Thyroid and Breast surgery', 'Complex trauma care', 'Gastrointestinal interventions']
  },
  {
    id: 'laparoscopic',
    title: 'Laparoscopic Surgery',
    description: 'State-of-the-art keyhole surgical procedures with minimal scarring, minimal pain, and rapid healing.',
    icon: 'Sparkles',
    gradient: 'from-indigo-600/20 to-blue-600/20 hover:border-amber-400/40',
    detailedHighlights: ['Laparoscopic Cholecystectomy (Gallbladder)', 'Scope Appendectomy', 'Laser & Minimally Invasive Hernioplasty', 'Ventral Hernia mesh Repairs']
  },
  {
    id: 'pediatric',
    title: 'Pediatric Care',
    description: 'Specialist clinical observation, newborn immunization, growth tracking, and adolescent consultations.',
    icon: 'Baby',
    gradient: 'from-sky-500/20 to-blue-600/20 hover:border-amber-400/40',
    detailedHighlights: ['Newborn health screenings & ICU', 'Comprehensive immunization plans', 'Pediatric surgery and rehabilitation', 'Childhood nutrition & asthma advisory']
  },
  {
    id: 'emergency',
    title: 'Emergency Care',
    description: 'Immediate 24x7 trauma stabilization, acute cardiac services, and direct critical care ambulance dispatch.',
    icon: 'HeartPulse',
    gradient: 'from-red-600/20 to-pink-600/20 hover:border-red-400/50',
    detailedHighlights: ['Instant triage responsive setups', 'Advanced Cardiac Life Support (ACLS)', 'Multidisciplinary crash teams', 'On-site fully stocked life-saving pharmacy']
  },
  {
    id: 'opd',
    title: 'OPD Services',
    description: 'Comfortable consultation lobby with highly specialized counseling modules across diverse medical disciplines.',
    icon: 'Stethoscope',
    gradient: 'from-emerald-600/20 to-teal-500/20 hover:border-amber-400/40',
    detailedHighlights: ['Daily expert consultants check-in', 'Pre-anesthetic & clinical clearance', 'E-Prescription & diagnostics sync', 'Multi-room comfortable personal consulting suites']
  },
  {
    id: 'health-checkups',
    title: 'Health Checkups',
    description: 'Customized clinical diagnostic bundles tailored for holistic executive health tracking and preventive wellness.',
    icon: 'ClipboardCheck',
    gradient: 'from-amber-600/20 to-yellow-500/20 hover:border-amber-400/40',
    detailedHighlights: ['Aarogya Life Comprehensive Package', 'Women Health & Gynae Screening', 'Cardiac Risk Profile assessment', 'Diabetic evaluation & lifestyle modeling']
  },
  {
    id: 'diagnostics',
    title: 'Diagnostic Services',
    description: 'High-precision computational pathology labs and rapid radiology scan solutions.',
    icon: 'Microscope',
    gradient: 'from-violet-600/20 to-fuchsia-600/20 hover:border-amber-400/40',
    detailedHighlights: ['Automated hematology & biochemistry', 'Digital X-ray & ultrasonic scans', 'Eco-cardiograms and pathology reports', 'Cloud-integrated digital health portals']
  },
  {
    id: 'pharmacy',
    title: 'Pharmacy Network',
    description: '24/7 fully computerized pharmacy providing authentic certified medical supplies with premium convenience.',
    icon: 'Pills',
    gradient: 'from-teal-600/20 to-emerald-600/20 hover:border-amber-400/40',
    detailedHighlights: ['100% genuine prescribed pharmaceuticals', 'Dedicated child care cold-chain vaccine storage', 'Senior citizen priority queue desk', 'Instant hospital bed order fulfillment']
  },
  {
    id: 'icu',
    title: 'ICU Care',
    description: 'Advanced Intensive Care Unit equipped with digital ventilators, multiparametric telemetry monitors, and critical alarms.',
    icon: 'ShieldCheck',
    gradient: 'from-rose-600/20 to-indigo-600/20 hover:border-amber-400/40',
    detailedHighlights: ['Central station telemetry screen systems', 'Invasive and non-invasive hemodynamic setups', '1:1 patient-to-nurse critical ratio', 'Emergency intubation & resuscitation units']
  },
  {
    id: 'women-healthcare',
    title: 'Women Healthcare',
    description: 'Empathetic wellness care encompassing specialized female surgical procedures, wellness, and maternity checks.',
    icon: 'UserCheck',
    gradient: 'from-purple-600/20 to-pink-500/20 hover:border-amber-400/40',
    detailedHighlights: ['Painless deliveries & luxury maternity suites', 'Minimally invasive gynecologic laparoscopy', 'Adolescent health and post-partum guidance', 'Breast health screenings & ultrasound']
  }
];

export const DOCTORS: Doctor[] = [
  {
    id: 'dr-amrendra',
    name: 'Dr. Amrendra Kumar',
    role: 'Senior General & Laparoscopic Surgeon',
    gender: 'male',
    qualification: 'MBBS, MS (General Surgery), FMAS (Fellow of Minimal Access Surgery)',
    specialization: [
      'Advanced Minimally Invasive Laparoscopic Surgery',
      'Gallbladder (Cholecystectomy) & Appendix Procedures',
      'Complex Abdominal Wall Hernia Repairs',
      'Trauma, Pile Surgeries, and Advanced Gastrointestinal Procedures'
    ],
    experience: 15,
    image: '',
    bio: 'Dr. Amrendra Kumar is a legendary medical practitioner and surgical maestro with over 15 years of clinical masterclass. Highly specializing in state-of-the-art keyhole laser and laparoscopic surgeries, he is dedicated to delivering high-precision treatments, reducing hospital stays, and assuring a pain-free aesthetic recovery path.',
    availability: 'Monday – Saturday: 10:00 AM – 05:00 PM'
  },
  {
    id: 'dr-deepsikha',
    name: 'Dr. Deepsikha Kumari',
    role: 'Female Surgeon & Child Specialist (Pediatrician)',
    gender: 'female',
    qualification: 'MBBS, MD (Pediatrics), DNB (Pediatrics), Clinical Surgery Associate',
    specialization: [
      'Neonatal & Primary Child Medical Specialist Care',
      'Comprehensive Female Surgeries & Gynecologic Procedures',
      'Growth Milestones Monitoring & Advanced Immunology',
      'Pediatric Respiratory, Gastrointestinal, & Surgical Trauma'
    ],
    experience: 12,
    image: 'https://images.unsplash.com/photo-1594824813573-246434de83fb?q=80&w=600&auto=format&fit=crop',
    bio: 'Dr. Deepsikha Kumari is a dynamic force of medical compassion, uniquely bridging the expert domains of specialized pediatric medicine and active female surgical care. Her legendary diagnostic accuracy in neonatology and children healthcare makes her the most sought-after child health guardian and surgeon expert in Begusarai.',
    availability: 'Monday – Saturday: 11:00 AM – 06:00 PM'
  }
];

export const COUNTERS: CounterItem[] = [
  {
    id: 'happy-patients',
    label: 'Happy Recovered Patients',
    value: 10000,
    suffix: '+',
    icon: 'Smile'
  },
  {
    id: 'emergencies',
    label: '24/7 Emergency Support',
    value: 100,
    suffix: '%',
    icon: 'Radio'
  },
  {
    id: 'medical-equipment',
    label: 'Advanced Medical Equipment',
    value: 50,
    suffix: '+',
    icon: 'Cpu'
  },
  {
    id: 'expert-doctors',
    label: 'Highly Veteran Doctors',
    value: 10,
    suffix: '+',
    icon: 'Award'
  },
  {
    id: 'safe-surgeries',
    label: 'Safe Successful Surgeries',
    value: 4500,
    suffix: '+',
    icon: 'ShieldCheck'
  },
  {
    id: 'affordable-treatment',
    label: 'Affordable Care Standards',
    value: 100,
    suffix: '%',
    icon: 'CheckCircle'
  }
];

export const FACILITIES: Facility[] = [
  {
    id: 'facility-reception',
    title: 'Royal Reception & Lounge Area',
    description: 'Designed in luxurious off-whites and sapphire hues to render stress-free, soothing, and ultra-comfortable admission guides.',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1000&auto=format&fit=crop',
    category: 'Lounge'
  },
  {
    id: 'facility-ot',
    title: 'Ultra-Modern Operation Theatre (OT)',
    description: 'Equipped with laminative airflow systems, Shadowless surgical lamps, elite anesthetic systems, and high-frequency laparoscopes.',
    image: 'https://images.unsplash.com/photo-1551601651-2a8555f1a136?q=80&w=1000&auto=format&fit=crop',
    category: 'Surgical'
  },
  {
    id: 'facility-ward',
    title: 'Elite Patient Suites & Luxury Wards',
    description: 'Spacious, air-conditioned corporate wards with individual helper recliners, nurse call technology, and smart telemetry monitors.',
    image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=1000&auto=format&fit=crop',
    category: 'Wards'
  },
  {
    id: 'facility-icu',
    title: 'Intensive Cardiac & Respiratory ICU Unit',
    description: 'Intense 24/7 clinical monitoring hub featuring microprocessor ventilation, continuous pulse-ox telemetry, and expert crash beds.',
    image: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?q=80&w=1000&auto=format&fit=crop',
    category: 'Critical'
  },
  {
    id: 'facility-lab',
    title: 'High-Precision Diagnostics Laboratory',
    description: 'Fully automated computational pathology scans, chemical examinations, hormonal assays, and digital pathology reports.',
    image: 'https://images.unsplash.com/photo-1579154204601-01588f351167?q=80&w=1000&auto=format&fit=crop',
    category: 'Diagnostics'
  },
  {
    id: 'facility-pharmacy',
    title: '24/7 Computerized Pharmacy Desk',
    description: 'Consolidated stocks of life-saving medical supplies directly audited to match gold-standard therapeutic safety laws.',
    image: 'https://images.unsplash.com/photo-1586015555751-63bb77f4322a?q=80&w=1000&auto=format&fit=crop',
    category: 'Pharmacy'
  },
  {
    id: 'facility-consultation',
    title: 'State-of-the-Art Consulting Suites',
    description: 'Extremely private consulting rooms ensuring quiet environment, elite diagnostics, and soothing space for doctor consultations.',
    image: 'https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?q=80&w=1000&auto=format&fit=crop',
    category: 'OPD'
  },
  {
    id: 'facility-ambulance',
    title: 'Rapid Response Emergency Ambulances',
    description: 'Oxygenated transport capsules containing trauma management equipment, continuous emergency medications, and dynamic telemetry.',
    image: 'https://images.unsplash.com/photo-1612277795421-9bc7e6573f54?q=80&w=1000&auto=format&fit=crop',
    category: 'Emergency'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'testi-1',
    name: 'Sanjeev Kumar Singh',
    location: 'Begusarai Town',
    rating: 5,
    comment: 'The surgical precision of Dr. Amrendra Kumar is phenomenal. My laparoscopic hernia surgery felt absolutely seamless. I walked home on day 3 with barely any pain. Aarogya Jeevan is truly a godsend for Begusarai.',
    date: '10 days ago'
  },
  {
    id: 'testi-2',
    name: 'Meera Devi',
    location: 'Barauni, Bihar',
    rating: 5,
    comment: 'Dr. Deepsikha Kumari is a highly compassionate and exceptional expert. Her baby therapy and vaccination guidance for my infant grandchild was reassuring and precise. Highly professional staff and beautiful clean lobbies!',
    date: '2 weeks ago'
  },
  {
    id: 'testi-3',
    name: 'Anand Prakash Jhunjhunwala',
    location: 'Muhammadpur Bypass',
    rating: 5,
    comment: 'Undoubtedly the best luxury hospital experience in North Bihar! The 24/7 ICU environment, state-of-the-art laboratory scanners, and immediate care procedures are equivalent to leading metro facilities. Highly recommended!',
    date: '3 weeks ago'
  },
  {
    id: 'testi-4',
    name: 'Pratima Srivastava',
    location: 'Teghra, Begusarai',
    rating: 5,
    comment: 'Cleanliness is outstanding. Inpatient ward is like a corporate hotel suite, and the nursing staff behaves with supreme empathy. The operation theatre tech looks futuristic. Very transparent billing too.',
    date: '1 month ago'
  }
];
