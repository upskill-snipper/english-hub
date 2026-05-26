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
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
