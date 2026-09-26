import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { getSetText } from '@/lib/board/set-texts'
import { StubStudyGuide, stubCanonical } from '../_components/stub-study-guide'

const SLUG = 'the-danger-of-a-single-story'

export const metadata: Metadata = {
  title: 'The Danger of a Single Story - Chimamanda Ngozi Adichie',
  description:
    'Chimamanda Ngozi Adichie on the danger of a single story, from the Edexcel IGCSE Language A (4EA1) anthology, with a link to the full guide.',
  alternates: {
    canonical: stubCanonical(SLUG, `/revision/texts/${SLUG}`),
  },
}

export default function Page() {
  const text = getSetText(SLUG)
  if (!text) notFound()
  return <StubStudyGuide text={text} />
}
