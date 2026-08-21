import { Metadata } from 'next';
import ContactPageClient from './ContactPageClient';
import { setRequestLocale } from 'next-intl/server';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with the WACREN Secretariat. Reach out for partnerships, media inquiries, or general questions.',
};

export default async function ContactPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <ContactPageClient />;
}
