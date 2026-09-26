import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { getSetText } from '@/lib/board/set-texts'
import { StubStudyGuide, stubCanonical } from '../_components/stub-study-guide'

const SLUG = 'the-pedestrian'

export const metadata: Metadata = {
  title: 'The Pedestrian - Ray Bradbury',
  description:
    "Ray Bradbury's short story The Pedestrian: what happens, its key themes and the UK rights position.",
  alternates: {
    canonical: stubCanonical(SLUG, `/revision/texts/${SLUG}`),
  },
}

export default function Page() {
  const text = getSetText(SLUG)
  if (!text) notFound()
  return <StubStudyGuide text={text} />
}
