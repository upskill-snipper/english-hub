import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Crossing the Bar - OCR Youth & Age',
  description:
    'Crossing the Bar by Alfred Lord Tennyson - GCSE analysis for the OCR Youth & Age cluster: mortality, the sea metaphor and comparison poems.',
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
