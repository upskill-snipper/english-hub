import type { Metadata } from 'next'
import { BreadcrumbJsonLd } from '@/components/seo/json-ld'

/**
 * /eal section metadata + breadcrumb. The landing page itself is a
 * client component (it uses the locale hook) so it cannot export
 * metadata - this server layout supplies it for /eal and acts as the
 * default for child routes that don't set their own. Child pages
 * (diagnostic, banded practice, level views) override title/description
 * /canonical via their own metadata exports.
 *
 * Title is brand-free: the root layout applies the "%s - The English
 * Hub" template, so adding the brand here would double it.
 */
export const metadata: Metadata = {
  title: 'Structured English support for EAL learners',
  description:
    'Structured English support for EAL learners - vocabulary, reading fluency, comprehension, grammar and writing confidence - with teacher visibility, differentiated support and progress reporting. Built for international and GCC schools and includes a bilingual CEFR placement test for Arabic L1 learners.',
  keywords: [
    'EAL support platform',
    'EAL learners English support',
    'English as an additional language',
    'CEFR placement test',
    'English for Arabic speakers',
    'Qatar EdTech English platform',
    'GCC school English platform',
    'international school IGCSE English',
  ],
  alternates: { canonical: 'https://theenglishhub.app/eal' },
  openGraph: {
    title: 'Structured English support for EAL learners - The English Hub',
    description:
      'Vocabulary, reading fluency, comprehension, grammar and writing confidence for EAL learners, with teacher visibility and progress reporting. Includes a bilingual CEFR placement test.',
    url: 'https://theenglishhub.app/eal',
    siteName: 'The English Hub',
    type: 'website',
    locale: 'en_GB',
    images: [
      {
        url: '/api/og?title=Structured+English+for+EAL+learners&subtitle=With+a+bilingual+CEFR+placement+test',
        width: 1200,
        height: 630,
        alt: 'Structured English support for EAL learners - The English Hub',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Structured English support for EAL learners - The English Hub',
    description:
      'Structured EAL support with teacher visibility and progress reporting, plus a bilingual CEFR placement test.',
    images: [
      '/api/og?title=Structured+English+for+EAL+learners&subtitle=With+a+bilingual+CEFR+placement+test',
    ],
  },
}

export default function EALLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: 'https://theenglishhub.app' },
          { name: 'EAL - English for Arabic Speakers', url: 'https://theenglishhub.app/eal' },
        ]}
      />
      {children}
    </>
  )
}
