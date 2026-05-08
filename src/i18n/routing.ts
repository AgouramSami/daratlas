import { defineRouting } from 'next-intl/routing';
import { createSharedPathnamesNavigation } from 'next-intl/navigation';

export const routing = defineRouting({
  locales: ['fr', 'en'],
  defaultLocale: 'fr',
  localePrefix: 'as-needed',
});

export type AppLocale = (typeof routing.locales)[number];

export function isAppLocale(value: unknown): value is AppLocale {
  return typeof value === 'string' && (routing.locales as readonly string[]).includes(value);
}

export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation(routing);
