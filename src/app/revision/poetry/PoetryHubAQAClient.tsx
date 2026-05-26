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
import { useT } from '@/lib/i18n/use-t'

// ─── Poem data ────────────────────────────────────────────────────────────────
//
// Poem titles + poet names stay in their original English forms in every
// locale - translating "Ozymandias" or "Wilfred Owen" would mislead a
// student studying for an English Literature exam. The surrounding
// UI chrome (headings, CTAs, progress copy) is what we localise via
// useT() and the `poetry_hub.*` namespace.

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
  {
    title: 'The Charge of the Light Brigade',
    poet: 'Alfred Lord Tennyson',
    slug: 'charge-of-the-light-brigade',
  },
  { title: 'Exposure', poet: 'Wilfred Owen', slug: 'exposure' },
  { title: 'Storm on the Island', poet: 'Seamus Heaney', slug: 'storm-on-the-island' },
  { title: 'Bayonet Charge', poet: 'Ted Hughes', slug: 'bayonet-charge' },
  { title: 'Remains', poet: 'Simon Armitage', slug: 'remains' },
  { title: 'Poppies', poet: 'Jane Weir', slug: 'poppies' },
  { title: 'War Photographer', poet: 'Carol Ann Duffy', slug: 'war-photographer' },
  { title: 'Tissue', poet: 'Imtiaz Dharker', slug: 'tissue' },
  { title: 'The Émigrée', poet: 'Carol Rumens', slug: 'the-emigree' },
  { title: 'Kamikaze', poet: 'Beatrice Garland', slug: 'kamikaze' },
  { title: 'Checking Out Me History', poet: 'John Agard', slug: 'checking-out-me-history' },
]

const LOVE_AND_RELATIONSHIPS: Poem[] = [
  { title: 'When We Two Parted', poet: 'Lord Byron', slug: 'when-we-two-parted' },
  { title: "Love's Philosophy", poet: 'Percy Bysshe Shelley', slug: 'loves-philosophy' },
  { title: "Porphyria's Lover", poet: 'Robert Browning', slug: 'porphyrias-lover' },
  {
    title: "Sonnet 29 -- 'I think of thee!'",
    poet: 'Elizabeth Barrett Browning',
    slug: 'sonnet-29',
  },
  { title: 'Neutral Tones', poet: 'Thomas Hardy', slug: 'neutral-tones' },
  { title: 'Letters from Yorkshire', poet: 'Maura Dooley', slug: 'letters-from-yorkshire' },
  { title: "The Farmer's Bride", poet: 'Charlotte Mew', slug: 'the-farmers-bride' },
  { title: 'Walking Away', poet: 'Cecil Day-Lewis', slug: 'walking-away' },
  { title: 'Eden Rock', poet: 'Charles Causley', slug: 'eden-rock' },
  { title: 'Follower', poet: 'Seamus Heaney', slug: 'follower' },
  { title: 'Mother, Any Distance', poet: 'Simon Armitage', slug: 'mother-any-distance' },
  { title: 'Before You Were Mine', poet: 'Carol Ann Duffy', slug: 'before-you-were-mine' },
  { title: 'Winter Swans', poet: 'Owen Sheers', slug: 'winter-swans' },
  { title: 'Singh Song!', poet: 'Daljit Nagra', slug: 'singh-song' },
  { title: 'Climbing My Grandfather', poet: 'Andrew Waterhouse', slug: 'climbing-my-grandfather' },
]

// ─── Poetry techniques (i18n via dictionary keys) ─────────────────────────────

const POETRY_TECHNIQUE_KEYS = [
  { name: 'poetry_hub.technique.metaphor.name', description: 'poetry_hub.technique.metaphor.desc' },
  { name: 'poetry_hub.technique.simile.name', description: 'poetry_hub.technique.simile.desc' },
  {
    name: 'poetry_hub.technique.enjambment.name',
    description: 'poetry_hub.technique.enjambment.desc',
  },
  { name: 'poetry_hub.technique.caesura.name', description: 'poetry_hub.technique.caesura.desc' },
  { name: 'poetry_hub.technique.volta.name', description: 'poetry_hub.technique.volta.desc' },
  {
    name: 'poetry_hub.technique.sibilance.name',
    description: 'poetry_hub.technique.sibilance.desc',
  },
  {
    name: 'poetry_hub.technique.dramatic_monologue.name',
    description: 'poetry_hub.technique.dramatic_monologue.desc',
  },
  {
    name: 'poetry_hub.technique.personification.name',
    description: 'poetry_hub.technique.personification.desc',
  },
  {
    name: 'poetry_hub.technique.juxtaposition.name',
    description: 'poetry_hub.technique.juxtaposition.desc',
  },
  {
    name: 'poetry_hub.technique.pathetic_fallacy.name',
    description: 'poetry_hub.technique.pathetic_fallacy.desc',
  },
  { name: 'poetry_hub.technique.oxymoron.name', description: 'poetry_hub.technique.oxymoron.desc' },
  {
    name: 'poetry_hub.technique.semantic_field.name',
    description: 'poetry_hub.technique.semantic_field.desc',
  },
]

// ─── Comparison pairings ──────────────────────────────────────────────────────
//
// Poem titles stay in original English. Theme labels + tips localise
// via dictionary keys.

const COMPARISON_PAIRINGS = [
  {
    themeKey: 'poetry_hub.pair.power_of_nature.theme',
    poems: ['Storm on the Island', 'Extract from The Prelude'],
    anthology: 'power-and-conflict' as const,
    tipKey: 'poetry_hub.pair.power_of_nature.tip',
  },
  {
    themeKey: 'poetry_hub.pair.effects_of_conflict.theme',
    poems: ['Remains', 'War Photographer'],
    anthology: 'power-and-conflict' as const,
    tipKey: 'poetry_hub.pair.effects_of_conflict.tip',
  },
  {
    themeKey: 'poetry_hub.pair.loss_of_power.theme',
    poems: ['Ozymandias', 'My Last Duchess'],
    anthology: 'power-and-conflict' as const,
    tipKey: 'poetry_hub.pair.loss_of_power.tip',
  },
  {
    themeKey: 'poetry_hub.pair.identity_and_place.theme',
    poems: ['The Émigrée', 'Checking Out Me History'],
    anthology: 'power-and-conflict' as const,
    tipKey: 'poetry_hub.pair.identity_and_place.tip',
  },
  {
    themeKey: 'poetry_hub.pair.parental_love.theme',
    poems: ['Walking Away', 'Follower'],
    anthology: 'love-and-relationships' as const,
    tipKey: 'poetry_hub.pair.parental_love.tip',
  },
  {
    themeKey: 'poetry_hub.pair.desire_obsession.theme',
    poems: ["Porphyria's Lover", "Sonnet 29 -- 'I think of thee!'"],
    anthology: 'love-and-relationships' as const,
    tipKey: 'poetry_hub.pair.desire_obsession.tip',
  },
  {
    themeKey: 'poetry_hub.pair.memory_and_loss.theme',
    poems: ['When We Two Parted', 'Neutral Tones'],
    anthology: 'love-and-relationships' as const,
    tipKey: 'poetry_hub.pair.memory_and_loss.tip',
  },
  {
    themeKey: 'poetry_hub.pair.distance.theme',
    poems: ['Letters from Yorkshire', 'Mother, Any Distance'],
    anthology: 'love-and-relationships' as const,
    tipKey: 'poetry_hub.pair.distance.tip',
  },
]

// ─── Local storage key ────────────────────────────────────────────────────────

const STUDIED_POEMS_KEY = 'english-hub-studied-poems'

// ─── Component ────────────────────────────────────────────────────────────────

export function PoetryHubAQAClient() {
  const t = useT()
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
            {t('poetry_hub.back_to_revision')}
          </Button>

          <div className="mb-4 flex flex-wrap items-center gap-2">
            <Badge variant="secondary">
              <Sparkles className="mr-1 size-3" />
              {t('poetry_hub.badge_aqa_anthology')}
            </Badge>
            <Link
              href="/board-select"
              className="text-caption text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
            >
              {t('poetry_hub.change_board')}
            </Link>
          </div>

          <h1 className="text-display-sm font-heading text-foreground sm:text-display">
            {t('poetry_hub.hero_title')}
          </h1>
          <p className="mt-3 max-w-2xl text-body-lg text-muted-foreground">
            {t('poetry_hub.hero_lead')}
          </p>

          {/* Progress tracker */}
          {mounted && (
            <div className="mt-6 max-w-md">
              <div className="mb-2 flex items-center justify-between">
                <span className="text-sm font-medium text-foreground">
                  {t('poetry_hub.progress_label')}
                </span>
                <span className="text-sm text-muted-foreground">
                  {studiedCount} / {totalPoems}
                </span>
              </div>
              <Progress value={progressPercent} className="h-2" />
              <p className="mt-1.5 text-caption text-muted-foreground">
                {progressPercent === 100
                  ? t('poetry_hub.progress_all_done')
                  : progressPercent > 0
                    ? t('poetry_hub.progress_keep_going').replace(
                        '{percent}',
                        String(progressPercent),
                      )
                    : t('poetry_hub.progress_start')}
              </p>
            </div>
          )}
        </div>
      </section>

      {/* ── Anthology Sections ──────────────────────────────────────── */}
      <section>
        <div className="mb-5 flex items-center gap-3">
          <BookOpen className="size-5 text-primary" />
          <h2 className="text-heading-lg font-heading text-foreground">
            {t('poetry_hub.clusters_heading')}
          </h2>
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
                  <CardDescription>{t('poetry_hub.fifteen_poems')}</CardDescription>
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
                  {t('poetry_hub.cta_study_pc')}
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
                  <CardTitle className="text-heading-md font-heading">
                    Love & Relationships
                  </CardTitle>
                  <CardDescription>{t('poetry_hub.fifteen_poems')}</CardDescription>
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
                  {t('poetry_hub.cta_study_lr')}
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
          <h2 className="text-heading-lg font-heading text-foreground">
            {t('poetry_hub.all_30_heading')}
          </h2>
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
          <h2 className="text-heading-lg font-heading text-foreground">
            {t('poetry_hub.unseen_heading')}
          </h2>
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
                    {t('poetry_hub.unseen_title')}
                  </h3>
                  <p className="mt-1 text-body-sm text-muted-foreground">
                    {t('poetry_hub.unseen_intro')}
                  </p>
                </div>
                <ul className="grid gap-2 sm:grid-cols-2 text-body-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-violet-400" />
                    {t('poetry_hub.unseen_tip_1')}
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-violet-400" />
                    {t('poetry_hub.unseen_tip_2')}
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-violet-400" />
                    {t('poetry_hub.unseen_tip_3')}
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-violet-400" />
                    {t('poetry_hub.unseen_tip_4')}
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-violet-400" />
                    {t('poetry_hub.unseen_tip_5')}
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-violet-400" />
                    {t('poetry_hub.unseen_tip_6')}
                  </li>
                </ul>
                <Button
                  variant="outline"
                  size="sm"
                  render={<Link href="/revision/poetry/unseen-poetry" />}
                >
                  {t('poetry_hub.unseen_cta')}
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
          <h2 className="text-heading-lg font-heading text-foreground">
            {t('poetry_hub.techniques_heading')}
          </h2>
        </div>

        <Card>
          <CardContent className="p-6">
            <p className="mb-4 text-body-sm text-muted-foreground">
              {t('poetry_hub.techniques_intro')}
            </p>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {POETRY_TECHNIQUE_KEYS.map((technique) => (
                <div
                  key={technique.name}
                  className="rounded-lg border border-border/60 bg-background/50 p-3"
                >
                  <p className="text-sm font-semibold text-foreground">{t(technique.name)}</p>
                  <p className="mt-0.5 text-xs text-muted-foreground">{t(technique.description)}</p>
                </div>
              ))}
            </div>
            <div className="mt-4">
              <Button
                variant="outline"
                size="sm"
                render={<Link href="/resources/poetry/techniques" />}
              >
                {t('poetry_hub.techniques_cta')}
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
          <h2 className="text-heading-lg font-heading text-foreground">
            {t('poetry_hub.comparison_heading')}
          </h2>
        </div>

        <p className="mb-4 text-body-sm text-muted-foreground max-w-2xl">
          {t('poetry_hub.comparison_intro')}
        </p>

        <div className="grid gap-4 sm:grid-cols-2">
          {COMPARISON_PAIRINGS.map((pairing) => (
            <div
              key={pairing.themeKey}
              className="rounded-2xl border border-border/60 bg-card p-5 space-y-3"
            >
              <div className="flex items-center gap-2">
                <Badge variant="secondary" className="text-[0.65rem] uppercase tracking-wider">
                  {pairing.anthology === 'power-and-conflict' ? 'P&C' : 'L&R'}
                </Badge>
                <h3 className="text-heading-sm font-heading text-foreground">
                  {t(pairing.themeKey)}
                </h3>
              </div>
              <div className="flex items-center gap-2 text-sm text-foreground">
                <span className="font-medium">{pairing.poems[0]}</span>
                <GitCompareArrows className="size-3.5 text-muted-foreground" />
                <span className="font-medium">{pairing.poems[1]}</span>
              </div>
              <p className="text-xs text-muted-foreground">{t(pairing.tipKey)}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Related Revision ────────────────────────────────────────── */}
      <section>
        <div className="mb-5 flex items-center gap-3">
          <Sparkles className="size-5 text-primary" />
          <h2 className="text-heading-lg font-heading text-foreground">
            {t('poetry_hub.sharpen_heading')}
          </h2>
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
              <p className="text-sm font-semibold text-foreground group-hover:text-primary">
                {t('poetry_hub.related.essay_structure.title')}
              </p>
              <p className="text-xs text-muted-foreground mt-0.5">
                {t('poetry_hub.related.essay_structure.desc')}
              </p>
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
              <p className="text-sm font-semibold text-foreground group-hover:text-primary">
                {t('poetry_hub.related.compare_command.title')}
              </p>
              <p className="text-xs text-muted-foreground mt-0.5">
                {t('poetry_hub.related.compare_command.desc')}
              </p>
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
              <p className="text-sm font-semibold text-foreground group-hover:text-primary">
                {t('poetry_hub.related.grade_9.title')}
              </p>
              <p className="text-xs text-muted-foreground mt-0.5">
                {t('poetry_hub.related.grade_9.desc')}
              </p>
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
              <p className="text-sm font-semibold text-foreground group-hover:text-primary">
                {t('poetry_hub.related.quizzes.title')}
              </p>
              <p className="text-xs text-muted-foreground mt-0.5">
                {t('poetry_hub.related.quizzes.desc')}
              </p>
            </div>
          </Link>
        </div>
      </section>

      {/* ── Motivational CTA ────────────────────────────────────────── */}
      <section className="rounded-2xl border border-border/60 bg-gradient-to-r from-rose-500/[0.06] via-card to-violet-500/[0.04] p-6 sm:p-8 text-center">
        <FileText className="mx-auto mb-3 size-8 text-rose-400" />
        <h2 className="text-heading-lg font-heading text-foreground">
          {t('poetry_hub.motivational_heading')}
        </h2>
        <p className="mx-auto mt-2 max-w-lg text-body-sm text-muted-foreground">
          {t('poetry_hub.motivational_body')}
        </p>
        <Button
          variant="default"
          size="lg"
          className="mt-5"
          render={<Link href="/revision/poetry/power-and-conflict/ozymandias" />}
        >
          {t('poetry_hub.motivational_cta')}
          <ArrowRight className="size-4" />
        </Button>
      </section>
    </div>
  )
}
