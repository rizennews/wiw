import { setRequestLocale } from 'next-intl/server';
import { Link } from '@/i18n/routing';
import { ShareMenu } from '@/components/ShareMenu';
import { TableOfContents } from '@/components/TableOfContents';
import { getPostBySlug } from '@/lib/blog-data';
import { notFound } from 'next/navigation';

export default async function BlogPostPage({ params }: { params: Promise<{ locale: string, slug: string }> }) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const POST = getPostBySlug(slug);

  if (!POST) {
    notFound();
  }

  return (
    <div className="w-full flex flex-col min-h-screen bg-[#fafafa]">
      
      {/* Top Section (Header & Image) */}
      <section className="w-full max-w-[1400px] mx-auto px-4 md:px-8 pt-32 pb-16 md:pt-40 md:pb-24 flex flex-col lg:flex-row gap-12 lg:gap-20">
        
        {/* Left Column: Title & Meta */}
        <div className="w-full lg:w-[40%] flex flex-col justify-center">
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 font-mono text-[13px] mb-8">
            <Link href="/blog" className="text-primary hover:underline">Blog</Link>
            <span className="text-slate-400">/</span>
            <span className="text-slate-900">{POST.category}</span>
          </div>

          <h1 className="font-heading text-4xl md:text-5xl font-medium text-slate-900 leading-[1.2] mb-12 break-words">
            {POST.title}
          </h1>

          {/* Author & Meta */}
          <div className="flex items-center justify-between pt-6 border-t border-slate-200">
            <div className="flex items-center gap-3">
              <img 
                src={POST.author.avatar} 
                alt={POST.author.name}
                className="w-8 h-8 rounded-full object-cover"
              />
              <div className="flex items-center gap-2 font-mono text-[12px] text-slate-600">
                <span className="font-medium text-slate-900">{POST.author.name}</span>
                <span className="w-1 h-1 rounded-full bg-slate-900"></span>
                <span>{POST.date}</span>
              </div>
            </div>
            
            <ShareMenu 
              title={POST.title} 
              url={`https://wacren.net/blog/${POST.slug}`} 
            />
          </div>
        </div>

        {/* Right Column: Hero Image */}
        <div className="w-full lg:w-[60%]">
          <div className="w-full aspect-[16/9] md:aspect-[21/9] lg:aspect-auto lg:h-[450px] border border-slate-200 rounded-sm overflow-hidden bg-white">
            {POST.image ? (
              <img 
                src={POST.image} 
                alt={POST.title}
                className="w-full h-full object-cover opacity-95"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-slate-50">
                <span className="font-serif text-3xl md:text-5xl font-bold text-slate-300 tracking-widest opacity-50 uppercase">
                  WOMEN-IN-WACREN
                </span>
              </div>
            )}
          </div>
        </div>

      </section>

      {/* Divider */}
      <div className="w-full border-t border-slate-200"></div>

      {/* Main Content Section */}
      <section className="w-full max-w-[1400px] mx-auto px-4 md:px-8 py-16 flex flex-col lg:flex-row gap-12 lg:gap-20">
        
        {/* Left Column: Table of Contents */}
        <TableOfContents toc={POST.toc} />

        {/* Right Column: Article Content */}
        <article className="w-full lg:w-[70%] max-w-[800px] overflow-hidden">
          {/* We use dangerouslySetInnerHTML here for the mock content. In production, this would be a markdown parser or portable text renderer */}
          <div 
            className="prose prose-slate max-w-none break-words"
            dangerouslySetInnerHTML={{ __html: POST.content }}
          />
        </article>

      </section>

    </div>
  );
}
