import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { getSetText } from '@/lib/board/set-texts'
import { StubStudyGuide, stubCanonical } from '../_components/stub-study-guide'

const SLUG = 'a-game-of-polo-with-a-headless-goat'

export const metadata: Metadata = {
  title: 'A Game of Polo with a Headless Goat - Emma Levine',
  description:
    'Emma Levine on an illegal donkey-cart race in Karachi, from the Edexcel IGCSE English Language A (4EA1) anthology, with a link to the full study guide.',
  alternates: {
    canonical: stubCanonical(SLUG, `/revision/texts/${SLUG}`),
  },
}

export default function Page() {
  const text = getSetText(SLUG)
  if (!text) notFound()
  return <StubStudyGuide text={text} />
}
