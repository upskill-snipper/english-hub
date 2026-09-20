import type { Metadata } from 'next'
import { QuizJsonLd } from '@/components/seo/json-ld'
import { getDiagnosticQuestions } from '@/lib/eal/diagnostic-bank'

/**
 * /eal/diagnostic metadata + Quiz/Breadcrumb JSON-LD. The test page is
 * a client component, so this server layout carries the SEO/GEO schema.
 */
export const metadata: Metadata = {
  title: 'CEFR Placement Test - English for Arabic Speakers (free)',
  description:
    'Free bilingual placement test for Arabic L1 learners. Multiple-choice grammar, vocabulary and pronunciation questions set your CEFR level and next topics.',
  alternates: { canonical: 'https://theenglishhub.app/eal/diagnostic' },
  openGraph: {
    title: 'Free CEFR Placement Test for Arabic Speakers - The English Hub',
    description:
      'Get your CEFR level (A2-C1), a per-skill breakdown and a personalised study path. Bilingual English/Arabic.',
    url: 'https://theenglishhub.app/eal/diagnostic',
    siteName: 'The English Hub',
    type: 'website',
    locale: 'en_GB',
    images: [
      {
        url: '/api/og?title=Free+CEFR+Placement+Test+for+Arabic+Speakers+-+The+English+Hub',
        width: 1200,
        height: 630,
        alt: 'Free CEFR Placement Test for Arabic Speakers - The English Hub',
      },
    ],
  },
}

export default function EALDiagnosticLayout({ children }: { children: React.ReactNode }) {
  const total = getDiagnosticQuestions().length
  return (
    <>
      <QuizJsonLd
        name="CEFR Placement Test for Arabic Speakers"
        description="A free, bilingual CEFR placement test that estimates an Arabic L1 learner's English level (A2-C1) across grammar, sentence structure, vocabulary, pronunciation and common errors."
        about="English as an Additional Language (EAL)"
        educationalLevel="CEFR A2-C1"
        url="https://theenglishhub.app/eal/diagnostic"
        totalQuestions={total}
        inLanguage="en-GB"
        audienceRole="student"
      />

      {children}
    </>
  )
}
