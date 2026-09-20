import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pride and Prejudice Revision Notes',
  description:
    'Free Pride and Prejudice revision notes for GCSE English Literature. Character analysis, themes, key quotes with analysis, context, and exam-ready essay tips.',
  alternates: {
    canonical: 'https://theenglishhub.app/resources/revision-notes/pride-and-prejudice',
  },
  openGraph: {
    title: 'Pride and Prejudice Revision Notes - The English Hub',
    description:
      'Free Pride and Prejudice revision notes for GCSE English Literature. Character analysis, themes, key quotes with analysis, context, and exam-ready essay tips.',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
