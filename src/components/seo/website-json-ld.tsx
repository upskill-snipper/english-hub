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
import { PRICING } from '@/constants/pricing'

export async function WebsiteJsonLd({ nonce }: { nonce?: string } = {}) {
  const [siteDescription, studentMonthly, studentAnnual, teacherMonthly, teacherAnnual] =
    await tMany([
      'seo.site.description',
      'seo.offer.student_monthly',
      'seo.offer.student_annual',
      'seo.offer.teacher_monthly',
      'seo.offer.teacher_annual',
    ])

  const ORG_ID = 'https://theenglishhub.app/#organisation'
  const PRICING_URL = 'https://theenglishhub.app/pricing'

  // Offer prices are DERIVED from the canonical PRICING constants, never
  // retyped. Defect fixed 2026-08-23 (SEO structured-data audit): the
  // Teacher Monthly offer was hard-coded to '7.99' while the real price -
  // and the price visibly rendered on /pricing - is PRICING.TEACHER_MONTHLY
  // (£6.99). Structured data that contradicts the visible page is exactly
  // what Google penalises, and £1/month of drift on a children's product is
  // a claims-honesty defect regardless. Deriving from the constant means the
  // JSON-LD can never silently diverge from checkout again.
  //
  // No `priceValidUntil` is emitted. It used to assert '2028-01-01', which
  // was an invented deadline: the 2026-08-18 honesty pass deliberately made
  // the standard-pricing rollover undated (PRICING.PRICE_INCREASE_DATE =
  // 'when the founding period closes'), so no date here can be evidenced.
  const offers = [
    { name: studentMonthly, price: PRICING.STUDENT_MONTHLY },
    { name: studentAnnual, price: PRICING.STUDENT_ANNUAL },
    { name: teacherMonthly, price: PRICING.TEACHER_MONTHLY },
    { name: teacherAnnual, price: PRICING.TEACHER_ANNUAL },
  ].map(({ name, price }) => ({
    '@type': 'Offer',
    name,
    price: price.toFixed(2),
    priceCurrency: 'GBP',
    availability: 'https://schema.org/InStock',
    url: PRICING_URL,
  }))

  const orgJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    '@id': ORG_ID,
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
    // `makesOffer`, not `offers`: schema.org Organization has no `offers`
    // property (that belongs to Product / Service / Event), so the previous
    // markup was invalid and validators dropped the whole branch.
    // `makesOffer` is the Organization-level equivalent.
    makesOffer: offers,
  }

  // WebSite node for GEO / AI answer engines. `publisher` references the
  // organisation node above by @id so the two form one connected graph.
  //
  // No `potentialAction`/SearchAction is emitted: the site has no
  // site-search route (no /search page and no ?q= search param exists),
  // and Google requires the SearchAction target to resolve to a real
  // results URL. No `sameAs` is emitted either: there are no verified
  // brand social-profile URLs in the codebase, and fabricated links risk
  // a structured-data manual action. Add both here once real URLs exist.
  const websiteJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': 'https://theenglishhub.app/#website',
    name: 'The English Hub',
    url: 'https://theenglishhub.app',
    description: siteDescription,
    inLanguage: 'en-GB',
    publisher: { '@id': ORG_ID },
  }

  return (
    <>
      <script
        type="application/ld+json"
        nonce={nonce}
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
      />
      <script
        type="application/ld+json"
        nonce={nonce}
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
      />
    </>
  )
}
