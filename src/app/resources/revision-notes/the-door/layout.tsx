import type { Metadata } from 'next'
import { GuideSupplement } from '@/components/study-guide/guide-supplement'
import { guide } from '@/data/study-guides/the-door'

export const metadata: Metadata = {
  title: 'The Door Poem by Miroslav Holub',
  description:
    "Revise Miroslav Holub's poem The Door: stanza-by-stanza analysis, imagery and free verse form, Cold War Czech context, key phrases and exam-style questions.",
  alternates: { canonical: '/resources/revision-notes/the-door' },
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
