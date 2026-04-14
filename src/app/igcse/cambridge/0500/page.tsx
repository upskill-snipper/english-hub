import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ArrowRight,
  BookOpen,
  FileText,
  PenTool,
  ChevronLeft,
  Sparkles,
  Clock,
  Scroll,
  Target,
  GraduationCap,
  ListChecks,
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
  title: 'IGCSE Language A — The English Hub',
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
      'Question 1 — short comprehension responses',
      'Question 2 — language analysis of the writer\'s choices',
      'Question 3 — summary writing based on two passages',
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
      'Section A — directed writing (40 marks)',
      'Section B — descriptive OR narrative composition (40 marks)',
      'Equal weighting of content and structure with style and accuracy',
    ],
  },
]

const quickLinks = [
  {
    title: 'Grade boundaries A*-G',
    description: 'Historical thresholds and how to hit a top grade.',
    href: '/igcse/cambridge/0500/grade-boundaries',
    icon: Target,
  },
]

export default async function Cambridge0500HubPage() {
  await requireIgcseBoard(['cambridge-0500'])

  return (
    <div className="space-y-10 pb-16">
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
            <Badge className="bg-primary/10 text-primary border-primary/20">
              Cambridge IGCSE
            </Badge>
            <Badge variant="secondary">
              <Sparkles className="mr-1 size-3" />
              First Language English
            </Badge>
          </div>
          <h1 className="text-display-sm font-heading text-foreground sm:text-display">
            IGCSE Language A
          </h1>
          <p className="mt-3 max-w-2xl text-body-lg text-muted-foreground">
            The world&apos;s most widely taken international English
            qualification. Two 2-hour papers, 160 marks in total, equally
            weighted between reading and writing. Designed for students whose
            first language is English.
          </p>

          <div className="mt-5 flex flex-wrap gap-3 text-body-xs text-muted-foreground">
            <span className="inline-flex items-center gap-1.5 rounded-md border border-border/60 bg-muted/40 px-3 py-1.5">
              <Scroll className="size-3.5" />
              2 papers
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-md border border-border/60 bg-muted/40 px-3 py-1.5">
              <Clock className="size-3.5" />
              4 hours total
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
          <FileText className="size-5 text-primary" />
          <h2 className="text-heading-lg font-heading text-foreground">
            The two papers
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {papers.map((paper) => {
            const Icon = paper.icon
            return (
              <Card
                key={paper.code}
                className="group relative flex flex-col overflow-hidden transition-all duration-200 hover:border-border hover:shadow-card-hover"
              >
                <CardHeader className="pb-3">
                  <div className="mb-3 flex items-start justify-between gap-3">
                    <div className="flex size-11 items-center justify-center rounded-xl bg-primary/10">
                      <Icon className="size-5 text-primary" />
                    </div>
                    <Badge className="bg-primary/10 text-primary border-primary/20">
                      {paper.weight}
                    </Badge>
                  </div>
                  <CardTitle className="text-heading-md font-heading leading-tight">
                    {paper.code}: {paper.title}
                  </CardTitle>
                  <CardDescription className="text-body-sm">
                    {paper.time} — {paper.marks}
                  </CardDescription>
                </CardHeader>

                <CardContent className="flex flex-1 flex-col gap-4">
                  <p className="text-body-sm text-muted-foreground leading-relaxed">
                    {paper.description}
                  </p>

                  <ul className="space-y-2 text-body-sm text-muted-foreground">
                    {paper.sections.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto pt-2">
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
                </CardContent>
              </Card>
            )
          })}
        </div>
      </section>

      {/* ── Assessment structure ───────────────────────────────────── */}
      <section className="rounded-2xl border border-border/60 bg-card p-6 sm:p-8">
        <div className="mb-4 flex items-center gap-3">
          <Target className="size-5 text-primary" />
          <h2 className="text-heading-md font-heading text-foreground">
            Assessment objectives
          </h2>
        </div>
        <p className="text-body-sm text-muted-foreground leading-relaxed">
          IGCSE Language A is assessed against two equally weighted objectives.
          Each paper draws on both in different proportions, so strong
          candidates must be able to read closely and write accurately across
          multiple forms.
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
              <li>• Demonstrate understanding of explicit meanings</li>
              <li>• Demonstrate understanding of implicit meanings and attitudes</li>
              <li>• Analyse, evaluate and develop facts, ideas and opinions</li>
              <li>• Select and use information for specific purposes</li>
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
              <li>• Articulate experience and express ideas imaginatively</li>
              <li>• Organise and structure ideas in paragraphs</li>
              <li>• Use a range of vocabulary and sentence structures</li>
              <li>• Use accurate spelling, punctuation and grammar</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ── Footer note ─────────────────────────────────────────────── */}
      <p className="text-center text-body-xs text-muted-foreground/60">
        Aligns with Cambridge syllabus 0500
      </p>

      {/* ── Quick links ────────────────────────────────────────────── */}
      <section>
        <div className="mb-5 flex items-center gap-3">
          <ListChecks className="size-5 text-primary" />
          <h2 className="text-heading-lg font-heading text-foreground">
            Reference pages
          </h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {quickLinks.map((link) => {
            const Icon = link.icon
            return (
              <Link
                key={link.href}
                href={link.href}
                className="group flex items-center gap-4 rounded-xl border border-border/60 bg-card p-5 transition-all hover:border-border hover:shadow-card-hover"
              >
                <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <Icon className="size-5 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-body-md font-semibold text-foreground">
                    {link.title}
                  </h3>
                  <p className="text-body-xs text-muted-foreground">
                    {link.description}
                  </p>
                </div>
                <ArrowRight className="size-4 text-muted-foreground transition-transform group-hover:translate-x-0.5" />
              </Link>
            )
          })}
        </div>
      </section>
    </div>
  )
}
