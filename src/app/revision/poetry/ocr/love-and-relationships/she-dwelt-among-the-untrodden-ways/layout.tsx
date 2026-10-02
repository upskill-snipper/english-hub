import type { Metadata } from 'next'

// Until 2 October 2026 this called the poem part of an OCR cluster. OCR does
// not set it; see src/lib/board/ocr-anthology.ts and OcrWiderReadingNotice.
export const metadata: Metadata = {
  title: 'She Dwelt Among the Untrodden Ways: wider reading',
  description:
    "She Dwelt Among the Untrodden Ways by William Wordsworth, annotated: wider reading for the OCR Love and Relationships cluster. It is not in OCR's anthology.",
  alternates: {
    canonical:
      'https://theenglishhub.app/revision/poetry/ocr/love-and-relationships/she-dwelt-among-the-untrodden-ways',
  },
}

export default function OcrLoveAndRelationshipsSheDweltAmongTheUntroddenWaysLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
