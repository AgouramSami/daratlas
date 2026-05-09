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
      className="relative overflow-hidden border-y border-cream/10 bg-ink"
    >
      <div className="overflow-hidden py-6 lg:py-8">
        <div
          className="flex w-max items-center gap-14 whitespace-nowrap font-display text-3xl italic font-normal leading-none text-cream sm:gap-20 sm:text-4xl lg:text-5xl"
          style={{ animation: 'marquee 45s linear infinite' }}
        >
          {items.map((item, index) => (
            <span key={`${item}-${index}`} className="flex items-center gap-14 sm:gap-20">
              <span aria-hidden="true" className="text-tomato">/</span>
              <span>{item}</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
