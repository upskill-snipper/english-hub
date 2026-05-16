import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { getSetText } from '@/lib/board/set-texts'
import { StubStudyGuide } from '../_components/stub-study-guide'

const SLUG = 'a-game-of-polo-with-a-headless-goat'

export const metadata: Metadata = {
  title: 'A Game of Polo with a Headless Goat — Emma Levine',
  description:
    'Study guide stub for A Game of Polo with a Headless Goat by Emma Levine. Pearson Edexcel International GCSE English Language A (4EA1) Section A non-fiction anthology.',
  alternates: {
    canonical: `https://theenglishhub.app/revision/texts/${SLUG}`,
  },
}

export default function Page() {
  const text = getSetText(SLUG)
  if (!text) notFound()
  return <StubStudyGuide text={text} />
}
