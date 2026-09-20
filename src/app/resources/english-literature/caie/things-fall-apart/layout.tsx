import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Things Fall Apart - CAIE IGCSE',
  description:
    'CAIE IGCSE English Literature guide for Things Fall Apart by Chinua Achebe. Character analysis, post-colonial themes, key quotes, and exam tips.',
  alternates: {
    canonical: 'https://theenglishhub.app/resources/english-literature/caie/things-fall-apart',
  },
  openGraph: {
    title: 'Things Fall Apart - CAIE IGCSE - The English Hub',
    description:
      'CAIE IGCSE English Literature guide for Things Fall Apart by Chinua Achebe. Character analysis, post-colonial themes, key quotes, and exam tips.',
    images: [
      {
        url: '/api/og?title=Things+Fall+Apart+-+CAIE+IGCSE+-+The+English+Hub',
        width: 1200,
        height: 630,
        alt: 'Things Fall Apart - CAIE IGCSE - The English Hub',
      },
    ],
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
