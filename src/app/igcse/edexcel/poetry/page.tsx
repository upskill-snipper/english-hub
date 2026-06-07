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
import StudyTools from '@/components/study/StudyTools'

export const metadata: Metadata = {
  openGraph: {
    title: 'Edexcel IGCSE Literature Anthology Poetry - The English Hub',
    description:
      'Complete study guide for the prescribed poems in the Pearson Edexcel International GCSE Literature (4ET1) Anthology Poetry section. Line-by-line analysis, quotes, comparison guides and exam tips.',
  },
  title: 'Edexcel IGCSE Literature Anthology Poetry',
  description:
    'Complete study guide for the prescribed poems in the Pearson Edexcel International GCSE Literature (4ET1) Anthology Poetry section. Line-by-line analysis, quotes, comparison guides and exam tips.',
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
    summary:
      'A pale, wandering knight tells how a mysterious fairy woman enchanted him and left him alone on a cold hillside. Edexcel anthology prints the 1820 Indicator version.',
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
      'During the siege of Sarajevo, young couples meet in candlelit cafés and walk under starlight - life persisting amid devastation. Anthology Issue 2 prints additional stanza breaks.',
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
      'The speaker challenges the term ‘half-caste’ by mocking its illogic, drawing on art, music and weather to expose its absurdity. Anthology Issue 2 uses the spelling ‘yu’ (not ‘you’).',
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
      'Sonnet 116 & Remember - enduring love and the test of time',
      'La Belle Dame sans Merci & Remember - love, loss and the spectre of death',
      'If- & War Photographer - moral codes and the burden of conscience',
    ],
  },
  {
    theme: 'Power and conflict',
    colour: 'text-clay-600',
    bg: 'bg-amber-500/10',
    border: 'border-amber-500/20',
    pairs: [
      'Ozymandias & The Tyger - earthly versus divine power',
      'War Photographer & Disabled - the human cost of war',
      'The Bright Lights of Sarajevo & Out, Out- - life and indifference in the face of death',
    ],
  },
  {
    theme: 'Identity and belonging',
    colour: 'text-blue-400',
    bg: 'bg-blue-500/10',
    border: 'border-blue-500/20',
    pairs: [
      'An Unknown Girl & Half-Caste - cultural identity and self-definition',
      'Still I Rise & Half-Caste - resilience against prejudice',
      'If- & Still I Rise - strength of character under pressure',
    ],
  },
  {
    theme: 'Mortality and memory',
    colour: 'text-purple-400',
    bg: 'bg-purple-500/10',
    border: 'border-purple-500/20',
    pairs: [
      'Remember & Out, Out- - confronting sudden death',
      'Disabled & War Photographer - bearing witness to war',
      'Ozymandias & Sonnet 116 - what endures and what fades',
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
    task: 'Write timed responses to past-paper questions. Always link back to the named poem in the question and pick your comparison poem for a clear angle.',
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
          className="mb-3 -ml-2 text-muted-foreground"
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
        <p className="mb-2">
          <strong className="text-foreground">{await t('igcse.page.poetry.version_label')}</strong>{' '}
          This site teaches the{' '}
          <strong className="text-foreground">Edexcel IGCSE Anthology Issue 2</strong> (ISBN
          978-1-446-93108-0, Pearson Education). Material differences from Issue 1 and from
          freely-available online versions include:
        </p>
        <ol className="mb-2 list-decimal space-y-1 pl-5 text-muted-foreground">
          <li>
            <em>Half-Caste</em> uses Agard&rsquo;s spelling &lsquo;yu&rsquo; (not
            &lsquo;you&rsquo;);
          </li>
          <li>
            <em>The Bright Lights of Sarajevo</em> has additional stanza breaks not in
            Harrison&rsquo;s original <em>Guardian</em> publication;
          </li>
          <li>
            the adapted non-fiction texts (&lsquo;Explorers or boys messing about?&rsquo; and
            &lsquo;Young and dyslexic?&rsquo;) differ from their online originals - always use the
            anthology version when answering Edexcel questions.
          </li>
        </ol>
        <p className="text-body-xs text-muted-foreground">
          © Pearson Education - quotations on individual set-text pages are short fair-dealing
          extracts under CDPA s.30. The full anthology is available only through Pearson&rsquo;s
          school-licensed editions.
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
          <p className="text-xs text-muted-foreground leading-relaxed">
            13 prescribed poems spanning four centuries, from Shakespeare and Blake to Duffy and
            Agard. You must know every poem - the exam names one and asks you to compare it with
            another of your choice.
          </p>
        </div>

        <div className="rounded-xl border border-border bg-card p-5">
          <div className="flex items-center gap-2 mb-2">
            <Target className="size-4 text-clay-600" />
            <h2 className="text-sm font-semibold text-foreground">
              {await t('igcse.page.poetry.overview_exam')}
            </h2>
          </div>
          <p className="text-xs text-muted-foreground leading-relaxed">
            Paper 1 - Anthology Poetry (30 marks). You have roughly 45 minutes to compare the named
            poem with another from the anthology, focusing on language, structure and ideas.
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
        <p className="text-body-sm text-muted-foreground mb-5 max-w-3xl">
          The anthology question always names one poem. Your job is to choose a second poem from the
          rest of the anthology that lets you say something sharp. These are the pairings we
          recommend memorising:
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
                    <span className="text-muted-foreground/60 mt-0.5">-</span>
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
