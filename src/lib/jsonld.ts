import { SITE_CONFIG } from '@/lib/constants';

export function buildOrganizationJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_CONFIG.name,
    url: SITE_CONFIG.url,
    description: SITE_CONFIG.description,
    email: SITE_CONFIG.contactEmail,
    telephone: SITE_CONFIG.contactPhone,
    address: {
      '@type': 'PostalAddress',
      streetAddress: SITE_CONFIG.address.street,
      postalCode: SITE_CONFIG.address.postalCode,
      addressLocality: SITE_CONFIG.address.city,
      addressCountry: 'FR',
    },
    founder: {
      '@type': 'Person',
      name: 'Sami Agouram',
      jobTitle: 'Tech lead et fondateur',
    },
    sameAs: [SITE_CONFIG.social.linkedin, SITE_CONFIG.social.github, SITE_CONFIG.social.x],
  };
}

export function buildLocalBusinessJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: SITE_CONFIG.name,
    image: `${SITE_CONFIG.url}/og.png`,
    url: SITE_CONFIG.url,
    telephone: SITE_CONFIG.contactPhone,
    email: SITE_CONFIG.contactEmail,
    priceRange: '€€',
    description: SITE_CONFIG.description,
    address: {
      '@type': 'PostalAddress',
      streetAddress: SITE_CONFIG.address.street,
      postalCode: SITE_CONFIG.address.postalCode,
      addressLocality: SITE_CONFIG.address.city,
      addressCountry: 'FR',
    },
    areaServed: {
      '@type': 'Country',
      name: 'France',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Services Dar Atlas',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Sites web et landing pages',
            description: 'Sites marketing rapides et beaux en Next.js ou Astro.',
          },
          price: '1500',
          priceCurrency: 'EUR',
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'E-commerce sur mesure',
            description: 'Boutiques en ligne avec checkout sécurisé, multilingue.',
          },
          price: '3500',
          priceCurrency: 'EUR',
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Intégrations IA et automatisation',
            description: 'Chatbots, pipelines de contenu, automatisation de workflow.',
          },
          price: '2000',
          priceCurrency: 'EUR',
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Audit sécurité et performance',
            description: 'Audit OWASP, Core Web Vitals, conformité RGPD.',
          },
          price: '800',
          priceCurrency: 'EUR',
        },
      ],
    },
  };
}
