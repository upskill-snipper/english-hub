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
    images: [
      {
        url: '/api/og?title=Jekyll+and+Hyde+Revision+Notes+-+The+English+Hub',
        width: 1200,
        height: 630,
        alt: 'Jekyll and Hyde Revision Notes - The English Hub',
      },
    ],
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
