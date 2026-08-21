import { setRequestLocale } from 'next-intl/server';
import { DocumentLibrary } from '@/components/DocumentLibrary';

export default async function DocumentsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div className="w-full flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full bg-primary pt-32 pb-12 md:pt-40 md:pb-16 overflow-hidden">
        
        {/* Subtle abstract glow effects */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-white/5 rounded-full blur-[100px] -translate-x-1/3 translate-y-1/3 pointer-events-none" />

        <div className="relative z-10 w-full max-w-[1000px] mx-auto px-4 md:px-8 text-center flex flex-col items-center">
          <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-white leading-[1.1]">
            Documents
          </h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="w-full bg-white py-16 md:py-24 flex-1">
        <div className="w-full max-w-[1400px] mx-auto px-4 md:px-8">
          <div className="flex flex-col items-start w-full">
            <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-semibold text-slate-900 mb-8">
              Resource Documents
            </h2>
            <DocumentLibrary />
          </div>
        </div>
      </section>
    </div>
  );
}
