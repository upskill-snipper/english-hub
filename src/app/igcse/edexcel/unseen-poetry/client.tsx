'use client'

import {
  Feather,
  ArrowLeft,
  ArrowRight,
  Compass,
  PenTool,
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
import { useT } from '@/lib/i18n/use-t'

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
  // Until 10 October 2026 this card taught comparing two unseen poems. 4ET1
  // Section A sets one poem and asks for no comparison, so the page it links to
  // now teaches building an answer on that one poem (its URL is unchanged).
  {
    title: 'Building Your Answer',
    description:
      'Section A sets one poem, not two: how to plan quickly, organise by idea, and keep language, form and structure together in one analytical answer.',
    href: '/igcse/edexcel/unseen-poetry/comparison',
    icon: PenTool,
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
    colour: 'text-clay-600',
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
      "Seasons, ageing, memory, nostalgia. Tenses matter here: present-tense immediacy vs past-tense reflection often signals the speaker's emotional stance.",
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
  // Until 10 October 2026: "roughly 35-40 minutes" and "comparative
  // paragraphs". Every 4ET1 paper suggests 35 minutes, for one poem.
  {
    title: 'Watch the clock',
    body: 'Pearson suggests 35 minutes for the unseen poem. Spend about 10 minutes reading, annotating and planning, then write in sustained analytical paragraphs.',
    icon: Clock,
  },
]

/* ── Component ──────────────────────────────────────────────────── */

export default function UnseenPoetryHubPage() {
  const tr = useT()
  return (
    <div className="space-y-10 pb-16">
      {/* ── Header ──────────────────────────────────────────────── */}
      <div>
        <Button
          variant="ghost"
          size="sm"
          className="mb-3 -ms-2 text-muted-foreground"
          render={<Link href="/igcse/edexcel" />}
        >
          <ArrowLeft className="size-3.5" />
          {tr('igcse.page.back_to_edexcel_hub')}
        </Button>
        <div className="flex items-center gap-3">
          <div className="flex size-10 items-center justify-center rounded-xl bg-sky-500/10">
            <Feather className="size-5 text-sky-400" />
          </div>
          <div className="flex min-w-0 flex-col gap-1">
            <div className="flex flex-wrap items-center gap-2">
              <h1 className="text-heading-lg font-heading text-foreground">Unseen Poetry</h1>
              <Badge variant="secondary" className="text-[0.65rem] uppercase tracking-wider">
                {tr('igcse.page.badge_edexcel_lit')}
              </Badge>
            </div>
            <p className="text-body-sm text-muted-foreground">
              Reading and analysing a poem you have never seen before
            </p>
          </div>
        </div>
      </div>

      {/* ── Overview banner ─────────────────────────────────────── */}
      <section className="relative overflow-hidden rounded-2xl border border-border/60 bg-gradient-to-br from-card via-card to-sky-500/[0.04] p-6 sm:p-8">
        <div className="pointer-events-none absolute -end-16 -top-16 h-48 w-48 rounded-full bg-sky-500/5 blur-3xl" />
        {/* Until 10 October 2026 this badge said Paper 2 and the paragraph said
            the exam asks you to compare two unseen poems. In 4ET1 the unseen poem
            is Paper 1 Section A: one poem printed in the question paper, one
            compulsory 20-mark question marked on AO2 alone, and 35 minutes
            suggested (specification Issue 3, and every paper from the specimen
            to June 2025). */}
        <Badge variant="secondary" className="mb-3">
          <Sparkles className="me-1 size-3" />
          {tr('igcse.page.badge_paper1_unseen')}
        </Badge>
        <h2 className="text-heading-md font-heading text-foreground mb-2">
          One poem you have not seen before, one question, 20 marks
        </h2>
        <p className="text-body-sm text-muted-foreground max-w-2xl leading-relaxed">
          Section A of Paper 1 in the Edexcel International GCSE English Literature exam (4ET1)
          prints a poem you have never read and asks one compulsory question on it: explore how the
          writer presents a subject in this poem, considering the writer&rsquo;s descriptive skills,
          choice of language, and use of form and structure. It is worth 20 marks, and Pearson
          suggests 35 minutes. There is no second poem to compare, and context is not assessed: the
          marks are for analysing language, form and structure. You cannot revise the poem itself,
          but you can revise the skills, and this hub walks you through them.
        </p>
      </section>

      {/* ── Guide cards ─────────────────────────────────────────── */}
      <section>
        <div className="mb-5 flex items-center gap-3">
          <BookOpen className="size-5 text-primary" />
          <h2 className="text-heading-lg font-heading text-foreground">Skill Guides</h2>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {GUIDES.map((guide) => (
            <Link
              key={guide.href}
              href={guide.href}
              className="group relative flex flex-col rounded-2xl border border-border/60 bg-card p-5 transition-all duration-200 hover:border-border hover:shadow-card-hover"
            >
              {guide.tag && (
                <Badge
                  variant="default"
                  className="absolute end-4 top-4 text-[0.65rem] uppercase tracking-wider"
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
          The unseen poems are often chosen from a narrow range of themes. Knowing the territory
          helps you orient quickly under pressure.
        </p>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
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
          <Lightbulb className="size-5 text-clay-600" />
          <h2 className="text-heading-lg font-heading text-foreground">Practice Tips</h2>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {PRACTICE_TIPS.map((tip) => (
            <div key={tip.title} className="rounded-2xl border border-border/60 bg-card p-5">
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
        {/* Until 10 October 2026 this listed four objectives, context and
            comparison among them, for "the unseen poetry comparison question".
            Section A is marked on AO2 alone, on one 20-mark grid; the cards now
            follow the three bullets every 4ET1 Question 1 prints, and the mark
            scheme's own note on what is not enough. */}
        <p className="text-body-sm text-muted-foreground mb-5 max-w-2xl">
          Section A is marked on one assessment objective: analysing the language, form and
          structure a writer uses to create meanings and effects. The question&rsquo;s three bullets
          point you at the same things.
        </p>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {[
            {
              ao: 'Descriptive skills',
              label: 'What the poem shows, and how',
              detail:
                'The details the writer chooses, the scenes and people the poem builds, and the voice that describes them.',
            },
            {
              ao: 'Choice of language',
              label: 'Words, imagery and sound',
              detail:
                'Word choices, imagery and sound effects, each linked to the meaning or effect it creates, using subject terminology.',
            },
            {
              ao: 'Form and structure',
              label: 'Shape and movement',
              detail:
                'Stanzas, line lengths, rhyme, rhythm and turning points, and what each adds to the meaning.',
            },
            {
              ao: 'Not enough on its own',
              label: 'Summary, device-spotting, context',
              detail:
                "Pearson's mark scheme says summarising or paraphrasing the poem, or simply listing devices, is not enough, and that some personal response must be given. Context is not assessed, and there is no second poem to compare.",
            },
          ].map((item) => (
            // Badge above the text: these badges are phrases ("Analysing language
            // and structure"), not "AO1", so side by side they squeezed the text
            // to 70px on a phone and pushed one card's heading under the clip.
            <div
              key={item.ao}
              className="flex flex-col items-start gap-2 rounded-xl border border-border/40 bg-background/50 p-4"
            >
              <Badge variant="secondary" className="h-fit shrink-0 text-xs">
                {item.ao}
              </Badge>
              <div className="min-w-0">
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
          Before you tackle analysis, you need a reading process you can trust. The 5-step approach
          gives you a reliable way in to any unseen poem.
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
