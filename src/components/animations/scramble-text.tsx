'use client';

import { useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

function placeholder(text: string) {
  return text
    .split('')
    .map((c) => (c === ' ' ? ' ' : CHARS[Math.floor(Math.random() * CHARS.length)]))
    .join('');
}

interface ScrambleTextProps {
  text: string;
  duration?: number;
  delay?: number;
  className?: string;
  as?: 'span' | 'div';
}

export function ScrambleText({
  text,
  duration = 700,
  delay = 0,
  className,
  as = 'span',
}: ScrambleTextProps) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-10% 0px' });
  const [display, setDisplay] = useState(text);
  const Tag = as;

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) {
      setDisplay(text);
      return;
    }
    if (!inView) {
      setDisplay(placeholder(text));
      return;
    }

    const startAt = performance.now() + delay;
    let frame = 0;
    const tick = (now: number) => {
      const elapsed = now - startAt;
      if (elapsed < 0) {
        frame = requestAnimationFrame(tick);
        return;
      }
      const progress = Math.min(1, elapsed / duration);
      const reveal = Math.floor(progress * text.length);
      const out = text
        .split('')
        .map((c, i) => {
          if (i < reveal) return c;
          if (c === ' ') return ' ';
          return CHARS[Math.floor(Math.random() * CHARS.length)];
        })
        .join('');
      setDisplay(out);
      if (progress < 1) frame = requestAnimationFrame(tick);
      else setDisplay(text);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, text, duration, delay]);

  return (
    <Tag ref={ref as React.RefObject<HTMLDivElement & HTMLSpanElement>} className={className}>
      <span className="sr-only">{text}</span>
      <span aria-hidden="true">{display}</span>
    </Tag>
  );
}
