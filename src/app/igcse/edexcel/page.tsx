import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Clock,
  FileText,
  Feather,
  Drama,
  Landmark,
  ScrollText,
  GraduationCap,
  Sparkles,
  Target,
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
import { requireIgcseBoard } from '@/app/igcse/_lib/guard'

export const metadata: Metadata = {
  title: 'Edexcel IGCSE English Literature 4ET1 — The English Hub',
  description:
    'Complete revision hub for Pearson Edexcel IGCSE English Literature 4ET1. Paper 1 and Paper 2 breakdowns, set text guides, anthology poetry and exam technique.',
  alternates: { canonical: 'https://theenglishhub.app/igcse/edexcel' },
}

const papers = [
  {
    name: 'Paper 1',
    code: '4ET1/01',
    title: 'Poetry and Modern Prose',
    time: '2 hours',
    marks: 60,
    weight: '60%',
    icon: Feather,
    sections: [
      {
        heading: 'Section A — Unseen Poetry',
        detail:
          'One question on a single unseen poem. Comment on language, structure and meaning.',
      },
      {
        heading: 'Section B — Anthology Poetry',
        detail:
          'One question comparing two poems from the Pearson Edexcel Poetry Anthology.',
      },
      {
        heading: 'Section C — Modern Prose',
        detail:
          'One essay question on a studied modern prose text. Closed book.',
      },
    ],
  },
  {
    name: 'Paper 2',
    code: '4ET1/02',
    title: 'Modern Drama and Literary Heritage',
    time: '1 hour 30 minutes',
    marks: 40,
    weight: '40%',
    icon: Drama,
    sections: [
      {
        heading: 'Section A — Modern Drama',
        detail:
          'One extract-based question on a studied modern drama text.',
      },
      {
        heading: 'Section B — Literary Heritage',
        detail:
          'One essay question on a studied Shakespeare play. Closed book.',
      },
    ],
  },
]

const setTexts = {
  modernProse: [
    'To Kill a Mockingbird — Harper Lee',
    'Of Mice and Men — John Steinbeck',
    'The Whale Rider — Witi Ihimaera',
    'The Joy Luck Club — Amy Tan',
    'Things Fall Apart — Chinua Achebe',
  ],
  modernDrama: [
    'An Inspector Calls — J.B. Priestley',
    'A View from the Bridge — Arthur Miller',
    'The Curious Incident of the Dog in the Night-Time — Simon Stephens',
  ],
  literaryHeritage: [
    'Macbeth — William Shakespeare',
    'Romeo and Juliet — William Shakespeare',
    'Much Ado About Nothing — William Shakespeare',
  ],
  anthology: [
    '15 poems by a range of British and international poets across historical periods',
  ],
}

const whyPoints = [
  {
    title: 'Breadth of texts',
    detail:
      'Eleven set text options across poetry, prose, drama and Shakespeare, allowing centres to tailor the course to student interest and cultural context.',
  },
  {
    title: 'Closed-book rigour',
    detail:
      'All texts are studied closed book, rewarding genuine close reading and strong memorisation of key quotations.',
  },
  {
    title: 'International recognition',
    detail:
      'Widely accepted by sixth forms, IB programmes and universities around the world as equivalent to UK GCSE.',
  },
  {
    title: 'Transferable skills',
    detail:
      'Develops comparison, analytical writing and textual evidence handling that feed directly into A-level, IB and university literature.',
  },
]

const hubLinks = [
  {
    title: 'Syllabus breakdown',
    description:
      'Full assessment objectives (AO1–AO4), mark allocations and timings.',
    href: '/igcse/edexcel/syllabus',
    icon: ScrollText,
  },
  {
    title: 'Past papers',
    description:
      'Where to find official Edexcel past papers plus study tips for using them.',
    href: '/igcse/edexcel/past-papers',
    icon: FileText,
  },
  {
    title: 'Exam technique',
    description:
      '4ET1-specific strategies for comparison, extract and essay questions.',
    href: '/igcse/edexcel/exam-technique',
    icon: Target,
  },
]

export default async function EdexcelIgcseHubPage() {
  await requireIgcseBoard(['edexcel-igcse'])

  return (
    <div className="space-y-10 pb-16">
      {/* ── Back link ───────────────────────────────────────────────── */}
      <div>
        <Button
          variant="ghost"
          size="sm"
          className="mb-3 -ml-2 text-muted-foreground"
          render={<Link href="/igcse" />}
        >
          <ArrowLeft className="size-3.5" />
          Back to IGCSE
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
              International GCSE English Literature
            </Badge>
            <Badge className="bg-primary/10 text-primary border-primary/20">
              Edexcel IGCSE 4ET1
            </Badge>
          </div>
          <h1 className="text-display-sm font-heading text-foreground sm:text-display">
            Pearson Edexcel IGCSE English Literature
          </h1>
          <p className="mt-3 max-w-2xl text-body-lg text-muted-foreground">
            The Pearson Edexcel International GCSE in English Literature
            (4ET1) is a two-paper qualification studied in over 85 countries.
            It covers <strong className="text-foreground">poetry, modern
            prose, modern drama</strong> and a{' '}
            <strong className="text-foreground">literary heritage
            Shakespeare play</strong>, all assessed closed book.
          </p>

          <div className="mt-6 flex flex-wrap gap-3 text-body-sm text-muted-foreground">
            <span className="inline-flex items-center gap-1.5 rounded-md border border-border/60 bg-muted/40 px-3 py-1.5">
              <ScrollText className="size-3.5" />
              2 papers
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-md border border-border/60 bg-muted/40 px-3 py-1.5">
              <Clock className="size-3.5" />
              3h 30m total
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-md border border-border/60 bg-muted/40 px-3 py-1.5">
              <BookOpen className="size-3.5" />
              11 set texts + anthology
            </span>
          </div>
        </div>
      </section>

      {/* ── Papers ─────────────────────────────────────────────────── */}
      <section>
        <div className="mb-5 flex items-center gap-3">
          <FileText className="size-5 text-primary" />
          <h2 className="text-heading-lg font-heading text-foreground">
            The two papers
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {papers.map((paper) => {
            const Icon = paper.icon
            return (
              <Card
                key={paper.code}
                className="group flex flex-col overflow-hidden transition-all duration-200 hover:border-border hover:shadow-card-hover"
              >
                <CardHeader className="pb-3">
                  <div className="mb-3 flex items-start justify-between gap-3">
                    <div className="flex size-11 items-center justify-center rounded-xl bg-primary/10">
                      <Icon className="size-5 text-primary" />
                    </div>
                    <Badge variant="secondary">{paper.code}</Badge>
                  </div>
                  <CardTitle className="text-heading-md font-heading">
                    {paper.name}: {paper.title}
                  </CardTitle>
                  <CardDescription>
                    {paper.time} &middot; {paper.marks} marks &middot;{' '}
                    {paper.weight} of total
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex flex-1 flex-col gap-3">
                  {paper.sections.map((section) => (
                    <div
                      key={section.heading}
                      className="rounded-xl border border-border/60 bg-muted/30 p-4"
                    >
                      <h3 className="text-body-sm font-semibold text-foreground">
                        {section.heading}
                      </h3>
                      <p className="mt-1 text-body-xs text-muted-foreground leading-relaxed">
                        {section.detail}
                      </p>
                    </div>
                  ))}
                </CardContent>
              </Card>
            )
          })}
        </div>
      </section>

      {/* ── Set texts ──────────────────────────────────────────────── */}
      <section>
        <div className="mb-5 flex items-center gap-3">
          <BookOpen className="size-5 text-primary" />
          <h2 className="text-heading-lg font-heading text-foreground">
            Set text options
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="pb-3">
              <div className="mb-2 flex size-10 items-center justify-center rounded-xl bg-primary/10">
                <Feather className="size-4.5 text-primary" />
              </div>
              <CardTitle className="text-body-lg font-heading">
                Anthology Poetry
              </CardTitle>
              <CardDescription>Paper 1, Section B</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-body-sm text-muted-foreground">
                {setTexts.anthology.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <div className="mb-2 flex size-10 items-center justify-center rounded-xl bg-primary/10">
                <BookOpen className="size-4.5 text-primary" />
              </div>
              <CardTitle className="text-body-lg font-heading">
                Modern Prose
              </CardTitle>
              <CardDescription>Paper 1, Section C</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-body-sm text-muted-foreground">
                {setTexts.modernProse.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <div className="mb-2 flex size-10 items-center justify-center rounded-xl bg-primary/10">
                <Drama className="size-4.5 text-primary" />
              </div>
              <CardTitle className="text-body-lg font-heading">
                Modern Drama
              </CardTitle>
              <CardDescription>Paper 2, Section A</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-body-sm text-muted-foreground">
                {setTexts.modernDrama.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <div className="mb-2 flex size-10 items-center justify-center rounded-xl bg-primary/10">
                <Landmark className="size-4.5 text-primary" />
              </div>
              <CardTitle className="text-body-lg font-heading">
                Literary Heritage
              </CardTitle>
              <CardDescription>Paper 2, Section B</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-body-sm text-muted-foreground">
                {setTexts.literaryHeritage.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* ── Sub-hub navigation ─────────────────────────────────────── */}
      <section>
        <div className="mb-5 flex items-center gap-3">
          <GraduationCap className="size-5 text-primary" />
          <h2 className="text-heading-lg font-heading text-foreground">
            Explore the 4ET1 hub
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {hubLinks.map((link) => {
            const Icon = link.icon
            return (
              <Card
                key={link.href}
                className="group transition-all duration-200 hover:border-border hover:shadow-card-hover"
              >
                <CardContent className="flex flex-col gap-3 p-5">
                  <div className="flex size-10 items-center justify-center rounded-xl bg-primary/10">
                    <Icon className="size-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-body-lg font-heading text-foreground">
                      {link.title}
                    </h3>
                    <p className="mt-1 text-body-sm text-muted-foreground">
                      {link.description}
                    </p>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="mt-1 w-full"
                    render={<Link href={link.href} />}
                  >
                    Open
                    <ArrowRight className="size-3.5" />
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </section>

      {/* ── Why this qualification ─────────────────────────────────── */}
      <section className="rounded-2xl border border-border/60 bg-card p-6 sm:p-8">
        <h2 className="text-heading-md font-heading text-foreground mb-4">
          Why choose Edexcel 4ET1?
        </h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {whyPoints.map((point) => (
            <div
              key={point.title}
              className="rounded-xl border border-border/60 bg-muted/30 p-4"
            >
              <h3 className="text-body-sm font-semibold text-foreground">
                {point.title}
              </h3>
              <p className="mt-1 text-body-xs text-muted-foreground leading-relaxed">
                {point.detail}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
