import Image from "next/image";
import { Link } from "@/i18n/routing";
import { Code, Users, Lightbulb, ArrowRight, Calendar } from "lucide-react";
import { ImpactCard } from "@/components/ImpactCard";
import { StatItem } from "@/components/StatItem";
import { Countdown } from "@/components/Countdown";
import { ActionLink } from "@/components/ActionLink";
import { getAllPostsSorted } from "@/lib/blog-data";
import { TestimonialMarquee } from "@/components/TestimonialMarquee";

import { Metadata } from 'next';

export const metadata: Metadata = {
  description: 'Empowering women in STEM across West and Central Africa through education, training, and strategic partnerships.',
};

import { useTranslations } from 'next-intl';

export default function Home() {
  const t = useTranslations('Home');
  const latestPosts = getAllPostsSorted().slice(0, 3);

  return (
    <div className="flex flex-col w-full">
      <main className="flex-1 w-full flex flex-col">
        
        {/* Hero Section */}
        <div className="w-full bg-primary overflow-hidden">
          <section className="w-full max-w-[1400px] mx-auto px-4 md:px-8 pt-28 pb-12 md:pt-32 md:pb-16 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Content */}
          <div className="flex flex-col gap-6 lg:pr-8 z-10">
            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight text-white">
              {t('heroTitle')}
            </h1>
            
            <p className="text-base md:text-lg text-white/90 leading-relaxed max-w-2xl">
              {t('heroDesc')}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mt-2">
              <ActionLink href="/network" variant="inverted">
                {t('heroCta')}
              </ActionLink>
              
              <ActionLink href="/partnership" variant="outline-inverted">
                {t('heroSecondary')}
              </ActionLink>
            </div>
          </div>

          {/* Right Column: Image */}
          <div className="relative w-full h-[250px] md:h-[350px] lg:h-[400px] rounded-[24px] overflow-hidden shadow-2xl transition-transform duration-500">
            <div className="absolute inset-0 bg-black/10 z-10 pointer-events-none mix-blend-overlay"></div>
            <Image
              src="/HERO.jpg"
              alt="Women-In-WACREN innovators"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          </section>
        </div>

        {/* Mission / Impact Section */}
        <div className="w-full bg-white text-foreground">
          <section className="w-full max-w-[1400px] mx-auto px-4 md:px-8 pt-10 pb-12 md:pt-12 md:pb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              
              {/* Left Column: Text */}
              <div className="flex flex-col gap-6">
                <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight text-slate-900">
                  {t('missionTitle')}
                </h2>
                <div className="flex flex-col gap-4 text-base md:text-lg text-slate-700 leading-relaxed">
                  <p>
                    {t('missionDesc1')}
                  </p>
                  <p>
                    {t('missionDesc2')}
                  </p>
                </div>
                <div className="mt-4">
                  <ActionLink href="/about" icon={ArrowRight}>
                  {t('learnMore')}
                </ActionLink>
                </div>
              </div>

              {/* Right Column: Cards */}
              <div className="flex flex-col gap-4 lg:gap-6">
                
                <ImpactCard 
                  icon={Code}
                  title={t('impact1Title')}
                  description={t('impact1Desc')}
                />

                <ImpactCard 
                  icon={Users}
                  title={t('impact2Title')}
                  description={t('impact2Desc')}
                />

                <ImpactCard 
                  icon={Lightbulb}
                  title={t('impact3Title')}
                  description={t('impact3Desc')}
                />

              </div>

            </div>
          </section>
        </div>

        {/* Statistics Section */}
        <div className="w-full bg-primary text-white">
          <section className="w-full max-w-[1400px] mx-auto px-4 md:px-8 py-10 md:py-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-y-12 gap-x-8 md:divide-x divide-white/20">
              <StatItem value="2,000+" label={t('stat1')} className="md:pl-0 md:pr-8" />
              <StatItem value="4" label={t('stat2')} className="md:px-8" />
              <StatItem value="20+" label={t('stat3')} className="md:px-8" />
            </div>
          </section>
        </div>

        {/* Upcoming Events Section */}
        <div className="w-full bg-white text-foreground">
          <section className="w-full max-w-[1400px] mx-auto px-4 md:px-8 py-10 md:py-16">
            <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight tracking-tight text-slate-900 mb-10">
              {t('eventsTitle')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              
              {/* Card 1: WiW Webinar */}
              <div className="group flex flex-col bg-[#fafafa] border border-slate-200 overflow-hidden hover:border-slate-300 transition-colors h-full rounded-sm">
                {/* Image */}
                <div className="w-full border-b border-slate-200 overflow-hidden bg-white">
                  <Image
                    src="/wiw_fire side chat .jpg"
                    alt="Women-in-WACREN fire side chat"
                    width={1920}
                    height={1080}
                    className="w-full h-auto opacity-90 group-hover:opacity-100 transition-opacity duration-500"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 p-6 md:p-8">
                  <h3 className="font-heading text-lg md:text-xl font-medium text-slate-900 mb-4 leading-snug">
                    <Link
                      href="/blog/wiw-webinar-mentorship-sponsorship-networks"
                      className="hover:text-primary transition-colors"
                    >
                      {t('event1Title')}
                    </Link>
                  </h3>

                  <p className="text-sm md:text-[15px] text-slate-500 font-light leading-relaxed mb-6 flex-1">
                    {t('event1Desc')}
                  </p>

                  {/* Date & Time */}
                  <div className="flex items-center gap-2 text-[13px] font-medium text-slate-600 mb-4">
                    <Calendar className="w-4 h-4 text-primary" />
                    <span>Wednesday, 30 September 2026 &middot; 13:00 UTC</span>
                  </div>

                  {/* Meta Footer */}
                  <div className="mt-auto flex items-center justify-between text-[13px] font-medium pt-2">
                    <span className="text-primary tracking-wide">
                      {t('event1Tag')}
                    </span>
                    <a
                      href="https://wacren.zoom.us/webinar/register/WN_x5OIWhkETjOQNlL_x2kPIg"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary inline-flex items-center gap-1.5 hover:underline"
                    >
                      {t('register')}
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Card 2: Climate Innovation Lab */}
              <div className="group flex flex-col bg-[#fafafa] border border-slate-200 overflow-hidden hover:border-slate-300 transition-colors h-full rounded-sm">
                {/* Image */}
                <div className="w-full border-b border-slate-200 overflow-hidden bg-white">
                  <Image
                    src="/call-for-applications-final copy.jpg"
                    alt="Climate Innovation Lab 2026 call for applications"
                    width={1920}
                    height={1080}
                    className="w-full h-auto opacity-90 group-hover:opacity-100 transition-opacity duration-500"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 p-6 md:p-8">
                  <h3 className="font-heading text-lg md:text-xl font-medium text-slate-900 mb-4 leading-snug">
                    {t('event2Title')}
                  </h3>

                  <p className="text-sm md:text-[15px] text-slate-500 font-light leading-relaxed mb-6 flex-1">
                    {t('event2Desc')}
                  </p>

                  {/* Date & Time & Location */}
                  <div className="flex items-start gap-2 text-[13px] font-medium text-slate-600 mb-4">
                    <Calendar className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    <span className="leading-snug">12-15 October 2026 &middot; 09:00 &ndash; 17:00 UTC<br/>National Open University of Nigeria (NOUN), Abuja, Nigeria</span>
                  </div>

                  {/* Meta Footer */}
                  <div className="mt-auto flex items-center justify-between text-[13px] font-medium pt-2">
                    <span className="text-primary tracking-wide">
                      {t('event2Tag')}
                    </span>
                    <a
                      href="https://indico.wacren.net/event/279/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary inline-flex items-center gap-1.5 hover:underline"
                    >
                      {t('register')}
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>

            </div>
          </section>
        </div>

        {/* Testimonials Section */}
        <div className="w-full bg-slate-50 text-foreground">
          <section className="w-full max-w-[1400px] mx-auto px-4 md:px-8 py-10 md:py-16">
            <div className="flex flex-col items-center text-center mb-12">
              <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight tracking-tight text-slate-900 mb-4">
                {t('testimonialsTitle')}
              </h2>
              <p className="text-base text-slate-700 font-light max-w-4xl">
                {t('testimonialsDesc')}
              </p>
            </div>
            
            <TestimonialMarquee />
          </section>
        </div>

        {/* Blog / News Section */}
        <div className="w-full bg-white text-foreground">
          <section className="w-full max-w-[1400px] mx-auto px-4 md:px-8 pt-4 md:pt-8 pb-10 md:pb-16">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
              <div className="flex flex-col gap-3">
                <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight tracking-tight text-slate-900">
                  {t('newsTitle')}
                </h2>
                <p className="text-base text-slate-700 font-light max-w-2xl">
                  {t('newsDesc')}
                </p>
              </div>
              <ActionLink href="/blog" variant="secondary" className="w-max md:px-6 md:py-3">
                {t('viewAll')}
              </ActionLink>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {latestPosts.map((post) => (
                <Link 
                  key={post.slug}
                  href={`/blog/${post.slug}` as any}
                  className="group flex flex-col bg-[#fafafa] border border-slate-200 overflow-hidden hover:border-slate-300 transition-colors h-full rounded-sm"
                >
                  {/* Image */}
                  <div className="relative h-[220px] w-full border-b border-slate-200 overflow-hidden bg-white">
                    {post.image ? (
                      <img 
                        src={post.image} 
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02] opacity-90 group-hover:opacity-100"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-slate-50 transition-transform duration-700 group-hover:scale-[1.02]">
                        <span className="font-serif text-2xl font-bold text-slate-300 tracking-wider uppercase">
                          WOMEN-IN-WACREN
                        </span>
                      </div>
                    )}
                  </div>
                  
                  {/* Content */}
                  <div className="flex flex-col flex-1 p-6 md:p-8">
                    <h3 className="font-heading text-lg md:text-xl font-medium text-slate-900 mb-4 leading-snug">
                      {t.has(`posts.${post.slug}.title`) ? t(`posts.${post.slug}.title`) : post.title}
                    </h3>
                    
                    <p className="text-sm md:text-[15px] text-slate-500 font-light leading-relaxed mb-8 flex-1">
                      {t.has(`posts.${post.slug}.excerpt`) ? t(`posts.${post.slug}.excerpt`) : post.excerpt}
                    </p>
                    
                    {/* Meta Footer */}
                    <div className="mt-auto flex items-center justify-between text-[13px] font-medium pt-2">
                      <span className="text-primary tracking-wide">
                        [{post.category}]
                      </span>
                      <span className="text-slate-600 font-mono text-[12px]">
                        {post.date}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        </div>
        
      </main>
    </div>
  );
}
