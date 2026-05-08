import { useTranslations } from 'next-intl';
import { FadeIn } from '@/components/animations/fade-in';
import { KineticText } from '@/components/animations/kinetic-heading';
import { ScrambleText } from '@/components/animations/scramble-text';

interface Pillar {
  title: string;
  description: string;
}

export function Manifesto() {
  const t = useTranslations('manifesto');
  const pillars = t.raw('pillars') as Pillar[];

  return (
    <section id="manifeste" className="relative bg-ink text-cream">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(217,79,61,0.14),transparent_60%)]"
      />

      <div className="container-x relative grid gap-12 py-20 lg:grid-cols-[1.1fr_1fr] lg:gap-20 lg:py-32">
        <div className="lg:sticky lg:top-24 lg:self-start">
          <div className="flex flex-col gap-10">
            <FadeIn>
              <div className="flex items-baseline gap-3 font-mono text-[11px] uppercase tracking-[0.22em] text-cream/45">
                <ScrambleText text={t('chapter')} className="text-tomato" />
                <span aria-hidden="true" className="h-px w-6 bg-cream/30" />
                <ScrambleText text={t('eyebrow')} delay={120} />
              </div>
            </FadeIn>

            <h2 className="text-balance font-sans text-[clamp(2rem,4.5vw,4.25rem)] font-medium leading-[1] tracking-[-0.02em] text-cream">
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
              <p className="text-pretty text-lg leading-relaxed text-cream/80 lg:text-xl">
                {t('intro')}
              </p>
            </FadeIn>

            <FadeIn delay={0.18}>
              <div className="flex flex-col gap-2 border-l border-cream/15 pl-6 text-sm">
                <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-cream/40">
                  {t('founderLabel')}
                </span>
                <span className="text-lg font-medium">{t('founderName')}</span>
                <span className="font-mono text-xs text-cream/50">{t('founderRole')}</span>
              </div>
            </FadeIn>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <FadeIn>
            <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-cream/40">
              {t('pillarsLead')}
            </span>
          </FadeIn>

          <ul className="flex flex-col gap-5 lg:gap-7">
            {pillars.map((pillar, index) => (
              <li key={pillar.title}>
                <FadeIn delay={index * 0.06}>
                  <article className="group relative flex flex-col gap-4 rounded-2xl border border-cream/15 bg-cream/[0.03] p-7 transition-colors duration-300 hover:border-tomato/40 hover:bg-cream/[0.06] lg:p-9">
                    <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-cream/40">
                      {`0${index + 1}`}
                    </span>
                    <h3 className="font-display text-2xl italic font-normal leading-tight text-cream lg:text-3xl">
                      {pillar.title}
                    </h3>
                    <p className="text-pretty text-base leading-relaxed text-cream/75 lg:text-lg">
                      {pillar.description}
                    </p>
                  </article>
                </FadeIn>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
