import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { getSetText } from '@/lib/board/set-texts'
import { StubStudyGuide, stubCanonical } from '../_components/stub-study-guide'

const SLUG = 'the-man-who-loved-flowers'

export const metadata: Metadata = {
  title: 'The Man Who Loved Flowers - Stephen King',
  description:
    "Stephen King's short story The Man Who Loved Flowers: what happens, its key themes and the UK rights position.",
  alternates: {
    canonical: stubCanonical(SLUG, `/revision/texts/${SLUG}`),
  },
}

export default function Page() {
  const text = getSetText(SLUG)
  if (!text) notFound()
  return <StubStudyGuide text={text} />
}
