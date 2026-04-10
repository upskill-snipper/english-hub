import type { Metadata } from 'next'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import { getServerBoard } from '@/lib/board/get-server-board'
import {
  ArrowRight,
  BookOpen,
  GraduationCap,
  Globe,
  Sparkles,
  Clock,
  Feather,
  Drama,
  Scroll,
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
  title: 'IGCSE English Literature — The English Hub',
  description:
    'IGCSE English Literature revision hubs for Pearson Edexcel 4ET1 and Cambridge 0500/0990. Full text guides, exam technique and assessment breakdowns.',
  alternates: { canonical: 'https://theenglishhub.app/igcse' },
}

const boards = [
  {
    slug: 'edexcel',
    code: '4ET1',
    name: 'Pearson Edexcel IGCSE English Literature',
    tagline: 'International GCSE (9-1) — Specification 4ET1',
    description:
      'Two-paper literature qualification covering poetry, modern prose, modern drama and literary heritage. Widely taken in international schools across Europe, the Middle East and Asia.',
    icon: Feather,
    accent: 'bg-primary/10 text-primary',
    iconBg: 'bg-primary/10',
    iconText: 'text-primary',
    papers: '2 papers',
    time: '3h 30m total',
    available: true,
    href: '/igcse/edexcel',
    highlights: [
      '11 set text options across poetry, prose, drama and Shakespeare',
      'Anthology of 15 poems studied for comparison questions',
      'Extract-based and essay-style responses across both papers',
    ],
  },
  {
    slug: 'cambridge-0500',
    code: '0500',
    name: 'Cambridge IGCSE First Language English',
    tagline: 'Cambridge Assessment International Education — 0500',
    description:
      'Reading and writing in non-fiction and creative contexts. Includes directed writing, composition and comprehension of unseen texts.',
    icon: Globe,
    accent: 'bg-primary/10 text-primary',
    iconBg: 'bg-primary/10',
    iconText: 'text-primary',
    papers: '2 papers',
    time: '4h total',
    available: true,
    href: '/igcse/cambridge/0500',
    highlights: [
      'Reading comprehension and summary writing',
      'Directed writing tasks based on stimulus material',
      'Extended composition in narrative or descriptive form',
    ],
  },
  {
    slug: 'cambridge-0990',
    code: '0990',
    name: 'Cambridge IGCSE (9-1) First Language English',
    tagline: 'Cambridge Assessment International Education — 0990',
    description:
      'The 9-1 graded version of Cambridge First Language English, equivalent in content to 0500 but reported on the numerical grade scale.',
    icon: GraduationCap,
    accent: 'bg-primary/10 text-primary',
    iconBg: 'bg-primary/10',
    iconText: 'text-primary',
    papers: '2 papers',
    time: '4h total',
    available: true,
    href: '/igcse/cambridge/0990',
    highlights: [
      'Identical assessment structure to 0500',
      'Graded 9-1 instead of A*-G for international alignment',
      'Same reading and writing assessment objectives',
    ],
  },
]

export default async function IgcseHubPage() {
  // Route users to the right place based on their saved exam board.
  const board = await getServerBoard()
  if (board === 'edexcel-igcse') {
    redirect('/igcse/edexcel')
  }
  if (board === 'cambridge-0500') {
    redirect('/igcse/cambridge/0500')
  }
  if (board === 'cambridge-0990') {
    redirect('/igcse/cambridge/0990')
  }
  // GCSE boards: IGCSE content is not part of their specification.
  if (board && (['aqa', 'edexcel', 'ocr', 'eduqas'] as const).includes(board as 'aqa' | 'edexcel' | 'ocr' | 'eduqas')) {
    redirect('/revision?notice=igcse-not-in-spec')
  }
  // No board set — show the board selector hub below.
  return (
    <div className="space-y-10 pb-16">
      {/* ── Hero ────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden rounded-2xl border border-border/60 bg-gradient-to-br from-card via-card to-primary/[0.04] p-6 sm:p-8 lg:p-10">
        <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-primary/5 blur-3xl" />

        <div className="relative">
          <div className="mb-4 flex flex-wrap items-center gap-2">
            <Badge variant="secondary">
              <Sparkles className="mr-1 size-3" />
              International GCSE
            </Badge>
            <Badge className="bg-primary/10 text-primary border-primary/20">
              Literature & Language
            </Badge>
          </div>
          <h1 className="text-display-sm font-heading text-foreground sm:text-display">
            IGCSE English Hub
          </h1>
          <p className="mt-3 max-w-2xl text-body-lg text-muted-foreground">
            Choose your exam board to access full study guides, set text
            analysis, exam technique and past paper resources. We cover{' '}
            <strong className="text-foreground">Pearson Edexcel IGCSE
            English Literature (4ET1)</strong> and{' '}
            <strong className="text-foreground">Cambridge IGCSE First
            Language English (0500 &amp; 0990)</strong>.
          </p>
        </div>
      </section>

      {/* ── Board cards ─────────────────────────────────────────────── */}
      <section>
        <div className="mb-5 flex items-center gap-3">
          <BookOpen className="size-5 text-primary" />
          <h2 className="text-heading-lg font-heading text-foreground">
            Choose your exam board
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {boards.map((board) => {
            const Icon = board.icon
            return (
              <Card
                key={board.slug}
                className="group relative flex flex-col overflow-hidden transition-all duration-200 hover:border-border hover:shadow-card-hover"
              >
                <CardHeader className="pb-3">
                  <div className="mb-3 flex items-start justify-between gap-3">
                    <div
                      className={`flex size-11 items-center justify-center rounded-xl ${board.iconBg}`}
                    >
                      <Icon className={`size-5 ${board.iconText}`} />
                    </div>
                    {board.available ? (
                      <Badge className="bg-primary/10 text-primary border-primary/20">
                        Available now
                      </Badge>
                    ) : (
                      <Badge variant="secondary">Coming soon</Badge>
                    )}
                  </div>
                  <CardTitle className="text-heading-md font-heading leading-tight">
                    {board.name}
                  </CardTitle>
                  <CardDescription className="text-body-sm">
                    {board.tagline}
                  </CardDescription>
                </CardHeader>

                <CardContent className="flex flex-1 flex-col gap-4">
                  <p className="text-body-sm text-muted-foreground leading-relaxed">
                    {board.description}
                  </p>

                  <div className="flex flex-wrap gap-3 text-body-xs text-muted-foreground">
                    <span className="inline-flex items-center gap-1.5 rounded-md border border-border/60 bg-muted/40 px-2 py-1">
                      <Scroll className="size-3" />
                      {board.papers}
                    </span>
                    <span className="inline-flex items-center gap-1.5 rounded-md border border-border/60 bg-muted/40 px-2 py-1">
                      <Clock className="size-3" />
                      {board.time}
                    </span>
                  </div>

                  <ul className="space-y-2 text-body-sm text-muted-foreground">
                    {board.highlights.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto pt-2">
                    {board.available ? (
                      <Button
                        variant="default"
                        size="sm"
                        className="w-full"
                        render={<Link href={board.href} />}
                      >
                        Open {board.code} hub
                        <ArrowRight className="size-3.5" />
                      </Button>
                    ) : (
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full"
                        disabled
                      >
                        Coming soon
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </section>

      {/* ── What is IGCSE? ──────────────────────────────────────────── */}
      <section className="rounded-2xl border border-border/60 bg-card p-6 sm:p-8">
        <div className="mb-4 flex items-center gap-3">
          <Drama className="size-5 text-primary" />
          <h2 className="text-heading-md font-heading text-foreground">
            About IGCSE English Literature
          </h2>
        </div>
        <p className="text-body-sm text-muted-foreground leading-relaxed">
          The International General Certificate of Secondary Education is the
          world&apos;s most popular international qualification for 14 to
          16-year-olds. IGCSE English Literature introduces students to a wide
          range of texts from different cultures and periods, building close
          reading, analytical writing and comparison skills that prepare them
          for A-level, IB and university study.
        </p>
        <div className="mt-5 grid gap-4 sm:grid-cols-3">
          <div className="rounded-xl border border-border/60 bg-muted/30 p-4">
            <h3 className="text-body-sm font-semibold text-foreground">
              Global recognition
            </h3>
            <p className="mt-1 text-body-xs text-muted-foreground">
              Accepted by universities worldwide as equivalent to UK GCSE.
            </p>
          </div>
          <div className="rounded-xl border border-border/60 bg-muted/30 p-4">
            <h3 className="text-body-sm font-semibold text-foreground">
              Literary range
            </h3>
            <p className="mt-1 text-body-xs text-muted-foreground">
              Poetry, prose, drama and Shakespeare from multiple traditions.
            </p>
          </div>
          <div className="rounded-xl border border-border/60 bg-muted/30 p-4">
            <h3 className="text-body-sm font-semibold text-foreground">
              Closed-book exams
            </h3>
            <p className="mt-1 text-body-xs text-muted-foreground">
              Memorised quotations and confident analysis under timed conditions.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
