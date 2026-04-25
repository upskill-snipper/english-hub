import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { getSetText } from '@/lib/board/set-texts'
import { StubStudyGuide } from '../_components/stub-study-guide'

const SLUG = 'the-yellow-wallpaper'

export const metadata: Metadata = {
  title: 'The Yellow Wall Paper — Charlotte Perkins Gilman | The English Hub',
  description:
    'Study guide stub for The Yellow Wall Paper by Charlotte Perkins Gilman. Pearson Edexcel International GCSE English Language A (4EA1) Section C prose anthology.',
  alternates: {
    canonical: `https://theenglishhub.app/revision/texts/${SLUG}`,
  },
}

export default function Page() {
  const text = getSetText(SLUG)
  if (!text) notFound()
  return <StubStudyGuide text={text} />
}
