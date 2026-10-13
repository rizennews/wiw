import { setRequestLocale, getTranslations } from 'next-intl/server';
import { BlogFeed } from '@/components/BlogFeed';
import type { Metadata } from 'next';
import { buildPageMetadata, getBreadcrumbSchema } from '@/lib/site-config';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'BlogPage' });

  return buildPageMetadata({
    locale,
    path: '/blog',
    title: t('title') || 'Blog & Updates',
    description: t('description') || 'Read the latest news, updates, and community stories from the Women-In-WACREN network.',
    image: '/og-image.png',
  });
}

export default async function BlogPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('BlogPage');

  const breadcrumbs = getBreadcrumbSchema(
    [
      { name: 'Home', path: '' },
      { name: 'Blog & Updates', path: '/blog' },
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
      {/* Hero Section */}
      <section className="relative w-full bg-primary pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-white/5 rounded-full blur-[100px] -translate-x-1/3 translate-y-1/3 pointer-events-none" />

        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-4 md:px-8 text-center flex flex-col items-center">
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-[1.1] mb-6">
            {t('title')}
          </h1>
          <p className="text-lg md:text-xl text-white/80 font-light max-w-2xl">
            {t('description')}
          </p>
        </div>
      </section>

      {/* Main Content (Client Component) */}
      <BlogFeed />
    </div>
  );
}
