import type { Metadata } from 'next'
import { headers } from 'next/headers'
import { SoftwareApplicationJsonLd, BreadcrumbJsonLd } from '@/components/seo/json-ld'
import StudentDemoLayoutClient from './layout-client'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  // 2026-06-08 — SEO + GEO audit wave 2. /demo/student was a pure
  // 'use client' layout with no metadata export, so search engines
  // saw a blank head. The layout-client.tsx file holds the existing
  // sidebar/navigation; this server layout supplies the metadata +
  // structured data wrapper.
  title: 'Student dashboard demo — revision, AI feedback and progress',
  description:
    'Explore the English Hub student dashboard with sample work: revision, AI essay feedback, flashcards, practice quizzes and progress tracking. No signup required.',
  alternates: { canonical: 'https://theenglishhub.app/demo/student' },
  keywords: [
    'GCSE English student demo',
    'IGCSE English revision demo',
    'AI essay feedback student demo',
    'English revision dashboard demo',
    'KS3 English platform demo',
  ],
  openGraph: {
    title: 'Student dashboard demo — The English Hub',
    description:
      'Interactive demo of the English Hub student dashboard: revision, AI essay feedback, flashcards, practice and progress tracking. Synthetic data, no signup.',
    url: 'https://theenglishhub.app/demo/student',
    type: 'website',
    siteName: 'The English Hub',
    images: [
      {
        url: 'https://theenglishhub.app/api/og?title=Student+dashboard+demo&subtitle=Revision%2C+AI+feedback+and+progress',
        width: 1200,
        height: 630,
        alt: 'The English Hub — interactive student dashboard demo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Student dashboard demo — The English Hub',
    description: 'Interactive demo: revision, AI essay feedback, flashcards, practice. No signup.',
    images: [
      'https://theenglishhub.app/api/og?title=Student+dashboard+demo&subtitle=Revision%2C+AI+feedback+and+progress',
    ],
  },
}

export default async function StudentDemoLayout({ children }: { children: React.ReactNode }) {
  const nonce = (await headers()).get('x-nonce') ?? undefined
  return (
    <>
      <BreadcrumbJsonLd
        nonce={nonce}
        items={[
          { name: 'Home', url: 'https://theenglishhub.app' },
          { name: 'Demos', url: 'https://theenglishhub.app/demo' },
          { name: 'Student dashboard', url: 'https://theenglishhub.app/demo/student' },
        ]}
      />
      <SoftwareApplicationJsonLd
        nonce={nonce}
        name="The English Hub — student dashboard demo"
        description="Interactive demo of the English Hub student dashboard with sample work: revision, AI essay feedback, flashcards, practice quizzes and progress tracking."
        url="https://theenglishhub.app/demo/student"
        audience="GCSE, IGCSE and KS3 English students"
        screenshot="https://theenglishhub.app/api/og?title=Student+dashboard+demo&subtitle=Revision%2C+AI+feedback+and+progress"
      />
      <StudentDemoLayoutClient>{children}</StudentDemoLayoutClient>
    </>
  )
}
