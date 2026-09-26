import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { getSetText } from '@/lib/board/set-texts'
import { guide } from '@/data/study-guides/oranges-are-not-the-only-fruit'
import { FullStudyGuide } from '../_components/full-study-guide'

// The study guide for this text is src/data/study-guides/oranges-are-not-the-only-fruit.ts, and this
// page renders it whole. Written by scripts/write-study-guide-page.mjs, which
// explains why a text with a finished guide gets a real page here.

const SLUG = 'oranges-are-not-the-only-fruit'

export const metadata: Metadata = {
  title: 'Oranges are not the Only Fruit - Study Guide',
  description:
    'Oranges are not the Only Fruit by Jeanette Winterson: themes, characters, key quotations, language analysis, vocabulary and exam practice.',
  alternates: {
    canonical: `https://theenglishhub.app/revision/texts/${SLUG}`,
  },
  openGraph: {
    title: 'Oranges are not the Only Fruit - Study Guide | The English Hub',
    description:
      'Oranges are not the Only Fruit by Jeanette Winterson: themes, characters, key quotations, language analysis, vocabulary and exam practice.',
    images: [
      {
        url: '/api/og?title=Oranges+are+not+the+Only+Fruit+-+Study+Guide+%7C+The+English+Hub',
        width: 1200,
        height: 630,
        alt: 'Oranges are not the Only Fruit - Study Guide | The English Hub',
      },
    ],
  },
}

export default function Page() {
  const text = getSetText(SLUG)
  if (!text) notFound()
  return <FullStudyGuide text={text} guide={guide} />
}
