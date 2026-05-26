import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ArrowLeft,
  ArrowUpRight,
  Sparkles,
  FileText,
  Calendar,
  CheckCircle2,
  Clock,
  Lightbulb,
  Info,
  BookOpen,
} from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { requireIgcseBoard } from '@/app/igcse/_lib/guard'

export const metadata: Metadata = {
  openGraph: {
    title: 'Edexcel IGCSE Literature Past Papers - The English Hub',
    description:
      'How to find, download and practise with Pearson Edexcel IGCSE English Literature past papers. Study tips, timing advice and mark scheme strategy.',
  },
  title: 'Edexcel IGCSE Literature Past Papers',
  description:
    'How to find, download and practise with Pearson Edexcel IGCSE English Literature past papers. Study tips, timing advice and mark scheme strategy.',
  alternates: {
    canonical: 'https://theenglishhub.app/igcse/edexcel/past-papers',
  },
}

const officialSources = [
  {
    name: 'Pearson Qualifications - Past papers and mark schemes',
    href: 'https://qualifications.pearson.com/en/qualifications/edexcel-international-gcses.html',
    description:
      'The official Edexcel site hosts question papers, mark schemes and examiner reports for every series since the 2016 specification launch.',
  },
  {
    name: 'Pearson Qualifications - Specification and sample assessment',
    href: 'https://qualifications.pearson.com/en/qualifications/edexcel-international-gcses.html',
    description:
      'Sample assessment materials (SAMs), the full specification document and the poetry anthology are all available as free downloads.',
  },
  {
    name: 'Pearson Examiner reports',
    href: 'https://qualifications.pearson.com/en/qualifications/edexcel-international-gcses.html',
    description:
      'Examiner commentary for each series explains where candidates lost marks and highlights the techniques top-band answers use.',
  },
]

const studyTips = [
  {
    icon: Clock,
    title: 'Practise under full timing',
    description:
      'Sit complete papers under strict 2-hour (Paper 1) or 90-minute (Paper 2) conditions. Handwriting endurance matters in a closed-book literature exam.',
  },
  {
    icon: BookOpen,
    title: 'Mark yourself with the official scheme',
    description:
      'Download the published mark scheme and examiner report for the same series. Score your response at level-of-response bands, not individual marks.',
  },
  {
    icon: Lightbulb,
    title: 'Build a question bank by theme',
    description:
      'Cluster past questions on the same text by theme (power, family, isolation). Patterns reveal what examiners ask most often.',
  },
  {
    icon: CheckCircle2,
    title: 'Target weaknesses first',
    description:
      'Drill the sections you score lowest on. Unseen poetry and extract questions have specific techniques that reward focused practice.',
  },
  {
    icon: Calendar,
    title: 'Work backwards from exam day',
    description:
      'Three months out, sit one full paper per week. One month out, move to two papers per week with thorough self-marking between each.',
  },
  {
    icon: FileText,
    title: 'Annotate model answers',
    description:
      'Read examiner-graded high-band scripts and annotate where they show understanding, language analysis, context, and comparison. Translate the moves into your own voice.',
  },
]

export default async function EdexcelPastPapersPage() {
  await requireIgcseBoard(['edexcel-igcse'])

  return (
    <div className="space-y-10 pb-16">
      {/* ── Back link ───────────────────────────────────────────────── */}
      <div>
        <Button
          variant="ghost"
          size="sm"
          className="mb-3 -ml-2 text-muted-foreground"
          render={<Link href="/igcse/edexcel" />}
        >
          <ArrowLeft className="size-3.5" />
          Back to Edexcel IGCSE
        </Button>
      </div>

      {/* ── Hero ────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden rounded-2xl border border-border/60 bg-gradient-to-br from-card via-card to-primary/[0.04] p-6 sm:p-8 lg:p-10">
        <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-primary/5 blur-3xl" />

        <div className="relative">
          <div className="mb-4 flex flex-wrap items-center gap-2">
            <Badge variant="secondary">
              <Sparkles className="mr-1 size-3" />
              Past papers & practice
            </Badge>
            <Badge className="bg-primary/10 text-primary border-primary/20">
              Edexcel IGCSE Literature
            </Badge>
          </div>
          <h1 className="text-display-sm font-heading text-foreground sm:text-display">
            IGCSE Literature Past Papers
          </h1>
          <p className="mt-3 max-w-2xl text-body-lg text-muted-foreground">
            Past papers are the single most effective revision resource for IGCSE English
            Literature. This page shows you where to find official Edexcel materials and how to
            practise with them like a top-band candidate.
          </p>
        </div>
      </section>

      {/* ── Copyright / hosting note ───────────────────────────────── */}
      <section className="flex items-start gap-3 rounded-xl border border-blue-500/20 bg-blue-500/5 p-4">
        <Info className="mt-0.5 size-4 shrink-0 text-blue-400" />
        <p className="text-body-sm text-muted-foreground">
          We do not host Edexcel past papers on The English Hub. Pearson publishes all question
          papers, mark schemes and examiner reports for free on their official site - always use
          those to guarantee the latest, unedited versions.
        </p>
      </section>

      {/* ── Official sources ───────────────────────────────────────── */}
      <section>
        <div className="mb-5 flex items-center gap-3">
          <FileText className="size-5 text-primary" />
          <h2 className="text-heading-lg font-heading text-foreground">
            Where to find official papers
          </h2>
        </div>

        <div className="grid gap-4 lg:grid-cols-3">
          {officialSources.map((source) => (
            <Card
              key={source.name}
              className="flex flex-col transition-all duration-200 hover:border-border hover:shadow-card-hover"
            >
              <CardHeader className="pb-3">
                <div className="mb-2 flex size-10 items-center justify-center rounded-xl bg-primary/10">
                  <FileText className="size-5 text-primary" />
                </div>
                <CardTitle className="text-body-lg font-heading leading-tight">
                  {source.name}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-1 flex-col gap-4">
                <p className="text-body-sm text-muted-foreground leading-relaxed">
                  {source.description}
                </p>
                <div className="mt-auto">
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full"
                    render={<a href={source.href} target="_blank" rel="noopener noreferrer" />}
                  >
                    Visit Pearson
                    <ArrowUpRight className="size-3.5" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* ── Study tips ─────────────────────────────────────────────── */}
      <section>
        <div className="mb-5 flex items-center gap-3">
          <Lightbulb className="size-5 text-primary" />
          <h2 className="text-heading-lg font-heading text-foreground">
            How to practise past papers effectively
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {studyTips.map((tip) => {
            const Icon = tip.icon
            return (
              <Card key={tip.title}>
                <CardHeader className="pb-3">
                  <div className="mb-2 flex size-10 items-center justify-center rounded-xl bg-primary/10">
                    <Icon className="size-5 text-primary" />
                  </div>
                  <CardTitle className="text-body-lg font-heading">{tip.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-body-sm text-muted-foreground leading-relaxed">
                    {tip.description}
                  </p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </section>

      {/* ── Session structure guide ────────────────────────────────── */}
      <section className="rounded-2xl border border-border/60 bg-card p-6 sm:p-8">
        <h2 className="text-heading-md font-heading text-foreground mb-3">
          A suggested 90-minute practice session
        </h2>
        <ol className="space-y-3 text-body-sm text-muted-foreground">
          <li className="flex items-start gap-3">
            <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-body-xs font-semibold text-primary">
              1
            </span>
            <span>
              <strong className="text-foreground">0-5 min:</strong> Read the question carefully.
              Annotate key command words and the focus of the task.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-body-xs font-semibold text-primary">
              2
            </span>
            <span>
              <strong className="text-foreground">5-10 min:</strong> Brainstorm a thesis and four or
              five analytical paragraphs. Jot down quotations and contextual points you plan to use.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-body-xs font-semibold text-primary">
              3
            </span>
            <span>
              <strong className="text-foreground">10-55 min:</strong> Write the response in full
              exam conditions. Phone on airplane mode, no notes, no text.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-body-xs font-semibold text-primary">
              4
            </span>
            <span>
              <strong className="text-foreground">55-75 min:</strong> Mark against the published
              mark scheme and examiner report. Tag every paragraph for understanding, language
              analysis, context, and comparison.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-body-xs font-semibold text-primary">
              5
            </span>
            <span>
              <strong className="text-foreground">75-90 min:</strong> Write a short improvement note
              listing the two changes that would have moved the response up a band.
            </span>
          </li>
        </ol>
      </section>
    </div>
  )
}
