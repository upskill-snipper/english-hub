import type { Metadata } from 'next'
import Link from 'next/link'
import {
  Brain,
  FileText,
  BarChart3,
  BookOpen,
  Sparkles,
  PenTool,
  TrendingUp,
  FolderOpen,
  Target,
  Zap,
} from 'lucide-react'

import { getServerBoard } from '@/lib/board/get-server-board'
import { getBoardConfig } from '@/lib/board/board-config'
import { Badge } from '@/components/ui/badge'
import { ToolkitProgressPreview } from '@/components/toolkit/toolkit-progress-preview'
import { BreadcrumbJsonLd } from '@/components/seo/json-ld'
import { tMany } from '@/lib/i18n/t'

// ─── Toolkit Hub (Server Component) ───────────────────────────────────────
// The student's personal learning command centre. Renders four sections:
// My Progress, AI Study Tools, My Materials, and Grade Predictor.
// ──────────────────────────────────────────────────────────────────────────

interface ToolkitSection {
  title: string
  description: string
  href: string
  icon: typeof Brain
  colour: string
  bgColour: string
  tag?: string
}

type ToolkitSectionDef = {
  titleKey: string
  descKey: string
  href: string
  icon: typeof Brain
  colour: string
  bgColour: string
  tagKey?: string
}

const AI_TOOL_DEFS: ToolkitSectionDef[] = [
  {
    titleKey: 'toolkit.ai.test_builder.title',
    descKey: 'toolkit.ai.test_builder.desc',
    href: '/toolkit/test-builder',
    icon: PenTool,
    colour: 'text-violet-500',
    bgColour: 'bg-violet-500/10',
    tagKey: 'toolkit.tag.ai_powered',
  },
  {
    titleKey: 'toolkit.ai.revision_notes.title',
    descKey: 'toolkit.ai.revision_notes.desc',
    href: '/toolkit/revision-builder',
    icon: FileText,
    colour: 'text-blue-500',
    bgColour: 'bg-blue-500/10',
    tagKey: 'toolkit.tag.ai_powered',
  },
  {
    titleKey: 'toolkit.ai.personalised.title',
    descKey: 'toolkit.ai.personalised.desc',
    href: '/toolkit/personalised-revision',
    icon: Target,
    colour: 'text-rose-500',
    bgColour: 'bg-rose-500/10',
    tagKey: 'toolkit.tag.data_driven',
  },
]

const DASHBOARD_SECTION_DEFS: ToolkitSectionDef[] = [
  {
    titleKey: 'toolkit.dashboard.progress.title',
    descKey: 'toolkit.dashboard.progress.desc',
    href: '/toolkit/progress',
    icon: BarChart3,
    colour: 'text-emerald-500',
    bgColour: 'bg-emerald-500/10',
  },
  {
    titleKey: 'toolkit.dashboard.materials.title',
    descKey: 'toolkit.dashboard.materials.desc',
    href: '/toolkit/my-materials',
    icon: FolderOpen,
    colour: 'text-amber-500',
    bgColour: 'bg-amber-500/10',
  },
]

export const metadata: Metadata = {
  title: 'Revision toolkit — The English Hub',
  description:
    'Free tools for GCSE & IGCSE English: quote builders, essay frames, mark-scheme checklists.',
  alternates: { canonical: 'https://theenglishhub.app/toolkit' },
  openGraph: { url: 'https://theenglishhub.app/toolkit' },
}

export default async function ToolkitPage() {
  const board = await getServerBoard()
  const boardConfig = getBoardConfig(board)

  // Pre-resolve every dynamic string.
  const sectionKeys = [...AI_TOOL_DEFS, ...DASHBOARD_SECTION_DEFS].flatMap((s) => [
    s.titleKey,
    s.descKey,
    s.tagKey ?? '',
  ])
  const v = await tMany([
    'toolkit.crumb.home',
    'toolkit.crumb.self',
    'toolkit.h1',
    'toolkit.lead',
    'toolkit.ai_heading',
    'toolkit.open_tool',
    'toolkit.dashboard_heading',
    'toolkit.grade_predictor.h2',
    'toolkit.grade_predictor.body',
    ...sectionKeys,
  ])
  let i = 0
  const tCrumbHome = v[i++]!
  const tCrumbSelf = v[i++]!
  const tH1 = v[i++]!
  const tLead = v[i++]!
  const tAiHeading = v[i++]!
  const tOpenTool = v[i++]!
  const tDashboardHeading = v[i++]!
  const tGpH2 = v[i++]!
  const tGpBody = v[i++]!

  const AI_TOOLS: ToolkitSection[] = AI_TOOL_DEFS.map((d) => {
    const title = v[i++]!
    const description = v[i++]!
    const tag = d.tagKey ? v[i++]! : (i++, undefined)
    return {
      title,
      description,
      href: d.href,
      icon: d.icon,
      colour: d.colour,
      bgColour: d.bgColour,
      tag,
    }
  })
  const DASHBOARD_SECTIONS: ToolkitSection[] = DASHBOARD_SECTION_DEFS.map((d) => {
    const title = v[i++]!
    const description = v[i++]!
    const tag = d.tagKey ? v[i++]! : (i++, undefined)
    return {
      title,
      description,
      href: d.href,
      icon: d.icon,
      colour: d.colour,
      bgColour: d.bgColour,
      tag,
    }
  })

  return (
    <main id="main-content" className="min-h-screen bg-background">
      <BreadcrumbJsonLd
        items={[
          { name: tCrumbHome, url: 'https://theenglishhub.app' },
          { name: tCrumbSelf, url: 'https://theenglishhub.app/toolkit' },
        ]}
      />
      {/* ── Hero ──────────────────────────────────────────────────── */}
      <section className="border-b border-border bg-card">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
          <div className="flex items-start gap-4">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary/10">
              <Brain className="h-7 w-7 text-primary" />
            </div>
            <div>
              <div className="flex items-center gap-3 mb-2">
                <h1 className="font-serif text-3xl sm:text-4xl font-medium tracking-tight">
                  {tH1}
                </h1>
                {boardConfig && (
                  <Badge variant="outline" className="font-mono text-xs">
                    {boardConfig.shortName}
                  </Badge>
                )}
              </div>
              <p className="text-muted-foreground text-lg max-w-2xl">{tLead}</p>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-12 space-y-12">
        {/* ── Quick stats (client component island) ──────────────── */}
        <ToolkitProgressPreview />

        {/* ── AI Study Tools ─────────────────────────────────────── */}
        <section>
          <div className="flex items-center gap-2 mb-6">
            <Sparkles className="h-5 w-5 text-primary" />
            <h2 className="font-serif text-2xl font-medium tracking-tight">{tAiHeading}</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {AI_TOOLS.map((tool) => (
              <Link
                key={tool.href}
                href={tool.href}
                className="group relative flex flex-col gap-4 rounded-xl border border-border bg-card p-6 shadow-soft transition-all duration-200 hover:shadow-medium hover:border-primary/25"
              >
                <div className="flex items-start justify-between">
                  <div
                    className={`flex h-11 w-11 items-center justify-center rounded-xl ${tool.bgColour}`}
                  >
                    <tool.icon className={`h-5 w-5 ${tool.colour}`} />
                  </div>
                  {tool.tag && (
                    <Badge className="bg-primary/10 text-primary border-primary/20 text-xs font-mono">
                      {tool.tag}
                    </Badge>
                  )}
                </div>
                <div>
                  <h3 className="font-serif text-lg font-medium mb-1 group-hover:text-primary transition-colors">
                    {tool.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {tool.description}
                  </p>
                </div>
                <div className="mt-auto flex items-center gap-1 text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                  <Zap className="h-3.5 w-3.5" />
                  {tOpenTool}
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* ── Dashboard & Materials ──────────────────────────────── */}
        <section>
          <div className="flex items-center gap-2 mb-6">
            <TrendingUp className="h-5 w-5 text-primary" />
            <h2 className="font-serif text-2xl font-medium tracking-tight">{tDashboardHeading}</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {DASHBOARD_SECTIONS.map((section) => (
              <Link
                key={section.href}
                href={section.href}
                className="group flex flex-col gap-4 rounded-xl border border-border bg-card p-6 shadow-soft transition-all duration-200 hover:shadow-medium hover:border-primary/25"
              >
                <div
                  className={`flex h-11 w-11 items-center justify-center rounded-xl ${section.bgColour}`}
                >
                  <section.icon className={`h-5 w-5 ${section.colour}`} />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-medium mb-1 group-hover:text-primary transition-colors">
                    {section.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {section.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* ── Grade Predictor CTA ────────────────────────────────── */}
        <section>
          <Link
            href="/toolkit/progress#grade-predictor"
            className="group flex items-center gap-6 rounded-xl border border-border bg-card p-6 sm:p-8 shadow-soft transition-all duration-200 hover:shadow-medium hover:border-primary/25"
          >
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-primary/10">
              <Target className="h-8 w-8 text-primary" />
            </div>
            <div className="flex-1">
              <h2 className="font-serif text-xl sm:text-2xl font-medium mb-1 group-hover:text-primary transition-colors">
                {tGpH2}
              </h2>
              <p className="text-muted-foreground">{tGpBody}</p>
            </div>
            <BookOpen className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors shrink-0 hidden sm:block" />
          </Link>
        </section>
      </div>
    </main>
  )
}
