"use client"

import { useState } from "react"
import { ChevronDown, CheckCircle } from "lucide-react"

interface FAQItem {
  question: string
  answer: string
}

const faqs: FAQItem[] = [
  {
    question: "What is included in the PS1,500 school site license?",
    answer:
      "Full access for all students and teachers at your school. Includes all 470+ courses, lesson plans, AI essay feedback, analytics dashboard, homework management, bulk user upload, and priority support. Unlimited users.",
  },
  {
    question: "What is the FOUNDER promo code?",
    answer:
      "FOUNDER schools get completely free access until 31 August 2026. This is our pilot programme. After August 2026, the school license costs PS1,500/year. Your access will continue with no disruption if you renew before the expiry date.",
  },
  {
    question: "How does the Excel bulk upload work?",
    answer:
      "Download our template, fill in student/teacher names and emails, upload the file. The system creates all accounts in seconds and generates a downloadable spreadsheet with everyone's login details. Share it with staff and students - they log in immediately.",
  },
  {
    question: "Can we add students mid-year?",
    answer:
      "Yes. Add individual students via the admin portal, or run another bulk import at any time. There is no limit on how many users you can have.",
  },
  {
    question: "Is the platform GDPR compliant?",
    answer:
      "Yes. We are ICO registered, all data is stored on EU servers, we have a full data processing agreement available, and you can export or delete all school data at any time.",
  },
  {
    question: "What happens after FOUNDER access expires?",
    answer:
      "You will receive email reminders before August 2026. To continue access, renew at PS1,500/year. Students and teachers retain their accounts but lose access to premium content until renewal.",
  },
  {
    question: "Which exam boards are covered?",
    answer:
      "AQA, Edexcel, Edexcel IGCSE, Edexcel IAL, OCR, WJEC, and CAIE IGCSE. Full specification mapping for Years 7-13.",
  },
  {
    question: "Can individual teachers sign up separately?",
    answer:
      "Yes. Individual teacher plans are PS9.99/month or PS79.99/year. School site licenses are far better value for schools with 20+ students.",
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
        "rounded-xl border transition-all duration-200",
        isOpen
          ? "border-emerald-500/40 bg-slate-800/80 shadow-lg shadow-emerald-900/10"
          : "border-slate-700/60 bg-slate-800/40 hover:border-slate-600 hover:bg-slate-800/70",
      ].join(" ")}
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
            "flex-shrink-0 h-5 w-5 text-emerald-400 transition-transform duration-300",
            isOpen ? "rotate-180" : "rotate-0",
          ].join(" ")}
          aria-hidden="true"
        />
      </button>

      <div
        id={`faq-answer-${index}`}
        role="region"
        className={[
          "overflow-hidden transition-all duration-300",
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0",
        ].join(" ")}
      >
        <div className="px-6 pb-5 pt-0">
          <div className="border-t border-slate-700/50 pt-4">
            <p className="text-slate-300 text-sm leading-relaxed">
              {item.answer}
            </p>
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
        <h2 className="text-3xl font-bold text-white mb-3">
          Frequently Asked Questions
        </h2>
        <p className="text-slate-400 text-base">
          Everything you need to know about English Hub for schools.
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
          Still have questions?{" "}
          <a
            href="mailto:schools@english-hub.co.uk"
            className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2 transition-colors font-medium"
          >
            Email our schools team
          </a>{" "}
          - we reply within one working day.
        </p>
      </div>
    </section>
  )
}
