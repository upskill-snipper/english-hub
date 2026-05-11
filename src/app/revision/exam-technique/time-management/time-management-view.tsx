'use client'

import { useState } from 'react'
import {
  Clock,
  ArrowLeft,
  ArrowRight,
  Lightbulb,
  AlertTriangle,
  ChevronDown,
  ChevronUp,
  Timer,
  Sparkles,
  BookOpen,
  PenLine,
  Target,
} from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

import type {
  PaperBreakdown,
  PaperTimingRow,
} from '@/components/revision/BoardSpecificExamTechnique'

/* ── Helpers ─────────────────────────────────────────────────────── */

function Section({
  title,
  badge,
  defaultOpen = false,
  children,
}: {
  title: string
  badge?: string
  defaultOpen?: boolean
  children: React.ReactNode
}) {
  const [open, setOpen] = useState(defaultOpen)
  return (
    <div className="rounded-2xl border border-border/60 bg-card overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between p-5 sm:p-6 text-left transition-colors hover:bg-accent/30"
      >
        <div className="flex items-center gap-3">
          <h2 className="text-heading-md font-heading text-foreground">{title}</h2>
          {badge && (
            <Badge variant="secondary" className="text-[0.65rem] uppercase tracking-wider">
              {badge}
            </Badge>
          )}
        </div>
        {open ? (
          <ChevronUp className="size-5 text-muted-foreground shrink-0" />
        ) : (
          <ChevronDown className="size-5 text-muted-foreground shrink-0" />
        )}
      </button>
      {open && (
        <div className="border-t border-border/40 p-5 sm:p-6 pt-5 space-y-5">{children}</div>
      )}
    </div>
  )
}

function Tip({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex gap-3 rounded-xl border border-emerald-500/20 bg-emerald-500/[0.06] p-4">
      <Lightbulb className="mt-0.5 size-4 shrink-0 text-emerald-400" />
      <p className="text-body-sm text-muted-foreground leading-relaxed">{children}</p>
    </div>
  )
}

function Warning({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex gap-3 rounded-xl border border-amber-500/20 bg-amber-500/[0.06] p-4">
      <AlertTriangle className="mt-0.5 size-4 shrink-0 text-clay-600" />
      <p className="text-body-sm text-muted-foreground leading-relaxed">{children}</p>
    </div>
  )
}

/* ── Timeline row ────────────────────────────────────────────────── */

const COLOUR_MAP: Record<NonNullable<PaperTimingRow['colour']>, string> = {
  prep: 'bg-muted text-muted-foreground',
  reading: 'bg-blue-500/10 text-blue-400',
  analysis: 'bg-violet-500/10 text-violet-400',
  creative: 'bg-emerald-500/10 text-emerald-400',
  check: 'bg-muted text-muted-foreground',
  plan: 'bg-muted text-muted-foreground',
  comparison: 'bg-violet-500/10 text-violet-400',
}

function TimelineRow({ row }: { row: PaperTimingRow }) {
  const colourClass = row.colour ? COLOUR_MAP[row.colour] : 'bg-primary/10 text-primary'
  return (
    <div className="flex gap-4 rounded-xl border border-border/40 bg-background/50 p-4">
      <div className="shrink-0 flex flex-col items-end gap-1">
        <Badge variant="secondary" className="font-mono text-xs whitespace-nowrap">
          {row.time}
        </Badge>
        {row.marks && (
          <span className={`rounded-md px-2 py-0.5 text-xs font-medium ${colourClass}`}>
            {row.marks}
          </span>
        )}
      </div>
      <div>
        <p className="text-sm font-semibold text-foreground">{row.label}</p>
        <p className="mt-0.5 text-body-sm text-muted-foreground leading-relaxed">{row.detail}</p>
      </div>
    </div>
  )
}

/* ── Main component ──────────────────────────────────────────────── */

export default function TimeManagementView({
  boardName,
  shortName,
  totalDuration,
  structureSummary,
  papers,
}: {
  boardName: string
  shortName: string
  totalDuration: string
  structureSummary: string
  papers: PaperBreakdown[]
}) {
  return (
    <div className="space-y-6 pb-16">
      {/* ── Header ────────────────────────────────────────────── */}
      <div>
        <Button
          variant="ghost"
          size="sm"
          className="mb-3 -ml-2 text-muted-foreground"
          render={<Link href="/revision/exam-technique" />}
        >
          <ArrowLeft className="size-3.5" />
          Back to Exam Technique
        </Button>
        <div className="flex items-center gap-3">
          <div className="flex size-10 items-center justify-center rounded-xl bg-amber-500/10">
            <Clock className="size-5 text-clay-600" />
          </div>
          <div>
            <h1 className="text-heading-lg font-heading text-foreground">
              {shortName} Time Management
            </h1>
            <p className="text-body-sm text-muted-foreground">
              Minute-by-minute plans for every {boardName} paper
            </p>
          </div>
        </div>
      </div>

      {/* ── Core principle ────────────────────────────────────── */}
      <section className="relative overflow-hidden rounded-2xl border border-border/60 bg-gradient-to-br from-card via-card to-amber-500/[0.04] p-6 sm:p-8">
        <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-amber-500/5 blur-3xl" />
        <Badge variant="secondary" className="mb-3">
          <Timer className="mr-1 size-3" />
          The Golden Rule
        </Badge>
        <h2 className="text-heading-md font-heading text-foreground mb-2">
          1 mark = approximately 1 minute
        </h2>
        <p className="text-body-sm text-muted-foreground max-w-2xl leading-relaxed">
          This is the simplest and most effective way to allocate your time. A 4-mark question
          deserves roughly 4 minutes. A 30-mark essay deserves roughly 30 minutes of writing time
          plus 5 minutes of planning. Spending 20 minutes on an 8-mark question steals time from
          higher-value questions and can cost you an entire grade boundary.
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          <Badge variant="secondary" className="text-xs">
            {totalDuration}
          </Badge>
          <Badge variant="secondary" className="text-xs">
            {papers.length} papers
          </Badge>
        </div>
      </section>

      {/* ── Board overview ────────────────────────────────────── */}
      <section className="rounded-2xl border border-border/60 bg-card p-6 sm:p-8">
        <div className="mb-3 flex items-center gap-3">
          <BookOpen className="size-5 text-primary" />
          <h2 className="text-heading-md font-heading text-foreground">
            {shortName} Paper Structure
          </h2>
        </div>
        <p className="text-body-sm text-muted-foreground leading-relaxed">{structureSummary}</p>
      </section>

      {/* ── Paper breakdowns ──────────────────────────────────── */}
      {papers.map((paper, idx) => (
        <Section key={paper.title} title={paper.title} badge={paper.badge} defaultOpen={idx === 0}>
          <p className="text-body-sm text-muted-foreground leading-relaxed">{paper.description}</p>

          <div className="space-y-3">
            {paper.rows.map((row) => (
              <TimelineRow key={`${paper.title}-${row.time}-${row.label}`} row={row} />
            ))}
          </div>

          {paper.tip && <Tip>{paper.tip}</Tip>}
          {paper.warning && <Warning>{paper.warning}</Warning>}
        </Section>
      ))}

      {/* ── Marks to time ─────────────────────────────────────── */}
      <Section title="How to Allocate Marks to Time">
        <p className="text-body-sm text-muted-foreground leading-relaxed">
          Use this reference table to convert any question&apos;s mark value into a time allocation
          on {shortName} papers.
        </p>

        <div className="overflow-x-auto rounded-xl border border-border/40">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border/40 bg-background/50">
                <th className="px-4 py-3 text-left font-semibold text-foreground">Marks</th>
                <th className="px-4 py-3 text-left font-semibold text-foreground">Writing time</th>
                <th className="px-4 py-3 text-left font-semibold text-foreground">+ Planning</th>
                <th className="px-4 py-3 text-left font-semibold text-foreground">What to write</th>
              </tr>
            </thead>
            <tbody className="text-muted-foreground">
              {[
                { marks: '4', write: '4 mins', plan: '--', what: '4 short points or sentences' },
                { marks: '8', write: '8 mins', plan: '1 min', what: '2-3 developed paragraphs' },
                { marks: '12', write: '10 mins', plan: '2 mins', what: '3 PEEL paragraphs' },
                {
                  marks: '16',
                  write: '14 mins',
                  plan: '2 mins',
                  what: '3-4 comparative paragraphs',
                },
                {
                  marks: '20',
                  write: '17 mins',
                  plan: '3 mins',
                  what: 'Intro + 3 paragraphs + conclusion',
                },
                {
                  marks: '30',
                  write: '25 mins',
                  plan: '5 mins',
                  what: 'Full essay: intro + 3 body + conclusion',
                },
                {
                  marks: '30+4',
                  write: '30 mins',
                  plan: '5 mins',
                  what: 'Full Lit essay (30 content + 4 SPaG = 34 total). 5 mins proofread.',
                },
                {
                  marks: '40',
                  write: '35 mins',
                  plan: '5 mins',
                  what: 'Extended writing piece. 5 mins proofread.',
                },
              ].map((row) => (
                <tr key={row.marks} className="border-b border-border/20 last:border-0">
                  <td className="px-4 py-2.5">
                    <Badge variant="secondary" className="font-mono text-xs">
                      {row.marks}
                    </Badge>
                  </td>
                  <td className="px-4 py-2.5 font-medium text-foreground">{row.write}</td>
                  <td className="px-4 py-2.5">{row.plan}</td>
                  <td className="px-4 py-2.5">{row.what}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <Warning>
          These times include reading the question but not reading the source text. Always account
          for reading time separately -- usually 10-15 minutes at the start of each paper.
        </Warning>
      </Section>

      {/* ── When to move on ───────────────────────────────────── */}
      <Section title="When to Move On">
        <p className="text-body-sm text-muted-foreground leading-relaxed">
          One of the hardest exam skills is knowing when to stop writing on one question and start
          the next. Here are the rules.
        </p>

        <div className="space-y-3">
          {[
            {
              rule: 'Set a hard time limit for each question before the exam starts',
              detail: `Write your ${shortName} time plan on the front of the exam paper. When the clock hits your cut-off, stop -- even mid-sentence -- and move on.`,
              icon: Timer,
            },
            {
              rule: 'A partial answer to every question beats a perfect answer to half',
              detail:
                'Markers can only give marks for what you write. An unfinished paper guarantees lost marks. A complete paper with some shorter answers still gives you a chance at every mark.',
              icon: Target,
            },
            {
              rule: 'If you are stuck, write your point in one sentence and move on',
              detail:
                'You can always come back if there is time at the end. One clear sentence with a quotation can still earn you 3-4 marks on a high-mark question.',
              icon: PenLine,
            },
            {
              rule: 'Never spend extra time on a question just because you know it well',
              detail:
                'Diminishing returns kick in quickly. Your fifth paragraph on a 20-mark question earns far less than your first paragraph on the next question.',
              icon: AlertTriangle,
            },
          ].map((item) => (
            <div
              key={item.rule}
              className="flex gap-4 rounded-xl border border-border/40 bg-background/50 p-4"
            >
              <item.icon className="mt-0.5 size-5 shrink-0 text-clay-600" />
              <div>
                <p className="text-sm font-semibold text-foreground">{item.rule}</p>
                <p className="mt-0.5 text-body-sm text-muted-foreground leading-relaxed">
                  {item.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* ── Quick planning techniques ─────────────────────────── */}
      <Section title="Quick Planning Techniques">
        <p className="text-body-sm text-muted-foreground leading-relaxed">
          Students who plan write better essays in less time. Here are three planning methods that
          take under 5 minutes and work across every {shortName} paper.
        </p>

        <div className="grid gap-4 sm:grid-cols-3">
          <div className="rounded-xl border border-border/40 bg-background/50 p-4 space-y-3">
            <div className="flex items-center gap-2">
              <span className="flex size-7 items-center justify-center rounded-lg bg-blue-500/10 text-sm font-bold text-blue-400">
                1
              </span>
              <p className="text-sm font-semibold text-foreground">Bullet plan</p>
            </div>
            <p className="text-body-sm text-muted-foreground leading-relaxed">
              Write your thesis at the top. Below it, list 3 bullet points -- one per paragraph.
              Next to each, write the quotation you will use. This is the fastest method and works
              for any essay.
            </p>
            <div className="rounded-lg border border-border/30 bg-card p-3 space-y-1 font-mono text-xs text-muted-foreground">
              <p className="font-semibold text-foreground">Thesis: Ambition destroys Macbeth</p>
              <p>1. Soliloquy &ldquo;vaulting ambition&rdquo; -- aware but powerless</p>
              <p>2. &ldquo;blood will have blood&rdquo; -- spiral of violence</p>
              <p>3. &ldquo;tomorrow and tomorrow&rdquo; -- nihilism, emptiness</p>
            </div>
          </div>

          <div className="rounded-xl border border-border/40 bg-background/50 p-4 space-y-3">
            <div className="flex items-center gap-2">
              <span className="flex size-7 items-center justify-center rounded-lg bg-violet-500/10 text-sm font-bold text-violet-400">
                2
              </span>
              <p className="text-sm font-semibold text-foreground">Spider diagram</p>
            </div>
            <p className="text-body-sm text-muted-foreground leading-relaxed">
              Write the question focus in the centre. Draw 3-4 branches for your main arguments. Off
              each branch, note a quotation and technique. Good for visual thinkers who need to see
              connections.
            </p>
            <p className="text-xs text-muted-foreground italic">
              Best for: Literature essays where you need to explore multiple angles of a theme or
              character.
            </p>
          </div>

          <div className="rounded-xl border border-border/40 bg-background/50 p-4 space-y-3">
            <div className="flex items-center gap-2">
              <span className="flex size-7 items-center justify-center rounded-lg bg-emerald-500/10 text-sm font-bold text-emerald-400">
                3
              </span>
              <p className="text-sm font-semibold text-foreground">Timeline plan</p>
            </div>
            <p className="text-body-sm text-muted-foreground leading-relaxed">
              Draw a line across the page. Plot key moments from the text in chronological order
              with short quotations. Circle the ones most relevant to the question. This helps you
              track how a theme or character develops.
            </p>
            <p className="text-xs text-muted-foreground italic">
              Best for: &ldquo;How does [character/theme] change?&rdquo; questions and 19th-century
              novel essays.
            </p>
          </div>
        </div>

        <Tip>
          Markers do not mark your plan, but they can see it. A visible plan signals to the marker
          that your response is structured and deliberate, even if you run out of time before
          finishing.
        </Tip>
      </Section>

      {/* ── Related Revision ─────────────────────────────────── */}
      <section className="rounded-2xl border border-border/60 bg-card p-6 sm:p-8">
        <div className="flex items-center gap-3 mb-2">
          <Sparkles className="size-5 text-primary" />
          <h2 className="text-heading-md font-heading text-foreground">Build It Into Your Plan</h2>
        </div>
        <p className="text-body-sm text-muted-foreground mb-5">
          Link timing to the rest of your revision strategy.
        </p>
        <div className="grid gap-3 sm:grid-cols-2">
          <Link
            href="/revision/grade-targets/grade-7"
            className="group flex items-start gap-3 rounded-xl border border-border/40 bg-background/50 p-4 transition-all hover:border-border hover:bg-background"
          >
            <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-cyan-500/10">
              <Target className="size-4 text-cyan-400" />
            </div>
            <div className="min-w-0">
              <p className="text-sm font-semibold text-foreground group-hover:text-primary">
                Grade 7 Standards
              </p>
              <p className="text-xs text-muted-foreground mt-0.5">
                Pace your essays for top-band marks.
              </p>
            </div>
          </Link>
          <Link
            href="/revision/grade-targets/grade-9"
            className="group flex items-start gap-3 rounded-xl border border-border/40 bg-background/50 p-4 transition-all hover:border-border hover:bg-background"
          >
            <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-cyan-500/10">
              <Target className="size-4 text-cyan-400" />
            </div>
            <div className="min-w-0">
              <p className="text-sm font-semibold text-foreground group-hover:text-primary">
                Grade 9 Standards
              </p>
              <p className="text-xs text-muted-foreground mt-0.5">
                How top students use every minute.
              </p>
            </div>
          </Link>
          <Link
            href="/revision/language/writing"
            className="group flex items-start gap-3 rounded-xl border border-border/40 bg-background/50 p-4 transition-all hover:border-border hover:bg-background"
          >
            <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-violet-500/10">
              <PenLine className="size-4 text-violet-400" />
            </div>
            <div className="min-w-0">
              <p className="text-sm font-semibold text-foreground group-hover:text-primary">
                Writing Tasks
              </p>
              <p className="text-xs text-muted-foreground mt-0.5">
                Plan, draft and check within the time limit.
              </p>
            </div>
          </Link>
          <Link
            href="/revision/language/reading"
            className="group flex items-start gap-3 rounded-xl border border-border/40 bg-background/50 p-4 transition-all hover:border-border hover:bg-background"
          >
            <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-blue-500/10">
              <BookOpen className="size-4 text-blue-400" />
            </div>
            <div className="min-w-0">
              <p className="text-sm font-semibold text-foreground group-hover:text-primary">
                Reading Comprehension
              </p>
              <p className="text-xs text-muted-foreground mt-0.5">
                Speed up your text scanning skills.
              </p>
            </div>
          </Link>
        </div>
      </section>

      {/* ── Navigation ────────────────────────────────────────── */}
      <div className="flex flex-col sm:flex-row gap-3 pt-4">
        <Button
          variant="outline"
          className="flex-1"
          render={<Link href="/revision/exam-technique/essay-structure" />}
        >
          <ArrowLeft className="size-4" />
          Essay Structure
        </Button>
        <Button
          variant="default"
          className="flex-1"
          render={<Link href="/revision/exam-technique/question-types" />}
        >
          Question Types
          <ArrowRight className="size-4" />
        </Button>
      </div>
    </div>
  )
}
