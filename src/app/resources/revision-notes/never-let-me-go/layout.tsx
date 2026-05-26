import type { Metadata } from 'next'
import { guardTextForBoard } from '../_guard'

export const metadata: Metadata = {
  title: 'Never Let Me Go Revision Notes',
  description:
    'Free Never Let Me Go revision notes for GCSE English Literature. Character analysis, themes, key quotes with analysis, context, and exam-ready essay tips.',
  alternates: { canonical: 'https://theenglishhub.app/resources/revision-notes/never-let-me-go' },
  openGraph: {
    title: 'Never Let Me Go Revision Notes - The English Hub',
    description:
      'Free Never Let Me Go revision notes for GCSE English Literature. Character analysis, themes, key quotes with analysis, context, and exam-ready essay tips.',
  },
}

export default async function Layout({ children }: { children: React.ReactNode }) {
  await guardTextForBoard('never-let-me-go')
  return children
}
