'use client'

import {
  PenLine,
  ArrowLeft,
  ArrowRight,
  GitCompare,
  Target,
  Sparkles,
  BookOpen,
  Lightbulb,
  CheckCircle2,
  Layers,
  Quote,
} from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { useT } from '@/lib/i18n/use-t'

/* ── Sub-pages ───────────────────────────────────────────────── */

const GUIDES = [
  {
    title: 'Comparison Essays',
    description:
      'Point-by-point vs block structure, linking vocabulary, and the thesis statements that unlock Grade 8-9 comparison marks.',
    href: '/igcse/edexcel/essay-technique/comparison-essays',
    icon: GitCompare,
    colour: 'text-violet-400',
    bgColour: 'bg-violet-500/10',
    tag: 'Essential',
  },
  {
    title: 'Mark Scheme Decoded',
    description:
      'How examiners mark your understanding, language analysis, context, and comparison. Band descriptors, grade boundaries, and what separates a 6 from a 9.',
    href: '/igcse/edexcel/essay-technique/mark-scheme',
    icon: Target,
    colour: 'text-emerald-400',
    bgColour: 'bg-emerald-500/10',
  },
]

/* ── PEEL breakdown ─────────────────────────────────────────── */

const PEEL_STEPS = [
  {
    letter: 'P',
    label: 'Point',
    colour: 'text-sky-400',
    bgColour: 'bg-sky-500/10',
    description:
      'A clear analytical statement that answers the question. This is your topic sentence, and it should be framed around effect or meaning, not just technique.',
    example:
      '"Dickinson presents hope as a quiet, persistent companion rather than a triumphant emotion."',
  },
  {
    letter: 'E',
    label: 'Evidence',
    colour: 'text-violet-400',
    bgColour: 'bg-violet-500/10',
    description:
      'A short, embedded quotation that supports your point. Never drop a quote on its own -- weave it into your sentence so it reads naturally.',
    example: '"She metaphorises hope as \'the thing with feathers / That perches in the soul\'."',
  },
  {
    letter: 'E',
    label: 'Explanation',
    colour: 'text-emerald-400',
    bgColour: 'bg-emerald-500/10',
    description:
      'Analyse the quotation using What-How-Why. Zoom in on individual words or images and explain their effect.',
    example:
      '"The verb \'perches\' suggests lightness and poise, as if hope is a delicate guest that has taken up residence without ever demanding attention."',
  },
  {
    letter: 'L',
    label: 'Link',
    colour: 'text-clay-600',
    bgColour: 'bg-amber-500/10',
    description:
      'Link back to the question, to the other poem (for comparison), or to the wider thesis. This closes the paragraph and keeps your argument tight.',
    example:
      '"This gentle personification reinforces Dickinson\'s broader argument: that hope\'s power lies not in grandeur but in its capacity to endure unseen."',
  },
]

export default function EssayTechniqueHubPage() {
  const tr = useT()
  return (
    <div className="space-y-10 pb-16">
      <div>
        <Button
          variant="ghost"
          size="sm"
          className="mb-3 -ml-2 text-muted-foreground"
          render={<Link href="/igcse/edexcel" />}
        >
          <ArrowLeft className="size-3.5" />
          {tr('igcse.page.back_to_edexcel_hub')}
        </Button>
        <div className="flex items-center gap-3">
          <div className="flex size-10 items-center justify-center rounded-xl bg-primary/10">
            <PenLine className="size-5 text-primary" />
          </div>
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2">
              <h1 className="text-heading-lg font-heading text-foreground">Essay Technique</h1>
              <Badge variant="secondary" className="text-[0.65rem] uppercase tracking-wider">
                {tr('igcse.page.badge_edexcel_lit')}
              </Badge>
            </div>
            <p className="text-body-sm text-muted-foreground">
              Introductions, PEEL paragraphs, comparison, and conclusions for IGCSE Literature
            </p>
          </div>
        </div>
      </div>

      {/* ── Intro ───────────────────────────────────────────────── */}
      <section className="relative overflow-hidden rounded-2xl border border-border/60 bg-gradient-to-br from-card via-card to-primary/[0.04] p-6 sm:p-8">
        <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-primary/5 blur-3xl" />
        <Badge variant="secondary" className="mb-3">
          <Sparkles className="mr-1 size-3" />
          Paper-specific essay writing
        </Badge>
        <h2 className="text-heading-md font-heading text-foreground mb-2">
          IGCSE Literature rewards tightly structured, comparative essays
        </h2>
        <p className="text-body-sm text-muted-foreground max-w-2xl leading-relaxed">
          Edexcel IGCSE examiners see hundreds of essays that show good knowledge but lack clear
          structure. The candidates who score highest are the ones who introduce a focused thesis,
          build paragraphs around it with embedded evidence, and finish with a conclusion that
          answers the question without simply repeating it. This hub breaks down each part of the
          essay and shows you the specific moves that push a response from Grade 6 into Grade 8 and
          9 territory.
        </p>
      </section>

      {/* ── 3-part introduction ─────────────────────────────────── */}
      <section className="rounded-2xl border border-border/60 bg-card p-6 sm:p-8">
        <div className="mb-4 flex items-center gap-3">
          <BookOpen className="size-5 text-sky-400" />
          <h2 className="text-heading-md font-heading text-foreground">The 3-Part Introduction</h2>
        </div>
        <p className="text-body-sm text-muted-foreground mb-5 leading-relaxed max-w-2xl">
          A strong introduction does three things in three sentences. Any longer and you are wasting
          writing time; any shorter and you are not setting up your argument.
        </p>
        <div className="grid gap-4 md:grid-cols-3">
          {[
            {
              n: '1',
              title: 'Thesis',
              body: 'A clear, arguable answer to the question. Not "this essay will discuss..." but "Both poets present X, though they differ in Y."',
            },
            {
              n: '2',
              title: 'Roadmap',
              body: 'A one-sentence indication of the three points or angles you will pursue. Do not list paragraphs -- group them thematically.',
            },
            {
              n: '3',
              title: 'Context (light touch)',
              body: 'For set texts, one phrase of genuinely relevant context. For unseen poetry, skip context entirely -- it is not heavily weighted there.',
            },
          ].map((s) => (
            <div key={s.n} className="rounded-xl border border-border/40 bg-background/50 p-4">
              <div className="mb-2 flex size-8 items-center justify-center rounded-lg bg-primary/10 text-sm font-semibold text-primary">
                {s.n}
              </div>
              <p className="text-sm font-semibold text-foreground">{s.title}</p>
              <p className="mt-1 text-xs text-muted-foreground leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-5 rounded-xl border border-emerald-500/20 bg-emerald-500/[0.06] p-5">
          <p className="text-xs font-semibold uppercase tracking-wider text-emerald-400 mb-2">
            Model Introduction
          </p>
          <p className="text-body-sm italic text-foreground/90 leading-relaxed">
            {`Both Dickinson and Wordsworth transform fleeting natural encounters into sources of enduring emotional strength, though their methods reveal strikingly different relationships with the subject. While Dickinson internalises hope as a bird that "perches in the soul", Wordsworth preserves a distance between observer and observed, finding consolation in memory rather than possession. Across three comparative paragraphs -- on imagery, form, and the emotional effect on the reader -- this essay will argue that Wordsworth's joy is retrospective, whereas Dickinson's endurance is continuous.`}
          </p>
        </div>
      </section>

      {/* ── PEEL for poetry ─────────────────────────────────────── */}
      <section>
        <div className="mb-5 flex items-center gap-3">
          <Layers className="size-5 text-violet-400" />
          <h2 className="text-heading-lg font-heading text-foreground">
            PEEL Paragraphs for Poetry
          </h2>
        </div>
        <p className="text-body-sm text-muted-foreground mb-5 max-w-2xl">
          PEEL stands for Point, Evidence, Explanation, Link. For poetry analysis, the Explanation
          step is where the marks live -- this is where you apply What-How-Why and zoom in on
          individual words and images.
        </p>

        <div className="grid gap-4 md:grid-cols-2">
          {PEEL_STEPS.map((step) => (
            <div key={step.label} className="rounded-2xl border border-border/60 bg-card p-5">
              <div className="mb-3 flex items-center gap-3">
                <div
                  className={`flex size-10 items-center justify-center rounded-xl ${step.bgColour}`}
                >
                  <span className={`text-lg font-bold ${step.colour}`}>{step.letter}</span>
                </div>
                <h3 className="text-heading-md font-heading text-foreground">{step.label}</h3>
              </div>
              <p className="text-body-sm text-muted-foreground leading-relaxed mb-3">
                {step.description}
              </p>
              <div className="rounded-xl border border-border/40 bg-background/50 p-3">
                <p className="text-xs italic text-muted-foreground leading-relaxed">
                  {step.example}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Embedding quotes ────────────────────────────────────── */}
      <section className="rounded-2xl border border-border/60 bg-card p-6 sm:p-8">
        <div className="mb-4 flex items-center gap-3">
          <Quote className="size-5 text-clay-600" />
          <h2 className="text-heading-md font-heading text-foreground">Embedding Quotations</h2>
        </div>
        <p className="text-body-sm text-muted-foreground mb-5 leading-relaxed">
          Never drop a quotation into a sentence as a block. Weave it in. Below are three levels of
          embedding, from weakest to strongest.
        </p>

        <div className="space-y-3">
          <div className="rounded-xl border border-rose-500/20 bg-rose-500/[0.04] p-4">
            <p className="text-xs font-semibold uppercase tracking-wider text-rose-400 mb-1">
              Weak: dropped quote
            </p>
            <p className="text-body-sm italic text-muted-foreground">
              {`Dickinson writes about hope. "Hope is the thing with feathers / That perches in the soul".`}
            </p>
          </div>
          <div className="rounded-xl border border-amber-500/20 bg-amber-500/[0.04] p-4">
            <p className="text-xs font-semibold uppercase tracking-wider text-clay-600 mb-1">
              Better: signposted quote
            </p>
            <p className="text-body-sm italic text-muted-foreground">
              {`Dickinson describes hope as "the thing with feathers / That perches in the soul", suggesting fragility.`}
            </p>
          </div>
          <div className="rounded-xl border border-emerald-500/20 bg-emerald-500/[0.06] p-4">
            <p className="text-xs font-semibold uppercase tracking-wider text-emerald-400 mb-1">
              Best: embedded with analysis
            </p>
            <p className="text-body-sm italic text-muted-foreground">
              {`Dickinson's extended metaphor of hope as "the thing with feathers" -- delicate, airborne, poised -- transforms an abstract emotion into a living creature that "perches" rather than settles, suggesting a presence that is always ready for flight.`}
            </p>
          </div>
        </div>
      </section>

      {/* ── Conclusion ──────────────────────────────────────────── */}
      <section className="rounded-2xl border border-border/60 bg-card p-6 sm:p-8">
        <div className="mb-4 flex items-center gap-3">
          <CheckCircle2 className="size-5 text-emerald-400" />
          <h2 className="text-heading-md font-heading text-foreground">The Conclusion</h2>
        </div>
        <p className="text-body-sm text-muted-foreground mb-4 leading-relaxed max-w-2xl">
          A strong conclusion does not repeat the introduction. It should do three things: restate
          your thesis in fresher terms, offer a final insight that has emerged from your analysis,
          and leave the examiner with a sense of closure.
        </p>
        <div className="grid gap-3 sm:grid-cols-3">
          {[
            {
              title: 'Restate thesis',
              body: 'In different words than your introduction. Show you have travelled.',
            },
            {
              title: 'Final insight',
              body: 'One idea that could only have come from the analysis you just did.',
            },
            {
              title: 'Closing resonance',
              body: 'A short final sentence that lingers. Avoid "in conclusion" or "to sum up".',
            },
          ].map((c) => (
            <div key={c.title} className="rounded-xl border border-border/40 bg-background/50 p-4">
              <p className="text-sm font-semibold text-foreground">{c.title}</p>
              <p className="mt-1 text-xs text-muted-foreground leading-relaxed">{c.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Guide cards ─────────────────────────────────────────── */}
      <section>
        <div className="mb-5 flex items-center gap-3">
          <BookOpen className="size-5 text-primary" />
          <h2 className="text-heading-lg font-heading text-foreground">Deep Dives</h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {GUIDES.map((guide) => (
            <Link
              key={guide.href}
              href={guide.href}
              className="group relative flex flex-col rounded-2xl border border-border/60 bg-card p-5 transition-all duration-200 hover:border-border hover:shadow-card-hover"
            >
              {guide.tag && (
                <Badge
                  variant="default"
                  className="absolute right-4 top-4 text-[0.65rem] uppercase tracking-wider"
                >
                  {guide.tag}
                </Badge>
              )}
              <div className="mb-3 flex items-center gap-3">
                <div
                  className={`flex size-10 items-center justify-center rounded-xl ${guide.bgColour}`}
                >
                  <guide.icon className={`size-5 ${guide.colour}`} />
                </div>
                <h3 className="text-heading-md font-heading text-foreground group-hover:text-primary transition-colors">
                  {guide.title}
                </h3>
              </div>
              <p className="flex-1 text-body-sm text-muted-foreground leading-relaxed">
                {guide.description}
              </p>
              <div className="mt-4 flex items-center gap-1 text-sm font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">
                Read guide
                <ArrowRight className="size-3.5" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────────── */}
      <section className="rounded-2xl border border-border/60 bg-gradient-to-r from-violet-500/[0.06] via-card to-primary/[0.04] p-6 sm:p-8 text-center">
        <Lightbulb className="mx-auto mb-3 size-8 text-clay-600" />
        <h2 className="text-heading-lg font-heading text-foreground">
          Learn to compare two texts in one essay
        </h2>
        <p className="mx-auto mt-2 max-w-lg text-body-sm text-muted-foreground">
          Comparison is the single biggest differentiator at the top end of IGCSE Literature. Learn
          the structural patterns and linking vocabulary that examiners reward.
        </p>
        <Button
          variant="default"
          size="lg"
          className="mt-5"
          render={<Link href="/igcse/edexcel/essay-technique/comparison-essays" />}
        >
          Comparison Essays Guide
          <ArrowRight className="size-4" />
        </Button>
      </section>
    </div>
  )
}
