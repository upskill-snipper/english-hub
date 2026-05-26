import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { getSetText } from '@/lib/board/set-texts'
import { StubStudyGuide } from '../_components/stub-study-guide'

const SLUG = 'explorers-or-boys-messing-about'

export const metadata: Metadata = {
  title: 'Explorers, or boys messing about? - Steven Morris',
  description:
    'Study guide for Explorers, or boys messing about? by Steven Morris (originally The Guardian, 24 Jan 2003; adapted for the Edexcel IGCSE Anthology by Pearson). Paper 1 Section A - Anthology Non-Fiction (4EA1). Always use the anthology version when answering Edexcel exam questions.',
  alternates: {
    canonical: `https://theenglishhub.app/revision/texts/${SLUG}`,
  },
}

export default function Page() {
  const text = getSetText(SLUG)
  if (!text) notFound()
  return <StubStudyGuide text={text} />
}
