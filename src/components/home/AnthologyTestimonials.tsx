'use client'

import { useT } from '@/lib/i18n/use-t'

export default function AnthologyTestimonials() {
  const t = useT()

  const testimonials = [
    {
      quote: t('home.testimonials.sophie.quote'),
      name: t('home.testimonials.sophie.name'),
      role: t('home.testimonials.sophie.role'),
      featured: false,
    },
    {
      quote: t('home.testimonials.james.quote'),
      name: t('home.testimonials.james.name'),
      role: t('home.testimonials.james.role'),
      featured: true,
    },
    {
      quote: t('home.testimonials.patterson.quote'),
      name: t('home.testimonials.patterson.name'),
      role: t('home.testimonials.patterson.role'),
      featured: false,
    },
  ]

  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Section head */}
        <div className="mb-12 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-cream-50">
            {t('home.anth_testimonials.h2')}
          </h2>
        </div>

        {/* 3-col grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((tm) => (
            <div
              key={tm.name}
              className={`rounded-2xl p-8 flex flex-col ${
                tm.featured
                  ? 'bg-clay-400 text-cream-50'
                  : 'bg-cream-100/[0.04] border border-cream-200/10 text-cream-50'
              }`}
            >
              {/* Quote mark */}
              <span
                className={`font-serif text-5xl leading-none mb-3 select-none ${
                  tm.featured ? 'text-cream-50/30' : 'text-cream-200/15'
                }`}
              >
                &ldquo;
              </span>

              {/* Quote text */}
              <p
                className={`font-serif italic text-lg leading-relaxed flex-1 ${
                  tm.featured ? 'text-cream-50/90' : 'text-cream-200/70'
                }`}
              >
                {tm.quote}
              </p>

              {/* Attribution */}
              <div className="mt-6 pt-4 border-t border-current/10">
                <p
                  className={`text-sm font-bold tracking-tight ${
                    tm.featured ? 'text-cream-50' : 'text-cream-100'
                  }`}
                >
                  {tm.name}
                </p>
                <p
                  className={`text-xs mt-0.5 ${
                    tm.featured ? 'text-cream-100/60' : 'text-cream-200/40'
                  }`}
                >
                  {tm.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
