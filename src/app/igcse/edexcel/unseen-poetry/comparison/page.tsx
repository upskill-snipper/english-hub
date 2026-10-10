'use client'
// [P2:auth] board guard deferred - client page, no server-side requireIgcseBoard

import {
  PenTool,
  ArrowLeft,
  ArrowRight,
  Lightbulb,
  AlertTriangle,
  Sparkles,
  Layers,
  GitCompare,
  MessageSquare,
} from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { useT } from '@/lib/i18n/use-t'

/**
 * REWRITTEN 10 October 2026. Until then this page taught comparing two unseen
 * poems: a two-column plan, point-by-point and block structures, linking
 * phrases, and a model paragraph setting Dickinson against Wordsworth. 4ET1
 * never asks for that. Paper 1 Section A prints one poem and asks how the
 * writer presents a subject in it, for 20 marks on AO2 alone, with no
 * comparison and no context (specification Issue 3, and every question paper
 * from the specimen to June 2025). Comparison is Section B, on two Part 3
 * anthology poems. The URL is kept because other pages, the sitemap and
 * llms.txt link to it.
 *
 * Each rule below comes from Pearson's own documents: the mark scheme's note
 * that summary, paraphrase and a list of devices are not enough and that some
 * personal response must be given (Question 1, June 2025 mark scheme), and the
 * June 2025 examiners' report, which found that candidates who did well in the
 * poetry sections analysed language, form and structure together rather than
 * in separate paragraphs. The model paragraph quotes a public-domain poem that
 * the practice page prints in full.
 */

const PLAN_STEPS = [
  'Underline the subject the question names. The paper asks how the writer presents it, so every point must be about that.',
  'Pick three or four things the poem does with that subject, each with a short quotation you have already annotated.',
  'Put them in an order that builds an argument: for example, from how the poem opens to where it ends up.',
  'Write one sentence that answers the question. That is your opening.',
]

const MISTAKES = [
  'Retelling the poem. The mark scheme says that summarising or paraphrasing is not enough.',
  'Listing devices without saying what they do. The mark scheme says that simply listing literary devices is not enough either.',
  'Writing about language, then form, then structure in separate blocks. The June 2025 examiners found that candidates who did well analysed them together.',
  'Losing the question. Every paragraph should be about how the writer presents the subject the question names.',
  'Adding context or a second poem. Neither is assessed in Section A, so the time is better spent on the poem in front of you.',
]

export default function UnseenPoetryAnswerPage() {
  const tr = useT()
  return (
    <div className="space-y-10 pb-16">
      <div>
        <Button
          variant="ghost"
          size="sm"
          className="mb-3 -ms-2 text-muted-foreground"
          render={<Link href="/igcse/edexcel/unseen-poetry" />}
        >
          <ArrowLeft className="size-3.5" />
          {tr('igcse.page.back_to_unseen_poetry')}
        </Button>
        <div className="flex items-center gap-3">
          <div className="flex size-10 items-center justify-center rounded-xl bg-violet-500/10">
            <PenTool className="size-5 text-violet-400" />
          </div>
          <div className="flex min-w-0 flex-col gap-1">
            <div className="flex flex-wrap items-center gap-2">
              <h1 className="text-heading-lg font-heading text-foreground">Building Your Answer</h1>
              <Badge variant="secondary" className="text-[0.65rem] uppercase tracking-wider">
                {tr('igcse.page.badge_edexcel_lit')}
              </Badge>
            </div>
            <p className="text-body-sm text-muted-foreground">
              How to turn your reading of one unseen poem into a clear, analytical answer
            </p>
          </div>
        </div>
      </div>

      {/* ── Intro ───────────────────────────────────────────────── */}
      <section className="relative overflow-hidden rounded-2xl border border-border/60 bg-gradient-to-br from-card via-card to-violet-500/[0.04] p-6 sm:p-8">
        <div className="pointer-events-none absolute -end-16 -top-16 h-48 w-48 rounded-full bg-violet-500/5 blur-3xl" />
        <Badge variant="secondary" className="mb-3">
          <Sparkles className="me-1 size-3" />
          One poem, one question
        </Badge>
        <h2 className="text-heading-md font-heading text-foreground mb-2">
          The unseen question is not a comparison
        </h2>
        <p className="text-body-sm text-muted-foreground max-w-2xl leading-relaxed">
          Section A of 4ET1 Paper 1 prints one poem and asks how the writer presents a subject in
          it, for 20 marks. There is no second poem to compare: comparison belongs to Section B,
          where you compare two poems from Part 3 of the anthology. This page shows how to build an
          answer on the one poem in front of you, in the 35 minutes Pearson suggests.
        </p>
      </section>

      {/* ── Step 1: plan ────────────────────────────────────────── */}
      <section className="rounded-2xl border border-border/60 bg-card p-6 sm:p-8">
        <div className="mb-4 flex items-center gap-3">
          <Layers className="size-5 text-sky-400" />
          <h2 className="text-heading-md font-heading text-foreground">
            Step 1: Turn Your Annotations into a Plan
          </h2>
        </div>
        <ol className="space-y-3">
          {PLAN_STEPS.map((step, i) => (
            <li key={step} className="flex gap-3">
              <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-mono font-semibold text-primary">
                {i + 1}
              </span>
              <p className="text-body-sm text-muted-foreground leading-relaxed">{step}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* ── Step 2: organise ────────────────────────────────────── */}
      <section className="rounded-2xl border border-border/60 bg-card p-6 sm:p-8">
        <div className="mb-4 flex items-center gap-3">
          <MessageSquare className="size-5 text-emerald-400" />
          <h2 className="text-heading-md font-heading text-foreground">
            Step 2: Organise by Idea, Not by Technique
          </h2>
        </div>
        <p className="text-body-sm text-muted-foreground leading-relaxed">
          Build each paragraph around one idea about the subject, then bring in whatever the writer
          does to create it: a word choice, an image, a line break, a rhyme, a change in the last
          stanza. Pearson&rsquo;s examiners reported in June 2025 that candidates who did well
          thought about the deeper meaning of the poem and analysed language, form and structure
          together, rather than in separate paragraphs.
        </p>
      </section>

      {/* ── Model paragraph ─────────────────────────────────────── */}
      <section className="rounded-2xl border border-border/60 bg-card p-6 sm:p-8">
        <div className="mb-4 flex items-center gap-3">
          <Sparkles className="size-5 text-primary" />
          <h2 className="text-heading-md font-heading text-foreground">Model Paragraph</h2>
        </div>
        <p className="text-body-sm text-muted-foreground mb-4">
          On Dickinson&rsquo;s &ldquo;Hope is the thing with feathers&rdquo;, answering
          &ldquo;Explore how the writer presents hope in this poem&rdquo;:
        </p>
        <div className="rounded-xl border border-border/40 bg-background/50 p-5 text-body-sm italic leading-relaxed text-foreground/90">
          {`Dickinson presents hope as small and persistent rather than grand. The extended metaphor of "the thing with feathers" turns an abstract feeling into a bird that "perches in the soul", a verb that suggests it rests lightly but is always ready. It sings "without the words" and "never stops - at all", and the dashes that break up that line slow the reader down, so that hope seems to survive through pauses rather than force. The final stanza turns from what hope does to what it asks in return: even "in Extremity" it never "asked a crumb" of the speaker, and the poem ends by presenting hope as entirely selfless.`}
        </div>
        <div className="mt-4 flex gap-3 rounded-xl border border-emerald-500/20 bg-emerald-500/[0.06] p-4">
          <Lightbulb className="mt-0.5 size-4 shrink-0 text-emerald-400" />
          <p className="text-body-sm text-muted-foreground leading-relaxed">
            <span className="font-semibold text-foreground">Notice: </span>
            Every sentence says something about how hope is presented, and each method (the
            metaphor, a verb, the punctuation, the turn in the last stanza) is there to support that
            point. Language, form and structure sit in the same paragraph, and there is no context
            and no second poem.
          </p>
        </div>
      </section>

      {/* ── Common mistakes ─────────────────────────────────────── */}
      <section className="rounded-2xl border border-amber-500/20 bg-amber-500/[0.04] p-6 sm:p-8">
        <div className="mb-4 flex items-center gap-3">
          <AlertTriangle className="size-5 text-clay-600" />
          <h2 className="text-heading-md font-heading text-foreground">Common Mistakes</h2>
        </div>
        <ul className="space-y-3">
          {MISTAKES.map((m) => (
            <li key={m} className="flex gap-3">
              <span className="mt-1 text-clay-600">-</span>
              <p className="text-body-sm text-muted-foreground leading-relaxed">{m}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* ── Where comparison is tested ──────────────────────────── */}
      <section className="rounded-2xl border border-border/60 bg-card p-6 sm:p-8">
        <div className="mb-4 flex items-center gap-3">
          <GitCompare className="size-5 text-violet-400" />
          <h2 className="text-heading-md font-heading text-foreground">
            Comparing Poems Is Section B
          </h2>
        </div>
        <p className="text-body-sm text-muted-foreground leading-relaxed">
          Comparison is tested in Section B of the same paper, where you compare two poems from Part
          3 of the anthology, printed for you in a Poetry Booklet. For that question, see the{' '}
          <Link
            href="/igcse/edexcel/poetry"
            className="font-medium text-primary underline underline-offset-2 hover:text-primary/80"
          >
            anthology poetry guide
          </Link>{' '}
          and the{' '}
          <Link
            href="/igcse/edexcel/essay-technique/comparison-essays"
            className="font-medium text-primary underline underline-offset-2 hover:text-primary/80"
          >
            comparison essays guide
          </Link>
          .
        </p>
      </section>

      {/* ── Next ────────────────────────────────────────────────── */}
      <section className="rounded-2xl border border-border/60 bg-gradient-to-r from-emerald-500/[0.06] via-card to-primary/[0.04] p-6 sm:p-8 text-center">
        <MessageSquare className="mx-auto mb-3 size-8 text-emerald-400" />
        <h2 className="text-heading-lg font-heading text-foreground">
          Now sharpen your language analysis
        </h2>
        <p className="mx-auto mt-2 max-w-lg text-body-sm text-muted-foreground">
          An answer is only as good as the analysis in it. Learn the What-How-Why framework and turn
          observation into insight.
        </p>
        <Button
          variant="default"
          size="lg"
          className="mt-5"
          render={<Link href="/igcse/edexcel/unseen-poetry/language-analysis" />}
        >
          Language Analysis Framework
          <ArrowRight className="size-4" />
        </Button>
      </section>
    </div>
  )
}
