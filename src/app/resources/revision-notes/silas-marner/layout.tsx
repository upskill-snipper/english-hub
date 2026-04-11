import type { Metadata } from 'next'
import { guardTextForBoard } from '../_guard'

export const metadata: Metadata = {
  title: 'Silas Marner Revision Notes',
  description:
    'Free Silas Marner revision notes for GCSE English Literature. Character analysis, themes, key quotes with analysis, context, and exam-ready essay tips.',
  alternates: { canonical: 'https://theenglishhub.app/resources/revision-notes/silas-marner' },
  openGraph: {
    title: 'Silas Marner Revision Notes — The English Hub',
    description:
      'Free Silas Marner revision notes for GCSE English Literature. Character analysis, themes, key quotes with analysis, context, and exam-ready essay tips.',
  },
}

export default async function Layout({ children }: { children: React.ReactNode }) {
  await guardTextForBoard('silas-marner')
  return children
}
