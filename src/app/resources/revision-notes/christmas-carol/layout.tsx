import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'A Christmas Carol Revision Notes',
  description:
    'A Christmas Carol revision notes for GCSE English Literature. Character analysis, themes, key quotes with analysis, context, and exam-ready essay tips.',
  alternates: { canonical: 'https://theenglishhub.app/resources/revision-notes/christmas-carol' },
  openGraph: {
    title: 'A Christmas Carol Revision Notes - The English Hub',
    description:
      'A Christmas Carol revision notes for GCSE English Literature. Character analysis, themes, key quotes with analysis, context, and exam-ready essay tips.',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
