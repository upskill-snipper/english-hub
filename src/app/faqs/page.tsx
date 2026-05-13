import Link from 'next/link'
import { ArrowRight, Mail } from 'lucide-react'
import { tMany } from '@/lib/i18n/t'
import { FAQ_JSON_LD_DATA } from './faq-data'

/**
 * /faqs — Server-rendered FAQs for SEO + rich results.
 *
 * Every question and answer is present in the initial HTML (no JS required
 * to read answers). Expand / collapse is handled by the native <details>
 * element, so crawlers and users with JS disabled still see everything.
 *
 * The page also emits inline FAQPage JSON-LD (in addition to the layout's
 * <FAQPageJsonLd /> helper) so the structured data travels with the page
 * document itself — belt and braces for rich-result eligibility. The
 * inline JSON-LD always uses the canonical English copy from faq-data.ts
 * so the structured-data feed stays stable across locales.
 */
export default async function FaqsPage() {
  const keys = [
    'faqs.title',
    'faqs.intro_lead',
    'faqs.intro_help_link',
    'faqs.sections_aria',
    'faqs.cant_find_h2',
    'faqs.cant_find_body',
    'faqs.visit_help_cta',
    'faqs.contact_support_cta',
    'faqs.sec.general.title',
    'faqs.sec.pricing.title',
    'faqs.sec.courses.title',
    'faqs.sec.ai.title',
    'faqs.sec.technical.title',
    'faqs.sec.privacy.title',
    'faqs.sec.schools.title',
    // General
    'faqs.g1.q',
    'faqs.g1.a',
    'faqs.g2.q',
    'faqs.g2.a',
    'faqs.g3.q',
    'faqs.g3.a',
    'faqs.g4.q',
    'faqs.g4.a',
    'faqs.g5.q',
    'faqs.g5.a',
    'faqs.g6.q',
    'faqs.g6.a',
    'faqs.g7.q',
    'faqs.g7.a',
    // Pricing
    'faqs.p1.q',
    'help.ab.q1.a', // reuse pricing answer
    'faqs.p2.q',
    'faqs.p2.a',
    'faqs.p3.q',
    'faqs.p3.a',
    'faqs.p4.q',
    'faqs.p4.a',
    'faqs.p5.q',
    'faqs.p5.a',
    'faqs.p6.q',
    'faqs.p6.a',
    // Courses
    'faqs.c1.q',
    'faqs.c1.a',
    'faqs.c2.q',
    'faqs.c2.a',
    'faqs.c3.q',
    'faqs.c3.a',
    'faqs.c4.q',
    'faqs.c4.a',
    'faqs.c5.q',
    'faqs.c5.a',
    // AI
    'faqs.a1.q',
    'faqs.a1.a',
    'faqs.a2.q',
    'faqs.a2.a',
    'faqs.a3.q',
    'faqs.a3.a',
    // Technical
    'faqs.t1.q',
    'faqs.t1.a',
    'faqs.t2.q',
    'faqs.t2.a',
    'faqs.t3.q',
    'faqs.t3.a',
    'faqs.t4.q',
    'faqs.t4.a',
    'faqs.t5.q',
    'faqs.t5.a',
    // Privacy
    'faqs.pr1.q',
    'faqs.pr1.a',
    'faqs.pr2.q',
    'faqs.pr2.a',
    'faqs.pr3.q',
    'faqs.pr3.a',
    'faqs.pr4.q',
    'faqs.pr4.a',
    'faqs.pr5.q',
    'faqs.pr5.a',
    // Schools
    'faqs.s1.q',
    'help.st.q1.a', // reuse school licence answer
    'faqs.s2.q',
    'faqs.s2.a',
    'faqs.s3.q',
    'help.st.q1.a', // reuse Founding Schools answer
    'faqs.s4.q',
    'faqs.s4.a',
    'faqs.s5.q',
    'faqs.s5.a',
    'faqs.s6.q',
    'faqs.s6.a',
  ]

  const v = await tMany(keys)
  let i = 0
  const next = () => v[i++]

  const title = next()
  const introLead = next()
  const introHelpLink = next()
  const sectionsAria = next()
  const cantFindH2 = next()
  const cantFindBody = next()
  const visitHelpCta = next()
  const contactSupportCta = next()
  const secGeneral = next()
  const secPricing = next()
  const secCourses = next()
  const secAi = next()
  const secTechnical = next()
  const secPrivacy = next()
  const secSchools = next()

  const SECTIONS = [
    {
      id: 'general',
      title: secGeneral,
      items: [
        { question: next(), answer: next() },
        { question: next(), answer: next() },
        { question: next(), answer: next() },
        { question: next(), answer: next() },
        { question: next(), answer: next() },
        { question: next(), answer: next() },
        { question: next(), answer: next() },
      ],
    },
    {
      id: 'pricing-billing',
      title: secPricing,
      items: [
        { question: next(), answer: next() },
        { question: next(), answer: next() },
        { question: next(), answer: next() },
        { question: next(), answer: next() },
        { question: next(), answer: next() },
        { question: next(), answer: next() },
      ],
    },
    {
      id: 'courses',
      title: secCourses,
      items: [
        { question: next(), answer: next() },
        { question: next(), answer: next() },
        { question: next(), answer: next() },
        { question: next(), answer: next() },
        { question: next(), answer: next() },
      ],
    },
    {
      id: 'ai-marking',
      title: secAi,
      items: [
        { question: next(), answer: next() },
        { question: next(), answer: next() },
        { question: next(), answer: next() },
      ],
    },
    {
      id: 'technical',
      title: secTechnical,
      items: [
        { question: next(), answer: next() },
        { question: next(), answer: next() },
        { question: next(), answer: next() },
        { question: next(), answer: next() },
        { question: next(), answer: next() },
      ],
    },
    {
      id: 'privacy-safety',
      title: secPrivacy,
      items: [
        { question: next(), answer: next() },
        { question: next(), answer: next() },
        { question: next(), answer: next() },
        { question: next(), answer: next() },
        { question: next(), answer: next() },
      ],
    },
    {
      id: 'schools-teachers',
      title: secSchools,
      items: [
        { question: next(), answer: next() },
        { question: next(), answer: next() },
        { question: next(), answer: next() },
        { question: next(), answer: next() },
        { question: next(), answer: next() },
        { question: next(), answer: next() },
      ],
    },
  ]

  // JSON-LD stays canonical English from faq-data.ts so structured-data
  // feeds remain stable across locales.
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
        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">{title}</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          {introLead}{' '}
          <Link href="/help" className="text-primary underline hover:text-primary/80">
            {introHelpLink}
          </Link>
          .
        </p>
      </header>

      {/* Section navigation (anchor links — no JS needed) */}
      <nav aria-label={sectionsAria} className="mt-8 flex flex-wrap justify-center gap-2">
        {SECTIONS.map((section) => (
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
        {SECTIONS.map((section) => (
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
        <h2 className="mt-4 text-xl font-semibold text-foreground">{cantFindH2}</h2>
        <p className="mt-2 text-muted-foreground">{cantFindBody}</p>
        <div className="mt-4 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <Link
            href="/help"
            className="inline-flex items-center gap-2 rounded-lg border border-border bg-background px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-muted"
          >
            {visitHelpCta}
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/help/contact"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            {contactSupportCta}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  )
}
