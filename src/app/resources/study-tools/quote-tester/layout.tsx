import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Quote Tester',
  description:
    'Test your knowledge of key quotes from GCSE English Literature set texts. Interactive quiz tool to help you memorise and recall quotations.',
  alternates: { canonical: 'https://theenglishhub.app/resources/study-tools/quote-tester' },
  openGraph: {
    title: 'Quote Tester - The English Hub',
    description:
      'Test your knowledge of key quotes from GCSE English Literature set texts. Interactive quiz tool to help you memorise and recall quotations.',
    images: [
      {
        url: '/api/og?title=Quote+Tester+-+The+English+Hub',
        width: 1200,
        height: 630,
        alt: 'Quote Tester - The English Hub',
      },
    ],
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
