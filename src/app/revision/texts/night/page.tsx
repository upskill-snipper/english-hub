import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { getSetText } from '@/lib/board/set-texts'
import { guide } from '@/data/study-guides/night'
import { FullStudyGuide } from '../_components/full-study-guide'

// The study guide for this text is src/data/study-guides/night.ts, and this
// page renders it whole. Written by scripts/write-study-guide-page.mjs, which
// explains why a text with a finished guide gets a real page here.

const SLUG = 'night'

export const metadata: Metadata = {
  title: 'Night - Study Guide',
  description:
    'Night by Alice Munro: themes, characters, key quotations, language analysis, vocabulary and exam practice, with an animated story arc and scene-by-scene guide.',
  alternates: {
    canonical: `https://theenglishhub.app/revision/texts/${SLUG}`,
  },
  openGraph: {
    title: 'Night - Study Guide | The English Hub',
    description:
      'Night by Alice Munro: themes, characters, key quotations, language analysis, vocabulary and exam practice, with an animated story arc and scene-by-scene guide.',
    images: [
      {
        url: '/api/og?title=Night+-+Study+Guide+%7C+The+English+Hub',
        width: 1200,
        height: 630,
        alt: 'Night - Study Guide | The English Hub',
      },
    ],
  },
}

export default function Page() {
  const text = getSetText(SLUG)
  if (!text) notFound()
  return <FullStudyGuide text={text} guide={guide} />
}
