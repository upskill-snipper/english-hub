import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Essay Plans — OCR GCSE Poetry Anthology',
  description:
    'Grade 9 essay plans for the OCR J352 Towards a World Unknown poetry anthology: model theses, paragraph structures, quotations and exam technique.',
  alternates: { canonical: 'https://theenglishhub.app/revision/poetry/ocr/essay-plans' },
}

export default function OcrEssayPlansLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
