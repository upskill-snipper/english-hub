import type { Metadata } from 'next'
import { BreadcrumbJsonLd, LearningResourceJsonLd } from '@/components/seo/json-ld'

export const metadata: Metadata = {
  title: 'AQA GCSE English Language techniques',
  description:
    'Language and structural techniques for AQA GCSE English: identification, analysis, and how to write about them.',
  alternates: {
    canonical: 'https://theenglishhub.app/resources/english-language/aqa/techniques',
  },
  openGraph: {
    title: 'AQA GCSE English Language techniques — The English Hub',
    description:
      'Language and structural techniques for AQA GCSE English: identification, analysis, and how to write about them.',
    url: 'https://theenglishhub.app/resources/english-language/aqa/techniques',
  },
}

export default function AqaTechniquesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: 'https://theenglishhub.app' },
          { name: 'English Language', url: 'https://theenglishhub.app/resources/english-language' },
          { name: 'AQA', url: 'https://theenglishhub.app/resources/english-language/aqa' },
          {
            name: 'Techniques',
            url: 'https://theenglishhub.app/resources/english-language/aqa/techniques',
          },
        ]}
      />
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
