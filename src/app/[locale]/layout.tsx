import { Analytics } from '@vercel/analytics/next';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { Inter, Instrument_Serif } from 'next/font/google';
import { GeistMono } from 'geist/font/mono';
import { notFound } from 'next/navigation';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  weight: '400',
  style: ['normal', 'italic'],
  variable: '--font-instrument-serif',
  display: 'swap',
});
import { CustomCursor } from '@/components/animations/custom-cursor';
import { SmoothScroll } from '@/components/animations/smooth-scroll';
import { ConsoleEgg } from '@/components/layout/console-egg';
import { Footer } from '@/components/layout/footer';
import { Header } from '@/components/layout/header';
import { JsonLd } from '@/components/layout/json-ld';
import { PlausibleScript } from '@/components/layout/plausible';
import { SkipLink } from '@/components/layout/skip-link';
import { isAppLocale, routing } from '@/i18n/routing';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export default async function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const { locale } = await params;

  if (!isAppLocale(locale)) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html lang={locale} className={`${inter.variable} ${instrumentSerif.variable} ${GeistMono.variable}`}>
      <head>
        <JsonLd />
      </head>
      <body>
        <NextIntlClientProvider messages={messages} locale={locale}>
          <ConsoleEgg />
          <SkipLink />
          <SmoothScroll />
          <CustomCursor />
          <Header />
          <div id="main-content">{children}</div>
          <Footer />
        </NextIntlClientProvider>
        <PlausibleScript />
        <Analytics />
      </body>
    </html>
  );
}
