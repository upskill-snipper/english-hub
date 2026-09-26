import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { getSetText } from '@/lib/board/set-texts'
import { guide } from '@/data/study-guides/significant-cigarettes'
import { FullStudyGuide } from '../_components/full-study-guide'

// The study guide for this text is src/data/study-guides/significant-cigarettes.ts, and this
// page renders it whole. Written by scripts/write-study-guide-page.mjs, which
// explains why a text with a finished guide gets a real page here.

const SLUG = 'significant-cigarettes'

export const metadata: Metadata = {
  title: 'Significant Cigarettes (from The Road Home) - Study Guide',
  description:
    'Significant Cigarettes (from The Road Home) by Rose Tremain: themes, characters, key quotations, language analysis, vocabulary and exam practice.',
  alternates: {
    canonical: `https://theenglishhub.app/revision/texts/${SLUG}`,
  },
  openGraph: {
    title: 'Significant Cigarettes (from The Road Home) - Study Guide | The English Hub',
    description:
      'Significant Cigarettes (from The Road Home) by Rose Tremain: themes, characters, key quotations, language analysis, vocabulary and exam practice.',
    images: [
      {
        url: '/api/og?title=Significant+Cigarettes+(from+The+Road+Home)+-+Study+Guide+%7C+The+English+Hub',
        width: 1200,
        height: 630,
        alt: 'Significant Cigarettes (from The Road Home) - Study Guide | The English Hub',
      },
    ],
  },
}

export default function Page() {
  const text = getSetText(SLUG)
  if (!text) notFound()
  return <FullStudyGuide text={text} guide={guide} />
}
