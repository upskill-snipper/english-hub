import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { getSetText } from '@/lib/board/set-texts'
import { guide } from '@/data/study-guides/the-story-of-an-hour'
import { FullStudyGuide } from '../_components/full-study-guide'

// The study guide for this text is src/data/study-guides/the-story-of-an-hour.ts, and this
// page renders it whole. Written by scripts/write-study-guide-page.mjs, which
// explains why a text with a finished guide gets a real page here.

const SLUG = 'the-story-of-an-hour'

export const metadata: Metadata = {
  title: 'The Story of an Hour - Study Guide',
  description:
    'The Story of an Hour by Kate Chopin: themes, characters, key quotations, language analysis, vocabulary and exam practice.',
  alternates: {
    canonical: `https://theenglishhub.app/revision/texts/${SLUG}`,
  },
  openGraph: {
    title: 'The Story of an Hour - Study Guide | The English Hub',
    description:
      'The Story of an Hour by Kate Chopin: themes, characters, key quotations, language analysis, vocabulary and exam practice.',
    images: [
      {
        url: '/api/og?title=The+Story+of+an+Hour+-+Study+Guide+%7C+The+English+Hub',
        width: 1200,
        height: 630,
        alt: 'The Story of an Hour - Study Guide | The English Hub',
      },
    ],
  },
}

export default function Page() {
  const text = getSetText(SLUG)
  if (!text) notFound()
  return <FullStudyGuide text={text} guide={guide} />
}
