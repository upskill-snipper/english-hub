import type { Metadata } from 'next'
import { LearningResourceJsonLd } from '@/components/seo/json-ld'

export const metadata: Metadata = {
  title: 'AQA GCSE English Language writing skills',
  description:
    'Writing skills for AQA GCSE English Language: structure, vocabulary, sentence variety, and creative/transactional writing models.',
  alternates: {
    canonical: 'https://theenglishhub.app/resources/english-language/aqa/writing-skills',
  },
  openGraph: {
    title: 'AQA GCSE English Language writing skills - The English Hub',
    description:
      'Writing skills for AQA GCSE English Language: structure, vocabulary, sentence variety, and creative/transactional writing models.',
    images: [
      {
        url: '/api/og?title=AQA+GCSE+English+Language+writing+skills+-+The+English+Hub',
        width: 1200,
        height: 630,
        alt: 'AQA GCSE English Language writing skills - The English Hub',
      },
    ],
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <LearningResourceJsonLd
        name="AQA GCSE English Language writing skills"
        description="Writing skills for AQA GCSE English Language: structure, vocabulary, sentence variety, and creative/transactional writing models."
        educationalLevel="GCSE"
        learningResourceType="Lesson"
        url="https://theenglishhub.app/resources/english-language/aqa/writing-skills"
      />
      {children}
    </>
  )
}
