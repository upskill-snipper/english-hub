import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ArrowLeft,
  ArrowRight,
  Award,
  Sparkles,
  CheckCircle2,
  Lightbulb,
  BookOpen,
  PenTool,
  Target,
} from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { requireIgcseBoard } from '@/app/igcse/_lib/guard'
import { t } from '@/lib/i18n/t'

export const metadata: Metadata = {
  openGraph: {
    title: 'How to get a Grade 9 | Cambridge IGCSE Language B | The English Hub',
    description:
      'Grade 9 guide for Cambridge IGCSE Language B First Language English. Writing techniques, analytical depth and structural sophistication needed to reach the top grade.',
  },
  title: 'How to get a Grade 9 | Cambridge IGCSE Language B',
  description:
    'Grade 9 guide for Cambridge IGCSE Language B First Language English. Writing techniques, analytical depth and structural sophistication needed to reach the top grade.',
  alternates: { canonical: 'https://theenglishhub.app/igcse/cambridge/0990/grade-9-guide' },
}

const pillars = [
  {
    icon: BookOpen,
    title: 'Reading: analytical sophistication',
    points: [
      'Identify layered, implicit meanings - not just surface detail',
      'Explore how word choice, imagery and structure interact',
      'Offer alternative interpretations where the text supports them',
      'Use short, precise quotations embedded in your own sentences',
      'Comment on tone, voice and perspective alongside language',
    ],
  },
  {
    icon: PenTool,
    title: 'Writing: controlled style',
    points: [
      'Distinctive narrative or argumentative voice from the first line',
      'Varied sentence length and structure used for deliberate effect',
      'Ambitious vocabulary used precisely - not showily',
      'Complete control of punctuation, including colons and semicolons',
      'Structural craft: openings that hook, endings that resonate',
    ],
  },
  {
    icon: Target,
    title: 'Technique: exam craft',
    points: [
      'Plan every answer, even under pressure',
      'Match register perfectly to the form in directed writing',
      'Summarise in your own words - never copy phrases',
      'Proofread for careless errors in the final five minutes',
      'Allocate time proportional to the mark weighting',
    ],
  },
]

const upgrades = [
  {
    before:
      'The writer describes the forest as dark and scary, which makes the reader feel afraid.',
    after:
      'The writer layers a sensory darkness across the forest - the trees “thicken into a vault” - transforming the familiar landscape into something architectural, almost sacred. The metaphor traps the reader inside a structure they cannot see the edges of, so fear shifts from the visible to the spatial.',
    label: 'Language analysis',
  },
  {
    before: 'The street was busy and loud and everyone was in a hurry.',
    after:
      "Horns punctuated the afternoon like impatient drums. Cyclists carved through gaps that shouldn't have been there. Above it all, the shop signs flickered in two languages, as if the street itself could not decide who it belonged to.",
    label: 'Descriptive writing',
  },
]

export default async function Grade9GuidePage() {
  await requireIgcseBoard(['cambridge-0990'])

  return (
    <div className="space-y-10 pb-16">
      <div>
        <Button variant="ghost" size="sm" render={<Link href="/igcse/cambridge/0990" />}>
          <ArrowLeft className="size-3.5" />
          {await t('igcse.page.back_to_lang_b_hub')}
        </Button>
      </div>

      {/* Hero */}
      <section className="relative overflow-hidden rounded-2xl border border-border/60 bg-gradient-to-br from-card via-card to-primary/[0.08] p-6 sm:p-8 lg:p-10">
        <div className="relative">
          <div className="mb-4 flex flex-wrap items-center gap-2">
            <Badge className="bg-primary/10 text-primary border-primary/20">
              <Sparkles className="mr-1 size-3" />
              {await t('igcse.cambridge.badge.cambridge_lang_b')}
            </Badge>
            <Badge className="bg-primary/15 text-primary border-primary/20">
              <Award className="mr-1 size-3" />
              Grade 9
            </Badge>
          </div>
          <h1 className="text-display-sm font-heading text-foreground sm:text-display">
            How to hit Grade 9
          </h1>
          <p className="mt-3 max-w-3xl text-body-lg text-muted-foreground">
            Grade 9 is more selective than A*. It&apos;s awarded to roughly the top 4% of entries.
            This guide breaks down exactly what sophistication looks like across reading and writing
            - and the small habits that take a strong 8 to a clean 9.
          </p>
        </div>
      </section>

      {/* Pillars */}
      <section>
        <div className="mb-5 flex items-center gap-3">
          <Target className="size-5 text-primary" />
          <h2 className="text-heading-lg font-heading text-foreground">
            The three pillars of a Grade 9
          </h2>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {pillars.map((p) => {
            const Icon = p.icon
            return (
              <Card key={p.title}>
                <CardHeader className="pb-3">
                  <div className="mb-3 flex size-10 items-center justify-center rounded-xl bg-primary/10">
                    <Icon className="size-5 text-primary" />
                  </div>
                  <CardTitle className="text-body font-semibold">{p.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-body-sm text-muted-foreground">
                    {p.points.map((pt) => (
                      <li key={pt} className="flex items-start gap-2">
                        <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </section>

      {/* Before / After */}
      <section>
        <div className="mb-5 flex items-center gap-3">
          <Lightbulb className="size-5 text-primary" />
          <h2 className="text-heading-lg font-heading text-foreground">
            From competent to Grade 9
          </h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {upgrades.map((u, i) => (
            <Card key={i}>
              <CardHeader className="pb-3">
                <Badge variant="secondary" className="w-fit">
                  {u.label}
                </Badge>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="rounded-lg border border-border/60 bg-muted/30 p-3">
                  <p className="text-body-xs font-medium text-muted-foreground">Grade 6 attempt</p>
                  <p className="mt-1 text-body-sm italic text-muted-foreground">{u.before}</p>
                </div>
                <div className="rounded-lg border border-primary/20 bg-primary/5 p-3">
                  <p className="text-body-xs font-medium text-primary">Grade 9 attempt</p>
                  <p className="mt-1 text-body-sm italic text-foreground">{u.after}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Habits */}
      <section className="rounded-2xl border border-border/60 bg-card p-6 sm:p-8">
        <h2 className="text-heading-md font-heading text-foreground">
          The five habits of Grade 9 candidates
        </h2>
        <ol className="mt-5 space-y-4 text-body-sm text-muted-foreground">
          <li className="flex gap-3">
            <span className="mt-0.5 inline-flex size-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-body-xs font-semibold text-primary">
              1
            </span>
            <span>
              <strong className="text-foreground">Read widely.</strong> Non-fiction articles, travel
              writing and long-form journalism build the vocabulary and register range examiners
              reward.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="mt-0.5 inline-flex size-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-body-xs font-semibold text-primary">
              2
            </span>
            <span>
              <strong className="text-foreground">Time every practice answer.</strong> Examiners
              don&apos;t reward planning that doesn&apos;t fit in the time allowed.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="mt-0.5 inline-flex size-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-body-xs font-semibold text-primary">
              3
            </span>
            <span>
              <strong className="text-foreground">Annotate mark schemes.</strong> Notice the
              difference between Level 5 and Level 6 descriptors - usually it&apos;s about precision
              of effect, not quantity of points.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="mt-0.5 inline-flex size-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-body-xs font-semibold text-primary">
              4
            </span>
            <span>
              <strong className="text-foreground">Keep a vocabulary bank.</strong> Collect precise
              adjectives, verbs and transition phrases and use them consistently in practice
              writing.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="mt-0.5 inline-flex size-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-body-xs font-semibold text-primary">
              5
            </span>
            <span>
              <strong className="text-foreground">Proofread mercilessly.</strong> The gap between 8
              and 9 is often just careless spelling and punctuation errors.
            </span>
          </li>
        </ol>
      </section>

      {/* Next */}
      <section className="rounded-2xl border border-primary/20 bg-primary/5 p-6 sm:p-8">
        <h2 className="text-heading-md font-heading text-foreground">Put it into practice</h2>
        <div className="mt-4 flex flex-wrap gap-2">
          <Button size="sm" render={<Link href="/igcse/cambridge/0990/practice-paper-1" />}>
            Practice Paper 1
            <ArrowRight className="size-3.5" />
          </Button>
          <Button
            size="sm"
            variant="outline"
            render={<Link href="/igcse/cambridge/0990/practice-paper-2" />}
          >
            Practice Paper 2
          </Button>
          <Button
            size="sm"
            variant="outline"
            render={<Link href="/igcse/cambridge/0990/grade-7-guide" />}
          >
            Grade 7 guide
          </Button>
        </div>
      </section>
    </div>
  )
}
