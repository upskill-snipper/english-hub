import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Clock,
  Sparkles,
  Timer,
  FileText,
  Info,
} from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { requireIgcseBoard } from '@/app/igcse/_lib/guard'

export const metadata: Metadata = {
  openGraph: {
    title: 'Practice Paper 1 (Reading) | Cambridge IGCSE Language B | The English Hub',
    description:
      'Full Cambridge IGCSE Language B Paper 1 Reading practice paper using public domain extracts from Charlotte Brontë and H.G. Wells. Questions, timing and mark breakdown.',
  },
  title: 'Practice Paper 1 (Reading) | Cambridge IGCSE Language B',
  description:
    'Full Cambridge IGCSE Language B Paper 1 Reading practice paper using public domain extracts from Charlotte Brontë and H.G. Wells. Questions, timing and mark breakdown.',
  alternates: {
    canonical: 'https://theenglishhub.app/igcse/cambridge/0990/practice-paper-1',
  },
}

export default async function PracticePaper1Page() {
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
      <section className="relative overflow-hidden rounded-2xl border border-border/60 bg-gradient-to-br from-card via-card to-primary/[0.04] p-6 sm:p-8 lg:p-10">
        <div className="relative">
          <div className="mb-4 flex flex-wrap items-center gap-2">
            <Badge className="bg-primary/10 text-primary border-primary/20">
              <Sparkles className="mr-1 size-3" />
              Cambridge IGCSE Language B
            </Badge>
            <Badge variant="secondary">Practice Paper</Badge>
            <Badge variant="secondary">Paper 1 Reading</Badge>
          </div>
          <h1 className="text-display-sm font-heading text-foreground sm:text-display">
            Practice Paper 1: Reading
          </h1>
          <p className="mt-3 max-w-3xl text-body-lg text-muted-foreground">
            A full Paper 1 built around two public-domain extracts. Read both texts, then answer all
            three questions under exam conditions: 2 hours, 80 marks.
          </p>
          <div className="mt-6 flex flex-wrap gap-3 text-body-sm text-muted-foreground">
            <span className="inline-flex items-center gap-1.5 rounded-md border border-border/60 bg-muted/40 px-3 py-1.5">
              <Clock className="size-3.5" />2 hours
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-md border border-border/60 bg-muted/40 px-3 py-1.5">
              <BookOpen className="size-3.5" />
              80 marks
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-md border border-border/60 bg-muted/40 px-3 py-1.5">
              <Timer className="size-3.5" />
              Closed book
            </span>
          </div>
        </div>
      </section>

      {/* Instructions */}
      <section className="rounded-2xl border border-primary/20 bg-primary/5 p-6 sm:p-8">
        <div className="flex items-start gap-3">
          <Info className="mt-0.5 size-5 shrink-0 text-primary" />
          <div>
            <h2 className="text-heading-md font-heading text-foreground">Instructions</h2>
            <ul className="mt-3 space-y-2 text-body-sm text-muted-foreground">
              <li>• Answer all three questions.</li>
              <li>• Write in continuous prose for Questions 2 and 3.</li>
              <li>• Spend about 1 hour on Questions 1 and 2 together.</li>
              <li>• Spend about 30 minutes on Question 3.</li>
              <li>
                • Both extracts are in the public domain and have been lightly edited where needed
                to suit exam conventions.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Text A */}
      <section>
        <div className="mb-5 flex items-center gap-3">
          <FileText className="size-5 text-primary" />
          <h2 className="text-heading-lg font-heading text-foreground">
            Text A: The red-room (adapted)
          </h2>
        </div>
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-body font-semibold">
              From Jane Eyre by Charlotte Brontë (1847)
            </CardTitle>
            <p className="text-body-xs text-muted-foreground">
              In this opening chapter, a young girl is locked alone in a disused bedroom as
              punishment. The narrator recalls her feelings.
            </p>
          </CardHeader>
          <CardContent className="space-y-4 text-body-sm leading-relaxed text-foreground">
            <p>
              The red-room was a spare chamber, very seldom slept in; I might say never, indeed,
              unless when a chance influx of visitors at Gateshead Hall rendered it necessary to
              turn to account all the accommodation it contained. Yet it was one of the largest and
              stateliest chambers in the mansion. A bed supported on massive pillars of mahogany,
              hung with curtains of deep red damask, stood out like a tabernacle in the centre; the
              two large windows, with their blinds always drawn down, were half shrouded in festoons
              and falls of similar drapery; the carpet was red; the table at the foot of the bed was
              covered with a crimson cloth.
            </p>
            <p>
              This room was chill, because it seldom had a fire; it was silent, because remote from
              the nursery and kitchen; solemn, because it was known to be so rarely entered. The
              housemaid alone came here on Saturdays, to wipe from the mirrors and the furniture a
              week&apos;s quiet dust: and Mrs. Reed herself, at far intervals, visited it to review
              the contents of a certain secret drawer in the wardrobe.
            </p>
            <p>
              My heart beat thick, my head grew hot; a sound filled my ears, which I deemed the
              rushing of wings; something seemed near me; I was oppressed, suffocated: endurance
              broke down; I rushed to the door and shook the lock in desperate effort. Steps came
              running along the outer passage; the key turned, Bessie and Abbot entered. I stretched
              out my hands, for I felt shaken to the core.
            </p>
            <p className="text-body-xs italic text-muted-foreground">
              Source: public domain. Adapted for length.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Text B */}
      <section>
        <div className="mb-5 flex items-center gap-3">
          <FileText className="size-5 text-primary" />
          <h2 className="text-heading-lg font-heading text-foreground">
            Text B: First sight of Mars (adapted)
          </h2>
        </div>
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-body font-semibold">
              From The War of the Worlds by H. G. Wells (1898)
            </CardTitle>
            <p className="text-body-xs text-muted-foreground">
              A London astronomer describes the night his telescope first showed him signs of
              disturbance on the surface of Mars.
            </p>
          </CardHeader>
          <CardContent className="space-y-4 text-body-sm leading-relaxed text-foreground">
            <p>
              The night was warm and still. I was stretched out on the lawn, counting the stars that
              were beginning to appear, when I felt, rather than saw, that something had changed in
              the evening sky. I turned my telescope towards Mars. The planet was familiar to me: a
              small, steady point of rose-coloured fire. But now, at the edge of its visible disc, a
              faint cloud seemed to rise, like the breath of a creature I had never imagined
              breathing.
            </p>
            <p>
              I watched for an hour without moving. Then the cloud seemed to gather itself into a
              brighter, sharper flash — a thread of light flung across the void. For a moment I
              thought it was some failure of my own eyes, some trick of the lens. I looked away,
              rubbed my hands over my face, and looked back. The flash had gone, but the planet
              seemed to me subtly altered, as if the quiet face of an old friend had shifted into an
              expression I did not recognise.
            </p>
            <p>
              In the quiet streets below, the gas-lamps burned on, indifferent. A cart rattled
              somewhere beyond the square. Nobody in London guessed, that night, what had just
              begun. I remember thinking, with the mild curiosity of a man who does not yet know
              what is being set in motion, that the heavens had surprised me.
            </p>
            <p className="text-body-xs italic text-muted-foreground">
              Source: public domain. Adapted for length.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Questions */}
      <section>
        <div className="mb-5 flex items-center gap-3">
          <BookOpen className="size-5 text-primary" />
          <h2 className="text-heading-lg font-heading text-foreground">Questions</h2>
        </div>
        <div className="space-y-6">
          {/* Q1 */}
          <Card>
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between gap-3">
                <CardTitle className="text-heading-sm font-heading">Question 1 — Text A</CardTitle>
                <Badge variant="secondary">25 marks</Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4 text-body-sm text-muted-foreground">
              <p>Re-read the description of the red-room in Text A.</p>
              <ol className="space-y-2 pl-5 list-[lower-alpha]">
                <li>
                  Identify two details that show how rarely the red-room is used.
                  <span className="ml-2 italic text-body-xs">[2]</span>
                </li>
                <li>
                  Using your own words, explain why the narrator finds the room &ldquo;chill&rdquo;,
                  &ldquo;silent&rdquo; and &ldquo;solemn&rdquo;.
                  <span className="ml-2 italic text-body-xs">[3]</span>
                </li>
                <li>
                  Explain how the writer creates a sense of grandeur in the first paragraph. Support
                  your answer with brief quotations.
                  <span className="ml-2 italic text-body-xs">[5]</span>
                </li>
                <li>
                  Re-read the final paragraph. Explore how the writer conveys the narrator&apos;s
                  growing panic. Refer closely to language and structure.
                  <span className="ml-2 italic text-body-xs">[15]</span>
                </li>
              </ol>
            </CardContent>
          </Card>

          {/* Q2 */}
          <Card>
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between gap-3">
                <CardTitle className="text-heading-sm font-heading">Question 2 — Text B</CardTitle>
                <Badge variant="secondary">25 marks</Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-3 text-body-sm text-muted-foreground">
              <p>
                Re-read Text B. Explore how the writer uses language and structure to build an
                atmosphere of mystery and unease.
              </p>
              <p>Support your points with short, well-chosen quotations. You should comment on:</p>
              <ul className="space-y-1 pl-5 list-disc">
                <li>the use of imagery and figurative language;</li>
                <li>shifts in focus between the narrator, the sky and the city below;</li>
                <li>the narrator&apos;s tone and the effect it has on the reader.</li>
              </ul>
            </CardContent>
          </Card>

          {/* Q3 */}
          <Card>
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between gap-3">
                <CardTitle className="text-heading-sm font-heading">
                  Question 3 — Texts A and B
                </CardTitle>
                <Badge variant="secondary">30 marks</Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-3 text-body-sm text-muted-foreground">
              <p>
                Summarise what Texts A and B suggest about{' '}
                <strong className="text-foreground">
                  how individuals respond when something familiar suddenly becomes strange.
                </strong>
              </p>
              <p>
                Write your summary in your own words as far as possible. You should write about{' '}
                <strong className="text-foreground">250 words</strong>. Up to 15 marks are available
                for the content of your answer, and up to 15 marks for the quality of your writing.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Mark distribution */}
      <section className="rounded-2xl border border-border/60 bg-card p-6 sm:p-8">
        <h2 className="text-heading-md font-heading text-foreground">Mark distribution</h2>
        <div className="mt-5 grid gap-3 sm:grid-cols-3">
          <div className="rounded-xl border border-border/60 bg-muted/30 p-4">
            <p className="text-body-xs font-medium text-muted-foreground">Question 1</p>
            <p className="mt-1 text-heading-sm font-heading text-foreground">25</p>
          </div>
          <div className="rounded-xl border border-border/60 bg-muted/30 p-4">
            <p className="text-body-xs font-medium text-muted-foreground">Question 2</p>
            <p className="mt-1 text-heading-sm font-heading text-foreground">25</p>
          </div>
          <div className="rounded-xl border border-border/60 bg-muted/30 p-4">
            <p className="text-body-xs font-medium text-muted-foreground">Question 3</p>
            <p className="mt-1 text-heading-sm font-heading text-foreground">30</p>
          </div>
        </div>
        <p className="mt-4 text-body-xs text-muted-foreground">
          Total: 80 marks. Use our{' '}
          <Link
            href="/igcse/cambridge/0990/paper-1"
            className="text-primary underline-offset-2 hover:underline"
          >
            Paper 1 grade boundaries
          </Link>{' '}
          to score yourself after attempting the paper.
        </p>
      </section>

      {/* Next */}
      <section className="rounded-2xl border border-primary/20 bg-primary/5 p-6 sm:p-8">
        <h2 className="text-heading-md font-heading text-foreground">Finished the paper?</h2>
        <div className="mt-4 flex flex-wrap gap-2">
          <Button size="sm" render={<Link href="/igcse/cambridge/0990/paper-1/question-types" />}>
            Technique for each question type
            <ArrowRight className="size-3.5" />
          </Button>
          <Button
            size="sm"
            variant="outline"
            render={<Link href="/igcse/cambridge/0990/practice-paper-2" />}
          >
            Try Practice Paper 2
          </Button>
        </div>
      </section>
    </div>
  )
}
