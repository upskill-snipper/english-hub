import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { getSetText } from '@/lib/board/set-texts'
import { StubStudyGuide } from '../_components/stub-study-guide'

const SLUG = 'the-danger-of-a-single-story'

export const metadata: Metadata = {
  title: 'The Danger of a Single Story — Chimamanda Ngozi Adichie | The English Hub',
  description:
    'Study guide stub for The Danger of a Single Story by Chimamanda Ngozi Adichie. Pearson Edexcel International GCSE English Language A (4EA1) Section A non-fiction anthology.',
  alternates: {
    canonical: `https://theenglishhub.app/revision/texts/${SLUG}`,
  },
}

export default function Page() {
  const text = getSetText(SLUG)
  if (!text) notFound()
  return <StubStudyGuide text={text} />
}
