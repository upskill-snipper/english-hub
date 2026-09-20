import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blues for an Alabama Sky - CAIE IGCSE',
  description:
    'CAIE IGCSE English Literature guide for Blues for an Alabama Sky. Character analysis, themes, historical context, key quotes, and exam techniques.',
  alternates: {
    canonical:
      'https://theenglishhub.app/resources/english-literature/caie/blues-for-an-alabama-sky',
  },
  openGraph: {
    title: 'Blues for an Alabama Sky - CAIE IGCSE - The English Hub',
    description:
      'CAIE IGCSE English Literature guide for Blues for an Alabama Sky. Character analysis, themes, historical context, key quotes, and exam techniques.',
    images: [
      {
        url: '/api/og?title=Blues+for+an+Alabama+Sky+-+CAIE+IGCSE+-+The+English+Hub',
        width: 1200,
        height: 630,
        alt: 'Blues for an Alabama Sky - CAIE IGCSE - The English Hub',
      },
    ],
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
