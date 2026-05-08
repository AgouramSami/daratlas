import type { AppLocale } from '@/i18n/routing';

export interface TestimonialEntry {
  id: string;
  quote: string;
  author: string;
  role: string;
  accent: 'tomato' | 'ink' | 'sand';
  avatar: string;
}

const AVATAR_BASE = 'https://images.unsplash.com';
const AVATAR_PARAMS = '?auto=format&fit=crop&w=240&h=240&q=80';

const fr: TestimonialEntry[] = [
  {
    id: 't1',
    quote:
      'Ce qui m\'a marqué, c\'est la communication. À chaque étape, je savais où on en était. Pas besoin de relancer.',
    author: 'Témoignage',
    role: 'Métier ou entreprise',
    accent: 'tomato',
    avatar: `${AVATAR_BASE}/photo-1494790108377-be9c29b29330${AVATAR_PARAMS}`,
  },
  {
    id: 't2',
    quote:
      'Le site est joli, mais surtout il marche. Il charge vite, mes clients trouvent ce qu\'ils cherchent, je peux le mettre à jour seul.',
    author: 'Témoignage',
    role: 'Métier ou entreprise',
    accent: 'ink',
    avatar: `${AVATAR_BASE}/photo-1507003211169-0a1dd7228f2d${AVATAR_PARAMS}`,
  },
  {
    id: 't3',
    quote:
      'J\'avais peur que ce soit compliqué. Au final, on s\'est compris en 5 minutes et ils ont géré.',
    author: 'Témoignage',
    role: 'Métier ou entreprise',
    accent: 'sand',
    avatar: `${AVATAR_BASE}/photo-1573497019940-1c28c88b4f3e${AVATAR_PARAMS}`,
  },
];

const en: TestimonialEntry[] = [
  {
    id: 't1',
    quote:
      'What stood out was the communication. At every step, I knew where we stood. No need to chase.',
    author: 'Testimonial',
    role: 'Role or company',
    accent: 'tomato',
    avatar: `${AVATAR_BASE}/photo-1494790108377-be9c29b29330${AVATAR_PARAMS}`,
  },
  {
    id: 't2',
    quote:
      'The site is beautiful, but more importantly it works. It loads fast, my clients find what they need, I can update it on my own.',
    author: 'Testimonial',
    role: 'Role or company',
    accent: 'ink',
    avatar: `${AVATAR_BASE}/photo-1507003211169-0a1dd7228f2d${AVATAR_PARAMS}`,
  },
  {
    id: 't3',
    quote:
      'I was worried it would be complicated. In the end, we understood each other in 5 minutes and they handled it.',
    author: 'Testimonial',
    role: 'Role or company',
    accent: 'sand',
    avatar: `${AVATAR_BASE}/photo-1573497019940-1c28c88b4f3e${AVATAR_PARAMS}`,
  },
];

export const testimonialsByLocale: Record<AppLocale, TestimonialEntry[]> = { fr, en };
