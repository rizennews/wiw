import { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { ArrowRight } from 'lucide-react';
import { NetworkForm } from './NetworkForm';

export const metadata: Metadata = {
  title: 'Join the WiW Network',
  description: 'Join the Women-in-WACREN Network to connect, exchange knowledge, and access mentorship.',
};

export default async function NetworkPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('NetworkPage');

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
        <div className="w-full max-w-[800px] mx-auto px-4 md:px-8">
          
          <div className="flex flex-col">
            <h2 className="text-xl md:text-2xl text-slate-800 font-light leading-relaxed mb-8">
              {t('description')}
            </h2>
            
            <NetworkForm />
          </div>

        </div>
      </section>
    </div>
  );
}
