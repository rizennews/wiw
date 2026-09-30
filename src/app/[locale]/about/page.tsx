import { setRequestLocale, getTranslations } from 'next-intl/server';
import { Timeline } from '@/components/Timeline';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about the Women-in-WACREN journey, our mission to close the gender gap in STEM, and our track record of empowering over 2000 women.',
};

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('AboutPage');

  return (
    <div className="w-full flex flex-col min-h-screen">
      {/* Short Hero Section (Matching Homepage Style, No Image) */}
      <section className="relative w-full bg-primary pt-32 pb-12 md:pt-40 md:pb-16 overflow-hidden">
        
        {/* Subtle abstract glow effects to replace the image */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-white/5 rounded-full blur-[100px] -translate-x-1/3 translate-y-1/3 pointer-events-none" />

        <div className="relative z-10 w-full max-w-[1000px] mx-auto px-4 md:px-8 text-center flex flex-col items-center">
          <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-white leading-[1.1]">
            {t('heroTitle')}
          </h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="w-full bg-white py-16 md:py-24">
        <div className="w-full max-w-[1400px] mx-auto px-4 md:px-8">
          <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-semibold text-slate-900 mb-8">
            {t('section1Title')}
          </h2>
          <div className="text-base md:text-lg text-slate-700 font-light leading-relaxed space-y-6">
            <p>
              {t.raw('section1P1')}
            </p>
            <p>
              {t.raw('section1P2')}
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="w-full bg-white pb-16 md:pb-24">
        <div className="w-full max-w-[1400px] mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            
            {/* Vision Card */}
            <div className="flex flex-col items-start p-10 md:p-12 bg-slate-50 rounded-[32px] hover:bg-slate-100 transition-colors duration-300">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-5">{t('ourFuture')}</span>
              <h3 className="font-heading text-2xl lg:text-3xl font-semibold leading-tight mb-5 text-slate-900">
                {t('visionTitle')}
              </h3>
              <p className="text-base text-slate-700 leading-relaxed font-light">
                {t('visionDesc')}
              </p>
            </div>

            {/* Mission Card */}
            <div className="flex flex-col items-start p-10 md:p-12 bg-primary/5 rounded-[32px] hover:bg-primary/10 transition-colors duration-300">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-5">{t('ourPurpose')}</span>
              <h3 className="font-heading text-2xl lg:text-3xl font-semibold leading-tight mb-5 text-slate-900">
                {t('missionTitle')}
              </h3>
              <p className="text-base text-slate-700 leading-relaxed font-light">
                {t.raw('missionDesc')}
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Who we work with Section */}
      <section className="w-full bg-white pb-16 md:pb-24">
        <div className="w-full max-w-[1400px] mx-auto px-4 md:px-8">
          <div className="flex flex-col items-center text-center mb-12">
            <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-semibold text-slate-900 mb-4">
              {t('whoTitle')}
            </h2>
            <p className="text-base md:text-lg text-slate-700 font-light max-w-2xl">
              {t('whoDesc')}
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 lg:gap-6">
            {[
              { name: "European Union", src: "/EU.jpg" },
              { name: "AfricaConnect4", src: "/africaconnect4.png" },
              { name: "GÉANT", src: "/GÉANT_idrNEsplyc_1.png" },
              { name: "Eko-Konnect", src: "/ekoconnect.jpg" },
              { name: "PyLadies", src: "/pyladies_wordmark_standard_black.png" },
              { name: "University of Lagos", src: "/university of lagos.png" },
              { name: "NgREN", src: "/NgREN-logo.png" },
              { name: "WACREN", src: "/wacren.png" }
            ].map((partner, idx) => (
              <div 
                key={idx} 
                className="flex items-center justify-center p-6 bg-slate-50 border border-slate-100 rounded-[24px] hover:bg-slate-100 hover:shadow-sm transition-all duration-300 text-center min-h-[120px]"
              >
                {partner.src ? (
                  <img 
                    src={partner.src} 
                    alt={partner.name} 
                    className="max-h-14 w-auto object-contain mix-blend-multiply grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all duration-300" 
                  />
                ) : (
                  <span className="font-semibold text-slate-500 text-sm tracking-wide">{partner.name}</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Timeline />
    </div>
  );
}
