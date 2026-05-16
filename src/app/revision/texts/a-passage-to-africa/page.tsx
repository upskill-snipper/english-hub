import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { getSetText } from '@/lib/board/set-texts'
import { StubStudyGuide } from '../_components/stub-study-guide'

const SLUG = 'a-passage-to-africa'

export const metadata: Metadata = {
  title: 'A Passage to Africa — George Alagiah',
  description:
    'Study guide stub for A Passage to Africa by George Alagiah (1955–2023). Pearson Edexcel International GCSE English Language A (4EA1) Section A non-fiction anthology. Rights now held by the Alagiah estate via Pearson Education.',
  alternates: {
    canonical: `https://theenglishhub.app/revision/texts/${SLUG}`,
  },
}

export default function Page() {
  const text = getSetText(SLUG)
  if (!text) notFound()
  return <StubStudyGuide text={text} />
}
