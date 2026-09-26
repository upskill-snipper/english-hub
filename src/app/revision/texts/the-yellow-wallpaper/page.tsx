import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { getSetText } from '@/lib/board/set-texts'
import { StubStudyGuide, stubCanonical } from '../_components/stub-study-guide'

const SLUG = 'the-yellow-wallpaper'

export const metadata: Metadata = {
  title: 'The Yellow Wall Paper - Charlotte Perkins Gilman',
  description:
    "Charlotte Perkins Gilman's story The Yellow Wall Paper, with a link to the full study guide in our revision notes.",
  alternates: {
    canonical: stubCanonical(SLUG, `/revision/texts/${SLUG}`),
  },
}

export default function Page() {
  const text = getSetText(SLUG)
  if (!text) notFound()
  return <StubStudyGuide text={text} />
}
