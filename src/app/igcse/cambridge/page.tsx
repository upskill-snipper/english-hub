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
    'Cambridge IGCSE English syllabus hub. Covers 0500 First Language English and 0990 (9-1) with full study guides, exam technique and assessment breakdowns.',
  alternates: { canonical: 'https://theenglishhub.app/igcse/cambridge' },
}

const syllabuses = [
  {
    slug: '0500',
    code: '0500',
    name: 'Cambridge IGCSE First Language English',
    tagline: 'Cambridge Assessment International Education — 0500',
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
      'Paper 1 Reading — comprehension, summary and directed writing',
      'Paper 2 Directed Writing and Composition — 80 marks total',
      'Equal weighting of Reading (AO1) and Writing (AO2)',
    ],
  },
  {
    slug: '0990',
    code: '0990',
    name: 'Cambridge IGCSE (9-1) First Language English',
    tagline: 'Cambridge Assessment International Education — 0990',
    description:
      'The 9-1 graded version of Cambridge First Language English. Identical content and assessment structure to 0500 but reported on the numerical 9-1 scale.',
    icon: GraduationCap,
    iconBg: 'bg-muted',
    iconText: 'text-muted-foreground',
    papers: '2 papers',
    time: '4h total',
    grading: '9 – 1',
    available: false,
    href: '/igcse/cambridge/0990',
    highlights: [
      'Identical assessment structure to 0500',
      'Graded 9-1 instead of A*-G',
      'Same reading and writing assessment objectives',
    ],
  },
]

export default async function CambridgeHubPage() {
  await requireIgcseBoard(['cambridge-0500', 'cambridge-0990'])

  return (
    <div className="space-y-10 pb-16">
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
            international English qualification. Pick your syllabus code below
            to access full study guides, paper walkthroughs and past paper
            practice.
          </p>
        </div>
      </section>

      {/* ── Syllabus cards ────────────────────────────────────────── */}
      <section>
        <div className="mb-5 flex items-center gap-3">
          <BookOpen className="size-5 text-primary" />
          <h2 className="text-heading-lg font-heading text-foreground">
            Choose your syllabus
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
                    {syllabus.available ? (
                      <Badge className="bg-primary/10 text-primary border-primary/20">
                        Available now
                      </Badge>
                    ) : (
                      <Badge variant="secondary">Coming soon</Badge>
                    )}
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

                  <ul className="space-y-2 text-body-sm text-muted-foreground">
                    {syllabus.highlights.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto pt-2">
                    {syllabus.available ? (
                      <Button
                        variant="default"
                        size="sm"
                        className="w-full"
                        render={<Link href={syllabus.href} />}
                      >
                        Open {syllabus.code} hub
                        <ArrowRight className="size-3.5" />
                      </Button>
                    ) : (
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full"
                        disabled
                      >
                        Coming soon
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
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
        <div className="mt-5 grid gap-4 sm:grid-cols-3">
          <div className="rounded-xl border border-border/60 bg-muted/30 p-4">
            <h3 className="text-body-sm font-semibold text-foreground">
              AO1 Reading — 30%
            </h3>
            <p className="mt-1 text-body-xs text-muted-foreground">
              Demonstrate understanding of explicit and implicit meanings.
            </p>
          </div>
          <div className="rounded-xl border border-border/60 bg-muted/30 p-4">
            <h3 className="text-body-sm font-semibold text-foreground">
              AO2 Writing — 30%
            </h3>
            <p className="mt-1 text-body-xs text-muted-foreground">
              Communicate clearly, accurately and effectively for different purposes.
            </p>
          </div>
          <div className="rounded-xl border border-border/60 bg-muted/30 p-4">
            <h3 className="text-body-sm font-semibold text-foreground">
              Two papers, 4 hours
            </h3>
            <p className="mt-1 text-body-xs text-muted-foreground">
              Reading paper and Directed Writing + Composition paper.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
