import { setRequestLocale } from 'next-intl/server';
import { Timeline } from '@/components/Timeline';

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
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
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1]">
            Women-In-WACREN Journey
          </h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="w-full bg-white py-16 md:py-24">
        <div className="w-full max-w-[1400px] mx-auto px-4 md:px-8">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-8">
            Why Women in WACREN exists.
          </h2>
          <div className="text-lg md:text-xl text-slate-700 font-light leading-relaxed space-y-6">
            <p>
              Women remain under-represented in STEM study, research and technical careers across West and Central Africa. WiW was created in 2018 to change that from inside the region's research and education infrastructure &mdash; with training, mentorship, advocacy and now a permanent community.
            </p>
            <p>
              WACREN is the West and Central African Research and Education Network &mdash; the regional body connecting National Research and Education Networks and their universities and research institutions. WiW is one of its flagship community programmes, which is why it can reach women through NRENs, campuses and research institutes rather than starting from scratch in each country.
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
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-5">Our Future</span>
              <h3 className="font-heading text-3xl lg:text-4xl font-semibold leading-tight mb-5">
                Vision
              </h3>
              <p className="text-lg text-slate-700 leading-relaxed font-light">
                A regional research and education community in which women are equally represented as engineers, researchers, innovators and leaders.
              </p>
            </div>

            {/* Mission Card */}
            <div className="flex flex-col items-start p-10 md:p-12 bg-primary/5 rounded-[32px] hover:bg-primary/10 transition-colors duration-300">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-5">Our Purpose</span>
              <h3 className="font-heading text-3xl lg:text-4xl font-semibold leading-tight mb-5">
                Mission
              </h3>
              <p className="text-lg text-slate-700 leading-relaxed font-light">
                To educate, equip and empower women with the skills, networks and confidence to excel in STEM careers &mdash; and to keep them connected long after the training ends.
              </p>
            </div>

          </div>
        </div>
      </section>

      <Timeline />
    </div>
  );
}
