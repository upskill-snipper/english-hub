/**
 * SchoolTestimonials
 *
 * Audit remediation (I7 / Claims Policy §1, 2026-05-19): the previous
 * implementation hard-coded fabricated named testimonials ("Dr. Sarah
 * Mitchell", "Al Rayyan International School", etc.) and a "Trusted by
 * Schools" banner. Per the anti-hallucination contract, invented
 * testimonials/social proof must never ship — even from a component
 * that is not currently mounted. Testimonials must be verified,
 * attributable, and used only with explicit consent.
 *
 * Until genuine, consented school testimonials exist this component
 * renders nothing. Populate `testimonials` ONLY with real, attributable,
 * consented quotes (then the section renders automatically).
 */

import { Star, Quote } from 'lucide-react'

interface Testimonial {
  name: string
  role: string
  quote: string
  badge: string
  stars: number
}

// Intentionally empty — no fabricated social proof. See header note.
const testimonials: Testimonial[] = []

function StarRow({ count }: { count: number }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="h-4 w-4 fill-amber-400 text-clay-600" aria-hidden="true" />
      ))}
    </div>
  )
}

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="flex flex-col rounded-2xl border border-slate-700/60 bg-slate-800/50 p-7 shadow-lg shadow-black/20 transition-colors duration-200 hover:border-slate-600/80 hover:bg-slate-800/70">
      <div className="mb-5 flex items-center justify-between gap-3">
        <span className="inline-block rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-emerald-400">
          {testimonial.badge}
        </span>
        <StarRow count={testimonial.stars} />
      </div>
      <div className="relative mb-6 flex-1">
        <Quote className="absolute -left-1 -top-1 h-8 w-8 text-emerald-500/25" aria-hidden="true" />
        <blockquote className="relative pl-6 text-slate-300 text-sm leading-relaxed">
          {testimonial.quote}
        </blockquote>
      </div>
      <div className="border-t border-slate-700/50 pt-5">
        <p className="text-sm font-semibold text-white">{testimonial.name}</p>
        <p className="mt-0.5 text-xs text-slate-400">{testimonial.role}</p>
      </div>
    </div>
  )
}

export function SchoolTestimonials() {
  // No verified, consented testimonials yet — render nothing rather than
  // ship fabricated social proof (audit I7 / Claims Policy §1).
  if (testimonials.length === 0) return null

  return (
    <section className="w-full py-12 px-4">
      <div className="mx-auto mb-10 max-w-3xl text-center">
        <h2 className="mb-3 text-3xl font-bold text-white">What school leaders say</h2>
      </div>
      <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
        {testimonials.map((t) => (
          <TestimonialCard key={t.name} testimonial={t} />
        ))}
      </div>
    </section>
  )
}
