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
import { requireIgcseBoard } from '@/app/igcse/_lib/guard'
import { t } from '@/lib/i18n/t'
import { ANTHOLOGY_SOURCE } from '@/lib/board/edexcel-igcse-anthology'
import StudyTools from '@/components/study/StudyTools'

export const metadata: Metadata = {
  openGraph: {
    title: 'Edexcel IGCSE Literature Anthology Poetry - The English Hub',
    description:
      'The 13 poems in the Edexcel IGCSE Literature 4ET1 anthology, with summaries, themes, comparison pairings and a study plan for Paper 1.',
    images: [
      {
        url: '/api/og?title=Edexcel+IGCSE+Literature+Anthology+Poetry+-+The+English+Hub',
        width: 1200,
        height: 630,
        alt: 'Edexcel IGCSE Literature Anthology Poetry - The English Hub',
      },
    ],
  },
  title: 'Edexcel IGCSE Literature Anthology Poetry',
  description:
    'The 13 poems in the Edexcel IGCSE Literature 4ET1 anthology, with summaries, themes, comparison pairings and a study plan for Paper 1.',
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

// Verified against TEXT_MASTER_LIST.csv - the Pearson Edexcel International GCSE
// English Literature (4ET1) Anthology Issue 2 prescribes these 13 poems for the
// Paper 1 Section B Anthology Poetry section. (Poetry-list audited April 2026.)
//
// NOT TRUE, found 10 October 2026 and not yet corrected. Part 3 of the
// anthology (Issue 8, contents page) has sixteen poems, all set for Section B.
// Six entries below are not among them: Ozymandias is not in the anthology at
// all, and Disabled, Out, Out-, An Unknown Girl, The Bright Lights of Sarajevo
// and Still I Rise are Part 2, set for English Language A. Nine Part 3 poems
// are missing. The list needs its own pass; the comparison pairings further
// down were rebuilt from Part 3 on 10 October 2026.
const anthology: AnthologyPoem[] = [
  {
    number: 1,
    title: 'If-',
    poet: 'Rudyard Kipling',
    year: '1910',
    href: '/igcse/edexcel/poetry/if',
    themes: ['Stoicism', 'Identity', 'Growing up'],
    publicDomain: true,
    summary:
      'A father addresses his son, listing the qualities required to live a balanced, honourable life and become a person of integrity.',
  },
  {
    number: 2,
    title: 'Sonnet 116',
    poet: 'William Shakespeare',
    year: '1609',
    href: '/igcse/edexcel/poetry/sonnet-116',
    themes: ['Love', 'Constancy', 'Time'],
    publicDomain: true,
    summary:
      'A meditation on true love as a fixed and enduring force that cannot be altered by time, circumstance or trouble.',
  },
  {
    number: 3,
    title: 'La Belle Dame sans Merci',
    poet: 'John Keats',
    year: '1819',
    href: '/igcse/edexcel/poetry/la-belle-dame-sans-merci',
    themes: ['Obsession', 'Deception', 'Death'],
    publicDomain: true,
    // Until 2 October 2026 this said the anthology prints the 1820 Indicator
    // version, the error the poem's own page corrected on 26 September. The
    // anthology prints the earlier knight-at-arms text (read from the Pearson
    // PDF, see src/data/study-guides/la-belle-dame-sans-merci.ts); the Indicator
    // revision opens with a "wretched wight", and a student quoting it would
    // misquote the anthology's text.
    summary:
      'A pale, wandering knight tells how a mysterious fairy woman enchanted him and left him alone on a cold hillside. The anthology prints the earlier knight-at-arms text, not the 1820 Indicator revision.',
  },
  {
    number: 4,
    title: 'The Tyger',
    poet: 'William Blake',
    year: '1794',
    href: '/igcse/edexcel/poetry/the-tyger',
    themes: ['Creation', 'Evil', 'Awe'],
    publicDomain: true,
    summary:
      'The speaker asks what kind of creator could have made the terrifying, beautiful tiger - and the lamb too.',
  },
  {
    number: 5,
    title: 'Ozymandias',
    poet: 'Percy Bysshe Shelley',
    year: '1818',
    href: '/igcse/edexcel/poetry/ozymandias',
    themes: ['Power', 'Hubris', 'Time and decay'],
    publicDomain: true,
    summary:
      'A traveller describes the shattered remains of a once-mighty statue in the desert - a meditation on the impermanence of power and empire.',
  },
  {
    number: 6,
    title: 'Remember',
    poet: 'Christina Rossetti',
    year: '1862',
    href: '/igcse/edexcel/poetry/remember',
    themes: ['Death', 'Memory', 'Love'],
    publicDomain: true,
    summary:
      'A speaker asks her beloved to remember her after death - then, selflessly, prefers he forget and be happy.',
  },
  {
    number: 7,
    title: 'Disabled',
    poet: 'Wilfred Owen',
    year: '1917',
    href: '/igcse/edexcel/poetry/disabled',
    themes: ['War', 'Loss', 'Disability'],
    publicDomain: true,
    summary:
      'A young soldier, now in a wheelchair after losing his limbs in the First World War, contrasts his current isolation with the vitality of his former life.',
  },
  {
    number: 8,
    title: 'Out, Out-',
    poet: 'Robert Frost',
    year: '1916',
    href: '/igcse/edexcel/poetry/out-out',
    themes: ['Mortality', 'Childhood', 'Indifference'],
    publicDomain: false,
    summary:
      'A New England farm boy is fatally injured by a circular saw; the poem ends with the bystanders turning back to their work, indifferent to his death.',
  },
  {
    number: 9,
    title: 'War Photographer',
    poet: 'Carol Ann Duffy',
    year: '1985',
    href: '/igcse/edexcel/poetry/war-photographer',
    themes: ['War', 'Suffering', 'Moral responsibility'],
    publicDomain: false,
    summary:
      "A war photographer develops pictures at home in England, caught between the horrors abroad and readers' short-lived sympathy.",
  },
  {
    number: 10,
    title: 'An Unknown Girl',
    poet: 'Moniza Alvi',
    year: '1996',
    href: '/igcse/edexcel/poetry/an-unknown-girl',
    themes: ['Identity', 'Cultural heritage', 'Belonging'],
    publicDomain: false,
    summary:
      'A speaker has her hand decorated with henna by an unknown girl in an Indian bazaar, and reflects on her dual cultural identity.',
  },
  {
    number: 11,
    title: 'The Bright Lights of Sarajevo',
    poet: 'Tony Harrison',
    year: '1995',
    href: '/igcse/edexcel/poetry/the-bright-lights-of-sarajevo',
    themes: ['War', 'Resilience', 'Hope'],
    publicDomain: false,
    summary:
      'During the siege of Sarajevo, young couples meet in candlelit cafés and walk under starlight - life persisting amid devastation. The anthology prints additional stanza breaks.',
  },
  {
    number: 12,
    title: 'Still I Rise',
    poet: 'Maya Angelou',
    year: '1978',
    href: '/igcse/edexcel/poetry/still-i-rise',
    themes: ['Resilience', 'Identity', 'Race'],
    publicDomain: false,
    summary:
      'The speaker defies attempts to oppress and demean her, asserting her power and dignity through repeated declarations of resilience.',
  },
  {
    number: 13,
    title: 'Half-Caste',
    poet: 'John Agard',
    year: '1996',
    href: '/igcse/edexcel/poetry/half-caste',
    themes: ['Identity', 'Race', 'Language and prejudice'],
    publicDomain: false,
    summary:
      'The speaker challenges the term ‘half-caste’ by mocking its illogic, drawing on art, music and weather to expose its absurdity. The anthology uses the spelling ‘yu’ (not ‘you’).',
  },
]

/* ── Comparison pairings ──────────────────────────────────────────── */

// Rebuilt 10 October 2026. Nine of the twelve pairings here used a poem
// Section B never sets: Ozymandias, which the anthology does not print, or a
// Part 2 poem (one paired two Part 2 poems), so a student who followed them
// would have compared a poem that is not in the Poetry Booklet. Every pairing
// now is one Pearson set as Question 2, read from the papers themselves (the extra
// assessment materials, June 2019, January 2023, June 2023, November 2023,
// June 2024 and its 1R paper, November 2024, and June 2025 and its 1R paper),
// each with the focus that paper gave it.
const comparisonPairings = [
  {
    theme: 'Love and relationships',
    colour: 'text-rose-400',
    bg: 'bg-rose-500/10',
    border: 'border-rose-500/20',
    pairs: [
      'Sonnet 116 & Remember - feelings about love (specimen paper)',
      'Sonnet 116 & My Last Duchess - thoughts about relationships (November 2023)',
      'Poem at Thirty-Nine & My Last Duchess - feelings about another person (June 2025, Paper 1R)',
    ],
  },
  {
    theme: 'Experience and power',
    colour: 'text-clay-600',
    bg: 'bg-amber-500/10',
    border: 'border-amber-500/20',
    pairs: [
      'Blessing & War Photographer - different types of experience (June 2025)',
      'La Belle Dame sans Merci & The Tyger - the effect the lady has on the knight, and how the writer is affected by the tiger (November 2024)',
    ],
  },
  {
    theme: 'Identity, language and society',
    colour: 'text-blue-400',
    bg: 'bg-blue-500/10',
    border: 'border-blue-500/20',
    pairs: [
      'Search For My Tongue & Half-caste - concerns about language (June 2023)',
      'Prayer Before Birth & Half-caste - concerns about society (June 2019)',
      'Half-caste & Remember - how the writers express their feelings (June 2024)',
    ],
  },
  {
    theme: 'Time and memory',
    colour: 'text-purple-400',
    bg: 'bg-purple-500/10',
    border: 'border-purple-500/20',
    pairs: [
      'Half-past Two & Sonnet 116 - the passing of time (January 2023)',
      'Piano & Remember - remembering (June 2024, Paper 1R)',
    ],
  },
]

/* ── Study plan ───────────────────────────────────────────────────── */

const studyPlan = [
  {
    week: 'Weeks 1-2',
    title: 'Read the whole anthology',
    task: "Read all of the prescribed poems aloud twice. Don't analyse yet - just mark the lines that strike you and note your first reaction to each poem.",
  },
  {
    week: 'Weeks 3-6',
    title: 'Deep-dive one poem per session',
    task: 'Work through each poem in turn using the line-by-line interactive viewer. Memorise at least three short quotes per poem and note the key language devices.',
  },
  {
    week: 'Weeks 7-8',
    title: 'Build comparison clusters',
    task: 'Group the poems by theme (love, power, childhood, identity, death). For every theme, know two pairings well enough to write about under timed conditions.',
  },
  {
    week: 'Weeks 9-10',
    title: 'Practise the anthology question',
    // Until 10 October 2026 this spoke of "the named poem", as if Section B
    // always named one; one of its two questions names both.
    task: 'Write timed responses to past-paper questions, about 40 minutes each. Keep both poems in every paragraph, and when the second poem is yours to choose, pick one that gives you a clear angle on the question.',
  },
]

/* ── Page ─────────────────────────────────────────────────────────── */

export default async function EdexcelPoetryAnthologyPage() {
  await requireIgcseBoard(['edexcel-igcse'])

  const tFullGuide = await t('igcse.page.poetry.badge_full_guide')
  const tNotesOnly = await t('igcse.page.poetry.badge_notes_only')

  return (
    <div className="space-y-10">
      {/* ── Breadcrumb / header ─────────────────────────────────────── */}
      <div>
        <Button
          variant="ghost"
          size="sm"
          className="mb-3 -ms-2 text-muted-foreground"
          render={<Link href="/igcse/edexcel" />}
        >
          <ArrowLeft className="size-3.5" />
          {await t('igcse.page.back_to_edexcel_igcse')}
        </Button>

        <div className="flex items-start gap-4">
          <div className="flex size-12 items-center justify-center rounded-2xl bg-rose-500/10">
            <Library className="size-6 text-rose-400" />
          </div>
          <div className="flex-1">
            <div className="flex flex-wrap items-center gap-2 mb-1.5">
              <Badge variant="secondary" className="text-[0.65rem]">
                {await t('igcse.page.badge_edexcel_lit')}
              </Badge>
              <Badge variant="outline" className="text-[0.65rem]">
                {await t('igcse.page.badge_paper1_poetry')}
              </Badge>
            </div>
            <h1 className="text-heading-lg font-heading text-foreground">
              {await t('igcse.page.poetry.hero_h1')}
            </h1>
            <p className="text-body-sm text-muted-foreground mt-1 max-w-2xl">
              {await t('igcse.page.poetry.hero_lead')}
            </p>
          </div>
        </div>
      </div>

      <StudyTools
        textName="Edexcel IGCSE Poetry Anthology"
        textType="anthology"
        examBoard="Edexcel"
        variant="banner"
      />

      {/* ── Anthology version disclaimer ────────────────────────────── */}
      <section
        aria-label="Anthology version notice"
        className="rounded-xl border border-amber-500/30 bg-amber-500/[0.06] p-5 text-body-sm text-card-foreground"
      >
        {/* Until 26 September 2026 this notice named Issue 2 and said the full
            anthology was available only through Pearson's school-licensed
            editions. The current issue is 8 (February 2026), and Pearson
            publishes it free as a PDF, so no licensed copy is needed. */}
        <p className="mb-2">
          <strong className="text-foreground">{await t('igcse.page.poetry.version_label')}</strong>{' '}
          This site teaches{' '}
          <strong className="text-foreground">
            Issue 8 (February 2026) of the Pearson Edexcel International GCSE English Anthology
          </strong>{' '}
          (ISBN 978-1-446-93108-0). Material differences from freely-available online versions
          include:
        </p>
        <ol className="mb-2 list-decimal space-y-1 ps-5 text-muted-foreground">
          <li>
            <em>Half-Caste</em> uses Agard&rsquo;s spelling &lsquo;yu&rsquo; (not
            &lsquo;you&rsquo;);
          </li>
          <li>
            <em>The Bright Lights of Sarajevo</em> has additional stanza breaks not in
            Harrison&rsquo;s original <em>Guardian</em> publication;
          </li>
          <li>
            {/* Until 10 October 2026 this said Young and dyslexic? also differs from
                its online original. The anthology says only that it prints the article
                The Guardian published, itself adapted from a book (Issue 8, page 12). */}
            the adapted non-fiction text &lsquo;Explorers or boys messing about?&rsquo; differs from
            the <em>Guardian</em> article it was adapted from - always use the anthology version
            when answering Edexcel questions.
          </li>
        </ol>
        <p className="text-body-xs text-muted-foreground">
          Anthology © Pearson Education Limited 2026 - quotations on individual set-text pages are
          short fair-dealing extracts under CDPA s.30. Pearson publishes the full anthology free as
          a{' '}
          <a
            href={ANTHOLOGY_SOURCE.url}
            className="underline underline-offset-2 hover:text-foreground"
            rel="noopener noreferrer"
            target="_blank"
          >
            PDF on its qualifications website
          </a>
          .
        </p>
      </section>

      {/* ── Overview panel ──────────────────────────────────────────── */}
      <section className="grid gap-4 sm:grid-cols-3">
        <div className="rounded-xl border border-border bg-card p-5">
          <div className="flex items-center gap-2 mb-2">
            <BookOpen className="size-4 text-rose-400" />
            <h2 className="text-sm font-semibold text-foreground">
              {await t('igcse.page.poetry.overview_anthology')}
            </h2>
          </div>
          {/* Until 10 October 2026 this said the exam names one poem and asks you
              to compare it with another of your choice, and counted 13 poems. Part 3
              has sixteen, and Section B can name any of them in either question. */}
          <p className="text-xs text-muted-foreground leading-relaxed">
            Part 3 of the anthology spans four centuries, from Shakespeare and Blake to Duffy and
            Agard. You must know every Part 3 poem: Section B can name any of them, in either of its
            two questions.
          </p>
        </div>

        <div className="rounded-xl border border-border bg-card p-5">
          <div className="flex items-center gap-2 mb-2">
            <Target className="size-4 text-clay-600" />
            <h2 className="text-sm font-semibold text-foreground">
              {await t('igcse.page.poetry.overview_exam')}
            </h2>
          </div>
          {/* Until 10 October 2026 this gave roughly 45 minutes to compare "the
              named poem" with another. Every paper from the specimen to June 2025
              suggests 40 minutes, and only one of the two questions names one poem. */}
          <p className="text-xs text-muted-foreground leading-relaxed">
            Paper 1 Section B - Anthology Poetry (30 marks, about 40 minutes). You answer one of two
            questions, and both compare two Part 3 poems: one names both, and the other names one
            and lets you choose the second. Both ask about language, form and structure.
          </p>
        </div>

        <div className="rounded-xl border border-border bg-card p-5">
          <div className="flex items-center gap-2 mb-2">
            <GitCompare className="size-4 text-emerald-400" />
            <h2 className="text-sm font-semibold text-foreground">
              {await t('igcse.page.poetry.overview_skill')}
            </h2>
          </div>
          <p className="text-xs text-muted-foreground leading-relaxed">
            Comparison. Every paragraph should weave both poems together rather than treating them
            separately. Know at least two strong pairings for every major theme.
          </p>
        </div>
      </section>

      {/* ── Poem list ───────────────────────────────────────────────── */}
      <section>
        <h2 className="text-heading-sm font-heading text-foreground mb-4">
          {await t('igcse.page.poetry.poems_heading')}
        </h2>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {anthology.map((poem) => {
            const isLinked = Boolean(poem.href)
            const sharedClassName = `group block rounded-xl border border-border bg-card p-4 transition-colors ${
              isLinked
                ? 'hover:border-foreground/20 hover:bg-muted/40 cursor-pointer'
                : 'opacity-90'
            }`

            if (isLinked) {
              return (
                <Link key={poem.number} href={poem.href!} className={sharedClassName}>
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <div className="flex items-center gap-2">
                      <span className="text-xs tabular-nums text-muted-foreground-subtle font-medium">
                        {poem.number.toString().padStart(2, '0')}
                      </span>
                      {poem.publicDomain ? (
                        <Unlock className="size-3 text-emerald-400" />
                      ) : (
                        <Lock className="size-3 text-muted-foreground-subtle" />
                      )}
                    </div>
                    {poem.year && (
                      <span className="text-[10px] text-muted-foreground-subtle tabular-nums">
                        {poem.year}
                      </span>
                    )}
                  </div>

                  <h3 className="text-sm font-semibold text-foreground group-hover:text-foreground">
                    {poem.title}
                  </h3>
                  <p className="text-xs text-muted-foreground mb-2">{poem.poet}</p>

                  <p className="text-xs text-muted-foreground leading-relaxed mb-3 line-clamp-3">
                    {poem.summary}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {poem.themes.map((theme) => (
                      <span
                        key={theme}
                        className="rounded-full bg-muted px-2 py-0.5 text-[10px] text-muted-foreground"
                      >
                        {theme}
                      </span>
                    ))}
                  </div>

                  {poem.publicDomain ? (
                    <Badge variant="secondary" className="text-[10px]">
                      {tFullGuide}
                    </Badge>
                  ) : (
                    <Badge variant="outline" className="text-[10px] text-muted-foreground">
                      {tNotesOnly}
                    </Badge>
                  )}
                </Link>
              )
            }

            return (
              <div key={poem.number} className={sharedClassName}>
                <div className="flex items-start justify-between gap-3 mb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xs tabular-nums text-muted-foreground-subtle font-medium">
                      {poem.number.toString().padStart(2, '0')}
                    </span>
                    {poem.publicDomain ? (
                      <Unlock className="size-3 text-emerald-400" />
                    ) : (
                      <Lock className="size-3 text-muted-foreground-subtle" />
                    )}
                  </div>
                  {poem.year && (
                    <span className="text-[10px] text-muted-foreground-subtle tabular-nums">
                      {poem.year}
                    </span>
                  )}
                </div>

                <h3 className="text-sm font-semibold text-foreground group-hover:text-foreground">
                  {poem.title}
                </h3>
                <p className="text-xs text-muted-foreground mb-2">{poem.poet}</p>

                <p className="text-xs text-muted-foreground leading-relaxed mb-3 line-clamp-3">
                  {poem.summary}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-3">
                  {poem.themes.map((theme) => (
                    <span
                      key={theme}
                      className="rounded-full bg-muted px-2 py-0.5 text-[10px] text-muted-foreground"
                    >
                      {theme}
                    </span>
                  ))}
                </div>

                {poem.publicDomain ? (
                  <Badge variant="secondary" className="text-[10px]">
                    Full interactive study guide
                  </Badge>
                ) : (
                  <Badge variant="outline" className="text-[10px] text-muted-foreground">
                    Study notes only - see textbook for full text
                  </Badge>
                )}
              </div>
            )
          })}
        </div>
      </section>

      {/* ── Comparison tips ─────────────────────────────────────────── */}
      <section>
        <div className="flex items-center gap-2 mb-4">
          <GitCompare className="size-4 text-muted-foreground" />
          <h2 className="text-heading-sm font-heading text-foreground">
            {await t('igcse.page.poetry.pairings_heading')}
          </h2>
        </div>
        {/* Until 10 October 2026 this said the anthology question always names
            one poem. Question 2 names both; only Question 3 names one. */}
        <p className="text-body-sm text-muted-foreground mb-5 max-w-3xl">
          Section B gives you a choice of two questions. One names both poems; the other names one
          and leaves the second to you, from Part 3, and then your job is to pick a poem that lets
          you say something sharp about the question&rsquo;s focus. Pearson has set every pairing
          below as the two-poem question, so each is good practice for either:
        </p>

        <div className="grid gap-4 sm:grid-cols-2">
          {comparisonPairings.map((cluster) => (
            <div
              key={cluster.theme}
              className={`rounded-xl border ${cluster.border} ${cluster.bg} p-5`}
            >
              <h3 className={`text-sm font-semibold mb-3 ${cluster.colour}`}>{cluster.theme}</h3>
              <ul className="space-y-2">
                {cluster.pairs.map((p) => (
                  <li key={p} className="text-xs text-card-foreground leading-relaxed flex gap-2">
                    <span className="text-muted-foreground-subtle mt-0.5">-</span>
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
            {await t('igcse.page.poetry.study_plan_heading')}
          </h2>
        </div>
        <p className="text-body-sm text-muted-foreground mb-5">
          A sensible order for working through the anthology from your first read to exam-ready.
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
                  <span className="text-sm font-semibold text-foreground">{stage.title}</span>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">{stage.task}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Footer ──────────────────────────────────────────────────── */}
      <footer className="pt-4 text-center text-body-xs text-muted-foreground">
        Aligned with Pearson Edexcel specification 4ET1 &middot; Audited April 2026
      </footer>
    </div>
  )
}
