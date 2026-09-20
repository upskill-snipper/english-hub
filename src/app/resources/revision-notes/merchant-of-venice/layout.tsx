import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Merchant of Venice Revision Notes',
  description:
    'The Merchant of Venice revision notes for GCSE English Literature. Character analysis, themes, key quotes with analysis, context, and exam-ready essay tips.',
  alternates: {
    canonical: 'https://theenglishhub.app/resources/revision-notes/merchant-of-venice',
  },
  openGraph: {
    title: 'The Merchant of Venice Revision Notes - The English Hub',
    description:
      'The Merchant of Venice revision notes for GCSE English Literature. Character analysis, themes, key quotes with analysis, context, and exam-ready essay tips.',
    images: [
      {
        url: '/api/og?title=The+Merchant+of+Venice+Revision+Notes+-+The+English+Hub',
        width: 1200,
        height: 630,
        alt: 'The Merchant of Venice Revision Notes - The English Hub',
      },
    ],
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
