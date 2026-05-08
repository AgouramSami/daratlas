import { useLocale, useTranslations } from 'next-intl';
import { Accordion } from '@/components/ui/accordion';
import { FadeIn } from '@/components/animations/fade-in';
import { KineticText } from '@/components/animations/kinetic-heading';
import { ScrambleText } from '@/components/animations/scramble-text';
import { faqByLocale } from '@/content/faq';
import type { AppLocale } from '@/i18n/routing';

export function FaqSection() {
  const locale = useLocale() as AppLocale;
  const t = useTranslations('faq');
  const items = faqByLocale[locale];

  return (
    <section id="faq" className="relative bg-cream">
      <div className="container-x py-24 lg:py-32">
        <FadeIn>
          <div className="mb-10 flex items-baseline gap-3 font-mono text-[11px] uppercase tracking-[0.22em] text-ink/55">
            <ScrambleText text={t('chapter')} className="text-tomato" />
            <span aria-hidden="true" className="h-px w-6 bg-ink/20" />
            <ScrambleText text={t('eyebrow')} delay={120} />
          </div>
        </FadeIn>

        <h2 className="mb-8 max-w-4xl text-balance font-sans text-[clamp(2rem,5vw,4.5rem)] font-medium leading-[1] tracking-[-0.02em] text-ink">
          <KineticText text={t('titlePart1')} stagger={0.022} />
          <span className="block">
            <KineticText
              text={t('titleItalic')}
              delay={0.18}
              scatter={0.85}
              className="font-display text-[clamp(2.5rem,7vw,6rem)] italic font-normal leading-[0.95] text-tomato"
            />
          </span>
        </h2>

        <FadeIn delay={0.1}>
          <p className="mb-16 max-w-2xl text-pretty text-lg leading-relaxed text-ink/70 lg:mb-20 lg:text-xl">
            {t('description')}
          </p>
        </FadeIn>

        <FadeIn delay={0.05}>
          <Accordion items={items} />
        </FadeIn>
      </div>
    </section>
  );
}
