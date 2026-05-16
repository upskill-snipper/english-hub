import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { getSetText } from '@/lib/board/set-texts'
import { StubStudyGuide } from '../_components/stub-study-guide'

const SLUG = 'young-and-dyslexic'

export const metadata: Metadata = {
  title: "Young and dyslexic? You've got it going on — Benjamin Zephaniah",
  description:
    "Study guide for Young and dyslexic? You've got it going on by Benjamin Zephaniah (1958–2023). Paper 1 Section A — Anthology Non-Fiction (Edexcel IGCSE 4EA1). Adapted version printed in the Edexcel anthology differs from the freely-available Guardian original — always use the anthology version when answering Edexcel exam questions. Rights now held by the Zephaniah estate via Pearson Education.",
  alternates: {
    canonical: `https://theenglishhub.app/revision/texts/${SLUG}`,
  },
}

export default function Page() {
  const text = getSetText(SLUG)
  if (!text) notFound()
  return <StubStudyGuide text={text} />
}
