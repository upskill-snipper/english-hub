import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Eagle - OCR Power & Natural World',
  description:
    'The Eagle by Alfred Lord Tennyson - GCSE analysis for the OCR Power and the Natural World cluster: nature, power, imagery and comparison poems.',
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
