import type { Metadata } from 'next'
import { headers } from 'next/headers'

export const metadata: Metadata = {
  // 2026-06-08 — SEO audit fix. "Contact Us" (10 chars) was too short
  // and entity-blind. Now contains the brand + primary use cases.
  title: 'Contact - support, schools, partnerships',
  description:
    'Reach The English Hub about your account, billing or a technical problem, or with a school enquiry, partnership or feedback. We reply within two business days.',
  alternates: { canonical: 'https://theenglishhub.app/contact' },
  keywords: [
    'contact The English Hub',
    'English Hub support',
    'school enquiries English platform',
    'GCSE English platform contact',
    'Upskill Energy Limited contact',
  ],
  openGraph: {
    title: 'Contact - support, schools, partnerships',
    description:
      'Get in touch with The English Hub. Support, school enquiries, partnerships and feedback - we reply within one UK working day.',
    url: 'https://theenglishhub.app/contact',
    type: 'website',
    siteName: 'The English Hub',
    images: [
      {
        url: '/api/og?title=Contact+-+support%2C+schools%2C+partnerships',
        width: 1200,
        height: 630,
        alt: 'Contact - support, schools, partnerships',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact - support, schools, partnerships',
    description:
      'Support, school enquiries, partnerships and feedback. We reply within one UK working day.',
  },
}

export default async function Layout({ children }: { children: React.ReactNode }) {
  const nonce = (await headers()).get('x-nonce') ?? undefined

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    // 2026-08-23: without this @id, /contact declared a SECOND, competing
    // Organization entity for the same brand, so the contactPoint attached to
    // an orphan node instead of the canonical organisation that
    // WebsiteJsonLd emits site-wide. Matching @id merges the two.
    '@id': 'https://theenglishhub.app/#organisation',
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
