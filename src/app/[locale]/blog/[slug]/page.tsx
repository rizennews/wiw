import Image from 'next/image';
import type { Metadata } from 'next';
import { setRequestLocale, getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/routing';
import { ShareMenu } from '@/components/ShareMenu';
import { TableOfContents } from '@/components/TableOfContents';
import { DefaultPlaceholderImage } from '@/components/EventDefaultImage';
import { getPostBySlug } from '@/lib/blog-data';
import { notFound } from 'next/navigation';
import { siteConfig, buildPageMetadata, getArticleSchema, getBreadcrumbSchema } from '@/lib/site-config';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  const t = await getTranslations({ locale, namespace: 'Blog' });
  const title = t.has(`${post.slug}.title`) ? t(`${post.slug}.title`) : post.title;
  const excerpt = t.has(`${post.slug}.excerpt`) ? t(`${post.slug}.excerpt`) : post.excerpt;

  return buildPageMetadata({
    locale,
    path: `/blog/${post.slug}`,
    title,
    description: excerpt,
    image: post.image,
    ogType: 'article',
    publishedTime: post.date,
    authorName: post.author.name,
    keywords: [post.category, 'Women-In-WACREN Blog', 'WACREN Updates', 'STEM Africa'],
  });
}

export default async function BlogPostPage({ params }: { params: Promise<{ locale: string, slug: string }> }) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('Blog');
  const tBlogPage = await getTranslations('BlogPage');

  const POST = getPostBySlug(slug);

  if (!POST) {
    notFound();
  }

  const postTitle = t.has(`${POST.slug}.title`) ? t(`${POST.slug}.title`) : POST.title;
  const postExcerpt = t.has(`${POST.slug}.excerpt`) ? t(`${POST.slug}.excerpt`) : POST.excerpt;
  const postShareUrl = `${siteConfig.baseUrl}/${locale}/blog/${POST.slug}`;

  const articleSchema = getArticleSchema({
    title: postTitle,
    description: postExcerpt,
    slug: POST.slug,
    locale,
    image: POST.image,
    datePublished: POST.date,
    authorName: POST.author.name,
    category: POST.category,
  });

  const breadcrumbSchema = getBreadcrumbSchema(
    [
      { name: 'Home', path: '' },
      { name: 'Blog', path: '/blog' },
      { name: postTitle, path: `/blog/${POST.slug}` },
    ],
    locale
  );

  return (
    <div className="w-full flex flex-col min-h-screen bg-[#fafafa]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      
      {/* Top Section (Header & Image) */}
      <section className="w-full max-w-[1400px] mx-auto px-4 md:px-8 pt-32 pb-16 md:pt-40 md:pb-24 flex flex-col lg:flex-row gap-12 lg:gap-20">
        
        {/* Left Column: Title & Meta */}
        <div className="w-full lg:w-[40%] flex flex-col justify-center">
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 font-mono text-[13px] mb-8">
            <Link href="/blog" className="text-primary hover:underline">Blog</Link>
            <span className="text-slate-400">/</span>
            <span className="text-slate-900">
              {tBlogPage.has(`categories.${POST.category}`) ? tBlogPage(`categories.${POST.category}`) : POST.category}
            </span>
          </div>

          <h1 className="font-heading text-4xl md:text-5xl font-medium text-slate-900 leading-[1.2] mb-12">
            {postTitle}
          </h1>

          {/* Author & Meta */}
          <div className="flex items-center justify-between pt-6 border-t border-slate-200">
            <div className="flex items-center gap-3">
              <Image 
                src={POST.author.avatar} 
                alt={POST.author.name}
                width={32}
                height={32}
                className="w-8 h-8 rounded-full object-cover"
              />
              <div className="flex items-center gap-2 font-mono text-[12px] text-slate-600">
                <span className="font-medium text-slate-900">{POST.author.name}</span>
                <span className="w-1 h-1 rounded-full bg-slate-900"></span>
                <span>{POST.date}</span>
              </div>
            </div>
            
            <ShareMenu 
              title={postTitle} 
              url={postShareUrl} 
            />
          </div>
        </div>

        {/* Right Column: Hero Image */}
        <div className="w-full lg:w-[60%]">
          <div className="relative w-full aspect-[16/9] md:aspect-[21/9] lg:aspect-auto lg:h-[450px] border border-slate-200 rounded-sm overflow-hidden bg-white flex items-center justify-center">
            {POST.image ? (
              <Image 
                src={POST.image} 
                alt={POST.title}
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                priority
                className="object-contain opacity-95"
              />
            ) : (
              <DefaultPlaceholderImage variant="hero" />
            )}
          </div>
        </div>

      </section>

      {/* Divider */}
      <div className="w-full border-t border-slate-200"></div>

      {/* Main Content Section */}
      <section className="w-full max-w-[1400px] mx-auto px-4 md:px-8 py-16 flex flex-col lg:flex-row gap-12 lg:gap-20">
        
        {/* Left Column: Table of Contents */}
        <TableOfContents toc={POST.toc.map(item => ({
          ...item,
          title: t.has(`${POST.slug}.toc.${item.id}`) ? t(`${POST.slug}.toc.${item.id}`) : item.title
        }))} />

        {/* Right Column: Article Content */}
        <article className="w-full lg:w-[70%] max-w-[800px]">
          {/* We use dangerouslySetInnerHTML here for the mock content. In production, this would be a markdown parser or portable text renderer */}
          <div 
            className="prose prose-slate max-w-none"
            dangerouslySetInnerHTML={{ __html: t.has(`${POST.slug}.content`) ? t.raw(`${POST.slug}.content`) : POST.content }}
          />
        </article>

      </section>

    </div>
  );
}
