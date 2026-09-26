import type { Metadata } from 'next'
import { GuideSupplement } from '@/components/study-guide/guide-supplement'
import { guide } from '@/data/study-guides/the-tyger'

export const metadata: Metadata = {
  alternates: { canonical: '/igcse/edexcel/poetry/the-tyger' },
  title: 'The Tyger (William Blake) - Edexcel IGCSE Poetry',
  description:
    "Analysis of William Blake's 'The Tyger' for the Edexcel IGCSE Literature anthology: creation, awe and the divine, with key quotations, symbolism and structure.",
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
