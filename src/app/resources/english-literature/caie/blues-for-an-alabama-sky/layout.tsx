import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blues for an Alabama Sky - CAIE IGCSE',
  description:
    'CAIE IGCSE English Literature guide for Blues for an Alabama Sky. Character analysis, themes, historical context, key quotes, and exam techniques.',
  alternates: { canonical: 'https://theenglishhub.app/resources/english-literature/caie/blues-for-an-alabama-sky' },
  openGraph: {
    title: 'Blues for an Alabama Sky - CAIE IGCSE — The English Hub',
    description:
      'CAIE IGCSE English Literature guide for Blues for an Alabama Sky. Character analysis, themes, historical context, key quotes, and exam techniques.',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
