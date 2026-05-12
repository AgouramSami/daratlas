import { useTranslations } from 'next-intl';
import { Logo } from '@/components/layout/logo';
import { Link } from '@/i18n/routing';
import { SITE_CONFIG } from '@/lib/constants';

interface FooterLink {
  label: string;
  href: string;
}

export function Footer() {
  const t = useTranslations('footer');
  const year = new Date().getFullYear();

  const studioLinks: FooterLink[] = [
    { label: t('links.services'), href: '/#services' },
    { label: t('links.process'), href: '/#process' },
    { label: t('links.apropos'), href: '/#a-propos' },
    { label: t('links.faq'), href: '/#faq' },
  ];

  const pageLinks: FooterLink[] = [
    { label: t('links.pricing'), href: '/pricing' },
    { label: t('links.contact'), href: '/contact' },
    { label: t('links.legal'), href: '/mentions-legales' },
    { label: t('links.privacy'), href: '/politique-confidentialite' },
  ];

  const contactLinks: FooterLink[] = [
    { label: SITE_CONFIG.contactEmail, href: `mailto:${SITE_CONFIG.contactEmail}` },
    { label: 'LinkedIn', href: SITE_CONFIG.social.linkedin },
    { label: 'GitHub', href: SITE_CONFIG.social.github },
  ];

  return (
    <footer className="relative overflow-hidden bg-ink text-cream">
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 -right-12 select-none font-display text-[14rem] italic leading-[0.8] text-tomato/[0.08] lg:-right-20 lg:text-[22rem]"
      >
        Dar Atlas
      </span>

      <div className="container-x relative py-20 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[1.6fr_1fr_1fr_1fr]">
          <div className="flex flex-col gap-6">
            <Logo variant="inverted" />
            <p className="max-w-xs text-pretty font-display text-2xl italic font-normal leading-[1.15] text-cream lg:text-3xl">
              {t('tagline')}
            </p>
          </div>

          <FooterColumn heading={t('headings.studio')} links={studioLinks} />
          <FooterColumn heading={t('headings.pages')} links={pageLinks} />
          <FooterColumn heading={t('headings.contact')} links={contactLinks} />
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-cream/10 pt-8 font-mono text-[10px] uppercase tracking-[0.22em] text-cream/45 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <span>{`© ${year} Dar Atlas`}</span>
            <span>{t('host')}</span>
          </div>
          <span className="text-cream/30">{t('analytics')}</span>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ heading, links }: { heading: string; links: FooterLink[] }) {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="font-mono text-[10px] uppercase tracking-[0.22em] text-cream/45">{heading}</h3>
      <ul className="flex flex-col gap-3 text-sm">
        {links.map((link) => {
          const isExternal =
            link.href.startsWith('http') ||
            link.href.startsWith('mailto:') ||
            link.href.startsWith('tel:');

          return (
            <li key={link.label}>
              {isExternal ? (
                <a
                  href={link.href}
                  className="text-cream/80 transition-colors hover:text-tomato"
                  {...(link.href.startsWith('http')
                    ? { target: '_blank', rel: 'noopener noreferrer' }
                    : {})}
                  data-cursor-hover
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  href={link.href}
                  className="text-cream/80 transition-colors hover:text-tomato"
                  data-cursor-hover
                >
                  {link.label}
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
