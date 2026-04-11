import type { Metadata } from 'next'
import { guardTextForBoard } from '../_guard'

export const metadata: Metadata = {
  title: 'Woman In Black Revision Notes',
  description:
    'Free Woman In Black revision notes for GCSE English Literature. Character analysis, themes, key quotes with analysis, context, and exam-ready essay tips.',
  alternates: { canonical: 'https://theenglishhub.app/resources/revision-notes/woman-in-black' },
  openGraph: {
    title: 'Woman In Black Revision Notes — The English Hub',
    description:
      'Free Woman In Black revision notes for GCSE English Literature. Character analysis, themes, key quotes with analysis, context, and exam-ready essay tips.',
  },
}

export default async function Layout({ children }: { children: React.ReactNode }) {
  await guardTextForBoard('woman-in-black')
  return children
}
