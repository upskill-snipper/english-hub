import type { Metadata } from 'next'
import { GuideSupplement } from '@/components/study-guide/guide-supplement'
import { guide } from '@/data/study-guides/disabled'

export const metadata: Metadata = {
  alternates: { canonical: '/igcse/edexcel/poetry/disabled' },
  title: 'Disabled (Wilfred Owen) - Edexcel IGCSE Poetry',
  description:
    "Analysis of Wilfred Owen's 'Disabled' for Edexcel IGCSE Language A (4EA1): the cost of war, loss and regret, with key quotations, contrast and structure.",
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
