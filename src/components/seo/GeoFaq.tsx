import { headers } from 'next/headers'
import { FAQPageJsonLd } from '@/components/seo/json-ld'

export type GeoFaqItem = { question: string; answer: string }

/**
 * GEO/SEO FAQ block. Renders BOTH:
 *  (a) visible question-shaped <h2>/<h3> headings + answers - feeds the
 *      "question-shaped headings" GEO signal, and
 *  (b) FAQPage JSON-LD - feeds the structured-data signal.
 *
 * Server component (async, reads the CSP nonce itself so callers stay
 * one-liners). Pass plain already-resolved strings.
 *
 * IMPORTANT: do NOT add this to a page/route that already emits
 * <FAQPageJsonLd> (e.g. /for-teachers, /for-schools, /pricing,
 * /faqs/*, /for-parents, /for-students, the gcc/qatar/international
 * IGCSE landing pages) - two FAQPage blocks on one URL is duplicate
 * structured data and the GEO scorer may discount it.
 *
 * NEVER MOUNT THIS FROM A layout.tsx. Until 19 September 2026 eight
 * layouts did (/revision, /resources, /igcse, /a-level, /courses,
 * /practice, /mock-exams, /games), which put an identical generic FAQ
 * on roughly 663 of 855 indexable URLs. It also broke the rule above
 * from the outside: the five per-text pages under /revision/texts that
 * mount their own on-topic GeoFaq sit inside /revision, so a layout
 * mount and a page mount both fired and each of those URLs rendered
 * two FAQ sections, two FAQPage entities and two elements carrying
 * id="geo-faq-heading". Nothing errored, which is why it survived.
 * The four shared arrays (GCSE_BOARD_FAQS, IGCSE_FAQS, REVISION_FAQS,
 * RESOURCES_FAQS) were deleted with those mounts; they had no other
 * importer. Callers now pass FAQs that are about the page they are on.
 * src/__tests__/no-faq-walls-in-layouts.test.ts fails the build if a
 * layout mount comes back.
 */
export async function GeoFaq({
  faqs,
  heading = 'Frequently asked questions',
}: {
  faqs: GeoFaqItem[]
  heading?: string
}) {
  if (!faqs || faqs.length === 0) return null
  const nonce = (await headers()).get('x-nonce') ?? undefined

  return (
    <section
      aria-labelledby="geo-faq-heading"
      className="rounded-2xl border border-border/60 bg-card p-6 sm:p-8 lg:p-10"
    >
      <h2 id="geo-faq-heading" className="text-heading-lg font-heading text-foreground">
        {heading}
      </h2>

      <div className="mt-6 space-y-6">
        {faqs.map((faq) => (
          <div
            key={faq.question}
            className="border-b border-border/40 pb-6 last:border-0 last:pb-0"
          >
            {/* Question as a heading ending in "?" - the GEO scorer
                matches h2/h3 that are phrased as questions. */}
            <h3 className="text-heading-md font-heading text-foreground">{faq.question}</h3>
            <p className="mt-2 text-body-sm leading-relaxed text-muted-foreground">{faq.answer}</p>
          </div>
        ))}
      </div>

      <FAQPageJsonLd faqs={faqs} nonce={nonce} />
    </section>
  )
}

export default GeoFaq
