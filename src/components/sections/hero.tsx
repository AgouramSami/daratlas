'use client';

import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
} from 'framer-motion';
import { useEffect, useRef, useState, type MouseEvent as ReactMouseEvent } from 'react';
import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';
import { FadeIn } from '@/components/animations/fade-in';
import { KineticText } from '@/components/animations/kinetic-heading';
import { Magnetic } from '@/components/animations/magnetic';
import { ScrambleText } from '@/components/animations/scramble-text';

export function Hero() {
  const t = useTranslations('hero');
  const sectionRef = useRef<HTMLElement>(null);

  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const handler = () => setReady(true);
    window.addEventListener('dar-atlas-ready', handler);
    return () => window.removeEventListener('dar-atlas-ready', handler);
  }, []);

  const cursorX = useMotionValue(50);
  const cursorY = useMotionValue(35);
  const cursorXSpring = useSpring(cursorX, { stiffness: 60, damping: 20, mass: 0.8 });
  const cursorYSpring = useSpring(cursorY, { stiffness: 60, damping: 20, mass: 0.8 });
  const followGradient = useMotionTemplate`radial-gradient(900px circle at ${cursorXSpring}% ${cursorYSpring}%, rgba(217,79,61,0.13), transparent 65%)`;

  const onMouseMove = (event: ReactMouseEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    cursorX.set(((event.clientX - rect.left) / rect.width) * 100);
    cursorY.set(((event.clientY - rect.top) / rect.height) * 100);
  };

  const { scrollY } = useScroll();
  const decoY = useTransform(scrollY, [0, 800], [0, -260]);
  const decoOpacity = useTransform(scrollY, [0, 600], [1, 0.3]);

  return (
    <section
      ref={sectionRef}
      onMouseMove={onMouseMove}
      className="relative overflow-hidden bg-cream"
    >
      <motion.div aria-hidden="true" style={{ background: followGradient }} className="pointer-events-none absolute inset-0" />

      <motion.div
        aria-hidden="true"
        style={{ y: decoY, opacity: decoOpacity, willChange: 'transform' }}
        className="pointer-events-none absolute -right-4 top-20 hidden select-none font-display text-[14rem] italic leading-[0.8] text-tomato/15 transform-gpu sm:-right-12 sm:top-24 sm:block sm:text-[20rem] lg:-right-16 lg:top-32 lg:text-[30rem]"
      >
        ’26
      </motion.div>

      <div className="container-x relative pb-20 pt-24 sm:pt-28 lg:pb-28 lg:pt-32">
        <FadeIn>
          <div className="mb-10 flex items-center font-mono text-[11px] uppercase tracking-[0.22em] text-ink/55 sm:mb-14">
            <span className="flex items-center gap-2">
              <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-tomato" />
              <ScrambleText text={t('badge')} duration={900} />
            </span>
          </div>
        </FadeIn>

        <h1 className="text-balance font-sans text-[clamp(2.75rem,8vw,7rem)] font-medium leading-[0.95] tracking-[-0.025em] text-ink">
          <KineticText text={t('titlePart1')} play={ready} stagger={0.024} />
          <span className="block">
            <KineticText
              text={t('titleItalic')}
              play={ready}
              delay={0.18}
              stagger={0.026}
              scatter={1.1}
              className="font-display text-[clamp(3.5rem,11vw,11rem)] italic font-normal leading-[0.9] tracking-[-0.015em] text-tomato"
            />
          </span>
        </h1>

        <FadeIn delay={0.15}>
          <p className="mt-8 max-w-2xl text-pretty text-base leading-relaxed text-ink/70 sm:mt-12 sm:text-lg lg:text-xl lg:leading-[1.55]">
            {t('subtitle')}
          </p>
        </FadeIn>

        <FadeIn delay={0.22}>
          <div className="mt-10 flex flex-wrap gap-3">
            <Magnetic>
              <Button href="/contact" size="lg" data-cursor-text="Démarrer">
                {t('ctaPrimary')}
                <span aria-hidden="true">&rarr;</span>
              </Button>
            </Magnetic>
            <Magnetic>
              <Button
                href="#travaux"
                variant="secondary"
                size="lg"
                data-cursor-text="Voir"
                data-cursor-variant="ink"
              >
                {t('ctaSecondary')}
              </Button>
            </Magnetic>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
