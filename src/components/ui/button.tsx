import Link from 'next/link';
import { forwardRef } from 'react';
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';
import { cn } from '@/lib/utils';

type Variant = 'primary' | 'secondary' | 'ghost';
type Size = 'sm' | 'md' | 'lg';

const baseClasses =
  'inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-200 ease-out focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tomato disabled:pointer-events-none disabled:opacity-50';

const variantClasses: Record<Variant, string> = {
  primary:
    'bg-tomato text-cream hover:bg-tomato-600 hover:shadow-[0_8px_24px_-8px_rgba(217,79,61,0.55)]',
  secondary:
    'border border-ink/15 bg-transparent text-ink hover:border-ink hover:bg-ink hover:text-cream',
  ghost: 'bg-transparent text-ink hover:bg-ink/5',
};

const sizeClasses: Record<Size, string> = {
  sm: 'h-9 px-4 text-sm',
  md: 'h-11 px-6 text-sm',
  lg: 'h-14 px-8 text-base',
};

interface CommonProps {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
}

type ButtonAsButton = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: never;
  };

type ButtonAsLink = CommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

export type ButtonProps = ButtonAsButton | ButtonAsLink;

export const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  function Button(props, ref) {
    const { variant = 'primary', size = 'md', className, children, ...rest } = props;

    const classes = cn(baseClasses, variantClasses[variant], sizeClasses[size], className);

    if ('href' in rest && rest.href !== undefined) {
      const { href, ...anchorRest } = rest as AnchorHTMLAttributes<HTMLAnchorElement> & {
        href: string;
      };
      const isExternal = href.startsWith('http') || href.startsWith('mailto:');

      if (isExternal) {
        return (
          <a
            ref={ref as React.Ref<HTMLAnchorElement>}
            href={href}
            className={classes}
            {...anchorRest}
          >
            {children}
          </a>
        );
      }

      return (
        <Link href={href} className={classes} {...anchorRest}>
          {children}
        </Link>
      );
    }

    return (
      <button
        ref={ref as React.Ref<HTMLButtonElement>}
        className={classes}
        {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}
      >
        {children}
      </button>
    );
  },
);
