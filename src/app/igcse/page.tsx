import type { Metadata } from 'next'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import { getServerBoard } from '@/lib/board/get-server-board'
import {
  ArrowRight,
  BookOpen,
  Sparkles,
  Feather,
  Globe,
  GraduationCap,
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

export const metadata: Metadata = {
  title: 'IGCSE English Literature — The English Hub',
  description:
    'IGCSE English Literature and Language revision hubs. Full study guides, exam technique and assessment breakdowns for Pearson Edexcel and Cambridge syllabuses.',
  alternates: { canonical: 'https://theenglishhub.app/igcse' },
}

const courses = [
  {
    slug: 'literature',
    name: 'IGCSE Literature',
    description: 'Poetry, prose, drama & Shakespeare',
    icon: Feather,
    iconBg: 'bg-primary/10',
    iconText: 'text-primary',
    href: '/igcse/edexcel',
  },
  {
    slug: 'language-a',
    name: 'IGCSE Language A',
    description: 'Reading, writing & comprehension (First Language English)',
    icon: Globe,
    iconBg: 'bg-primary/10',
    iconText: 'text-primary',
    href: '/igcse/cambridge/0500',
  },
  {
    slug: 'language-b',
    name: 'IGCSE Language B',
    description: 'Reading & writing for all English learners (9-1 grading)',
    icon: GraduationCap,
    iconBg: 'bg-primary/10',
    iconText: 'text-primary',
    href: '/igcse/cambridge/0990',
  },
]

export default async function IgcseHubPage() {
  // Route users to the right place based on their saved exam board.
  const board = await getServerBoard()
  if (board === 'edexcel-igcse') {
    redirect('/igcse/edexcel')
  }
  if (board === 'cambridge-0500') {
    redirect('/igcse/cambridge/0500')
  }
  if (board === 'cambridge-0990') {
    redirect('/igcse/cambridge/0990')
  }
  // GCSE boards: IGCSE content is not part of their specification.
  if (board && (['aqa', 'edexcel', 'ocr', 'eduqas'] as const).includes(board as 'aqa' | 'edexcel' | 'ocr' | 'eduqas')) {
    redirect('/revision?notice=igcse-not-in-spec')
  }
  // No board set — show the course selector hub below.
  return (
    <div className="space-y-10 pb-16">
      {/* ── Hero ────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden rounded-2xl border border-border/60 bg-gradient-to-br from-card via-card to-primary/[0.04] p-6 sm:p-8 lg:p-10">
        <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-primary/5 blur-3xl" />

        <div className="relative">
          <div className="mb-4 flex flex-wrap items-center gap-2">
            <Badge variant="secondary">
              <Sparkles className="mr-1 size-3" />
              International GCSE
            </Badge>
            <Badge className="bg-primary/10 text-primary border-primary/20">
              Literature & Language
            </Badge>
          </div>
          <h1 className="text-display-sm font-heading text-foreground sm:text-display">
            IGCSE English Hub
          </h1>
          <p className="mt-3 max-w-2xl text-body-lg text-muted-foreground">
            Choose your course to access full study guides, text analysis, exam
            technique and past paper resources.
          </p>
        </div>
      </section>

      {/* ── Course cards ───────────────────────────────────────────── */}
      <section>
        <div className="mb-5 flex items-center gap-3">
          <BookOpen className="size-5 text-primary" />
          <h2 className="text-heading-lg font-heading text-foreground">
            Choose your course
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {courses.map((course) => {
            const Icon = course.icon
            return (
              <Card
                key={course.slug}
                className="group relative flex flex-col overflow-hidden transition-all duration-200 hover:border-border hover:shadow-card-hover"
              >
                <CardHeader className="pb-3">
                  <div className="mb-3">
                    <div
                      className={`flex size-11 items-center justify-center rounded-xl ${course.iconBg}`}
                    >
                      <Icon className={`size-5 ${course.iconText}`} />
                    </div>
                  </div>
                  <CardTitle className="text-heading-md font-heading leading-tight">
                    {course.name}
                  </CardTitle>
                  <CardDescription className="text-body-sm">
                    {course.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="flex flex-1 flex-col">
                  <div className="mt-auto pt-2">
                    <Button
                      variant="default"
                      size="sm"
                      className="w-full"
                      render={<Link href={course.href} />}
                    >
                      Start studying
                      <ArrowRight className="size-3.5" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </section>

      {/* ── Footnote ───────────────────────────────────────────────── */}
      <p className="text-center text-body-xs text-muted-foreground/60">
        Content aligned with Pearson Edexcel and Cambridge Assessment syllabuses
      </p>
    </div>
  )
}
