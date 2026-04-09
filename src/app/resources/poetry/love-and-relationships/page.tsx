"use client";

import { useState, useMemo } from "react";
import Link from "next/link";

/* ================================================================== */
/*  Reusable Components                                                */
/* ================================================================== */

function Section({
  id,
  title,
  poet,
  children,
  defaultOpen = false,
}: {
  id: string;
  title: string;
  poet: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="rounded-xl border border-border bg-card shadow-md overflow-hidden">
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-center justify-between px-5 py-4 text-left transition-colors hover:bg-muted"
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
          className={`h-5 w-5 shrink-0 text-muted-foreground transition-transform ${open ? "rotate-180" : ""}`}
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
        </div>
      )}
    </div>
  );
}

function SubSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h3 className="text-base font-bold text-primary mb-2">{title}</h3>
      {children}
    </div>
  );
}

function Quote({
  text,
  technique,
  analysis,
}: {
  text: string;
  technique: string;
  analysis: string;
}) {
  return (
    <div className="rounded-lg border-l-4 border-accent bg-primary/5 p-4">
      <p className="text-sm font-semibold italic text-foreground">&ldquo;{text}&rdquo;</p>
      <p className="mt-1 text-xs font-semibold text-primary">{technique}</p>
      <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{analysis}</p>
    </div>
  );
}

function ThemeTag({ theme }: { theme: string }) {
  return (
    <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
      {theme}
    </span>
  );
}

function ComparisonSuggestion({ poem, reason }: { poem: string; reason: string }) {
  return (
    <li className="text-sm text-muted-foreground">
      <span className="font-semibold text-foreground">{poem}</span> &mdash; {reason}
    </li>
  );
}

/* ================================================================== */
/*  Comparison Table Data                                              */
/* ================================================================== */

const COMPARISON_DATA: {
  poem: string;
  poet: string;
  type: string;
  themes: string;
  tone: string;
  form: string;
}[] = [
  { poem: "When We Two Parted", poet: "Byron", type: "Romantic", themes: "Loss, betrayal, secrecy", tone: "Bitter, sorrowful", form: "Regular quatrains, ABAB rhyme" },
  { poem: "Love's Philosophy", poet: "Shelley", type: "Romantic", themes: "Desire, nature, persuasion", tone: "Passionate, frustrated", form: "Two octets, ABABCDCD rhyme" },
  { poem: "Porphyria's Lover", poet: "Browning", type: "Romantic", themes: "Obsession, power, madness", tone: "Disturbing, calm", form: "Dramatic monologue, ABABB rhyme" },
  { poem: "Sonnet 29", poet: "Barrett Browning", type: "Romantic", themes: "Love as transformative, devotion", tone: "Tender, uplifting", form: "Petrarchan sonnet, iambic pentameter" },
  { poem: "Neutral Tones", poet: "Hardy", type: "Victorian", themes: "Loss of love, disillusionment, memory", tone: "Bleak, bitter", form: "Four quatrains, cyclical structure" },
  { poem: "Letters from Yorkshire", poet: "Dooley", type: "Modern", themes: "Distance, connection, nature vs technology", tone: "Reflective, admiring", form: "Free verse, no rhyme" },
  { poem: "The Farmer's Bride", poet: "Mew", type: "Victorian", themes: "Isolation, desire, gender", tone: "Frustrated, possessive", form: "Dramatic monologue, varied rhyme" },
  { poem: "Walking Away", poet: "Day Lewis", type: "Modern", themes: "Parent–child love, letting go", tone: "Nostalgic, accepting", form: "Four quintains, loose rhyme" },
  { poem: "Eden Rock", poet: "Causley", type: "Modern", themes: "Memory, family, death", tone: "Serene, dreamlike", form: "Free verse, varied stanzas" },
  { poem: "Follower", poet: "Heaney", type: "Modern", themes: "Admiration, ageing, role reversal", tone: "Admiring to guilty", form: "Six quatrains, ABAB half-rhyme" },
  { poem: "Mother, Any Distance", poet: "Armitage", type: "Modern", themes: "Parent–child bond, independence", tone: "Uncertain, bittersweet", form: "Extended sonnet (16 lines)" },
  { poem: "Before You Were Mine", poet: "Duffy", type: "Modern", themes: "Memory, possession, mother–daughter", tone: "Celebratory, possessive", form: "Four quintains, free verse" },
  { poem: "Winter Swans", poet: "Sheers", type: "Modern", themes: "Reconciliation, nature, love", tone: "Tender, hopeful", form: "Tercets then final couplet" },
  { poem: "Singh Song!", poet: "Nagra", type: "Modern", themes: "Love, cultural identity, marriage", tone: "Playful, joyful", form: "Free verse, phonetic spelling" },
  { poem: "Climbing My Grandfather", poet: "Waterhouse", type: "Modern", themes: "Family bond, memory, admiration", tone: "Warm, determined", form: "Free verse, extended metaphor" },
];

/* ================================================================== */
/*  Poem metadata for search & filter                                  */
/* ================================================================== */

const POEM_META = [
  { id: "when-we-two-parted", title: "When We Two Parted", poet: "Lord Byron", themes: ["Loss and heartbreak", "Romantic love", "Distance and separation"], period: "Romantic" },
  { id: "love-s-philosophy", title: "Love's Philosophy", poet: "Percy Bysshe Shelley", themes: ["Romantic love", "Nature and love", "Desire and longing"], period: "Romantic" },
  { id: "porphyria-s-lover", title: "Porphyria's Lover", poet: "Robert Browning", themes: ["Romantic love", "Power and possession", "Loss and heartbreak"], period: "Romantic" },
  { id: "sonnet-29", title: "Sonnet 29", poet: "Elizabeth Barrett Browning", themes: ["Romantic love", "Nature and love", "Distance and separation"], period: "Romantic" },
  { id: "neutral-tones", title: "Neutral Tones", poet: "Thomas Hardy", themes: ["Loss and heartbreak", "Nature and love"], period: "Victorian" },
  { id: "letters-from-yorkshire", title: "Letters from Yorkshire", poet: "Maura Dooley", themes: ["Distance and separation", "Nature and love", "Reconciliation and healing"], period: "Modern" },
  { id: "the-farmer-s-bride", title: "The Farmer's Bride", poet: "Charlotte Mew", themes: ["Loss and heartbreak", "Power and possession"], period: "Victorian" },
  { id: "walking-away", title: "Walking Away", poet: "Cecil Day Lewis", themes: ["Parent-child love", "Distance and separation", "Family and memory"], period: "Modern" },
  { id: "eden-rock", title: "Eden Rock", poet: "Charles Causley", themes: ["Family and memory", "Parent-child love"], period: "Modern" },
  { id: "follower", title: "Follower", poet: "Seamus Heaney", themes: ["Parent-child love", "Family and memory"], period: "Modern" },
  { id: "mother--any-distance", title: "Mother, Any Distance", poet: "Simon Armitage", themes: ["Parent-child love", "Identity and independence"], period: "Modern" },
  { id: "before-you-were-mine", title: "Before You Were Mine", poet: "Carol Ann Duffy", themes: ["Parent-child love", "Family and memory", "Power and possession", "Identity and independence"], period: "Modern" },
  { id: "winter-swans", title: "Winter Swans", poet: "Owen Sheers", themes: ["Romantic love", "Nature and love", "Reconciliation and healing"], period: "Modern" },
  { id: "singh-song-", title: "Singh Song!", poet: "Daljit Nagra", themes: ["Romantic love", "Identity and independence"], period: "Modern" },
  { id: "climbing-my-grandfather", title: "Climbing My Grandfather", poet: "Andrew Waterhouse", themes: ["Family and memory", "Parent-child love"], period: "Modern" },
];

const ALL_THEMES = Array.from(new Set(POEM_META.flatMap((p) => p.themes))).sort();
const ALL_PERIODS = Array.from(new Set(POEM_META.map((p) => p.period)));

/* ================================================================== */
/*  Page                                                               */
/* ================================================================== */

export default function LoveAndRelationshipsPage() {
  const [showTable, setShowTable] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTheme, setActiveTheme] = useState<string | null>(null);
  const [activePeriod, setActivePeriod] = useState<string | null>(null);

  const visiblePoemIds = useMemo(() => {
    const query = searchQuery.toLowerCase().trim();
    return new Set(
      POEM_META.filter((p) => {
        const matchesSearch =
          !query ||
          p.title.toLowerCase().includes(query) ||
          p.poet.toLowerCase().includes(query) ||
          p.themes.some((t) => t.toLowerCase().includes(query));
        const matchesTheme = !activeTheme || p.themes.includes(activeTheme);
        const matchesPeriod = !activePeriod || p.period === activePeriod;
        return matchesSearch && matchesTheme && matchesPeriod;
      }).map((p) => p.id)
    );
  }, [searchQuery, activeTheme, activePeriod]);

  const matchCount = visiblePoemIds.size;

  return (
    <>

      {/* Hero */}
      <section className="border-b bg-gradient-to-b from-primary/[0.06] to-transparent px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-muted-foreground">
            AQA GCSE English Literature &middot; Poetry Anthology
          </p>
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Love and Relationships
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Complete analysis of all 15 poems in the AQA Love and Relationships cluster. Key quotations, techniques, themes, context, and comparison guidance for every poem.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <span className="rounded-full bg-card/15 px-3 py-1 text-sm font-medium">15 Poems</span>
            <span className="rounded-full bg-card/15 px-3 py-1 text-sm font-medium">75+ Key Quotes</span>
            <span className="rounded-full bg-card/15 px-3 py-1 text-sm font-medium">AQA Paper 2</span>
          </div>
        </div>
      </section>

      {/* Search & Filter */}
      <section className="mx-auto max-w-6xl px-4 pt-8 sm:px-6 lg:px-8">
        <div className="rounded-xl border border-border bg-card p-5 shadow-md space-y-4">
          {/* Search bar */}
          <div className="relative">
            <svg
              className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground pointer-events-none"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
            <input
              type="text"
              placeholder="Search poems by title, poet, or theme..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-lg border border-border py-2.5 pl-10 pr-4 text-sm text-foreground placeholder-gray-400 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-muted-foreground"
                aria-label="Clear search"
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>

          {/* Theme filters */}
          <div>
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2">Filter by theme</p>
            <div className="flex flex-wrap gap-2">
              {ALL_THEMES.map((theme) => (
                <button
                  key={theme}
                  onClick={() => setActiveTheme(activeTheme === theme ? null : theme)}
                  className={`rounded-full px-3 py-1 text-xs font-medium transition-colors ${
                    activeTheme === theme
                      ? "bg-primary text-white"
                      : "bg-muted text-muted-foreground hover:bg-primary/10 hover:text-foreground"
                  }`}
                >
                  {theme}
                </button>
              ))}
            </div>
          </div>

          {/* Period filters */}
          <div>
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2">Filter by period</p>
            <div className="flex flex-wrap gap-2">
              {ALL_PERIODS.map((period) => (
                <button
                  key={period}
                  onClick={() => setActivePeriod(activePeriod === period ? null : period)}
                  className={`rounded-full px-3 py-1 text-xs font-medium transition-colors ${
                    activePeriod === period
                      ? "bg-primary text-white"
                      : "bg-muted text-muted-foreground hover:bg-primary/10 hover:text-foreground"
                  }`}
                >
                  {period}
                </button>
              ))}
              {(activeTheme || activePeriod || searchQuery) && (
                <button
                  onClick={() => { setActiveTheme(null); setActivePeriod(null); setSearchQuery(""); }}
                  className="rounded-full bg-red-500/10 px-3 py-1 text-xs font-medium text-red-600 hover:bg-red-500/15 transition-colors"
                >
                  Clear all filters
                </button>
              )}
            </div>
          </div>

          {/* Result count */}
          {(searchQuery || activeTheme || activePeriod) && (
            <p className="text-sm text-muted-foreground">
              Showing <span className="font-semibold text-foreground">{matchCount}</span> of 15 poems
              {matchCount === 0 && " — try broadening your search."}
            </p>
          )}
        </div>
      </section>

      {/* Quick nav */}
      <section className="mx-auto max-w-6xl px-4 py-4 sm:px-6 lg:px-8">
        <div className="rounded-xl border border-border bg-card p-4 shadow-md">
          <p className="text-sm font-semibold text-muted-foreground mb-3">Jump to a poem:</p>
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
              Comparison Table
            </a>
          </div>
        </div>
      </section>

      {/* Poems */}
      <section className="mx-auto max-w-6xl px-4 pb-12 sm:px-6 lg:px-8">
        <div className="space-y-4">

          {matchCount === 0 && (
            <div className="rounded-xl border border-dashed border-border bg-muted p-8 text-center">
              <p className="text-muted-foreground text-sm">No poems match your current filters. Try adjusting your search or clearing filters.</p>
            </div>
          )}

          {/* ───────────────────── 1. When We Two Parted ───────────────────── */}
          <div id="when-we-two-parted" style={{ display: visiblePoemIds.has("when-we-two-parted") ? undefined : "none" }}>
            <Section id="when-we-two-parted" title="When We Two Parted" poet="Lord Byron (1816)" defaultOpen>

              <SubSection title="Context">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Written by the Romantic poet Lord Byron, this poem is believed to address his secret affair with Lady Frances Wedderburn Webster. When rumours of her later affair with the Duke of Wellington surfaced, Byron felt betrayed. The poem was written in 1816 but backdated to 1808, possibly to distance Byron from the scandal. The secretive nature of the affair is central to the poem&apos;s meaning.
                </p>
              </SubSection>

              <SubSection title="Summary">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  The speaker reflects on the painful end of a secret love affair. The poem moves through memories of their parting (silence, tears, and coldness), the present pain of hearing the former lover&apos;s name spoken by others, and the speaker&apos;s sense of betrayal. The cyclical structure returns to the opening image, suggesting the pain is unresolved and ongoing.
                </p>
              </SubSection>

              <SubSection title="Form &amp; Structure">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Four regular quatrains with an ABAB rhyme scheme create a controlled, restrained tone that mirrors the secrecy of the affair. The anapaestic metre creates a mournful, rhythmic quality. The cyclical structure (the final stanza echoes the first) reinforces that the speaker is trapped in grief. Short, monosyllabic words (&ldquo;pale,&rdquo; &ldquo;cold,&rdquo; &ldquo;half&rdquo;) emphasise emotional numbness.
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
                  <Quote
                    text="A knell to mine ear"
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
                  <ComparisonSuggestion poem="Neutral Tones" reason="Both present love as something that has died, using cold, bleak imagery and cyclical structures." />
                  <ComparisonSuggestion poem="Love's Philosophy" reason="Contrasts Byron's bitter loss with Shelley's passionate desire; both Romantic poets exploring unrequited feeling." />
                  <ComparisonSuggestion poem="Sonnet 29" reason="Contrasts: Barrett Browning presents love as joyful and transformative, whereas Byron shows love as destructive." />
                </ul>
              </SubSection>

            </Section>
          </div>

          {/* ───────────────────── 2. Love's Philosophy ───────────────────── */}
          <div id="love-s-philosophy" style={{ display: visiblePoemIds.has("love-s-philosophy") ? undefined : "none" }}>
            <Section id="loves-philosophy" title="Love's Philosophy" poet="Percy Bysshe Shelley (1820)">

              <SubSection title="Context">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Shelley was a key Romantic poet who championed emotion, nature, and individual passion. This poem was written as a persuasive love lyric, using the natural world to argue that everything in nature exists in union, so the speaker and their beloved should too. The &ldquo;philosophy&rdquo; of the title is essentially a rhetorical argument for love.
                </p>
              </SubSection>

              <SubSection title="Summary">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  The speaker uses a series of examples from the natural world &mdash; rivers meeting the sea, winds merging, flowers clasping &mdash; to argue that all things in nature exist in pairs and unions. The rhetorical logic is: if nature is designed for togetherness, then the beloved&apos;s refusal to reciprocate love is unnatural. Each stanza ends with a direct, frustrated appeal.
                </p>
              </SubSection>

              <SubSection title="Form &amp; Structure">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Two octets (eight-line stanzas) with an ABABCDCD rhyme scheme. The regular, lilting rhythm mimics a gentle, persuasive tone. Both stanzas build through examples from nature before ending with a frustrated rhetorical question, creating a pattern of argument then appeal. The second stanza intensifies the first, escalating from nature to divine law.
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
                  <Quote
                    text="All things by a law divine / In one spirit meet and mingle"
                    technique="Religious imagery / sibilance"
                    analysis="The speaker elevates his argument from nature to God, claiming divine authority for union. The sibilance in 'spirit' and 'mingle' creates a soft, seductive sound quality that reinforces the persuasive tone."
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
                  <Quote
                    text="What is all this sweet work worth / If thou kiss not me?"
                    technique="Rhetorical question / volta"
                    analysis="The final rhetorical question is the poem's emotional climax. All the natural beauty described is declared worthless without reciprocated love. 'Thou' directly addresses the beloved, making the plea personal and urgent."
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
                  <ComparisonSuggestion poem="When We Two Parted" reason="Both Romantic poets; Shelley desires union, Byron mourns its loss." />
                  <ComparisonSuggestion poem="Sonnet 29" reason="Both celebrate the power of love, though Shelley's love is unrequited while Barrett Browning's is fulfilled." />
                  <ComparisonSuggestion poem="Singh Song!" reason="Both present love joyfully, though Shelley's is frustrated while Nagra's speakers are happily united." />
                </ul>
              </SubSection>

            </Section>
          </div>

          {/* ───────────────────── 3. Porphyria's Lover ───────────────────── */}
          <div id="porphyria-s-lover" style={{ display: visiblePoemIds.has("porphyria-s-lover") ? undefined : "none" }}>
            <Section id="porphyrias-lover" title="Porphyria's Lover" poet="Robert Browning (1836)">

              <SubSection title="Context">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Robert Browning was a Victorian poet known for his dramatic monologues that explore the psychology of disturbed or morally complex speakers. This poem is one of his earliest, published in 1836. It was written during the Victorian era when strict social hierarchies governed relationships &mdash; Porphyria appears to be of a higher social class. The poem explores obsessive love and the desire to possess another person completely.
                </p>
              </SubSection>

              <SubSection title="Summary">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  On a stormy night, Porphyria visits her lover in his cottage. She lights a fire, sits beside him, and declares her love. The speaker, realising she loves him but cannot fully commit due to social constraints, decides to preserve the perfect moment forever by strangling her with her own hair. He then sits with her corpse all night, noting that &ldquo;God has not said a word,&rdquo; as though expecting divine judgement that does not come.
                </p>
              </SubSection>

              <SubSection title="Form &amp; Structure">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  A dramatic monologue in a single unbroken stanza of 60 lines with an ABABB rhyme scheme. The continuous form mirrors the speaker&apos;s unbroken, obsessive thought process. Enjambment and caesura create an unsettling, conversational rhythm that contrasts with the horrific content. The rhyme scheme is subtly irregular, reflecting the speaker&apos;s unstable mind. The turning point (the murder) occurs exactly at the poem&apos;s centre, around line 30.
                </p>
              </SubSection>

              <SubSection title="Key Quotes">
                <div className="space-y-3">
                  <Quote
                    text="The rain set early in tonight, / The sullen wind was soon awake"
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
                  <ComparisonSuggestion poem="The Farmer's Bride" reason="Both dramatic monologues with male speakers who desire women they cannot truly possess; both explore disturbing power dynamics." />
                  <ComparisonSuggestion poem="Sonnet 29" reason="Contrasts: Barrett Browning presents love as selfless devotion; Browning shows love as violent possession." />
                  <ComparisonSuggestion poem="Singh Song!" reason="Contrasts: Nagra presents a healthy, equal, joyful relationship; Browning presents destructive obsession." />
                </ul>
              </SubSection>

            </Section>
          </div>

          {/* ───────────────────── 4. Sonnet 29 ───────────────────── */}
          <div id="sonnet-29" style={{ display: visiblePoemIds.has("sonnet-29") ? undefined : "none" }}>
            <Section id="sonnet-29" title="Sonnet 29 — 'I think of thee!'" poet="Elizabeth Barrett Browning (1850)">

              <SubSection title="Context">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Part of Barrett Browning&apos;s <em>Sonnets from the Portuguese</em>, a sequence of 44 love sonnets written during her courtship with Robert Browning. Elizabeth was an invalid dominated by her controlling father; her love for Robert represented liberation and self-assertion. Sonnet 29 explores the intensity of thinking about an absent lover and the superiority of their real presence over mere thoughts.
                </p>
              </SubSection>

              <SubSection title="Summary">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  The speaker describes how her thoughts of her beloved have grown so abundant that they obscure him, like vines covering a tree. She then commands her thoughts to dissolve, because the real, living presence of her lover is more powerful than any imagined version. The poem moves from passive longing to active desire, asserting that lived experience surpasses fantasy.
                </p>
              </SubSection>

              <SubSection title="Form &amp; Structure">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  A Petrarchan sonnet with an octave and sestet. Iambic pentameter gives a steady, heartbeat-like rhythm appropriate for a love poem. The volta (turn) occurs around lines 7&ndash;8, shifting from passive thoughts to an active command for the beloved to appear. Heavy use of enjambment conveys the overwhelming, uncontrollable nature of her thoughts.
                </p>
              </SubSection>

              <SubSection title="Key Quotes">
                <div className="space-y-3">
                  <Quote
                    text="I think of thee! — my thoughts do twine and bud / About thee, as wild vines, about a tree"
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
                  <ComparisonSuggestion poem="Love's Philosophy" reason="Both use nature to express love; Shelley argues for love, Barrett Browning celebrates existing love." />
                  <ComparisonSuggestion poem="When We Two Parted" reason="Both deal with absent lovers, but Barrett Browning's separation is temporary and hopeful; Byron's is permanent and bitter." />
                  <ComparisonSuggestion poem="Winter Swans" reason="Both show love's power to transform, using natural imagery as central metaphors." />
                </ul>
              </SubSection>

            </Section>
          </div>

          {/* ───────────────────── 5. Neutral Tones ───────────────────── */}
          <div id="neutral-tones" style={{ display: visiblePoemIds.has("neutral-tones") ? undefined : "none" }}>
            <Section id="neutral-tones" title="Neutral Tones" poet="Thomas Hardy (1867)">

              <SubSection title="Context">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Written when Hardy was 27, this poem reflects on a failed relationship. Hardy would later become known for his pessimistic worldview, exploring how fate and nature are indifferent to human suffering. The poem was likely inspired by his relationship with Tryphena Sparks, though this is debated. It was published in 1898 in <em>Wessex Poems</em>.
                </p>
              </SubSection>

              <SubSection title="Summary">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  The speaker recalls standing by a pond on a winter day with a lover. Everything is drained of colour and vitality: the sun is white, the leaves are grey, the smiles are dead. The conversation reveals their love has died. The poem ends by returning to the pond image, showing how this painful memory has become permanently associated with the landscape.
                </p>
              </SubSection>

              <SubSection title="Form &amp; Structure">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Four quatrains with an ABBA rhyme scheme (envelope rhyme). The cyclical structure &mdash; beginning and ending at the pond &mdash; traps the speaker in the painful memory, suggesting they cannot move past it. The regularity of the form contrasts with the emotional devastation, creating an effect of numb control. The &ldquo;neutral&rdquo; title is ironic: nothing here is emotionally neutral.
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
                  <ComparisonSuggestion poem="When We Two Parted" reason="Both use cold, deathly imagery to convey the end of love; both have cyclical structures suggesting inescapable grief." />
                  <ComparisonSuggestion poem="Winter Swans" reason="Both use nature to reflect on a relationship, but Hardy shows love dying while Sheers shows love recovering." />
                  <ComparisonSuggestion poem="Love's Philosophy" reason="Contrasts: Shelley finds evidence for love in nature, Hardy finds only bleakness and indifference." />
                </ul>
              </SubSection>

            </Section>
          </div>

          {/* ───────────────────── 6. Letters from Yorkshire ───────────────────── */}
          <div id="letters-from-yorkshire" style={{ display: visiblePoemIds.has("letters-from-yorkshire") ? undefined : "none" }}>
            <Section id="letters-yorkshire" title="Letters from Yorkshire" poet="Maura Dooley (2002)">

              <SubSection title="Context">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Maura Dooley is a contemporary poet. This poem explores the connection between two people who live very different lives &mdash; one in Yorkshire, connected to the land and seasons, the other presumably in a city, working with words and screens. The poem questions whether a life closer to nature is more authentic and celebrates how communication can bridge distance.
                </p>
              </SubSection>

              <SubSection title="Summary">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  The speaker describes receiving letters from a man in Yorkshire who writes about his daily life: digging the garden, seeing the first lapwings of the year. She contrasts his physical, outdoor life with her own word-based, indoor existence. Despite the distance, the letters create a powerful connection. The poem suggests that true communication transcends physical proximity.
                </p>
              </SubSection>

              <SubSection title="Form &amp; Structure">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Free verse with no regular rhyme scheme, reflecting the conversational, letter-like quality of the poem. The varied line lengths mirror the natural rhythms of thought. The poem alternates between descriptions of his life and her reflections, structurally enacting the back-and-forth of correspondence. Enjambment connects ideas across lines, just as letters connect the two people.
                </p>
              </SubSection>

              <SubSection title="Key Quotes">
                <div className="space-y-3">
                  <Quote
                    text="In February, digging his garden, planting potatoes"
                    technique="Present participles / listing"
                    analysis="The present participles ('digging,' 'planting') create a sense of ongoing, physical activity. The listing of everyday tasks elevates them, suggesting that simple, purposeful work has dignity and meaning."
                  />
                  <Quote
                    text="he saw the first lapwings return and drew me / seasons ahead into his new year"
                    technique="Enjambment / metaphor"
                    analysis="The enjambment across 'drew me' physically pulls the reader (and the speaker) into his world. The metaphor suggests his letters have the power to transport her, bridging not just distance but time itself."
                  />
                  <Quote
                    text="Is his life more real because he digs and plants?"
                    technique="Rhetorical question / caesura"
                    analysis="This pivotal question challenges assumptions about authentic living. The speaker wrestles with whether physical labour is more 'real' than intellectual work. The question is left unanswered, reflecting genuine uncertainty."
                  />
                  <Quote
                    text="our souls tap out messages across the ether"
                    technique="Metaphor / spiritual imagery"
                    analysis="'Souls' elevates their communication beyond the mundane, suggesting a deep, spiritual connection. 'Tap out' evokes Morse code, implying their bond is urgent and essential. 'Ether' suggests both technology and the spiritual realm."
                  />
                  <Quote
                    text="poised as if to fly or fall"
                    technique="Simile / antithesis"
                    analysis="The contrasting possibilities of 'fly or fall' capture the vulnerability and excitement of emotional connection. The speaker is balanced between hope and fear, reflecting the precariousness of long-distance intimacy."
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
                  <ComparisonSuggestion poem="Sonnet 29" reason="Both explore longing for someone absent, and both suggest that connection transcends physical distance." />
                  <ComparisonSuggestion poem="Walking Away" reason="Both reflect on relationships across distance and time; both use nature imagery to frame human connection." />
                  <ComparisonSuggestion poem="Eden Rock" reason="Both present a sense of reaching across a divide to connect with loved ones." />
                </ul>
              </SubSection>

            </Section>
          </div>

          {/* ───────────────────── 7. The Farmer's Bride ───────────────────── */}
          <div id="the-farmer-s-bride" style={{ display: visiblePoemIds.has("the-farmer-s-bride") ? undefined : "none" }}>
            <Section id="farmers-bride" title="The Farmer's Bride" poet="Charlotte Mew (1916)">

              <SubSection title="Context">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Charlotte Mew was a Victorian/Edwardian poet whose work often explores isolation and unfulfilled desire. This dramatic monologue is spoken by a farmer whose young bride has become terrified of him and of physical intimacy. The poem reflects Victorian attitudes to marriage, where wives were essentially property, and the farmer&apos;s frustration reveals the oppressive gender dynamics of the era.
                </p>
              </SubSection>

              <SubSection title="Summary">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  The farmer narrates the story of his young wife who, three years into their marriage, ran away. The community helped him catch her and bring her back. She now lives in the house but avoids him, preferring the company of animals. The farmer describes her beauty with increasing frustration and desire. The final stanza reveals the intensity of his longing, which borders on threat.
                </p>
              </SubSection>

              <SubSection title="Form &amp; Structure">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  A dramatic monologue with irregular stanza lengths and varied rhyme, reflecting the farmer&apos;s agitated, uneven emotional state. The stanzas grow shorter towards the end, building tension and urgency. The shift from third person (&ldquo;we&rdquo;) to first person (&ldquo;I&rdquo;) in the final stanza isolates the farmer with his desires. Dialect words (&ldquo;maid,&rdquo; &ldquo;abed&rdquo;) ground the poem in rural life.
                </p>
              </SubSection>

              <SubSection title="Key Quotes">
                <div className="space-y-3">
                  <Quote
                    text="We chased her, caught her"
                    technique="Short clauses / violent verbs"
                    analysis="The abrupt, monosyllabic clauses mirror the brutal efficiency of the chase. The language of hunting ('chased,' 'caught') reduces the bride to prey, revealing how the community treats her as something to be captured and controlled."
                  />
                  <Quote
                    text="Too young maybe"
                    technique="Caesura / understatement"
                    analysis="This brief aside is one of the poem's most devastating moments. The farmer acknowledges her youth but does not fully reckon with it. The understatement ('maybe') reveals his unwillingness to accept responsibility for the situation."
                  />
                  <Quote
                    text="She does the work about the house / As well as most, but like a mouse"
                    technique="Simile / animal imagery"
                    analysis="The simile compares the bride to a mouse, emphasising her fear, smallness, and silence. Throughout the poem she is associated with animals ('like a leveret,' 'like a mouse'), dehumanising her and emphasising the power imbalance."
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
                  <ComparisonSuggestion poem="Porphyria's Lover" reason="Both dramatic monologues with male speakers who desire women they cannot truly possess. Both end with disturbing implications." />
                  <ComparisonSuggestion poem="Singh Song!" reason="Contrasts: Nagra presents a joyful, equal marriage; Mew presents a marriage defined by fear and power." />
                  <ComparisonSuggestion poem="Neutral Tones" reason="Both present relationships drained of warmth and connection, though Mew adds the dimension of gender-based power." />
                </ul>
              </SubSection>

            </Section>
          </div>

          {/* ───────────────────── 8. Walking Away ───────────────────── */}
          <div id="walking-away" style={{ display: visiblePoemIds.has("walking-away") ? undefined : "none" }}>
            <Section id="walking-away" title="Walking Away" poet="Cecil Day Lewis (1962)">

              <SubSection title="Context">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Cecil Day Lewis was Poet Laureate and the father of actor Daniel Day-Lewis. This poem is addressed to his son Sean, recalling the day he first dropped him off at boarding school. Written nearly two decades after the event, the poem explores how a parent&apos;s love means learning to let go, and how that moment of separation remains vivid and painful years later.
                </p>
              </SubSection>

              <SubSection title="Summary">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  The speaker recalls watching his son walk away to his first football game at school, 18 years earlier. The child looked uncertain, &ldquo;like a satellite / Wrenched from its orbit.&rdquo; The father reflects on how painful it was to let his child go, but acknowledges that love must allow independence. The poem concludes that &ldquo;selfhood begins with a walking away&rdquo; &mdash; independence requires separation.
                </p>
              </SubSection>

              <SubSection title="Form &amp; Structure">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Four quintains (five-line stanzas) with a loose ABACA rhyme scheme. The regular form provides stability, reflecting the parent&apos;s steady, enduring love. Enjambment across stanzas mimics the ongoing, unresolved nature of parental anxiety. The poem moves chronologically from the specific memory (stanza 1) to broader philosophical reflection (stanza 4), showing how the father has processed the experience over time.
                </p>
              </SubSection>

              <SubSection title="Key Quotes">
                <div className="space-y-3">
                  <Quote
                    text="like a satellite / Wrenched from its orbit"
                    technique="Simile / violent verb"
                    analysis="The space imagery suggests the child was once in the parent's gravitational pull. 'Wrenched' is a violent, painful verb, conveying the force required to let go. The child must leave the parent's orbit to find their own path."
                  />
                  <Quote
                    text="like a winged seed loosened from its parent stem"
                    technique="Simile / natural imagery"
                    analysis="This organic simile presents separation as natural and necessary for growth. Unlike 'wrenched,' this image is gentler, suggesting the father is coming to terms with the separation. The seed must leave to grow into something new."
                  />
                  <Quote
                    text="How selfhood begins with a walking away"
                    technique="Philosophical statement / title echo"
                    analysis="The poem's central message: identity requires independence. 'Selfhood' is a weighty, abstract noun that elevates the everyday moment of a child leaving into something existentially significant."
                  />
                  <Quote
                    text="And love is proved in the letting go"
                    technique="Paradox / concluding aphorism"
                    analysis="The poem's final line is a paradox: true love is demonstrated not by holding on, but by releasing. This inverts the expected definition of love (as closeness) and redefines it as the courage to allow freedom."
                  />
                  <Quote
                    text="I can see / You walking away from me towards the school"
                    technique="Present tense / enjambment"
                    analysis="Although describing a past event, the present tense 'I can see' makes the memory vivid and immediate, suggesting it has never faded. The enjambment across 'I can see / You' mimics the act of watching and the reluctance to let the moment go."
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
                  <ComparisonSuggestion poem="Mother, Any Distance" reason="Both explore parent-child separation, but from opposite perspectives: parent watching child leave vs. child leaving parent." />
                  <ComparisonSuggestion poem="Follower" reason="Both about father-child relationships; both explore how roles change over time." />
                  <ComparisonSuggestion poem="Eden Rock" reason="Both parents reflecting on family bonds; Walking Away is about separation in life, Eden Rock about separation through death." />
                </ul>
              </SubSection>

            </Section>
          </div>

          {/* ───────────────────── 9. Eden Rock ───────────────────── */}
          <div id="eden-rock" style={{ display: visiblePoemIds.has("eden-rock") ? undefined : "none" }}>
            <Section id="eden-rock" title="Eden Rock" poet="Charles Causley (1988)">

              <SubSection title="Context">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Charles Causley was a Cornish poet who wrote this poem late in life, after both his parents had died. His father died when Causley was young, and his mother later. The poem imagines a reunion with his parents in an idealised, Eden-like landscape. &ldquo;Eden Rock&rdquo; is a real place in Cornwall but also evokes the Garden of Eden, suggesting paradise and the afterlife. The poem is widely read as being about approaching death.
                </p>
              </SubSection>

              <SubSection title="Summary">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  The speaker describes his parents at a picnic by a stream, depicted with precise, loving detail &mdash; his mother&apos;s hair, his father&apos;s suit, the specific items in the picnic. His parents beckon him to cross the stream to join them. The final line, &ldquo;I had not thought that it would be like this,&rdquo; suggests the speaker is approaching death and finding it calmer and more peaceful than expected.
                </p>
              </SubSection>

              <SubSection title="Form &amp; Structure">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Free verse with varied stanza lengths. The precise, concrete details (his mother is &ldquo;twenty-three,&rdquo; wearing a &ldquo;sprigged dress&rdquo;) create a hyper-real quality that paradoxically makes the scene feel dreamlike. The final single-line stanza stands alone, separated like the speaker from his parents &mdash; or like the boundary between life and death. The calm, measured tone creates serenity rather than grief.
                </p>
              </SubSection>

              <SubSection title="Key Quotes">
                <div className="space-y-3">
                  <Quote
                    text="They are waiting for me somewhere beyond Eden Rock"
                    technique="Biblical allusion / spatial metaphor"
                    analysis="'Eden' evokes paradise, suggesting the afterlife. 'Beyond' implies something past the boundary of the known world. The present tense 'are waiting' makes the vision feel real and ongoing, as though his parents genuinely exist somewhere, waiting."
                  />
                  <Quote
                    text="My mother, twenty-three, in a sprigged dress"
                    technique="Precise detail / present tense"
                    analysis="The specific age and clothing create a photograph-like clarity. By presenting his mother at 23, Causley restores her to youth, reversing time and death. The present tense makes the past feel eternally present."
                  />
                  <Quote
                    text="The sky whitens as if lit by three suns"
                    technique="Simile / light imagery"
                    analysis="The intensifying light suggests something supernatural or transcendent. 'Three suns' creates an otherworldly atmosphere, moving the poem from realistic memory into visionary territory. The whiteness may represent the threshold between life and death."
                  />
                  <Quote
                    text="My father, twenty-five, in the same suit"
                    technique="Specific detail / parallelism"
                    analysis="The parallel construction with the mother's description ('My mother, twenty-three') creates symmetry and completeness. 'The same suit' suggests this is a perfect, unchanging memory, fixed forever at a specific moment."
                  />
                  <Quote
                    text="I had not thought that it would be like this"
                    technique="Understatement / ambiguity"
                    analysis="The poem's final line is deliberately ambiguous. 'This' could refer to death, the afterlife, or the experience of memory. The understatement — no grand emotion, just quiet surprise — makes the moment deeply moving. The past tense 'had not thought' suggests the crossing has already begun."
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
                  <ComparisonSuggestion poem="Walking Away" reason="Both parents and children connected across time; Walking Away is about living separation, Eden Rock about separation through death." />
                  <ComparisonSuggestion poem="Follower" reason="Both explore father-child relationships and the passage of time, with memory central to both poems." />
                  <ComparisonSuggestion poem="Before You Were Mine" reason="Both speakers reimagine parents at a younger age, using memory to collapse time." />
                </ul>
              </SubSection>

            </Section>
          </div>

          {/* ───────────────────── 10. Follower ───────────────────── */}
          <div id="follower" style={{ display: visiblePoemIds.has("follower") ? undefined : "none" }}>
            <Section id="follower" title="Follower" poet="Seamus Heaney (1966)">

              <SubSection title="Context">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Seamus Heaney grew up on a farm in rural Northern Ireland. Much of his poetry draws on his childhood, farming life, and the Irish landscape. &ldquo;Follower&rdquo; explores his relationship with his father, Patrick Heaney, a skilled ploughman. The poem charts the shift from childhood admiration to adult guilt as the father ages and the roles reverse. Heaney won the Nobel Prize in Literature in 1995.
                </p>
              </SubSection>

              <SubSection title="Summary">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  The speaker remembers following his father as he ploughed the fields, admiring his skill and strength. The young Heaney stumbled behind, wanting to be just like his father but always falling short. The poem&apos;s final stanza reverses the relationship: now the ageing father follows the adult son, and the speaker feels the burden of this role reversal, closing with the blunt, guilty admission that his father &ldquo;will not go away.&rdquo;
                </p>
              </SubSection>

              <SubSection title="Form &amp; Structure">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Six quatrains with an ABAB half-rhyme scheme. The regular, sturdy form mirrors the disciplined, rhythmic work of ploughing. The poem is structured chronologically, with the final stanza creating a sudden reversal. Half-rhymes (&ldquo;plough/follow,&rdquo; &ldquo;sock/pluck&rdquo;) create a sense of things not quite fitting together, reflecting the son&apos;s inability to match his father.
                </p>
              </SubSection>

              <SubSection title="Key Quotes">
                <div className="space-y-3">
                  <Quote
                    text="My father worked with a horse-plough, / His shoulders globed like a full sail strung"
                    technique="Simile / visual imagery"
                    analysis="The nautical simile presents the father as powerful and commanding, like a ship at full sail. 'Globed' emphasises the rounded, muscular physicality of his shoulders. The father is presented as heroic and larger-than-life through the child's admiring gaze."
                  />
                  <Quote
                    text="An expert. He would set the wing / And fit the bright steel-pointed sock"
                    technique="Technical vocabulary / enjambment"
                    analysis="The agricultural vocabulary ('wing,' 'sock,' 'headrig') demonstrates the father's expertise and the speaker's deep familiarity with his world. The short sentence 'An expert' is a direct, emphatic declaration of admiration."
                  />
                  <Quote
                    text="I stumbled in his hob-nailed wake"
                    technique="Nautical metaphor / verb choice"
                    analysis="'Wake' continues the nautical imagery, placing the father as a great ship and the child bobbing behind. 'Stumbled' emphasises the child's clumsiness and inability to keep up, creating a poignant gap between aspiration and reality."
                  />
                  <Quote
                    text="I wanted to grow up and plough"
                    technique="Simple declarative / childhood desire"
                    analysis="The simple, direct statement captures childhood ambition with touching honesty. The desire to 'plough' is both literal (to farm) and metaphorical (to be as capable and strong as his father)."
                  />
                  <Quote
                    text="But today / It is my father who keeps stumbling / Behind me, and will not go away"
                    technique="Role reversal / volta"
                    analysis="The devastating final reversal uses the same verb 'stumbling' now applied to the father, completing the role reversal. 'Will not go away' is deliberately ambiguous: it conveys both the father's physical persistence and the speaker's guilt, which will not leave him."
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
                  <ComparisonSuggestion poem="Walking Away" reason="Both explore parent-child bonds with changing roles; both use physical imagery to convey emotional truths." />
                  <ComparisonSuggestion poem="Climbing My Grandfather" reason="Both present children admiring strong, physical grandfather/father figures. Both use extended physical metaphors." />
                  <ComparisonSuggestion poem="Mother, Any Distance" reason="Both about parent-child relationships and the tension between connection and independence." />
                </ul>
              </SubSection>

            </Section>
          </div>

          {/* ───────────────────── 11. Mother, Any Distance ───────────────────── */}
          <div id="mother--any-distance" style={{ display: visiblePoemIds.has("mother--any-distance") ? undefined : "none" }}>
            <Section id="mother-any-distance" title="Mother, Any Distance" poet="Simon Armitage (1993)">

              <SubSection title="Context">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Simon Armitage is a contemporary poet and current Poet Laureate. This poem comes from his collection <em>Book of Matches</em>, where each poem is designed to be read in the time it takes a match to burn. The poem describes a son measuring up a new house with his mother&apos;s help, using the tape measure as a metaphor for the bond between parent and child as the child gains independence.
                </p>
              </SubSection>

              <SubSection title="Summary">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  The speaker asks his mother to help him measure his new home using a tape measure. She holds the base (the &ldquo;zero-end&rdquo;) while he walks further and further away, up the stairs, to the loft. The tape measure becomes a metaphor for the umbilical cord connecting them. As he reaches the skylight, he is at the point of breaking free, caught between the safety of his mother and the freedom of the open sky.
                </p>
              </SubSection>

              <SubSection title="Form &amp; Structure">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  An extended sonnet of 16 lines (two lines beyond the traditional 14), reflecting how the speaker stretches beyond the conventional form just as he stretches beyond his mother&apos;s reach. The near-sonnet form connects the poem to the tradition of love poetry. The poem moves spatially upward through the house (ground floor, stairs, loft, skylight), mirroring the child&apos;s growth toward independence.
                </p>
              </SubSection>

              <SubSection title="Key Quotes">
                <div className="space-y-3">
                  <Quote
                    text="Mother, any distance greater than a single span / requires a second pair of hands"
                    technique="Direct address / metaphor"
                    analysis="The opening directly addresses the mother, establishing intimacy. The practical observation about measuring becomes a metaphor: for any significant life distance, the speaker needs his mother's support. 'Single span' puns on the hand measurement and a lifetime."
                  />
                  <Quote
                    text="You at the zero-end, me with the spool of tape"
                    technique="Spatial metaphor"
                    analysis="The mother anchors the 'zero-end' — the starting point, the origin. The speaker moves away with the 'spool,' which can extend but is still connected. This precisely captures the parent-child dynamic: she is the fixed foundation; he is the explorer."
                  />
                  <Quote
                    text="Anchor. Kite."
                    technique="Single-word sentences / metaphor"
                    analysis="These two stripped-back metaphors are the poem's most powerful moment. The mother is the 'anchor' (steady, grounding, safe) and the child is the 'kite' (soaring, free, but tethered). The full stop between them enacts the tension between connection and separation."
                  />
                  <Quote
                    text="I space-walk through the empty bedrooms"
                    technique="Metaphor / verb choice"
                    analysis="'Space-walk' suggests the son is an astronaut exploring unknown territory, making the new home feel alien and exciting. It also implies weightlessness and vulnerability — he is untethered and in unfamiliar space."
                  />
                  <Quote
                    text="to fall or fly"
                    technique="Alliteration / antithesis"
                    analysis="The alliterative pair encapsulates the poem's central tension: independence brings both the possibility of failure ('fall') and freedom ('fly'). The ambiguity is deliberate — the outcome is uncertain, and that uncertainty is the cost of growing up."
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
                  <ComparisonSuggestion poem="Walking Away" reason="Both explore parent-child separation, from opposite perspectives. Both end with the tension of letting go." />
                  <ComparisonSuggestion poem="Before You Were Mine" reason="Both Armitage and Duffy write about their mothers, exploring the complex dynamics of parent-child love." />
                  <ComparisonSuggestion poem="Follower" reason="Both use physical, practical activities as metaphors for parent-child relationships and changing roles." />
                </ul>
              </SubSection>

            </Section>
          </div>

          {/* ───────────────────── 12. Before You Were Mine ───────────────────── */}
          <div id="before-you-were-mine" style={{ display: visiblePoemIds.has("before-you-were-mine") ? undefined : "none" }}>
            <Section id="before-you-were-mine" title="Before You Were Mine" poet="Carol Ann Duffy (1993)">

              <SubSection title="Context">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Carol Ann Duffy was the first female Poet Laureate. This poem imagines her mother&apos;s life before she became a parent, using old photographs as a starting point. Duffy reimagines her mother as a glamorous, carefree young woman and expresses a possessive, retrospective longing for a version of her mother she never knew. The title reverses the usual parent-child dynamic: it is the child who &ldquo;owns&rdquo; the parent.
                </p>
              </SubSection>

              <SubSection title="Summary">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  The speaker imagines her mother ten years before her birth: laughing with friends on a Glasgow street, dancing, being glamorous. She contrasts this carefree youth with the reality of motherhood, suggesting that becoming a parent meant her mother lost some of her sparkle. The poem is possessive &mdash; the speaker repeatedly claims her mother (&ldquo;you were mine&rdquo;) and suggests that even before birth, the mother somehow belonged to the future child.
                </p>
              </SubSection>

              <SubSection title="Form &amp; Structure">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Four quintains (five-line stanzas) in free verse, each stanza roughly corresponding to a different time period or photograph. The poem moves non-chronologically, jumping between past and present, mimicking how we browse photographs. The consistent use of second person (&ldquo;you&rdquo;) throughout creates intimacy and a sense of direct address, as though speaking to the photograph.
                </p>
              </SubSection>

              <SubSection title="Key Quotes">
                <div className="space-y-3">
                  <Quote
                    text="I'm ten years away from the corner you laugh on"
                    technique="Temporal distortion / spatial metaphor"
                    analysis="The speaker describes time as physical distance, as though she is approaching through space toward her mother. 'Ten years away' suggests the child is already moving toward existence, creating a sense of fate and inevitability."
                  />
                  <Quote
                    text="The decade ahead of my loud, possessive yell was the best one, eh?"
                    technique="Colloquial language / self-awareness"
                    analysis="'Loud, possessive yell' is a strikingly honest description of a baby's cry, acknowledging that the child's arrival was demanding and possessive. The rhetorical 'eh?' creates an intimate, conversational tone. The speaker recognises that motherhood cost her mother something."
                  />
                  <Quote
                    text="your polka-dot dress blows round your legs. Marilyn"
                    technique="Pop culture allusion / visual imagery"
                    analysis="The comparison to Marilyn Monroe elevates the mother to iconic status. The polka-dot dress blowing in the wind recreates the famous Monroe image, presenting the mother as glamorous and desirable — an identity she had before becoming 'just' a mother."
                  />
                  <Quote
                    text="I knew you would dance like that"
                    technique="Dramatic irony / temporal manipulation"
                    analysis="The speaker claims knowledge of her mother's past self from a position of future existence, creating an eerie temporal collapse. It asserts a deep, almost supernatural connection between mother and child."
                  />
                  <Quote
                    text="Even then I wanted the bold girl / winking in Portobello, somewhere in France"
                    technique="Possessive desire / enjambment"
                    analysis="'Even then' implies the speaker's possessive love existed before she was born, which is both tender and unsettling. The enjambment across 'bold girl' emphasises the mother's confidence and freedom. The speaker wants the young, bold version of her mother."
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
                  <ComparisonSuggestion poem="Eden Rock" reason="Both reimagine parents at a younger age, using memory/imagination to collapse time and restore them to their youth." />
                  <ComparisonSuggestion poem="Mother, Any Distance" reason="Both children writing about their mothers, exploring love, dependency, and the complex dynamics of the relationship." />
                  <ComparisonSuggestion poem="Walking Away" reason="Contrasts: Day Lewis writes from the parent's perspective; Duffy writes from the child's. Both explore the sacrifices of parenthood." />
                </ul>
              </SubSection>

            </Section>
          </div>

          {/* ───────────────────── 13. Winter Swans ───────────────────── */}
          <div id="winter-swans" style={{ display: visiblePoemIds.has("winter-swans") ? undefined : "none" }}>
            <Section id="winter-swans" title="Winter Swans" poet="Owen Sheers (2005)">

              <SubSection title="Context">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Owen Sheers is a Welsh poet. This poem describes a couple walking by a lake after an argument, who observe swans and find reconciliation in the natural world. Swans are traditionally symbols of lifelong fidelity (they mate for life), and the poem uses this symbolism to suggest that the couple&apos;s bond, though strained, is enduring. The poem comes from his 2005 collection <em>Skirrid Hill</em> (skirrid meaning &ldquo;divorce&rdquo; or &ldquo;separation&rdquo; in Welsh).
                </p>
              </SubSection>

              <SubSection title="Summary">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  After two days of rain (and implied arguments), a couple walk silently by a lake. They observe swans tipping their bodies into the water and resurfacing. The sight of the swans prompts a reconnection: the couple&apos;s hands eventually find each other &ldquo;like a pair of wings settling after flight.&rdquo; The poem traces a journey from distance and tension to quiet reconciliation.
                </p>
              </SubSection>

              <SubSection title="Form &amp; Structure">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Mostly tercets (three-line stanzas) with a final couplet. The tercets create an uneven, off-balance feeling &mdash; like the couple&apos;s relationship. The shift to a couplet at the end symbolises the couple coming back together: two lines united, just as two people reunite. Enjambment throughout mirrors the continuous, flowing movement of the walk and the gradual process of reconciliation.
                </p>
              </SubSection>

              <SubSection title="Key Quotes">
                <div className="space-y-3">
                  <Quote
                    text="The clouds had given their all — two days of rain and then a break"
                    technique="Pathetic fallacy / double meaning"
                    analysis="The weather mirrors the relationship: 'two days of rain' suggests a period of emotional turmoil, and 'a break' is ambiguous — both a break in the weather and a relationship break. 'Given their all' personifies the clouds, implying exhaustion after conflict."
                  />
                  <Quote
                    text="waterlogged earth / gulping for breath"
                    technique="Personification / enjambment"
                    analysis="The earth is personified as struggling to breathe, mirroring the couple's emotional suffocation during their argument. The enjambment across 'earth / gulping' enacts the gasping, with the line break creating a pause before 'gulping.'"
                  />
                  <Quote
                    text="they halved themselves in the water, / icebergs of white feather"
                    technique="Metaphor / visual imagery"
                    analysis="The swans are 'halved' — half visible, half hidden — like the couple, who have hidden emotions beneath the surface. The 'iceberg' metaphor reinforces this: there is much more beneath the surface than is visible."
                  />
                  <Quote
                    text="and I noticed our hands, that had moved somehow, / palm to palm"
                    technique="Tactile imagery / religious allusion"
                    analysis="'Somehow' suggests the reconnection was unconscious and natural, not forced. 'Palm to palm' echoes Romeo and Juliet's first meeting (a 'holy palmers' kiss'), elevating the mundane gesture to something sacred."
                  />
                  <Quote
                    text="like a pair of wings settling after flight"
                    technique="Simile / structural shift"
                    analysis="The final simile compares their joined hands to wings, connecting them to the swans. 'Settling after flight' implies the turbulence is over. The couplet form (after tercets) physically enacts the coming together."
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
                  <ComparisonSuggestion poem="Neutral Tones" reason="Both use nature to reflect on a relationship, but Hardy shows love dying while Sheers shows it recovering." />
                  <ComparisonSuggestion poem="Sonnet 29" reason="Both present love as powerful and transformative, using natural imagery as their central vehicle." />
                  <ComparisonSuggestion poem="Letters from Yorkshire" reason="Both explore quiet, understated forms of connection, finding meaning in shared experience rather than grand gestures." />
                </ul>
              </SubSection>

            </Section>
          </div>

          {/* ───────────────────── 14. Singh Song! ───────────────────── */}
          <div id="singh-song-" style={{ display: visiblePoemIds.has("singh-song-") ? undefined : "none" }}>
            <Section id="singh-song" title="Singh Song!" poet="Daljit Nagra (2007)">

              <SubSection title="Context">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Daljit Nagra is a British poet of Punjabi heritage. This poem explores the dual identity of a British-Indian shopkeeper who balances running his father&apos;s corner shop with his love for his new wife. The poem celebrates cultural hybridity, using phonetic Punjabi-English to capture the vitality of a multicultural Britain. The exclamation mark in the title suggests joy and energy. &ldquo;Singh&rdquo; puns on &ldquo;sing&rdquo; &mdash; this is literally a song of love.
                </p>
              </SubSection>

              <SubSection title="Summary">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  The speaker is a young shopkeeper who repeatedly leaves his father&apos;s shop unattended to be with his new wife upstairs. Customers complain about the state of the shop, but the speaker doesn&apos;t care &mdash; his wife is more important. The poem alternates between the complaints of customers (in italics) and the speaker&apos;s joyful descriptions of his wife and their love. The poem ends with the couple sitting in the shop at midnight, looking at the moon, completely absorbed in each other.
                </p>
              </SubSection>

              <SubSection title="Form &amp; Structure">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Free verse with no regular rhyme scheme, but a strong internal musicality created by phonetic spelling and repetition. The alternation between customers&apos; complaints (italicised) and the speaker&apos;s voice creates a comic, rhythmic contrast. The poem&apos;s structure mirrors the speaker&apos;s life: shuttling between shop duties and love. Refrain-like repetitions (&ldquo;my bride&rdquo;) create a song-like quality, fitting the title.
                </p>
              </SubSection>

              <SubSection title="Key Quotes">
                <div className="space-y-3">
                  <Quote
                    text="I run my daddy's shop"
                    technique="Colloquial diction / cultural context"
                    analysis="The informal 'daddy' immediately establishes the familial duty and cultural context. The present tense 'I run' suggests routine, but also implies the father's expectations. The speaker's identity is defined partly by family obligation."
                  />
                  <Quote
                    text="my bride / she effing at my mum / in all di colours of Punjabi"
                    technique="Code-switching / humour"
                    analysis="The wife swears at his mother 'in all di colours of Punjabi,' which is both shocking and celebratory. The phrase 'all di colours' transforms her anger into something vibrant and beautiful. The wife is rebellious and unconventional, challenging expectations."
                  />
                  <Quote
                    text="she is di milk dat is churn / she is di bread dat is bake"
                    technique="Metaphor / phonetic spelling"
                    analysis="The wife is described through shop imagery — milk and bread — humorously blending romance with the everyday world of the shop. The phonetic spelling ('dat,' 'di') captures the speaker's accent and cultural identity. She is essential sustenance."
                  />
                  <Quote
                    text="from di stool each ov us say / dat moon is a yoyo"
                    technique="Metaphor / shared perspective"
                    analysis="The shared observation of the moon as a yoyo is playful and intimate, showing the couple's unique, private language of love. The yoyo metaphor makes the cosmic seem toylike, reflecting their youthful, joyful love."
                  />
                  <Quote
                    text="Hey Singh, ver is yoo muder?"
                    technique="Phonetic spelling / dialogue"
                    analysis="The phonetic spelling of the customer's complaint captures the multicultural community's voices. The italicised customer complaints serve as a comic chorus, contrasting worldly concerns with the speaker's romantic priorities."
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
                  <ComparisonSuggestion poem="Love's Philosophy" reason="Both celebrate love's power; Shelley's is frustrated, Nagra's is fulfilled and joyful." />
                  <ComparisonSuggestion poem="The Farmer's Bride" reason="Stark contrast: Nagra shows a joyful, equal marriage; Mew shows a marriage defined by fear and imbalance." />
                  <ComparisonSuggestion poem="Letters from Yorkshire" reason="Both explore how relationships exist within the context of everyday working life." />
                </ul>
              </SubSection>

            </Section>
          </div>

          {/* ───────────────────── 15. Climbing My Grandfather ───────────────────── */}
          <div id="climbing-my-grandfather" style={{ display: visiblePoemIds.has("climbing-my-grandfather") ? undefined : "none" }}>
            <Section id="climbing-grandfather" title="Climbing My Grandfather" poet="Andrew Waterhouse (2000)">

              <SubSection title="Context">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Andrew Waterhouse was a young British poet and ecologist who died in 2001. This poem uses an extended metaphor of mountain climbing to describe exploring and understanding his grandfather. The grandfather is presented as a vast, awe-inspiring landscape to be scaled, suggesting the child&apos;s sense of the grandfather as monumental and enduring. The poem is a celebration of familial love and the desire to truly know another person.
                </p>
              </SubSection>

              <SubSection title="Summary">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  The speaker describes climbing their grandfather as though he were a mountain. Starting at the foot (his shoes), the speaker ascends via his legs, belt, chest, and face, using features like wrinkles and liver spots as handholds. The journey culminates at the summit &mdash; the grandfather&apos;s head &mdash; where the speaker feels his heartbeat and the &ldquo;slow pulse of his good heart.&rdquo; The climb represents getting to know someone deeply.
                </p>
              </SubSection>

              <SubSection title="Form &amp; Structure">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  A single continuous stanza in free verse, reflecting the unbroken, sustained effort of the climb. The lack of stanza breaks mirrors the continuous, intimate journey of exploring the grandfather. The poem moves logically upward through the body, creating spatial coherence. Enjambment propels the reader forward, mimicking the climber&apos;s momentum. The absence of punctuation at the end suggests the relationship is ongoing and unfinished.
                </p>
              </SubSection>

              <SubSection title="Key Quotes">
                <div className="space-y-3">
                  <Quote
                    text="I decide to do it free, without a rope or net"
                    technique="Climbing metaphor / risk"
                    analysis="'Free' climbing (without safety equipment) implies vulnerability and trust. The speaker approaches the relationship without defences, willing to take emotional risks. This suggests that true intimacy requires openness and courage."
                  />
                  <Quote
                    text="the dusty earth / that gathers in the crosshatch of his palms"
                    technique="Visual detail / metaphor"
                    analysis="The 'crosshatch' of the palms is both the lines on the grandfather's hands and the texture of a weathered landscape. 'Dusty earth' connects the grandfather to the land, suggesting he is rooted, natural, and enduring."
                  />
                  <Quote
                    text="the soft leather of his belly"
                    technique="Tactile imagery / metaphor"
                    analysis="'Soft leather' is wonderfully specific — it suggests something worn, warm, and comfortable. Leather is strong but yielding, capturing the grandfather's combination of toughness and tenderness."
                  />
                  <Quote
                    text="his still firm chin"
                    technique="Adjective choice"
                    analysis="'Still firm' works on two levels: the chin is physically firm (strong-jawed) and 'still' firm despite age. This quiet acknowledgement of ageing within a celebration of strength is deeply moving."
                  />
                  <Quote
                    text="the ridge of his brow / I put my ear to his mouth / and I can hear the distant / pull of his good heart"
                    technique="Auditory imagery / enjambment"
                    analysis="The 'distant pull' of the heartbeat is heard from the summit, as though from deep within a mountain. 'Good' is a simple, childlike adjective that is powerfully affecting in its plainness. The enjambment across 'distant / pull' enacts the effort of listening carefully."
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
                  <ComparisonSuggestion poem="Follower" reason="Both present admiring portraits of strong, physical father/grandfather figures. Both use extended physical imagery as their central technique." />
                  <ComparisonSuggestion poem="Eden Rock" reason="Both celebrate grandparents/parents with precise, loving physical detail. Both explore the desire to know and connect with older family members." />
                  <ComparisonSuggestion poem="Walking Away" reason="Both explore intergenerational love, though from different perspectives (child looking up vs. parent watching child leave)." />
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
          <h2 className="text-2xl font-bold text-foreground">Comparison Table</h2>
          <p className="mt-2 text-muted-foreground">
            Use this at-a-glance table to find poems that work well together for your comparison essay. Click to expand.
          </p>

          <button
            onClick={() => setShowTable((o) => !o)}
            className="mt-4 inline-flex items-center gap-2 rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-primary/90"
          >
            {showTable ? "Hide" : "Show"} Comparison Table
            <svg
              className={`h-4 w-4 transition-transform ${showTable ? "rotate-180" : ""}`}
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
                    <th className="px-4 py-3 text-left font-semibold">Poem</th>
                    <th className="px-4 py-3 text-left font-semibold">Poet</th>
                    <th className="px-4 py-3 text-left font-semibold">Period</th>
                    <th className="px-4 py-3 text-left font-semibold">Key Themes</th>
                    <th className="px-4 py-3 text-left font-semibold">Tone</th>
                    <th className="px-4 py-3 text-left font-semibold">Form</th>
                  </tr>
                </thead>
                <tbody>
                  {COMPARISON_DATA.map((row, i) => (
                    <tr
                      key={row.poem}
                      className={i % 2 === 0 ? "bg-card" : "bg-muted"}
                    >
                      <td className="px-4 py-3 font-semibold text-primary whitespace-nowrap">{row.poem}</td>
                      <td className="px-4 py-3 text-muted-foreground whitespace-nowrap">{row.poet}</td>
                      <td className="px-4 py-3 text-muted-foreground whitespace-nowrap">{row.type}</td>
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
        <h2 className="text-2xl font-bold text-foreground">Thematic Groupings for Comparison</h2>
        <p className="mt-2 text-muted-foreground mb-8">
          When choosing poems to compare, group them by shared themes. Here are the key clusters.
        </p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              theme: "Romantic Love",
              poems: ["Love's Philosophy", "Sonnet 29", "Porphyria's Lover", "Singh Song!"],
              colour: "border-accent",
            },
            {
              theme: "Loss and Heartbreak",
              poems: ["When We Two Parted", "Neutral Tones", "The Farmer's Bride"],
              colour: "border-warn",
            },
            {
              theme: "Parent-Child Love",
              poems: ["Walking Away", "Follower", "Mother, Any Distance", "Before You Were Mine"],
              colour: "border-success",
            },
            {
              theme: "Family and Memory",
              poems: ["Eden Rock", "Climbing My Grandfather", "Before You Were Mine", "Follower"],
              colour: "border-primary",
            },
            {
              theme: "Nature and Love",
              poems: ["Love's Philosophy", "Sonnet 29", "Winter Swans", "Neutral Tones"],
              colour: "border-accent",
            },
            {
              theme: "Power and Possession",
              poems: ["Porphyria's Lover", "The Farmer's Bride", "Before You Were Mine"],
              colour: "border-warn",
            },
            {
              theme: "Distance and Separation",
              poems: ["Letters from Yorkshire", "Walking Away", "When We Two Parted", "Sonnet 29"],
              colour: "border-primary",
            },
            {
              theme: "Reconciliation and Healing",
              poems: ["Winter Swans", "Letters from Yorkshire", "Sonnet 29"],
              colour: "border-success",
            },
            {
              theme: "Identity and Independence",
              poems: ["Mother, Any Distance", "Singh Song!", "Before You Were Mine"],
              colour: "border-accent",
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
          <h2 className="text-2xl font-bold text-foreground">Exam Tips for Love and Relationships</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Choose Your Comparison Wisely",
                text: "You'll be given one poem and asked to compare it to another of your choice. Pick a poem with clear thematic or structural links — not just the one you know best.",
              },
              {
                title: "Weave, Don't Split",
                text: "Avoid writing about one poem then the other. Instead, make a point about both poems together, using connectives: 'similarly,' 'in contrast,' 'whereas,' 'however.'",
              },
              {
                title: "Short Quotes, Big Analysis",
                text: "Embed single words or short phrases into your sentences. Long block quotes waste time. Instead, zoom in on individual word choices and their effects.",
              },
              {
                title: "Comment on Form and Structure",
                text: "Always discuss the poet's choice of form (sonnet, monologue, free verse), rhyme scheme, line length, and structural features like volta or cyclical endings.",
              },
              {
                title: "Link Context to Meaning",
                text: "Don't just state facts about the poet's life. Explain how context shapes the poem's meaning: 'Byron's secret affair creates the poem's tone of shame and bitterness.'",
              },
              {
                title: "Use Subject Terminology",
                text: "Name techniques accurately: enjambment, caesura, sibilance, volta, dramatic monologue. But always explain the effect — feature-spotting without analysis scores poorly.",
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

      {/* Back link */}
      <section className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        <Link
          href="/resources/poetry"
          className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-primary transition-colors"
        >
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
          </svg>
          Back to Poetry Hub
        </Link>
      </section>

    </>
  );
}
