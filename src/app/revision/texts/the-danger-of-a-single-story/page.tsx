import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { getSetText } from '@/lib/board/set-texts'
import { StubStudyGuide } from '../_components/stub-study-guide'

const SLUG = 'the-danger-of-a-single-story'

export const metadata: Metadata = {
  title: 'The Danger of a Single Story - Chimamanda Ngozi Adichie',
  description:
    'Chimamanda Ngozi Adichie on stereotypes and cultural representation, from the Edexcel IGCSE English Language A (4EA1) anthology. Guide in production.',
  alternates: {
    canonical: `https://theenglishhub.app/revision/texts/${SLUG}`,
  },
}

export default function Page() {
  const text = getSetText(SLUG)
  if (!text) notFound()
  return <StubStudyGuide text={text} />
}
