'use client'

import {
  Feather,
  ArrowLeft,
  ArrowRight,
  Compass,
  GitCompare,
  FileText,
  Sparkles,
  BookOpen,
  Layers,
  Lightbulb,
  CheckCircle2,
  Eye,
  MessageSquare,
  Music,
  Clock,
} from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

/* ── Sub-page links ──────────────────────────────────────────────── */

const GUIDES = [
  {
    title: 'The 5-Step Approach',
    description:
      'A reliable reading framework for unseen poems: first impressions, meaning, language, structure, and effect on the reader.',
    href: '/igcse/edexcel/unseen-poetry/approach',
    icon: Compass,
    colour: 'text-sky-400',
    bgColour: 'bg-sky-500/10',
    tag: 'Start Here',
  },
  {
    title: 'Comparison Techniques',
    description:
      'How to compare two unseen poems in a single response -- similarities, differences, and the linking vocabulary that lifts your grade.',
    href: '/igcse/edexcel/unseen-poetry/comparison',
    icon: GitCompare,
    colour: 'text-violet-400',
    bgColour: 'bg-violet-500/10',
    tag: 'Essential',
  },
  {
    title: 'Language Analysis',
    description:
      'The What-How-Why framework, semantic fields, imagery, and sound effects. Turn observations into genuine analysis.',
    href: '/igcse/edexcel/unseen-poetry/language-analysis',
    icon: MessageSquare,
    colour: 'text-emerald-400',
    bgColour: 'bg-emerald-500/10',
  },
  {
    title: 'Form and Structure',
    description:
      'Sonnet, ballad, free verse, stanzas, rhyme schemes, enjambment and volta. Reading the shape of a poem on the page.',
    href: '/igcse/edexcel/unseen-poetry/structure-form',
    icon: Layers,
    colour: 'text-amber-400',
    bgColour: 'bg-amber-500/10',
  },
  {
    title: 'Practice Poems',
    description:
      'Three public-domain poems by Dickinson and Wordsworth with practice questions, model openings, and annotated analysis.',
    href: '/igcse/edexcel/unseen-poetry/practice',
    icon: FileText,
    colour: 'text-rose-400',
    bgColour: 'bg-rose-500/10',
    tag: 'Practice',
  },
]

/* ── Common themes ─────────────────────────────────────────────── */

const COMMON_THEMES = [
  {
    theme: 'Nature and the natural world',
    detail:
      'Poets often use nature as a mirror for human emotion. Look for seasonal imagery, weather, landscape, and animals. Nature may represent freedom, the sublime, or the indifference of the universe.',
  },
  {
    theme: 'Love and relationships',
    detail:
      'Romantic love, family bonds, loss of love, unrequited feeling. Pay attention to addressee ("you"), tone (tender, bitter, nostalgic), and how time shapes the relationship.',
  },
  {
    theme: 'Death and mortality',
    detail:
      'Grief, memory, legacy, acceptance, fear. Look for elegiac tone, past tense, religious imagery, and the way time or absence is presented.',
  },
  {
    theme: 'Identity and selfhood',
    detail:
      'Growing up, belonging, alienation, cultural heritage. Watch for first-person voice, shifts between past and present self, and the way place shapes identity.',
  },
  {
    theme: 'Conflict and power',
    detail:
      'War, protest, authority, resistance. Look for violent imagery, caesura used as disruption, contrast between individual and crowd, and shifts in register.',
  },
  {
    theme: 'Time and change',
    detail:
      'Seasons, ageing, memory, nostalgia. Tenses matter here: present-tense immediacy vs past-tense reflection often signals the speaker\'s emotional stance.',
  },
]

/* ── Practice tips ─────────────────────────────────────────────── */

const PRACTICE_TIPS = [
  {
    title: 'Read it three times',
    body: 'First for gist, second for meaning, third for technique. You will miss the best ideas on a single read -- unseen poetry rewards patience.',
    icon: BookOpen,
  },
  {
    title: 'Annotate everything',
    body: 'Underline images, circle repeated words, mark shifts in tone, and note where the form breaks the rhythm. Your annotations become your plan.',
    icon: Eye,
  },
  {
    title: 'Trust your first response',
    body: 'If a line made you feel something, that is the examiner\'s entry point. Build analysis around the moments that moved you -- examiners call this a "personal response".',
    icon: Sparkles,
  },
  {
    title: 'Listen to the sound',
    body: 'Read the poem aloud in your head. Sibilance, plosives, long vowels, and rhyme are all meaningful. Sound effects carry emotional weight.',
    icon: Music,
  },
  {
    title: 'Link every point to meaning',
    body: 'Never identify a technique without explaining its effect. "The poet uses enjambment" is worthless. "Enjambment mimics the speaker\'s unbroken grief" is an answer.',
    icon: Lightbulb,
  },
  {
    title: 'Watch the clock',
    body: 'For the unseen poetry section you have roughly 35-40 minutes. Spend 5-8 minutes reading and planning, then write in sustained comparative paragraphs.',
    icon: Clock,
  },
]

/* ── Component ──────────────────────────────────────────────────── */

export default function UnseenPoetryHubPage() {
  return (
    <div className="space-y-10 pb-16">
      {/* ── Header ──────────────────────────────────────────────── */}
      <div>
        <Button
          variant="ghost"
          size="sm"
          className="mb-3 -ml-2 text-muted-foreground"
          render={<Link href="/igcse/edexcel" />}
        >
          <ArrowLeft className="size-3.5" />
          Back to Edexcel IGCSE Hub
        </Button>
        <div className="flex items-center gap-3">
          <div className="flex size-10 items-center justify-center rounded-xl bg-sky-500/10">
            <Feather className="size-5 text-sky-400" />
          </div>
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2">
              <h1 className="text-heading-lg font-heading text-foreground">Unseen Poetry</h1>
              <Badge variant="secondary" className="text-[0.65rem] uppercase tracking-wider">
                Edexcel IGCSE Literature
              </Badge>
            </div>
            <p className="text-body-sm text-muted-foreground">
              Reading, analysing, and comparing poems you have never seen before
            </p>
          </div>
        </div>
      </div>

      {/* ── Overview banner ─────────────────────────────────────── */}
      <section className="relative overflow-hidden rounded-2xl border border-border/60 bg-gradient-to-br from-card via-card to-sky-500/[0.04] p-6 sm:p-8">
        <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-sky-500/5 blur-3xl" />
        <Badge variant="secondary" className="mb-3">
          <Sparkles className="mr-1 size-3" />
          Paper 2 — Unseen Poetry
        </Badge>
        <h2 className="text-heading-md font-heading text-foreground mb-2">
          Unseen poetry is the section students fear most -- and rewards most
        </h2>
        <p className="text-body-sm text-muted-foreground max-w-2xl leading-relaxed">
          In Paper 2 of the Edexcel IGCSE Literature exam you will be asked to compare two poems you have
          never read before. There is no way to "revise" the poems themselves -- but there is
          absolutely a way to revise the skills. With a reliable reading approach, a toolkit of
          analytical vocabulary, and a clear comparative structure, unseen poetry becomes the
          most strategic section on the paper. This hub walks you through every step.
        </p>
      </section>

      {/* ── Guide cards ─────────────────────────────────────────── */}
      <section>
        <div className="mb-5 flex items-center gap-3">
          <BookOpen className="size-5 text-primary" />
          <h2 className="text-heading-lg font-heading text-foreground">Skill Guides</h2>
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

      {/* ── Common themes ───────────────────────────────────────── */}
      <section>
        <div className="mb-5 flex items-center gap-3">
          <Feather className="size-5 text-violet-400" />
          <h2 className="text-heading-lg font-heading text-foreground">Common Themes</h2>
        </div>
        <p className="text-body-sm text-muted-foreground mb-5 max-w-2xl">
          The unseen poems are often chosen from a narrow range of themes. Knowing the
          territory helps you orient quickly under pressure.
        </p>
        <div className="grid gap-3 sm:grid-cols-2">
          {COMMON_THEMES.map((item) => (
            <div
              key={item.theme}
              className="rounded-xl border border-border/40 bg-background/50 p-4"
            >
              <p className="text-sm font-semibold text-foreground">{item.theme}</p>
              <p className="mt-1 text-xs text-muted-foreground leading-relaxed">{item.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Practice tips ───────────────────────────────────────── */}
      <section>
        <div className="mb-5 flex items-center gap-3">
          <Lightbulb className="size-5 text-amber-400" />
          <h2 className="text-heading-lg font-heading text-foreground">Practice Tips</h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {PRACTICE_TIPS.map((tip) => (
            <div
              key={tip.title}
              className="rounded-2xl border border-border/60 bg-card p-5"
            >
              <div className="mb-2 flex items-center gap-2">
                <tip.icon className="size-4 text-emerald-400" />
                <h3 className="text-sm font-semibold text-foreground">{tip.title}</h3>
              </div>
              <p className="text-body-sm text-muted-foreground leading-relaxed">{tip.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── AO reminder ─────────────────────────────────────────── */}
      <section className="rounded-2xl border border-border/60 bg-card p-6 sm:p-8">
        <div className="mb-4 flex items-center gap-3">
          <CheckCircle2 className="size-5 text-emerald-400" />
          <h2 className="text-heading-md font-heading text-foreground">
            What the Examiner is Looking For
          </h2>
        </div>
        <p className="text-body-sm text-muted-foreground mb-5 max-w-2xl">
          The unseen poetry comparison question rewards four assessment objectives. Every
          paragraph you write should push at one of these.
        </p>
        <div className="grid gap-3 sm:grid-cols-2">
          {[
            {
              ao: 'Understanding the text',
              label: 'Informed personal response',
              detail:
                'Read, understand, and respond thoughtfully. Use precise textual references to support your interpretation.',
            },
            {
              ao: 'Analysing language and structure',
              label: 'Language, form, structure',
              detail:
                'Analyse how poets use language, form, and structure to create meanings and effects, using subject terminology.',
            },
            {
              ao: 'Relating to context',
              label: 'Context',
              detail:
                'Show understanding of the relationships between texts and their contexts. Light touch for unseen poetry.',
            },
            {
              ao: 'Comparing texts',
              label: 'Comparison',
              detail:
                'Explore connections across texts, evaluating similarities and differences in writers\' methods and effects.',
            },
          ].map((item) => (
            <div
              key={item.ao}
              className="flex gap-3 rounded-xl border border-border/40 bg-background/50 p-4"
            >
              <Badge variant="secondary" className="h-fit shrink-0 text-xs">
                {item.ao}
              </Badge>
              <div>
                <p className="text-sm font-semibold text-foreground">{item.label}</p>
                <p className="mt-0.5 text-xs text-muted-foreground leading-relaxed">
                  {item.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────────── */}
      <section className="rounded-2xl border border-border/60 bg-gradient-to-r from-sky-500/[0.06] via-card to-primary/[0.04] p-6 sm:p-8 text-center">
        <Compass className="mx-auto mb-3 size-8 text-sky-400" />
        <h2 className="text-heading-lg font-heading text-foreground">
          Start with the 5-step approach
        </h2>
        <p className="mx-auto mt-2 max-w-lg text-body-sm text-muted-foreground">
          Before you tackle comparison or analysis, you need a reading process you can trust.
          The 5-step approach gives you a reliable way in to any unseen poem.
        </p>
        <Button
          variant="default"
          size="lg"
          className="mt-5"
          render={<Link href="/igcse/edexcel/unseen-poetry/approach" />}
        >
          Read the Approach Guide
          <ArrowRight className="size-4" />
        </Button>
      </section>
    </div>
  )
}
