import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { FadeIn } from '@/components/animations/fade-in';
import { ScrambleText } from '@/components/animations/scramble-text';
import { LegalSection } from '@/components/ui/legal-content';
import { SITE_CONFIG } from '@/lib/constants';

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'legal' });
  return {
    title: t('mentionsTitle'),
    description: t('mentionsMetaDescription'),
    robots: { index: true, follow: true },
  };
}

export default async function MentionsLegalesPage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'legal' });
  const isFr = locale === 'fr';

  return (
    <main className="bg-cream">
      <header className="container-x pb-16 pt-32 lg:pt-40">
        <FadeIn>
          <div className="mb-10 flex items-baseline gap-3 font-mono text-[11px] uppercase tracking-[0.22em] text-ink/55">
            <ScrambleText text={t('mentionsEyebrow')} className="text-tomato" />
            <span aria-hidden="true" className="h-px w-6 bg-ink/20" />
            <ScrambleText text={isFr ? 'Cadre légal' : 'Legal frame'} delay={120} />
          </div>
        </FadeIn>

        <FadeIn delay={0.05}>
          <h1 className="max-w-4xl text-balance font-sans text-[clamp(2rem,5vw,4.5rem)] font-medium leading-[1] tracking-[-0.02em] text-ink">
            <span className="block">
              <span className="font-display text-[clamp(2.5rem,7vw,6rem)] italic font-normal leading-[0.95] text-tomato">
                {t('mentionsHeading')}
              </span>
            </span>
          </h1>
        </FadeIn>

        <FadeIn delay={0.1}>
          <p className="mt-10 max-w-2xl text-pretty text-lg leading-relaxed text-ink/70">
            {t('mentionsDescription')}
          </p>
        </FadeIn>
      </header>

      <article className="container-x mx-auto max-w-3xl pb-32 lg:pb-40">
        <LegalSection title={isFr ? 'Éditeur du site' : 'Site publisher'}>
          <p>
            {isFr ? 'Le site ' : 'The site '}
            <strong>daratlas.fr</strong>
            {isFr
              ? ' est édité par Sami Agouram, exerçant en entreprise individuelle (micro-entreprise) sous le nom commercial '
              : ' is published by Sami Agouram, operating as a sole proprietor (micro-entreprise) under the commercial name '}
            <strong>Dar Atlas</strong>.
          </p>
          <p>
            <strong>{isFr ? 'Siège social' : 'Registered office'} :</strong>{' '}
            {SITE_CONFIG.address.street}, {SITE_CONFIG.address.postalCode}{' '}
            {SITE_CONFIG.address.city}, {SITE_CONFIG.address.country}.
          </p>
          <p>
            <strong>SIREN :</strong> {SITE_CONFIG.legal.siren}.<br />
            <strong>{isFr ? 'Code APE' : 'NACE code'} :</strong> {SITE_CONFIG.legal.ape}{' '}
            ({isFr ? 'programmation informatique' : 'computer programming'}).
          </p>
          <p>
            <strong>Email :</strong>{' '}
            <a href={`mailto:${SITE_CONFIG.contactEmail}`}>{SITE_CONFIG.contactEmail}</a>.
          </p>
          <p>
            <strong>{isFr ? 'Directeur de la publication' : 'Publication director'} :</strong>{' '}
            Sami Agouram.
          </p>
        </LegalSection>

        <LegalSection title={isFr ? 'Hébergeur' : 'Hosting provider'}>
          <p>
            {isFr ? 'Le site est hébergé par ' : 'The site is hosted by '}
            <strong>OVHcloud</strong>
            {isFr
              ? ', SAS au capital de 50 000 000 euros, immatriculée au RCS de Lille Métropole sous le numéro 424 761 419 00045.'
              : ', SAS with a share capital of 50,000,000 euros, registered with the Lille Métropole Trade Register under number 424 761 419 00045.'}
          </p>
          <p>
            <strong>{isFr ? 'Siège social' : 'Registered office'} :</strong> 2 rue Kellermann,
            59100 Roubaix, France.
            <br />
            <strong>{isFr ? 'Téléphone' : 'Phone'} :</strong> 1007.
          </p>
        </LegalSection>

        <LegalSection title={isFr ? 'Propriété intellectuelle' : 'Intellectual property'}>
          <p>
            {isFr
              ? 'L\'ensemble des contenus présents sur le site daratlas.fr (textes, images, logos, graphismes, mises en page, code source) sont la propriété exclusive de Sami Agouram, sauf mention contraire explicite. Les photographies en illustration de la section Travaux proviennent d\'Unsplash et sont utilisées dans le cadre de leur licence.'
              : 'All content on daratlas.fr (texts, images, logos, graphics, layouts, source code) is the exclusive property of Sami Agouram, unless explicitly stated otherwise. The illustrative photographs in the Work section come from Unsplash and are used under their license.'}
          </p>
          <p>
            {isFr
              ? 'Toute reproduction, représentation, modification, publication ou adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite sans autorisation écrite préalable.'
              : 'Any reproduction, representation, modification, publication or adaptation of all or part of the site elements, by any means or process, is prohibited without prior written authorization.'}
          </p>
        </LegalSection>

        <LegalSection title={isFr ? 'Limitation de responsabilité' : 'Liability'}>
          <p>
            {isFr
              ? 'Dar Atlas met tout en œuvre pour fournir des informations exactes et à jour, mais ne saurait être tenu responsable des erreurs, omissions ou indisponibilités du site.'
              : 'Dar Atlas does its best to provide accurate and up-to-date information but cannot be held responsible for errors, omissions or downtime of the site.'}
          </p>
          <p>
            {isFr
              ? 'Le site peut contenir des liens vers des ressources externes. Dar Atlas n\'exerce aucun contrôle sur ces sites et décline toute responsabilité quant à leur contenu.'
              : 'The site may contain links to external resources. Dar Atlas exercises no control over those sites and disclaims all responsibility for their content.'}
          </p>
        </LegalSection>

        <LegalSection title={isFr ? 'Données personnelles' : 'Personal data'}>
          <p>
            {isFr
              ? 'Le traitement des données personnelles est détaillé dans la '
              : 'Personal data processing is detailed in the '}
            <a href="/politique-confidentialite">
              {isFr ? 'politique de confidentialité' : 'privacy policy'}
            </a>
            .
          </p>
        </LegalSection>

        <LegalSection title={isFr ? 'Droit applicable' : 'Governing law'}>
          <p>
            {isFr
              ? 'Le site et les présentes mentions légales sont soumis au droit français. En cas de litige, et à défaut de résolution amiable, les tribunaux français seront seuls compétents.'
              : 'The site and these legal notices are governed by French law. In case of dispute, and failing amicable resolution, French courts shall have sole jurisdiction.'}
          </p>
        </LegalSection>
      </article>
    </main>
  );
}
