"use client";

import React, { useState, useTransition } from 'react';
import { ArrowRight, CheckCircle2, AlertCircle } from 'lucide-react';
import { submitNetworkForm } from '@/app/actions/network';
import { useTranslations } from 'next-intl';

export function NetworkForm() {
  const t = useTranslations('NetworkPage');
  const [isPending, startTransition] = useTransition();
  const [status, setStatus] = useState<{ type: 'success' | 'error' | null; message: string }>({ type: null, message: '' });

  async function handleAction(formData: FormData) {
    setStatus({ type: null, message: '' });
    startTransition(async () => {
      const result = await submitNetworkForm(formData);
      if (result.success) {
        setStatus({ type: 'success', message: t('successMessage') });
      } else {
        setStatus({ type: 'error', message: result.error || t('errorMessage') });
      }
    });
  }

  return (
    <form className="flex flex-col gap-6" action={handleAction}>
      <div className="flex flex-col gap-2">
        <label htmlFor="name" className="text-sm font-semibold text-slate-900 uppercase tracking-wide">
          {t('nameLabel')}
        </label>
        <input 
          type="text" 
          id="name"
          name="name"
          required
          className="w-full border border-slate-300 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
          placeholder={t('namePlaceholder')}
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="text-sm font-semibold text-slate-900 uppercase tracking-wide">
          {t('emailLabel')}
        </label>
        <input 
          type="email" 
          id="email"
          name="email"
          required
          className="w-full border border-slate-300 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
          placeholder={t('emailPlaceholder')}
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="institution" className="text-sm font-semibold text-slate-900 uppercase tracking-wide">
          {t('institutionLabel')}
        </label>
        <input 
          type="text" 
          id="institution"
          name="institution"
          required
          className="w-full border border-slate-300 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
          placeholder={t('institutionPlaceholder')}
        />
      </div>

      <button 
        type="submit"
        disabled={isPending}
        className="mt-2 inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white font-semibold rounded-full hover:bg-primary/90 transition-colors duration-300 w-fit disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isPending ? t('submittingButton') : t('submitButton')}
        {!isPending && <ArrowRight className="w-5 h-5" />}
      </button>

      {status.type && (
        <div className={`flex items-center gap-2 p-4 rounded-xl ${status.type === 'success' ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' : 'bg-red-50 text-red-700 border border-red-200'}`}>
          {status.type === 'success' ? <CheckCircle2 className="w-5 h-5 shrink-0" /> : <AlertCircle className="w-5 h-5 shrink-0" />}
          <p className="text-sm font-medium">{status.message}</p>
        </div>
      )}
    </form>
  );
}
