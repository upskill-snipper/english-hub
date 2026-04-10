'use client'
// TODO(board-guard): client component — wrap in server page.tsx that calls requireIgcseBoard(['edexcel-igcse']) once parent edexcel hub guard is verified to cover this route. Parent route is already protected.

import {
  Target,
  ArrowLeft,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  BarChart3,
  Lightbulb,
  AlertTriangle,
  Award,
} from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

/* ── AO breakdown ────────────────────────────────────────────── */

interface AO {
  code: string
  label: string
  weight: string
  colour: string
  bgColour: string
  description: string
  whatExaminerLooksFor: string[]
}

const AOS: AO[] = [
  {
    code: 'AO1',
    label: 'Personal response and textual references',
    weight: 'Roughly 25% of total marks',
    colour: 'text-sky-400',
    bgColour: 'bg-sky-500/10',
    description:
      'Read, understand, and respond to texts. Use precise textual references (including quotations) to support interpretations.',
    whatExaminerLooksFor: [
      'A confident, thoughtful personal reading that feels yours -- not recycled',
      'Short, precise quotations embedded in your sentences, not dropped in blocks',
      'Interpretation that goes beyond surface meaning to what the poet is doing',
      'Consistent engagement with the actual text, not just general statements',
    ],
  },
  {
    code: 'AO2',
    label: 'Language, form, and structure',
    weight: 'Roughly 40% of total marks -- the heaviest weighting',
    colour: 'text-violet-400',
    bgColour: 'bg-violet-500/10',
    description:
      'Analyse the language, form, and structure used by writers to create meanings and effects. Use relevant subject terminology.',
    whatExaminerLooksFor: [
      'Specific subject terminology used precisely: "enjambment", "sibilance", "caesura"',
      'Analysis of effect -- how the technique shapes meaning or feeling',
      'Attention to word-level detail, not just broad techniques',
      'Form and structure treated as meaningful, not decorative',
    ],
  },
  {
    code: 'AO3',
    label: 'Context',
    weight: 'Roughly 15% of total marks (set texts only)',
    colour: 'text-emerald-400',
    bgColour: 'bg-emerald-500/10',
    description:
      'Show understanding of the relationships between texts and the contexts in which they were written.',
    whatExaminerLooksFor: [
      'Context integrated with analysis, not bolted on in a context paragraph',
      'Relevant, specific context -- avoid generic "in Victorian times" statements',
      'Context that genuinely shapes meaning, not just historical background',
      'Light touch for unseen poetry -- AO3 is minimal there',
    ],
  },
  {
    code: 'AO4',
    label: 'Comparison',
    weight: 'Roughly 20% of total marks on comparison questions',
    colour: 'text-amber-400',
    bgColour: 'bg-amber-500/10',
    description:
      'Explore connections across texts, evaluating similarities and differences in writers\' methods.',
    whatExaminerLooksFor: [
      'Sustained comparison throughout the essay, not just at the start or end',
      'Comparison of methods (how writers achieve effects), not just themes',
      'Linking vocabulary: "similarly", "whereas", "in contrast", "building on this"',
      'An overall comparative thesis that could only have come from reading both texts together',
    ],
  },
]

/* ── Band descriptors ───────────────────────────────────────── */

const BANDS = [
  {
    band: 'Grade 9',
    label: 'Perceptive, evaluative',
    colour: 'border-emerald-500/40 bg-emerald-500/[0.06]',
    textColour: 'text-emerald-400',
    descriptors: [
      'Conceptualised response with a clear critical argument',
      'Original, perceptive interpretations that feel personal',
      'Precise analysis of effect at word, line, and structural level',
      'Sustained, nuanced comparison with sophisticated linking',
      'Integrated context that genuinely shapes meaning',
      'Fluent, assured writing with precise subject terminology',
    ],
  },
  {
    band: 'Grade 7-8',
    label: 'Thoughtful, developed',
    colour: 'border-sky-500/30 bg-sky-500/[0.05]',
    textColour: 'text-sky-400',
    descriptors: [
      'Thoughtful response with a clear line of argument',
      'Detailed analysis of language and structure with accurate terminology',
      'Regular comparative links between texts, though sometimes surface-level',
      'Relevant context integrated into paragraphs',
      'Well-selected, embedded quotations used to support analysis',
    ],
  },
  {
    band: 'Grade 5-6',
    label: 'Clear, explained',
    colour: 'border-amber-500/30 bg-amber-500/[0.05]',
    textColour: 'text-amber-400',
    descriptors: [
      'Clear response with some relevant points made',
      'Explanation of language and structure, though sometimes generic',
      'Some comparison between texts, but often block-structured',
      'Context mentioned but not always linked to meaning',
      'Quotations present but sometimes dropped without analysis',
    ],
  },
  {
    band: 'Grade 3-4',
    label: 'Basic, supported',
    colour: 'border-rose-500/30 bg-rose-500/[0.05]',
    textColour: 'text-rose-400',
    descriptors: [
      'Basic understanding of the texts with some textual support',
      'Simple identification of techniques but limited analysis',
      'Minimal comparison -- often treats the texts separately',
      'Context mentioned generically or omitted',
      'Writing generally clear but lacks critical vocabulary',
    ],
  },
]

/* ── Common losers and gainers ──────────────────────────────── */

const GAINS = [
  {
    title: 'One original idea',
    detail:
      'A single genuinely personal interpretation -- even if brief -- signals a Grade 9 candidate to the examiner. Do not rely entirely on memorised readings.',
  },
  {
    title: 'Word-level zoom',
    detail:
      'Instead of "the poet uses a metaphor", analyse a specific word within the metaphor. "Perches" is doing work that "sits" would not.',
  },
  {
    title: 'Linking every paragraph',
    detail:
      'At least one comparative link per paragraph. Examiners scan for these -- they tell the story of your AO4 mark at a glance.',
  },
  {
    title: 'Thesis that travels',
    detail:
      'A conclusion that has genuinely evolved from the introduction -- not a restatement -- signals critical engagement.',
  },
]

const LOSSES = [
  {
    title: 'Dropped quotations',
    detail:
      'Quotes that sit alone in a sentence without being embedded. The examiner sees these as AO1 missed.',
  },
  {
    title: 'Technique spotting',
    detail:
      'Identifying a technique without explaining its effect. "This is a simile" is worth zero AO2 marks on its own.',
  },
  {
    title: 'Block structure comparison',
    detail:
      'Writing about Poem A then Poem B without weaving them together. Caps at mid Grade 6 on AO4.',
  },
  {
    title: 'Ignoring form',
    detail:
      'Writing entirely about language while ignoring stanzas, rhyme, enjambment, and structure. Forfeits half of AO2.',
  },
]

export default function MarkSchemePage() {
  return (
    <div className="space-y-10 pb-16">
      <div>
        <Button
          variant="ghost"
          size="sm"
          className="mb-3 -ml-2 text-muted-foreground"
          render={<Link href="/igcse/edexcel/essay-technique" />}
        >
          <ArrowLeft className="size-3.5" />
          Back to Essay Technique
        </Button>
        <div className="flex items-center gap-3">
          <div className="flex size-10 items-center justify-center rounded-xl bg-emerald-500/10">
            <Target className="size-5 text-emerald-400" />
          </div>
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2">
              <h1 className="text-heading-lg font-heading text-foreground">
                Mark Scheme Decoded
              </h1>
              <Badge variant="secondary" className="text-[0.65rem] uppercase tracking-wider">
                Edexcel IGCSE 4ET1
              </Badge>
            </div>
            <p className="text-body-sm text-muted-foreground">
              How examiners actually mark your 4ET1 response -- AOs, band descriptors, and the
              moves that lift your grade
            </p>
          </div>
        </div>
      </div>

      {/* ── Intro ───────────────────────────────────────────────── */}
      <section className="relative overflow-hidden rounded-2xl border border-border/60 bg-gradient-to-br from-card via-card to-emerald-500/[0.04] p-6 sm:p-8">
        <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-emerald-500/5 blur-3xl" />
        <Badge variant="secondary" className="mb-3">
          <Sparkles className="mr-1 size-3" />
          What the examiner is actually doing
        </Badge>
        <h2 className="text-heading-md font-heading text-foreground mb-2">
          Understanding the mark scheme is half the battle
        </h2>
        <p className="text-body-sm text-muted-foreground max-w-2xl leading-relaxed">
          4ET1 examiners do not mark holistically -- they read with the Assessment Objectives
          in mind and assign your response a level for each one. Knowing which AO carries the
          most weight (it is AO2), what separates "clear" from "perceptive", and exactly what
          moves signal a top-band response lets you write with the examiner in mind. This
          guide translates the official mark scheme into practical advice.
        </p>
      </section>

      {/* ── AO breakdown ────────────────────────────────────────── */}
      <section>
        <div className="mb-5 flex items-center gap-3">
          <BarChart3 className="size-5 text-primary" />
          <h2 className="text-heading-lg font-heading text-foreground">
            The Four Assessment Objectives
          </h2>
        </div>

        <div className="grid gap-4">
          {AOS.map((ao) => (
            <div key={ao.code} className="rounded-2xl border border-border/60 bg-card p-5 sm:p-6">
              <div className="mb-4 flex items-start gap-4">
                <div
                  className={`flex size-12 shrink-0 items-center justify-center rounded-xl ${ao.bgColour}`}
                >
                  <span className={`text-sm font-mono font-bold ${ao.colour}`}>{ao.code}</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-heading-md font-heading text-foreground">{ao.label}</h3>
                  <p className="text-xs text-muted-foreground mt-1">{ao.weight}</p>
                </div>
              </div>
              <p className="text-body-sm text-muted-foreground leading-relaxed mb-4">
                {ao.description}
              </p>
              <div className="rounded-xl border border-border/40 bg-background/50 p-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-foreground mb-2">
                  What the examiner looks for
                </p>
                <ul className="space-y-1.5">
                  {ao.whatExaminerLooksFor.map((item, i) => (
                    <li
                      key={i}
                      className="flex gap-2 text-body-sm text-muted-foreground leading-relaxed"
                    >
                      <CheckCircle2 className="mt-0.5 size-3.5 shrink-0 text-emerald-400" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Band descriptors ────────────────────────────────────── */}
      <section>
        <div className="mb-5 flex items-center gap-3">
          <Award className="size-5 text-amber-400" />
          <h2 className="text-heading-lg font-heading text-foreground">
            Band Descriptors: What Each Grade Looks Like
          </h2>
        </div>
        <p className="text-body-sm text-muted-foreground mb-5 max-w-2xl">
          These descriptors summarise how Edexcel examiners distinguish between grades. Read
          them carefully -- knowing the difference between "clear" (Grade 5) and "perceptive"
          (Grade 9) is the single most actionable piece of advice in exam technique.
        </p>

        <div className="grid gap-4">
          {BANDS.map((b) => (
            <div key={b.band} className={`rounded-2xl border p-5 sm:p-6 ${b.colour}`}>
              <div className="mb-3 flex items-center gap-3">
                <Badge variant="secondary" className="text-[0.65rem] font-mono">
                  {b.band}
                </Badge>
                <h3 className={`text-heading-md font-heading ${b.textColour}`}>{b.label}</h3>
              </div>
              <ul className="space-y-2">
                {b.descriptors.map((d, i) => (
                  <li
                    key={i}
                    className="flex gap-2 text-body-sm text-muted-foreground leading-relaxed"
                  >
                    <span className={b.textColour}>-</span>
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* ── Grade boundaries note ───────────────────────────────── */}
      <section className="rounded-2xl border border-sky-500/20 bg-sky-500/[0.04] p-6 sm:p-8">
        <div className="mb-3 flex items-center gap-3">
          <Lightbulb className="size-5 text-sky-400" />
          <h2 className="text-heading-md font-heading text-foreground">
            A Note on Grade Boundaries
          </h2>
        </div>
        <p className="text-body-sm text-muted-foreground leading-relaxed">
          Edexcel grade boundaries for 4ET1 shift slightly each year, but recent sessions
          suggest a rough guide of: Grade 9 around 78-82%, Grade 7 around 62-66%, Grade 5
          around 42-46%, and Grade 4 around 32-36%. These are indicative only -- boundaries
          are set after each exam series based on candidate performance. What is constant is
          that the top band always rewards perceptive, comparative, word-level analysis
          grounded in a confident personal reading.
        </p>
      </section>

      {/* ── Gains and losses ────────────────────────────────────── */}
      <section className="grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/[0.04] p-6">
          <div className="mb-3 flex items-center gap-3">
            <CheckCircle2 className="size-5 text-emerald-400" />
            <h2 className="text-heading-md font-heading text-foreground">
              Quick Wins That Gain Marks
            </h2>
          </div>
          <ul className="space-y-3">
            {GAINS.map((g) => (
              <li key={g.title} className="rounded-xl border border-border/40 bg-background/50 p-3">
                <p className="text-sm font-semibold text-foreground">{g.title}</p>
                <p className="mt-1 text-xs text-muted-foreground leading-relaxed">{g.detail}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl border border-amber-500/20 bg-amber-500/[0.04] p-6">
          <div className="mb-3 flex items-center gap-3">
            <AlertTriangle className="size-5 text-amber-400" />
            <h2 className="text-heading-md font-heading text-foreground">
              Common Losses That Cap Your Grade
            </h2>
          </div>
          <ul className="space-y-3">
            {LOSSES.map((l) => (
              <li key={l.title} className="rounded-xl border border-border/40 bg-background/50 p-3">
                <p className="text-sm font-semibold text-foreground">{l.title}</p>
                <p className="mt-1 text-xs text-muted-foreground leading-relaxed">{l.detail}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Final CTA ───────────────────────────────────────────── */}
      <section className="rounded-2xl border border-border/60 bg-gradient-to-r from-emerald-500/[0.06] via-card to-primary/[0.04] p-6 sm:p-8 text-center">
        <Target className="mx-auto mb-3 size-8 text-emerald-400" />
        <h2 className="text-heading-lg font-heading text-foreground">
          Practice with real unseen poems
        </h2>
        <p className="mx-auto mt-2 max-w-lg text-body-sm text-muted-foreground">
          Understanding the mark scheme is one thing -- using it is another. Head to the
          practice poems and try writing a comparative response using the AO framework.
        </p>
        <Button
          variant="default"
          size="lg"
          className="mt-5"
          render={<Link href="/igcse/edexcel/unseen-poetry/practice" />}
        >
          Practice Poems
          <ArrowRight className="size-4" />
        </Button>
      </section>
    </div>
  )
}
