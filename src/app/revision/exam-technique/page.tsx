'use client'

import {
  Target,
  ArrowLeft,
  ArrowRight,
  PenLine,
  Clock,
  HelpCircle,
  CheckCircle2,
  Lightbulb,
  Sparkles,
  BookOpen,
  Star,
} from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

/* ── Sub-page links ──────────────────────────────────────────────── */

interface GuideLink {
  title: string
  description: string
  href: string
  icon: typeof PenLine
  colour: string
  bgColour: string
  tag?: string
}

const GUIDES: GuideLink[] = [
  {
    title: 'Essay Structure',
    description:
      'PEEL paragraphs, thesis statements, introductions, conclusions, and full model essay breakdowns for Literature and Language.',
    href: '/revision/exam-technique/essay-structure',
    icon: PenLine,
    colour: 'text-blue-400',
    bgColour: 'bg-blue-500/10',
    tag: 'Essential',
  },
  {
    title: 'Time Management',
    description:
      'Minute-by-minute breakdowns for every paper, marks-to-time allocation, and rapid planning techniques.',
    href: '/revision/exam-technique/time-management',
    icon: Clock,
    colour: 'text-amber-400',
    bgColour: 'bg-amber-500/10',
  },
  {
    title: 'Question Types',
    description:
      'How to approach extract, comparison, creative writing, and evaluation questions. Command words decoded.',
    href: '/revision/exam-technique/question-types',
    icon: HelpCircle,
    colour: 'text-violet-400',
    bgColour: 'bg-violet-500/10',
  },
]

/* ── Quick tips data ─────────────────────────────────────────────── */

const QUICK_TIPS = [
  {
    title: 'Read the question twice',
    body: 'Underline key command words and circle the focus of the question before you start writing. Most marks are lost through misreading, not poor knowledge.',
    icon: BookOpen,
  },
  {
    title: 'Plan for 5 minutes',
    body: 'A rough plan prevents waffle and keeps your argument focused. Jot down 3 points, the quotes you will use, and your thesis before writing.',
    icon: Lightbulb,
  },
  {
    title: 'Embed your quotes',
    body: 'Never drop a quote into a sentence on its own. Weave it into your analysis: "Shelley uses the adjective \'vast\' to convey..." is far stronger than a standalone quote.',
    icon: PenLine,
  },
  {
    title: 'Link to the big ideas',
    body: 'Examiners reward responses that connect to context, authorial intent, and wider themes. Always ask yourself: why did the writer make this choice?',
    icon: Star,
  },
  {
    title: 'Watch the clock',
    body: 'If you cannot finish a paragraph, write your key point in a single sentence and move on. A complete paper with short answers beats an incomplete paper with perfect ones.',
    icon: Clock,
  },
  {
    title: 'Use subject terminology',
    body: 'Words like "metaphor", "sibilance", "iambic pentameter", and "semantic field" show the examiner you understand craft. Use them precisely, not just to drop them in.',
    icon: Target,
  },
]

/* ── Component ──────────────────────────────────────────────────── */

export default function ExamTechniquePage() {
  return (
    <div className="space-y-10 pb-16">
      {/* ── Header ──────────────────────────────────────────────── */}
      <div>
        <Button
          variant="ghost"
          size="sm"
          className="mb-3 -ml-2 text-muted-foreground"
          render={<Link href="/revision" />}
        >
          <ArrowLeft className="size-3.5" />
          Back to Revision Hub
        </Button>
        <div className="flex items-center gap-3">
          <div className="flex size-10 items-center justify-center rounded-xl bg-emerald-500/10">
            <Target className="size-5 text-emerald-400" />
          </div>
          <div>
            <h1 className="text-heading-lg font-heading text-foreground">Exam Technique</h1>
            <p className="text-body-sm text-muted-foreground">
              Essay structure, timing, and mark scheme mastery
            </p>
          </div>
        </div>
      </div>

      {/* ── Overview banner ─────────────────────────────────────── */}
      <section className="relative overflow-hidden rounded-2xl border border-border/60 bg-gradient-to-br from-card via-card to-emerald-500/[0.04] p-6 sm:p-8">
        <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-emerald-500/5 blur-3xl" />
        <Badge variant="secondary" className="mb-3">
          <Sparkles className="mr-1 size-3" />
          Why This Matters
        </Badge>
        <h2 className="text-heading-md font-heading text-foreground mb-2">
          Technique can be the difference between Grade 5 and Grade 9
        </h2>
        <p className="text-body-sm text-muted-foreground max-w-2xl leading-relaxed">
          You can know every quote and every context point, but without strong exam technique
          your knowledge stays in your head instead of on the page. The best students are not
          always the ones who know the most -- they are the ones who present their knowledge
          most effectively. These guides will teach you how to structure responses that hit
          every assessment objective, manage your time across every paper, and decode exactly
          what each question is really asking.
        </p>
      </section>

      {/* ── Guide cards ─────────────────────────────────────────── */}
      <section>
        <div className="mb-5 flex items-center gap-3">
          <BookOpen className="size-5 text-primary" />
          <h2 className="text-heading-lg font-heading text-foreground">Technique Guides</h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
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

      {/* ── Quick tips ──────────────────────────────────────────── */}
      <section>
        <div className="mb-5 flex items-center gap-3">
          <Lightbulb className="size-5 text-amber-400" />
          <h2 className="text-heading-lg font-heading text-foreground">Quick Tips</h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {QUICK_TIPS.map((tip) => (
            <div
              key={tip.title}
              className="rounded-2xl border border-border/60 bg-card p-5"
            >
              <div className="mb-2 flex items-center gap-2">
                <tip.icon className="size-4 text-emerald-400" />
                <h3 className="text-sm font-semibold text-foreground">{tip.title}</h3>
              </div>
              <p className="text-body-sm text-muted-foreground leading-relaxed">
                {tip.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Assessment objectives reminder ──────────────────────── */}
      <section className="rounded-2xl border border-border/60 bg-card p-6 sm:p-8">
        <div className="mb-4 flex items-center gap-3">
          <CheckCircle2 className="size-5 text-emerald-400" />
          <h2 className="text-heading-md font-heading text-foreground">
            Know Your Assessment Objectives
          </h2>
        </div>
        <p className="text-body-sm text-muted-foreground mb-5 max-w-2xl">
          Every mark in GCSE English is tied to an Assessment Objective. Understanding these
          is the first step to targeted exam technique.
        </p>
        <div className="grid gap-3 sm:grid-cols-2">
          {[
            { ao: 'AO1', label: 'Response & quotation', detail: 'Read, understand, and respond using textual references (including quotations) to support your interpretation.' },
            { ao: 'AO2', label: 'Language & structure', detail: 'Analyse how writers use language, form, and structure to create meanings and effects. Use relevant subject terminology.' },
            { ao: 'AO3', label: 'Context', detail: 'Show understanding of the relationships between texts and the contexts in which they were written.' },
            { ao: 'AO4', label: 'Evaluation', detail: 'Evaluate texts critically, supporting this with appropriate textual references.' },
            { ao: 'AO5', label: 'Writing: content & organisation', detail: 'Communicate clearly, effectively, and imaginatively, selecting and adapting tone, style, and register.' },
            { ao: 'AO6', label: 'Writing: technical accuracy', detail: 'Use a range of vocabulary and sentence structures for clarity, purpose, and effect with accurate spelling and punctuation.' },
          ].map((item) => (
            <div key={item.ao} className="flex gap-3 rounded-xl border border-border/40 bg-background/50 p-4">
              <Badge variant="secondary" className="h-fit shrink-0 font-mono text-xs">
                {item.ao}
              </Badge>
              <div>
                <p className="text-sm font-semibold text-foreground">{item.label}</p>
                <p className="mt-0.5 text-xs text-muted-foreground leading-relaxed">{item.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────────── */}
      <section className="rounded-2xl border border-border/60 bg-gradient-to-r from-emerald-500/[0.06] via-card to-primary/[0.04] p-6 sm:p-8 text-center">
        <Target className="mx-auto mb-3 size-8 text-emerald-400" />
        <h2 className="text-heading-lg font-heading text-foreground">
          Start with essay structure
        </h2>
        <p className="mx-auto mt-2 max-w-lg text-body-sm text-muted-foreground">
          Learning how to structure a paragraph properly is the single fastest way to improve
          your grade. Start with PEEL and work through our model answers.
        </p>
        <Button
          variant="default"
          size="lg"
          className="mt-5"
          render={<Link href="/revision/exam-technique/essay-structure" />}
        >
          Essay Structure Guide
          <ArrowRight className="size-4" />
        </Button>
      </section>
    </div>
  )
}
