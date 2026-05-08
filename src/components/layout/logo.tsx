import { Link } from '@/i18n/routing';
import { cn } from '@/lib/utils';

interface LogoProps {
  className?: string;
  variant?: 'default' | 'inverted';
}

export function Logo({ className, variant = 'default' }: LogoProps) {
  const colorTextPrimary = variant === 'inverted' ? 'text-cream' : 'text-ink';
  const colorTextSecondary = variant === 'inverted' ? 'text-cream/50' : 'text-stone-400';

  return (
    <Link
      href="/"
      aria-label="Dar Atlas"
      className={cn('group inline-flex items-baseline gap-1 font-sans', className)}
    >
      <span className={cn('text-lg font-semibold tracking-tight', colorTextPrimary)}>Dar</span>
      <span
        className={cn(
          'text-lg font-light transition-colors group-hover:text-tomato',
          colorTextSecondary,
        )}
      >
        /
      </span>
      <span className={cn('text-lg font-semibold tracking-tight italic', colorTextPrimary)}>
        Atlas
      </span>
    </Link>
  );
}
