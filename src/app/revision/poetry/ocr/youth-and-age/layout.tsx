import type { Metadata } from 'next'

// Until 2 October 2026 this promised all 15 poems analysed, for a list that was
// mostly not OCR's. See src/lib/board/ocr-anthology.ts.
export const metadata: Metadata = {
  title: 'Youth and Age - OCR GCSE poetry cluster',
  description:
    "The 15 poems in OCR's GCSE Youth and Age cluster (J352, Towards a World Unknown, as revised in 2022), how the cluster is examined, and wider reading.",
  alternates: { canonical: 'https://theenglishhub.app/revision/poetry/ocr/youth-and-age' },
}

export default function OcrYouthAndAgeLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
