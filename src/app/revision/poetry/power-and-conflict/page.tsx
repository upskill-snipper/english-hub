'use client'

import { useState, useEffect, useMemo } from 'react'
import Link from 'next/link'
import {
  ArrowLeft,
  ArrowRight,
  FileText,
  CheckCircle2,
  Circle,
  Lightbulb,
  Sparkles,
  BookOpen,
  Swords,
  Mountain,
  Users,
  Shield,
  Fingerprint,
} from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'

// ─── localStorage key ──────────────────────────────────────────────────────

const STUDIED_KEY = 'english-hub-poems-studied'

function useStudiedPoems() {
  const [studied, setStudied] = useState<Set<string>>(new Set())
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    try {
      const stored = localStorage.getItem(STUDIED_KEY)
      if (stored) {
        const parsed: string[] = JSON.parse(stored)
        setStudied(new Set(parsed))
      }
    } catch {
      // ignore
    }
  }, [])

  return { studied, mounted }
}

// ─── Poem data ─────────────────────────────────────────────────────────────

interface Poem {
  title: string
  poet: string
  slug: string
  hook: string
  themes: string[]
}

interface ThemeGroup {
  label: string
  icon: typeof Mountain
  colour: string
  bgColour: string
  poems: Poem[]
}

const THEME_GROUPS: ThemeGroup[] = [
  {
    label: 'Power of Nature',
    icon: Mountain,
    colour: 'text-emerald-400',
    bgColour: 'bg-emerald-500/10',
    poems: [
      {
        title: 'Ozymandias',
        poet: 'Percy Bysshe Shelley',
        slug: 'ozymandias',
        hook: 'A shattered statue in the desert reveals the futility of power.',
        themes: ['Power', 'Pride', 'Time'],
      },
      {
        title: 'The Prelude (extract)',
        poet: 'William Wordsworth',
        slug: 'the-prelude',
        hook: 'A stolen boat ride becomes a terrifying encounter with nature.',
        themes: ['Nature', 'Power', 'Fear'],
      },
      {
        title: 'Storm on the Island',
        poet: 'Seamus Heaney',
        slug: 'storm-on-the-island',
        hook: 'An island community braces against the relentless force of a storm.',
        themes: ['Nature', 'Power', 'Conflict'],
      },
    ],
  },
  {
    label: 'Power of Humans',
    icon: Shield,
    colour: 'text-violet-400',
    bgColour: 'bg-violet-500/10',
    poems: [
      {
        title: 'My Last Duchess',
        poet: 'Robert Browning',
        slug: 'my-last-duchess',
        hook: 'A duke reveals his chilling control over his late wife.',
        themes: ['Power', 'Control', 'Jealousy'],
      },
      {
        title: 'London',
        poet: 'William Blake',
        slug: 'london',
        hook: 'A walk through London exposes suffering and institutional oppression.',
        themes: ['Power', 'Suffering', 'Anger'],
      },
      {
        title: 'Checking Out Me History',
        poet: 'John Agard',
        slug: 'checking-out-me-history',
        hook: 'A powerful challenge to a colonial curriculum that silenced his heritage.',
        themes: ['Identity', 'Power', 'Anger'],
      },
      {
        title: 'Tissue',
        poet: 'Imtiaz Dharker',
        slug: 'tissue',
        hook: 'Paper becomes a metaphor for the fragile structures humans build.',
        themes: ['Power', 'Identity', 'Fragility'],
      },
    ],
  },
  {
    label: 'Reality of Conflict',
    icon: Swords,
    colour: 'text-red-400',
    bgColour: 'bg-red-500/10',
    poems: [
      {
        title: 'The Charge of the Light Brigade',
        poet: 'Alfred, Lord Tennyson',
        slug: 'the-charge-of-the-light-brigade',
        hook: 'Six hundred soldiers ride into certain death with unwavering duty.',
        themes: ['Conflict', 'Honour', 'Duty'],
      },
      {
        title: 'Exposure',
        poet: 'Wilfred Owen',
        slug: 'exposure',
        hook: 'Soldiers slowly freeze to death while nothing happens at the front.',
        themes: ['Conflict', 'Suffering', 'Nature'],
      },
      {
        title: 'Bayonet Charge',
        poet: 'Ted Hughes',
        slug: 'bayonet-charge',
        hook: 'A soldier charges across no-man\'s-land in raw, terrifying detail.',
        themes: ['Conflict', 'Fear', 'Reality'],
      },
    ],
  },
  {
    label: 'Effects of Conflict',
    icon: Users,
    colour: 'text-amber-400',
    bgColour: 'bg-amber-500/10',
    poems: [
      {
        title: 'Remains',
        poet: 'Simon Armitage',
        slug: 'remains',
        hook: 'A soldier cannot escape the memory of a man he shot.',
        themes: ['Conflict', 'Guilt', 'Memory'],
      },
      {
        title: 'Poppies',
        poet: 'Jane Weir',
        slug: 'poppies',
        hook: 'A mother tenderly remembers her son leaving for war.',
        themes: ['Conflict', 'Loss', 'Memory'],
      },
      {
        title: 'War Photographer',
        poet: 'Carol Ann Duffy',
        slug: 'war-photographer',
        hook: 'A photographer develops images that will never convey the truth.',
        themes: ['Conflict', 'Memory', 'Guilt'],
      },
      {
        title: 'Kamikaze',
        poet: 'Beatrice Garland',
        slug: 'kamikaze',
        hook: 'A pilot turns back from his mission and faces a lifetime of shame.',
        themes: ['Conflict', 'Identity', 'Shame'],
      },
    ],
  },
  {
    label: 'Identity',
    icon: Fingerprint,
    colour: 'text-cyan-400',
    bgColour: 'bg-cyan-500/10',
    poems: [
      {
        title: 'The Emigr\u00e9e',
        poet: 'Carol Rumens',
        slug: 'the-emigree',
        hook: 'A woman clings to a sunlit memory of the homeland she can never return to.',
        themes: ['Identity', 'Memory', 'Belonging'],
      },
    ],
  },
]

const ALL_POEMS = THEME_GROUPS.flatMap((g) => g.poems)
const TOTAL_POEMS = ALL_POEMS.length

// ─── Theme-tag colour mapping ──────────────────────────────────────────────

const TAG_COLOURS: Record<string, string> = {
  Power: 'bg-violet-500/15 text-violet-300 border-violet-500/20',
  Conflict: 'bg-red-500/15 text-red-300 border-red-500/20',
  Nature: 'bg-emerald-500/15 text-emerald-300 border-emerald-500/20',
  Identity: 'bg-cyan-500/15 text-cyan-300 border-cyan-500/20',
  Memory: 'bg-amber-500/15 text-amber-300 border-amber-500/20',
  Fear: 'bg-orange-500/15 text-orange-300 border-orange-500/20',
  Pride: 'bg-pink-500/15 text-pink-300 border-pink-500/20',
  Time: 'bg-blue-500/15 text-blue-300 border-blue-500/20',
  Control: 'bg-violet-500/15 text-violet-300 border-violet-500/20',
  Jealousy: 'bg-rose-500/15 text-rose-300 border-rose-500/20',
  Suffering: 'bg-red-500/15 text-red-300 border-red-500/20',
  Anger: 'bg-orange-500/15 text-orange-300 border-orange-500/20',
  Fragility: 'bg-sky-500/15 text-sky-300 border-sky-500/20',
  Honour: 'bg-yellow-500/15 text-yellow-300 border-yellow-500/20',
  Duty: 'bg-blue-500/15 text-blue-300 border-blue-500/20',
  Reality: 'bg-stone-500/15 text-stone-300 border-stone-500/20',
  Guilt: 'bg-amber-500/15 text-amber-300 border-amber-500/20',
  Loss: 'bg-rose-500/15 text-rose-300 border-rose-500/20',
  Shame: 'bg-pink-500/15 text-pink-300 border-pink-500/20',
  Belonging: 'bg-teal-500/15 text-teal-300 border-teal-500/20',
}

// ─── Component ─────────────────────────────────────────────────────────────

export default function PowerAndConflictPage() {
  const { studied, mounted } = useStudiedPoems()

  const studiedCount = useMemo(() => {
    return ALL_POEMS.filter((p) => studied.has(p.slug)).length
  }, [studied])

  const progressPercent = Math.round((studiedCount / TOTAL_POEMS) * 100)

  return (
    <div className="space-y-10 pb-16">
      {/* ── Back link ───────────────────────────────────────────────── */}
      <div>
        <Button
          variant="ghost"
          size="sm"
          className="mb-3 -ml-2 text-muted-foreground"
          render={<Link href="/revision/poetry" />}
        >
          <ArrowLeft className="size-3.5" />
          Back to Poetry
        </Button>
      </div>

      {/* ── Hero ────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden rounded-2xl border border-border/60 bg-gradient-to-br from-card via-card to-rose-500/[0.04] p-6 sm:p-8 lg:p-10">
        <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-rose-500/5 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-violet-500/5 blur-3xl" />

        <div className="relative">
          <div className="mb-4 flex flex-wrap items-center gap-2">
            <Badge variant="secondary">
              <Sparkles className="mr-1 size-3" />
              AQA GCSE English Literature
            </Badge>
            <Badge className="bg-primary/10 text-primary border-primary/20">
              AQA Only
            </Badge>
          </div>
          <h1 className="text-display-sm font-heading text-foreground sm:text-display">
            Power &amp; Conflict Poetry
          </h1>
          <p className="mt-3 max-w-2xl text-body-lg text-muted-foreground">
            Master all 15 poems in the AQA Power and Conflict anthology. Each study
            page includes annotations, key quotes, context, and comparison notes to
            help you write top-grade essays.
          </p>

          {/* Progress bar */}
          {mounted && (
            <div className="mt-6 max-w-md">
              <div className="mb-2 flex items-center justify-between">
                <span className="text-caption font-medium text-muted-foreground">
                  {studiedCount} of {TOTAL_POEMS} poems studied
                </span>
                <span className="text-caption font-semibold text-foreground">
                  {progressPercent}%
                </span>
              </div>
              <Progress value={progressPercent} className="h-2" />
            </div>
          )}
        </div>
      </section>

      {/* ── Poem groups ─────────────────────────────────────────────── */}
      {THEME_GROUPS.map((group) => (
        <section key={group.label}>
          <div className="mb-5 flex items-center gap-3">
            <div
              className={`flex size-8 items-center justify-center rounded-lg ${group.bgColour}`}
            >
              <group.icon className={`size-4 ${group.colour}`} />
            </div>
            <h2 className="text-heading-lg font-heading text-foreground">
              {group.label}
            </h2>
            {mounted && (
              <Badge variant="outline" className="ml-auto text-xs">
                {group.poems.filter((p) => studied.has(p.slug)).length}/
                {group.poems.length} studied
              </Badge>
            )}
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {group.poems.map((poem) => {
              const isStudied = mounted && studied.has(poem.slug)
              return (
                <Link
                  key={poem.slug}
                  href={`/revision/poetry/power-and-conflict/${poem.slug}`}
                  className="group relative flex flex-col rounded-2xl border border-border/60 bg-card p-5 transition-all duration-200 hover:border-border hover:shadow-card-hover"
                >
                  {/* Studied indicator */}
                  {mounted && (
                    <div className="absolute right-4 top-4">
                      {isStudied ? (
                        <CheckCircle2 className="size-5 text-emerald-400" />
                      ) : (
                        <Circle className="size-5 text-muted-foreground/30" />
                      )}
                    </div>
                  )}

                  <h3 className="pr-8 text-heading-md font-heading text-foreground group-hover:text-primary transition-colors">
                    {poem.title}
                  </h3>
                  <p className="mt-0.5 text-caption text-muted-foreground">
                    {poem.poet}
                  </p>

                  <p className="mt-3 flex-1 text-body-sm text-muted-foreground leading-relaxed">
                    {poem.hook}
                  </p>

                  {/* Theme tags */}
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {poem.themes.map((theme) => (
                      <span
                        key={theme}
                        className={`inline-flex items-center rounded-full border px-2 py-0.5 text-[0.65rem] font-medium ${
                          TAG_COLOURS[theme] ?? 'bg-muted text-muted-foreground border-border'
                        }`}
                      >
                        {theme}
                      </span>
                    ))}
                  </div>

                  <div className="mt-4 flex items-center gap-1 text-sm font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">
                    Study this poem
                    <ArrowRight className="size-3.5" />
                  </div>
                </Link>
              )
            })}
          </div>
        </section>
      ))}

      {/* ── Study Tips ───────────────────────────────────────────────── */}
      <section className="rounded-2xl border border-border/60 bg-gradient-to-r from-amber-500/[0.06] via-card to-violet-500/[0.04] p-6 sm:p-8">
        <div className="mb-5 flex items-center gap-3">
          <div className="flex size-10 items-center justify-center rounded-xl bg-amber-500/10">
            <Lightbulb className="size-5 text-amber-400" />
          </div>
          <h2 className="text-heading-lg font-heading text-foreground">
            Study Tips: Comparing Poems
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl border border-border/40 bg-background/50 p-4">
            <h3 className="mb-2 text-sm font-semibold text-foreground">
              Pick strong pairings
            </h3>
            <p className="text-body-sm text-muted-foreground leading-relaxed">
              The exam asks you to compare two poems. Choose poems that share a
              theme but differ in perspective -- for example, compare Exposure
              (soldier&apos;s suffering) with The Charge of the Light Brigade
              (glorification of duty).
            </p>
          </div>

          <div className="rounded-xl border border-border/40 bg-background/50 p-4">
            <h3 className="mb-2 text-sm font-semibold text-foreground">
              Use the themes, not just the topic
            </h3>
            <p className="text-body-sm text-muted-foreground leading-relaxed">
              Markers reward thematic analysis. Instead of writing &quot;both
              poems are about war&quot;, explore how each poet presents the
              effects of conflict differently -- one through guilt, the other
              through loss.
            </p>
          </div>

          <div className="rounded-xl border border-border/40 bg-background/50 p-4">
            <h3 className="mb-2 text-sm font-semibold text-foreground">
              Compare methods, not just content
            </h3>
            <p className="text-body-sm text-muted-foreground leading-relaxed">
              Top-band responses compare how poets use language, structure, and
              form. Notice how Owen uses half-rhyme to create unease, while
              Tennyson uses repetition to build momentum.
            </p>
          </div>

          <div className="rounded-xl border border-border/40 bg-background/50 p-4">
            <h3 className="mb-2 text-sm font-semibold text-foreground">
              Learn 2--3 key quotes per poem
            </h3>
            <p className="text-body-sm text-muted-foreground leading-relaxed">
              You don&apos;t need to memorise entire poems. Focus on short,
              technique-rich quotes you can analyse in depth. Each poem study page
              highlights the most important quotations.
            </p>
          </div>
        </div>
      </section>

      {/* ── Back to Poetry CTA ──────────────────────────────────────── */}
      <section className="rounded-2xl border border-border/60 bg-card p-6 sm:p-8 text-center">
        <BookOpen className="mx-auto mb-3 size-8 text-rose-400" />
        <h2 className="text-heading-lg font-heading text-foreground">
          Ready to explore more poetry?
        </h2>
        <p className="mx-auto mt-2 max-w-lg text-body-sm text-muted-foreground">
          Head back to the Poetry hub to explore Love and Relationships, the
          Edexcel anthology, and unseen poetry techniques.
        </p>
        <Button
          variant="default"
          size="lg"
          className="mt-5"
          render={<Link href="/revision/poetry" />}
        >
          Back to Poetry Hub
          <ArrowRight className="size-4" />
        </Button>
      </section>
    </div>
  )
}
