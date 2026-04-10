import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Clock,
  Sparkles,
  Target,
  CheckCircle2,
  Timer,
} from 'lucide-react'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'Paper 1 Reading | Cambridge IGCSE 0990 | The English Hub',
  description:
    'Cambridge IGCSE 0990 Paper 1 Reading: full overview, question structure, timing strategy and 9-1 grade boundaries.',
  alternates: { canonical: 'https://theenglishhub.app/igcse/cambridge/0990/paper-1' },
}

const questions = [
  {
    q: 'Question 1(a)-(e)',
    marks: '15 marks',
    focus: 'Comprehension of Text A',
    description:
      'Short answer questions testing explicit meaning, implicit meaning and understanding of specific details in Text A.',
  },
  {
    q: 'Question 1(f)',
    marks: '10 marks',
    focus: 'Language analysis of Text A',
    description:
      'Select three effective words or phrases from a passage and explain how the writer uses language for effect.',
  },
  {
    q: 'Question 2',
    marks: '25 marks',
    focus: 'Extended response on Texts A and/or B',
    description:
      'Longer analytical response — explore how the writer of one of the texts uses language and structure to create effects.',
  },
  {
    q: 'Question 3',
    marks: '15 + 25 marks',
    focus: 'Summary task',
    description:
      'Select and summarise information from Texts A and B on a given topic. Marked for content (15) and writing (25 for the whole paper is split — see mark scheme).',
  },
]

const boundaries = [
  { grade: 9, mark: 68 },
  { grade: 8, mark: 62 },
  { grade: 7, mark: 55 },
  { grade: 6, mark: 48 },
  { grade: 5, mark: 41 },
  { grade: 4, mark: 34 },
  { grade: 3, mark: 27 },
]

const timingRows = [
  { step: 'Read Text A and Text B carefully', time: '15 min' },
  { step: 'Question 1 (comprehension + language)', time: '35 min' },
  { step: 'Question 2 (extended analysis)', time: '35 min' },
  { step: 'Question 3 (summary)', time: '30 min' },
  { step: 'Review and check', time: '5 min' },
]

export default function Paper1Page() {
  return (
    <div className="space-y-10 pb-16">
      <div>
        <Button
          variant="ghost"
          size="sm"
          render={<Link href="/igcse/cambridge/0990" />}
        >
          <ArrowLeft className="size-3.5" />
          Back to 0990 hub
        </Button>
      </div>

      {/* Hero */}
      <section className="relative overflow-hidden rounded-2xl border border-border/60 bg-gradient-to-br from-card via-card to-primary/[0.04] p-6 sm:p-8 lg:p-10">
        <div className="relative">
          <div className="mb-4 flex flex-wrap items-center gap-2">
            <Badge className="bg-primary/10 text-primary border-primary/20">
              <Sparkles className="mr-1 size-3" />
              Cambridge IGCSE 0990
            </Badge>
            <Badge variant="secondary">Paper 1</Badge>
            <Badge variant="secondary">Reading</Badge>
          </div>
          <h1 className="text-display-sm font-heading text-foreground sm:text-display">
            Paper 1: Reading
          </h1>
          <p className="mt-3 max-w-3xl text-body-lg text-muted-foreground">
            Two hours. Two unseen non-fiction texts. Three compulsory
            questions worth 80 marks — 50% of the 0990 qualification.
          </p>
          <div className="mt-6 flex flex-wrap gap-3 text-body-sm text-muted-foreground">
            <span className="inline-flex items-center gap-1.5 rounded-md border border-border/60 bg-muted/40 px-3 py-1.5">
              <Clock className="size-3.5" />
              2 hours
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-md border border-border/60 bg-muted/40 px-3 py-1.5">
              <BookOpen className="size-3.5" />
              80 marks
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-md border border-border/60 bg-muted/40 px-3 py-1.5">
              <Target className="size-3.5" />
              50% of total
            </span>
          </div>
        </div>
      </section>

      {/* Structure */}
      <section>
        <div className="mb-5 flex items-center gap-3">
          <BookOpen className="size-5 text-primary" />
          <h2 className="text-heading-lg font-heading text-foreground">
            Paper structure
          </h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {questions.map((q) => (
            <Card key={q.q}>
              <CardHeader className="pb-2">
                <div className="flex items-start justify-between gap-3">
                  <CardTitle className="text-body font-semibold">
                    {q.q}
                  </CardTitle>
                  <Badge variant="secondary">{q.marks}</Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-body-xs font-medium text-primary">
                  {q.focus}
                </p>
                <p className="text-body-sm text-muted-foreground leading-relaxed">
                  {q.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Grade boundaries */}
      <section>
        <div className="mb-5 flex items-center gap-3">
          <Target className="size-5 text-primary" />
          <h2 className="text-heading-lg font-heading text-foreground">
            9-1 grade boundaries (indicative)
          </h2>
        </div>
        <div className="overflow-hidden rounded-2xl border border-border/60 bg-card">
          <div className="overflow-x-auto">
            <table className="w-full text-body-sm">
              <thead className="border-b border-border/60 bg-muted/40 text-body-xs uppercase text-muted-foreground">
                <tr>
                  <th className="px-4 py-3 text-left">Grade</th>
                  <th className="px-4 py-3 text-left">Mark (of 80)</th>
                  <th className="px-4 py-3 text-left">Percentage</th>
                  <th className="px-4 py-3 text-left">A*-G equivalent</th>
                </tr>
              </thead>
              <tbody>
                {boundaries.map((b) => (
                  <tr
                    key={b.grade}
                    className="border-b border-border/40 last:border-0"
                  >
                    <td className="px-4 py-3 font-semibold text-foreground">
                      {b.grade}
                    </td>
                    <td className="px-4 py-3 text-muted-foreground">
                      {b.mark}
                    </td>
                    <td className="px-4 py-3 text-muted-foreground">
                      {Math.round((b.mark / 80) * 100)}%
                    </td>
                    <td className="px-4 py-3 text-muted-foreground">
                      {b.grade === 9
                        ? 'Above A*'
                        : b.grade === 8
                        ? 'A*/A'
                        : b.grade === 7
                        ? 'A'
                        : b.grade === 6
                        ? 'B'
                        : b.grade === 5
                        ? 'B/C'
                        : b.grade === 4
                        ? 'C'
                        : 'D'}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <p className="mt-3 text-body-xs text-muted-foreground">
          Boundaries are approximate and vary between sessions. Always check
          the actual boundaries for your exam session on the Cambridge
          website.
        </p>
      </section>

      {/* Timing strategy */}
      <section className="rounded-2xl border border-border/60 bg-card p-6 sm:p-8">
        <div className="mb-4 flex items-center gap-3">
          <Timer className="size-5 text-primary" />
          <h2 className="text-heading-md font-heading text-foreground">
            Suggested timing (120 minutes)
          </h2>
        </div>
        <ul className="space-y-3">
          {timingRows.map((t) => (
            <li
              key={t.step}
              className="flex items-center justify-between gap-3 rounded-xl border border-border/60 bg-muted/30 p-4"
            >
              <span className="text-body-sm text-foreground">{t.step}</span>
              <Badge variant="secondary">{t.time}</Badge>
            </li>
          ))}
        </ul>
      </section>

      {/* What examiners reward */}
      <section className="rounded-2xl border border-border/60 bg-card p-6 sm:p-8">
        <h2 className="text-heading-md font-heading text-foreground">
          What examiners reward
        </h2>
        <ul className="mt-4 space-y-3 text-body-sm text-muted-foreground">
          <li className="flex items-start gap-3">
            <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
            <span>
              <strong className="text-foreground">Precise, short quotations</strong>
              {' '}— one or two words often beats a whole sentence. Embed them
              in your analysis, don&apos;t dump them.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
            <span>
              <strong className="text-foreground">Comment on effect</strong>{' '}
              — say what the language <em>does</em> to the reader, not just
              what technique is used.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
            <span>
              <strong className="text-foreground">Own words in the summary</strong>{' '}
              — paraphrase rather than copy whole phrases from the original
              texts.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
            <span>
              <strong className="text-foreground">Cover the full range</strong>{' '}
              — the extended analysis should explore language <em>and</em>{' '}
              structure, not just word choices.
            </span>
          </li>
        </ul>
      </section>

      {/* Next */}
      <section className="rounded-2xl border border-primary/20 bg-primary/5 p-6 sm:p-8">
        <h2 className="text-heading-md font-heading text-foreground">
          Drill down further
        </h2>
        <div className="mt-4 flex flex-wrap gap-2">
          <Button
            size="sm"
            render={<Link href="/igcse/cambridge/0990/paper-1/question-types" />}
          >
            Question types breakdown
            <ArrowRight className="size-3.5" />
          </Button>
          <Button
            size="sm"
            variant="outline"
            render={<Link href="/igcse/cambridge/0990/practice-paper-1" />}
          >
            Practice Paper 1
          </Button>
        </div>
      </section>
    </div>
  )
}
