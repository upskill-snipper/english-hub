import type { Metadata } from 'next'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import { getServerBoard } from '@/lib/board/get-server-board'
import { getIgcseHubUrl } from '@/app/igcse/_lib/guard'
import { ArrowRight, BookOpen, Sparkles, Feather, Globe, GraduationCap } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { tMany } from '@/lib/i18n/t'

import { BreadcrumbJsonLd } from '@/components/seo/json-ld'
export const metadata: Metadata = {
  title: 'IGCSE English revision — Pearson Edexcel and Cambridge specs covered',
  description:
    'IGCSE English revision for Pearson Edexcel (4ET1 Literature, 4EA1 Language A) and Cambridge International (0500, 0990). Set-text guides, AI essay marking, mock papers and study tools.',
  alternates: { canonical: 'https://theenglishhub.app/igcse' },
  openGraph: {
    title: 'IGCSE English revision — Pearson Edexcel and Cambridge specs covered',
    description:
      'IGCSE English revision for Pearson Edexcel (4ET1 Literature, 4EA1 Language A) and Cambridge International (0500, 0990). Set-text guides, AI essay marking, mock papers and study tools.',
    images: [
      {
        url: '/api/og?title=IGCSE+English+revision&subtitle=Pearson+Edexcel+and+Cambridge+specs+covered&level=igcse',
        width: 1200,
        height: 630,
        alt: 'IGCSE English revision — Pearson Edexcel and Cambridge specs covered',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'IGCSE English revision — Pearson Edexcel and Cambridge specs covered',
    description:
      'IGCSE English revision for Pearson Edexcel (4ET1 Literature, 4EA1 Language A) and Cambridge International (0500, 0990). Set-text guides, AI essay marking, mock papers and study tools.',
    images: [
      '/api/og?title=IGCSE+English+revision&subtitle=Pearson+Edexcel+and+Cambridge+specs+covered&level=igcse',
    ],
  },
}

type CourseDef = {
  slug: string
  nameKey: string
  descKey: string
  icon: typeof Feather
  iconBg: string
  iconText: string
  href: string
}

const COURSE_DEFS: CourseDef[] = [
  {
    slug: 'literature',
    nameKey: 'igcse.course.literature.name',
    descKey: 'igcse.course.literature.desc',
    icon: Feather,
    iconBg: 'bg-primary/10',
    iconText: 'text-primary',
    href: '/igcse/edexcel',
  },
  {
    slug: 'language-a',
    nameKey: 'igcse.course.language_a.name',
    descKey: 'igcse.course.language_a.desc',
    icon: Globe,
    iconBg: 'bg-primary/10',
    iconText: 'text-primary',
    href: '/igcse/cambridge/0500',
  },
  {
    slug: 'language-b',
    nameKey: 'igcse.course.language_b.name',
    descKey: 'igcse.course.language_b.desc',
    icon: GraduationCap,
    iconBg: 'bg-primary/10',
    iconText: 'text-primary',
    href: '/igcse/cambridge/0990',
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
  // No board set — show the course selector hub below.
  const courseKeys = COURSE_DEFS.flatMap((c) => [c.nameKey, c.descKey])
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
      <BreadcrumbJsonLd
        items={[
          { name: tCrumbHome, url: 'https://theenglishhub.app' },
          { name: tCrumbSelf, url: 'https://theenglishhub.app/igcse' },
        ]}
      />
      {/* ── Hero ────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden rounded-2xl border border-border/60 bg-gradient-to-br from-card via-card to-primary/[0.04] p-6 sm:p-8 lg:p-10">
        <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-primary/5 blur-3xl" />

        <div className="relative">
          <div className="mb-4 flex flex-wrap items-center gap-2">
            <Badge variant="secondary">
              <Sparkles className="mr-1 size-3" />
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

        <div className="grid gap-6 lg:grid-cols-3">
          {courses.map((course) => {
            const Icon = course.icon
            return (
              <Card
                key={course.slug}
                className="group relative flex flex-col overflow-hidden transition-all duration-200 hover:border-border hover:shadow-card-hover"
              >
                <CardHeader className="pb-3">
                  <div className="mb-3">
                    <div
                      className={`flex size-11 items-center justify-center rounded-xl ${course.iconBg}`}
                    >
                      <Icon className={`size-5 ${course.iconText}`} />
                    </div>
                  </div>
                  <CardTitle className="text-heading-md font-heading leading-tight">
                    {course.name}
                  </CardTitle>
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

      {/* GeoFaq now lives in igcse/layout.tsx so it covers this hub AND
          every /igcse/* board sub-page from one source. */}

      {/* ── Footnote ───────────────────────────────────────────────── */}
      <p className="text-center text-body-xs text-muted-foreground/60">{tFootnote}</p>
    </div>
  )
}
