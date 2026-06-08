import type { Metadata } from 'next'
import { headers } from 'next/headers'

export const metadata: Metadata = {
  // 2026-06-08 — SEO audit fix. "Contact Us" (10 chars) was too short
  // and entity-blind. Now contains the brand + primary use cases.
  title: 'Contact The English Hub — support, school enquiries, partnerships',
  description:
    'Get in touch with The English Hub. Reach our support team for help with courses, accounts, billing, school enquiries, partnerships, or feedback. We reply within one UK working day.',
  alternates: { canonical: 'https://theenglishhub.app/contact' },
  keywords: [
    'contact The English Hub',
    'English Hub support',
    'school enquiries English platform',
    'GCSE English platform contact',
    'Upskill Energy Limited contact',
  ],
  openGraph: {
    title: 'Contact The English Hub — support, school enquiries, partnerships',
    description:
      'Get in touch with The English Hub. Support, school enquiries, partnerships and feedback — we reply within one UK working day.',
    url: 'https://theenglishhub.app/contact',
    type: 'website',
    siteName: 'The English Hub',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact The English Hub — support, school enquiries, partnerships',
    description:
      'Support, school enquiries, partnerships and feedback. We reply within one UK working day.',
  },
}

export default async function Layout({ children }: { children: React.ReactNode }) {
  const nonce = (await headers()).get('x-nonce') ?? undefined

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'The English Hub',
    url: 'https://theenglishhub.app',
    contactPoint: [
      {
        '@type': 'ContactPoint',
        contactType: 'customer support',
        email: 'info@Upskillenergy.com',
        availableLanguage: ['en'],
        areaServed: 'GB',
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        nonce={nonce}
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  )
}
