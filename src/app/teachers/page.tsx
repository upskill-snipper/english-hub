import type { Metadata } from 'next'
import Link from 'next/link'
import {
  Brain,
  LineChart,
  ClipboardCheck,
  FileText,
  BookOpen,
  Languages,
  Target,
  ScrollText,
  X,
  Clock,
  Frown,
  AlertCircle,
  Check,
  Zap,
  Eye,
  TrendingUp,
  Calendar,
  PenTool,
  MessageSquare,
  BarChart3,
  ChevronRight,
  Shield,
  ArrowRight,
  Sparkles,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { BreadcrumbJsonLd } from '@/components/seo/json-ld'
import { FeatureGrid } from '@/components/schools/FeatureGrid'
import { SchoolFAQ } from '@/components/schools/SchoolFAQ'
import { GlassPanel, PanelEyebrow } from '@/components/dataviz/GlassPanel'

const OG =
  '/api/og?title=Support+every+student+without+adding+to+your+workload&subtitle=AI-assisted+feedback+for+English+teachers'

export const metadata: Metadata = {
  title: 'For Teachers — reduce workload, support every student',
  description:
    'AI-assisted feedback, homework setting, worksheet building and clearer student insight — designed to support teacher judgement and reduce repetitive workload.',
  alternates: { canonical: 'https://theenglishhub.app/teachers' },
  keywords: [
    'AI marking for English teachers',
    'teacher workload reduction EdTech',
    'English teacher feedback tool',
    'English homework setting',
  ],
  openGraph: {
    title: 'For Teachers — The English Hub',
    description: 'Support every student without adding to your workload.',
    url: 'https://theenglishhub.app/teachers',
    images: [{ url: OG, width: 1200, height: 630, alt: 'The English Hub for Teachers' }],
  },
  twitter: { card: 'summary_large_image', images: [OG] },
}

const HERO_PILLS = [
  'Reduce repetitive marking',
  'Class-level insight',
  'Specification-aligned',
] as const

const WITHOUT_POINTS: { icon: typeof X; label: string }[] = [
  { icon: Clock, label: 'Long marking nights that eat into planning and family time' },
  { icon: X, label: 'Feedback scattered across exercise books, docs and emails' },
  { icon: Frown, label: 'Struggling students identified late, after the gap has widened' },
  { icon: AlertCircle, label: 'Class-wide patterns invisible until exam season' },
]

const WITH_POINTS: { icon: typeof Check; label: string }[] = [
  { icon: Zap, label: 'Faster feedback turnaround on routine written work' },
  { icon: Check, label: 'Structured commentary aligned to assessment objectives' },
  { icon: Eye, label: 'Earlier surfacing of students who may need intervention' },
  { icon: TrendingUp, label: 'Class-wide pattern insight you can act on next lesson' },
]

const WEEK_STEPS: {
  icon: typeof Calendar
  day: string
  body: string
}[] = [
  {
    icon: Calendar,
    day: 'Monday',
    body: 'Set homework aligned to your specification',
  },
  {
    icon: PenTool,
    day: 'Tue – Thu',
    body: 'Students practise; AI drafts first-pass feedback',
  },
  {
    icon: MessageSquare,
    day: 'Friday',
    body: 'Review feedback, focus class time where it matters',
  },
  {
    icon: BarChart3,
    day: 'End of half-term',
    body: 'Share progress with parents and leadership',
  },
]

export default function TeachersPage() {
  return (
    <main className="min-h-screen bg-background">
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: 'https://theenglishhub.app' },
          { name: 'Teachers', url: 'https://theenglishhub.app/teachers' },
        ]}
      />

      {/* 1. Hero */}
      <section className="relative overflow-hidden border-b border-border/60">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-primary/5 blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -left-20 -bottom-32 h-72 w-72 rounded-full bg-clay-500/[0.05] blur-3xl"
        />
        <div className="relative mx-auto max-w-5xl px-4 py-20 text-center sm:px-6 sm:py-28">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-primary">
            For teachers
          </p>
          <h1 className="mx-auto mt-5 max-w-3xl font-serif text-4xl font-semibold leading-[1.12] tracking-tight text-foreground sm:text-5xl">
            Support every student without adding to your workload
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            The English Hub is designed to reduce repetitive marking, give you clearer insight into
            class weaknesses, and help you focus more time on teaching. It supports your judgement —
            it does not replace it.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button size="lg" className="h-12 px-7 text-base" render={<Link href="/pricing" />}>
              See teacher pricing
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="h-12 px-7 text-base"
              render={<Link href="/schools" />}
            >
              Bring it to your school
            </Button>
          </div>
          <ul className="mt-8 flex flex-wrap items-center justify-center gap-2">
            {HERO_PILLS.map((pill) => (
              <li
                key={pill}
                className="inline-flex items-center gap-1.5 rounded-full border border-border/60 bg-card/60 px-3 py-1 text-xs font-medium text-muted-foreground backdrop-blur-sm"
              >
                <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-primary/70" />
                {pill}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 2. Before / After */}
      <section
        aria-labelledby="change-heading"
        className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20"
      >
        <div className="text-center">
          <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
            The shift
          </p>
          <h2
            id="change-heading"
            className="mt-3 font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
          >
            What changes when teachers use The English Hub
          </h2>
          <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-muted-foreground">
            A qualitative shift in where teacher time goes — fewer evenings on repetitive marking,
            more class hours spent on what actually moves the dial.
          </p>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {/* Without */}
          <Card className="relative overflow-hidden p-6 sm:p-7">
            <span
              aria-hidden
              className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-destructive/[0.06] blur-3xl"
            />
            <div className="relative">
              <div className="flex items-center gap-2">
                <p className="font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
                  Without
                </p>
                <span className="h-px flex-1 bg-border/60" />
              </div>
              <h3 className="mt-2 font-serif text-xl font-semibold tracking-tight text-foreground">
                The familiar grind
              </h3>
              <ul className="mt-5 space-y-3.5">
                {WITHOUT_POINTS.map(({ icon: Icon, label }) => (
                  <li key={label} className="flex items-start gap-3">
                    <span className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-destructive/10 text-destructive">
                      <Icon className="h-3.5 w-3.5" />
                    </span>
                    <span className="text-sm leading-relaxed text-foreground">{label}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Card>

          {/* With */}
          <Card className="relative overflow-hidden border-teal-500/30 p-6 sm:p-7">
            <span
              aria-hidden
              className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-teal-500/[0.08] blur-3xl"
            />
            <div className="relative">
              <div className="flex items-center gap-2">
                <p className="font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-teal-600 dark:text-teal-400">
                  With The English Hub
                </p>
                <span className="h-px flex-1 bg-border/60" />
              </div>
              <h3 className="mt-2 font-serif text-xl font-semibold tracking-tight text-foreground">
                Time back, signal up
              </h3>
              <ul className="mt-5 space-y-3.5">
                {WITH_POINTS.map(({ icon: Icon, label }) => (
                  <li key={label} className="flex items-start gap-3">
                    <span className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-teal-500/15 text-teal-600 dark:text-teal-400">
                      <Icon className="h-3.5 w-3.5" />
                    </span>
                    <span className="text-sm leading-relaxed text-foreground">{label}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Card>
        </div>
      </section>

      {/* 3. Feature grid — what it does for teachers */}
      <section
        aria-labelledby="what-it-does-heading"
        className="border-y border-border/60 bg-muted/30"
      >
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <div className="text-center">
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-primary">
              Workflow surfaces
            </p>
            <h2
              id="what-it-does-heading"
              className="mt-3 font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
            >
              What it does for you
            </h2>
            <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-muted-foreground">
              Eight workflow surfaces designed around the day-to-day reality of an English
              department.
            </p>
          </div>
          <div className="mt-10">
            <GlassPanel accent="primary" className="p-2 sm:p-3">
              <div className="px-4 pt-4 sm:px-5 sm:pt-5">
                <PanelEyebrow>What it does for teachers</PanelEyebrow>
              </div>
              <div className="p-2 sm:p-3">
                <FeatureGrid
                  items={[
                    {
                      icon: Brain,
                      title: 'AI-assisted feedback',
                      body: 'Structured, criteria-referenced feedback you can review, adjust and build on.',
                    },
                    {
                      icon: LineChart,
                      title: 'Class weaknesses',
                      body: 'See where a class is struggling so you can target the next lesson.',
                    },
                    {
                      icon: ClipboardCheck,
                      title: 'Homework setting',
                      body: 'Set specification-aligned practice in a few clicks.',
                    },
                    {
                      icon: ScrollText,
                      title: 'Worksheet & revision builder',
                      body: 'Draft worksheets and revision material aligned to the specification.',
                    },
                    {
                      icon: FileText,
                      title: 'Student reports',
                      body: 'Clearer progress summaries for parents’ evenings and reviews.',
                    },
                    {
                      icon: BookOpen,
                      title: 'Reading & comprehension support',
                      body: 'Structured comprehension practice across key stages.',
                    },
                    {
                      icon: Languages,
                      title: 'EAL support',
                      body: 'Differentiated practice to support EAL learners in your class.',
                    },
                    {
                      icon: Target,
                      title: 'Targeted revision',
                      body: 'Point students at the practice that will move their grade.',
                    },
                  ]}
                />
              </div>
            </GlassPanel>
          </div>

          {/* Trust statement — pulled out as deliberate footer card */}
          <Card className="mx-auto mt-8 max-w-3xl p-5 sm:p-6">
            <div className="flex items-start gap-4">
              <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Shield className="h-5 w-5" />
              </span>
              <div>
                <p className="font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-primary">
                  Designed to support, not replace
                </p>
                <p className="mt-1.5 text-sm leading-relaxed text-foreground">
                  AI-assisted feedback is designed to support your professional judgement and reduce
                  repetitive workload — not to replace marking or teaching. Teachers stay in control
                  of every decision.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* 4. A typical week */}
      <section
        aria-labelledby="week-heading"
        className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20"
      >
        <div className="text-center">
          <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
            The rhythm
          </p>
          <h2
            id="week-heading"
            className="mt-3 font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
          >
            A typical week
          </h2>
          <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-muted-foreground">
            How the platform fits the cadence of a real English teaching week — from Monday setup
            through to half-term reporting.
          </p>
        </div>
        <ol className="mt-12 grid items-stretch gap-3 md:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr]">
          {WEEK_STEPS.map(({ icon: Icon, day, body }, i) => (
            <li key={day} className="contents">
              <Card className="relative h-full p-5">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Icon className="h-4.5 w-4.5" />
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                      Step {i + 1}
                    </span>
                  </div>
                </div>
                <p className="mt-3 font-serif text-base font-semibold tracking-tight text-foreground">
                  {day}
                </p>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{body}</p>
              </Card>
              {i < WEEK_STEPS.length - 1 && (
                <div
                  aria-hidden
                  className="hidden items-center justify-center text-muted-foreground/50 md:flex"
                >
                  <ChevronRight className="h-5 w-5" />
                </div>
              )}
            </li>
          ))}
        </ol>
      </section>

      {/* 5. Demo CTA */}
      <section aria-labelledby="demo-heading" className="border-y border-border/60 bg-muted/30">
        <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 sm:py-20">
          <GlassPanel accent="teal" className="p-8 sm:p-12">
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-primary">
              Live walkthrough
            </p>
            <h2
              id="demo-heading"
              className="mx-auto mt-3 max-w-2xl font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
            >
              See the teacher workspace
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
              Browse a sample teacher dashboard with mark queue, class analytics and student insight
              — no sign-up needed.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3">
              <Button
                size="lg"
                className="h-12 px-7 text-base"
                render={<Link href="/demo/teacher" />}
              >
                <Sparkles className="mr-1 h-4 w-4" />
                Open the teacher demo
              </Button>
              <Link
                href="/demo/school"
                className="inline-flex items-center gap-1 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                Or see the school dashboard view
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </GlassPanel>
        </div>
      </section>

      {/* 6. FAQ */}
      <section
        aria-labelledby="faq-heading"
        className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20"
      >
        <div className="text-center">
          <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
            Answers
          </p>
          <h2
            id="faq-heading"
            className="mt-3 font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
          >
            Common questions
          </h2>
        </div>
        <GlassPanel accent="sage" className="mt-10 p-5 sm:p-7">
          <PanelEyebrow className="mb-5">Teacher FAQ</PanelEyebrow>
          <SchoolFAQ />
        </GlassPanel>
      </section>

      {/* 7. Final CTA strip */}
      <section
        aria-labelledby="final-cta-heading"
        className="border-t border-border/60 bg-background"
      >
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-6 px-4 py-12 text-center sm:px-6 sm:py-14 md:flex-row md:text-left">
          <div>
            <h2
              id="final-cta-heading"
              className="font-serif text-xl font-semibold tracking-tight text-foreground sm:text-2xl"
            >
              Ready to take a closer look?
            </h2>
            <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
              Start with teacher pricing or bring The English Hub to your whole department.
            </p>
          </div>
          <div className="flex flex-col items-center gap-3 sm:flex-row">
            <Link
              href="/pricing"
              className="group inline-flex items-center gap-1.5 text-sm font-semibold text-foreground transition-colors hover:text-primary"
            >
              See teacher pricing
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <span aria-hidden className="hidden h-4 w-px bg-border sm:block" />
            <Link
              href="/schools"
              className="group inline-flex items-center gap-1.5 text-sm font-semibold text-foreground transition-colors hover:text-primary"
            >
              Bring it to your school
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
