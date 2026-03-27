import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Rebecca - CAIE IGCSE',
  description:
    'CAIE IGCSE English Literature guide for Rebecca by Daphne du Maurier. Character analysis, gothic themes, key quotes, and exam techniques.',
  alternates: { canonical: 'https://theenglishhub.app/resources/english-literature/caie/rebecca' },
  openGraph: {
    title: 'Rebecca - CAIE IGCSE — The English Hub',
    description:
      'CAIE IGCSE English Literature guide for Rebecca by Daphne du Maurier. Character analysis, gothic themes, key quotes, and exam techniques.',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
