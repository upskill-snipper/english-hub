import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, BookOpen, Heart, PenLine, ScrollText, Sparkles, Swords } from 'lucide-react'

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { getServerBoard } from '@/lib/board/get-server-board'
import { getBoardConfig, type ExamBoard } from '@/lib/board/board-config'

export const metadata: Metadata = {
  title: 'GCSE English Analysis Hub | The English Hub',
  description:
    'In-depth analysis, themed essays and quote-by-quote breakdowns for every GCSE English Literature set text and the Language paper.',
  alternates: {
    canonical: 'https://theenglishhub.app/analysis',
  },
}

// Each card may declare which boards it's for. Cards without `boards` are
// universal (e.g. generic technique guides). The page filters by the user's
// selected board so e.g. an OCR student doesn't see "AQA Love and Relationships"
// in their analysis hub.
type AnalysisCard = {
  title: string
  description: string
  href: string
  boards?: ExamBoard[]
}

type AnalysisSection = {
  label: string
  icon: typeof BookOpen
  colour: string
  bgColour: string
  cards: AnalysisCard[]
}

const SECTIONS: AnalysisSection[] = [
  {
    label: 'Texts',
    icon: BookOpen,
    colour: 'text-emerald-400',
    bgColour: 'bg-emerald-500/10',
    cards: [
      {
        title: 'Macbeth',
        description: 'Shakespeare\u2019s tragedy: ambition, fate and the corruption of power.',
        href: '/analysis/macbeth',
        boards: ['aqa', 'edexcel', 'ocr', 'eduqas', 'edexcel-igcse', 'cambridge-0475'],
      },
      {
        title: 'Jekyll and Hyde',
        description: 'Stevenson\u2019s Gothic novella on duality, repression and Victorian fear.',
        href: '/analysis/jekyll-hyde',
        boards: ['aqa', 'edexcel', 'ocr', 'eduqas', 'cambridge-0475'],
      },
      {
        title: 'A Christmas Carol',
        description: 'Dickens\u2019 redemption story and his Victorian social conscience.',
        href: '/analysis/christmas-carol',
        boards: ['aqa', 'edexcel', 'eduqas', 'cambridge-0475'],
      },
      {
        title: 'An Inspector Calls',
        description: 'Priestley\u2019s post-war morality play on collective responsibility.',
        href: '/analysis/inspector-calls',
        boards: ['aqa', 'edexcel', 'ocr', 'eduqas', 'edexcel-igcse', 'cambridge-0475'],
      },
    ],
  },
  {
    label: 'Poetry',
    icon: Heart,
    colour: 'text-rose-400',
    bgColour: 'bg-rose-500/10',
    cards: [
      {
        title: 'AQA Love and Relationships',
        description: 'Themed essays, comparison pairings and grade-9 model answers.',
        href: '/analysis/aqa-love-relationships',
        boards: ['aqa'],
      },
      {
        title: 'AQA Power and Conflict',
        description: 'Comparison strategies and analytical breakdowns of the conflict cluster.',
        href: '/analysis/aqa-power-conflict',
        boards: ['aqa'],
      },
    ],
  },
  {
    label: 'Language Paper',
    icon: PenLine,
    colour: 'text-blue-400',
    bgColour: 'bg-blue-500/10',
    cards: [
      {
        title: 'Language Paper Analysis',
        description: 'Worked examples and exam-board breakdowns for Language Papers 1 and 2.',
        href: '/analysis/language-paper',
        // Language Paper analysis applies to all GCSE/IGCSE boards
      },
    ],
  },
  {
    label: 'Revision and Grade Guides',
    icon: ScrollText,
    colour: 'text-clay-600',
    bgColour: 'bg-amber-500/10',
    cards: [
      {
        title: 'Revision and Grade Guides',
        description: 'Long-form guides on grade boundaries, revision plans and how to hit grade 9.',
        href: '/analysis/revision',
      },
    ],
  },
]

function isCardForBoard(card: AnalysisCard, board: ExamBoard | null): boolean {
  if (!board) return true
  if (!card.boards) return true
  return card.boards.includes(board)
}

export default async function AnalysisHubPage() {
  const board = await getServerBoard()
  const boardConfig = getBoardConfig(board)

  // Filter each section's cards by the user's board. Sections that end up
  // empty (e.g. an OCR student has no AQA-only Poetry cards) are dropped
  // entirely so the hub doesn't render orphan headers.
  const visibleSections = SECTIONS.map((section) => ({
    ...section,
    cards: section.cards.filter((card) => isCardForBoard(card, board)),
  })).filter((section) => section.cards.length > 0)

  return (
    <main className="mx-auto max-w-6xl space-y-10 px-4 pb-16 pt-12 sm:px-6 lg:px-8">
      {/* ── Hero ───────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden rounded-2xl border border-border/60 bg-gradient-to-br from-card via-card to-blue-500/[0.04] p-6 sm:p-8 lg:p-10">
        <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-blue-500/5 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-violet-500/5 blur-3xl" />

        <div className="relative">
          <Badge variant="secondary" className="mb-4">
            <Sparkles className="mr-1 size-3" />
            In-depth analysis
          </Badge>
          <h1 className="text-display-sm font-heading text-foreground sm:text-display">
            GCSE English Analysis
          </h1>
          {boardConfig && (
            <Badge variant="outline" className="mt-3">
              For {boardConfig.shortName}
            </Badge>
          )}
          <p className="mt-3 max-w-2xl text-body-lg text-muted-foreground">
            Long-form essays, quote-by-quote breakdowns and exam-board mapped analysis for every set
            text on the GCSE English specification. Written by markers and aligned to the marking
            guide.
          </p>
        </div>
      </section>

      {/* ── Sections ───────────────────────────────────────────────── */}
      {visibleSections.map((section) => {
        const Icon = section.icon
        return (
          <section key={section.label}>
            <div className="mb-5 flex items-center gap-3">
              <div
                className={`flex size-10 items-center justify-center rounded-xl ${section.bgColour}`}
              >
                <Icon className={`size-5 ${section.colour}`} />
              </div>
              <h2 className="text-heading-lg font-heading text-foreground">{section.label}</h2>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {section.cards.map((card) => (
                <Card
                  key={card.href}
                  className="group transition-all hover:border-border hover:shadow-card-hover"
                >
                  <CardHeader>
                    <CardTitle className="text-heading-md font-heading">{card.title}</CardTitle>
                    <CardDescription className="mt-1">{card.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full"
                      render={<Link href={card.href} />}
                    >
                      Open analysis
                      <ArrowRight className="size-3.5" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        )
      })}

      {/* ── Cross-link ─────────────────────────────────────────────── */}
      <section className="rounded-2xl border border-border/60 bg-card p-6 sm:p-8">
        <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-start gap-3">
            <div className="flex size-10 items-center justify-center rounded-xl bg-violet-500/10">
              <Swords className="size-5 text-violet-400" />
            </div>
            <div>
              <h2 className="text-heading-md font-heading text-foreground">
                Looking for revision notes?
              </h2>
              <p className="mt-1 max-w-xl text-body-sm text-muted-foreground">
                Our revision section gives you concise, exam-focused study guides for every set text
                — head there to track progress and practise quizzes.
              </p>
            </div>
          </div>
          <Button variant="default" render={<Link href="/revision" />}>
            Go to revision
            <ArrowRight className="size-4" />
          </Button>
        </div>
      </section>
    </main>
  )
}
