import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Language Devices',
  description:
    'Complete guide to language devices for GCSE English. Definitions, examples, and analysis of metaphor, simile, personification, and more.',
  alternates: { canonical: 'https://theenglishhub.app/resources/techniques/language-devices' },
  openGraph: {
    title: 'Language Devices - The English Hub',
    description:
      'Complete guide to language devices for GCSE English. Definitions, examples, and analysis of metaphor, simile, personification, and more.',
    images: [
      {
        url: '/api/og?title=Language+Devices+-+The+English+Hub',
        width: 1200,
        height: 630,
        alt: 'Language Devices - The English Hub',
      },
    ],
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
