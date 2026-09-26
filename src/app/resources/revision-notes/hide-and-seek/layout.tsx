import type { Metadata } from 'next'
import { GuideSupplement } from '@/components/study-guide/guide-supplement'
import { guide } from '@/data/study-guides/hide-and-seek'

// 26 September 2026: the description said "for GCSE". This guide is for the poem as set in
// Part 3 of the Pearson Edexcel International GCSE anthology, English Literature (4ET1).
export const metadata: Metadata = {
  title: 'Hide and Seek by Vernon Scannell | IGCSE',
  description:
    "Revise Vernon Scannell's Hide and Seek for Edexcel International GCSE Literature: form, voice, imagery, themes of childhood and abandonment, and exam tips.",
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
