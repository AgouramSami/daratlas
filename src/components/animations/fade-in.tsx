'use client';

import { motion, useInView, type Variants } from 'framer-motion';
import { useRef, type ReactNode } from 'react';

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  y?: number;
  className?: string;
  as?: 'div' | 'section' | 'article' | 'header' | 'footer';
}

const buildVariants = (y: number, duration: number, delay: number): Variants => ({
  hidden: { opacity: 0, y },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration,
      delay,
      ease: [0.16, 1, 0.3, 1],
    },
  },
});

export function FadeIn({
  children,
  delay = 0,
  duration = 0.7,
  y = 24,
  className,
  as = 'div',
}: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const MotionTag = motion[as];

  return (
    <MotionTag
      ref={ref}
      variants={buildVariants(y, duration, delay)}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      className={className}
    >
      {children}
    </MotionTag>
  );
}
