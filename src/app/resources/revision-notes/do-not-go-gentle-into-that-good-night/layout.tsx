import type { Metadata } from 'next'
import { GuideSupplement } from '@/components/study-guide/guide-supplement'
import { guide } from '@/data/study-guides/do-not-go-gentle-into-that-good-night'

export const metadata: Metadata = {
  title: 'Do Not Go Gentle Into That Good Night',
  description:
    "Revise Dylan Thomas's villanelle for GCSE: form and refrains explained, themes of death and defiance, key quotations with analysis and exam tips.",
  alternates: { canonical: '/resources/revision-notes/do-not-go-gentle-into-that-good-night' },
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
