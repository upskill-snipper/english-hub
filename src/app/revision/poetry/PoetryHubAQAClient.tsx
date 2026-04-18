'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import {
  FileText,
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Sparkles,
  Eye,
  Wand2,
  GitCompareArrows,
  CheckCircle2,
  Swords,
  Heart,
} from 'lucide-react'

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'

// ─── Poem data ────────────────────────────────────────────────────────────────

interface Poem {
  title: string
  poet: string
  slug: string
}

const POWER_AND_CONFLICT: Poem[] = [
  { title: 'Ozymandias', poet: 'Percy Bysshe Shelley', slug: 'ozymandias' },
  { title: 'London', poet: 'William Blake', slug: 'london' },
  { title: 'Extract from The Prelude', poet: 'William Wordsworth', slug: 'the-prelude' },
  { title: 'My Last Duchess', poet: 'Robert Browning', slug: 'my-last-duchess' },
  { title: 'The Charge of the Light Brigade', poet: 'Alfred Lord Tennyson', slug: 'charge-of-the-light-brigade' },
  { title: 'Exposure', poet: 'Wilfred Owen', slug: 'exposure' },
  { title: 'Storm on the Island', poet: 'Seamus Heaney', slug: 'storm-on-the-island' },
  { title: 'Bayonet Charge', poet: 'Ted Hughes', slug: 'bayonet-charge' },
  { title: 'Remains', poet: 'Simon Armitage', slug: 'remains' },
  { title: 'Poppies', poet: 'Jane Weir', slug: 'poppies' },
  { title: 'War Photographer', poet: 'Carol Ann Duffy', slug: 'war-photographer' },
  { title: 'Tissue', poet: 'Imtiaz Dharker', slug: 'tissue' },
  { title: 'The Emigree', poet: 'Carol Rumens', slug: 'the-emigree' },
  { title: 'Kamikaze', poet: 'Beatrice Garland', slug: 'kamikaze' },
  { title: 'Checking Out Me History', poet: 'John Agard', slug: 'checking-out-me-history' },
]

const LOVE_AND_RELATIONSHIPS: Poem[] = [
  { title: 'When We Two Parted', poet: 'Lord Byron', slug: 'when-we-two-parted' },
  { title: "Love's Philosophy", poet: 'Percy Bysshe Shelley', slug: 'loves-philosophy' },
  { title: "Porphyria's Lover", poet: 'Robert Browning', slug: 'porphyrias-lover' },
  { title: "Sonnet 29 -- 'I think of thee!'", poet: 'Elizabeth Barrett Browning', slug: 'sonnet-29' },
  { title: 'Neutral Tones', poet: 'Thomas Hardy', slug: 'neutral-tones' },
  { title: 'Letters from Yorkshire', poet: 'Maura Dooley', slug: 'letters-from-yorkshire' },
  { title: "The Farmer's Bride", poet: 'Charlotte Mew', slug: 'the-farmers-bride' },
  { title: 'Walking Away', poet: 'Cecil Day Lewis', slug: 'walking-away' },
  { title: 'Eden Rock', poet: 'Charles Causley', slug: 'eden-rock' },
  { title: 'Follower', poet: 'Seamus Heaney', slug: 'follower' },
  { title: 'Mother, Any Distance', poet: 'Simon Armitage', slug: 'mother-any-distance' },
  { title: 'Before You Were Mine', poet: 'Carol Ann Duffy', slug: 'before-you-were-mine' },
  { title: 'Winter Swans', poet: 'Owen Sheers', slug: 'winter-swans' },
  { title: 'Singh Song!', poet: 'Daljit Nagra', slug: 'singh-song' },
  { title: 'Climbing My Grandfather', poet: 'Andrew Waterhouse', slug: 'climbing-my-grandfather' },
]

// ─── Poetry techniques ────────────────────────────────────────────────────────

const POETRY_TECHNIQUES = [
  { name: 'Metaphor', description: 'A direct comparison without using "like" or "as"' },
  { name: 'Simile', description: 'A comparison using "like" or "as"' },
  { name: 'Enjambment', description: 'A sentence or phrase running over the end of a line' },
  { name: 'Caesura', description: 'A pause in the middle of a line, often using punctuation' },
  { name: 'Volta', description: 'A turn or shift in argument or tone within a poem' },
  { name: 'Sibilance', description: 'Repetition of "s" and "sh" sounds' },
  { name: 'Dramatic monologue', description: 'A poem written as a speech by a single character' },
  { name: 'Personification', description: 'Giving human qualities to non-human things' },
  { name: 'Juxtaposition', description: 'Placing contrasting ideas side by side for effect' },
  { name: 'Pathetic fallacy', description: 'Using weather or nature to reflect mood or emotion' },
  { name: 'Oxymoron', description: 'Two contradictory words placed together' },
  { name: 'Semantic field', description: 'A group of words related to a particular theme or subject' },
]

// ─── Comparison pairings ──────────────────────────────────────────────────────

const COMPARISON_PAIRINGS = [
  {
    theme: 'Power of Nature',
    poems: ['Storm on the Island', 'Extract from The Prelude'],
    anthology: 'power-and-conflict' as const,
    tip: 'Compare how both poets present nature as a threatening, uncontrollable force.',
  },
  {
    theme: 'Effects of Conflict',
    poems: ['Remains', 'War Photographer'],
    anthology: 'power-and-conflict' as const,
    tip: 'Explore psychological trauma and how memories of conflict haunt both speakers.',
  },
  {
    theme: 'Loss of Power',
    poems: ['Ozymandias', 'My Last Duchess'],
    anthology: 'power-and-conflict' as const,
    tip: 'Examine how both poems present rulers who try to control but ultimately fail.',
  },
  {
    theme: 'Identity and Place',
    poems: ['The Emigree', 'Checking Out Me History'],
    anthology: 'power-and-conflict' as const,
    tip: 'Compare how both speakers assert their identity against dominant powers.',
  },
  {
    theme: 'Parental Love',
    poems: ['Walking Away', 'Follower'],
    anthology: 'love-and-relationships' as const,
    tip: 'Explore the shifting dynamic between parent and child over time.',
  },
  {
    theme: 'Desire and Obsession',
    poems: ["Porphyria's Lover", "Sonnet 29 -- 'I think of thee!'"],
    anthology: 'love-and-relationships' as const,
    tip: 'Compare passionate desire -- one healthy, one dangerously possessive.',
  },
  {
    theme: 'Memory and Loss',
    poems: ['When We Two Parted', 'Neutral Tones'],
    anthology: 'love-and-relationships' as const,
    tip: 'Both poems use nature imagery to convey the pain of a relationship ending.',
  },
  {
    theme: 'Distance in Relationships',
    poems: ['Letters from Yorkshire', 'Mother, Any Distance'],
    anthology: 'love-and-relationships' as const,
    tip: 'Explore how physical distance reveals emotional connection or growing independence.',
  },
]

// ─── Local storage key ────────────────────────────────────────────────────────

const STUDIED_POEMS_KEY = 'english-hub-studied-poems'

// ─── Component ────────────────────────────────────────────────────────────────

export function PoetryHubAQAClient() {
  const [studiedSlugs, setStudiedSlugs] = useState<Set<string>>(new Set())
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    try {
      const stored = localStorage.getItem(STUDIED_POEMS_KEY)
      if (stored) {
        const parsed: string[] = JSON.parse(stored)
        setStudiedSlugs(new Set(parsed))
      }
    } catch {
      // ignore parse errors
    }
  }, [])

  const totalPoems = POWER_AND_CONFLICT.length + LOVE_AND_RELATIONSHIPS.length
  const studiedCount = mounted ? studiedSlugs.size : 0
  const progressPercent = totalPoems > 0 ? Math.round((studiedCount / totalPoems) * 100) : 0

  return (
    <div className="space-y-10 pb-16">
      {/* ── Back nav + Hero ─────────────────────────────────────────── */}
      <section className="relative overflow-hidden rounded-2xl border border-border/60 bg-gradient-to-br from-card via-card to-rose-500/[0.04] p-6 sm:p-8 lg:p-10">
        <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-rose-500/5 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-violet-500/5 blur-3xl" />

        <div className="relative">
          <Button
            variant="ghost"
            size="sm"
            className="mb-4 -ml-2 text-muted-foreground"
            render={<Link href="/revision" />}
          >
            <ArrowLeft className="size-3.5" />
            Back to Revision Hub
          </Button>

          <div className="mb-4 flex flex-wrap items-center gap-2">
            <Badge variant="secondary">
              <Sparkles className="mr-1 size-3" />
              AQA Poetry Anthology
            </Badge>
            <Link
              href="/board-select"
              className="text-caption text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
            >
              Change board
            </Link>
          </div>

          <h1 className="text-display-sm font-heading text-foreground sm:text-display">
            Poetry Revision
          </h1>
          <p className="mt-3 max-w-2xl text-body-lg text-muted-foreground">
            Master all 30 AQA anthology poems across both clusters. Interactive study pages, key
            quotations, technique analysis, and comparison practice -- everything you need for the
            poetry exam.
          </p>

          {/* Progress tracker */}
          {mounted && (
            <div className="mt-6 max-w-md">
              <div className="mb-2 flex items-center justify-between">
                <span className="text-sm font-medium text-foreground">
                  Poems studied
                </span>
                <span className="text-sm text-muted-foreground">
                  {studiedCount} / {totalPoems}
                </span>
              </div>
              <Progress value={progressPercent} className="h-2" />
              <p className="mt-1.5 text-caption text-muted-foreground">
                {progressPercent === 100
                  ? 'All poems studied -- amazing work!'
                  : progressPercent > 0
                    ? `${progressPercent}% complete -- keep going!`
                    : 'Start studying poems to track your progress'}
              </p>
            </div>
          )}
        </div>
      </section>

      {/* ── Anthology Sections ──────────────────────────────────────── */}
      <section>
        <div className="mb-5 flex items-center gap-3">
          <BookOpen className="size-5 text-primary" />
          <h2 className="text-heading-lg font-heading text-foreground">AQA Anthology Clusters</h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {/* Power & Conflict card */}
          <Card className="group relative flex flex-col overflow-hidden transition-all duration-200 hover:border-border hover:shadow-card-hover">
            <CardHeader className="pb-3">
              <div className="mb-2 flex items-center gap-3">
                <div className="flex size-10 items-center justify-center rounded-xl bg-red-500/10">
                  <Swords className="size-5 text-red-400" />
                </div>
                <div>
                  <CardTitle className="text-heading-md font-heading">Power & Conflict</CardTitle>
                  <CardDescription>15 poems</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="flex flex-1 flex-col gap-4">
              <ul className="grid grid-cols-1 gap-1 text-body-sm text-muted-foreground">
                {POWER_AND_CONFLICT.map((poem) => (
                  <li key={poem.slug} className="flex items-center gap-1.5 truncate">
                    {mounted && studiedSlugs.has(poem.slug) ? (
                      <CheckCircle2 className="size-3 shrink-0 text-emerald-400" />
                    ) : (
                      <span className="size-3 shrink-0" />
                    )}
                    {poem.title}
                  </li>
                ))}
              </ul>
              <div className="mt-auto pt-2">
                <Button
                  variant="default"
                  size="sm"
                  className="w-full"
                  render={<Link href="/revision/poetry/power-and-conflict" />}
                >
                  Study Power & Conflict
                  <ArrowRight className="size-3.5" />
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Love & Relationships card */}
          <Card className="group relative flex flex-col overflow-hidden transition-all duration-200 hover:border-border hover:shadow-card-hover">
            <CardHeader className="pb-3">
              <div className="mb-2 flex items-center gap-3">
                <div className="flex size-10 items-center justify-center rounded-xl bg-pink-500/10">
                  <Heart className="size-5 text-pink-400" />
                </div>
                <div>
                  <CardTitle className="text-heading-md font-heading">Love & Relationships</CardTitle>
                  <CardDescription>15 poems</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="flex flex-1 flex-col gap-4">
              <ul className="grid grid-cols-1 gap-1 text-body-sm text-muted-foreground">
                {LOVE_AND_RELATIONSHIPS.map((poem) => (
                  <li key={poem.slug} className="flex items-center gap-1.5 truncate">
                    {mounted && studiedSlugs.has(poem.slug) ? (
                      <CheckCircle2 className="size-3 shrink-0 text-emerald-400" />
                    ) : (
                      <span className="size-3 shrink-0" />
                    )}
                    {poem.title}
                  </li>
                ))}
              </ul>
              <div className="mt-auto pt-2">
                <Button
                  variant="default"
                  size="sm"
                  className="w-full"
                  render={<Link href="/revision/poetry/love-and-relationships" />}
                >
                  Study Love & Relationships
                  <ArrowRight className="size-3.5" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* ── Quick Access Grid: All 30 Poems ─────────────────────────── */}
      <section>
        <div className="mb-5 flex items-center gap-3">
          <FileText className="size-5 text-rose-400" />
          <h2 className="text-heading-lg font-heading text-foreground">All 30 AQA Poems</h2>
        </div>

        <div className="space-y-6">
          {/* Power & Conflict poems */}
          <div>
            <h3 className="mb-3 text-heading-sm font-heading text-foreground flex items-center gap-2">
              <Swords className="size-4 text-red-400" />
              Power & Conflict
            </h3>
            <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
              {POWER_AND_CONFLICT.map((poem) => (
                <Link
                  key={poem.slug}
                  href={`/revision/poetry/power-and-conflict/${poem.slug}`}
                  className="group flex items-center gap-3 rounded-xl border border-border/60 bg-card p-3 transition-all duration-200 hover:border-border hover:shadow-card-hover"
                >
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                      {poem.title}
                    </p>
                    <p className="truncate text-xs text-muted-foreground">{poem.poet}</p>
                  </div>
                  {mounted && studiedSlugs.has(poem.slug) && (
                    <CheckCircle2 className="size-4 shrink-0 text-emerald-400" />
                  )}
                  <ArrowRight className="size-3.5 shrink-0 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
                </Link>
              ))}
            </div>
          </div>

          {/* Love & Relationships poems */}
          <div>
            <h3 className="mb-3 text-heading-sm font-heading text-foreground flex items-center gap-2">
              <Heart className="size-4 text-pink-400" />
              Love & Relationships
            </h3>
            <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
              {LOVE_AND_RELATIONSHIPS.map((poem) => (
                <Link
                  key={poem.slug}
                  href={`/revision/poetry/love-and-relationships/${poem.slug}`}
                  className="group flex items-center gap-3 rounded-xl border border-border/60 bg-card p-3 transition-all duration-200 hover:border-border hover:shadow-card-hover"
                >
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                      {poem.title}
                    </p>
                    <p className="truncate text-xs text-muted-foreground">{poem.poet}</p>
                  </div>
                  {mounted && studiedSlugs.has(poem.slug) && (
                    <CheckCircle2 className="size-4 shrink-0 text-emerald-400" />
                  )}
                  <ArrowRight className="size-3.5 shrink-0 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Unseen Poetry ───────────────────────────────────────────── */}
      <section>
        <div className="mb-5 flex items-center gap-3">
          <Eye className="size-5 text-violet-400" />
          <h2 className="text-heading-lg font-heading text-foreground">Unseen Poetry</h2>
        </div>

        <Card className="overflow-hidden">
          <CardContent className="p-6 sm:p-8">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
              <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-violet-500/10">
                <Eye className="size-6 text-violet-400" />
              </div>
              <div className="flex-1 space-y-4">
                <div>
                  <h3 className="text-heading-md font-heading text-foreground">
                    Tackling Unseen Poetry
                  </h3>
                  <p className="mt-1 text-body-sm text-muted-foreground">
                    Section C of the poetry paper tests your ability to analyse a poem you have never
                    seen before. Here are the key strategies:
                  </p>
                </div>
                <ul className="grid gap-2 sm:grid-cols-2 text-body-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-violet-400" />
                    Read the poem twice -- once for meaning, once for technique
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-violet-400" />
                    Annotate as you read: circle key words, underline imagery
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-violet-400" />
                    Identify the speaker, audience, and situation
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-violet-400" />
                    Comment on structure: form, stanzas, line length, enjambment
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-violet-400" />
                    Analyse language: imagery, word choice, sound devices
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-violet-400" />
                    Always explain the effect on the reader, not just name devices
                  </li>
                </ul>
                <Button
                  variant="outline"
                  size="sm"
                  render={<Link href="/revision/poetry/unseen-poetry" />}
                >
                  Practise unseen poetry
                  <ArrowRight className="size-3.5" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* ── Poetry Techniques ───────────────────────────────────────── */}
      <section>
        <div className="mb-5 flex items-center gap-3">
          <Wand2 className="size-5 text-clay-600" />
          <h2 className="text-heading-lg font-heading text-foreground">Poetry Techniques</h2>
        </div>

        <Card>
          <CardContent className="p-6">
            <p className="mb-4 text-body-sm text-muted-foreground">
              Key poetic devices you need to know for the exam. Learn to identify them, explain
              their effect, and link them to the poem's themes.
            </p>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {POETRY_TECHNIQUES.map((technique) => (
                <div
                  key={technique.name}
                  className="rounded-lg border border-border/60 bg-background/50 p-3"
                >
                  <p className="text-sm font-semibold text-foreground">{technique.name}</p>
                  <p className="mt-0.5 text-xs text-muted-foreground">{technique.description}</p>
                </div>
              ))}
            </div>
            <div className="mt-4">
              <Button
                variant="outline"
                size="sm"
                render={<Link href="/resources/poetry/techniques" />}
              >
                Full techniques guide
                <ArrowRight className="size-3.5" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* ── Comparison Practice ──────────────────────────────────────── */}
      <section>
        <div className="mb-5 flex items-center gap-3">
          <GitCompareArrows className="size-5 text-emerald-400" />
          <h2 className="text-heading-lg font-heading text-foreground">Comparison Practice</h2>
        </div>

        <p className="mb-4 text-body-sm text-muted-foreground max-w-2xl">
          The exam will ask you to compare a named poem with one of your choice. Practise these
          popular pairings to build confidence in weaving both poems together.
        </p>

        <div className="grid gap-4 sm:grid-cols-2">
          {COMPARISON_PAIRINGS.map((pairing) => (
            <div
              key={pairing.theme}
              className="rounded-2xl border border-border/60 bg-card p-5 space-y-3"
            >
              <div className="flex items-center gap-2">
                <Badge variant="secondary" className="text-[0.65rem] uppercase tracking-wider">
                  {pairing.anthology === 'power-and-conflict' ? 'P&C' : 'L&R'}
                </Badge>
                <h3 className="text-heading-sm font-heading text-foreground">{pairing.theme}</h3>
              </div>
              <div className="flex items-center gap-2 text-sm text-foreground">
                <span className="font-medium">{pairing.poems[0]}</span>
                <GitCompareArrows className="size-3.5 text-muted-foreground" />
                <span className="font-medium">{pairing.poems[1]}</span>
              </div>
              <p className="text-xs text-muted-foreground">{pairing.tip}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Related Revision ────────────────────────────────────────── */}
      <section>
        <div className="mb-5 flex items-center gap-3">
          <Sparkles className="size-5 text-primary" />
          <h2 className="text-heading-lg font-heading text-foreground">Sharpen Your Poetry Marks</h2>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <Link
            href="/revision/exam-technique/essay-structure"
            className="group flex items-start gap-3 rounded-2xl border border-border/60 bg-card p-4 transition-all hover:border-border hover:shadow-card-hover"
          >
            <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-emerald-500/10">
              <FileText className="size-4 text-emerald-400" />
            </div>
            <div className="min-w-0">
              <p className="text-sm font-semibold text-foreground group-hover:text-primary">Essay Structure</p>
              <p className="text-xs text-muted-foreground mt-0.5">Build sustained poetry comparisons.</p>
            </div>
          </Link>
          <Link
            href="/revision/exam-technique/question-types"
            className="group flex items-start gap-3 rounded-2xl border border-border/60 bg-card p-4 transition-all hover:border-border hover:shadow-card-hover"
          >
            <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-emerald-500/10">
              <GitCompareArrows className="size-4 text-emerald-400" />
            </div>
            <div className="min-w-0">
              <p className="text-sm font-semibold text-foreground group-hover:text-primary">Compare Command Words</p>
              <p className="text-xs text-muted-foreground mt-0.5">Decode the comparison question.</p>
            </div>
          </Link>
          <Link
            href="/revision/grade-targets/grade-9"
            className="group flex items-start gap-3 rounded-2xl border border-border/60 bg-card p-4 transition-all hover:border-border hover:shadow-card-hover"
          >
            <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-cyan-500/10">
              <Sparkles className="size-4 text-cyan-400" />
            </div>
            <div className="min-w-0">
              <p className="text-sm font-semibold text-foreground group-hover:text-primary">Grade 9 Poetry</p>
              <p className="text-xs text-muted-foreground mt-0.5">Conceptualised, top-band readings.</p>
            </div>
          </Link>
          <Link
            href="/revision/quiz"
            className="group flex items-start gap-3 rounded-2xl border border-border/60 bg-card p-4 transition-all hover:border-border hover:shadow-card-hover"
          >
            <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-orange-500/10">
              <Wand2 className="size-4 text-clay-600" />
            </div>
            <div className="min-w-0">
              <p className="text-sm font-semibold text-foreground group-hover:text-primary">Poetry Quizzes</p>
              <p className="text-xs text-muted-foreground mt-0.5">Test your quote and context recall.</p>
            </div>
          </Link>
        </div>
      </section>

      {/* ── Motivational CTA ────────────────────────────────────────── */}
      <section className="rounded-2xl border border-border/60 bg-gradient-to-r from-rose-500/[0.06] via-card to-violet-500/[0.04] p-6 sm:p-8 text-center">
        <FileText className="mx-auto mb-3 size-8 text-rose-400" />
        <h2 className="text-heading-lg font-heading text-foreground">
          Start with one poem a day
        </h2>
        <p className="mx-auto mt-2 max-w-lg text-body-sm text-muted-foreground">
          Studying just one poem per day means you will cover the entire anthology in a month. Pick
          the poem you find hardest and start there -- progress beats perfection.
        </p>
        <Button
          variant="default"
          size="lg"
          className="mt-5"
          render={<Link href="/revision/poetry/power-and-conflict/ozymandias" />}
        >
          Start with Ozymandias
          <ArrowRight className="size-4" />
        </Button>
      </section>
    </div>
  )
}
