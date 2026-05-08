# Dar Atlas, site officiel

Site vitrine du studio Dar Atlas, déployé sur [daratlas.fr](https://daratlas.fr).

Studio web français basé à Villabé. On conçoit, on développe, on sécurise et on déploie des sites et applications full-stack pour founders, PME et indépendants.

## Stack

- **Framework** : Next.js 14 (App Router) avec TypeScript strict
- **Styling** : Tailwind CSS, palette custom Dar Atlas, fonts Geist via `next/font`
- **Animations** : Framer Motion pour les apparitions au scroll et le curseur custom
- **i18n** : next-intl 3, FR par défaut sans préfixe, EN sous `/en`, hreflang dans le sitemap
- **Email** : Resend pour le formulaire de contact
- **Analytics** : Plausible (cookieless, sans bannière de consentement)
- **Hébergement** : Vercel (production), OVH pour le DNS

## Setup local

Pré-requis : Node 20+, pnpm 10+.

```bash
# Cloner et installer
pnpm install

# Variables d'environnement
cp .env.example .env.local
# Renseigner RESEND_API_KEY, NEXT_PUBLIC_PLAUSIBLE_DOMAIN si actifs

# Lancer le dev
pnpm dev
# Ouvre http://localhost:3000

# Type-check
pnpm type-check

# Lint
pnpm lint

# Build production
pnpm build
pnpm start
```

## Variables d'environnement

Voir `.env.example`. Variables clés :

- `NEXT_PUBLIC_SITE_URL` : URL canonique, utilisée pour SEO et metadata. Vaut `https://daratlas.fr` en prod.
- `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` : domaine Plausible. Si non défini, le script analytics ne se charge pas.
- `RESEND_API_KEY` : clé API Resend pour l'envoi des emails du formulaire de contact. Si non définie, les soumissions sont loggées côté serveur sans erreur visiteur (mode placeholder pendant l'attente d'activation de l'email pro).
- `CONTACT_EMAIL_TO` : destinataire des emails de contact. Vaut `contact@daratlas.fr`.
- `CONTACT_EMAIL_FROM` : expéditeur des emails de contact. Vaut `site@daratlas.fr`.

## Structure du projet

```
.
├── CLAUDE.md                          Instructions Claude Code
├── dar-atlas-brand-content.md         Source des textes (brand book)
├── README.md                          Ce fichier
├── next.config.js                     Headers de sécurité, plugin next-intl
├── tailwind.config.ts                 Palette Dar Atlas, fonts, animations
├── tsconfig.json                      TS strict, alias @/*
├── public/                            Assets statiques (à compléter avec les vrais visuels clients)
└── src/
    ├── app/
    │   ├── layout.tsx                 Root layout minimal (passthrough)
    │   ├── globals.css                Styles globaux, marquee keyframes
    │   ├── icon.svg                   Favicon SVG
    │   ├── apple-icon.svg             Apple touch icon
    │   ├── manifest.ts                PWA manifest
    │   ├── opengraph-image.tsx        OG image générée à la volée (1200x630)
    │   ├── sitemap.ts                 Sitemap avec hreflang FR/EN
    │   ├── robots.ts                  robots.txt
    │   ├── api/
    │   │   └── contact/route.ts       POST /api/contact, envoi via Resend
    │   └── [locale]/
    │       ├── layout.tsx             Layout localisé (html lang, providers, header, footer)
    │       ├── page.tsx               Page d'accueil
    │       ├── contact/page.tsx
    │       ├── pricing/page.tsx
    │       ├── mentions-legales/page.tsx
    │       └── politique-confidentialite/page.tsx
    ├── components/
    │   ├── animations/                FadeIn, CustomCursor
    │   ├── layout/                    Header, Footer, Logo, LocaleSwitch, SkipLink, JsonLd, Plausible
    │   ├── sections/                  Sections de la home et formulaire de contact
    │   └── ui/                        Button, Badge, Card, Accordion, PageHeader, LegalSection
    ├── content/                       Contenus localisés FR/EN (services, projets, FAQ, équipe, process, engagements)
    ├── i18n/
    │   ├── routing.ts                 Configuration next-intl (locales, navigation)
    │   └── request.ts                 Chargement des messages selon la requête
    ├── lib/                           constants, utils (cn, formatPrice), jsonld
    ├── messages/                      Strings UI traduites (fr.json, en.json)
    ├── middleware.ts                  Middleware next-intl
    └── types/                         Types partagés
```

## Déploiement Vercel

### Première mise en ligne

1. Créer un projet Vercel et le connecter au repo Git.
2. Dans **Project Settings → Environment Variables**, renseigner :
   - `NEXT_PUBLIC_SITE_URL=https://daratlas.fr`
   - `NEXT_PUBLIC_PLAUSIBLE_DOMAIN=daratlas.fr`
   - `RESEND_API_KEY` (clé fournie par Resend une fois le domaine vérifié)
   - `CONTACT_EMAIL_TO=contact@daratlas.fr`
   - `CONTACT_EMAIL_FROM=site@daratlas.fr`
3. Déclencher le premier déploiement.

### DNS depuis OVH

Dar Atlas possède le domaine `daratlas.fr` chez OVH. Pour pointer le domaine vers Vercel :

1. Dans **Vercel → Project → Settings → Domains**, ajouter `daratlas.fr` puis `www.daratlas.fr`. Vercel affiche les enregistrements DNS attendus.
2. Dans l'**espace client OVH → Domaines → daratlas.fr → Zone DNS**, configurer :
   - Enregistrement `A` pour `daratlas.fr` vers `76.76.21.21` (IP Vercel)
   - Enregistrement `CNAME` pour `www.daratlas.fr` vers `cname.vercel-dns.com`
3. Attendre la propagation DNS (en général 5 à 30 minutes, jusqu'à 24 heures).
4. Vercel détecte automatiquement la propagation et émet un certificat SSL Let's Encrypt.

### Activation Resend

1. Créer un compte sur [resend.com](https://resend.com).
2. Ajouter le domaine `daratlas.fr` et configurer les enregistrements DNS demandés (SPF, DKIM, DMARC) côté OVH.
3. Une fois le domaine vérifié, créer une clé API et la coller dans la variable `RESEND_API_KEY` sur Vercel.
4. Redéployer pour activer l'envoi.

### Activation Plausible

1. Créer un site sur [plausible.io](https://plausible.io) avec le domaine `daratlas.fr`.
2. Définir `NEXT_PUBLIC_PLAUSIBLE_DOMAIN=daratlas.fr` sur Vercel.
3. Redéployer. Le script `plausible.io/js/script.js` est chargé en `afterInteractive` et n'utilise aucun cookie.

## Conventions de code

Les conventions complètes sont décrites dans `CLAUDE.md` à la racine. Résumé :

- Pas de tirets cadratins (em-dash) dans les contenus, commentaires ou messages de commit.
- Pas d'emojis dans les contenus visibles, le code ou les commits.
- Function components avec props typées via interfaces, pas de classes.
- kebab-case pour les noms de fichiers, PascalCase pour les composants, camelCase pour les variables.
- Commentaires en français, factuels, minimum nécessaire.
- Sémantique HTML5, aria-labels où pertinent, navigation clavier complète.

## Mise à jour du contenu

Tous les textes éditoriaux sont dans `src/content/` (TypeScript) et `src/messages/` (JSON). Pour modifier :

- **Services, prix, durées, technos** : `src/content/services.ts`
- **Projets portfolio** : `src/content/projects.ts`
- **FAQ** : `src/content/faq.ts`
- **Process** : `src/content/process.ts`
- **Équipe** : `src/content/team.ts`
- **Engagements** : `src/content/engagements.ts`
- **Strings UI** (header, footer, CTAs, formulaire) : `src/messages/fr.json` et `src/messages/en.json`
- **Coordonnées, mentions légales** : `src/lib/constants.ts`

Chaque fichier de contenu de domaine exporte un `Record<AppLocale, T[]>` (par exemple `servicesByLocale`) pour la version localisée.

## Sécurité

Les en-têtes de sécurité sont configurés dans `next.config.js` :

- `Content-Security-Policy` strict (pas de `'unsafe-eval'` en prod sauf script-src)
- `Strict-Transport-Security` avec preload
- `X-Frame-Options: DENY`
- `X-Content-Type-Options: nosniff`
- `Referrer-Policy: strict-origin-when-cross-origin`
- `Permissions-Policy` : caméra, micro, géolocalisation désactivés

Pas de secrets en clair dans le code. Toutes les variables sensibles passent par `.env.local` (ignoré par git).

## Accessibilité

- Skip link en début de body (visible au focus clavier)
- Focus rings visibles avec `outline-terracotta`
- Contrastes WCAG AA respectés (vérifier après ajout de visuels clients)
- `prefers-reduced-motion` : marquee, fade-in et curseur custom désactivés
- Curseur custom désactivé sur écrans tactiles (`pointer: coarse`)
- Toutes les balises sémantiques HTML5

## Performance

- Pages pré-rendues statiquement (SSG)
- Images via `next/image` avec formats AVIF et WebP automatiques
- Fonts Geist auto-hébergées via `next/font`, zéro requête runtime
- Code splitting automatique par route
- First Load JS partagé : ~87 kB

## Maintenance

Pour ajouter un nouveau service, projet ou question FAQ :

1. Modifier les fichiers de contenu correspondants dans `src/content/` (versions FR et EN).
2. Type-check : `pnpm type-check`.
3. Tester en dev : `pnpm dev`.
4. Commit, push, déploiement Vercel automatique.

Pour activer l'envoi d'emails du formulaire de contact, il suffit de définir `RESEND_API_KEY` sur Vercel et redéployer. Sans clé, les soumissions sont loggées côté serveur sans erreur visible côté visiteur.
