import type { Metadata } from 'next'
import Link from 'next/link'
import { PoetryHubClient } from './PoetryHubClient'

export const metadata: Metadata = {
  openGraph: {
    title: 'Poetry Made Clear - GCSE English Literature Revision',
    description:
      'Comprehensive GCSE poetry revision. Power and Conflict, Love and Relationships anthology analysis, poetry techniques, unseen poetry guides, and comparison skills.',
    images: [
      {
        url: '/api/og?title=Poetry+Made+Clear+-+GCSE+English+Literature+Revision',
        width: 1200,
        height: 630,
        alt: 'Poetry Made Clear - GCSE English Literature Revision',
      },
    ],
  },
  alternates: { canonical: 'https://theenglishhub.app/resources/poetry' },
  title: 'Poetry Made Clear - GCSE English Literature Revision',
  description:
    'Comprehensive GCSE poetry revision. Power and Conflict, Love and Relationships anthology analysis, poetry techniques, unseen poetry guides, and comparison skills.',
}

export default function PoetryHubPage() {
  return (
    <>
      <PoetryHubClient />
    </>
  )
}
