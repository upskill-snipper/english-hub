import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'When I Have Fears - OCR Youth & Age',
  description:
    'When I Have Fears by John Keats - GCSE analysis for the OCR Youth & Age cluster: mortality, ambition, the sonnet form and comparison poems.',
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
