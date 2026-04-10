import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ArrowLeft,
  BookOpen,
  GitCompare,
  Lock,
  Unlock,
  Calendar,
  Target,
  Library,
} from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'Edexcel IGCSE 4ET1 Anthology Poetry — The English Hub',
  description:
    'Complete study guide for the 15 poems in the Edexcel IGCSE 4ET1 Literature Anthology. Line-by-line analysis, quotes, comparison guides and exam tips.',
  alternates: {
    canonical: 'https://theenglishhub.app/igcse/edexcel/poetry',
  },
}

/* ── Poem list ────────────────────────────────────────────────────── */

type AnthologyPoem = {
  number: number
  title: string
  poet: string
  year?: string
  href?: string
  themes: string[]
  publicDomain: boolean
  summary: string
}

const anthology: AnthologyPoem[] = [
  {
    number: 1,
    title: 'If—',
    poet: 'Rudyard Kipling',
    year: '1910',
    href: '/igcse/edexcel/poetry/if',
    themes: ['Stoicism', 'Identity', 'Growing up'],
    publicDomain: true,
    summary:
      'A father addresses his son, listing the qualities required to live a balanced, honourable life and ultimately become "a Man".',
  },
  {
    number: 2,
    title: 'Prayer Before Birth',
    poet: 'Louis MacNeice',
    year: '1944',
    themes: ['Innocence', 'Fear of the world', 'War'],
    publicDomain: false,
    summary:
      'An unborn child pleads to be protected from the violence, dehumanisation and moral corruption of the adult world.',
  },
  {
    number: 3,
    title: 'Blessing',
    poet: 'Imtiaz Dharker',
    year: '1989',
    themes: ['Poverty', 'Community', 'Faith'],
    publicDomain: false,
    summary:
      'When a water pipe bursts in a dry place, the community rushes with pots and pans — the gushing water becomes a moment of grace.',
  },
  {
    number: 4,
    title: 'Search For My Tongue',
    poet: 'Sujata Bhatt',
    year: '1988',
    themes: ['Identity', 'Language', 'Bilingualism'],
    publicDomain: false,
    summary:
      'The speaker worries her mother tongue is dying inside her, until she dreams in it and feels it blossom once more.',
  },
  {
    number: 5,
    title: 'Half-past Two',
    poet: 'U.A. Fanthorpe',
    year: '1992',
    themes: ['Childhood', 'Time', 'Authority'],
    publicDomain: false,
    summary:
      'A small boy kept behind after school becomes lost in a timeless world because he cannot yet read a clock.',
  },
  {
    number: 6,
    title: 'Piano',
    poet: 'D.H. Lawrence',
    year: '1918',
    href: '/igcse/edexcel/poetry/piano',
    themes: ['Nostalgia', 'Memory', 'Motherhood'],
    publicDomain: true,
    summary:
      'A woman\'s singing pulls the adult speaker helplessly back into childhood memories of his mother at the piano.',
  },
  {
    number: 7,
    title: 'Hide and Seek',
    poet: 'Vernon Scannell',
    year: '1984',
    themes: ['Childhood', 'Isolation', 'Betrayal'],
    publicDomain: false,
    summary:
      'A child hiding in an ingenious spot waits to be found — only to discover, with a jolt, that his friends have already left.',
  },
  {
    number: 8,
    title: 'Sonnet 116',
    poet: 'William Shakespeare',
    year: '1609',
    href: '/igcse/edexcel/poetry/sonnet-116',
    themes: ['Love', 'Constancy', 'Time'],
    publicDomain: true,
    summary:
      'A meditation on true love as an "ever-fixed mark" that cannot be altered by time, circumstance or trouble.',
  },
  {
    number: 9,
    title: 'La Belle Dame sans Merci',
    poet: 'John Keats',
    year: '1819',
    href: '/igcse/edexcel/poetry/la-belle-dame-sans-merci',
    themes: ['Obsession', 'Deception', 'Death'],
    publicDomain: true,
    summary:
      'A pale, wandering knight tells how a mysterious fairy woman enchanted him and left him alone on a cold hillside.',
  },
  {
    number: 10,
    title: 'Do not go gentle into that good night',
    poet: 'Dylan Thomas',
    year: '1951',
    themes: ['Death', 'Defiance', 'Fatherhood'],
    publicDomain: false,
    summary:
      'A son urges his dying father to resist death with rage and fire, in a villanelle of fierce, circling repetition.',
  },
  {
    number: 11,
    title: 'Remember',
    poet: 'Christina Rossetti',
    year: '1862',
    href: '/igcse/edexcel/poetry/remember',
    themes: ['Death', 'Memory', 'Love'],
    publicDomain: true,
    summary:
      'A speaker asks her beloved to remember her after death — then, selflessly, prefers he forget and be happy.',
  },
  {
    number: 12,
    title: 'The Tyger',
    poet: 'William Blake',
    year: '1794',
    href: '/igcse/edexcel/poetry/the-tyger',
    themes: ['Creation', 'Evil', 'Awe'],
    publicDomain: true,
    summary:
      'The speaker asks what kind of god could have made the terrifying, beautiful tiger — and the lamb too.',
  },
  {
    number: 13,
    title: 'My Last Duchess',
    poet: 'Robert Browning',
    year: '1842',
    href: '/revision/poetry/power-and-conflict/my-last-duchess',
    themes: ['Power', 'Jealousy', 'Control'],
    publicDomain: true,
    summary:
      'A Duke reveals, through a calm monologue, how he had his young wife silenced for smiling too freely.',
  },
  {
    number: 14,
    title: 'Poem at Thirty-Nine',
    poet: 'Alice Walker',
    year: '1984',
    themes: ['Fatherhood', 'Memory', 'Identity'],
    publicDomain: false,
    summary:
      'The speaker grieves her father, regretting what she could not ask him, and finds herself now carrying his gentleness into her own life.',
  },
  {
    number: 15,
    title: 'War Photographer',
    poet: 'Carol Ann Duffy',
    year: '1985',
    themes: ['War', 'Suffering', 'Moral responsibility'],
    publicDomain: false,
    summary:
      'A war photographer develops his pictures at home in England, caught between the horrors abroad and readers\' short-lived sympathy.',
  },
]

/* ── Comparison pairings ──────────────────────────────────────────── */

const comparisonPairings = [
  {
    theme: 'Love and relationships',
    colour: 'text-rose-400',
    bg: 'bg-rose-500/10',
    border: 'border-rose-500/20',
    pairs: [
      'Sonnet 116 & Remember — enduring love and the test of time',
      'La Belle Dame sans Merci & My Last Duchess — possessive, damaging love',
      'Piano & Poem at Thirty-Nine — love through memory of a lost parent',
    ],
  },
  {
    theme: 'Power and conflict',
    colour: 'text-amber-400',
    bg: 'bg-amber-500/10',
    border: 'border-amber-500/20',
    pairs: [
      'My Last Duchess & La Belle Dame sans Merci — power over a beloved',
      'War Photographer & Prayer Before Birth — war and moral responsibility',
      'If— & Do not go gentle into that good night — fatherly advice and defiance',
    ],
  },
  {
    theme: 'Identity and belonging',
    colour: 'text-blue-400',
    bg: 'bg-blue-500/10',
    border: 'border-blue-500/20',
    pairs: [
      'Search For My Tongue & Half-past Two — the self caught between worlds',
      'If— & Piano — what shapes us into who we become',
      'Blessing & The Tyger — awe and the sacred in everyday things',
    ],
  },
  {
    theme: 'Childhood and memory',
    colour: 'text-purple-400',
    bg: 'bg-purple-500/10',
    border: 'border-purple-500/20',
    pairs: [
      'Half-past Two & Hide and Seek — the child\'s perspective and adult cruelty',
      'Piano & Poem at Thirty-Nine — looking back on a parent',
      'Remember & Do not go gentle into that good night — parting with the dead',
    ],
  },
]

/* ── Study plan ───────────────────────────────────────────────────── */

const studyPlan = [
  {
    week: 'Weeks 1–2',
    title: 'Read the whole anthology',
    task: 'Read all 15 poems aloud twice. Don\'t analyse yet — just mark the lines that strike you and note your first reaction to each poem.',
  },
  {
    week: 'Weeks 3–6',
    title: 'Deep-dive one poem per session',
    task: 'Work through each poem in turn using the line-by-line interactive viewer. Memorise at least three short quotes per poem and note the key language devices.',
  },
  {
    week: 'Weeks 7–8',
    title: 'Build comparison clusters',
    task: 'Group the poems by theme (love, power, childhood, identity, death). For every theme, know two pairings well enough to write about under timed conditions.',
  },
  {
    week: 'Weeks 9–10',
    title: 'Practise the anthology question',
    task: 'Write timed responses to past-paper questions. Always link back to the named poem in the question and pick your comparison poem for a clear angle.',
  },
]

/* ── Page ─────────────────────────────────────────────────────────── */

export default function EdexcelPoetryAnthologyPage() {
  return (
    <div className="space-y-10">
      {/* ── Breadcrumb / header ─────────────────────────────────────── */}
      <div>
        <Button
          variant="ghost"
          size="sm"
          className="mb-3 -ml-2 text-muted-foreground"
          render={<Link href="/igcse/edexcel" />}
        >
          <ArrowLeft className="size-3.5" />
          Back to Edexcel IGCSE
        </Button>

        <div className="flex items-start gap-4">
          <div className="flex size-12 items-center justify-center rounded-2xl bg-rose-500/10">
            <Library className="size-6 text-rose-400" />
          </div>
          <div className="flex-1">
            <div className="flex flex-wrap items-center gap-2 mb-1.5">
              <Badge variant="secondary" className="text-[0.65rem]">
                Edexcel IGCSE 4ET1
              </Badge>
              <Badge variant="outline" className="text-[0.65rem]">
                Paper 1 · Section B
              </Badge>
            </div>
            <h1 className="text-heading-lg font-heading text-foreground">
              Anthology Poetry
            </h1>
            <p className="text-body-sm text-muted-foreground mt-1 max-w-2xl">
              The 15 poems of the Edexcel IGCSE 4ET1 Literature Anthology —
              full line-by-line study guides for the public-domain poems and
              concise notes for the rest.
            </p>
          </div>
        </div>
      </div>

      {/* ── Overview panel ──────────────────────────────────────────── */}
      <section className="grid gap-4 sm:grid-cols-3">
        <div className="rounded-xl border border-border bg-card p-5">
          <div className="flex items-center gap-2 mb-2">
            <BookOpen className="size-4 text-rose-400" />
            <h2 className="text-sm font-semibold text-foreground">
              The anthology
            </h2>
          </div>
          <p className="text-xs text-muted-foreground leading-relaxed">
            15 poems spanning four centuries, from Shakespeare and Blake to
            Duffy and Dharker. You must know every poem — the exam names one
            and asks you to compare it with another of your choice.
          </p>
        </div>

        <div className="rounded-xl border border-border bg-card p-5">
          <div className="flex items-center gap-2 mb-2">
            <Target className="size-4 text-amber-400" />
            <h2 className="text-sm font-semibold text-foreground">
              The exam
            </h2>
          </div>
          <p className="text-xs text-muted-foreground leading-relaxed">
            Paper 1, Section B (30 marks). You have roughly 45 minutes to
            compare the named poem with another from the anthology, focusing
            on language, structure and ideas.
          </p>
        </div>

        <div className="rounded-xl border border-border bg-card p-5">
          <div className="flex items-center gap-2 mb-2">
            <GitCompare className="size-4 text-emerald-400" />
            <h2 className="text-sm font-semibold text-foreground">
              Key skill
            </h2>
          </div>
          <p className="text-xs text-muted-foreground leading-relaxed">
            Comparison. Every paragraph should weave both poems together
            rather than treating them separately. Know at least two strong
            pairings for every major theme.
          </p>
        </div>
      </section>

      {/* ── Poem list ───────────────────────────────────────────────── */}
      <section>
        <h2 className="text-heading-sm font-heading text-foreground mb-4">
          The 15 anthology poems
        </h2>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {anthology.map((poem) => {
            const isLinked = Boolean(poem.href)
            const CardTag: typeof Link | 'div' = isLinked ? Link : 'div'
            const cardProps = isLinked
              ? { href: poem.href! }
              : ({} as { href?: string })

            return (
              <CardTag
                key={poem.number}
                {...cardProps}
                className={`group block rounded-xl border border-border bg-card p-4 transition-colors ${
                  isLinked
                    ? 'hover:border-foreground/20 hover:bg-muted/40 cursor-pointer'
                    : 'opacity-90'
                }`}
              >
                <div className="flex items-start justify-between gap-3 mb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xs tabular-nums text-muted-foreground/60 font-medium">
                      {poem.number.toString().padStart(2, '0')}
                    </span>
                    {poem.publicDomain ? (
                      <Unlock className="size-3 text-emerald-400" />
                    ) : (
                      <Lock className="size-3 text-muted-foreground/70" />
                    )}
                  </div>
                  {poem.year && (
                    <span className="text-[10px] text-muted-foreground/60 tabular-nums">
                      {poem.year}
                    </span>
                  )}
                </div>

                <h3 className="text-sm font-semibold text-foreground group-hover:text-foreground">
                  {poem.title}
                </h3>
                <p className="text-xs text-muted-foreground mb-2">
                  {poem.poet}
                </p>

                <p className="text-xs text-muted-foreground leading-relaxed mb-3 line-clamp-3">
                  {poem.summary}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-3">
                  {poem.themes.map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-muted px-2 py-0.5 text-[10px] text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {poem.publicDomain ? (
                  <Badge variant="secondary" className="text-[10px]">
                    Full interactive study guide
                  </Badge>
                ) : (
                  <Badge
                    variant="outline"
                    className="text-[10px] text-muted-foreground"
                  >
                    Study notes only — see textbook for full text
                  </Badge>
                )}
              </CardTag>
            )
          })}
        </div>
      </section>

      {/* ── Comparison tips ─────────────────────────────────────────── */}
      <section>
        <div className="flex items-center gap-2 mb-4">
          <GitCompare className="size-4 text-muted-foreground" />
          <h2 className="text-heading-sm font-heading text-foreground">
            Strong comparison pairings
          </h2>
        </div>
        <p className="text-body-sm text-muted-foreground mb-5 max-w-3xl">
          The anthology question always names one poem. Your job is to
          choose a second poem from the other 14 that lets you say something
          sharp. These are the pairings we recommend memorising:
        </p>

        <div className="grid gap-4 sm:grid-cols-2">
          {comparisonPairings.map((cluster) => (
            <div
              key={cluster.theme}
              className={`rounded-xl border ${cluster.border} ${cluster.bg} p-5`}
            >
              <h3 className={`text-sm font-semibold mb-3 ${cluster.colour}`}>
                {cluster.theme}
              </h3>
              <ul className="space-y-2">
                {cluster.pairs.map((p) => (
                  <li
                    key={p}
                    className="text-xs text-card-foreground leading-relaxed flex gap-2"
                  >
                    <span className="text-muted-foreground/60 mt-0.5">
                      —
                    </span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* ── Study plan ──────────────────────────────────────────────── */}
      <section className="rounded-xl border border-border bg-card p-5 sm:p-6">
        <div className="flex items-center gap-2 mb-4">
          <Calendar className="size-4 text-muted-foreground" />
          <h2 className="text-heading-sm font-heading text-foreground">
            10-week study plan
          </h2>
        </div>
        <p className="text-body-sm text-muted-foreground mb-5">
          A sensible order for working through the anthology from your first
          read to exam-ready.
        </p>

        <div className="space-y-3">
          {studyPlan.map((stage, i) => (
            <div
              key={stage.week}
              className="flex gap-4 rounded-lg border border-border bg-background/40 p-4"
            >
              <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-muted text-xs font-semibold text-muted-foreground">
                {i + 1}
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap items-baseline gap-2 mb-1">
                  <span className="text-xs font-medium text-rose-400 tabular-nums">
                    {stage.week}
                  </span>
                  <span className="text-sm font-semibold text-foreground">
                    {stage.title}
                  </span>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {stage.task}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
