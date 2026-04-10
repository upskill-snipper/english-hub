import type { Metadata } from 'next'
import Link from 'next/link'
import { Users, Sparkles, ChevronLeft } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'Character Creation — Cambridge IGCSE Narrative Writing',
  description:
    'Build rounded characters fast in a Cambridge IGCSE short story. Show-don’t-tell, the iceberg principle, contradictions and the two-sentence sketch.',
  alternates: {
    canonical:
      'https://theenglishhub.app/igcse/cambridge/composition/narrative/character',
  },
}

const showDontTell = [
  {
    tell: 'Sara was nervous.',
    show: 'Sara smoothed the same corner of the tablecloth over and over until the cotton squeaked.',
  },
  {
    tell: 'He was kind.',
    show: 'He took the mug from me without being asked, rinsed it, and set it back on the shelf with the handle facing out.',
  },
  {
    tell: 'My grandfather was very old.',
    show: 'My grandfather moved the way a cathedral bell moves: slow, measured, and with a bit of distant ringing in between.',
  },
  {
    tell: 'She was angry with her brother.',
    show: 'When her brother spoke, she kept her eyes on her phone, but her thumb had stopped scrolling ten seconds ago.',
  },
  {
    tell: 'The teacher was strict.',
    show: 'The teacher closed the door at 08:59 exactly, and did not open it for anyone after.',
  },
]

export default function CharacterPage() {
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
            <Badge variant="secondary">Technique 2 of 4</Badge>
          </div>
          <h1 className="text-display-sm font-heading text-foreground sm:text-display">
            Character creation
          </h1>
          <p className="mt-3 max-w-2xl text-body-lg text-muted-foreground">
            In 450 words you cannot describe a character from the outside in.
            You have to let them act, speak and choose — and the reader will
            fill in the rest.
          </p>
        </div>
      </section>

      {/* Iceberg */}
      <Card>
        <CardHeader>
          <CardTitle className="text-heading-sm font-heading">
            The iceberg principle
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3 text-body-sm text-muted-foreground">
          <p>
            Hemingway called it the iceberg theory: what the reader sees on
            the page is only the tip. The mass of the character —
            background, regrets, desires — lives beneath the surface. The
            writer has to know it; the reader only has to feel it.
          </p>
          <p>
            Before you write, answer three questions for your main character:
          </p>
          <ul className="list-disc space-y-1 pl-5">
            <li>
              <strong className="text-foreground">What do they want in this
              scene?</strong>
            </li>
            <li>
              <strong className="text-foreground">What are they hiding?</strong>
            </li>
            <li>
              <strong className="text-foreground">What one object belongs
              to them?</strong>
            </li>
          </ul>
          <p>
            You will probably use only the object in the finished story. The
            other two steer every choice they make on the page.
          </p>
        </CardContent>
      </Card>

      {/* Show don't tell */}
      <section>
        <div className="mb-5 flex items-center gap-3">
          <Users className="size-5 text-primary" />
          <h2 className="text-heading-lg font-heading text-foreground">
            Show, don’t tell
          </h2>
        </div>
        <p className="mb-4 max-w-3xl text-body-sm text-muted-foreground">
          The single most repeated piece of advice in narrative writing — and
          the one examiners most frequently note is missing from the middle
          band. Replace a label with a specific action, object or gesture.
        </p>
        <div className="space-y-3">
          {showDontTell.map((e, i) => (
            <Card key={i}>
              <CardContent className="grid gap-4 p-5 sm:grid-cols-2">
                <div className="rounded-lg border border-border/60 bg-destructive/5 p-4">
                  <p className="text-body-xs font-semibold uppercase tracking-wide text-destructive">
                    Tell
                  </p>
                  <p className="mt-2 text-body-sm italic text-foreground">
                    “{e.tell}”
                  </p>
                </div>
                <div className="rounded-lg border border-border/60 bg-primary/5 p-4">
                  <p className="text-body-xs font-semibold uppercase tracking-wide text-primary">
                    Show
                  </p>
                  <p className="mt-2 text-body-sm italic text-foreground">
                    “{e.show}”
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Contradiction */}
      <Card>
        <CardHeader>
          <CardTitle className="text-heading-sm font-heading">
            Give them a contradiction
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3 text-body-sm text-muted-foreground">
          <p>
            A flat character wants one thing. A rounded character wants two
            things that cannot both be true at once. A girl who wants to be
            brave but is afraid of her grandmother. A man who loves his dog
            but hates being touched. The story lives in the gap between the
            two halves.
          </p>
          <div className="rounded-lg border border-border/60 bg-primary/5 p-4">
            <p className="text-body-xs font-semibold uppercase tracking-wide text-primary">
              Example
            </p>
            <p className="mt-2 text-body-sm italic text-foreground">
              “He said he hated surprises, but he checked the window every
              time a car slowed down.”
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Interior monologue */}
      <Card>
        <CardHeader>
          <CardTitle className="text-heading-sm font-heading">
            Interior monologue
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3 text-body-sm text-muted-foreground">
          <p>
            Thoughts on the page can be italicised, direct, or indirect. Pick
            one method and stick to it. A single sentence of interior thought
            in the right place is worth five sentences of description.
          </p>
          <div className="grid gap-3 sm:grid-cols-3">
            <div className="rounded-lg border border-border/60 bg-muted/40 p-3">
              <p className="text-body-xs font-semibold text-foreground">
                Italicised
              </p>
              <p className="mt-1 text-body-xs italic text-muted-foreground">
                <em>Not today. Please not today.</em>
              </p>
            </div>
            <div className="rounded-lg border border-border/60 bg-muted/40 p-3">
              <p className="text-body-xs font-semibold text-foreground">
                Direct
              </p>
              <p className="mt-1 text-body-xs italic text-muted-foreground">
                She thought: I can still turn around.
              </p>
            </div>
            <div className="rounded-lg border border-border/60 bg-muted/40 p-3">
              <p className="text-body-xs font-semibold text-foreground">
                Indirect (free)
              </p>
              <p className="mt-1 text-body-xs italic text-muted-foreground">
                She could still turn around. Nobody had seen her yet.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Two-sentence sketch */}
      <section className="rounded-2xl border border-border/60 bg-card p-6 sm:p-8">
        <h2 className="text-heading-md font-heading text-foreground">
          The two-sentence sketch
        </h2>
        <p className="mt-3 text-body-sm text-muted-foreground">
          A useful rehearsal. Introduce a character in exactly two sentences.
          The first gives a physical detail that implies personality. The
          second gives an action that contradicts, extends or confirms it.
        </p>
        <div className="mt-4 rounded-lg border border-border/60 bg-primary/5 p-4">
          <p className="text-body-sm italic text-foreground">
            “Mrs Hadley wore the same grey cardigan every day of the year, a
            cardigan the colour of a pigeon she had clearly never cared for.
            When she laughed — which was rarely — she laughed the way other
            people sneeze, suddenly and with some embarrassment.”
          </p>
        </div>
      </section>
    </div>
  )
}
