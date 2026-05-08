import { useTranslations } from 'next-intl';

export function SkipLink() {
  const t = useTranslations('nav');
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:font-mono focus:text-xs focus:text-cream focus:shadow-lg"
    >
      {t('skipToContent')}
    </a>
  );
}
