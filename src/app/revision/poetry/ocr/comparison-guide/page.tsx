'use client'

import Link from 'next/link'
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Sparkles,
  Lightbulb,
  CheckCircle2,
  AlertTriangle,
  PenLine,
  Layers,
  MessageSquareQuote,
  GitCompareArrows,
  Target,
  Clock,
} from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { useT } from '@/lib/i18n/use-t'

// ─── Page ────────────────────────────────────────────────────────────────────

export default function OCRComparisonGuidePage() {
  const t = useT()
  return (
    <div className="space-y-10 pb-16">
      {/* ── Back nav ──────────────────────────────────────────────────── */}
      <div>
        <Button
          variant="ghost"
          size="sm"
          className="mb-3 -ml-2 text-muted-foreground"
          render={<Link href="/revision/poetry/ocr" />}
        >
          <ArrowLeft className="size-3.5" />
          {t('poetry_hub.ocr.back_to_anthology')}
        </Button>
      </div>

      {/* ── Hero ──────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden rounded-2xl border border-border/60 bg-gradient-to-br from-card via-card to-primary/[0.04] p-6 sm:p-8 lg:p-10">
        <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-violet-500/5 blur-3xl" />

        <div className="relative">
          <div className="mb-4 flex flex-wrap items-center gap-2">
            <Badge variant="secondary">
              <Sparkles className="mr-1 size-3" />
              {t('poetry_hub.ocr.badge_anthology')}
            </Badge>
            <Badge className="bg-primary/10 text-primary border-primary/20">OCR</Badge>
          </div>

          <h1 className="text-display-sm font-heading text-foreground sm:text-display">
            {t('poetry_hub.ocr.cg.title')}
          </h1>
          <p className="mt-3 max-w-2xl text-body-lg text-muted-foreground">
            {t('poetry_hub.ocr.cg.lead')}
          </p>
        </div>
      </section>

      {/* ── What the exam asks ────────────────────────────────────────── */}
      <section className="rounded-2xl border border-border/60 bg-card p-6 sm:p-8">
        <div className="mb-5 flex items-center gap-3">
          <div className="flex size-10 items-center justify-center rounded-xl bg-primary/10">
            <Target className="size-5 text-primary" />
          </div>
          <h2 className="text-heading-lg font-heading text-foreground">
            {t('poetry_hub.ocr.cg.what_asks_title')}
          </h2>
        </div>

        <div className="space-y-4 text-body-sm text-muted-foreground leading-relaxed">
          <p>
            In Paper 2 (Exploring Poetry and Shakespeare), Section B tests your knowledge of the OCR{' '}
            <em>Towards a World Unknown</em> poetry anthology (J352). You will be given{' '}
            <strong className="text-foreground">one poem</strong> from your studied cluster printed
            on the paper, along with a question that asks you to compare it with{' '}
            <strong className="text-foreground">another poem of your choice</strong> from the same
            cluster.
          </p>
          <p>
            The question will focus on a theme, idea, or method -- for example, "How do the poets
            present conflict?" or "Compare how the poets use nature to explore ideas about power."
            You must write a comparative essay that analyses both poems in detail.
          </p>
        </div>

        <div className="mt-5 grid gap-4 sm:grid-cols-3">
          <div className="rounded-xl border border-border/40 bg-background/50 p-4 text-center">
            <Clock className="mx-auto mb-2 size-5 text-clay-600" />
            <p className="text-sm font-semibold text-foreground">
              {t('poetry_hub.ocr.cg.time_label')}
            </p>
            <p className="mt-1 text-caption text-muted-foreground">
              {t('poetry_hub.ocr.cg.time_value')}
            </p>
          </div>
          <div className="rounded-xl border border-border/40 bg-background/50 p-4 text-center">
            <Target className="mx-auto mb-2 size-5 text-emerald-400" />
            <p className="text-sm font-semibold text-foreground">
              {t('poetry_hub.ocr.cg.marks_label')}
            </p>
            <p className="mt-1 text-caption text-muted-foreground">
              {t('poetry_hub.ocr.cg.marks_value')}
            </p>
          </div>
          <div className="rounded-xl border border-border/40 bg-background/50 p-4 text-center">
            <Layers className="mx-auto mb-2 size-5 text-violet-400" />
            <p className="text-sm font-semibold text-foreground">
              {t('poetry_hub.ocr.cg.assess_label')}
            </p>
            <p className="mt-1 text-caption text-muted-foreground">
              {t('poetry_hub.ocr.cg.assess_value')}
            </p>
          </div>
        </div>
      </section>

      {/* ── Assessment Objectives ─────────────────────────────────────── */}
      <section className="rounded-2xl border border-border/60 bg-card p-6 sm:p-8">
        <div className="mb-5 flex items-center gap-3">
          <div className="flex size-10 items-center justify-center rounded-xl bg-violet-500/10">
            <Layers className="size-5 text-violet-400" />
          </div>
          <h2 className="text-heading-lg font-heading text-foreground">
            {t('poetry_hub.ocr.cg.aos_title')}
          </h2>
        </div>

        <div className="space-y-4">
          <div className="rounded-xl border border-border/40 bg-background/50 p-4">
            <div className="flex items-start gap-3">
              <Badge className="mt-0.5 shrink-0 bg-violet-500/15 text-violet-300 border-violet-500/20">
                AO1
              </Badge>
              <div>
                <p className="text-sm font-semibold text-foreground">
                  Read, understand and respond to texts
                </p>
                <p className="mt-1 text-body-sm text-muted-foreground leading-relaxed">
                  Show that you understand both poems. Use well-chosen quotations to support a
                  clear, personal interpretation. Maintain a critical, analytical style throughout.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-border/40 bg-background/50 p-4">
            <div className="flex items-start gap-3">
              <Badge className="mt-0.5 shrink-0 bg-emerald-500/15 text-emerald-300 border-emerald-500/20">
                AO2
              </Badge>
              <div>
                <p className="text-sm font-semibold text-foreground">
                  Analyse the language, form and structure used by a writer
                </p>
                <p className="mt-1 text-body-sm text-muted-foreground leading-relaxed">
                  This is the most heavily weighted objective. Identify specific techniques
                  (metaphor, enjambment, caesura, rhyme scheme, etc.) and explain their effect on
                  the reader. Name the technique, quote it, then analyse what it does.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-border/40 bg-background/50 p-4">
            <div className="flex items-start gap-3">
              <Badge className="mt-0.5 shrink-0 bg-amber-500/15 text-amber-700 border-amber-500/20">
                AO3
              </Badge>
              <div>
                <p className="text-sm font-semibold text-foreground">
                  Show understanding of context
                </p>
                <p className="mt-1 text-body-sm text-muted-foreground leading-relaxed">
                  Weave in relevant biographical, historical or literary context -- but only where
                  it deepens your analysis. Avoid bolting on context as a separate paragraph;
                  instead, use it to explain why a poet might have chosen a particular word or
                  image.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Essay structure ───────────────────────────────────────────── */}
      <section className="rounded-2xl border border-border/60 bg-card p-6 sm:p-8">
        <div className="mb-5 flex items-center gap-3">
          <div className="flex size-10 items-center justify-center rounded-xl bg-primary/10">
            <PenLine className="size-5 text-primary" />
          </div>
          <h2 className="text-heading-lg font-heading text-foreground">
            {t('poetry_hub.ocr.cg.structure_title')}
          </h2>
        </div>

        <p className="mb-6 text-body-sm text-muted-foreground leading-relaxed">
          There is no single "correct" structure, but the approach below is tried and tested for OCR
          poetry comparisons. It keeps both poems in play throughout, which is what examiners want
          to see.
        </p>

        <div className="space-y-6">
          {/* Step 1 */}
          <div className="relative border-l-2 border-primary/30 pl-6">
            <div className="absolute -left-3 top-0 flex size-6 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
              1
            </div>
            <h3 className="text-heading-sm font-heading text-foreground">
              Introduction (2--3 sentences)
            </h3>
            <p className="mt-2 text-body-sm text-muted-foreground leading-relaxed">
              Name both poems and poets. State the shared theme or idea the question is asking
              about. Signal the key difference or tension between the two poems -- this becomes your
              overarching argument.
            </p>
            <div className="mt-3 rounded-lg bg-muted/30 p-3">
              <p className="text-caption text-muted-foreground italic">
                Example opening: "Both [Poem A] by [Poet A] and [Poem B] by [Poet B] explore
                [theme], yet while [Poet A] presents it as [interpretation], [Poet B] suggests
                [contrasting interpretation]."
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="relative border-l-2 border-primary/30 pl-6">
            <div className="absolute -left-3 top-0 flex size-6 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
              2
            </div>
            <h3 className="text-heading-sm font-heading text-foreground">
              Point 1: Compare a shared idea
            </h3>
            <p className="mt-2 text-body-sm text-muted-foreground leading-relaxed">
              Identify a specific aspect of the theme that both poems address. Analyse a quotation
              from Poem A, then link to Poem B with a comparison connective ("Similarly...", "In
              contrast...", "However..."). Analyse a quotation from Poem B. End the paragraph with a
              sentence that evaluates the difference.
            </p>
          </div>

          {/* Step 3 */}
          <div className="relative border-l-2 border-primary/30 pl-6">
            <div className="absolute -left-3 top-0 flex size-6 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
              3
            </div>
            <h3 className="text-heading-sm font-heading text-foreground">
              Point 2: Compare methods (language/imagery)
            </h3>
            <p className="mt-2 text-body-sm text-muted-foreground leading-relaxed">
              Move from what the poets say to how they say it. Choose a technique from each poem
              (e.g., metaphor in one, personification in the other) and compare the effects they
              create. This is where AO2 marks are won.
            </p>
          </div>

          {/* Step 4 */}
          <div className="relative border-l-2 border-primary/30 pl-6">
            <div className="absolute -left-3 top-0 flex size-6 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
              4
            </div>
            <h3 className="text-heading-sm font-heading text-foreground">
              Point 3: Compare structure or form
            </h3>
            <p className="mt-2 text-body-sm text-muted-foreground leading-relaxed">
              Consider how the poems are built. Compare their use of stanza structure, rhyme scheme,
              enjambment, caesura, or overall shape. Explain how these structural choices reinforce
              the poets' messages. Weave in context where it illuminates the choice of form.
            </p>
          </div>

          {/* Step 5 */}
          <div className="relative border-l-2 border-primary/30 pl-6">
            <div className="absolute -left-3 top-0 flex size-6 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
              5
            </div>
            <h3 className="text-heading-sm font-heading text-foreground">
              Conclusion (2--3 sentences)
            </h3>
            <p className="mt-2 text-body-sm text-muted-foreground leading-relaxed">
              Return to your overarching argument from the introduction. Summarise the key
              difference you have explored and, if possible, offer a final evaluative judgement --
              which poet do you find more effective, and why?
            </p>
          </div>
        </div>
      </section>

      {/* ── Comparison connectives ────────────────────────────────────── */}
      <section className="rounded-2xl border border-border/60 bg-card p-6 sm:p-8">
        <div className="mb-5 flex items-center gap-3">
          <div className="flex size-10 items-center justify-center rounded-xl bg-cyan-500/10">
            <GitCompareArrows className="size-5 text-cyan-400" />
          </div>
          <h2 className="text-heading-lg font-heading text-foreground">
            {t('poetry_hub.ocr.cg.connectives_title')}
          </h2>
        </div>

        <p className="mb-5 text-body-sm text-muted-foreground leading-relaxed">
          Use these phrases to move between poems within a paragraph. The best essays compare within
          paragraphs, not in separate poem-by-poem sections.
        </p>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl border border-border/40 bg-background/50 p-4">
            <h3 className="mb-2 text-sm font-semibold text-emerald-400">
              {t('poetry_hub.ocr.cg.connectives_sim')}
            </h3>
            <ul className="space-y-1 text-body-sm text-muted-foreground">
              <li>"Similarly, [Poet B] also..."</li>
              <li>"This idea is echoed in [Poem B], where..."</li>
              <li>"Both poets use [technique] to convey..."</li>
              <li>"[Poet B] shares this concern, presenting..."</li>
              <li>"In a comparable way, [Poem B]..."</li>
            </ul>
          </div>

          <div className="rounded-xl border border-border/40 bg-background/50 p-4">
            <h3 className="mb-2 text-sm font-semibold text-red-400">
              {t('poetry_hub.ocr.cg.connectives_diff')}
            </h3>
            <ul className="space-y-1 text-body-sm text-muted-foreground">
              <li>"However, [Poet B] takes a different approach..."</li>
              <li>"In contrast, [Poem B] suggests..."</li>
              <li>"While [Poet A] uses [technique], [Poet B] instead..."</li>
              <li>"Where [Poem A] is [adjective], [Poem B] is..."</li>
              <li>"Conversely, [Poet B] presents..."</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ── Quoting effectively ───────────────────────────────────────── */}
      <section className="rounded-2xl border border-border/60 bg-card p-6 sm:p-8">
        <div className="mb-5 flex items-center gap-3">
          <div className="flex size-10 items-center justify-center rounded-xl bg-pink-500/10">
            <MessageSquareQuote className="size-5 text-pink-400" />
          </div>
          <h2 className="text-heading-lg font-heading text-foreground">
            {t('poetry_hub.ocr.cg.quoting_title')}
          </h2>
        </div>

        <p className="mb-5 text-body-sm text-muted-foreground leading-relaxed">
          Follow this three-step process for each quotation you use. It ensures you cover AO1
          (understanding) and AO2 (analysis of method) every time.
        </p>

        <div className="space-y-4">
          <div className="rounded-xl border border-border/40 bg-background/50 p-4">
            <h3 className="mb-1 text-sm font-semibold text-foreground">1. Name the technique</h3>
            <p className="text-body-sm text-muted-foreground leading-relaxed">
              Identify what the poet is doing: metaphor, simile, personification, alliteration,
              enjambment, caesura, sibilance, etc. Be specific -- "imagery" is too vague to score
              highly.
            </p>
          </div>

          <div className="rounded-xl border border-border/40 bg-background/50 p-4">
            <h3 className="mb-1 text-sm font-semibold text-foreground">2. Quote it (briefly)</h3>
            <p className="text-body-sm text-muted-foreground leading-relaxed">
              Embed a short quotation -- ideally a few words, not a whole line -- into your
              sentence. Shorter quotations are easier to analyse in depth and show the examiner you
              can zoom in on language.
            </p>
          </div>

          <div className="rounded-xl border border-border/40 bg-background/50 p-4">
            <h3 className="mb-1 text-sm font-semibold text-foreground">3. Analyse the effect</h3>
            <p className="text-body-sm text-muted-foreground leading-relaxed">
              Explain what the technique does to the reader. Use phrases like "this suggests...",
              "this creates a sense of...", "the effect of this is...". Then push further: why did
              the poet choose this technique? What does it reveal about the poem's themes?
            </p>
          </div>
        </div>

        <div className="mt-5 rounded-xl bg-muted/30 p-4">
          <p className="text-caption font-semibold text-muted-foreground">
            Example analytical sentence
          </p>
          <p className="mt-1 text-body-sm text-muted-foreground italic leading-relaxed">
            "[Poet] uses [technique], as seen in the phrase [short quotation], which suggests
            [interpretation]. This creates a sense of [effect], reinforcing the poem's exploration
            of [theme]. In contrast, [Poet B] achieves a similar effect through [different
            technique], demonstrating that..."
          </p>
        </div>
      </section>

      {/* ── Choosing your comparison poem ─────────────────────────────── */}
      <section className="rounded-2xl border border-border/60 bg-card p-6 sm:p-8">
        <div className="mb-5 flex items-center gap-3">
          <div className="flex size-10 items-center justify-center rounded-xl bg-amber-500/10">
            <Lightbulb className="size-5 text-clay-600" />
          </div>
          <h2 className="text-heading-lg font-heading text-foreground">
            {t('poetry_hub.ocr.cg.choosing_title')}
          </h2>
        </div>

        <p className="mb-5 text-body-sm text-muted-foreground leading-relaxed">
          In the exam, one poem is given to you and you choose the second. Here is how to make a
          strong choice quickly.
        </p>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl border border-emerald-500/20 bg-emerald-500/[0.04] p-4">
            <div className="mb-2 flex items-center gap-2">
              <CheckCircle2 className="size-4 text-emerald-400" />
              <h3 className="text-sm font-semibold text-foreground">{t('poetry_hub.ocr.cg.do')}</h3>
            </div>
            <ul className="space-y-2 text-body-sm text-muted-foreground leading-relaxed">
              <li>
                Choose a poem that shares the theme but takes a different approach -- this gives you
                plenty to compare.
              </li>
              <li>
                Pick a poem you know well enough to quote from memory. You will not have the text in
                front of you for the second poem.
              </li>
              <li>
                Consider poems that use contrasting methods (e.g., one uses a regular form, the
                other uses free verse).
              </li>
              <li>Have 2--3 prepared pairings for each major theme before you enter the exam.</li>
            </ul>
          </div>

          <div className="rounded-xl border border-red-500/20 bg-red-500/[0.04] p-4">
            <div className="mb-2 flex items-center gap-2">
              <AlertTriangle className="size-4 text-red-400" />
              <h3 className="text-sm font-semibold text-foreground">
                {t('poetry_hub.ocr.cg.avoid')}
              </h3>
            </div>
            <ul className="space-y-2 text-body-sm text-muted-foreground leading-relaxed">
              <li>
                Choosing a poem just because you like it -- it must fit the question's theme or
                idea.
              </li>
              <li>
                Picking two poems that are too similar. If both poems say the same thing in the same
                way, you will struggle to compare.
              </li>
              <li>
                Choosing a poem you cannot quote from. Without quotations you cannot score AO2
                marks.
              </li>
              <li>Changing your mind mid-essay. Commit to your choice and make it work.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ── Common mistakes ───────────────────────────────────────────── */}
      <section className="rounded-2xl border border-border/60 bg-card p-6 sm:p-8">
        <div className="mb-5 flex items-center gap-3">
          <div className="flex size-10 items-center justify-center rounded-xl bg-red-500/10">
            <AlertTriangle className="size-5 text-red-400" />
          </div>
          <h2 className="text-heading-lg font-heading text-foreground">
            {t('poetry_hub.ocr.cg.mistakes_title')}
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl border border-border/40 bg-background/50 p-4">
            <h3 className="mb-2 text-sm font-semibold text-red-400">
              Writing about each poem separately
            </h3>
            <p className="text-body-sm text-muted-foreground leading-relaxed">
              The biggest mistake is writing half your essay about Poem A, then half about Poem B.
              This is not comparison -- it is two mini-essays. Compare within every paragraph.
            </p>
          </div>

          <div className="rounded-xl border border-border/40 bg-background/50 p-4">
            <h3 className="mb-2 text-sm font-semibold text-red-400">
              Feature-spotting without analysis
            </h3>
            <p className="text-body-sm text-muted-foreground leading-relaxed">
              Saying "the poet uses a metaphor" is not enough. You must explain what the metaphor
              suggests and how it affects the reader. Name it, quote it, analyse it.
            </p>
          </div>

          <div className="rounded-xl border border-border/40 bg-background/50 p-4">
            <h3 className="mb-2 text-sm font-semibold text-red-400">Bolting on context</h3>
            <p className="text-body-sm text-muted-foreground leading-relaxed">
              Do not write a separate "context paragraph". Instead, weave context into your
              analysis: "Owen, writing from the Western Front, uses half-rhyme to reflect the
              dissonance of trench life..."
            </p>
          </div>

          <div className="rounded-xl border border-border/40 bg-background/50 p-4">
            <h3 className="mb-2 text-sm font-semibold text-red-400">Retelling the poem</h3>
            <p className="text-body-sm text-muted-foreground leading-relaxed">
              Do not narrate what happens in the poem. The examiner knows the poems. Focus on how
              and why the poet presents ideas, not on summarising the plot or content.
            </p>
          </div>
        </div>
      </section>

      {/* ── Top-band checklist ─────────────────────────────────────────── */}
      <section className="rounded-2xl border border-border/60 bg-gradient-to-r from-emerald-500/[0.06] via-card to-primary/[0.04] p-6 sm:p-8">
        <div className="mb-5 flex items-center gap-3">
          <div className="flex size-10 items-center justify-center rounded-xl bg-emerald-500/10">
            <CheckCircle2 className="size-5 text-emerald-400" />
          </div>
          <h2 className="text-heading-lg font-heading text-foreground">
            {t('poetry_hub.ocr.cg.checklist_title')}
          </h2>
        </div>

        <p className="mb-5 text-body-sm text-muted-foreground leading-relaxed">
          Before you finish your essay, check you have done all of the following.
        </p>

        <div className="grid gap-3 sm:grid-cols-2">
          {[
            'Named both poems and poets in the introduction',
            'Stated a clear argument comparing both poems',
            'Compared within paragraphs, not in separate sections',
            'Analysed at least 3 quotations from each poem',
            'Named specific techniques (not just "imagery")',
            'Explained the effect of each technique on the reader',
            'Used comparison connectives (however, in contrast, similarly)',
            'Included relevant context woven into analysis',
            'Compared methods (language, form, structure), not just content',
            'Written a conclusion that evaluates which poet is more effective',
          ].map((item) => (
            <div key={item} className="flex items-start gap-2 rounded-lg bg-background/50 p-3">
              <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-emerald-400" />
              <p className="text-body-sm text-muted-foreground">{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Copyright note ────────────────────────────────────────────── */}
      <section className="rounded-2xl border border-border/60 bg-muted/30 p-5 sm:p-6">
        <h2 className="text-heading-sm font-heading text-foreground">
          {t('poetry_hub.ocr.cg.quotes_in_exam_title')}
        </h2>
        <p className="mt-2 text-body-sm text-muted-foreground leading-relaxed">
          The exam paper prints the given poem in full. For your chosen comparison poem, you must
          quote from memory. Focus on learning 2--3 short, technique-rich quotations per poem. You
          can practise with the study pages on this site -- public-domain poems include full
          annotated text, and all poems have key quotation analysis.
        </p>
      </section>

      {/* ── Back CTA ──────────────────────────────────────────────────── */}
      <section className="rounded-2xl border border-border/60 bg-card p-6 sm:p-8 text-center">
        <BookOpen className="mx-auto mb-3 size-8 text-primary" />
        <h2 className="text-heading-lg font-heading text-foreground">
          {t('poetry_hub.ocr.cg.ready_practise')}
        </h2>
        <p className="mx-auto mt-2 max-w-lg text-body-sm text-muted-foreground">
          Try one of our 10 ready-made essay plans, or head to your cluster to revise individual
          poems.
        </p>
        <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
          <Button
            variant="default"
            size="lg"
            render={<Link href="/revision/poetry/ocr/essay-plans" />}
          >
            {t('poetry_hub.ocr.cg.essay_plans_cta')}
            <ArrowRight className="size-4" />
          </Button>
          <Button variant="outline" size="lg" render={<Link href="/revision/poetry/ocr" />}>
            {t('poetry_hub.ocr.back_to_anthology')}
          </Button>
        </div>
      </section>
    </div>
  )
}
