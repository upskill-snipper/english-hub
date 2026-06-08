import type { Metadata } from 'next'
import { headers } from 'next/headers'
import { SoftwareApplicationJsonLd, BreadcrumbJsonLd } from '@/components/seo/json-ld'
import DemoSchoolLayoutClient from './layout-client'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  // 2026-06-08 — SEO + GEO audit fix. Stronger, more discoverable
  // title + description + canonical + OG + Twitter — this is one of
  // the top conversion surfaces for Qatar / GCC school sales now that
  // /demo/ is no longer blocked in robots.txt.
  title: 'School portal demo — English department analytics & intervention',
  description:
    'Explore the full English Hub school portal with synthetic department data: class analytics, intervention insights, AI marking workflow and student progress. No signup required.',
  alternates: { canonical: 'https://theenglishhub.app/demo/school' },
  keywords: [
    'AI English platform demo',
    'school English department dashboard demo',
    'English department analytics demo',
    'GCSE English platform schools demo',
    'IGCSE English platform demo',
  ],
  openGraph: {
    title: 'School portal demo — The English Hub',
    description:
      'Interactive demo of the English Hub school portal: department analytics, intervention insights, AI marking. Synthetic data, no signup.',
    url: 'https://theenglishhub.app/demo/school',
    type: 'website',
    siteName: 'The English Hub',
    images: [
      {
        url: 'https://theenglishhub.app/api/og?title=School+portal+demo&subtitle=English+department+analytics+%26+intervention',
        width: 1200,
        height: 630,
        alt: 'The English Hub — interactive school portal demo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'School portal demo — The English Hub',
    description:
      'Interactive demo: department analytics, intervention insights, AI marking. No signup.',
    images: [
      'https://theenglishhub.app/api/og?title=School+portal+demo&subtitle=English+department+analytics+%26+intervention',
    ],
  },
}

export default async function DemoSchoolLayout({ children }: { children: React.ReactNode }) {
  const nonce = (await headers()).get('x-nonce') ?? undefined
  return (
    <>
      <BreadcrumbJsonLd
        nonce={nonce}
        items={[
          { name: 'Home', url: 'https://theenglishhub.app' },
          { name: 'Demos', url: 'https://theenglishhub.app/demo' },
          { name: 'School portal', url: 'https://theenglishhub.app/demo/school' },
        ]}
      />
      <SoftwareApplicationJsonLd
        nonce={nonce}
        name="The English Hub — school portal demo"
        description="Interactive demo of the English Hub school portal with synthetic department data: class analytics, intervention insights, AI marking workflow and student progress."
        url="https://theenglishhub.app/demo/school"
        audience="Heads of English, school leaders, MAT leads"
        screenshot="https://theenglishhub.app/api/og?title=School+portal+demo&subtitle=English+department+analytics+%26+intervention"
      />
      <DemoSchoolLayoutClient>{children}</DemoSchoolLayoutClient>
    </>
  )
}
