import type { Metadata } from 'next'
import { guardTextForBoard } from '../_guard'

export const metadata: Metadata = {
  title: 'Jane Eyre Revision Notes',
  description:
    'Free Jane Eyre revision notes for GCSE English Literature. Character analysis, themes, key quotes with analysis, context, and exam-ready essay tips.',
  alternates: { canonical: 'https://theenglishhub.app/resources/revision-notes/jane-eyre' },
  openGraph: {
    title: 'Jane Eyre Revision Notes - The English Hub',
    description:
      'Free Jane Eyre revision notes for GCSE English Literature. Character analysis, themes, key quotes with analysis, context, and exam-ready essay tips.',
  },
}

export default async function Layout({ children }: { children: React.ReactNode }) {
  await guardTextForBoard('jane-eyre')
  return children
}
