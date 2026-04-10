import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ChevronLeft,
  BookOpen,
  ArrowRight,
  Clock,
  Target,
  Eye,
  FileDigit,
  Lightbulb,
  Pencil,
} from 'lucide-react'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'Paper 1 Reading — Cambridge IGCSE 0500',
  description:
    'Everything you need for Cambridge IGCSE 0500 Paper 1 Reading. Question breakdown, reading techniques, language analysis, summary writing and practice passages.',
  alternates: {
    canonical: 'https://theenglishhub.app/igcse/cambridge/0500/paper-1',
  },
}

const questions = [
  {
    number: 'Question 1(a)–(e)',
    title: 'Short comprehension',
    marks: 15,
    ao: 'Reading',
    description:
      'Short answer questions on Text A. Test explicit meaning, implicit meaning, vocabulary in context and selection of evidence.',
    tip: 'Answer in the shortest complete form. Do not waste time with full introductions.',
  },
  {
    number: 'Question 1(f) Directed Response',
    title: 'Extended response to Text A',
    marks: 25,
    ao: 'Reading 15 / Writing 10',
    description:
      'Respond to Text A in a specific form (e.g. a letter, interview, speech). You must develop ideas from the text and express them in your own words.',
    tip: 'Use three bullet points as a planning structure. Every paragraph should reshape material from the source.',
  },
  {
    number: 'Question 2',
    title: 'Language analysis',
    marks: 15,
    ao: 'Reading',
    description:
      'Analyse how the writer of Text B uses language to convey meaning and create effect. Focus on word choice, imagery and phrasing.',
    tip: 'Pick eight well-chosen words/phrases. Explain literal meaning, connotations and overall effect.',
  },
  {
    number: 'Question 3',
    title: 'Summary',
    marks: 25,
    ao: 'Reading 15 / Writing 10',
    description:
      'Write a summary of around 250 words using information from Texts A and C. Reward is for relevant content points expressed concisely in your own words.',
    tip: 'Aim for 15+ distinct points. Use short sentences. Do not quote.',
  },
]

const subpages = [
  {
    title: 'Reading techniques',
    description: 'Skimming, scanning, close reading and annotation methods.',
    href: '/igcse/cambridge/0500/paper-1/reading-techniques',
    icon: Eye,
  },
  {
    title: 'Language analysis (Q2)',
    description: 'Step-by-step method for analysing word choice and imagery.',
    href: '/igcse/cambridge/0500/paper-1/language-analysis',
    icon: Lightbulb,
  },
  {
    title: 'Summary writing (Q3)',
    description: 'How to hit the 15-point target in 250 words.',
    href: '/igcse/cambridge/0500/paper-1/summary-writing',
    icon: FileDigit,
  },
  {
    title: 'Practice passages',
    description: 'Three full practice sets with model answers.',
    href: '/igcse/cambridge/0500/paper-1/practice',
    icon: Pencil,
  },
]

export default function Paper1HubPage() {
  return (
    <div className="space-y-10 pb-16">
      {/* ── Back link ─────────────────────────────────────────────── */}
      <div>
        <Button
          variant="ghost"
          size="sm"
          render={<Link href="/igcse/cambridge/0500" />}
          className="gap-1"
        >
          <ChevronLeft className="size-4" />
          0500 hub
        </Button>
      </div>

      {/* ── Hero ──────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden rounded-2xl border border-border/60 bg-gradient-to-br from-card via-card to-primary/[0.04] p-6 sm:p-8 lg:p-10">
        <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />

        <div className="relative">
          <Badge className="mb-3 bg-primary/10 text-primary border-primary/20">
            Cambridge IGCSE 0500
          </Badge>
          <h1 className="text-display-sm font-heading text-foreground sm:text-display">
            Paper 1: Reading
          </h1>
          <p className="mt-3 max-w-2xl text-body-lg text-muted-foreground">
            Three texts. Four questions. Eighty marks. Paper 1 tests your
            ability to read closely, infer, analyse language and summarise
            effectively under timed pressure.
          </p>

          <div className="mt-5 flex flex-wrap gap-3 text-body-xs text-muted-foreground">
            <span className="inline-flex items-center gap-1.5 rounded-md border border-border/60 bg-muted/40 px-3 py-1.5">
              <Clock className="size-3.5" />
              2 hours
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-md border border-border/60 bg-muted/40 px-3 py-1.5">
              <Target className="size-3.5" />
              80 marks
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-md border border-border/60 bg-muted/40 px-3 py-1.5">
              <BookOpen className="size-3.5" />
              50% of qualification
            </span>
          </div>
        </div>
      </section>

      {/* ── Questions breakdown ───────────────────────────────────── */}
      <section>
        <div className="mb-5 flex items-center gap-3">
          <Target className="size-5 text-primary" />
          <h2 className="text-heading-lg font-heading text-foreground">
            Question-by-question breakdown
          </h2>
        </div>
        <div className="space-y-4">
          {questions.map((q) => (
            <Card key={q.number}>
              <CardHeader className="pb-3">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <CardTitle className="text-heading-sm font-heading">
                      {q.number}: {q.title}
                    </CardTitle>
                    <CardDescription>AO split — {q.ao}</CardDescription>
                  </div>
                  <Badge className="bg-primary/10 text-primary border-primary/20">
                    {q.marks} marks
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-body-sm text-muted-foreground leading-relaxed">
                  {q.description}
                </p>
                <div className="rounded-lg border border-border/60 bg-muted/30 p-3">
                  <p className="text-body-xs text-foreground">
                    <span className="font-semibold">Examiner tip:</span>{' '}
                    {q.tip}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* ── Study pages ───────────────────────────────────────────── */}
      <section>
        <div className="mb-5 flex items-center gap-3">
          <BookOpen className="size-5 text-primary" />
          <h2 className="text-heading-lg font-heading text-foreground">
            Study resources
          </h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {subpages.map((page) => {
            const Icon = page.icon
            return (
              <Link
                key={page.href}
                href={page.href}
                className="group flex items-center gap-4 rounded-xl border border-border/60 bg-card p-5 transition-all hover:border-border hover:shadow-card-hover"
              >
                <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <Icon className="size-5 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-body-md font-semibold text-foreground">
                    {page.title}
                  </h3>
                  <p className="text-body-xs text-muted-foreground">
                    {page.description}
                  </p>
                </div>
                <ArrowRight className="size-4 text-muted-foreground transition-transform group-hover:translate-x-0.5" />
              </Link>
            )
          })}
        </div>
      </section>

      {/* ── Timing plan ───────────────────────────────────────────── */}
      <section className="rounded-2xl border border-border/60 bg-card p-6 sm:p-8">
        <div className="mb-4 flex items-center gap-3">
          <Clock className="size-5 text-primary" />
          <h2 className="text-heading-md font-heading text-foreground">
            Suggested timing plan
          </h2>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-xl border border-border/60 bg-muted/30 p-4">
            <p className="text-body-xs font-semibold text-primary">
              10 min — read
            </p>
            <p className="mt-1 text-body-sm text-foreground">
              Read all three passages once, lightly annotate.
            </p>
          </div>
          <div className="rounded-xl border border-border/60 bg-muted/30 p-4">
            <p className="text-body-xs font-semibold text-primary">
              45 min — Q1
            </p>
            <p className="mt-1 text-body-sm text-foreground">
              Short answers (10 min) + directed response (35 min).
            </p>
          </div>
          <div className="rounded-xl border border-border/60 bg-muted/30 p-4">
            <p className="text-body-xs font-semibold text-primary">
              25 min — Q2
            </p>
            <p className="mt-1 text-body-sm text-foreground">
              Language analysis. Eight well-chosen words or phrases.
            </p>
          </div>
          <div className="rounded-xl border border-border/60 bg-muted/30 p-4">
            <p className="text-body-xs font-semibold text-primary">
              40 min — Q3
            </p>
            <p className="mt-1 text-body-sm text-foreground">
              Summary. Point-spot, plan, write, check.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
