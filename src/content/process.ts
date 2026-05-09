import type { AppLocale } from '@/i18n/routing';
import type { ProcessStep } from '@/types';

const fr: ProcessStep[] = [
  {
    id: 'on-sappelle',
    number: '01',
    weeks: '30 minutes',
    title: 'On s\'appelle',
    description:
      'Un appel de 30 minutes pour qu\'on comprenne votre projet, votre délai, votre budget. Vous posez vos questions, on pose les nôtres.',
    deliverables: [
      'Compte-rendu écrit',
      'Devis fixe',
      'Planning',
    ],
  },
  {
    id: 'on-construit',
    number: '02',
    weeks: 'Phase principale',
    title: 'On construit',
    description:
      'On construit directement votre site ou votre app en code, dès la première semaine. Vous le voyez évoluer en temps réel sur une URL privée, plutôt que d\'attendre une longue phase de maquette.',
    deliverables: [
      'Lien de prévisualisation dès la première semaine',
      'Point hebdomadaire',
      'Canal de discussion à votre choix',
    ],
  },
  {
    id: 'on-affine',
    number: '03',
    weeks: 'Avant la livraison',
    title: 'On affine',
    description:
      'On ajuste ensemble : textes, images, détails. C\'est le moment où votre site devient vraiment le vôtre.',
    deliverables: [
      'Allers-retours pour caler le contenu',
      'Essais en conditions réelles, mobile et desktop',
      'Code source',
    ],
  },
  {
    id: 'on-lance',
    number: '04',
    weeks: 'Le jour J',
    title: 'On lance',
    description:
      'Mise en ligne, configuration du nom de domaine, vérifications, formation pour que vous puissiez gérer la suite. 30 jours de corrections gratuites.',
    deliverables: [
      'Votre site ou votre app en ligne',
      'Session de formation',
      'Garantie 30 jours sur les bugs',
    ],
  },
];

const en: ProcessStep[] = [
  {
    id: 'on-sappelle',
    number: '01',
    weeks: '30 minutes',
    title: 'We talk',
    description:
      'A 30-minute call so we can understand your project, your timeline, your budget. You ask your questions, we ask ours.',
    deliverables: [
      'Written summary',
      'Fixed quote',
      'Schedule',
    ],
  },
  {
    id: 'on-construit',
    number: '02',
    weeks: 'Build phase',
    title: 'We build',
    description:
      'We build your site or your app directly in code from week one. You watch it grow in real time on a private URL, rather than waiting on a long mockup phase.',
    deliverables: [
      'Preview link from the first week',
      'Weekly check-in',
      'Discussion channel of your choice',
    ],
  },
  {
    id: 'on-affine',
    number: '03',
    weeks: 'Before delivery',
    title: 'We polish',
    description:
      'We adjust together: copy, images, details. This is when your site truly becomes yours.',
    deliverables: [
      'Rounds of revisions on the content',
      'Real-world testing, mobile and desktop',
      'Source code',
    ],
  },
  {
    id: 'on-lance',
    number: '04',
    weeks: 'Launch day',
    title: 'We launch',
    description:
      'Going live, domain configuration, checks, training so you can manage the next steps. 30 days of free fixes.',
    deliverables: [
      'Your site or app live',
      'Training session',
      '30-day bug guarantee',
    ],
  },
];

export const processStepsByLocale: Record<AppLocale, ProcessStep[]> = { fr, en };
export const processSteps = fr;
