import type { ReactNode } from 'react';
import { FadeIn } from '@/components/animations/fade-in';
import { cn } from '@/lib/utils';

interface SectionHeaderProps {
  eyebrow: string;
  chapter?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: 'left' | 'center';
  className?: string;
}

export function SectionHeader({
  eyebrow,
  chapter,
  title,
  description,
  align = 'left',
  className,
}: SectionHeaderProps) {
  return (
    <FadeIn
      className={cn('flex flex-col gap-4', align === 'center' && 'items-center text-center', className)}
    >
      <div className="flex items-baseline gap-3 font-mono text-xs uppercase tracking-widest text-stone-500">
        {chapter && (
          <>
            <span className="text-tomato">{chapter}</span>
            <span aria-hidden="true" className="h-px w-6 bg-stone-300" />
          </>
        )}
        <span>{eyebrow}</span>
      </div>
      <h2 className="max-w-3xl text-display-md font-semibold text-balance">{title}</h2>
      {description && (
        <p className="max-w-2xl text-base leading-relaxed text-stone-600 text-pretty">
          {description}
        </p>
      )}
    </FadeIn>
  );
}
