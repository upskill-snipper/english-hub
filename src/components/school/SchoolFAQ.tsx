'use client'

import { useState } from 'react'
import { ChevronDown, CheckCircle } from 'lucide-react'
import Link from 'next/link'

interface FAQItem {
  question: string
  answer: string
}

const faqs: FAQItem[] = [
  {
    question: 'What is the Founding Schools Programme?',
    answer:
      'The Founding Schools Programme is a strategic partnership: the first 10 schools to sign for the 2026 academic year receive founding-partner status with full platform access, early features, direct product input, priority onboarding, and locked preferential pricing for 2-3 years. Additional schools are welcome on the platform at standard rates after the founding cohort closes. This is not a free trial -- it is a discounted, long-term partnership tailored to your department size.',
  },
  {
    question: 'How much does it cost?',
    answer:
      "Founding Schools Programme pricing ranges from \u00a33,000 to \u00a37,000 per year, depending on your department size. This is heavily discounted compared to our post-programme pricing. The exact package is discussed during your onboarding call. Book a call to find out your school's price.",
  },
  {
    question: 'How does the Excel bulk upload work?',
    answer:
      "Download our template, fill in student/teacher names and emails, upload the file. The system creates all accounts in seconds and generates a downloadable spreadsheet with everyone's login details. Share it with staff and students - they log in immediately.",
  },
  {
    question: 'Can we add students mid-year?',
    answer:
      'Yes. Add individual students via the admin portal, or run another bulk import at any time. There is no limit on how many users you can have.',
  },
  {
    question: 'Is the platform GDPR compliant?',
    answer:
      'Yes. We are ICO registered, all data is stored on UK-based servers, we have a full data processing agreement available, and you can export or delete all school data at any time.',
  },
  {
    question: 'What happens after the Founding Schools Programme?',
    answer:
      'Founding schools lock in preferential pricing for 2-3 years. Post-programme standard pricing will be significantly higher. The exact terms are agreed during your onboarding call.',
  },
  {
    question: 'Which exam boards are covered?',
    answer:
      'AQA, Edexcel, Edexcel IGCSE, Edexcel IAL, OCR, WJEC, and CAIE IGCSE. Full specification mapping for Years 7-13.',
  },
  {
    question: 'Can individual teachers sign up separately?',
    answer:
      'Yes. Individual teacher plans are available separately. School partnerships are far better value for departments with multiple teachers and classes.',
  },
]

interface AccordionItemProps {
  item: FAQItem
  index: number
  isOpen: boolean
  onToggle: () => void
}

function AccordionItem({ item, index, isOpen, onToggle }: AccordionItemProps) {
  return (
    <div
      className={[
        'rounded-xl border transition-all duration-200',
        isOpen
          ? 'border-emerald-500/40 bg-slate-800/80 shadow-lg shadow-emerald-900/10'
          : 'border-slate-700/60 bg-slate-800/40 hover:border-slate-600 hover:bg-slate-800/70',
      ].join(' ')}
    >
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${index}`}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 rounded-xl"
      >
        <span className="text-white font-semibold text-base leading-snug pr-2">
          {item.question}
        </span>
        <ChevronDown
          className={[
            'flex-shrink-0 h-5 w-5 text-emerald-400 transition-transform duration-300',
            isOpen ? 'rotate-180' : 'rotate-0',
          ].join(' ')}
          aria-hidden="true"
        />
      </button>

      <div
        id={`faq-answer-${index}`}
        role="region"
        className={[
          'overflow-hidden transition-all duration-300',
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0',
        ].join(' ')}
      >
        <div className="px-6 pb-5 pt-0">
          <div className="border-t border-slate-700/50 pt-4">
            <p className="text-slate-300 text-sm leading-relaxed">{item.answer}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export function SchoolFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="w-full py-12 px-4">
      {/* Header */}
      <div className="max-w-3xl mx-auto text-center mb-10">
        <div className="flex items-center justify-center gap-2 mb-4">
          <CheckCircle className="h-6 w-6 text-emerald-400" aria-hidden="true" />
          <span className="text-emerald-400 text-sm font-semibold uppercase tracking-widest">
            Common Questions
          </span>
        </div>
        <h2 className="text-3xl font-bold text-white mb-3">Frequently Asked Questions</h2>
        <p className="text-slate-400 text-base">
          Everything you need to know about The English Hub for schools.
        </p>
      </div>

      {/* Accordion */}
      <div className="max-w-3xl mx-auto flex flex-col gap-3">
        {faqs.map((faq, index) => (
          <AccordionItem
            key={index}
            item={faq}
            index={index}
            isOpen={openIndex === index}
            onToggle={() => handleToggle(index)}
          />
        ))}
      </div>

      {/* CTA footer */}
      <div className="max-w-3xl mx-auto mt-10 text-center">
        <p className="text-slate-400 text-sm">
          Still have questions?{' '}
          <Link
            href="/contact"
            className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2 transition-colors font-medium"
          >
            Book a call with our schools team
          </Link>{' '}
          - we reply within one working day.
        </p>
      </div>
    </section>
  )
}
