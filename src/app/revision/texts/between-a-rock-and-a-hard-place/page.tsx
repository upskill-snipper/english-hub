import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { getSetText } from '@/lib/board/set-texts'
import { StubStudyGuide } from '../_components/stub-study-guide'

const SLUG = 'between-a-rock-and-a-hard-place'

export const metadata: Metadata = {
  title: 'Between a Rock and a Hard Place - Aron Ralston',
  description:
    'Aron Ralston on amputating his own arm in a Utah canyon, from the Edexcel IGCSE English Language A (4EA1) anthology. Full study guide in production.',
  alternates: {
    canonical: `https://theenglishhub.app/revision/texts/${SLUG}`,
  },
}

export default function Page() {
  const text = getSetText(SLUG)
  if (!text) notFound()
  return <StubStudyGuide text={text} />
}
