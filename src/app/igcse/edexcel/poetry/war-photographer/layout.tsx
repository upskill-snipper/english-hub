import type { Metadata } from 'next'
import { GuideSupplement } from '@/components/study-guide/guide-supplement'
import { guide } from '@/data/study-guides/war-photographer'

export const metadata: Metadata = {
  alternates: { canonical: '/igcse/edexcel/poetry/war-photographer' },
  title: 'War Photographer (Carol Ann Duffy) - IGCSE Poetry',
  description:
    "Analysis of Duffy's 'War Photographer' for the Edexcel IGCSE Literature anthology: suffering, detachment and the media, with key quotations and structure.",
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
