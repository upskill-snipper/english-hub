import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { getSetText } from '@/lib/board/set-texts'
import { guide } from '@/data/study-guides/what-it-means-when-a-man-falls-from-the-sky'
import { FullStudyGuide } from '../_components/full-study-guide'

// The study guide for this text is src/data/study-guides/what-it-means-when-a-man-falls-from-the-sky.ts, and this
// page renders it whole. Written by scripts/write-study-guide-page.mjs, which
// explains why a text with a finished guide gets a real page here.

const SLUG = 'what-it-means-when-a-man-falls-from-the-sky'

export const metadata: Metadata = {
  title: 'What It Means When a Man Falls from the Sky - Study Guide',
  description:
    'What It Means When a Man Falls from the Sky by Lesley Nneka Arimah: themes, characters, key quotations, language analysis, vocabulary and exam practice.',
  alternates: {
    canonical: `https://theenglishhub.app/revision/texts/${SLUG}`,
  },
  openGraph: {
    title: 'What It Means When a Man Falls from the Sky - Study Guide | The English Hub',
    description:
      'What It Means When a Man Falls from the Sky by Lesley Nneka Arimah: themes, characters, key quotations, language analysis, vocabulary and exam practice.',
    images: [
      {
        url: '/api/og?title=What+It+Means+When+a+Man+Falls+from+the+Sky+-+Study+Guide+%7C+The+English+Hub',
        width: 1200,
        height: 630,
        alt: 'What It Means When a Man Falls from the Sky - Study Guide | The English Hub',
      },
    ],
  },
}

export default function Page() {
  const text = getSetText(SLUG)
  if (!text) notFound()
  return <FullStudyGuide text={text} guide={guide} />
}
