import type { Metadata } from 'next'
import { BreadcrumbJsonLd } from '@/components/seo/json-ld'
import { GeoFaq, REVISION_FAQS } from '@/components/seo/GeoFaq'

export const metadata: Metadata = {
  title: 'Mock exams',
  description:
    'Practice papers for GCSE & IGCSE English Language and Literature, with mark-scheme breakdowns.',
  alternates: { canonical: 'https://theenglishhub.app/mock-exams' },
  openGraph: {
    title: 'Mock exams — The English Hub',
    description:
      'Practice papers for GCSE & IGCSE English Language and Literature, with mark-scheme breakdowns.',
    url: 'https://theenglishhub.app/mock-exams',
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
      <div className="mx-auto w-full max-w-5xl px-4 pb-16 sm:px-6">
        <GeoFaq faqs={REVISION_FAQS} heading="Mock exams: common questions" />
      </div>
    </>
  )
}
