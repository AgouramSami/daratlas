export type Locale = 'fr' | 'en';

export interface Service {
  id: string;
  number: string;
  title: string;
  priceFrom: number;
  duration: string;
  description: string;
  included: string[];
  stack: string[];
}

export interface Project {
  id: string;
  name: string;
  year: number;
  type: string;
  duration: string;
  description: string;
  metrics: { value: string; label: string }[];
  stack: string[];
  liveUrl: string;
  image: string;
  isExample: boolean;
}

export interface ProcessStep {
  id: string;
  number: string;
  weeks: string;
  title: string;
  description: string;
  deliverables: string[];
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  description: string;
  stack: string[];
  isFreelance: boolean;
}

export interface Engagement {
  id: string;
  number: string;
  title: string;
  description: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
}
