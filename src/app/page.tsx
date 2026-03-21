'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useBoardStore } from '@/store/board-store'
import {
  BookOpen,
  GraduationCap,
  Award,
  Smartphone,
  Shield,
  Star,
  ChevronDown,
  CheckCircle,
  FileQuestion,
  Clock,
  Sparkles,
  PenTool,
  BookMarked,
  RotateCcw,
  Quote,
} from 'lucide-react'

/* ───────────────────── Pricing toggle state ───────────────────── */

function PricingToggle({
  annual,
  setAnnual,
}: {
  annual: boolean
  setAnnual: (v: boolean) => void
}) {
  return (
    <div className="flex items-center justify-center gap-3 mb-10">
      <span
        className={`text-sm font-medium ${!annual ? 'text-brand-text' : 'text-brand-muted'}`}
      >
        Monthly
      </span>
      <button
        onClick={() => setAnnual(!annual)}
        role="switch"
        aria-checked={annual}
        className={`relative w-14 h-7 rounded-full transition-colors duration-300 ${
          annual ? 'bg-brand-accent' : 'bg-brand-border'
        }`}
        aria-label="Toggle annual pricing"
      >
        <span
          className={`absolute top-0.5 left-0.5 w-6 h-6 rounded-full bg-white transition-transform duration-300 ${
            annual ? 'translate-x-7' : ''
          }`}
        />
      </button>
      <span
        className={`text-sm font-medium ${annual ? 'text-brand-text' : 'text-brand-muted'}`}
      >
        Annual
        <span className="ml-1.5 text-xs text-brand-accent font-semibold">
          Save 34%
        </span>
      </span>
    </div>
  )
}

/* ───────────────────── FAQ Accordion ───────────────────── */

const faqs = [
  {
    q: 'Can I access on my phone?',
    a: 'Absolutely. The English Hub is fully responsive and works perfectly on smartphones, tablets, and desktops. Study wherever suits you best.',
  },
  {
    q: 'What exam boards do you cover?',
    a: 'We cover AQA GCSE, Edexcel GCSE, Edexcel International GCSE (IGCSE), OCR, and WJEC/Eduqas. Each course is mapped to the relevant specification so you only study what you need.',
  },
  {
    q: 'Can I cancel my subscription?',
    a: "Yes — cancel anytime from your account settings. There are no contracts or hidden fees. You'll keep access until the end of your billing period.",
  },
  {
    q: 'Do I get a certificate?',
    a: 'Yes. Every completed course awards a verifiable digital certificate you can share with schools, tutors, or on your profile.',
  },
  {
    q: 'Is there a free trial?',
    a: 'We offer a generous free tier that includes practice questions and a preview of every course. No credit card required — just sign up and start learning.',
  },
  {
    q: 'How is this different from YouTube?',
    a: 'YouTube offers scattered videos with no structure or feedback. The English Hub provides sequenced lessons written by examiners, exam-style practice with model answers, progress tracking, and certificates.',
  },
]

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border border-brand-border rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-brand-card/60 transition-colors duration-200"
      >
        <span className="font-medium text-brand-text pr-4">{q}</span>
        <ChevronDown
          className={`w-5 h-5 text-brand-muted shrink-0 transition-transform duration-300 ${
            open ? 'rotate-180' : ''
          }`}
        />
      </button>
      <div
        className={`grid transition-all duration-300 ${
          open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
        }`}
      >
        <div className="overflow-hidden">
          <p className="px-6 pb-5 text-brand-muted leading-relaxed">{a}</p>
        </div>
      </div>
    </div>
  )
}

/* ───────────────────── Main Page ───────────────────── */

export default function Home() {
  const [annual, setAnnual] = useState(true)
  const selectedBoard = useBoardStore((s) => s.selectedBoard)

  return (
    <main id="main-content" className="min-h-screen bg-brand-bg">
      {/* ━━━ HERO ━━━ */}
      <section className="relative overflow-hidden pt-20 pb-24 sm:pt-28 sm:pb-32">
        {/* Glow effect */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-accent/10 rounded-full blur-[128px] pointer-events-none" />
        <div className="absolute top-1/3 left-1/3 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand-accent/30 bg-brand-accent/10 text-brand-accent text-sm font-medium mb-8">
            <Sparkles className="w-4 h-4" />
            {selectedBoard === 'AQA'
              ? 'New: AQA GCSE Course Content Updated'
              : 'New: Edexcel IGCSE English Language A & B — Now Live'}
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-brand-text leading-tight tracking-tight">
            Master English.
            <br />
            <span className="text-brand-accent">Ace Your Exams.</span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-brand-muted max-w-2xl mx-auto leading-relaxed">
            {selectedBoard === 'AQA'
              ? 'Expert-written courses for KS3 and AQA GCSE English. From struggling to confident \u2014 we\u2019ll get you there.'
              : 'Expert-written courses for KS3, GCSE, and IGCSE English. From struggling to confident \u2014 we\u2019ll get you there.'}
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/auth/register" className="btn-primary text-lg px-8 py-4">
              Start Free
            </Link>
            <Link href="/courses" className="btn-secondary text-lg px-8 py-4">
              Browse Courses
            </Link>
          </div>
        </div>
      </section>

      {/* ━━━ SOCIAL PROOF BAR ━━━ */}
      <section className="border-y border-brand-border bg-brand-card/40">
        <div className="max-w-5xl mx-auto px-6 py-8">
          <p className="text-center text-brand-muted text-sm font-medium mb-6">
            Trusted by{' '}
            <span className="text-brand-text font-semibold">2,400+</span>{' '}
            students across the UK
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-brand-accent/10 flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-brand-accent" />
              </div>
              <div>
                <p className="text-xl font-bold text-brand-text">15+</p>
                <p className="text-xs text-brand-muted">Courses</p>
              </div>
            </div>
            <div className="hidden sm:block w-px h-10 bg-brand-border" />
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center">
                <FileQuestion className="w-5 h-5 text-blue-400" />
              </div>
              <div>
                <p className="text-xl font-bold text-brand-text">300+</p>
                <p className="text-xs text-brand-muted">Practice Questions</p>
              </div>
            </div>
            <div className="hidden sm:block w-px h-10 bg-brand-border" />
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center">
                <Award className="w-5 h-5 text-amber-400" />
              </div>
              <div>
                <p className="text-xl font-bold text-brand-text">4</p>
                <p className="text-xs text-brand-muted">Exam Boards</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ━━━ PATHWAY CARDS ━━━ */}
      <section className="py-20 sm:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-text">
              Choose Your Path
            </h2>
            <p className="mt-3 text-brand-muted max-w-xl mx-auto">
              Structured learning pathways designed for every stage of your
              English journey.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: BookMarked,
                color: 'text-blue-400 bg-blue-500/10',
                title: 'KS3',
                subtitle: 'Years 7–9',
                desc: 'Build your foundation with core reading, writing, and analysis skills.',
              },
              {
                icon: PenTool,
                color: 'text-brand-accent bg-brand-accent/10',
                title: 'GCSE Language',
                subtitle: selectedBoard === 'AQA' ? 'AQA' : 'Edexcel',
                desc: selectedBoard === 'AQA'
                  ? 'Master Paper 1 explorations in creative reading & writing and Paper 2 writers\u2019 viewpoints & perspectives.'
                  : 'Master reading comprehension and creative & transactional writing for Edexcel GCSE.',
              },
              {
                icon: BookOpen,
                color: 'text-purple-400 bg-purple-500/10',
                title: 'GCSE Literature',
                subtitle: selectedBoard === 'AQA' ? 'AQA Set Texts' : 'Edexcel Set Texts',
                desc: selectedBoard === 'AQA'
                  ? 'Poetry, prose, and drama \u2014 AQA set texts with model answers and essay plans.'
                  : 'Poetry, prose, and drama \u2014 Edexcel set texts with model answers and essay plans.',
              },
              ...(selectedBoard !== 'AQA'
                ? [
                    {
                      icon: GraduationCap,
                      color: 'text-emerald-400 bg-emerald-500/10',
                      title: 'IGCSE',
                      subtitle: 'Edexcel iGCSE',
                      desc: 'International GCSE English Language A & B — tailored to the Edexcel specification.',
                    },
                  ]
                : []),
              {
                icon: RotateCcw,
                color: 'text-amber-400 bg-amber-500/10',
                title: 'Revision',
                subtitle: 'Exam-Ready',
                desc: 'Intensive revision courses to boost your grade in weeks, not months.',
              },
            ].map((card) => (
              <Link
                key={card.title}
                href="/courses"
                className="card p-6 group hover:border-brand-accent/40 transition-all duration-300 hover:-translate-y-1"
              >
                <div
                  className={`w-12 h-12 rounded-xl ${card.color} flex items-center justify-center mb-4`}
                >
                  <card.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-brand-text group-hover:text-brand-accent transition-colors">
                  {card.title}
                </h3>
                <p className="text-xs text-brand-muted font-medium mt-0.5 mb-2">
                  {card.subtitle}
                </p>
                <p className="text-sm text-brand-muted leading-relaxed">
                  {card.desc}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━ FEATURE HIGHLIGHTS ━━━ */}
      <section className="py-20 sm:py-28 bg-brand-card/30">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-text">
              Why Students Love Us
            </h2>
            <p className="mt-3 text-brand-muted max-w-xl mx-auto">
              Everything you need to go from uncertain to unstoppable.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: GraduationCap,
                title: 'Expert-Written Content',
                desc: 'Written by experienced English teachers and examiners who know exactly what the mark scheme demands.',
              },
              {
                icon: Award,
                title: 'Certificate on Completion',
                desc: 'Earn a verifiable digital certificate for every course you complete. Share it with pride.',
              },
              {
                icon: Smartphone,
                title: 'Works on Any Device',
                desc: 'Desktop, tablet, or mobile — your courses sync seamlessly so you can study anywhere.',
              },
              {
                icon: Shield,
                title: 'Cancel Anytime',
                desc: 'No lock-in contracts. Choose a subscription or buy individual courses — the choice is yours.',
              },
            ].map((f) => (
              <div key={f.title} className="text-center sm:text-left">
                <div className="inline-flex w-14 h-14 rounded-2xl bg-brand-accent/10 items-center justify-center mb-4">
                  <f.icon className="w-7 h-7 text-brand-accent" />
                </div>
                <h3 className="text-lg font-bold text-brand-text mb-2">
                  {f.title}
                </h3>
                <p className="text-sm text-brand-muted leading-relaxed">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━ COURSE GRID ━━━ */}
      <section className="py-20 sm:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-text">
              Featured Courses
            </h2>
            <p className="mt-3 text-brand-muted max-w-xl mx-auto">
              Start with one course or unlock them all with a Pro subscription.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {([
              {
                title: 'KS3 Reading',
                level: 'KS3',
                levelColor: 'bg-blue-500/20 text-blue-400',
                price: '£29',
                duration: '6 weeks',
                desc: 'Core reading skills — inference, analysis, and comparison for Years 7-9.',
                board: 'all' as const,
              },
              {
                title: selectedBoard === 'AQA' ? 'AQA Language Paper 1' : 'GCSE Language Reading',
                level: 'GCSE',
                levelColor: 'bg-brand-accent/20 text-brand-accent',
                price: '£49',
                duration: '8 weeks',
                desc: selectedBoard === 'AQA'
                  ? 'Explorations in creative reading and writing — fiction extracts and descriptive/narrative tasks.'
                  : 'Paper 1 & Paper 2 reading: from extract analysis to critical comparison.',
                board: 'all' as const,
              },
              {
                title: selectedBoard === 'AQA' ? 'AQA Literature Poetry' : 'GCSE Literature Poetry',
                level: 'GCSE',
                levelColor: 'bg-purple-500/20 text-purple-400',
                price: '£39',
                duration: '7 weeks',
                desc: selectedBoard === 'AQA'
                  ? 'Power & Conflict, Love & Relationships, and unseen poetry mastery for AQA.'
                  : 'Power & Conflict, Love & Relationships, Edexcel Anthology, and unseen poetry mastery.',
                board: 'all' as const,
              },
              {
                title: 'AQA Language Paper 2',
                level: 'GCSE',
                levelColor: 'bg-brand-accent/20 text-brand-accent',
                price: '£49',
                duration: '8 weeks',
                desc: 'Writers\u2019 viewpoints and perspectives — non-fiction reading and transactional writing for AQA.',
                board: 'AQA' as const,
              },
              {
                title: 'Edexcel Language Paper 1',
                level: 'GCSE',
                levelColor: 'bg-brand-accent/20 text-brand-accent',
                price: '£49',
                duration: '8 weeks',
                desc: 'Master 19th-century non-fiction analysis and transactional writing for Edexcel 1EN2.',
                board: 'Edexcel' as const,
              },
              {
                title: 'Edexcel Literature Paper 1',
                level: 'GCSE',
                levelColor: 'bg-purple-500/20 text-purple-400',
                price: '£49',
                duration: '8 weeks',
                desc: 'Shakespeare and Post-1914 Literature with extract-based response techniques.',
                board: 'Edexcel' as const,
              },
              {
                title: 'GCSE Revision Blitz',
                level: 'Revision',
                levelColor: 'bg-amber-500/20 text-amber-400',
                price: '£59',
                duration: '4 weeks',
                desc: 'Intensive exam prep: timed practice, model answers, and grade boosters.',
                board: 'all' as const,
              },
            ] as const).filter((course) => course.board === 'all' || course.board === selectedBoard).map((course) => (
              <Link
                key={course.title}
                href="/courses"
                className="card overflow-hidden group hover:border-brand-accent/40 transition-all duration-300 hover:-translate-y-1 flex flex-col"
              >
                {/* Card header with gradient */}
                <div className="h-32 bg-gradient-to-br from-brand-accent/10 via-brand-card to-brand-bg flex items-center justify-center">
                  <BookOpen className="w-10 h-10 text-brand-accent/40 group-hover:text-brand-accent/60 transition-colors" />
                </div>

                <div className="p-5 flex flex-col flex-1">
                  <div className="flex items-center gap-2 mb-3">
                    <span
                      className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${course.levelColor}`}
                    >
                      {course.level}
                    </span>
                    <span className="text-xs text-brand-muted flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {course.duration}
                    </span>
                  </div>

                  <h3 className="font-bold text-brand-text mb-2 group-hover:text-brand-accent transition-colors">
                    {course.title}
                  </h3>
                  <p className="text-sm text-brand-muted leading-relaxed flex-1">
                    {course.desc}
                  </p>

                  <div className="flex items-center justify-between mt-4 pt-4 border-t border-brand-border">
                    <span className="text-xl font-bold text-brand-text">
                      {course.price}
                    </span>
                    <span className="text-sm text-brand-accent font-medium group-hover:underline">
                      View Course &rarr;
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━ PRICING ━━━ */}
      <section className="py-20 sm:py-28 bg-brand-card/30">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-text">
              Simple, Honest Pricing
            </h2>
            <p className="mt-3 text-brand-muted max-w-xl mx-auto">
              Start free. Upgrade when you&rsquo;re ready.
            </p>
          </div>

          <PricingToggle annual={annual} setAnnual={setAnnual} />

          <div className="grid md:grid-cols-3 gap-6">
            {/* Free */}
            <div className="card p-8 flex flex-col">
              <h3 className="text-lg font-bold text-brand-text">Free</h3>
              <p className="text-brand-muted text-sm mt-1 mb-6">
                Get a taste of The English Hub.
              </p>
              <div className="mb-8">
                <span className="text-4xl font-extrabold text-brand-text">
                  £0
                </span>
                <span className="text-brand-muted text-sm ml-1">forever</span>
              </div>
              <ul className="space-y-3 mb-8 flex-1">
                {[
                  'Practice questions',
                  '1 free course preview',
                  'Basic progress tracking',
                ].map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-brand-muted">
                    <CheckCircle className="w-4 h-4 text-brand-accent shrink-0 mt-0.5" />
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                href="/auth/register"
                className="btn-secondary w-full text-center"
              >
                Get Started
              </Link>
            </div>

            {/* Pro */}
            <div className="card p-8 flex flex-col border-brand-accent/50 relative">
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-brand-accent text-white text-xs font-bold px-4 py-1 rounded-full">
                Most Popular
              </div>
              <h3 className="text-lg font-bold text-brand-text">Pro</h3>
              <p className="text-brand-muted text-sm mt-1 mb-6">
                Full access to everything.
              </p>
              <div className="mb-8">
                <span className="text-4xl font-extrabold text-brand-text">
                  {annual ? '£79' : '£9.99'}
                </span>
                <span className="text-brand-muted text-sm ml-1">
                  {annual ? '/year' : '/month'}
                </span>
                {annual && (
                  <span className="ml-2 text-xs text-brand-accent font-semibold">
                    Save 34%
                  </span>
                )}
              </div>
              <ul className="space-y-3 mb-8 flex-1">
                {[
                  'All courses included',
                  'All practice questions',
                  'Certificates on completion',
                  'Priority support',
                  'Progress analytics',
                ].map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-brand-muted">
                    <CheckCircle className="w-4 h-4 text-brand-accent shrink-0 mt-0.5" />
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                href="/auth/register"
                className="btn-primary w-full text-center"
              >
                Get Pro Access
              </Link>
            </div>

            {/* Individual */}
            <div className="card p-8 flex flex-col">
              <h3 className="text-lg font-bold text-brand-text">
                Individual Courses
              </h3>
              <p className="text-brand-muted text-sm mt-1 mb-6">
                Buy only what you need.
              </p>
              <div className="mb-8">
                <span className="text-4xl font-extrabold text-brand-text">
                  From £19
                </span>
                <span className="text-brand-muted text-sm ml-1">one-time</span>
              </div>
              <ul className="space-y-3 mb-8 flex-1">
                {[
                  'Lifetime access to purchased course',
                  'Certificate on completion',
                  'All practice questions for that course',
                ].map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-brand-muted">
                    <CheckCircle className="w-4 h-4 text-brand-accent shrink-0 mt-0.5" />
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                href="/courses"
                className="btn-secondary w-full text-center"
              >
                Browse Courses
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ━━━ TESTIMONIALS ━━━ */}
      <section className="py-20 sm:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-text">
              What Our Students Say
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                quote:
                  'I went from a Grade 4 to a 7 in six months. The model answers are brilliant.',
                name: 'Sophie',
                role: 'Year 11',
              },
              {
                quote:
                  "My daughter's confidence has completely changed. She actually wants to revise now.",
                name: 'Mark',
                role: 'Parent',
              },
              {
                quote:
                  'The exam technique sections are worth the subscription alone.',
                name: 'James',
                role: 'GCSE Student',
              },
            ].map((t) => (
              <div
                key={t.name}
                className="card p-8 flex flex-col"
              >
                <Quote className="w-8 h-8 text-brand-accent/30 mb-4" />
                <p className="text-brand-text leading-relaxed flex-1">
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
                <p className="text-sm font-semibold text-brand-text">
                  {t.name}
                </p>
                <p className="text-xs text-brand-muted">{t.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━ FAQ ━━━ */}
      <section className="py-20 sm:py-28 bg-brand-card/30">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-text">
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

      {/* ━━━ CTA BANNER ━━━ */}
      <section className="py-20 sm:py-28">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="relative card p-12 sm:p-16 overflow-hidden">
            {/* Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-brand-accent/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="relative">
              <h2 className="text-3xl sm:text-4xl font-bold text-brand-text mb-4">
                Ready to Raise Your Grade?
              </h2>
              <p className="text-brand-muted max-w-lg mx-auto mb-8">
                Join 2,400+ students who are building confidence and smashing
                their targets with The English Hub.
              </p>
              <Link
                href="/auth/register"
                className="btn-primary text-lg px-10 py-4"
              >
                Start Free Today
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ━━━ FOOTER ━━━ */}
      <footer className="border-t border-brand-border bg-brand-card/20">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            {/* Logo */}
            <div>
              <Link
                href="/"
                className="text-xl font-bold text-brand-text flex items-center gap-2"
              >
                <BookOpen className="w-6 h-6 text-brand-accent" />
                The English Hub
              </Link>
              <p className="text-sm text-brand-muted mt-2 max-w-xs">
                {selectedBoard === 'AQA'
                  ? 'Expert English courses for KS3 and AQA GCSE students.'
                  : 'Expert English courses for KS3, GCSE, and IGCSE students.'}
              </p>
            </div>

            {/* Links */}
            <div className="flex flex-wrap gap-x-8 gap-y-3 text-sm">
              {[
                { label: 'Courses', href: '/courses' },
                { label: 'Practice', href: '/practice' },
                { label: 'Revision', href: '/revision' },
                { label: 'Dashboard', href: '/dashboard' },
                { label: 'Login', href: '/auth/login' },
                { label: 'Register', href: '/auth/register' },
              ].map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-brand-muted hover:text-brand-text transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="mt-10 pt-6 border-t border-brand-border text-center text-xs text-brand-muted">
            &copy; {new Date().getFullYear()} The English Hub. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  )
}
