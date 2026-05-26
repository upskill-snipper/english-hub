'use client'
// [P2:auth] board guard deferred - client page, no server-side requireIgcseBoard

import {
  MessageSquare,
  ArrowLeft,
  ArrowRight,
  Sparkles,
  Lightbulb,
  Music,
  Eye,
  Layers,
} from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

/* ── What-How-Why steps ─────────────────────────────────────── */

const WHW_STEPS = [
  {
    letter: 'W',
    label: 'What',
    colour: 'text-sky-400',
    bgColour: 'bg-sky-500/10',
    description:
      'What has the poet actually written? Identify the specific word, phrase, or technique. Be precise -- "a metaphor" is lazy; "the metaphor comparing grief to a locked room" is analysis-ready.',
    example:
      'Dickinson uses the metaphor of hope as "the thing with feathers / That perches in the soul".',
  },
  {
    letter: 'H',
    label: 'How',
    colour: 'text-violet-400',
    bgColour: 'bg-violet-500/10',
    description:
      'How does it work as a technique? Name the method and explain its mechanics. This is where your subject terminology earns marks.',
    example:
      'This is an extended metaphor which personifies an abstract noun as a fragile, living bird. The verb "perches" is light and poised, rather than a heavier verb like "sits" or "settles".',
  },
  {
    letter: 'Y',
    label: 'Why',
    colour: 'text-emerald-400',
    bgColour: 'bg-emerald-500/10',
    description:
      'Why has the poet chosen this? What is the effect on meaning, tone, and the reader? This is where the top marks live -- the examiner rewards candidates who explain effect, not just identify technique.',
    example:
      'The light metaphor transforms an abstraction into something both vulnerable and present, suggesting that hope is not triumphant but quietly enduring -- a companion that rests in us without demanding anything in return.',
  },
]

/* ── Semantic fields ─────────────────────────────────────────── */

const SEMANTIC_FIELDS = [
  {
    field: 'Nature',
    words: ['blossom', 'root', 'tide', 'storm', 'leaf', 'shore', 'thaw'],
    typicalUse:
      'Emotional states (hope, grief, love), the passage of time, the sublime, or the indifference of the universe.',
  },
  {
    field: 'Light and dark',
    words: ['shadow', 'gleam', 'dusk', 'spark', 'shine', 'veil', 'dawn'],
    typicalUse:
      'Knowledge vs ignorance, hope vs despair, revelation, mortality. Often structured as a turn from dark to light (or vice versa).',
  },
  {
    field: 'Warfare and conflict',
    words: ['battle', 'siege', 'wound', 'arm', 'victory', 'defeat', 'scar'],
    typicalUse: 'Internal struggle, romantic conflict, political protest, the cost of survival.',
  },
  {
    field: 'Religion and the sacred',
    words: ['prayer', 'soul', 'grace', 'sin', 'heaven', 'faith', 'bow'],
    typicalUse: 'Moral weight, mortality, longing for transcendence, guilt, devotion to a beloved.',
  },
  {
    field: 'The body',
    words: ['breath', 'pulse', 'hand', 'skin', 'heart', 'bone', 'tongue'],
    typicalUse: 'Intimacy, mortality, desire, vulnerability, the self under pressure.',
  },
  {
    field: 'Movement and stillness',
    words: ['flutter', 'pause', 'drift', 'halt', 'rush', 'still', 'sway'],
    typicalUse: 'Emotional shifts, the passage of time, freedom vs constraint, uncertainty.',
  },
]

/* ── Sound effects ───────────────────────────────────────────── */

const SOUND_EFFECTS = [
  {
    name: 'Sibilance',
    definition: 'Repetition of /s/ or /sh/ sounds.',
    effect:
      'Can suggest softness, secrecy, whispering -- or, in the right context, menace and hissing. Always tied to context.',
    example: '"The silken sad uncertain rustling of each purple curtain" -- Poe.',
  },
  {
    name: 'Plosives',
    definition: 'Hard consonants: /p/, /b/, /t/, /d/, /k/, /g/.',
    effect:
      'Create impact, harshness, and abruptness. Often used for violence, anger, or physical force.',
    example: '"Beat, beat, drums! -- blow, bugles, blow!" -- Whitman.',
  },
  {
    name: 'Assonance',
    definition: 'Repetition of vowel sounds within nearby words.',
    effect:
      'Creates musicality and binds words together. Long vowels (/oo/, /ah/) slow the pace; short vowels (/i/, /e/) quicken it.',
    example: '"The lumbering, slow, slow dance of the dinosaur."',
  },
  {
    name: 'Onomatopoeia',
    definition: 'Words that imitate sound.',
    effect:
      'Brings the reader into the sensory world of the poem. Anchors abstract ideas in the physical.',
    example: '"The murmurous haunt of flies on summer eves" -- Keats.',
  },
  {
    name: 'Alliteration',
    definition: 'Repetition of initial consonant sounds.',
    effect:
      'Draws attention, creates rhythm, and can intensify emotional or physical effects depending on the consonant.',
    example: '"Five miles meandering with a mazy motion" -- Coleridge.',
  },
  {
    name: 'Caesura',
    definition: 'A deliberate pause within a line, often marked by punctuation.',
    effect:
      'Breaks rhythm, creates hesitation or emphasis. Often signals emotional disruption or a shift in thought.',
    example: '"I heard a fly buzz - when I died -" -- Dickinson.',
  },
]

export default function LanguageAnalysisPage() {
  return (
    <div className="space-y-10 pb-16">
      <div>
        <Button
          variant="ghost"
          size="sm"
          className="mb-3 -ml-2 text-muted-foreground"
          render={<Link href="/igcse/edexcel/unseen-poetry" />}
        >
          <ArrowLeft className="size-3.5" />
          Back to Unseen Poetry
        </Button>
        <div className="flex items-center gap-3">
          <div className="flex size-10 items-center justify-center rounded-xl bg-emerald-500/10">
            <MessageSquare className="size-5 text-emerald-400" />
          </div>
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2">
              <h1 className="text-heading-lg font-heading text-foreground">
                Language Analysis Framework
              </h1>
              <Badge variant="secondary" className="text-[0.65rem] uppercase tracking-wider">
                Edexcel IGCSE Literature
              </Badge>
            </div>
            <p className="text-body-sm text-muted-foreground">
              What-How-Why, semantic fields, sound effects, and the tools that turn observation into
              analysis
            </p>
          </div>
        </div>
      </div>

      {/* ── Intro ───────────────────────────────────────────────── */}
      <section className="relative overflow-hidden rounded-2xl border border-border/60 bg-gradient-to-br from-card via-card to-emerald-500/[0.04] p-6 sm:p-8">
        <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-emerald-500/5 blur-3xl" />
        <Badge variant="secondary" className="mb-3">
          <Sparkles className="mr-1 size-3" />
          Analysing language and structure is where most marks are won
        </Badge>
        <h2 className="text-heading-md font-heading text-foreground mb-2">
          The difference between spotting a technique and analysing it
        </h2>
        <p className="text-body-sm text-muted-foreground max-w-2xl leading-relaxed">
          "There is a metaphor here" is a starting point, not an answer. The examiner wants you to
          explain how the technique works and why the poet chose it. The What-How-Why framework is
          the simplest, most reliable way to force your writing from identification into analysis --
          and it scales from a single-paragraph answer to a full comparative essay.
        </p>
      </section>

      {/* ── What-How-Why ────────────────────────────────────────── */}
      <section>
        <div className="mb-5 flex items-center gap-3">
          <Lightbulb className="size-5 text-primary" />
          <h2 className="text-heading-lg font-heading text-foreground">
            The What-How-Why Framework
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {WHW_STEPS.map((step) => (
            <div key={step.letter} className="rounded-2xl border border-border/60 bg-card p-5">
              <div className="mb-3 flex items-center gap-3">
                <div
                  className={`flex size-12 items-center justify-center rounded-xl ${step.bgColour}`}
                >
                  <span className={`text-xl font-bold ${step.colour}`}>{step.letter}</span>
                </div>
                <h3 className="text-heading-md font-heading text-foreground">{step.label}</h3>
              </div>
              <p className="text-body-sm text-muted-foreground leading-relaxed mb-3">
                {step.description}
              </p>
              <div className="rounded-xl border border-border/40 bg-background/50 p-3">
                <p className="text-xs font-semibold uppercase tracking-wider text-foreground mb-1">
                  Example
                </p>
                <p className="text-body-sm italic text-muted-foreground leading-relaxed">
                  {step.example}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Worked example ──────────────────────────────────────── */}
      <section className="rounded-2xl border border-border/60 bg-card p-6 sm:p-8">
        <div className="mb-4 flex items-center gap-3">
          <Eye className="size-5 text-sky-400" />
          <h2 className="text-heading-md font-heading text-foreground">
            Worked Example: Applying What-How-Why
          </h2>
        </div>
        <p className="text-body-sm text-muted-foreground mb-4">
          Analysing a single image from Wordsworth&apos;s &ldquo;I Wandered Lonely as a
          Cloud&rdquo;:
        </p>
        <div className="rounded-xl border border-border/40 bg-background/50 p-5 text-body-sm italic leading-relaxed text-foreground/90">
          {`Wordsworth personifies the daffodils as "tossing their heads in sprightly dance", imbuing the flowers with human vitality and communal joy. The participle "tossing" suggests unrestrained, almost mischievous movement, while the adjective "sprightly" -- archaic and slightly elevated -- lifts the daffodils out of mere description and into the realm of spirited agency. In this moment, the poet's loneliness (established in the opening simile) is answered not by another human but by the natural world acting as a community, reshaping the reader's sense of solitude: the speaker is alone, yet never truly by himself.`}
        </div>
        <div className="mt-4 grid gap-3 sm:grid-cols-3">
          <div className="rounded-xl border border-sky-500/20 bg-sky-500/[0.04] p-3">
            <p className="text-xs font-semibold uppercase tracking-wider text-sky-400 mb-1">What</p>
            <p className="text-xs text-muted-foreground">
              Personification of daffodils "tossing their heads in sprightly dance".
            </p>
          </div>
          <div className="rounded-xl border border-violet-500/20 bg-violet-500/[0.04] p-3">
            <p className="text-xs font-semibold uppercase tracking-wider text-violet-400 mb-1">
              How
            </p>
            <p className="text-xs text-muted-foreground">
              Participle and archaic adjective give agency, elevate register.
            </p>
          </div>
          <div className="rounded-xl border border-emerald-500/20 bg-emerald-500/[0.04] p-3">
            <p className="text-xs font-semibold uppercase tracking-wider text-emerald-400 mb-1">
              Why
            </p>
            <p className="text-xs text-muted-foreground">
              Reframes solitude -- nature becomes a community that answers loneliness.
            </p>
          </div>
        </div>
      </section>

      {/* ── Semantic fields ─────────────────────────────────────── */}
      <section>
        <div className="mb-5 flex items-center gap-3">
          <Layers className="size-5 text-violet-400" />
          <h2 className="text-heading-lg font-heading text-foreground">Semantic Fields</h2>
        </div>
        <p className="text-body-sm text-muted-foreground mb-5 max-w-2xl">
          A semantic field is a cluster of words drawn from the same area of meaning. Spotting one
          tells the examiner you are reading the whole poem, not just one line at a time. Here are
          the fields you will meet most often in unseen poetry.
        </p>

        <div className="grid gap-4 sm:grid-cols-2">
          {SEMANTIC_FIELDS.map((f) => (
            <div key={f.field} className="rounded-2xl border border-border/60 bg-card p-5">
              <h3 className="text-heading-md font-heading text-foreground mb-2">{f.field}</h3>
              <div className="mb-3 flex flex-wrap gap-1.5">
                {f.words.map((w) => (
                  <Badge key={w} variant="secondary" className="text-[0.65rem] font-mono">
                    {w}
                  </Badge>
                ))}
              </div>
              <p className="text-body-sm text-muted-foreground leading-relaxed">
                <span className="font-semibold text-foreground">Typical use: </span>
                {f.typicalUse}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Sound effects ───────────────────────────────────────── */}
      <section>
        <div className="mb-5 flex items-center gap-3">
          <Music className="size-5 text-clay-600" />
          <h2 className="text-heading-lg font-heading text-foreground">Sound Effects</h2>
        </div>
        <p className="text-body-sm text-muted-foreground mb-5 max-w-2xl">
          Sound is never neutral. Every time you identify a sound effect, immediately ask what
          emotional texture it creates -- softness, harshness, rhythm, disruption. Sound is meaning.
        </p>

        <div className="grid gap-3 sm:grid-cols-2">
          {SOUND_EFFECTS.map((s) => (
            <div key={s.name} className="rounded-2xl border border-border/60 bg-card p-5">
              <h3 className="text-sm font-semibold text-foreground">{s.name}</h3>
              <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                <span className="font-semibold text-foreground">Definition: </span>
                {s.definition}
              </p>
              <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                <span className="font-semibold text-foreground">Effect: </span>
                {s.effect}
              </p>
              <p className="mt-1 text-xs italic text-muted-foreground leading-relaxed">
                {s.example}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Next ────────────────────────────────────────────────── */}
      <section className="rounded-2xl border border-border/60 bg-gradient-to-r from-amber-500/[0.06] via-card to-primary/[0.04] p-6 sm:p-8 text-center">
        <Layers className="mx-auto mb-3 size-8 text-clay-600" />
        <h2 className="text-heading-lg font-heading text-foreground">
          Now read the shape of the poem
        </h2>
        <p className="mx-auto mt-2 max-w-lg text-body-sm text-muted-foreground">
          Language is only half the story. The form and structure of a poem -- sonnet, ballad, free
          verse, enjambment -- carry as much meaning as the words.
        </p>
        <Button
          variant="default"
          size="lg"
          className="mt-5"
          render={<Link href="/igcse/edexcel/unseen-poetry/structure-form" />}
        >
          Form and Structure Guide
          <ArrowRight className="size-4" />
        </Button>
      </section>
    </div>
  )
}
