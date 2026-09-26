import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { getSetText } from '@/lib/board/set-texts'
import { StubStudyGuide, stubCanonical } from '../_components/stub-study-guide'

const SLUG = 'young-and-dyslexic'

export const metadata: Metadata = {
  title: "Young and dyslexic? You've got it going on - Zephaniah",
  description:
    'Benjamin Zephaniah on growing up labelled stupid because of dyslexia, adapted for the Edexcel IGCSE (4EA1) anthology. Use the anthology text in the exam.',
  alternates: {
    canonical: stubCanonical(SLUG, `/revision/texts/${SLUG}`),
  },
}

export default function Page() {
  const text = getSetText(SLUG)
  if (!text) notFound()
  return <StubStudyGuide text={text} />
}
