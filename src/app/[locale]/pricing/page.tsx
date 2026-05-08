import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Accordion } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { FadeIn } from '@/components/animations/fade-in';
import { ScrambleText } from '@/components/animations/scramble-text';
import { servicesByLocale } from '@/content/services';
import { faqByLocale } from '@/content/faq';
import type { AppLocale } from '@/i18n/routing';
import { formatPrice } from '@/lib/utils';

const PRICING_FAQ_IDS = ['cout', 'duree', 'paiement', 'modifications', 'apres-lancement', 'hebergement'];

interface PricingPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PricingPageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'pricingPage' });
  return {
    title: t('metaTitle'),
    description: t('metaDescription'),
  };
}

export default async function PricingPage({ params }: PricingPageProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  const appLocale = locale as AppLocale;

  const t = await getTranslations({ locale, namespace: 'pricingPage' });
  const tServices = await getTranslations({ locale, namespace: 'services' });
  const services = servicesByLocale[appLocale];
  const faq = faqByLocale[appLocale].filter((item) => PRICING_FAQ_IDS.includes(item.id));
  const paymentBlocks = t.raw('paymentBlocks') as Array<{ title: string; description: string }>;
  const afterPosts = t.raw('afterPosts') as Array<{ title: string; description: string }>;

  return (
    <main className="bg-cream">
      <header className="container-x pb-16 pt-32 lg:pb-24 lg:pt-40">
        <FadeIn>
          <div className="mb-10 flex items-baseline gap-3 font-mono text-[11px] uppercase tracking-[0.22em] text-ink/55">
            <ScrambleText text={t('eyebrow')} className="text-tomato" />
            <span aria-hidden="true" className="h-px w-6 bg-ink/20" />
            <ScrambleText text="Tarifs 2026" delay={120} />
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

      <section className="container-x pb-24 lg:pb-32">
        <FadeIn>
          <div className="mb-12 flex items-baseline gap-3 font-mono text-[11px] uppercase tracking-[0.22em] text-ink/55 lg:mb-16">
            <span className="text-tomato">01</span>
            <span aria-hidden="true" className="h-px w-6 bg-ink/20" />
            <span>{t('eyebrow')}</span>
          </div>
        </FadeIn>

        <div className="grid gap-6 lg:gap-8">
          {services.map((service, index) => (
            <FadeIn key={service.id} delay={index * 0.04}>
              <article className="group relative grid gap-8 rounded-3xl border border-ink/10 bg-cream p-7 transition-colors duration-300 hover:border-tomato/40 lg:grid-cols-[80px_1fr_auto] lg:items-start lg:gap-12 lg:p-10">
                <div className="flex flex-row items-baseline gap-4 lg:flex-col lg:items-start lg:gap-3">
                  <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink/45">
                    {service.number}
                  </span>
                  <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink/45">
                    {service.duration}
                  </span>
                </div>

                <div className="flex flex-col gap-5">
                  <h2 className="font-display text-3xl italic font-normal leading-[1.05] text-ink lg:text-4xl">
                    {service.title}
                  </h2>
                  <p className="max-w-2xl text-pretty text-base leading-relaxed text-ink/70 lg:text-lg">
                    {service.description}
                  </p>

                  <div className="mt-2 flex flex-col gap-3 border-t border-ink/10 pt-5">
                    <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink/45">
                      {t('includedLabel')}
                    </span>
                    <ul className="grid gap-2 sm:grid-cols-2">
                      {service.included.map((item) => (
                        <li key={item} className="flex gap-3 text-sm text-ink/70">
                          <span aria-hidden="true" className="mt-2 h-px w-3 shrink-0 bg-tomato" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="flex flex-col items-start gap-6 lg:items-end">
                  <div className="flex flex-col items-start gap-1 lg:items-end">
                    <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink/45">
                      {tServices('priceLabel')}
                    </span>
                    <span className="font-display text-3xl italic font-normal text-tomato lg:text-4xl">
                      {formatPrice(service.priceFrom, appLocale)}
                    </span>
                  </div>
                  <Button
                    href={`/contact?service=${service.id}`}
                    variant="secondary"
                    size="md"
                    data-cursor-text="Devis"
                    data-cursor-variant="ink"
                  >
                    {t('ctaQuote')}
                    <span aria-hidden="true">&rarr;</span>
                  </Button>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="bg-cream-100">
        <div className="container-x py-24 lg:py-32">
          <FadeIn>
            <div className="mb-10 flex items-baseline gap-3 font-mono text-[11px] uppercase tracking-[0.22em] text-ink/55">
              <span className="text-tomato">02</span>
              <span aria-hidden="true" className="h-px w-6 bg-ink/20" />
              <span>{t('paymentEyebrow')}</span>
            </div>
          </FadeIn>

          <FadeIn delay={0.05}>
            <h2 className="mb-8 max-w-3xl text-balance font-sans text-[clamp(1.75rem,4vw,3.5rem)] font-medium leading-[1] tracking-[-0.02em] text-ink">
              {t('paymentTitlePart1')}
              <span className="block">
                <span className="font-display text-[clamp(2rem,5vw,4.5rem)] italic font-normal leading-[0.95] text-tomato">
                  {t('paymentTitleItalic')}
                </span>
              </span>
            </h2>
          </FadeIn>

          <FadeIn delay={0.1}>
            <p className="mb-14 max-w-2xl text-pretty text-base leading-relaxed text-ink/70 lg:text-lg">
              {t('paymentDescription')}
            </p>
          </FadeIn>

          <div className="grid gap-6 md:grid-cols-3">
            {paymentBlocks.map((block, index) => (
              <FadeIn key={block.title} delay={index * 0.06}>
                <article className="flex h-full flex-col gap-4 rounded-2xl border border-ink/10 bg-cream p-7 lg:p-8">
                  <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink/45">
                    {`0${index + 1}`}
                  </span>
                  <h3 className="font-display text-2xl italic font-normal text-ink">
                    {block.title}
                  </h3>
                  <p className="text-pretty text-sm leading-relaxed text-ink/70 lg:text-base">
                    {block.description}
                  </p>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="container-x py-24 lg:py-32">
        <FadeIn>
          <div className="mb-10 flex items-baseline gap-3 font-mono text-[11px] uppercase tracking-[0.22em] text-ink/55">
            <span className="text-tomato">03</span>
            <span aria-hidden="true" className="h-px w-6 bg-ink/20" />
            <span>{t('afterEyebrow')}</span>
          </div>
        </FadeIn>

        <FadeIn delay={0.05}>
          <h2 className="mb-8 max-w-3xl text-balance font-sans text-[clamp(1.75rem,4vw,3.5rem)] font-medium leading-[1] tracking-[-0.02em] text-ink">
            {t('afterTitlePart1')}
            <span className="block">
              <span className="font-display text-[clamp(2rem,5vw,4.5rem)] italic font-normal leading-[0.95] text-tomato">
                {t('afterTitleItalic')}
              </span>
            </span>
          </h2>
        </FadeIn>

        <FadeIn delay={0.1}>
          <p className="mb-14 max-w-2xl text-pretty text-base leading-relaxed text-ink/70 lg:text-lg">
            {t('afterDescription')}
          </p>
        </FadeIn>

        <div className="grid gap-6 md:grid-cols-3">
          {afterPosts.map((item, index) => (
            <FadeIn key={item.title} delay={index * 0.06}>
              <article className="flex h-full flex-col gap-4 rounded-2xl border border-ink/10 bg-cream p-7 lg:p-8">
                <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink/45">
                  {`0${index + 1}`}
                </span>
                <h3 className="font-display text-2xl italic font-normal text-ink">{item.title}</h3>
                <p className="text-pretty text-sm leading-relaxed text-ink/70 lg:text-base">
                  {item.description}
                </p>
              </article>
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="container-x pb-32 lg:pb-40">
        <FadeIn>
          <div className="mb-10 flex items-baseline gap-3 font-mono text-[11px] uppercase tracking-[0.22em] text-ink/55">
            <span className="text-tomato">04</span>
            <span aria-hidden="true" className="h-px w-6 bg-ink/20" />
            <span>{t('faqEyebrow')}</span>
          </div>
        </FadeIn>

        <FadeIn delay={0.05}>
          <h2 className="mb-12 max-w-3xl text-balance font-sans text-[clamp(1.75rem,4vw,3.5rem)] font-medium leading-[1] tracking-[-0.02em] text-ink lg:mb-16">
            {t('faqTitlePart1')}
            <span className="block">
              <span className="font-display text-[clamp(2rem,5vw,4.5rem)] italic font-normal leading-[0.95] text-tomato">
                {t('faqTitleItalic')}
              </span>
            </span>
          </h2>
        </FadeIn>

        <FadeIn delay={0.1}>
          <Accordion items={faq} />
        </FadeIn>
      </section>
    </main>
  );
}
