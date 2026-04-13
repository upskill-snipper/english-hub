'use client'
// [P2:auth] board guard deferred — client page, no server-side requireIgcseBoard

import {
  GitCompare,
  ArrowLeft,
  ArrowRight,
  Lightbulb,
  AlertTriangle,
  Sparkles,
  Layers,
  CheckCircle2,
  MessageSquare,
} from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

const LINKING_PHRASES = {
  similarity: [
    'Similarly, [Poet B]...',
    'In the same way, [Poet B] also presents...',
    'Like [Poet A], [Poet B] uses...',
    'Both poets employ... to suggest...',
    'Echoing [Poet A]\'s use of..., [Poet B]...',
    'This mirrors the way [Poet B] constructs...',
  ],
  difference: [
    'In contrast, [Poet B]...',
    'Whereas [Poet A] uses..., [Poet B] prefers...',
    'Conversely, [Poet B] rejects this...',
    'Unlike [Poet A], [Poet B] resists...',
    'However, [Poet B] complicates this by...',
    'While [Poet A] celebrates..., [Poet B] laments...',
  ],
  development: [
    'This idea is pushed further in [Poem B], which...',
    'Building on this, [Poet B]...',
    '[Poem B] takes a similar starting point but arrives at...',
    'Where [Poem A] stops, [Poem B] continues by...',
  ],
}

const STRUCTURES = [
  {
    name: 'Point-by-point (recommended)',
    description:
      'Each paragraph takes one idea and compares both poems within it. Every paragraph is genuinely comparative. This is what hits AO4 hardest.',
    example:
      'Paragraph 1: Imagery of nature. Both poets... / Paragraph 2: Use of form... / Paragraph 3: Emotional effect on the reader...',
    strengths: 'Constant comparison, high AO4 marks, clear argument.',
    weaknesses: 'Needs confident planning; easy to drift if you lose your thesis.',
    colour: 'border-emerald-500/30 bg-emerald-500/[0.04]',
    badge: 'Best for Grade 8-9',
  },
  {
    name: 'Block then block',
    description:
      'First half of the essay covers Poem A, second half covers Poem B with comparative links. Easier to plan but weaker on comparison.',
    example:
      'Paragraphs 1-2: Everything about Poem A / Paragraphs 3-4: Everything about Poem B, linking back.',
    strengths: 'Easy to structure, low risk of confusion.',
    weaknesses: 'Weak comparative linkage, often caps around Grade 6.',
    colour: 'border-amber-500/30 bg-amber-500/[0.04]',
    badge: 'Only if time is tight',
  },
]

export default function UnseenPoetryComparisonPage() {
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
          <div className="flex size-10 items-center justify-center rounded-xl bg-violet-500/10">
            <GitCompare className="size-5 text-violet-400" />
          </div>
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2">
              <h1 className="text-heading-lg font-heading text-foreground">
                Comparison Techniques
              </h1>
              <Badge variant="secondary" className="text-[0.65rem] uppercase tracking-wider">
                Edexcel IGCSE 4ET1
              </Badge>
            </div>
            <p className="text-body-sm text-muted-foreground">
              How to hold two poems in mind at once and write genuinely comparative analysis
            </p>
          </div>
        </div>
      </div>

      {/* ── Intro ───────────────────────────────────────────────── */}
      <section className="relative overflow-hidden rounded-2xl border border-border/60 bg-gradient-to-br from-card via-card to-violet-500/[0.04] p-6 sm:p-8">
        <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-violet-500/5 blur-3xl" />
        <Badge variant="secondary" className="mb-3">
          <Sparkles className="mr-1 size-3" />
          AO4 is the swing mark
        </Badge>
        <h2 className="text-heading-md font-heading text-foreground mb-2">
          Strong comparison is the single biggest differentiator at the top end
        </h2>
        <p className="text-body-sm text-muted-foreground max-w-2xl leading-relaxed">
          Every IGCSE candidate can write about one poem. What separates a Grade 6 from a Grade
          8 is the ability to weave two poems together in sustained comparative paragraphs. The
          examiner is not looking for "and now here is the other poem" -- they want you to read
          both poems through the same analytical lens. That requires planning, linking vocabulary,
          and a thesis that could only come from reading both poems together.
        </p>
      </section>

      {/* ── Planning a comparison ───────────────────────────────── */}
      <section className="rounded-2xl border border-border/60 bg-card p-6 sm:p-8">
        <div className="mb-4 flex items-center gap-3">
          <Layers className="size-5 text-sky-400" />
          <h2 className="text-heading-md font-heading text-foreground">
            Step 1: Plan the Comparison (5 minutes)
          </h2>
        </div>
        <p className="text-body-sm text-muted-foreground mb-5 leading-relaxed">
          Draw two columns on your answer booklet, one for each poem. In each column, write:
          theme, tone, key image, form, effect. Then circle the three most interesting points
          of connection -- these become your three paragraphs.
        </p>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl border border-border/40 bg-background/50 p-4">
            <p className="text-xs font-semibold uppercase tracking-wider text-sky-400 mb-2">
              Poem A column
            </p>
            <ul className="space-y-1.5 text-body-sm text-muted-foreground">
              <li>Theme: hope as endurance</li>
              <li>Tone: gentle, steadfast</li>
              <li>Image: bird with feathers</li>
              <li>Form: three quatrains, dashes</li>
              <li>Effect: quiet resilience</li>
            </ul>
          </div>
          <div className="rounded-xl border border-border/40 bg-background/50 p-4">
            <p className="text-xs font-semibold uppercase tracking-wider text-rose-400 mb-2">
              Poem B column
            </p>
            <ul className="space-y-1.5 text-body-sm text-muted-foreground">
              <li>Theme: joy as transcendence</li>
              <li>Tone: wondering, elevated</li>
              <li>Image: dancing daffodils</li>
              <li>Form: four sestets, ABABCC</li>
              <li>Effect: memory as rescue</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ── Structures ──────────────────────────────────────────── */}
      <section>
        <div className="mb-5 flex items-center gap-3">
          <GitCompare className="size-5 text-violet-400" />
          <h2 className="text-heading-lg font-heading text-foreground">
            Step 2: Choose Your Structure
          </h2>
        </div>

        <div className="grid gap-4">
          {STRUCTURES.map((s) => (
            <div
              key={s.name}
              className={`rounded-2xl border p-5 sm:p-6 ${s.colour}`}
            >
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <h3 className="text-heading-md font-heading text-foreground">{s.name}</h3>
                <Badge variant="secondary" className="text-[0.65rem] uppercase tracking-wider">
                  {s.badge}
                </Badge>
              </div>
              <p className="text-body-sm text-muted-foreground leading-relaxed mb-3">
                {s.description}
              </p>
              <div className="rounded-xl border border-border/40 bg-background/50 p-3 mb-3">
                <p className="text-xs font-mono text-foreground/80">{s.example}</p>
              </div>
              <div className="grid gap-2 sm:grid-cols-2">
                <div className="flex gap-2">
                  <CheckCircle2 className="mt-0.5 size-3.5 shrink-0 text-emerald-400" />
                  <p className="text-xs text-muted-foreground">{s.strengths}</p>
                </div>
                <div className="flex gap-2">
                  <AlertTriangle className="mt-0.5 size-3.5 shrink-0 text-amber-400" />
                  <p className="text-xs text-muted-foreground">{s.weaknesses}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Linking phrases ─────────────────────────────────────── */}
      <section>
        <div className="mb-5 flex items-center gap-3">
          <MessageSquare className="size-5 text-emerald-400" />
          <h2 className="text-heading-lg font-heading text-foreground">
            Step 3: The Linking Vocabulary
          </h2>
        </div>
        <p className="text-body-sm text-muted-foreground mb-5 max-w-2xl">
          These phrases signal to the examiner that you are comparing, not just listing. Aim
          to use at least one linking phrase per paragraph, and vary them across your essay.
        </p>

        <div className="grid gap-4 sm:grid-cols-3">
          <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/[0.04] p-5">
            <p className="text-xs font-semibold uppercase tracking-wider text-emerald-400 mb-3">
              For similarity
            </p>
            <ul className="space-y-2">
              {LINKING_PHRASES.similarity.map((p) => (
                <li key={p} className="text-body-sm text-muted-foreground italic">
                  "{p}"
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-rose-500/20 bg-rose-500/[0.04] p-5">
            <p className="text-xs font-semibold uppercase tracking-wider text-rose-400 mb-3">
              For difference
            </p>
            <ul className="space-y-2">
              {LINKING_PHRASES.difference.map((p) => (
                <li key={p} className="text-body-sm text-muted-foreground italic">
                  "{p}"
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-violet-500/20 bg-violet-500/[0.04] p-5">
            <p className="text-xs font-semibold uppercase tracking-wider text-violet-400 mb-3">
              For development
            </p>
            <ul className="space-y-2">
              {LINKING_PHRASES.development.map((p) => (
                <li key={p} className="text-body-sm text-muted-foreground italic">
                  "{p}"
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── Model paragraph ─────────────────────────────────────── */}
      <section className="rounded-2xl border border-border/60 bg-card p-6 sm:p-8">
        <div className="mb-4 flex items-center gap-3">
          <Sparkles className="size-5 text-primary" />
          <h2 className="text-heading-md font-heading text-foreground">
            Model Comparative Paragraph
          </h2>
        </div>
        <p className="text-body-sm text-muted-foreground mb-4">
          Comparing Dickinson{"'"}s &ldquo;Hope is the thing with feathers&rdquo; with Wordsworth
          {"'"}s &ldquo;I Wandered Lonely as a Cloud&rdquo;:
        </p>
        <div className="rounded-xl border border-border/40 bg-background/50 p-5 text-body-sm italic leading-relaxed text-foreground/90">
          {`Both Dickinson and Wordsworth transform fleeting moments into enduring emotional anchors through natural imagery, though their methods reveal strikingly different relationships with the subject. Dickinson's extended metaphor of the bird that "perches in the soul" internalises hope as a constant tenant, while Wordsworth's daffodils remain decisively external, "fluttering and dancing in the breeze". Where Dickinson domesticates the natural image -- placing it safely within the speaker's self -- Wordsworth preserves the distance between observer and observed, allowing the scene its autonomy. Similarly, both poets use form to reinforce this contrast: Dickinson's trademark dashes create hesitant pauses that mirror hope's fragile persistence, whereas Wordsworth's steady iambic tetrameter and regular ABABCC rhyme suggest a memory already polished smooth. In this way, both poems argue that the natural world offers emotional sustenance, yet Dickinson finds her sustenance by absorbing nature inwards, while Wordsworth finds his by returning to nature in memory.`}
        </div>
        <div className="mt-4 flex gap-3 rounded-xl border border-emerald-500/20 bg-emerald-500/[0.06] p-4">
          <Lightbulb className="mt-0.5 size-4 shrink-0 text-emerald-400" />
          <p className="text-body-sm text-muted-foreground leading-relaxed">
            <span className="font-semibold text-foreground">Notice: </span>
            Every sentence holds both poems in mind. The comparative linking ("while",
            "whereas", "similarly", "in this way") is relentless. And the thesis is something
            that could only come from reading both poems together -- that is AO4 at its best.
          </p>
        </div>
      </section>

      {/* ── Common mistakes ─────────────────────────────────────── */}
      <section className="rounded-2xl border border-amber-500/20 bg-amber-500/[0.04] p-6 sm:p-8">
        <div className="mb-4 flex items-center gap-3">
          <AlertTriangle className="size-5 text-amber-400" />
          <h2 className="text-heading-md font-heading text-foreground">Common Mistakes</h2>
        </div>
        <ul className="space-y-3">
          {[
            'Writing about Poem A for half the essay, then Poem B, with barely a link between them. This caps at Grade 5.',
            'Listing similarities and differences without any analysis of effect. "Both poems are about nature" is not an argument.',
            'Comparing surface features (both have four stanzas) rather than meaning or effect. Form only matters if you link it to meaning.',
            'Forgetting the question. Every paragraph should answer the actual focus -- "how do the poets present X" -- not just describe the poems.',
            'Losing your personal response. Examiners reward candidates who have a genuine view about which poem does what more powerfully.',
          ].map((m) => (
            <li key={m} className="flex gap-3">
              <span className="mt-1 text-amber-400">-</span>
              <p className="text-body-sm text-muted-foreground leading-relaxed">{m}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* ── Next ────────────────────────────────────────────────── */}
      <section className="rounded-2xl border border-border/60 bg-gradient-to-r from-emerald-500/[0.06] via-card to-primary/[0.04] p-6 sm:p-8 text-center">
        <MessageSquare className="mx-auto mb-3 size-8 text-emerald-400" />
        <h2 className="text-heading-lg font-heading text-foreground">
          Now sharpen your language analysis
        </h2>
        <p className="mx-auto mt-2 max-w-lg text-body-sm text-muted-foreground">
          Comparison is only as good as the analysis underneath it. Learn the What-How-Why
          framework and turn observation into insight.
        </p>
        <Button
          variant="default"
          size="lg"
          className="mt-5"
          render={<Link href="/igcse/edexcel/unseen-poetry/language-analysis" />}
        >
          Language Analysis Framework
          <ArrowRight className="size-4" />
        </Button>
      </section>
    </div>
  )
}
