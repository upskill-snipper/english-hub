import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'OCR GCSE Towards a World Unknown poetry anthology',
  description:
    'OCR GCSE J352 Towards a World Unknown - four clusters of 15 poems. Themes, language and comparison practice across Love, Conflict, Power and Youth.',
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
