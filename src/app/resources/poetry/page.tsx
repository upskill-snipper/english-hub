import type { Metadata } from 'next'
import Link from 'next/link'
import { PoetryHubClient } from './PoetryHubClient'

export const metadata: Metadata = {
  openGraph: {
    title: 'GCSE Poetry Revision and Analysis',
    description:
      'GCSE poetry revision: AQA Power and Conflict and Love and Relationships, the Edexcel and Eduqas anthologies, poetic techniques, unseen poetry and comparison.',
    images: [
      {
        url: '/api/og?title=GCSE+Poetry+Revision+and+Analysis',
        width: 1200,
        height: 630,
        alt: 'GCSE Poetry Revision and Analysis',
      },
    ],
  },
  alternates: { canonical: 'https://theenglishhub.app/resources/poetry' },
  title: 'GCSE Poetry Revision and Analysis',
  description:
    'GCSE poetry revision: AQA Power and Conflict and Love and Relationships, the Edexcel and Eduqas anthologies, poetic techniques, unseen poetry and comparison.',
}

export default function PoetryHubPage() {
  return (
    <>
      <PoetryHubClient />
    </>
  )
}
