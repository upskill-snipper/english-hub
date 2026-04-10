import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ArrowLeft,
  ArrowRight,
  Award,
  Sparkles,
  CheckCircle2,
  Target,
  BookOpen,
  PenTool,
  ClipboardList,
} from 'lucide-react'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { requireIgcseBoard } from '@/app/igcse/_lib/guard'

export const metadata: Metadata = {
  title: 'How to pass with Grade 5 | Cambridge IGCSE 0990 | The English Hub',
  description:
    'Strong pass guide for Cambridge IGCSE 0990 First Language English. Reach Grade 5 with clear understanding, accurate writing and dependable exam technique.',
  alternates: { canonical: 'https://theenglishhub.app/igcse/cambridge/0990/grade-5-guide' },
}

const foundations = [
  {
    icon: BookOpen,
    title: 'Reading: clear understanding',
    description:
      "Grade 5 candidates show they have understood both texts accurately. You don't need dazzling analysis — you need correct comprehension and sensible comment.",
    points: [
      'Answer what the question actually asks (underline key words)',
      'Pick clear, short quotations to support your points',
      'Explain what the quote suggests, even if briefly',
      'Cover at least two or three points per long question',
      'Use your own words for summary answers',
    ],
  },
  {
    icon: PenTool,
    title: 'Writing: mostly accurate',
    description:
      'Your writing should communicate clearly. Most sentences should be punctuated correctly, and your ideas should connect from one paragraph to the next.',
    points: [
      'Start with a one-minute plan — three or four bullet points',
      'Use paragraphs — one idea per paragraph',
      'Vary sentence openings (not every sentence starts with “I” or “The”)',
      'Use basic punctuation accurately: full stops, commas, apostrophes',
      'Keep tenses consistent throughout the piece',
    ],
  },
  {
    icon: Target,
    title: "Technique: don't lose easy marks",
    description:
      'Most Grade 5 candidates are held back by careless errors — not by lack of ability. Fixing these can push you into Grade 6 territory.',
    points: [
      'Read the question twice before starting',
      "Check the mark allocation — don't overwrite a 2-mark question",
      'Leave 5 minutes at the end to proofread',
      "Cross out mistakes with a single line — don't scribble",
      'Attempt every question — blanks score zero',
    ],
  },
]

const marksToGet = [
  {
    paper: 'Paper 1',
    target: '41',
    percentage: '51%',
    description: 'Answer all three questions with accurate comprehension and clear summary.',
  },
  {
    paper: 'Paper 2',
    target: '41',
    percentage: '51%',
    description: 'Complete both Section A and Section B with controlled, mostly accurate writing.',
  },
]

export default async function Grade5GuidePage() {
  await requireIgcseBoard(['cambridge-0990'])

  return (
    <div className="space-y-10 pb-16">
      <div>
        <Button
          variant="ghost"
          size="sm"
          render={<Link href="/igcse/cambridge/0990" />}
        >
          <ArrowLeft className="size-3.5" />
          Back to 0990 hub
        </Button>
      </div>

      {/* Hero */}
      <section className="relative overflow-hidden rounded-2xl border border-border/60 bg-gradient-to-br from-card via-card to-primary/[0.04] p-6 sm:p-8 lg:p-10">
        <div className="relative">
          <div className="mb-4 flex flex-wrap items-center gap-2">
            <Badge className="bg-primary/10 text-primary border-primary/20">
              <Sparkles className="mr-1 size-3" />
              Cambridge IGCSE 0990
            </Badge>
            <Badge variant="secondary">
              <Award className="mr-1 size-3" />
              Grade 5
            </Badge>
          </div>
          <h1 className="text-display-sm font-heading text-foreground sm:text-display">
            How to pass with Grade 5
          </h1>
          <p className="mt-3 max-w-3xl text-body-lg text-muted-foreground">
            Grade 5 is the strong pass — roughly the old B/C boundary.
            It&apos;s what most sixth forms and IB schools ask for as a
            minimum in English. You don&apos;t need perfect writing; you
            need dependable comprehension and clear, controlled
            communication.
          </p>
        </div>
      </section>

      {/* What you need */}
      <section>
        <div className="mb-5 flex items-center gap-3">
          <ClipboardList className="size-5 text-primary" />
          <h2 className="text-heading-lg font-heading text-foreground">
            What Grade 5 actually needs
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {marksToGet.map((m) => (
            <Card key={m.paper}>
              <CardHeader className="pb-3">
                <CardTitle className="text-heading-md font-heading">
                  {m.paper}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-baseline gap-2">
                  <span className="text-display-sm font-heading text-primary">
                    {m.target}
                  </span>
                  <span className="text-body-sm text-muted-foreground">
                    / 80 marks ({m.percentage})
                  </span>
                </div>
                <p className="text-body-sm text-muted-foreground leading-relaxed">
                  {m.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Foundations */}
      <section>
        <div className="mb-5 flex items-center gap-3">
          <Target className="size-5 text-primary" />
          <h2 className="text-heading-lg font-heading text-foreground">
            Three foundations of a Grade 5
          </h2>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {foundations.map((f) => {
            const Icon = f.icon
            return (
              <Card key={f.title}>
                <CardHeader className="pb-3">
                  <div className="mb-3 flex size-10 items-center justify-center rounded-xl bg-primary/10">
                    <Icon className="size-5 text-primary" />
                  </div>
                  <CardTitle className="text-body font-semibold">
                    {f.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-body-sm text-muted-foreground leading-relaxed">
                    {f.description}
                  </p>
                  <ul className="space-y-2 text-body-sm text-muted-foreground">
                    {f.points.map((p) => (
                      <li key={p} className="flex items-start gap-2">
                        <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </section>

      {/* Quick wins */}
      <section className="rounded-2xl border border-border/60 bg-card p-6 sm:p-8">
        <h2 className="text-heading-md font-heading text-foreground">
          Five quick wins that gain easy marks
        </h2>
        <ol className="mt-5 space-y-3 text-body-sm text-muted-foreground">
          <li className="flex gap-3">
            <span className="mt-0.5 inline-flex size-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-body-xs font-semibold text-primary">
              1
            </span>
            <span>
              <strong className="text-foreground">Use clear paragraphs.</strong>{' '}
              One point per paragraph. Don&apos;t let your writing become
              one giant block.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="mt-0.5 inline-flex size-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-body-xs font-semibold text-primary">
              2
            </span>
            <span>
              <strong className="text-foreground">Stick to one tense.</strong>{' '}
              Drifting between past and present is the fastest way to lose
              writing marks.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="mt-0.5 inline-flex size-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-body-xs font-semibold text-primary">
              3
            </span>
            <span>
              <strong className="text-foreground">Quote short.</strong> Even
              a single key word, used well, is enough at this level.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="mt-0.5 inline-flex size-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-body-xs font-semibold text-primary">
              4
            </span>
            <span>
              <strong className="text-foreground">Answer the question.</strong>{' '}
              If the question asks about feelings, write about feelings —
              not the setting.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="mt-0.5 inline-flex size-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-body-xs font-semibold text-primary">
              5
            </span>
            <span>
              <strong className="text-foreground">Finish every question.</strong>{' '}
              Unfinished answers score only what you wrote. Always write a
              short conclusion.
            </span>
          </li>
        </ol>
      </section>

      {/* Next */}
      <section className="rounded-2xl border border-primary/20 bg-primary/5 p-6 sm:p-8">
        <h2 className="text-heading-md font-heading text-foreground">
          Ready for more?
        </h2>
        <p className="mt-2 text-body-sm text-muted-foreground">
          Build from Grade 5 to Grade 7 with a sharper focus on analysis and
          style.
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          <Button
            size="sm"
            render={<Link href="/igcse/cambridge/0990/grade-7-guide" />}
          >
            Push for Grade 7
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
