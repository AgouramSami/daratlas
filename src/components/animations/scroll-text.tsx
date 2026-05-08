'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, type ReactNode } from 'react';

interface ScrollTextProps {
  text: string;
  italicText?: string;
  className?: string;
  italicClassName?: string;
  as?: 'h1' | 'h2' | 'h3';
  staggerDelay?: number;
}

export function ScrollText({
  text,
  italicText,
  className,
  italicClassName,
  as = 'h2',
  staggerDelay = 0.025,
}: ScrollTextProps) {
  const ref = useRef<HTMLElement | null>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const renderWords = (input: string, baseDelay: number, italic = false): ReactNode => {
    const words = input.split(' ');
    return words.map((word, wordIndex) => (
      <span
        key={`${italic ? 'italic-' : 'reg-'}${wordIndex}-${word}`}
        className="inline-block whitespace-pre"
      >
        {word.split('').map((char, charIndex) => (
          <motion.span
            key={`${wordIndex}-${charIndex}`}
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
            transition={{
              duration: 0.5,
              delay: baseDelay + (wordIndex * 0.04) + (charIndex * staggerDelay) / 4,
              ease: [0.16, 1, 0.3, 1],
            }}
            className={italic ? italicClassName : undefined}
            style={italic ? { fontStyle: 'italic' } : undefined}
          >
            {char}
          </motion.span>
        ))}
        {wordIndex < words.length - 1 && <span> </span>}
      </span>
    ));
  };

  const Tag = as as 'h2';

  return (
    <Tag ref={ref as never} className={className}>
      {renderWords(text, 0)}
      {italicText && (
        <>
          {' '}
          {renderWords(italicText, text.length * staggerDelay * 0.25, true)}
        </>
      )}
    </Tag>
  );
}
