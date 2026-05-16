import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ArrowRight,
  BookOpen,
  FileText,
  PenTool,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Clock,
  Scroll,
  Target,
  GraduationCap,
  ListChecks,
  Brain,
  Gamepad2,
  Layers,
  Wrench,
  BarChart3,
} from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { requireIgcseBoard } from '@/app/igcse/_lib/guard'

import { CourseJsonLd, BreadcrumbJsonLd } from '@/components/seo/json-ld'
export const metadata: Metadata = {
  openGraph: {
    title: 'IGCSE Language A — The English Hub',
    description:
      'IGCSE Language A hub. Reading Paper, Writing Paper, assessment structure, grade boundaries and exam technique. Aligns with Cambridge syllabus 0500.',
  },
  title: 'IGCSE Language A',
  description:
    'IGCSE Language A hub. Reading Paper, Writing Paper, assessment structure, grade boundaries and exam technique. Aligns with Cambridge syllabus 0500.',
  alternates: { canonical: 'https://theenglishhub.app/igcse/cambridge/0500' },
}

const papers = [
  {
    code: 'Reading Paper',
    title: 'Reading skills',
    time: '2 hours',
    marks: '80 marks',
    weight: '50% of qualification',
    description:
      'Reading passages followed by comprehension, language analysis, a summary and a directed writing task based on the texts.',
    icon: BookOpen,
    href: '/igcse/cambridge/0500/paper-1',
    sections: [
      {
        label: 'Question 1 — short comprehension responses',
        href: '/igcse/cambridge/0500/paper-1',
      },
      {
        label: "Question 2 — language analysis of the writer's choices",
        href: '/igcse/cambridge/0500/paper-1/language-analysis',
      },
      {
        label: 'Question 3 — summary writing based on two passages',
        href: '/igcse/cambridge/0500/paper-1/summary-writing',
      },
    ],
    subLinks: [
      { label: 'Reading techniques', href: '/igcse/cambridge/0500/paper-1/reading-techniques' },
      { label: 'Language analysis', href: '/igcse/cambridge/0500/paper-1/language-analysis' },
      { label: 'Summary writing', href: '/igcse/cambridge/0500/paper-1/summary-writing' },
      { label: 'Practice', href: '/igcse/cambridge/0500/paper-1/practice' },
    ],
  },
  {
    code: 'Writing Paper',
    title: 'Writing skills',
    time: '2 hours',
    marks: '80 marks',
    weight: '50% of qualification',
    description:
      'Section A asks you to respond to a stimulus text in a specific form (letter, speech, article, report). Section B is an extended descriptive or narrative composition.',
    icon: PenTool,
    href: '/igcse/cambridge/0500/paper-2',
    sections: [
      {
        label: 'Section A — directed writing (40 marks)',
        href: '/igcse/cambridge/0500/paper-2/directed-writing',
      },
      {
        label: 'Section B — descriptive writing (40 marks)',
        href: '/igcse/cambridge/0500/paper-2/descriptive-writing',
      },
      {
        label: 'Section B — narrative writing (40 marks)',
        href: '/igcse/cambridge/0500/paper-2/narrative-writing',
      },
    ],
    subLinks: [
      { label: 'Directed writing', href: '/igcse/cambridge/0500/paper-2/directed-writing' },
      { label: 'Descriptive writing', href: '/igcse/cambridge/0500/paper-2/descriptive-writing' },
      { label: 'Narrative writing', href: '/igcse/cambridge/0500/paper-2/narrative-writing' },
    ],
  },
]

const skillsLinks = [
  {
    label: 'Reading practice passages',
    description: 'Work through unseen passages across 10 genres and styles',
    href: '/igcse/cambridge/reading',
    icon: BookOpen,
  },
  {
    label: 'Composition skills',
    description: 'Narrative, descriptive techniques and mark-scheme strategies',
    href: '/igcse/cambridge/composition',
    icon: PenTool,
  },
]

const quickLinks = [
  {
    title: 'Grade boundaries A*-G',
    description: 'Historical thresholds and how to hit a top grade.',
    href: '/igcse/cambridge/0500/grade-boundaries',
    icon: Target,
  },
  {
    title: 'Full syllabus',
    description: 'Complete 0500 specification breakdown.',
    href: '/igcse/cambridge/0500/syllabus',
    icon: FileText,
  },
]

const studyTools = [
  {
    title: 'AI Essay Marking',
    description: 'Submit an essay for AI feedback',
    href: '/marking',
    icon: PenTool,
  },
  {
    title: 'Quiz',
    description: 'Test yourself with IGCSE questions',
    href: '/revision/quiz',
    icon: Brain,
  },
  {
    title: 'Flashcards',
    description: 'Spaced repetition revision',
    href: '/resources/study-tools/flashcards',
    icon: Layers,
  },
  {
    title: 'Games',
    description: '7 GCSE-grade games',
    href: '/games',
    icon: Gamepad2,
  },
  {
    title: 'AI Toolkit',
    description: 'AI test builder and revision notes',
    href: '/toolkit',
    icon: Wrench,
  },
  {
    title: 'Grade Targets',
    description: 'Grade 5, 7, 9 specific guides',
    href: '/revision/grade-targets',
    icon: BarChart3,
  },
]

export default async function Cambridge0500HubPage() {
  await requireIgcseBoard(['cambridge-0500'])

  return (
    <div className="space-y-12 pb-16">
      <CourseJsonLd
        name="Cambridge IGCSE First Language English (0500)"
        description="Complete revision hub for Cambridge International IGCSE First Language English 0500 — Reading, Composition, exam technique. Graded A*–G."
        educationalLevel="IGCSE"
        provider="The English Hub"
        url="https://theenglishhub.app/igcse/cambridge/0500"
      />
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: 'https://theenglishhub.app' },
          { name: 'IGCSE', url: 'https://theenglishhub.app/igcse' },
          { name: 'Cambridge IGCSE', url: 'https://theenglishhub.app/igcse/cambridge' },
          { name: 'IGCSE 0500', url: 'https://theenglishhub.app/igcse/cambridge/0500' },
        ]}
      />
      {/* ── Back link ─────────────────────────────────────────────── */}
      <div>
        <Button
          variant="ghost"
          size="sm"
          render={<Link href="/igcse/cambridge" />}
          className="gap-1"
        >
          <ChevronLeft className="size-4" />
          Cambridge hub
        </Button>
      </div>

      {/* ── Hero ────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden rounded-2xl border border-border/60 bg-gradient-to-br from-card via-card to-primary/[0.04] p-6 sm:p-8 lg:p-10">
        <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-primary/5 blur-3xl" />

        <div className="relative">
          <div className="mb-4 flex flex-wrap items-center gap-2">
            <Badge className="bg-primary/10 text-primary border-primary/20">Cambridge IGCSE</Badge>
            <Badge variant="secondary">
              <Sparkles className="mr-1 size-3" />
              First Language English
            </Badge>
          </div>
          <h1 className="text-display-sm font-heading text-foreground sm:text-display">
            IGCSE Language A
          </h1>
          <p className="mt-3 max-w-2xl text-body-lg text-muted-foreground">
            The world&apos;s most widely taken international English qualification. Two 2-hour
            papers, 160 marks in total, equally weighted between reading and writing. Designed for
            students whose first language is English.
          </p>

          <div className="mt-5 flex flex-wrap gap-3 text-body-xs text-muted-foreground">
            <span className="inline-flex items-center gap-1.5 rounded-md border border-border/60 bg-muted/40 px-3 py-1.5">
              <Scroll className="size-3.5" />2 papers
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-md border border-border/60 bg-muted/40 px-3 py-1.5">
              <Clock className="size-3.5" />4 hours total
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-md border border-border/60 bg-muted/40 px-3 py-1.5">
              <Target className="size-3.5" />
              160 marks
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-md border border-border/60 bg-muted/40 px-3 py-1.5">
              <GraduationCap className="size-3.5" />
              A* – G
            </span>
          </div>
        </div>
      </section>

      {/* ── Papers ─────────────────────────────────────────────────── */}
      <section>
        <div className="mb-5 flex items-center gap-3">
          <div className="flex size-10 items-center justify-center rounded-xl bg-primary/10">
            <FileText className="size-5 text-primary" />
          </div>
          <h2 className="text-heading-lg font-heading text-foreground">The two papers</h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {papers.map((paper) => {
            const Icon = paper.icon
            return (
              <div
                key={paper.code}
                className="rounded-2xl border border-border/60 bg-card transition-all duration-200 hover:shadow-card-hover"
              >
                {/* Paper header — clickable */}
                <Link
                  href={paper.href}
                  className="group/paper flex items-start justify-between gap-3 p-5 pb-3"
                >
                  <div>
                    <div className="mb-3 flex items-start gap-3">
                      <div className="flex size-11 items-center justify-center rounded-xl bg-primary/10">
                        <Icon className="size-5 text-primary" />
                      </div>
                      <Badge className="bg-primary/10 text-primary border-primary/20">
                        {paper.weight}
                      </Badge>
                    </div>
                    <h3 className="text-heading-md font-heading leading-tight text-foreground group-hover/paper:text-primary transition-colors">
                      {paper.code}: {paper.title}
                    </h3>
                    <p className="mt-1 font-mono text-body-xs text-muted-foreground">
                      {paper.time} — {paper.marks}
                    </p>
                    <p className="mt-2 text-body-sm text-muted-foreground leading-relaxed">
                      {paper.description}
                    </p>
                  </div>
                  <ChevronRight className="mt-1 size-5 shrink-0 text-muted-foreground transition-transform group-hover/paper:translate-x-0.5 group-hover/paper:text-primary" />
                </Link>

                {/* Clickable section breakdown */}
                <div className="space-y-1.5 border-t border-border/40 p-4 pt-3">
                  {paper.sections.map((section) => (
                    <Link
                      key={section.href + section.label}
                      href={section.href}
                      className="group/sec flex items-center justify-between gap-2 rounded-lg border border-border/40 bg-muted/20 px-3 py-2.5 text-body-sm text-muted-foreground transition-all hover:border-primary/40 hover:bg-primary/[0.04] hover:text-foreground"
                    >
                      <span>{section.label}</span>
                      <ChevronRight className="size-3.5 shrink-0 text-muted-foreground/60 transition-transform group-hover/sec:translate-x-0.5 group-hover/sec:text-primary" />
                    </Link>
                  ))}
                </div>

                {/* Sub-link pills */}
                {paper.subLinks && paper.subLinks.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 border-t border-border/40 px-4 py-3">
                    {paper.subLinks.map((sub) => (
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

                {/* Open button */}
                <div className="border-t border-border/40 p-4">
                  <Button
                    variant="default"
                    size="sm"
                    className="w-full"
                    render={<Link href={paper.href} />}
                  >
                    Explore {paper.code}
                    <ArrowRight className="size-3.5" />
                  </Button>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* ── Skills & Practice ─────────────────────────────────────── */}
      <section>
        <div className="mb-5 flex items-center gap-3">
          <div className="flex size-10 items-center justify-center rounded-xl bg-primary/10">
            <Target className="size-5 text-primary" />
          </div>
          <h2 className="text-heading-lg font-heading text-foreground">Skills &amp; Practice</h2>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          {skillsLinks.map((link) => {
            const Icon = link.icon
            return (
              <Link
                key={link.href}
                href={link.href}
                className="group flex items-center gap-4 rounded-xl border border-border/60 bg-card p-5 transition-all duration-200 hover:border-primary/30 hover:bg-primary/[0.03] hover:shadow-card-hover"
              >
                <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                  <Icon className="size-5 text-primary" />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="font-heading text-body text-foreground">{link.label}</h3>
                  <p className="text-body-xs text-muted-foreground">{link.description}</p>
                </div>
                <ArrowRight className="size-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:text-primary" />
              </Link>
            )
          })}
        </div>
      </section>

      {/* ── Assessment structure ───────────────────────────────────── */}
      <section className="rounded-2xl border border-border/60 bg-card p-6 sm:p-8">
        <div className="mb-4 flex items-center gap-3">
          <Target className="size-5 text-primary" />
          <h2 className="text-heading-md font-heading text-foreground">Assessment objectives</h2>
        </div>
        <p className="text-body-sm text-muted-foreground leading-relaxed">
          IGCSE Language A is assessed against two equally weighted objectives. Each paper draws on
          both in different proportions, so strong candidates must be able to read closely and write
          accurately across multiple forms.
        </p>
        <div className="mt-5 grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl border border-border/60 bg-muted/30 p-5">
            <Badge className="mb-2 bg-primary/10 text-primary border-primary/20">
              Reading skills — 50%
            </Badge>
            <h3 className="text-body-md font-semibold text-foreground">
              Understand and respond to texts
            </h3>
            <ul className="mt-2 space-y-1.5 text-body-xs text-muted-foreground">
              <li>Demonstrate understanding of explicit meanings</li>
              <li>Demonstrate understanding of implicit meanings and attitudes</li>
              <li>Analyse, evaluate and develop facts, ideas and opinions</li>
              <li>Select and use information for specific purposes</li>
            </ul>
          </div>
          <div className="rounded-xl border border-border/60 bg-muted/30 p-5">
            <Badge className="mb-2 bg-primary/10 text-primary border-primary/20">
              Writing skills — 50%
            </Badge>
            <h3 className="text-body-md font-semibold text-foreground">
              Write clearly and effectively
            </h3>
            <ul className="mt-2 space-y-1.5 text-body-xs text-muted-foreground">
              <li>Articulate experience and express ideas imaginatively</li>
              <li>Organise and structure ideas in paragraphs</li>
              <li>Use a range of vocabulary and sentence structures</li>
              <li>Use accurate spelling, punctuation and grammar</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ── Study Tools ───────────────────────────────────────────── */}
      <section>
        <div className="mb-5 flex items-center gap-3">
          <div className="flex size-10 items-center justify-center rounded-xl bg-primary/10">
            <GraduationCap className="size-5 text-primary" />
          </div>
          <h2 className="text-heading-lg font-heading text-foreground">Study Tools</h2>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {studyTools.map((tool) => {
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
                  <h3 className="font-heading text-body text-foreground">{tool.title}</h3>
                  <p className="text-body-xs text-muted-foreground">{tool.description}</p>
                </div>
                <ArrowRight className="size-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:text-primary" />
              </Link>
            )
          })}
        </div>
      </section>

      {/* ── Quick links ────────────────────────────────────────────── */}
      <section>
        <div className="mb-5 flex items-center gap-3">
          <div className="flex size-10 items-center justify-center rounded-xl bg-primary/10">
            <ListChecks className="size-5 text-primary" />
          </div>
          <h2 className="text-heading-lg font-heading text-foreground">Reference Pages</h2>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {quickLinks.map((link) => {
            const Icon = link.icon
            return (
              <Link
                key={link.href}
                href={link.href}
                className="group flex items-center gap-4 rounded-xl border border-border/60 bg-card p-5 transition-all hover:border-primary/30 hover:bg-primary/[0.03] hover:shadow-card-hover"
              >
                <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <Icon className="size-5 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-body-md font-semibold text-foreground">{link.title}</h3>
                  <p className="text-body-xs text-muted-foreground">{link.description}</p>
                </div>
                <ArrowRight className="size-4 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:text-primary" />
              </Link>
            )
          })}
        </div>
      </section>

      {/* ── Footer note ─────────────────────────────────────────────── */}
      <p className="text-center text-body-xs text-muted-foreground/60">
        Aligns with Cambridge syllabus 0500
      </p>
    </div>
  )
}
