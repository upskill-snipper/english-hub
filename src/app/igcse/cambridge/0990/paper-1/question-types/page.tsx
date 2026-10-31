import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, Sparkles, CheckCircle2, XCircle, Lightbulb } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { requireIgcseBoard } from '@/app/igcse/_lib/guard'
import { t } from '@/lib/i18n/t'

export const metadata: Metadata = {
  openGraph: {
    title: 'Paper 1 Question Types | Cambridge IGCSE Language B | The English Hub',
    description:
      'The four questions on Cambridge IGCSE Language B Paper 1: comprehension, the summary, the language task and the extended response, and how to answer each.',
    images: [
      {
        url: '/api/og?title=Paper+1+Question+Types+%7C+Cambridge+IGCSE+Language+B+%7C+The+English+Hub',
        width: 1200,
        height: 630,
        alt: 'Paper 1 Question Types | Cambridge IGCSE Language B | The English Hub',
      },
    ],
  },
  title: 'Paper 1 Question Types | Cambridge IGCSE Language B',
  description:
    'The four questions on Cambridge IGCSE Language B Paper 1: comprehension, the summary, the language task and the extended response, and how to answer each.',
  alternates: {
    canonical: 'https://theenglishhub.app/igcse/cambridge/0990/paper-1/question-types',
  },
}

export default async function QuestionTypesPage() {
  await requireIgcseBoard(['cambridge-0990'])

  return (
    <div className="space-y-10 pb-16">
      <div>
        <Button variant="ghost" size="sm" render={<Link href="/igcse/cambridge/0990/paper-1" />}>
          <ArrowLeft className="size-3.5" />
          {await t('igcse.page.back_to_paper_1')}
        </Button>
      </div>

      {/* Hero */}
      <section className="relative overflow-hidden rounded-2xl border border-border/60 bg-gradient-to-br from-card via-card to-primary/[0.04] p-6 sm:p-8 lg:p-10">
        <div className="relative">
          <div className="mb-4 flex flex-wrap items-center gap-2">
            <Badge className="bg-primary/10 text-primary border-primary/20">
              <Sparkles className="me-1 size-3" />
              {await t('igcse.cambridge.badge.cambridge_lang_b')}
            </Badge>
            <Badge variant="secondary">Paper 1</Badge>
            <Badge variant="secondary">Question types</Badge>
          </div>
          <h1 className="text-display-sm font-heading text-foreground sm:text-display">
            Paper 1 question types
          </h1>
          <p className="mt-3 max-w-3xl text-body-lg text-muted-foreground">
            Four questions. Four different skills. Each needs a different approach - get them mixed
            up and you lose marks on questions you&apos;d otherwise ace.
          </p>
          <p className="mt-3 max-w-3xl text-body-sm text-muted-foreground">
            This is the paper for exams from 2027. If you sit Paper 1 in November 2026, your paper
            follows the older 2024-2026 syllabus: three questions worth 30, 25 and 25 marks.
          </p>
        </div>
      </section>

      {/* 31 October 2026: rewritten to src/data/mark-scheme-guides/cambridge-0990-paper1.ts
          (0500 Paper 1 under 9-1 grading). This gave three questions: Q1(a-e) 15, a
          25-mark language analysis of Text A or B as Q2 and a summary of both texts in
          "usually 250 words" as Q3. From 2027 there are four of 20: Q1 comprehension
          (Text A), Q2 the summary (Text B, no more than 120 words) and 2(b), Q3 short
          answers and the language task (Text C), Q4 the extended response (Text C).
          Each card keeps its technique where it serves the real question. */}

      {/* Q1 Comprehension */}
      <section>
        <Card>
          <CardHeader>
            <div className="flex items-start justify-between gap-3">
              <div>
                <Badge className="bg-primary/10 text-primary border-primary/20">Question 1</Badge>
                <CardTitle className="mt-2 text-heading-md font-heading">Comprehension</CardTitle>
              </div>
              <Badge variant="secondary">20 marks</Badge>
            </div>
          </CardHeader>
          <CardContent className="space-y-5">
            <p className="text-body-sm text-muted-foreground leading-relaxed">
              Short-answer questions testing explicit and implicit meaning from Text A. Questions
              usually ask you to identify a fact, explain a word or phrase in your own words, or say
              what the writer suggests in a specific paragraph. Each part is marked point by point.
            </p>

            <div className="rounded-xl border border-border/60 bg-muted/30 p-4">
              <div className="mb-2 flex items-center gap-2">
                <Lightbulb className="size-4 text-primary" />
                <h3 className="text-body-sm font-semibold text-foreground">Technique</h3>
              </div>
              <ol className="list-decimal space-y-1.5 ps-5 text-body-sm text-muted-foreground">
                <li>Re-read the paragraph the question points you to.</li>
                <li>Underline any word that matches the question&apos;s focus.</li>
                <li>Answer in short sentences or phrases - no need for full paragraphs.</li>
                <li>
                  Use your own words where the question says so; quote where it asks for a word or
                  phrase.
                </li>
              </ol>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-primary/20 bg-primary/5 p-4">
                <div className="mb-2 flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-primary" />
                  <h4 className="text-body-sm font-semibold text-foreground">Do</h4>
                </div>
                <ul className="space-y-1 text-body-xs text-muted-foreground">
                  <li>• Check the mark allocation - 2 marks = 2 points</li>
                  <li>• Use your own words when asked</li>
                  <li>• Quote minimally when asked</li>
                </ul>
              </div>
              <div className="rounded-xl border border-border/60 bg-muted/30 p-4">
                <div className="mb-2 flex items-center gap-2">
                  <XCircle className="size-4 text-muted-foreground" />
                  <h4 className="text-body-sm font-semibold text-foreground">Don&apos;t</h4>
                </div>
                <ul className="space-y-1 text-body-xs text-muted-foreground">
                  <li>• Copy whole sentences from the text</li>
                  <li>• Analyse language - save that for the Q3 language task</li>
                  <li>• Overwrite - 2 marks only needs 2 points</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Q2 Summary */}
      <section>
        <Card>
          <CardHeader>
            <div className="flex items-start justify-between gap-3">
              <div>
                <Badge className="bg-primary/10 text-primary border-primary/20">Question 2</Badge>
                <CardTitle className="mt-2 text-heading-md font-heading">Summary task</CardTitle>
              </div>
              <Badge variant="secondary">20 marks</Badge>
            </div>
          </CardHeader>
          <CardContent className="space-y-5">
            <p className="text-body-sm text-muted-foreground leading-relaxed">
              2(a): select the points in Text B that fit a given focus and summarise them in your
              own words, in no more than 120 words. Marked for reading (10: the points you select)
              and writing (5: the quality of your own written style). 2(b), worth 5, asks about the
              writer&apos;s attitude.
            </p>

            <div className="rounded-xl border border-border/60 bg-muted/30 p-4">
              <div className="mb-2 flex items-center gap-2">
                <Lightbulb className="size-4 text-primary" />
                <h3 className="text-body-sm font-semibold text-foreground">Technique</h3>
              </div>
              <ol className="list-decimal space-y-1.5 ps-5 text-body-sm text-muted-foreground">
                <li>
                  Re-read Text B with the summary focus in mind. Underline every point that fits it,
                  including points the text only implies.
                </li>
                <li>
                  Group similar points together so you can combine them into single sentences.
                </li>
                <li>
                  Translate each point into your own words - this is non-negotiable for top marks.
                </li>
                <li>
                  Write in continuous prose, not bullet points. Use linking words to group related
                  ideas.
                </li>
                <li>Stay within the limit: no more than 120 words.</li>
              </ol>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-primary/20 bg-primary/5 p-4">
                <div className="mb-2 flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-primary" />
                  <h4 className="text-body-sm font-semibold text-foreground">Do</h4>
                </div>
                <ul className="space-y-1 text-body-xs text-muted-foreground">
                  <li>• Use your own vocabulary throughout</li>
                  <li>• Combine related points into single sentences</li>
                  <li>• Write in fluent, connected prose</li>
                </ul>
              </div>
              <div className="rounded-xl border border-border/60 bg-muted/30 p-4">
                <div className="mb-2 flex items-center gap-2">
                  <XCircle className="size-4 text-muted-foreground" />
                  <h4 className="text-body-sm font-semibold text-foreground">Don&apos;t</h4>
                </div>
                <ul className="space-y-1 text-body-xs text-muted-foreground">
                  <li>• Include your own opinion</li>
                  <li>• Quote directly from the text</li>
                  <li>• Analyse language - that&apos;s Q3 territory</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Q3 Short answers and language task */}
      <section>
        <Card>
          <CardHeader>
            <div className="flex items-start justify-between gap-3">
              <div>
                <Badge className="bg-primary/10 text-primary border-primary/20">Question 3</Badge>
                <CardTitle className="mt-2 text-heading-md font-heading">
                  Short answers and language task
                </CardTitle>
              </div>
              <Badge variant="secondary">20 marks</Badge>
            </div>
          </CardHeader>
          <CardContent className="space-y-5">
            <p className="text-body-sm text-muted-foreground leading-relaxed">
              Short answers on words and phrases in Text C (10 marks), then the language task (10
              marks): about 200 to 250 words exploring how the writer uses language to achieve
              effects in an extract the question names. This is where Grade 9 candidates earn their
              grade.
            </p>

            <div className="rounded-xl border border-border/60 bg-muted/30 p-4">
              <div className="mb-2 flex items-center gap-2">
                <Lightbulb className="size-4 text-primary" />
                <h3 className="text-body-sm font-semibold text-foreground">
                  Technique: the three-step model
                </h3>
              </div>
              <ol className="list-decimal space-y-2 ps-5 text-body-sm text-muted-foreground">
                <li>
                  <strong className="text-foreground">Quote.</strong> A short, embedded phrase.
                </li>
                <li>
                  <strong className="text-foreground">Identify.</strong> Name the technique
                  (metaphor, sibilance, triadic structure, shift in register, etc.).
                </li>
                <li>
                  <strong className="text-foreground">Explain the effect.</strong> Why did the
                  writer choose this? What does it do to the reader?
                </li>
              </ol>
            </div>

            <div className="rounded-xl border border-primary/20 bg-primary/5 p-4">
              <h4 className="text-body-sm font-semibold text-foreground">Worked example</h4>
              <p className="mt-2 text-body-sm text-muted-foreground">
                The writer describes the city as{' '}
                <em>&ldquo;a labyrinth of choking alleys&rdquo;</em>. The metaphor
                &ldquo;labyrinth&rdquo; implies confusion and entrapment, while the personification
                of the alleys as &ldquo;choking&rdquo; suggests that the urban space is actively
                hostile to those passing through it. Together they create a claustrophobic
                atmosphere, positioning the reader to share the narrator&apos;s sense of panic.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-primary/20 bg-primary/5 p-4">
                <div className="mb-2 flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-primary" />
                  <h4 className="text-body-sm font-semibold text-foreground">Do</h4>
                </div>
                <ul className="space-y-1 text-body-xs text-muted-foreground">
                  <li>• Choose a few striking words, including images</li>
                  <li>• Explore multiple effects of a single word</li>
                  <li>• Use connectives: moreover, however, furthermore</li>
                </ul>
              </div>
              <div className="rounded-xl border border-border/60 bg-muted/30 p-4">
                <div className="mb-2 flex items-center gap-2">
                  <XCircle className="size-4 text-muted-foreground" />
                  <h4 className="text-body-sm font-semibold text-foreground">Don&apos;t</h4>
                </div>
                <ul className="space-y-1 text-body-xs text-muted-foreground">
                  <li>• Feature-spot without explaining effect</li>
                  <li>• Quote long chunks</li>
                  <li>• Write about lines outside the extract</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Q4 Extended response to reading */}
      <section>
        <Card>
          <CardHeader>
            <div className="flex items-start justify-between gap-3">
              <div>
                <Badge className="bg-primary/10 text-primary border-primary/20">Question 4</Badge>
                <CardTitle className="mt-2 text-heading-md font-heading">
                  Extended response to reading
                </CardTitle>
              </div>
              <Badge variant="secondary">20 marks</Badge>
            </div>
          </CardHeader>
          <CardContent className="space-y-5">
            <p className="text-body-sm text-muted-foreground leading-relaxed">
              About 250 to 300 words based on Text C, in the form the question sets: a letter,
              report, journal, speech, interview or article. You use and develop ideas from the text
              to cover each bullet point. Marked for reading (10) and writing (10).
            </p>

            <div className="rounded-xl border border-border/60 bg-muted/30 p-4">
              <div className="mb-2 flex items-center gap-2">
                <Lightbulb className="size-4 text-primary" />
                <h3 className="text-body-sm font-semibold text-foreground">Technique</h3>
              </div>
              <ol className="list-decimal space-y-1.5 ps-5 text-body-sm text-muted-foreground">
                <li>Note two or three ideas from Text C under each bullet point.</li>
                <li>
                  Add what each idea suggests or leads to: that development earns reading marks.
                </li>
                <li>Reorganise the material around the bullets, not the order of the text.</li>
                <li>Keep a voice that suits the role and the form all the way through.</li>
              </ol>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-primary/20 bg-primary/5 p-4">
                <div className="mb-2 flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-primary" />
                  <h4 className="text-body-sm font-semibold text-foreground">Do</h4>
                </div>
                <ul className="space-y-1 text-body-xs text-muted-foreground">
                  <li>• Cover every bullet in a balanced way</li>
                  <li>• Back points with details from Text C</li>
                  <li>• Use the conventions of the form</li>
                </ul>
              </div>
              <div className="rounded-xl border border-border/60 bg-muted/30 p-4">
                <div className="mb-2 flex items-center gap-2">
                  <XCircle className="size-4 text-muted-foreground" />
                  <h4 className="text-body-sm font-semibold text-foreground">Don&apos;t</h4>
                </div>
                <ul className="space-y-1 text-body-xs text-muted-foreground">
                  <li>• Retell Text C in its own order</li>
                  <li>• Invent content with no basis in the text</li>
                  <li>• Give a bullet only a line</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
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
            render={<Link href="/igcse/cambridge/0990/grade-9-guide" />}
          >
            Grade 9 guide
          </Button>
        </div>
      </section>
    </div>
  )
}
