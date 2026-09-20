import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '20th Century Context',
  description:
    'Twentieth-century historical context for GCSE English Literature. World Wars, social change, post-war Britain, and the background to modern set texts.',
  alternates: { canonical: 'https://theenglishhub.app/resources/context/twentieth-century' },
  openGraph: {
    title: '20th Century Context - The English Hub',
    description:
      'Twentieth-century historical context for GCSE English Literature. World Wars, social change, post-war Britain, and the background to modern set texts.',
    images: [
      {
        url: '/api/og?title=20th+Century+Context+-+The+English+Hub',
        width: 1200,
        height: 630,
        alt: '20th Century Context - The English Hub',
      },
    ],
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
