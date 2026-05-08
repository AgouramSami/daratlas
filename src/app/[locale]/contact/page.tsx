import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { ContactForm } from '@/components/sections/contact-form';
import { FadeIn } from '@/components/animations/fade-in';
import { ScrambleText } from '@/components/animations/scramble-text';
import { SITE_CONFIG } from '@/lib/constants';

interface ContactPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: ContactPageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'contactPage' });
  return {
    title: t('metaTitle'),
    description: t('metaDescription'),
  };
}

export default async function ContactPage({ params }: ContactPageProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'contactPage' });

  const trustPoints = [
    { label: t('trust.responseLabel'), value: t('trust.responseValue') },
    { label: t('trust.quoteLabel'), value: t('trust.quoteValue') },
    { label: t('trust.callLabel'), value: t('trust.callValue') },
  ];

  return (
    <main className="bg-cream">
      <header className="container-x pb-12 pt-32 lg:pb-20 lg:pt-40">
        <FadeIn>
          <div className="mb-10 flex items-baseline gap-3 font-mono text-[11px] uppercase tracking-[0.22em] text-ink/55">
            <ScrambleText text={t('eyebrow')} className="text-tomato" />
            <span aria-hidden="true" className="h-px w-6 bg-ink/20" />
            <ScrambleText text="01" delay={120} />
          </div>
        </FadeIn>

        <FadeIn delay={0.05}>
          <h1 className="max-w-4xl text-balance font-sans text-[clamp(2.25rem,6vw,5.5rem)] font-medium leading-[1] tracking-[-0.025em] text-ink">
            {t('titlePart1')}
            <span className="block">
              <span className="font-display text-[clamp(2.75rem,8vw,7.5rem)] italic font-normal leading-[0.95] text-tomato">
                {t('titleItalic')}
              </span>
            </span>
          </h1>
        </FadeIn>

        <FadeIn delay={0.1}>
          <p className="mt-10 max-w-2xl text-pretty text-lg leading-relaxed text-ink/70 lg:text-xl">
            {t('description')}
          </p>
        </FadeIn>
      </header>

      <section className="container-x grid gap-16 pb-32 lg:grid-cols-[1.5fr_1fr] lg:gap-20 lg:pb-40">
        <FadeIn delay={0.15}>
          <ContactForm />
        </FadeIn>

        <aside className="flex flex-col gap-10 lg:sticky lg:top-32 lg:self-start">
          <FadeIn delay={0.2}>
            <div className="flex flex-col gap-3">
              <h2 className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink/45">
                {t('asideHeading')}
              </h2>
              <a
                href={`mailto:${SITE_CONFIG.contactEmail}`}
                className="font-display text-2xl italic font-normal leading-[1.05] text-ink transition-colors hover:text-tomato lg:text-3xl"
                data-cursor-text="Email"
              >
                {SITE_CONFIG.contactEmail}
              </a>
            </div>
          </FadeIn>

          <FadeIn delay={0.25}>
            <dl className="flex flex-col gap-5 border-t border-ink/15 pt-7">
              {trustPoints.map((point) => (
                <div key={point.label} className="flex flex-col gap-1">
                  <dt className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink/45">
                    {point.label}
                  </dt>
                  <dd className="font-display text-xl italic font-normal text-ink">
                    {point.value}
                  </dd>
                </div>
              ))}
            </dl>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="rounded-2xl border border-ink/10 bg-cream-100 p-6 lg:p-7">
              <p className="text-pretty text-sm leading-relaxed text-ink/70 lg:text-base">
                {t('asideNote')}
              </p>
            </div>
          </FadeIn>
        </aside>
      </section>
    </main>
  );
}
