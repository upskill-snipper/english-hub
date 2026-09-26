import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { getSetText } from '@/lib/board/set-texts'
import { guide } from '@/data/study-guides/between-a-rock-and-a-hard-place'
import { FullStudyGuide } from '../_components/full-study-guide'

// The study guide for this text is src/data/study-guides/between-a-rock-and-a-hard-place.ts, and this
// page renders it whole. Written by scripts/write-study-guide-page.mjs, which
// explains why a text with a finished guide gets a real page here.

const SLUG = 'between-a-rock-and-a-hard-place'

export const metadata: Metadata = {
  title: 'From 127 Hours: Between a Rock and a Hard Place',
  description:
    'From 127 Hours: Between a Rock and a Hard Place by Aron Ralston: themes, characters, key quotations, language analysis, vocabulary and exam practice.',
  alternates: {
    canonical: `https://theenglishhub.app/revision/texts/${SLUG}`,
  },
  openGraph: {
    title: 'From 127 Hours: Between a Rock and a Hard Place | The English Hub',
    description:
      'From 127 Hours: Between a Rock and a Hard Place by Aron Ralston: themes, characters, key quotations, language analysis, vocabulary and exam practice.',
    images: [
      {
        url: '/api/og?title=From+127+Hours%3A+Between+a+Rock+and+a+Hard+Place+%7C+The+English+Hub',
        width: 1200,
        height: 630,
        alt: 'From 127 Hours: Between a Rock and a Hard Place | The English Hub',
      },
    ],
  },
}

export default function Page() {
  const text = getSetText(SLUG)
  if (!text) notFound()
  return <FullStudyGuide text={text} guide={guide} />
}
