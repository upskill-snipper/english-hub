import type { Metadata } from 'next'
import { headers } from 'next/headers'
import { BreadcrumbJsonLd } from '@/components/seo/json-ld'
import TeacherDemoLayoutClient from './layout-client'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  // 2026-06-08 — SEO + GEO audit wave 2. /demo/teacher was a pure
  // 'use client' layout with no metadata export, so search engines
  // saw a blank head. The layout-client.tsx file holds the existing
  // sidebar/navigation; this server layout supplies the metadata +
  // structured data wrapper.
  title: 'Teacher portal demo - AI-assisted marking and class insight',
  description:
    'Walk the teacher portal on synthetic class data: AI-assisted essay feedback, homework, lesson resources, quizzes and class progress. No signup needed.',
  alternates: { canonical: 'https://theenglishhub.app/demo/teacher' },
  keywords: [
    'AI English teacher demo',
    'English teacher dashboard demo',
    'AI essay marking demo',
    'GCSE English teacher software',
    'IGCSE English teacher tools',
  ],
  openGraph: {
    title: 'Teacher portal demo - The English Hub',
    description:
      'Interactive demo of the English Hub teacher portal: AI-assisted essay feedback, class insight, homework setting. Synthetic data, no signup.',
    url: 'https://theenglishhub.app/demo/teacher',
    type: 'website',
    siteName: 'The English Hub',
    images: [
      {
        url: 'https://theenglishhub.app/api/og?title=Teacher+portal+demo&subtitle=AI-assisted+marking+and+class+insight',
        width: 1200,
        height: 630,
        alt: 'The English Hub - interactive teacher portal demo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Teacher portal demo - The English Hub',
    description:
      'Interactive demo: AI-assisted essay feedback, class insight, homework setting. No signup.',
    images: [
      'https://theenglishhub.app/api/og?title=Teacher+portal+demo&subtitle=AI-assisted+marking+and+class+insight',
    ],
  },
}

export default async function TeacherDemoLayout({ children }: { children: React.ReactNode }) {
  const nonce = (await headers()).get('x-nonce') ?? undefined
  return (
    <>
      <BreadcrumbJsonLd
        nonce={nonce}
        items={[
          { name: 'Home', url: 'https://theenglishhub.app' },
          { name: 'Demos', url: 'https://theenglishhub.app/demo' },
          { name: 'Teacher portal', url: 'https://theenglishhub.app/demo/teacher' },
        ]}
      />
      {/* THE SoftwareApplication NODE MOVED TO page.tsx ON 20 SEPTEMBER 2026.
          It named /demo/teacher on all 11 URLs beneath this layout. See
          src/app/demo/school/layout.tsx for the full reasoning. */}
      <TeacherDemoLayoutClient>{children}</TeacherDemoLayoutClient>
    </>
  )
}
