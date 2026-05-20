import type { Metadata } from 'next'
import Link from 'next/link'
import {
  PenLine,
  BookOpen,
  MessageSquare,
  BarChart3,
  Languages,
  GraduationCap,
  Compass,
  BookA,
  ChevronRight,
  Info,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { BreadcrumbJsonLd } from '@/components/seo/json-ld'
import { BenefitGrid } from '@/components/schools/BenefitCard'
import { GlassPanel, PanelEyebrow } from '@/components/dataviz/GlassPanel'

const OG =
  '/api/og?title=Practise,+improve+and+understand+English&subtitle=Clearer+feedback,+aligned+to+your+exam'

export const metadata: Metadata = {
  title: 'For Students — practise, improve and understand English',
  description:
    'Revision, essay practice, comprehension and clearer feedback aligned to the exam board your school teaches, with progress tracking across English Language and Literature.',
  alternates: { canonical: 'https://theenglishhub.app/students' },
  keywords: [
    'GCSE English revision platform',
    'IGCSE English support',
    'English essay practice feedback',
    'English revision platform for schools',
  ],
  openGraph: {
    title: 'For Students — The English Hub',
    description: 'Practise, improve and understand English with clearer feedback.',
    url: 'https://theenglishhub.app/students',
    images: [{ url: OG, width: 1200, height: 630, alt: 'The English Hub for Students' }],
  },
  twitter: { card: 'summary_large_image', images: [OG] },
}

const JOURNEY_STEPS = [
  {
    icon: Compass,
    title: 'Pick your board',
    body: 'Tell us your exam — AQA, Edexcel, OCR, Eduqas or IGCSE.',
  },
  {
    icon: BookOpen,
    title: 'Revise set texts and topics',
    body: 'Specification-aligned revision, not generic notes.',
  },
  {
    icon: PenLine,
    title: 'Practise exam-style answers',
    body: 'Real question formats with model structures.',
  },
  {
    icon: MessageSquare,
    title: 'Get clearer feedback',
    body: 'AI feedback in plain English — what to fix, and why.',
  },
  {
    icon: BarChart3,
    title: 'Track your progress',
    body: 'See what is improving and where to focus next.',
  },
]

const EXAM_BOARDS = ['AQA', 'Edexcel', 'OCR', 'Eduqas / Cambridge IGCSE']

const SUBJECTS: Array<{
  icon: typeof BookA
  title: string
  body: string
  iconClass: string
  ringClass: string
}> = [
  {
    icon: BookA,
    title: 'KS3 English',
    body: 'Build the foundations — reading, writing and vocabulary practice across Years 7 to 9.',
    iconClass: 'bg-violet-500/10 text-violet-600 dark:text-violet-300',
    ringClass: 'hover:border-violet-500/40',
  },
  {
    icon: PenLine,
    title: 'GCSE English Language',
    body: 'Reading comprehension, descriptive and persuasive writing aligned to your board.',
    iconClass: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-300',
    ringClass: 'hover:border-emerald-500/40',
  },
  {
    icon: BookOpen,
    title: 'GCSE English Literature',
    body: 'Set texts, themes, characters and exam-style essay practice with model paragraphs.',
    iconClass: 'bg-clay-500/10 text-clay-600 dark:text-clay-500',
    ringClass: 'hover:border-clay-500/40',
  },
  {
    icon: GraduationCap,
    title: 'IGCSE + A-Level',
    body: 'Cambridge and Edexcel IGCSE plus extended A-Level practice and feedback.',
    iconClass: 'bg-ochre-500/10 text-ochre-600 dark:text-ochre-400',
    ringClass: 'hover:border-ochre-500/40',
  },
]

export default function StudentsPage() {
  return (
    <main className="min-h-screen bg-background">
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: 'https://theenglishhub.app' },
          { name: 'Students', url: 'https://theenglishhub.app/students' },
        ]}
      />

      {/* 1. Hero */}
      <section className="relative overflow-hidden border-b border-border/60">
        <div
          aria-hidden
          className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-primary/5 blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-ochre-500/[0.06] blur-3xl"
        />
        <div className="relative mx-auto max-w-5xl px-4 py-20 text-center sm:px-6 sm:py-28">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-primary">
            For students
          </p>
          <h1 className="mx-auto mt-5 max-w-3xl font-serif text-4xl font-semibold leading-[1.12] tracking-tight text-foreground sm:text-5xl">
            Practise, improve and understand English with clearer feedback
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Revise the texts you study, practise exam-style questions and get structured feedback
            aligned to the exam board your school teaches.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button
              size="lg"
              className="h-12 px-7 text-base"
              render={<Link href="/board-select" />}
            >
              Choose your exam board
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="h-12 px-7 text-base"
              render={<Link href="/pricing" />}
            >
              See student pricing
            </Button>
          </div>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            {['All major boards', 'AI feedback in plain English', 'KS3, GCSE, IGCSE, A-Level'].map(
              (pill) => (
                <span
                  key={pill}
                  className="inline-flex items-center rounded-full border border-border/60 bg-card/70 px-3 py-1 text-xs font-medium text-muted-foreground shadow-sm backdrop-blur-sm"
                >
                  {pill}
                </span>
              ),
            )}
          </div>
        </div>
      </section>

      {/* 2. Student journey */}
      <section aria-labelledby="journey-heading" className="border-b border-border/60 bg-muted/30">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <div className="text-center">
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
              How it works
            </p>
            <h2
              id="journey-heading"
              className="mt-3 font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
            >
              How studying with The English Hub works
            </h2>
            <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-muted-foreground">
              Five small steps from picking your board to tracking your own progress.
            </p>
          </div>

          {/* Horizontal flow on lg+, vertical on mobile */}
          <div className="relative mt-12">
            {/* Decorative connector line behind cards (lg+) */}
            <div
              aria-hidden
              className="pointer-events-none absolute left-6 right-6 top-1/2 hidden h-px -translate-y-1/2 bg-gradient-to-r from-teal-500/0 via-teal-500/40 to-clay-500/40 lg:block"
            />

            <ol className="relative flex flex-col gap-4 sm:gap-5 lg:flex-row lg:items-stretch lg:gap-2">
              {JOURNEY_STEPS.map((step, i) => {
                const Icon = step.icon
                const isLast = i === JOURNEY_STEPS.length - 1
                return (
                  <li
                    key={step.title}
                    className="flex flex-col items-stretch lg:flex-1 lg:flex-row lg:items-center"
                  >
                    <Card className="relative w-full gap-2 border-border/50 bg-card/90 p-5 backdrop-blur-sm lg:h-full">
                      <div className="flex items-center gap-3">
                        <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/15">
                          <Icon className="h-5 w-5" aria-hidden />
                        </span>
                        <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                          Step {i + 1}
                        </span>
                      </div>
                      <h3 className="mt-2 font-serif text-base font-semibold leading-snug text-foreground">
                        {step.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-muted-foreground">{step.body}</p>
                    </Card>

                    {/* Connector — horizontal chevron on lg, vertical bar on mobile */}
                    {!isLast && (
                      <div
                        aria-hidden
                        className="flex items-center justify-center py-1 lg:px-1 lg:py-0"
                      >
                        {/* Mobile vertical connector */}
                        <span className="block h-4 w-px bg-gradient-to-b from-teal-500/40 to-clay-500/30 lg:hidden" />
                        {/* Desktop horizontal chevron */}
                        <ChevronRight
                          className="hidden h-5 w-5 text-muted-foreground/60 lg:block"
                          aria-hidden
                        />
                      </div>
                    )}
                  </li>
                )
              })}
            </ol>
          </div>
        </div>
      </section>

      {/* 3. What's inside (BenefitGrid wrapped in GlassPanel) */}
      <section
        aria-labelledby="inside-heading"
        className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20"
      >
        <GlassPanel accent="teal" className="p-2 sm:p-3">
          <div className="rounded-xl bg-background/30 p-6 sm:p-8">
            <div className="text-center">
              <PanelEyebrow>What&rsquo;s inside</PanelEyebrow>
              <h2
                id="inside-heading"
                className="mt-3 font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
              >
                Everything you need to revise and improve
              </h2>
              <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
                Built around the boards UK and international schools actually teach.
              </p>
            </div>

            {/* Exam board strip */}
            <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {EXAM_BOARDS.map((board) => (
                <div
                  key={board}
                  className="rounded-xl border border-border/60 bg-card/80 p-4 text-center shadow-sm backdrop-blur-sm"
                >
                  <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                    Exam board
                  </p>
                  <p className="mt-1 font-serif text-lg font-semibold tracking-tight text-foreground">
                    {board}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <BenefitGrid
                items={[
                  {
                    icon: BookOpen,
                    title: 'Revision',
                    body: 'Revise set texts and key topics aligned to your specification.',
                  },
                  {
                    icon: PenLine,
                    title: 'Essay practice',
                    body: 'Practise exam-style essays and improve before the real thing.',
                  },
                  {
                    icon: MessageSquare,
                    title: 'Clearer feedback',
                    body: 'Structured, criteria-referenced feedback that explains how to improve.',
                  },
                  {
                    icon: GraduationCap,
                    title: 'Literature & language support',
                    body: 'Support across English Literature and English Language.',
                  },
                  {
                    icon: Languages,
                    title: 'EAL support',
                    body: 'Structured practice if English is an additional language.',
                  },
                  {
                    icon: BarChart3,
                    title: 'Progress tracking',
                    body: 'See how you are progressing and where to focus next.',
                  },
                ]}
              />
            </div>
          </div>
        </GlassPanel>
      </section>

      {/* 4. Subjects */}
      <section aria-labelledby="subjects-heading" className="border-y border-border/60 bg-muted/30">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <div className="text-center">
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
              Subjects we cover
            </p>
            <h2
              id="subjects-heading"
              className="mt-3 font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
            >
              English Language and Literature, across every key stage
            </h2>
            <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-muted-foreground">
              From KS3 foundations to A-Level analysis — all in one place.
            </p>
          </div>
          <div className="mt-10 grid gap-4 sm:gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {SUBJECTS.map((s) => {
              const Icon = s.icon
              return (
                <Card
                  key={s.title}
                  className={`h-full border-border/50 p-6 transition-colors ${s.ringClass}`}
                >
                  <div
                    className={`mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl ${s.iconClass}`}
                  >
                    <Icon className="h-5 w-5" aria-hidden />
                  </div>
                  <h3 className="font-serif text-lg font-semibold tracking-tight text-foreground">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* 5. Demo CTA */}
      <section
        aria-labelledby="demo-heading"
        className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20"
      >
        <GlassPanel accent="clay" className="p-8 sm:p-12">
          <div className="text-center">
            <PanelEyebrow>Try before you sign up</PanelEyebrow>
            <h2
              id="demo-heading"
              className="mt-3 font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
            >
              Want to look around first?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-muted-foreground">
              Open the student demo to see how revision, feedback and progress tracking work — no
              sign-up needed.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button
                size="lg"
                className="h-12 px-7 text-base"
                render={<Link href="/demo/student" />}
              >
                Open the student demo
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="h-12 px-7 text-base"
                render={<Link href="/board-select" />}
              >
                Pick your exam board
              </Button>
            </div>
          </div>
        </GlassPanel>
      </section>

      {/* 6. Friendly teacher note */}
      <section className="mx-auto max-w-3xl px-4 pb-20 sm:px-6 sm:pb-24">
        <Card className="flex-row items-start gap-4 border-primary/20 bg-primary/[0.03] p-5 sm:p-6">
          <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
            <Info className="h-4 w-4" aria-hidden />
          </span>
          <div className="min-w-0">
            <p className="font-serif text-sm font-semibold tracking-tight text-foreground">
              A quick note
            </p>
            <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
              Your school may already use The English Hub. If so, ask your English teacher how to
              get started.
            </p>
          </div>
        </Card>
      </section>
    </main>
  )
}
