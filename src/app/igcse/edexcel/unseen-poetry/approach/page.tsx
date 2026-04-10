'use client'

import {
  Compass,
  ArrowLeft,
  ArrowRight,
  Eye,
  BookOpen,
  MessageSquare,
  Layers,
  Heart,
  Lightbulb,
  CheckCircle2,
  Sparkles,
} from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

/* ── Step card ───────────────────────────────────────────────── */

interface Step {
  number: string
  title: string
  time: string
  icon: typeof Eye
  colour: string
  bgColour: string
  summary: string
  questions: string[]
  example: string
}

const STEPS: Step[] = [
  {
    number: '01',
    title: 'First Impressions',
    time: '2 minutes',
    icon: Eye,
    colour: 'text-sky-400',
    bgColour: 'bg-sky-500/10',
    summary:
      'Read the poem once without a pen. Let the poem wash over you. Notice tone, mood, and any line that jumps out. This is the only time in the exam where instinct matters more than analysis.',
    questions: [
      'What does the poem feel like -- joyful, grieving, angry, tender, uneasy?',
      'Who is speaking, and who are they speaking to?',
      'What single image or line do you remember after one read?',
      'Is there a shift in mood, or does it feel unified throughout?',
    ],
    example:
      'Reading Dickinson\'s "Hope is the thing with feathers" for the first time, your instinct might be: gentle, quiet, persistent. That instinct is already half of your thesis.',
  },
  {
    number: '02',
    title: 'Meaning and Narrative',
    time: '3 minutes',
    icon: BookOpen,
    colour: 'text-emerald-400',
    bgColour: 'bg-emerald-500/10',
    summary:
      'Read the poem a second time, this time for meaning. What is the poem actually about on a literal level, and what is it about on a deeper level? Most poems have both.',
    questions: [
      'Can you summarise the poem in one sentence?',
      'What is the literal subject? What is the deeper theme?',
      'Is there a narrative -- does something happen or change?',
      'What is the speaker\'s attitude towards the subject?',
    ],
    example:
      'Dickinson\'s poem is literally about a bird, but its deeper subject is hope itself -- personified, persistent, and asking nothing in return. The meaning lives in the extended metaphor.',
  },
  {
    number: '03',
    title: 'Language',
    time: '5 minutes',
    icon: MessageSquare,
    colour: 'text-violet-400',
    bgColour: 'bg-violet-500/10',
    summary:
      'Now annotate. Underline images, circle word choices that feel deliberate, and note semantic fields. Ask: why this word, not another? The What-How-Why framework is your best friend here.',
    questions: [
      'What imagery dominates? Is there a semantic field (nature, war, religion, light)?',
      'Which verbs feel loaded? Which adjectives carry emotional weight?',
      'Are there any metaphors, similes, or personification?',
      'Does the poet use sound effects -- sibilance, plosives, assonance?',
    ],
    example:
      'In "Hope is the thing with feathers", the adjective "sweetest" paired with the storm ("sore must be the storm") creates tension: hope is most powerful at its most tested. The verbs are gentle -- "perches", "sings" -- but endure ("never stops -- at all").',
  },
  {
    number: '04',
    title: 'Form and Structure',
    time: '3 minutes',
    icon: Layers,
    colour: 'text-amber-400',
    bgColour: 'bg-amber-500/10',
    summary:
      'Look at the shape of the poem on the page. Stanza length, line length, rhyme, rhythm, punctuation. Form is never accidental -- it shapes how we read.',
    questions: [
      'How many stanzas? Are they the same length?',
      'Is there a rhyme scheme? Is it regular, or does it break?',
      'Does the poem use enjambment (lines running over) or end-stopping?',
      'Is there a volta -- a turning point -- and where does it fall?',
    ],
    example:
      'Dickinson\'s poem uses three quatrains with her trademark dashes -- breaks that force pause and hesitation, mirroring the fragile persistence of hope. The ABCB rhyme gives a ballad-like simplicity.',
  },
  {
    number: '05',
    title: 'Effect on the Reader',
    time: '2 minutes',
    icon: Heart,
    colour: 'text-rose-400',
    bgColour: 'bg-rose-500/10',
    summary:
      'Finally, zoom out. What does the poet want us to feel, think, or understand? How do language and form work together to create that effect? This becomes your thesis.',
    questions: [
      'What emotional response does the poem produce?',
      'What does the poet want the reader to understand about the theme?',
      'How do language and form reinforce each other?',
      'What is your personal response -- and can you justify it?',
    ],
    example:
      'Dickinson makes the reader feel the quiet resilience of hope. Language (gentle verbs, bird metaphor) and form (regular stanzas, dashes that pause but never stop) work together to suggest hope is both fragile and unstoppable.',
  },
]

export default function UnseenPoetryApproachPage() {
  return (
    <div className="space-y-10 pb-16">
      {/* ── Header ──────────────────────────────────────────────── */}
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
          <div className="flex size-10 items-center justify-center rounded-xl bg-sky-500/10">
            <Compass className="size-5 text-sky-400" />
          </div>
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2">
              <h1 className="text-heading-lg font-heading text-foreground">
                The 5-Step Approach
              </h1>
              <Badge variant="secondary" className="text-[0.65rem] uppercase tracking-wider">
                Edexcel IGCSE 4ET1
              </Badge>
            </div>
            <p className="text-body-sm text-muted-foreground">
              A reliable reading process you can trust under exam pressure
            </p>
          </div>
        </div>
      </div>

      {/* ── Intro ───────────────────────────────────────────────── */}
      <section className="relative overflow-hidden rounded-2xl border border-border/60 bg-gradient-to-br from-card via-card to-sky-500/[0.04] p-6 sm:p-8">
        <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-sky-500/5 blur-3xl" />
        <Badge variant="secondary" className="mb-3">
          <Sparkles className="mr-1 size-3" />
          15 Minutes of Reading
        </Badge>
        <h2 className="text-heading-md font-heading text-foreground mb-2">
          Before you write a single word, read like this
        </h2>
        <p className="text-body-sm text-muted-foreground max-w-2xl leading-relaxed">
          The most common mistake in unseen poetry is diving straight into writing. Students who
          spend just 12-15 minutes reading and annotating almost always outperform those who
          start writing in minute two. These five steps give you a repeatable process: the same
          reading strategy works on any poem, from a Wordsworth sonnet to a contemporary free
          verse piece. Follow the steps in order -- they build on each other.
        </p>
      </section>

      {/* ── Steps ───────────────────────────────────────────────── */}
      <section className="space-y-4">
        {STEPS.map((step) => (
          <div
            key={step.number}
            className="rounded-2xl border border-border/60 bg-card p-5 sm:p-6"
          >
            <div className="mb-4 flex items-start gap-4">
              <div
                className={`flex size-12 shrink-0 items-center justify-center rounded-xl ${step.bgColour}`}
              >
                <step.icon className={`size-6 ${step.colour}`} />
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <span className={`text-xs font-mono font-semibold ${step.colour}`}>
                    STEP {step.number}
                  </span>
                  <Badge variant="secondary" className="text-[0.65rem]">
                    {step.time}
                  </Badge>
                </div>
                <h3 className="text-heading-md font-heading text-foreground mt-1">
                  {step.title}
                </h3>
              </div>
            </div>

            <p className="text-body-sm text-muted-foreground leading-relaxed mb-4">
              {step.summary}
            </p>

            <div className="mb-4 rounded-xl border border-border/40 bg-background/50 p-4">
              <p className="text-xs font-semibold uppercase tracking-wider text-foreground mb-2">
                Ask yourself
              </p>
              <ul className="space-y-1.5">
                {step.questions.map((q, i) => (
                  <li
                    key={i}
                    className="flex gap-2 text-body-sm text-muted-foreground leading-relaxed"
                  >
                    <span className="text-primary">-</span>
                    <span>{q}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex gap-3 rounded-xl border border-emerald-500/20 bg-emerald-500/[0.06] p-4">
              <Lightbulb className="mt-0.5 size-4 shrink-0 text-emerald-400" />
              <p className="text-body-sm text-muted-foreground leading-relaxed">
                <span className="font-semibold text-foreground">In practice: </span>
                {step.example}
              </p>
            </div>
          </div>
        ))}
      </section>

      {/* ── Summary checklist ───────────────────────────────────── */}
      <section className="rounded-2xl border border-border/60 bg-card p-6 sm:p-8">
        <div className="mb-4 flex items-center gap-3">
          <CheckCircle2 className="size-5 text-emerald-400" />
          <h2 className="text-heading-md font-heading text-foreground">
            After 15 Minutes of Reading, You Should Have
          </h2>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {[
            'A one-sentence summary of the poem\'s meaning',
            'At least five annotated words or phrases',
            'An identified semantic field or dominant image',
            'A note on form and structure (stanzas, rhyme, volta)',
            'A clear personal response you can defend',
            'Three quotes ready to use as evidence',
          ].map((item) => (
            <div
              key={item}
              className="flex gap-3 rounded-xl border border-border/40 bg-background/50 p-4"
            >
              <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-emerald-400" />
              <p className="text-body-sm text-muted-foreground leading-relaxed">{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Next step ───────────────────────────────────────────── */}
      <section className="rounded-2xl border border-border/60 bg-gradient-to-r from-violet-500/[0.06] via-card to-primary/[0.04] p-6 sm:p-8 text-center">
        <Layers className="mx-auto mb-3 size-8 text-violet-400" />
        <h2 className="text-heading-lg font-heading text-foreground">
          Now learn to compare two poems
        </h2>
        <p className="mx-auto mt-2 max-w-lg text-body-sm text-muted-foreground">
          The 4ET1 unseen poetry question asks you to compare. Once you can read a single poem
          well, the next skill is holding two poems in mind at once.
        </p>
        <Button
          variant="default"
          size="lg"
          className="mt-5"
          render={<Link href="/igcse/edexcel/unseen-poetry/comparison" />}
        >
          Comparison Techniques
          <ArrowRight className="size-4" />
        </Button>
      </section>
    </div>
  )
}
