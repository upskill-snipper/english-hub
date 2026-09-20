import type { Metadata } from 'next'
import { DifferentiationBuilder } from '@/components/school/DifferentiationBuilder'

export const metadata: Metadata = {
  openGraph: {
    title: 'Differentiation Toolkit | The English Hub',
    description:
      'Build differentiated resources at Foundation, Core, and Extension levels. Auto-generate scaffolded tasks for essay writing, extract analysis, creative writing, and comparison.',
    images: [
      {
        url: '/api/og?title=Differentiation+Toolkit+%7C+The+English+Hub',
        width: 1200,
        height: 630,
        alt: 'Differentiation Toolkit | The English Hub',
      },
    ],
  },
  alternates: { canonical: 'https://theenglishhub.app/school/tools/differentiation' },
  title: 'Differentiation Toolkit',
  description:
    'Build differentiated resources at Foundation, Core, and Extension levels. Auto-generate scaffolded tasks for essay writing, extract analysis, creative writing, and comparison.',
  robots: { index: false, follow: false },
}

export default function DifferentiationPage() {
  return <DifferentiationBuilder />
}
