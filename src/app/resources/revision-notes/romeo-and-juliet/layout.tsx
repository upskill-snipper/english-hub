import type { Metadata } from 'next'
import { guardTextForBoard } from '../_guard'

export const metadata: Metadata = {
  title: 'Romeo And Juliet Revision Notes',
  description:
    'Free Romeo And Juliet revision notes for GCSE English Literature. Character analysis, themes, key quotes with analysis, context, and exam-ready essay tips.',
  alternates: { canonical: 'https://theenglishhub.app/resources/revision-notes/romeo-and-juliet' },
  openGraph: {
    title: 'Romeo And Juliet Revision Notes - The English Hub',
    description:
      'Free Romeo And Juliet revision notes for GCSE English Literature. Character analysis, themes, key quotes with analysis, context, and exam-ready essay tips.',
  },
}

export default async function Layout({ children }: { children: React.ReactNode }) {
  await guardTextForBoard('romeo-and-juliet')
  return children
}
