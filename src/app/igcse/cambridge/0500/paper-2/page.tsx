import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ChevronLeft,
  PenTool,
  ArrowRight,
  Clock,
  Target,
  FileEdit,
  Feather,
  ScrollText,
} from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { requireIgcseBoard } from '@/app/igcse/_lib/guard'

export const metadata: Metadata = {
  openGraph: {
    title: 'Paper 2 Directed Writing & Composition - IGCSE Language A',
    description:
      'IGCSE Language A Paper 2 overview. Section A directed writing, Section B descriptive or narrative composition. Marks, timings and technique. Aligns with Cambridge syllabus 0500.',
  },
  title: 'Paper 2 Directed Writing & Composition - IGCSE Language A',
  description:
    'IGCSE Language A Paper 2 overview. Section A directed writing, Section B descriptive or narrative composition. Marks, timings and technique. Aligns with Cambridge syllabus 0500.',
  alternates: {
    canonical: 'https://theenglishhub.app/igcse/cambridge/0500/paper-2',
  },
}

const sections = [
  {
    section: 'Section A',
    title: 'Directed Writing',
    marks: 40,
    description:
      'Read a short stimulus text (sometimes two) and respond in a specific form - a letter, speech, article or report - for a clear purpose and audience. 250-350 words.',
    split: 'Reading 15 marks • Writing 25 marks',
    icon: FileEdit,
    href: '/igcse/cambridge/0500/paper-2/directed-writing',
  },
]

const compositionOptions = [
  {
    title: 'Descriptive composition',
    description:
      'Create a vivid setting, atmosphere or moment using sensory detail and figurative language. No plot twists required - focus on imagery.',
    marks: 40,
    icon: Feather,
    href: '/igcse/cambridge/0500/paper-2/descriptive-writing',
  },
  {
    title: 'Narrative composition',
    description:
      'Tell a focused, well-structured story with clear characters, conflict and resolution. Aim for restraint over spectacle.',
    marks: 40,
    icon: ScrollText,
    href: '/igcse/cambridge/0500/paper-2/narrative-writing',
  },
]

export default async function Paper2HubPage() {
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
        <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />

        <div className="relative">
          <Badge className="mb-3 bg-primary/10 text-primary border-primary/20">
            IGCSE Language A
          </Badge>
          <h1 className="text-display-sm font-heading text-foreground sm:text-display">
            Paper 2: Directed Writing and Composition
          </h1>
          <p className="mt-3 max-w-2xl text-body-lg text-muted-foreground">
            Two tasks, two hours, eighty marks. Section A tests your ability to shape writing for a
            real-world purpose. Section B is your chance to write a composition that engages and
            surprises.
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
              <PenTool className="size-3.5" />
              50% of qualification
            </span>
          </div>
        </div>
      </section>

      {/* ── Section A ─────────────────────────────────────────────── */}
      <section>
        <div className="mb-5 flex items-center gap-3">
          <FileEdit className="size-5 text-primary" />
          <h2 className="text-heading-lg font-heading text-foreground">
            Section A - Directed Writing
          </h2>
        </div>
        {sections.map((s) => {
          const Icon = s.icon
          return (
            <Card key={s.section}>
              <CardHeader className="pb-3">
                <div className="flex items-start gap-4">
                  <div className="flex size-11 items-center justify-center rounded-xl bg-primary/10">
                    <Icon className="size-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-heading-md font-heading">{s.title}</CardTitle>
                    <CardDescription>{s.split}</CardDescription>
                  </div>
                  <Badge className="bg-primary/10 text-primary border-primary/20">
                    {s.marks} marks
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-body-sm text-muted-foreground leading-relaxed">
                  {s.description}
                </p>
                <Button variant="default" size="sm" render={<Link href={s.href} />}>
                  Directed writing guide
                  <ArrowRight className="size-3.5" />
                </Button>
              </CardContent>
            </Card>
          )
        })}
      </section>

      {/* ── Section B ─────────────────────────────────────────────── */}
      <section>
        <div className="mb-5 flex items-center gap-3">
          <PenTool className="size-5 text-primary" />
          <h2 className="text-heading-lg font-heading text-foreground">
            Section B - Composition (choose one)
          </h2>
        </div>
        <p className="mb-5 text-body-sm text-muted-foreground">
          You pick ONE of four titles - two descriptive, two narrative. 350-450 words. Marked on
          content and structure (16) plus style and accuracy (24).
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          {compositionOptions.map((opt) => {
            const Icon = opt.icon
            return (
              <Card
                key={opt.title}
                className="group relative flex flex-col overflow-hidden transition-all duration-200 hover:border-border hover:shadow-card-hover"
              >
                <CardHeader className="pb-3">
                  <div className="mb-3 flex items-start justify-between gap-3">
                    <div className="flex size-11 items-center justify-center rounded-xl bg-primary/10">
                      <Icon className="size-5 text-primary" />
                    </div>
                    <Badge className="bg-primary/10 text-primary border-primary/20">
                      {opt.marks} marks
                    </Badge>
                  </div>
                  <CardTitle className="text-heading-md font-heading">{opt.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-1 flex-col gap-4">
                  <p className="text-body-sm text-muted-foreground leading-relaxed">
                    {opt.description}
                  </p>
                  <div className="mt-auto pt-2">
                    <Button
                      variant="default"
                      size="sm"
                      className="w-full"
                      render={<Link href={opt.href} />}
                    >
                      Open guide
                      <ArrowRight className="size-3.5" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
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
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-xl border border-border/60 bg-muted/30 p-4">
            <p className="text-body-xs font-semibold text-primary">5 min - read</p>
            <p className="mt-1 text-body-sm text-foreground">
              Read the Section A stimulus text and Section B titles.
            </p>
          </div>
          <div className="rounded-xl border border-border/60 bg-muted/30 p-4">
            <p className="text-body-xs font-semibold text-primary">50 min - Section A</p>
            <p className="mt-1 text-body-sm text-foreground">
              Plan (5), draft (40), proofread (5). Stay within 350 words.
            </p>
          </div>
          <div className="rounded-xl border border-border/60 bg-muted/30 p-4">
            <p className="text-body-xs font-semibold text-primary">55 min - Section B</p>
            <p className="mt-1 text-body-sm text-foreground">
              Plan (8), draft (40), proofread (7). Stay within 450 words.
            </p>
          </div>
          <div className="rounded-xl border border-border/60 bg-muted/30 p-4">
            <p className="text-body-xs font-semibold text-primary">10 min - check</p>
            <p className="mt-1 text-body-sm text-foreground">
              Final pass for spelling, punctuation, tense consistency.
            </p>
          </div>
        </div>
      </section>

      {/* ── Footer note ─────────────────────────────────────────────── */}
      <p className="text-center text-body-xs text-muted-foreground/60">
        Aligns with Cambridge syllabus 0500
      </p>
    </div>
  )
}
