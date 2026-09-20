import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Much Ado About Nothing Revision Notes',
  description:
    'A GCSE English Literature study guide to Much Ado About Nothing: 12 scene summaries, eight character analyses, five themes and 20 quotations.',
  alternates: {
    canonical: 'https://theenglishhub.app/resources/revision-notes/much-ado-about-nothing',
  },
  openGraph: {
    title: 'Much Ado About Nothing Revision Notes - The English Hub',
    description:
      'A GCSE English Literature study guide to Much Ado About Nothing: 12 scene summaries, eight character analyses, five themes and 20 quotations.',
    images: [
      {
        url: '/api/og?title=Much+Ado+About+Nothing+Revision+Notes+-+The+English+Hub',
        width: 1200,
        height: 630,
        alt: 'Much Ado About Nothing Revision Notes - The English Hub',
      },
    ],
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
