'use client';

import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

interface TerminalSequence {
  command: string;
  output: string[];
  outputClass?: string;
}

const SEQUENCES: TerminalSequence[] = [
  {
    command: 'lighthouse https://daratlas.fr --quiet',
    output: ['Performance......98', 'Accessibility...100', 'Best Practices..100', 'SEO.............100'],
    outputClass: 'text-midnight-300',
  },
  {
    command: 'curl -I https://daratlas.fr',
    output: [
      'HTTP/2 200',
      'strict-transport-security: max-age=63072000',
      'content-security-policy: default-src \'self\'',
      'x-frame-options: DENY',
    ],
  },
  {
    command: 'git push origin main',
    output: [
      'Counting objects: 24, done.',
      'Compressing objects: 100% (12/12)',
      'Writing objects: 100% (14/14)',
      'remote: Resolving deltas: 100%',
      'a3b4c5d..e6f7g8h main -> main',
    ],
    outputClass: 'text-stone-400',
  },
  {
    command: 'npm audit --audit-level=high',
    output: ['found 0 vulnerabilities'],
    outputClass: 'text-midnight-300',
  },
];

const TYPING_SPEED_MS = 35;
const OUTPUT_DELAY_MS = 200;
const PAUSE_BETWEEN_SEQUENCES_MS = 2200;

export function TerminalAnimation({ className }: { className?: string }) {
  const [sequenceIndex, setSequenceIndex] = useState(0);
  const [typedCommand, setTypedCommand] = useState('');
  const [outputLines, setOutputLines] = useState<string[]>([]);
  const [phase, setPhase] = useState<'typing' | 'output' | 'pause'>('typing');
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const reduce =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) {
      const seq = SEQUENCES[0]!;
      setTypedCommand(seq.command);
      setOutputLines(seq.output);
      return;
    }

    const sequence = SEQUENCES[sequenceIndex]!;

    if (phase === 'typing') {
      if (typedCommand.length < sequence.command.length) {
        const timer = window.setTimeout(() => {
          setTypedCommand(sequence.command.slice(0, typedCommand.length + 1));
        }, TYPING_SPEED_MS);
        return () => window.clearTimeout(timer);
      }
      const timer = window.setTimeout(() => setPhase('output'), OUTPUT_DELAY_MS);
      return () => window.clearTimeout(timer);
    }

    if (phase === 'output') {
      if (outputLines.length < sequence.output.length) {
        const timer = window.setTimeout(() => {
          setOutputLines(sequence.output.slice(0, outputLines.length + 1));
        }, OUTPUT_DELAY_MS);
        return () => window.clearTimeout(timer);
      }
      const timer = window.setTimeout(() => setPhase('pause'), PAUSE_BETWEEN_SEQUENCES_MS);
      return () => window.clearTimeout(timer);
    }

    const timer = window.setTimeout(() => {
      setSequenceIndex((prev) => (prev + 1) % SEQUENCES.length);
      setTypedCommand('');
      setOutputLines([]);
      setPhase('typing');
    }, 400);
    return () => window.clearTimeout(timer);
  }, [sequenceIndex, typedCommand, outputLines, phase]);

  const sequence = SEQUENCES[sequenceIndex]!;
  const showCursor = phase === 'typing';

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className={cn(
        'pointer-events-none select-none rounded-2xl border border-cream/10 bg-ink/95 p-5 font-mono text-[13px] leading-relaxed text-cream/80 shadow-[0_24px_60px_-30px_rgba(10,10,10,0.5)] backdrop-blur',
        className,
      )}
    >
      <div className="mb-4 flex items-center gap-1.5">
        <span className="h-2.5 w-2.5 rounded-full bg-tomato/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-cream/20" />
        <span className="h-2.5 w-2.5 rounded-full bg-cream/20" />
        <span className="ml-3 font-mono text-[10px] uppercase tracking-widest text-cream/30">
          daratlas, ~/site, main
        </span>
      </div>

      <div className="flex gap-2">
        <span className="text-tomato">$</span>
        <span className="break-all text-cream">
          {typedCommand}
          {showCursor && <span className="ml-0.5 inline-block h-3.5 w-2 -translate-y-0.5 animate-pulse bg-tomato align-middle" />}
        </span>
      </div>

      <div className={cn('mt-3 flex flex-col gap-1 break-all', sequence.outputClass ?? 'text-cream/60')}>
        {outputLines.map((line, index) => (
          <span key={`${sequenceIndex}-${index}`} className="text-[12px]">
            {line}
          </span>
        ))}
      </div>
    </div>
  );
}
