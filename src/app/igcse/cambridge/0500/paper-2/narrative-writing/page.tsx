import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ChevronLeft,
  ScrollText,
  Users,
  MessageCircle,
  Target,
  Lightbulb,
} from 'lucide-react'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { requireIgcseBoard } from '@/app/igcse/_lib/guard'

export const metadata: Metadata = {
  title: 'Narrative Writing — IGCSE Language A Paper 2 Section B',
  description:
    'How to write a top-mark narrative composition for IGCSE Language A Paper 2. Story structure, character, dialogue and worked example. Aligns with Cambridge syllabus 0500.',
  alternates: {
    canonical:
      'https://theenglishhub.app/igcse/cambridge/0500/paper-2/narrative-writing',
  },
}

const structure = [
  {
    stage: 'Exposition (about 20%)',
    detail:
      'Open in the middle of a moment. Establish character, setting and mood with small, specific detail rather than a life story.',
    tip: 'Start with a line of dialogue, a vivid action or a small sensory detail — never with "Hi, my name is...".',
  },
  {
    stage: 'Inciting incident (about 15%)',
    detail:
      'Something changes. A message arrives, a door opens, a decision is made. The story tilts.',
    tip: 'Make the change small but undeniable. A dropped phone can change a life.',
  },
  {
    stage: 'Rising action (about 30%)',
    detail:
      'Complications stack up. The character commits further and options narrow.',
    tip: 'One or two complications is enough — do not crowd the word count with plot.',
  },
  {
    stage: 'Climax (about 15%)',
    detail:
      'The moment of highest tension. The character makes a decision or realisation.',
    tip: 'Slow time down here. Describe breathing, heartbeat, small movements.',
  },
  {
    stage: 'Resolution (about 20%)',
    detail:
      'Aftermath. Reflect briefly on what has changed. Leave the reader with a thought, not a list of events.',
    tip: 'Avoid endings like "it was all a dream" or "they all lived happily". Leave something unresolved.',
  },
]

const characterTips = [
  'Give each character ONE distinguishing habit — fiddles with a ring, hums a tune, flinches at noise.',
  'Show relationships through small actions, not explanations.',
  'Name only the characters who matter. A crowd is better than five bit-parts.',
  'Let characters want something. A story is someone trying to get something and struggling.',
]

const dialogueRules = [
  'New speaker, new line — always.',
  'Use "said" more often than "exclaimed". Said is invisible.',
  'Break dialogue with small actions: "I know." She turned the cup slowly in her hands. "I know you know."',
  'Dialogue should reveal character OR move the story forward. Ideally both.',
  'Contractions ("I\'m", "you\'ve") make speech sound real. Avoid in formal narration.',
]

export default async function NarrativeWritingPage() {
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
        <h1 className="text-display-sm font-heading text-foreground">
          Narrative writing
        </h1>
        <p className="mt-3 max-w-2xl text-body-lg text-muted-foreground">
          A narrative composition is a short story — not a summary of a
          life. In 450 words you need one clear event, one developed
          character and one controlled shift in mood. Restraint is worth
          more than spectacle.
        </p>
      </section>

      {/* ── Mark split ────────────────────────────────────────────── */}
      <section className="rounded-2xl border border-border/60 bg-card p-6 sm:p-8">
        <div className="mb-4 flex items-center gap-3">
          <Target className="size-5 text-primary" />
          <h2 className="text-heading-md font-heading text-foreground">
            How the 40 marks split
          </h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl border border-border/60 bg-muted/30 p-5">
            <Badge className="mb-2 bg-primary/10 text-primary border-primary/20">
              Content & structure — 16
            </Badge>
            <p className="text-body-sm text-muted-foreground">
              Originality, pacing, character development, sense of
              direction, satisfying shape.
            </p>
          </div>
          <div className="rounded-xl border border-border/60 bg-muted/30 p-5">
            <Badge className="mb-2 bg-primary/10 text-primary border-primary/20">
              Style & accuracy — 24
            </Badge>
            <p className="text-body-sm text-muted-foreground">
              Precise vocabulary, varied sentence structure, tense
              consistency, dialogue punctuation, spelling, grammar.
            </p>
          </div>
        </div>
      </section>

      {/* ── Structure ─────────────────────────────────────────────── */}
      <section>
        <div className="mb-5 flex items-center gap-3">
          <ScrollText className="size-5 text-primary" />
          <h2 className="text-heading-lg font-heading text-foreground">
            Five-stage story structure
          </h2>
        </div>
        <div className="space-y-3">
          {structure.map((st, i) => (
            <Card key={st.stage}>
              <CardHeader className="pb-2">
                <div className="flex items-center gap-3">
                  <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-body-sm font-semibold text-primary">
                    {i + 1}
                  </span>
                  <CardTitle className="text-body-md font-heading">
                    {st.stage}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-body-sm text-muted-foreground">
                  {st.detail}
                </p>
                <div className="rounded-lg border border-border/60 bg-muted/30 p-3">
                  <p className="text-body-xs text-foreground">
                    <span className="font-semibold">Tip: </span>
                    {st.tip}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* ── Character ─────────────────────────────────────────────── */}
      <section>
        <div className="mb-5 flex items-center gap-3">
          <Users className="size-5 text-primary" />
          <h2 className="text-heading-lg font-heading text-foreground">
            Building a believable character
          </h2>
        </div>
        <Card>
          <CardContent className="pt-6">
            <ul className="space-y-2 text-body-sm text-muted-foreground">
              {characterTips.map((tip) => (
                <li key={tip} className="flex items-start gap-2">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </section>

      {/* ── Dialogue ──────────────────────────────────────────────── */}
      <section>
        <div className="mb-5 flex items-center gap-3">
          <MessageCircle className="size-5 text-primary" />
          <h2 className="text-heading-lg font-heading text-foreground">
            Writing dialogue cleanly
          </h2>
        </div>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-body-md font-heading">Rules</CardTitle>
            <CardDescription>Dialogue is where candidates most often lose accuracy marks.</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-body-sm text-muted-foreground">
              {dialogueRules.map((r) => (
                <li key={r} className="flex items-start gap-2">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
                  <span>{r}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </section>

      {/* ── Worked opening ────────────────────────────────────────── */}
      <section className="rounded-2xl border border-border/60 bg-card p-6 sm:p-8">
        <div className="mb-4 flex items-center gap-3">
          <Lightbulb className="size-5 text-primary" />
          <h2 className="text-heading-md font-heading text-foreground">
            Worked opening — &quot;Write a story that begins with a phone call.&quot;
          </h2>
        </div>
        <div className="rounded-xl border border-border/60 bg-muted/30 p-5">
          <p className="whitespace-pre-line text-body-sm text-foreground leading-relaxed">
            {`The phone rang three times before Ana picked it up, and even then she didn't speak first. She waited, the way her mother had taught her to wait, until the silence on the other end cracked.

"It's me," Pablo said.

Three small words. Enough to undo a year of careful forgetting. Ana sat down slowly on the edge of the bed, the old mattress creaking beneath her like a voice that had been holding its breath. Outside, the rain was softening into mist, and the window had gone the colour of tea.

"Where are you calling from?"

"The station."

Of course.`}
          </p>
        </div>
        <p className="mt-3 text-body-xs text-muted-foreground">
          Notice: opens mid-action, one distinguishing habit (waiting),
          small specific detail (mattress, rain), dialogue doing double
          duty (revealing past and present).
        </p>
      </section>
    </div>
  )
}
