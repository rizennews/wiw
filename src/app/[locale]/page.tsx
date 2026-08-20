import Image from "next/image";
import { Link } from "@/i18n/routing";
import { Code, Users, Lightbulb, ArrowRight, Calendar } from "lucide-react";
import { ImpactCard } from "@/components/ImpactCard";
import { StatItem } from "@/components/StatItem";
import { Countdown } from "@/components/Countdown";
import { ActionLink } from "@/components/ActionLink";
import { BlogCard } from "@/components/BlogCard";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <main className="flex-1 w-full flex flex-col">
        
        {/* Hero Section */}
        <div className="w-full bg-primary overflow-hidden">
          <section className="w-full max-w-[1400px] mx-auto px-4 md:px-8 pt-28 pb-12 md:pt-32 md:pb-16 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Content */}
          <div className="flex flex-col gap-6 lg:pr-8 z-10">
            <h1 className="font-heading text-4xl md:text-5xl lg:text-5xl font-semibold leading-tight text-white">
              Women building the scientific and digital future of West and Central Africa.
            </h1>
            
            <p className="text-base md:text-lg text-white/90 leading-relaxed max-w-2xl">
              Women-In-WACREN trains, connects and funds women in STEM across the region — turning students, researchers and early-career professionals into innovators, makers and technology leaders.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mt-2">
              <ActionLink href="#" variant="inverted">
                Join community of practice
              </ActionLink>
              
              <ActionLink href="#" variant="outline-inverted">
                Partner with us
              </ActionLink>
            </div>
          </div>

          {/* Right Column: Image */}
          <div className="relative w-full h-[250px] md:h-[350px] lg:h-[400px] rounded-[24px] overflow-hidden shadow-2xl transition-transform duration-500">
            <div className="absolute inset-0 bg-black/10 z-10 pointer-events-none mix-blend-overlay"></div>
            <Image
              src="/hero-image.jpg"
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
                <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight">
                  A regional response to the gender gap in STEM.
                </h2>
                <div className="flex flex-col gap-4 text-base md:text-lg text-muted-foreground leading-relaxed">
                  <p>
                    Launched in 2018, Women-In-WACREN (WiW) is WACREN's initiative to address gender inequality and the under-representation of women in science, technology, engineering and mathematics across West and Central Africa.
                  </p>
                  <p>
                    We work through the region's National Research and Education Networks (NRENs), universities and research institutions — the same infrastructure that carries Africa's research data — to reach women where they already study and work.
                  </p>
                </div>
                <div className="mt-4">
                  <ActionLink href="/about" icon={ArrowRight}>
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
                  description="A regional Community of Practice for mentorship, peer learning and cross-border collaboration between programmes."
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
        <div className="w-full bg-primary text-white">
          <section className="w-full max-w-[1400px] mx-auto px-4 md:px-8 py-10 md:py-12">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-8 lg:divide-x divide-white/20">
              <StatItem value="2,000+" label="Women trained since 2018" className="lg:pl-0 lg:pr-8" />
              <StatItem value="16" label="Countries reached" className="lg:px-8" />
              <StatItem value="20+" label="Workshops & bootcamps" className="lg:px-8" />
              <StatItem value="30+" label="Partner institutions" className="lg:pl-8" />
            </div>
          </section>
        </div>

        {/* Event Promo Section */}
        <div className="w-full bg-white text-foreground border-b border-slate-100">
          <section className="w-full max-w-[1400px] mx-auto px-4 md:px-8 py-10 md:py-16">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              
              {/* Left Column: Title & Date (spans 5 cols) */}
              <div className="lg:col-span-5 flex flex-col gap-6">
                <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold leading-[1.1] text-foreground tracking-tight">
                  Launch of the WiW Community of Practice
                </h2>
                <div className="flex items-start gap-3 text-base font-medium text-slate-500 mt-2">
                  <Calendar className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>25 August 2026 &middot; Open to women 18+ across West & Central Africa</span>
                </div>
              </div>

              {/* Right Column: Text & Countdown (spans 7 cols) */}
              <div className="lg:col-span-7 flex flex-col gap-10 lg:pl-10">
                <p className="text-lg md:text-xl text-slate-700 leading-relaxed font-light">
                  Connecting women and building solutions. We formally launch the regional Community of Practice and introduce the Climate Innovation Lab 2026 — its structure, eligibility, application process and what participants gain.
                </p>
                
                <div className="w-full pt-10 border-t border-slate-200">
                  <Countdown targetDate="2026-08-25T10:00:00Z" />
                </div>
              </div>

            </div>
          </section>
        </div>

        {/* Opportunities Section */}
        <div className="w-full bg-white text-foreground">
          <section className="w-full max-w-[1400px] mx-auto px-4 md:px-8 pt-10 md:pt-16 pb-4 md:pb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              
              {/* Card 1: Climate Innovation Lab */}
              <div className="flex flex-col items-start p-10 md:p-12 bg-slate-50 rounded-[32px] hover:bg-slate-100 transition-colors duration-300">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-5">Applications opening</span>
                <h3 className="font-heading text-3xl lg:text-4xl font-semibold leading-tight mb-5">
                  Climate Innovation Lab 2026
                </h3>
                <p className="text-lg text-slate-600 leading-relaxed mb-10 font-light">
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
                <h3 className="font-heading text-3xl lg:text-4xl font-semibold leading-tight mb-5">
                  Mentors and trainers
                </h3>
                <p className="text-lg text-slate-700 leading-relaxed mb-10 font-light">
                  Women and allies working in STEM, research and industry are invited to mentor a cohort or co-facilitate a technical session.
                </p>
                <div className="mt-auto">
                  <ActionLink href="#" variant="secondary" icon={ArrowRight}>
                    Become a mentor
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
                <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight tracking-tight">
                  Insights & News
                </h2>
                <p className="text-lg text-slate-600 font-light max-w-2xl">
                  Stories from the ground, upcoming events, and updates from the WiW community across West and Central Africa.
                </p>
              </div>
              <ActionLink href="/blog" variant="secondary" className="w-max md:px-6 md:py-3">
                View all stories
              </ActionLink>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
              <BlogCard 
                title="How physical computing is changing classrooms in Nigeria"
                excerpt="Our latest IoT workshop saw 50 female researchers building environmental sensors to tackle local climate issues."
                date="August 12, 2026"
                category="Impact Story"
                imageSrc="/hero-image.jpg"
                href="/blog/post-1"
              />
              <BlogCard 
                title="Meet the mentors of the 2026 Climate Innovation Lab"
                excerpt="Introducing the technical experts and industry leaders who will be guiding our next cohort of innovators."
                date="August 05, 2026"
                category="Announcements"
                imageSrc="/hero-image.jpg"
                href="/blog/post-2"
              />
              <BlogCard 
                title="Why open science is critical for gender equity"
                excerpt="Access to research data remains a barrier. Here is how National Research and Education Networks can bridge the gap."
                date="July 28, 2026"
                category="Opinion"
                imageSrc="/hero-image.jpg"
                href="/blog/post-3"
              />
            </div>
          </section>
        </div>
        
      </main>
    </div>
  );
}
