import type { Metadata } from 'next'
import { LearningResourceJsonLd } from '@/components/seo/json-ld'
import { GuideSupplement } from '@/components/study-guide/guide-supplement'
import { guide } from '@/data/study-guides/my-last-duchess'

const POEM_TITLE = 'My Last Duchess'
const SLUG = 'my-last-duchess'
const CANONICAL = `https://theenglishhub.app/revision/poetry/power-and-conflict/${SLUG}`

export const metadata: Metadata = {
  title: `${POEM_TITLE} - AQA Power and Conflict`,
  description: `Analysis of ${POEM_TITLE} for AQA GCSE English Literature Power and Conflict cluster: themes, language, structure, and comparisons.`,
  alternates: { canonical: CANONICAL },
}

export default function MyLastDuchessLayout({ children }: { children: React.ReactNode }) {
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
      {/* The sections this page did not have, and its story visuals, mounted by
          hand because this layout also carries the page's JSON-LD. See
          scripts/mount-study-guide-supplement.mjs. */}
      <GuideSupplement guide={guide} />
    </>
  )
}
