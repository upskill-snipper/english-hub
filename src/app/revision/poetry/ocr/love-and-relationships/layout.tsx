import type { Metadata } from 'next'

// Until 2 October 2026 this promised all 15 poems analysed, for a list that was
// mostly not OCR's. See src/lib/board/ocr-anthology.ts.
export const metadata: Metadata = {
  title: 'Love and Relationships - OCR GCSE poetry cluster',
  description:
    "The 15 poems in OCR's GCSE Love and Relationships cluster (J352, Towards a World Unknown, as revised in 2022), how the cluster is examined, and wider reading.",
  alternates: { canonical: 'https://theenglishhub.app/revision/poetry/ocr/love-and-relationships' },
}

export default function OcrLoveAndRelationshipsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
