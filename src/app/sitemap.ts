import type { MetadataRoute } from 'next';
import { routing } from '@/i18n/routing';
import { SITE_CONFIG } from '@/lib/constants';

const ROUTES = [
  { path: '/', priority: 1, changeFrequency: 'monthly' as const },
  { path: '/contact', priority: 0.9, changeFrequency: 'monthly' as const },
  { path: '/pricing', priority: 0.8, changeFrequency: 'monthly' as const },
  { path: '/mentions-legales', priority: 0.3, changeFrequency: 'yearly' as const },
  { path: '/politique-confidentialite', priority: 0.3, changeFrequency: 'yearly' as const },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const base = SITE_CONFIG.url;

  return ROUTES.flatMap((route) =>
    routing.locales.map((locale) => {
      const isDefault = locale === routing.defaultLocale;
      const path = isDefault ? route.path : `/${locale}${route.path === '/' ? '' : route.path}`;

      return {
        url: `${base}${path}`,
        lastModified,
        changeFrequency: route.changeFrequency,
        priority: route.priority,
        alternates: {
          languages: Object.fromEntries(
            routing.locales.map((l) => [
              l,
              `${base}${l === routing.defaultLocale ? route.path : `/${l}${route.path === '/' ? '' : route.path}`}`,
            ]),
          ),
        },
      };
    }),
  );
}
