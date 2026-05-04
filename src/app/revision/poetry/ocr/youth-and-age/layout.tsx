import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Youth and Age — OCR GCSE poetry cluster — The English Hub',
  description:
    'OCR GCSE Youth and Age poetry cluster — all 15 poems analysed for the J352 Towards a World Unknown anthology. Time, mortality, looking back.',
  alternates: { canonical: 'https://theenglishhub.app/revision/poetry/ocr/youth-and-age' },
}

export default function OcrYouthAndAgeLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
