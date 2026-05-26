import type { Metadata } from 'next'
import { FAQPageJsonLd } from '@/components/seo/json-ld'
import { FAQ_JSON_LD_DATA } from './faq-data'

export const metadata: Metadata = {
  title: 'FAQs - Frequently Asked Questions',
  description:
    'Got questions about The English Hub? Find answers about pricing, courses, GCSE & IGCSE exam prep, school licences, AI marking, safeguarding, and more.',
  openGraph: {
    title: 'FAQs - Frequently Asked Questions - The English Hub',
    description:
      'Got questions about The English Hub? Find answers about pricing, courses, GCSE & IGCSE exam prep, school licences, AI marking, safeguarding, and more.',
    url: 'https://theenglishhub.app/faqs',
    siteName: 'The English Hub',
    type: 'website',
    locale: 'en_GB',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FAQs - Frequently Asked Questions - The English Hub',
    description:
      'Got questions about The English Hub? Find answers about pricing, courses, GCSE & IGCSE exam prep, school licences, AI marking, safeguarding, and more.',
  },
  alternates: {
    canonical: 'https://theenglishhub.app/faqs',
  },
}

export default function FaqsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <FAQPageJsonLd faqs={FAQ_JSON_LD_DATA} />
      {children}
    </>
  )
}
