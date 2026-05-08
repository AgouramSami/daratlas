import type { Metadata, Viewport } from 'next';
import { SITE_CONFIG } from '@/lib/constants';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    default: 'Dar Atlas, studio web : sites, boutiques en ligne et applications sur mesure',
    template: '%s · Dar Atlas',
  },
  description: SITE_CONFIG.description,
  keywords: [
    'studio web france',
    'création de site internet',
    'agence web sur mesure',
    'création boutique en ligne',
    'développement application web',
    'identité visuelle marque',
    'refonte site internet',
    'site web professionnel',
  ],
  authors: [{ name: 'Sami Agouram' }],
  creator: 'Dar Atlas',
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: '#F5EDDF',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return children;
}
