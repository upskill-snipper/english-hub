import Link from 'next/link'
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  FileText,
  PenTool,
  ScrollText,
  Sparkles,
} from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { BreadcrumbJsonLd } from '@/components/seo/json-ld'

export type ALevelBoardHubProps = {
  boardName: string
  examCode: string
  hubSlug: 'aqa' | 'edexcel' | 'ocr' | 'eduqas'
  // Roughly what students will find here once content lands - used as a teaser
  summary: string
}

const revisionLinks = [
  {
    title: 'Set Texts',
    description:
      'Shared analysis for A-Level set texts: Shakespeare tragedies, modernist poetry, modern drama and prose.',
    href: '/revision/texts',
    icon: BookOpen,
  },
  {
    title: 'Exam Technique',
    description: 'Essay planning, AO coverage, comparative essays and timing strategies.',
    href: '/revision/exam-technique',
    icon: ScrollText,
  },
  {
    title: 'Language Study',
    description:
      'Language study for A-Level English Language - frameworks, analysis, and written transformation.',
    href: '/revision/language',
    icon: PenTool,
  },
]

export function ALevelBoardHub({ boardName, examCode, hubSlug, summary }: ALevelBoardHubProps) {
  return (
    <div className="space-y-10 pb-16">
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: 'https://theenglishhub.app' },
          { name: 'A-Level', url: 'https://theenglishhub.app/a-level' },
          {
            name: boardName,
            url: `https://theenglishhub.app/a-level/${hubSlug}`,
          },
        ]}
      />

      {/* ── Back link ───────────────────────────────────────────────── */}
      <div>
        <Button
          variant="ghost"
          size="sm"
          className="-ml-2 text-muted-foreground"
          render={<Link href="/a-level" />}
        >
          <ArrowLeft className="size-3.5" />
          Back to A-Level
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
              UK A-Level English
            </Badge>
            <Badge className="bg-primary/10 text-primary border-primary/20 font-mono">
              {examCode}
            </Badge>
          </div>
          <h1 className="text-display-sm font-heading text-foreground sm:text-display">
            {boardName}
          </h1>
          <p className="mt-3 max-w-2xl text-body-lg text-muted-foreground">{summary}</p>
        </div>
      </section>

      {/* ── Roadmap notice ──────────────────────────────────────────── */}
      <section className="rounded-2xl border border-amber-500/30 bg-amber-500/[0.05] p-6 sm:p-7">
        <div className="flex items-start gap-3">
          <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-amber-500/15">
            <FileText className="size-5 text-amber-600" />
          </div>
          <div className="min-w-0">
            <h2 className="font-heading text-heading-sm text-foreground">
              Full A-Level content is on our roadmap
            </h2>
            <p className="mt-1 text-body-sm text-muted-foreground">
              We&apos;re building board-specific A-Level guides for{' '}
              <strong className="text-foreground">{boardName}</strong> - set texts, comparative
              essays, anthology breakdowns and past-paper walkthroughs. In the meantime, use the
              cross-board revision tools below; each one already covers the core A-Level skills.
            </p>
          </div>
        </div>
      </section>

      {/* ── Cross-board revision tools ───────────────────────────────── */}
      <section>
        <div className="mb-5 flex items-center gap-3">
          <div className="flex size-10 items-center justify-center rounded-xl bg-primary/10">
            <BookOpen className="size-5 text-primary" />
          </div>
          <h2 className="text-heading-lg font-heading text-foreground">
            Cross-board revision tools
          </h2>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {revisionLinks.map((link) => {
            const Icon = link.icon
            return (
              <Link
                key={link.href}
                href={link.href}
                className="group flex items-start gap-4 rounded-xl border border-border/60 bg-card p-4 transition-all duration-200 hover:border-primary/30 hover:bg-primary/[0.03] hover:shadow-card-hover"
              >
                <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                  <Icon className="size-5 text-primary" />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="font-heading text-body text-foreground">{link.title}</h3>
                  <p className="mt-0.5 text-body-xs text-muted-foreground">{link.description}</p>
                </div>
                <ArrowRight className="size-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:text-primary" />
              </Link>
            )
          })}
        </div>
      </section>

      {/* GeoFaq lives in a-level/layout.tsx (covers every board page
          including this one) - not here, to avoid a duplicate FAQPage. */}

      {/* ── Footer ──────────────────────────────────────────────────── */}
      <footer className="pt-4 text-center text-body-xs text-muted-foreground">
        Aligned with {boardName} specification ({examCode})
      </footer>
    </div>
  )
}
