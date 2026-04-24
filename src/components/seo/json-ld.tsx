// Every exported component here renders a <script type="application/ld+json">
// tag via dangerouslySetInnerHTML. Under the nonce-based CSP (P1 #6 follow-up),
// every inline <script> must carry the per-request nonce or the browser drops
// it. Callers pass it in via `nonce` — use `headers().get('x-nonce')` from
// server components, or leave it undefined for static generation (the script
// is still serialised; when served live, middleware sets the nonce in the
// Content-Security-Policy header so Next's own runtime + these JSON-LD tags
// all carry the same value).

export function WebsiteJsonLd({ nonce }: { nonce?: string } = {}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    name: 'The English Hub',
    url: 'https://theenglishhub.app',
    description:
      'Professional KS3, GCSE, and IGCSE English tutoring platform with structured courses, exam-style practice, and AI-powered feedback.',
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
        name: 'Student Monthly Plan',
        price: '3.49',
        priceCurrency: 'GBP',
        availability: 'https://schema.org/InStock',
        priceValidUntil: '2027-01-01',
      },
      {
        '@type': 'Offer',
        name: 'Student Annual Plan',
        price: '29.99',
        priceCurrency: 'GBP',
        availability: 'https://schema.org/InStock',
        priceValidUntil: '2027-01-01',
      },
      {
        '@type': 'Offer',
        name: 'Teacher Monthly Plan',
        price: '7.99',
        priceCurrency: 'GBP',
        availability: 'https://schema.org/InStock',
        priceValidUntil: '2027-01-01',
      },
      {
        '@type': 'Offer',
        name: 'Teacher Annual Plan',
        price: '67.99',
        priceCurrency: 'GBP',
        availability: 'https://schema.org/InStock',
        priceValidUntil: '2027-01-01',
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

export function CourseJsonLd({
  name,
  description,
  provider,
  educationalLevel,
  timeRequired,
  url,
  nonce,
}: {
  name: string
  description: string
  provider?: string
  /** e.g. "GCSE", "IGCSE", "A-Level", "KS3" */
  educationalLevel?: string
  /** ISO 8601 duration, e.g. "PT12H" */
  timeRequired?: string
  /** Canonical URL of the course page */
  url?: string
  nonce?: string
}) {
  const jsonLd: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name,
    description,
    provider: {
      '@type': 'EducationalOrganization',
      name: provider || 'The English Hub',
      sameAs: 'https://theenglishhub.app',
      url: 'https://theenglishhub.app',
    },
  }
  if (educationalLevel) jsonLd.educationalLevel = educationalLevel
  if (timeRequired) jsonLd.timeRequired = timeRequired
  if (url) jsonLd.url = url

  // Review + AggregateRating — gated behind NEXT_PUBLIC_EDTECH_IMPACT_LIVE
  // so it only appears once the founder has verified external review data is
  // real (EdTech Impact, Trustpilot etc.). TODO(founder): flip the env var
  // once the first independent reviews are syndicated.
  if (process.env.NEXT_PUBLIC_EDTECH_IMPACT_LIVE === 'true') {
    jsonLd.aggregateRating = {
      '@type': 'AggregateRating',
      ratingValue: '4.8', // TODO(founder): pull live rating from EdTech Impact
      reviewCount: '0', // TODO(founder): pull live review count
      bestRating: '5',
      worstRating: '1',
    }
  }

  return (
    <script
      type="application/ld+json"
      nonce={nonce}
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}

export function BreadcrumbJsonLd({
  items,
  nonce,
}: {
  items: { name: string; url: string }[]
  nonce?: string
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }

  return (
    <script
      type="application/ld+json"
      nonce={nonce}
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}

export function FAQPageJsonLd({
  faqs,
  nonce,
}: {
  faqs: { question: string; answer: string }[]
  nonce?: string
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }

  return (
    <script
      type="application/ld+json"
      nonce={nonce}
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}
