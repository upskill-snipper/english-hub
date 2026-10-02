import type { Metadata } from 'next'

// Until 2 October 2026 this called the poem part of an OCR cluster. OCR does
// not set it; see src/lib/board/ocr-anthology.ts and OcrWiderReadingNotice.
export const metadata: Metadata = {
  title: 'Neutral Tones (Hardy): wider reading for OCR',
  description:
    'Neutral Tones by Thomas Hardy, annotated: wider reading for the OCR Love and Relationships cluster. AQA and Pearson Edexcel GCSE set it; OCR does not.',
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
