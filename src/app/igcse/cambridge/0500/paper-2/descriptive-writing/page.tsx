import type { Metadata } from 'next'
import Link from 'next/link'
import { ChevronLeft, Feather, Eye, Sparkles, Target, Lightbulb } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { requireIgcseBoard } from '@/app/igcse/_lib/guard'

export const metadata: Metadata = {
  openGraph: {
    title: 'Descriptive Writing - IGCSE Language A Paper 2 Section B',
    description:
      'How to write a top-mark descriptive composition for IGCSE Language A Paper 2. Sensory detail, setting, atmosphere, structure and worked opening. Aligns with Cambridge syllabus 0500.',
  },
  title: 'Descriptive Writing - IGCSE Language A Paper 2 Section B',
  description:
    'How to write a top-mark descriptive composition for IGCSE Language A Paper 2. Sensory detail, setting, atmosphere, structure and worked opening. Aligns with Cambridge syllabus 0500.',
  alternates: {
    canonical: 'https://theenglishhub.app/igcse/cambridge/0500/paper-2/descriptive-writing',
  },
}

const senses = [
  {
    sense: 'Sight',
    advice:
      'Beyond colours and shapes, describe light, angle and movement. What is bright? What is hidden in shadow?',
    example:
      'A single shaft of grey light angled across the counter, picking out the dust that drifted up from the newspapers.',
  },
  {
    sense: 'Sound',
    advice:
      'Noise OR its absence. A detail like a clock ticking tells the reader the space is empty.',
    example:
      'Somewhere behind the walls a radiator clanked, the only sound in a house that had forgotten how to speak.',
  },
  {
    sense: 'Smell',
    advice:
      'Often the most neglected sense, so the most original. Use it to anchor memory and mood.',
    example:
      'The air smelt of rust and rain, the sharp mineral tang of wet railings after a long winter.',
  },
  {
    sense: 'Touch',
    advice: 'Temperature, texture, air pressure. Let the reader feel the scene on their skin.',
    example:
      'The bannister was warm where the morning sun had found it, worn smooth by a hundred reluctant descents.',
  },
  {
    sense: 'Taste',
    advice: 'Use sparingly - even air has a taste. Try it only when it fits the scene.',
    example: 'The cold air had a metallic taste, like biting on a coin.',
  },
]

const structure = [
  {
    stage: '1. Establish',
    detail:
      'Open with a wide angle - set the time of day, weather and mood in two or three sentences. Do not over-explain.',
  },
  {
    stage: '2. Zoom in',
    detail:
      'Move from the panoramic to the particular. Pick ONE object or figure and describe it in close detail.',
  },
  {
    stage: '3. Shift',
    detail:
      'Introduce a slight change - a sound, a movement, a change in light. This stops the description feeling static.',
  },
  {
    stage: '4. Reframe',
    detail:
      'Pull back slightly to reveal something unexpected - a new figure, a missing detail, a reversal of mood.',
  },
  {
    stage: '5. Linger',
    detail:
      'Close with a final image that captures the atmosphere. Avoid "and then I woke up" endings.',
  },
]

const mistakes = [
  'Telling a story instead of describing - plot is the enemy here',
  'Listing every sense in every paragraph - feels mechanical',
  'Using every literary device at once - pick two or three per paragraph',
  'Ending with a sudden twist or action scene',
  'Writing in the past tense when present tense would feel more immediate',
]

export default async function DescriptiveWritingPage() {
  await requireIgcseBoard(['cambridge-0500'])

  return (
    <div className="space-y-10 pb-16">
      {/* ── Back link ─────────────────────────────────────────────── */}
      <div>
        <Button
          variant="ghost"
          size="sm"
          render={<Link href="/igcse/cambridge/0500/paper-2" />}
          className="gap-1"
        >
          <ChevronLeft className="size-4" />
          Paper 2 hub
        </Button>
      </div>

      {/* ── Header ─────────────────────────────────────────────────── */}
      <section>
        <Badge className="mb-3 bg-primary/10 text-primary border-primary/20">
          IGCSE Language A
        </Badge>
        <h1 className="text-display-sm font-heading text-foreground">Descriptive writing</h1>
        <p className="mt-3 max-w-2xl text-body-lg text-muted-foreground">
          Descriptive writing is not about lots of adjectives - it is about selecting the right
          details and layering them so the reader can step into the scene. Worth 40 marks in Section
          B.
        </p>
      </section>

      {/* ── Marks ─────────────────────────────────────────────────── */}
      <section className="rounded-2xl border border-border/60 bg-card p-6 sm:p-8">
        <div className="mb-4 flex items-center gap-3">
          <Target className="size-5 text-primary" />
          <h2 className="text-heading-md font-heading text-foreground">How the 40 marks split</h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl border border-border/60 bg-muted/30 p-5">
            <Badge className="mb-2 bg-primary/10 text-primary border-primary/20">
              Content & structure - 16
            </Badge>
            <p className="text-body-sm text-muted-foreground">
              Originality of content, progression of ideas, sense of atmosphere and shape of the
              composition as a whole.
            </p>
          </div>
          <div className="rounded-xl border border-border/60 bg-muted/30 p-5">
            <Badge className="mb-2 bg-primary/10 text-primary border-primary/20">
              Style & accuracy - 24
            </Badge>
            <p className="text-body-sm text-muted-foreground">
              Range of vocabulary, precision of word choice, varied sentence structure, grammar,
              spelling and punctuation.
            </p>
          </div>
        </div>
      </section>

      {/* ── Sensory detail ────────────────────────────────────────── */}
      <section>
        <div className="mb-5 flex items-center gap-3">
          <Eye className="size-5 text-primary" />
          <h2 className="text-heading-lg font-heading text-foreground">Using sensory detail</h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {senses.map((s) => (
            <Card key={s.sense}>
              <CardHeader className="pb-2">
                <CardTitle className="text-body-md font-heading">{s.sense}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-body-sm text-muted-foreground">{s.advice}</p>
                <div className="rounded-lg border border-border/60 bg-muted/30 p-3">
                  <p className="text-body-xs italic text-foreground">{s.example}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* ── Structure ─────────────────────────────────────────────── */}
      <section>
        <div className="mb-5 flex items-center gap-3">
          <Sparkles className="size-5 text-primary" />
          <h2 className="text-heading-lg font-heading text-foreground">Five-stage structure</h2>
        </div>
        <div className="space-y-3">
          {structure.map((st, i) => (
            <Card key={st.stage}>
              <CardContent className="flex items-start gap-4 pt-6">
                <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-body-sm font-semibold text-primary">
                  {i + 1}
                </span>
                <div>
                  <h3 className="text-body-md font-semibold text-foreground">{st.stage}</h3>
                  <p className="text-body-sm text-muted-foreground">{st.detail}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* ── Worked opening ────────────────────────────────────────── */}
      <section className="rounded-2xl border border-border/60 bg-card p-6 sm:p-8">
        <div className="mb-4 flex items-center gap-3">
          <Feather className="size-5 text-primary" />
          <h2 className="text-heading-md font-heading text-foreground">
            Worked opening - &quot;Describe a busy marketplace&quot;
          </h2>
        </div>
        <div className="rounded-xl border border-border/60 bg-muted/30 p-5">
          <p className="text-body-sm text-foreground leading-relaxed">
            By mid-morning the square has already forgotten the cool of dawn. Heat rises from the
            cobbles in visible ripples, distorting the line of awnings and the colours underneath
            them: bruised purples of aubergines, the soft yellow of split melons, crates of limes so
            bright they look wet. A woman in a grey headscarf arranges figs in perfect ranks, her
            fingers darkened by the fruit&apos;s sticky skin. Somewhere behind her, a radio mutters
            a football commentary nobody is listening to. Children weave between shoppers at
            knee-height, their laughter sharp against the steady hum of bargaining, and the air
            carries a heavy, complicated sweetness of cumin, warm bread and petrol fumes.
          </p>
        </div>
        <p className="mt-3 text-body-xs text-muted-foreground">
          Notice: wide opening, then zoom to the woman, then shift to sound, then another sense.
          Five lines, five moves.
        </p>
      </section>

      {/* ── Mistakes ──────────────────────────────────────────────── */}
      <section>
        <div className="mb-5 flex items-center gap-3">
          <Lightbulb className="size-5 text-primary" />
          <h2 className="text-heading-lg font-heading text-foreground">Common mistakes</h2>
        </div>
        <Card>
          <CardContent className="pt-6">
            <ul className="space-y-2 text-body-sm text-muted-foreground">
              {mistakes.map((m) => (
                <li key={m} className="flex items-start gap-2">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
                  <span>{m}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}
