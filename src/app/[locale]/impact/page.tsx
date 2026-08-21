import { setRequestLocale } from 'next-intl/server';
import { ActionLink } from '@/components/ActionLink';
import { ImpactCard } from '@/components/ImpactCard';
import { Network, Users, BookOpen, Lightbulb, ArrowRight } from 'lucide-react';

export default async function ImpactPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div className="w-full flex flex-col min-h-screen">
      {/* Short Hero Section (Matching Homepage Style, No Image) */}
      <section className="relative w-full bg-primary pt-32 pb-12 md:pt-40 md:pb-16 overflow-hidden">
        
        {/* Subtle abstract glow effects to replace the image */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-white/5 rounded-full blur-[100px] -translate-x-1/3 translate-y-1/3 pointer-events-none" />

        <div className="relative z-10 w-full max-w-[1000px] mx-auto px-4 md:px-8 text-center flex flex-col items-center">
          <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-white leading-[1.1]">
            Impact
          </h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="w-full bg-white py-16 md:py-24 flex-1">
        <div className="w-full max-w-[1400px] mx-auto px-4 md:px-8">
          <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-semibold text-slate-900 mb-8">
            Connecting women, building solutions.
          </h2>
          <div className="text-base md:text-lg text-slate-700 font-light leading-relaxed space-y-6">
            <p>
              The Community of Practice is where women connect, exchange knowledge and experience, access mentorship and learning, collaborate across disciplines, and develop solutions to challenges affecting their communities &mdash; beyond any single programme.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mt-16">
            <ImpactCard 
              icon={Network}
              title="Networking"
              description="Meet women working in STEM across sixteen-plus countries and three language zones."
            />
            <ImpactCard 
              icon={Users}
              title="Mentorship"
              description="Be matched with a mentor, or mentor someone earlier in their career."
            />
            <ImpactCard 
              icon={BookOpen}
              title="Peer learning"
              description="Study groups, technical clinics and shared problem-solving between cohorts."
            />
            <ImpactCard 
              icon={Lightbulb}
              title="Opportunities"
              description="Early notice of calls, grants, fellowships and events across the network."
            />
          </div>

          {/* Call to Action Button */}
          <div className="mt-12 flex justify-start">
            <ActionLink href="#" variant="primary" icon={ArrowRight}>
              Join the Community of Practice
            </ActionLink>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="w-full bg-slate-50 py-16 md:py-24">
        <div className="w-full max-w-[1400px] mx-auto px-4 md:px-8">
          <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-semibold text-slate-900 mb-12">
            What participants did next.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            
            {/* Testimonial 1 */}
            <div className="flex flex-col p-8 bg-white border border-slate-900 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(15,23,42,1)] transition-all duration-300">
              <p className="text-lg text-slate-900 leading-relaxed mb-8 flex-1">
                &ldquo;Placeholder quote &mdash; replace with a real participant testimonial collected with consent, ideally naming a concrete outcome: <mark className="bg-pink-200/60 px-1 py-0.5 rounded-sm">a job, a paper, a grant</mark>, a device deployed.&rdquo;
              </p>
              <hr className="border-slate-900 mb-6" />
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-sm tracking-wide shrink-0">AB</div>
                <div className="flex flex-col">
                  <h4 className="font-semibold text-slate-900 text-sm">Participant name</h4>
                  <span className="text-xs text-slate-500">Role &middot; Country</span>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="flex flex-col p-8 bg-white border border-slate-900 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(15,23,42,1)] transition-all duration-300">
              <p className="text-lg text-slate-900 leading-relaxed mb-8 flex-1">
                &ldquo;Placeholder quote &mdash; a mentor or partner institution perspective works well as the second slot, <mark className="bg-emerald-200/60 px-1 py-0.5 rounded-sm">showing the programme from the supply side.</mark>&rdquo;
              </p>
              <hr className="border-slate-900 mb-6" />
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-sm tracking-wide shrink-0">CD</div>
                <div className="flex flex-col">
                  <h4 className="font-semibold text-slate-900 text-sm">Mentor name</h4>
                  <span className="text-xs text-slate-500">Institution &middot; Country</span>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="flex flex-col p-8 bg-white border border-slate-900 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(15,23,42,1)] transition-all duration-300">
              <p className="text-lg text-slate-900 leading-relaxed mb-8 flex-1">
                &ldquo;This is a third placeholder. It shows how the layout looks when filled out completely. It proves that the programme is <mark className="bg-blue-200/60 px-1 py-0.5 rounded-sm">highly effective and scalable</mark>.&rdquo;
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

            {/* Testimonial 4 */}
            <div className="flex flex-col p-8 bg-white border border-slate-900 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(15,23,42,1)] transition-all duration-300">
              <p className="text-lg text-slate-900 leading-relaxed mb-8 flex-1">
                &ldquo;Fourth placeholder. The community is incredibly supportive. I was able to <mark className="bg-yellow-200/60 px-1 py-0.5 rounded-sm">expand my network</mark> across multiple borders effortlessly.&rdquo;
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
            <div className="flex flex-col p-8 bg-white border border-slate-900 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(15,23,42,1)] transition-all duration-300">
              <p className="text-lg text-slate-900 leading-relaxed mb-8 flex-1">
                &ldquo;Fifth placeholder. Finding mentors who look like me and understand the context has been <mark className="bg-purple-200/60 px-1 py-0.5 rounded-sm">a total game changer</mark> for my career trajectory.&rdquo;
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

            {/* Testimonial 6 */}
            <div className="flex flex-col p-8 bg-white border border-slate-900 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(15,23,42,1)] transition-all duration-300">
              <p className="text-lg text-slate-900 leading-relaxed mb-8 flex-1">
                &ldquo;Sixth and final placeholder. The technical clinics alone provided insights that helped our institution <mark className="bg-orange-200/60 px-1 py-0.5 rounded-sm">secure critical funding</mark> for the year.&rdquo;
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

          </div>
        </div>
      </section>
    </div>
  );
}
