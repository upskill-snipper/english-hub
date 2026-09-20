import type { Metadata } from 'next'
import { LearningResourceJsonLd } from '@/components/seo/json-ld'

const POEM_TITLE = 'Kamikaze'
const SLUG = 'kamikaze'
const CANONICAL = `https://theenglishhub.app/revision/poetry/power-and-conflict/${SLUG}`

export const metadata: Metadata = {
  title: `${POEM_TITLE} - AQA Power and Conflict`,
  description: `Analysis of ${POEM_TITLE} for AQA GCSE English Literature Power and Conflict cluster: themes, language, structure, and comparisons.`,
  alternates: { canonical: CANONICAL },
}

export default function KamikazeLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
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
