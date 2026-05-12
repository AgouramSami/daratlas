import type { AppLocale } from '@/i18n/routing';
import type { FaqItem } from '@/types';

const fr: FaqItem[] = [
  {
    id: 'cout',
    question: 'Combien ça coûte ?',
    answer:
      'Ça dépend de votre projet. Un site classique démarre à 1500 €. Une boutique en ligne à 3500 €. Une application à 4000 €. Une identité visuelle à 1200 €. Après notre premier appel, je vous transmets un prix fixe sous 48 heures.',
  },
  {
    id: 'duree',
    question: 'Combien de temps ça prend ?',
    answer:
      'Un site web : 2 à 3 semaines. Une boutique : 4 à 6 semaines. Une application : 4 à 8 semaines. Je vous donne une date précise dès le devis.',
  },
  {
    id: 'technique',
    question: 'Je n\'y connais rien en technique. C\'est un problème ?',
    answer:
      'Non, c\'est même la norme. Je vous explique ce qu\'il faut savoir, sans vous noyer. Vous décidez en connaissance de cause, sans avoir besoin d\'apprendre le métier.',
  },
  {
    id: 'paiement',
    question: 'Comment on paie ?',
    answer:
      'Moitié à la signature, moitié à la livraison. Pour les projets plus longs, le paiement peut se découper en trois étapes. Virement, Stripe ou prélèvement.',
  },
  {
    id: 'modifications',
    question: 'Combien de modifications je peux demander ?',
    answer:
      'Autant que nécessaire dans le périmètre fixé. Si vous voulez ajouter quelque chose qui n\'était pas prévu, je chiffre, vous validez, je l\'ajoute. Sans facture surprise.',
  },
  {
    id: 'autonomie',
    question: 'Je peux modifier mon site moi-même après livraison ?',
    answer:
      'Oui, je configure un espace de gestion simple. Pour modifier un texte, ajouter une page ou changer une image, vous n\'avez besoin de personne. Pour les changements plus profonds, je suis là.',
  },
  {
    id: 'apres-lancement',
    question: 'Et après le lancement ?',
    answer:
      '30 jours de corrections offertes après la mise en ligne. Ensuite, soit on travaille à la demande pour les petits changements, soit j\'installe un forfait mensuel pour ceux qui veulent une présence régulière.',
  },
  {
    id: 'hebergement',
    question: 'Et l\'hébergement ?',
    answer:
      'Inclus pour la première année dans la plupart des cas. Ensuite, entre 0 et 20 € par mois, payé directement par vous à l\'hébergeur. Aucune marge cachée.',
  },
  {
    id: 'clients',
    question: 'Vous travaillez avec quels types de clients ?',
    answer:
      'Tout type. Indépendants, commerces, restaurants, associations, startups, PME. Dès que vous avez quelque chose à mettre en ligne, je peux vous aider.',
  },
  {
    id: 'reprise',
    question: 'J\'ai déjà un site, vous pouvez le reprendre ?',
    answer:
      'Oui, sur audit préalable. Je regarde ce que vous avez, je vous dis honnêtement si c\'est récupérable ou s\'il vaut mieux refaire. Aucune facture tant qu\'on n\'a pas convenu de la suite.',
  },
  {
    id: 'securite-rgpd',
    question: 'C\'est sécurisé, RGPD, tout ça ?',
    answer:
      'Oui, par défaut. Sécurité de base, conformité RGPD (cookies, mentions légales, registre), backups. On en parle au moment du brief, je livre quelque chose d\'irréprochable.',
  },
  {
    id: 'localisation',
    question: 'Vous êtes basé où ?',
    answer:
      'En France. Je travaille principalement à distance, mais on peut se voir si vous êtes en Île-de-France.',
  },
];

const en: FaqItem[] = [
  {
    id: 'cout',
    question: 'How much does it cost?',
    answer:
      'It depends on your project. A standard site starts at €1500. An online store at €3500. An application at €4000. A visual identity at €1200. After our first call, I send you a fixed price within 48 hours.',
  },
  {
    id: 'duree',
    question: 'How long does it take?',
    answer:
      'A website: 2 to 3 weeks. A store: 4 to 6 weeks. An application: 4 to 8 weeks. You get a precise date with the quote.',
  },
  {
    id: 'technique',
    question: 'I don\'t know anything technical. Is that a problem?',
    answer:
      'No, it\'s actually the norm. I explain what you need to know without overwhelming you. You make informed decisions without having to learn the trade.',
  },
  {
    id: 'paiement',
    question: 'How does payment work?',
    answer:
      'Half on signing, half on delivery. For longer projects, payment can split into three steps. Bank transfer, Stripe or direct debit.',
  },
  {
    id: 'modifications',
    question: 'How many revisions can I ask for?',
    answer:
      'As many as needed within the agreed scope. If you want to add something we hadn\'t planned, I price it, you validate, I add it. No surprise invoice.',
  },
  {
    id: 'autonomie',
    question: 'Can I edit my site myself after delivery?',
    answer:
      'Yes, I set up a simple admin area. To change text, add a page, swap an image, you don\'t need anyone. For deeper changes, I\'m here.',
  },
  {
    id: 'apres-lancement',
    question: 'What happens after launch?',
    answer:
      '30 days of complimentary fixes after going live. After that, either we work on demand for small changes, or I set up a monthly retainer for those who want a regular presence.',
  },
  {
    id: 'hebergement',
    question: 'What about hosting?',
    answer:
      'Included for the first year in most cases. After that, between €0 and €20 per month, paid directly by you to the host. No hidden markup.',
  },
  {
    id: 'clients',
    question: 'What kind of clients do you work with?',
    answer:
      'Any kind. Freelancers, shops, restaurants, associations, startups, SMBs. As long as you have something to put online, I can help.',
  },
  {
    id: 'reprise',
    question: 'I already have a site, can you take it over?',
    answer:
      'Yes, after an audit. I look at what you have and tell you honestly if it\'s recoverable or if rebuilding makes more sense. I don\'t charge anything until we agree on the next steps.',
  },
  {
    id: 'securite-rgpd',
    question: 'Is it secure, GDPR-compliant?',
    answer:
      'Yes, by default. Baseline security, GDPR compliance (cookies, legal notices, register), backups. We discuss it during the brief, I deliver something flawless.',
  },
  {
    id: 'localisation',
    question: 'Where are you based?',
    answer:
      'In France. I work mostly remote, but we can meet in person if you\'re in the Paris region.',
  },
];

export const faqByLocale: Record<AppLocale, FaqItem[]> = { fr, en };
export const faq = fr;
