import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Macbeth - CAIE IGCSE',
  description:
    'CAIE IGCSE English Literature guide for Macbeth. Act-by-act summary, character analysis, themes, key quotes, and exam preparation strategies.',
  alternates: { canonical: 'https://theenglishhub.app/resources/english-literature/caie/macbeth' },
  openGraph: {
    title: 'Macbeth - CAIE IGCSE — The English Hub',
    description:
      'CAIE IGCSE English Literature guide for Macbeth. Act-by-act summary, character analysis, themes, key quotes, and exam preparation strategies.',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
