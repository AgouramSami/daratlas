import type { AppLocale } from '@/i18n/routing';
import type { Service } from '@/types';

const fr: Service[] = [
  {
    id: 'site-web',
    number: '01',
    title: 'Site web',
    priceFrom: 1500,
    duration: '2 à 3 semaines',
    description:
      'Un site qui présente votre activité, votre produit ou votre projet. Plusieurs pages sur mesure, optimisé pour mobile, prêt pour Google. Vous modifiez le contenu vous-même après livraison.',
    included: [
      'Design sur mesure, pas un template',
      'Responsive mobile et desktop',
      'Jusqu\'à 8 pages',
      'Formulaire de contact connecté',
      'Espace pour modifier vos textes',
      'Optimisation Google et réseaux sociaux',
      'Mise en ligne incluse',
    ],
    stack: [],
  },
  {
    id: 'boutique-en-ligne',
    number: '02',
    title: 'Boutique en ligne',
    priceFrom: 3500,
    duration: '4 à 6 semaines',
    description:
      'Pour vendre vos produits ou vos services en ligne. Catalogue, panier, paiement sécurisé, gestion des commandes. On construit la boutique qui correspond à votre activité, pas un template générique.',
    included: [
      'Catalogue produits ou services',
      'Panier et paiement sécurisé',
      'Gestion des commandes',
      'Multilingue, multi-devises possible',
      'Emails automatiques (confirmation, expédition)',
      'Prêt à vendre dès l\'ouverture',
    ],
    stack: [],
  },
  {
    id: 'application',
    number: '03',
    title: 'Application',
    priceFrom: 4000,
    duration: '4 à 8 semaines',
    description:
      'Une application web pour votre équipe, vos clients ou votre activité. Outil interne, plateforme de réservation, espace membre, tableau de bord. On part de votre besoin et on construit ce qui le résout.',
    included: [
      'Conception du parcours utilisateur',
      'Design d\'interface',
      'Comptes et accès sécurisés',
      'Base de données configurée',
      'Hébergement prêt',
      'Formation à l\'usage',
    ],
    stack: [],
  },
  {
    id: 'identite-visuelle',
    number: '04',
    title: 'Identité visuelle',
    priceFrom: 1200,
    duration: '2 à 3 semaines',
    description:
      'Logo, palette, typographies, déclinaisons. Une identité pensée pour fonctionner partout, sur votre site, vos cartes, vos emails, vos réseaux. Si on fait aussi votre site, l\'identité s\'intègre directement.',
    included: [
      'Logo principal et variantes',
      'Palette de couleurs',
      'Typographies sélectionnées',
      'Livret d\'usage',
      'Fichiers sources',
      'Déclinaisons réseaux sociaux',
    ],
    stack: [],
  },
  {
    id: 'refonte',
    number: '05',
    title: 'Refonte ou amélioration',
    priceFrom: 900,
    duration: '1 à 2 semaines pour l\'audit',
    description:
      'Vous avez déjà un site ou une app, mais quelque chose ne va pas. Trop lent, démodé, mal référencé, difficile à mettre à jour. On regarde ce que vous avez, on vous dit ce qu\'on en pense, et on corrige.',
    included: [
      'Analyse complète',
      'Plan d\'action écrit',
      'Refonte ou corrections selon votre choix',
      'Optimisation vitesse',
      'Optimisation référencement Google',
      'Mise au propre du code',
    ],
    stack: [],
  },
];

const en: Service[] = [
  {
    id: 'site-web',
    number: '01',
    title: 'Website',
    priceFrom: 1500,
    duration: '2 to 3 weeks',
    description:
      'A site that introduces your activity, your product or your project. Custom pages, mobile-optimized, ready for Google. You can edit the content yourself after delivery.',
    included: [
      'Custom design, not a template',
      'Responsive on mobile and desktop',
      'Up to 8 pages',
      'Connected contact form',
      'Space to edit your content',
      'Google and social optimization',
      'Launch included',
    ],
    stack: [],
  },
  {
    id: 'boutique-en-ligne',
    number: '02',
    title: 'Online store',
    priceFrom: 3500,
    duration: '4 to 6 weeks',
    description:
      'To sell your products or your services online. Catalog, cart, secure checkout, order management. We build the store that fits your activity, not a generic template.',
    included: [
      'Product or service catalog',
      'Cart and secure payment',
      'Order management',
      'Multilingual, multi-currency optional',
      'Automatic emails (confirmation, shipping)',
      'Ready to sell from day one',
    ],
    stack: [],
  },
  {
    id: 'application',
    number: '03',
    title: 'Application',
    priceFrom: 4000,
    duration: '4 to 8 weeks',
    description:
      'A web application for your team, your clients or your activity. Internal tool, booking platform, member area, dashboard. We start from your need and build what solves it.',
    included: [
      'User journey design',
      'Interface design',
      'Accounts and secure access',
      'Database configured',
      'Hosting ready',
      'Usage training',
    ],
    stack: [],
  },
  {
    id: 'identite-visuelle',
    number: '04',
    title: 'Visual identity',
    priceFrom: 1200,
    duration: '2 to 3 weeks',
    description:
      'Logo, palette, typography, variants. An identity designed to work everywhere: your site, your cards, your emails, your social. If we also build your site, the identity integrates directly.',
    included: [
      'Primary logo and variants',
      'Color palette',
      'Selected typography',
      'Usage guidelines',
      'Source files',
      'Social media variants',
    ],
    stack: [],
  },
  {
    id: 'refonte',
    number: '05',
    title: 'Redesign or improvement',
    priceFrom: 900,
    duration: '1 to 2 weeks for the audit',
    description:
      'You already have a site or an app, but something is off. Too slow, dated, poor ranking, hard to update. We look at what you have, share an honest opinion, then fix it.',
    included: [
      'Full analysis',
      'Written action plan',
      'Redesign or fixes based on your choice',
      'Speed optimization',
      'Google ranking optimization',
      'Code cleanup',
    ],
    stack: [],
  },
];

export const servicesByLocale: Record<AppLocale, Service[]> = { fr, en };
export const services = fr;
