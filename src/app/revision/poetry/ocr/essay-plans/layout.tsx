import type { Metadata } from 'next'

// Until 2 October 2026 this offered essay plans "for the anthology"; the plans'
// poems are wider reading. See the docblock above ESSAY_PLANS in page.tsx.
export const metadata: Metadata = {
  title: 'Essay Plans - OCR GCSE Poetry Anthology',
  description:
    'Practice comparison plans for OCR GCSE poetry (J352), using wider reading, for part (a): comparing a poem with one you have not studied.',
  alternates: { canonical: 'https://theenglishhub.app/revision/poetry/ocr/essay-plans' },
}

export default function OcrEssayPlansLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
