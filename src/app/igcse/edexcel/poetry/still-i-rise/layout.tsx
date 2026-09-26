import type { Metadata } from 'next'
import { GuideSupplement } from '@/components/study-guide/guide-supplement'
import { guide } from '@/data/study-guides/still-i-rise'

export const metadata: Metadata = {
  alternates: { canonical: '/igcse/edexcel/poetry/still-i-rise' },
  title: 'Still I Rise (Maya Angelou) - Edexcel IGCSE Poetry',
  description:
    "Analysis of Angelou's 'Still I Rise' for Edexcel IGCSE Language A (4EA1): resilience, pride and oppression, with key quotations, repetition and tone.",
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
