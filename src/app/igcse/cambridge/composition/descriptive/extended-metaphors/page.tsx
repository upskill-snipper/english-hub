import type { Metadata } from 'next'
import Link from 'next/link'
import { Palette, Sparkles, ChevronLeft } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { requireIgcseBoard } from '@/app/igcse/_lib/guard'

export const metadata: Metadata = {
  title: 'Extended Metaphors — Cambridge IGCSE Descriptive Writing',
  description:
    'How to build, sustain and evolve an extended metaphor for Cambridge IGCSE descriptive composition, with worked examples and controlling-image patterns.',
  alternates: {
    canonical:
      'https://theenglishhub.app/igcse/cambridge/composition/descriptive/extended-metaphors',
  },
}

const controllingImages = [
  {
    subject: 'A crowded city at rush hour',
    image: 'a living animal',
    lines: [
      'The city inhaled at eight and held its breath.',
      'Commuters flooded the arteries of Victoria Station, platelets in a grey bloodstream.',
      'By nine, the great creature had swallowed its meal and gone still again.',
    ],
  },
  {
    subject: 'A thunderstorm',
    image: 'an orchestra tuning, then playing',
    lines: [
      'The wind practised its scales first, tuneless and hesitant, high in the wires.',
      'Thunder took up its part, low brass, impatient.',
      'Then the rain came in on the downbeat, violins and cymbals together, and the street became the stage.',
    ],
  },
  {
    subject: 'An empty classroom',
    image: 'an abandoned theatre',
    lines: [
      'The chalkboard was the rear curtain, still marked with the last lines the cast had spoken.',
      'Twenty empty chairs faced the stage in expectant rows.',
      'Only the dust, catching the last of the afternoon light, was still performing.',
    ],
  },
]

export default async function ExtendedMetaphorsPage() {
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
            <Badge variant="secondary">Technique 2 of 5</Badge>
          </div>
          <h1 className="text-display-sm font-heading text-foreground sm:text-display">
            Extended metaphors
          </h1>
          <p className="mt-3 max-w-2xl text-body-lg text-muted-foreground">
            One-off metaphors decorate a description. An{' '}
            <strong className="text-foreground">extended metaphor</strong>{' '}
            holds the whole piece together. Cambridge examiners describe
            top-band work as &ldquo;sustained&rdquo; and &ldquo;controlled&rdquo;
            — sustained is what a good extended metaphor provides.
          </p>
        </div>
      </section>

      {/* Step 1 */}
      <Card>
        <CardHeader>
          <CardTitle className="text-heading-sm font-heading">
            Step 1 — Choose a controlling image
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3 text-body-sm text-muted-foreground">
          <p>
            Before you write, answer this question: <em>If the scene I am
            describing were something else, what would it be?</em>
          </p>
          <p>
            Good controlling images share three properties. They are{' '}
            <strong className="text-foreground">concrete</strong> (you can
            picture them), <strong className="text-foreground">dynamic</strong>{' '}
            (they can change or move), and{' '}
            <strong className="text-foreground">emotionally flexible</strong>{' '}
            (they can feel hopeful or sinister depending on how you steer
            them).
          </p>
          <ul className="list-disc space-y-1 pl-5">
            <li>A city as a living animal</li>
            <li>A beach as an abandoned room</li>
            <li>A storm as an orchestra</li>
            <li>A forest as a cathedral</li>
            <li>A market as a river</li>
          </ul>
        </CardContent>
      </Card>

      {/* Step 2 */}
      <Card>
        <CardHeader>
          <CardTitle className="text-heading-sm font-heading">
            Step 2 — Return to the image, don&rsquo;t repeat it
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3 text-body-sm text-muted-foreground">
          <p>
            A weak extended metaphor keeps saying the same thing. A strong
            extended metaphor evolves. If the city is an animal, it first{' '}
            <em>wakes</em>, then <em>breathes</em>, then <em>feeds</em>, then{' '}
            <em>dreams</em>. The image is the same. The verb is different.
          </p>
          <p>
            A useful test: can a reader identify your controlling image by
            paragraph 2 without the word itself being repeated?
          </p>
        </CardContent>
      </Card>

      {/* Step 3 */}
      <Card>
        <CardHeader>
          <CardTitle className="text-heading-sm font-heading">
            Step 3 — Invert the image at the end
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3 text-body-sm text-muted-foreground">
          <p>
            The single move that separates Band 4 from Band 5 in examiner
            reports is <strong className="text-foreground">returning to the
            opening image and changing it</strong>. If the city began as an
            animal waking, let it end as an animal falling back to sleep. The
            scene has moved, but the image remembers where it started.
          </p>
        </CardContent>
      </Card>

      {/* Worked examples */}
      <section>
        <div className="mb-5 flex items-center gap-3">
          <Palette className="size-5 text-primary" />
          <h2 className="text-heading-lg font-heading text-foreground">
            Three worked examples
          </h2>
        </div>
        <div className="grid gap-4 lg:grid-cols-3">
          {controllingImages.map((c) => (
            <Card key={c.subject}>
              <CardHeader>
                <CardTitle className="text-heading-sm font-heading leading-tight">
                  {c.subject}
                </CardTitle>
                <p className="text-body-xs uppercase tracking-wide text-muted-foreground">
                  as {c.image}
                </p>
              </CardHeader>
              <CardContent>
                <ol className="space-y-3 text-body-sm text-foreground">
                  {c.lines.map((l, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="mt-0.5 size-5 shrink-0 rounded-full bg-primary/10 text-center text-[11px] font-semibold leading-5 text-primary">
                        {i + 1}
                      </span>
                      <span className="italic">&ldquo;{l}&rdquo;</span>
                    </li>
                  ))}
                </ol>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Warnings */}
      <section className="rounded-2xl border border-border/60 bg-card p-6 sm:p-8">
        <h2 className="text-heading-md font-heading text-foreground">
          Common traps
        </h2>
        <ul className="mt-4 space-y-3 text-body-sm text-muted-foreground">
          <li className="flex gap-3">
            <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
            <span>
              <strong className="text-foreground">Mixed metaphors.</strong>{' '}
              Don&rsquo;t let the city be an animal in paragraph one and then
              an engine in paragraph two. Pick one and commit.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
            <span>
              <strong className="text-foreground">Over-explaining.</strong>{' '}
              You do not need to write &ldquo;it was like an animal&rdquo;
              every time. Trust the reader — use verbs and nouns that belong
              to the image.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
            <span>
              <strong className="text-foreground">Clichés.</strong> The heart
              as a prison, tears as rivers, life as a journey. Any image your
              classmates will also use is worth replacing.
            </span>
          </li>
        </ul>
      </section>
    </div>
  )
}
