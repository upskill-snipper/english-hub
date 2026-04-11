import type { Metadata } from 'next'
import { guardTextForBoard } from '../_guard'

export const metadata: Metadata = {
  title: 'Lord Of The Flies Revision Notes',
  description:
    'Free Lord Of The Flies revision notes for GCSE English Literature. Character analysis, themes, key quotes with analysis, context, and exam-ready essay tips.',
  alternates: { canonical: 'https://theenglishhub.app/resources/revision-notes/lord-of-the-flies' },
  openGraph: {
    title: 'Lord Of The Flies Revision Notes — The English Hub',
    description:
      'Free Lord Of The Flies revision notes for GCSE English Literature. Character analysis, themes, key quotes with analysis, context, and exam-ready essay tips.',
  },
}

export default async function Layout({ children }: { children: React.ReactNode }) {
  await guardTextForBoard('lord-of-the-flies')
  return children
}
