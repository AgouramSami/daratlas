'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Logo } from '@/components/layout/logo';
import { LocaleSwitch } from '@/components/layout/locale-switch';
import { Link } from '@/i18n/routing';
import { NAV_LINKS } from '@/lib/constants';
import { cn } from '@/lib/utils';

export function Header() {
  const t = useTranslations('nav');
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (open) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled || open
          ? 'border-b border-ink/5 bg-cream/80 backdrop-blur-xl'
          : 'bg-transparent',
      )}
    >
      <div className="container-x flex h-16 items-center justify-between gap-6 lg:h-20">
        <Logo />

        <nav aria-label={t('mainNavigation')} className="hidden lg:block">
          <ul className="flex items-center gap-8 font-sans text-sm text-stone-700">
            {NAV_LINKS.map((link) => (
              <li key={link.id}>
                <Link
                  href={link.href}
                  className="transition-colors hover:text-ink"
                  data-cursor-hover
                >
                  {t(link.id as 'services')}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <LocaleSwitch className="hidden sm:inline-flex" />
          <Button href="/contact" size="sm" className="hidden sm:inline-flex">
            {t('contact')}
          </Button>
          <button
            type="button"
            aria-label={open ? t('menuClose') : t('menuOpen')}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-ink/10 lg:hidden"
          >
            <span className="relative block h-3 w-4">
              <span
                className={cn(
                  'absolute left-0 top-0 h-px w-full bg-ink transition-transform duration-300',
                  open && 'translate-y-1.5 rotate-45',
                )}
              />
              <span
                className={cn(
                  'absolute left-0 top-1.5 h-px w-full bg-ink transition-opacity duration-300',
                  open && 'opacity-0',
                )}
              />
              <span
                className={cn(
                  'absolute bottom-0 left-0 h-px w-full bg-ink transition-transform duration-300',
                  open && '-translate-y-1.5 -rotate-45',
                )}
              />
            </span>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="container-x flex flex-col gap-8 pb-10 pt-4 lg:hidden"
          >
            <ul className="flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <li key={link.id}>
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block py-3 text-2xl font-medium tracking-tight"
                  >
                    {t(link.id as 'services')}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="flex items-center justify-between">
              <LocaleSwitch />
              <Button href="/contact" size="md" onClick={() => setOpen(false)}>
                {t('contact')}
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
