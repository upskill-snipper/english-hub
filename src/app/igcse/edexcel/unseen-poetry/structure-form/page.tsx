'use client'

import {
  Layers,
  ArrowLeft,
  ArrowRight,
  Sparkles,
  BookOpen,
  GitCompare,
  Lightbulb,
} from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

/* ── Forms ───────────────────────────────────────────────────── */

const FORMS = [
  {
    name: 'Sonnet',
    shape: '14 lines, iambic pentameter, rigid rhyme scheme',
    types:
      'Petrarchan (8+6 with ABBAABBA CDECDE), Shakespearean (3 quatrains + couplet, ABABCDCDEFEFGG)',
    meaning:
      'Traditionally a love poem, but modern sonnets use the form ironically. The volta (turn) at line 9 (Petrarchan) or line 13 (Shakespearean) is where the argument changes -- always analyse it.',
    example:
      'Shakespeare\'s Sonnet 18 opens with a question, develops the metaphor, then resolves it in the final couplet.',
  },
  {
    name: 'Ballad',
    shape: 'Quatrains in ABCB rhyme, alternating iambic tetrameter and trimeter',
    types: 'Traditional (folk, oral), literary ballad (Romantic era)',
    meaning:
      'Ballads tell stories. The simple form connects to folk memory and oral tradition -- often used for loss, love, or communal experience. The repetition and refrain pattern help it linger.',
    example:
      'Coleridge\'s "The Rime of the Ancient Mariner" uses the ballad form to give its supernatural tale the weight of folk belief.',
  },
  {
    name: 'Dramatic monologue',
    shape: 'A single speaker addressing a silent listener, often in blank verse',
    types: 'Victorian dramatic monologue is the classic form (Browning)',
    meaning:
      'The speaker reveals more about themselves than they intend. The reader becomes a detective, reading between the lines to understand the speaker\'s bias or moral failing.',
    example:
      'Browning\'s "My Last Duchess" -- the Duke incriminates himself through his own words.',
  },
  {
    name: 'Free verse',
    shape: 'No regular metre, no consistent rhyme scheme',
    types: 'Modern / contemporary poetry, Modernism onwards',
    meaning:
      'Free verse is never "formless". Look for line breaks, rhythm shifts, breath units, visual shape. The absence of traditional form is itself a choice -- often rejecting tradition or mimicking natural speech.',
    example:
      'Whitman\'s "Song of Myself" uses long breath-line stanzas to mirror the democratic sweep of the speaker\'s voice.',
  },
  {
    name: 'Ode',
    shape: 'Formal, elevated, usually in stanzas of equal length',
    types: 'Pindaric (complex stanza structure), Horatian (regular stanzas), irregular',
    meaning:
      'An ode addresses and celebrates its subject with serious, elevated language. Look for apostrophe -- direct address to an object, idea, or absent person.',
    example: 'Keats\'s "Ode to a Nightingale" addresses the bird directly and meditates on mortality.',
  },
  {
    name: 'Elegy',
    shape: 'No fixed form, but tonally reflective and mournful',
    types: 'Pastoral elegy, personal elegy, public elegy',
    meaning:
      'An elegy laments loss and often works through stages: grief, reflection, consolation. Watch for shifts from past to present tense.',
    example: 'Tennyson\'s "In Memoriam A.H.H." moves through years of mourning toward acceptance.',
  },
]

/* ── Structural features ─────────────────────────────────────── */

const STRUCTURAL_FEATURES = [
  {
    name: 'Stanzas',
    question: 'How many? Are they the same length?',
    analysis:
      'Equal stanzas suggest control, balance, logical progression. Irregular stanzas suggest emotional disruption, fragmentation, or thought breaking free of form. A single long stanza can feel breathless or overwhelming.',
  },
  {
    name: 'Rhyme scheme',
    question: 'Is there a pattern? Does it ever break?',
    analysis:
      'Regular rhyme creates closure and order. Half-rhyme (slant rhyme) creates unease. Broken rhyme schemes often mark a moment of crisis or change. A couplet at the end of an otherwise unrhymed poem draws focus like a spotlight.',
  },
  {
    name: 'Enjambment',
    question: 'Do lines run over the line break without punctuation?',
    analysis:
      'Enjambment creates forward momentum, urgency, or the feeling of thought spilling beyond its container. It can also isolate words at the line break -- always check what word the poet left hanging.',
  },
  {
    name: 'End-stopping',
    question: 'Do lines close with punctuation?',
    analysis:
      'End-stopped lines feel measured, deliberate, and controlled. A poem full of end-stops often feels reflective or resigned. Sudden end-stopping after enjambment can signal arrival, conclusion, or finality.',
  },
  {
    name: 'Caesura',
    question: 'Are there pauses within lines?',
    analysis:
      'A caesura breaks the rhythm and creates a moment of emphasis or hesitation. Dickinson\'s dashes are caesurae. Look for where the pause falls: does it split a line in half, isolating an idea?',
  },
  {
    name: 'Volta',
    question: 'Where does the argument or feeling turn?',
    analysis:
      'Every sustained poem has at least one turn. In sonnets it is formal (line 9 or line 13). In free verse it can come anywhere -- a word like "but", "yet", or "and then" often signals it. Naming the volta gives your essay a spine.',
  },
  {
    name: 'Metre and rhythm',
    question: 'What is the underlying rhythm, and where does it break?',
    analysis:
      'Iambic pentameter feels natural to English speech. Trochaic metre ("double, double") feels insistent or incantatory. Anapaestic metre feels galloping. What matters is where the metre breaks: a broken foot often marks emotional rupture.',
  },
  {
    name: 'Repetition',
    question: 'What words, phrases, or structures return?',
    analysis:
      'Repetition can be incantatory, obsessive, comforting, or wearied. Anaphora (repeated beginnings) builds momentum. An exact repeated line at the end of a poem acts as a refrain and reframes everything before it.',
  },
]

export default function StructureFormPage() {
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
          <div className="flex size-10 items-center justify-center rounded-xl bg-amber-500/10">
            <Layers className="size-5 text-amber-400" />
          </div>
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2">
              <h1 className="text-heading-lg font-heading text-foreground">
                Form and Structure
              </h1>
              <Badge variant="secondary" className="text-[0.65rem] uppercase tracking-wider">
                Edexcel IGCSE 4ET1
              </Badge>
            </div>
            <p className="text-body-sm text-muted-foreground">
              Reading the shape of a poem on the page
            </p>
          </div>
        </div>
      </div>

      {/* ── Intro ───────────────────────────────────────────────── */}
      <section className="relative overflow-hidden rounded-2xl border border-border/60 bg-gradient-to-br from-card via-card to-amber-500/[0.04] p-6 sm:p-8">
        <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-amber-500/5 blur-3xl" />
        <Badge variant="secondary" className="mb-3">
          <Sparkles className="mr-1 size-3" />
          Form is never accidental
        </Badge>
        <h2 className="text-heading-md font-heading text-foreground mb-2">
          Every choice a poet makes about shape has meaning
        </h2>
        <p className="text-body-sm text-muted-foreground max-w-2xl leading-relaxed">
          When you open a poem, the first thing you see is its shape on the page. Stanza
          length, rhyme, line breaks, metre -- these are not decoration. They shape how we
          read, how we pause, and what we feel. The strongest candidates at 4ET1 always link
          structural features back to meaning: form is never described in isolation but always
          tied to effect. This guide covers the forms and structural features you are most
          likely to meet in an unseen poem.
        </p>
      </section>

      {/* ── Forms ───────────────────────────────────────────────── */}
      <section>
        <div className="mb-5 flex items-center gap-3">
          <BookOpen className="size-5 text-primary" />
          <h2 className="text-heading-lg font-heading text-foreground">
            Common Poetic Forms
          </h2>
        </div>
        <p className="text-body-sm text-muted-foreground mb-5 max-w-2xl">
          If you can identify the form, you already know something about the poem&apos;s intent.
          Here are the forms you are most likely to encounter.
        </p>

        <div className="grid gap-4 md:grid-cols-2">
          {FORMS.map((f) => (
            <div key={f.name} className="rounded-2xl border border-border/60 bg-card p-5">
              <h3 className="text-heading-md font-heading text-foreground mb-2">{f.name}</h3>
              <div className="mb-3 space-y-2">
                <div className="rounded-lg border border-border/40 bg-background/50 p-3">
                  <p className="text-xs font-semibold uppercase tracking-wider text-foreground mb-1">
                    Shape
                  </p>
                  <p className="text-xs text-muted-foreground">{f.shape}</p>
                </div>
                <div className="rounded-lg border border-border/40 bg-background/50 p-3">
                  <p className="text-xs font-semibold uppercase tracking-wider text-foreground mb-1">
                    Variants
                  </p>
                  <p className="text-xs text-muted-foreground">{f.types}</p>
                </div>
              </div>
              <p className="text-body-sm text-muted-foreground leading-relaxed mb-3">
                {f.meaning}
              </p>
              <div className="rounded-xl border border-emerald-500/20 bg-emerald-500/[0.06] p-3">
                <p className="text-xs italic text-muted-foreground leading-relaxed">
                  <span className="font-semibold text-foreground">Example: </span>
                  {f.example}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Structural features ─────────────────────────────────── */}
      <section>
        <div className="mb-5 flex items-center gap-3">
          <Layers className="size-5 text-violet-400" />
          <h2 className="text-heading-lg font-heading text-foreground">
            Structural Features to Analyse
          </h2>
        </div>
        <p className="text-body-sm text-muted-foreground mb-5 max-w-2xl">
          Even if you cannot name the form, you can always analyse these eight structural
          features. Each one is a question to ask, and each one connects to meaning.
        </p>

        <div className="grid gap-4">
          {STRUCTURAL_FEATURES.map((f) => (
            <div key={f.name} className="rounded-2xl border border-border/60 bg-card p-5">
              <div className="mb-2 flex flex-wrap items-center gap-2">
                <h3 className="text-heading-md font-heading text-foreground">{f.name}</h3>
                <Badge variant="secondary" className="text-[0.65rem] italic">
                  {f.question}
                </Badge>
              </div>
              <p className="text-body-sm text-muted-foreground leading-relaxed">
                {f.analysis}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Worked example ──────────────────────────────────────── */}
      <section className="rounded-2xl border border-border/60 bg-card p-6 sm:p-8">
        <div className="mb-4 flex items-center gap-3">
          <Lightbulb className="size-5 text-primary" />
          <h2 className="text-heading-md font-heading text-foreground">
            Worked Example: Reading Form in Dickinson
          </h2>
        </div>
        <p className="text-body-sm text-muted-foreground mb-4">
          Applying form and structure analysis to &ldquo;Because I could not stop for Death&rdquo;:
        </p>
        <div className="rounded-xl border border-border/40 bg-background/50 p-5 text-body-sm italic leading-relaxed text-foreground/90">
          {`Dickinson uses a modified ballad form -- six quatrains in loose iambic tetrameter with alternating ABCB rhyme -- to give her supernatural subject the everyday, almost sing-song cadence of a folk song. This domestic rhythm is crucial: by housing death inside a familiar, oral form, she strips it of gothic terror and places it within the rhythms of ordinary life. Her trademark dashes function as caesurae that constantly interrupt the flow, creating hesitations that mirror the speaker's own suspended state between living and dying. The final stanza's volta -- "Since then - 'tis Centuries - and yet / Feels shorter than the Day" -- shifts the poem abruptly from narrative recollection into eternity itself, collapsing time and form together: the ballad rhythm persists, but the speaker now speaks from outside chronology altogether.`}
        </div>
      </section>

      {/* ── Next ────────────────────────────────────────────────── */}
      <section className="rounded-2xl border border-border/60 bg-gradient-to-r from-primary/[0.06] via-card to-violet-500/[0.04] p-6 sm:p-8 text-center">
        <GitCompare className="mx-auto mb-3 size-8 text-violet-400" />
        <h2 className="text-heading-lg font-heading text-foreground">
          Put it all together with comparison
        </h2>
        <p className="mx-auto mt-2 max-w-lg text-body-sm text-muted-foreground">
          Form, language, comparison, and thesis -- the 4ET1 unseen poetry question pulls all
          of these together. Revisit the comparison guide now that you have the full toolkit.
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
