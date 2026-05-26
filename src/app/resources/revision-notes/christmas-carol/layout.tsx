import type { Metadata } from 'next'
import { guardTextForBoard } from '../_guard'

export const metadata: Metadata = {
  title: 'Christmas Carol Revision Notes',
  description:
    'Free Christmas Carol revision notes for GCSE English Literature. Character analysis, themes, key quotes with analysis, context, and exam-ready essay tips.',
  alternates: { canonical: 'https://theenglishhub.app/resources/revision-notes/christmas-carol' },
  openGraph: {
    title: 'Christmas Carol Revision Notes - The English Hub',
    description:
      'Free Christmas Carol revision notes for GCSE English Literature. Character analysis, themes, key quotes with analysis, context, and exam-ready essay tips.',
  },
}

export default async function Layout({ children }: { children: React.ReactNode }) {
  await guardTextForBoard('christmas-carol')
  return children
}
