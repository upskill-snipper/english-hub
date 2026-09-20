import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { getSetText } from '@/lib/board/set-texts'
import { StubStudyGuide } from '../_components/stub-study-guide'

const SLUG = 'explorers-or-boys-messing-about'

export const metadata: Metadata = {
  title: 'Explorers, or boys messing about? - Steven Morris',
  description:
    'Steven Morris on the Antarctic rescue, adapted for the Edexcel IGCSE (4EA1) anthology. Use the anthology text, not the Guardian original, in the exam.',
  alternates: {
    canonical: `https://theenglishhub.app/revision/texts/${SLUG}`,
  },
}

export default function Page() {
  const text = getSetText(SLUG)
  if (!text) notFound()
  return <StubStudyGuide text={text} />
}
