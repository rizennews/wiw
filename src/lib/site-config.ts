import type { Metadata } from 'next';

export const siteConfig = {
  baseUrl: 'https://womeninwacren.wacren.net',
  name: 'Women-In-WACREN',
  shortName: 'WiW',
  title: 'Women-In-WACREN - Empowering Women in STEM Across West & Central Africa',
  description:
    'Women-In-WACREN connects, trains, and funds women in STEM across West and Central Africa. Turning students, researchers, and early-career professionals into tech leaders and innovators.',
  defaultOgImage: 'https://womeninwacren.wacren.net/og-image.png',
  defaultOgImageJpg: 'https://womeninwacren.wacren.net/og-image.jpg',
  logoUrl: 'https://womeninwacren.wacren.net/Women%20in%20WACREN%20logo.png',
  email: 'wiw@wacren.net',
  locales: ['en', 'fr', 'pt'] as const,
  defaultLocale: 'en' as const,
  keywords: [
    'Women in STEM',
    'Women-In-WACREN',
    'WiW',
    'WACREN',
    'Women in Tech Africa',
    'West and Central Africa STEM',
    'Research and Education Network',
    'African Women in Technology',
    'AfricaConnect',
    'European Union STEM Africa',
    'Physical Computing Python',
    'Cybersecurity for Women',
    'Climate Innovation Lab',
    'Women Tech Mentorship Africa',
    'STEM Grants Africa',
    'Digital Leadership',
  ],
  links: {
    wacren: 'https://wacren.net',
    indico: 'https://indico.wacren.net',
    video: 'https://video.wacren.net/channel/Women-In-WACREN/721046',
    photos: 'https://photos.wacren.net/index.php?/category/120',
    twitter: 'https://twitter.com/WACREN',
    twitterHandle: '@WACREN',
    linkedin: 'https://www.linkedin.com/company/wacren',
    facebook: 'https://www.facebook.com/WACREN',
  },
} as const;

export type SupportedLocale = (typeof siteConfig.locales)[number];

export function absoluteUrl(path = ''): string {
  if (!path) return siteConfig.baseUrl;
  if (path.startsWith('http://') || path.startsWith('https://')) return path;
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  // Safely encode spaces and special characters in paths, but preserve forward slashes
  const encodedPath = cleanPath
    .split('/')
    .map((segment) => encodeURIComponent(segment))
    .join('/');
  return `${siteConfig.baseUrl}${encodedPath}`;
}

export function getLanguageAlternates(pathname: string, currentLocale: string = 'en') {
  // Ensure pathname begins with slash and does not include locale prefix
  let cleanPath = pathname.startsWith('/') ? pathname : `/${pathname}`;
  for (const loc of siteConfig.locales) {
    if (cleanPath === `/${loc}`) {
      cleanPath = '/';
      break;
    }
    if (cleanPath.startsWith(`/${loc}/`)) {
      cleanPath = cleanPath.slice(loc.length + 1);
      break;
    }
  }

  const pathSuffix = cleanPath === '/' ? '' : cleanPath;

  return {
    canonical: `${siteConfig.baseUrl}/${currentLocale}${pathSuffix}`,
    languages: {
      en: `${siteConfig.baseUrl}/en${pathSuffix}`,
      fr: `${siteConfig.baseUrl}/fr${pathSuffix}`,
      pt: `${siteConfig.baseUrl}/pt${pathSuffix}`,
      'x-default': `${siteConfig.baseUrl}/en${pathSuffix}`,
    },
  };
}

export function getOgLocale(locale: string): string {
  switch (locale) {
    case 'fr':
      return 'fr_FR';
    case 'pt':
      return 'pt_PT';
    case 'en':
    default:
      return 'en_US';
  }
}

interface BuildPageMetadataOptions {
  locale: string;
  path: string; // e.g. '/about' or '/blog/my-slug'
  title: string;
  description: string;
  image?: string;
  imageAlt?: string;
  ogType?: 'website' | 'article';
  publishedTime?: string;
  authorName?: string;
  keywords?: string[];
}

export function buildPageMetadata({
  locale,
  path,
  title,
  description,
  image,
  imageAlt,
  ogType = 'website',
  publishedTime,
  authorName,
  keywords = [],
}: BuildPageMetadataOptions): Metadata {
  const alternates = getLanguageAlternates(path, locale);
  const resolvedImageUrl = image ? absoluteUrl(image) : siteConfig.defaultOgImage;
  const resolvedImageAlt =
    imageAlt || `${title} | Women-In-WACREN - Empowering Women in STEM Across Africa`;

  const metaTitle = title.includes('Women-In-WACREN') ? title : `${title} | Women-In-WACREN`;

  return {
    title,
    description,
    keywords: [...keywords, ...siteConfig.keywords],
    alternates,
    openGraph: {
      title: metaTitle,
      description,
      url: alternates.canonical,
      siteName: siteConfig.name,
      locale: getOgLocale(locale),
      type: ogType,
      images: [
        {
          url: resolvedImageUrl,
          width: 1200,
          height: 630,
          alt: resolvedImageAlt,
          type: resolvedImageUrl.endsWith('.png') ? 'image/png' : 'image/jpeg',
        },
      ],
      ...(ogType === 'article' && {
        publishedTime,
        authors: authorName ? [authorName] : ['Women-In-WACREN'],
      }),
    },
    twitter: {
      card: 'summary_large_image',
      title: metaTitle,
      description,
      images: [resolvedImageUrl],
      site: siteConfig.links.twitterHandle,
      creator: siteConfig.links.twitterHandle,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

/**
 * Structured Data (Schema.org JSON-LD) Helpers
 */
export function getOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    name: 'Women-In-WACREN',
    alternateName: ['WiW', 'Women in WACREN'],
    url: siteConfig.baseUrl,
    logo: {
      '@type': 'ImageObject',
      url: siteConfig.logoUrl,
      width: 500,
      height: 350,
    },
    image: siteConfig.defaultOgImage,
    description: siteConfig.description,
    email: siteConfig.email,
    parentOrganization: {
      '@type': 'Organization',
      name: 'West and Central African Research and Education Network (WACREN)',
      url: siteConfig.links.wacren,
      logo: 'https://womeninwacren.wacren.net/wacren.png',
    },
    sameAs: [
      siteConfig.links.twitter,
      siteConfig.links.linkedin,
      siteConfig.links.facebook,
      siteConfig.links.video,
      siteConfig.links.photos,
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      email: siteConfig.email,
      contactType: 'Community & Programmes Coordinator',
      availableLanguage: ['English', 'French', 'Portuguese'],
    },
    knowsAbout: [
      'STEM Education for Women',
      'Research and Education Networks',
      'Physical Computing & IoT',
      'Cybersecurity & Network Engineering',
      'Climate Innovation in Africa',
    ],
  };
}

export function getWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteConfig.name,
    alternateName: 'Women in WACREN Portal',
    url: siteConfig.baseUrl,
    inLanguage: ['en', 'fr', 'pt'],
    publisher: {
      '@type': 'Organization',
      name: 'WACREN',
      url: siteConfig.links.wacren,
    },
  };
}

export function getBreadcrumbSchema(items: { name: string; path: string }[], locale = 'en') {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${siteConfig.baseUrl}/${locale}${item.path.startsWith('/') ? item.path : `/${item.path}`}`,
    })),
  };
}

export function getArticleSchema({
  title,
  description,
  slug,
  locale,
  image,
  datePublished,
  authorName,
  category,
}: {
  title: string;
  description: string;
  slug: string;
  locale: string;
  image?: string;
  datePublished?: string;
  authorName?: string;
  category?: string;
}) {
  const postUrl = `${siteConfig.baseUrl}/${locale}/blog/${slug}`;
  const imageUrl = image ? absoluteUrl(image) : siteConfig.defaultOgImage;

  return {
    '@context': 'https://schema.org',
    '@type': category === 'Event' ? 'Event' : 'BlogPosting',
    headline: title,
    name: title,
    description: description,
    url: postUrl,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': postUrl,
    },
    image: [imageUrl],
    datePublished: datePublished ? new Date(datePublished).toISOString() : undefined,
    dateModified: datePublished ? new Date(datePublished).toISOString() : new Date().toISOString(),
    inLanguage: locale,
    articleSection: category,
    author: {
      '@type': 'Person',
      name: authorName || 'Women-In-WACREN',
    },
    publisher: {
      '@type': 'Organization',
      name: siteConfig.name,
      url: siteConfig.baseUrl,
      logo: {
        '@type': 'ImageObject',
        url: siteConfig.logoUrl,
      },
    },
  };
}
