import type { Metadata } from 'next'
import { GuideSupplement } from '@/components/study-guide/guide-supplement'
import { guide } from '@/data/study-guides/out-out'

export const metadata: Metadata = {
  alternates: { canonical: '/igcse/edexcel/poetry/out-out' },
  title: 'Out, Out- (Robert Frost) - Edexcel IGCSE Poetry',
  description:
    "Analysis of Frost's 'Out, Out-' for the Edexcel IGCSE Literature anthology: mortality, childhood and indifference, with key quotations and structure.",
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
