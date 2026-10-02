import type { Metadata } from 'next'

// Until 2 October 2026 this described comparing two anthology poems. OCR's
// part (a) compares an anthology poem with an unseen one; see page.tsx.
export const metadata: Metadata = {
  title: 'Comparison Guide - OCR GCSE Poetry',
  description:
    'How to answer OCR J352/02 poetry: part (a) compares a poem from your cluster with an unseen poem; part (b) explores one other poem from memory.',
  alternates: { canonical: 'https://theenglishhub.app/revision/poetry/ocr/comparison-guide' },
}

export default function OcrComparisonGuideLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
