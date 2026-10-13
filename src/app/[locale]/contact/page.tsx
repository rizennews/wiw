import type { Metadata } from 'next';
import ContactPageClient from './ContactPageClient';
import { setRequestLocale } from 'next-intl/server';
import { buildPageMetadata } from '@/lib/site-config';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  return buildPageMetadata({
    locale,
    path: '/contact',
    title: 'Contact Us',
    description: 'Get in touch with the Women-In-WACREN Secretariat (wiw@wacren.net). Reach out for partnerships, programmes, questions, or media inquiries.',
    image: '/og-image.png',
  });
}

export default async function ContactPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <ContactPageClient />;
}
