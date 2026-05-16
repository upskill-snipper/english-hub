import type { Metadata } from 'next'
import { BreadcrumbJsonLd, LearningResourceJsonLd } from '@/components/seo/json-ld'

export const metadata: Metadata = {
  title: 'AQA GCSE English Language writing skills',
  description:
    'Writing skills for AQA GCSE English Language: structure, vocabulary, sentence variety, and creative/transactional writing models.',
  alternates: {
    canonical: 'https://theenglishhub.app/resources/english-language/aqa/writing-skills',
  },
  openGraph: {
    title: 'AQA GCSE English Language writing skills — The English Hub',
    description:
      'Writing skills for AQA GCSE English Language: structure, vocabulary, sentence variety, and creative/transactional writing models.',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: 'https://theenglishhub.app' },
          { name: 'English Language', url: 'https://theenglishhub.app/resources/english-language' },
          { name: 'AQA', url: 'https://theenglishhub.app/resources/english-language/aqa' },
          {
            name: 'Writing skills',
            url: 'https://theenglishhub.app/resources/english-language/aqa/writing-skills',
          },
        ]}
      />
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
