'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  Search,
  ChevronDown,
  ArrowRight,
  Mail,
  HelpCircle,
  CreditCard,
  BookOpen,
  Wrench,
  School,
} from 'lucide-react'

/* ───────────────────── Types ───────────────────── */

interface FaqItem {
  question: string
  answer: string
}

interface FaqSection {
  id: string
  title: string
  icon: React.ElementType
  color: string
  items: FaqItem[]
}

/* ───────────────────── FAQ Data ───────────────────── */

const FAQ_SECTIONS: FaqSection[] = [
  {
    id: 'general',
    title: 'General',
    icon: HelpCircle,
    color: 'text-blue-400 bg-blue-500/10 border-blue-500/20',
    items: [
      {
        question: 'What is The English Hub?',
        answer:
          'The English Hub is an online learning platform designed specifically for GCSE and IGCSE English students. We provide board-specific courses, mock exams with AI-powered feedback, practice questions with model answers, and comprehensive revision materials for English Language and English Literature.',
      },
      {
        question: 'Who is The English Hub for?',
        answer:
          'The English Hub is built for GCSE and IGCSE English students (typically aged 14-16), but is also used by KS3 students who want to get ahead. Teachers use our school licenses to set assignments and track class progress, and parents can link to their child\'s account for weekly progress reports.',
      },
      {
        question: 'Which exam boards do you cover?',
        answer:
          'We cover all major English exam boards in the UK: AQA, Edexcel, OCR, WJEC/Eduqas, and Cambridge IGCSE. All content — courses, mock exams, practice questions, and revision notes — is tailored to your specific exam board and specification.',
      },
      {
        question: 'Do I need to download an app?',
        answer:
          'No. The English Hub is a web application that works in any modern browser on laptops, desktops, tablets, and smartphones. Just visit theenglishhub.app and log in. No downloads or installations required.',
      },
      {
        question: 'How is The English Hub different from other revision sites?',
        answer:
          'Unlike generic revision platforms, every piece of content on The English Hub is written specifically for your exam board and specification. Our mock exams use AI trained on real mark schemes to give you detailed, examiner-style feedback. We focus exclusively on English, so the depth and quality of our content is unmatched.',
      },
    ],
  },
  {
    id: 'pricing-billing',
    title: 'Pricing & Billing',
    icon: CreditCard,
    color: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
    items: [
      {
        question: 'How much does The English Hub cost?',
        answer:
          'We offer one simple plan at £9.99/month, first month free. The plan gives you full, unrestricted access to every feature on the platform. Cancel anytime.',
      },
      {
        question: 'Is there a free trial?',
        answer:
          'Yes. Every new account starts with a completely free 30-day trial. You get full access to all courses, mock exams, practice questions, and revision materials. No credit card is required to start your trial.',
      },
      {
        question: 'What happens after my free trial ends?',
        answer:
          'We\'ll send you a reminder email before your trial ends. If you\'ve added a payment method and chosen a plan, your subscription will start automatically. If you haven\'t added payment details, your account will simply be paused — you won\'t be charged anything.',
      },
      {
        question: 'Can I cancel my subscription?',
        answer:
          'Yes, you can cancel your subscription at any time from your account settings. There are no cancellation fees. When you cancel, you keep access to all features until the end of your current billing period.',
      },
      {
        question: 'What payment methods do you accept?',
        answer:
          'We accept all major debit and credit cards (Visa, Mastercard, American Express) processed securely through Stripe. We do not store your card details on our servers.',
      },
      {
        question: 'Can I get a refund?',
        answer:
          'If you\'re not satisfied within the first 14 days of a paid subscription, contact our support team and we\'ll arrange a full refund. After 14 days, you can cancel to prevent future charges, but we don\'t offer partial refunds for the current billing period.',
      },
    ],
  },
  {
    id: 'courses',
    title: 'Courses & Content',
    icon: BookOpen,
    color: 'text-purple-400 bg-purple-500/10 border-purple-500/20',
    items: [
      {
        question: 'What subjects and courses are available?',
        answer:
          'We offer courses for GCSE English Language and GCSE English Literature across all major exam boards. Each course covers every topic in the specification with structured lessons, worked examples, and practice activities.',
      },
      {
        question: 'How do mock exams work?',
        answer:
          'Our mock exams replicate the format, timing, and question styles of real exams for your specific exam board. After you submit your responses, our AI (trained on official mark schemes) provides a mark, grade estimate, and detailed feedback on each answer — highlighting strengths and areas for improvement.',
      },
      {
        question: 'What are practice questions?',
        answer:
          'Practice questions let you focus on individual question types (e.g. language analysis, creative writing, essay responses). Each question comes with a model answer so you can compare your response against a top-grade example and understand what examiners are looking for.',
      },
      {
        question: 'Are set texts covered for English Literature?',
        answer:
          'Yes. We cover all the set texts for each exam board, including character guides, theme analyses, key quote banks, and essay planning resources. Popular texts include Macbeth, An Inspector Calls, A Christmas Carol, Jekyll and Hyde, Power and Conflict poetry, and many more.',
      },
      {
        question: 'How often is content updated?',
        answer:
          'We continuously update our content to reflect the latest exam board specifications, mark schemes, and examiner reports. When exam boards make changes, we update our materials promptly so you\'re always revising the right content.',
      },
    ],
  },
  {
    id: 'technical',
    title: 'Technical',
    icon: Wrench,
    color: 'text-orange-400 bg-orange-500/10 border-orange-500/20',
    items: [
      {
        question: 'What browsers and devices are supported?',
        answer:
          'The English Hub works on any device with a modern web browser. We support the latest versions of Chrome, Safari, Firefox, and Microsoft Edge on Windows, macOS, iOS, Android, and ChromeOS.',
      },
      {
        question: 'I can\'t log in to my account. What should I do?',
        answer:
          'First, check that you\'re using the correct email address. If you\'ve forgotten your password, click "Forgot Password" on the login page to receive a reset link. If you signed up with Google, use the "Sign in with Google" button. If you\'re still having trouble, contact our support team.',
      },
      {
        question: 'The page isn\'t loading or looks broken. How do I fix it?',
        answer:
          'Try these steps: (1) Clear your browser cache and cookies, (2) Refresh the page, (3) Try a different browser, (4) Check your internet connection. If the problem persists, it may be a temporary issue on our end — try again in a few minutes or contact support.',
      },
      {
        question: 'Is my data safe and private?',
        answer:
          'Yes. We take data security seriously. All data is encrypted in transit and at rest. We comply with UK GDPR and never sell your personal information. For full details, read our Privacy Policy. Students under 16 should have a parent or guardian manage their account.',
      },
      {
        question: 'Can I use The English Hub offline?',
        answer:
          'The English Hub requires an internet connection to access courses, submit mock exams, and receive feedback. We recommend a stable broadband or mobile data connection for the best experience.',
      },
    ],
  },
  {
    id: 'schools-teachers',
    title: 'Schools & Teachers',
    icon: School,
    color: 'text-indigo-400 bg-indigo-500/10 border-indigo-500/20',
    items: [
      {
        question: 'How do school licenses work?',
        answer:
          'School licenses give your students full access to The English Hub at a discounted per-student rate. Our Department package covers up to 50 students for £500/year (£10/student). Larger packages are available for bigger schools and multi-academy trusts. Visit our For Schools page for full pricing.',
      },
      {
        question: 'What does the teacher dashboard include?',
        answer:
          'The teacher dashboard lets you view individual student progress and class-wide analytics, assign specific practice tasks and mock exams, set deadlines, and identify students who may need additional support. You can also see which topics your class is strongest and weakest on.',
      },
      {
        question: 'How do I onboard my students?',
        answer:
          'Once your school license is set up, you can invite students via email or share a class join code. Students create their own accounts and are automatically linked to your school. Bulk onboarding via CSV upload is also available.',
      },
      {
        question: 'Can we try it before committing to a school license?',
        answer:
          'Yes. We offer a free pilot for schools so you can trial The English Hub with a class before purchasing a full license. Contact us to arrange a pilot, and we\'ll set you up with temporary access for your students.',
      },
      {
        question: 'Do you offer training for teachers?',
        answer:
          'Yes. All school licenses include a free onboarding session where we walk your department through the platform, teacher dashboard, and assignment features. We also provide ongoing support and can arrange additional training if needed.',
      },
    ],
  },
]

/* ───────────────────── Accordion Item ───────────────────── */

function AccordionItem({ question, answer }: FaqItem) {
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
      {open && (
        <div className="pb-4 text-sm leading-relaxed text-muted-foreground">
          {answer}
        </div>
      )}
    </div>
  )
}

/* ───────────────────── Page ───────────────────── */

export default function FaqsPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [activeSection, setActiveSection] = useState<string | null>(null)

  const filteredSections = FAQ_SECTIONS.map((section) => ({
    ...section,
    items: section.items.filter(
      (item) =>
        !searchQuery ||
        item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.answer.toLowerCase().includes(searchQuery.toLowerCase())
    ),
  })).filter((section) => section.items.length > 0)

  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Frequently Asked Questions
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Everything you need to know about The English Hub. For more detailed
          help, visit our{' '}
          <Link href="/help" className="text-primary underline hover:text-primary/80">
            Help Centre
          </Link>
          .
        </p>
      </div>

      {/* Search */}
      <div className="relative mt-8">
        <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
        <input
          type="text"
          placeholder="Search FAQs — e.g. 'pricing', 'mock exam', 'school license'..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full rounded-lg border border-border bg-background px-4 py-3 pl-12 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
        />
      </div>

      {/* Section Navigation */}
      {!searchQuery && (
        <div className="mt-8 flex flex-wrap gap-2">
          {FAQ_SECTIONS.map((section) => {
            const Icon = section.icon
            return (
              <button
                key={section.id}
                type="button"
                onClick={() =>
                  setActiveSection(
                    activeSection === section.id ? null : section.id
                  )
                }
                className={`inline-flex items-center gap-2 rounded-lg border px-3 py-2 text-sm font-medium transition-colors ${
                  activeSection === section.id
                    ? 'border-primary bg-primary/10 text-primary'
                    : 'border-border bg-card text-muted-foreground hover:border-primary/50 hover:text-foreground'
                }`}
              >
                <Icon className="h-4 w-4" />
                {section.title}
              </button>
            )
          })}
        </div>
      )}

      {/* FAQ Sections */}
      <div className="mt-10 space-y-8">
        {filteredSections.length === 0 && (
          <div className="rounded-xl border border-border bg-card p-8 text-center">
            <p className="text-muted-foreground">
              No FAQs found for &ldquo;{searchQuery}&rdquo;. Try a different
              search term or{' '}
              <Link
                href="/contact"
                className="text-primary underline hover:text-primary/80"
              >
                ask our support team
              </Link>
              .
            </p>
          </div>
        )}

        {filteredSections
          .filter(
            (section) =>
              searchQuery || !activeSection || section.id === activeSection
          )
          .map((section) => {
            const Icon = section.icon
            return (
              <div
                key={section.id}
                id={section.id}
                className="rounded-xl border border-border bg-card p-6"
              >
                <div className="mb-4 flex items-center gap-3">
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-lg border ${section.color}`}
                  >
                    <Icon className="h-5 w-5" />
                  </div>
                  <h2 className="text-lg font-semibold text-foreground">
                    {section.title}
                  </h2>
                </div>

                <div className="divide-y divide-border">
                  {section.items.map((item) => (
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

      {/* Contact CTA */}
      <div className="mt-12 rounded-xl border border-border bg-card p-8 text-center">
        <Mail className="mx-auto h-8 w-8 text-primary" />
        <h2 className="mt-4 text-xl font-semibold text-foreground">
          Can&apos;t find what you&apos;re looking for?
        </h2>
        <p className="mt-2 text-muted-foreground">
          Our team is happy to help with any questions not covered here.
        </p>
        <div className="mt-4 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <Link
            href="/help"
            className="inline-flex items-center gap-2 rounded-lg border border-border bg-background px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-muted"
          >
            Visit Help Centre
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Contact Support
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  )
}
