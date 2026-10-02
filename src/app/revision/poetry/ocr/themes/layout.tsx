import type { Metadata } from 'next'

// Until 2 October 2026 this described a map of the anthology; most of the
// page's poems are wider reading. See the docblock above THEMES in page.tsx.
export const metadata: Metadata = {
  title: 'Poetry Themes - OCR GCSE Poetry',
  description:
    "Themes across OCR's three GCSE poetry clusters (J352), with wider reading to compare: love, conflict, time, nature and identity.",
  alternates: { canonical: 'https://theenglishhub.app/revision/poetry/ocr/themes' },
}

export default function OcrThemesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
