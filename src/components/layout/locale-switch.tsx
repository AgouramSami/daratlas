'use client';

import { useLocale, useTranslations } from 'next-intl';
import { useTransition } from 'react';
import { usePathname, useRouter, type AppLocale } from '@/i18n/routing';
import { cn } from '@/lib/utils';

const LOCALES: AppLocale[] = ['fr', 'en'];

interface LocaleSwitchProps {
  className?: string;
}

export function LocaleSwitch({ className }: LocaleSwitchProps) {
  const t = useTranslations('nav');
  const locale = useLocale() as AppLocale;
  const router = useRouter();
  const pathname = usePathname();
  const [pending, startTransition] = useTransition();

  function switchTo(next: AppLocale) {
    if (next === locale || pending) return;
    startTransition(() => {
      router.replace(pathname, { locale: next });
    });
  }

  return (
    <div
      role="group"
      aria-label={t('localeLabel')}
      className={cn(
        'inline-flex items-center rounded-full border border-ink/10 p-0.5 font-mono text-xs',
        className,
      )}
    >
      {LOCALES.map((value) => (
        <button
          key={value}
          type="button"
          onClick={() => switchTo(value)}
          aria-pressed={locale === value}
          disabled={pending}
          className={cn(
            'rounded-full px-3 py-1 uppercase transition-all',
            locale === value ? 'bg-ink text-cream' : 'text-stone-500 hover:text-ink',
          )}
        >
          {value}
        </button>
      ))}
    </div>
  );
}
