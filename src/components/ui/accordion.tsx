'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { cn } from '@/lib/utils';

interface AccordionItem {
  id: string;
  question: string;
  answer: string;
}

interface AccordionProps {
  items: AccordionItem[];
  className?: string;
}

export function Accordion({ items, className }: AccordionProps) {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <div className={cn('divide-y divide-ink/10 border-y border-ink/10', className)}>
      {items.map((item, index) => {
        const isOpen = openId === item.id;
        const indexLabel = String(index + 1).padStart(2, '0');

        return (
          <div key={item.id}>
            <button
              type="button"
              onClick={() => setOpenId(isOpen ? null : item.id)}
              aria-expanded={isOpen}
              aria-controls={`panel-${item.id}`}
              className="group flex w-full items-start justify-between gap-6 py-7 text-left transition-colors hover:text-tomato lg:py-8"
            >
              <span className="flex items-start gap-6 lg:gap-10">
                <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink/40 lg:text-[11px]">
                  {indexLabel}
                </span>
                <span className="text-pretty font-display text-xl italic font-normal leading-[1.25] text-ink lg:text-2xl">
                  {item.question}
                </span>
              </span>
              <span
                aria-hidden="true"
                className={cn(
                  'relative mt-3 inline-block h-3 w-3 shrink-0',
                )}
              >
                <span
                  className={cn(
                    'absolute left-0 top-1/2 h-px w-full -translate-y-1/2 transition-colors',
                    isOpen ? 'bg-tomato' : 'bg-ink group-hover:bg-tomato',
                  )}
                />
                <span
                  className={cn(
                    'absolute left-1/2 top-0 h-full w-px -translate-x-1/2 transition-all duration-300',
                    isOpen ? 'rotate-90 bg-tomato' : 'bg-ink group-hover:bg-tomato',
                  )}
                />
              </span>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={`panel-${item.id}`}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden"
                >
                  <div className="pb-8 pl-12 pr-6 text-pretty text-base leading-relaxed text-ink/70 lg:pl-20 lg:text-lg">
                    {item.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
