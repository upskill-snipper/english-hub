import type { Metadata } from 'next'
import Link from 'next/link'
import { Eye, Ear, Wind, Hand, Soup, Sparkles, ChevronLeft } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { requireIgcseBoard } from '@/app/igcse/_lib/guard'

export const metadata: Metadata = {
  title: 'Sensory Language — Cambridge IGCSE Descriptive Writing',
  description:
    'Cambridge IGCSE descriptive writing: how to use all five senses — sight, sound, smell, touch, taste — to build immersive description.',
  alternates: {
    canonical:
      'https://theenglishhub.app/igcse/cambridge/composition/descriptive/sensory-language',
  },
}

const senses = [
  {
    name: 'Sight',
    icon: Eye,
    description:
      'The default sense. Most students stay here for the whole piece. To stand out, look for the unusual: colours, patterns, movement, light quality, negative space.',
    weak: 'The sun was shining and the sky was blue.',
    strong:
      'Sunlight fell in uneven slabs across the courtyard, turning the pale stone a bruised gold wherever the shadows of the fig tree did not reach.',
    why: 'Specific colours ("bruised gold"), specific light quality ("uneven slabs"), and a named detail ("fig tree") replace generic sky-and-sun cliché.',
  },
  {
    name: 'Sound',
    icon: Ear,
    description:
      'The fastest upgrade. Sound makes a scene feel present. Mix named sounds with absences — silence is also a sound.',
    weak: 'It was very loud in the market.',
    strong:
      'The market ran on a thousand overlapping noises: the slap of fish on wet slate, the hiss of oil, a radio two stalls over stuttering between stations, and underneath it all the low mutter of haggling.',
    why: 'Four distinct sound sources, layered from sharp to low. The list form mimics the chaos itself.',
  },
  {
    name: 'Smell',
    icon: Wind,
    description:
      'The memory sense. Smell is rarely used, so even one line of scent description impresses examiners. It should usually carry an emotional charge.',
    weak: 'It smelled bad in the alleyway.',
    strong:
      'The alley smelled of old rain and frying onions, a home-sickness I had not asked for, sharp enough to stop me in the doorway.',
    why: 'Two named smells combined with an emotional consequence — the smell acts on the narrator, not just describes the air.',
  },
  {
    name: 'Touch',
    icon: Hand,
    description:
      'Use touch for texture and temperature, and for the body\u2019s involuntary responses: goosebumps, sweat, a shiver. It grounds the reader inside the narrator\u2019s body.',
    weak: 'The wind was cold.',
    strong:
      'The wind came off the sea in flat, metallic slaps that set my teeth aching and pushed the fabric of my coat hard against my ribs.',
    why: 'Temperature is implied, not stated. The wind has texture ("flat, metallic slaps") and a physical effect on the body.',
  },
  {
    name: 'Taste',
    icon: Soup,
    description:
      'The rarest sense in student writing and therefore the most distinctive when used well. Taste does not have to mean eating — air, rain, fear and blood all have taste.',
    weak: 'I was scared.',
    strong:
      'Fear had a taste I had forgotten about: tin foil and old coins, gathering at the back of my tongue.',
    why: 'Converts an abstract emotion ("fear") into a concrete physical sensation, using two precise comparisons.',
  },
]

export default async function SensoryLanguagePage() {
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
            <Badge variant="secondary">Technique 1 of 5</Badge>
          </div>
          <h1 className="text-display-sm font-heading text-foreground sm:text-display">
            Sensory language
          </h1>
          <p className="mt-3 max-w-2xl text-body-lg text-muted-foreground">
            The single most reliable way to push a descriptive composition out
            of the middle band is to use more than one sense per paragraph.
            Most students describe what they see. Top-band writers describe
            what they hear, smell, feel and taste too.
          </p>
        </div>
      </section>

      <section className="rounded-2xl border border-border/60 bg-muted/30 p-6">
        <h2 className="text-heading-md font-heading text-foreground">
          The rule of two senses per paragraph
        </h2>
        <p className="mt-3 text-body-sm text-muted-foreground">
          Read any paragraph you have written. If only the sense of{' '}
          <em>sight</em> appears, add one more — ideally one of the less-used
          three (smell, touch, taste). You do not need every sense in every
          paragraph; you need at least two.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-heading-lg font-heading text-foreground">
          The five senses in action
        </h2>
        {senses.map((s) => {
          const Icon = s.icon
          return (
            <Card key={s.name}>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10">
                    <Icon className="size-5 text-primary" />
                  </div>
                  <CardTitle className="text-heading-sm font-heading">
                    {s.name}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-body-sm text-muted-foreground leading-relaxed">
                  {s.description}
                </p>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-lg border border-border/60 bg-destructive/5 p-4">
                    <p className="text-body-xs font-semibold uppercase tracking-wide text-destructive">
                      Weak
                    </p>
                    <p className="mt-2 text-body-sm italic text-foreground">
                      “{s.weak}”
                    </p>
                  </div>
                  <div className="rounded-lg border border-border/60 bg-primary/5 p-4">
                    <p className="text-body-xs font-semibold uppercase tracking-wide text-primary">
                      Strong
                    </p>
                    <p className="mt-2 text-body-sm italic text-foreground">
                      “{s.strong}”
                    </p>
                  </div>
                </div>
                <div className="rounded-lg border border-border/60 bg-muted/40 p-4">
                  <p className="text-body-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    Why it works
                  </p>
                  <p className="mt-2 text-body-sm text-foreground">{s.why}</p>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </section>

      <section className="rounded-2xl border border-border/60 bg-card p-6 sm:p-8">
        <h2 className="text-heading-md font-heading text-foreground">
          Synesthesia: mixing senses
        </h2>
        <p className="mt-3 text-body-sm text-muted-foreground leading-relaxed">
          Once you are comfortable using all five senses, try{' '}
          <strong className="text-foreground">synesthesia</strong> — describing
          one sense in the vocabulary of another. A <em>sharp</em> light, a{' '}
          <em>loud</em> colour, a <em>metallic</em> silence. Used sparingly,
          synesthesia is a clear marker of sophisticated descriptive writing.
        </p>
        <div className="mt-4 rounded-lg border border-border/60 bg-primary/5 p-4">
          <p className="text-body-sm italic text-foreground">
            “The bell rang out a bruise-purple sound across the empty yard, low
            enough to taste.”
          </p>
        </div>
      </section>

      <section className="rounded-2xl border border-border/60 bg-card p-6 sm:p-8">
        <h2 className="text-heading-md font-heading text-foreground">
          Quick exercise
        </h2>
        <p className="mt-3 text-body-sm text-muted-foreground">
          Write three sentences describing the inside of a bakery at 6 a.m.
          Use a different sense in each sentence, and do not use the word{' '}
          <em>smell</em>. Aim for specific nouns, not adjectives.
        </p>
      </section>
    </div>
  )
}
