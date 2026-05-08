import type { AppLocale } from '@/i18n/routing';

export interface ProjectShowcase {
  id: string;
  number: string;
  name: string;
  sector: string;
  type: string;
  year: string;
  accent: 'tomato' | 'ink' | 'sand' | 'cream';
  image: string;
}

const IMAGE_BASE = 'https://images.unsplash.com';
const IMAGE_PARAMS = '?auto=format&fit=crop&w=1200&q=80';

const fr: ProjectShowcase[] = [
  {
    id: 'restaurant',
    number: '01',
    name: 'Restaurant familial',
    sector: 'Restauration',
    type: 'Site vitrine, carte en ligne',
    year: '2026',
    accent: 'tomato',
    image: `${IMAGE_BASE}/photo-1517248135467-4c7edcad34c4${IMAGE_PARAMS}`,
  },
  {
    id: 'boutique',
    number: '02',
    name: 'Boutique d\'artisan',
    sector: 'Mode et accessoires',
    type: 'Boutique en ligne',
    year: '2026',
    accent: 'ink',
    image: `${IMAGE_BASE}/photo-1481437156560-3205f6a55735${IMAGE_PARAMS}`,
  },
  {
    id: 'cabinet',
    number: '03',
    name: 'Cabinet conseil',
    sector: 'Services aux entreprises',
    type: 'Site corporate, blog',
    year: '2026',
    accent: 'sand',
    image: `${IMAGE_BASE}/photo-1497366216548-37526070297c${IMAGE_PARAMS}`,
  },
  {
    id: 'reservation',
    number: '04',
    name: 'Plateforme de réservation',
    sector: 'Sport et bien-être',
    type: 'Application web',
    year: '2026',
    accent: 'cream',
    image: `${IMAGE_BASE}/photo-1545205597-3d9d02c29597${IMAGE_PARAMS}`,
  },
  {
    id: 'boulangerie',
    number: '05',
    name: 'Identité boulangerie',
    sector: 'Artisanat alimentaire',
    type: 'Identité visuelle complète',
    year: '2026',
    accent: 'tomato',
    image: `${IMAGE_BASE}/photo-1568254183919-78a4f43a2877${IMAGE_PARAMS}`,
  },
];

const en: ProjectShowcase[] = [
  {
    id: 'restaurant',
    number: '01',
    name: 'Family restaurant',
    sector: 'Hospitality',
    type: 'Brochure site, online menu',
    year: '2026',
    accent: 'tomato',
    image: `${IMAGE_BASE}/photo-1517248135467-4c7edcad34c4${IMAGE_PARAMS}`,
  },
  {
    id: 'boutique',
    number: '02',
    name: 'Artisan store',
    sector: 'Fashion and accessories',
    type: 'Online store',
    year: '2026',
    accent: 'ink',
    image: `${IMAGE_BASE}/photo-1481437156560-3205f6a55735${IMAGE_PARAMS}`,
  },
  {
    id: 'cabinet',
    number: '03',
    name: 'Consulting firm',
    sector: 'Business services',
    type: 'Corporate site, blog',
    year: '2026',
    accent: 'sand',
    image: `${IMAGE_BASE}/photo-1497366216548-37526070297c${IMAGE_PARAMS}`,
  },
  {
    id: 'reservation',
    number: '04',
    name: 'Booking platform',
    sector: 'Sport and wellness',
    type: 'Web application',
    year: '2026',
    accent: 'cream',
    image: `${IMAGE_BASE}/photo-1545205597-3d9d02c29597${IMAGE_PARAMS}`,
  },
  {
    id: 'boulangerie',
    number: '05',
    name: 'Bakery identity',
    sector: 'Food crafts',
    type: 'Full visual identity',
    year: '2026',
    accent: 'tomato',
    image: `${IMAGE_BASE}/photo-1568254183919-78a4f43a2877${IMAGE_PARAMS}`,
  },
];

export const projectsByLocale: Record<AppLocale, ProjectShowcase[]> = { fr, en };
