'use client';

import { motion, useInView } from 'framer-motion';
import { Fragment, useRef, type ReactNode } from 'react';

function pseudoRandom(seed: number) {
  const x = Math.sin(seed * 9301 + 49297) * 233280;
  return x - Math.floor(x);
}

interface KineticTextProps {
  text: string;
  delay?: number;
  stagger?: number;
  className?: string;
  italic?: boolean;
  scatter?: number;
  play?: boolean;
}

export function KineticText({
  text,
  delay = 0,
  stagger = 0.022,
  className,
  italic,
  scatter = 1,
  play,
}: KineticTextProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-15% 0px' });
  const shouldPlay = play !== undefined ? play : inView;
  const tokens = text.split(/(\s+)/);

  return (
    <span ref={ref} className={className} aria-label={text}>
      {tokens.map((token, ti) => {
        if (/^\s+$/.test(token)) return <Fragment key={`s-${ti}`}>{token}</Fragment>;
        return (
          <span key={`w-${ti}`} className="inline-block whitespace-nowrap">
            {token.split('').map((char, ci) => {
              const seed = ti * 97 + ci * 13;
              const dx = (pseudoRandom(seed * 1.7) - 0.5) * 220 * scatter;
              const dy = (pseudoRandom(seed * 2.3) - 0.5) * 140 * scatter;
              const dr = (pseudoRandom(seed * 3.1) - 0.5) * 50 * scatter;
              const charDelay = delay + (ti * 4 + ci) * stagger;
              return (
                <motion.span
                  key={`c-${ti}-${ci}`}
                  initial={{ x: dx, y: dy, rotate: dr, opacity: 0 }}
                  animate={
                    shouldPlay
                      ? { x: 0, y: 0, rotate: 0, opacity: 1 }
                      : { x: dx, y: dy, rotate: dr, opacity: 0 }
                  }
                  transition={{ duration: 0.95, delay: charDelay, ease: [0.16, 1, 0.3, 1] }}
                  className={italic ? 'inline-block italic' : 'inline-block'}
                  aria-hidden="true"
                >
                  {char}
                </motion.span>
              );
            })}
          </span>
        );
      })}
    </span>
  );
}

interface KineticHeadingProps {
  children: ReactNode;
  className?: string;
}

export function KineticHeading({ children, className }: KineticHeadingProps) {
  return <span className={className}>{children}</span>;
}
