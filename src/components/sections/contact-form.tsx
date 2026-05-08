'use client';

import { useTranslations } from 'next-intl';
import { useState, type FormEvent } from 'react';
import { Button } from '@/components/ui/button';

type Status = 'idle' | 'submitting' | 'success' | 'queued' | 'error';

export function ContactForm() {
  const t = useTranslations('contactPage.form');
  const [status, setStatus] = useState<Status>('idle');
  const [error, setError] = useState<string | null>(null);

  const projectTypes = t.raw('projectTypes') as string[];
  const budgets = t.raw('budgets') as string[];

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus('submitting');
    setError(null);

    const data = new FormData(event.currentTarget);
    const payload = {
      name: String(data.get('name') ?? ''),
      email: String(data.get('email') ?? ''),
      projectType: String(data.get('projectType') ?? ''),
      budget: String(data.get('budget') ?? ''),
      message: String(data.get('message') ?? ''),
      website: String(data.get('website') ?? ''),
      honeypot: String(data.get('company_url') ?? ''),
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const json = (await response.json().catch(() => ({}))) as {
        error?: string;
        queued?: boolean;
      };

      if (!response.ok) {
        setError(json.error ?? t('errorGeneric'));
        setStatus('error');
        return;
      }

      setStatus(json.queued ? 'queued' : 'success');
    } catch {
      setError(t('errorNetwork'));
      setStatus('error');
    }
  }

  if (status === 'success') {
    return (
      <div className="rounded-2xl border border-ink/15 bg-cream-100 p-8 text-center">
        <h2 className="font-display text-3xl italic font-normal text-ink">{t('successTitle')}</h2>
        <p className="mt-4 text-pretty text-base text-ink/70">{t('successDescription')}</p>
      </div>
    );
  }

  if (status === 'queued') {
    return (
      <div className="rounded-2xl border border-tomato/30 bg-tomato/5 p-8">
        <h2 className="font-display text-3xl italic font-normal text-ink">{t('queuedTitle')}</h2>
        <p className="mt-4 text-pretty text-base text-ink/75">{t('queuedDescription')}</p>
        <a
          href="mailto:contact@daratlas.fr"
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-medium text-cream transition-colors hover:bg-tomato"
          data-cursor-text="Email"
        >
          {t('queuedMailto')} <span aria-hidden="true">&rarr;</span>
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-6" noValidate>
      <input
        type="text"
        name="company_url"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="absolute left-[-9999px] h-0 w-0 opacity-0"
      />

      <div className="grid gap-6 sm:grid-cols-2">
        <Field label={t('name')} name="name" required type="text" autoComplete="name" />
        <Field
          label={t('email')}
          name="email"
          required
          type="email"
          autoComplete="email"
          placeholder={t('emailPlaceholder')}
        />
      </div>

      <SelectField
        label={t('projectType')}
        name="projectType"
        required
        options={projectTypes}
        placeholder={t('selectPlaceholder')}
      />
      <SelectField
        label={t('budget')}
        name="budget"
        options={budgets}
        placeholder={t('selectPlaceholder')}
      />
      <Field
        label={t('website')}
        name="website"
        type="url"
        placeholder={t('websitePlaceholder')}
      />

      <div className="flex flex-col gap-2">
        <label
          htmlFor="message"
          className="font-mono text-xs uppercase tracking-widest text-ink/55"
        >
          {t('message')}
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          className="w-full rounded-xl border border-ink/15 bg-cream px-4 py-3 text-sm placeholder:text-ink/40 focus:border-ink focus:outline-none"
          placeholder={t('messagePlaceholder')}
        />
      </div>

      <p className="text-xs text-ink/55">{t('consent')}</p>

      {error && (
        <div
          role="alert"
          className="rounded-xl border border-tomato/40 bg-tomato/5 p-4 text-sm text-tomato-700"
        >
          {error}
        </div>
      )}

      <div className="flex flex-wrap items-center gap-4">
        <Button type="submit" size="lg" disabled={status === 'submitting'}>
          {status === 'submitting' ? t('submitting') : t('submit')}
        </Button>
        <span className="font-mono text-xs text-ink/55">{t('responseTime')}</span>
      </div>
    </form>
  );
}

interface FieldProps {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
  placeholder?: string;
}

function Field({ label, name, type = 'text', required, autoComplete, placeholder }: FieldProps) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={name} className="font-mono text-xs uppercase tracking-widest text-ink/55">
        {label} {required && <span className="text-tomato">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        placeholder={placeholder}
        className="h-12 rounded-xl border border-ink/15 bg-cream px-4 text-sm placeholder:text-ink/40 focus:border-ink focus:outline-none"
      />
    </div>
  );
}

interface SelectFieldProps {
  label: string;
  name: string;
  options: string[];
  required?: boolean;
  placeholder: string;
}

function SelectField({ label, name, options, required, placeholder }: SelectFieldProps) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={name} className="font-mono text-xs uppercase tracking-widest text-ink/55">
        {label} {required && <span className="text-tomato">*</span>}
      </label>
      <select
        id={name}
        name={name}
        required={required}
        defaultValue=""
        className="h-12 rounded-xl border border-ink/15 bg-cream px-4 text-sm focus:border-ink focus:outline-none"
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}
