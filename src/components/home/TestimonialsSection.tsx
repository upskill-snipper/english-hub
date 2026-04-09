'use client'

import { Card } from '@/components/ui/card'
import { Quote, Star } from 'lucide-react'

const testimonials = [
  {
    quote: 'I went from a Grade 4 to a 7 in six months. The structured courses and model answers made everything click.',
    name: 'Sophie T.',
    role: 'Year 11 — AQA',
  },
  {
    quote: "My daughter's confidence has completely changed. She actually wants to revise now and her mock results have gone up two grades.",
    name: 'Mark H.',
    role: 'Parent',
  },
  {
    quote: 'The AI essay feedback is like having a tutor available 24/7. It spotted weaknesses my teacher missed.',
    name: 'James R.',
    role: 'Year 11 — Edexcel',
  },
  {
    quote: 'As a Head of English, the analytics dashboard alone saves me hours each week. We can track every student across all year groups.',
    name: 'Mrs Patterson',
    role: 'Head of English',
  },
  {
    quote: 'The mock exams with grade boundaries are exactly like the real thing. I felt so prepared walking into my actual exam.',
    name: 'Priya K.',
    role: 'Year 11 — OCR',
  },
  {
    quote: 'Finally an English resource that covers all the boards properly. The lesson builder has halved my planning time.',
    name: 'Mr Davies',
    role: 'English Teacher',
  },
]

export default function TestimonialsSection() {
  return (
    <section className="py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-foreground">
            What Our Students Say
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
          {testimonials.map((t) => (
            <Card key={t.name} className="p-8 flex flex-col border-border/40">
              <Quote className="w-7 h-7 text-primary/25 mb-4" />
              <p className="text-foreground leading-relaxed flex-1">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center gap-1.5 mt-6 mb-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 text-amber-400 fill-amber-400"
                  />
                ))}
              </div>
              <p className="text-sm font-bold tracking-tight text-foreground">
                {t.name}
              </p>
              <p className="text-xs text-muted-foreground">{t.role}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
