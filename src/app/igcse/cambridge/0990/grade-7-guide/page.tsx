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

export const metadata: Metadata = {
  openGraph: {
    title: 'How to get a Grade 7 | Cambridge IGCSE Language B | The English Hub',
    description:
      'Grade 7 guide for Cambridge IGCSE Language B First Language English. Clear checklists for reading analysis, writing control and exam technique to reach the old A grade.',
  },
  title: 'How to get a Grade 7 | Cambridge IGCSE Language B',
  description:
    'Grade 7 guide for Cambridge IGCSE Language B First Language English. Clear checklists for reading analysis, writing control and exam technique to reach the old A grade.',
  alternates: { canonical: 'https://theenglishhub.app/igcse/cambridge/0990/grade-7-guide' },
}

const pillars = [
  {
    icon: BookOpen,
    title: 'Reading: confident analysis',
    points: [
      'Spot implicit meanings as well as explicit points',
      'Identify techniques accurately and explain their effect',
      'Use short embedded quotations — one phrase per point',
      'Cover the whole text, not just the first paragraph',
      'Stay focused on what the question is actually asking',
    ],
  },
  {
    icon: PenTool,
    title: 'Writing: clear and accurate',
    points: [
      'Plan before you start — know your ending before you begin',
      'Vary sentence openings and structures',
      'Use a range of vocabulary, including some ambitious choices',
      'Punctuate accurately, including apostrophes and commas',
      'Write in consistent tense and register throughout',
    ],
  },
  {
    icon: Target,
    title: 'Technique: consistent delivery',
    points: [
      'Time each answer strictly to the mark weighting',
      'Write in own words for the summary question',
      'Match directed writing form to the audience',
      'Leave time to re-read and correct errors',
      'Make sure every paragraph links back to the task',
    ],
  },
]

const checklist = [
  "I can explain what a writer's language does, not just name the technique",
  'I can summarise ideas in my own words without copying phrases',
  'I can write 350-450 words in 45 minutes with a plan',
  'I can match register to audience (speech vs letter vs article)',
  'I use a full range of punctuation, including colons and dashes',
  'I vary my sentence length to create pace and effect',
  'I proofread every piece I write in practice',
]

export default async function Grade7GuidePage() {
  await requireIgcseBoard(['cambridge-0990'])

  return (
    <div className="space-y-10 pb-16">
      <div>
        <Button variant="ghost" size="sm" render={<Link href="/igcse/cambridge/0990" />}>
          <ArrowLeft className="size-3.5" />
          Back to IGCSE Language B hub
        </Button>
      </div>

      {/* Hero */}
      <section className="relative overflow-hidden rounded-2xl border border-border/60 bg-gradient-to-br from-card via-card to-primary/[0.06] p-6 sm:p-8 lg:p-10">
        <div className="relative">
          <div className="mb-4 flex flex-wrap items-center gap-2">
            <Badge className="bg-primary/10 text-primary border-primary/20">
              <Sparkles className="mr-1 size-3" />
              Cambridge IGCSE Language B
            </Badge>
            <Badge className="bg-primary/10 text-primary border-primary/20">
              <Award className="mr-1 size-3" />
              Grade 7
            </Badge>
          </div>
          <h1 className="text-display-sm font-heading text-foreground sm:text-display">
            How to hit Grade 7
          </h1>
          <p className="mt-3 max-w-3xl text-body-lg text-muted-foreground">
            Grade 7 is the new A. It shows a confident grasp of both reading and writing — you
            understand what the question wants, you analyse clearly, and you write accurately. This
            guide gives you the habits, checks and common mistakes that separate 7s from 5s.
          </p>
        </div>
      </section>

      {/* Pillars */}
      <section>
        <div className="mb-5 flex items-center gap-3">
          <Target className="size-5 text-primary" />
          <h2 className="text-heading-lg font-heading text-foreground">What Grade 7 looks like</h2>
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

      {/* Exemplar */}
      <section>
        <div className="mb-5 flex items-center gap-3">
          <Lightbulb className="size-5 text-primary" />
          <h2 className="text-heading-lg font-heading text-foreground">
            Grade 7 exemplar paragraph
          </h2>
        </div>
        <Card>
          <CardHeader className="pb-3">
            <Badge variant="secondary" className="w-fit">
              Language analysis — Q2
            </Badge>
            <CardTitle className="mt-2 text-body font-semibold">
              Exploring imagery in a travel extract
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <p className="text-body-sm italic text-muted-foreground leading-relaxed">
              The writer uses a striking metaphor when he calls the market &ldquo;a beating
              heart&rdquo;. This suggests that the market is alive and pulsing with energy, which
              makes the reader imagine constant movement and noise. The verb &ldquo;beating&rdquo;
              implies rhythm and life, as if the whole community depends on this single place for
              its survival. The writer&apos;s choice helps the reader picture the stalls as
              essential, not just commercial.
            </p>
            <div className="rounded-lg border border-primary/20 bg-primary/5 p-3">
              <p className="text-body-xs text-foreground">
                <strong>Why it works:</strong> clear quotation, identified technique, effect
                explained on the reader, accurate writing throughout. To push into Grade 9, add a
                second layer of interpretation and a comment on context.
              </p>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Checklist */}
      <section className="rounded-2xl border border-border/60 bg-card p-6 sm:p-8">
        <h2 className="text-heading-md font-heading text-foreground">Grade 7 self-check</h2>
        <p className="mt-2 text-body-sm text-muted-foreground">
          If you can tick all seven of these honestly, you&apos;re on track for Grade 7.
        </p>
        <ul className="mt-5 space-y-3">
          {checklist.map((item) => (
            <li
              key={item}
              className="flex items-start gap-3 rounded-xl border border-border/60 bg-muted/30 p-3"
            >
              <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
              <span className="text-body-sm text-foreground">{item}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Next */}
      <section className="rounded-2xl border border-primary/20 bg-primary/5 p-6 sm:p-8">
        <h2 className="text-heading-md font-heading text-foreground">Keep going</h2>
        <div className="mt-4 flex flex-wrap gap-2">
          <Button size="sm" render={<Link href="/igcse/cambridge/0990/grade-9-guide" />}>
            Push for Grade 9
            <ArrowRight className="size-3.5" />
          </Button>
          <Button
            size="sm"
            variant="outline"
            render={<Link href="/igcse/cambridge/0990/practice-paper-1" />}
          >
            Practice Paper 1
          </Button>
        </div>
      </section>
    </div>
  )
}
