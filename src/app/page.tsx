'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useBoardStore } from '@/store/board-store'
import { PRICING, PRICING_DISPLAY } from '@/constants/pricing'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { cn } from '@/lib/utils'
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
    <div className="flex items-center justify-center gap-4 mb-12">
      <span
        className={cn('text-sm font-semibold transition-colors', !annual ? 'text-foreground' : 'text-muted-foreground')}
      >
        Monthly
      </span>
      <button
        onClick={() => setAnnual(!annual)}
        role="switch"
        aria-checked={annual}
        className={cn(
          'relative w-14 h-7 rounded-full transition-colors duration-300',
          annual ? 'bg-primary' : 'bg-border'
        )}
        aria-label="Toggle annual pricing"
      >
        <span
          className={cn(
            'absolute top-0.5 left-0.5 w-6 h-6 rounded-full bg-white shadow-md transition-transform duration-300',
            annual ? 'translate-x-7' : ''
          )}
        />
      </button>
      <span
        className={cn('text-sm font-semibold transition-colors', annual ? 'text-foreground' : 'text-muted-foreground')}
      >
        Annual
        <span className="ml-1.5 text-xs text-primary font-bold">
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
    <Card className="overflow-hidden border-border/40">
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
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
    <section className="py-5">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex items-center gap-3 px-5 py-4 rounded-2xl border border-primary/20 bg-primary/[0.04]">
          <Lightbulb className="w-5 h-5 text-primary shrink-0" />
          <p className="text-sm text-muted-foreground leading-relaxed transition-opacity duration-500">
            <span className="font-semibold text-primary">Top Tip:</span>{' '}
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
    <main className="min-h-screen bg-background">
      {/* ━━━ HERO ━━━ */}
      <section className="relative overflow-hidden pt-24 pb-28 sm:pt-32 sm:pb-36">
        {/* Glow effects — subtle, layered */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-primary/[0.06] rounded-full blur-[160px] pointer-events-none" />
        <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-blue-500/[0.03] rounded-full blur-[120px] pointer-events-none" />

        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <Badge variant="outline" className="border-primary/20 bg-primary/[0.06] text-primary text-sm font-semibold mb-10 gap-2 px-4 py-1.5">
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
          </Badge>

          <h1 className="text-foreground">
            Master English.
            <br />
            <span className="text-primary">Ace Your Exams.</span>
          </h1>

          <p className="mt-7 text-body-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
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

          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="default" size="lg" className="text-base px-8 h-12 shadow-lg shadow-primary/20" render={<Link href="/auth/register" />}>
              Start Free Trial
            </Button>
            <Button variant="secondary" size="lg" className="text-base px-8 h-12" render={<Link href="/courses" />}>
              Browse Courses
            </Button>
          </div>
        </div>
      </section>

      {/* ━━━ SOCIAL PROOF BAR ━━━ */}
      <section className="border-y border-border/40 bg-card/30">
        <div className="max-w-5xl mx-auto px-6 py-10">
          <p className="text-center text-muted-foreground text-sm font-medium mb-7">
            Trusted by{' '}
            <span className="text-foreground font-bold">2,400+</span>{' '}
            students across the UK
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12">
            {[
              { icon: BookOpen, color: 'text-primary bg-primary/10', value: '13', label: 'Structured Courses' },
              { icon: FileQuestion, color: 'text-blue-400 bg-blue-500/10', value: '40+', label: 'Practice Questions' },
              { icon: Layers, color: 'text-purple-400 bg-purple-500/10', value: '295', label: 'Flashcards' },
              { icon: BookMarked, color: 'text-emerald-400 bg-emerald-500/10', value: '52', label: 'Terminology Entries' },
              { icon: Award, color: 'text-amber-400 bg-amber-500/10', value: '4', label: 'Exam Boards' },
            ].map((stat, i) => (
              <div key={stat.label} className="flex items-center gap-8 sm:gap-12">
                {i > 0 && <div className="hidden sm:block w-px h-10 bg-border/50" />}
                <div className="flex items-center gap-3">
                  <div className={cn('w-10 h-10 rounded-xl flex items-center justify-center', stat.color)}>
                    <stat.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xl font-bold tracking-tight text-foreground">{stat.value}</p>
                    <p className="text-xs text-muted-foreground">{stat.label}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━ QUICK TIPS BANNER ━━━ */}
      <QuickTipsBanner selectedBoard={selectedBoard} />

      {/* ━━━ WHAT'S INSIDE ━━━ */}
      <section className="py-24 sm:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-foreground">
              What&rsquo;s Inside
            </h2>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto text-body-lg">
              A preview of the content waiting for you behind the sign-up wall.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                icon: BookOpen,
                color: 'text-primary bg-primary/10',
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
              <Card key={item.title} className="p-6 flex flex-col border-border/40 hover:border-border/70 transition-colors duration-300">
                <div
                  className={cn('w-11 h-11 rounded-xl flex items-center justify-center mb-5', item.color)}
                >
                  <item.icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold tracking-tight text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                  {item.desc}
                </p>
                <p className="text-xs text-primary/60 italic leading-relaxed mt-auto">
                  {item.preview}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Separator className="opacity-40" />

      {/* ━━━ HOW IT WORKS ━━━ */}
      <section className="py-24 sm:py-32">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-foreground">
              How It Works
            </h2>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto text-body-lg">
              Five simple steps from sign-up to exam success.
            </p>
          </div>

          <div className="space-y-4">
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
              <Card key={item.step} className="flex items-start gap-5 p-6 border-border/40">
                <div className="flex-shrink-0 w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-base font-bold text-primary">{item.step}</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold tracking-tight text-foreground mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-14">
            <Button variant="default" size="lg" className="text-base px-10 h-12 shadow-lg shadow-primary/20" render={<Link href="/auth/register" />}>
              Start Free Trial
            </Button>
          </div>
        </div>
      </section>

      <Separator className="opacity-40" />

      {/* ━━━ PATHWAY CARDS ━━━ */}
      <section className="py-24 sm:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-foreground">
              Choose Your Path
            </h2>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto text-body-lg">
              Structured learning pathways designed for every stage of your
              English journey.
            </p>
          </div>

          <div className={cn('grid sm:grid-cols-2 gap-5', selectedBoard === 'KS3' ? 'lg:grid-cols-3' : 'lg:grid-cols-4')}>
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
                      color: 'text-primary bg-primary/10',
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
              <Link key={card.title} href="/courses" className="block group">
              <Card
                className="p-6 border-border/40 hover:border-primary/25 hover:shadow-card-hover transition-all duration-300 hover:-translate-y-0.5"
              >
                <div
                  className={cn('w-11 h-11 rounded-xl flex items-center justify-center mb-4', card.color)}
                >
                  <card.icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold tracking-tight text-foreground group-hover:text-primary transition-colors duration-200">
                  {card.title}
                </h3>
                <p className="text-xs text-muted-foreground font-medium mt-1 mb-2">
                  {card.subtitle}
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {card.desc}
                </p>
              </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Separator className="opacity-40" />

      {/* ━━━ FEATURE HIGHLIGHTS ━━━ */}
      <section className="py-24 sm:py-32 bg-card/20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-foreground">
              Why Students Love Us
            </h2>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto text-body-lg">
              Everything you need to go from uncertain to unstoppable.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
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
                <div className="inline-flex w-12 h-12 rounded-2xl bg-primary/10 items-center justify-center mb-5">
                  <f.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold tracking-tight text-foreground mb-2">
                  {f.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Separator className="opacity-40" />

      {/* ━━━ COURSE GRID ━━━ */}
      <section className="py-24 sm:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-foreground">
              Featured Courses
            </h2>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto text-body-lg">
              All courses included with your subscription. First {PRICING.TRIAL_DAYS}-day month free!
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
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
                levelColor: 'bg-primary/20 text-primary',
                duration: '8 weeks',
                desc: 'Explorations in creative reading and writing — fiction extracts and descriptive/narrative tasks.',
                boards: ['AQA'],
              },
              {
                title: 'AQA Language Paper 2',
                level: 'GCSE',
                levelColor: 'bg-primary/20 text-primary',
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
                levelColor: 'bg-primary/20 text-primary',
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
              <Link key={course.title} href="/courses" className="block group">
              <Card
                className="overflow-hidden border-border/40 hover:border-primary/25 hover:shadow-card-hover transition-all duration-300 hover:-translate-y-0.5 flex flex-col"
              >
                {/* Card header with gradient */}
                <div className="h-28 bg-gradient-to-br from-primary/[0.06] via-card to-background flex items-center justify-center">
                  <BookOpen className="w-9 h-9 text-primary/30 group-hover:text-primary/50 transition-colors duration-300" />
                </div>

                <CardContent className="p-5 flex flex-col flex-1">
                  <div className="flex items-center gap-2 mb-3">
                    <Badge variant="secondary" className={course.levelColor}>
                      {course.level}
                    </Badge>
                    <span className="text-xs text-muted-foreground flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {course.duration}
                    </span>
                  </div>

                  <h3 className="font-bold tracking-tight text-foreground mb-2 group-hover:text-primary transition-colors duration-200">
                    {course.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                    {course.desc}
                  </p>

                  <div className="flex items-center justify-between mt-4 pt-4 border-t border-border/40">
                    <span className="text-xs text-muted-foreground">
                      Included with subscription
                    </span>
                    <span className="text-sm text-primary font-semibold group-hover:underline">
                      View Course &rarr;
                    </span>
                  </div>
                </CardContent>
              </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Separator className="opacity-40" />

      {/* ━━━ EXAM GUIDE ━━━ */}
      <section className="py-24 sm:py-32 bg-card/20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-foreground">
              Your Board&rsquo;s Exam Guide
            </h2>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto text-body-lg">
              {selectedBoard === 'KS3'
                ? 'Preparing for GCSEs? Explore the exam guides to get ahead.'
                : 'Paper structure, mark schemes, and examiner tips — tailored to your board.'}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {([
              { board: 'AQA', color: 'border-blue-500/30 hover:border-blue-500/60', accent: 'text-blue-400', bg: 'bg-blue-500/10', desc: 'Paper structure, mark schemes, and examiner tips.' },
              { board: 'Edexcel', color: 'border-violet-500/30 hover:border-violet-500/60', accent: 'text-violet-400', bg: 'bg-violet-500/10', desc: 'Paper structure, mark schemes, and examiner tips.' },
              { board: 'OCR', color: 'border-orange-500/30 hover:border-orange-500/60', accent: 'text-orange-400', bg: 'bg-orange-500/10', desc: 'Paper structure, mark schemes, and examiner tips.' },
              { board: 'WJEC', color: 'border-red-500/30 hover:border-red-500/60', accent: 'text-red-400', bg: 'bg-red-500/10', desc: 'Paper structure, mark schemes, and examiner tips.' },
            ] as const).map((item) => (
              <Link key={item.board} href={`/exam-guide/${item.board.toLowerCase()}`} className="block group">
              <Card
                className={cn(
                  'p-6 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-card-hover',
                  item.color,
                  selectedBoard === item.board && `ring-2 ring-offset-2 ring-offset-background ring-current ${item.accent}`
                )}
              >
                <div className={cn('w-11 h-11 rounded-xl flex items-center justify-center mb-4', item.bg)}>
                  <GraduationCap className={cn('w-5 h-5', item.accent)} />
                </div>
                <h3 className={cn('text-lg font-bold tracking-tight mb-1', item.accent)}>
                  {item.board}
                </h3>
                {selectedBoard === item.board && (
                  <Badge className="bg-primary/20 text-primary mb-2">
                    Your board
                  </Badge>
                )}
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>
              </Card>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="link" className="text-primary font-semibold" render={<Link href="/exam-guide" />}>
              View Full Guide &rarr;
            </Button>
          </div>
        </div>
      </section>

      <Separator className="opacity-40" />

      {/* ━━━ PRICING ━━━ */}
      <section className="py-24 sm:py-32">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-6">
            <Badge variant="outline" className="bg-emerald-500/10 border-emerald-500/25 text-emerald-400 text-base font-bold mb-8 gap-2 px-5 py-2">
              <Sparkles className="w-5 h-5" />
              First Month FREE!
            </Badge>
            <h2 className="text-foreground">
              Simple, Honest Pricing
            </h2>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto text-body-lg">
              Try everything free for 30 days. No commitment, cancel anytime.
            </p>
          </div>

          <PricingToggle annual={annual} setAnnual={setAnnual} />

          <div className="grid md:grid-cols-2 gap-5 max-w-3xl mx-auto">
            {/* Monthly */}
            <Card className="p-8 flex flex-col border-border/40">
              <h3 className="text-lg font-bold tracking-tight text-foreground">Monthly</h3>
              <p className="text-sm text-muted-foreground mt-1 mb-6">
                Rolling monthly — cancel anytime.
              </p>
              <div className="mb-2">
                <span className="text-4xl font-extrabold tracking-tight text-foreground">
                  {PRICING.CURRENCY}{PRICING.MONTHLY}
                </span>
                <span className="text-muted-foreground text-sm ml-1">/month</span>
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
                  <li key={f} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    {f}
                  </li>
                ))}
              </ul>
              <Button variant="secondary" className="w-full" render={<Link href="/auth/register" />}>
                Start Free Trial
              </Button>
            </Card>

            {/* Annual — Best Value */}
            <Card className="p-8 flex flex-col border-primary/30 relative">
              <Badge className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-bold px-4 py-1 shadow-lg shadow-primary/25">
                Best Value
              </Badge>
              <h3 className="text-lg font-bold tracking-tight text-foreground">Annual</h3>
              <p className="text-sm text-muted-foreground mt-1 mb-6">
                Pay yearly and save {PRICING.ANNUAL_SAVE_PERCENT}%.
              </p>
              <div className="mb-2">
                <span className="text-4xl font-extrabold tracking-tight text-foreground">
                  {PRICING.CURRENCY}{PRICING.ANNUAL}
                </span>
                <span className="text-muted-foreground text-sm ml-1">/year</span>
                <span className="ml-2 text-xs text-primary font-bold">
                  Save {PRICING.ANNUAL_SAVE_PERCENT}%
                </span>
              </div>
              <p className="text-sm text-muted-foreground mb-1">
                Just <span className="text-foreground font-bold">{PRICING.CURRENCY}{PRICING.ANNUAL_MONTHLY}/month</span> — billed annually
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
                  'Save £24.00 vs monthly',
                ].map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    {f}
                  </li>
                ))}
              </ul>
              <Button variant="default" className="w-full shadow-lg shadow-primary/20" render={<Link href="/auth/register" />}>
                Start Free Trial
              </Button>
            </Card>
          </div>

          <p className="text-center text-sm text-muted-foreground mt-10 max-w-lg mx-auto">
            Your free trial lasts 30 days. You won&rsquo;t be charged until the trial ends.
            Cancel anytime from your account settings — no questions asked.
          </p>
        </div>
      </section>

      <Separator className="opacity-40" />

      {/* ━━━ TESTIMONIALS ━━━ */}
      <section className="py-24 sm:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-foreground">
              What Our Students Say
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
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

      <Separator className="opacity-40" />

      {/* ━━━ FAQ ━━━ */}
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

      <Separator className="opacity-40" />

      {/* ━━━ CTA BANNER ━━━ */}
      <section className="py-24 sm:py-32">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Card className="relative p-14 sm:p-18 overflow-hidden border-border/40">
            {/* Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/[0.06] rounded-full blur-[120px] pointer-events-none" />

            <div className="relative">
              <h2 className="text-foreground mb-5">
                Ready to Raise Your Grade?
              </h2>
              <p className="text-muted-foreground max-w-lg mx-auto mb-10 text-body-lg">
                Join 2,400+ students who are building confidence and smashing
                their targets with The English Hub.
              </p>
              <Button variant="default" size="lg" className="text-base px-10 h-12 shadow-lg shadow-primary/20" render={<Link href="/auth/register" />}>
                Start Free Trial
              </Button>
            </div>
          </Card>
        </div>
      </section>

      {/* ━━━ FOOTER ━━━ */}
      <footer className="border-t border-border/40 bg-card/20">
        <div className="max-w-6xl mx-auto px-6 py-14">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            {/* Logo */}
            <div>
              <Link
                href="/"
                className="text-lg font-bold tracking-tight text-foreground flex items-center gap-2 hover:text-primary transition-colors duration-200"
              >
                <BookOpen className="w-5 h-5 text-primary" />
                The English Hub
              </Link>
              <p className="text-sm text-muted-foreground mt-2 max-w-xs">
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
                  className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <Separator className="mt-10 mb-6 opacity-40" />
          <div className="text-center text-xs text-muted-foreground/70">
            &copy; {new Date().getFullYear()} The English Hub. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  )
}
