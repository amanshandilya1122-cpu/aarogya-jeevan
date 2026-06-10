/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Doctor {
  id: string;
  name: string;
  role: string;
  gender: 'male' | 'female';
  qualification: string;
  specialization: string[];
  experience: number; // in years
  image: string;
  bio: string;
  availability: string;
}

export interface Speciality {
  id: string;
  title: string;
  description: string;
  icon: string; // lucide icon name
  detailedHighlights: string[];
  gradient: string;
}

export interface Facility {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  comment: string;
  date: string;
}

export interface AppointmentInput {
  name: string;
  mobile: string;
  age: string;
  gender: string;
  department: string;
  doctor: string;
  preferredDate: string;
  message: string;
}

export interface CounterItem {
  id: string;
  label: string;
  value: number;
  suffix: string;
  icon: string;
}
