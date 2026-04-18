import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Clock,
  FileText,
  Feather,
  ScrollText,
  GraduationCap,
  Sparkles,
  Target,
  PenTool,
  Brain,
  Layers,
  ChevronRight,
} from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { requireIgcseBoard } from '@/app/igcse/_lib/guard'

export const metadata: Metadata = {
  title: 'Edexcel IGCSE English Language A (4EA1) — The English Hub',
  description:
    'Complete revision hub for Pearson Edexcel IGCSE English Language A. Paper 1 non-fiction anthology, Paper 2 transactional writing, exam technique and study tools.',
  alternates: { canonical: 'https://theenglishhub.app/igcse/edexcel-lang' },
}

/* ─── Data ───────────────────────────────────────────────────────────── */

const paper1Sections = [
  {
    heading: 'Section A — Non-Fiction Anthology',
    label: 'Paper 1 Section A',
    detail:
      'Questions on the 10 prescribed non-fiction texts from the Pearson Edexcel anthology. Retrieval, language analysis, and structural analysis.',
    href: '/igcse/edexcel-lang/anthology',
    subLinks: [
      { label: 'The Danger of a Single Story', href: '/igcse/edexcel-lang/anthology/the-danger-of-a-single-story' },
      { label: 'A Passage to Africa', href: '/igcse/edexcel-lang/anthology/a-passage-to-africa' },
      { label: "The Explorer's Daughter", href: '/igcse/edexcel-lang/anthology/the-explorers-daughter' },
      { label: 'Explorers or Boys Messing About', href: '/igcse/edexcel-lang/anthology/explorers-or-boys-messing-about' },
      { label: '127 Hours', href: '/igcse/edexcel-lang/anthology/127-hours' },
    ],
  },
  {
    heading: 'Section A — Anthology (continued)',
    label: 'Paper 1 Section A',
    detail:
      'The remaining five prescribed non-fiction texts for the anthology study.',
    href: '/igcse/edexcel-lang/anthology',
    subLinks: [
      { label: 'Young and Dyslexic', href: '/igcse/edexcel-lang/anthology/young-and-dyslexic' },
      { label: 'A Game of Polo with a Headless Goat', href: '/igcse/edexcel-lang/anthology/a-game-of-polo-with-a-headless-goat' },
      { label: 'Beyond the Sky and the Earth', href: '/igcse/edexcel-lang/anthology/beyond-the-sky-and-the-earth' },
      { label: 'H is for Hawk', href: '/igcse/edexcel-lang/anthology/h-is-for-hawk' },
      { label: 'Chinese Cinderella', href: '/igcse/edexcel-lang/anthology/chinese-cinderella' },
    ],
  },
  {
    heading: 'Section B — Unseen Non-Fiction',
    label: 'Paper 1 Section B',
    detail:
      'One unseen non-fiction extract with comprehension, language and comparison questions. Skills transfer from Section A anthology study.',
    href: '/igcse/edexcel-lang/anthology',
  },
]

const paper2Sections = [
  {
    heading: 'Section A — Reading (Fiction/Literary Non-Fiction)',
    label: 'Paper 2 Section A',
    detail:
      'One unseen fiction or literary non-fiction extract with comprehension and analytical response questions.',
    href: '/igcse/edexcel-lang',
  },
  {
    heading: 'Section B — Transactional Writing',
    label: 'Paper 2 Section B',
    detail:
      'Two transactional writing tasks from a choice. Text types include articles, letters, reports, reviews, speeches and essays.',
    href: '/igcse/edexcel-lang',
  },
]

/* ─── Page ───────────────────────────────────────────────────────────── */

export default async function EdexcelIgcseLangHubPage() {
  await requireIgcseBoard(['edexcel-igcse-lang'])

  return (
    <div className="space-y-12 pb-16">
      {/* ── Back link ───────────────────────────────────────────────── */}
      <div>
        <Button
          variant="ghost"
          size="sm"
          className="mb-3 -ml-2 text-muted-foreground"
          render={<Link href="/igcse" />}
        >
          <ArrowLeft className="size-3.5" />
          Back to IGCSE
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
              International GCSE English Language
            </Badge>
          </div>
          <h1 className="text-display-sm font-heading text-foreground sm:text-display">
            Pearson Edexcel IGCSE Language A
          </h1>
          <p className="mt-3 max-w-2xl text-body-lg text-muted-foreground">
            The Pearson Edexcel International GCSE in English Language (Specification A)
            is a two-paper qualification covering{' '}
            <strong className="text-foreground">non-fiction reading</strong>,{' '}
            <strong className="text-foreground">transactional writing</strong> and a{' '}
            <strong className="text-foreground">prescribed anthology</strong> of
            ten non-fiction texts studied for Paper 1 Section A.
          </p>

          <div className="mt-6 flex flex-wrap gap-3 text-body-sm text-muted-foreground">
            <span className="inline-flex items-center gap-1.5 rounded-md border border-border/60 bg-muted/40 px-3 py-1.5">
              <ScrollText className="size-3.5" />
              2 papers
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-md border border-border/60 bg-muted/40 px-3 py-1.5">
              <Clock className="size-3.5" />
              3h 15m total
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-md border border-border/60 bg-muted/40 px-3 py-1.5">
              <BookOpen className="size-3.5" />
              10 anthology texts
            </span>
          </div>
        </div>
      </section>

      {/* ── Paper 1 ─────────────────────────────────────────────────── */}
      <section>
        <div className="mb-5 flex items-center gap-3">
          <div className="flex size-10 items-center justify-center rounded-xl bg-primary/10">
            <Feather className="size-5 text-primary" />
          </div>
          <div>
            <h2 className="text-heading-lg font-heading text-foreground">
              Paper 1: Non-Fiction Texts and Transactional Writing
            </h2>
            <p className="font-mono text-body-xs text-muted-foreground">
              1 hour 45 minutes &middot; 60 marks &middot; 60% of total
            </p>
          </div>
        </div>

        <div className="space-y-4">
          {paper1Sections.map((section) => (
            <div
              key={section.heading}
              className="rounded-2xl border border-border/60 bg-card transition-all duration-200"
            >
              <Link
                href={section.href}
                className="group/section flex items-center justify-between gap-3 p-5 pb-3"
              >
                <div className="min-w-0">
                  <span className="mb-1 block font-mono text-body-xs text-muted-foreground uppercase tracking-wider">
                    {section.label}
                  </span>
                  <h3 className="font-heading text-heading-sm text-foreground group-hover/section:text-primary transition-colors">
                    {section.heading}
                  </h3>
                  <p className="mt-1 text-body-sm text-muted-foreground leading-relaxed">
                    {section.detail}
                  </p>
                </div>
                <ChevronRight className="size-5 shrink-0 text-muted-foreground transition-transform group-hover/section:translate-x-0.5 group-hover/section:text-primary" />
              </Link>

              {section.subLinks && section.subLinks.length > 0 && (
                <div className="flex flex-wrap gap-1.5 border-t border-border/40 px-5 py-3">
                  {section.subLinks.map((sub) => (
                    <Link
                      key={sub.href}
                      href={sub.href}
                      className="rounded-md border border-border/40 bg-muted/30 px-2.5 py-1 text-body-xs text-muted-foreground transition-colors hover:border-primary/40 hover:bg-primary/[0.06] hover:text-primary"
                    >
                      {sub.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ── Paper 2 ─────────────────────────────────────────────────── */}
      <section>
        <div className="mb-5 flex items-center gap-3">
          <div className="flex size-10 items-center justify-center rounded-xl bg-primary/10">
            <PenTool className="size-5 text-primary" />
          </div>
          <div>
            <h2 className="text-heading-lg font-heading text-foreground">
              Paper 2: Poetry and Prose Texts and Imaginative Writing
            </h2>
            <p className="font-mono text-body-xs text-muted-foreground">
              1 hour 30 minutes &middot; 40 marks &middot; 40% of total
            </p>
          </div>
        </div>

        <div className="space-y-4">
          {paper2Sections.map((section) => (
            <div
              key={section.heading}
              className="rounded-2xl border border-border/60 bg-card transition-all duration-200"
            >
              <div className="p-5 pb-3">
                <span className="mb-1 block font-mono text-body-xs text-muted-foreground uppercase tracking-wider">
                  {section.label}
                </span>
                <h3 className="font-heading text-heading-sm text-foreground">
                  {section.heading}
                </h3>
                <p className="mt-1 text-body-sm text-muted-foreground leading-relaxed">
                  {section.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Study Tools ─────────────────────────────────────────────── */}
      <section>
        <div className="mb-5 flex items-center gap-3">
          <div className="flex size-10 items-center justify-center rounded-xl bg-primary/10">
            <GraduationCap className="size-5 text-primary" />
          </div>
          <h2 className="text-heading-lg font-heading text-foreground">
            Quick Links
          </h2>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: 'Anthology Study',
              description: 'All 10 non-fiction texts with full analysis',
              href: '/igcse/edexcel-lang/anthology',
              icon: BookOpen,
            },
            {
              title: 'AI Essay Marking',
              description: 'Submit writing for AI feedback',
              href: '/marking',
              icon: PenTool,
            },
            {
              title: 'Quiz',
              description: 'Test yourself with language questions',
              href: '/revision/quiz',
              icon: Brain,
            },
          ].map((tool) => {
            const Icon = tool.icon
            return (
              <Link
                key={tool.href}
                href={tool.href}
                className="group flex items-center gap-4 rounded-xl border border-border/60 bg-card p-4 transition-all duration-200 hover:border-primary/30 hover:bg-primary/[0.03] hover:shadow-card-hover"
              >
                <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                  <Icon className="size-5 text-primary" />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="font-heading text-body text-foreground">
                    {tool.title}
                  </h3>
                  <p className="text-body-xs text-muted-foreground">
                    {tool.description}
                  </p>
                </div>
                <ArrowRight className="size-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:text-primary" />
              </Link>
            )
          })}
        </div>
      </section>

      {/* ── Footer ──────────────────────────────────────────────────── */}
      <footer className="pt-4 text-center text-body-xs text-muted-foreground">
        Aligned with Pearson Edexcel specification 4EA1
      </footer>
    </div>
  )
}
