'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useLocale, useTranslations } from 'next-intl';
import { useRef } from 'react';
import { FadeIn } from '@/components/animations/fade-in';
import { KineticText } from '@/components/animations/kinetic-heading';
import { ScrambleText } from '@/components/animations/scramble-text';
import { processStepsByLocale } from '@/content/process';
import type { AppLocale } from '@/i18n/routing';
import type { ProcessStep } from '@/types';

interface StepPanelProps {
  step: ProcessStep;
  index: number;
  total: number;
}

function StepPanel({ step, index, total }: StepPanelProps) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const overlayOpacity = useTransform(scrollYProgress, [0.5, 1], [0, 1]);
  const numberY = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const contentOpacity = useTransform(scrollYProgress, [0.5, 1], [1, 0.3]);

  const isLast = index === total - 1;

  return (
    <div ref={ref} className="relative h-screen">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden bg-cream">
        <motion.div
          aria-hidden="true"
          style={{ opacity: overlayOpacity }}
          className="pointer-events-none absolute inset-0 bg-ink"
        />

        <div className="container-x relative grid w-full gap-6 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-20">
          <motion.div
            style={{ y: numberY, opacity: contentOpacity }}
            className="relative flex flex-col gap-3 lg:gap-4"
          >
            <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink/45 transition-colors duration-500">
              {step.weeks}
            </span>
            <span className="font-display text-[clamp(5rem,18vw,18rem)] italic font-normal leading-[0.85] text-tomato">
              {step.number}
            </span>
            <h3 className="font-display text-3xl italic font-normal leading-[1] text-ink sm:text-4xl lg:text-6xl">
              {step.title}
            </h3>
          </motion.div>

          <motion.div
            style={{ opacity: contentOpacity }}
            className="flex flex-col gap-8"
          >
            <p className="text-pretty text-lg leading-relaxed text-ink/75 lg:text-xl">
              {step.description}
            </p>
            <ul className="flex flex-col gap-3 border-l border-ink/15 pl-6">
              {step.deliverables.map((item) => (
                <li key={item} className="flex gap-3 text-sm text-ink/70 lg:text-base">
                  <span aria-hidden="true" className="mt-2 h-px w-3 shrink-0 bg-tomato" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {!isLast ? (
              <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.22em] text-ink/40">
                <span aria-hidden="true">{`0${index + 2}`}</span>
                <span aria-hidden="true" className="h-px w-8 bg-ink/20" />
                <span aria-hidden="true">&darr;</span>
              </div>
            ) : null}
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export function Process() {
  const locale = useLocale() as AppLocale;
  const t = useTranslations('process');
  const steps = processStepsByLocale[locale];

  return (
    <section id="process" className="relative bg-cream">
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
              stagger={0.024}
              scatter={0.85}
              className="font-display text-[clamp(2.5rem,7vw,6rem)] italic font-normal leading-[0.95] text-tomato"
            />
          </span>
        </h2>

        <FadeIn delay={0.1}>
          <p className="max-w-2xl text-pretty text-lg leading-relaxed text-ink/70 lg:text-xl">
            {t('description')}
          </p>
        </FadeIn>
      </div>

      <div className="relative">
        {steps.map((step, index) => (
          <StepPanel key={step.id} step={step} index={index} total={steps.length} />
        ))}
      </div>
    </section>
  );
}
