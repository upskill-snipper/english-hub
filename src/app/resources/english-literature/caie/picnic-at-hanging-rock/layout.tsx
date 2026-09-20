import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Picnic at Hanging Rock - CAIE IGCSE',
  description:
    'CAIE IGCSE English Literature guide for Picnic at Hanging Rock. Plot summary, character analysis, themes, key quotes, and exam preparation.',
  alternates: {
    canonical: 'https://theenglishhub.app/resources/english-literature/caie/picnic-at-hanging-rock',
  },
  openGraph: {
    title: 'Picnic at Hanging Rock - CAIE IGCSE - The English Hub',
    description:
      'CAIE IGCSE English Literature guide for Picnic at Hanging Rock. Plot summary, character analysis, themes, key quotes, and exam preparation.',
    images: [
      {
        url: '/api/og?title=Picnic+at+Hanging+Rock+-+CAIE+IGCSE+-+The+English+Hub',
        width: 1200,
        height: 630,
        alt: 'Picnic at Hanging Rock - CAIE IGCSE - The English Hub',
      },
    ],
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
