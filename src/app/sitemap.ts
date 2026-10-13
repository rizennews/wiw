import type { MetadataRoute } from 'next';
import { POSTS } from '@/lib/blog-data';
import { siteConfig } from '@/lib/site-config';

interface StaticRoute {
  path: string;
  changeFrequency: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority: number;
}

const STATIC_ROUTES: StaticRoute[] = [
  { path: '', changeFrequency: 'daily', priority: 1.0 },
  { path: '/about', changeFrequency: 'weekly', priority: 0.9 },
  { path: '/programme', changeFrequency: 'weekly', priority: 0.9 },
  { path: '/impact', changeFrequency: 'weekly', priority: 0.85 },
  { path: '/activities', changeFrequency: 'weekly', priority: 0.85 },
  { path: '/network', changeFrequency: 'weekly', priority: 0.85 },
  { path: '/partnership', changeFrequency: 'weekly', priority: 0.8 },
  { path: '/blog', changeFrequency: 'daily', priority: 0.9 },
  { path: '/documents', changeFrequency: 'weekly', priority: 0.75 },
  { path: '/contact', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/terms', changeFrequency: 'monthly', priority: 0.3 },
  { path: '/privacy-policy', changeFrequency: 'monthly', priority: 0.3 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.baseUrl;
  const locales = siteConfig.locales; // ['en', 'fr', 'pt']
  const now = new Date();

  const entries: MetadataRoute.Sitemap = [];

  // 1. Static Routes across all locales
  for (const route of STATIC_ROUTES) {
    for (const locale of locales) {
      const url = `${baseUrl}/${locale}${route.path}`;

      const languages: Record<string, string> = {};
      for (const altLocale of locales) {
        languages[altLocale] = `${baseUrl}/${altLocale}${route.path}`;
      }
      languages['x-default'] = `${baseUrl}/en${route.path}`;

      entries.push({
        url,
        lastModified: now,
        changeFrequency: route.changeFrequency,
        priority: route.priority,
        alternates: {
          languages,
        },
      });
    }
  }

  // 2. Blog & Event Posts across all locales
  for (const post of POSTS) {
    // Parse post date if possible, else fallback to current date
    let postDate = now;
    if (post.date) {
      const parsed = new Date(post.date);
      if (!isNaN(parsed.getTime())) {
        postDate = parsed;
      }
    }

    for (const locale of locales) {
      const url = `${baseUrl}/${locale}/blog/${post.slug}`;

      const languages: Record<string, string> = {};
      for (const altLocale of locales) {
        languages[altLocale] = `${baseUrl}/${altLocale}/blog/${post.slug}`;
      }
      languages['x-default'] = `${baseUrl}/en/blog/${post.slug}`;

      entries.push({
        url,
        lastModified: postDate,
        changeFrequency: 'monthly',
        priority: 0.8,
        alternates: {
          languages,
        },
      });
    }
  }

  return entries;
}
