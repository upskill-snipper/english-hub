import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { getSetText } from '@/lib/board/set-texts'
import { StubStudyGuide } from '../_components/stub-study-guide'

const SLUG = 'when-greek-meets-greek'

export const metadata: Metadata = {
  title: 'When Greek Meets Greek — Sam Selvon',
  description:
    'Study guide stub for When Greek Meets Greek by Sam Selvon. Pearson Edexcel International GCSE English Language A (4EA1) Section C prose anthology.',
  alternates: {
    canonical: `https://theenglishhub.app/revision/texts/${SLUG}`,
  },
}

export default function Page() {
  const text = getSetText(SLUG)
  if (!text) notFound()
  return <StubStudyGuide text={text} />
}
