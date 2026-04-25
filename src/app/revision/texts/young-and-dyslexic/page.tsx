import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { getSetText } from '@/lib/board/set-texts'
import { StubStudyGuide } from '../_components/stub-study-guide'

const SLUG = 'young-and-dyslexic'

export const metadata: Metadata = {
  title: "Young and dyslexic? You've got it going on — Benjamin Zephaniah | The English Hub",
  description:
    "Study guide stub for Young and dyslexic? You've got it going on by Benjamin Zephaniah. Pearson Edexcel International GCSE English Language A (4EA1) Section A non-fiction anthology.",
  alternates: {
    canonical: `https://theenglishhub.app/revision/texts/${SLUG}`,
  },
}

export default function Page() {
  const text = getSetText(SLUG)
  if (!text) notFound()
  return <StubStudyGuide text={text} />
}
