import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { getSetText } from '@/lib/board/set-texts'
import { StubStudyGuide, stubCanonical } from '../_components/stub-study-guide'

const SLUG = 'beyond-the-sky-and-the-earth'

export const metadata: Metadata = {
  title: 'Beyond the Sky and the Earth - Jamie Zeppa',
  description:
    'Jamie Zeppa on arriving to teach in Bhutan, from the Edexcel IGCSE English Language A (4EA1) anthology, with a link to the full study guide.',
  alternates: {
    canonical: stubCanonical(SLUG, `/revision/texts/${SLUG}`),
  },
}

export default function Page() {
  const text = getSetText(SLUG)
  if (!text) notFound()
  return <StubStudyGuide text={text} />
}
