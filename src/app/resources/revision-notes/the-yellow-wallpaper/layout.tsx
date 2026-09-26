import type { Metadata } from 'next'
import { GuideSupplement } from '@/components/study-guide/guide-supplement'
import { guide } from '@/data/study-guides/the-yellow-wallpaper'

export const metadata: Metadata = {
  title: 'The Yellow Wallpaper Revision Notes',
  description:
    'Revise The Yellow Wallpaper by Charlotte Perkins Gilman: plot summary, characters, themes, key quotes with analysis, context and exam-style questions.',
  alternates: { canonical: '/resources/revision-notes/the-yellow-wallpaper' },
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
