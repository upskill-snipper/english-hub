'use client'

import { useEffect, useMemo, useState } from 'react'
import Link from 'next/link'
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Circle,
  Heart,
  Lightbulb,
  Sparkles,
  Users,
  Clock,
  Flame,
} from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import StudyTools from '@/components/study/StudyTools'

// ─── localStorage key (shared with other anthology pages) ─────────────────

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
  icon: typeof Heart
  colour: string
  bgColour: string
  poems: Poem[]
}

const THEME_GROUPS: ThemeGroup[] = [
  {
    label: 'Romantic Love',
    icon: Heart,
    colour: 'text-rose-400',
    bgColour: 'bg-rose-500/10',
    poems: [
      {
        title: 'Sonnet 29 — \u2018I think of thee!\u2019',
        poet: 'Elizabeth Barrett Browning',
        slug: 'sonnet-29',
        hook: 'A speaker overwhelmed by thoughts of her beloved compares them to vines around a tree.',
        themes: ['Love', 'Desire', 'Longing'],
      },
      {
        title: 'Love\u2019s Philosophy',
        poet: 'Percy Bysshe Shelley',
        slug: 'loves-philosophy',
        hook: 'A speaker uses nature\u2019s harmony to plead for a kiss.',
        themes: ['Love', 'Desire', 'Persuasion'],
      },
      {
        title: 'Porphyria\u2019s Lover',
        poet: 'Robert Browning',
        slug: 'porphyrias-lover',
        hook: 'A disturbed speaker preserves a moment of love through murder.',
        themes: ['Love', 'Power', 'Obsession'],
      },
    ],
  },
  {
    label: 'Family Love',
    icon: Users,
    colour: 'text-emerald-400',
    bgColour: 'bg-emerald-500/10',
    poems: [
      {
        title: 'Mother, Any Distance',
        poet: 'Simon Armitage',
        slug: 'mother-any-distance',
        hook: 'A son measures the growing distance between himself and his mother as he leaves home.',
        themes: ['Family', 'Independence', 'Love'],
      },
      {
        title: 'Follower',
        poet: 'Seamus Heaney',
        slug: 'follower',
        hook: 'A boy who once trailed his ploughing father is now the one being followed.',
        themes: ['Family', 'Memory', 'Time'],
      },
      {
        title: 'Climbing My Grandfather',
        poet: 'Andrew Waterhouse',
        slug: 'climbing-my-grandfather',
        hook: 'A grandson lovingly maps his grandfather as a vast mountain to be climbed.',
        themes: ['Family', 'Love', 'Memory'],
      },
      {
        title: 'Eden Rock',
        poet: 'Charles Causley',
        slug: 'eden-rock',
        hook: 'Long-dead parents wait at the riverbank for their child to cross over.',
        themes: ['Family', 'Memory', 'Death'],
      },
      {
        title: 'Walking Away',
        poet: 'C. Day-Lewis',
        slug: 'walking-away',
        hook: 'A father watches his son leave for the first time and grieves the loss.',
        themes: ['Family', 'Letting go', 'Love'],
      },
      {
        title: 'Before You Were Mine',
        poet: 'Carol Ann Duffy',
        slug: 'before-you-were-mine',
        hook: 'A daughter imagines her mother\u2019s vibrant life before motherhood claimed her.',
        themes: ['Family', 'Memory', 'Identity'],
      },
    ],
  },
  {
    label: 'Distance & Loss',
    icon: Clock,
    colour: 'text-violet-400',
    bgColour: 'bg-violet-500/10',
    poems: [
      {
        title: 'Letters from Yorkshire',
        poet: 'Maura Dooley',
        slug: 'letters-from-yorkshire',
        hook: 'Two voices stay close across hundreds of miles through the small ritual of letters.',
        themes: ['Distance', 'Connection', 'Memory'],
      },
      {
        title: 'Neutral Tones',
        poet: 'Thomas Hardy',
        slug: 'neutral-tones',
        hook: 'A speaker revisits a winter scene where love withered into disillusionment.',
        themes: ['Loss', 'Bitterness', 'Memory'],
      },
      {
        title: 'When We Two Parted',
        poet: 'Lord Byron',
        slug: 'when-we-two-parted',
        hook: 'A lover mourns a secret affair he must grieve in silence.',
        themes: ['Loss', 'Secrecy', 'Grief'],
      },
      {
        title: 'Winter Swans',
        poet: 'Owen Sheers',
        slug: 'winter-swans',
        hook: 'A wordless walk by a lake mends a fracture between two lovers.',
        themes: ['Love', 'Reconciliation', 'Nature'],
      },
    ],
  },
  {
    label: 'Identity & Possession',
    icon: Flame,
    colour: 'text-clay-600',
    bgColour: 'bg-amber-500/10',
    poems: [
      {
        title: 'Singh Song!',
        poet: 'Daljit Nagra',
        slug: 'singh-song',
        hook: 'A newly-married shopkeeper neglects his customers to dote on his bride.',
        themes: ['Love', 'Identity', 'Joy'],
      },
      {
        title: 'The Farmer\u2019s Bride',
        poet: 'Charlotte Mew',
        slug: 'the-farmers-bride',
        hook: 'A farmer struggles to understand the wife who runs from him in fear.',
        themes: ['Love', 'Power', 'Distance'],
      },
    ],
  },
]

const ALL_POEMS = THEME_GROUPS.flatMap((g) => g.poems)
const TOTAL_POEMS = ALL_POEMS.length

// ─── Theme-tag colour mapping ──────────────────────────────────────────────

const TAG_COLOURS: Record<string, string> = {
  Love: 'bg-rose-500/15 text-rose-300 border-rose-500/20',
  Desire: 'bg-pink-500/15 text-pink-300 border-pink-500/20',
  Family: 'bg-emerald-500/15 text-emerald-300 border-emerald-500/20',
  Memory: 'bg-amber-500/15 text-amber-700 border-amber-500/20',
  Distance: 'bg-violet-500/15 text-violet-300 border-violet-500/20',
  Loss: 'bg-rose-500/15 text-rose-300 border-rose-500/20',
  Power: 'bg-violet-500/15 text-violet-300 border-violet-500/20',
  Time: 'bg-blue-500/15 text-blue-300 border-blue-500/20',
  Identity: 'bg-cyan-500/15 text-cyan-300 border-cyan-500/20',
  Independence: 'bg-teal-500/15 text-teal-300 border-teal-500/20',
  Longing: 'bg-pink-500/15 text-pink-300 border-pink-500/20',
  Persuasion: 'bg-amber-500/15 text-amber-700 border-amber-500/20',
  Obsession: 'bg-red-500/15 text-red-300 border-red-500/20',
  Death: 'bg-stone-500/15 text-stone-300 border-stone-500/20',
  'Letting go': 'bg-blue-500/15 text-blue-300 border-blue-500/20',
  Connection: 'bg-teal-500/15 text-teal-300 border-teal-500/20',
  Bitterness: 'bg-orange-500/15 text-clay-600 border-orange-500/20',
  Secrecy: 'bg-violet-500/15 text-violet-300 border-violet-500/20',
  Grief: 'bg-rose-500/15 text-rose-300 border-rose-500/20',
  Reconciliation: 'bg-emerald-500/15 text-emerald-300 border-emerald-500/20',
  Nature: 'bg-emerald-500/15 text-emerald-300 border-emerald-500/20',
  Joy: 'bg-amber-500/15 text-amber-700 border-amber-500/20',
}

// ─── Component ─────────────────────────────────────────────────────────────

export default function LoveAndRelationshipsPage() {
  const { studied, mounted } = useStudiedPoems()

  const studiedCount = useMemo(() => ALL_POEMS.filter((p) => studied.has(p.slug)).length, [studied])

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
        <div className="pointer-events-none absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-pink-500/5 blur-3xl" />

        <div className="relative">
          <div className="mb-4 flex flex-wrap items-center gap-2">
            <Badge variant="secondary">
              <Sparkles className="mr-1 size-3" />
              AQA GCSE English Literature
            </Badge>
            <Badge className="bg-primary/10 text-primary border-primary/20">AQA Only</Badge>
          </div>
          <h1 className="text-display-sm font-heading text-foreground sm:text-display">
            Love &amp; Relationships Poetry
          </h1>
          <p className="mt-3 max-w-2xl text-body-lg text-muted-foreground">
            Master all 15 poems in the AQA Love and Relationships anthology. Each study page
            includes annotations, key quotations, context, and comparison notes to help you write
            top-grade essays.
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

      <StudyTools
        textName="Love & Relationships Anthology"
        textType="anthology"
        examBoard="AQA"
        variant="banner"
      />

      {/* ── Rights notice ───────────────────────────────────────────── */}
      <section className="rounded-xl border border-border/60 bg-muted/30 px-4 py-3 text-caption text-muted-foreground">
        <p>
          <span className="font-medium text-foreground">Rights notice: </span>
          Seven of these fifteen poems remain in copyright &mdash; Heaney&rsquo;s <em>Follower</em>,
          Nagra&rsquo;s <em>Singh Song!</em> and Waterhouse&rsquo;s <em>Climbing My Grandfather</em>{' '}
          (&copy; Faber &amp; Faber), Causley&rsquo;s <em>Eden Rock</em> (&copy; David Higham
          Associates), Day-Lewis&rsquo;s <em>Walking Away</em> (&copy; Peters Fraser &amp; Dunlop),
          Duffy&rsquo;s <em>Before You Were Mine</em> (&copy; Picador / Pan Macmillan) and
          Sheers&rsquo;s <em>Winter Swans</em> (&copy; Seren Books). Quotations are short
          fair-dealing extracts under CDPA 1988 &sect;30 (criticism, review, quotation). For full
          text, students should consult the board-licensed AQA Anthology of Poetry.
        </p>
      </section>

      {/* ── Poem groups ─────────────────────────────────────────────── */}
      {THEME_GROUPS.map((group) => (
        <section key={group.label}>
          <div className="mb-5 flex items-center gap-3">
            <div className={`flex size-8 items-center justify-center rounded-lg ${group.bgColour}`}>
              <group.icon className={`size-4 ${group.colour}`} />
            </div>
            <h2 className="text-heading-lg font-heading text-foreground">{group.label}</h2>
            {mounted && (
              <Badge variant="outline" className="ml-auto text-xs">
                {group.poems.filter((p) => studied.has(p.slug)).length}/{group.poems.length} studied
              </Badge>
            )}
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {group.poems.map((poem) => {
              const isStudied = mounted && studied.has(poem.slug)
              return (
                <Link
                  key={poem.slug}
                  href={`/revision/poetry/love-and-relationships/${poem.slug}`}
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
                  <p className="mt-0.5 text-caption text-muted-foreground">{poem.poet}</p>

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

      {/* ── Study Tips ──────────────────────────────────────────────── */}
      <section className="rounded-2xl border border-border/60 bg-gradient-to-r from-amber-500/[0.06] via-card to-rose-500/[0.04] p-6 sm:p-8">
        <div className="mb-5 flex items-center gap-3">
          <div className="flex size-10 items-center justify-center rounded-xl bg-amber-500/10">
            <Lightbulb className="size-5 text-clay-600" />
          </div>
          <h2 className="text-heading-lg font-heading text-foreground">
            Study Tips: Comparing Love &amp; Relationships
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl border border-border/40 bg-background/50 p-4">
            <h3 className="mb-2 text-sm font-semibold text-foreground">
              Pair contrasting perspectives
            </h3>
            <p className="text-body-sm text-muted-foreground leading-relaxed">
              The exam asks you to compare two poems. Choose poems that share a theme but differ in
              tone — for example, the obsessive love of Porphyria&apos;s Lover against the tender
              longing of Sonnet 29.
            </p>
          </div>

          <div className="rounded-xl border border-border/40 bg-background/50 p-4">
            <h3 className="mb-2 text-sm font-semibold text-foreground">
              Examine the speaker, not the poet
            </h3>
            <p className="text-body-sm text-muted-foreground leading-relaxed">
              Each poem has a constructed speaker. Analyse how that voice presents love —
              possessive, nostalgic, joyful or grieving — and what techniques the poet uses to shape
              it.
            </p>
          </div>

          <div className="rounded-xl border border-border/40 bg-background/50 p-4">
            <h3 className="mb-2 text-sm font-semibold text-foreground">
              Compare methods, not just content
            </h3>
            <p className="text-body-sm text-muted-foreground leading-relaxed">
              Top-band responses compare how poets use language, structure and form. Notice how
              Heaney uses end-stopped lines to create steadiness while Duffy uses fragmented
              imagery.
            </p>
          </div>

          <div className="rounded-xl border border-border/40 bg-background/50 p-4">
            <h3 className="mb-2 text-sm font-semibold text-foreground">
              Learn 2–3 key quotes per poem
            </h3>
            <p className="text-body-sm text-muted-foreground leading-relaxed">
              You don&apos;t need to memorise entire poems. Focus on short, technique-rich
              quotations you can analyse in depth.
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
          Head back to the Poetry hub to explore Power and Conflict, the Edexcel anthology, and
          unseen poetry techniques.
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
