import type { Metadata } from 'next'

// Until 2 October 2026 this called the poem part of an OCR cluster. OCR does
// not set it; see src/lib/board/ocr-anthology.ts and OcrWiderReadingNotice.
export const metadata: Metadata = {
  title: 'Crossing the Bar (Tennyson): wider reading for OCR',
  description:
    "Crossing the Bar by Alfred Lord Tennyson, annotated: wider reading for the OCR Youth and Age cluster. It is not in OCR's anthology.",
  alternates: {
    canonical: 'https://theenglishhub.app/revision/poetry/ocr/youth-and-age/crossing-the-bar',
  },
}

export default function OcrYouthAndAgeCrossingTheBarLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
