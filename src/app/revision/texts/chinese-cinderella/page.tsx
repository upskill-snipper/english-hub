import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { getSetText } from '@/lib/board/set-texts'
import { StubStudyGuide, stubCanonical } from '../_components/stub-study-guide'

const SLUG = 'chinese-cinderella'

export const metadata: Metadata = {
  title: 'Chinese Cinderella - Adeline Yen Mah',
  description:
    'Adeline Yen Mah on her childhood in China, from the Edexcel IGCSE English Language A (4EA1) anthology, with a link to the full study guide.',
  alternates: {
    canonical: stubCanonical(SLUG, `/revision/texts/${SLUG}`),
  },
}

export default function Page() {
  const text = getSetText(SLUG)
  if (!text) notFound()
  return <StubStudyGuide text={text} />
}
