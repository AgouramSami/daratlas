import type { MetadataRoute } from 'next';
import { SITE_CONFIG } from '@/lib/constants';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE_CONFIG.name,
    short_name: SITE_CONFIG.shortName,
    description: SITE_CONFIG.description,
    start_url: '/',
    display: 'standalone',
    background_color: '#FAFAF7',
    theme_color: '#0A0A0A',
    icons: [
      {
        src: '/icon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
      },
      {
        src: '/apple-icon.svg',
        sizes: '180x180',
        type: 'image/svg+xml',
      },
    ],
  };
}
