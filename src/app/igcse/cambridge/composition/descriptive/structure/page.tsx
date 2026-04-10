import type { Metadata } from 'next'
import Link from 'next/link'
import { Layers, Sparkles, ChevronLeft, Camera } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { requireIgcseBoard } from '@/app/igcse/_lib/guard'

export const metadata: Metadata = {
  title: 'Descriptive Structure — Cambridge IGCSE Composition',
  description:
    'Structure a Cambridge IGCSE descriptive composition using the cinematic zoom technique: wide shot, mid shot, close-up and inner monologue.',
  alternates: {
    canonical:
      'https://theenglishhub.app/igcse/cambridge/composition/descriptive/structure',
  },
}

const zoomStages = [
  {
    stage: 'Wide shot',
    length: '~1 paragraph',
    description:
      'Establish the whole scene in one sweeping image. Think aerial photograph. Give the reader geography, time of day, weather and overall atmosphere.',
    example:
      'The market sprawled across the square like a dropped blanket, stalls overlapping at every edge, the canvas roofs catching the low sun in uneven flashes of orange.',
  },
  {
    stage: 'Mid shot',
    length: '~2 paragraphs',
    description:
      'Move closer. Introduce groups, movement, sound. Pick two or three specific features and describe them in detail, as if walking into the scene.',
    example:
      'Nearer the centre, a fish-stall owner argued cheerfully with a customer over the price of a mackerel. Beside him, a little girl tore the crust off a bread roll and fed pieces to a pigeon that did not flinch.',
  },
  {
    stage: 'Close-up',
    length: '~1–2 paragraphs',
    description:
      'Pick one object, face or gesture and describe it in obsessive detail. This is where the marks are. Slow down. Use all five senses on a single subject.',
    example:
      'The fisherman\u2019s hands were the colour of soaked rope. A crescent of silver scale was stuck to his thumbnail, catching the light whenever he gestured.',
  },
  {
    stage: 'Inner shot',
    length: '~1 paragraph',
    description:
      'Pull back into the narrator — or into the felt mood of the scene. Return, subtly, to the image you opened with. This is how the piece earns the word &ldquo;crafted&rdquo;.',
    example:
      'I walked out through the far edge of the square. Behind me, the market was already folding itself up for the evening, the dropped blanket being quietly gathered in.',
  },
]

export default async function StructurePage() {
  await requireIgcseBoard(['cambridge-0500', 'cambridge-0990'])

  return (
    <div className="space-y-10 pb-16">
      <Button
        variant="ghost"
        size="sm"
        render={<Link href="/igcse/cambridge/composition/descriptive" />}
      >
        <ChevronLeft className="size-3.5" />
        Back to descriptive
      </Button>

      <section className="relative overflow-hidden rounded-2xl border border-border/60 bg-gradient-to-br from-card via-card to-primary/[0.04] p-6 sm:p-8 lg:p-10">
        <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />
        <div className="relative">
          <div className="mb-4 flex flex-wrap items-center gap-2">
            <Badge className="bg-primary/10 text-primary border-primary/20">
              <Sparkles className="mr-1 size-3" />
              Cambridge IGCSE
            </Badge>
            <Badge variant="secondary">Technique 3 of 5</Badge>
          </div>
          <h1 className="text-display-sm font-heading text-foreground sm:text-display">
            Describing a scene
          </h1>
          <p className="mt-3 max-w-2xl text-body-lg text-muted-foreground">
            The cinematic zoom is the simplest reliable structure for a
            descriptive composition. Start wide, move closer, hold on a single
            detail, then pull back. It gives your piece shape without
            requiring plot.
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="rounded-2xl border border-border/60 bg-muted/30 p-6">
        <div className="mb-3 flex items-center gap-3">
          <Camera className="size-5 text-primary" />
          <h2 className="text-heading-md font-heading text-foreground">
            The four-shot structure
          </h2>
        </div>
        <p className="text-body-sm text-muted-foreground">
          Think of your description as a four-shot sequence in a film:{' '}
          <strong className="text-foreground">wide → mid → close →
          inner</strong>. Each stage has a different job, a different length
          and a different level of detail. The reader should feel the camera
          moving.
        </p>
      </section>

      {/* Stages */}
      <section className="space-y-4">
        {zoomStages.map((z, i) => (
          <Card key={z.stage}>
            <CardHeader>
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-sm font-bold text-primary">
                    {i + 1}
                  </div>
                  <CardTitle className="text-heading-sm font-heading">
                    {z.stage}
                  </CardTitle>
                </div>
                <Badge variant="secondary">{z.length}</Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4 text-body-sm text-muted-foreground">
              <p className="leading-relaxed">{z.description}</p>
              <div className="rounded-lg border border-border/60 bg-primary/5 p-4">
                <p className="text-body-xs font-semibold uppercase tracking-wide text-primary">
                  Example
                </p>
                <p className="mt-2 italic text-foreground">
                  &ldquo;{z.example}&rdquo;
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </section>

      {/* Alternative structures */}
      <section>
        <div className="mb-5 flex items-center gap-3">
          <Layers className="size-5 text-primary" />
          <h2 className="text-heading-lg font-heading text-foreground">
            Alternative structures
          </h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="text-heading-sm font-heading">
                Time shift
              </CardTitle>
            </CardHeader>
            <CardContent className="text-body-sm text-muted-foreground space-y-2">
              <p>
                Describe the same place at two different times — dawn and
                dusk, summer and winter, before and after a storm. The
                contrast does your structural work for you.
              </p>
              <p className="text-foreground">
                <em>Best for:</em> beaches, streets, gardens, rooms.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-heading-sm font-heading">
                Walking tour
              </CardTitle>
            </CardHeader>
            <CardContent className="text-body-sm text-muted-foreground space-y-2">
              <p>
                Move the narrator physically through the scene — a door, a
                hallway, a courtyard, a balcony. Each paragraph is a new
                space. Keep the narrator silent; let the setting speak.
              </p>
              <p className="text-foreground">
                <em>Best for:</em> houses, castles, abandoned buildings.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-heading-sm font-heading">
                Weather frame
              </CardTitle>
            </CardHeader>
            <CardContent className="text-body-sm text-muted-foreground space-y-2">
              <p>
                The weather changes from paragraph one to paragraph four. A
                sunny opening gives way to storm, or fog lifts to reveal the
                view. Weather carries the mood shift.
              </p>
              <p className="text-foreground">
                <em>Best for:</em> landscapes, coasts, fields.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-heading-sm font-heading">
                Observer pair
              </CardTitle>
            </CardHeader>
            <CardContent className="text-body-sm text-muted-foreground space-y-2">
              <p>
                Two characters observe the same scene. Describe only through
                their reactions — one delighted, one bored; one remembering,
                one forgetting. Character becomes description.
              </p>
              <p className="text-foreground">
                <em>Best for:</em> markets, festivals, family occasions.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Opening and closing rules */}
      <section className="rounded-2xl border border-border/60 bg-card p-6 sm:p-8">
        <h2 className="text-heading-md font-heading text-foreground">
          Opening and closing rules
        </h2>
        <ul className="mt-4 space-y-3 text-body-sm text-muted-foreground">
          <li className="flex gap-3">
            <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
            <span>
              <strong className="text-foreground">Do not open with the
              weather</strong> unless the weather is your whole piece. Open
              on a specific, unexpected detail.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
            <span>
              <strong className="text-foreground">Do not open with &ldquo;It
              was a...&rdquo;</strong> Examiners see thousands of these. Start
              mid-image.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
            <span>
              <strong className="text-foreground">Echo the opening in the
              final line.</strong> Not the same words — the same image,
              changed. This single move reads as &ldquo;crafted shape&rdquo;
              on any mark scheme.
            </span>
          </li>
        </ul>
      </section>
    </div>
  )
}
