/**
 * Server-only WebsiteJsonLd - the organisation-level JSON-LD for the
 * homepage. Lives in its own file because it imports `tMany` from
 * `@/lib/i18n/t`, which transitively imports `next/headers`. If
 * WebsiteJsonLd lived in the main `json-ld.tsx` next to the locale-
 * agnostic helpers (Breadcrumb, Course, FAQ, etc.), every client
 * component that imports any of those helpers would pull `next/headers`
 * into its bundle and Next.js 15.5+ refuses to compile the resulting
 * module graph ("You're importing a component that needs 'next/headers'.
 * That only works in a Server Component which is not supported in the
 * pages/ directory.").
 *
 * Keeping WebsiteJsonLd separate means client components can safely
 * import `BreadcrumbJsonLd` / `CourseJsonLd` / etc. from `./json-ld`
 * without dragging a server-only dependency along.
 */
import { tMany } from '@/lib/i18n/t'

export async function WebsiteJsonLd({ nonce }: { nonce?: string } = {}) {
  const [siteDescription, studentMonthly, studentAnnual, teacherMonthly, teacherAnnual] =
    await tMany([
      'seo.site.description',
      'seo.offer.student_monthly',
      'seo.offer.student_annual',
      'seo.offer.teacher_monthly',
      'seo.offer.teacher_annual',
    ])

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    name: 'The English Hub',
    url: 'https://theenglishhub.app',
    description: siteDescription,
    areaServed: { '@type': 'Country', name: 'United Kingdom' },
    audience: {
      '@type': 'EducationalAudience',
      educationalRole: 'student',
      suggestedMinAge: 14,
      suggestedMaxAge: 18,
    },
    offers: [
      {
        '@type': 'Offer',
        name: studentMonthly,
        price: '3.49',
        priceCurrency: 'GBP',
        availability: 'https://schema.org/InStock',
        priceValidUntil: '2028-01-01',
      },
      {
        '@type': 'Offer',
        name: studentAnnual,
        price: '29.99',
        priceCurrency: 'GBP',
        availability: 'https://schema.org/InStock',
        priceValidUntil: '2028-01-01',
      },
      {
        '@type': 'Offer',
        name: teacherMonthly,
        price: '7.99',
        priceCurrency: 'GBP',
        availability: 'https://schema.org/InStock',
        priceValidUntil: '2028-01-01',
      },
      {
        '@type': 'Offer',
        name: teacherAnnual,
        price: '67.99',
        priceCurrency: 'GBP',
        availability: 'https://schema.org/InStock',
        priceValidUntil: '2028-01-01',
      },
    ],
  }

  return (
    <script
      type="application/ld+json"
      nonce={nonce}
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}
