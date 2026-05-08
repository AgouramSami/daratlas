import { useLocale, useTranslations } from 'next-intl';
import { MARQUEE_ITEMS_BY_LOCALE } from '@/lib/constants';
import type { AppLocale } from '@/i18n/routing';

export function Marquee() {
  const locale = useLocale() as AppLocale;
  const t = useTranslations('marquee');
  const source = MARQUEE_ITEMS_BY_LOCALE[locale];
  const items = [...source, ...source];

  return (
    <section
      aria-label={t('ariaLabel')}
      className="relative overflow-hidden border-y border-ink/10 bg-cream"
    >
      <div className="overflow-hidden border-b border-ink/[0.08] py-3">
        <div
          className="flex w-max items-center gap-10 whitespace-nowrap font-mono text-[11px] uppercase tracking-[0.22em] text-ink/60"
          style={{ animation: 'marquee 22s linear infinite' }}
        >
          {items.map((item, index) => (
            <span key={`r1-${item}-${index}`} className="flex items-center gap-10">
              <span aria-hidden="true" className="h-1 w-1 rounded-full bg-tomato" />
              <span>{item}</span>
            </span>
          ))}
        </div>
      </div>

      <div className="overflow-hidden bg-ink py-7 lg:py-9">
        <div
          className="flex w-max items-center gap-20 whitespace-nowrap font-display text-5xl italic font-normal leading-none text-cream sm:text-7xl lg:text-[7rem]"
          style={{ animation: 'marquee 55s linear infinite reverse' }}
        >
          {items.map((item, index) => (
            <span key={`r2-${item}-${index}`} className="flex items-center gap-20">
              <span aria-hidden="true" className="text-tomato">/</span>
              <span>{item}</span>
            </span>
          ))}
        </div>
      </div>

      <div className="overflow-hidden border-t border-ink/[0.08] py-5">
        <div
          className="flex w-max items-center gap-14 whitespace-nowrap font-sans text-xl font-medium tracking-tight text-ink/90 sm:text-2xl lg:text-3xl"
          style={{ animation: 'marquee 35s linear infinite' }}
        >
          {items.map((item, index) => (
            <span key={`r3-${item}-${index}`} className="flex items-center gap-14">
              <span aria-hidden="true" className="text-tomato">&middot;</span>
              <span>{item}</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
