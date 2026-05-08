'use client';

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useLocale, useTranslations } from 'next-intl';
import { useRef, type MouseEvent as ReactMouseEvent } from 'react';
import { FadeIn } from '@/components/animations/fade-in';
import { KineticText } from '@/components/animations/kinetic-heading';
import { ScrambleText } from '@/components/animations/scramble-text';
import { testimonialsByLocale, type TestimonialEntry } from '@/content/testimonials';
import type { AppLocale } from '@/i18n/routing';
import { cn } from '@/lib/utils';

const ACCENT_BG: Record<TestimonialEntry['accent'], string> = {
  tomato: 'bg-tomato text-cream',
  ink: 'bg-ink text-cream',
  sand: 'bg-sand-200 text-ink',
};

const ACCENT_QUOTE: Record<TestimonialEntry['accent'], string> = {
  tomato: 'text-cream',
  ink: 'text-cream',
  sand: 'text-ink',
};

const ACCENT_BORDER: Record<TestimonialEntry['accent'], string> = {
  tomato: 'border-cream/30',
  ink: 'border-cream/30',
  sand: 'border-ink/15',
};

interface TestimonialCardProps {
  testimonial: TestimonialEntry;
  index: number;
}

function TestimonialCard({ testimonial, index }: TestimonialCardProps) {
  const ref = useRef<HTMLElement>(null);

  const xRaw = useMotionValue(0);
  const yRaw = useMotionValue(0);
  const sx = useSpring(xRaw, { stiffness: 220, damping: 22 });
  const sy = useSpring(yRaw, { stiffness: 220, damping: 22 });
  const rotateX = useTransform(sy, [-0.5, 0.5], [3, -3]);
  const rotateY = useTransform(sx, [-0.5, 0.5], [-4, 4]);

  const onMove = (event: ReactMouseEvent<HTMLElement>) => {
    const node = ref.current;
    if (!node) return;
    const rect = node.getBoundingClientRect();
    xRaw.set((event.clientX - rect.left) / rect.width - 0.5);
    yRaw.set((event.clientY - rect.top) / rect.height - 0.5);
  };

  const onLeave = () => {
    xRaw.set(0);
    yRaw.set(0);
  };

  return (
    <motion.article
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ rotateX, rotateY, transformPerspective: 1400 }}
      className={cn(
        'relative isolate flex flex-col justify-between gap-8 overflow-hidden rounded-3xl p-8 lg:p-10 [transform-style:preserve-3d]',
        ACCENT_BG[testimonial.accent],
      )}
    >
      <span
        aria-hidden="true"
        className="font-display text-7xl italic font-normal leading-none opacity-40 lg:text-8xl"
      >
        &ldquo;
      </span>

      <p
        className={cn(
          'text-pretty font-display text-2xl italic font-normal leading-[1.2] lg:text-3xl',
          ACCENT_QUOTE[testimonial.accent],
        )}
      >
        {testimonial.quote}
      </p>

      <div
        className={cn(
          'flex items-center gap-4 border-t pt-5',
          ACCENT_BORDER[testimonial.accent],
        )}
      >
        <span className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full">
          <Image
            src={testimonial.avatar}
            alt=""
            fill
            sizes="48px"
            className="object-cover"
          />
        </span>
        <div className="flex flex-col gap-0.5 font-mono text-[10px] uppercase tracking-[0.22em]">
          <span className="opacity-90">{testimonial.author}</span>
          <span className="opacity-60">{testimonial.role}</span>
        </div>
      </div>
    </motion.article>
  );
}

export function Testimonials() {
  const locale = useLocale() as AppLocale;
  const t = useTranslations('testimonials');
  const testimonials = testimonialsByLocale[locale];

  return (
    <section id="temoignages" className="relative bg-cream">
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

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <FadeIn key={testimonial.id} delay={index * 0.08}>
              <TestimonialCard testimonial={testimonial} index={index} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
