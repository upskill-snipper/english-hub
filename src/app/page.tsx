'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useBoardStore } from '@/store/board-store'
import { PRICING, PRICING_DISPLAY } from '@/constants/pricing'
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
  Lightbulb,
  Layers,
  Target,
  Zap,
  Eye,
  ListChecks,
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
          Save 33%
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
    a: 'Yes! Your first month is completely free on any plan. You get full access to all courses, practice questions, flashcards, and revision tools for 30 days. Cancel anytime during the trial and you won\u2019t be charged a penny.',
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

/* ───────────────────── Quick Tips Banner ───────────────────── */

const examTips: Record<string, string[]> = {
  AQA: [
    'AQA examiners reward "conceptualised" responses — thread one argument through your entire answer.',
    'AQA Paper 1 Q5: spend 5 minutes planning your narrative arc before writing a single word.',
    'For AQA Literature, always embed context — don\'t bolt it on as a separate paragraph.',
  ],
  Edexcel: [
    'Edexcel Paper 1: use short, punchy quotes and analyse individual word choices for top marks.',
    'For Edexcel Language, synthesis questions reward comparison — don\'t just summarise each text separately.',
    'Edexcel Literature: structure your essay around the writer\'s methods, not the plot.',
  ],
  OCR: [
    'OCR Component 01: practise summarising two texts in under 15 minutes — timing is everything.',
    'OCR examiners love to see evaluation — don\'t just identify techniques, judge their effectiveness.',
    'For OCR creative writing, a cyclical structure (ending where you began) impresses examiners.',
  ],
  WJEC: [
    'WJEC Component 1: spend equal time on reading and writing — both carry 40 marks.',
    'For WJEC Eduqas, always use the bullet points in the question as a structure for your answer.',
    'WJEC examiners value "apt and sustained" responses — stay focused on the question throughout.',
  ],
  KS3: [
    'Start building your quotation bank now — it will give you a head start at GCSE.',
    'Practise writing in paragraphs using PEEL (Point, Evidence, Explain, Link) from Year 7.',
    'Read widely beyond your set texts — examiners at GCSE reward students who show broader reading.',
  ],
}

const defaultTips = [
  'Top Tip: Always plan before you write — even 3 minutes of planning can boost your grade.',
  'Examiners reward precise vocabulary — swap "good" for "compelling", "bad" for "detrimental".',
  'Re-read the question after every paragraph to make sure you\'re still answering it.',
]

function QuickTipsBanner({ selectedBoard }: { selectedBoard: string | null }) {
  const [tipIndex, setTipIndex] = useState(0)
  const tips = (selectedBoard && examTips[selectedBoard]) || defaultTips

  useEffect(() => {
    const interval = setInterval(() => {
      setTipIndex((prev) => (prev + 1) % tips.length)
    }, 8000)
    return () => clearInterval(interval)
  }, [tips.length])

  return (
    <section className="py-4">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex items-center gap-3 px-5 py-3.5 rounded-xl border border-brand-accent/20 bg-brand-accent/5">
          <Lightbulb className="w-5 h-5 text-brand-accent shrink-0" />
          <p className="text-sm text-brand-muted leading-relaxed transition-opacity duration-500">
            <span className="font-semibold text-brand-accent">Top Tip:</span>{' '}
            {tips[tipIndex]}
          </p>
        </div>
      </div>
    </section>
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
            {selectedBoard === 'KS3'
              ? 'New: KS3 Reading, Writing & Grammar Courses'
              : selectedBoard === 'AQA'
              ? 'New: AQA GCSE Course Content Updated'
              : selectedBoard === 'OCR'
              ? 'New: OCR GCSE Practice Questions & Revision'
              : selectedBoard === 'WJEC'
              ? 'New: WJEC Eduqas GCSE Practice Questions & Revision'
              : 'New: Edexcel IGCSE English Language A & B — Now Live'}
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-brand-text leading-tight tracking-tight">
            Master English.
            <br />
            <span className="text-brand-accent">Ace Your Exams.</span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-brand-muted max-w-2xl mx-auto leading-relaxed">
            {selectedBoard === 'KS3'
              ? 'Expert-written courses for Key Stage 3 English. Build your reading, writing, and grammar foundations \u2014 from struggling to confident.'
              : selectedBoard === 'OCR'
              ? 'Expert-written courses for KS3 and OCR GCSE English. Practice questions, revision tools, and more.'
              : selectedBoard === 'WJEC'
              ? 'Expert-written courses for KS3 and WJEC Eduqas GCSE English. Practice questions, revision tools, and more.'
              : selectedBoard === 'AQA'
              ? 'Expert-written courses for KS3 and AQA GCSE English. From struggling to confident \u2014 we\u2019ll get you there.'
              : 'Expert-written courses for KS3, GCSE, and IGCSE English. From struggling to confident \u2014 we\u2019ll get you there.'}
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/auth/register" className="btn-primary text-lg px-8 py-4">
              Start Free Trial
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
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-brand-accent/10 flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-brand-accent" />
              </div>
              <div>
                <p className="text-xl font-bold text-brand-text">13</p>
                <p className="text-xs text-brand-muted">Structured Courses</p>
              </div>
            </div>
            <div className="hidden sm:block w-px h-10 bg-brand-border" />
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center">
                <FileQuestion className="w-5 h-5 text-blue-400" />
              </div>
              <div>
                <p className="text-xl font-bold text-brand-text">40+</p>
                <p className="text-xs text-brand-muted">Practice Questions</p>
              </div>
            </div>
            <div className="hidden sm:block w-px h-10 bg-brand-border" />
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center">
                <Layers className="w-5 h-5 text-purple-400" />
              </div>
              <div>
                <p className="text-xl font-bold text-brand-text">295</p>
                <p className="text-xs text-brand-muted">Flashcards</p>
              </div>
            </div>
            <div className="hidden sm:block w-px h-10 bg-brand-border" />
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                <BookMarked className="w-5 h-5 text-emerald-400" />
              </div>
              <div>
                <p className="text-xl font-bold text-brand-text">52</p>
                <p className="text-xs text-brand-muted">Terminology Entries</p>
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

      {/* ━━━ QUICK TIPS BANNER ━━━ */}
      <QuickTipsBanner selectedBoard={selectedBoard} />

      {/* ━━━ WHAT'S INSIDE ━━━ */}
      <section className="py-20 sm:py-28 bg-brand-card/30">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-text">
              What&rsquo;s Inside
            </h2>
            <p className="mt-3 text-brand-muted max-w-xl mx-auto">
              A preview of the content waiting for you behind the sign-up wall.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: BookOpen,
                color: 'text-brand-accent bg-brand-accent/10',
                title: 'Structured Courses',
                desc: 'From KS3 foundations to GCSE mastery — 13 expert-written courses covering Reading, Writing, Grammar, Language, and Literature.',
                preview: 'Sample topics: Inference & Deduction, Narrative Writing, Poetry Analysis, Transactional Writing, Shakespeare...',
              },
              {
                icon: FileQuestion,
                color: 'text-blue-400 bg-blue-500/10',
                title: 'Exam-Style Practice Questions',
                desc: '40+ questions modelled on real exam papers, complete with mark schemes and model answers.',
                preview: 'Question types: Extract analysis, comparison, creative writing, essay response, unseen poetry...',
              },
              {
                icon: Layers,
                color: 'text-purple-400 bg-purple-500/10',
                title: '295 Flashcards',
                desc: 'Revise key quotes, terminology, and techniques with spaced-repetition flashcards.',
                preview: 'Topics: Literary devices, key quotations, grammar rules, essay vocabulary, exam command words...',
              },
              {
                icon: GraduationCap,
                color: 'text-amber-400 bg-amber-500/10',
                title: 'Comprehensive Exam Guides',
                desc: 'Detailed breakdowns for AQA, Edexcel, OCR & WJEC — paper structure, mark schemes, and examiner tips.',
                preview: 'Covers: Paper timings, assessment objectives, grade boundaries, common pitfalls to avoid...',
              },
              {
                icon: Target,
                color: 'text-emerald-400 bg-emerald-500/10',
                title: '52 Terminology Entries',
                desc: 'A searchable glossary of every literary and linguistic term you need for GCSE English.',
                preview: 'Includes: Metaphor, Sibilance, Pathetic Fallacy, Semantic Field, Volta, Enjambment...',
              },
              {
                icon: Award,
                color: 'text-red-400 bg-red-500/10',
                title: 'Certificates & Progress',
                desc: 'Track your progress through every course and earn verifiable digital certificates on completion.',
                preview: 'Features: Progress bars, completion badges, shareable certificates, revision streaks...',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="card p-6 flex flex-col"
              >
                <div
                  className={`w-12 h-12 rounded-xl ${item.color} flex items-center justify-center mb-4`}
                >
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-brand-text mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-brand-muted leading-relaxed mb-3">
                  {item.desc}
                </p>
                <p className="text-xs text-brand-accent/70 italic leading-relaxed mt-auto">
                  {item.preview}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━ HOW IT WORKS ━━━ */}
      <section className="py-20 sm:py-28">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-text">
              How It Works
            </h2>
            <p className="mt-3 text-brand-muted max-w-xl mx-auto">
              Five simple steps from sign-up to exam success.
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                step: 1,
                icon: ListChecks,
                title: 'Choose your exam board',
                desc: 'Select AQA, Edexcel, OCR, or WJEC and we tailor everything to your specification.',
              },
              {
                step: 2,
                icon: BookOpen,
                title: 'Follow structured courses',
                desc: 'Work through expert-written lessons in a logical sequence — no guessing what to study next.',
              },
              {
                step: 3,
                icon: Eye,
                title: 'Practice with real exam questions',
                desc: 'Tackle exam-style questions with detailed mark schemes and model answers.',
              },
              {
                step: 4,
                icon: Zap,
                title: 'Revise with flashcards & guides',
                desc: 'Lock in your knowledge with 295 flashcards, terminology glossaries, and board-specific exam guides.',
              },
              {
                step: 5,
                icon: Award,
                title: 'Ace your exams',
                desc: 'Walk into your exam with confidence, backed by structured preparation and proven techniques.',
              },
            ].map((item) => (
              <div
                key={item.step}
                className="flex items-start gap-5 card p-6"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-brand-accent/10 flex items-center justify-center">
                  <span className="text-lg font-bold text-brand-accent">{item.step}</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-brand-text mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-brand-muted leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/auth/register" className="btn-primary text-lg px-10 py-4">
              Start Free Trial
            </Link>
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

          <div className={`grid sm:grid-cols-2 ${selectedBoard === 'KS3' ? 'lg:grid-cols-3' : 'lg:grid-cols-4'} gap-6`}>
            {[
              {
                icon: BookMarked,
                color: 'text-blue-400 bg-blue-500/10',
                title: 'KS3 Reading',
                subtitle: 'Years 7–9',
                desc: 'Build your foundation with core reading comprehension and analysis skills.',
              },
              {
                icon: PenTool,
                color: 'text-emerald-400 bg-emerald-500/10',
                title: 'KS3 Writing',
                subtitle: 'Years 7–9',
                desc: 'Develop creative and transactional writing skills with structured lessons.',
              },
              ...(selectedBoard !== 'KS3'
                ? [
                    {
                      icon: PenTool,
                      color: 'text-brand-accent bg-brand-accent/10',
                      title: 'GCSE Language',
                      subtitle: selectedBoard ?? 'All Boards',
                      desc: selectedBoard === 'AQA'
                        ? 'Master Paper 1 explorations in creative reading & writing and Paper 2 writers\u2019 viewpoints & perspectives.'
                        : selectedBoard === 'OCR'
                        ? 'Master Component 01 non-fiction reading and Component 02 fiction analysis for OCR GCSE.'
                        : selectedBoard === 'WJEC'
                        ? 'Master Component 1 20th-century fiction and Component 2 non-fiction reading for WJEC Eduqas.'
                        : 'Master reading comprehension and creative & transactional writing for Edexcel GCSE.',
                    },
                    {
                      icon: BookOpen,
                      color: 'text-purple-400 bg-purple-500/10',
                      title: 'GCSE Literature',
                      subtitle: `${selectedBoard ?? 'All'} Set Texts`,
                      desc: selectedBoard === 'AQA'
                        ? 'Poetry, prose, and drama \u2014 AQA set texts with model answers and essay plans.'
                        : selectedBoard === 'OCR'
                        ? 'Poetry, prose, and drama \u2014 OCR set texts with model answers and essay plans.'
                        : selectedBoard === 'WJEC'
                        ? 'Poetry, prose, and drama \u2014 WJEC Eduqas set texts with model answers and essay plans.'
                        : 'Poetry, prose, and drama \u2014 Edexcel set texts with model answers and essay plans.',
                    },
                  ]
                : []),
              ...(selectedBoard === 'Edexcel'
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
                desc: selectedBoard === 'KS3'
                  ? 'Flashcards and revision tools to consolidate your Key Stage 3 knowledge.'
                  : 'Intensive revision courses to boost your grade in weeks, not months.',
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
                desc: 'No lock-in contracts. Your first month is free, and you can cancel anytime — no questions asked.',
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
              All courses included with your subscription. First {PRICING.TRIAL_DAYS}-day month free!
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {([
              {
                title: 'KS3 Reading',
                level: 'KS3',
                levelColor: 'bg-blue-500/20 text-blue-400',
                duration: '6 weeks',
                desc: 'Core reading skills — inference, analysis, and comparison for Years 7-9.',
                boards: ['all'],
              },
              {
                title: 'KS3 Writing',
                level: 'KS3',
                levelColor: 'bg-blue-500/20 text-blue-400',
                duration: '6 weeks',
                desc: 'Creative and transactional writing foundations for Years 7-9.',
                boards: ['KS3'],
              },
              {
                title: 'KS3 Grammar',
                level: 'KS3',
                levelColor: 'bg-blue-500/20 text-blue-400',
                duration: '6 weeks',
                desc: 'Master sentence structure, punctuation, and grammar essentials.',
                boards: ['KS3'],
              },
              {
                title: 'AQA Language Paper 1',
                level: 'GCSE',
                levelColor: 'bg-brand-accent/20 text-brand-accent',
                duration: '8 weeks',
                desc: 'Explorations in creative reading and writing — fiction extracts and descriptive/narrative tasks.',
                boards: ['AQA'],
              },
              {
                title: 'AQA Language Paper 2',
                level: 'GCSE',
                levelColor: 'bg-brand-accent/20 text-brand-accent',
                duration: '8 weeks',
                desc: 'Writers\u2019 viewpoints and perspectives — non-fiction reading and transactional writing for AQA.',
                boards: ['AQA'],
              },
              {
                title: 'AQA Literature Poetry',
                level: 'GCSE',
                levelColor: 'bg-purple-500/20 text-purple-400',
                duration: '7 weeks',
                desc: 'Power & Conflict, Love & Relationships, and unseen poetry mastery for AQA.',
                boards: ['AQA'],
              },
              {
                title: 'Edexcel Language Paper 1',
                level: 'GCSE',
                levelColor: 'bg-brand-accent/20 text-brand-accent',
                duration: '8 weeks',
                desc: 'Master 19th-century non-fiction analysis and transactional writing for Edexcel 1EN2.',
                boards: ['Edexcel'],
              },
              {
                title: 'Edexcel Literature Paper 1',
                level: 'GCSE',
                levelColor: 'bg-purple-500/20 text-purple-400',
                duration: '8 weeks',
                desc: 'Shakespeare and Post-1914 Literature with extract-based response techniques.',
                boards: ['Edexcel'],
              },
              {
                title: 'IGCSE Language A',
                level: 'IGCSE',
                levelColor: 'bg-emerald-500/20 text-emerald-400',
                duration: '10 weeks',
                desc: 'Edexcel IGCSE English Language Spec A (4EA1) — non-fiction and transactional writing.',
                boards: ['Edexcel'],
              },
              {
                title: 'OCR Language Practice',
                level: 'GCSE',
                levelColor: 'bg-orange-500/20 text-orange-400',
                duration: '8 weeks',
                desc: 'Component 01 & 02 practice — non-fiction synthesis, evaluation, fiction analysis, and creative writing for OCR.',
                boards: ['OCR'],
              },
              {
                title: 'WJEC Eduqas Language',
                level: 'GCSE',
                levelColor: 'bg-red-500/20 text-red-400',
                duration: '8 weeks',
                desc: 'Component 1 & 2 practice — 20th-century fiction, non-fiction reading, and writing tasks for WJEC Eduqas.',
                boards: ['WJEC'],
              },
              {
                title: 'GCSE Revision Blitz',
                level: 'Revision',
                levelColor: 'bg-amber-500/20 text-amber-400',
                duration: '4 weeks',
                desc: 'Intensive exam prep: timed practice, model answers, and grade boosters.',
                boards: ['AQA', 'Edexcel', 'OCR', 'WJEC'],
              },
            ] as const).filter((course) => (course.boards as readonly string[]).includes('all') || (selectedBoard && (course.boards as readonly string[]).includes(selectedBoard))).map((course) => (
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
                    <span className="text-xs text-brand-muted">
                      Included with subscription
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

      {/* ━━━ EXAM GUIDE ━━━ */}
      <section className="py-20 sm:py-28 bg-brand-card/30">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-text">
              Your Board&rsquo;s Exam Guide
            </h2>
            <p className="mt-3 text-brand-muted max-w-xl mx-auto">
              {selectedBoard === 'KS3'
                ? 'Preparing for GCSEs? Explore the exam guides to get ahead.'
                : 'Paper structure, mark schemes, and examiner tips — tailored to your board.'}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {([
              { board: 'AQA', color: 'border-blue-500/50 hover:border-blue-500', accent: 'text-blue-400', bg: 'bg-blue-500/10', desc: 'Paper structure, mark schemes, and examiner tips.' },
              { board: 'Edexcel', color: 'border-violet-500/50 hover:border-violet-500', accent: 'text-violet-400', bg: 'bg-violet-500/10', desc: 'Paper structure, mark schemes, and examiner tips.' },
              { board: 'OCR', color: 'border-orange-500/50 hover:border-orange-500', accent: 'text-orange-400', bg: 'bg-orange-500/10', desc: 'Paper structure, mark schemes, and examiner tips.' },
              { board: 'WJEC', color: 'border-red-500/50 hover:border-red-500', accent: 'text-red-400', bg: 'bg-red-500/10', desc: 'Paper structure, mark schemes, and examiner tips.' },
            ] as const).map((item) => (
              <Link
                key={item.board}
                href={`/exam-guide/${item.board.toLowerCase()}`}
                className={`card p-6 group transition-all duration-300 hover:-translate-y-1 border ${item.color} ${
                  selectedBoard === item.board ? 'ring-2 ring-offset-2 ring-offset-brand-bg ring-current ' + item.accent : ''
                }`}
              >
                <div className={`w-12 h-12 rounded-xl ${item.bg} flex items-center justify-center mb-4`}>
                  <GraduationCap className={`w-6 h-6 ${item.accent}`} />
                </div>
                <h3 className={`text-lg font-bold ${item.accent} mb-1`}>
                  {item.board}
                </h3>
                {selectedBoard === item.board && (
                  <span className="inline-block text-xs font-semibold px-2 py-0.5 rounded-full bg-brand-accent/20 text-brand-accent mb-2">
                    Your board
                  </span>
                )}
                <p className="text-sm text-brand-muted leading-relaxed">
                  {item.desc}
                </p>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/exam-guide"
              className="inline-flex items-center gap-1 text-brand-accent font-medium hover:underline"
            >
              View Full Guide &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* ━━━ PRICING ━━━ */}
      <section className="py-20 sm:py-28">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-4">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-lg font-bold mb-6">
              <Sparkles className="w-5 h-5" />
              First Month FREE!
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-text">
              Simple, Honest Pricing
            </h2>
            <p className="mt-3 text-brand-muted max-w-xl mx-auto">
              Try everything free for 30 days. No commitment, cancel anytime.
            </p>
          </div>

          <PricingToggle annual={annual} setAnnual={setAnnual} />

          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {/* Monthly */}
            <div className="card p-8 flex flex-col">
              <h3 className="text-lg font-bold text-brand-text">Monthly</h3>
              <p className="text-brand-muted text-sm mt-1 mb-6">
                Rolling monthly — cancel anytime.
              </p>
              <div className="mb-2">
                <span className="text-4xl font-extrabold text-brand-text">
                  {PRICING.CURRENCY}{PRICING.MONTHLY}
                </span>
                <span className="text-brand-muted text-sm ml-1">/month</span>
              </div>
              <p className="text-sm text-emerald-400 font-semibold mb-6">
                First month completely free
              </p>
              <ul className="space-y-3 mb-8 flex-1">
                {[
                  'First month FREE — no payment due today',
                  'All 13 courses included',
                  'All 40+ practice questions',
                  '295 flashcards & 52 terminology entries',
                  'Certificates on completion',
                  'Progress tracking & analytics',
                  'Cancel anytime — no contracts',
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
                Start Free Trial
              </Link>
            </div>

            {/* Annual — Best Value */}
            <div className="card p-8 flex flex-col border-brand-accent/50 relative">
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-brand-accent text-white text-xs font-bold px-4 py-1 rounded-full">
                Best Value
              </div>
              <h3 className="text-lg font-bold text-brand-text">Annual</h3>
              <p className="text-brand-muted text-sm mt-1 mb-6">
                Pay yearly and save {PRICING.ANNUAL_SAVE_PERCENT}%.
              </p>
              <div className="mb-2">
                <span className="text-4xl font-extrabold text-brand-text">
                  {PRICING.CURRENCY}{PRICING.ANNUAL}
                </span>
                <span className="text-brand-muted text-sm ml-1">/year</span>
                <span className="ml-2 text-xs text-brand-accent font-semibold">
                  Save {PRICING.ANNUAL_SAVE_PERCENT}%
                </span>
              </div>
              <p className="text-sm text-brand-muted mb-1">
                Just <span className="text-brand-text font-semibold">{PRICING.CURRENCY}{PRICING.ANNUAL_MONTHLY}/month</span> — billed annually
              </p>
              <p className="text-sm text-emerald-400 font-semibold mb-6">
                First month completely free
              </p>
              <ul className="space-y-3 mb-8 flex-1">
                {[
                  'First month FREE — no payment due today',
                  'All 13 courses included',
                  'All 40+ practice questions',
                  '295 flashcards & 52 terminology entries',
                  'Certificates on completion',
                  'Progress tracking & analytics',
                  'Priority support',
                  'Save £23.40 vs monthly',
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
                Start Free Trial
              </Link>
            </div>
          </div>

          <p className="text-center text-sm text-brand-muted mt-8 max-w-lg mx-auto">
            Your free trial lasts 30 days. You won&rsquo;t be charged until the trial ends.
            Cancel anytime from your account settings — no questions asked.
          </p>
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
                Start Free Trial
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
                Expert English courses for KS3, GCSE, IGCSE, and all major exam boards.
              </p>
            </div>

            {/* Links */}
            <div className="flex flex-wrap gap-x-8 gap-y-3 text-sm">
              {[
                { label: 'Courses', href: '/courses' },
                { label: 'Practice', href: '/practice' },
                { label: 'Revision', href: '/revision' },
                { label: 'Exam Guide', href: '/exam-guide' },
                { label: 'Dashboard', href: '/dashboard' },
                { label: 'Log in', href: '/auth/login' },
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
