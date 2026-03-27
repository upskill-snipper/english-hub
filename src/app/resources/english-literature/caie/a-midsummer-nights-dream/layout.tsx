import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'A Midsummer Nights Dream - CAIE IGCSE',
  description:
    'CAIE IGCSE English Literature guide for A Midsummer Nights Dream. Plot summary, character analysis, themes, key quotes, and exam preparation tips.',
  alternates: { canonical: 'https://theenglishhub.app/resources/english-literature/caie/a-midsummer-nights-dream' },
  openGraph: {
    title: 'A Midsummer Nights Dream - CAIE IGCSE — The English Hub',
    description:
      'CAIE IGCSE English Literature guide for A Midsummer Nights Dream. Plot summary, character analysis, themes, key quotes, and exam preparation tips.',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
