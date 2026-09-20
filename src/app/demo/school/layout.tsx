import type { Metadata } from 'next'
import { headers } from 'next/headers'
import { BreadcrumbJsonLd } from '@/components/seo/json-ld'
import DemoSchoolLayoutClient from './layout-client'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  // 2026-06-08 — SEO + GEO audit fix. Stronger, more discoverable
  // title + description + canonical + OG + Twitter — this is one of
  // the top conversion surfaces for Qatar / GCC school sales now that
  // /demo/ is no longer blocked in robots.txt.
  title: 'School portal demo - English department analytics',
  description:
    'Walk the school portal on synthetic department data: class and cohort analytics, intervention lists, benchmarks, reports and progress. No signup needed.',
  alternates: { canonical: 'https://theenglishhub.app/demo/school' },
  keywords: [
    'AI English platform demo',
    'school English department dashboard demo',
    'English department analytics demo',
    'GCSE English platform schools demo',
    'IGCSE English platform demo',
  ],
  openGraph: {
    title: 'School portal demo - The English Hub',
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
        alt: 'The English Hub - interactive school portal demo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'School portal demo - The English Hub',
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
      {/* THE SoftwareApplication NODE MOVED TO page.tsx ON 20 SEPTEMBER 2026.
          It hard-codes url="https://theenglishhub.app/demo/school", and a layout
          wraps every descendant, so all 15 URLs under /demo/school declared
          themselves to be that one page. Fourteen of them are in the sitemap.
          Same rule as the section hubs: a node naming one URL is mounted from
          that URL's own page. The breadcrumb below stays - a shortened trail is
          a weaker claim, not a false identity. */}
      <DemoSchoolLayoutClient>{children}</DemoSchoolLayoutClient>
    </>
  )
}
