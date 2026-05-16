import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, BookOpen, Sparkles, GraduationCap } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

import { BreadcrumbJsonLd } from '@/components/seo/json-ld'
import { t } from '@/lib/i18n/t'

export const metadata: Metadata = {
  openGraph: {
    title: 'A-Level English — The English Hub',
    description:
      'UK A-Level English Literature and Language hubs for AQA, Pearson Edexcel, OCR and WJEC Eduqas. Cross-board revision tools while full A-Level content is on our roadmap.',
  },
  title: 'A-Level English',
  description:
    'UK A-Level English Literature and Language hubs for AQA, Pearson Edexcel, OCR and WJEC Eduqas. Cross-board revision tools while full A-Level content is on our roadmap.',
  alternates: { canonical: 'https://theenglishhub.app/a-level' },
  robots: { index: true, follow: true },
}

type BoardSlug = 'aqa' | 'edexcel' | 'ocr' | 'eduqas'

const boards: {
  slug: BoardSlug
  nameKey: string
  examCode: string
  descriptionKey: string
  href: string
}[] = [
  {
    slug: 'aqa',
    nameKey: 'alevel.board.aqa.name',
    examCode: '7712 / 7702',
    descriptionKey: 'alevel.board.aqa.description',
    href: '/a-level/aqa',
  },
  {
    slug: 'edexcel',
    nameKey: 'alevel.board.edexcel.name',
    examCode: '9ET0 / 9EN0',
    descriptionKey: 'alevel.board.edexcel.description',
    href: '/a-level/edexcel',
  },
  {
    slug: 'ocr',
    nameKey: 'alevel.board.ocr.name',
    examCode: 'H472 / H470',
    descriptionKey: 'alevel.board.ocr.description',
    href: '/a-level/ocr',
  },
  {
    slug: 'eduqas',
    nameKey: 'alevel.board.eduqas.name',
    examCode: 'Eduqas',
    descriptionKey: 'alevel.board.eduqas.description',
    href: '/a-level/eduqas',
  },
]

export default async function ALevelHubPage() {
  const tBadgeLevel = await t('alevel.hub.badge.uk_a_level')
  const tBadgeLitLang = await t('alevel.hub.badge.lit_and_lang')
  const tH1 = await t('alevel.hub.h1')
  const tLead = await t('alevel.hub.lead')
  const tChooseBoardH2 = await t('alevel.hub.choose_board_h2')
  const tFootnote = await t('alevel.hub.footnote')
  const tOpenPrefix = await t('alevel.hub.open_hub_prefix')

  // Resolve each board's translated strings + short label (first word of name).
  const resolvedBoards = await Promise.all(
    boards.map(async (b) => {
      const name = await t(b.nameKey)
      const description = await t(b.descriptionKey)
      const shortLabel = await t(`alevel.board.${b.slug}.short`)
      return { ...b, name, description, shortLabel }
    }),
  )

  return (
    <div className="space-y-10 pb-16">
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: 'https://theenglishhub.app' },
          { name: 'A-Level', url: 'https://theenglishhub.app/a-level' },
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
              {tBadgeLevel}
            </Badge>
            <Badge className="bg-primary/10 text-primary border-primary/20">{tBadgeLitLang}</Badge>
          </div>
          <h1 className="text-display-sm font-heading text-foreground sm:text-display">{tH1}</h1>
          <p className="mt-3 max-w-2xl text-body-lg text-muted-foreground">{tLead}</p>
        </div>
      </section>

      {/* ── Board cards ──────────────────────────────────────────────── */}
      <section>
        <div className="mb-5 flex items-center gap-3">
          <BookOpen className="size-5 text-primary" />
          <h2 className="text-heading-lg font-heading text-foreground">{tChooseBoardH2}</h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {resolvedBoards.map((board) => (
            <Card
              key={board.slug}
              className="group relative flex flex-col overflow-hidden transition-all duration-200 hover:border-border hover:shadow-card-hover"
            >
              <CardHeader className="pb-3">
                <div className="mb-3">
                  <div className="flex size-11 items-center justify-center rounded-xl bg-primary/10">
                    <GraduationCap className="size-5 text-primary" />
                  </div>
                </div>
                <CardTitle className="text-heading-md font-heading leading-tight">
                  {board.name}
                </CardTitle>
                <p className="mt-1 font-mono text-body-xs text-muted-foreground">
                  {board.examCode}
                </p>
                <CardDescription className="mt-1 text-body-sm">{board.description}</CardDescription>
              </CardHeader>

              <CardContent className="flex flex-1 flex-col">
                <div className="mt-auto pt-2">
                  <Button
                    variant="default"
                    size="sm"
                    className="w-full"
                    render={<Link href={board.href} />}
                  >
                    {tOpenPrefix} {board.shortLabel}
                    <ArrowRight className="size-3.5" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* GeoFaq now lives in a-level/layout.tsx so it covers this hub
          AND every /a-level/* board sub-page from one source. */}

      {/* ── Footnote ───────────────────────────────────────────────── */}
      <p className="text-center text-body-xs text-muted-foreground/60">{tFootnote}</p>
    </div>
  )
}
