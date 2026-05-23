import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sonnet 43 — Eduqas GCSE Poetry Analysis',
  description:
    "Sonnet 43 ('How do I love thee?') by Elizabeth Barrett Browning — GCSE analysis for the WJEC Eduqas anthology: love, form and comparisons.",
  alternates: { canonical: 'https://theenglishhub.app/revision/poetry/eduqas/sonnet-43' },
}

export default function EduqasSonnet43Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
