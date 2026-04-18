'use client'

import Link from 'next/link'
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Sparkles,
  Leaf,
  Swords,
  Heart,
  Crown,
  User,
  GitCompareArrows,
  Info,
  CheckCircle2,
  Lock,
} from 'lucide-react'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import StudyTools from '@/components/study/StudyTools'

/* ── Poem data ────────────────────────────────────────────────────── */

interface EduqasPoem {
  title: string
  poet: string
  slug: string | null
  publicDomain: boolean
  themes: string[]
}

const NATURE: EduqasPoem[] = [
  { title: 'The Prelude: stealing the boat', poet: 'William Wordsworth', slug: 'the-prelude', publicDomain: true, themes: ['Nature', 'Power', 'Memory'] },
  { title: 'To Autumn', poet: 'John Keats', slug: 'to-autumn', publicDomain: true, themes: ['Nature', 'Time', 'Beauty'] },
  { title: 'Death of a Naturalist', poet: 'Seamus Heaney', slug: null, publicDomain: false, themes: ['Nature', 'Childhood', 'Fear'] },
  { title: 'Hawk Roosting', poet: 'Ted Hughes', slug: null, publicDomain: false, themes: ['Nature', 'Power', 'Violence'] },
  { title: 'As Imperceptibly as Grief', poet: 'Emily Dickinson', slug: null, publicDomain: true, themes: ['Nature', 'Time', 'Loss'] },
]

const WAR: EduqasPoem[] = [
  { title: 'Dulce et Decorum Est', poet: 'Wilfred Owen', slug: 'dulce-et-decorum-est', publicDomain: true, themes: ['War', 'Suffering', 'Reality'] },
  { title: 'The Soldier', poet: 'Rupert Brooke', slug: 'the-soldier', publicDomain: true, themes: ['War', 'Patriotism', 'Death'] },
  { title: 'A Wife in London', poet: 'Thomas Hardy', slug: 'a-wife-in-london', publicDomain: true, themes: ['War', 'Loss', 'Irony'] },
  { title: 'Mametz Wood', poet: 'Owen Sheers', slug: null, publicDomain: false, themes: ['War', 'History', 'Memory'] },
]

const LOVE: EduqasPoem[] = [
  { title: 'Sonnet 43', poet: 'Elizabeth Barrett Browning', slug: 'sonnet-43', publicDomain: true, themes: ['Love', 'Devotion', 'Faith'] },
  { title: 'Cozy Apologia', poet: 'Rita Dove', slug: null, publicDomain: false, themes: ['Love', 'Domesticity', 'Modernity'] },
  { title: 'Valentine', poet: 'Carol Ann Duffy', slug: null, publicDomain: false, themes: ['Love', 'Honesty', 'Modernity'] },
  { title: 'Afternoons', poet: 'Philip Larkin', slug: null, publicDomain: false, themes: ['Love', 'Time', 'Disillusion'] },
]

const POWER: EduqasPoem[] = [
  { title: 'Ozymandias', poet: 'Percy Bysshe Shelley', slug: 'ozymandias', publicDomain: true, themes: ['Power', 'Pride', 'Time'] },
  { title: 'London', poet: 'William Blake', slug: 'london', publicDomain: true, themes: ['Power', 'Suffering', 'Oppression'] },
]

const IDENTITY: EduqasPoem[] = [
  { title: 'Living Space', poet: 'Imtiaz Dharker', slug: null, publicDomain: false, themes: ['Identity', 'Place', 'Faith'] },
  { title: 'Tissue', poet: 'Imtiaz Dharker', slug: null, publicDomain: false, themes: ['Identity', 'Power', 'Fragility'] },
  { title: 'Excerpt from The Emigrée', poet: 'Carol Rumens', slug: null, publicDomain: false, themes: ['Identity', 'Memory', 'Place'] },
]

const THEME_GROUPS = [
  { id: 'nature', label: 'Nature', icon: Leaf, accent: 'text-emerald-400', bg: 'bg-emerald-500/10', poems: NATURE },
  { id: 'war', label: 'War & Conflict', icon: Swords, accent: 'text-red-400', bg: 'bg-red-500/10', poems: WAR },
  { id: 'love', label: 'Love & Relationships', icon: Heart, accent: 'text-pink-400', bg: 'bg-pink-500/10', poems: LOVE },
  { id: 'power', label: 'Power & Politics', icon: Crown, accent: 'text-clay-600', bg: 'bg-amber-500/10', poems: POWER },
  { id: 'identity', label: 'Identity & Place', icon: User, accent: 'text-violet-400', bg: 'bg-violet-500/10', poems: IDENTITY },
] as const

/* ── Comparison pairings (Eduqas) ────────────────────────────────── */

const COMPARISON_PAIRINGS = [
  {
    theme: 'Power of Nature',
    poems: ['The Prelude: stealing the boat', 'To Autumn'],
    tip: 'Compare how Wordsworth presents nature as sublime and threatening, while Keats depicts it as gentle and abundant.',
  },
  {
    theme: 'Reality of War',
    poems: ['Dulce et Decorum Est', 'The Soldier'],
    tip: 'Owen exposes the horror of war; Brooke romanticises death in battle. A perfect contrast in tone and message.',
  },
  {
    theme: 'Suffering at Home',
    poems: ['A Wife in London', 'London'],
    tip: 'Both poems use London as a setting for grief and oppression. Compare Hardy\'s personal tragedy with Blake\'s political critique.',
  },
  {
    theme: 'Love and Devotion',
    poems: ['Sonnet 43', 'Cozy Apologia'],
    tip: 'A Victorian declaration of love compared to a modern, ironic view of domestic affection.',
  },
  {
    theme: 'Power and Pride',
    poems: ['Ozymandias', 'Hawk Roosting'],
    tip: 'Both speakers (or subjects) believe themselves invincible. Compare Shelley\'s ironic critique with Hughes\'s direct voice of power.',
  },
  {
    theme: 'Time and Change',
    poems: ['As Imperceptibly as Grief', 'To Autumn'],
    tip: 'Both poems explore the gradual passing of summer and the quiet acceptance of change.',
  },
]

/* ── Page component ───────────────────────────────────────────────── */

const totalPoems =
  NATURE.length + WAR.length + LOVE.length + POWER.length + IDENTITY.length

export default function EduqasPoetryPage() {
  return (
    <div className="space-y-10 pb-16">
      {/* ── Hero ──────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden rounded-2xl border border-border/60 bg-gradient-to-br from-card via-card to-primary/[0.04] p-6 sm:p-8 lg:p-10">
        <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-violet-500/5 blur-3xl" />

        <div className="relative">
          <Button
            variant="ghost"
            size="sm"
            className="mb-4 -ml-2 text-muted-foreground"
            render={<Link href="/revision/poetry" />}
          >
            <ArrowLeft className="size-3.5" />
            Back to Poetry
          </Button>

          <Badge variant="secondary" className="mb-4">
            <Sparkles className="mr-1 size-3" />
            Eduqas Poetry Anthology
          </Badge>

          <h1 className="text-display-sm font-heading text-foreground sm:text-display">
            WJEC Eduqas Poetry
          </h1>
          <p className="mt-3 max-w-2xl text-body-lg text-muted-foreground">
            Master all {totalPoems} poems from the WJEC Eduqas GCSE English
            Literature anthology. Interactive study pages, key quotations,
            technique analysis, and comparison practice.
          </p>

          <div className="mt-5 flex items-start gap-2 rounded-lg bg-blue-500/5 border border-blue-500/10 p-3 max-w-2xl">
            <Info className="mt-0.5 size-4 shrink-0 text-blue-400" />
            <p className="text-caption text-muted-foreground">
              Eduqas students study a <strong className="text-foreground">single anthology of {totalPoems} poems</strong> for
              Component 1. The exam asks you to compare two poems from the
              anthology, so practising pairings is essential.
            </p>
          </div>
        </div>
      </section>

      <StudyTools textName="Eduqas Poetry Anthology" textType="anthology" examBoard="Eduqas" variant="banner" />

      {/* ── Poems grouped by theme ────────────────────────────────── */}
      <section>
        <div className="mb-5 flex items-center gap-3">
          <BookOpen className="size-5 text-primary" />
          <h2 className="text-heading-lg font-heading text-foreground">
            All {totalPoems} Eduqas Poems
          </h2>
        </div>

        <div className="space-y-6">
          {THEME_GROUPS.map((group) => {
            const Icon = group.icon
            return (
              <div key={group.id}>
                <h3 className="mb-3 flex items-center gap-2 text-heading-sm font-heading text-foreground">
                  <Icon className={`size-4 ${group.accent}`} />
                  {group.label}
                </h3>
                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {group.poems.map((poem) => {
                    const cardClassName = `group flex flex-col gap-2 rounded-xl border border-border/60 bg-card p-4 transition-all duration-200 ${
                      poem.slug
                        ? 'hover:border-border hover:shadow-card-hover cursor-pointer'
                        : 'opacity-80'
                    }`

                    const cardContent = (
                      <>
                        <div className="flex items-start gap-3">
                          <div
                            className={`flex size-9 shrink-0 items-center justify-center rounded-lg ${group.bg}`}
                          >
                            <Icon className={`size-4 ${group.accent}`} />
                          </div>
                          <div className="min-w-0 flex-1">
                            <p className="truncate text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                              {poem.title}
                            </p>
                            <p className="truncate text-xs text-muted-foreground">
                              {poem.poet}
                            </p>
                          </div>
                          {poem.slug ? (
                            <ArrowRight className="size-3.5 shrink-0 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
                          ) : (
                            <Lock
                              className="size-3.5 shrink-0 text-muted-foreground"
                              aria-label="Copyrighted - notes only"
                            />
                          )}
                        </div>
                        <div className="flex flex-wrap gap-1">
                          {poem.themes.map((t) => (
                            <span
                              key={t}
                              className="rounded-full bg-muted px-2 py-0.5 text-[10px] text-muted-foreground"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                        {!poem.slug && (
                          <p className="text-[11px] text-muted-foreground italic">
                            Copyrighted - study notes only
                          </p>
                        )}
                      </>
                    )

                    if (poem.slug) {
                      return (
                        <Link
                          key={poem.title}
                          href={`/revision/poetry/eduqas/${poem.slug}`}
                          className={cardClassName}
                        >
                          {cardContent}
                        </Link>
                      )
                    }

                    return (
                      <div key={poem.title} className={cardClassName}>
                        {cardContent}
                      </div>
                    )
                  })}
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* ── Comparison study tips ─────────────────────────────────── */}
      <section>
        <div className="mb-5 flex items-center gap-3">
          <GitCompareArrows className="size-5 text-emerald-400" />
          <h2 className="text-heading-lg font-heading text-foreground">
            Comparison Question Practice
          </h2>
        </div>

        <Card className="mb-6">
          <CardContent className="p-5 sm:p-6">
            <div className="flex items-start gap-3">
              <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-emerald-500/10">
                <GitCompareArrows className="size-5 text-emerald-400" />
              </div>
              <div className="space-y-3">
                <div>
                  <h3 className="text-heading-sm font-heading text-foreground">
                    How the Eduqas comparison question works
                  </h3>
                  <p className="mt-1 text-body-sm text-muted-foreground">
                    Component 1 Section B will give you one named poem and ask
                    you to compare it with another poem from the anthology of
                    your choice. Choose your second poem carefully - it must
                    share a clear theme or contrast.
                  </p>
                </div>
                <ul className="grid gap-2 sm:grid-cols-2 text-body-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-emerald-400" />
                    Pick a poem with strong thematic links
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-emerald-400" />
                    Plan three points of comparison
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-emerald-400" />
                    Use connectives: similarly, in contrast, whereas
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-emerald-400" />
                    Quote from both poems in every paragraph
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-emerald-400" />
                    Comment on form and structure, not just language
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-emerald-400" />
                    Link analysis to context and the poet's intention
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <p className="mb-4 text-body-sm text-muted-foreground max-w-2xl">
          Strong pairings to practise. Each pair shares a clear thematic link,
          letting you draw both similarities and contrasts.
        </p>

        <div className="grid gap-4 sm:grid-cols-2">
          {COMPARISON_PAIRINGS.map((pairing) => (
            <div
              key={pairing.theme}
              className="rounded-2xl border border-border/60 bg-card p-5 space-y-3"
            >
              <div className="flex items-center gap-2">
                <Badge variant="secondary" className="text-[0.65rem] uppercase tracking-wider">
                  Eduqas
                </Badge>
                <h3 className="text-heading-sm font-heading text-foreground">{pairing.theme}</h3>
              </div>
              <div className="flex flex-wrap items-center gap-2 text-sm text-foreground">
                <span className="font-medium">{pairing.poems[0]}</span>
                <GitCompareArrows className="size-3.5 text-muted-foreground" />
                <span className="font-medium">{pairing.poems[1]}</span>
              </div>
              <p className="text-xs text-muted-foreground">{pairing.tip}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Featured study cards ──────────────────────────────────── */}
      <section className="grid gap-6 sm:grid-cols-2">
        <Card className="group relative flex flex-col overflow-hidden transition-all duration-200 hover:border-border hover:shadow-card-hover">
          <CardHeader className="pb-3">
            <div className="mb-2 flex items-center gap-3">
              <div className="flex size-10 items-center justify-center rounded-xl bg-primary/10">
                <Sparkles className="size-5 text-primary" />
              </div>
              <div>
                <CardTitle className="text-heading-md font-heading">Start with a classic</CardTitle>
                <CardDescription>Perfect first poem to study</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="flex flex-1 flex-col gap-4">
            <p className="text-body-sm text-muted-foreground">
              Ozymandias is a brilliant entry point to the Eduqas anthology.
              Short, powerful, and rich in techniques you can use as model
              examples for any comparison question.
            </p>
            <div className="mt-auto pt-2">
              <Button
                variant="default"
                size="sm"
                className="w-full"
                render={<Link href="/revision/poetry/eduqas/ozymandias" />}
              >
                Start with Ozymandias
                <ArrowRight className="size-3.5" />
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="group relative flex flex-col overflow-hidden transition-all duration-200 hover:border-border hover:shadow-card-hover">
          <CardHeader className="pb-3">
            <div className="mb-2 flex items-center gap-3">
              <div className="flex size-10 items-center justify-center rounded-xl bg-red-500/10">
                <Swords className="size-5 text-red-400" />
              </div>
              <div>
                <CardTitle className="text-heading-md font-heading">War poetry pair</CardTitle>
                <CardDescription>The Eduqas exam favourite</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="flex flex-1 flex-col gap-4">
            <p className="text-body-sm text-muted-foreground">
              Dulce et Decorum Est and The Soldier are the most-asked-about
              pairing in Eduqas papers. Owen and Brooke present completely
              opposing views of war - perfect contrast material.
            </p>
            <div className="mt-auto pt-2 flex gap-2">
              <Button
                variant="outline"
                size="sm"
                className="flex-1"
                render={<Link href="/revision/poetry/eduqas/dulce-et-decorum-est" />}
              >
                Dulce et Decorum Est
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="flex-1"
                render={<Link href="/revision/poetry/eduqas/the-soldier" />}
              >
                The Soldier
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}
