import type { Metadata } from 'next'
import { guardTextForBoard } from '../_guard'

export const metadata: Metadata = {
  title: 'Great Expectations Revision Notes',
  description:
    'Free Great Expectations revision notes for GCSE English Literature. Character analysis, themes, key quotes with analysis, context, and exam-ready essay tips.',
  alternates: {
    canonical: 'https://theenglishhub.app/resources/revision-notes/great-expectations',
  },
  openGraph: {
    title: 'Great Expectations Revision Notes - The English Hub',
    description:
      'Free Great Expectations revision notes for GCSE English Literature. Character analysis, themes, key quotes with analysis, context, and exam-ready essay tips.',
  },
}

export default async function Layout({ children }: { children: React.ReactNode }) {
  await guardTextForBoard('great-expectations')
  return children
}
