'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  Search,
  Rocket,
  BookOpen,
  FileText,
  PenTool,
  CreditCard,
  School,
  Users,
  Wrench,
  ChevronDown,
  ArrowRight,
  Mail,
} from 'lucide-react'
import { useT } from '@/lib/i18n/use-t'

/* ───────────────────── Types ───────────────────── */

interface HelpItem {
  question: string
  answer: string
}

interface HelpCategory {
  id: string
  title: string
  description: string
  icon: React.ElementType
  color: string
  items: HelpItem[]
}

/* ───────────────────── Accordion Item ───────────────────── */

function AccordionItem({ question, answer }: HelpItem) {
  const [open, setOpen] = useState(false)

  return (
    <div className="border-b border-border last:border-b-0">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between gap-4 py-4 text-left text-sm font-medium text-foreground transition-colors hover:text-primary"
      >
        <span>{question}</span>
        <ChevronDown
          className={`h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      {open && <div className="pb-4 text-sm leading-relaxed text-muted-foreground">{answer}</div>}
    </div>
  )
}

/* ───────────────────── Page ───────────────────── */

export default function HelpCentrePage() {
  const t = useT()
  const [searchQuery, setSearchQuery] = useState('')

  const HELP_CATEGORIES: HelpCategory[] = [
    {
      id: 'getting-started',
      title: t('help.cat.getting_started.title'),
      description: t('help.cat.getting_started.desc'),
      icon: Rocket,
      color: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
      items: [
        { question: t('help.gs.q1.q'), answer: t('help.gs.q1.a') },
        { question: t('help.gs.q2.q'), answer: t('help.gs.q2.a') },
        { question: t('help.gs.q3.q'), answer: t('help.gs.q3.a') },
        { question: t('help.gs.q4.q'), answer: t('help.gs.q4.a') },
      ],
    },
    {
      id: 'courses-learning',
      title: t('help.cat.courses.title'),
      description: t('help.cat.courses.desc'),
      icon: BookOpen,
      color: 'text-blue-400 bg-blue-500/10 border-blue-500/20',
      items: [
        { question: t('help.co.q1.q'), answer: t('help.co.q1.a') },
        { question: t('help.co.q2.q'), answer: t('help.co.q2.a') },
        { question: t('help.co.q3.q'), answer: t('help.co.q3.a') },
        { question: t('help.co.q4.q'), answer: t('help.co.q4.a') },
      ],
    },
    {
      id: 'mock-exams',
      title: t('help.cat.mocks.title'),
      description: t('help.cat.mocks.desc'),
      icon: FileText,
      color: 'text-purple-400 bg-purple-500/10 border-purple-500/20',
      items: [
        { question: t('help.me.q1.q'), answer: t('help.me.q1.a') },
        { question: t('help.me.q2.q'), answer: t('help.me.q2.a') },
        { question: t('help.me.q3.q'), answer: t('help.me.q3.a') },
        { question: t('help.me.q4.q'), answer: t('help.me.q4.a') },
      ],
    },
    {
      id: 'practice-revision',
      title: t('help.cat.practice.title'),
      description: t('help.cat.practice.desc'),
      icon: PenTool,
      color: 'text-clay-600 bg-amber-500/10 border-amber-500/20',
      items: [
        { question: t('help.pr.q1.q'), answer: t('help.pr.q1.a') },
        { question: t('help.pr.q2.q'), answer: t('help.pr.q2.a') },
        { question: t('help.pr.q3.q'), answer: t('help.pr.q3.a') },
        { question: t('help.pr.q4.q'), answer: t('help.pr.q4.a') },
      ],
    },
    {
      id: 'account-billing',
      title: t('help.cat.billing.title'),
      description: t('help.cat.billing.desc'),
      icon: CreditCard,
      color: 'text-rose-400 bg-rose-500/10 border-rose-500/20',
      items: [
        { question: t('help.ab.q1.q'), answer: t('help.ab.q1.a') },
        { question: t('help.ab.q2.q'), answer: t('help.ab.q2.a') },
        { question: t('help.ab.q3.q'), answer: t('help.ab.q3.a') },
        { question: t('help.ab.q4.q'), answer: t('help.ab.q4.a') },
      ],
    },
    {
      id: 'schools-teachers',
      title: t('help.cat.schools.title'),
      description: t('help.cat.schools.desc'),
      icon: School,
      color: 'text-indigo-400 bg-indigo-500/10 border-indigo-500/20',
      items: [
        { question: t('help.st.q1.q'), answer: t('help.st.q1.a') },
        { question: t('help.st.q2.q'), answer: t('help.st.q2.a') },
        { question: t('help.st.q3.q'), answer: t('help.st.q3.a') },
      ],
    },
    {
      id: 'parents',
      title: t('help.cat.parents.title'),
      description: t('help.cat.parents.desc'),
      icon: Users,
      color: 'text-teal-400 bg-teal-500/10 border-teal-500/20',
      items: [
        { question: t('help.pa.q1.q'), answer: t('help.pa.q1.a') },
        { question: t('help.pa.q2.q'), answer: t('help.pa.q2.a') },
        { question: t('help.pa.q3.q'), answer: t('help.pa.q3.a') },
      ],
    },
    {
      id: 'technical',
      title: t('help.cat.technical.title'),
      description: t('help.cat.technical.desc'),
      icon: Wrench,
      color: 'text-clay-600 bg-orange-500/10 border-orange-500/20',
      items: [
        { question: t('help.te.q1.q'), answer: t('help.te.q1.a') },
        { question: t('help.te.q2.q'), answer: t('help.te.q2.a') },
        { question: t('help.te.q3.q'), answer: t('help.te.q3.a') },
        { question: t('help.te.q4.q'), answer: t('help.te.q4.a') },
      ],
    },
  ]

  const filteredCategories = HELP_CATEGORIES.map((category) => ({
    ...category,
    items: category.items.filter(
      (item) =>
        !searchQuery ||
        item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.answer.toLowerCase().includes(searchQuery.toLowerCase()),
    ),
  })).filter((category) => category.items.length > 0)

  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          {t('help.title')}
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          {t('help.intro_lead')}{' '}
          <Link href="/faqs" className="text-primary underline hover:text-primary/80">
            {t('help.intro_check_faqs')}
          </Link>{' '}
          {t('help.intro_or')}{' '}
          <Link href="/help/contact" className="text-primary underline hover:text-primary/80">
            {t('help.intro_get_in_touch')}
          </Link>
          .
        </p>
      </div>

      {/* Search */}
      <div className="relative mt-8">
        <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
        <input
          type="text"
          placeholder={t('help.search_placeholder')}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full rounded-lg border border-border bg-background px-4 py-3 pl-12 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
        />
      </div>

      {/* Categories */}
      <div className="mt-10 space-y-8">
        {filteredCategories.length === 0 && (
          <div className="rounded-xl border border-border bg-card p-8 text-center">
            <p className="text-muted-foreground">
              {t('help.no_results_pre')} &ldquo;{searchQuery}&rdquo;{t('help.no_results_tail')}{' '}
              <Link href="/help/contact" className="text-primary underline hover:text-primary/80">
                {t('help.contact_support_link')}
              </Link>
              .
            </p>
          </div>
        )}

        {filteredCategories.map((category) => {
          const Icon = category.icon
          return (
            <div key={category.id} className="rounded-xl border border-border bg-card p-6">
              <div className="mb-4 flex items-center gap-3">
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-lg border ${category.color}`}
                >
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <h2 className="text-lg font-semibold text-foreground">{category.title}</h2>
                  <p className="text-sm text-muted-foreground">{category.description}</p>
                </div>
              </div>

              <div className="divide-y divide-border">
                {category.items.map((item) => (
                  <AccordionItem
                    key={item.question}
                    question={item.question}
                    answer={item.answer}
                  />
                ))}
              </div>
            </div>
          )
        })}
      </div>

      {/* Response times */}
      <section className="mt-12 rounded-xl border border-border bg-card p-8">
        <h2 className="text-xl font-semibold text-foreground">{t('help.response_times_h2')}</h2>
        <ul className="mt-4 space-y-2 text-sm text-muted-foreground list-disc pl-5">
          <li>
            <strong className="text-foreground">{t('help.rt.student_label')}</strong>{' '}
            {t('help.rt.student_value')}
          </li>
          <li>
            <strong className="text-foreground">{t('help.rt.teacher_label')}</strong>{' '}
            {t('help.rt.teacher_value')}
          </li>
          <li>
            <strong className="text-foreground">{t('help.rt.school_label')}</strong>{' '}
            {t('help.rt.school_value')}
          </li>
          <li>
            <strong className="text-foreground">{t('help.rt.security_label')}</strong>{' '}
            {t('help.rt.security_value')}{' '}
            <a
              href="mailto:security@theenglishhub.app"
              className="text-primary underline hover:text-primary/80"
            >
              security@theenglishhub.app
            </a>
          </li>
        </ul>
      </section>

      {/* Contact CTA */}
      <div className="mt-12 rounded-xl border border-border bg-card p-8 text-center">
        <Mail className="mx-auto h-8 w-8 text-primary" />
        <h2 className="mt-4 text-xl font-semibold text-foreground">
          {t('help.still_need_help_h2')}
        </h2>
        <p className="mt-2 text-muted-foreground">{t('help.still_need_help_body')}</p>
        <Link
          href="/help/contact"
          className="mt-4 inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
        >
          {t('help.contact_support_cta')}
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  )
}
