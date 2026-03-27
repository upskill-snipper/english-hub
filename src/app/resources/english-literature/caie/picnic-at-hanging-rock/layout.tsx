import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Picnic at Hanging Rock - CAIE IGCSE',
  description:
    'CAIE IGCSE English Literature guide for Picnic at Hanging Rock. Plot summary, character analysis, themes, key quotes, and exam preparation.',
  alternates: { canonical: 'https://theenglishhub.app/resources/english-literature/caie/picnic-at-hanging-rock' },
  openGraph: {
    title: 'Picnic at Hanging Rock - CAIE IGCSE — The English Hub',
    description:
      'CAIE IGCSE English Literature guide for Picnic at Hanging Rock. Plot summary, character analysis, themes, key quotes, and exam preparation.',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
