'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { FadeIn } from '@/components/animations/fade-in';
import { KineticText } from '@/components/animations/kinetic-heading';
import { ScrambleText } from '@/components/animations/scramble-text';

export function Team() {
  const t = useTranslations('team');

  return (
    <section id="a-propos" className="relative bg-cream">
      <div className="container-x py-24 lg:py-32">
        <FadeIn>
          <div className="mb-10 flex items-baseline gap-3 font-mono text-[11px] uppercase tracking-[0.22em] text-ink/55">
            <ScrambleText text={t('chapter')} className="text-tomato" />
            <span aria-hidden="true" className="h-px w-6 bg-ink/20" />
            <ScrambleText text={t('eyebrow')} delay={120} />
          </div>
        </FadeIn>

        <div className="grid gap-12 lg:grid-cols-[0.85fr_1fr] lg:items-center lg:gap-20">
          <FadeIn>
            <div className="relative aspect-square overflow-hidden rounded-3xl border border-ink/10 bg-cream-100">
              <Image
                src="/images/photo_sami_square.jpeg"
                alt="Sami Agouram, fondateur du studio Dar Atlas"
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover transition-transform duration-700 ease-out hover:scale-[1.02]"
                priority={false}
              />
            </div>
          </FadeIn>

          <div className="flex flex-col gap-10">
            <h2 className="text-balance font-sans text-[clamp(2rem,4.8vw,4.5rem)] font-medium leading-[1] tracking-[-0.02em] text-ink">
              <KineticText text={t('titlePart1')} stagger={0.022} />
              <span className="block">
                <KineticText
                  text={t('titleItalic')}
                  delay={0.18}
                  scatter={0.85}
                  className="font-display text-[clamp(2.5rem,6vw,5.5rem)] italic font-normal leading-[0.95] text-tomato"
                />
              </span>
            </h2>

            <FadeIn delay={0.12}>
              <p className="text-pretty text-lg leading-relaxed text-ink/80 lg:text-xl">
                {t('description')}
              </p>
            </FadeIn>

            <FadeIn delay={0.18}>
              <div className="flex flex-col gap-2 border-l border-ink/15 pl-6 text-sm">
                <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink/45">
                  Fondé par
                </span>
                <span className="font-display text-2xl italic font-normal leading-[1.05] text-ink">
                  Sami Agouram
                </span>
                <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink/55">
                  Studio web, France
                </span>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
