import type { Metadata } from 'next'
import { guardTextForBoard } from '../_guard'

export const metadata: Metadata = {
  title: 'Sign Of Four Revision Notes',
  description:
    'Free Sign Of Four revision notes for GCSE English Literature. Character analysis, themes, key quotes with analysis, context, and exam-ready essay tips.',
  alternates: { canonical: 'https://theenglishhub.app/resources/revision-notes/sign-of-four' },
  openGraph: {
    title: 'Sign Of Four Revision Notes - The English Hub',
    description:
      'Free Sign Of Four revision notes for GCSE English Literature. Character analysis, themes, key quotes with analysis, context, and exam-ready essay tips.',
  },
}

export default async function Layout({ children }: { children: React.ReactNode }) {
  await guardTextForBoard('sign-of-four')
  return children
}
