import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

type Variant = 'status' | 'tech' | 'accent' | 'neutral';

interface BadgeProps {
  variant?: Variant;
  children: ReactNode;
  className?: string;
  withDot?: boolean;
}

const variantClasses: Record<Variant, string> = {
  status: 'border border-midnight/30 bg-midnight/10 text-midnight-700',
  tech: 'border border-ink/10 bg-ink/[0.03] text-ink/80 font-mono',
  accent: 'border border-tomato/30 bg-tomato/10 text-tomato-700',
  neutral: 'border border-stone-200 bg-stone-50 text-stone-700',
};

export function Badge({ variant = 'neutral', children, className, withDot = false }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs',
        variantClasses[variant],
        className,
      )}
    >
      {withDot && (
        <span className="relative flex h-1.5 w-1.5">
          <span className="absolute inset-0 animate-ping rounded-full bg-current opacity-60" />
          <span className="relative h-1.5 w-1.5 rounded-full bg-current" />
        </span>
      )}
      {children}
    </span>
  );
}
