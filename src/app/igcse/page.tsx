import { LearningResourceJsonLd } from '@/components/seo/json-ld'
import type { Metadata } from 'next'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import { getServerBoard } from '@/lib/board/get-server-board'
import { getIgcseHubUrl } from '@/app/igcse/_lib/guard'
import type { ExamBoard } from '@/lib/board/board-config'
import { ArrowRight, BookOpen, Sparkles, Feather, Globe, GraduationCap } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { tMany } from '@/lib/i18n/t'

export const metadata: Metadata = {
  title: 'IGCSE English revision - Pearson Edexcel and Cambridge',
  description:
    'IGCSE English revision for Pearson Edexcel (4ET1 Literature, 4EA1 Language A) and Cambridge (0500, 0990). Set-text guides, AI marking and mock papers.',
  alternates: { canonical: 'https://theenglishhub.app/igcse' },
  openGraph: {
    title: 'IGCSE English revision - Pearson Edexcel and Cambridge',
    description:
      'IGCSE English revision for Pearson Edexcel (4ET1 Literature, 4EA1 Language A) and Cambridge (0500, 0990). Set-text guides, AI marking and mock papers.',
    images: [
      {
        url: '/api/og?title=IGCSE+English+revision+-+Pearson+Edexcel+and+Cambridge',
        width: 1200,
        height: 630,
        alt: 'IGCSE English revision - Pearson Edexcel and Cambridge',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'IGCSE English revision - Pearson Edexcel and Cambridge',
    description:
      'IGCSE English revision for Pearson Edexcel (4ET1 Literature, 4EA1 Language A) and Cambridge (0500, 0990). Set-text guides, AI marking and mock papers.',
    images: [
      '/api/og?title=IGCSE+English+revision&subtitle=Pearson+Edexcel+and+Cambridge+specs+covered&level=igcse',
    ],
  },
}

type CourseDef = {
  board: ExamBoard
  /** A proper noun, shown as it is in every language. */
  awardingBody: string
  labelKey: string
  examCode: string
  descKey: string
  icon: typeof Feather
  href: string
}

/**
 * The IGCSE courses this site covers, one card each.
 *
 * THE DEFECT (2 October 2026). This page offered three cards - "IGCSE
 * Literature", "IGCSE Language A" and "IGCSE Language B" - as plain links that
 * saved nothing. "Language A" is the name of Pearson Edexcel's 4EA1, but that
 * card led to Cambridge 0500, "Language B" led to Cambridge 0990, and Edexcel's
 * Language A had no card at all. And because nothing was saved, the very next
 * page asked "Which exam board do you study?" (confirmed on production:
 * Pearson Edexcel chosen here, /igcse/edexcel opened with no cookie and the
 * modal over it), and so did every page after it, the texts included, since
 * dismissing the modal lasts only until the next navigation.
 *
 * Each card now names its awarding body and exam code, with the labels the
 * board picker itself uses, and carries ?setBoard=<id> so the middleware saves
 * the choice, as every other picker's cards do. Each still leads to its
 * course's hub, as these cards always did.
 */
const COURSE_DEFS: CourseDef[] = [
  {
    board: 'edexcel-igcse',
    awardingBody: 'Pearson Edexcel',
    labelKey: 'board.paper.literature',
    examCode: '4ET1',
    descKey: 'board.paper_subtitle.edexcel_igcse_lit',
    icon: Feather,
    href: '/igcse/edexcel?setBoard=edexcel-igcse',
  },
  {
    board: 'edexcel-igcse-lang',
    awardingBody: 'Pearson Edexcel',
    labelKey: 'board.paper.language',
    examCode: '4EA1',
    descKey: 'board.paper_subtitle.edexcel_igcse_lang',
    icon: GraduationCap,
    href: '/igcse/edexcel-lang?setBoard=edexcel-igcse-lang',
  },
  {
    board: 'cambridge-0500',
    awardingBody: 'Cambridge',
    labelKey: 'board.paper.language_a',
    examCode: '0500',
    descKey: 'board.paper_subtitle.cambridge_0500',
    icon: Globe,
    href: '/igcse/cambridge/0500?setBoard=cambridge-0500',
  },
  {
    board: 'cambridge-0990',
    awardingBody: 'Cambridge',
    labelKey: 'board.paper.language_b',
    examCode: '0990',
    descKey: 'board.paper_subtitle.cambridge_0990',
    icon: Globe,
    href: '/igcse/cambridge/0990?setBoard=cambridge-0990',
  },
]

export default async function IgcseHubPage() {
  // Route users to the right place based on their saved exam board.
  const board = await getServerBoard()

  // IGCSE board set → redirect straight to the board-specific hub
  if (board) {
    const hubUrl = getIgcseHubUrl(board)
    if (hubUrl) {
      redirect(hubUrl)
    }

    // GCSE boards: IGCSE content is not part of their specification.
    if (
      (['aqa', 'edexcel', 'ocr', 'eduqas'] as const).includes(
        board as 'aqa' | 'edexcel' | 'ocr' | 'eduqas',
      )
    ) {
      redirect('/revision?notice=igcse-not-in-spec')
    }
  }
  // No board set - show the course selector hub below.
  const courseKeys = COURSE_DEFS.flatMap((c) => [c.labelKey, c.descKey])
  const t = await tMany([
    'igcse.crumb.home',
    'igcse.crumb.self',
    'igcse.badge.international',
    'igcse.badge.lit_lang',
    'igcse.h1',
    'igcse.lead',
    'igcse.choose_course_h2',
    'igcse.start_studying_cta',
    'igcse.footnote',
    ...courseKeys,
  ])
  const tCrumbHome = t[0]!
  const tCrumbSelf = t[1]!
  const tBadgeIntl = t[2]!
  const tBadgeLitLang = t[3]!
  const tH1 = t[4]!
  const tLead = t[5]!
  const tChooseH2 = t[6]!
  const tStartCta = t[7]!
  const tFootnote = t[8]!
  const courses = COURSE_DEFS.map((c, idx) => ({
    ...c,
    name: t[9 + idx * 2]!,
    description: t[10 + idx * 2]!,
  }))

  return (
    <div className="space-y-10 pb-16">
      {/* This hub's own structured data. It lived in layout.tsx until
          20 September 2026, where it stamped a node describing THIS url
          onto the 153 pages beneath it. */}
      <LearningResourceJsonLd
        name="IGCSE English Revision"
        description="IGCSE English Literature and Language revision: study guides, exam technique and past-paper practice for Pearson Edexcel (4ET1, 4EA1) and Cambridge International (0500, 0990)."
        educationalLevel="IGCSE"
        learningResourceType="Revision hub"
        url="https://theenglishhub.app/igcse"
        about="IGCSE English"
        audienceRole="student"
      />

      {/* ── Hero ────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden rounded-2xl border border-border/60 bg-gradient-to-br from-card via-card to-primary/[0.04] p-6 sm:p-8 lg:p-10">
        <div className="pointer-events-none absolute -end-20 -top-20 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-16 -start-16 h-48 w-48 rounded-full bg-primary/5 blur-3xl" />

        <div className="relative">
          <div className="mb-4 flex flex-wrap items-center gap-2">
            <Badge variant="secondary">
              <Sparkles className="me-1 size-3" />
              {tBadgeIntl}
            </Badge>
            <Badge className="bg-primary/10 text-primary border-primary/20">{tBadgeLitLang}</Badge>
          </div>
          <h1 className="text-display-sm font-heading text-foreground sm:text-display">{tH1}</h1>
          <p className="mt-3 max-w-2xl text-body-lg text-muted-foreground">{tLead}</p>
        </div>
      </section>

      {/* ── Course cards ───────────────────────────────────────────── */}
      <section>
        <div className="mb-5 flex items-center gap-3">
          <BookOpen className="size-5 text-primary" />
          <h2 className="text-heading-lg font-heading text-foreground">{tChooseH2}</h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {courses.map((course) => {
            const Icon = course.icon
            return (
              <Card
                key={course.board}
                className="group relative flex flex-col overflow-hidden transition-all duration-200 hover:border-border hover:shadow-card-hover"
              >
                <CardHeader className="pb-3">
                  <div className="mb-3">
                    <div className="flex size-11 items-center justify-center rounded-xl bg-primary/10">
                      <Icon className="size-5 text-primary" />
                    </div>
                  </div>
                  <CardTitle className="text-heading-md font-heading leading-tight">
                    {course.awardingBody} {course.name}
                  </CardTitle>
                  <p className="mt-1 font-mono text-body-xs text-muted-foreground">
                    {course.examCode}
                  </p>
                  <CardDescription className="text-body-sm">{course.description}</CardDescription>
                </CardHeader>

                <CardContent className="flex flex-1 flex-col">
                  <div className="mt-auto pt-2">
                    <Button
                      variant="default"
                      size="sm"
                      className="w-full"
                      render={<Link href={course.href} />}
                    >
                      {tStartCta}
                      <ArrowRight className="size-3.5" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </section>

      {/* ── Footnote ───────────────────────────────────────────────── */}
      <p className="text-center text-body-xs text-muted-foreground-subtle">{tFootnote}</p>
    </div>
  )
}
