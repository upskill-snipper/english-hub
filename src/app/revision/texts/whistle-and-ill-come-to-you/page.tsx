import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { getSetText } from '@/lib/board/set-texts'
import { guide } from '@/data/study-guides/whistle-and-ill-come-to-you'
import { FullStudyGuide } from '../_components/full-study-guide'

// The study guide for this text is src/data/study-guides/whistle-and-ill-come-to-you.ts, and this
// page renders it whole. Written by scripts/write-study-guide-page.mjs, which
// explains why a text with a finished guide gets a real page here.

const SLUG = 'whistle-and-ill-come-to-you'

export const metadata: Metadata = {
  title: "Whistle and I'll Come to You (from The Woman in Black)",
  description:
    "Whistle and I'll Come to You (from The Woman in Black) by Susan Hill: themes, characters, key quotations, language analysis, vocabulary and exam practice.",
  alternates: {
    canonical: `https://theenglishhub.app/revision/texts/${SLUG}`,
  },
  openGraph: {
    title: "Whistle and I'll Come to You (from The Woman in Black) | The English Hub",
    description:
      "Whistle and I'll Come to You (from The Woman in Black) by Susan Hill: themes, characters, key quotations, language analysis, vocabulary and exam practice.",
    images: [
      {
        url: "/api/og?title=Whistle+and+I'll+Come+to+You+(from+The+Woman+in+Black)+%7C+The+English+Hub",
        width: 1200,
        height: 630,
        alt: "Whistle and I'll Come to You (from The Woman in Black) | The English Hub",
      },
    ],
  },
}

export default function Page() {
  const text = getSetText(SLUG)
  if (!text) notFound()
  return <FullStudyGuide text={text} guide={guide} />
}
