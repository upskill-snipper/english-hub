import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { getSetText } from '@/lib/board/set-texts'
import { StubStudyGuide } from '../_components/stub-study-guide'

const SLUG = 'significant-cigarettes'

export const metadata: Metadata = {
  title: 'Significant Cigarettes — Rose Tremain | The English Hub',
  description:
    'Study guide stub for Significant Cigarettes by Rose Tremain. Pearson Edexcel International GCSE English Language A (4EA1) Section C prose anthology.',
  alternates: {
    canonical: `https://theenglishhub.app/revision/texts/${SLUG}`,
  },
}

export default function Page() {
  const text = getSetText(SLUG)
  if (!text) notFound()
  return <StubStudyGuide text={text} />
}
