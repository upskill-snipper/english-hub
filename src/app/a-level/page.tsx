import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, BookOpen, Sparkles, GraduationCap } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

import { BreadcrumbJsonLd } from '@/components/seo/json-ld'

export const metadata: Metadata = {
  title: 'A-Level English — The English Hub',
  description:
    'UK A-Level English Literature and Language hubs for AQA, Pearson Edexcel, OCR and WJEC Eduqas. Cross-board revision tools while full A-Level content is on our roadmap.',
  alternates: { canonical: 'https://theenglishhub.app/a-level' },
  robots: { index: true, follow: true },
}

const boards = [
  {
    slug: 'aqa',
    name: 'AQA A-Level',
    examCode: '7712 / 7702',
    description: 'A-Level English Literature (7712) and Language (7702)',
    href: '/a-level/aqa',
  },
  {
    slug: 'edexcel',
    name: 'Pearson Edexcel A-Level',
    examCode: '9ET0 / 9EN0',
    description: 'A-Level English Literature (9ET0) and Language (9EN0)',
    href: '/a-level/edexcel',
  },
  {
    slug: 'ocr',
    name: 'OCR A-Level',
    examCode: 'H472 / H470',
    description: 'A-Level English Literature (H472) and Language (H470)',
    href: '/a-level/ocr',
  },
  {
    slug: 'eduqas',
    name: 'WJEC Eduqas A-Level',
    examCode: 'Eduqas',
    description: 'A-Level English Literature and Language',
    href: '/a-level/eduqas',
  },
]

export default function ALevelHubPage() {
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
              UK A-Level
            </Badge>
            <Badge className="bg-primary/10 text-primary border-primary/20">
              Literature & Language
            </Badge>
          </div>
          <h1 className="text-display-sm font-heading text-foreground sm:text-display">
            A-Level English Hub
          </h1>
          <p className="mt-3 max-w-2xl text-body-lg text-muted-foreground">
            Pick your UK A-Level board below. Full board-specific guides are on our roadmap — in the
            meantime, use the cross-board revision tools for set-text analysis, essay technique and
            language study.
          </p>
        </div>
      </section>

      {/* ── Board cards ──────────────────────────────────────────────── */}
      <section>
        <div className="mb-5 flex items-center gap-3">
          <BookOpen className="size-5 text-primary" />
          <h2 className="text-heading-lg font-heading text-foreground">Choose your exam board</h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {boards.map((board) => (
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
                    Open {board.name.split(' ')[0]} hub
                    <ArrowRight className="size-3.5" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* ── Footnote ───────────────────────────────────────────────── */}
      <p className="text-center text-body-xs text-muted-foreground/60">
        Aligned with AQA, Pearson Edexcel, OCR and WJEC Eduqas A-Level English specifications
      </p>
    </div>
  )
}
