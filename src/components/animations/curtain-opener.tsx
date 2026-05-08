'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export function CurtainOpener() {
  const [visible, setVisible] = useState(true);
  const [retract, setRetract] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) {
      setVisible(false);
      window.dispatchEvent(new CustomEvent('dar-atlas-ready'));
      return;
    }
    document.body.style.overflow = 'hidden';
    const t = window.setTimeout(() => {
      setRetract(true);
      window.dispatchEvent(new CustomEvent('dar-atlas-ready'));
    }, 750);
    return () => {
      window.clearTimeout(t);
      document.body.style.overflow = '';
    };
  }, []);

  if (!visible) return null;

  return (
    <motion.div
      aria-hidden="true"
      initial={{ y: 0 }}
      animate={retract ? { y: '-100%' } : { y: 0 }}
      transition={{ duration: 0.95, ease: [0.76, 0, 0.24, 1] }}
      onAnimationComplete={() => {
        if (retract) {
          document.body.style.overflow = '';
          setVisible(false);
        }
      }}
      className="fixed inset-0 z-[200] flex items-center justify-center bg-ink"
    >
      <motion.span
        initial={{ y: 60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
        className="font-display text-[clamp(3rem,13vw,13rem)] italic font-normal leading-none text-cream"
      >
        Dar Atlas
      </motion.span>

      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 font-mono text-[10px] uppercase tracking-[0.32em] text-cream/60"
      >
        Studio web
      </motion.span>
    </motion.div>
  );
}
