import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Macbeth - CAIE IGCSE',
  description:
    'CAIE IGCSE English Literature guide for Macbeth. Act-by-act summary, character analysis, themes, key quotes, and exam preparation strategies.',
  alternates: { canonical: 'https://theenglishhub.app/resources/english-literature/caie/macbeth' },
  openGraph: {
    title: 'Macbeth - CAIE IGCSE - The English Hub',
    description:
      'CAIE IGCSE English Literature guide for Macbeth. Act-by-act summary, character analysis, themes, key quotes, and exam preparation strategies.',
    images: [
      {
        url: '/api/og?title=Macbeth+-+CAIE+IGCSE+-+The+English+Hub',
        width: 1200,
        height: 630,
        alt: 'Macbeth - CAIE IGCSE - The English Hub',
      },
    ],
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
