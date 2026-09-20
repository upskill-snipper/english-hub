import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Silas Marner Revision Notes',
  description:
    'Free Silas Marner revision notes for GCSE English Literature. Character analysis, themes, key quotes with analysis, context, and exam-ready essay tips.',
  alternates: { canonical: 'https://theenglishhub.app/resources/revision-notes/silas-marner' },
  openGraph: {
    title: 'Silas Marner Revision Notes - The English Hub',
    description:
      'Free Silas Marner revision notes for GCSE English Literature. Character analysis, themes, key quotes with analysis, context, and exam-ready essay tips.',
    images: [
      {
        url: '/api/og?title=Silas+Marner+Revision+Notes+-+The+English+Hub',
        width: 1200,
        height: 630,
        alt: 'Silas Marner Revision Notes - The English Hub',
      },
    ],
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
