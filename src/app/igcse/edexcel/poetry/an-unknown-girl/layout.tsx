import type { Metadata } from 'next'
import { GuideSupplement } from '@/components/study-guide/guide-supplement'
import { guide } from '@/data/study-guides/an-unknown-girl'

export const metadata: Metadata = {
  alternates: { canonical: '/igcse/edexcel/poetry/an-unknown-girl' },
  title: 'An Unknown Girl (Moniza Alvi) - Edexcel IGCSE Poetry',
  description:
    "Analysis of Moniza Alvi's 'An Unknown Girl' for Edexcel IGCSE Language A (4EA1): identity, belonging and culture, with key quotations and imagery.",
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      {/* The sections this page did not have, and its story visuals.
          See scripts/mount-study-guide-supplement.mjs. */}
      <GuideSupplement guide={guide} />
    </>
  )
}
