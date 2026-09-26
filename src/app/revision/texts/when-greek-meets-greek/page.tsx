import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { getSetText } from '@/lib/board/set-texts'
import { StubStudyGuide, stubCanonical } from '../_components/stub-study-guide'

const SLUG = 'when-greek-meets-greek'

export const metadata: Metadata = {
  title: 'When Greek Meets Greek - Sam Selvon',
  description:
    "Sam Selvon's short story When Greek Meets Greek, with a link to the full study guide in our revision notes.",
  alternates: {
    canonical: stubCanonical(SLUG, `/revision/texts/${SLUG}`),
  },
}

export default function Page() {
  const text = getSetText(SLUG)
  if (!text) notFound()
  return <StubStudyGuide text={text} />
}
