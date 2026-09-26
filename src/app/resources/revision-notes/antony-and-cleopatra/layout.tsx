import type { Metadata } from 'next'
import { GuideSupplement } from '@/components/study-guide/guide-supplement'
import { guide } from '@/data/study-guides/antony-and-cleopatra'

export const metadata: Metadata = {
  title: 'Antony and Cleopatra Notes | A-Level',
  description:
    "A-Level notes on Shakespeare's Antony and Cleopatra: the Rome and Egypt opposition, character profiles, themes, First Folio quotations and exam essay plans.",
  alternates: { canonical: '/resources/revision-notes/antony-and-cleopatra' },
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
