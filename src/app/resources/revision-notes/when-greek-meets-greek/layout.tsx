import type { Metadata } from 'next'
import { GuideSupplement } from '@/components/study-guide/guide-supplement'
import { guide } from '@/data/study-guides/when-greek-meets-greek'

export const metadata: Metadata = {
  title: 'When Greek Meets Greek Revision Notes',
  description:
    "Revise Sam Selvon's When Greek Meets Greek: plot, Ram, Chan and Fraser, creole narrative voice, Windrush context, key phrases and exam questions.",
  alternates: { canonical: '/resources/revision-notes/when-greek-meets-greek' },
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
