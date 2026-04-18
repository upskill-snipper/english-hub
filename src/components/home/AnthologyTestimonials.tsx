'use client'

const testimonials = [
  {
    quote:
      'I went from a Grade 4 to a 7 in six months. The structured courses and model answers made everything click.',
    name: 'Sophie T.',
    role: 'Year 11 — AQA',
    featured: false,
  },
  {
    quote:
      'The AI essay feedback is like having a tutor available 24/7. It spotted weaknesses my teacher missed.',
    name: 'James R.',
    role: 'Year 11 — Edexcel',
    featured: true,
  },
  {
    quote:
      'As a Head of English, the analytics dashboard alone saves me hours each week. We can track every student across all year groups.',
    name: 'Mrs Patterson',
    role: 'Head of English',
    featured: false,
  },
]

export default function AnthologyTestimonials() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Section head */}
        <div className="mb-12 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-cream-50">
            What they&rsquo;re saying.
          </h2>
        </div>

        {/* 3-col grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className={`rounded-2xl p-8 flex flex-col ${
                t.featured
                  ? 'bg-clay-400 text-cream-50'
                  : 'bg-cream-100/[0.04] border border-cream-200/10 text-cream-50'
              }`}
            >
              {/* Quote mark */}
              <span
                className={`font-serif text-5xl leading-none mb-3 select-none ${
                  t.featured ? 'text-cream-50/30' : 'text-cream-200/15'
                }`}
              >
                &ldquo;
              </span>

              {/* Quote text */}
              <p className={`font-serif italic text-lg leading-relaxed flex-1 ${
                t.featured ? 'text-cream-50/90' : 'text-cream-200/70'
              }`}>
                {t.quote}
              </p>

              {/* Attribution */}
              <div className="mt-6 pt-4 border-t border-current/10">
                <p className={`text-sm font-bold tracking-tight ${
                  t.featured ? 'text-cream-50' : 'text-cream-100'
                }`}>
                  {t.name}
                </p>
                <p className={`text-xs mt-0.5 ${
                  t.featured ? 'text-cream-100/60' : 'text-cream-200/40'
                }`}>
                  {t.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
