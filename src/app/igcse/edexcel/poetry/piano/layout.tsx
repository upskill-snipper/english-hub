import type { Metadata } from 'next'
import { GuideSupplement } from '@/components/study-guide/guide-supplement'
import { guide } from '@/data/study-guides/piano'

export const metadata: Metadata = {
  alternates: { canonical: '/igcse/edexcel/poetry/piano' },
  title: 'Piano (D.H. Lawrence) - Edexcel IGCSE Poetry',
  description:
    "Analysis of D.H. Lawrence's 'Piano' for the Edexcel IGCSE Literature anthology: memory, nostalgia and childhood, with key quotations and sound imagery.",
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
