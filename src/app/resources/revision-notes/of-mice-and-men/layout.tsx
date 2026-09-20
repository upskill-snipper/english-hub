import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Of Mice and Men Revision Notes',
  description:
    'Free Of Mice and Men revision notes for GCSE English Literature. Character analysis, themes, key quotes with analysis, context, and exam-ready essay tips.',
  alternates: { canonical: 'https://theenglishhub.app/resources/revision-notes/of-mice-and-men' },
  openGraph: {
    title: 'Of Mice and Men Revision Notes - The English Hub',
    description:
      'Free Of Mice and Men revision notes for GCSE English Literature. Character analysis, themes, key quotes with analysis, context, and exam-ready essay tips.',
    images: [
      {
        url: '/api/og?title=Of+Mice+and+Men+Revision+Notes+-+The+English+Hub',
        width: 1200,
        height: 630,
        alt: 'Of Mice and Men Revision Notes - The English Hub',
      },
    ],
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
