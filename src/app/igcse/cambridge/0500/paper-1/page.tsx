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
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { requireIgcseBoard } from '@/app/igcse/_lib/guard'

export const metadata: Metadata = {
  openGraph: {
    title: 'Paper 1 Reading - IGCSE Language A',
    description:
      'Cambridge IGCSE 0500 Paper 1 Reading: three texts, four questions, 80 marks. A question-by-question breakdown, a timing plan and links to each skill guide.',
    images: [
      {
        url: '/api/og?title=Paper+1+Reading+-+IGCSE+Language+A',
        width: 1200,
        height: 630,
        alt: 'Paper 1 Reading - IGCSE Language A',
      },
    ],
  },
  title: 'Paper 1 Reading - IGCSE Language A',
  description:
    'Cambridge IGCSE 0500 Paper 1 Reading: three texts, four questions, 80 marks. A question-by-question breakdown, a timing plan and links to each skill guide.',
  alternates: {
    canonical: 'https://theenglishhub.app/igcse/cambridge/0500/paper-1',
  },
}

// 31 October 2026: rewritten to src/data/mark-scheme-guides/cambridge-0500-paper1.ts.
// The rows were Q1(a)-(e) 15, a 25-mark "directed response" to Text A as 1(f), a
// 15-mark language analysis of Text B as Q2 and a 25-mark, 250-word summary of
// Texts A and C as Q3: no 0500 syllabus sets that paper. From 2027 it is four
// questions of 20 on Texts A, B and C; the November 2026 paper, on the 2024-2026
// syllabus, is three questions of 30, 25 and 25, which the note below says. The
// minutes are the guide's suggestion; the 15 minutes' reading is Cambridge's own.
const questions = [
  {
    number: 'Question 1',
    title: 'Comprehension (Text A)',
    marks: 20,
    ao: 'Reading',
    description:
      'A series of short questions on Text A. Some ask you to find a detail, some to explain a word or phrase in your own words, and some to explain what the writer suggests or why something happened. Each part is marked point by point.',
    tip: 'The marks for each part are printed in square brackets: a [3] part needs three separate points, so count them as you write.',
  },
  {
    number: 'Question 2',
    title: 'Summary task (Text B)',
    marks: 20,
    ao: 'Reading 15 / Writing 5',
    description:
      "2(a): a summary of the points in Text B that fit the focus the question gives, in your own words and in continuous writing of no more than 120 words (reading 10, writing 5). 2(b): explain the writer's attitude in Text B, with details from the text (5).",
    tip: 'Underline every point that fits the focus, cross out repeats and examples, then combine related points into single sentences in fresh words.',
  },
  {
    number: 'Question 3',
    title: 'Short answers and language task (Text C)',
    marks: 20,
    ao: 'Reading',
    description:
      "Short questions on words and phrases in Text C (10 marks), then a language task of about 200 to 250 words on how the writer's language creates effects in an extract the question names (10 marks).",
    tip: 'In the language task, choose a few striking words or phrases (three in the specimen paper) and explain what each suggests, including any images.',
  },
  {
    number: 'Question 4',
    title: 'Extended response to reading (Text C)',
    marks: 20,
    ao: 'Reading 10 / Writing 10',
    description:
      'About 250 to 300 words based on Text C, in the form the question sets: a letter, report, journal, speech, interview or article. You use and develop ideas from the text to cover each bullet point.',
    tip: 'Note two or three ideas from Text C under each bullet, then add what each one suggests or leads to: that development is what the higher reading marks look for.',
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
    title: 'Language analysis (Q3)',
    description: 'Step-by-step method for the language task: word choice and imagery.',
    href: '/igcse/cambridge/0500/paper-1/language-analysis',
    icon: Lightbulb,
  },
  {
    title: 'Summary writing (Q2)',
    description: 'How to write a focused summary of no more than 120 words.',
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

export default async function Paper1HubPage() {
  await requireIgcseBoard(['cambridge-0500'])

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
          IGCSE Language A hub
        </Button>
      </div>

      {/* ── Hero ──────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden rounded-2xl border border-border/60 bg-gradient-to-br from-card via-card to-primary/[0.04] p-6 sm:p-8 lg:p-10">
        <div className="pointer-events-none absolute -end-20 -top-20 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />

        <div className="relative">
          <Badge className="mb-3 bg-primary/10 text-primary border-primary/20">
            IGCSE Language A
          </Badge>
          <h1 className="text-display-sm font-heading text-foreground sm:text-display">
            Paper 1: Reading
          </h1>
          <p className="mt-3 max-w-2xl text-body-lg text-muted-foreground">
            Three texts. Four questions. Eighty marks. Paper 1 tests your ability to read closely,
            infer, analyse language and summarise effectively under timed pressure.
          </p>

          <div className="mt-5 flex flex-wrap gap-3 text-body-xs text-muted-foreground">
            <span className="inline-flex items-center gap-1.5 rounded-md border border-border/60 bg-muted/40 px-3 py-1.5">
              <Clock className="size-3.5" />2 hours
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
        <p className="mb-4 text-body-sm text-muted-foreground leading-relaxed">
          This is the paper for exams from 2027. If you sit Paper 1 in November 2026, your paper
          follows the older 2024-2026 syllabus: three questions worth 30, 25 and 25 marks, in the
          same 2 hours, so its question numbers and marks are not the ones below.
        </p>
        <div className="space-y-4">
          {questions.map((q) => (
            <Card key={q.number}>
              <CardHeader className="pb-3">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <CardTitle className="text-heading-sm font-heading">
                      {q.number}: {q.title}
                    </CardTitle>
                    <CardDescription>Skills focus - {q.ao}</CardDescription>
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
                    <span className="font-semibold">Examiner tip:</span> {q.tip}
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
          <h2 className="text-heading-lg font-heading text-foreground">Study resources</h2>
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
                  <h3 className="text-body-md font-semibold text-foreground">{page.title}</h3>
                  <p className="text-body-xs text-muted-foreground">{page.description}</p>
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
          <h2 className="text-heading-md font-heading text-foreground">Suggested timing plan</h2>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          <div className="rounded-xl border border-border/60 bg-muted/30 p-4">
            <p className="text-body-xs font-semibold text-primary">15 min - read</p>
            <p className="mt-1 text-body-sm text-foreground">
              Read all three texts once, lightly annotate.
            </p>
          </div>
          <div className="rounded-xl border border-border/60 bg-muted/30 p-4">
            <p className="text-body-xs font-semibold text-primary">25 min - Q1</p>
            <p className="mt-1 text-body-sm text-foreground">
              Comprehension. Count the marks in brackets.
            </p>
          </div>
          <div className="rounded-xl border border-border/60 bg-muted/30 p-4">
            <p className="text-body-xs font-semibold text-primary">25 min - Q2</p>
            <p className="mt-1 text-body-sm text-foreground">
              About 19 min on the summary, 6 on the writer&apos;s attitude.
            </p>
          </div>
          <div className="rounded-xl border border-border/60 bg-muted/30 p-4">
            <p className="text-body-xs font-semibold text-primary">25 min - Q3</p>
            <p className="mt-1 text-body-sm text-foreground">
              About 12 min on short answers, 13 on the language task.
            </p>
          </div>
          <div className="rounded-xl border border-border/60 bg-muted/30 p-4">
            <p className="text-body-xs font-semibold text-primary">25 min - Q4</p>
            <p className="mt-1 text-body-sm text-foreground">
              Extended response on Text C. Keep the last 5 min to check.
            </p>
          </div>
        </div>
      </section>

      {/* ── Footer note ─────────────────────────────────────────────── */}
      <p className="text-center text-body-xs text-muted-foreground-subtle">
        Aligns with Cambridge syllabus 0500
      </p>
    </div>
  )
}
