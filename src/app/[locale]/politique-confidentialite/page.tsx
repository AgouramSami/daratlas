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
    title: t('privacyTitle'),
    description: t('privacyMetaDescription'),
    robots: { index: true, follow: true },
  };
}

export default async function PolitiqueConfidentialitePage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'legal' });
  const isFr = locale === 'fr';

  return (
    <main className="bg-cream">
      <header className="container-x pb-16 pt-32 lg:pt-40">
        <FadeIn>
          <div className="mb-10 flex items-baseline gap-3 font-mono text-[11px] uppercase tracking-[0.22em] text-ink/55">
            <ScrambleText text={t('privacyEyebrow')} className="text-tomato" />
            <span aria-hidden="true" className="h-px w-6 bg-ink/20" />
            <ScrambleText text={isFr ? 'Vos données' : 'Your data'} delay={120} />
          </div>
        </FadeIn>

        <FadeIn delay={0.05}>
          <h1 className="max-w-4xl text-balance font-sans text-[clamp(2rem,5vw,4.5rem)] font-medium leading-[1] tracking-[-0.02em] text-ink">
            <span className="block">
              <span className="font-display text-[clamp(2.5rem,7vw,6rem)] italic font-normal leading-[0.95] text-tomato">
                {t('privacyHeading')}
              </span>
            </span>
          </h1>
        </FadeIn>

        <FadeIn delay={0.1}>
          <p className="mt-10 max-w-2xl text-pretty text-lg leading-relaxed text-ink/70">
            {t('privacyDescription')}
          </p>
        </FadeIn>
      </header>

      <article className="container-x mx-auto max-w-3xl pb-32 lg:pb-40">
        <LegalSection title={isFr ? 'Responsable du traitement' : 'Data controller'}>
          <p>
            {isFr ? 'Le responsable du traitement des données est ' : 'The data controller is '}
            <strong>Sami Agouram</strong>
            {isFr ? ', exerçant sous le nom commercial ' : ', operating under the commercial name '}
            <strong>Dar Atlas</strong>, {SITE_CONFIG.address.street},{' '}
            {SITE_CONFIG.address.postalCode} {SITE_CONFIG.address.city}.
          </p>
          <p>
            {isFr
              ? 'Pour toute question relative à vos données personnelles, écrivez à '
              : 'For any question about your personal data, write to '}
            <a href={`mailto:${SITE_CONFIG.contactEmail}`}>{SITE_CONFIG.contactEmail}</a>.
          </p>
        </LegalSection>

        <LegalSection
          title={isFr ? 'Données collectées via le formulaire de contact' : 'Data collected via the contact form'}
        >
          <p>
            {isFr
              ? 'Lorsque vous remplissez le formulaire de contact, on collecte : votre nom, votre email, le type de projet, le budget estimé (optionnel), un éventuel lien vers un site existant, et la description de votre projet.'
              : 'When you fill out the contact form, we collect: your name, email, project type, estimated budget (optional), an optional link to an existing site, and the description of your project.'}
          </p>
          <p>
            <strong>{isFr ? 'Finalité' : 'Purpose'} :</strong>{' '}
            {isFr
              ? 'répondre à votre demande, vous proposer un devis, suivre la relation client.'
              : 'reply to your request, send you a quote, manage the client relationship.'}
          </p>
          <p>
            <strong>{isFr ? 'Base légale' : 'Legal basis'} :</strong>{' '}
            {isFr
              ? 'exécution de mesures précontractuelles à votre demande (article 6-1-b du RGPD).'
              : 'pre-contractual measures at your request (Article 6-1-b GDPR).'}
          </p>
          <p>
            <strong>{isFr ? 'Durée de conservation' : 'Retention period'} :</strong>{' '}
            {isFr
              ? '3 ans après le dernier contact, puis archivage ou suppression.'
              : '3 years after the last contact, then archived or deleted.'}
          </p>
        </LegalSection>

        <LegalSection title={isFr ? 'Mesures d\'audience anonymes' : 'Anonymous analytics'}>
          <p>
            {isFr
              ? 'Le site utilise une solution de mesure d\'audience qui '
              : 'The site uses an analytics solution that '}
            <strong>{isFr ? 'ne dépose aucun cookie' : 'sets no cookies'}</strong>{' '}
            {isFr
              ? 'et ne collecte aucune donnée permettant de vous identifier.'
              : 'and collects no personally identifiable visitor data.'}
          </p>
          <p>
            {isFr
              ? 'Les données collectées (page vue, source, pays, navigateur) sont agrégées et anonymes.'
              : 'The data collected (page view, source, country, browser) is aggregated and anonymous.'}
          </p>
        </LegalSection>

        <LegalSection title="Cookies">
          <p>
            {isFr ? 'Le site daratlas.fr ' : 'The daratlas.fr site '}
            <strong>{isFr ? 'ne dépose aucun cookie' : 'sets no cookies'}</strong>{' '}
            {isFr
              ? 'de mesure d\'audience, de marketing ou de réseaux sociaux. Aucune bannière de consentement n\'est donc requise.'
              : 'for analytics, marketing or social media. No consent banner is therefore required.'}
          </p>
          <p>
            {isFr
              ? 'Seuls des cookies strictement techniques peuvent être utilisés pour le fonctionnement du site (par exemple, mémorisation de la langue choisie). Ces cookies sont exemptés de consentement selon les recommandations de la CNIL.'
              : 'Only strictly necessary technical cookies may be used for site operation (for example, remembering the chosen language). These cookies are exempt from consent under CNIL guidelines.'}
          </p>
        </LegalSection>

        <LegalSection title={isFr ? 'Destinataires des données' : 'Data recipients'}>
          <p>
            {isFr ? 'Vos données ne sont ' : 'Your data is '}
            <strong>{isFr ? 'jamais cédées ni vendues à des tiers' : 'never shared or sold to third parties'}</strong>
            .{' '}
            {isFr
              ? 'Elles sont traitées exclusivement par Sami Agouram dans le cadre de l\'activité de Dar Atlas.'
              : 'It is processed exclusively by Sami Agouram as part of Dar Atlas operations.'}
          </p>
          <p>
            {isFr ? 'Sous-traitants techniques utilisés' : 'Technical sub-processors used'} : OVHcloud (
            {isFr ? 'hébergement' : 'hosting'}), Resend ({isFr ? 'envoi d\'emails transactionnels' : 'transactional emails'}).{' '}
            {isFr ? 'Tous sont conformes au RGPD.' : 'All are GDPR-compliant.'}
          </p>
        </LegalSection>

        <LegalSection title={isFr ? 'Vos droits' : 'Your rights'}>
          <p>
            {isFr
              ? 'Conformément au RGPD, vous disposez des droits suivants sur vos données personnelles : droit d\'accès, de rectification, d\'effacement, de limitation, d\'opposition, et de portabilité.'
              : 'Under GDPR, you have the following rights over your personal data: access, rectification, erasure, restriction, objection, and portability.'}
          </p>
          <p>
            {isFr ? 'Pour exercer un de ces droits, écrivez à ' : 'To exercise any of these rights, write to '}
            <a href={`mailto:${SITE_CONFIG.contactEmail}`}>{SITE_CONFIG.contactEmail}</a>.{' '}
            {isFr ? 'On répond sous un mois maximum.' : 'We reply within one month maximum.'}
          </p>
          <p>
            {isFr
              ? 'En cas de désaccord, vous pouvez introduire une réclamation auprès de la '
              : 'In case of disagreement, you can file a complaint with the '}
            <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer">
              {isFr
                ? 'Commission Nationale de l\'Informatique et des Libertés (CNIL)'
                : 'French Data Protection Authority (CNIL)'}
            </a>
            .
          </p>
        </LegalSection>

        <LegalSection title={isFr ? 'Sécurité' : 'Security'}>
          <p>
            {isFr
              ? 'Le site applique des mesures de sécurité techniques et organisationnelles : connexion HTTPS obligatoire, en-têtes de sécurité stricts (CSP, HSTS), chiffrement en transit et au repos, mises à jour régulières des dépendances, audit des vulnérabilités.'
              : 'The site applies technical and organizational security measures: mandatory HTTPS, strict security headers (CSP, HSTS), encryption in transit and at rest, regular dependency updates, vulnerability audits.'}
          </p>
        </LegalSection>

        <LegalSection title={isFr ? 'Modifications' : 'Updates'}>
          <p>
            {isFr
              ? 'La présente politique peut évoluer. La date de dernière mise à jour est indiquée ci-dessous. Pour les changements substantiels, on prévient les contacts existants par email.'
              : 'This policy may evolve. The last update date is shown below. For substantial changes, we notify existing contacts by email.'}
          </p>
          <p>
            <strong>{isFr ? 'Dernière mise à jour' : 'Last updated'} :</strong>{' '}
            {isFr ? 'mai 2026.' : 'May 2026.'}
          </p>
        </LegalSection>
      </article>
    </main>
  );
}
