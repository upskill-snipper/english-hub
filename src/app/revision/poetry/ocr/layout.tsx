import type { Metadata } from 'next'

// Until 2 October 2026 this said "four clusters of 15 poems". OCR sets three;
// see src/lib/board/ocr-anthology.ts.
export const metadata: Metadata = {
  title: 'OCR GCSE Towards a World Unknown poetry anthology',
  description:
    'OCR GCSE J352 Towards a World Unknown: the 45 poems OCR sets, in three clusters of 15: Love and Relationships, Conflict, and Youth and Age.',
  alternates: { canonical: 'https://theenglishhub.app/revision/poetry/ocr' },
}

// 28 Apr 2026 - wrong-board cookie redirect intentionally removed. See
// /revision/poetry/edexcel/layout.tsx and /revision/poetry/eduqas/layout.tsx
// for the same pattern + explanation. Homepage CTAs are explicit user
// choices and must always render the requested page regardless of stale
// cookie state.
export default function OcrPoetryLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
