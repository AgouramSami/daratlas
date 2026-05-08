import type { ReactNode } from 'react';

interface LegalSectionProps {
  title: string;
  children: ReactNode;
}

export function LegalSection({ title, children }: LegalSectionProps) {
  return (
    <section className="flex flex-col gap-5 border-t border-ink/10 py-10 first:border-t-0 first:pt-0 lg:py-12">
      <h2 className="font-display text-2xl italic font-normal text-ink lg:text-3xl">{title}</h2>
      <div className="flex flex-col gap-4 text-pretty text-base leading-relaxed text-ink/75 [&_a]:text-tomato [&_a:hover]:underline [&_strong]:font-medium [&_strong]:text-ink">
        {children}
      </div>
    </section>
  );
}
