"use client";

import React, { useState, useTransition } from 'react';
import { ArrowRight, Mail, MapPin, Phone, CheckCircle2, AlertCircle } from 'lucide-react';
import { submitContactForm } from '@/app/actions/contact';
import { useTranslations } from 'next-intl';

export default function ContactPage() {
  const t = useTranslations('ContactPage');
  const [isPending, startTransition] = useTransition();
  const [status, setStatus] = useState<{ type: 'success' | 'error' | null; message: string }>({ type: null, message: '' });

  async function handleAction(formData: FormData) {
    setStatus({ type: null, message: '' });
    startTransition(async () => {
      const result = await submitContactForm(formData);
      if (result.success) {
        setStatus({ type: 'success', message: t('successMessage') });
      } else {
        setStatus({ type: 'error', message: result.error || t('errorMessage') });
      }
    });
  }

  return (
    <div className="flex flex-col w-full min-h-screen bg-white">
      {/* Short Hero Section */}
      <section className="relative w-full bg-primary pt-32 pb-12 md:pt-40 md:pb-16 overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-white/5 rounded-full blur-[100px] -translate-x-1/3 translate-y-1/3 pointer-events-none" />

        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-4 md:px-8 text-center flex flex-col items-center">
          <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-white leading-[1.1]">
            {t('heroTitle')}
          </h1>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="w-full bg-white py-16 md:py-24">
        <div className="w-full max-w-[1400px] mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Form */}
          <div className="lg:col-span-7 flex flex-col">
            <h2 className="text-xl md:text-2xl text-slate-800 font-light leading-relaxed mb-8">
              {t('formTitle')}
            </h2>
            
            <form className="flex flex-col gap-6" action={handleAction}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="role" className="text-sm font-semibold text-slate-900 uppercase tracking-wide">
                  {t('roleLabel')}
                </label>
                <div className="relative">
                  <select 
                    id="role"
                    name="role"
                    defaultValue=""
                    required
                    className="w-full border border-slate-300 rounded-xl px-4 py-3 text-slate-900 appearance-none focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all bg-white"
                  >
                    <option value="" disabled>{t('roleSelect')}</option>
                    <option value="funder">{t('roleFunder')}</option>
                    <option value="host">{t('roleHost')}</option>
                    <option value="mentor">{t('roleMentor')}</option>
                    <option value="participant">{t('roleParticipant')}</option>
                    <option value="media">{t('roleMedia')}</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-500">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-sm font-semibold text-slate-900 uppercase tracking-wide">
                  {t('messageLabel')}
                </label>
                <textarea 
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="w-full border border-slate-300 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                  placeholder={t('messagePlaceholder')}
                />
              </div>

              <button 
                type="submit"
                disabled={isPending}
                className="mt-2 inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white font-semibold rounded-full hover:bg-primary/90 transition-colors duration-300 w-fit disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isPending ? t('sendingButton') : t('sendButton')}
                {!isPending && <ArrowRight className="w-5 h-5" />}
              </button>

              {status.type && (
                <div className={`flex items-center gap-2 p-4 rounded-xl ${status.type === 'success' ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' : 'bg-red-50 text-red-700 border border-red-200'}`}>
                  {status.type === 'success' ? <CheckCircle2 className="w-5 h-5 shrink-0" /> : <AlertCircle className="w-5 h-5 shrink-0" />}
                  <p className="text-sm font-medium">{status.message}</p>
                </div>
              )}
            </form>
          </div>

          {/* Right Column: Contact Info & Newsletter */}
          <div className="lg:col-span-5 flex flex-col gap-12 mt-12 lg:mt-0 lg:pl-8">
            
            {/* Office Info */}
            <div className="flex flex-col p-8 md:p-10 bg-slate-50 rounded-3xl">
              <h3 className="font-heading text-xl md:text-2xl font-semibold text-slate-900 mb-6">
                {t('officeTitle')}
              </h3>
              
              <ul className="flex flex-col gap-6 text-slate-700 font-light">
                <li className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                  <span className="leading-relaxed">
                    VCG Office Complex, IPS Road<br />
                    P O Box LG 1279, Accra, Ghana
                  </span>
                </li>
                <li className="flex items-center gap-4">
                  <Phone className="w-6 h-6 text-primary shrink-0" />
                  <span>Tel: +233 302942873</span>
                </li>
                <li className="flex items-center gap-4">
                  <Mail className="w-6 h-6 text-primary shrink-0" />
                  <a href="mailto:wiw@wacren.net" className="hover:text-primary transition-colors hover:underline underline-offset-4">
                    wiw@wacren.net
                  </a>
                </li>
              </ul>
            </div>

            {/* Newsletter */}
            <div className="flex flex-col p-8 md:p-10 bg-primary/5 rounded-3xl border border-primary/10">
              <h3 className="font-heading text-xl md:text-2xl font-semibold text-slate-900 mb-4">
                {t('newsletterTitle')}
              </h3>
              <p className="text-slate-700 font-light leading-relaxed mb-6">
                {t('newsletterDesc')}
              </p>
              
              <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
                <input 
                  type="email" 
                  placeholder={t('emailAddressPlaceholder')}
                  className="w-full border border-slate-300 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all bg-white"
                />
                <button 
                  type="submit"
                  className="inline-flex items-center justify-center px-6 py-3 bg-slate-900 text-white font-semibold rounded-full hover:bg-slate-800 transition-colors duration-300"
                >
                  {t('subscribeButton')}
                </button>
              </form>
            </div>

          </div>

        </div>
      </section>
    </div>
  );
}
