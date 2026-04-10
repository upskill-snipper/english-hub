import type { Metadata } from 'next'
import Link from 'next/link'
import { Zap, Sparkles, ChevronLeft } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { requireIgcseBoard } from '@/app/igcse/_lib/guard'

export const metadata: Metadata = {
  title: 'Tension and Pacing — Cambridge IGCSE Narrative Writing',
  description:
    'Build tension and control pacing in a Cambridge IGCSE short story. Withhold information, use short sentences, interruptions, and credible cliffhangers.',
  alternates: {
    canonical:
      'https://theenglishhub.app/igcse/cambridge/composition/narrative/tension',
  },
}

const techniques = [
  {
    name: '1. Withhold information',
    summary:
      'The reader knows something is wrong, but not exactly what. Reveal in layers.',
    detail:
      'The narrator sees something. The reader does not. Or the narrator knows a secret and refuses to name it. Tension lives in the gap between what is known and what is said.',
    example:
      'I had been expecting the knock. I had just not been expecting it so early.',
  },
  {
    name: '2. Short sentences',
    summary:
      'Long sentences during calm. Short sentences as tension rises. Single-word sentences at the peak.',
    detail:
      'Pacing is rhythm. Read your piece aloud — if you take the same breath at every full stop, the rhythm is flat. Vary sentence length deliberately to control how fast the reader moves through the scene.',
    example:
      'I took the stairs slowly, one at a time, listening. The house was completely still. Then a floorboard creaked above me. Close. Too close.',
  },
  {
    name: '3. Physical detail over emotion',
    summary:
      'Do not write “I was scared”. Write what fear does to your body.',
    detail:
      'Sweat, dry mouth, pounding ears, shaking hands, tunnel vision. These ground fear in a body the reader also has. Emotions named directly land flatter than emotions shown through the body.',
    example:
      'My mouth tasted of old coins. I counted the breaths I was pretending not to hold.',
  },
  {
    name: '4. Interruptions',
    summary:
      'Something or someone cuts a scene off just before a resolution. The question hangs.',
    detail:
      'A door opens before the character can finish a sentence. A phone rings. A train arrives. An interruption forces the reader to sit with the unresolved question — that discomfort is tension.',
    example:
      '“I need to tell you something,” she began. Then the lights cut out, and we were both listening to the same silence.',
  },
  {
    name: '5. The ticking clock',
    summary: 'A deadline, explicit or implied, the reader cannot forget.',
    detail:
      'The bus leaves in ten minutes. The tide will be in by dark. The phone will ring again. Even a very small clock turns every paragraph into a countdown.',
    example:
      'The church bell rang the quarter-hour. I had four more minutes to decide what I was going to say.',
  },
]

const badTension = [
  {
    name: 'Over-explaining fear',
    bad: 'I was so scared. I was terrified. I had never been so frightened in all my life.',
    why: 'Three sentences all say the same thing. The reader stops believing it.',
  },
  {
    name: 'Melodrama',
    bad: 'Suddenly, a terrifying, horrifying, blood-curdling scream echoed through the dead silence of the night.',
    why: 'Too many adjectives. Over-the-top vocabulary undermines itself.',
  },
  {
    name: 'Random cliffhanger',
    bad: 'And then, just as I thought it was over, a hand grabbed my shoulder.',
    why: 'A shock without setup isn\u2019t tension, it\u2019s a jump scare. Build to it.',
  },
]

export default async function TensionPage() {
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
            <Badge variant="secondary">Technique 4 of 4</Badge>
          </div>
          <h1 className="text-display-sm font-heading text-foreground sm:text-display">
            Tension and pacing
          </h1>
          <p className="mt-3 max-w-2xl text-body-lg text-muted-foreground">
            Tension is not horror. Tension is a question the reader cannot
            stop thinking about, kept alive sentence by sentence. These five
            techniques are the most reliable ways to build it.
          </p>
        </div>
      </section>

      <section className="space-y-4">
        {techniques.map((t) => (
          <Card key={t.name}>
            <CardHeader>
              <div className="flex items-center gap-3">
                <Zap className="size-5 text-primary" />
                <CardTitle className="text-heading-sm font-heading">
                  {t.name}
                </CardTitle>
              </div>
              <p className="pt-2 text-body-sm text-foreground">{t.summary}</p>
            </CardHeader>
            <CardContent className="space-y-3 text-body-sm text-muted-foreground">
              <p className="leading-relaxed">{t.detail}</p>
              <div className="rounded-lg border border-border/60 bg-primary/5 p-4">
                <p className="text-body-xs font-semibold uppercase tracking-wide text-primary">
                  Example
                </p>
                <p className="mt-2 italic text-foreground">“{t.example}”</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </section>

      {/* Pacing */}
      <Card>
        <CardHeader>
          <CardTitle className="text-heading-sm font-heading">
            Pacing: speed up, slow down
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3 text-body-sm text-muted-foreground">
          <p>
            A story at a single pace exhausts the reader. A story that speeds
            and slows keeps them moving. As a rough rule:
          </p>
          <ul className="list-disc space-y-1 pl-5">
            <li>
              <strong className="text-foreground">Slow</strong> for the
              build-up, with longer sentences, sensory detail and careful
              observation.
            </li>
            <li>
              <strong className="text-foreground">Fast</strong> at the
              turning point, with short sentences, strong verbs and little
              adjective padding.
            </li>
            <li>
              <strong className="text-foreground">Slow again</strong> for the
              consequence and closing image.
            </li>
          </ul>
          <p>
            A useful trick: count the words in your turning-point paragraph.
            If it\u2019s longer than your opening paragraph, it\u2019s
            probably too slow.
          </p>
        </CardContent>
      </Card>

      {/* Melodrama warning */}
      <section>
        <h2 className="text-heading-lg font-heading text-foreground">
          Three tension mistakes
        </h2>
        <div className="mt-5 grid gap-4 md:grid-cols-3">
          {badTension.map((b) => (
            <Card key={b.name}>
              <CardHeader>
                <CardTitle className="text-heading-sm font-heading">
                  {b.name}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-body-sm text-muted-foreground">
                <div className="rounded-lg border border-border/60 bg-destructive/5 p-3">
                  <p className="italic text-foreground">“{b.bad}”</p>
                </div>
                <p>{b.why}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  )
}
