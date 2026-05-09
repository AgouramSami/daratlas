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
      jobTitle: 'Fondateur',
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
            name: 'Site web',
            description: 'Site web personnalisé conçu pour votre activité, optimisé pour mobile et Google.',
          },
          price: '1500',
          priceCurrency: 'EUR',
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Boutique en ligne',
            description: 'Boutique e-commerce conçue pour votre métier, avec catalogue, panier et paiement sécurisé.',
          },
          price: '3500',
          priceCurrency: 'EUR',
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Application web',
            description: 'Application web pour votre équipe, vos clients ou votre activité, développée à partir de votre besoin.',
          },
          price: '4000',
          priceCurrency: 'EUR',
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Identité visuelle',
            description: 'Logo, palette, typographies et déclinaisons, pensés pour fonctionner sur tous vos supports.',
          },
          price: '1200',
          priceCurrency: 'EUR',
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Refonte ou amélioration',
            description: 'Audit de l\'existant, plan d\'action écrit, refonte ou correction selon votre choix.',
          },
          price: '900',
          priceCurrency: 'EUR',
        },
      ],
    },
  };
}
