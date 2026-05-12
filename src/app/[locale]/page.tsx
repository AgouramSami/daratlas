import { setRequestLocale } from 'next-intl/server';
import { CurtainOpener } from '@/components/animations/curtain-opener';
import { Cta } from '@/components/sections/cta';
import { FaqSection } from '@/components/sections/faq-section';
import { Hero } from '@/components/sections/hero';
import { Marquee } from '@/components/sections/marquee';
import { Process } from '@/components/sections/process';
import { Services } from '@/components/sections/services';
import { Team } from '@/components/sections/team';

interface HomePageProps {
  params: Promise<{ locale: string }>;
}

export default async function HomePage({ params }: HomePageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main>
      <CurtainOpener />
      <Hero />
      <Marquee />
      <Services />
      <Process />
      <Team />
      <FaqSection />
      <Cta />
    </main>
  );
}
