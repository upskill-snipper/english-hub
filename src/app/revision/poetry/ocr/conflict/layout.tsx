import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Conflict - OCR GCSE poetry cluster',
  description:
    'OCR GCSE Conflict poetry cluster - all 15 poems analysed for the J352 Towards a World Unknown anthology. Themes, structure, comparison practice.',
  alternates: { canonical: 'https://theenglishhub.app/revision/poetry/ocr/conflict' },
}

export default function OcrConflictLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
