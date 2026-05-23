import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'She Dwelt Among Untrodden Ways — OCR',
  description:
    'She Dwelt Among the Untrodden Ways by William Wordsworth — GCSE analysis for the OCR Love & Relationships cluster: grief, nature and comparisons.',
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
