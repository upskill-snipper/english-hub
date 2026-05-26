import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Poetry Themes - OCR GCSE Poetry',
  description:
    'Theme-by-theme guide to the OCR J352 Towards a World Unknown anthology: love, conflict, time, nature and identity mapped across all clusters.',
  alternates: { canonical: 'https://theenglishhub.app/revision/poetry/ocr/themes' },
}

export default function OcrThemesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
