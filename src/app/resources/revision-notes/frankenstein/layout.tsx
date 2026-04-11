import type { Metadata } from 'next'
import { guardTextForBoard } from '../_guard'

export const metadata: Metadata = {
  title: 'Frankenstein Revision Notes',
  description:
    'Free Frankenstein revision notes for GCSE English Literature. Character analysis, themes, key quotes with analysis, context, and exam-ready essay tips.',
  alternates: { canonical: 'https://theenglishhub.app/resources/revision-notes/frankenstein' },
  openGraph: {
    title: 'Frankenstein Revision Notes — The English Hub',
    description:
      'Free Frankenstein revision notes for GCSE English Literature. Character analysis, themes, key quotes with analysis, context, and exam-ready essay tips.',
  },
}

export default async function Layout({ children }: { children: React.ReactNode }) {
  await guardTextForBoard('frankenstein')
  return children
}
