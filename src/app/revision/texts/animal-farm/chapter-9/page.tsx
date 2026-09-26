import type { Metadata } from 'next'

import { ChapterGuidePage } from '@/components/study-guide/chapter-guide-page'
import { chapter } from '@/data/chapter-guides/animal-farm/chapter-9'
import { guide } from '@/data/study-guides/animal-farm'

// One chapter of Animal Farm, read closely. The content is data, in
// src/data/chapter-guides/animal-farm/chapter-9.ts, checked by
// src/__tests__/chapter-guides.test.ts against the held edition.

export const metadata: Metadata = {
  title: 'Animal Farm Chapter 9 Summary and Analysis',
  description:
    'Animal Farm Chapter 9 read closely: what happens, key quotations analysed, the characters and themes, the history behind it, and an exam question.',
  alternates: { canonical: '/revision/texts/animal-farm/chapter-9' },
}

export default function Page() {
  return (
    <ChapterGuidePage
      chapter={chapter}
      guide={guide}
      total={10}
      basePath="/revision/texts/animal-farm"
    />
  )
}
