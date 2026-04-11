import type { Metadata } from 'next'
import { guardTextForBoard } from '../_guard'

export const metadata: Metadata = {
  title: 'Much Ado About Nothing Revision Notes',
  description:
    'Free Much Ado About Nothing revision notes for GCSE English Literature. Character analysis, themes, key quotes with analysis, context, and exam-ready essay tips.',
  alternates: { canonical: 'https://theenglishhub.app/resources/revision-notes/much-ado-about-nothing' },
  openGraph: {
    title: 'Much Ado About Nothing Revision Notes — The English Hub',
    description:
      'Free Much Ado About Nothing revision notes for GCSE English Literature. Character analysis, themes, key quotes with analysis, context, and exam-ready essay tips.',
  },
}

export default async function Layout({ children }: { children: React.ReactNode }) {
  await guardTextForBoard('much-ado-about-nothing')
  return children
}
