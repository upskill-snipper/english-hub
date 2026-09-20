import type { Metadata } from 'next'
import { BreadcrumbJsonLd } from '@/components/seo/json-ld'

export const metadata: Metadata = {
  title: 'Mock exams',
  description:
    'Practice papers for GCSE & IGCSE English Language and Literature, with mark-scheme breakdowns.',
  alternates: { canonical: 'https://theenglishhub.app/mock-exams' },
  openGraph: {
    title: 'Mock exams - The English Hub',
    description:
      'Practice papers for GCSE & IGCSE English Language and Literature, with mark-scheme breakdowns.',
    url: 'https://theenglishhub.app/mock-exams',
    images: [
      {
        url: '/api/og?title=Mock+exams+-+The+English+Hub',
        width: 1200,
        height: 630,
        alt: 'Mock exams - The English Hub',
      },
    ],
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: 'https://theenglishhub.app' },
          { name: 'Mock exams', url: 'https://theenglishhub.app/mock-exams' },
        ]}
      />
      {children}
    </>
  )
}
