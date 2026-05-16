import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Love and Relationships — OCR GCSE poetry cluster',
  description:
    'OCR GCSE Love and Relationships poetry cluster — all 15 poems for J352 Towards a World Unknown. Themes, voice, comparison pairs and essay plans.',
  alternates: { canonical: 'https://theenglishhub.app/revision/poetry/ocr/love-and-relationships' },
}

export default function OcrLoveAndRelationshipsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
