import type { HTMLAttributes, ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  interactive?: boolean;
}

export function Card({ children, interactive = false, className, ...props }: CardProps) {
  return (
    <div
      className={cn(
        'rounded-2xl border border-ink/10 bg-cream p-8 transition-all duration-300',
        interactive &&
          'hover:-translate-y-1 hover:border-ink/30 hover:shadow-[0_24px_48px_-24px_rgba(10,10,10,0.18)]',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
