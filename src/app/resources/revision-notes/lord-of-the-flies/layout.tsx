import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Lord of the Flies Revision Notes',
  description:
    'Free Lord of the Flies revision notes for GCSE English Literature. Character analysis, themes, key quotes with analysis, context, and exam-ready essay tips.',
  alternates: { canonical: 'https://theenglishhub.app/resources/revision-notes/lord-of-the-flies' },
  openGraph: {
    title: 'Lord of the Flies Revision Notes - The English Hub',
    description:
      'Free Lord of the Flies revision notes for GCSE English Literature. Character analysis, themes, key quotes with analysis, context, and exam-ready essay tips.',
    images: [
      {
        url: '/api/og?title=Lord+of+the+Flies+Revision+Notes+-+The+English+Hub',
        width: 1200,
        height: 630,
        alt: 'Lord of the Flies Revision Notes - The English Hub',
      },
    ],
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
