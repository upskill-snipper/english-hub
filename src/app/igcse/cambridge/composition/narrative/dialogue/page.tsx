import type { Metadata } from 'next'
import Link from 'next/link'
import { MessageSquare, Sparkles, ChevronLeft } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { requireIgcseBoard } from '@/app/igcse/_lib/guard'

export const metadata: Metadata = {
  title: 'Dialogue — Cambridge IGCSE Narrative Writing',
  description:
    'Punctuation rules, subtext, the four jobs of dialogue and how to write believable speech for a Cambridge IGCSE short story.',
  alternates: {
    canonical:
      'https://theenglishhub.app/igcse/cambridge/composition/narrative/dialogue',
  },
}

const punctuationRules = [
  {
    rule: 'New speaker, new line.',
    example:
      '“I saw him,” she said.\n“Where?” Tom asked.',
  },
  {
    rule: 'Speech marks wrap the spoken words only, including the final punctuation.',
    example:
      '“I’m not going.”\n“You said you would.”',
  },
  {
    rule: 'Use a comma (not a full stop) before a speech tag.',
    example: '“I’m leaving,” she said. / NOT: “I’m leaving.” She said.',
  },
  {
    rule: 'If a question or exclamation ends the speech, use ? or ! — then lowercase for the tag.',
    example: '“Where are you going?” he asked.',
  },
  {
    rule: 'If dialogue is broken by a tag, the second part is a continuation of the sentence.',
    example:
      '“I went there once,” she said, “when I was a child.”',
  },
  {
    rule: 'Use an action beat instead of a tag when you can. New line, but no “he said”.',
    example:
      '“I went there once.” She set her teacup down carefully. “When I was a child.”',
  },
]

const fourJobs = [
  {
    job: '1. Reveal character',
    description:
      'The way a person speaks — vocabulary, rhythm, what they avoid — should be as distinctive as the way they walk.',
    example: '“I’d prefer, if it’s all the same, not to sit at the window.”',
    what: 'Formal register, qualifying clause, revealed anxiety about being seen.',
  },
  {
    job: '2. Advance the plot',
    description:
      'A line of dialogue should move the story forward — a decision made, a secret dropped, a plan changed.',
    example: '“Fine. I’ll come. But only as far as the bridge.”',
    what: 'Decision + limit — the compromise pushes the story into its next scene.',
  },
  {
    job: '3. Carry subtext',
    description:
      'What a character says should not be exactly what they mean. The reader should feel the gap.',
    example: '“No, no, honestly, it’s lovely. It\u2019s exactly what I\u2019d have chosen.”',
    what: 'The triple reassurance tells us it is not at all what they would have chosen.',
  },
  {
    job: '4. Shift the pace',
    description:
      'Short, snapped dialogue speeds a scene up. Slow, interrupted dialogue slows it down. Use both deliberately.',
    example: '“Don’t.”\n“I have to.”\n“Don’t.”',
    what: 'Three words, three beats of paragraph break. Maximum tension from minimum text.',
  },
]

export default async function DialoguePage() {
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
            <Badge variant="secondary">Technique 3 of 4</Badge>
          </div>
          <h1 className="text-display-sm font-heading text-foreground sm:text-display">
            Writing dialogue
          </h1>
          <p className="mt-3 max-w-2xl text-body-lg text-muted-foreground">
            Dialogue is the first thing examiners notice and the first thing
            students get wrong. Master the punctuation first. Then master
            what every line is doing on the page.
          </p>
        </div>
      </section>

      {/* Punctuation rules */}
      <section>
        <h2 className="text-heading-lg font-heading text-foreground">
          Punctuation rules
        </h2>
        <p className="mt-2 text-body-sm text-muted-foreground">
          Get these six rules right and you already look more controlled than
          half the entry.
        </p>
        <div className="mt-5 space-y-3">
          {punctuationRules.map((r, i) => (
            <Card key={i}>
              <CardContent className="flex flex-col gap-3 p-5 sm:flex-row sm:items-start sm:gap-5">
                <div className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-sm font-bold text-primary">
                  {i + 1}
                </div>
                <div className="flex-1 space-y-2">
                  <p className="text-body-sm font-semibold text-foreground">
                    {r.rule}
                  </p>
                  <pre className="whitespace-pre-wrap rounded-lg border border-border/60 bg-muted/40 p-3 font-sans text-body-xs italic text-foreground">
                    {r.example}
                  </pre>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Four jobs */}
      <section>
        <div className="mb-5 flex items-center gap-3">
          <MessageSquare className="size-5 text-primary" />
          <h2 className="text-heading-lg font-heading text-foreground">
            The four jobs of dialogue
          </h2>
        </div>
        <p className="mb-5 max-w-3xl text-body-sm text-muted-foreground">
          Every line of speech on the page should do at least one of these
          four things. If a line does none of them, cut it.
        </p>
        <div className="space-y-4">
          {fourJobs.map((j) => (
            <Card key={j.job}>
              <CardHeader>
                <CardTitle className="text-heading-sm font-heading">
                  {j.job}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-body-sm text-muted-foreground">
                <p className="leading-relaxed">{j.description}</p>
                <div className="rounded-lg border border-border/60 bg-primary/5 p-4">
                  <p className="text-body-xs font-semibold uppercase tracking-wide text-primary">
                    Example
                  </p>
                  <p className="mt-2 italic text-foreground">“{j.example}”</p>
                </div>
                <p className="text-body-xs text-muted-foreground">
                  <strong className="text-foreground">What it does: </strong>
                  {j.what}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Tag advice */}
      <Card>
        <CardHeader>
          <CardTitle className="text-heading-sm font-heading">
            Said is invisible
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3 text-body-sm text-muted-foreground">
          <p>
            Students often replace <em>said</em> with a thesaurus parade:{' '}
            <em>exclaimed, uttered, ejaculated, interrogated</em>. Examiners
            find this exhausting. <em>Said</em> is the correct word 90% of
            the time. The reader\u2019s eye slides over it. Save stronger
            verbs for moments when the tone needs to shift:{' '}
            <em>whispered, snapped, muttered</em> — and even then, sparingly.
          </p>
          <p>
            Better still, use an <strong className="text-foreground">action
            beat</strong> instead of a tag. Let the character do something
            small in the same paragraph as their line:
          </p>
          <div className="rounded-lg border border-border/60 bg-primary/5 p-4">
            <p className="italic text-foreground">
              “I don’t know.” He pressed his knuckles against the glass. “I
              really don’t.”
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Avoiding traps */}
      <section className="rounded-2xl border border-border/60 bg-card p-6 sm:p-8">
        <h2 className="text-heading-md font-heading text-foreground">
          Traps to avoid
        </h2>
        <ul className="mt-4 space-y-3 text-body-sm text-muted-foreground">
          <li className="flex gap-3">
            <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
            <span>
              <strong className="text-foreground">Greetings.</strong>{' '}
              &ldquo;Hello, how are you?&rdquo; &ldquo;I am fine, thank you,
              and you?&rdquo; cuts valuable word count for no payoff. Start
              two lines in.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
            <span>
              <strong className="text-foreground">Exposition
              dumps.</strong> Don\u2019t let characters tell each other
              things they both already know just so the reader learns them.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
            <span>
              <strong className="text-foreground">Name-checking.</strong>{' '}
              People rarely use each other\u2019s names in conversation. If
              your dialogue has three names in six lines, it sounds unnatural.
            </span>
          </li>
        </ul>
      </section>
    </div>
  )
}
