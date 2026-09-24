import { setRequestLocale } from 'next-intl/server';
import { ActionLink } from '@/components/ActionLink';
import { ImpactCard } from '@/components/ImpactCard';
import { Network, Users, BookOpen, Lightbulb, ArrowRight, PlayCircle } from 'lucide-react';

import { Metadata } from 'next';

// Kaltura video testimonials hosted on video.wacren.net (partner 384)
const KALTURA_EMBED_BASE = 'https://api.kaltura.nordu.net/p/384/sp/38400/embedIframeJs/uiconf_id/23453416/partner_id/384?iframeembed=true&playerId=kaltura_player&entry_id=';
const KALTURA_EMBED_TAIL = '&flashvars[streamerType]=auto&flashvars[localizationCode]=en&flashvars[sideBarContainer.plugin]=true&flashvars[sideBarContainer.position]=left&flashvars[sideBarContainer.clickToClose]=true&flashvars[chapters.plugin]=true&flashvars[chapters.layout]=vertical&flashvars[chapters.thumbnailRotator]=false&flashvars[streamSelector.plugin]=true&flashvars[EmbedPlayer.SpinnerTarget]=videoHolder&flashvars[dualScreen.plugin]=true&flashvars[hotspots.plugin]=1&flashvars[Kaltura.addCrossoriginToIframe]=true&wid=';

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
              The Women-In-WACREN Network is where women connect, exchange knowledge and experience, access mentorship and learning, collaborate across disciplines, and develop solutions to challenges affecting their communities &mdash; beyond any single programme.
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
              Join the Women-In-WACREN Network
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
            <div className="flex flex-col p-8 bg-white rounded-2xl shadow-sm border border-slate-200">
              <p className="text-lg text-slate-900 leading-relaxed mb-8 flex-1">
                &ldquo;The WiW initiative not only <mark className="bg-pink-200/60 px-1 py-0.5 rounded-sm">built my capacity in quantitative analysis</mark> using Python but was also very inspiring - to have women who have accomplished great feats in the same room with you, teaching and sharing their experiences with you, is priceless!&rdquo;
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

            {/* Testimonial 2 */}
            <div className="flex flex-col p-8 bg-white rounded-2xl shadow-sm border border-slate-200">
              <p className="text-lg text-slate-900 leading-relaxed mb-8 flex-1">
                &ldquo;Amazing experience &hellip; We set up a weather station. Despite the challenges, we configured the raspberry pi, <mark className="bg-emerald-200/60 px-1 py-0.5 rounded-sm">got the wind speed of our anemometer working</mark>.&rdquo;
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
            <div className="flex flex-col p-8 bg-white rounded-2xl shadow-sm border border-slate-200">
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
            <div className="flex flex-col p-8 bg-white rounded-2xl shadow-sm border border-slate-200">
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
            <div className="flex flex-col p-8 bg-white rounded-2xl shadow-sm border border-slate-200">
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
            <div className="flex flex-col p-8 bg-white rounded-2xl shadow-sm border border-slate-200">
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

      {/* Video Testimonials Section */}
      <section className="w-full bg-white py-16 md:py-24">
        <div className="w-full max-w-[1400px] mx-auto px-4 md:px-8">
          {/* Section header (matching reference design: eyebrow + centered heading) */}
          <div className="flex flex-col items-center text-center mb-12">
            <span className="inline-flex items-center gap-2 text-primary text-sm font-semibold uppercase tracking-widest mb-4">
              <PlayCircle className="w-4 h-4" />
              Video testimonials
            </span>
            <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-semibold text-slate-900">
              Hear it from the network, in their own words.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
            {videoTestimonials.map((video, index) => (
              <div
                key={video.entryId}
                className={`flex flex-col ${index === 0 ? 'md:col-span-2' : ''}`}
              >
                <div
                  className={`relative w-full aspect-video rounded-2xl overflow-hidden bg-slate-900 shadow-sm border border-slate-200 ${
                    index === 1 ? 'lg:aspect-auto lg:flex-1 lg:min-h-[300px]' : ''
                  }`}
                >
                  <iframe
                    id={`kaltura_player_${index}`}
                    src={`${KALTURA_EMBED_BASE}${video.entryId}${KALTURA_EMBED_TAIL}${video.wid}`}
                    title={video.title}
                    className="absolute inset-0 w-full h-full"
                    allow="autoplay *; fullscreen *; encrypted-media *"
                    allowFullScreen
                    sandbox="allow-downloads allow-forms allow-same-origin allow-scripts allow-top-navigation allow-pointer-lock allow-popups allow-modals allow-orientation-lock allow-popups-to-escape-sandbox allow-presentation allow-top-navigation-by-user-activation"
                    loading="lazy"
                    frameBorder="0"
                  />
                </div>
                <div className="mt-4 shrink-0">
                  <h3 className="text-base font-semibold text-slate-900">{video.name}</h3>
                  <p className="text-sm text-slate-500">{video.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
