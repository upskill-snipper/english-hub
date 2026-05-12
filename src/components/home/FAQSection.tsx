'use client'

import { useState } from 'react'
import { Card } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import { ChevronDown } from 'lucide-react'
import { useT } from '@/lib/i18n/use-t'

const faqKeys: Array<{ qKey: string; aKey: string }> = [
  { qKey: 'home.faq_full.q_trial', aKey: 'home.faq_full.a_trial' },
  { qKey: 'home.faq_full.q_boards', aKey: 'home.faq_full.a_boards' },
  { qKey: 'home.faq_full.q_ai_feedback', aKey: 'home.faq_full.a_ai_feedback' },
  { qKey: 'home.faq_full.q_youtube', aKey: 'home.faq_full.a_youtube' },
  { qKey: 'home.faq_full.q_cancel', aKey: 'home.faq_full.a_cancel' },
  { qKey: 'home.faq_full.q_teachers', aKey: 'home.faq_full.a_teachers' },
  { qKey: 'home.faq_full.q_phone', aKey: 'home.faq_full.a_phone' },
  { qKey: 'home.faq_full.q_grades', aKey: 'home.faq_full.a_grades' },
]

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  const id = q
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
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
            open ? 'rotate-180' : '',
          )}
        />
      </button>
      <div
        id={panelId}
        role="region"
        aria-labelledby={triggerId}
        className={cn(
          'grid transition-all duration-300',
          open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]',
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
  const t = useT()
  return (
    <section className="py-24 sm:py-32 bg-card/20">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-foreground">{t('home.faq.title')}</h2>
        </div>

        <div className="space-y-3">
          {faqKeys.map((faq) => (
            <FAQItem key={faq.qKey} q={t(faq.qKey)} a={t(faq.aKey)} />
          ))}
        </div>
      </div>
    </section>
  )
}
