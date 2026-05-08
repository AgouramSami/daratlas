'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';
import { useRef } from 'react';
import { FadeIn } from '@/components/animations/fade-in';
import { KineticText } from '@/components/animations/kinetic-heading';
import { ScrambleText } from '@/components/animations/scramble-text';
import { projectsByLocale, type ProjectShowcase } from '@/content/projects';
import type { AppLocale } from '@/i18n/routing';
import { cn } from '@/lib/utils';

const ACCENT_OVERLAY: Record<ProjectShowcase['accent'], string> = {
  tomato: 'from-tomato/85 via-tomato/40',
  ink: 'from-ink/80 via-ink/30',
  sand: 'from-sand-700/70 via-sand-500/20',
  cream: 'from-ink/65 via-ink/15',
};

interface ProjectCardProps {
  project: ProjectShowcase;
  labels: { sector: string; type: string; year: string; cta: string };
}

function ProjectCard({ project, labels }: ProjectCardProps) {
  return (
    <article className="group relative flex h-[78vh] w-[85vw] max-w-[640px] shrink-0 flex-col overflow-hidden rounded-3xl border border-ink/10 bg-cream lg:h-[80vh] lg:w-[42vw] lg:max-w-[680px]">
      <div className="relative flex flex-[1.2] overflow-hidden">
        <Image
          src={project.image}
          alt={project.name}
          fill
          sizes="(max-width: 1024px) 85vw, 42vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        />

        <div
          aria-hidden="true"
          className={cn(
            'pointer-events-none absolute inset-0 bg-gradient-to-tr to-transparent',
            ACCENT_OVERLAY[project.accent],
          )}
        />

        <span
          aria-hidden="true"
          className="pointer-events-none absolute right-6 top-5 select-none font-display text-[7rem] italic font-normal leading-none text-cream/85 lg:text-[10rem]"
        >
          {project.number}
        </span>

        <span className="absolute left-6 top-6 font-mono text-[10px] uppercase tracking-[0.22em] text-cream/85">
          {project.year}
        </span>
      </div>

      <div className="flex flex-1 flex-col justify-between gap-5 p-6 lg:p-8">
        <div className="flex flex-col gap-4">
          <h3 className="font-display text-3xl italic font-normal leading-[1.05] text-ink lg:text-4xl">
            {project.name}
          </h3>

          <dl className="grid grid-cols-[auto_1fr] gap-x-6 gap-y-2 font-mono text-[10px] uppercase tracking-[0.22em] text-ink/55">
            <dt>{labels.sector}</dt>
            <dd className="text-ink/80">{project.sector}</dd>
            <dt>{labels.type}</dt>
            <dd className="text-ink/80">{project.type}</dd>
          </dl>
        </div>

        <Link
          href="/contact"
          data-cursor-text={labels.cta}
          className="inline-flex items-center gap-3 self-start font-mono text-[11px] uppercase tracking-[0.22em] text-ink transition-colors hover:text-tomato"
        >
          <span className="relative">
            {labels.cta}
            <span
              aria-hidden="true"
              className="absolute inset-x-0 -bottom-1 h-px origin-left scale-x-0 bg-tomato transition-transform duration-300 group-hover:scale-x-100"
            />
          </span>
          <span aria-hidden="true">&rarr;</span>
        </Link>
      </div>
    </article>
  );
}

export function Portfolio() {
  const locale = useLocale() as AppLocale;
  const t = useTranslations('portfolio');
  const projects = projectsByLocale[locale];

  const stickyRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: stickyRef,
    offset: ['start start', 'end end'],
  });

  const x = useTransform(scrollYProgress, [0, 1], ['6vw', '-78%']);

  const labels = {
    sector: t('sectorLabel'),
    type: t('typeLabel'),
    year: t('yearLabel'),
    cta: t('ctaLabel'),
  };

  const totalItems = projects.length + 1;
  const containerHeight = totalItems * 75;

  return (
    <section id="travaux" className="relative bg-cream">
      <div className="container-x pt-24 lg:pt-32">
        <FadeIn>
          <div className="mb-10 flex items-baseline gap-3 font-mono text-[11px] uppercase tracking-[0.22em] text-ink/55">
            <ScrambleText text={t('chapter')} className="text-tomato" />
            <span aria-hidden="true" className="h-px w-6 bg-ink/20" />
            <ScrambleText text={t('eyebrow')} delay={120} />
          </div>
        </FadeIn>

        <h2 className="mb-6 max-w-4xl text-balance font-sans text-[clamp(2rem,5vw,4.5rem)] font-medium leading-[1] tracking-[-0.02em] text-ink">
          <KineticText text={t('titlePart1')} stagger={0.022} />{' '}
          <KineticText
            text={t('titleItalic')}
            delay={0.18}
            scatter={0.85}
            className="font-display text-[clamp(2.5rem,7vw,6rem)] italic font-normal leading-[0.95] text-tomato"
          />
        </h2>

        <FadeIn delay={0.1}>
          <p className="mb-12 max-w-2xl text-pretty text-base leading-relaxed text-ink/70 lg:mb-16 lg:text-lg">
            {t('description')}
          </p>
        </FadeIn>
      </div>

      <div className="container-x grid gap-6 pb-20 lg:hidden">
        {projects.map((project) => (
          <FadeIn key={project.id}>
            <article className="group relative flex w-full flex-col overflow-hidden rounded-3xl border border-ink/10 bg-cream">
              <div className="relative aspect-[4/5] w-full overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  sizes="100vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                />
                <div
                  aria-hidden="true"
                  className={cn(
                    'pointer-events-none absolute inset-0 bg-gradient-to-tr to-transparent',
                    ACCENT_OVERLAY[project.accent],
                  )}
                />
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute right-4 top-3 select-none font-display text-[6rem] italic font-normal leading-none text-cream/85"
                >
                  {project.number}
                </span>
                <span className="absolute left-5 top-5 font-mono text-[10px] uppercase tracking-[0.22em] text-cream/85">
                  {project.year}
                </span>
              </div>
              <div className="flex flex-col gap-4 p-6">
                <h3 className="font-display text-3xl italic font-normal leading-[1.05] text-ink">
                  {project.name}
                </h3>
                <dl className="grid grid-cols-[auto_1fr] gap-x-5 gap-y-2 font-mono text-[10px] uppercase tracking-[0.22em] text-ink/55">
                  <dt>{labels.sector}</dt>
                  <dd className="text-ink/80">{project.sector}</dd>
                  <dt>{labels.type}</dt>
                  <dd className="text-ink/80">{project.type}</dd>
                </dl>
                <Link
                  href="/contact"
                  className="mt-2 inline-flex items-center gap-3 self-start font-mono text-[11px] uppercase tracking-[0.22em] text-ink"
                >
                  <span>{labels.cta}</span>
                  <span aria-hidden="true">&rarr;</span>
                </Link>
              </div>
            </article>
          </FadeIn>
        ))}

        <FadeIn>
          <Link
            href="/contact"
            className="group flex flex-col items-center justify-center gap-5 rounded-3xl border border-dashed border-ink/20 bg-cream-100 px-8 py-16 text-center"
          >
            <span className="font-display text-4xl italic font-normal leading-[1] text-ink">
              {locale === 'fr' ? 'À votre tour.' : 'Your turn.'}
            </span>
            <span className="inline-flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.22em] text-ink">
              {labels.cta}
              <span aria-hidden="true">&rarr;</span>
            </span>
          </Link>
        </FadeIn>
      </div>

      <div
        ref={stickyRef}
        className="relative hidden lg:block"
        style={{ height: `${containerHeight}vh` }}
      >
        <div className="sticky top-0 flex h-screen items-center overflow-hidden">
          <motion.div
            style={{ x }}
            className="flex w-max items-center gap-10 pl-12 pr-12"
          >
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} labels={labels} />
            ))}

            <Link
              href="/contact"
              data-cursor-text={labels.cta}
              className="group flex h-[80vh] w-[34vw] shrink-0 flex-col items-center justify-center gap-6 rounded-3xl border border-dashed border-ink/20 bg-cream-100 px-12 text-center transition-colors hover:border-tomato/60"
            >
              <span className="font-display text-6xl italic font-normal leading-[1] text-ink">
                {locale === 'fr' ? 'À votre tour.' : 'Your turn.'}
              </span>
              <span className="inline-flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.22em] text-ink transition-colors group-hover:text-tomato">
                {labels.cta}
                <span aria-hidden="true">&rarr;</span>
              </span>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
