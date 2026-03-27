import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'A Taste of Honey - CAIE IGCSE',
  description:
    'CAIE IGCSE English Literature guide for A Taste of Honey. Plot summary, character analysis, themes, key quotes, and exam preparation strategies.',
  alternates: { canonical: 'https://theenglishhub.app/resources/english-literature/caie/a-taste-of-honey' },
  openGraph: {
    title: 'A Taste of Honey - CAIE IGCSE — The English Hub',
    description:
      'CAIE IGCSE English Literature guide for A Taste of Honey. Plot summary, character analysis, themes, key quotes, and exam preparation strategies.',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
