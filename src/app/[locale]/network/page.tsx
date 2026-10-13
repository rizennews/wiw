import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { NetworkForm } from './NetworkForm';
import { buildPageMetadata } from '@/lib/site-config';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'NetworkPage' });

  return buildPageMetadata({
    locale,
    path: '/network',
    title: 'Join the WiW Network',
    description: t('description') || 'Join the Women-In-WACREN Network to connect, exchange knowledge, and access mentorship.',
    image: '/og-image.png',
  });
}

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
