import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { getSetText } from '@/lib/board/set-texts'
import { StubStudyGuide, stubCanonical } from '../_components/stub-study-guide'

const SLUG = 'the-explorers-daughter'

export const metadata: Metadata = {
  title: "The Explorer's Daughter - Kari Herbert",
  description:
    'Kari Herbert on watching Inuit hunters pursue narwhal, from the Edexcel IGCSE Language A (4EA1) anthology, with a link to the full study guide.',
  alternates: {
    canonical: stubCanonical(SLUG, `/revision/texts/${SLUG}`),
  },
}

export default function Page() {
  const text = getSetText(SLUG)
  if (!text) notFound()
  return <StubStudyGuide text={text} />
}
