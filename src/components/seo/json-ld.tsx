export function WebsiteJsonLd() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    name: 'The English Hub',
    url: 'https://theenglishhub.app',
    description: 'Professional KS3, GCSE, and IGCSE English tutoring platform with structured courses, exam-style practice, and AI-powered feedback.',
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
        name: 'Monthly Plan',
        price: '9.99',
        priceCurrency: 'GBP',
        availability: 'https://schema.org/InStock',
        priceValidUntil: '2027-01-01',
      },
      {
        '@type': 'Offer',
        name: 'Annual Plan',
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
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}

export function CourseJsonLd({ name, description, provider }: { name: string; description: string; provider?: string }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name,
    description,
    provider: {
      '@type': 'Organization',
      name: provider || 'The English Hub',
      url: 'https://theenglishhub.app',
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}

export function BreadcrumbJsonLd({ items }: { items: { name: string; url: string }[] }) {
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
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}

export function FAQPageJsonLd({ faqs }: { faqs: { question: string; answer: string }[] }) {
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
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}
