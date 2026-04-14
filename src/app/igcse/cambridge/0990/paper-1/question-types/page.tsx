import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ArrowLeft,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  XCircle,
  Lightbulb,
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
  title: 'Paper 1 Question Types | Cambridge IGCSE Language B | The English Hub',
  description:
    'Full breakdown of the three question types on Cambridge IGCSE Language B Paper 1 Reading: comprehension, language analysis and summary. Worked technique for each.',
  alternates: {
    canonical: 'https://theenglishhub.app/igcse/cambridge/0990/paper-1/question-types',
  },
}

export default async function QuestionTypesPage() {
  await requireIgcseBoard(['cambridge-0990'])

  return (
    <div className="space-y-10 pb-16">
      <div>
        <Button
          variant="ghost"
          size="sm"
          render={<Link href="/igcse/cambridge/0990/paper-1" />}
        >
          <ArrowLeft className="size-3.5" />
          Back to Paper 1
        </Button>
      </div>

      {/* Hero */}
      <section className="relative overflow-hidden rounded-2xl border border-border/60 bg-gradient-to-br from-card via-card to-primary/[0.04] p-6 sm:p-8 lg:p-10">
        <div className="relative">
          <div className="mb-4 flex flex-wrap items-center gap-2">
            <Badge className="bg-primary/10 text-primary border-primary/20">
              <Sparkles className="mr-1 size-3" />
              Cambridge IGCSE Language B
            </Badge>
            <Badge variant="secondary">Paper 1</Badge>
            <Badge variant="secondary">Question types</Badge>
          </div>
          <h1 className="text-display-sm font-heading text-foreground sm:text-display">
            Paper 1 question types
          </h1>
          <p className="mt-3 max-w-3xl text-body-lg text-muted-foreground">
            Three questions. Three different skills. Each needs a different
            approach — get them mixed up and you lose marks on questions
            you&apos;d otherwise ace.
          </p>
        </div>
      </section>

      {/* Q1 Comprehension */}
      <section>
        <Card>
          <CardHeader>
            <div className="flex items-start justify-between gap-3">
              <div>
                <Badge className="bg-primary/10 text-primary border-primary/20">
                  Question 1 (a-e)
                </Badge>
                <CardTitle className="mt-2 text-heading-md font-heading">
                  Comprehension
                </CardTitle>
              </div>
              <Badge variant="secondary">15 marks</Badge>
            </div>
          </CardHeader>
          <CardContent className="space-y-5">
            <p className="text-body-sm text-muted-foreground leading-relaxed">
              Short-answer questions testing explicit and implicit meaning
              from Text A. Questions usually ask you to identify a fact, an
              attitude, or an inference from a specific paragraph.
            </p>

            <div className="rounded-xl border border-border/60 bg-muted/30 p-4">
              <div className="mb-2 flex items-center gap-2">
                <Lightbulb className="size-4 text-primary" />
                <h3 className="text-body-sm font-semibold text-foreground">
                  Technique
                </h3>
              </div>
              <ol className="list-decimal space-y-1.5 pl-5 text-body-sm text-muted-foreground">
                <li>Re-read the paragraph the question points you to.</li>
                <li>
                  Underline any word that matches the question&apos;s focus.
                </li>
                <li>
                  Answer in short sentences or phrases — no need for full
                  paragraphs.
                </li>
                <li>
                  Use your own words where the question says so; quote where
                  it asks for a word or phrase.
                </li>
              </ol>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-primary/20 bg-primary/5 p-4">
                <div className="mb-2 flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-primary" />
                  <h4 className="text-body-sm font-semibold text-foreground">
                    Do
                  </h4>
                </div>
                <ul className="space-y-1 text-body-xs text-muted-foreground">
                  <li>• Check the mark allocation — 2 marks = 2 points</li>
                  <li>• Use your own words when asked</li>
                  <li>• Quote minimally when asked</li>
                </ul>
              </div>
              <div className="rounded-xl border border-border/60 bg-muted/30 p-4">
                <div className="mb-2 flex items-center gap-2">
                  <XCircle className="size-4 text-muted-foreground" />
                  <h4 className="text-body-sm font-semibold text-foreground">
                    Don&apos;t
                  </h4>
                </div>
                <ul className="space-y-1 text-body-xs text-muted-foreground">
                  <li>• Copy whole sentences from the text</li>
                  <li>• Analyse language — save that for Q2</li>
                  <li>• Overwrite — 2 marks only needs 2 points</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Q2 Language analysis */}
      <section>
        <Card>
          <CardHeader>
            <div className="flex items-start justify-between gap-3">
              <div>
                <Badge className="bg-primary/10 text-primary border-primary/20">
                  Question 2
                </Badge>
                <CardTitle className="mt-2 text-heading-md font-heading">
                  Language analysis
                </CardTitle>
              </div>
              <Badge variant="secondary">25 marks</Badge>
            </div>
          </CardHeader>
          <CardContent className="space-y-5">
            <p className="text-body-sm text-muted-foreground leading-relaxed">
              The big analytical question. You will be asked to explore how a
              writer uses language (and sometimes structure) to achieve
              specific effects in Text A or Text B. This is where Grade 9
              candidates earn their grade.
            </p>

            <div className="rounded-xl border border-border/60 bg-muted/30 p-4">
              <div className="mb-2 flex items-center gap-2">
                <Lightbulb className="size-4 text-primary" />
                <h3 className="text-body-sm font-semibold text-foreground">
                  Technique: the three-step model
                </h3>
              </div>
              <ol className="list-decimal space-y-2 pl-5 text-body-sm text-muted-foreground">
                <li>
                  <strong className="text-foreground">Quote.</strong> A short,
                  embedded phrase.
                </li>
                <li>
                  <strong className="text-foreground">Identify.</strong> Name
                  the technique (metaphor, sibilance, triadic structure,
                  shift in register, etc.).
                </li>
                <li>
                  <strong className="text-foreground">Explain the effect.</strong>{' '}
                  Why did the writer choose this? What does it do to the
                  reader?
                </li>
              </ol>
            </div>

            <div className="rounded-xl border border-primary/20 bg-primary/5 p-4">
              <h4 className="text-body-sm font-semibold text-foreground">
                Worked example
              </h4>
              <p className="mt-2 text-body-sm text-muted-foreground">
                The writer describes the city as{' '}
                <em>&ldquo;a labyrinth of choking alleys&rdquo;</em>. The metaphor
                &ldquo;labyrinth&rdquo; implies confusion and entrapment,
                while the personification of the alleys as{' '}
                &ldquo;choking&rdquo; suggests that the urban space is
                actively hostile to those passing through it. Together they
                create a claustrophobic atmosphere, positioning the reader to
                share the narrator&apos;s sense of panic.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-primary/20 bg-primary/5 p-4">
                <div className="mb-2 flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-primary" />
                  <h4 className="text-body-sm font-semibold text-foreground">
                    Do
                  </h4>
                </div>
                <ul className="space-y-1 text-body-xs text-muted-foreground">
                  <li>• Pick quotations from across the extract</li>
                  <li>• Explore multiple effects of a single word</li>
                  <li>• Use connectives: moreover, however, furthermore</li>
                </ul>
              </div>
              <div className="rounded-xl border border-border/60 bg-muted/30 p-4">
                <div className="mb-2 flex items-center gap-2">
                  <XCircle className="size-4 text-muted-foreground" />
                  <h4 className="text-body-sm font-semibold text-foreground">
                    Don&apos;t
                  </h4>
                </div>
                <ul className="space-y-1 text-body-xs text-muted-foreground">
                  <li>• Feature-spot without explaining effect</li>
                  <li>• Quote long chunks</li>
                  <li>• Paraphrase the whole text before analysing</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Q3 Summary */}
      <section>
        <Card>
          <CardHeader>
            <div className="flex items-start justify-between gap-3">
              <div>
                <Badge className="bg-primary/10 text-primary border-primary/20">
                  Question 3
                </Badge>
                <CardTitle className="mt-2 text-heading-md font-heading">
                  Summary
                </CardTitle>
              </div>
              <Badge variant="secondary">15 + writing marks</Badge>
            </div>
          </CardHeader>
          <CardContent className="space-y-5">
            <p className="text-body-sm text-muted-foreground leading-relaxed">
              Select and synthesise information from both Text A and Text B
              on a given topic. Marked for content (the number of relevant
              points) and for the quality of your own written style.
            </p>

            <div className="rounded-xl border border-border/60 bg-muted/30 p-4">
              <div className="mb-2 flex items-center gap-2">
                <Lightbulb className="size-4 text-primary" />
                <h3 className="text-body-sm font-semibold text-foreground">
                  Technique
                </h3>
              </div>
              <ol className="list-decimal space-y-1.5 pl-5 text-body-sm text-muted-foreground">
                <li>
                  Re-read both texts with the summary topic in mind. Underline
                  any relevant point — aim for 15+ points.
                </li>
                <li>
                  Group similar points together so you can combine them into
                  single sentences.
                </li>
                <li>
                  Translate each point into your own words — this is
                  non-negotiable for top marks.
                </li>
                <li>
                  Write in continuous prose, not bullet points. Use linking
                  words to group related ideas.
                </li>
                <li>
                  Stay under the word limit (usually 250 words) — examiners
                  stop marking beyond it.
                </li>
              </ol>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-primary/20 bg-primary/5 p-4">
                <div className="mb-2 flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-primary" />
                  <h4 className="text-body-sm font-semibold text-foreground">
                    Do
                  </h4>
                </div>
                <ul className="space-y-1 text-body-xs text-muted-foreground">
                  <li>• Use your own vocabulary throughout</li>
                  <li>• Combine points from A and B</li>
                  <li>• Write in fluent, connected prose</li>
                </ul>
              </div>
              <div className="rounded-xl border border-border/60 bg-muted/30 p-4">
                <div className="mb-2 flex items-center gap-2">
                  <XCircle className="size-4 text-muted-foreground" />
                  <h4 className="text-body-sm font-semibold text-foreground">
                    Don&apos;t
                  </h4>
                </div>
                <ul className="space-y-1 text-body-xs text-muted-foreground">
                  <li>• Include your own opinion</li>
                  <li>• Quote directly from the texts</li>
                  <li>• Analyse language — that&apos;s Q2 territory</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Next */}
      <section className="rounded-2xl border border-primary/20 bg-primary/5 p-6 sm:p-8">
        <h2 className="text-heading-md font-heading text-foreground">
          Put it into practice
        </h2>
        <div className="mt-4 flex flex-wrap gap-2">
          <Button
            size="sm"
            render={<Link href="/igcse/cambridge/0990/practice-paper-1" />}
          >
            Practice Paper 1
            <ArrowRight className="size-3.5" />
          </Button>
          <Button
            size="sm"
            variant="outline"
            render={<Link href="/igcse/cambridge/0990/grade-9-guide" />}
          >
            Grade 9 guide
          </Button>
        </div>
      </section>
    </div>
  )
}
