import type { Metadata } from 'next'

// Until 2 October 2026 this called the poem part of an OCR cluster. OCR does
// not set it; see src/lib/board/ocr-anthology.ts and OcrWiderReadingNotice.
export const metadata: Metadata = {
  title: 'She Walks in Beauty (Byron): wider reading for OCR',
  description:
    'She Walks in Beauty by Lord Byron, annotated: wider reading for the OCR Love and Relationships cluster. Pearson Edexcel GCSE sets it; OCR does not.',
  alternates: {
    canonical:
      'https://theenglishhub.app/revision/poetry/ocr/love-and-relationships/she-walks-in-beauty',
  },
}

export default function OcrLoveAndRelationshipsSheWalksInBeautyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
