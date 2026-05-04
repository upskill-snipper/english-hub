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
  User,
  GitCompareArrows,
  Info,
  CheckCircle2,
  Lock,
  AlertTriangle,
  ShieldAlert,
  Scale,
} from 'lucide-react'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import StudyTools from '@/components/study/StudyTools'
import { BreadcrumbJsonLd } from '@/components/seo/json-ld'

/* ── Poem data (Eduqas GCSE 2025 anthology — 12 poems) ────────────── */

interface EduqasPoem {
  title: string
  poet: string
  slug: string | null
  publicDomain: boolean
  themes: string[]
  bio?: string
  flag?: string
}

const CHILDHOOD_AND_NATURE: EduqasPoem[] = [
  {
    title: 'The Schoolboy',
    poet: 'William Blake',
    slug: null,
    publicDomain: true,
    themes: ['Childhood', 'Nature', 'Freedom'],
  },
  {
    title: 'I Wandered Lonely as a Cloud',
    poet: 'William Wordsworth',
    slug: null,
    publicDomain: true,
    themes: ['Nature', 'Memory', 'Joy'],
  },
  {
    title: 'Blackberry Picking',
    poet: 'Seamus Heaney',
    slug: null,
    publicDomain: false,
    themes: ['Childhood', 'Nature', 'Loss'],
  },
]

const LOVE_AND_RELATIONSHIPS: EduqasPoem[] = [
  {
    title: 'Sonnet 29 ("I think of thee")',
    poet: 'Elizabeth Barrett Browning',
    slug: null,
    publicDomain: true,
    themes: ['Love', 'Longing', 'Devotion'],
  },
  {
    title: 'Cousin Kate',
    poet: 'Christina Rossetti',
    slug: 'cousin-kate',
    publicDomain: true,
    themes: ['Love', 'Betrayal', 'Class'],
  },
  {
    title: 'Catrin',
    poet: 'Gillian Clarke',
    slug: null,
    publicDomain: false,
    themes: ['Family', 'Love', 'Conflict'],
  },
]

const WAR_AND_CONFLICT: EduqasPoem[] = [
  {
    title: 'Drummer Hodge',
    poet: 'Thomas Hardy',
    slug: 'drummer-hodge',
    publicDomain: true,
    themes: ['War', 'Death', 'Identity'],
    flag: 'Setting: Second Boer War 1899 — NOT World War I.',
  },
  {
    title: 'Disabled',
    poet: 'Wilfred Owen',
    slug: null,
    publicDomain: true,
    themes: ['War', 'Loss', 'Suffering'],
  },
  {
    title: 'Kamikaze',
    poet: 'Beatrice Garland',
    slug: null,
    publicDomain: false,
    themes: ['War', 'Family', 'Honour'],
  },
]

const IDENTITY_AND_VOICE: EduqasPoem[] = [
  {
    title: 'I Shall Return',
    poet: 'Claude McKay',
    slug: null,
    publicDomain: true,
    themes: ['Identity', 'Place', 'Belonging'],
  },
  {
    title: 'Decomposition',
    poet: 'Zulfikar Ghose',
    slug: null,
    publicDomain: false,
    themes: ['Identity', 'Poverty', 'Photography'],
    flag: 'Source confidence: LOW — verify against Eduqas anthology edition before use.',
  },
  {
    title: 'Origin Story',
    poet: 'Eve L. Ewing',
    slug: null,
    publicDomain: false,
    themes: ['Identity', 'Race', 'Memory'],
    bio: 'Eve L. Ewing (b.1986) — American sociologist and poet; *Origin Story* from *Electric Arches* (Haymarket, 2017). Note: distinct from the common phrase "origin story".',
  },
]

const THEME_GROUPS = [
  {
    id: 'childhood-nature',
    label: 'Childhood & Nature',
    icon: Leaf,
    accent: 'text-emerald-400',
    bg: 'bg-emerald-500/10',
    poems: CHILDHOOD_AND_NATURE,
  },
  {
    id: 'love',
    label: 'Love & Relationships',
    icon: Heart,
    accent: 'text-pink-400',
    bg: 'bg-pink-500/10',
    poems: LOVE_AND_RELATIONSHIPS,
  },
  {
    id: 'war',
    label: 'War & Conflict',
    icon: Swords,
    accent: 'text-red-400',
    bg: 'bg-red-500/10',
    poems: WAR_AND_CONFLICT,
  },
  {
    id: 'identity',
    label: 'Identity & Voice',
    icon: User,
    accent: 'text-violet-400',
    bg: 'bg-violet-500/10',
    poems: IDENTITY_AND_VOICE,
  },
] as const

/* ── Comparison pairings (Eduqas 2025 anthology) ─────────────────── */

const COMPARISON_PAIRINGS = [
  {
    theme: 'Childhood & Nature',
    poems: ['I Wandered Lonely as a Cloud', 'Blackberry Picking'],
    tip: "Compare Wordsworth's joyful Romantic recollection of daffodils with Heaney's more bittersweet childhood memory of harvest and decay.",
  },
  {
    theme: 'Constraint vs Freedom',
    poems: ['The Schoolboy', 'I Wandered Lonely as a Cloud'],
    tip: 'Blake critiques the cage of formal schooling; Wordsworth celebrates the freedom of wandering in nature. Both prize unforced encounter with the natural world.',
  },
  {
    theme: 'Reality of War',
    poems: ['Disabled', 'Drummer Hodge'],
    tip: "Owen's WWI veteran is alive but broken; Hardy's drummer boy of the Second Boer War (1899) lies anonymously in foreign earth. Compare physical and existential erasure.",
  },
  {
    theme: 'Love, Longing and Devotion',
    poems: ['Sonnet 29 ("I think of thee")', 'Cousin Kate'],
    tip: "Barrett Browning's passionate longing for the absent beloved compared with Rossetti's bitter retrospective on a love built on class betrayal.",
  },
  {
    theme: 'Family and Conflict',
    poems: ['Catrin', 'Kamikaze'],
    tip: "Clarke's mother-daughter struggle for separateness compared with Garland's family rejection of a returning kamikaze pilot. Both examine the cost of love within families.",
  },
  {
    theme: 'Identity and Belonging',
    poems: ['I Shall Return', 'Origin Story'],
    tip: "McKay's Jamaican-American return to a beloved homeland compared with Ewing's reimagined origins for Black American identity.",
  },
]

/* ── Page component ───────────────────────────────────────────────── */

const totalPoems =
  CHILDHOOD_AND_NATURE.length +
  LOVE_AND_RELATIONSHIPS.length +
  WAR_AND_CONFLICT.length +
  IDENTITY_AND_VOICE.length

export default function EduqasPoetryPage() {
  return (
    <div className="space-y-10 pb-16">
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: 'https://theenglishhub.app' },
          { name: 'Revision', url: 'https://theenglishhub.app/revision' },
          { name: 'Poetry', url: 'https://theenglishhub.app/revision/poetry' },
          {
            name: 'WJEC Eduqas',
            url: 'https://theenglishhub.app/revision/poetry/eduqas',
          },
        ]}
      />
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
            Eduqas GCSE 2025 Anthology
          </Badge>

          <h1 className="text-display-sm font-heading text-foreground sm:text-display">
            WJEC Eduqas Poetry
          </h1>
          <p className="mt-3 max-w-2xl text-body-lg text-muted-foreground">
            Master all {totalPoems} poems from the WJEC Eduqas GCSE English Literature 2025
            anthology. Interactive study pages, key quotations, technique analysis, and comparison
            practice.
          </p>

          <div className="mt-5 flex items-start gap-2 rounded-lg bg-blue-500/5 border border-blue-500/10 p-3 max-w-2xl">
            <Info className="mt-0.5 size-4 shrink-0 text-blue-400" />
            <p className="text-caption text-muted-foreground">
              Eduqas students study a{' '}
              <strong className="text-foreground">single anthology of {totalPoems} poems</strong>{' '}
              for Component 1. The exam asks you to compare two poems from the anthology, so
              practising pairings is essential.
            </p>
          </div>

          {/* Cluster-level rights notice */}
          <div className="mt-3 flex items-start gap-2 rounded-lg bg-amber-500/5 border border-amber-500/10 p-3 max-w-2xl">
            <Scale className="mt-0.5 size-4 shrink-0 text-clay-600" />
            <p className="text-caption text-muted-foreground">
              <strong className="text-foreground">Rights notice:</strong> Six of these twelve Eduqas
              poems remain in copyright &mdash; Heaney&rsquo;s <em>Blackberry Picking</em> (&copy;
              Faber &amp; Faber), Clarke&rsquo;s <em>Catrin</em> (&copy; Carcanet Press),
              Garland&rsquo;s <em>Kamikaze</em> (&copy; Enitharmon Press), Ewing&rsquo;s{' '}
              <em>Origin Story</em> (&copy; Haymarket Books) and others. Quotations on this site are
              short fair-dealing extracts under CDPA 1988 &sect;30 (criticism, review, quotation).
              For full text, students should consult the board-licensed Eduqas Poetry Anthology.
            </p>
          </div>
        </div>
      </section>

      <StudyTools
        textName="Eduqas Poetry Anthology"
        textType="anthology"
        examBoard="Eduqas"
        variant="banner"
      />

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
                            <p className="truncate text-xs text-muted-foreground">{poem.poet}</p>
                          </div>
                          {poem.slug ? (
                            <ArrowRight className="size-3.5 shrink-0 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
                          ) : !poem.publicDomain ? (
                            <Lock
                              className="size-3.5 shrink-0 text-muted-foreground"
                              aria-label="In copyright — study notes only"
                            />
                          ) : null}
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
                        {poem.bio && (
                          <p className="text-[11px] text-muted-foreground leading-snug">
                            {poem.bio}
                          </p>
                        )}
                        {poem.flag && (
                          <div className="flex items-start gap-1.5 rounded bg-amber-500/10 border border-amber-500/20 px-2 py-1">
                            <AlertTriangle className="mt-0.5 size-3 shrink-0 text-clay-600" />
                            <p className="text-[11px] text-foreground/90 leading-snug">
                              {poem.flag}
                            </p>
                          </div>
                        )}
                        {!poem.slug && !poem.publicDomain && (
                          <p className="text-[11px] text-muted-foreground italic">
                            In copyright — study notes only (short fair-dealing extracts)
                          </p>
                        )}
                        {!poem.slug && poem.publicDomain && (
                          <p className="text-[11px] text-muted-foreground italic">
                            Public domain — study page coming soon
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
                    Component 1 Section B will give you one named poem and ask you to compare it
                    with another poem from the anthology of your choice. Choose your second poem
                    carefully - it must share a clear theme or contrast.
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
          Strong pairings to practise. Each pair shares a clear thematic link, letting you draw both
          similarities and contrasts.
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
              <div className="flex size-10 items-center justify-center rounded-xl bg-pink-500/10">
                <Heart className="size-5 text-pink-400" />
              </div>
              <div>
                <CardTitle className="text-heading-md font-heading">
                  Love &amp; betrayal pair
                </CardTitle>
                <CardDescription>A Victorian comparison anchor</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="flex flex-1 flex-col gap-4">
            <p className="text-body-sm text-muted-foreground">
              Sonnet 29 (Barrett Browning) and Cousin Kate (Rossetti) are both Victorian, both from
              female speakers, and both about absent or lost lovers — a strong cluster pairing for
              the comparison question.
            </p>
          </CardContent>
        </Card>

        <Card className="group relative flex flex-col overflow-hidden transition-all duration-200 hover:border-border hover:shadow-card-hover">
          <CardHeader className="pb-3">
            <div className="mb-2 flex items-center gap-3">
              <div className="flex size-10 items-center justify-center rounded-xl bg-red-500/10">
                <Swords className="size-5 text-red-400" />
              </div>
              <div>
                <CardTitle className="text-heading-md font-heading">
                  War &amp; identity pair
                </CardTitle>
                <CardDescription>Two wars, two erasures</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="flex flex-1 flex-col gap-4">
            <p className="text-body-sm text-muted-foreground">
              Hardy&apos;s <em>Drummer Hodge</em> (Second Boer War, 1899) and Owen&apos;s{' '}
              <em>Disabled</em> (WWI) both interrogate what war takes from young men. Strong
              contrast in form, voice, and the kind of loss each poet exposes.
            </p>
            <div className="mt-auto pt-2 flex items-start gap-2 rounded-md bg-amber-500/5 border border-amber-500/10 p-2">
              <ShieldAlert className="mt-0.5 size-3.5 shrink-0 text-clay-600" />
              <p className="text-[11px] text-muted-foreground leading-snug">
                Note: <em>Drummer Hodge</em> is a Boer War poem (1899), not WWI.
              </p>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}
