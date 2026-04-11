import type { Metadata } from 'next'
import { guardTextForBoard } from '../_guard'

export const metadata: Metadata = {
  title: 'Jekyll And Hyde Revision Notes',
  description:
    'Free Jekyll And Hyde revision notes for GCSE English Literature. Character analysis, themes, key quotes with analysis, context, and exam-ready essay tips.',
  alternates: { canonical: 'https://theenglishhub.app/resources/revision-notes/jekyll-and-hyde' },
  openGraph: {
    title: 'Jekyll And Hyde Revision Notes — The English Hub',
    description:
      'Free Jekyll And Hyde revision notes for GCSE English Literature. Character analysis, themes, key quotes with analysis, context, and exam-ready essay tips.',
  },
}

export default async function Layout({ children }: { children: React.ReactNode }) {
  await guardTextForBoard('jekyll-and-hyde')
  return children
}
