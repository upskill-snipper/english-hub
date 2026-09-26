import type { Metadata } from 'next'
import { GuideSupplement } from '@/components/study-guide/guide-supplement'
import { guide } from '@/data/study-guides/the-bright-lights-of-sarajevo'

export const metadata: Metadata = {
  alternates: { canonical: '/igcse/edexcel/poetry/the-bright-lights-of-sarajevo' },
  title: 'The Bright Lights of Sarajevo (Harrison) - IGCSE Poetry',
  description:
    "Analysis of Harrison's 'The Bright Lights of Sarajevo' for the Edexcel IGCSE anthology: war, resilience and love, with key quotations and structure.",
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
