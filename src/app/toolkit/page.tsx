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

const AI_TOOLS: ToolkitSection[] = [
  {
    title: 'AI Test Builder',
    description:
      "Generate custom tests from your board's texts and topics. Multiple-choice and short-answer questions, scored with GCSE grade equivalents.",
    href: '/toolkit/test-builder',
    icon: PenTool,
    colour: 'text-violet-500',
    bgColour: 'bg-violet-500/10',
    tag: 'AI-Powered',
  },
  {
    title: 'AI Revision Notes',
    description:
      'Get personalised revision summaries tailored to your weak areas, target grade, and study history. Key quotes, themes, and exam tips.',
    href: '/toolkit/revision-builder',
    icon: FileText,
    colour: 'text-blue-500',
    bgColour: 'bg-blue-500/10',
    tag: 'AI-Powered',
  },
  {
    title: 'Personalised Revision',
    description:
      'A revision guide built from YOUR data. Targets your weakest areas first, consolidates your current grade, then pushes you higher with stretch questions.',
    href: '/toolkit/personalised-revision',
    icon: Target,
    colour: 'text-rose-500',
    bgColour: 'bg-rose-500/10',
    tag: 'Data-Driven',
  },
]

const DASHBOARD_SECTIONS: ToolkitSection[] = [
  {
    title: 'My Progress',
    description:
      'Track your scores, study streak, time spent, and see your predicted GCSE grade based on your performance.',
    href: '/toolkit/progress',
    icon: BarChart3,
    colour: 'text-emerald-500',
    bgColour: 'bg-emerald-500/10',
  },
  {
    title: 'My Materials',
    description:
      'Access all your saved custom tests, revision notes, and quote banks in one place.',
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

  return (
    <main id="main-content" className="min-h-screen bg-background">
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: 'https://theenglishhub.app' },
          { name: 'Toolkit', url: 'https://theenglishhub.app/toolkit' },
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
                  Student Toolkit
                </h1>
                {boardConfig && (
                  <Badge variant="outline" className="font-mono text-xs">
                    {boardConfig.shortName}
                  </Badge>
                )}
              </div>
              <p className="text-muted-foreground text-lg max-w-2xl">
                Your personal learning command centre. Build custom tests, generate revision notes,
                track your progress, and predict your GCSE grade.
              </p>
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
            <h2 className="font-serif text-2xl font-medium tracking-tight">AI Study Tools</h2>
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
                  Open tool
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* ── Dashboard & Materials ──────────────────────────────── */}
        <section>
          <div className="flex items-center gap-2 mb-6">
            <TrendingUp className="h-5 w-5 text-primary" />
            <h2 className="font-serif text-2xl font-medium tracking-tight">
              Dashboard & Materials
            </h2>
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
                Grade Predictor
              </h2>
              <p className="text-muted-foreground">
                See your predicted GCSE grade based on quiz scores, mock results, and overall
                performance data. Updated as you study.
              </p>
            </div>
            <BookOpen className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors shrink-0 hidden sm:block" />
          </Link>
        </section>
      </div>
    </main>
  )
}
