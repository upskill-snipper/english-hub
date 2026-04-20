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

/* ───────────────────── Help Data ───────────────────── */

const HELP_CATEGORIES: HelpCategory[] = [
  {
    id: 'getting-started',
    title: 'Getting Started',
    description: 'New to The English Hub? Start here.',
    icon: Rocket,
    color: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
    items: [
      {
        question: 'How do I create an account?',
        answer:
          'Visit theenglishhub.app and click "Get Started" or "Sign Up". You can register with your email address or sign in with Google. Your 30-day free trial starts automatically — no payment details required upfront.',
      },
      {
        question: 'What exam boards do you support?',
        answer:
          "We support all major English exam boards: AQA, Edexcel, OCR, WJEC/Eduqas, and Cambridge IGCSE. When you set up your profile, select your exam board and we'll tailor all content, revision materials, and mock exams to match your specification.",
      },
      {
        question: 'How do I choose my exam board and course?',
        answer:
          "During registration, you'll be asked to select your exam board and whether you're studying English Language, English Literature, or both. You can change these at any time from your account settings.",
      },
      {
        question: 'Is there a free trial? Do I need a card?',
        answer:
          'Two things. Every paid plan starts with a 7-day free trial — that requires full sign-up with a valid card. Cancel before day 7 and you won\u2019t be charged. Separately, every registered account gets 3 free uses of most premium features (AI marking, mock exams, lesson plans, etc.) with no card required, so you can demo the product first.',
      },
    ],
  },
  {
    id: 'courses-learning',
    title: 'Courses & Learning',
    description: 'Understanding our course content and structure.',
    icon: BookOpen,
    color: 'text-blue-400 bg-blue-500/10 border-blue-500/20',
    items: [
      {
        question: 'What courses are available?',
        answer:
          'We offer comprehensive courses for GCSE English Language and English Literature across all major exam boards. Each course is broken down into topics that match your specification, with lessons, examples, and practice activities.',
      },
      {
        question: 'Are the courses aligned to my exam specification?',
        answer:
          "Absolutely. Every course is mapped directly to the exam board specification you've selected. Our content covers all the skills, texts, and question types you'll encounter in your actual exams.",
      },
      {
        question: 'Can I study both English Language and Literature?',
        answer:
          'Yes. Your subscription gives you full access to both English Language and English Literature courses for your chosen exam board. You can switch between them freely.',
      },
      {
        question: 'How do I track my progress through a course?',
        answer:
          'Your dashboard shows your progress through each course topic. Completed lessons are marked with a tick, and you can see your overall completion percentage. The dashboard also highlights areas where you might need more practice.',
      },
    ],
  },
  {
    id: 'mock-exams',
    title: 'Mock Exams',
    description: 'Practise under exam conditions.',
    icon: FileText,
    color: 'text-purple-400 bg-purple-500/10 border-purple-500/20',
    items: [
      {
        question: 'How do mock exams work?',
        answer:
          "Our mock exams simulate the real exam experience. You'll answer questions in timed conditions that match your exam board's format. After completing a mock, you receive detailed feedback, a grade estimate, and suggestions for improvement.",
      },
      {
        question: 'Are mock exams timed?',
        answer:
          'Yes. Each mock exam uses the same time allocation as the real exam so you can practise your time management. You can see a countdown timer during the exam. If you prefer, you can also attempt mocks in untimed "practice mode".',
      },
      {
        question: 'How are my mock exams marked?',
        answer:
          'Mock exams are marked using AI that has been trained on real examiner mark schemes and grade boundaries. You receive a mark, a grade estimate, and detailed feedback on each answer explaining what you did well and how to improve.',
      },
      {
        question: 'Can I retake a mock exam?',
        answer:
          'Yes, you can retake any mock exam as many times as you like. Each attempt is saved so you can track your improvement over time. We recommend reviewing the feedback from each attempt before retrying.',
      },
    ],
  },
  {
    id: 'practice-revision',
    title: 'Practice & Revision',
    description: 'Sharpen your skills with targeted practice.',
    icon: PenTool,
    color: 'text-clay-600 bg-amber-500/10 border-amber-500/20',
    items: [
      {
        question: 'What types of practice questions are available?',
        answer:
          'We offer practice questions for every question type on your exam: reading comprehension, language analysis, creative writing, essay responses, and more. Each question comes with a model answer so you can see what a top-grade response looks like.',
      },
      {
        question: 'What are revision materials?',
        answer:
          'Our revision section includes concise notes, key quotes, character summaries, theme overviews, and technique guides for all set texts and skills. Everything is organised by topic and exam board so you can find exactly what you need.',
      },
      {
        question: 'Can I focus on specific topics I find difficult?',
        answer:
          'Yes. You can filter practice questions and revision materials by topic, question type, or difficulty level. Your dashboard also highlights weak areas based on your mock exam and practice results, so you know where to focus.',
      },
    ],
  },
  {
    id: 'account-billing',
    title: 'Account & Billing',
    description: 'Manage your subscription and account.',
    icon: CreditCard,
    color: 'text-rose-400 bg-rose-500/10 border-rose-500/20',
    items: [
      {
        question: 'How much does The English Hub cost?',
        answer:
          'Students: £3.49/month or £29.99/year — and £20/year with any affiliate code or the public code 2026ENGLISH (save £9.99). Teachers: £7.99/month or £67.99/year. Every paid plan starts with a 7-day free trial (card required). You also get 3 free uses of most premium features before the paywall, no card required. Cancel anytime. Prices shown in GBP. The English Hub is not currently VAT-registered, so no VAT is added to the advertised price.',
      },
      {
        question: 'Can I cancel my subscription?',
        answer:
          "Yes, you can cancel anytime from your account settings. If you cancel, you'll retain access until the end of your current billing period. There are no cancellation fees or penalties.",
      },
      {
        question: 'How do I update my payment method?',
        answer:
          'Go to Account Settings > Billing to update your payment card. All payments are processed securely through Stripe.',
      },
      {
        question: 'What happens when my 7-day trial ends?',
        answer:
          'We send a reminder email a couple of days before the trial ends. If you do nothing, your chosen subscription activates and your card is charged the plan price. Cancel any time before day 7 from your account settings and you won\u2019t be charged at all.',
      },
    ],
  },
  {
    id: 'schools-teachers',
    title: 'Schools & Teachers',
    description: 'Information for schools and teaching staff.',
    icon: School,
    color: 'text-indigo-400 bg-indigo-500/10 border-indigo-500/20',
    items: [
      {
        question: 'Do you offer school plans?',
        answer:
          'Yes! Our Founding Schools Programme is a strategic partnership limited to 10 schools, with pricing ranging from £3,000 to £7,000 per year depending on department size. Schools receive full platform access, priority onboarding, early features, and locked preferential pricing. Visit our For Schools page or contact info@Upskillenergy.com to learn more.',
      },
      {
        question: 'Is there a teacher dashboard?',
        answer:
          'School licenses include a teacher dashboard where you can view individual and class-wide progress, assign specific practice tasks, monitor mock exam results, and identify students who may need additional support.',
      },
      {
        question: 'Can I set assignments for my students?',
        answer:
          'Yes. With a school license, teachers can assign specific practice questions, revision topics, or mock exams to individual students or entire classes, with due dates and progress tracking.',
      },
    ],
  },
  {
    id: 'parents',
    title: 'Parents',
    description: "Supporting your child's learning.",
    icon: Users,
    color: 'text-teal-400 bg-teal-500/10 border-teal-500/20',
    items: [
      {
        question: "How can I track my child's progress?",
        answer:
          "Parents can link to their child's account to receive weekly progress reports via email. These reports cover time spent studying, topics completed, mock exam grades, and areas that need attention. Visit our For Parents page to learn more.",
      },
      {
        question: 'Is the content safe and appropriate?',
        answer:
          'All content on The English Hub is educational and aligned with the national curriculum. Set texts are those prescribed by exam boards. Our platform contains no advertising, social features, or inappropriate content.',
      },
      {
        question: 'Can I purchase a subscription for my child?',
        answer:
          'Yes. You can create an account and manage the subscription on behalf of your child. Students under 16 should have a parent or guardian manage their account. You retain full control over billing from your account settings.',
      },
    ],
  },
  {
    id: 'technical',
    title: 'Technical Issues',
    description: 'Troubleshooting and technical support.',
    icon: Wrench,
    color: 'text-clay-600 bg-orange-500/10 border-orange-500/20',
    items: [
      {
        question: 'What devices can I use The English Hub on?',
        answer:
          'The English Hub works on any device with a modern web browser — laptops, desktops, tablets, and smartphones. No app download is required. We recommend Chrome, Safari, Firefox, or Edge for the best experience.',
      },
      {
        question: "The site isn't loading properly. What should I do?",
        answer:
          'Try clearing your browser cache and cookies, then refresh the page. Make sure your browser is up to date. If the issue persists, try a different browser or device. You can also check our status page or contact support.',
      },
      {
        question: "I've forgotten my password. How do I reset it?",
        answer:
          'Click "Log In" then "Forgot Password". Enter your email address and we\'ll send you a password reset link. The link expires after 24 hours. If you signed up with Google, use the "Sign in with Google" option instead.',
      },
      {
        question: "My mock exam feedback isn't showing. What should I do?",
        answer:
          "Feedback is usually generated within a few seconds of submitting your exam. If it hasn't appeared after a minute, try refreshing the page. If the problem continues, contact our support team with the exam name and the time you submitted it.",
      },
    ],
  },
]

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
  const [searchQuery, setSearchQuery] = useState('')

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
          Help Centre
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Find answers to your questions about The English Hub. Can&apos;t find what you&apos;re
          looking for?{' '}
          <Link href="/faqs" className="text-primary underline hover:text-primary/80">
            Check our FAQs
          </Link>{' '}
          or{' '}
          <Link href="/help/contact" className="text-primary underline hover:text-primary/80">
            get in touch
          </Link>
          .
        </p>
      </div>

      {/* Search */}
      <div className="relative mt-8">
        <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
        <input
          type="text"
          placeholder="Search for help — e.g. 'mock exam', 'cancel subscription', 'exam board'..."
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
              No results found for &ldquo;{searchQuery}&rdquo;. Try a different search term or{' '}
              <Link href="/help/contact" className="text-primary underline hover:text-primary/80">
                contact our support team
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

      {/* Contact CTA */}
      <div className="mt-12 rounded-xl border border-border bg-card p-8 text-center">
        <Mail className="mx-auto h-8 w-8 text-primary" />
        <h2 className="mt-4 text-xl font-semibold text-foreground">Still need help?</h2>
        <p className="mt-2 text-muted-foreground">
          Our support team is here to help. Get in touch and we&apos;ll get back to you as soon as
          possible.
        </p>
        <Link
          href="/help/contact"
          className="mt-4 inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
        >
          Contact Support
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  )
}
