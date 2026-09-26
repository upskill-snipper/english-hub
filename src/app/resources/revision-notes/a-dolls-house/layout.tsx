import type { Metadata } from 'next'
import { GuideSupplement } from '@/components/study-guide/guide-supplement'
import { guide } from '@/data/study-guides/a-dolls-house'

export const metadata: Metadata = {
  title: "A Doll's House Revision Notes | A-Level",
  description:
    "A-Level revision notes for Ibsen's A Doll's House: act-by-act plot, Nora and Torvald character analysis, themes, key quotations and AQA and OCR exam questions.",
  alternates: { canonical: '/resources/revision-notes/a-dolls-house' },
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
