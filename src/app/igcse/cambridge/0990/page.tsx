import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ArrowRight,
  BookOpen,
  PenTool,
  Target,
  Award,
  GraduationCap,
  Sparkles,
  Clock,
  FileText,
  Layers,
  ChevronRight,
  Brain,
  Gamepad2,
  Wrench,
  BarChart3,
  ChevronLeft,
} from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { requireIgcseBoard } from '@/app/igcse/_lib/guard'
import { t } from '@/lib/i18n/t'

import { CourseJsonLd, BreadcrumbJsonLd } from '@/components/seo/json-ld'
export const metadata: Metadata = {
  openGraph: {
    title: 'IGCSE Language B - The English Hub',
    description:
      'IGCSE Language B hub. Same content as Language A with 9-1 numerical grading. Reading Paper, Writing Paper, grade-by-grade guides and practice papers. Aligns with Cambridge syllabus 0990.',
  },
  title: 'IGCSE Language B',
  description:
    'IGCSE Language B hub. Same content as Language A with 9-1 numerical grading. Reading Paper, Writing Paper, grade-by-grade guides and practice papers. Aligns with Cambridge syllabus 0990.',
  alternates: { canonical: 'https://theenglishhub.app/igcse/cambridge/0990' },
}

const papers = [
  {
    code: 'Reading Paper',
    name: 'Reading skills',
    time: '2 hours',
    marks: '80 marks',
    weight: '50%',
    description:
      'Three linked questions on two unseen non-fiction texts. Tests comprehension, language analysis and summary skills.',
    href: '/igcse/cambridge/0990/paper-1',
    icon: BookOpen,
    subLinks: [{ label: 'Question types', href: '/igcse/cambridge/0990/paper-1/question-types' }],
  },
  {
    code: 'Writing Paper',
    name: 'Writing skills',
    time: '2 hours',
    marks: '80 marks',
    weight: '50%',
    description:
      'Section A directed writing in response to a text; Section B extended composition (narrative or descriptive).',
    href: '/igcse/cambridge/0990/paper-2',
    icon: PenTool,
    subLinks: [] as { label: string; href: string }[],
  },
]

const navCards = [
  {
    title: 'How Language B differs from Language A',
    description:
      'Same syllabus, same papers, different grade scale. Understand exactly what changes and what stays the same.',
    href: '/igcse/cambridge/0990/difference-vs-0500',
    icon: Layers,
  },
  {
    title: '9-1 grade conversion',
    description:
      'Full conversion table from the numerical 9-1 grades to the older A*-G scale used for Language A.',
    href: '/igcse/cambridge/0990/grade-conversion',
    icon: Target,
  },
  {
    title: 'Full syllabus',
    description: 'Complete 0990 specification breakdown and assessment objectives.',
    href: '/igcse/cambridge/0990/syllabus',
    icon: FileText,
  },
]

const gradeGuides = [
  {
    grade: 9,
    label: 'Hit Grade 9',
    description:
      'Top 4% of entries. Sophisticated analysis, controlled style, original voice and structural craft.',
    href: '/igcse/cambridge/0990/grade-9-guide',
    tone: 'bg-primary/10 text-primary border-primary/20',
  },
  {
    grade: 7,
    label: 'Hit Grade 7',
    description:
      'Equivalent to the old A grade. Confident analysis, accurate writing, clear structure throughout.',
    href: '/igcse/cambridge/0990/grade-7-guide',
    tone: 'bg-primary/5 text-primary border-primary/15',
  },
  {
    grade: 5,
    label: 'Pass with Grade 5',
    description:
      'Strong pass. Clear comprehension, generally accurate writing, some analytical comment.',
    href: '/igcse/cambridge/0990/grade-5-guide',
    tone: 'bg-muted text-muted-foreground border-border',
  },
]

const practicePapers = [
  {
    label: 'Practice Paper 1 (Reading)',
    href: '/igcse/cambridge/0990/practice-paper-1',
  },
  {
    label: 'Practice Paper 2 (Writing)',
    href: '/igcse/cambridge/0990/practice-paper-2',
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

const gradeBoundaries = [
  { grade: 9, paper1: 68, paper2: 68 },
  { grade: 8, paper1: 62, paper2: 62 },
  { grade: 7, paper1: 55, paper2: 55 },
  { grade: 6, paper1: 48, paper2: 48 },
  { grade: 5, paper1: 41, paper2: 41 },
  { grade: 4, paper1: 34, paper2: 34 },
]

export default async function Cambridge0990HubPage() {
  await requireIgcseBoard(['cambridge-0990'])

  return (
    <div className="space-y-12 pb-16">
      <CourseJsonLd
        name="Cambridge IGCSE First Language English (0990)"
        description="Complete revision hub for Cambridge International IGCSE First Language English 0990 - Reading, Composition, exam technique. Graded 9-1."
        educationalLevel="IGCSE"
        provider="The English Hub"
        url="https://theenglishhub.app/igcse/cambridge/0990"
      />
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: 'https://theenglishhub.app' },
          { name: 'IGCSE', url: 'https://theenglishhub.app/igcse' },
          { name: 'Cambridge IGCSE', url: 'https://theenglishhub.app/igcse/cambridge' },
          { name: 'IGCSE 0990', url: 'https://theenglishhub.app/igcse/cambridge/0990' },
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

      {/* Hero */}
      <section className="relative overflow-hidden rounded-2xl border border-border/60 bg-gradient-to-br from-card via-card to-primary/[0.04] p-6 sm:p-8 lg:p-10">
        <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-primary/5 blur-3xl" />

        <div className="relative">
          <div className="mb-4 flex flex-wrap items-center gap-2">
            <Badge className="bg-primary/10 text-primary border-primary/20">
              <Sparkles className="mr-1 size-3" />
              {await t('igcse.cambridge.badge.cambridge_igcse')}
            </Badge>
            <Badge variant="secondary">First Language English (9-1)</Badge>
            <Badge variant="secondary">International</Badge>
          </div>
          <h1 className="text-display-sm font-heading text-foreground sm:text-display">
            IGCSE Language B
          </h1>
          <p className="mt-3 max-w-3xl text-body-lg text-muted-foreground">
            The <strong className="text-foreground">9-1 graded version</strong> of Cambridge First
            Language English. Identical content, papers and assessment objectives to{' '}
            <Link
              href="/igcse/cambridge/0500"
              className="text-primary underline-offset-2 hover:underline"
            >
              Language A
            </Link>
            , with results reported on the numerical scale from 9 (highest) to 1 (lowest). Popular
            in UK international schools and IB feeder schools.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            <Button
              size="sm"
              variant="outline"
              render={<Link href="/igcse/cambridge/0990/grade-conversion" />}
            >
              9-1 vs A*-G conversion
            </Button>
            <Button
              size="sm"
              variant="outline"
              render={<Link href="/igcse/cambridge/0990/practice-paper-1" />}
            >
              Practice paper
            </Button>
          </div>
        </div>
      </section>

      {/* Papers */}
      <section>
        <div className="mb-5 flex items-center gap-3">
          <div className="flex size-10 items-center justify-center rounded-xl bg-primary/10">
            <FileText className="size-5 text-primary" />
          </div>
          <h2 className="text-heading-lg font-heading text-foreground">The two papers</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {papers.map((p) => {
            const Icon = p.icon
            return (
              <div
                key={p.code}
                className="rounded-2xl border border-border/60 bg-card transition-all duration-200 hover:shadow-card-hover"
              >
                {/* Paper header - clickable */}
                <Link
                  href={p.href}
                  className="group/paper flex items-start justify-between gap-3 p-5 pb-3"
                >
                  <div>
                    <div className="mb-3 flex items-start gap-3">
                      <div className="flex size-11 items-center justify-center rounded-xl bg-primary/10">
                        <Icon className="size-5 text-primary" />
                      </div>
                      <Badge className="bg-primary/10 text-primary border-primary/20">
                        {p.weight}
                      </Badge>
                    </div>
                    <h3 className="text-heading-md font-heading leading-tight text-foreground group-hover/paper:text-primary transition-colors">
                      {p.code}: {p.name}
                    </h3>
                    <p className="mt-1 font-mono text-body-xs text-muted-foreground">
                      IGCSE Language B &middot; {p.marks} &middot; {p.time}
                    </p>
                    <p className="mt-2 text-body-sm text-muted-foreground leading-relaxed">
                      {p.description}
                    </p>
                  </div>
                  <ChevronRight className="mt-1 size-5 shrink-0 text-muted-foreground transition-transform group-hover/paper:translate-x-0.5 group-hover/paper:text-primary" />
                </Link>

                {/* Sub-link pills */}
                {p.subLinks.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 border-t border-border/40 px-4 py-3">
                    {p.subLinks.map((sub) => (
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
                    render={<Link href={p.href} />}
                  >
                    Open {p.code}
                    <ArrowRight className="size-3.5" />
                  </Button>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* Skills & Practice */}
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

      {/* 9-1 explanation */}
      <section className="rounded-2xl border border-border/60 bg-card p-6 sm:p-8">
        <div className="mb-4 flex items-center gap-3">
          <GraduationCap className="size-5 text-primary" />
          <h2 className="text-heading-md font-heading text-foreground">
            What the 9-1 grade scale means
          </h2>
        </div>
        <p className="text-body-sm text-muted-foreground leading-relaxed">
          IGCSE Language B reports results on the same numerical 9-1 scale used by reformed UK
          GCSEs, where Grade 9 is the highest and Grade 1 is the lowest pass. The content, papers
          and assessment objectives are identical to Language A - only the reporting scale changes.
          Schools choose Language B when they want students&apos; results to align directly with UK
          GCSE grades for sixth form or university applications.
        </p>
        <div className="mt-5 grid gap-4 sm:grid-cols-3">
          <div className="rounded-xl border border-border/60 bg-muted/30 p-4">
            <h3 className="text-body-sm font-semibold text-foreground">Grade 9</h3>
            <p className="mt-1 text-body-xs text-muted-foreground">
              Above old A*. Awarded to the top performers - roughly the top 4% of entries.
            </p>
          </div>
          <div className="rounded-xl border border-border/60 bg-muted/30 p-4">
            <h3 className="text-body-sm font-semibold text-foreground">Grade 4</h3>
            <p className="mt-1 text-body-xs text-muted-foreground">
              Standard pass - equivalent to the old C grade. Required by many sixth forms.
            </p>
          </div>
          <div className="rounded-xl border border-border/60 bg-muted/30 p-4">
            <h3 className="text-body-sm font-semibold text-foreground">Grade 1</h3>
            <p className="mt-1 text-body-xs text-muted-foreground">
              Lowest pass - equivalent to the old G grade on the legacy scale.
            </p>
          </div>
        </div>
      </section>

      {/* Sample boundaries */}
      <section>
        <div className="mb-5 flex items-center gap-3">
          <div className="flex size-10 items-center justify-center rounded-xl bg-primary/10">
            <Target className="size-5 text-primary" />
          </div>
          <h2 className="text-heading-lg font-heading text-foreground">
            Indicative grade boundaries
          </h2>
        </div>
        <div className="overflow-hidden rounded-2xl border border-border/60 bg-card">
          <div className="overflow-x-auto">
            <table className="w-full text-body-sm">
              <thead className="border-b border-border/60 bg-muted/40 text-body-xs text-muted-foreground uppercase">
                <tr>
                  <th className="px-4 py-3 text-left">Grade</th>
                  <th className="px-4 py-3 text-left">Paper 1 (of 80)</th>
                  <th className="px-4 py-3 text-left">Paper 2 (of 80)</th>
                  <th className="px-4 py-3 text-left">A*-G equivalent</th>
                </tr>
              </thead>
              <tbody>
                {gradeBoundaries.map((b) => (
                  <tr key={b.grade} className="border-b border-border/40 last:border-0">
                    <td className="px-4 py-3 font-semibold text-foreground">{b.grade}</td>
                    <td className="px-4 py-3 text-muted-foreground">{b.paper1}</td>
                    <td className="px-4 py-3 text-muted-foreground">{b.paper2}</td>
                    <td className="px-4 py-3 text-muted-foreground">
                      {b.grade === 9
                        ? 'Above A*'
                        : b.grade === 8
                          ? 'A*/A'
                          : b.grade === 7
                            ? 'A'
                            : b.grade === 6
                              ? 'B'
                              : b.grade === 5
                                ? 'B/C'
                                : 'C'}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <p className="mt-3 text-body-xs text-muted-foreground">
          Boundaries vary slightly by session. Figures shown are indicative from recent Cambridge
          series.
        </p>
      </section>

      {/* Nav cards */}
      <section>
        <div className="mb-5 flex items-center gap-3">
          <div className="flex size-10 items-center justify-center rounded-xl bg-primary/10">
            <Layers className="size-5 text-primary" />
          </div>
          <h2 className="text-heading-lg font-heading text-foreground">Explore Language B</h2>
        </div>
        <div className="grid gap-3 md:grid-cols-3">
          {navCards.map((c) => {
            const Icon = c.icon
            return (
              <Link
                key={c.href}
                href={c.href}
                className="group flex flex-col rounded-2xl border border-border/60 bg-card p-5 transition-all hover:border-primary/30 hover:bg-primary/[0.03] hover:shadow-card-hover"
              >
                <div className="mb-3 flex size-10 items-center justify-center rounded-xl bg-primary/10">
                  <Icon className="size-5 text-primary" />
                </div>
                <h3 className="text-body font-semibold text-foreground">{c.title}</h3>
                <p className="mt-1 text-body-sm text-muted-foreground leading-relaxed">
                  {c.description}
                </p>
                <span className="mt-3 inline-flex items-center gap-1 text-body-xs font-medium text-primary">
                  Read more
                  <ChevronRight className="size-3 transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>
            )
          })}
        </div>
      </section>

      {/* Grade guides */}
      <section>
        <div className="mb-5 flex items-center gap-3">
          <div className="flex size-10 items-center justify-center rounded-xl bg-primary/10">
            <Award className="size-5 text-primary" />
          </div>
          <h2 className="text-heading-lg font-heading text-foreground">Grade-by-grade guides</h2>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {gradeGuides.map((g) => (
            <Link
              key={g.grade}
              href={g.href}
              className="group flex flex-col rounded-2xl border border-border/60 bg-card p-5 transition-all hover:border-primary/30 hover:bg-primary/[0.03] hover:shadow-card-hover"
            >
              <Badge className={`${g.tone} w-fit`}>Grade {g.grade}</Badge>
              <h3 className="mt-3 text-heading-sm font-heading text-foreground group-hover:text-primary transition-colors">
                {g.label}
              </h3>
              <p className="mt-1 text-body-sm text-muted-foreground leading-relaxed flex-1">
                {g.description}
              </p>
              <span className="mt-3 inline-flex items-center gap-1 text-body-xs font-medium text-primary">
                Read guide
                <ArrowRight className="size-3 transition-transform group-hover:translate-x-0.5" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Study Tools */}
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

      {/* Practice papers */}
      <section className="rounded-2xl border border-border/60 bg-card p-6 sm:p-8">
        <div className="mb-4 flex items-center gap-3">
          <FileText className="size-5 text-primary" />
          <h2 className="text-heading-md font-heading text-foreground">Practice papers</h2>
        </div>
        <p className="text-body-sm text-muted-foreground leading-relaxed">
          Full-length practice papers built around public-domain extracts, mirroring the Language B
          format and question style. Work under exam conditions and compare your answers with our
          worked model responses.
        </p>
        <div className="mt-5 grid gap-3 sm:grid-cols-2">
          {practicePapers.map((pp) => (
            <Link
              key={pp.href}
              href={pp.href}
              className="group flex items-center justify-between gap-3 rounded-xl border border-border/60 bg-muted/20 p-4 transition-all hover:border-primary/30 hover:bg-primary/[0.04]"
            >
              <span className="font-heading text-body text-foreground group-hover:text-primary transition-colors">
                {pp.label}
              </span>
              <ArrowRight className="size-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:text-primary" />
            </Link>
          ))}
        </div>
      </section>

      {/* ── Footer note ─────────────────────────────────────────────── */}
      <p className="text-center text-body-xs text-muted-foreground/60">
        Aligns with Cambridge syllabus 0990
      </p>
    </div>
  )
}
