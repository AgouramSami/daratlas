'use client';

import { motion, useMotionTemplate, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useLocale, useTranslations } from 'next-intl';
import { useRef, type MouseEvent as ReactMouseEvent } from 'react';
import Link from 'next/link';
import { FadeIn } from '@/components/animations/fade-in';
import { KineticText } from '@/components/animations/kinetic-heading';
import { ScrambleText } from '@/components/animations/scramble-text';
import { servicesByLocale } from '@/content/services';
import type { AppLocale } from '@/i18n/routing';
import { formatPrice } from '@/lib/utils';
import type { Service } from '@/types';

interface ServiceCardProps {
  service: Service;
  locale: AppLocale;
  priceLabel: string;
  ctaLabel: string;
}

function ServiceCard({ service, locale, priceLabel, ctaLabel }: ServiceCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  const xRaw = useMotionValue(0);
  const yRaw = useMotionValue(0);
  const x = useSpring(xRaw, { stiffness: 200, damping: 20, mass: 0.6 });
  const y = useSpring(yRaw, { stiffness: 200, damping: 20, mass: 0.6 });

  const rotateX = useTransform(y, [-0.5, 0.5], [8, -8]);
  const rotateY = useTransform(x, [-0.5, 0.5], [-10, 10]);
  const glowX = useTransform(x, [-0.5, 0.5], ['25%', '75%']);
  const glowY = useTransform(y, [-0.5, 0.5], ['25%', '75%']);
  const glowBackground = useMotionTemplate`radial-gradient(520px circle at ${glowX} ${glowY}, rgba(217,79,61,0.28), transparent 60%)`;

  const onMove = (event: ReactMouseEvent<HTMLDivElement>) => {
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
      className="group relative isolate overflow-hidden rounded-3xl border border-ink/10 bg-cream transition-colors duration-500 hover:border-tomato hover:bg-ink [transform-style:preserve-3d]"
    >
      <motion.div
        aria-hidden="true"
        style={{ background: glowBackground }}
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
      />

      <span
        aria-hidden="true"
        className="pointer-events-none absolute -right-4 -top-12 select-none font-display text-[14rem] italic leading-none text-tomato/0 transition-colors duration-500 group-hover:text-tomato/35 lg:-right-8 lg:text-[22rem]"
      >
        {service.number}
      </span>

      <div className="relative grid gap-8 p-8 lg:grid-cols-[80px_1fr_auto] lg:items-start lg:gap-12 lg:p-12">
        <div className="flex flex-row items-baseline gap-4 lg:flex-col lg:items-start lg:gap-3">
          <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink/45 transition-colors duration-500 group-hover:text-cream/55">
            {service.number}
          </span>
          <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink/45 transition-colors duration-500 group-hover:text-cream/55">
            {service.duration}
          </span>
        </div>

        <div className="flex flex-col gap-5">
          <h3 className="font-display text-3xl italic font-normal leading-[1.05] text-ink transition-colors duration-500 group-hover:text-cream lg:text-5xl">
            {service.title}
          </h3>
          <p className="max-w-xl text-pretty text-base leading-relaxed text-ink/70 transition-colors duration-500 group-hover:text-cream/75 lg:text-lg">
            {service.description}
          </p>
          <ul className="grid gap-2 pt-3 sm:grid-cols-2">
            {service.included.map((item) => (
              <li
                key={item}
                className="flex gap-3 text-sm text-ink/65 transition-colors duration-500 group-hover:text-cream/70"
              >
                <span aria-hidden="true" className="mt-2 h-px w-3 shrink-0 bg-tomato" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col items-start gap-6 lg:items-end">
          <div className="flex flex-col items-start gap-1 lg:items-end">
            <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink/45 transition-colors duration-500 group-hover:text-cream/55">
              {priceLabel}
            </span>
            <span className="font-display text-3xl italic font-normal text-tomato lg:text-4xl">
              {formatPrice(service.priceFrom, locale)}
            </span>
          </div>
          <Link
            href="/contact"
            data-cursor-text={ctaLabel}
            className="group/cta inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.22em] text-ink transition-colors duration-500 group-hover:text-cream"
          >
            <span className="relative">
              {ctaLabel}
              <span
                aria-hidden="true"
                className="absolute inset-x-0 -bottom-1 h-px origin-left scale-x-0 bg-tomato transition-transform duration-300 group-hover/cta:scale-x-100"
              />
            </span>
            <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </div>
    </motion.article>
  );
}

export function Services() {
  const locale = useLocale() as AppLocale;
  const t = useTranslations('services');
  const services = servicesByLocale[locale];

  return (
    <section id="services" className="relative bg-cream">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(217,79,61,0.04),transparent_55%)]"
      />

      <div className="container-x relative py-24 lg:py-32">
        <FadeIn>
          <div className="mb-10 flex items-baseline gap-3 font-mono text-[11px] uppercase tracking-[0.22em] text-ink/55">
            <ScrambleText text={t('chapter')} className="text-tomato" />
            <span aria-hidden="true" className="h-px w-6 bg-ink/20" />
            <ScrambleText text={t('eyebrow')} delay={120} />
          </div>
        </FadeIn>

        <h2 className="mb-8 max-w-4xl text-balance font-sans text-[clamp(2rem,5vw,4.5rem)] font-medium leading-[1] tracking-[-0.02em] text-ink">
          <KineticText text={t('titlePart1')} stagger={0.02} />
          <span className="block">
            <KineticText
              text={t('titleItalic')}
              delay={0.18}
              stagger={0.022}
              scatter={0.85}
              className="font-display text-[clamp(2.5rem,7vw,6rem)] italic font-normal leading-[0.95] text-tomato"
            />
          </span>
        </h2>

        <FadeIn delay={0.1}>
          <p className="mb-16 max-w-2xl text-pretty text-lg leading-relaxed text-ink/70 lg:mb-24 lg:text-xl">
            {t('description')}
          </p>
        </FadeIn>

        <div className="flex flex-col gap-4 lg:gap-6">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="lg:sticky"
              style={{ top: `calc(96px + ${index * 18}px)` }}
            >
              <FadeIn delay={index * 0.04}>
                <ServiceCard
                  service={service}
                  locale={locale}
                  priceLabel={t('priceLabel')}
                  ctaLabel={t('ctaLabel')}
                />
              </FadeIn>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
