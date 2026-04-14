import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Eye,
  Lightbulb,
  Sparkles,
  BookOpen,
  Search,
  Quote,
} from 'lucide-react'

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'Unseen Poetry — Revision Hub | The English Hub',
  description:
    'Master unseen poetry with structured strategies, annotation techniques and example questions. Build confidence for Section C of your poetry paper.',
  alternates: {
    canonical: 'https://theenglishhub.app/revision/poetry/unseen-poetry',
  },
}

const STRATEGY_STEPS = [
  {
    title: 'Read it twice',
    body: 'On the first read, follow the poem like a story. On the second, look for techniques and patterns. Most students rush — slow down here.',
  },
  {
    title: 'Identify the speaker',
    body: 'Who is speaking, to whom, and from what situation? Naming the voice early helps you avoid talking only about the poet.',
  },
  {
    title: 'Annotate as you go',
    body: 'Circle key words, underline images, mark shifts in tone. Aim for 6–8 short annotations across the page.',
  },
  {
    title: 'Look for structure',
    body: 'Note stanza breaks, line lengths, enjambment, repetition and any volta. Structure carries half the meaning.',
  },
  {
    title: 'Plan three paragraphs',
    body: 'A theme, a method and a structural observation works well. Each paragraph should anchor on a short quotation.',
  },
  {
    title: 'Always link to effect',
    body: 'Don\u2019t just name a technique — explain why the poet uses it and how it shapes the reader\u2019s experience.',
  },
]

const TECHNIQUE_CHECKLIST = [
  { name: 'Imagery', hint: 'sensory description that evokes a picture' },
  { name: 'Metaphor', hint: 'an implicit comparison that carries theme' },
  { name: 'Simile', hint: 'a comparison using like or as' },
  { name: 'Personification', hint: 'giving non-human things human qualities' },
  { name: 'Caesura', hint: 'a pause mid-line that creates emphasis' },
  { name: 'Enjambment', hint: 'a sentence flowing over the line break' },
  { name: 'End-stopped lines', hint: 'closure and finality at line ends' },
  { name: 'Rhyme scheme', hint: 'the pattern of end rhymes (e.g. ABAB)' },
  { name: 'Half-rhyme', hint: 'imperfect rhyme that unsettles the ear' },
  { name: 'Alliteration / sibilance', hint: 'sound clusters that draw attention' },
]

export default function UnseenPoetryPage() {
  return (
    <div className="space-y-10 pb-16">
      {/* ── Back link ───────────────────────────────────────────────── */}
      <div>
        <Button
          variant="ghost"
          size="sm"
          className="-ml-2 text-muted-foreground"
          render={<Link href="/revision/poetry" />}
        >
          <ArrowLeft className="size-3.5" />
          Back to Poetry
        </Button>
      </div>

      {/* ── Hero ───────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden rounded-2xl border border-border/60 bg-gradient-to-br from-card via-card to-violet-500/[0.04] p-6 sm:p-8 lg:p-10">
        <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-violet-500/5 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-blue-500/5 blur-3xl" />

        <div className="relative">
          <div className="mb-4 flex flex-wrap items-center gap-2">
            <Badge variant="secondary">
              <Sparkles className="mr-1 size-3" />
              Section C — Poetry Paper
            </Badge>
            <Badge variant="outline" className="text-muted-foreground">
              <Eye className="mr-1 size-3" />
              Unseen Poetry
            </Badge>
          </div>

          <h1 className="text-display-sm font-heading text-foreground sm:text-display">
            Unseen Poetry
          </h1>
          <p className="mt-3 max-w-2xl text-body-lg text-muted-foreground">
            Section C of the poetry paper tests your ability to analyse a poem
            you have never seen before. The strategies below give you a
            repeatable system for any poem the exam might throw at you.
          </p>
        </div>
      </section>

      {/* ── Six-step strategy ─────────────────────────────────────── */}
      <section>
        <div className="mb-5 flex items-center gap-3">
          <Search className="size-5 text-violet-400" />
          <div>
            <h2 className="text-heading-lg font-heading text-foreground">
              The six-step strategy
            </h2>
            <p className="text-body-sm text-muted-foreground">
              Follow these steps in order on every unseen poem.
            </p>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {STRATEGY_STEPS.map((step, idx) => (
            <Card key={step.title} className="transition-all hover:border-border hover:shadow-card-hover">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="flex size-8 items-center justify-center rounded-lg bg-violet-500/10 text-sm font-semibold text-violet-300">
                    {idx + 1}
                  </div>
                  <CardTitle className="text-heading-md font-heading">
                    {step.title}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-body-sm text-muted-foreground leading-relaxed">
                  {step.body}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* ── Technique checklist ───────────────────────────────────── */}
      <section>
        <div className="mb-5 flex items-center gap-3">
          <Quote className="size-5 text-amber-400" />
          <div>
            <h2 className="text-heading-lg font-heading text-foreground">
              Technique checklist
            </h2>
            <p className="text-body-sm text-muted-foreground">
              Quickly scan for these on every unseen poem.
            </p>
          </div>
        </div>

        <Card>
          <CardContent className="p-6">
            <ul className="grid gap-3 sm:grid-cols-2">
              {TECHNIQUE_CHECKLIST.map((t) => (
                <li
                  key={t.name}
                  className="flex items-start gap-2 rounded-lg border border-border/40 bg-background/40 px-3 py-2"
                >
                  <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-violet-400" />
                  <div>
                    <p className="text-sm font-medium text-foreground">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.hint}</p>
                  </div>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </section>

      {/* ── Practise & Resources ──────────────────────────────────── */}
      <section>
        <div className="mb-5 flex items-center gap-3">
          <Lightbulb className="size-5 text-amber-400" />
          <h2 className="text-heading-lg font-heading text-foreground">
            Practise &amp; resources
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <Card className="transition-all hover:border-border hover:shadow-card-hover">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="flex size-10 items-center justify-center rounded-xl bg-violet-500/10">
                  <BookOpen className="size-5 text-violet-400" />
                </div>
                <CardTitle className="text-heading-md font-heading">
                  Unseen poetry worked examples
                </CardTitle>
              </div>
              <CardDescription className="mt-2">
                Annotated example poems with model answers and step-by-step
                analysis.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button
                variant="outline"
                size="sm"
                className="w-full"
                render={<Link href="/resources/poetry/unseen-poetry" />}
              >
                Open resource
                <ArrowRight className="size-3.5" />
              </Button>
            </CardContent>
          </Card>

          <Card className="transition-all hover:border-border hover:shadow-card-hover">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="flex size-10 items-center justify-center rounded-xl bg-blue-500/10">
                  <Eye className="size-5 text-blue-400" />
                </div>
                <CardTitle className="text-heading-md font-heading">
                  Get marked on an unseen
                </CardTitle>
              </div>
              <CardDescription className="mt-2">
                Submit a practice answer to our marking tool and get instant
                feedback on your reading, analysis, and context skills.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button
                variant="outline"
                size="sm"
                className="w-full"
                render={<Link href="/marking" />}
              >
                Go to marking
                <ArrowRight className="size-3.5" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* ── Back to Poetry CTA ────────────────────────────────────── */}
      <section className="rounded-2xl border border-border/60 bg-card p-6 sm:p-8 text-center">
        <BookOpen className="mx-auto mb-3 size-8 text-violet-400" />
        <h2 className="text-heading-lg font-heading text-foreground">
          Ready to study the anthology?
        </h2>
        <p className="mx-auto mt-2 max-w-lg text-body-sm text-muted-foreground">
          Head back to the Poetry hub to explore Power and Conflict, Love and
          Relationships, and your full set of anthology poems.
        </p>
        <Button
          variant="default"
          size="lg"
          className="mt-5"
          render={<Link href="/revision/poetry" />}
        >
          Back to Poetry Hub
          <ArrowRight className="size-4" />
        </Button>
      </section>
    </div>
  )
}
