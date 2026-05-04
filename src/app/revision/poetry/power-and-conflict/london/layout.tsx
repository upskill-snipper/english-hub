import type { Metadata } from 'next'
import { BreadcrumbJsonLd, LearningResourceJsonLd } from '@/components/seo/json-ld'

const POEM_TITLE = 'London'
const SLUG = 'london'
const CANONICAL = `https://theenglishhub.app/revision/poetry/power-and-conflict/${SLUG}`

export const metadata: Metadata = {
  title: `${POEM_TITLE} — AQA Power and Conflict | The English Hub`,
  description: `Analysis of ${POEM_TITLE} for AQA GCSE English Literature Power and Conflict cluster: themes, language, structure, and comparisons.`,
  alternates: { canonical: CANONICAL },
}

export default function LondonLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: 'https://theenglishhub.app' },
          { name: 'Revision', url: 'https://theenglishhub.app/revision' },
          {
            name: 'Power and Conflict',
            url: 'https://theenglishhub.app/revision/poetry/power-and-conflict',
          },
          { name: POEM_TITLE, url: CANONICAL },
        ]}
      />
      <LearningResourceJsonLd
        name={`${POEM_TITLE} (AQA Power and Conflict)`}
        description={`Analysis of ${POEM_TITLE} for AQA GCSE English Literature Power and Conflict cluster: themes, language, structure, and comparisons.`}
        educationalLevel="GCSE"
        learningResourceType="Lesson"
        about="AQA Power and Conflict anthology cluster"
        url={CANONICAL}
      />
      {children}
    </>
  )
}
