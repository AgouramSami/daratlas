import type { AppLocale } from '@/i18n/routing';

export const SITE_CONFIG = {
  name: 'Dar Atlas',
  shortName: 'Dar Atlas',
  url: 'https://daratlas.fr',
  description:
    'Studio web français. On conçoit des sites, des boutiques en ligne et des applications pour tout type d\'activité. Prix fixes, livraison rapide, accompagnement direct.',
  tagline: 'On conçoit des sites et des apps qui tiennent leurs promesses.',
  contactEmail: 'contact@daratlas.fr',
  contactPhone: '+33 6 52 02 27 87',
  contactPhoneDisplay: '06 52 02 27 87',
  address: {
    street: '29 rue Gabriel Péri',
    postalCode: '91100',
    city: 'Villabé',
    country: 'France',
  },
  legal: {
    siren: 'En cours d\'attribution',
    ape: '62.01Z',
    host: 'OVHcloud, 2 rue Kellermann, 59100 Roubaix',
  },
  social: {
    linkedin: 'https://www.linkedin.com/company/daratlas',
    github: 'https://github.com/daratlas',
    x: 'https://x.com/daratlas',
  },
} as const;

export const NAV_LINKS = [
  { id: 'manifeste', href: '/#manifeste' },
  { id: 'services', href: '/#services' },
  { id: 'process', href: '/#process' },
  { id: 'travaux', href: '/#travaux' },
  { id: 'tarifs', href: '/pricing' },
  { id: 'faq', href: '/#faq' },
] as const;

const marqueeFr = [
  'Sites web singuliers',
  'Boutiques en ligne',
  'Applications web',
  'Identité visuelle',
  'Refontes et améliorations',
  'Multilingue',
  'Mobile-first',
  'Précis jusqu\'au pixel',
  'Livré en mains propres',
  'Bâti pour durer',
];

const marqueeEn = [
  'Singular websites',
  'Online stores',
  'Web applications',
  'Visual identities',
  'Redesigns and improvements',
  'Multilingual',
  'Mobile-first',
  'Precise to the pixel',
  'Hand-delivered',
  'Built to last',
];

export const MARQUEE_ITEMS_BY_LOCALE: Record<AppLocale, string[]> = {
  fr: marqueeFr,
  en: marqueeEn,
};

export const MARQUEE_ITEMS = marqueeFr;

export const TECH_STACK_LOGOS = [
  'Next.js',
  'React',
  'TypeScript',
  'Tailwind',
  'Astro',
  'Node.js',
  'PostgreSQL',
  'Supabase',
  'Stripe',
  'Shopify',
  'Sanity',
  'Claude API',
  'OpenAI',
  'Vercel',
  'Cloudflare',
  'Sentry',
] as const;
