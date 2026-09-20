import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { getSetText } from '@/lib/board/set-texts'
import { StubStudyGuide } from '../_components/stub-study-guide'

const SLUG = 'a-passage-to-africa'

export const metadata: Metadata = {
  title: 'A Passage to Africa - George Alagiah',
  description:
    'George Alagiah on reporting the Somali famine, from the Edexcel IGCSE English Language A (4EA1) anthology. Key themes and rights; guide in production.',
  alternates: {
    canonical: `https://theenglishhub.app/revision/texts/${SLUG}`,
  },
}

export default function Page() {
  const text = getSetText(SLUG)
  if (!text) notFound()
  return <StubStudyGuide text={text} />
}
