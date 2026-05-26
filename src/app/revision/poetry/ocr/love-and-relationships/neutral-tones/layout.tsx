import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Neutral Tones - OCR Love & Relationships',
  description:
    'Neutral Tones by Thomas Hardy - GCSE analysis for the OCR Love & Relationships cluster: lost love, pathetic fallacy and comparison poems.',
  alternates: {
    canonical: 'https://theenglishhub.app/revision/poetry/ocr/love-and-relationships/neutral-tones',
  },
}

export default function OcrLoveAndRelationshipsNeutralTonesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
