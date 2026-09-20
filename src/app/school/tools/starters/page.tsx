import type { Metadata } from 'next'
import { StarterGenerator } from '@/components/school/StarterGenerator'

export const metadata: Metadata = {
  openGraph: {
    title: 'Starter Activity Generator | School Tools | The English Hub',
    description:
      'Generate bellwork and starter activities for English lessons, filtered by set text, exam board, year group or skill, then project or print them.',
    images: [
      {
        url: '/api/og?title=Starter+Activity+Generator+%7C+School+Tools+%7C+The+English+Hub',
        width: 1200,
        height: 630,
        alt: 'Starter Activity Generator | School Tools | The English Hub',
      },
    ],
  },
  alternates: { canonical: 'https://theenglishhub.app/school/tools/starters' },
  title: 'Starter Activity Generator | School Tools',
  description:
    'Generate bellwork and starter activities for English lessons, filtered by set text, exam board, year group or skill, then project or print them.',
  robots: { index: false, follow: false },
}

export default function StartersPage() {
  return (
    <div className="px-4 py-8 sm:px-6 lg:px-8">
      <StarterGenerator />
    </div>
  )
}
