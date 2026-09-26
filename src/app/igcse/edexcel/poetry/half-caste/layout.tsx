import type { Metadata } from 'next'
import { GuideSupplement } from '@/components/study-guide/guide-supplement'
import { guide } from '@/data/study-guides/half-caste'

export const metadata: Metadata = {
  alternates: { canonical: '/igcse/edexcel/poetry/half-caste' },
  title: 'Half-Caste (John Agard) - Edexcel IGCSE Poetry',
  description:
    "Analysis of John Agard's 'Half-Caste' for the Edexcel IGCSE Literature anthology: identity, prejudice and dialect, with key quotations, tone and structure.",
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
