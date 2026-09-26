import type { Metadata } from 'next'
import { GuideSupplement } from '@/components/study-guide/guide-supplement'
import { guide } from '@/data/study-guides/remember'

export const metadata: Metadata = {
  alternates: { canonical: '/igcse/edexcel/poetry/remember' },
  title: 'Remember (Christina Rossetti) - Edexcel IGCSE Poetry',
  description:
    "Analysis of Rossetti's 'Remember' for the Edexcel IGCSE Literature anthology: death, memory and selfless love, with key quotations, sonnet form and the volta.",
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
