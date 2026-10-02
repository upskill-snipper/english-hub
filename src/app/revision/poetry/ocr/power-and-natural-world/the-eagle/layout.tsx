import type { Metadata } from 'next'

// Until 2 October 2026 this called the poem part of an OCR cluster. OCR does
// not set it; see src/lib/board/ocr-anthology.ts and OcrWiderReadingNotice.
export const metadata: Metadata = {
  title: 'The Eagle (Tennyson): wider reading',
  description:
    "The Eagle by Alfred Lord Tennyson, annotated: wider reading and unseen practice. It is not in OCR's anthology, which has no Power and the Natural World cluster.",
  alternates: {
    canonical: 'https://theenglishhub.app/revision/poetry/ocr/power-and-natural-world/the-eagle',
  },
}

export default function OcrPowerAndNaturalWorldTheEagleLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
