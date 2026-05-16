import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Power and the Natural World — OCR GCSE poetry cluster',
  description:
    'OCR GCSE Power and the Natural World cluster — all 15 poems. Nature, human power and environment for the J352 Towards a World Unknown anthology.',
  alternates: {
    canonical: 'https://theenglishhub.app/revision/poetry/ocr/power-and-natural-world',
  },
}

export default function OcrPowerAndNaturalWorldLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
