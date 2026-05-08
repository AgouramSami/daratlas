'use client';

import { motion, useMotionTemplate, useMotionValue, useSpring } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { useRef, type MouseEvent as ReactMouseEvent } from 'react';
import { Button } from '@/components/ui/button';
import { FadeIn } from '@/components/animations/fade-in';
import { KineticText } from '@/components/animations/kinetic-heading';
import { Magnetic } from '@/components/animations/magnetic';
import { ScrambleText } from '@/components/animations/scramble-text';

export function Cta() {
  const t = useTranslations('cta');
  const sectionRef = useRef<HTMLElement>(null);

  const mx = useMotionValue(50);
  const my = useMotionValue(50);
  const sx = useSpring(mx, { stiffness: 60, damping: 18, mass: 0.6 });
  const sy = useSpring(my, { stiffness: 60, damping: 18, mass: 0.6 });
  const followGradient = useMotionTemplate`radial-gradient(900px circle at ${sx}% ${sy}%, rgba(217,79,61,0.32), transparent 65%)`;

  const onMove = (event: ReactMouseEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    mx.set(((event.clientX - rect.left) / rect.width) * 100);
    my.set(((event.clientY - rect.top) / rect.height) * 100);
  };

  return (
    <section
      ref={sectionRef}
      onMouseMove={onMove}
      className="relative overflow-hidden bg-ink text-cream"
    >
      <motion.div
        aria-hidden="true"
        style={{ background: followGradient }}
        className="pointer-events-none absolute inset-0"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 -right-20 select-none font-display text-[18rem] italic leading-[0.85] text-tomato/[0.08] lg:-right-24 lg:text-[28rem]"
      >
        {t('eyebrow').replace(/[?]/g, '')}
      </div>

      <div className="container-x relative flex flex-col items-center gap-10 py-32 text-center lg:gap-12 lg:py-44">
        <FadeIn>
          <ScrambleText
            text={t('eyebrow')}
            className="font-mono text-[11px] uppercase tracking-[0.32em] text-cream/55"
          />
        </FadeIn>

        <h2 className="max-w-4xl text-balance font-sans text-[clamp(2.25rem,6vw,5.5rem)] font-medium leading-[1] tracking-[-0.025em] text-cream">
          <KineticText text={t('titlePart1')} stagger={0.024} />
          <span className="block">
            <KineticText
              text={t('titleItalic')}
              delay={0.2}
              stagger={0.026}
              scatter={1.05}
              className="font-display text-[clamp(2.75rem,8vw,8rem)] italic font-normal leading-[0.95] text-tomato"
            />
          </span>
        </h2>

        <FadeIn delay={0.12}>
          <p className="max-w-xl text-pretty text-base leading-relaxed text-cream/70 lg:text-lg">
            {t('description')}
          </p>
        </FadeIn>

        <FadeIn delay={0.18}>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Magnetic>
              <Button href="/contact" size="lg" data-cursor-text="Démarrer">
                {t('primary')}
                <span aria-hidden="true">&rarr;</span>
              </Button>
            </Magnetic>
            <Magnetic>
              <Button
                href="mailto:contact@daratlas.fr"
                variant="ghost"
                size="lg"
                className="text-cream hover:bg-cream/10"
                data-cursor-text="Email"
              >
                {t('email')}
              </Button>
            </Magnetic>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
