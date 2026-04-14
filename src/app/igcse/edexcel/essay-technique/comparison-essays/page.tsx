'use client'
// [P2:auth] board guard deferred — client page, no server-side requireIgcseBoard

import {
  GitCompare,
  ArrowLeft,
  ArrowRight,
  Sparkles,
  Lightbulb,
  CheckCircle2,
  AlertTriangle,
  Target,
  Layers,
} from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

/* ── Paragraph frames ────────────────────────────────────────── */

const FRAMES = [
  {
    name: 'Shared territory frame',
    structure:
      'Both poets... / However, whereas Poet A..., Poet B... / This reveals that...',
    useFor: 'Opening a comparative paragraph when the similarity is the stronger starting point.',
    example:
      'Both Dickinson and Wordsworth use natural imagery to externalise interior states. However, whereas Dickinson internalises the image (the bird "perches in the soul"), Wordsworth preserves the distance between self and scene. This reveals a fundamental difference in how each poet understands consolation.',
  },
  {
    name: 'Divergent frame',
    structure:
      'While Poet A..., Poet B takes a markedly different approach... / This contrast foregrounds...',
    useFor: 'When the difference is the more striking feature and you want to build the comparison around it.',
    example:
      'While Dickinson reduces hope to the smallest possible image -- a single bird perching -- Wordsworth takes a markedly different approach, multiplying his subject into "ten thousand" dancing flowers. This contrast foregrounds the opposing scales at which each poet finds meaning.',
  },
  {
    name: 'Development frame',
    structure:
      'Poet A establishes... / Poet B pushes this further by... / Together they suggest...',
    useFor: 'When Poem B intensifies or complicates an idea that Poem A introduces. High-level move.',
    example:
      'Dickinson establishes hope as a presence that asks nothing of the self. Wordsworth pushes this further by showing how such presences become self-sustaining in memory. Together they suggest that the most enduring emotional resources are precisely those we neither earn nor tend.',
  },
]

/* ── Thesis statements ───────────────────────────────────────── */

const THESIS_EXAMPLES = [
  {
    level: 'Grade 5',
    statement:
      '"This essay will compare how both poets use nature imagery to talk about hope and joy."',
    problem:
      'Announces the essay instead of arguing. No actual claim about what you will prove. No comparative insight.',
  },
  {
    level: 'Grade 7',
    statement:
      '"Both Dickinson and Wordsworth use natural imagery to present positive emotions, but Dickinson internalises her image while Wordsworth keeps his external."',
    problem:
      'Makes a clear comparative claim, but the claim is descriptive rather than evaluative. No sense of what the difference means.',
  },
  {
    level: 'Grade 9',
    statement:
      '"Where Dickinson domesticates hope by housing it within the self, Wordsworth preserves distance between observer and observed -- suggesting that consolation, for Wordsworth, depends on the world\'s refusal to be owned."',
    problem:
      'A genuinely comparative, evaluative thesis. It reads both poems through a single analytical lens (ownership vs distance) and makes a claim that could only come from having read them together.',
  },
]

export default function ComparisonEssaysPage() {
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
          <div className="flex size-10 items-center justify-center rounded-xl bg-violet-500/10">
            <GitCompare className="size-5 text-violet-400" />
          </div>
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2">
              <h1 className="text-heading-lg font-heading text-foreground">
                Comparison Essays
              </h1>
              <Badge variant="secondary" className="text-[0.65rem] uppercase tracking-wider">
                Edexcel IGCSE Literature
              </Badge>
            </div>
            <p className="text-body-sm text-muted-foreground">
              Point-by-point structure, thesis statements, and paragraph frames for IGCSE Literature
              comparison questions
            </p>
          </div>
        </div>
      </div>

      {/* ── Intro ───────────────────────────────────────────────── */}
      <section className="relative overflow-hidden rounded-2xl border border-border/60 bg-gradient-to-br from-card via-card to-violet-500/[0.04] p-6 sm:p-8">
        <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-violet-500/5 blur-3xl" />
        <Badge variant="secondary" className="mb-3">
          <Sparkles className="mr-1 size-3" />
          Comparison is the differentiator
        </Badge>
        <h2 className="text-heading-md font-heading text-foreground mb-2">
          Comparison is where Grade 6 becomes Grade 9
        </h2>
        <p className="text-body-sm text-muted-foreground max-w-2xl leading-relaxed">
          At the middle grades, candidates write decent analysis of each poem in turn. At the
          top grades, candidates hold both poems in mind in every sentence. This guide shows
          you exactly how to do that: the structures that work, the thesis statements that
          unlock top marks, the paragraph frames that keep your comparison tight, and the
          common pitfalls that cap otherwise strong essays at Grade 6.
        </p>
      </section>

      {/* ── Structure choice ────────────────────────────────────── */}
      <section>
        <div className="mb-5 flex items-center gap-3">
          <Layers className="size-5 text-sky-400" />
          <h2 className="text-heading-lg font-heading text-foreground">
            Point-by-Point vs Block: Why Point-by-Point Wins
          </h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/[0.04] p-5">
            <div className="mb-2 flex items-center gap-2">
              <CheckCircle2 className="size-4 text-emerald-400" />
              <h3 className="text-sm font-semibold text-foreground">Point-by-point</h3>
              <Badge variant="secondary" className="text-[0.65rem]">
                Recommended
              </Badge>
            </div>
            <p className="text-body-sm text-muted-foreground leading-relaxed mb-3">
              Each paragraph takes one idea and compares both poems within it. Every paragraph
              scores comparison marks.
            </p>
            <div className="rounded-xl border border-border/40 bg-background/50 p-3">
              <p className="text-xs font-mono text-foreground/80 leading-relaxed">
                P1: Imagery -- Poem A then Poem B compared
                <br />
                P2: Form -- Poem A then Poem B compared
                <br />
                P3: Effect -- Poem A then Poem B compared
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-amber-500/30 bg-amber-500/[0.04] p-5">
            <div className="mb-2 flex items-center gap-2">
              <AlertTriangle className="size-4 text-amber-400" />
              <h3 className="text-sm font-semibold text-foreground">Block then block</h3>
              <Badge variant="secondary" className="text-[0.65rem]">
                Backup only
              </Badge>
            </div>
            <p className="text-body-sm text-muted-foreground leading-relaxed mb-3">
              Write about Poem A in full, then Poem B in full with links back. Caps around
              Grade 6 for comparison.
            </p>
            <div className="rounded-xl border border-border/40 bg-background/50 p-3">
              <p className="text-xs font-mono text-foreground/80 leading-relaxed">
                P1: Poem A imagery
                <br />
                P2: Poem A form
                <br />
                P3: Poem B imagery (with backlinks)
                <br />
                P4: Poem B form (with backlinks)
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Thesis statements ───────────────────────────────────── */}
      <section>
        <div className="mb-5 flex items-center gap-3">
          <Target className="size-5 text-emerald-400" />
          <h2 className="text-heading-lg font-heading text-foreground">
            Three Levels of Thesis
          </h2>
        </div>
        <p className="text-body-sm text-muted-foreground mb-5 max-w-2xl">
          Your thesis is the single most important sentence in the essay. Here are three
          versions of the same basic idea, pitched at Grade 5, 7, and 9. Notice how the top
          version reads both poems through a single analytical lens.
        </p>

        <div className="grid gap-4">
          {THESIS_EXAMPLES.map((t) => (
            <div key={t.level} className="rounded-2xl border border-border/60 bg-card p-5">
              <Badge variant="secondary" className="mb-3 text-[0.65rem] uppercase tracking-wider">
                {t.level}
              </Badge>
              <p className="text-body-sm italic text-foreground/90 leading-relaxed mb-3">
                {t.statement}
              </p>
              <p className="text-xs text-muted-foreground leading-relaxed">
                <span className="font-semibold text-foreground">Why: </span>
                {t.problem}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Paragraph frames ────────────────────────────────────── */}
      <section>
        <div className="mb-5 flex items-center gap-3">
          <Layers className="size-5 text-violet-400" />
          <h2 className="text-heading-lg font-heading text-foreground">
            Three Paragraph Frames
          </h2>
        </div>
        <p className="text-body-sm text-muted-foreground mb-5 max-w-2xl">
          These frames give you a reliable structure for every comparative paragraph. Pick the
          frame that fits the point you are making, and vary them across the essay.
        </p>

        <div className="space-y-4">
          {FRAMES.map((f) => (
            <div key={f.name} className="rounded-2xl border border-border/60 bg-card p-5">
              <h3 className="text-heading-md font-heading text-foreground mb-2">{f.name}</h3>
              <div className="mb-3 rounded-xl border border-border/40 bg-background/50 p-3">
                <p className="text-xs font-semibold uppercase tracking-wider text-foreground mb-1">
                  Structure
                </p>
                <p className="text-xs font-mono text-muted-foreground">{f.structure}</p>
              </div>
              <p className="text-body-sm text-muted-foreground leading-relaxed mb-3">
                <span className="font-semibold text-foreground">Use for: </span>
                {f.useFor}
              </p>
              <div className="rounded-xl border border-emerald-500/20 bg-emerald-500/[0.06] p-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-emerald-400 mb-1">
                  Example
                </p>
                <p className="text-body-sm italic text-muted-foreground leading-relaxed">
                  {f.example}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Common mistakes ─────────────────────────────────────── */}
      <section className="rounded-2xl border border-amber-500/20 bg-amber-500/[0.04] p-6 sm:p-8">
        <div className="mb-4 flex items-center gap-3">
          <AlertTriangle className="size-5 text-amber-400" />
          <h2 className="text-heading-md font-heading text-foreground">
            Common Mistakes That Cap Your Grade
          </h2>
        </div>
        <ul className="space-y-3">
          {[
            'Writing about one poem for five paragraphs then the other. This is the #1 reason strong candidates miss Grade 8.',
            'Comparing surface features ("both have four stanzas") instead of meaning or effect. Form only matters when you link it.',
            'Forgetting the question mid-essay. Every paragraph should answer the actual prompt, not just describe the poems.',
            'Using "compared to" or "contrasted with" once per essay and calling it comparison. Every paragraph needs sustained linking language.',
            'Ending with a thesis you did not prove. Your conclusion should reflect the argument you actually made, not the one you planned.',
          ].map((m) => (
            <li key={m} className="flex gap-3">
              <span className="mt-1 text-amber-400">-</span>
              <p className="text-body-sm text-muted-foreground leading-relaxed">{m}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* ── Planning checklist ──────────────────────────────────── */}
      <section className="rounded-2xl border border-border/60 bg-card p-6 sm:p-8">
        <div className="mb-4 flex items-center gap-3">
          <Lightbulb className="size-5 text-amber-400" />
          <h2 className="text-heading-md font-heading text-foreground">
            5-Minute Planning Checklist
          </h2>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {[
            'Underline the question stem -- what are you actually comparing?',
            'Two columns: Poem A, Poem B. Jot theme, image, form, effect in each.',
            'Circle the three strongest points of connection.',
            'Draft a one-sentence comparative thesis.',
            'Decide paragraph order: strongest point first.',
            'Pick at least two quotes per poem you will definitely use.',
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

      {/* ── Next ────────────────────────────────────────────────── */}
      <section className="rounded-2xl border border-border/60 bg-gradient-to-r from-emerald-500/[0.06] via-card to-primary/[0.04] p-6 sm:p-8 text-center">
        <Target className="mx-auto mb-3 size-8 text-emerald-400" />
        <h2 className="text-heading-lg font-heading text-foreground">
          Now see how examiners actually mark you
        </h2>
        <p className="mx-auto mt-2 max-w-lg text-body-sm text-muted-foreground">
          Understanding the band descriptors -- what counts as "analytical" vs "perceptive" --
          is the final piece. Learn exactly what each grade level looks like.
        </p>
        <Button
          variant="default"
          size="lg"
          className="mt-5"
          render={<Link href="/igcse/edexcel/essay-technique/mark-scheme" />}
        >
          Mark Scheme Decoded
          <ArrowRight className="size-4" />
        </Button>
      </section>
    </div>
  )
}
