import type { Metadata } from 'next'
import { GuideSupplement } from '@/components/study-guide/guide-supplement'
import { guide } from '@/data/study-guides/la-belle-dame-sans-merci'

export const metadata: Metadata = {
  alternates: { canonical: '/igcse/edexcel/poetry/la-belle-dame-sans-merci' },
  title: 'La Belle Dame sans Merci (Keats) - Edexcel IGCSE Poetry',
  description:
    "Analysis of Keats's 'La Belle Dame sans Merci' for the Edexcel IGCSE anthology: love, enchantment and death, with key quotations, ballad form and imagery.",
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
