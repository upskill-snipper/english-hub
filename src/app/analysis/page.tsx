import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, BookOpen, Heart, PenLine, ScrollText, Sparkles, Swords } from 'lucide-react'

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { getServerBoard } from '@/lib/board/get-server-board'
import { getBoardConfig, type ExamBoard } from '@/lib/board/board-config'
import { t } from '@/lib/i18n/t'

export const metadata: Metadata = {
  title: 'GCSE English Analysis Hub | The English Hub',
  description:
    'In-depth analysis, themed essays and quote-by-quote breakdowns for every GCSE English Literature set text and the Language paper.',
  alternates: {
    canonical: 'https://theenglishhub.app/analysis',
  },
}

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
        description: 'Shakespeare’s tragedy: ambition, fate and the corruption of power.',
        href: '/analysis/macbeth',
        boards: ['aqa', 'edexcel', 'ocr', 'eduqas', 'edexcel-igcse', 'cambridge-0475'],
      },
      {
        title: 'Jekyll and Hyde',
        description: 'Stevenson’s Gothic novella on duality, repression and Victorian fear.',
        href: '/analysis/jekyll-hyde',
        boards: ['aqa', 'edexcel', 'ocr', 'eduqas', 'cambridge-0475'],
      },
      {
        title: 'A Christmas Carol',
        description: 'Dickens’ redemption story and his Victorian social conscience.',
        href: '/analysis/christmas-carol',
        boards: ['aqa', 'edexcel', 'eduqas', 'cambridge-0475'],
      },
      {
        title: 'An Inspector Calls',
        description: 'Priestley’s post-war morality play on collective responsibility.',
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

  const visibleSections = SECTIONS.map((section) => ({
    ...section,
    cards: section.cards.filter((card) => isCardForBoard(card, board)),
  })).filter((section) => section.cards.length > 0)

  const tEyebrow = await t('analysis.hub.eyebrow')
  const tH1 = await t('analysis.hub.h1')
  const tFor = await t('analysis.hub.for_board')
  const tIntro = await t('analysis.hub.intro')
  const tSectionTexts = await t('analysis.hub.section.texts')
  const tSectionPoetry = await t('analysis.hub.section.poetry')
  const tSectionLanguage = await t('analysis.hub.section.language')
  const tSectionRevision = await t('analysis.hub.section.revision')
  const tOpenAnalysis = await t('analysis.hub.cta.open_analysis')
  const tCrossH2 = await t('analysis.hub.cross.h2')
  const tCrossBody = await t('analysis.hub.cross.body')
  const tCrossCta = await t('analysis.hub.cross.cta')

  const sectionLabelTranslations: Record<string, string> = {
    Texts: tSectionTexts,
    Poetry: tSectionPoetry,
    'Language Paper': tSectionLanguage,
    'Revision and Grade Guides': tSectionRevision,
  }

  return (
    <main className="mx-auto max-w-6xl space-y-10 px-4 pb-16 pt-12 sm:px-6 lg:px-8">
      <section className="relative overflow-hidden rounded-2xl border border-border/60 bg-gradient-to-br from-card via-card to-blue-500/[0.04] p-6 sm:p-8 lg:p-10">
        <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-blue-500/5 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-violet-500/5 blur-3xl" />
        <div className="relative">
          <Badge variant="secondary" className="mb-4">
            <Sparkles className="mr-1 size-3" />
            {tEyebrow}
          </Badge>
          <h1 className="text-display-sm font-heading text-foreground sm:text-display">{tH1}</h1>
          {boardConfig && (
            <Badge variant="outline" className="mt-3">
              {tFor} {boardConfig.shortName}
            </Badge>
          )}
          <p className="mt-3 max-w-2xl text-body-lg text-muted-foreground">{tIntro}</p>
        </div>
      </section>

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
              <h2 className="text-heading-lg font-heading text-foreground">
                {sectionLabelTranslations[section.label] ?? section.label}
              </h2>
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
                      {tOpenAnalysis}
                      <ArrowRight className="size-3.5" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        )
      })}

      <section className="rounded-2xl border border-border/60 bg-card p-6 sm:p-8">
        <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-start gap-3">
            <div className="flex size-10 items-center justify-center rounded-xl bg-violet-500/10">
              <Swords className="size-5 text-violet-400" />
            </div>
            <div>
              <h2 className="text-heading-md font-heading text-foreground">{tCrossH2}</h2>
              <p className="mt-1 max-w-xl text-body-sm text-muted-foreground">{tCrossBody}</p>
            </div>
          </div>
          <Button variant="default" render={<Link href="/revision" />}>
            {tCrossCta}
            <ArrowRight className="size-4" />
          </Button>
        </div>
      </section>
    </main>
  )
}
