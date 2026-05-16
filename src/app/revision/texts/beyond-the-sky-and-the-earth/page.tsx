import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { getSetText } from '@/lib/board/set-texts'
import { StubStudyGuide } from '../_components/stub-study-guide'

const SLUG = 'beyond-the-sky-and-the-earth'

export const metadata: Metadata = {
  title: 'Beyond the Sky and the Earth — Jamie Zeppa',
  description:
    'Study guide stub for Beyond the Sky and the Earth by Jamie Zeppa. Pearson Edexcel International GCSE English Language A (4EA1) Section A non-fiction anthology.',
  alternates: {
    canonical: `https://theenglishhub.app/revision/texts/${SLUG}`,
  },
}

export default function Page() {
  const text = getSetText(SLUG)
  if (!text) notFound()
  return <StubStudyGuide text={text} />
}
