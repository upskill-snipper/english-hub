import type { Metadata } from 'next'

// Until 2 October 2026 this promised all 15 poems analysed, for a list that was
// mostly not OCR's. See src/lib/board/ocr-anthology.ts.
export const metadata: Metadata = {
  title: 'Conflict - OCR GCSE poetry cluster',
  description:
    "The 15 poems in OCR's GCSE Conflict cluster (J352, Towards a World Unknown, as revised in 2022) and how the cluster is examined.",
  alternates: { canonical: 'https://theenglishhub.app/revision/poetry/ocr/conflict' },
}

export default function OcrConflictLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
