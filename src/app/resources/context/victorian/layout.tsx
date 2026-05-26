import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Victorian Context',
  description:
    'Victorian historical context for GCSE English Literature. Social class, industrialisation, morality, and key themes in Dickens, Stevenson, and Bronte texts.',
  alternates: { canonical: 'https://theenglishhub.app/resources/context/victorian' },
  openGraph: {
    title: 'Victorian Context - The English Hub',
    description:
      'Victorian historical context for GCSE English Literature. Social class, industrialisation, morality, and key themes in Dickens, Stevenson, and Bronte texts.',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
