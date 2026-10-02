import type { Metadata } from 'next'

// Until 2 October 2026 this called the poem part of an OCR cluster. OCR does
// not set it; see src/lib/board/ocr-anthology.ts and OcrWiderReadingNotice.
export const metadata: Metadata = {
  title: 'When I Have Fears (Keats): wider reading for OCR',
  description:
    'When I Have Fears by John Keats, annotated: wider reading for the OCR Youth and Age cluster, which set it until the anthology was revised in 2022.',
  alternates: {
    canonical: 'https://theenglishhub.app/revision/poetry/ocr/youth-and-age/when-i-have-fears',
  },
}

export default function OcrYouthAndAgeWhenIHaveFearsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
