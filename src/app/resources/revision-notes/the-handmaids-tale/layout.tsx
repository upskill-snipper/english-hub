import type { Metadata } from 'next'
import { GuideSupplement } from '@/components/study-guide/guide-supplement'
import { guide } from '@/data/study-guides/the-handmaids-tale'

export const metadata: Metadata = {
  title: "The Handmaid's Tale Notes | A-Level",
  description:
    "A-Level revision notes for Atwood's The Handmaid's Tale: plot with the Historical Notes coda, Offred's narration, themes, key quotations and dystopian context.",
  alternates: { canonical: '/resources/revision-notes/the-handmaids-tale' },
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
