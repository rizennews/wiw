import React from 'react';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { ActionLink } from "@/components/ActionLink";
import { ArrowRight } from "lucide-react";

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Partnership Opportunities',
  description: 'Partner with Women-in-WACREN to scale our impact. Explore opportunities to fund cohorts, host workshops, or volunteer as a mentor.',
};

export default async function PartnershipPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('PartnershipPage');

  return (
    <div className="flex flex-col w-full min-h-screen bg-white">
      {/* Hero Section */}
      <div className="w-full bg-primary overflow-hidden">
        <section className="w-full max-w-[1400px] mx-auto px-4 md:px-8 py-20 md:py-32 flex flex-col items-center text-center">
          <h1 className="font-heading text-3xl md:text-5xl lg:text-6xl font-semibold leading-tight text-white mb-6 max-w-4xl">
            {t('heroTitle')}
          </h1>
          <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-3xl">
            {t('heroDesc')}
          </p>
        </section>
      </div>

      {/* Pathways Section */}
      <section className="w-full bg-white py-16 md:py-24">
        <div className="w-full max-w-[1400px] mx-auto px-4 md:px-8">
          <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-semibold text-slate-900 mb-8">
            {t('pathwaysTitle')}
          </h2>
          <div className="text-base md:text-lg text-slate-700 font-light leading-relaxed mb-12">
            <p>
              {t('pathwaysDesc')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8">
            
            {/* Card 1: Fund a cohort */}
            <div className="flex flex-col items-start p-8 bg-slate-50 rounded-[24px] hover:bg-slate-100 transition-colors duration-300 border border-slate-100">
              <h3 className="font-heading text-xl lg:text-2xl font-semibold leading-tight mb-4 text-slate-900">
                {t('card1Title')}
              </h3>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed mb-8 font-light">
                {t('card1Desc')}
              </p>
              <div className="mt-auto">
                <ActionLink href="/contact" variant="primary" icon={ArrowRight}>
                  {t('card1Btn')}
                </ActionLink>
              </div>
            </div>

            {/* Card 2: Host a workshop */}
            <div className="flex flex-col items-start p-8 bg-primary/5 rounded-[24px] hover:bg-primary/10 transition-colors duration-300 border border-primary/10">
              <h3 className="font-heading text-xl lg:text-2xl font-semibold leading-tight mb-4 text-slate-900">
                {t('card2Title')}
              </h3>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed mb-8 font-light">
                {t('card2Desc')}
              </p>
              <div className="mt-auto">
                <ActionLink href="/contact" variant="secondary" icon={ArrowRight}>
                  {t('card2Btn')}
                </ActionLink>
              </div>
            </div>

            {/* Card 3: Mentor or train */}
            <div className="flex flex-col items-start p-8 bg-primary/5 rounded-[24px] hover:bg-primary/10 transition-colors duration-300 border border-primary/10">
              <h3 className="font-heading text-xl lg:text-2xl font-semibold leading-tight mb-4 text-slate-900">
                {t('card3Title')}
              </h3>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed mb-8 font-light">
                {t('card3Desc')}
              </p>
              <div className="mt-auto">
                <ActionLink href="https://indico.wacren.net" variant="secondary" icon={ArrowRight}>
                  {t('card3Btn')}
                </ActionLink>
              </div>
            </div>

            {/* Card 4: Join as a participant */}
            <div className="flex flex-col items-start p-8 bg-slate-50 rounded-[24px] hover:bg-slate-100 transition-colors duration-300 border border-slate-100">
              <h3 className="font-heading text-xl lg:text-2xl font-semibold leading-tight mb-4 text-slate-900">
                {t('card4Title')}
              </h3>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed mb-8 font-light">
                {t('card4Desc')}
              </p>
              <div className="mt-auto">
                <ActionLink href="/programme#open-calls" variant="primary" icon={ArrowRight}>
                  {t('card4Btn')}
                </ActionLink>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* What your funding buys Section */}
      <section className="w-full bg-[#fafafa] py-16 md:py-24 border-t border-slate-200">
        <div className="w-full max-w-[1400px] mx-auto px-4 md:px-8">
          <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-semibold text-slate-900 mb-6">
            {t('fundingTitle')}
          </h2>
          <div className="text-base md:text-lg text-slate-700 font-light leading-relaxed mb-12 max-w-4xl">
            <p>
              {t('fundingDesc')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            
            {/* Card 1: Track record */}
            <div className="flex flex-col p-8 bg-white border border-slate-900 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(15,23,42,1)] transition-all duration-300">
              <h3 className="font-heading text-xl font-bold text-slate-900 mb-4">
                {t('trackRecordTitle')}
              </h3>
              <p className="text-base text-slate-700 leading-relaxed font-light">
                {t('trackRecordDesc')}
              </p>
            </div>

            {/* Card 2: Delivery capacity */}
            <div className="flex flex-col p-8 bg-[#e9f2f9] border border-slate-900 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(15,23,42,1)] transition-all duration-300">
              <h3 className="font-heading text-xl font-bold text-slate-900 mb-4">
                {t('deliveryCapacityTitle')}
              </h3>
              <p className="text-base text-slate-700 leading-relaxed font-light">
                {t('deliveryCapacityDesc')}
              </p>
            </div>

            {/* Card 3: Alignment */}
            <div className="flex flex-col p-8 bg-[#fff0f0] border border-slate-900 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(15,23,42,1)] transition-all duration-300">
              <h3 className="font-heading text-xl font-bold text-slate-900 mb-4">
                {t('alignmentTitle')}
              </h3>
              <p className="text-base text-slate-700 leading-relaxed font-light">
                {t('alignmentDesc')}
              </p>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
