import { getTranslations, setRequestLocale } from 'next-intl/server';
import { ActionLink } from '@/components/ActionLink';
import { VideoTestimonialCard } from '@/components/VideoTestimonialCard';
import { TestimonialCard } from '@/components/TestimonialCard';
import { TestimonialsGrid } from '@/components/TestimonialsGrid';
import { ImpactCard } from '@/components/ImpactCard';
import { Network, Users, BookOpen, Lightbulb, ArrowRight } from 'lucide-react';

import type { Metadata } from 'next';
import { buildPageMetadata, getBreadcrumbSchema } from '@/lib/site-config';

const videoTestimonials = [
  { entryId: '0_u8fr9jbw', wid: '0_54uwc9cw', name: 'Rose Gohoue', label: 'Benin', title: 'Rose Gohoue - Benin' },
  { entryId: '0_qovxjw3y', wid: '0_cufk7vpv', name: 'Zeinabou Bagayoko', label: 'Mali', title: 'Zeinabou Bagayoko - Mali' },
  { entryId: '0_gnyqxfyt', wid: '0_ialpi6fq', name: 'Rasmata Simpore', label: 'Burkina Faso', title: 'Rasmata Simpore - Burkina Faso' },
  { entryId: '0_x2j4oe0b', wid: '0_9h7q1yj1', name: 'Attiogbe Afi', label: 'Togo', title: 'Attiogbe Afi - Togo' },
  { entryId: '0_b01xci0p', wid: '0_13ku5lrj', name: 'Matilda Owusu', label: 'Ghana', title: 'Women-In-WACREN 2024 - Interview with Matilda Owusu (Ghana)' },
];

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'ImpactPage' });

  return buildPageMetadata({
    locale,
    path: '/impact',
    title: t.has('heroTitle') ? t('heroTitle') : 'Our Impact',
    description: t.has('section1Desc') ? t('section1Desc') : 'Explore the real-world impact of the Women-In-WACREN programme through data, success stories, and our growing network.',
    image: '/HERO.jpg',
  });
}

export default async function ImpactPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('ImpactPage');

  const breadcrumbs = getBreadcrumbSchema(
    [
      { name: 'Home', path: '' },
      { name: 'Impact', path: '/impact' },
    ],
    locale
  );

  return (
    <div className="w-full flex flex-col min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbs),
        }}
      />
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

          <TestimonialsGrid
            initialCount={6}
            stepCount={3}
            loadMoreText={t('loadMore')}
            showLessText={t('showLess')}
          >

            {/* New Testimonial 1 (Starts with Dr. Sylvia Adipah, Dr. Perpetual Zaazie and Ms. Sarah Elikplim Siabi) */}
            <TestimonialCard
              quote={t.rich('test13', { mark: (chunks) => <mark className="bg-amber-200/60 px-1 py-0.5 rounded-sm">{chunks}</mark> })}
              name="Dr. Sylvia Adipah, Dr. Perpetual Zaazie and Ms. Sarah Elikplim Siabi"
              country="Ghana"
              image="/impact/DR. SYLVIA ADIPAH, DR. PERPETUAL ZAAZIE AND MS. SARAH ELIKPLIM SIABI.png"
              initials="SZ"
            />

            {/* New Testimonial 2: Prof Gloria Otunola (Nigeria) */}
            <TestimonialCard
              quote={t.rich('test3', { mark: (chunks) => <mark className="bg-pink-200/60 px-1 py-0.5 rounded-sm">{chunks}</mark> })}
              name="Prof Gloria Otunola"
              country="Nigeria"
              image="/impact/Prof Gloria Otunola.jpg"
              initials="GO"
            />

            {/* New Testimonial 3: Dr Eudora Obioma Nwanaforo (Nigeria) */}
            <TestimonialCard
              quote={t.rich('test4', { mark: (chunks) => <mark className="bg-purple-200/60 px-1 py-0.5 rounded-sm">{chunks}</mark> })}
              name="Dr Eudora Obioma Nwanaforo"
              country="Nigeria"
              image="/impact/Eudora Obioma Nwanaforo.jpg"
              initials="EN"
            />

            {/* New Testimonial 4: Dr. LARE Babénoun (Togo) */}
            <TestimonialCard
              quote={t.rich('test5', { mark: (chunks) => <mark className="bg-blue-200/60 px-1 py-0.5 rounded-sm">{chunks}</mark> })}
              name="Dr. LARE Babénoun"
              country="Togo"
              image="/impact/Dr. LARE Babenoun.jpg"
              initials="LB"
            />

            {/* New Testimonial 5: Monsia Epse Sahouan Sandrine (Côte d’Ivoire) */}
            <TestimonialCard
              quote={t.rich('test6', { mark: (chunks) => <mark className="bg-rose-200/60 px-1 py-0.5 rounded-sm">{chunks}</mark> })}
              name="Monsia Epse Sahouan Sandrine"
              country="Côte d’Ivoire"
              image="/impact/Monsia Epse Sahouan Sandrine.jpeg"
              initials="MS"
            />

            {/* New Testimonial 6: Sokhna Mbaye (Senegal) */}
            <TestimonialCard
              quote={t.rich('test7', { mark: (chunks) => <mark className="bg-teal-200/60 px-1 py-0.5 rounded-sm">{chunks}</mark> })}
              name="Sokhna Mbaye"
              country="Senegal"
              image="/impact/Sokhna Mbaye.jpeg"
              initials="SM"
            />

            {/* Lower section: Remaining testimonials mixed with video testimonials across left, middle, and right columns */}

            {/* Row 3: Text, Text, Video (Right) */}
            {/* New Testimonial 7: Dr. Timite Nakouana (Côte d'Ivoire) */}
            <TestimonialCard
              quote={t.rich('test8', { mark: (chunks) => <mark className="bg-indigo-200/60 px-1 py-0.5 rounded-sm">{chunks}</mark> })}
              name="Dr. Timite Nakouana"
              country="Côte d'Ivoire"
              image="/impact/Timite Nakouana.jpg"
              initials="TN"
            />

            {/* New Testimonial 8: Vivian Chinwe Nnamdi (Nigeria) */}
            <TestimonialCard
              quote={t.rich('test9', { mark: (chunks) => <mark className="bg-orange-200/60 px-1 py-0.5 rounded-sm">{chunks}</mark> })}
              name="Vivian Chinwe Nnamdi"
              country="Nigeria"
              image="/impact/Vivian Chinwe Nnamdi.jpg"
              initials="VN"
            />

            {/* Video Testimonial 1: Rose Gohoue (Benin) */}
            <VideoTestimonialCard video={videoTestimonials[0]} index={0} />

            {/* Row 4: Video (Left), Text, Text */}
            {/* Video Testimonial 2: Zeinabou Bagayoko (Mali) */}
            <VideoTestimonialCard video={videoTestimonials[1]} index={1} />

            {/* New Testimonial 9: Falilatou Bako (Niger) */}
            <TestimonialCard
              quote={t.rich('test10', { mark: (chunks) => <mark className="bg-cyan-200/60 px-1 py-0.5 rounded-sm">{chunks}</mark> })}
              name="Falilatou Bako"
              country="Niger"
              image="/impact/Falilatou_Bako_Ousmane.jpg"
              initials="FB"
            />

            {/* New Testimonial 10: Omotolani Sonaike (Nigeria) */}
            <TestimonialCard
              quote={t.rich('test11', { mark: (chunks) => <mark className="bg-pink-200/60 px-1 py-0.5 rounded-sm">{chunks}</mark> })}
              name="Omotolani Sonaike"
              country="Nigeria"
              image="/impact/Omotolani Sonaike.jpg"
              initials="OS"
            />

            {/* Row 5: Text, Video (Middle), Text */}
            {/* New Testimonial 11: Kezia Agyemang-Saahene (Ghana) */}
            <TestimonialCard
              quote={t.rich('test12', { mark: (chunks) => <mark className="bg-emerald-200/60 px-1 py-0.5 rounded-sm">{chunks}</mark> })}
              name="Kezia Agyemang-Saahene"
              country="Ghana"
              image="/impact/Kezia Agyemang-Saahene.jpeg"
              initials="KA"
            />

            {/* Video Testimonial 3: Rasmata Simpore (Burkina Faso) */}
            <VideoTestimonialCard video={videoTestimonials[2]} index={2} />

            {/* New Testimonial 12: Dr EBA Samuelle Bernice (Côte d’Ivoire) */}
            <TestimonialCard
              quote={t.rich('test14', { mark: (chunks) => <mark className="bg-purple-200/60 px-1 py-0.5 rounded-sm">{chunks}</mark> })}
              name="Dr EBA Samuelle Bernice"
              country="Côte d’Ivoire"
              image="/impact/Bernice Eba.jpeg"
              initials="EB"
            />

            {/* Row 6: Text, Text, Video (Right) */}
            {/* New Testimonial 13: Fatou Bin Jatta (Gambia) */}
            <TestimonialCard
              quote={t.rich('test15', { mark: (chunks) => <mark className="bg-blue-200/60 px-1 py-0.5 rounded-sm">{chunks}</mark> })}
              name="Fatou Bin Jatta"
              country="Gambia"
              image="/impact/Fatou Bin Jatta.png"
              initials="FJ"
            />

            {/* New Testimonial 14: Ginette Azandeme Hounmalo (Benin) */}
            <TestimonialCard
              quote={t.rich('test16', { mark: (chunks) => <mark className="bg-teal-200/60 px-1 py-0.5 rounded-sm">{chunks}</mark> })}
              name="Ginette Azandeme Hounmalo"
              country="Benin"
              image="/impact/Ginette AZANDEME HOUNMALO.jpg"
              initials="GH"
            />

            {/* Video Testimonial 4: Attiogbe Afi (Togo) */}
            <VideoTestimonialCard video={videoTestimonials[3]} index={3} />

            {/* Row 7: Video (Left), Text, Text */}
            {/* Video Testimonial 5: Matilda Owusu (Ghana) */}
            <VideoTestimonialCard video={videoTestimonials[4]} index={4} />

            {/* Old Text Testimonial 1: Henrietta Ampofo */}
            <TestimonialCard
              quote={t.rich('test1', { mark: (chunks) => <mark className="bg-pink-200/60 px-1 py-0.5 rounded-sm">{chunks}</mark> })}
              name="Henrietta Ampofo"
              country="Ghana"
              image="/impact/Henrietta Ampofo.jpg"
            />

            {/* Old Text Testimonial 2: Eletta Adeola */}
            <TestimonialCard
              quote={t.rich('test2', { mark: (chunks) => <mark className="bg-emerald-200/60 px-1 py-0.5 rounded-sm">{chunks}</mark> })}
              name="Eletta Adeola"
              country="Nigeria"
              image="/impact/Eletta Adeola.jpg"
            />

          </TestimonialsGrid>
        </div>
      </section>

    </div>
  );
}
