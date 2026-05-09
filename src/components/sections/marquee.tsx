import { useLocale, useTranslations } from 'next-intl';
import { MARQUEE_ITEMS_BY_LOCALE } from '@/lib/constants';
import type { AppLocale } from '@/i18n/routing';

export function Marquee() {
  const locale = useLocale() as AppLocale;
  const t = useTranslations('marquee');
  const source = MARQUEE_ITEMS_BY_LOCALE[locale];
  const items = [...source, ...source];

  return (
    <aside
      aria-label={t('ariaLabel')}
      className="relative overflow-hidden border-y border-cream/10 bg-ink"
    >
      <div className="overflow-hidden py-4 lg:py-5">
        <div
          className="flex w-max items-center gap-10 whitespace-nowrap font-display text-xl italic font-normal leading-none text-cream sm:gap-14 sm:text-2xl lg:gap-20 lg:text-3xl"
          style={{ animation: 'marquee 50s linear infinite' }}
        >
          {items.map((item, index) => (
            <span
              key={`${item}-${index}`}
              className="flex items-center gap-10 sm:gap-14 lg:gap-20"
            >
              <span aria-hidden="true" className="text-tomato">/</span>
              <span>{item}</span>
            </span>
          ))}
        </div>
      </div>
    </aside>
  );
}
