import { getTranslations, setRequestLocale } from 'next-intl/server';
import { ActionLink } from '@/components/ActionLink';
import { VideoTestimonialCard } from '@/components/VideoTestimonialCard';
import { ImpactCard } from '@/components/ImpactCard';
import { Network, Users, BookOpen, Lightbulb, ArrowRight } from 'lucide-react';

import { Metadata } from 'next';

const videoTestimonials = [
  { entryId: '0_u8fr9jbw', wid: '0_54uwc9cw', name: 'Rose Gohoue', label: 'WiW Benin', title: 'Rose Gohoue - WiW Benin' },
  { entryId: '0_qovxjw3y', wid: '0_cufk7vpv', name: 'Zeinabou Bagayoko', label: 'WiW Mali', title: 'Zeinabou Bagayoko - WiW Mali' },
  { entryId: '0_gnyqxfyt', wid: '0_ialpi6fq', name: 'Rasmata Simpore', label: 'WiW Burkina Faso', title: 'Rasmata Simpore - WiW Burkina Faso' },
  { entryId: '0_x2j4oe0b', wid: '0_9h7q1yj1', name: 'Attiogbe Afi', label: 'WiW Togo', title: 'Attiogbe Afi - WiW Togo' },
  { entryId: '0_b01xci0p', wid: '0_13ku5lrj', name: 'Matilda Owusu', label: 'WiW Ghana', title: 'Women-In-WACREN 2024 - Interview with Matilda Owusu (Ghana)' },
];

export const metadata: Metadata = {
  title: 'Our Impact',
  description: 'Explore the real-world impact of the Women-in-WACREN programme through data, success stories, and our growing network.',
};

export default async function ImpactPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('ImpactPage');

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
      <section className="w-full bg-white py-16 md:py-24 flex-1">
        <div className="w-full max-w-[1400px] mx-auto px-4 md:px-8">
          <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-semibold text-slate-900 mb-8">
            {t('section1Title')}
          </h2>
          <div className="text-base md:text-lg text-slate-700 font-light leading-relaxed space-y-6">
            <p>
              {t('section1Desc')}
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mt-16">
            <ImpactCard 
              icon={Network}
              title={t('impactNetworkTitle')}
              description={t('impactNetworkDesc')}
            />
            <ImpactCard 
              icon={Users}
              title={t('impactMentorTitle')}
              description={t('impactMentorDesc')}
            />
            <ImpactCard 
              icon={BookOpen}
              title={t('impactPeerTitle')}
              description={t('impactPeerDesc')}
            />
            <ImpactCard 
              icon={Lightbulb}
              title={t('impactOppTitle')}
              description={t('impactOppDesc')}
            />
          </div>

          {/* Call to Action Button */}
          <div className="mt-12 flex justify-start">
            <ActionLink href="#" variant="primary" icon={ArrowRight}>
              {t('joinButton')}
            </ActionLink>
          </div>
        </div>
      </section>

      {/* Testimonials Section (text + video testimonials combined) */}
      <section className="w-full bg-slate-50 py-16 md:py-24">
        <div className="w-full max-w-[1400px] mx-auto px-4 md:px-8">
          <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-semibold text-slate-900 mb-12">
            {t('testimonialTitle')}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            
            {/* Testimonial 1 */}
            <div className="flex flex-col p-8 bg-white rounded-sm border border-slate-900">
              <p className="text-lg text-slate-900 leading-relaxed mb-8 flex-1">
                {t.rich('test1', { mark: (chunks) => <mark className="bg-pink-200/60 px-1 py-0.5 rounded-sm">{chunks}</mark> })}
              </p>
              <hr className="border-slate-900 mb-6" />
              <div className="flex items-center gap-4">
                <img src="/impact/Henrietta Ampofo.jpg" alt="Henrietta Ampofo" className="w-10 h-10 rounded-full object-cover shrink-0" />
                <div className="flex flex-col">
                  <h4 className="font-semibold text-slate-900 text-sm">Henrietta Ampofo</h4>
                  <span className="text-xs text-slate-500">Ghana</span>
                </div>
              </div>
            </div>

            {/* Video Testimonial 1: Rose Gohoue (WiW Benin) */}
            <VideoTestimonialCard video={videoTestimonials[0]} index={0} />

            {/* Testimonial 2 */}
            <div className="flex flex-col p-8 bg-white rounded-sm border border-slate-900">
              <p className="text-lg text-slate-900 leading-relaxed mb-8 flex-1">
                {t.rich('test2', { mark: (chunks) => <mark className="bg-emerald-200/60 px-1 py-0.5 rounded-sm">{chunks}</mark> })}
              </p>
              <hr className="border-slate-900 mb-6" />
              <div className="flex items-center gap-4">
                <img src="/impact/Eletta Adeola.jpg" alt="Eletta Adeola" className="w-10 h-10 rounded-full object-cover shrink-0" />
                <div className="flex flex-col">
                  <h4 className="font-semibold text-slate-900 text-sm">Eletta Adeola</h4>
                  <span className="text-xs text-slate-500">Nigeria</span>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="flex flex-col p-8 bg-white rounded-sm border border-slate-900">
              <p className="text-lg text-slate-900 leading-relaxed mb-8 flex-1">
                {t.rich('test3', { mark: (chunks) => <mark className="bg-blue-200/60 px-1 py-0.5 rounded-sm">{chunks}</mark> })}
              </p>
              <hr className="border-slate-900 mb-6" />
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-sm tracking-wide shrink-0">EF</div>
                <div className="flex flex-col">
                  <h4 className="font-semibold text-slate-900 text-sm">Another Participant</h4>
                  <span className="text-xs text-slate-500">Role &middot; Country</span>
                </div>
              </div>
            </div>

            {/* Video Testimonial 2: Zeinabou Bagayoko (WiW Mali) */}
            <VideoTestimonialCard video={videoTestimonials[1]} index={1} />

            {/* Testimonial 4 */}
            <div className="flex flex-col p-8 bg-white rounded-sm border border-slate-900">
              <p className="text-lg text-slate-900 leading-relaxed mb-8 flex-1">
                {t.rich('test4', { mark: (chunks) => <mark className="bg-yellow-200/60 px-1 py-0.5 rounded-sm">{chunks}</mark> })}
              </p>
              <hr className="border-slate-900 mb-6" />
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-sm tracking-wide shrink-0">GH</div>
                <div className="flex flex-col">
                  <h4 className="font-semibold text-slate-900 text-sm">Community Member</h4>
                  <span className="text-xs text-slate-500">Institution &middot; Country</span>
                </div>
              </div>
            </div>

            {/* Testimonial 5 */}
            <div className="flex flex-col p-8 bg-white rounded-sm border border-slate-900">
              <p className="text-lg text-slate-900 leading-relaxed mb-8 flex-1">
                {t.rich('test5', { mark: (chunks) => <mark className="bg-purple-200/60 px-1 py-0.5 rounded-sm">{chunks}</mark> })}
              </p>
              <hr className="border-slate-900 mb-6" />
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-sm tracking-wide shrink-0">IJ</div>
                <div className="flex flex-col">
                  <h4 className="font-semibold text-slate-900 text-sm">Participant name</h4>
                  <span className="text-xs text-slate-500">Role &middot; Country</span>
                </div>
              </div>
            </div>

            {/* Video Testimonial 3: Rasmata Simpore (WiW Burkina Faso) */}
            <VideoTestimonialCard video={videoTestimonials[2]} index={2} />

            {/* Testimonial 6 */}
            <div className="flex flex-col p-8 bg-white rounded-sm border border-slate-900">
              <p className="text-lg text-slate-900 leading-relaxed mb-8 flex-1">
                {t.rich('test6', { mark: (chunks) => <mark className="bg-orange-200/60 px-1 py-0.5 rounded-sm">{chunks}</mark> })}
              </p>
              <hr className="border-slate-900 mb-6" />
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-sm tracking-wide shrink-0">KL</div>
                <div className="flex flex-col">
                  <h4 className="font-semibold text-slate-900 text-sm">Partner name</h4>
                  <span className="text-xs text-slate-500">Institution &middot; Country</span>
                </div>
              </div>
            </div>

            {/* Video Testimonial 4: Attiogbe Afi (WiW Togo) */}
            <VideoTestimonialCard video={videoTestimonials[3]} index={3} />

            {/* Video Testimonial 5: Matilda Owusu (WiW Ghana) */}
            <VideoTestimonialCard video={videoTestimonials[4]} index={4} />

          </div>
        </div>
      </section>

    </div>
  );
}
