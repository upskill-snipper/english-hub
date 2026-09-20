import type { Metadata } from 'next'

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
  title: 'English support for EAL learners',
  description:
    'Structured EAL support for international schools: graded lessons, a free bilingual CEFR placement test, and progress visibility for teachers.',
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
    title: 'English support for EAL learners - The English Hub',
    description:
      'Vocabulary, reading fluency, comprehension, grammar and writing confidence for EAL learners, with teacher visibility and progress reporting. Includes a bilingual CEFR placement test.',
    url: 'https://theenglishhub.app/eal',
    siteName: 'The English Hub',
    type: 'website',
    locale: 'en_GB',
    images: [
      {
        url: '/api/og?title=English+support+for+EAL+learners+-+The+English+Hub',
        width: 1200,
        height: 630,
        alt: 'English support for EAL learners - The English Hub',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'English support for EAL learners - The English Hub',
    description:
      'Structured EAL support with teacher visibility and progress reporting, plus a bilingual CEFR placement test.',
    images: [
      '/api/og?title=Structured+English+for+EAL+learners&subtitle=With+a+bilingual+CEFR+placement+test',
    ],
  },
}

export default function EALLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
