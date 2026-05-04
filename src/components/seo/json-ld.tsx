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

// Site-wide constants used by the structured-data builders below. The publisher
// logo falls back to the dynamic OG endpoint because /public/logo.png is not
// guaranteed to exist yet — once it lands, callers can override `image` per
// invocation and the schema continues to validate.
const SITE_URL = 'https://theenglishhub.app'
const SITE_NAME = 'The English Hub'
const PUBLISHER_LOGO_URL = `${SITE_URL}/api/og?title=${encodeURIComponent(SITE_NAME)}`

type ArticleAuthor = {
  '@type': 'Person' | 'Organization'
  name: string
  url?: string
}

type ArticlePublisher = {
  '@type': 'Organization'
  name: string
  url: string
  logo: { '@type': 'ImageObject'; url: string }
}

/**
 * Article schema for blog posts, comparison pages, and long-form guides.
 *
 * @example
 * <ArticleJsonLd
 *   headline="GCSE English Language Paper 1: A Complete Walkthrough"
 *   description="Section-by-section guidance with model answers and timing tips."
 *   datePublished="2026-06-12"
 *   url="https://theenglishhub.app/blog/gcse-english-paper-1"
 * />
 */
export function ArticleJsonLd({
  headline,
  description,
  image,
  datePublished,
  dateModified,
  authorName,
  authorUrl,
  url,
  nonce,
}: {
  headline: string
  description: string
  /** Absolute URL or path of the cover image. Falls back to /api/og?title=... if undefined. */
  image?: string
  /** ISO 8601, e.g. "2026-06-12" */
  datePublished: string
  /** ISO 8601, optional. */
  dateModified?: string
  /** Author's display name. Defaults to "The English Hub" if undefined. */
  authorName?: string
  authorUrl?: string
  /** Canonical URL of the article. */
  url: string
  nonce?: string
}) {
  const resolvedImage = image ?? `${SITE_URL}/api/og?title=${encodeURIComponent(headline)}`
  const resolvedAuthorName = authorName ?? SITE_NAME
  // If no explicit author was supplied we fall back to the site itself, which
  // schema.org models as an Organization rather than a Person.
  const author: ArticleAuthor = {
    '@type': authorName ? 'Person' : 'Organization',
    name: resolvedAuthorName,
  }
  if (authorUrl) author.url = authorUrl

  const publisher: ArticlePublisher = {
    '@type': 'Organization',
    name: SITE_NAME,
    url: SITE_URL,
    logo: { '@type': 'ImageObject', url: PUBLISHER_LOGO_URL },
  }

  const jsonLd: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline,
    description,
    image: resolvedImage,
    datePublished,
    author,
    publisher,
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
  }
  if (dateModified) jsonLd.dateModified = dateModified

  return (
    <script
      type="application/ld+json"
      nonce={nonce}
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}

type HowToStepInput = {
  name: string
  text: string
  url?: string
  image?: string
}

type HowToStepSchema = {
  '@type': 'HowToStep'
  position: number
  name: string
  text: string
  url?: string
  image?: string
}

/**
 * HowTo schema for revision-technique pages, exam-prep guides, and "How to" posts.
 *
 * @example
 * <HowToJsonLd
 *   name="How to revise a Shakespeare set text in 4 weeks"
 *   description="A week-by-week revision plan covering plot, themes, quotations and exam practice."
 *   totalTime="PT4W"
 *   steps={[
 *     { name: 'Re-read the play', text: 'Read each act once with a focus on plot beats.' },
 *     { name: 'Map themes', text: 'Build a quotation bank by theme and character.' },
 *   ]}
 * />
 */
export function HowToJsonLd({
  name,
  description,
  totalTime,
  estimatedCost,
  steps,
  url,
  nonce,
}: {
  name: string
  description: string
  /** ISO 8601 duration, e.g. "PT30M" for 30 minutes, "PT2H" for 2 hours. Optional. */
  totalTime?: string
  /** Optional cost — for free guides, omit. */
  estimatedCost?: { currency: string; value: string }
  /** Each step has a name, text, and optionally a URL/image. */
  steps: { name: string; text: string; url?: string; image?: string }[]
  url?: string
  nonce?: string
}) {
  const stepSchemas: HowToStepSchema[] = steps.map((step: HowToStepInput, index: number) => {
    const stepSchema: HowToStepSchema = {
      '@type': 'HowToStep',
      position: index + 1,
      name: step.name,
      text: step.text,
    }
    if (step.url) stepSchema.url = step.url
    if (step.image) stepSchema.image = step.image
    return stepSchema
  })

  const jsonLd: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name,
    description,
    step: stepSchemas,
  }
  if (totalTime) jsonLd.totalTime = totalTime
  if (estimatedCost) {
    jsonLd.estimatedCost = {
      '@type': 'MonetaryAmount',
      currency: estimatedCost.currency,
      value: estimatedCost.value,
    }
  }
  if (url) jsonLd.url = url

  return (
    <script
      type="application/ld+json"
      nonce={nonce}
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}

/**
 * LearningResource schema for set-text study guides, anthology poem pages,
 * and lesson-plan PDFs.
 *
 * @example
 * <LearningResourceJsonLd
 *   name="Macbeth: Themes, Characters and Key Quotations"
 *   description="A GCSE-aligned study guide covering ambition, fate, and guilt."
 *   educationalLevel="GCSE"
 *   learningResourceType="Study guide"
 *   about="Macbeth"
 *   url="https://theenglishhub.app/guides/macbeth"
 * />
 */
export function LearningResourceJsonLd({
  name,
  description,
  educationalLevel,
  learningResourceType,
  inLanguage,
  url,
  about,
  audienceRole,
  provider,
  isAccessibleForFree,
  nonce,
}: {
  name: string
  description: string
  /** e.g. "GCSE", "IGCSE", "A-Level", "KS3" */
  educationalLevel?: string
  /** e.g. "Study guide", "Lesson plan", "Quiz", "Worksheet" */
  learningResourceType?: string
  /** Defaults to "en-GB" if undefined. */
  inLanguage?: string
  url?: string
  /** What the resource is about (e.g. "Macbeth", "Power and Conflict poetry") */
  about?: string
  /** Defaults to "student" if undefined. Other values: "teacher", "parent". */
  audienceRole?: 'student' | 'teacher' | 'parent'
  provider?: string
  /** Defaults to true. */
  isAccessibleForFree?: boolean
  nonce?: string
}) {
  const resolvedFree = isAccessibleForFree ?? true
  const jsonLd: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'LearningResource',
    name,
    description,
    inLanguage: inLanguage ?? 'en-GB',
    audience: {
      '@type': 'EducationalAudience',
      educationalRole: audienceRole ?? 'student',
    },
    provider: {
      '@type': 'EducationalOrganization',
      name: provider ?? SITE_NAME,
      url: SITE_URL,
    },
    isAccessibleForFree: resolvedFree,
  }
  if (educationalLevel) jsonLd.educationalLevel = educationalLevel
  if (learningResourceType) jsonLd.learningResourceType = learningResourceType
  if (about) jsonLd.about = { '@type': 'Thing', name: about }
  if (url) jsonLd.url = url

  return (
    <script
      type="application/ld+json"
      nonce={nonce}
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}
