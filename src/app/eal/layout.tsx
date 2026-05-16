import type { Metadata } from 'next'
import { BreadcrumbJsonLd } from '@/components/seo/json-ld'

/**
 * /eal section metadata + breadcrumb. The landing page itself is a
 * client component (it uses the locale hook) so it cannot export
 * metadata — this server layout supplies it for /eal and acts as the
 * default for child routes that don't set their own. Child pages
 * (diagnostic, banded practice, level views) override title/description
 * /canonical via their own metadata exports.
 *
 * Title is brand-free: the root layout applies the "%s — The English
 * Hub" template, so adding the brand here would double it.
 */
export const metadata: Metadata = {
  title: 'EAL — English for Arabic Speakers (CEFR A2–C1)',
  description:
    'Free, bilingual English lessons and a real CEFR placement test for Arabic L1 learners preparing for UK GCSE/IGCSE: grammar, sentence structure, vocabulary, pronunciation and common Arabic-to-English errors.',
  keywords: [
    'English for Arabic speakers',
    'CEFR placement test',
    'EAL',
    'English as an additional language',
    'A2 B1 B2 C1 English',
    'Arabic L1 English errors',
  ],
  alternates: { canonical: 'https://theenglishhub.app/eal' },
  openGraph: {
    title: 'EAL — English for Arabic Speakers (CEFR A2–C1) — The English Hub',
    description:
      'Bilingual English lessons and a real CEFR placement test for Arabic L1 learners preparing for UK GCSE/IGCSE.',
    url: 'https://theenglishhub.app/eal',
    siteName: 'The English Hub',
    type: 'website',
    locale: 'en_GB',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EAL — English for Arabic Speakers (CEFR A2–C1) — The English Hub',
    description: 'Bilingual English lessons and a real CEFR placement test for Arabic L1 learners.',
  },
}

export default function EALLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: 'https://theenglishhub.app' },
          { name: 'EAL — English for Arabic Speakers', url: 'https://theenglishhub.app/eal' },
        ]}
      />
      {children}
    </>
  )
}
