import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'A Midsummer Nights Dream - CAIE IGCSE',
  description:
    'CAIE IGCSE English Literature guide for A Midsummer Nights Dream. Plot summary, character analysis, themes, key quotes, and exam preparation tips.',
  alternates: {
    canonical:
      'https://theenglishhub.app/resources/english-literature/caie/a-midsummer-nights-dream',
  },
  openGraph: {
    title: 'A Midsummer Nights Dream - CAIE IGCSE - The English Hub',
    description:
      'CAIE IGCSE English Literature guide for A Midsummer Nights Dream. Plot summary, character analysis, themes, key quotes, and exam preparation tips.',
    images: [
      {
        url: '/api/og?title=A+Midsummer+Nights+Dream+-+CAIE+IGCSE+-+The+English+Hub',
        width: 1200,
        height: 630,
        alt: 'A Midsummer Nights Dream - CAIE IGCSE - The English Hub',
      },
    ],
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
