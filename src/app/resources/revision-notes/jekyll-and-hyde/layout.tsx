import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Jekyll and Hyde Revision Notes',
  description:
    'Free Jekyll and Hyde revision notes for GCSE English Literature. Character analysis, themes, key quotes with analysis, context, and exam-ready essay tips.',
  alternates: { canonical: 'https://theenglishhub.app/resources/revision-notes/jekyll-and-hyde' },
  openGraph: {
    title: 'Jekyll and Hyde Revision Notes - The English Hub',
    description:
      'Free Jekyll and Hyde revision notes for GCSE English Literature. Character analysis, themes, key quotes with analysis, context, and exam-ready essay tips.',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
