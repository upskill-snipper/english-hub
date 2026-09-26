import type { Metadata } from 'next'
import { GuideSupplement } from '@/components/study-guide/guide-supplement'
import { guide } from '@/data/study-guides/half-past-two'

export const metadata: Metadata = {
  title: 'Half-past Two by Fanthorpe | Edexcel IGCSE',
  description:
    "Revise U.A. Fanthorpe's Half-past Two for Edexcel IGCSE: the child's view of time, structure, language and key quotations with analysis, plus exam tips.",
  alternates: { canonical: '/resources/revision-notes/half-past-two' },
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
