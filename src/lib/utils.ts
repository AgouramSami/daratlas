import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import type { AppLocale } from '@/i18n/routing';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const PRICE_LOCALES: Record<AppLocale, string> = {
  fr: 'fr-FR',
  en: 'en-US',
};

export function formatPrice(amount: number, locale: AppLocale = 'fr'): string {
  return new Intl.NumberFormat(PRICE_LOCALES[locale], {
    style: 'currency',
    currency: 'EUR',
    maximumFractionDigits: 0,
  }).format(amount);
}
