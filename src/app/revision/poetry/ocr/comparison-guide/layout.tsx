import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Comparison Guide — OCR GCSE Poetry',
  description:
    'How to compare poems in the OCR J352 Towards a World Unknown anthology: shared themes, contrast frames, quotation pairings and comparative technique.',
  alternates: { canonical: 'https://theenglishhub.app/revision/poetry/ocr/comparison-guide' },
}

export default function OcrComparisonGuideLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
