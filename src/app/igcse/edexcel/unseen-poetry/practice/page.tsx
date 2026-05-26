'use client'
// [P2:auth] board guard deferred - client page, no server-side requireIgcseBoard

import { useState } from 'react'
import {
  FileText,
  ArrowLeft,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  Lightbulb,
  Sparkles,
  Feather,
  CheckCircle2,
} from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

/* ── Poem structure ──────────────────────────────────────────── */

interface Poem {
  id: string
  title: string
  poet: string
  year: string
  theme: string
  text: string
  question: string
  modelOpening: string
  analysisNotes: { focus: string; observation: string; effect: string }[]
}

const POEMS: Poem[] = [
  {
    id: 'dickinson-hope',
    title: 'Hope is the thing with feathers',
    poet: 'Emily Dickinson',
    year: 'c. 1861',
    theme: 'Hope, endurance, resilience',
    text: `"Hope" is the thing with feathers -
That perches in the soul -
And sings the tune without the words -
And never stops - at all -

And sweetest - in the Gale - is heard -
And sore must be the storm -
That could abash the little Bird
That kept so many warm -

I've heard it in the chillest land -
And on the strangest Sea -
Yet - never - in Extremity,
It asked a crumb - of me.`,
    question: 'How does Dickinson present hope as a source of quiet endurance in the poem?',
    modelOpening: `Dickinson presents hope not as a grand, triumphant force but as a small, persistent presence that endures without demanding anything in return. From the opening line, the extended metaphor of hope as "the thing with feathers" immediately transforms an abstract emotion into a delicate, living creature, and the definite article "the" implies a universal, almost taxonomic truth -- as if hope were a species we all recognise. The verb "perches" is crucial: it suggests not permanence but poised readiness, a bird that rests lightly in the soul yet is capable of flight. Through this opening, Dickinson establishes hope as fragile in form but steadfast in nature.`,
    analysisNotes: [
      {
        focus: 'Extended metaphor',
        observation: 'Hope personified as a bird with feathers, perching in the soul',
        effect:
          'Transforms an abstraction into something tangible, gentle, and alive. The bird metaphor is sustained across all three stanzas, building a coherent imaginative world.',
      },
      {
        focus: 'Dashes',
        observation: "Dickinson's trademark dashes fragment and pause the lines",
        effect:
          'Create hesitation and breath, mirroring the fragile persistence of hope. The dashes force the reader to slow down -- hope itself resists being rushed.',
      },
      {
        focus: 'Verb choice',
        observation: 'Gentle verbs: "perches", "sings", "kept"; never aggressive',
        effect:
          'Hope is presented as quiet, not triumphant. Its strength is in its modesty -- it does not demand to be noticed.',
      },
      {
        focus: 'Final stanza irony',
        observation: '"Yet - never - in Extremity, / It asked a crumb - of me"',
        effect:
          'The word "crumb" recalls the bird metaphor and emphasises that hope is selfless. Dickinson reverses our expectation: we give nothing to hope, yet it sustains us.',
      },
      {
        focus: 'Form',
        observation: 'Three quatrains in loose ballad metre, ABCB rhyme',
        effect:
          "The ballad form connects hope to folk memory and oral tradition -- something passed down, simple, and universal. The regularity reinforces hope's reliability.",
      },
    ],
  },
  {
    id: 'wordsworth-daffodils',
    title: 'I Wandered Lonely as a Cloud',
    poet: 'William Wordsworth',
    year: '1807',
    theme: 'Nature, memory, solitude, joy',
    text: `I wandered lonely as a cloud
That floats on high o'er vales and hills,
When all at once I saw a crowd,
A host, of golden daffodils;
Beside the lake, beneath the trees,
Fluttering and dancing in the breeze.

Continuous as the stars that shine
And twinkle on the milky way,
They stretched in never-ending line
Along the margin of a bay:
Ten thousand saw I at a glance,
Tossing their heads in sprightly dance.

The waves beside them danced; but they
Out-did the sparkling waves in glee:
A poet could not but be gay,
In such a jocund company:
I gazed - and gazed - but little thought
What wealth the show to me had brought:

For oft, when on my couch I lie
In vacant or in pensive mood,
They flash upon that inward eye
Which is the bliss of solitude;
And then my heart with pleasure fills,
And dances with the daffodils.`,
    question: 'How does Wordsworth use the memory of the daffodils to transform solitude into joy?',
    modelOpening: `Wordsworth stages a quiet emotional journey from isolation to transcendence, and the daffodils themselves become the turning point. The opening simile "lonely as a cloud" does double work: it expresses the speaker\'s solitude but also places him aloft, detached from the world beneath him. Yet within three lines this isolation is ruptured by the sudden vision -- "When all at once I saw a crowd" -- where the abrupt adverbial phrase mimics the shock of joy breaking into loneliness. The metaphor of the daffodils as "a crowd" and "a host" reverses the speaker\'s solitude by surrounding him with communal life, even though that life is botanical rather than human.`,
    analysisNotes: [
      {
        focus: 'Opening simile',
        observation: '"I wandered lonely as a cloud"',
        effect:
          "Establishes the speaker's isolation while simultaneously elevating him. The comparison to a cloud suggests detachment but also freedom of perspective.",
      },
      {
        focus: 'Personification',
        observation: 'Daffodils "dancing", "tossing their heads", "in glee"',
        effect:
          "The flowers are given human vitality, transforming them from passive scenery into active companions. Nature becomes communal, answering the speaker's loneliness.",
      },
      {
        focus: 'Hyperbole',
        observation: '"Ten thousand saw I at a glance"',
        effect:
          "The deliberate exaggeration conveys the overwhelming abundance of the scene. The speaker's perception is enlarged by beauty.",
      },
      {
        focus: 'Volta in final stanza',
        observation: '"For oft, when on my couch I lie..."',
        effect:
          'The poem pivots from past experience to ongoing consolation. Memory becomes the true subject -- the daffodils live on in the "inward eye".',
      },
      {
        focus: 'Form and rhyme',
        observation: 'Four sestets, regular ABABCC rhyme, iambic tetrameter',
        effect:
          'The steady rhythm and closed couplets create a sense of recollection polished smooth by repetition -- the form mirrors memory itself.',
      },
    ],
  },
  {
    id: 'dickinson-death',
    title: 'Because I could not stop for Death',
    poet: 'Emily Dickinson',
    year: 'c. 1863',
    theme: 'Death, mortality, time, acceptance',
    text: `Because I could not stop for Death -
He kindly stopped for me -
The Carriage held but just Ourselves -
And Immortality.

We slowly drove - He knew no haste
And I had put away
My labor and my leisure too,
For His Civility -

We passed the School, where Children strove
At Recess - in the Ring -
We passed the Fields of Gazing Grain -
We passed the Setting Sun -

Or rather - He passed Us -
The Dews drew quivering and Chill -
For only Gossamer, my Gown -
My Tippet - only Tulle -

We paused before a House that seemed
A Swelling of the Ground -
The Roof was scarcely visible -
The Cornice - in the Ground -

Since then - 'tis Centuries - and yet
Feels shorter than the Day
I first surmised the Horses' Heads
Were toward Eternity -`,
    question:
      'How does Dickinson present Death as a gentle companion rather than a fearful figure?',
    modelOpening: `Dickinson refuses the expected iconography of Death -- no scythe, no terror, no violence -- and instead casts him as a courteous suitor whose "Civility" disarms the speaker. The personification of Death as a gentleman caller, who "kindly stopped for me" when the speaker was too busy to stop for him, reverses the conventional relationship between mortal and fate: it is Death who accommodates the speaker, not the other way around. The adverb "kindly" is disarmingly domestic, and the carriage -- a genteel nineteenth-century image -- frames the journey as a social outing rather than an abduction. In this opening, Dickinson makes death not something to resist but something to be escorted towards.`,
    analysisNotes: [
      {
        focus: 'Personification of Death',
        observation: 'Death as a polite gentleman suitor who "kindly stopped"',
        effect:
          'Subverts traditional gothic imagery. Death becomes civilised, patient, even gallant -- transforming terror into acceptance.',
      },
      {
        focus: 'Pacing and tempo',
        observation: '"We slowly drove - He knew no haste"',
        effect:
          "The leisurely pace of the carriage mirrors the speaker's reluctant but unresisting journey. Time slows, reinforcing the sense that death is not an ending but a passage.",
      },
      {
        focus: 'Anaphora',
        observation: '"We passed the School... We passed the Fields... We passed the Setting Sun"',
        effect:
          'The repeated structure stages the life-cycle -- childhood, maturity, twilight -- collapsed into a single journey. It suggests death is the natural culmination of life, not its violation.',
      },
      {
        focus: 'Metaphor of the grave',
        observation: '"A House that seemed / A Swelling of the Ground"',
        effect:
          'The grave is domesticated as a house. Dickinson softens the image of burial, though the reversal "The Cornice - in the Ground" hints at the disorientation of the afterlife.',
      },
      {
        focus: 'Final stanza temporal collapse',
        observation: '"Since then - \'tis Centuries - and yet / Feels shorter than the Day"',
        effect:
          "Time becomes elastic in eternity. The speaker's calm, almost amused tone suggests that death, once entered, is not frightening but expansive.",
      },
    ],
  },
]

function PoemCard({ poem }: { poem: Poem }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="rounded-2xl border border-border/60 bg-card overflow-hidden">
      <div className="p-5 sm:p-6">
        <div className="mb-2 flex flex-wrap items-center gap-2">
          <Badge variant="secondary" className="text-[0.65rem] uppercase tracking-wider">
            {poem.theme}
          </Badge>
          <Badge variant="secondary" className="text-[0.65rem] font-mono">
            {poem.year}
          </Badge>
        </div>
        <h3 className="text-heading-md font-heading text-foreground">{poem.title}</h3>
        <p className="text-sm text-muted-foreground italic">{poem.poet}</p>

        <pre className="mt-4 rounded-xl border border-border/40 bg-background/50 p-4 whitespace-pre-wrap font-serif text-body-sm text-foreground/90 leading-relaxed">
          {poem.text}
        </pre>

        <div className="mt-4 rounded-xl border border-sky-500/20 bg-sky-500/[0.06] p-4">
          <p className="text-xs font-semibold uppercase tracking-wider text-sky-400 mb-1">
            Practice Question
          </p>
          <p className="text-body-sm text-foreground/90 leading-relaxed">{poem.question}</p>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="mt-4 flex w-full items-center justify-between rounded-xl border border-border/40 bg-background/50 p-4 text-left transition-colors hover:bg-accent/30"
        >
          <span className="flex items-center gap-2 text-sm font-semibold text-foreground">
            <Sparkles className="size-4 text-primary" />
            Show model opening and analysis notes
          </span>
          {open ? (
            <ChevronUp className="size-4 text-muted-foreground" />
          ) : (
            <ChevronDown className="size-4 text-muted-foreground" />
          )}
        </button>

        {open && (
          <div className="mt-4 space-y-5">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-foreground mb-2">
                Model Opening Paragraph
              </p>
              <div className="rounded-xl border border-emerald-500/20 bg-emerald-500/[0.04] p-4 text-body-sm italic leading-relaxed text-foreground/90">
                {poem.modelOpening}
              </div>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-foreground mb-2">
                Annotated Analysis Notes
              </p>
              <div className="space-y-3">
                {poem.analysisNotes.map((n, i) => (
                  <div key={i} className="rounded-xl border border-border/40 bg-background/50 p-4">
                    <p className="text-sm font-semibold text-foreground">{n.focus}</p>
                    <p className="mt-1 text-body-sm text-muted-foreground leading-relaxed">
                      <span className="font-semibold text-foreground">Observation: </span>
                      {n.observation}
                    </p>
                    <p className="mt-1 text-body-sm text-muted-foreground leading-relaxed">
                      <span className="font-semibold text-foreground">Effect: </span>
                      {n.effect}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default function UnseenPoetryPracticePage() {
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
          <div className="flex size-10 items-center justify-center rounded-xl bg-rose-500/10">
            <FileText className="size-5 text-rose-400" />
          </div>
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2">
              <h1 className="text-heading-lg font-heading text-foreground">Practice Poems</h1>
              <Badge variant="secondary" className="text-[0.65rem] uppercase tracking-wider">
                Edexcel IGCSE Literature
              </Badge>
            </div>
            <p className="text-body-sm text-muted-foreground">
              Three public-domain poems with practice questions, model openings, and analysis notes
            </p>
          </div>
        </div>
      </div>

      {/* ── Intro ───────────────────────────────────────────────── */}
      <section className="relative overflow-hidden rounded-2xl border border-border/60 bg-gradient-to-br from-card via-card to-rose-500/[0.04] p-6 sm:p-8">
        <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-rose-500/5 blur-3xl" />
        <Badge variant="secondary" className="mb-3">
          <Feather className="mr-1 size-3" />
          Read, annotate, then compare
        </Badge>
        <h2 className="text-heading-md font-heading text-foreground mb-2">
          Three poems. Three questions. Three model openings.
        </h2>
        <p className="text-body-sm text-muted-foreground max-w-2xl leading-relaxed">
          Work through each poem in order. Read the poem first without looking at the question,
          apply the 5-step approach, then attempt the question yourself before revealing the model
          opening. The analysis notes show you how an examiner would break down language, form, and
          structure. For extra challenge, try comparing any two of these poems in a single timed
          essay.
        </p>
      </section>

      {/* ── How to use ──────────────────────────────────────────── */}
      <section className="rounded-2xl border border-border/60 bg-card p-6 sm:p-8">
        <div className="mb-4 flex items-center gap-3">
          <Lightbulb className="size-5 text-clay-600" />
          <h2 className="text-heading-md font-heading text-foreground">
            How to Use These Practice Poems
          </h2>
        </div>
        <ol className="space-y-3">
          {[
            'Read the poem three times without pressure. Do not peek at the question yet.',
            'Apply the 5-step approach: first impressions, meaning, language, form, effect.',
            'Read the question. Write a plan with three comparative or thematic points.',
            'Write a full opening paragraph, aiming for a clear thesis.',
            'Reveal the model opening and analysis notes. Compare your work.',
            'For a full challenge, pick two poems and write a comparative essay in 40 minutes.',
          ].map((step, i) => (
            <li key={i} className="flex gap-3">
              <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-mono font-semibold text-primary">
                {i + 1}
              </span>
              <p className="text-body-sm text-muted-foreground leading-relaxed">{step}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* ── Poem cards ──────────────────────────────────────────── */}
      <section className="space-y-5">
        {POEMS.map((p) => (
          <PoemCard key={p.id} poem={p} />
        ))}
      </section>

      {/* ── Comparison challenge ────────────────────────────────── */}
      <section className="rounded-2xl border border-violet-500/20 bg-violet-500/[0.04] p-6 sm:p-8">
        <div className="mb-4 flex items-center gap-3">
          <CheckCircle2 className="size-5 text-violet-400" />
          <h2 className="text-heading-md font-heading text-foreground">Comparison Challenge</h2>
        </div>
        <p className="text-body-sm text-muted-foreground mb-4 leading-relaxed">
          Once you are comfortable analysing each poem individually, try these comparison prompts.
          Aim for a 40-minute timed response.
        </p>
        <ul className="space-y-3">
          {[
            'Compare how Dickinson\'s "Hope is the thing with feathers" and Wordsworth\'s "I Wandered Lonely as a Cloud" present emotional endurance through natural imagery.',
            'Compare how Dickinson presents death and hope in "Because I could not stop for Death" and "Hope is the thing with feathers". How does her attitude shift?',
            'Compare how Wordsworth and Dickinson use form and structure to reinforce their themes of memory and solitude.',
          ].map((prompt, i) => (
            <li
              key={i}
              className="flex gap-3 rounded-xl border border-border/40 bg-background/50 p-4"
            >
              <span className="text-violet-400 font-mono text-xs shrink-0">0{i + 1}</span>
              <p className="text-body-sm text-muted-foreground leading-relaxed">{prompt}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* ── Next ────────────────────────────────────────────────── */}
      <section className="rounded-2xl border border-border/60 bg-gradient-to-r from-rose-500/[0.06] via-card to-primary/[0.04] p-6 sm:p-8 text-center">
        <FileText className="mx-auto mb-3 size-8 text-rose-400" />
        <h2 className="text-heading-lg font-heading text-foreground">
          Ready to write full essays?
        </h2>
        <p className="mx-auto mt-2 max-w-lg text-body-sm text-muted-foreground">
          Head to the essay technique hub for detailed guidance on introductions, PEEL paragraphs,
          and comparison structures.
        </p>
        <Button
          variant="default"
          size="lg"
          className="mt-5"
          render={<Link href="/igcse/edexcel/essay-technique" />}
        >
          Essay Technique Hub
          <ArrowRight className="size-4" />
        </Button>
      </section>
    </div>
  )
}
