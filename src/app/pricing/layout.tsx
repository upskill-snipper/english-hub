import type { Metadata } from 'next'
import { BreadcrumbJsonLd } from '@/components/seo/json-ld'

export const metadata: Metadata = {
  title: 'Pricing',
  description:
    'AI-supported GCSE & IGCSE English revision built by English teachers. Plans for students, teachers and schools. 7-day free trial on every paid plan.',
  alternates: { canonical: 'https://theenglishhub.app/pricing' },
  openGraph: {
    title: 'Pricing - The English Hub',
    description:
      'AI-supported GCSE & IGCSE English revision built by English teachers. Plans for students, teachers and schools. 7-day free trial on every paid plan.',
  },
}

export default function PricingLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: 'https://theenglishhub.app' },
          { name: 'Pricing', url: 'https://theenglishhub.app/pricing' },
        ]}
      />
      {children}
    </>
  )
}
