import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'She Walks in Beauty - OCR Love & Relationships',
  description:
    'She Walks in Beauty by Lord Byron - GCSE analysis for the OCR Love & Relationships cluster: beauty, harmony, structure and comparison poems.',
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
