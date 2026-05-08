'use client';

import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useEffect, useState } from 'react';

const SELECTOR_INTERACTIVE = 'a, button, [role="button"], input, textarea, select, [data-cursor-hover]';

type CursorVariant = 'tomato' | 'ink';

export function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [label, setLabel] = useState<string | null>(null);
  const [variant, setVariant] = useState<CursorVariant>('tomato');
  const [visible, setVisible] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);

  const springX = useSpring(x, { stiffness: 380, damping: 30, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 380, damping: 30, mass: 0.4 });

  useEffect(() => {
    const isTouch = window.matchMedia('(pointer: coarse)').matches;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!isTouch && !reduce) setEnabled(true);
  }, []);

  useEffect(() => {
    if (!enabled) return;

    const onMove = (event: MouseEvent) => {
      x.set(event.clientX);
      y.set(event.clientY);
      if (!visible) setVisible(true);
    };
    const onLeave = () => setVisible(false);
    const onEnter = () => setVisible(true);
    const onOver = (event: MouseEvent) => {
      const target = event.target as Element | null;
      const interactive = target?.closest(SELECTOR_INTERACTIVE);
      setHovered(Boolean(interactive));
      const labelEl = target?.closest('[data-cursor-text]') as HTMLElement | null;
      setLabel(labelEl?.dataset.cursorText ?? null);
      const dataVariant = labelEl?.dataset.cursorVariant;
      setVariant(dataVariant === 'ink' ? 'ink' : 'tomato');
    };

    window.addEventListener('mousemove', onMove);
    document.addEventListener('mouseleave', onLeave);
    document.addEventListener('mouseenter', onEnter);
    document.addEventListener('mouseover', onOver);

    return () => {
      window.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseleave', onLeave);
      document.removeEventListener('mouseenter', onEnter);
      document.removeEventListener('mouseover', onOver);
    };
  }, [enabled, visible, x, y]);

  if (!enabled) return null;

  const hasLabel = Boolean(label);
  const size = hasLabel ? 96 : hovered ? 56 : 14;

  const labelBg = variant === 'ink' ? 'bg-ink' : 'bg-tomato';

  return (
    <motion.div
      aria-hidden="true"
      style={{ x: springX, y: springY }}
      className="pointer-events-none fixed left-0 top-0 z-[100] hidden md:block"
    >
      <motion.div
        animate={{
          width: size,
          height: size,
          opacity: visible ? 1 : 0,
        }}
        transition={{ type: 'spring', stiffness: 320, damping: 24 }}
        style={{ mixBlendMode: hasLabel ? 'normal' : 'difference' }}
        className={
          hasLabel
            ? `-translate-x-1/2 -translate-y-1/2 rounded-full ${labelBg} flex items-center justify-center`
            : '-translate-x-1/2 -translate-y-1/2 rounded-full border border-cream'
        }
      >
        {hasLabel ? (
          <motion.span
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-mono text-[10px] uppercase tracking-[0.18em] text-cream"
          >
            {label}
          </motion.span>
        ) : null}
      </motion.div>
    </motion.div>
  );
}
