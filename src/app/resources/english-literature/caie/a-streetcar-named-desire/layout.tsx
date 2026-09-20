import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'A Streetcar Named Desire - CAIE IGCSE',
  description:
    'CAIE IGCSE English Literature guide for A Streetcar Named Desire. Character analysis, themes, key quotes, context, and exam preparation tips.',
  alternates: {
    canonical:
      'https://theenglishhub.app/resources/english-literature/caie/a-streetcar-named-desire',
  },
  openGraph: {
    title: 'A Streetcar Named Desire - CAIE IGCSE - The English Hub',
    description:
      'CAIE IGCSE English Literature guide for A Streetcar Named Desire. Character analysis, themes, key quotes, context, and exam preparation tips.',
    images: [
      {
        url: '/api/og?title=A+Streetcar+Named+Desire+-+CAIE+IGCSE+-+The+English+Hub',
        width: 1200,
        height: 630,
        alt: 'A Streetcar Named Desire - CAIE IGCSE - The English Hub',
      },
    ],
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
