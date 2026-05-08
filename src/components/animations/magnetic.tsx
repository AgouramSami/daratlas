'use client';

import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useEffect, useRef, useState, type MouseEvent, type ReactNode } from 'react';

interface MagneticProps {
  children: ReactNode;
  strength?: number;
  className?: string;
}

export function Magnetic({ children, strength = 22, className }: MagneticProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 220, damping: 18, mass: 0.5 });
  const springY = useSpring(y, { stiffness: 220, damping: 18, mass: 0.5 });

  useEffect(() => {
    const isTouch = window.matchMedia('(pointer: coarse)').matches;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!isTouch && !reduce) setEnabled(true);
  }, []);

  const onMove = (event: MouseEvent<HTMLDivElement>) => {
    if (!enabled) return;
    const node = ref.current;
    if (!node) return;
    const rect = node.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = (event.clientX - cx) / (rect.width / 2);
    const dy = (event.clientY - cy) / (rect.height / 2);
    x.set(dx * strength);
    y.set(dy * strength);
  };

  const onLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={enabled ? { x: springX, y: springY } : undefined}
      className={className}
    >
      {children}
    </motion.div>
  );
}
