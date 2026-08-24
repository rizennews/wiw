import { ProgrammeTabs } from '@/components/ProgrammeTabs';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Programme & Network',
  description: 'Join the Women-in-WACREN Network. Explore our open calls, register for upcoming training programmes, and access our learning hub.',
};

export default function ProgrammePage() {
  return (
    <div className="flex flex-col w-full">
      <main className="flex-1 w-full flex flex-col">

        {/* Short Hero Section (Matching Homepage Style, No Image) */}
        <section className="relative w-full bg-primary pt-32 pb-12 md:pt-40 md:pb-16 overflow-hidden">

          {/* Subtle abstract glow effects to replace the image */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-white/5 rounded-full blur-[100px] -translate-x-1/3 translate-y-1/3 pointer-events-none" />

          <div className="relative z-10 w-full max-w-[1000px] mx-auto px-4 md:px-8 text-center flex flex-col items-center">
            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-white leading-[1.1]">
              Women-In-WACREN Network
            </h1>
          </div>
        </section>

        {/* Programme Overview Section */}
        <section id="open-calls" className="w-full bg-white py-16 md:py-24">
          <div className="w-full max-w-[1400px] mx-auto px-4 md:px-8">
            <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-semibold text-slate-900 mb-8">
              Hands-on, technical, and free to participants.
            </h2>
            <div className="text-base md:text-lg text-slate-700 font-light leading-relaxed space-y-6">
              <p>
                The Women-In-WACREN Network marks a new milestone in WiW's journey to advance women's participation in Science, Technology, Engineering, and Mathematics (STEM) across West and Central Africa. Bringing together women in STEM from both Anglophone and Francophone countries into a single, connected regional network, it aspires to close the gender gap in STEM leadership by creating sustained pathways for mentorship, collaboration, and professional growth, while ensuring members' insights directly shape WiW's ongoing and future programming, including initiatives under the AfricaConnect4 project.
              </p>
              <p>
                Membership offers real value: access to a peer network of women in STEM from across the region, opportunities for mentorship and skills-sharing, visibility for members' work and achievements, and a voice in shaping WiW's direction. Whether a member is early in her STEM career or an established professional, the Women-In-WACREN Network offers a space to connect, contribute, and grow regardless of language or geography reflecting WiW's commitment to an inclusive, pan-regional movement for women in STEM.
              </p>
            </div>

            <div className="mt-16 md:mt-20">
              <ProgrammeTabs />
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
