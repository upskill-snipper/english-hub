import Link from 'next/link'
import { ArrowRight, Mail } from 'lucide-react'
import { FAQ_SECTIONS, FAQ_JSON_LD_DATA } from './faq-data'

/**
 * /faqs — Server-rendered FAQs for SEO + rich results.
 *
 * Every question and answer is present in the initial HTML (no JS required
 * to read answers). Expand / collapse is handled by the native <details>
 * element, so crawlers and users with JS disabled still see everything.
 *
 * The page also emits inline FAQPage JSON-LD (in addition to the layout's
 * <FAQPageJsonLd /> helper) so the structured data travels with the page
 * document itself — belt and braces for rich-result eligibility.
 */
export default function FaqsPage() {
  const ldJson = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQ_JSON_LD_DATA.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.answer,
      },
    })),
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      {/* Inline FAQPage JSON-LD — keeps structured data attached to the page document. */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ldJson) }}
      />

      {/* Header */}
      <header className="text-center">
        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Frequently asked questions
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Everything you need to know about The English Hub — GCSE and IGCSE English, AI marking,
          school licences, safeguarding, and more. For anything not covered here, visit our{' '}
          <Link href="/help" className="text-primary underline hover:text-primary/80">
            Help Centre
          </Link>
          .
        </p>
      </header>

      {/* Section navigation (anchor links — no JS needed) */}
      <nav aria-label="FAQ sections" className="mt-8 flex flex-wrap justify-center gap-2">
        {FAQ_SECTIONS.map((section) => (
          <a
            key={section.id}
            href={`#${section.id}`}
            className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:border-primary/50 hover:text-foreground"
          >
            {section.title}
          </a>
        ))}
      </nav>

      {/* FAQ sections */}
      <div className="mt-10 space-y-8">
        {FAQ_SECTIONS.map((section) => (
          <section
            key={section.id}
            id={section.id}
            className="scroll-mt-20 rounded-xl border border-border bg-card p-6"
          >
            <h2 className="mb-4 text-lg font-semibold text-foreground">{section.title}</h2>

            <div className="divide-y divide-border">
              {section.items.map((item) => (
                <details
                  key={item.question}
                  className="group border-border py-4 [&:first-child]:pt-0 [&:last-child]:pb-0"
                >
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-4 text-sm font-semibold text-foreground transition-colors hover:text-primary [&::-webkit-details-marker]:hidden">
                    <span>{item.question}</span>
                    <span
                      aria-hidden="true"
                      className="shrink-0 text-muted-foreground transition-transform group-open:rotate-45"
                    >
                      +
                    </span>
                  </summary>
                  <div className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {item.answer}
                  </div>
                </details>
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* Contact CTA */}
      <div className="mt-12 rounded-xl border border-border bg-card p-8 text-center">
        <Mail className="mx-auto h-8 w-8 text-primary" />
        <h2 className="mt-4 text-xl font-semibold text-foreground">
          Can&apos;t find what you&apos;re looking for?
        </h2>
        <p className="mt-2 text-muted-foreground">
          Our team is happy to help with any questions not covered here.
        </p>
        <div className="mt-4 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <Link
            href="/help"
            className="inline-flex items-center gap-2 rounded-lg border border-border bg-background px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-muted"
          >
            Visit Help Centre
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/help/contact"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Contact Support
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  )
}
