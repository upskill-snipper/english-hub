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
    url: 'https://theenglishhub.app/pricing',
    siteName: 'The English Hub',
    type: 'website',
    locale: 'en_GB',
    images: [
      {
        url: '/api/og?title=English+Hub+Pricing&subtitle=7-day+free+trial+on+every+paid+plan',
        width: 1200,
        height: 630,
        alt: 'The English Hub pricing - 7-day free trial on every paid plan',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pricing - The English Hub',
    description:
      'AI-supported GCSE & IGCSE English revision built by English teachers. Plans for students, teachers and schools. 7-day free trial on every paid plan.',
    images: ['/api/og?title=English+Hub+Pricing&subtitle=7-day+free+trial+on+every+paid+plan'],
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
