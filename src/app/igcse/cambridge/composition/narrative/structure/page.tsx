import type { Metadata } from 'next'
import Link from 'next/link'
import { ScrollText, Sparkles, ChevronLeft } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { requireIgcseBoard } from '@/app/igcse/_lib/guard'

export const metadata: Metadata = {
  title: 'Narrative Structure — Cambridge IGCSE Composition',
  description:
    'Structure a Cambridge IGCSE narrative composition using the five-part arc, Freytag’s triangle, in medias res openings and cliff-turn endings.',
  alternates: {
    canonical:
      'https://theenglishhub.app/igcse/cambridge/composition/narrative/structure',
  },
}

const fivePart = [
  {
    name: '1. Opening image',
    length: '~50 words',
    description:
      'One vivid detail that plants the reader inside the scene. Not backstory, not explanation — a sensory anchor. Often a physical object or a character action mid-flow.',
    example:
      'The envelope had been sitting on the kitchen counter for three days.',
  },
  {
    name: '2. Rising tension',
    length: '~100 words',
    description:
      'Introduce the narrator’s problem and raise the stakes quickly. The reader should know by the end of this block what the story is really about.',
    example:
      'The narrator reaches for the envelope twice and pulls back each time. Her hand shakes. She makes tea to avoid it.',
  },
  {
    name: '3. Turning point',
    length: '~100 words',
    description:
      'Something tips. A decision is made, a door opens, an interruption arrives. This is the hinge — everything before points towards it, everything after flows from it.',
    example:
      'The phone rings. Her brother’s voice: “You got it too, didn’t you?”',
  },
  {
    name: '4. Consequence',
    length: '~150 words',
    description:
      'Show what the turning point means — in body language, in speech, in thought. This is where the character changes. The setting may stay the same; the person in it is different.',
    example:
      'She opens the envelope. The news is better than she feared. Slowly, she sits down, and notices the rain outside has stopped.',
  },
  {
    name: '5. Closing image',
    length: '~50 words',
    description:
      'Return to an object or image from the opening, but changed. Leave the reader with a quiet, lingering detail — not a moral, not a summary.',
    example:
      'She folded the letter twice and placed it, gently, back on the counter where it had been waiting.',
  },
]

const openings = [
  {
    name: 'In medias res',
    description:
      'Begin in the middle of the action — mid-sentence, mid-gesture, mid-argument. The reader is dropped in and has to catch up. Best for stories about sudden events.',
    example:
      'By the time I reached the river, the dog was already in the water.',
  },
  {
    name: 'Dialogue first',
    description:
      'Open on a single line of speech with no attribution. Creates instant voice and instant questions. Risky if overused, powerful if committed to.',
    example:
      '“Don’t look yet,” she whispered. “Wait until they’re both looking the other way.”',
  },
  {
    name: 'Image first',
    description:
      'A single striking sentence that is not yet action. A scene-setter that suggests a mood. Works well for reflective or atmospheric stories.',
    example:
      'The fire alarm had been ringing somewhere in the building for twenty minutes, and nobody seemed to care.',
  },
  {
    name: 'Question first',
    description:
      'Open on the narrator asking themselves a question — often about a decision they’ve just made. Gives immediate interiority.',
    example:
      'What had I been thinking, telling him I’d meet him here?',
  },
]

export default async function NarrativeStructurePage() {
  await requireIgcseBoard(['cambridge-0500', 'cambridge-0990'])

  return (
    <div className="space-y-10 pb-16">
      <Button
        variant="ghost"
        size="sm"
        render={<Link href="/igcse/cambridge/composition/narrative" />}
      >
        <ChevronLeft className="size-3.5" />
        Back to narrative
      </Button>

      <section className="relative overflow-hidden rounded-2xl border border-border/60 bg-gradient-to-br from-card via-card to-primary/[0.04] p-6 sm:p-8 lg:p-10">
        <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />
        <div className="relative">
          <div className="mb-4 flex flex-wrap items-center gap-2">
            <Badge className="bg-primary/10 text-primary border-primary/20">
              <Sparkles className="mr-1 size-3" />
              Cambridge IGCSE
            </Badge>
            <Badge variant="secondary">Technique 1 of 4</Badge>
          </div>
          <h1 className="text-display-sm font-heading text-foreground sm:text-display">
            Story structure
          </h1>
          <p className="mt-3 max-w-2xl text-body-lg text-muted-foreground">
            A 450-word short story has no time for a full novel arc. Use a
            compressed five-part structure, drop in using{' '}
            <em>in medias res</em>, and make every paragraph earn its place.
          </p>
        </div>
      </section>

      <Card>
        <CardHeader>
          <CardTitle className="text-heading-sm font-heading">
            Freytag’s triangle, simplified
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3 text-body-sm text-muted-foreground">
          <p>
            Gustav Freytag’s triangle was designed for five-act plays but it
            adapts perfectly to short stories if you compress it. Exposition
            becomes <em>one line of setting</em>. Rising action becomes{' '}
            <em>one obstacle</em>. Climax is <em>one moment</em>. Falling
            action is <em>one consequence</em>. Resolution is{' '}
            <em>one quiet closing image</em>. Five beats, each tiny, each
            essential.
          </p>
        </CardContent>
      </Card>

      <section>
        <div className="mb-5 flex items-center gap-3">
          <ScrollText className="size-5 text-primary" />
          <h2 className="text-heading-lg font-heading text-foreground">
            The five-part arc (450 words)
          </h2>
        </div>
        <div className="space-y-4">
          {fivePart.map((p, i) => (
            <Card key={p.name}>
              <CardHeader>
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-sm font-bold text-primary">
                      {i + 1}
                    </div>
                    <CardTitle className="text-heading-sm font-heading">
                      {p.name}
                    </CardTitle>
                  </div>
                  <Badge variant="secondary">{p.length}</Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-3 text-body-sm text-muted-foreground">
                <p className="leading-relaxed">{p.description}</p>
                <div className="rounded-lg border border-border/60 bg-primary/5 p-4">
                  <p className="italic text-foreground">“{p.example}”</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-heading-lg font-heading text-foreground">
          Four opening techniques
        </h2>
        <div className="mt-5 grid gap-4 sm:grid-cols-2">
          {openings.map((o) => (
            <Card key={o.name}>
              <CardHeader>
                <CardTitle className="text-heading-sm font-heading">
                  {o.name}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-body-sm text-muted-foreground">
                <p className="leading-relaxed">{o.description}</p>
                <p className="rounded-lg border border-border/60 bg-muted/40 p-3 italic text-foreground">
                  “{o.example}”
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="rounded-2xl border border-border/60 bg-card p-6 sm:p-8">
        <h2 className="text-heading-md font-heading text-foreground">
          How to end
        </h2>
        <ul className="mt-4 space-y-3 text-body-sm text-muted-foreground">
          <li className="flex gap-3">
            <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
            <span>
              <strong className="text-foreground">Echo the opening
              image.</strong> Not the same sentence. The same object or
              place, now different.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
            <span>
              <strong className="text-foreground">End on an action, not
              a reflection.</strong> Let the reader feel the meaning instead
              of being told it.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
            <span>
              <strong className="text-foreground">Avoid “and then I woke
              up”.</strong> Examiners have read ten thousand of them. Same
              for “it was all a dream” and “then the teacher walked in”.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
            <span>
              <strong className="text-foreground">Cut the last
              sentence.</strong> Write your ending, then delete the final
              sentence. Nine times out of ten, the story is stronger without
              it.
            </span>
          </li>
        </ul>
      </section>
    </div>
  )
}
