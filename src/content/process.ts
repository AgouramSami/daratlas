import type { AppLocale } from '@/i18n/routing';
import type { ProcessStep } from '@/types';

const fr: ProcessStep[] = [
  {
    id: 'premier-echange',
    number: '01',
    weeks: '30 minutes',
    title: 'Premier échange',
    description:
      'Un appel pour comprendre votre projet, votre délai, votre budget. Vous posez vos questions, je pose les miennes. Vous repartez avec un compte-rendu écrit, un devis fixe et un planning.',
    deliverables: [
      'Compte-rendu écrit',
      'Devis fixe',
      'Planning',
    ],
  },
  {
    id: 'conception',
    number: '02',
    weeks: 'Phase principale',
    title: 'Conception',
    description:
      'Je développe directement votre site ou votre app en code, dès la première semaine. Vous le voyez évoluer en temps réel sur une URL privée, avec un point hebdomadaire et un canal de discussion à votre choix.',
    deliverables: [
      'Lien de prévisualisation dès la première semaine',
      'Point hebdomadaire',
      'Canal de discussion à votre choix',
    ],
  },
  {
    id: 'affinage',
    number: '03',
    weeks: 'Avant la livraison',
    title: 'Affinage',
    description:
      'J\'ajuste avec vous les textes, les images, les détails. C\'est le moment où votre projet devient vraiment le vôtre. Plusieurs allers-retours, des essais en conditions réelles, et le code source.',
    deliverables: [
      'Allers-retours pour caler le contenu',
      'Essais en conditions réelles, mobile et desktop',
      'Code source',
    ],
  },
  {
    id: 'lancement',
    number: '04',
    weeks: 'Le jour J',
    title: 'Lancement',
    description:
      'Déploiement, configuration du nom de domaine, vérifications, formation pour que vous puissiez gérer la suite. 30 jours de corrections offertes après la mise en ligne.',
    deliverables: [
      'Votre site ou votre app en ligne',
      'Session de formation',
      'Garantie 30 jours sur les bugs',
    ],
  },
];

const en: ProcessStep[] = [
  {
    id: 'premier-echange',
    number: '01',
    weeks: '30 minutes',
    title: 'First conversation',
    description:
      'A call to understand your project, your timeline, your budget. You ask your questions, I ask mine. You leave with a written summary, a fixed quote and a schedule.',
    deliverables: [
      'Written summary',
      'Fixed quote',
      'Schedule',
    ],
  },
  {
    id: 'conception',
    number: '02',
    weeks: 'Build phase',
    title: 'Design',
    description:
      'I develop your site or your app directly in code from week one. You watch it grow in real time on a private URL, with a weekly check-in and a discussion channel of your choice.',
    deliverables: [
      'Preview link from the first week',
      'Weekly check-in',
      'Discussion channel of your choice',
    ],
  },
  {
    id: 'affinage',
    number: '03',
    weeks: 'Before delivery',
    title: 'Refinement',
    description:
      'I adjust with you the copy, the images, the details. This is when your project truly becomes yours. Rounds of revisions, real-world testing, and the source code.',
    deliverables: [
      'Rounds of revisions on the content',
      'Real-world testing, mobile and desktop',
      'Source code',
    ],
  },
  {
    id: 'lancement',
    number: '04',
    weeks: 'Launch day',
    title: 'Launch',
    description:
      'Deployment, domain configuration, checks, training so you can manage the next steps. 30 days of complimentary fixes after going live.',
    deliverables: [
      'Your site or app live',
      'Training session',
      '30-day bug guarantee',
    ],
  },
];

export const processStepsByLocale: Record<AppLocale, ProcessStep[]> = { fr, en };
export const processSteps = fr;
