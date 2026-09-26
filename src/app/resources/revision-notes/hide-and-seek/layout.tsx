import type { Metadata } from 'next'
import { GuideSupplement } from '@/components/study-guide/guide-supplement'
import { guide } from '@/data/study-guides/hide-and-seek'

export const metadata: Metadata = {
  title: 'Hide and Seek by Vernon Scannell | IGCSE',
  description:
    "Revise Vernon Scannell's Hide and Seek for GCSE: form, voice and imagery explained, themes of childhood and abandonment, key quotes and exam tips.",
  alternates: { canonical: '/resources/revision-notes/hide-and-seek' },
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
