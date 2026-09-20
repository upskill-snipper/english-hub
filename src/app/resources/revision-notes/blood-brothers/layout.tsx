import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blood Brothers Revision Notes',
  description:
    'Free Blood Brothers revision notes for GCSE English Literature. Character analysis, themes, key quotes with analysis, context, and exam-ready essay tips.',
  alternates: { canonical: 'https://theenglishhub.app/resources/revision-notes/blood-brothers' },
  openGraph: {
    title: 'Blood Brothers Revision Notes - The English Hub',
    description:
      'Free Blood Brothers revision notes for GCSE English Literature. Character analysis, themes, key quotes with analysis, context, and exam-ready essay tips.',
    images: [
      {
        url: '/api/og?title=Blood+Brothers+Revision+Notes+-+The+English+Hub',
        width: 1200,
        height: 630,
        alt: 'Blood Brothers Revision Notes - The English Hub',
      },
    ],
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
