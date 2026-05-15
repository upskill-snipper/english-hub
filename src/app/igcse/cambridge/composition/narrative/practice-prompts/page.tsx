import type { Metadata } from 'next'
import Link from 'next/link'
import { ListChecks, Sparkles, ChevronLeft } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { requireIgcseBoard } from '@/app/igcse/_lib/guard'

export const metadata: Metadata = {
  openGraph: {
    title: '30 Narrative Practice Prompts — Cambridge IGCSE',
    description:
      'Thirty Cambridge IGCSE-style narrative writing prompts, graded by difficulty, with story hooks and planning tips for each.',
  },
  title: '30 Narrative Practice Prompts — Cambridge IGCSE',
  description:
    'Thirty Cambridge IGCSE-style narrative writing prompts, graded by difficulty, with story hooks and planning tips for each.',
  alternates: {
    canonical: 'https://theenglishhub.app/igcse/cambridge/composition/narrative/practice-prompts',
  },
}

type Level = 'Foundation' | 'Intermediate' | 'Advanced'

const prompts: { title: string; level: Level; hint: string }[] = [
  {
    title: 'The Visitor',
    level: 'Foundation',
    hint: 'Who is coming? Who is already there? Start with the knock.',
  },
  {
    title: 'The Letter',
    level: 'Foundation',
    hint: 'Start with the letter unopened. End with the letter back where it started.',
  },
  {
    title: 'The Journey Home',
    level: 'Foundation',
    hint: 'Change the narrator\u2019s feelings about home between paragraph one and paragraph five.',
  },
  {
    title: 'The Last Day',
    level: 'Foundation',
    hint: 'Do not say what it is the last day of until the final line.',
  },
  {
    title: 'The Storm',
    level: 'Foundation',
    hint: 'Use weather as the clock — as the storm arrives, the decision must be made.',
  },
  {
    title: 'The Wrong Turn',
    level: 'Foundation',
    hint: 'A literal or metaphorical wrong turn. Let consequences arrive slowly.',
  },
  {
    title: 'The Promise',
    level: 'Foundation',
    hint: 'Who made it, to whom, and what is forcing the narrator to remember it today?',
  },
  {
    title: 'The Argument',
    level: 'Foundation',
    hint: 'Start in the middle of it. End after both people have stopped speaking.',
  },
  {
    title: 'The Photograph',
    level: 'Intermediate',
    hint: 'Describe the photo in paragraph one. Reveal what is not in it by paragraph five.',
  },
  {
    title: 'The Door',
    level: 'Intermediate',
    hint: 'A door you are not supposed to open. Be specific about why.',
  },
  {
    title: 'Too Late',
    level: 'Intermediate',
    hint: 'In medias res opening. The reader knows it is too late before they know for what.',
  },
  {
    title: 'The Accident',
    level: 'Intermediate',
    hint: 'Do not describe the accident. Describe what happens in the thirty seconds before and after.',
  },
  {
    title: 'The Stranger on the Train',
    level: 'Intermediate',
    hint: 'Dialogue-heavy. Let the stranger reveal something about the narrator.',
  },
  {
    title: 'The Mistake',
    level: 'Intermediate',
    hint: 'The narrator knows what the mistake is. The reader finds out last.',
  },
  {
    title: 'The Decision',
    level: 'Intermediate',
    hint: 'Show the narrator deciding without having them explicitly choose.',
  },
  {
    title: 'The Birthday',
    level: 'Intermediate',
    hint: 'Make the reader forget whose birthday it is. Then remind them at the end.',
  },
  {
    title: 'The Neighbour',
    level: 'Intermediate',
    hint: 'Describe the neighbour through one habit the narrator has noticed for years.',
  },
  {
    title: 'The Key',
    level: 'Intermediate',
    hint: 'Found, lost, given, returned. Pick one and let the key be a physical object, not a metaphor.',
  },
  {
    title: 'The Sound Upstairs',
    level: 'Advanced',
    hint: 'Withhold information. The sound itself can never be fully described.',
  },
  {
    title: 'The Reunion',
    level: 'Advanced',
    hint: 'Two characters who have not met for a long time. Let their first spoken exchange be small talk.',
  },
  {
    title: 'The Empty House',
    level: 'Advanced',
    hint: 'Return to a house that used to be full. Avoid sentimentality — use specific objects.',
  },
  {
    title: 'The Warning',
    level: 'Advanced',
    hint: 'Someone warns the narrator. The narrator ignores it. Make the reader understand why.',
  },
  {
    title: 'The Confession',
    level: 'Advanced',
    hint: 'Who is confessing and to whom? Can the confession be unsaid?',
  },
  {
    title: 'The Stranger in the Photograph',
    level: 'Advanced',
    hint: 'The narrator finds themselves in a photo they do not remember being taken.',
  },
  {
    title: 'The Last Bus',
    level: 'Advanced',
    hint: 'A ticking clock. The narrator has one conversation to finish before it arrives.',
  },
  {
    title: 'The Missed Appointment',
    level: 'Advanced',
    hint: 'What appointment, and what did missing it mean? Reveal gradually.',
  },
  {
    title: 'The Inheritance',
    level: 'Advanced',
    hint: 'An unexpected small object, not money. What does it oblige the narrator to do?',
  },
  {
    title: 'The Return',
    level: 'Advanced',
    hint: 'Who is returning to whom? Let the reader hold the wrong assumption for two paragraphs.',
  },
  {
    title: 'The Apology',
    level: 'Advanced',
    hint: 'Is it accepted? Can it be? End ambiguously — leave the answer to the reader.',
  },
  {
    title: 'The Wait',
    level: 'Advanced',
    hint: 'The entire story is a wait. Nothing happens. The tension is whether anything will.',
  },
]

const levelStyle: Record<Level, string> = {
  Foundation: 'bg-primary/10 text-primary border-primary/20',
  Intermediate: 'bg-amber-500/10 text-amber-700 border-amber-500/20 dark:text-clay-600',
  Advanced: 'bg-purple-500/10 text-purple-700 border-purple-500/20 dark:text-purple-400',
}

export default async function NarrativePromptsPage() {
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
            <Badge variant="secondary">30 prompts</Badge>
          </div>
          <h1 className="text-display-sm font-heading text-foreground sm:text-display">
            Narrative practice prompts
          </h1>
          <p className="mt-3 max-w-2xl text-body-lg text-muted-foreground">
            Thirty Cambridge-style narrative titles with story hooks. Each points you at a specific
            technique — withheld information, ticking clock, dialogue opener — so you can rehearse
            each one in turn.
          </p>
        </div>
      </section>

      <section>
        <div className="mb-5 flex items-center gap-3">
          <ListChecks className="size-5 text-primary" />
          <h2 className="text-heading-lg font-heading text-foreground">Prompts</h2>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {prompts.map((p, i) => (
            <Card key={p.title}>
              <CardHeader className="pb-2">
                <div className="flex items-start justify-between gap-2">
                  <CardTitle className="text-body-md font-heading leading-tight">
                    {i + 1}. {p.title}
                  </CardTitle>
                  <Badge
                    variant="outline"
                    className={`shrink-0 text-[10px] ${levelStyle[p.level]}`}
                  >
                    {p.level}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-body-xs text-muted-foreground leading-relaxed">{p.hint}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="rounded-2xl border border-border/60 bg-muted/30 p-6">
        <h2 className="text-heading-md font-heading text-foreground">How to practise</h2>
        <ul className="mt-4 space-y-2 text-body-sm text-muted-foreground list-disc pl-5">
          <li>
            Pick a prompt and spend five minutes answering the three iceberg questions before
            writing.
          </li>
          <li>Write to exactly 400 words. Cutting is the hardest and most useful skill.</li>
          <li>After writing, read the opening and closing paragraphs aloud. Do they echo?</li>
          <li>
            Try the same prompt twice — once as a slow reveal, once in medias res. Compare which
            works.
          </li>
        </ul>
      </section>
    </div>
  )
}
