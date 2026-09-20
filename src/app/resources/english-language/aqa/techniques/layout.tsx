import type { Metadata } from 'next'
import { LearningResourceJsonLd } from '@/components/seo/json-ld'

export const metadata: Metadata = {
  title: 'AQA GCSE English Language techniques',
  description:
    'Language and structural techniques for AQA GCSE English: identification, analysis, and how to write about them.',
  alternates: {
    canonical: 'https://theenglishhub.app/resources/english-language/aqa/techniques',
  },
  openGraph: {
    title: 'AQA GCSE English Language techniques - The English Hub',
    description:
      'Language and structural techniques for AQA GCSE English: identification, analysis, and how to write about them.',
    url: 'https://theenglishhub.app/resources/english-language/aqa/techniques',
    images: [
      {
        url: '/api/og?title=AQA+GCSE+English+Language+techniques+-+The+English+Hub',
        width: 1200,
        height: 630,
        alt: 'AQA GCSE English Language techniques - The English Hub',
      },
    ],
  },
}

export default function AqaTechniquesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <LearningResourceJsonLd
        name="AQA GCSE English Language techniques"
        description="Language and structural techniques for AQA GCSE English: identification, analysis, and how to write about them."
        educationalLevel="GCSE"
        learningResourceType="Lesson"
        about="AQA GCSE English Language techniques"
        url="https://theenglishhub.app/resources/english-language/aqa/techniques"
      />
      {children}
    </>
  )
}
