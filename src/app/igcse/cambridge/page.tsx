import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ArrowRight,
  BookOpen,
  Globe,
  GraduationCap,
  Sparkles,
  Clock,
  Scroll,
  ChevronLeft,
  ChevronRight,
  PenTool,
  Brain,
  Gamepad2,
  Layers,
  Wrench,
  Target,
  FileText,
  BarChart3,
} from 'lucide-react'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { requireIgcseBoard } from '@/app/igcse/_lib/guard'

export const metadata: Metadata = {
  title: 'Cambridge IGCSE English — The English Hub',
  description:
    'Cambridge IGCSE English hub. Covers Language A and Language B with full study guides, exam technique and assessment breakdowns.',
  alternates: { canonical: 'https://theenglishhub.app/igcse/cambridge' },
}

const syllabuses = [
  {
    slug: '0500',
    name: 'IGCSE Language A',
    tagline: 'For students whose first language is English — graded A* to G',
    description:
      'Two-paper qualification testing reading comprehension, summary writing, directed writing and extended composition. Graded A*-G and sat by thousands of students in international schools every year.',
    icon: Globe,
    iconBg: 'bg-primary/10',
    iconText: 'text-primary',
    papers: '2 papers',
    time: '4h total',
    grading: 'A* – G',
    available: true,
    href: '/igcse/cambridge/0500',
    highlights: [
      {
        label: 'Reading Paper — comprehension, summary and directed writing',
        href: '/igcse/cambridge/0500/paper-1',
      },
      {
        label: 'Writing Paper — directed writing and composition',
        href: '/igcse/cambridge/0500/paper-2',
      },
      {
        label: 'Grade boundaries A*-G',
        href: '/igcse/cambridge/0500/grade-boundaries',
      },
      {
        label: 'Full syllabus breakdown',
        href: '/igcse/cambridge/0500/syllabus',
      },
    ],
  },
  {
    slug: '0990',
    name: 'IGCSE Language B',
    tagline: 'For students whose first language is English — graded 9 to 1',
    description:
      'The 9-1 graded version of Cambridge First Language English. Identical content and assessment structure to Language A but reported on the numerical 9-1 scale.',
    icon: GraduationCap,
    iconBg: 'bg-primary/10',
    iconText: 'text-primary',
    papers: '2 papers',
    time: '4h total',
    grading: '9 – 1',
    available: true,
    href: '/igcse/cambridge/0990',
    highlights: [
      {
        label: 'Reading Paper — comprehension, summary and language analysis',
        href: '/igcse/cambridge/0990/paper-1',
      },
      {
        label: 'Writing Paper — directed writing and composition',
        href: '/igcse/cambridge/0990/paper-2',
      },
      {
        label: '9-1 vs A*-G grade conversion',
        href: '/igcse/cambridge/0990/grade-conversion',
      },
      {
        label: 'How Language B differs from Language A',
        href: '/igcse/cambridge/0990/difference-vs-0500',
      },
    ],
  },
]

const sharedSkillsLinks = [
  {
    label: 'Reading skills',
    description: 'Comprehension, language analysis and summary techniques',
    href: '/igcse/cambridge/reading',
    icon: BookOpen,
  },
  {
    label: 'Composition skills',
    description: 'Narrative, descriptive writing and mark-scheme strategies',
    href: '/igcse/cambridge/composition',
    icon: PenTool,
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
]

export default async function CambridgeHubPage() {
  await requireIgcseBoard(['cambridge-0500', 'cambridge-0990'])

  return (
    <div className="space-y-12 pb-16">
      {/* ── Back link ─────────────────────────────────────────────── */}
      <div>
        <Button
          variant="ghost"
          size="sm"
          render={<Link href="/igcse" />}
          className="gap-1"
        >
          <ChevronLeft className="size-4" />
          All exam boards
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
              Cambridge International
            </Badge>
            <Badge className="bg-primary/10 text-primary border-primary/20">
              First Language English
            </Badge>
          </div>
          <h1 className="text-display-sm font-heading text-foreground sm:text-display">
            Cambridge IGCSE English
          </h1>
          <p className="mt-3 max-w-2xl text-body-lg text-muted-foreground">
            Cambridge First Language English is the world&apos;s largest
            international English qualification. Pick your course below to
            access full study guides, paper walkthroughs and past paper
            practice.
          </p>
        </div>
      </section>

      {/* ── Syllabus cards ────────────────────────────────────────── */}
      <section>
        <div className="mb-5 flex items-center gap-3">
          <div className="flex size-10 items-center justify-center rounded-xl bg-primary/10">
            <BookOpen className="size-5 text-primary" />
          </div>
          <h2 className="text-heading-lg font-heading text-foreground">
            Choose your course
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {syllabuses.map((syllabus) => {
            const Icon = syllabus.icon
            return (
              <Card
                key={syllabus.slug}
                className="group relative flex flex-col overflow-hidden transition-all duration-200 hover:border-border hover:shadow-card-hover"
              >
                <CardHeader className="pb-3">
                  <div className="mb-3 flex items-start justify-between gap-3">
                    <div
                      className={`flex size-11 items-center justify-center rounded-xl ${syllabus.iconBg}`}
                    >
                      <Icon className={`size-5 ${syllabus.iconText}`} />
                    </div>
                    <Badge className="bg-primary/10 text-primary border-primary/20">
                      Available now
                    </Badge>
                  </div>
                  <CardTitle className="text-heading-md font-heading leading-tight">
                    {syllabus.name}
                  </CardTitle>
                  <CardDescription className="text-body-sm">
                    {syllabus.tagline}
                  </CardDescription>
                </CardHeader>

                <CardContent className="flex flex-1 flex-col gap-4">
                  <p className="text-body-sm text-muted-foreground leading-relaxed">
                    {syllabus.description}
                  </p>

                  <div className="flex flex-wrap gap-3 text-body-xs text-muted-foreground">
                    <span className="inline-flex items-center gap-1.5 rounded-md border border-border/60 bg-muted/40 px-2 py-1">
                      <Scroll className="size-3" />
                      {syllabus.papers}
                    </span>
                    <span className="inline-flex items-center gap-1.5 rounded-md border border-border/60 bg-muted/40 px-2 py-1">
                      <Clock className="size-3" />
                      {syllabus.time}
                    </span>
                    <span className="inline-flex items-center gap-1.5 rounded-md border border-border/60 bg-muted/40 px-2 py-1">
                      <GraduationCap className="size-3" />
                      {syllabus.grading}
                    </span>
                  </div>

                  {/* Clickable highlight links */}
                  <div className="space-y-1.5">
                    {syllabus.highlights.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="group/link flex items-center justify-between gap-2 rounded-lg border border-border/40 bg-muted/20 px-3 py-2 text-body-sm text-muted-foreground transition-all hover:border-primary/40 hover:bg-primary/[0.04] hover:text-foreground"
                      >
                        <span>{item.label}</span>
                        <ChevronRight className="size-3.5 shrink-0 text-muted-foreground/60 transition-transform group-hover/link:translate-x-0.5 group-hover/link:text-primary" />
                      </Link>
                    ))}
                  </div>

                  <div className="mt-auto pt-2">
                    <Button
                      variant="default"
                      size="sm"
                      className="w-full"
                      render={<Link href={syllabus.href} />}
                    >
                      Open {syllabus.name}
                      <ArrowRight className="size-3.5" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </section>

      {/* ── Shared skills ─────────────────────────────────────────── */}
      <section>
        <div className="mb-5 flex items-center gap-3">
          <div className="flex size-10 items-center justify-center rounded-xl bg-primary/10">
            <Target className="size-5 text-primary" />
          </div>
          <h2 className="text-heading-lg font-heading text-foreground">
            Skills &amp; Practice
          </h2>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          {sharedSkillsLinks.map((link) => {
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
                  <h3 className="font-heading text-body text-foreground">
                    {link.label}
                  </h3>
                  <p className="text-body-xs text-muted-foreground">
                    {link.description}
                  </p>
                </div>
                <ArrowRight className="size-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:text-primary" />
              </Link>
            )
          })}
        </div>
      </section>

      {/* ── Study Tools ───────────────────────────────────────────── */}
      <section>
        <div className="mb-5 flex items-center gap-3">
          <div className="flex size-10 items-center justify-center rounded-xl bg-primary/10">
            <GraduationCap className="size-5 text-primary" />
          </div>
          <h2 className="text-heading-lg font-heading text-foreground">
            Study Tools
          </h2>
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

      {/* ── About Cambridge First Language ─────────────────────────── */}
      <section className="rounded-2xl border border-border/60 bg-card p-6 sm:p-8">
        <div className="mb-4 flex items-center gap-3">
          <Globe className="size-5 text-primary" />
          <h2 className="text-heading-md font-heading text-foreground">
            About Cambridge First Language English
          </h2>
        </div>
        <p className="text-body-sm text-muted-foreground leading-relaxed">
          Cambridge First Language English is designed for students whose first
          language is English. It develops the ability to communicate clearly,
          accurately and effectively in both speech and writing, and to use a
          wide range of vocabulary, correct grammar, spelling and punctuation.
          Students also learn to read a wide range of texts fluently and with
          good understanding.
        </p>
        <div className="mt-5 grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl border border-border/60 bg-muted/30 p-4">
            <h3 className="text-body-sm font-semibold text-foreground">
              Reading skills
            </h3>
            <p className="mt-1 text-body-xs text-muted-foreground">
              Demonstrate understanding of explicit and implicit meanings.
            </p>
          </div>
          <div className="rounded-xl border border-border/60 bg-muted/30 p-4">
            <h3 className="text-body-sm font-semibold text-foreground">
              Writing skills
            </h3>
            <p className="mt-1 text-body-xs text-muted-foreground">
              Communicate clearly, accurately and effectively for different purposes.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
