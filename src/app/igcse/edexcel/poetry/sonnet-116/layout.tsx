import type { Metadata } from 'next'
import { GuideSupplement } from '@/components/study-guide/guide-supplement'
import { guide } from '@/data/study-guides/sonnet-116'

export const metadata: Metadata = {
  alternates: { canonical: '/igcse/edexcel/poetry/sonnet-116' },
  title: 'Sonnet 116 (Shakespeare) - Edexcel IGCSE Poetry',
  description:
    "Analysis of Shakespeare's 'Sonnet 116' for the Edexcel IGCSE Literature anthology: constant love and time, with key quotations, sonnet form, metaphor and rhyme.",
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
