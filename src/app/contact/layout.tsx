import type { Metadata } from 'next'
import { headers } from 'next/headers'

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Get in touch with The English Hub. Reach our support team for help with courses, accounts, billing, school enquiries, partnerships, or feedback.',
  alternates: { canonical: 'https://theenglishhub.app/contact' },
  openGraph: {
    title: 'Contact Us — The English Hub',
    description:
      'Get in touch with The English Hub. Reach our support team for help with courses, accounts, billing, school enquiries, partnerships, or feedback.',
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
