import type { Metadata } from 'next'
import { guardTextForBoard } from '../_guard'

export const metadata: Metadata = {
  title: 'Of Mice and Men Revision Notes',
  description:
    'Free Of Mice and Men revision notes for GCSE English Literature. Character analysis, themes, key quotes with analysis, context, and exam-ready essay tips.',
  alternates: { canonical: 'https://theenglishhub.app/resources/revision-notes/of-mice-and-men' },
  openGraph: {
    title: 'Of Mice and Men Revision Notes - The English Hub',
    description:
      'Free Of Mice and Men revision notes for GCSE English Literature. Character analysis, themes, key quotes with analysis, context, and exam-ready essay tips.',
  },
}

export default async function Layout({ children }: { children: React.ReactNode }) {
  await guardTextForBoard('of-mice-and-men')
  return children
}
