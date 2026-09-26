import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { getSetText } from '@/lib/board/set-texts'
import { guide } from '@/data/study-guides/blues-for-an-alabama-sky'
import { FullStudyGuide } from '../_components/full-study-guide'

// The study guide for this text is src/data/study-guides/blues-for-an-alabama-sky.ts, and this
// page renders it whole. Written by scripts/write-study-guide-page.mjs, which
// explains why a text with a finished guide gets a real page here.

const SLUG = 'blues-for-an-alabama-sky'

export const metadata: Metadata = {
  title: 'Blues for an Alabama Sky - Study Guide',
  description:
    'Blues for an Alabama Sky by Pearl Cleage: themes, characters, key quotations, language analysis, vocabulary and exam practice.',
  alternates: {
    canonical: `https://theenglishhub.app/revision/texts/${SLUG}`,
  },
  openGraph: {
    title: 'Blues for an Alabama Sky - Study Guide | The English Hub',
    description:
      'Blues for an Alabama Sky by Pearl Cleage: themes, characters, key quotations, language analysis, vocabulary and exam practice.',
    images: [
      {
        url: '/api/og?title=Blues+for+an+Alabama+Sky+-+Study+Guide+%7C+The+English+Hub',
        width: 1200,
        height: 630,
        alt: 'Blues for an Alabama Sky - Study Guide | The English Hub',
      },
    ],
  },
}

export default function Page() {
  const text = getSetText(SLUG)
  if (!text) notFound()
  return <FullStudyGuide text={text} guide={guide} />
}
