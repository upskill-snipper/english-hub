import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Time and Place — Edexcel GCSE poetry cluster',
  description:
    'Edexcel GCSE Time and Place poetry — all 15 poems analysed. Memory, landscape, identity. Comparison for Pearson Edexcel 1ET0 Paper 2 Section A.',
  alternates: { canonical: 'https://theenglishhub.app/revision/poetry/edexcel/time-and-place' },
}

export default function EdexcelTimeAndPlaceLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
