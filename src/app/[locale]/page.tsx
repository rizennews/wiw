import Image from "next/image";
import { Link } from "@/i18n/routing";
import { Code, Users, Lightbulb, ArrowRight, Calendar } from "lucide-react";
import { ImpactCard } from "@/components/ImpactCard";
import { StatItem } from "@/components/StatItem";
import { Countdown } from "@/components/Countdown";
import { ActionLink } from "@/components/ActionLink";
import { getAllPostsSorted } from "@/lib/blog-data";

import { Metadata } from 'next';

export const metadata: Metadata = {
  description: 'Empowering women in STEM across West and Central Africa through education, training, and strategic partnerships.',
};

export default function Home() {
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
                Women building the scientific and digital future of West and Central Africa
              </h1>

              <p className="text-base md:text-lg text-white/90 leading-relaxed max-w-2xl">
                Women-In-WACREN trains, connects and funds women in STEM across the region — turning students, researchers and early-career professionals into innovators, makers and technology leaders.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mt-2">
                <ActionLink href="#" variant="inverted">
                  Join the Women-In-WACREN Network
                </ActionLink>
              </div>
            </div>

            {/* Right Column: Image */}
            <div className="relative w-full h-[250px] md:h-[350px] lg:h-[400px] rounded-[24px] overflow-hidden shadow-2xl transition-transform duration-500">
              <div className="absolute inset-0 bg-black/10 z-10 pointer-events-none mix-blend-overlay"></div>
              <Image
                src="/hero.jpg"
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
                  A regional response to the gender gap in STEM.
                </h2>
                <div className="flex flex-col gap-4 text-base md:text-lg text-slate-700 leading-relaxed">
                  <p>
                    Launched in 2018, Women-In-WACREN (WiW) is WACREN's initiative to address gender inequality and the under-representation of women in science, technology, engineering and mathematics across West and Central Africa.
                  </p>
                  <p>
                    We work through the region's National Research and Education Networks (NRENs), universities and research institutions — the same infrastructure that carries Africa's research data — to reach women where they already study and work.
                  </p>
                </div>
                <div className="mt-4">
                  <ActionLink href="/women-in-wacren-journey" icon={ArrowRight}>
                    Learn more about our work
                  </ActionLink>
                </div>
              </div>

              {/* Right Column: Cards */}
              <div className="flex flex-col gap-4 lg:gap-6">

                <ImpactCard
                  icon={Code}
                  title="Train"
                  description="Hands-on technical workshops in Python, physical computing, IoT, AI, open science and climate data analysis."
                />

                <ImpactCard
                  icon={Users}
                  title="Connect"
                  description="A regional Women-In-WACREN Network for mentorship, peer learning and cross-border collaboration between programmes."
                />

                <ImpactCard
                  icon={Lightbulb}
                  title="Innovate"
                  description="Structured innovation labs where women build digital solutions to challenges in their own communities."
                />

              </div>

            </div>
          </section>
        </div>

        {/* Statistics Section */}
        <div className="w-full bg-slate-50 py-16 md:py-20">
          <section className="w-full max-w-[1400px] mx-auto px-4 md:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              <div className="bg-white rounded-[24px] p-8 lg:p-10 border-2 border-transparent hover:border-primary shadow-sm flex flex-col items-start justify-center text-left transition-colors duration-300">
                <span className="text-4xl lg:text-5xl font-heading font-bold text-primary mb-3">2,000+</span>
                <span className="text-sm font-semibold text-slate-600 uppercase tracking-[0.15em] leading-relaxed">Women trained since 2018</span>
              </div>
              <div className="bg-white rounded-[24px] p-8 lg:p-10 border-2 border-transparent hover:border-primary shadow-sm flex flex-col items-start justify-center text-left transition-colors duration-300">
                <span className="text-4xl lg:text-5xl font-heading font-bold text-primary mb-3">4</span>
                <span className="text-sm font-semibold text-slate-600 uppercase tracking-[0.15em] leading-relaxed">Countries reached</span>
              </div>
              <div className="bg-white rounded-[24px] p-8 lg:p-10 border-2 border-transparent hover:border-primary shadow-sm flex flex-col items-start justify-center text-left transition-colors duration-300">
                <span className="text-4xl lg:text-5xl font-heading font-bold text-primary mb-3">20+</span>
                <span className="text-sm font-semibold text-slate-600 uppercase tracking-[0.15em] leading-relaxed">Workshops & bootcamps</span>
              </div>
            </div>
          </section>
        </div>

        {/* Opportunities Section */}
        <div className="w-full bg-white text-foreground">
          <section className="w-full max-w-[1400px] mx-auto px-4 md:px-8 pt-10 md:pt-16 pb-4 md:pb-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">

              {/* Card 3: Launch of the Network */}
              <div className="flex flex-col items-start p-10 md:p-12 bg-slate-900 text-white rounded-[32px] hover:bg-slate-800 transition-colors duration-300">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 mb-5">25 August 2026</span>
                <h3 className="font-heading text-2xl lg:text-3xl font-semibold leading-tight mb-5 text-white">
                  Launch of the Women-In-WACREN Network
                </h3>
                <p className="text-base text-slate-300 leading-relaxed mb-10 font-light">
                  WiW launches its Network of likeminded STEM professionals, innovators and partners and also launch the 2026 edition of the Climate Innovation Lab 2026 on August 25, 2026.
                </p>
                <div className="mt-auto">
                  <ActionLink href="#" variant="primary" icon={ArrowRight}>
                    Register for launch
                  </ActionLink>
                </div>
              </div>

              {/* Card 1: Climate Innovation Lab */}
              <div className="flex flex-col items-start p-10 md:p-12 bg-slate-50 rounded-[32px] hover:bg-slate-100 transition-colors duration-300">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-5">Applications opening</span>
                <h3 className="font-heading text-2xl lg:text-3xl font-semibold leading-tight mb-5 text-slate-900">
                  Climate Innovation Lab 2026
                </h3>
                <p className="text-base text-slate-700 leading-relaxed mb-10 font-light">
                  Teams of women move from problem identification to working prototype, with mentorship throughout — building digital solutions to climate challenges in the region.
                </p>
                <div className="mt-auto">
                  <ActionLink href="#" variant="primary" icon={ArrowRight}>
                    Learn more
                  </ActionLink>
                </div>
              </div>

              {/* Card 2: Mentors and trainers */}
              <div className="flex flex-col items-start p-10 md:p-12 bg-primary/5 rounded-[32px] hover:bg-primary/10 transition-colors duration-300">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-5">Open call</span>
                <h3 className="font-heading text-2xl lg:text-3xl font-semibold leading-tight mb-5 text-slate-900">
                  Call for Mentors
                </h3>
                <p className="text-base text-slate-700 leading-relaxed mb-10 font-light">
                  Women and allies working in STEM, research and industry are invited to mentor a cohort or co-facilitate a technical session.
                </p>
                <div className="mt-auto">
                  <ActionLink href="https://indico.wacren.net/event/283/" variant="primary" icon={ArrowRight}>
                    Become a mentor
                  </ActionLink>
                </div>
              </div>

              {/* Card 4: Call for Facilitators */}
              <div className="flex flex-col items-start p-10 md:p-12 bg-slate-50 rounded-[32px] hover:bg-slate-100 transition-colors duration-300">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-5">Open call</span>
                <h3 className="font-heading text-2xl lg:text-3xl font-semibold leading-tight mb-5 text-slate-900">
                  Call for Facilitators
                </h3>
                <p className="text-base text-slate-700 leading-relaxed mb-10 font-light">
                  Seeking facilitators for the Climate Innovation Lab 2026 to guide multidisciplinary teams building digital solutions to climate challenges.
                </p>
                <div className="mt-auto">
                  <ActionLink href="https://indico.wacren.net/event/282/" variant="primary" icon={ArrowRight}>
                    Apply
                  </ActionLink>
                </div>
              </div>

            </div>
          </section>
        </div>

        {/* Blog / News Section */}
        <div className="w-full bg-white text-foreground">
          <section className="w-full max-w-[1400px] mx-auto px-4 md:px-8 pt-4 md:pt-8 pb-10 md:pb-16">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
              <div className="flex flex-col gap-3">
                <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight tracking-tight text-slate-900">
                  Updates
                </h2>
                <p className="text-base text-slate-700 font-light max-w-2xl">
                  Read exciting updates from our activities in blogs, news articles and events.
                </p>
              </div>
              <ActionLink href="/blog" variant="secondary" className="w-max md:px-6 md:py-3">
                View all stories
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
                      {post.title}
                    </h3>

                    <p className="text-sm md:text-[15px] text-slate-500 font-light leading-relaxed mb-8 flex-1">
                      {post.excerpt}
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
