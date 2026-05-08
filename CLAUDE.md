# CLAUDE.md

Instructions principales pour Claude Code sur ce projet. À lire en premier à chaque session.

## Contexte du projet

Dar Atlas est un studio web français basé à Villabé (Île-de-France). Ce repo contient le site vitrine officiel du studio, à déployer sur le domaine daratlas.fr.

L'objectif du site : convertir les visiteurs en clients via un design fort, un positionnement clair (sites sécurisés par défaut) et un parcours fluide vers le formulaire de contact.

Référence visuelle principale à étudier : https://atlas-studio.dev. Reproduire fidèlement la structure, les animations, le ton et le layout, en adaptant pour Dar Atlas.

Pour tout le contenu textuel (services, FAQ, accroches, témoignages, etc.), lire le fichier dar-atlas-brand-content.md à la racine du projet. Ce fichier est la source unique de vérité pour les textes.

## Stack technique imposée

Framework : Next.js 14 avec App Router et TypeScript strict.
Styling : Tailwind CSS, configuration custom avec la palette Dar Atlas.
Animations : Framer Motion pour les animations d'entrée, hover et scroll.
Internationalisation : next-intl, FR par défaut, EN comme langue secondaire.
Déploiement cible : Vercel.
Gestion de package : pnpm de préférence, sinon npm.
Linting : ESLint avec config Next.js, Prettier pour le formatage.

## Conventions de code

Respecter strictement ces règles dans tous les fichiers générés :

Pas de tirets cadratins (le caractère em-dash) dans les textes, commentaires ou contenus visibles. Utiliser des virgules, deux-points ou parenthèses à la place.

Pas d'émoticônes ni d'emojis dans les contenus visibles, les commentaires de code ou les messages de commit.

Composants React : function components avec TypeScript, props typées avec des interfaces, pas de classes.

Nommage : kebab-case pour les noms de fichiers (hero-section.tsx), PascalCase pour les composants (HeroSection), camelCase pour les variables et fonctions.

Imports : ordonnés (React, libs externes, composants internes, types, styles), avec le path alias @ pour la racine src.

Commentaires : minimum nécessaire, en français, factuels. Pas de commentaire qui paraphrase le code.

Accessibilité : balises sémantiques HTML5, aria-labels où pertinent, navigation clavier complète, contrastes WCAG AA minimum.

## Identité de marque (résumé)

Nom : Dar Atlas.
Tagline : Code propre. Sites rapides. Zéro surprise.
Positionnement : studio web où le tech lead qui scope le projet est aussi celui qui code et qui sécurise.
Différenciateur : sécurité par défaut sur tous les livrables.

Palette (à configurer dans tailwind.config.ts) :
- noir profond : #0A0A0A
- blanc cassé : #FAFAF7
- terracotta : #C65D3E (accent principal, CTAs)
- vert oasis : #1E5C46 (accent secondaire, confiance)
- gris pierre : #7A7A75 (texte secondaire)

Typographie :
- Titres : Geist Sans (via next/font)
- Corps : Geist Sans ou Inter
- Code et accents techniques : Geist Mono ou JetBrains Mono

## Structure du site (one-page scrollable avec sous-pages)

Page d'accueil, sections dans l'ordre :

1. Header sticky avec navigation (Travaux, Services, Process, Tarifs, Équipe, FAQ) et sélecteur de langue FR/EN.
2. Hero : badge de disponibilité (style "1 slot ouvert"), titre principal en deux temps avec mot italicisé, sous-titre, deux CTAs (primaire "Démarrer un projet", secondaire "Voir les réalisations"), 4 stats en bas.
3. Marquee : ticker horizontal défilant en boucle avec les éléments du brand content.
4. Projet featured : carte large avec mockup, métriques (3 chiffres clés), témoignage, stack technique, lien vers le live.
5. Services : 4 cartes (Sites web, E-commerce, IA, Audit sécurité) avec prix de départ, durée, inclus, stack.
6. Process : 4 étapes en timeline verticale avec semaines et livrables.
7. Portfolio : grille de cartes projet (nom, année, type, durée, stack, lien live).
8. Stack utilisée : logos défilants des technologies.
9. Témoignages : 2 ou 3 cartes citation avec avatar et fonction.
10. Équipe : profils avec rôle et stack.
11. FAQ : accordéons (12 questions du brand content).
12. CTA final : "Tu as un projet ? On le ship."
13. Footer : mentions légales, liens utiles, copyright.

Sous-pages à créer :
- /contact : formulaire de prise de contact (nom, email, type de projet, budget, description, fichiers).
- /pricing : page détaillée des tarifs avec comparatif.
- /mentions-legales : page légale RGPD-compliant.
- /politique-confidentialite : politique de cookies et données.

## Animations attendues

Apparition : fade in plus translation Y au scroll (Intersection Observer ou Framer Motion useInView).
Marquee : défilement horizontal CSS infini, 30 à 40 secondes par cycle.
Cartes : hover avec scale léger (1.02) et changement de couleur de bordure.
Curseur custom : optionnel mais bienvenu, comme atlas-studio.dev (cercle qui suit la souris, change de taille sur les éléments interactifs).
Transitions de page : fade discret entre les routes, durée 200 à 300ms.
Sticky header : background flouté quand l'utilisateur scrolle au-delà du hero.

## Exigences techniques

Performance : score Lighthouse 95 minimum sur Performance, Accessibility, Best Practices et SEO. Images via next/image, fonts via next/font, code splitting automatique.

Sécurité : headers configurés dans next.config.js (Content-Security-Policy, Strict-Transport-Security, X-Frame-Options DENY, X-Content-Type-Options nosniff, Referrer-Policy strict-origin-when-cross-origin). Pas de secrets dans le code, tout en variables d'environnement.

SEO : sitemap.xml généré automatiquement, robots.txt, OpenGraph et Twitter Cards complets, JSON-LD schema.org (Organization, LocalBusiness).

RGPD : bannière cookies avec consentement granulaire (analytics, marketing), pages mentions légales et politique de confidentialité accessibles.

Responsive : mobile first, breakpoints Tailwind par défaut (sm 640, md 768, lg 1024, xl 1280, 2xl 1536).

Accessibilité : navigation clavier complète, focus rings visibles, alt texts sur toutes les images, aria-labels sur les boutons icônes.

## Structure de dossiers attendue

```
.
├── CLAUDE.md
├── README.md
├── dar-atlas-brand-content.md
├── package.json
├── tsconfig.json
├── next.config.js
├── tailwind.config.ts
├── postcss.config.js
├── .env.example
├── .eslintrc.json
├── .prettierrc
├── public/
│   ├── images/
│   ├── fonts/
│   ├── favicon.ico
│   └── robots.txt
└── src/
    ├── app/
    │   ├── layout.tsx
    │   ├── page.tsx
    │   ├── contact/
    │   │   └── page.tsx
    │   ├── pricing/
    │   │   └── page.tsx
    │   ├── mentions-legales/
    │   │   └── page.tsx
    │   ├── politique-confidentialite/
    │   │   └── page.tsx
    │   ├── sitemap.ts
    │   └── robots.ts
    ├── components/
    │   ├── layout/
    │   │   ├── header.tsx
    │   │   ├── footer.tsx
    │   │   └── cookie-banner.tsx
    │   ├── sections/
    │   │   ├── hero.tsx
    │   │   ├── marquee.tsx
    │   │   ├── featured-project.tsx
    │   │   ├── services.tsx
    │   │   ├── process.tsx
    │   │   ├── portfolio.tsx
    │   │   ├── stack.tsx
    │   │   ├── testimonials.tsx
    │   │   ├── team.tsx
    │   │   ├── faq.tsx
    │   │   └── cta.tsx
    │   ├── ui/
    │   │   ├── button.tsx
    │   │   ├── badge.tsx
    │   │   ├── card.tsx
    │   │   └── accordion.tsx
    │   └── animations/
    │       ├── fade-in.tsx
    │       └── custom-cursor.tsx
    ├── lib/
    │   ├── utils.ts
    │   └── constants.ts
    ├── content/
    │   ├── services.ts
    │   ├── projects.ts
    │   ├── faq.ts
    │   └── testimonials.ts
    └── types/
        └── index.ts
```

## Commandes utiles

Installation des dépendances : pnpm install (ou npm install).
Lancement dev : pnpm dev (port 3000 par défaut).
Build production : pnpm build.
Linting : pnpm lint.
Type checking : pnpm type-check.
Déploiement : vercel deploy ou push sur main si CI configurée.

## Workflow attendu

1. Lire ce fichier CLAUDE.md en entier.
2. Lire dar-atlas-brand-content.md pour absorber tout le contenu textuel.
3. Étudier la référence visuelle https://atlas-studio.dev (structure, animations, espacements, typo).
4. Proposer un plan détaillé avant de coder : structure des composants, ordre de construction, choix techniques à valider.
5. Initialiser le projet Next.js avec la stack ci-dessus.
6. Configurer Tailwind avec la palette Dar Atlas.
7. Construire les composants UI de base avant les sections.
8. Construire la page d'accueil section par section, dans l'ordre listé.
9. Tester le rendu à chaque étape via npm run dev.
10. Construire les sous-pages.
11. Configurer SEO, sécurité, RGPD.
12. Auditer Lighthouse et corriger jusqu'à 95+.

## Mentions légales (à intégrer dans le footer)

Dar Atlas
Entreprise individuelle exerçant sous le nom commercial "Dar Atlas"
SIREN : en cours d'attribution (à mettre à jour quand reçu)
APE : 62.01Z, programmation informatique
Siège : 29 rue Gabriel Péri, 91100 Villabé, France
Email : contact@daratlas.fr (à activer)
Hébergeur : OVHcloud, 2 rue Kellermann, 59100 Roubaix

## Ne pas faire

Pas de templates ou de starters tiers (pas de boilerplate type Vercel commerce). Construction from scratch.
Pas de bibliothèques de composants type shadcn, Material UI, Chakra. Composants custom Tailwind.
Pas de CMS pour ce site (le contenu est codé en dur dans /src/content/).
Pas d'images de stock générique. Placeholders propres en attendant les vrais assets.
Pas de Lorem Ipsum. Tous les textes viennent de dar-atlas-brand-content.md.
Pas de secrets en clair. Tout via .env.local et .env.example.

## Notes additionnelles

L'EI Dar Atlas est en cours de création (dossier INPI déposé). Le SIRET sera reçu dans 1 à 4 semaines. Mettre un placeholder dans le footer en attendant.

Le site doit être livrable en production avant la fin du mois.

En cas de doute sur un choix technique ou éditorial, demander avant de coder. Privilégier toujours la simplicité et la maintenabilité sur la sophistication.
