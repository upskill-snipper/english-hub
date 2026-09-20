import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Romeo and Juliet Revision Notes',
  description:
    'Free Romeo and Juliet revision notes for GCSE English Literature. Character analysis, themes, key quotes with analysis, context, and exam-ready essay tips.',
  alternates: { canonical: 'https://theenglishhub.app/resources/revision-notes/romeo-and-juliet' },
  openGraph: {
    title: 'Romeo and Juliet Revision Notes - The English Hub',
    description:
      'Free Romeo and Juliet revision notes for GCSE English Literature. Character analysis, themes, key quotes with analysis, context, and exam-ready essay tips.',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
