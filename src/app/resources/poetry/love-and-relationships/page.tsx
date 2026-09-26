'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import { useT } from '@/lib/i18n/use-t'

/* Maps a generic English section heading to its dictionary key. Only the
   generic chrome headings are listed; poem-specific titles are never mapped. */
const HEADING_KEYS: Record<string, string> = {
  Summary: 'study.shared.heading.summary',
  Themes: 'study.shared.heading.themes',
  Context: 'study.shared.heading.context',
  'Key Quotes': 'study.shared.heading.key_quotes',
  'Form & Structure': 'study.shared.heading.form_structure',
  'Comparison Suggestions': 'study.shared.heading.comparison_suggestions',
  'Version note': 'study.shared.heading.version_note',
}

/* ================================================================== */
/*  Reusable Components                                                */
/* ================================================================== */

function Section({
  id,
  title,
  poet,
  studyHref,
  children,
  defaultOpen = false,
}: {
  id: string
  title: string
  poet: string
  studyHref?: string
  children: React.ReactNode
  defaultOpen?: boolean
}) {
  const [open, setOpen] = useState(defaultOpen)
  const t = useT()
  return (
    <div className="rounded-xl border border-border bg-card shadow-md overflow-hidden">
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-center justify-between px-5 py-4 text-start transition-colors hover:bg-muted"
        aria-expanded={open}
        aria-controls={`section-${id}`}
      >
        <div className="flex items-center gap-3 min-w-0">
          <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-accent" />
          <div className="min-w-0">
            <h2 className="text-lg font-bold text-foreground truncate">{title}</h2>
            <p className="text-sm text-muted-foreground">{poet}</p>
          </div>
        </div>
        <svg
          className={`h-5 w-5 shrink-0 text-muted-foreground transition-transform ${open ? 'rotate-180' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
      </button>
      {open && (
        <div id={`section-${id}`} className="border-t border-border px-5 py-5 space-y-6">
          {children}
          {studyHref && (
            <div className="pt-2">
              <Link
                href={studyHref}
                className="inline-flex items-center gap-2 rounded-lg bg-primary/10 px-4 py-2.5 text-sm font-semibold text-primary transition-colors hover:bg-primary/20"
              >
                {t('study.shared.cta.study_in_depth')}
                <svg
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                  />
                </svg>
              </Link>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

function SubSection({ title, children }: { title: string; children: React.ReactNode }) {
  const t = useT()
  const key = HEADING_KEYS[title]
  return (
    <div>
      <h3 className="text-base font-bold text-primary mb-2">{key ? t(key) : title}</h3>
      {children}
    </div>
  )
}

function Quote({
  text,
  technique,
  analysis,
}: {
  text: string
  technique: string
  analysis: string
}) {
  return (
    <div className="rounded-lg border-s-4 border-accent bg-primary/5 p-4">
      <p className="text-sm font-semibold italic text-foreground">&ldquo;{text}&rdquo;</p>
      <p className="mt-1 text-xs font-semibold text-primary">{technique}</p>
      <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{analysis}</p>
    </div>
  )
}

function ThemeTag({ theme }: { theme: string }) {
  return (
    <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
      {theme}
    </span>
  )
}

function ComparisonSuggestion({ poem, reason }: { poem: string; reason: string }) {
  return (
    <li className="text-sm text-muted-foreground">
      <span className="font-semibold text-foreground">{poem}</span> &mdash; {reason}
    </li>
  )
}

/* ================================================================== */
/*  Comparison Table Data                                              */
/* ================================================================== */

const COMPARISON_DATA: {
  poem: string
  poet: string
  type: string
  themes: string
  tone: string
  form: string
}[] = [
  {
    poem: 'When We Two Parted',
    poet: 'Byron',
    type: 'Romantic',
    themes: 'Loss, betrayal, secrecy',
    tone: 'Bitter, sorrowful',
    form: 'Four eight-line stanzas, ABAB rhyme',
  },
  {
    poem: "Love's Philosophy",
    poet: 'Shelley',
    type: 'Romantic',
    themes: 'Desire, nature, persuasion',
    tone: 'Passionate, frustrated',
    form: 'Two octets, ABABCDCD rhyme',
  },
  {
    poem: "Porphyria's Lover",
    poet: 'Browning',
    type: 'Romantic',
    themes: 'Obsession, power, madness',
    tone: 'Disturbing, calm',
    form: 'Dramatic monologue, ABABB rhyme',
  },
  {
    poem: 'Sonnet 29',
    poet: 'Barrett Browning',
    type: 'Romantic',
    themes: 'Love as transformative, devotion',
    tone: 'Tender, uplifting',
    form: 'Petrarchan sonnet, iambic pentameter',
  },
  {
    poem: 'Neutral Tones',
    poet: 'Hardy',
    type: 'Victorian',
    themes: 'Loss of love, disillusionment, memory',
    tone: 'Bleak, bitter',
    form: 'Four quatrains, cyclical structure',
  },
  {
    poem: 'Letters from Yorkshire',
    poet: 'Dooley',
    type: 'Modern',
    themes: 'Distance, connection, nature vs technology',
    tone: 'Reflective, admiring',
    form: 'Five tercets, free verse, no rhyme',
  },
  {
    poem: "The Farmer's Bride",
    poet: 'Mew',
    type: 'Victorian',
    themes: 'Isolation, desire, gender',
    tone: 'Frustrated, possessive',
    form: 'Dramatic monologue, varied rhyme',
  },
  {
    poem: 'Walking Away',
    poet: 'Day-Lewis',
    type: 'Modern',
    themes: 'Parent-child love, letting go',
    tone: 'Nostalgic, accepting',
    form: 'Four quintains, loose ABACA rhyme',
  },
  {
    poem: 'Eden Rock',
    poet: 'Causley',
    type: 'Modern',
    themes: 'Memory, family, death',
    tone: 'Serene, dreamlike',
    form: 'Four quatrains, a tercet, a lone last line; ABAB half-rhyme',
  },
  {
    poem: 'Follower',
    poet: 'Heaney',
    type: 'Modern',
    themes: 'Admiration, ageing, role reversal',
    tone: 'Admiring to guilty',
    form: 'Six quatrains, ABAB half-rhyme',
  },
  {
    poem: 'Mother, Any Distance',
    poet: 'Armitage',
    type: 'Modern',
    themes: 'Parent-child bond, independence',
    tone: 'Uncertain, bittersweet',
    form: 'Extended sonnet (15 lines)',
  },
  {
    poem: 'Before You Were Mine',
    poet: 'Duffy',
    type: 'Modern',
    themes: 'Memory, possession, mother-daughter',
    tone: 'Celebratory, possessive',
    form: 'Four quintains, free verse',
  },
  {
    poem: 'Winter Swans',
    poet: 'Sheers',
    type: 'Modern',
    themes: 'Reconciliation, nature, love',
    tone: 'Tender, hopeful',
    form: 'Tercets then final couplet',
  },
  {
    poem: 'Singh Song!',
    poet: 'Nagra',
    type: 'Modern',
    themes: 'Love, cultural identity, marriage',
    tone: 'Playful, joyful',
    form: 'Free verse, phonetic spelling',
  },
  {
    poem: 'Climbing My Grandfather',
    poet: 'Waterhouse',
    type: 'Modern',
    themes: 'Family bond, memory, admiration',
    tone: 'Warm, determined',
    form: 'Free verse, extended metaphor',
  },
]

/* ================================================================== */
/*  Poem metadata for search & filter                                  */
/* ================================================================== */

const POEM_META = [
  {
    id: 'when-we-two-parted',
    title: 'When We Two Parted',
    poet: 'Lord Byron',
    themes: ['Loss and heartbreak', 'Romantic love', 'Distance and separation'],
    period: 'Romantic',
  },
  {
    id: 'love-s-philosophy',
    title: "Love's Philosophy",
    poet: 'Percy Bysshe Shelley',
    themes: ['Romantic love', 'Nature and love', 'Desire and longing'],
    period: 'Romantic',
  },
  {
    id: 'porphyria-s-lover',
    title: "Porphyria's Lover",
    poet: 'Robert Browning',
    themes: ['Romantic love', 'Power and possession', 'Loss and heartbreak'],
    period: 'Romantic',
  },
  {
    id: 'sonnet-29',
    title: 'Sonnet 29',
    poet: 'Elizabeth Barrett Browning',
    themes: ['Romantic love', 'Nature and love', 'Distance and separation'],
    period: 'Romantic',
  },
  {
    id: 'neutral-tones',
    title: 'Neutral Tones',
    poet: 'Thomas Hardy',
    themes: ['Loss and heartbreak', 'Nature and love'],
    period: 'Victorian',
  },
  {
    id: 'letters-from-yorkshire',
    title: 'Letters from Yorkshire',
    poet: 'Maura Dooley',
    themes: ['Distance and separation', 'Nature and love', 'Reconciliation and healing'],
    period: 'Modern',
  },
  {
    id: 'the-farmer-s-bride',
    title: "The Farmer's Bride",
    poet: 'Charlotte Mew',
    themes: ['Loss and heartbreak', 'Power and possession'],
    period: 'Victorian',
  },
  {
    id: 'walking-away',
    title: 'Walking Away',
    poet: 'C. Day-Lewis',
    themes: ['Parent-child love', 'Distance and separation', 'Family and memory'],
    period: 'Modern',
  },
  {
    id: 'eden-rock',
    title: 'Eden Rock',
    poet: 'Charles Causley',
    themes: ['Family and memory', 'Parent-child love'],
    period: 'Modern',
  },
  {
    id: 'follower',
    title: 'Follower',
    poet: 'Seamus Heaney',
    themes: ['Parent-child love', 'Family and memory'],
    period: 'Modern',
  },
  {
    id: 'mother--any-distance',
    title: 'Mother, Any Distance',
    poet: 'Simon Armitage',
    themes: ['Parent-child love', 'Identity and independence'],
    period: 'Modern',
  },
  {
    id: 'before-you-were-mine',
    title: 'Before You Were Mine',
    poet: 'Carol Ann Duffy',
    themes: [
      'Parent-child love',
      'Family and memory',
      'Power and possession',
      'Identity and independence',
    ],
    period: 'Modern',
  },
  {
    id: 'winter-swans',
    title: 'Winter Swans',
    poet: 'Owen Sheers',
    themes: ['Romantic love', 'Nature and love', 'Reconciliation and healing'],
    period: 'Modern',
  },
  {
    id: 'singh-song-',
    title: 'Singh Song!',
    poet: 'Daljit Nagra',
    themes: ['Romantic love', 'Identity and independence'],
    period: 'Modern',
  },
  {
    id: 'climbing-my-grandfather',
    title: 'Climbing My Grandfather',
    poet: 'Andrew Waterhouse',
    themes: ['Family and memory', 'Parent-child love'],
    period: 'Modern',
  },
]

const ALL_THEMES = Array.from(new Set(POEM_META.flatMap((p) => p.themes))).sort()
const ALL_PERIODS = Array.from(new Set(POEM_META.map((p) => p.period)))

/* ================================================================== */
/*  Page                                                               */
/* ================================================================== */

export default function LoveAndRelationshipsPage() {
  const t = useT()
  const [showTable, setShowTable] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [activeTheme, setActiveTheme] = useState<string | null>(null)
  const [activePeriod, setActivePeriod] = useState<string | null>(null)

  const visiblePoemIds = useMemo(() => {
    const query = searchQuery.toLowerCase().trim()
    return new Set(
      POEM_META.filter((p) => {
        const matchesSearch =
          !query ||
          p.title.toLowerCase().includes(query) ||
          p.poet.toLowerCase().includes(query) ||
          p.themes.some((t) => t.toLowerCase().includes(query))
        const matchesTheme = !activeTheme || p.themes.includes(activeTheme)
        const matchesPeriod = !activePeriod || p.period === activePeriod
        return matchesSearch && matchesTheme && matchesPeriod
      }).map((p) => p.id),
    )
  }, [searchQuery, activeTheme, activePeriod])

  const matchCount = visiblePoemIds.size

  return (
    <>
      {/* Hero */}
      <section className="border-b bg-gradient-to-b from-primary/[0.06] to-transparent px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-muted-foreground">
            {t('study.poetry.lar.hero.eyebrow')}
          </p>
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            {t('study.poetry.lar.hero.title')}
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            {t('study.poetry.lar.hero.subtitle')}
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <span className="rounded-full bg-muted px-3 py-1 text-sm font-medium text-muted-foreground">
              15 Poems
            </span>
            <span className="rounded-full bg-muted px-3 py-1 text-sm font-medium text-muted-foreground">
              75+ Key Quotes
            </span>
          </div>
        </div>
      </section>

      {/* Search & Filter */}
      <section className="mx-auto max-w-6xl px-4 pt-8 sm:px-6 lg:px-8">
        <div className="rounded-xl border border-border bg-card p-5 shadow-md space-y-4">
          {/* Search bar */}
          <div className="relative">
            <svg
              className="absolute start-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground pointer-events-none"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
            <input
              type="text"
              placeholder={t('study.poetry.search.placeholder')}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-lg border border-border bg-card py-2.5 ps-10 pe-4 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute end-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-muted-foreground"
                aria-label={t('study.poetry.search.clear_aria')}
              >
                <svg
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>

          {/* Theme filters */}
          <div>
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2">
              {t('study.poetry.filter.by_theme')}
            </p>
            <div className="flex flex-wrap gap-2">
              {ALL_THEMES.map((theme) => (
                <button
                  key={theme}
                  onClick={() => setActiveTheme(activeTheme === theme ? null : theme)}
                  className={`rounded-full px-3 py-1 text-xs font-medium transition-colors ${
                    activeTheme === theme
                      ? 'bg-primary text-white'
                      : 'bg-muted text-muted-foreground hover:bg-primary/10 hover:text-foreground'
                  }`}
                >
                  {theme}
                </button>
              ))}
            </div>
          </div>

          {/* Period filters */}
          <div>
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2">
              {t('study.poetry.filter.by_period')}
            </p>
            <div className="flex flex-wrap gap-2">
              {ALL_PERIODS.map((period) => (
                <button
                  key={period}
                  onClick={() => setActivePeriod(activePeriod === period ? null : period)}
                  className={`rounded-full px-3 py-1 text-xs font-medium transition-colors ${
                    activePeriod === period
                      ? 'bg-primary text-white'
                      : 'bg-muted text-muted-foreground hover:bg-primary/10 hover:text-foreground'
                  }`}
                >
                  {period}
                </button>
              ))}
              {(activeTheme || activePeriod || searchQuery) && (
                <button
                  onClick={() => {
                    setActiveTheme(null)
                    setActivePeriod(null)
                    setSearchQuery('')
                  }}
                  className="rounded-full bg-red-500/10 px-3 py-1 text-xs font-medium text-red-600 hover:bg-red-500/15 transition-colors"
                >
                  {t('study.poetry.filter.clear_all')}
                </button>
              )}
            </div>
          </div>

          {/* Result count */}
          {(searchQuery || activeTheme || activePeriod) && (
            <p className="text-sm text-muted-foreground">
              {t('study.poetry.results.showing')}{' '}
              <span className="font-semibold text-foreground">{matchCount}</span>{' '}
              {t('study.poetry.results.of_poems')}
              {matchCount === 0 && t('study.poetry.results.broaden')}
            </p>
          )}
        </div>
      </section>

      {/* Quick nav */}
      <section className="mx-auto max-w-6xl px-4 py-4 sm:px-6 lg:px-8">
        <div className="rounded-xl border border-border bg-card p-4 shadow-md">
          <p className="text-sm font-semibold text-muted-foreground mb-3">
            {t('study.poetry.nav.jump_to')}
          </p>
          <div className="flex flex-wrap gap-2">
            {POEM_META.filter((p) => visiblePoemIds.has(p.id)).map((p) => (
              <a
                key={p.id}
                href={`#${p.id}`}
                className="rounded-lg bg-muted px-3 py-1.5 text-xs font-medium text-muted-foreground hover:bg-primary/10 hover:text-primary transition-colors"
              >
                {p.title}
              </a>
            ))}
            <a
              href="#comparison-table"
              className="rounded-lg bg-primary/10 px-3 py-1.5 text-xs font-semibold text-primary hover:bg-primary/20 transition-colors"
            >
              {t('study.poetry.nav.comparison_table')}
            </a>
          </div>
        </div>
      </section>

      {/* Poems */}
      <section className="mx-auto max-w-6xl px-4 pb-12 sm:px-6 lg:px-8">
        <div className="space-y-4">
          {matchCount === 0 && (
            <div className="rounded-xl border border-dashed border-border bg-muted p-8 text-center">
              <p className="text-muted-foreground text-sm">
                {t('study.poetry.results.none_match')}
              </p>
            </div>
          )}

          {/* ───────────────────── 1. When We Two Parted ───────────────────── */}
          <div
            id="when-we-two-parted"
            style={{ display: visiblePoemIds.has('when-we-two-parted') ? undefined : 'none' }}
          >
            <Section
              id="when-we-two-parted"
              title="When We Two Parted"
              poet="Lord Byron (1816)"
              studyHref="/revision/poetry/love-and-relationships/when-we-two-parted"
              defaultOpen
            >
              <SubSection title="Context">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Written by the Romantic poet Lord Byron, this poem is believed to address his
                  secret affair with Lady Frances Wedderburn Webster. When rumours of her later
                  affair with the Duke of Wellington surfaced, Byron felt betrayed. The poem was
                  written in 1816 but backdated to 1808, possibly to distance Byron from the
                  scandal. The secretive nature of the affair is central to the poem&apos;s meaning.
                </p>
              </SubSection>

              <SubSection title="Summary">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  The speaker reflects on the painful end of a secret love affair. The poem moves
                  through memories of their parting (silence, tears, and coldness), the present pain
                  of hearing the former lover&apos;s name spoken by others, and the speaker&apos;s
                  sense of betrayal. The cyclical structure returns to the opening image, suggesting
                  the pain is unresolved and ongoing.
                </p>
              </SubSection>

              <SubSection title="Form &amp; Structure">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Four regular eight-line stanzas with an alternating ABAB rhyme create a
                  controlled, restrained tone that mirrors the secrecy of the affair. The anapaestic
                  metre creates a mournful, rhythmic quality. The cyclical structure (the final
                  stanza echoes the first) reinforces that the speaker is trapped in grief. Short,
                  monosyllabic words (&ldquo;pale,&rdquo; &ldquo;cold,&rdquo; &ldquo;half&rdquo;)
                  emphasise emotional numbness.
                </p>
              </SubSection>

              <SubSection title="Key Quotes">
                <div className="space-y-3">
                  <Quote
                    text="In silence and tears"
                    technique="Asyndetic list / monosyllabic diction"
                    analysis="The simplicity conveys emotional numbness and restraint. The lack of conjunction between 'silence' and 'tears' suggests the speaker cannot fully articulate the depth of their pain. The short, plain words create a stark, honest tone."
                  />
                  <Quote
                    text="Half broken-hearted"
                    technique="Litotes / understatement"
                    analysis="The qualifier 'half' is deliberately understated, implying the speaker was not yet fully aware of the depth of their loss. It also hints that the other person was even less affected, increasing the sense of asymmetry in the relationship."
                  />
                  <Quote
                    text="Pale grew thy cheek and cold, / Colder thy kiss"
                    technique="Semantic field of death / comparative adjective"
                    analysis="The imagery of paleness and coldness associates the end of the relationship with death, foreshadowing emotional death. The comparative 'colder' intensifies the imagery, suggesting physical and emotional withdrawal."
                  />
                  {/* Checked on 26 September 2026 against the AQA sample anthology
                      (AQA-8702-TG-POEMS), which prints 'in mine ear' where many
                      other editions have 'to'. Quote the board's text. */}
                  <Quote
                    text="A knell in mine ear"
                    technique="Metaphor / auditory imagery"
                    analysis="A knell is a funeral bell, so hearing the former lover's name spoken is likened to a death. This suggests the relationship has died and each mention reopens the grief."
                  />
                  <Quote
                    text="If I should meet thee / After long years, / How should I greet thee? / With silence and tears."
                    technique="Rhetorical question / cyclical structure"
                    analysis="The final stanza mirrors the opening, creating a cyclical structure that traps the speaker in perpetual grief. The rhetorical question suggests the speaker already knows the answer: nothing has changed or healed."
                  />
                </div>
              </SubSection>

              <SubSection title="Themes">
                <div className="flex flex-wrap gap-2">
                  <ThemeTag theme="Loss and heartbreak" />
                  <ThemeTag theme="Secrecy and shame" />
                  <ThemeTag theme="Betrayal" />
                  <ThemeTag theme="Memory and time" />
                </div>
              </SubSection>

              <SubSection title="Comparison Suggestions">
                <ul className="space-y-2 list-none">
                  <ComparisonSuggestion
                    poem="Neutral Tones"
                    reason="Both present love as something that has died, using cold, bleak imagery and cyclical structures."
                  />
                  <ComparisonSuggestion
                    poem="Love's Philosophy"
                    reason="Contrasts Byron's bitter loss with Shelley's passionate desire; both Romantic poets exploring unrequited feeling."
                  />
                  <ComparisonSuggestion
                    poem="Sonnet 29"
                    reason="Contrasts: Barrett Browning presents love as joyful and transformative, whereas Byron shows love as destructive."
                  />
                </ul>
              </SubSection>
            </Section>
          </div>

          {/* ───────────────────── 2. Love's Philosophy ───────────────────── */}
          <div
            id="love-s-philosophy"
            style={{ display: visiblePoemIds.has('love-s-philosophy') ? undefined : 'none' }}
          >
            <Section
              id="loves-philosophy"
              title="Love's Philosophy"
              poet="Percy Bysshe Shelley (1820)"
              studyHref="/revision/poetry/love-and-relationships/loves-philosophy"
            >
              <SubSection title="Context">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Shelley was a key Romantic poet who championed emotion, nature, and individual
                  passion. This poem was written as a persuasive love lyric, using the natural world
                  to argue that everything in nature exists in union, so the speaker and their
                  beloved should too. The &ldquo;philosophy&rdquo; of the title is essentially a
                  rhetorical argument for love.
                </p>
              </SubSection>

              <SubSection title="Summary">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  The speaker uses a series of examples from the natural world &mdash; rivers
                  meeting the sea, winds merging, flowers clasping &mdash; to argue that all things
                  in nature exist in pairs and unions. The rhetorical logic is: if nature is
                  designed for togetherness, then the beloved&apos;s refusal to reciprocate love is
                  unnatural. Each stanza ends with a direct, frustrated appeal.
                </p>
              </SubSection>

              <SubSection title="Form &amp; Structure">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Two octets (eight-line stanzas) with an ABABCDCD rhyme scheme. The regular,
                  lilting rhythm mimics a gentle, persuasive tone. Both stanzas build through
                  examples from nature before ending with a frustrated rhetorical question, creating
                  a pattern of argument then appeal. The second stanza intensifies the first,
                  escalating from nature to divine law.
                </p>
              </SubSection>

              <SubSection title="Key Quotes">
                <div className="space-y-3">
                  <Quote
                    text="The fountains mingle with the river / And the rivers with the ocean"
                    technique="Natural imagery / listing"
                    analysis="Shelley builds a cumulative argument using natural imagery. The progression from fountains to rivers to oceans suggests love is as natural and inevitable as the water cycle. The listing creates a sense of overwhelming evidence."
                  />
                  <Quote
                    text="Nothing in the world is single"
                    technique="Declarative statement / hyperbole"
                    analysis="This bold declaration is the central premise of the speaker's argument: being alone is unnatural. The absolute 'nothing' is hyperbolic, strengthening the persuasion but also revealing a degree of desperation."
                  />
                  {/* Checked on 26 September 2026 against the AQA sample anthology
                      (AQA-8702-TG-POEMS) and poets.org. The second line of this
                      quotation was a variant printed in neither, and the analysis
                      rested on a word it does not have; it now quotes the line as
                      AQA prints it. */}
                  <Quote
                    text="All things by a law divine / In one another's being mingle"
                    technique="Religious imagery / inversion"
                    analysis="The speaker elevates his argument from nature to God, claiming divine authority for union. The inverted 'law divine' has a solemn, scriptural ring, and 'one another's being' suggests that lovers share their very existence, not just their company."
                  />
                  <Quote
                    text="See the mountains kiss high heaven"
                    technique="Personification / visual imagery"
                    analysis="Nature is personified with the intimate verb 'kiss,' suggesting physical affection is natural and universal. The scale of mountains and heaven makes love seem grand and cosmic."
                  />
                  <Quote
                    text="And the sunlight clasps the earth"
                    technique="Personification / tactile imagery"
                    analysis="'Clasps' implies a possessive, physical embrace, escalating from the gentler 'kiss' above. The personification of sunlight holding the earth suggests love is as essential as sunlight itself."
                  />
                  {/* Checked on 26 September 2026. Line 15 of Shelley's poem has
                      three readings in print, and AQA's own two copies disagree:
                      the teaching-resource sample (AQA-8702-TG-POEMS, Version 1.2)
                      prints 'kisses', and the typeset anthology (Past and present,
                      Version 1.0 June 2015, page 7, checked on the rendered page)
                      prints 'kissings'. poets.org prints a third, 'sweet work'. Two
                      fixes on this day each quoted one AQA copy as if it were the
                      only one. The quotation is now the final line, which every
                      copy prints alike, and line 15 is described, not quoted,
                      until someone confirms which copy students are given. */}
                  <Quote
                    text="If thou kiss not me?"
                    technique="Rhetorical question / volta"
                    analysis="The final rhetorical question is the poem's emotional climax. The line before it asks what all this kissing in nature is worth, gathering every image of nature touching nature, the mountains and heaven, the moonbeams and the sea, into one question, and the answer is that all of it is worthless without reciprocated love. 'Thou' directly addresses the beloved, making the plea personal and urgent."
                  />
                </div>
              </SubSection>

              <SubSection title="Themes">
                <div className="flex flex-wrap gap-2">
                  <ThemeTag theme="Desire and longing" />
                  <ThemeTag theme="Nature and love" />
                  <ThemeTag theme="Persuasion and rhetoric" />
                  <ThemeTag theme="Unrequited love" />
                </div>
              </SubSection>

              <SubSection title="Comparison Suggestions">
                <ul className="space-y-2 list-none">
                  <ComparisonSuggestion
                    poem="When We Two Parted"
                    reason="Both Romantic poets; Shelley desires union, Byron mourns its loss."
                  />
                  <ComparisonSuggestion
                    poem="Sonnet 29"
                    reason="Both celebrate the power of love, though Shelley's love is unrequited while Barrett Browning's is fulfilled."
                  />
                  <ComparisonSuggestion
                    poem="Singh Song!"
                    reason="Both present love joyfully, though Shelley's is frustrated while Nagra's speakers are happily united."
                  />
                </ul>
              </SubSection>
            </Section>
          </div>

          {/* ───────────────────── 3. Porphyria's Lover ───────────────────── */}
          <div
            id="porphyria-s-lover"
            style={{ display: visiblePoemIds.has('porphyria-s-lover') ? undefined : 'none' }}
          >
            <Section
              id="porphyrias-lover"
              title="Porphyria's Lover"
              poet="Robert Browning (1836)"
              studyHref="/revision/poetry/love-and-relationships/porphyrias-lover"
            >
              <SubSection title="Context">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Robert Browning was a Victorian poet known for his dramatic monologues that
                  explore the psychology of disturbed or morally complex speakers. This poem is one
                  of his earliest, published in 1836. It was written during the Victorian era when
                  strict social hierarchies governed relationships &mdash; Porphyria appears to be
                  of a higher social class. The poem explores obsessive love and the desire to
                  possess another person completely.
                </p>
              </SubSection>

              <SubSection title="Summary">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  On a stormy night, Porphyria visits her lover in his cottage. She lights a fire,
                  sits beside him, and declares her love. The speaker, realising she loves him but
                  cannot fully commit due to social constraints, decides to preserve the perfect
                  moment forever by strangling her with her own hair. He then sits with her corpse
                  all night, noting that &ldquo;God has not said a word,&rdquo; as though expecting
                  divine judgement that does not come.
                </p>
              </SubSection>

              <SubSection title="Form &amp; Structure">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  A dramatic monologue in a single unbroken stanza of 60 lines with an ABABB rhyme
                  scheme. The continuous form mirrors the speaker&apos;s unbroken, obsessive thought
                  process. Enjambment and caesura create an unsettling, conversational rhythm that
                  contrasts with the horrific content. The rhyme scheme is subtly irregular,
                  reflecting the speaker&apos;s unstable mind. The turning point (the murder) comes
                  just past the poem&apos;s centre, in lines 36 to 41.
                </p>
              </SubSection>

              <SubSection title="Key Quotes">
                <div className="space-y-3">
                  <Quote
                    text="The rain set early in to-night, / The sullen wind was soon awake"
                    technique="Pathetic fallacy / personification"
                    analysis="The storm mirrors the speaker's turbulent emotional state. The personification of 'sullen' wind creates a hostile, brooding atmosphere that foreshadows the violence to come."
                  />
                  <Quote
                    text="She shut the cold out and the storm"
                    technique="Symbolism"
                    analysis="Porphyria's arrival literally brings warmth and light, but symbolically she shuts out the speaker's emotional turmoil. This positions her as the source of all comfort, which makes his possessiveness more understandable (though not justified)."
                  />
                  <Quote
                    text="That moment she was mine, mine"
                    technique="Repetition / possessive pronoun"
                    analysis="The repetition of 'mine' reveals the speaker's obsessive desire for ownership. The moment of murder is reframed as a moment of possession, showing how the speaker conflates love with control."
                  />
                  <Quote
                    text="I wound / Three times her little throat around"
                    technique="Enjambment / euphemistic diction"
                    analysis="The enjambment across 'I wound' creates a momentary ambiguity (wound as injury or winding motion). The calm, matter-of-fact diction distances the speaker from the violence, revealing his psychological detachment. 'Little' is chillingly tender."
                  />
                  <Quote
                    text="And yet God has not said a word!"
                    technique="Exclamatory / religious reference"
                    analysis="The final line is deeply unsettling. The speaker expects God's judgement but receives silence, which he interprets as approval. This reveals his complete moral detachment and the depth of his delusion."
                  />
                </div>
              </SubSection>

              <SubSection title="Themes">
                <div className="flex flex-wrap gap-2">
                  <ThemeTag theme="Obsessive love" />
                  <ThemeTag theme="Power and control" />
                  <ThemeTag theme="Madness" />
                  <ThemeTag theme="Gender and possession" />
                </div>
              </SubSection>

              <SubSection title="Comparison Suggestions">
                <ul className="space-y-2 list-none">
                  <ComparisonSuggestion
                    poem="The Farmer's Bride"
                    reason="Both dramatic monologues with male speakers who desire women they cannot truly possess; both explore disturbing power dynamics."
                  />
                  <ComparisonSuggestion
                    poem="Sonnet 29"
                    reason="Contrasts: Barrett Browning presents love as selfless devotion; Browning shows love as violent possession."
                  />
                  <ComparisonSuggestion
                    poem="Singh Song!"
                    reason="Contrasts: Nagra presents a healthy, equal, joyful relationship; Browning presents destructive obsession."
                  />
                </ul>
              </SubSection>
            </Section>
          </div>

          {/* ───────────────────── 4. Sonnet 29 ───────────────────── */}
          <div
            id="sonnet-29"
            style={{ display: visiblePoemIds.has('sonnet-29') ? undefined : 'none' }}
          >
            <Section
              id="sonnet-29"
              title="Sonnet 29 - 'I think of thee!'"
              poet="Elizabeth Barrett Browning (1850)"
              studyHref="/revision/poetry/love-and-relationships/sonnet-29"
            >
              <SubSection title="Context">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Part of Barrett Browning&apos;s <em>Sonnets from the Portuguese</em>, a sequence
                  of 44 love sonnets written during her courtship with Robert Browning. Elizabeth
                  was an invalid dominated by her controlling father; her love for Robert
                  represented liberation and self-assertion. Sonnet 29 explores the intensity of
                  thinking about an absent lover and the superiority of their real presence over
                  mere thoughts.
                </p>
              </SubSection>

              <SubSection title="Summary">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  The speaker describes how her thoughts of her beloved have grown so abundant that
                  they obscure him, like vines covering a tree. She then commands her thoughts to
                  dissolve, because the real, living presence of her lover is more powerful than any
                  imagined version. The poem moves from passive longing to active desire, asserting
                  that lived experience surpasses fantasy.
                </p>
              </SubSection>

              <SubSection title="Form &amp; Structure">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  A Petrarchan sonnet with an octave and sestet. Iambic pentameter gives a steady,
                  heartbeat-like rhythm appropriate for a love poem. The volta (turn) occurs around
                  lines 7&ndash;8, shifting from passive thoughts to an active command for the
                  beloved to appear. Heavy use of enjambment conveys the overwhelming,
                  uncontrollable nature of her thoughts.
                </p>
              </SubSection>

              <SubSection title="Key Quotes">
                <div className="space-y-3">
                  <Quote
                    text="I think of thee! - my thoughts do twine and bud / About thee, as wild vines, about a tree"
                    technique="Extended metaphor / natural imagery"
                    analysis="The vine/tree metaphor presents the beloved as strong and stable (the tree) while the speaker's thoughts grow wild and uncontrolled around him. 'Twine and bud' suggests organic, living growth, making the love feel natural and vital."
                  />
                  <Quote
                    text="Put out broad leaves, and soon there's nought to see / Except the straggling green which hides the wood"
                    technique="Extended metaphor / verb choices"
                    analysis="The thoughts become so prolific they obscure the beloved himself. This suggests that excessive thinking about someone can distort them, replacing reality with fantasy. 'Straggling' implies disorder."
                  />
                  <Quote
                    text="Renew thy presence"
                    technique="Imperative verb / volta"
                    analysis="The imperative marks the poem's volta, shifting from passive longing to active demand. 'Renew' suggests his presence is life-giving, and the speaker takes agency in calling for it."
                  />
                  <Quote
                    text="Rather, instantly / Renew thy presence; as a strong tree should"
                    technique="Enjambment / simile"
                    analysis="The enjambment across the volta physically enacts the urgency of the speaker's desire. The simile reasserts the beloved's strength, aligning him with the natural world."
                  />
                  <Quote
                    text="Because, in this deep joy to see and hear thee / And breathe within thy shadow a new air"
                    technique="Sensory imagery / metaphor"
                    analysis="The listing of senses ('see,' 'hear,' 'breathe') emphasises that physical presence engages the whole body, unlike mere thought. 'Breathe within thy shadow' suggests the beloved's presence is life-sustaining, even his shadow offers renewal."
                  />
                </div>
              </SubSection>

              <SubSection title="Themes">
                <div className="flex flex-wrap gap-2">
                  <ThemeTag theme="Romantic love" />
                  <ThemeTag theme="Desire and longing" />
                  <ThemeTag theme="Nature and growth" />
                  <ThemeTag theme="Female empowerment" />
                </div>
              </SubSection>

              <SubSection title="Comparison Suggestions">
                <ul className="space-y-2 list-none">
                  <ComparisonSuggestion
                    poem="Love's Philosophy"
                    reason="Both use nature to express love; Shelley argues for love, Barrett Browning celebrates existing love."
                  />
                  <ComparisonSuggestion
                    poem="When We Two Parted"
                    reason="Both deal with absent lovers, but Barrett Browning's separation is temporary and hopeful; Byron's is permanent and bitter."
                  />
                  <ComparisonSuggestion
                    poem="Winter Swans"
                    reason="Both show love's power to transform, using natural imagery as central metaphors."
                  />
                </ul>
              </SubSection>
            </Section>
          </div>

          {/* ───────────────────── 5. Neutral Tones ───────────────────── */}
          <div
            id="neutral-tones"
            style={{ display: visiblePoemIds.has('neutral-tones') ? undefined : 'none' }}
          >
            <Section
              id="neutral-tones"
              title="Neutral Tones"
              poet="Thomas Hardy (1867)"
              studyHref="/revision/poetry/love-and-relationships/neutral-tones"
            >
              <SubSection title="Context">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Written when Hardy was 27, this poem reflects on a failed relationship. Hardy
                  would later become known for his pessimistic worldview, exploring how fate and
                  nature are indifferent to human suffering. The poem was likely inspired by his
                  relationship with Tryphena Sparks, though this is debated. It was published in
                  1898 in <em>Wessex Poems</em>.
                </p>
              </SubSection>

              <SubSection title="Summary">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  The speaker recalls standing by a pond on a winter day with a lover. Everything is
                  drained of colour and vitality: the sun is white, the leaves are grey, the smiles
                  are dead. The conversation reveals their love has died. The poem ends by returning
                  to the pond image, showing how this painful memory has become permanently
                  associated with the landscape.
                </p>
              </SubSection>

              <SubSection title="Form &amp; Structure">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Four quatrains with an ABBA rhyme scheme (envelope rhyme). The cyclical structure
                  &mdash; beginning and ending at the pond &mdash; traps the speaker in the painful
                  memory, suggesting they cannot move past it. The regularity of the form contrasts
                  with the emotional devastation, creating an effect of numb control. The
                  &ldquo;neutral&rdquo; title is ironic: nothing here is emotionally neutral.
                </p>
              </SubSection>

              <SubSection title="Key Quotes">
                <div className="space-y-3">
                  <Quote
                    text="We stood by a pond that winter day, / And the sun was white, as though chidden of God"
                    technique="Pathetic fallacy / religious imagery"
                    analysis="The 'white' sun is drained of warmth and colour, mirroring the lifelessness of the relationship. 'Chidden of God' (scolded by God) implies the natural world itself has been punished, suggesting a universe that is hostile or indifferent to love."
                  />
                  <Quote
                    text="And a few leaves lay on the starving sod"
                    technique="Personification / alliteration"
                    analysis="The sibilant alliteration ('starving sod') creates a harsh, unpleasant sound. The personification of 'starving' suggests the earth itself is deprived and dying, reflecting the emotional starvation of the relationship."
                  />
                  <Quote
                    text="Your eyes on me were as eyes that rove / Over tedious riddles of years ago"
                    technique="Simile / semantic field of boredom"
                    analysis="The simile reduces the speaker to a dull puzzle, no longer interesting. 'Tedious' is crushingly dismissive, and 'rove' suggests the lover's gaze is unfocused, no longer engaged. The speaker has become something to look through, not at."
                  />
                  <Quote
                    text="The smile on your mouth was the deadest thing / Alive enough to have strength to die"
                    technique="Oxymoron / paradox"
                    analysis="The oxymoron 'deadest thing alive' creates a disturbing half-life for the smile. The paradox suggests their love exists in a state between life and death, too weak to live but somehow still present enough to cause pain."
                  />
                  <Quote
                    text="And a pond edged with greyish leaves"
                    technique="Cyclical structure / colour imagery"
                    analysis="The return to the pond in the final stanza creates circularity, trapping the speaker in the memory. 'Greyish' is deliberately vague and drained, reflecting how the memory has leached all colour and vitality from the landscape."
                  />
                </div>
              </SubSection>

              <SubSection title="Themes">
                <div className="flex flex-wrap gap-2">
                  <ThemeTag theme="Loss of love" />
                  <ThemeTag theme="Memory and pain" />
                  <ThemeTag theme="Nature's indifference" />
                  <ThemeTag theme="Disillusionment" />
                </div>
              </SubSection>

              <SubSection title="Comparison Suggestions">
                <ul className="space-y-2 list-none">
                  <ComparisonSuggestion
                    poem="When We Two Parted"
                    reason="Both use cold, deathly imagery to convey the end of love; both have cyclical structures suggesting inescapable grief."
                  />
                  <ComparisonSuggestion
                    poem="Winter Swans"
                    reason="Both use nature to reflect on a relationship, but Hardy shows love dying while Sheers shows love recovering."
                  />
                  <ComparisonSuggestion
                    poem="Love's Philosophy"
                    reason="Contrasts: Shelley finds evidence for love in nature, Hardy finds only bleakness and indifference."
                  />
                </ul>
              </SubSection>
            </Section>
          </div>

          {/* ───────────────────── 6. Letters from Yorkshire ───────────────────── */}
          <div
            id="letters-from-yorkshire"
            style={{ display: visiblePoemIds.has('letters-from-yorkshire') ? undefined : 'none' }}
          >
            <Section
              id="letters-yorkshire"
              title="Letters from Yorkshire"
              poet="Maura Dooley (2002)"
              studyHref="/revision/poetry/love-and-relationships/letters-from-yorkshire"
            >
              <SubSection title="Context">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Maura Dooley is a contemporary poet. This poem explores the connection between two
                  people who live very different lives &mdash; one in Yorkshire, connected to the
                  land and seasons, the other presumably in a city, working with words and screens.
                  The poem questions whether a life closer to nature is more authentic and
                  celebrates how communication can bridge distance.
                </p>
              </SubSection>

              <SubSection title="Summary">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  The speaker describes receiving letters from a man in Yorkshire who writes about
                  his daily life: digging the garden, seeing the first lapwings of the year. She
                  contrasts his physical, outdoor life with her own word-based, indoor existence.
                  Despite the distance, the letters create a powerful connection. The poem suggests
                  that true communication transcends physical proximity.
                </p>
              </SubSection>

              <SubSection title="Form &amp; Structure">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Five three-line stanzas of free verse with no regular rhyme scheme, reflecting the
                  conversational, letter-like quality of the poem. The varied line lengths mirror
                  the natural rhythms of thought. The poem alternates between descriptions of his
                  life and her reflections, structurally enacting the back-and-forth of
                  correspondence, and its pronouns move from he, to you, to our in the final stanza.
                  Enjambment connects ideas across lines and stanzas, just as letters connect the
                  two people.
                </p>
              </SubSection>

              {/* Checked on 26 September 2026 against the poem as AQA prints it in
                  its sample anthology (AQA-8702-TG-POEMS, reprinted with Bloodaxe's
                  permission). Three of the five quotations here were corrupted and
                  one was not in the poem at all; each is now a short phrase the
                  analysis discusses, and the invented one is replaced. Cut again
                  the same day: POEM_WORDS records the poem as 148 words, but AQA's
                  text is 120 by the validator's count, so the 21 distinct words
                  these quotations took were over the 15 per cent cap of 18 while
                  the test passed. The first and fourth are now shorter. */}
              <SubSection title="Key Quotes">
                <div className="space-y-3">
                  <Quote
                    text="planting potatoes"
                    technique="Present participles / listing"
                    analysis="The present participles ('digging', 'planting') in the opening line create a sense of ongoing, physical activity. The listing of everyday tasks elevates them, suggesting that simple, purposeful work has dignity and meaning."
                  />
                  <Quote
                    text="the first lapwings"
                    technique="Natural imagery / enjambment"
                    analysis="The return of the lapwings (line 2) marks the turn from winter towards spring, and he notices it and comes inside at once to write to her. The sentence runs on across the line break, as his news runs on from the garden to the page: his letters carry the seasons to her."
                  />
                  <Quote
                    text="heartful of headlines"
                    technique="Alliteration / contrast"
                    analysis="Her own life (line 7) is filled with news rather than soil. The alliterative phrase, a play on a handful, suggests she carries other people's stories while he handles the earth, and the next line sets her at a computer, putting words on a screen: indoor, second-hand work set against his direct contact with the seasons."
                  />
                  <Quote
                    text="more real"
                    technique="Rhetorical question / direct address"
                    analysis="Line 9, addressed directly to him, asks whether his life is more real because of the physical work he does: a pivotal question that challenges assumptions about authentic living. The speaker wrestles with whether physical labour is more 'real' than her work with words. The next line gives his likely answer, that he would not say so, which leaves her doubt about her own life unresolved rather than settled."
                  />
                  <Quote
                    text="our souls tap out messages"
                    technique="Metaphor / spiritual imagery"
                    analysis="In the final line, 'Souls' elevates their communication beyond the mundane, suggesting a deep, spiritual connection. 'Tap out' evokes Morse code and typing, implying their bond is urgent and essential. The line ends by measuring the distance between them in cold miles, so the connection is made across the gap, not by closing it."
                  />
                </div>
              </SubSection>

              <SubSection title="Themes">
                <div className="flex flex-wrap gap-2">
                  <ThemeTag theme="Distance and connection" />
                  <ThemeTag theme="Nature vs modernity" />
                  <ThemeTag theme="Communication" />
                  <ThemeTag theme="Authentic living" />
                </div>
              </SubSection>

              <SubSection title="Comparison Suggestions">
                <ul className="space-y-2 list-none">
                  <ComparisonSuggestion
                    poem="Sonnet 29"
                    reason="Both explore longing for someone absent, and both suggest that connection transcends physical distance."
                  />
                  <ComparisonSuggestion
                    poem="Walking Away"
                    reason="Both reflect on relationships across distance and time; both use nature imagery to frame human connection."
                  />
                  <ComparisonSuggestion
                    poem="Eden Rock"
                    reason="Both present a sense of reaching across a divide to connect with loved ones."
                  />
                </ul>
              </SubSection>
            </Section>
          </div>

          {/* ───────────────────── 7. The Farmer's Bride ───────────────────── */}
          <div
            id="the-farmer-s-bride"
            style={{ display: visiblePoemIds.has('the-farmer-s-bride') ? undefined : 'none' }}
          >
            <Section
              id="farmers-bride"
              title="The Farmer's Bride"
              poet="Charlotte Mew (1916)"
              studyHref="/revision/poetry/love-and-relationships/the-farmers-bride"
            >
              <SubSection title="Context">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Charlotte Mew was a Victorian/Edwardian poet whose work often explores isolation
                  and unfulfilled desire. This dramatic monologue is spoken by a farmer whose young
                  bride has become terrified of him and of physical intimacy. The poem reflects
                  Victorian attitudes to marriage, where wives were essentially property, and the
                  farmer&apos;s frustration reveals the oppressive gender dynamics of the era.
                </p>
              </SubSection>

              <SubSection title="Summary">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  The farmer narrates the story of his young wife who, three years into their
                  marriage, ran away. The community helped him catch her and bring her back. She now
                  lives in the house but avoids him, preferring the company of animals. The farmer
                  describes her beauty with increasing frustration and desire. The final stanza
                  reveals the intensity of his longing, which borders on threat.
                </p>
              </SubSection>

              <SubSection title="Form &amp; Structure">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  A dramatic monologue with irregular stanza lengths and varied rhyme, reflecting
                  the farmer&apos;s agitated, uneven emotional state. The stanzas grow shorter
                  towards the end, building tension and urgency. The pronouns move between the
                  collective &ldquo;we&rdquo; of the chase, when the neighbours hunt her with him,
                  and the farmer&apos;s lone &ldquo;I&rdquo;, which isolates him with his desires.
                  Dialect words (&ldquo;maid,&rdquo; &ldquo;abed&rdquo;) ground the poem in rural
                  life.
                </p>
              </SubSection>

              <SubSection title="Key Quotes">
                <div className="space-y-3">
                  {/* Checked on 26 September 2026 against the AQA sample anthology
                      (AQA-8702-TG-POEMS). This quotation fused two separate lines
                      into one the poem does not have, and the analysis
                      below misquoted the leveret simile; both now follow the text. */}
                  <Quote
                    text="We chased her ... We caught her, fetched her home at last"
                    technique="Short clauses / violent verbs"
                    analysis="The abrupt, monosyllabic clauses mirror the brutal efficiency of the chase. The language of hunting ('chased,' then 'caught' three lines later) reduces the bride to prey, revealing how the community treats her as something to be captured and controlled."
                  />
                  <Quote
                    text="Too young maybe"
                    technique="Caesura / understatement"
                    analysis="This brief aside is one of the poem's most devastating moments. The farmer acknowledges her youth but does not fully reckon with it. The understatement ('maybe') reveals his unwillingness to accept responsibility for the situation."
                  />
                  <Quote
                    text="She does the work about the house / As well as most, but like a mouse"
                    technique="Simile / animal imagery"
                    analysis="The simile compares the bride to a mouse, emphasising her fear, smallness, and silence. Throughout the poem she is associated with animals ('shy as a leveret,' 'like a mouse'), dehumanising her and emphasising the power imbalance."
                  />
                  <Quote
                    text="Her eyes, her hair, her hair!"
                    technique="Repetition / fragmentation"
                    analysis="The repetition of 'her hair' in the final stanza reveals the farmer's obsessive, physical desire spiralling out of control. The exclamation mark and fragmented syntax suggest he is losing his composure, making the ending feel threatening."
                  />
                  <Quote
                    text="Oh! my God! the down, / The soft young down of her"
                    technique="Exclamatory / sensory imagery"
                    analysis="The exclamations mark a loss of control. 'Down' (fine hair/feathers) continues the animal imagery while emphasising her youth and vulnerability. The enjambment across 'the down' isolates the word, lingering on her physical body in a way that feels predatory."
                  />
                </div>
              </SubSection>

              <SubSection title="Themes">
                <div className="flex flex-wrap gap-2">
                  <ThemeTag theme="Desire and frustration" />
                  <ThemeTag theme="Power and gender" />
                  <ThemeTag theme="Isolation" />
                  <ThemeTag theme="Marriage and possession" />
                </div>
              </SubSection>

              <SubSection title="Comparison Suggestions">
                <ul className="space-y-2 list-none">
                  <ComparisonSuggestion
                    poem="Porphyria's Lover"
                    reason="Both dramatic monologues with male speakers who desire women they cannot truly possess. Both end with disturbing implications."
                  />
                  <ComparisonSuggestion
                    poem="Singh Song!"
                    reason="Contrasts: Nagra presents a joyful, equal marriage; Mew presents a marriage defined by fear and power."
                  />
                  <ComparisonSuggestion
                    poem="Neutral Tones"
                    reason="Both present relationships drained of warmth and connection, though Mew adds the dimension of gender-based power."
                  />
                </ul>
              </SubSection>
            </Section>
          </div>

          {/* ───────────────────── 8. Walking Away ───────────────────── */}
          <div
            id="walking-away"
            style={{ display: visiblePoemIds.has('walking-away') ? undefined : 'none' }}
          >
            <Section
              id="walking-away"
              title="Walking Away"
              poet="C. Day-Lewis (1956)"
              studyHref="/revision/poetry/love-and-relationships/walking-away"
            >
              <SubSection title="Context">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  C. Day-Lewis (1904&ndash;1972) was UK Poet Laureate from 1968 until his death. The
                  poem was written in 1956, published in 1962 in <em>The Gate and Other Poems</em>,
                  and is addressed to his eldest son <strong>Sean Day-Lewis</strong> (later a
                  journalist). It recalls a day about eighteen years earlier, when Sean was a young
                  boy playing his first game of football at school. (Note: this is <em>not</em>{' '}
                  Daniel Day-Lewis the actor: Daniel was the poet&apos;s youngest son and was not
                  yet born when the poem was written in 1956.) Written eighteen years after the
                  event, the poem explores how a parent&apos;s love means learning to let go, and
                  how that moment of separation remains vivid and painful years later.
                </p>
              </SubSection>

              <SubSection title="Summary">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  The speaker recalls watching his young son play his first game of football at
                  school, eighteen years earlier, and then drift off towards the school among the
                  other boys. The child looked uncertain, and the father compares him to a satellite
                  forced out of its orbit (lines 4 and 5). The father reflects on how painful it was
                  to let his child go, but acknowledges that love must allow independence. The poem
                  concludes (lines 19 and 20) that a self is formed by leaving, and that love shows
                  itself in releasing: independence requires separation.
                </p>
              </SubSection>

              <SubSection title="Form &amp; Structure">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Four quintains (five-line stanzas), 20 lines in all, with a loose ABACA rhyme
                  scheme. The regular form provides stability, reflecting the parent&apos;s steady,
                  enduring love. The sentence that runs on from the first stanza into the second
                  mimics the ongoing, unresolved nature of parental anxiety. The poem moves from the
                  specific memory (stanzas 1 and 2), through the image of the seed (stanza 3), to
                  broader philosophical reflection (stanza 4), showing how the father has processed
                  the experience over time.
                </p>
              </SubSection>

              {/* Checked on 26 September 2026 against the poem as AQA printed it in
                  full in the June 2020 GCSE English Literature Paper 2 (8702/2). This
                  section once quoted 42 distinct words of a 20-line poem, and said it
                  had five stanzas (it has four) and that Sean was 18 at the time (the
                  poem looks back eighteen years to his childhood). Each quotation is
                  now the phrase its analysis discusses. */}
              <SubSection title="Key Quotes">
                <div className="space-y-3">
                  <Quote
                    text="Wrenched from its orbit"
                    technique="Simile / violent verb"
                    analysis="The simile across lines 4 and 5 compares the boy to a satellite: the space imagery suggests the child was once in the parent's gravitational pull. 'Wrenched' is a violent, painful verb, conveying the force required to let go. The child must leave the parent's orbit to find their own path."
                  />
                  <Quote
                    text="winged seed"
                    technique="Simile / natural imagery"
                    analysis="This organic simile (line 12) presents separation as natural and necessary for growth. The seed is loosened from the plant that bore it rather than torn away: unlike 'wrenched,' this image is gentler, suggesting the father is coming to terms with the separation. The seed must leave to grow into something new."
                  />
                  <Quote
                    text="selfhood begins with a walking away"
                    technique="Philosophical statement / title echo"
                    analysis="The poem's central message (line 19): identity requires independence. 'Selfhood' is a weighty, abstract noun that elevates the everyday moment of a child leaving into something existentially significant, and the line ends by echoing the title."
                  />
                  <Quote
                    text="the letting go"
                    technique="Paradox / concluding aphorism"
                    analysis="The poem's final line (line 20) is a paradox: true love is demonstrated not by holding on, but by releasing. This inverts the expected definition of love (as closeness) and redefines it as the courage to allow freedom."
                  />
                  <Quote
                    text="I can see"
                    technique="Present tense / enjambment"
                    analysis="Although describing a past event, the present tense of line 6 makes the memory vivid and immediate, suggesting it has never faded. The sentence runs on into line 7, where the boy heads off to school, and the line break mimics the act of watching and the reluctance to let the moment go."
                  />
                </div>
              </SubSection>

              <SubSection title="Themes">
                <div className="flex flex-wrap gap-2">
                  <ThemeTag theme="Parent-child love" />
                  <ThemeTag theme="Letting go" />
                  <ThemeTag theme="Memory" />
                  <ThemeTag theme="Growth and independence" />
                </div>
              </SubSection>

              <SubSection title="Comparison Suggestions">
                <ul className="space-y-2 list-none">
                  <ComparisonSuggestion
                    poem="Mother, Any Distance"
                    reason="Both explore parent-child separation, but from opposite perspectives: parent watching child leave vs. child leaving parent."
                  />
                  <ComparisonSuggestion
                    poem="Follower"
                    reason="Both about father-child relationships; both explore how roles change over time."
                  />
                  <ComparisonSuggestion
                    poem="Eden Rock"
                    reason="Both parents reflecting on family bonds; Walking Away is about separation in life, Eden Rock about separation through death."
                  />
                </ul>
              </SubSection>
            </Section>
          </div>

          {/* ───────────────────── 9. Eden Rock ───────────────────── */}
          <div
            id="eden-rock"
            style={{ display: visiblePoemIds.has('eden-rock') ? undefined : 'none' }}
          >
            <Section
              id="eden-rock"
              title="Eden Rock"
              poet="Charles Causley (1988)"
              studyHref="/revision/poetry/love-and-relationships/eden-rock"
            >
              <SubSection title="Context">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Charles Causley was a Cornish poet who wrote this poem late in life, after both
                  his parents had died. His father died when Causley was young, and his mother
                  later. The poem imagines a reunion with his parents in an idealised, Eden-like
                  landscape. Eden Rock is usually read as an invented threshold place rather than
                  one on a map: its name joins the biblical Eden to the Cornish landscape Causley
                  grew up in. The poem is widely read as being about approaching death.
                </p>
              </SubSection>

              <SubSection title="Summary">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  The speaker describes his parents at a picnic by a stream, depicted with precise,
                  loving detail: his mother&apos;s hair, his father&apos;s suit, the specific items
                  in the picnic. His parents beckon him to cross the stream to join them. The final
                  line (line 20), set apart on its own, suggests the speaker is approaching death
                  and finding it calmer and more peaceful than expected.
                </p>
              </SubSection>

              <SubSection title="Form &amp; Structure">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Four quatrains, a three-line stanza and a single final line, 20 lines in all, held
                  together by a loose ABAB pattern of half-rhymes rather than written in free verse.
                  The precise, concrete details (his mother&apos;s exact age and the pattern of her
                  dress, line 5) create a hyper-real quality that paradoxically makes the scene feel
                  dreamlike. The final single-line stanza stands alone, separated like the speaker
                  from his parents, or like the boundary between life and death. The calm, measured
                  tone creates serenity rather than grief.
                </p>
              </SubSection>

              {/* Checked on 26 September 2026 against the Poetry Archive text
                  (poetryarchive.org/poem/eden-rock, used by permission of the
                  Causley Estate) and the AQA sample anthology. This section once
                  quoted five whole lines, 54 distinct words, called the poem free
                  verse, and printed a remark attributed to Causley that no source
                  found could confirm. Each quotation is now the phrase its
                  analysis discusses. */}
              <SubSection title="Key Quotes">
                <div className="space-y-3">
                  <Quote
                    text="somewhere beyond Eden Rock"
                    technique="Biblical allusion / spatial metaphor"
                    analysis="'Eden' evokes paradise, suggesting the afterlife. 'Beyond' implies something past the boundary of the known world. The present tense of the opening line makes the vision feel real and ongoing, as though his parents genuinely exist somewhere, waiting for him."
                  />
                  <Quote
                    text="My mother, twenty-three"
                    technique="Precise detail / present tense"
                    analysis="The specific age, and the 'sprigged dress' that follows in line 5, create a photograph-like clarity. By presenting his mother at 23, Causley restores her to youth, reversing time and death. The present tense of the stanza makes the past feel eternally present."
                  />
                  <Quote
                    text="lit by three suns"
                    technique="Simile / light imagery"
                    analysis="The simile in line 13, as the sky whitens, suggests something supernatural or transcendent. 'Three suns' creates an otherworldly atmosphere, moving the poem from realistic memory into visionary territory. The whiteness may represent the threshold between life and death."
                  />
                  <Quote
                    text="the same suit"
                    technique="Specific detail / parallelism"
                    analysis="Line 2 gives the father's age and clothing in the same pattern as the mother's description ('My mother, twenty-three') three lines later, creating symmetry and completeness. 'The same suit' suggests this is a perfect, unchanging memory, fixed forever at a specific moment."
                  />
                  <Quote
                    text="it would be like this"
                    technique="Understatement / ambiguity"
                    analysis="The poem's final line (line 20) is deliberately ambiguous. 'This' could refer to death, the afterlife, or the experience of memory. The understatement, no grand emotion, just quiet surprise, makes the moment deeply moving. The past perfect that opens the line suggests the crossing has already begun."
                  />
                </div>
              </SubSection>

              <SubSection title="Themes">
                <div className="flex flex-wrap gap-2">
                  <ThemeTag theme="Family love" />
                  <ThemeTag theme="Memory and nostalgia" />
                  <ThemeTag theme="Death and the afterlife" />
                  <ThemeTag theme="Innocence and paradise" />
                </div>
              </SubSection>

              <SubSection title="Comparison Suggestions">
                <ul className="space-y-2 list-none">
                  <ComparisonSuggestion
                    poem="Walking Away"
                    reason="Both parents and children connected across time; Walking Away is about living separation, Eden Rock about separation through death."
                  />
                  <ComparisonSuggestion
                    poem="Follower"
                    reason="Both explore father-child relationships and the passage of time, with memory central to both poems."
                  />
                  <ComparisonSuggestion
                    poem="Before You Were Mine"
                    reason="Both speakers reimagine parents at a younger age, using memory to collapse time."
                  />
                </ul>
              </SubSection>
            </Section>
          </div>

          {/* ───────────────────── 10. Follower ───────────────────── */}
          <div
            id="follower"
            style={{ display: visiblePoemIds.has('follower') ? undefined : 'none' }}
          >
            <Section
              id="follower"
              title="Follower"
              poet="Seamus Heaney (1966)"
              studyHref="/revision/poetry/love-and-relationships/follower"
            >
              <SubSection title="Context">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Seamus Heaney grew up on a farm in rural Northern Ireland. Much of his poetry
                  draws on his childhood, farming life, and the Irish landscape.
                  &ldquo;Follower&rdquo; explores his relationship with his father, Patrick Heaney,
                  a skilled ploughman. The poem charts the shift from childhood admiration to adult
                  guilt as the father ages and the roles reverse. Heaney won the Nobel Prize in
                  Literature in 1995.
                </p>
              </SubSection>

              <SubSection title="Summary">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  The speaker remembers following his father as he ploughed the fields, admiring his
                  skill and strength. The young Heaney stumbled behind, wanting to be just like his
                  father but always falling short: in the fifth stanza he says he longed to become a
                  ploughman himself, yet all he managed was to trail behind. The poem&apos;s final
                  stanza reverses the relationship: now the ageing father follows the adult son, and
                  the speaker feels the burden of this role reversal, closing on a blunt, guilty
                  admission in the last line (line 24).
                </p>
              </SubSection>

              <SubSection title="Form &amp; Structure">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Six quatrains rhyming ABAB, mixing full rhymes with half-rhymes. The regular,
                  sturdy form mirrors the disciplined, rhythmic work of ploughing. The poem is
                  structured chronologically, with the final stanza creating a sudden reversal.
                  Half-rhymes (&ldquo;plough/follow&rdquo;, lines 17 and 19;
                  &ldquo;sock/pluck&rdquo;, lines 6 and 8) create a sense of things not quite
                  fitting together, reflecting the son&apos;s inability to match his father.
                </p>
              </SubSection>

              <SubSection title="Key Quotes">
                <div className="space-y-3">
                  <Quote
                    text="globed like a full sail strung"
                    technique="Simile / visual imagery"
                    analysis="The nautical simile in line 2 presents the father's shoulders as powerful and commanding, swelling like the sail of a ship. The verb 'globed' emphasises the rounded, muscular physicality of his body. The father is presented as heroic and larger-than-life through the child's admiring gaze."
                  />
                  <Quote
                    text="An expert."
                    technique="Minor sentence / technical vocabulary"
                    analysis="The two-word sentence that opens the second stanza (line 5) is a direct, emphatic declaration of admiration. The rest of the stanza names the parts of the plough and the 'headrig', the strip at the end of the field where the team turns, showing the father's expertise and the speaker's deep familiarity with his world."
                  />
                  <Quote
                    text="hob-nailed wake"
                    technique="Nautical metaphor / verb choice"
                    analysis="'Wake' (line 13) continues the nautical imagery, placing the father as a great ship and the child bobbing behind in the track of his heavy boots. The verb 'stumbled' in the same line emphasises the child's clumsiness and inability to keep up, creating a poignant gap between aspiration and reality."
                  />
                  <Quote
                    text="keeps stumbling ... will not go away"
                    technique="Role reversal / volta"
                    analysis="The devastating final reversal (lines 23 to 24) reuses the verb of line 13, now applied to the father, completing the role reversal. The last clause is deliberately ambiguous: it conveys both the father's physical persistence and the speaker's guilt, which will not leave him."
                  />
                </div>
              </SubSection>

              <SubSection title="Themes">
                <div className="flex flex-wrap gap-2">
                  <ThemeTag theme="Admiration and respect" />
                  <ThemeTag theme="Family and ageing" />
                  <ThemeTag theme="Role reversal" />
                  <ThemeTag theme="Guilt and responsibility" />
                </div>
              </SubSection>

              <SubSection title="Comparison Suggestions">
                <ul className="space-y-2 list-none">
                  <ComparisonSuggestion
                    poem="Walking Away"
                    reason="Both explore parent-child bonds with changing roles; both use physical imagery to convey emotional truths."
                  />
                  <ComparisonSuggestion
                    poem="Climbing My Grandfather"
                    reason="Both present children admiring strong, physical grandfather/father figures. Both use extended physical metaphors."
                  />
                  <ComparisonSuggestion
                    poem="Mother, Any Distance"
                    reason="Both about parent-child relationships and the tension between connection and independence."
                  />
                </ul>
              </SubSection>
            </Section>
          </div>

          {/* ───────────────────── 11. Mother, Any Distance ───────────────────── */}
          <div
            id="mother--any-distance"
            style={{ display: visiblePoemIds.has('mother--any-distance') ? undefined : 'none' }}
          >
            <Section
              id="mother-any-distance"
              title="Mother, Any Distance"
              poet="Simon Armitage (1993)"
              studyHref="/revision/poetry/love-and-relationships/mother-any-distance"
            >
              <SubSection title="Context">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Simon Armitage is a contemporary Yorkshire-born poet and the UK Poet Laureate
                  since May 2019 (succeeding Carol Ann Duffy, 2009-2019). He originally trained as a
                  probation officer and is now a professor at Leeds University. (Although his work
                  includes war poems such as <em>Remains</em> and <em>The Manhunt</em>, Armitage
                  never served in any military or combat role - those poems are based on interviews
                  with veterans.) This poem comes from his collection <em>Book of Matches</em>,
                  where each poem is designed to be read in the time it takes a match to burn. The
                  poem describes a son measuring up a new house with his mother&apos;s help, using
                  the tape measure as a metaphor for the bond between parent and child as the child
                  gains independence.
                </p>
              </SubSection>

              <SubSection title="Summary">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  The speaker asks his mother to help him measure his new home using a tape measure.
                  She holds the end of the tape at the starting point (line 5) while he walks
                  further and further away, up the stairs, to the loft. The tape measure becomes a
                  metaphor for the umbilical cord connecting them. As he reaches a hatch in the
                  roof, with nothing but sky beyond it, he is at the point of breaking free, caught
                  between the safety of his mother and the freedom of the open air.
                </p>
              </SubSection>

              <SubSection title="Form &amp; Structure">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  An extended sonnet of 15 lines (one line beyond the traditional 14), reflecting
                  how the speaker stretches beyond the conventional form just as he stretches beyond
                  his mother&apos;s reach. The near-sonnet form connects the poem to the tradition
                  of love poetry. The poem moves spatially upward through the house (rooms, stairs,
                  loft, the hatch to the sky), mirroring the child&apos;s growth toward
                  independence.
                </p>
              </SubSection>

              <SubSection title="Key Quotes">
                <div className="space-y-3">
                  <Quote
                    text="a single span"
                    technique="Direct address / metaphor"
                    analysis="The opening line directly addresses the mother, establishing intimacy. The practical observation about measuring becomes a metaphor: for any significant life distance, the speaker still needs his mother's help, the extra pair of hands the second line asks for. A span is the width of an outstretched hand, and the word also suggests a lifespan."
                  />
                  <Quote
                    text="zero-end"
                    technique="Spatial metaphor"
                    analysis="In line 5 the mother holds the 'zero-end' of the tape - the starting point, the origin. The speaker moves away with the 'spool', which can extend but is still connected. This precisely captures the parent-child dynamic: she is the fixed foundation; he is the explorer."
                  />
                  <Quote
                    text="Anchor. Kite."
                    technique="Single-word sentences / metaphor"
                    analysis="These two stripped-back metaphors are the poem's most powerful moment. The mother is the 'anchor' (steady, grounding, safe) and the child is the 'kite' (soaring, free, but tethered). The full stop between them enacts the tension between connection and separation."
                  />
                  <Quote
                    text="space-walk"
                    technique="Metaphor / verb choice"
                    analysis="In line 9 the son moves through the empty rooms of the new house like an astronaut on a space-walk, exploring unknown territory and making the new home feel alien and exciting. It also implies weightlessness and vulnerability, with the tape unwinding behind him as his lifeline."
                  />
                  <Quote
                    text="to fall or fly"
                    technique="Alliteration / antithesis"
                    analysis="The alliterative pair in the last line (line 15) encapsulates the poem's central tension: independence brings both the possibility of failure ('fall') and freedom ('fly'). The ambiguity is deliberate - the outcome is uncertain, and that uncertainty is the cost of growing up."
                  />
                </div>
              </SubSection>

              <SubSection title="Themes">
                <div className="flex flex-wrap gap-2">
                  <ThemeTag theme="Parent-child bond" />
                  <ThemeTag theme="Independence" />
                  <ThemeTag theme="Growing up" />
                  <ThemeTag theme="Security vs freedom" />
                </div>
              </SubSection>

              <SubSection title="Comparison Suggestions">
                <ul className="space-y-2 list-none">
                  <ComparisonSuggestion
                    poem="Walking Away"
                    reason="Both explore parent-child separation, from opposite perspectives. Both end with the tension of letting go."
                  />
                  <ComparisonSuggestion
                    poem="Before You Were Mine"
                    reason="Both Armitage and Duffy write about their mothers, exploring the complex dynamics of parent-child love."
                  />
                  <ComparisonSuggestion
                    poem="Follower"
                    reason="Both use physical, practical activities as metaphors for parent-child relationships and changing roles."
                  />
                </ul>
              </SubSection>
            </Section>
          </div>

          {/* ───────────────────── 12. Before You Were Mine ───────────────────── */}
          <div
            id="before-you-were-mine"
            style={{ display: visiblePoemIds.has('before-you-were-mine') ? undefined : 'none' }}
          >
            <Section
              id="before-you-were-mine"
              title="Before You Were Mine"
              poet="Carol Ann Duffy (1993)"
              studyHref="/revision/poetry/love-and-relationships/before-you-were-mine"
            >
              <SubSection title="Context">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Carol Ann Duffy was the first female Poet Laureate. This poem imagines her
                  mother&apos;s life before she became a parent, using old photographs as a starting
                  point. Duffy reimagines her mother as a glamorous, carefree young woman and
                  expresses a possessive, retrospective longing for a version of her mother she
                  never knew. The title reverses the usual parent-child dynamic: it is the child who
                  claims to own the parent.
                </p>
              </SubSection>

              <SubSection title="Summary">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  The speaker imagines her mother ten years before her birth: laughing with friends
                  on a Glasgow street, dancing, being glamorous. She contrasts this carefree youth
                  with the reality of motherhood, suggesting that becoming a parent meant her mother
                  lost some of her sparkle. The poem is possessive: the speaker repeatedly claims
                  her mother (the title&apos;s phrase returns in lines 9 and 20) and suggests that
                  even before birth, the mother somehow belonged to the future child.
                </p>
              </SubSection>

              <SubSection title="Form &amp; Structure">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Four quintains (five-line stanzas) in free verse, each stanza roughly
                  corresponding to a different time period or photograph. The poem moves
                  non-chronologically, jumping between past and present, mimicking how we browse
                  photographs. The consistent use of second-person address throughout creates
                  intimacy and a sense of direct address, as though speaking to the photograph.
                </p>
              </SubSection>

              <SubSection title="Key Quotes">
                <div className="space-y-3">
                  <Quote
                    text="I'm ten years away"
                    technique="Temporal distortion / spatial metaphor"
                    analysis="The opening line describes time as physical distance, as though the speaker is approaching through space towards the street corner where her mother stands laughing with her friends. 'Ten years away' suggests the child is already moving toward existence, creating a sense of fate and inevitability."
                  />
                  <Quote
                    text="loud, possessive yell"
                    technique="Colloquial language / self-awareness"
                    analysis="Line 11 gives a strikingly honest description of a baby's cry, acknowledging that the child's arrival was demanding and possessive. The line ends on the colloquial question tag 'eh?', as the speaker asks whether the decade before her birth was her mother's best, which creates an intimate, conversational tone. The speaker recognises that motherhood cost her mother something."
                  />
                  <Quote
                    text="polka-dot dress"
                    technique="Pop culture allusion / visual imagery"
                    analysis="Line 5 ends on the single name 'Marilyn', comparing the mother to Marilyn Monroe and elevating her to iconic status. The dress caught by the wind recalls the famous image of Monroe's skirt billowing over a subway grating, presenting the mother as glamorous and desirable - an identity she had before becoming simply a mother."
                  />
                  <Quote
                    text="I knew you would dance"
                    technique="Dramatic irony / temporal manipulation"
                    analysis="At the end of line 8 the speaker claims knowledge of her mother's past self from a position of future existence, creating an eerie temporal collapse. It asserts a deep, almost supernatural connection between mother and child."
                  />
                  <Quote
                    text="I wanted the bold girl"
                    technique="Possessive desire / enjambment"
                    analysis="The line before ends on 'Even then', which implies the speaker's possessive love existed before she was born, both tender and unsettling; the line break makes the reader wait to learn what she wanted. Line 18 then places the young, confident mother at Portobello, the seaside at Edinburgh, before running on into the next line. The speaker wants the young, bold version of her mother."
                  />
                </div>
              </SubSection>

              <SubSection title="Themes">
                <div className="flex flex-wrap gap-2">
                  <ThemeTag theme="Mother-daughter love" />
                  <ThemeTag theme="Memory and nostalgia" />
                  <ThemeTag theme="Possession and identity" />
                  <ThemeTag theme="The cost of parenthood" />
                </div>
              </SubSection>

              <SubSection title="Comparison Suggestions">
                <ul className="space-y-2 list-none">
                  <ComparisonSuggestion
                    poem="Eden Rock"
                    reason="Both reimagine parents at a younger age, using memory/imagination to collapse time and restore them to their youth."
                  />
                  <ComparisonSuggestion
                    poem="Mother, Any Distance"
                    reason="Both children writing about their mothers, exploring love, dependency, and the complex dynamics of the relationship."
                  />
                  <ComparisonSuggestion
                    poem="Walking Away"
                    reason="Contrasts: Day-Lewis writes from the parent's perspective; Duffy writes from the child's. Both explore the sacrifices of parenthood."
                  />
                </ul>
              </SubSection>
            </Section>
          </div>

          {/* ───────────────────── 13. Winter Swans ───────────────────── */}
          <div
            id="winter-swans"
            style={{ display: visiblePoemIds.has('winter-swans') ? undefined : 'none' }}
          >
            <Section
              id="winter-swans"
              title="Winter Swans"
              poet="Owen Sheers (2005)"
              studyHref="/revision/poetry/love-and-relationships/winter-swans"
            >
              <SubSection title="Context">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Owen Sheers is a Welsh poet. This poem describes a couple walking by a lake after
                  an argument, who observe swans and find reconciliation in the natural world. Swans
                  are traditionally symbols of lifelong fidelity (they mate for life), and the poem
                  uses this symbolism to suggest that the couple&apos;s bond, though strained, is
                  enduring. The poem comes from his 2005 collection <em>Skirrid Hill</em>, named
                  after a mountain in Monmouthshire whose Welsh name, Ysgyryd, is traced to a word
                  meaning divorce or separation.
                </p>
              </SubSection>

              <SubSection title="Summary">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  After two days of rain (and implied arguments), a couple walk silently by a lake.
                  They observe swans tipping their bodies into the water and resurfacing. The sight
                  of the swans prompts a reconnection: the couple&apos;s hands eventually find each
                  other and fold together, and the final line compares them to a bird&apos;s wings
                  at rest (line 20). The poem traces a journey from distance and tension to quiet
                  reconciliation.
                </p>
              </SubSection>

              <SubSection title="Form &amp; Structure">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Mostly tercets (three-line stanzas) with a final couplet. The tercets create an
                  uneven, off-balance feeling &mdash; like the couple&apos;s relationship. The shift
                  to a couplet at the end symbolises the couple coming back together: two lines
                  united, just as two people reunite. Enjambment throughout mirrors the continuous,
                  flowing movement of the walk and the gradual process of reconciliation.
                </p>
              </SubSection>

              <SubSection title="Key Quotes">
                <div className="space-y-3">
                  <Quote
                    text="a break"
                    technique="Pathetic fallacy / double meaning"
                    analysis="The weather mirrors the relationship. The opening line personifies the clouds as having exhausted themselves, and the rain that has lasted two days suggests a period of emotional turmoil. The pause that ends line 2 is ambiguous: both a break in the weather and a break in the relationship."
                  />
                  <Quote
                    text="gulping for breath"
                    technique="Personification / enjambment"
                    analysis="The sodden ground is personified as struggling to breathe, mirroring the couple's emotional suffocation during their argument. The line breaks just before this phrase (lines 4 to 5), so the reader pauses as if catching a breath."
                  />
                  <Quote
                    text="icebergs of white feather"
                    technique="Metaphor / visual imagery"
                    analysis="As the swans tip under, the previous line describes them as 'halved' by the water (line 10): half visible, half hidden, like the couple, who have hidden emotions beneath the surface. The iceberg metaphor in line 11 reinforces this: there is much more beneath the surface than is visible."
                  />
                  <Quote
                    text="a pair of wings"
                    technique="Simile / structural shift"
                    analysis="The final simile (line 20) compares their joined hands to wings, connecting them to the swans. Just before it, in line 17, the speaker notices that their hands had 'somehow' crossed the gap between them, which suggests the reconnection was unconscious and natural, not forced. 'Settling after flight' implies the turbulence is over. The couplet form (after tercets) physically enacts the coming together."
                  />
                </div>
              </SubSection>

              <SubSection title="Themes">
                <div className="flex flex-wrap gap-2">
                  <ThemeTag theme="Reconciliation" />
                  <ThemeTag theme="Nature and love" />
                  <ThemeTag theme="Healing" />
                  <ThemeTag theme="Unspoken communication" />
                </div>
              </SubSection>

              <SubSection title="Comparison Suggestions">
                <ul className="space-y-2 list-none">
                  <ComparisonSuggestion
                    poem="Neutral Tones"
                    reason="Both use nature to reflect on a relationship, but Hardy shows love dying while Sheers shows it recovering."
                  />
                  <ComparisonSuggestion
                    poem="Sonnet 29"
                    reason="Both present love as powerful and transformative, using natural imagery as their central vehicle."
                  />
                  <ComparisonSuggestion
                    poem="Letters from Yorkshire"
                    reason="Both explore quiet, understated forms of connection, finding meaning in shared experience rather than grand gestures."
                  />
                </ul>
              </SubSection>
            </Section>
          </div>

          {/* ───────────────────── 14. Singh Song! ───────────────────── */}
          <div
            id="singh-song-"
            style={{ display: visiblePoemIds.has('singh-song-') ? undefined : 'none' }}
          >
            <Section
              id="singh-song"
              title="Singh Song!"
              poet="Daljit Nagra (2007)"
              studyHref="/revision/poetry/love-and-relationships/singh-song"
            >
              <SubSection title="Context">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Daljit Nagra is a British poet of Punjabi heritage. This poem explores the dual
                  identity of a British-Indian shopkeeper who balances running his father&apos;s
                  corner shop with his love for his new wife. The poem celebrates cultural
                  hybridity, using phonetic Punjabi-English to capture the vitality of a
                  multicultural Britain. The exclamation mark in the title suggests joy and energy.
                  &ldquo;Singh&rdquo; puns on &ldquo;sing&rdquo; &mdash; this is literally a song of
                  love.
                </p>
              </SubSection>

              <SubSection title="Summary">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  The speaker is a young shopkeeper who repeatedly leaves his father&apos;s shop
                  unattended to be with his new wife upstairs. Customers complain about the state of
                  the shop, but the speaker doesn&apos;t care &mdash; his wife is more important.
                  The poem alternates between the complaints of customers (in italics) and the
                  speaker&apos;s joyful descriptions of his wife and their love. The poem ends with
                  the couple sitting in the shop at midnight, looking at the moon, completely
                  absorbed in each other.
                </p>
              </SubSection>

              <SubSection title="Form &amp; Structure">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Free verse with irregular, comic rhyme rather than a fixed scheme, and a strong
                  musicality created by phonetic spelling and repetition. The alternation between
                  the customers&apos; complaints (italicised) and the speaker&apos;s voice creates a
                  comic, rhythmic contrast. The poem&apos;s structure mirrors the speaker&apos;s
                  life: shuttling between shop duties and love. Refrains create a song-like quality,
                  fitting the title: the shoppers&apos; question returns at lines 12 and 37, the
                  same two words introduce the bride three times (lines 22, 27 and 30), and four
                  closing couplets open with the same phrase (lines 51 to 57).
                </p>
              </SubSection>

              <SubSection title="Key Quotes">
                <div className="space-y-3">
                  <Quote
                    text="just one ov my daddy's shops"
                    technique="Colloquial diction / phonetic spelling"
                    analysis="The opening line establishes family duty at once. The informal 'daddy's' is affectionate but also points to the father's authority, and 'just one' hints that the father owns several shops, so the son runs only one part of a family business. The phonetic 'ov' puts the speaker's Punjabi-English voice on the page from the start."
                  />
                  <Quote
                    text="Hey Singh, ver yoo bin?"
                    technique="Phonetic spelling / comic chorus"
                    analysis="The shoppers' question (lines 12 and 37) is spelt as they speak it, so the whole multicultural community is heard, not just the speaker. Each time it is followed by a list of the shop's failings: lemons that are really limes, bananas that are plantain, a dirty floor, out-of-date milk and stale bread. The italicised chorus is comic, setting worldly complaints against the speaker's romantic priorities."
                  />
                  <Quote
                    text="in all di colours of Punjabi"
                    technique="Metaphor / humour"
                    analysis="Introduced by the refrain 'my bride' (line 22), the wife swears at his mother (line 23), which is both shocking and comic. The speaker does not condemn her: 'all di colours' turns her anger into something vibrant, almost a rainbow of language. She is rebellious and unconventional, challenging the expectations placed on a daughter-in-law."
                  />
                  <Quote
                    text="she wear a Tartan sari"
                    technique="Juxtaposition / cultural hybridity"
                    analysis="The bride wears Scottish tartan made into an Indian sari (line 32), and the same stanza gives her a red crew cut and a donkey jacket. The image joins British and Indian cultures in one garment, so she embodies the mixed identity the poem celebrates. The speaker lists her unconventional style with delight, not embarrassment."
                  />
                  <Quote
                    text="Is priceless baby"
                    technique="Refrain / the language of the shop"
                    analysis="The poem ends with four couplets (lines 51 to 58) in which the bride asks the price of the moon and the speaker answers in the shop's language of prices, valuing it at half of what she is worth. When she asks for the total, his last answer puts her beyond price, so love outweighs every complaint about the shop. The closing refrain gives the poem the shape of a song, fitting the title."
                  />
                </div>
              </SubSection>

              <SubSection title="Themes">
                <div className="flex flex-wrap gap-2">
                  <ThemeTag theme="Joyful love" />
                  <ThemeTag theme="Cultural identity" />
                  <ThemeTag theme="Duty vs desire" />
                  <ThemeTag theme="Multicultural Britain" />
                </div>
              </SubSection>

              <SubSection title="Comparison Suggestions">
                <ul className="space-y-2 list-none">
                  <ComparisonSuggestion
                    poem="Love's Philosophy"
                    reason="Both celebrate love's power; Shelley's is frustrated, Nagra's is fulfilled and joyful."
                  />
                  <ComparisonSuggestion
                    poem="The Farmer's Bride"
                    reason="Stark contrast: Nagra shows a joyful, equal marriage; Mew shows a marriage defined by fear and imbalance."
                  />
                  <ComparisonSuggestion
                    poem="Letters from Yorkshire"
                    reason="Both explore how relationships exist within the context of everyday working life."
                  />
                </ul>
              </SubSection>
            </Section>
          </div>

          {/* ───────────────────── 15. Climbing My Grandfather ───────────────────── */}
          <div
            id="climbing-my-grandfather"
            style={{ display: visiblePoemIds.has('climbing-my-grandfather') ? undefined : 'none' }}
          >
            <Section
              id="climbing-grandfather"
              title="Climbing My Grandfather"
              poet="Andrew Waterhouse (2000)"
              studyHref="/revision/poetry/love-and-relationships/climbing-my-grandfather"
            >
              <SubSection title="Context">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Andrew Waterhouse was a British poet and environmentalist who died in 2001. This
                  poem is from his first collection, <em>In</em> (2000). It uses an extended
                  metaphor of mountain climbing to describe exploring and understanding his
                  grandfather. The grandfather is presented as a vast, awe-inspiring landscape to be
                  scaled, suggesting the child&apos;s sense of the grandfather as monumental and
                  enduring. The poem is a celebration of familial love and the desire to truly know
                  another person.
                </p>
              </SubSection>

              <SubSection title="Summary">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  The speaker describes climbing their grandfather as though he were a mountain.
                  Starting at his shoes, the speaker scrambles up his trousers, traverses his belt
                  to his hand, and climbs on by his arm, shoulder, neck, mouth, cheek and eyes to
                  his forehead and hair, using his nails, the stitches of an old scar and his
                  wrinkles as holds. The journey ends at the summit, the grandfather&apos;s head,
                  where the breathless speaker lies feeling his warmth and his heartbeat (lines 24
                  to 27). The climb represents getting to know someone deeply.
                </p>
              </SubSection>

              <SubSection title="Form &amp; Structure">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  A single continuous stanza of 27 lines in free verse, reflecting the unbroken,
                  sustained effort of the climb. The lack of stanza breaks mirrors the continuous,
                  intimate journey of exploring the grandfather. The poem moves logically upward
                  through the body, creating spatial coherence, and the present tense makes the
                  climb happen as we read. Enjambment propels the reader forward, mimicking the
                  climber&apos;s momentum. The last sentence runs unbroken from the forehead to the
                  summit (lines 20 to 27) and closes with a full stop on the heart: the climb ends
                  in rest and in knowing him.
                </p>
              </SubSection>

              <SubSection title="Key Quotes">
                <div className="space-y-3">
                  <Quote
                    text="without a rope or net"
                    technique="Climbing metaphor / risk"
                    analysis="The first line announces a free climb, without safety equipment, which implies vulnerability and trust. The speaker approaches the relationship without defences, willing to take emotional risks. This suggests that true intimacy requires openness and courage."
                  />
                  <Quote
                    text="earth-stained hand"
                    technique="Visual detail / metaphor"
                    analysis="The grandfather's hand (line 7) carries the soil of a working life, so the mountain he has become is literally made of earth. The detail connects him to the land, suggesting he is rooted, natural and enduring, and his broken nails offer the climber a grip (line 8)."
                  />
                  <Quote
                    text="like warm ice"
                    technique="Oxymoron / tactile imagery"
                    analysis="The simile describing the skin of his finger (lines 9 and 10) is an oxymoron: ice is hard and cold, yet this ice is warm. It captures the grandfather's combination of toughness and tenderness, a hard surface with warmth beneath it."
                  />
                  <Quote
                    text="still firm shoulder"
                    technique="Adjective choice"
                    analysis="'Still firm' works on two levels: the shoulder (line 13) is physically strong enough to rest on, and it is 'still' firm despite his age. This quiet acknowledgement of ageing within a celebration of strength is deeply moving. The speaker rests here before going on, aware of the risk of falling."
                  />
                  <Quote
                    text="his good heart"
                    technique="Tactile imagery / ending"
                    analysis="At the summit, out of breath, the speaker feels the grandfather's warmth and his steady, slow heartbeat (lines 26 and 27). The climb ends not at the top of his head but at his heart: to know him fully is to know his character. 'Good' is a simple, childlike adjective that is powerfully affecting in its plainness."
                  />
                </div>
              </SubSection>

              <SubSection title="Themes">
                <div className="flex flex-wrap gap-2">
                  <ThemeTag theme="Family love" />
                  <ThemeTag theme="Admiration" />
                  <ThemeTag theme="Getting to know someone" />
                  <ThemeTag theme="Memory and ageing" />
                </div>
              </SubSection>

              <SubSection title="Comparison Suggestions">
                <ul className="space-y-2 list-none">
                  <ComparisonSuggestion
                    poem="Follower"
                    reason="Both present admiring portraits of strong, physical father/grandfather figures. Both use extended physical imagery as their central technique."
                  />
                  <ComparisonSuggestion
                    poem="Eden Rock"
                    reason="Both celebrate grandparents/parents with precise, loving physical detail. Both explore the desire to know and connect with older family members."
                  />
                  <ComparisonSuggestion
                    poem="Walking Away"
                    reason="Both explore intergenerational love, though from different perspectives (child looking up vs. parent watching child leave)."
                  />
                </ul>
              </SubSection>
            </Section>
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/*  Comparison Table                                                   */}
      {/* ================================================================== */}
      <section id="comparison-table" className="bg-primary/10 px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-2xl font-bold text-foreground">{t('study.poetry.cmp.title')}</h2>
          <p className="mt-2 text-muted-foreground">{t('study.poetry.cmp.subtitle')}</p>

          <button
            onClick={() => setShowTable((o) => !o)}
            className="mt-4 inline-flex items-center gap-2 rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-primary/90"
          >
            {showTable ? t('study.poetry.cmp.hide') : t('study.poetry.cmp.show')}{' '}
            {t('study.poetry.cmp.table_suffix')}
            <svg
              className={`h-4 w-4 transition-transform ${showTable ? 'rotate-180' : ''}`}
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg>
          </button>

          {showTable && (
            <div className="mt-6 overflow-x-auto rounded-xl border border-border bg-card shadow-md">
              <table className="min-w-full text-sm">
                <thead>
                  <tr className="bg-primary text-white">
                    <th className="px-4 py-3 text-start font-semibold">
                      {t('study.poetry.cmp.col.poem')}
                    </th>
                    <th className="px-4 py-3 text-start font-semibold">
                      {t('study.poetry.cmp.col.poet')}
                    </th>
                    <th className="px-4 py-3 text-start font-semibold">
                      {t('study.poetry.cmp.col.period')}
                    </th>
                    <th className="px-4 py-3 text-start font-semibold">
                      {t('study.poetry.cmp.col.key_themes')}
                    </th>
                    <th className="px-4 py-3 text-start font-semibold">
                      {t('study.poetry.cmp.col.tone')}
                    </th>
                    <th className="px-4 py-3 text-start font-semibold">
                      {t('study.poetry.cmp.col.form')}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {COMPARISON_DATA.map((row, i) => (
                    <tr key={row.poem} className={i % 2 === 0 ? 'bg-card' : 'bg-muted'}>
                      <td className="px-4 py-3 font-semibold text-primary whitespace-nowrap">
                        {row.poem}
                      </td>
                      <td className="px-4 py-3 text-muted-foreground whitespace-nowrap">
                        {row.poet}
                      </td>
                      <td className="px-4 py-3 text-muted-foreground whitespace-nowrap">
                        {row.type}
                      </td>
                      <td className="px-4 py-3 text-muted-foreground">{row.themes}</td>
                      <td className="px-4 py-3 text-muted-foreground">{row.tone}</td>
                      <td className="px-4 py-3 text-muted-foreground">{row.form}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </section>

      {/* ================================================================== */}
      {/*  Thematic Groupings                                                 */}
      {/* ================================================================== */}
      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-foreground">
          {t('study.poetry.pac.thematic.title')}
        </h2>
        <p className="mt-2 text-muted-foreground mb-8">{t('study.poetry.pac.thematic.subtitle')}</p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              theme: 'Romantic Love',
              poems: ["Love's Philosophy", 'Sonnet 29', "Porphyria's Lover", 'Singh Song!'],
              colour: 'border-accent',
            },
            {
              theme: 'Loss and Heartbreak',
              poems: ['When We Two Parted', 'Neutral Tones', "The Farmer's Bride"],
              colour: 'border-warn',
            },
            {
              theme: 'Parent-Child Love',
              poems: ['Walking Away', 'Follower', 'Mother, Any Distance', 'Before You Were Mine'],
              colour: 'border-success',
            },
            {
              theme: 'Family and Memory',
              poems: ['Eden Rock', 'Climbing My Grandfather', 'Before You Were Mine', 'Follower'],
              colour: 'border-primary',
            },
            {
              theme: 'Nature and Love',
              poems: ["Love's Philosophy", 'Sonnet 29', 'Winter Swans', 'Neutral Tones'],
              colour: 'border-accent',
            },
            {
              theme: 'Power and Possession',
              poems: ["Porphyria's Lover", "The Farmer's Bride", 'Before You Were Mine'],
              colour: 'border-warn',
            },
            {
              theme: 'Distance and Separation',
              poems: ['Letters from Yorkshire', 'Walking Away', 'When We Two Parted', 'Sonnet 29'],
              colour: 'border-primary',
            },
            {
              theme: 'Reconciliation and Healing',
              poems: ['Winter Swans', 'Letters from Yorkshire', 'Sonnet 29'],
              colour: 'border-success',
            },
            {
              theme: 'Identity and Independence',
              poems: ['Mother, Any Distance', 'Singh Song!', 'Before You Were Mine'],
              colour: 'border-accent',
            },
          ].map((group) => (
            <div
              key={group.theme}
              className={`rounded-xl border-2 ${group.colour} bg-card p-5 shadow-md`}
            >
              <h3 className="font-bold text-foreground">{group.theme}</h3>
              <ul className="mt-3 space-y-1.5">
                {group.poems.map((p) => (
                  <li key={p} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* ================================================================== */}
      {/*  Exam Tips                                                          */}
      {/* ================================================================== */}
      <section className="bg-card px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-2xl font-bold text-foreground">
            {t('study.poetry.lar.exam_tips.title')}
          </h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: 'Choose Your Comparison Wisely',
                text: "You'll be given one poem and asked to compare it to another of your choice. Pick a poem with clear thematic or structural links - not just the one you know best.",
              },
              {
                title: "Weave, Don't Split",
                text: "Avoid writing about one poem then the other. Instead, make a point about both poems together, using connectives: 'similarly,' 'in contrast,' 'whereas,' 'however.'",
              },
              {
                title: 'Short Quotes, Big Analysis',
                text: 'Embed single words or short phrases into your sentences. Long block quotes waste time. Instead, zoom in on individual word choices and their effects.',
              },
              {
                title: 'Comment on Form and Structure',
                text: "Always discuss the poet's choice of form (sonnet, monologue, free verse), rhyme scheme, line length, and structural features like volta or cyclical endings.",
              },
              {
                title: 'Link Context to Meaning',
                text: "Don't just state facts about the poet's life. Explain how context shapes the poem's meaning: 'Byron's secret affair creates the poem's tone of shame and bitterness.'",
              },
              {
                title: 'Use Subject Terminology',
                text: 'Name techniques accurately: enjambment, caesura, sibilance, volta, dramatic monologue. But always explain the effect - feature-spotting without analysis scores poorly.',
              },
            ].map((tip) => (
              <div
                key={tip.title}
                className="rounded-xl border border-border bg-card p-5 shadow-md"
              >
                <h3 className="font-semibold text-primary">{tip.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{tip.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rights notice */}
      <section className="mx-auto max-w-6xl px-4 py-6 sm:px-6 lg:px-8">
        <div className="rounded-lg border border-border/40 bg-muted/30 px-4 py-3 text-[11px] leading-relaxed text-muted-foreground">
          <strong className="text-foreground">Rights notice.</strong> Several AQA Love &amp;
          Relationships poems remain in copyright &mdash; including Heaney&rsquo;s <em>Follower</em>{' '}
          (from <em>Death of a Naturalist</em>, Faber &amp; Faber, 1966), Armitage&rsquo;s{' '}
          <em>Mother, any distance</em> (from <em>Book of Matches</em>, Faber &amp; Faber, 1993),
          Sheers&rsquo;s <em>Winter Swans</em> (from <em>Skirrid Hill</em>, Seren, 2005),
          Duffy&rsquo;s <em>Before You Were Mine</em> (from <em>Mean Time</em>, Anvil, 1993),
          Nagra&rsquo;s <em>Singh Song!</em> (&copy; Faber &amp; Faber) and Waterhouse&rsquo;s{' '}
          <em>Climbing My Grandfather</em> (from <em>In</em>, The Rialto, 2000). Quotations are
          short fair-dealing extracts under CDPA 1988 &sect;30 (criticism, review, quotation). For
          full text, students should consult the board-licensed AQA Love &amp; Relationships
          anthology.
        </div>
      </section>

      {/* Back link */}
      <section className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        <Link
          href="/resources/poetry"
          className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-primary transition-colors"
        >
          <svg
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
            />
          </svg>
          {t('study.shared.cta.back_to_poetry')}
        </Link>
      </section>
    </>
  )
}
