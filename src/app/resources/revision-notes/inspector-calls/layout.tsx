import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'An Inspector Calls Revision Notes',
  description:
    'An Inspector Calls revision notes for GCSE English Literature. Character analysis, themes, key quotes with analysis, context, and exam-ready essay tips.',
  alternates: { canonical: 'https://theenglishhub.app/resources/revision-notes/inspector-calls' },
  openGraph: {
    title: 'An Inspector Calls Revision Notes - The English Hub',
    description:
      'An Inspector Calls revision notes for GCSE English Literature. Character analysis, themes, key quotes with analysis, context, and exam-ready essay tips.',
    images: [
      {
        url: '/api/og?title=An+Inspector+Calls+Revision+Notes+-+The+English+Hub',
        width: 1200,
        height: 630,
        alt: 'An Inspector Calls Revision Notes - The English Hub',
      },
    ],
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
