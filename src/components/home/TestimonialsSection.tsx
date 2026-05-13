'use client'

import { Card } from '@/components/ui/card'
import { Quote, Star } from 'lucide-react'
import { useT } from '@/lib/i18n/use-t'

export default function TestimonialsSection() {
  const t = useT()

  const testimonials = [
    {
      quote: t('home.testimonials.sophie.quote'),
      name: t('home.testimonials.sophie.name'),
      role: t('home.testimonials.sophie.role'),
    },
    {
      quote: t('home.testimonials.mark.quote'),
      name: t('home.testimonials.mark.name'),
      role: t('home.testimonials.mark.role'),
    },
    {
      quote: t('home.testimonials.james.quote'),
      name: t('home.testimonials.james.name'),
      role: t('home.testimonials.james.role'),
    },
    {
      quote: t('home.testimonials.patterson.quote'),
      name: t('home.testimonials.patterson.name'),
      role: t('home.testimonials.patterson.role'),
    },
    {
      quote: t('home.testimonials.priya.quote'),
      name: t('home.testimonials.priya.name'),
      role: t('home.testimonials.priya.role'),
    },
    {
      quote: t('home.testimonials.davies.quote'),
      name: t('home.testimonials.davies.name'),
      role: t('home.testimonials.davies.role'),
    },
  ]

  return (
    <section className="py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-foreground">{t('home.testimonials.h2')}</h2>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
          {testimonials.map((tm) => (
            <Card key={tm.name} className="p-8 flex flex-col border-border/40">
              <Quote className="w-7 h-7 text-primary/25 mb-4" />
              <p className="text-foreground leading-relaxed flex-1">&ldquo;{tm.quote}&rdquo;</p>
              <div className="flex items-center gap-1.5 mt-6 mb-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-clay-600 fill-amber-400" />
                ))}
              </div>
              <p className="text-sm font-bold tracking-tight text-foreground">{tm.name}</p>
              <p className="text-xs text-muted-foreground">{tm.role}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
