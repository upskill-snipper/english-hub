import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ArrowRight,
  BookOpen,
  Sparkles,
  ScrollText,
  Users,
  MessageSquare,
  Zap,
  Award,
  ListChecks,
  ChevronLeft,
} from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { requireIgcseBoard } from '@/app/igcse/_lib/guard'

export const metadata: Metadata = {
  openGraph: {
    title: 'Narrative Writing — Cambridge IGCSE Composition',
    description:
      'Cambridge IGCSE narrative writing techniques. Story structure, character, dialogue, tension and pacing, Grade 9 model stories and 30 practice prompts.',
  },
  title: 'Narrative Writing — Cambridge IGCSE Composition',
  description:
    'Cambridge IGCSE narrative writing techniques. Story structure, character, dialogue, tension and pacing, Grade 9 model stories and 30 practice prompts.',
  alternates: {
    canonical: 'https://theenglishhub.app/igcse/cambridge/composition/narrative',
  },
}

const sections = [
  {
    title: 'Story structure',
    description:
      'Five-part arc, Freytag\u2019s triangle and in medias res. How to build a compact, shapely short story in 450 words.',
    href: '/igcse/cambridge/composition/narrative/structure',
    icon: ScrollText,
    level: 'Foundation',
  },
  {
    title: 'Character creation',
    description:
      'The iceberg principle, show-don\u2019t-tell, quirks and contradictions — build a rounded character in two sentences.',
    href: '/igcse/cambridge/composition/narrative/character',
    icon: Users,
    level: 'Intermediate',
  },
  {
    title: 'Dialogue',
    description:
      'Punctuation rules, subtext, the four jobs of a line of speech and how to avoid the talking-heads trap.',
    href: '/igcse/cambridge/composition/narrative/dialogue',
    icon: MessageSquare,
    level: 'Intermediate',
  },
  {
    title: 'Tension and pacing',
    description:
      'Withheld information, short sentences, interruptions and the five reliable ways to build tension on the page.',
    href: '/igcse/cambridge/composition/narrative/tension',
    icon: Zap,
    level: 'Advanced',
  },
  {
    title: 'Grade 9 model answers',
    description:
      'Three full Grade 9 narrative compositions with paragraph-by-paragraph examiner annotations.',
    href: '/igcse/cambridge/composition/narrative/model-answers',
    icon: Award,
    level: 'Advanced',
  },
  {
    title: '30 practice prompts',
    description:
      'Cambridge-style narrative titles with hooks and planning tips, from &ldquo;The Visitor&rdquo; to &ldquo;Too Late&rdquo;.',
    href: '/igcse/cambridge/composition/narrative/practice-prompts',
    icon: ListChecks,
    level: 'All levels',
  },
]

export default async function NarrativeHubPage() {
  await requireIgcseBoard(['cambridge-0500', 'cambridge-0990'])

  return (
    <div className="space-y-10 pb-16">
      <Button variant="ghost" size="sm" render={<Link href="/igcse/cambridge/composition" />}>
        <ChevronLeft className="size-3.5" />
        Back to composition
      </Button>

      <section className="relative overflow-hidden rounded-2xl border border-border/60 bg-gradient-to-br from-card via-card to-primary/[0.04] p-6 sm:p-8 lg:p-10">
        <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />
        <div className="relative">
          <div className="mb-4 flex flex-wrap items-center gap-2">
            <Badge className="bg-primary/10 text-primary border-primary/20">
              <Sparkles className="mr-1 size-3" />
              Cambridge IGCSE
            </Badge>
            <Badge variant="secondary">Narrative</Badge>
          </div>
          <h1 className="text-display-sm font-heading text-foreground sm:text-display">
            Narrative writing
          </h1>
          <p className="mt-3 max-w-2xl text-body-lg text-muted-foreground">
            Cambridge asks for a short story of{' '}
            <strong className="text-foreground">350–450 words</strong>. That is a single scene, a
            single change, a single turn. The best stories cut the fat and let one small moment do
            all the work.
          </p>
        </div>
      </section>

      <section>
        <div className="mb-5 flex items-center gap-3">
          <BookOpen className="size-5 text-primary" />
          <h2 className="text-heading-lg font-heading text-foreground">Six narrative techniques</h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {sections.map((s) => {
            const Icon = s.icon
            return (
              <Card
                key={s.href}
                className="group flex flex-col transition-all duration-200 hover:border-border hover:shadow-card-hover"
              >
                <CardHeader className="pb-3">
                  <div className="mb-3 flex items-start justify-between">
                    <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10">
                      <Icon className="size-5 text-primary" />
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {s.level}
                    </Badge>
                  </div>
                  <CardTitle className="text-heading-sm font-heading leading-tight">
                    {s.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-1 flex-col gap-4">
                  <CardDescription className="text-body-sm leading-relaxed">
                    {s.description}
                  </CardDescription>
                  <div className="mt-auto">
                    <Button variant="ghost" size="sm" render={<Link href={s.href} />}>
                      Open guide
                      <ArrowRight className="size-3.5" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </section>

      <section className="rounded-2xl border border-border/60 bg-card p-6 sm:p-8">
        <h2 className="text-heading-md font-heading text-foreground">
          The golden rule: one change
        </h2>
        <p className="mt-3 text-body-sm text-muted-foreground leading-relaxed">
          At 450 words, you cannot tell a life story. You can, however, tell a story about a single
          moment where something changes: a decision, a realisation, a loss, a meeting. The examiner
          report uses the phrase <em>&ldquo;shapely and purposeful&rdquo;</em> — shapely means it
          has a beginning, middle and end; purposeful means the reader leaves knowing what has
          changed. Everything in the story should serve that one change.
        </p>
      </section>
    </div>
  )
}
