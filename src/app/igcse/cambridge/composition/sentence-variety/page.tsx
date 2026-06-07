import type { Metadata } from 'next'
import Link from 'next/link'
import { Feather, Sparkles, ChevronLeft } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { requireIgcseBoard } from '@/app/igcse/_lib/guard'
import { t } from '@/lib/i18n/t'

export const metadata: Metadata = {
  openGraph: {
    title: 'Sentence Variety - Cambridge IGCSE Composition',
    description:
      'Simple, compound, complex and compound-complex sentences for Cambridge IGCSE composition, plus rhetorical techniques: tricolon, anaphora, inversion.',
  },
  title: 'Sentence Variety - Cambridge IGCSE Composition',
  description:
    'Simple, compound, complex and compound-complex sentences for Cambridge IGCSE composition, plus rhetorical techniques: tricolon, anaphora, inversion.',
  alternates: {
    canonical: 'https://theenglishhub.app/igcse/cambridge/composition/sentence-variety',
  },
}

const sentences = [
  {
    name: 'Simple',
    definition:
      'One independent clause. A subject and a verb. Short simple sentences are powerful - use them for emphasis, shock or finality.',
    example: 'The door slammed.',
    use: 'Emphasis, turning points, final lines.',
  },
  {
    name: 'Compound',
    definition:
      'Two independent clauses joined by a coordinating conjunction (FANBOYS: for, and, nor, but, or, yet, so) or a semicolon.',
    example: 'The door slammed, and the dog started barking in the kitchen.',
    use: 'Balanced ideas, pairs, calm description.',
  },
  {
    name: 'Complex',
    definition:
      'One independent clause plus one or more dependent (subordinate) clauses, introduced by words like because, although, while, when, if.',
    example:
      'Although the door had been locked twice that morning, I found it standing open when I came back from the shop.',
    use: 'Description, reflection, showing cause and effect.',
  },
  {
    name: 'Compound-complex',
    definition:
      'Two or more independent clauses, and at least one dependent clause. The most ambitious sentence type; use sparingly.',
    example:
      'Although the door had been locked twice that morning, I found it standing open when I came back from the shop, and the dog, who had been barking all afternoon, was nowhere to be seen.',
    use: 'One per paragraph at most. Used for layered information.',
  },
]

const rhetorical = [
  {
    name: 'Tricolon (rule of three)',
    definition: 'Three parallel phrases or clauses in a row. Creates rhythm and completeness.',
    example: 'I came. I saw. I left the key on the table.',
    note: 'Break the pattern on the third item to surprise the reader.',
  },
  {
    name: 'Anaphora',
    definition:
      'Repetition of the same word or phrase at the start of successive clauses or sentences.',
    example:
      'It was the silence in the hall. It was the way nobody would look at me. It was the smell of old coffee that nobody had thrown away.',
    note: 'Use for emotional build-up. Two or three repetitions; never more.',
  },
  {
    name: 'Asyndeton',
    definition:
      'A list without conjunctions - commas only, no &ldquo;and&rdquo; before the final item. Speeds the sentence up.',
    example: 'The room smelled of rain, old dust, peppermints, fear.',
    note: 'Opposite of the rule of three - this lands like a blow.',
  },
  {
    name: 'Polysyndeton',
    definition:
      'The opposite of asyndeton: putting &ldquo;and&rdquo; between every item in a list. Slows the sentence down and feels deliberate.',
    example: 'She walked and she thought and she counted and she kept on walking.',
    note: 'Builds rhythm; useful for descriptive and reflective passages.',
  },
  {
    name: 'Inversion',
    definition:
      'Reversing the usual subject-verb order for emphasis. Common with negative adverbials.',
    example: 'Never had the kitchen been so quiet.',
    note: 'One per piece. Examiners notice; overuse is painful.',
  },
  {
    name: 'Rhetorical question',
    definition:
      'A question asked for effect, not an answer. Draws the reader into the narrator\u2019s thinking.',
    example: 'And what was I supposed to do with that?',
    note: 'Works best in narrative, rarely in descriptive.',
  },
  {
    name: 'Zeugma',
    definition:
      'One verb yoking together two different objects - often one literal, one metaphorical. A mature, playful device.',
    example: 'She lost her phone, her patience, and eventually her bus.',
    note: 'Use only when the effect is confident. When it works, it\u2019s a clear Band 5 move.',
  },
]

export default async function SentenceVarietyPage() {
  await requireIgcseBoard(['cambridge-0500', 'cambridge-0990'])

  return (
    <div className="space-y-10 pb-16">
      <Button variant="ghost" size="sm" render={<Link href="/igcse/cambridge/composition" />}>
        <ChevronLeft className="size-3.5" />
        {await t('igcse.page.back_to_composition')}
      </Button>

      <section className="relative overflow-hidden rounded-2xl border border-border/60 bg-gradient-to-br from-card via-card to-primary/[0.04] p-6 sm:p-8 lg:p-10">
        <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />
        <div className="relative">
          <div className="mb-4 flex flex-wrap items-center gap-2">
            <Badge className="bg-primary/10 text-primary border-primary/20">
              <Sparkles className="mr-1 size-3" />
              {await t('igcse.cambridge.badge.cambridge_igcse')}
            </Badge>
            <Badge variant="secondary">Style and accuracy</Badge>
          </div>
          <h1 className="text-display-sm font-heading text-foreground sm:text-display">
            Sentence variety
          </h1>
          <p className="mt-3 max-w-2xl text-body-lg text-muted-foreground">
            Cambridge\u2019s top bands reward &ldquo;a range of sentence structures used for
            effect&rdquo;. The word that matters is <em>effect</em> - you are not showing off that
            you know how to build a complex sentence; you are using different structures to do
            different jobs.
          </p>
        </div>
      </section>

      {/* Four sentence types */}
      <section>
        <div className="mb-5 flex items-center gap-3">
          <Feather className="size-5 text-primary" />
          <h2 className="text-heading-lg font-heading text-foreground">
            The four sentence structures
          </h2>
        </div>
        <div className="space-y-4">
          {sentences.map((s) => (
            <Card key={s.name}>
              <CardHeader>
                <CardTitle className="text-heading-sm font-heading">{s.name}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-body-sm text-muted-foreground">
                <p className="leading-relaxed">{s.definition}</p>
                <div className="rounded-lg border border-border/60 bg-primary/5 p-4">
                  <p className="text-body-xs font-semibold uppercase tracking-wide text-primary">
                    Example
                  </p>
                  <p className="mt-2 italic text-foreground">“{s.example}”</p>
                </div>
                <p className="text-body-xs">
                  <strong className="text-foreground">Best used for: </strong>
                  {s.use}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Rhetorical */}
      <section>
        <h2 className="text-heading-lg font-heading text-foreground">Rhetorical techniques</h2>
        <p className="mt-2 max-w-3xl text-body-sm text-muted-foreground">
          Use sparingly. One per paragraph at most, and only where it serves the meaning. Rhetorical
          devices lose their power in clumps.
        </p>
        <div className="mt-5 grid gap-4 sm:grid-cols-2">
          {rhetorical.map((r) => (
            <Card key={r.name}>
              <CardHeader>
                <CardTitle className="text-heading-sm font-heading">{r.name}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-body-sm text-muted-foreground">
                <p className="leading-relaxed">{r.definition}</p>
                <div className="rounded-lg border border-border/60 bg-primary/5 p-4">
                  <p className="italic text-foreground">“{r.example}”</p>
                </div>
                <p className="text-body-xs">
                  <strong className="text-foreground">Tip: </strong>
                  {r.note}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Rhythm advice */}
      <section className="rounded-2xl border border-border/60 bg-card p-6 sm:p-8">
        <h2 className="text-heading-md font-heading text-foreground">Read it aloud</h2>
        <p className="mt-3 text-body-sm text-muted-foreground leading-relaxed">
          The single best sentence-variety test is to read your work aloud. Where you take the same
          breath twice in a row, you have the same sentence length twice in a row. Where you have to
          stop for air, you probably have a runaway compound-complex sentence that needs breaking.
          Rhythm is felt, not calculated.
        </p>
        <div className="mt-4 rounded-lg border border-border/60 bg-muted/40 p-4 text-body-sm">
          <p className="font-semibold text-foreground">Useful target</p>
          <p className="mt-1 text-muted-foreground">
            In any paragraph, at least three different sentence lengths. No two sentences of the
            same structure in a row. One deliberately short sentence per paragraph for rhythm.
          </p>
        </div>
      </section>
    </div>
  )
}
