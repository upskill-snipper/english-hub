'use client'

import { useState } from 'react'
import { Card } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    q: 'Is there a free trial?',
    a: 'Yes! Your first month is completely free — no card required. You get full access to all courses, practice questions, flashcards, mock exams, and revision tools. Cancel anytime during the trial and you won\u2019t be charged a penny.',
  },
  {
    q: 'What exam boards do you cover?',
    a: 'We cover AQA GCSE, Edexcel GCSE, Edexcel International GCSE (IGCSE), OCR, and WJEC/Eduqas. Each course is mapped to exactly what your exam board requires so you only study what you need. We also cover KS3 for Years 7-9.',
  },
  {
    q: 'How does the AI essay feedback work?',
    a: 'Submit any essay and receive instant, detailed feedback scored against real GCSE mark schemes. You get an estimated grade band, assessment objective scores, specific strengths with direct quotes, and actionable suggestions to improve — like having a tutor available 24/7.',
  },
  {
    q: 'How is this different from YouTube?',
    a: 'YouTube offers scattered videos with no structure, no feedback, and no progress tracking. The English Hub provides sequenced lessons written by experienced English teachers, exam-style practice with model answers, AI feedback, GCSE 1-9 grade tracking, and certificates.',
  },
  {
    q: 'Can I cancel my subscription?',
    a: "Yes — cancel anytime from your account settings. There are no contracts or hidden fees. You'll keep access until the end of your billing period.",
  },
  {
    q: 'Is there a version for teachers and schools?',
    a: 'Yes! Teachers get an AI lesson builder, student analytics dashboards, AI essay marking, and class management tools. Schools get a whole-school licence with department analytics, bulk user management, and dedicated support. We also have a Founding Schools Programme with preferential pricing for early adopters.',
  },
  {
    q: 'Can I access on my phone?',
    a: 'Absolutely. The English Hub is fully responsive and works perfectly on smartphones, tablets, and desktops. Study wherever suits you best.',
  },
  {
    q: 'What grades does this cover?',
    a: 'All content uses the GCSE 1–9 grading system. Every student gets a Working At Grade, Predicted Grade, and Target Grade so you always know where you stand and what to work on next. For KS3 students, we adapt the tracking to match your year group.',
  },
]

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  const id = q.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
  const triggerId = `faq-trigger-${id}`
  const panelId = `faq-panel-${id}`
  return (
    <Card className="overflow-hidden border-border/40">
      <button
        id={triggerId}
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-controls={panelId}
        className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-accent/30 transition-colors duration-200"
      >
        <span className="font-semibold text-foreground pr-4">{q}</span>
        <ChevronDown
          className={cn(
            'w-5 h-5 text-muted-foreground shrink-0 transition-transform duration-300',
            open ? 'rotate-180' : ''
          )}
        />
      </button>
      <div
        id={panelId}
        role="region"
        aria-labelledby={triggerId}
        className={cn(
          'grid transition-all duration-300',
          open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
        )}
      >
        <div className="overflow-hidden">
          <p className="px-6 pb-5 text-muted-foreground leading-relaxed">{a}</p>
        </div>
      </div>
    </Card>
  )
}

export default function FAQSection() {
  return (
    <section className="py-24 sm:py-32 bg-card/20">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-foreground">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq) => (
            <FAQItem key={faq.q} q={faq.q} a={faq.a} />
          ))}
        </div>
      </div>
    </section>
  )
}
