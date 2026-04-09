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
  { poem: "Ozymandias", poet: "Shelley", type: "Romantic", themes: "Power of nature, pride, transience", tone: "Ironic, mocking", form: "Irregular sonnet, iambic pentameter" },
  { poem: "London", poet: "Blake", type: "Romantic", themes: "Power of humans, corruption, suffering", tone: "Angry, despairing", form: "Four quatrains, ABAB rhyme" },
  { poem: "Extract from The Prelude", poet: "Wordsworth", type: "Romantic", themes: "Power of nature, fear, memory", tone: "Awe, terror, reflective", form: "Blank verse, epic style" },
  { poem: "My Last Duchess", poet: "Browning", type: "Victorian", themes: "Power, pride, control, jealousy", tone: "Sinister, controlled", form: "Dramatic monologue, rhyming couplets" },
  { poem: "The Charge of the Light Brigade", poet: "Tennyson", type: "Victorian", themes: "War, honour, duty, patriotism", tone: "Admiring, energetic, mournful", form: "Dactylic dimeter, irregular stanzas" },
  { poem: "Exposure", poet: "Owen", type: "WWI", themes: "Reality of war, suffering, futility", tone: "Bleak, hopeless, numb", form: "Eight stanzas, pararhyme" },
  { poem: "Storm on the Island", poet: "Heaney", type: "Modern", themes: "Power of nature, conflict, fear", tone: "Conversational to fearful", form: "Blank verse, single stanza" },
  { poem: "Bayonet Charge", poet: "Hughes", type: "Modern", themes: "Reality of war, terror, futility", tone: "Frantic, violent, confused", form: "Free verse, three stanzas, enjambment" },
  { poem: "Remains", poet: "Armitage", type: "Modern", themes: "Reality of war, guilt, PTSD", tone: "Colloquial, haunted", form: "Free verse, colloquial monologue" },
  { poem: "Poppies", poet: "Weir", type: "Modern", themes: "Loss, grief, memory, identity", tone: "Tender, sorrowful", form: "Free verse, four stanzas" },
  { poem: "War Photographer", poet: "Duffy", type: "Modern", themes: "War, guilt, media, suffering", tone: "Detached, angry, compassionate", form: "Four sestets, ABBCDD rhyme" },
  { poem: "Tissue", poet: "Dharker", type: "Modern", themes: "Power, fragility, identity, control", tone: "Reflective, philosophical", form: "Ten quatrains + single line, enjambment" },
  { poem: "The Emigree", poet: "Rumens", type: "Modern", themes: "Identity, memory, displacement, conflict", tone: "Defiant, nostalgic", form: "Three stanzas, free verse, refrain" },
  { poem: "Checking Out Me History", poet: "Agard", type: "Modern", themes: "Identity, power, colonialism, anger", tone: "Angry, celebratory, defiant", form: "Alternating stanzas, phonetic dialect" },
  { poem: "Kamikaze", poet: "Garland", type: "Modern", themes: "Conflict, honour, shame, family", tone: "Reflective, ambiguous", form: "Seven sestets + couplet, third-person narrative" },
];

/* ================================================================== */
/*  Poem metadata for search & filter                                  */
/* ================================================================== */

const POEM_META = [
  { id: "ozymandias", title: "Ozymandias", poet: "Percy Bysshe Shelley", themes: ["Power of nature", "Pride and arrogance", "Transience of power"], period: "Romantic" },
  { id: "london", title: "London", poet: "William Blake", themes: ["Power of humans", "Corruption and injustice", "Suffering and oppression"], period: "Romantic" },
  { id: "the-prelude", title: "Extract from The Prelude", poet: "William Wordsworth", themes: ["Power of nature", "Fear and awe", "Memory and reflection"], period: "Romantic" },
  { id: "my-last-duchess", title: "My Last Duchess", poet: "Robert Browning", themes: ["Power of humans", "Pride and arrogance", "Control and dominance"], period: "Victorian" },
  { id: "charge-of-the-light-brigade", title: "The Charge of the Light Brigade", poet: "Alfred Lord Tennyson", themes: ["Reality of conflict", "Honour and duty", "Loss and grief"], period: "Victorian" },
  { id: "exposure", title: "Exposure", poet: "Wilfred Owen", themes: ["Reality of conflict", "Suffering and oppression", "Loss and grief", "Power of nature"], period: "WWI" },
  { id: "storm-on-the-island", title: "Storm on the Island", poet: "Seamus Heaney", themes: ["Power of nature", "Fear and awe", "Identity and belonging"], period: "Modern" },
  { id: "bayonet-charge", title: "Bayonet Charge", poet: "Ted Hughes", themes: ["Reality of conflict", "Fear and awe", "Loss and grief"], period: "Modern" },
  { id: "remains", title: "Remains", poet: "Simon Armitage", themes: ["Reality of conflict", "Guilt and responsibility", "Memory and reflection"], period: "Modern" },
  { id: "poppies", title: "Poppies", poet: "Jane Weir", themes: ["Loss and grief", "Memory and reflection", "Identity and belonging"], period: "Modern" },
  { id: "war-photographer", title: "War Photographer", poet: "Carol Ann Duffy", themes: ["Reality of conflict", "Guilt and responsibility", "Suffering and oppression"], period: "Modern" },
  { id: "tissue", title: "Tissue", poet: "Imtiaz Dharker", themes: ["Power of humans", "Transience of power", "Identity and belonging"], period: "Modern" },
  { id: "the-emigree", title: "The Emigree", poet: "Carol Rumens", themes: ["Identity and belonging", "Memory and reflection", "Control and dominance"], period: "Modern" },
  { id: "checking-out-me-history", title: "Checking Out Me History", poet: "John Agard", themes: ["Identity and belonging", "Power of humans", "Corruption and injustice"], period: "Modern" },
  { id: "kamikaze", title: "Kamikaze", poet: "Beatrice Garland", themes: ["Honour and duty", "Identity and belonging", "Memory and reflection", "Loss and grief"], period: "Modern" },
];

const ALL_THEMES = Array.from(new Set(POEM_META.flatMap((p) => p.themes))).sort();
const ALL_PERIODS = Array.from(new Set(POEM_META.map((p) => p.period)));

/* ================================================================== */
/*  Page                                                               */
/* ================================================================== */

export default function PowerAndConflictPage() {
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
      <section className="bg-gradient-to-br from-primary to-primary/90 px-4 py-16 text-white sm:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-white/70">
            AQA GCSE English Literature &middot; Poetry Anthology
          </p>
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Power and Conflict
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/90">
            Complete analysis of all 15 poems in the AQA Power and Conflict cluster. Key quotations, techniques, themes, context, and comparison guidance for every poem.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <span className="rounded-full bg-card/15 px-3 py-1 text-sm font-medium">15 Poems</span>
            <span className="rounded-full bg-card/15 px-3 py-1 text-sm font-medium">60+ Key Quotes</span>
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

          {/* ───────────────────── 1. Ozymandias ───────────────────── */}
          <div id="ozymandias" style={{ display: visiblePoemIds.has("ozymandias") ? undefined : "none" }}>
            <Section id="ozymandias" title="Ozymandias" poet="Percy Bysshe Shelley (1818)" defaultOpen>

              <SubSection title="Summary">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  The speaker recounts a traveller&apos;s description of a ruined statue in the desert. The statue depicts Ozymandias (the Greek name for the Egyptian pharaoh Ramesses II), whose arrogant inscription boasts of his supreme power. Yet all that remains is a shattered monument surrounded by empty desert, undermining his claims. Shelley uses this image to argue that all human power is temporary, and nature ultimately triumphs over even the mightiest rulers.
                </p>
              </SubSection>

              <SubSection title="Form &amp; Structure">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  An irregular sonnet (loosely Petrarchan) with an unconventional rhyme scheme (ABABACDCEDEFEF) that mirrors the fragmented, broken statue it describes. The poem uses iambic pentameter, but this is frequently disrupted, reflecting the ruined grandeur. The narrative is framed through multiple voices (the speaker, the traveller, the sculptor, Ozymandias himself), distancing the reader from Ozymandias and diminishing his authority. The volta occurs around line 9 where the inscription is revealed, followed by the devastating ironic contrast of the empty desert.
                </p>
              </SubSection>

              <SubSection title="Key Quotes">
                <div className="space-y-3">
                  <Quote
                    text="Two vast and trunkless legs of stone"
                    technique="Visual imagery / synecdoche"
                    analysis="The statue is reduced to disconnected body parts, symbolising how Ozymandias's power has been fragmented by time. The adjective 'trunkless' emphasises destruction and incompleteness, undermining any sense of grandeur."
                  />
                  <Quote
                    text="Half sunk a shattered visage lies, whose frown, / And wrinkled lip, and sneer of cold command"
                    technique="Tricolon / characterisation"
                    analysis="The three facial expressions ('frown,' 'wrinkled lip,' 'sneer') characterise Ozymandias as cruel and tyrannical. Even in ruin, his arrogance is preserved. The phrase 'cold command' suggests power exercised without compassion."
                  />
                  <Quote
                    text="Look on my Works, ye Mighty, and despair!"
                    technique="Imperative / dramatic irony"
                    analysis="Ozymandias commands other rulers to admire his achievements, but the dramatic irony is that nothing remains. The imperative 'Look' and 'despair' now carry an unintended meaning: despair because even the greatest power is impermanent."
                  />
                  <Quote
                    text="Nothing beside remains. Round the decay / Of that colossal Wreck, boundless and bare"
                    technique="Alliteration / juxtaposition"
                    analysis="The blunt declarative 'Nothing beside remains' delivers the poem's central message with devastating simplicity. The alliteration of 'boundless and bare' emphasises the vast emptiness of the desert, contrasting with Ozymandias's boastful claims."
                  />
                  <Quote
                    text="The lone and level sands stretch far away"
                    technique="Alliteration / sibilance"
                    analysis="The final image of the desert stretching endlessly reinforces nature's dominance over human power. The sibilance creates a whispering, fading sound that mirrors the erasure of Ozymandias's legacy."
                  />
                </div>
              </SubSection>

              <SubSection title="Themes">
                <div className="flex flex-wrap gap-2">
                  <ThemeTag theme="Transience of power" />
                  <ThemeTag theme="Pride and arrogance" />
                  <ThemeTag theme="Power of nature" />
                  <ThemeTag theme="Art outlasting power" />
                </div>
              </SubSection>

              <SubSection title="Comparison Suggestions">
                <ul className="space-y-2 list-none">
                  <ComparisonSuggestion poem="My Last Duchess" reason="Both explore arrogant, controlling figures who abuse power. However, the Duke's power is current while Ozymandias's has been destroyed by time." />
                  <ComparisonSuggestion poem="London" reason="Both critique abuses of power. Shelley targets individual tyranny while Blake targets institutional and systemic oppression." />
                  <ComparisonSuggestion poem="Tissue" reason="Both explore the fragility and transience of human power, though Dharker focuses on modern constructs while Shelley uses an ancient setting." />
                </ul>
              </SubSection>

            </Section>
          </div>

          {/* ───────────────────── 2. London ───────────────────── */}
          <div id="london" style={{ display: visiblePoemIds.has("london") ? undefined : "none" }}>
            <Section id="london" title="London" poet="William Blake (1794)">

              <SubSection title="Summary">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  The speaker walks through the streets of London, observing suffering and oppression everywhere. Each stanza presents a different aspect of the city&apos;s misery: the restricted lives of its people, the cries of chimney sweepers and soldiers, and the moral corruption symbolised by disease and exploitation. Blake attacks the institutions he blames &mdash; the Church, the monarchy, and the government &mdash; for creating and maintaining this suffering.
                </p>
              </SubSection>

              <SubSection title="Form &amp; Structure">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Four quatrains with a regular ABAB rhyme scheme create a relentless, inescapable rhythm that mirrors the trapped, cyclical nature of suffering in the city. The poem is structured as a walk through London, with each stanza presenting a new scene of misery. The use of first person (&ldquo;I wander&rdquo;) makes the speaker a direct witness, increasing authenticity. The repetition of &ldquo;every&rdquo; and &ldquo;charter&apos;d&rdquo; creates a sense of universal, inescapable oppression.
                </p>
              </SubSection>

              <SubSection title="Key Quotes">
                <div className="space-y-3">
                  <Quote
                    text="I wander thro' each charter'd street, / Near where the charter'd Thames does flow"
                    technique="Repetition / political language"
                    analysis="The repetition of 'charter'd' is deeply ironic: charters supposedly grant freedoms, but here they represent restriction and control. Even the river Thames, a natural feature, has been claimed and controlled by those in power."
                  />
                  <Quote
                    text="Marks of weakness, marks of woe"
                    technique="Repetition / visual imagery"
                    analysis="The repetition of 'marks' suggests both visible signs of suffering and permanent stains or scars. The parallel structure creates a relentless catalogue of misery that feels unavoidable."
                  />
                  <Quote
                    text="The mind-forg'd manacles"
                    technique="Metaphor / compound adjective"
                    analysis="One of Blake's most powerful images: the people are mentally imprisoned, not just physically oppressed. 'Mind-forg'd' suggests that people have been conditioned to accept their oppression, making the chains psychological as well as social."
                  />
                  <Quote
                    text="How the Chimney-sweepers cry / Every blackning Church appalls"
                    technique="Juxtaposition / symbolism"
                    analysis="Blake juxtaposes the suffering of child chimney sweepers with the Church, which should protect the vulnerable but instead ignores their plight. 'Blackning' suggests both the soot and moral corruption. 'Appalls' means both to horrify and, literally, to make pale (like a funeral pall)."
                  />
                  <Quote
                    text="Blasts the new-born Infants tear"
                    technique="Violent imagery / semantic field of disease"
                    analysis="The final stanza presents a cycle of suffering where disease passes from generation to generation. The verb 'blasts' is violent and destructive, suggesting that innocence is destroyed from birth. The new-born infant inherits the corruption of the society."
                  />
                </div>
              </SubSection>

              <SubSection title="Themes">
                <div className="flex flex-wrap gap-2">
                  <ThemeTag theme="Corruption and injustice" />
                  <ThemeTag theme="Suffering and oppression" />
                  <ThemeTag theme="Power of humans" />
                  <ThemeTag theme="Loss of innocence" />
                </div>
              </SubSection>

              <SubSection title="Comparison Suggestions">
                <ul className="space-y-2 list-none">
                  <ComparisonSuggestion poem="Ozymandias" reason="Both Romantic poets critique abuses of power, but Blake focuses on institutional oppression while Shelley targets individual tyranny." />
                  <ComparisonSuggestion poem="Checking Out Me History" reason="Both protest against oppressive systems. Blake attacks the Church and monarchy; Agard attacks the colonial education system." />
                  <ComparisonSuggestion poem="Exposure" reason="Both present individuals suffering under powerful forces beyond their control. Blake's victims are oppressed by institutions; Owen's soldiers by war and nature." />
                </ul>
              </SubSection>

            </Section>
          </div>

          {/* ───────────────────── 3. Extract from The Prelude ───────────────────── */}
          <div id="the-prelude" style={{ display: visiblePoemIds.has("the-prelude") ? undefined : "none" }}>
            <Section id="the-prelude" title="Extract from The Prelude" poet="William Wordsworth (1850)">

              <SubSection title="Summary">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  This autobiographical extract describes a young Wordsworth stealing a rowing boat at night and rowing across a lake. Initially confident and excited, he is terrified when a huge mountain appears to rise up and pursue him. He returns the boat and is left deeply unsettled for days, haunted by the experience. The episode represents a key moment in his spiritual development, where nature asserts its sublime power over human confidence.
                </p>
              </SubSection>

              <SubSection title="Form &amp; Structure">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Written in blank verse (unrhymed iambic pentameter), the epic style reflects the grandeur of the subject and Wordsworth&apos;s ambition to write a great autobiographical poem. The extract has a clear narrative arc: confidence, terror, and lasting psychological impact. Enjambment creates a breathless, flowing quality that mirrors the movement of the boat and the escalating fear. The shift from first-person active agency (&ldquo;I&rdquo; rowing) to the mountain&apos;s dominance structurally enacts the transfer of power from human to nature.
                </p>
              </SubSection>

              <SubSection title="Key Quotes">
                <div className="space-y-3">
                  <Quote
                    text="One summer evening (led by her)"
                    technique="Personification / parenthetical aside"
                    analysis="Nature is personified as a female guide ('her'), suggesting Wordsworth sees nature as a nurturing but powerful force. The parenthetical aside hints that even this apparently spontaneous act was directed by nature, foreshadowing the lesson he is about to learn."
                  />
                  <Quote
                    text="lustily / I dipped my oars into the silent lake"
                    technique="Adverb / contrast"
                    analysis="The adverb 'lustily' conveys the boy's youthful confidence and physical energy. This contrasts sharply with the 'silent lake,' creating an opposition between human noise and nature's stillness that foreshadows the reversal of power."
                  />
                  <Quote
                    text="a huge peak, black and huge... / Upreared its head"
                    technique="Personification / repetition"
                    analysis="The mountain is personified as a living creature rearing up like a threatening beast. The repetition of 'huge' emphasises the overwhelming scale. The mountain seems to actively pursue the boy, asserting nature's dominance over human confidence."
                  />
                  <Quote
                    text="measured motion like a living thing, / Strode after me"
                    technique="Simile / personification"
                    analysis="The mountain appears to chase the boy with deliberate, threatening movement. 'Strode' gives it purposeful, human-like motion. The 'measured motion' suggests nature is controlled and powerful, in contrast to the boy's panicked flight."
                  />
                  <Quote
                    text="huge and mighty forms, that do not live / Like living men, moved slowly through the mind"
                    technique="Oxymoron / psychological imagery"
                    analysis="The experience leaves a lasting psychological impact. The paradox of forms that 'do not live' yet move through the mind suggests the sublime power of nature to reshape human consciousness. The trauma is internalised and enduring."
                  />
                </div>
              </SubSection>

              <SubSection title="Themes">
                <div className="flex flex-wrap gap-2">
                  <ThemeTag theme="Power of nature" />
                  <ThemeTag theme="Fear and awe" />
                  <ThemeTag theme="Memory and reflection" />
                  <ThemeTag theme="The sublime" />
                </div>
              </SubSection>

              <SubSection title="Comparison Suggestions">
                <ul className="space-y-2 list-none">
                  <ComparisonSuggestion poem="Storm on the Island" reason="Both explore nature's power to terrify and overwhelm. Wordsworth's experience is solitary and transformative; Heaney's community is collectively threatened." />
                  <ComparisonSuggestion poem="Exposure" reason="Both present nature as an overwhelming force. Wordsworth's experience is a single formative moment; Owen presents nature as a relentless enemy in war." />
                  <ComparisonSuggestion poem="Ozymandias" reason="Both explore the insignificance of human power against greater forces, though Shelley focuses on time's erosion while Wordsworth focuses on nature's immediate, terrifying presence." />
                </ul>
              </SubSection>

            </Section>
          </div>

          {/* ───────────────────── 4. My Last Duchess ───────────────────── */}
          <div id="my-last-duchess" style={{ display: visiblePoemIds.has("my-last-duchess") ? undefined : "none" }}>
            <Section id="my-last-duchess" title="My Last Duchess" poet="Robert Browning (1842)">

              <SubSection title="Summary">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Set in Renaissance Italy, the Duke of Ferrara shows a visitor (an envoy negotiating his next marriage) a portrait of his previous wife. Through his monologue, the Duke reveals his jealousy and controlling nature: he resented that the Duchess smiled at everyone equally and appeared to value simple pleasures as much as his noble name. He strongly implies that he had her killed (&ldquo;I gave commands; / Then all smiles stopped together&rdquo;). Now he controls her image as a painting, the ultimate act of possession.
                </p>
              </SubSection>

              <SubSection title="Form &amp; Structure">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  A dramatic monologue in rhyming couplets (heroic couplets in iambic pentameter). The rhyming couplets suggest the Duke&apos;s desire for order and control, but the heavy use of enjambment works against the neat rhyme, mirroring the way his controlled surface barely conceals his sinister nature. The single, unbroken stanza reflects the Duke&apos;s domination of the conversation &mdash; the envoy never speaks. The poem&apos;s structure mirrors the Duke&apos;s character: polished on the surface, disturbing beneath.
                </p>
              </SubSection>

              <SubSection title="Key Quotes">
                <div className="space-y-3">
                  <Quote
                    text="That's my last Duchess painted on the wall, / Looking as if she were alive"
                    technique="Possessive pronoun / dramatic irony"
                    analysis="The possessive 'my' immediately establishes the Duke's sense of ownership. The phrase 'as if she were alive' is chillingly ironic, hinting at her fate before the reader fully understands it. The painting gives the Duke the control he could not exert over the living woman."
                  />
                  <Quote
                    text="She had / A heart — how shall I say? — too soon made glad"
                    technique="Caesura / euphemism"
                    analysis="The mid-line pause ('how shall I say?') is a calculated performance of restraint, yet the Duke's criticism is clear: he resented her capacity for joy. He presents her warmth as a flaw, revealing his possessiveness and inability to tolerate anything beyond his control."
                  />
                  <Quote
                    text="I gave commands; / Then all smiles stopped together"
                    technique="Euphemism / enjambment"
                    analysis="This chilling euphemism strongly implies the Duke ordered the Duchess's death. The enjambment forces a pause after 'commands,' creating dramatic tension. The casual delivery reveals how the Duke sees her death as a simple exercise of power, not a moral crime."
                  />
                  <Quote
                    text="as if alive"
                    technique="Repetition / motif"
                    analysis="The phrase echoes the opening, creating a sinister refrain. The painting is the Duke's ideal version of his wife: silent, still, and entirely under his control. She can now only 'look' as he permits visitors to see her."
                  />
                </div>
              </SubSection>

              <SubSection title="Themes">
                <div className="flex flex-wrap gap-2">
                  <ThemeTag theme="Power of humans" />
                  <ThemeTag theme="Pride and arrogance" />
                  <ThemeTag theme="Control and dominance" />
                  <ThemeTag theme="Jealousy and objectification" />
                </div>
              </SubSection>

              <SubSection title="Comparison Suggestions">
                <ul className="space-y-2 list-none">
                  <ComparisonSuggestion poem="Ozymandias" reason="Both present arrogant, powerful men. However, Ozymandias's power has been destroyed by time, while the Duke's remains terrifyingly intact." />
                  <ComparisonSuggestion poem="Checking Out Me History" reason="Both explore how those in power control narratives. The Duke controls his wife's story; colonial powers control history." />
                  <ComparisonSuggestion poem="London" reason="Both explore abuses of power. Browning focuses on individual tyranny; Blake on institutional oppression." />
                </ul>
              </SubSection>

            </Section>
          </div>

          {/* ───────────────────── 5. The Charge of the Light Brigade ───────────────────── */}
          <div id="charge-of-the-light-brigade" style={{ display: visiblePoemIds.has("charge-of-the-light-brigade") ? undefined : "none" }}>
            <Section id="charge-of-the-light-brigade" title="The Charge of the Light Brigade" poet="Alfred Lord Tennyson (1854)">

              <SubSection title="Summary">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Tennyson commemorates the disastrous cavalry charge at the Battle of Balaclava during the Crimean War (1854), in which 600 British soldiers rode into a valley surrounded by Russian cannon due to a miscommunicated order. The poem celebrates the soldiers&apos; courage and obedience while acknowledging the catastrophic blunder that sent them to their deaths. It moves from the charge itself, through the battle, to a memorial honouring their sacrifice.
                </p>
              </SubSection>

              <SubSection title="Form &amp; Structure">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Six stanzas of varying length use dactylic dimeter (a stressed syllable followed by two unstressed) to create a galloping, rhythmic effect that mimics the charge of the horses. Heavy repetition (&ldquo;Cannon to right of them,&rdquo; &ldquo;rode the six hundred&rdquo;) creates a ritualistic, memorial quality. The poem&apos;s structure mirrors the charge: stanzas 1&ndash;3 ride into the valley, stanzas 4&ndash;5 describe the fighting and retreat, and stanza 6 serves as a eulogy. The narrowing and expanding stanza lengths mirror the advance into and retreat from the valley.
                </p>
              </SubSection>

              <SubSection title="Key Quotes">
                <div className="space-y-3">
                  <Quote
                    text="Into the valley of Death / Rode the six hundred"
                    technique="Biblical allusion / repetition"
                    analysis="The 'valley of Death' alludes to Psalm 23, casting the soldiers as walking through ultimate danger. The refrain 'rode the six hundred' acts as a memorial roll-call, honouring the collective sacrifice. Its repetition throughout creates a drumbeat of remembrance."
                  />
                  <Quote
                    text="Theirs not to make reply, / Theirs not to reason why, / Theirs but to do and die"
                    technique="Anaphora / tricolon"
                    analysis="The triple repetition of 'theirs' emphasises the soldiers' complete obedience and lack of agency. The rhyme of 'why' and 'die' connects questioning with death, implying that duty requires unquestioning sacrifice. This can be read as both admiring and troubling."
                  />
                  <Quote
                    text="Cannon to right of them, / Cannon to left of them, / Cannon in front of them"
                    technique="Repetition / spatial imagery"
                    analysis="The repetition surrounds the reader with cannon fire, just as the soldiers were surrounded. The systematic listing of positions emphasises the hopelessness of the situation: they were trapped on all sides with no escape."
                  />
                  <Quote
                    text="Honour the charge they made! / Honour the Light Brigade"
                    technique="Imperative / anaphora"
                    analysis="The final stanza shifts to direct address, commanding the reader to remember and honour the soldiers. The imperative 'Honour' transforms the poem from narrative into memorial, insisting on the enduring importance of their sacrifice."
                  />
                </div>
              </SubSection>

              <SubSection title="Themes">
                <div className="flex flex-wrap gap-2">
                  <ThemeTag theme="Honour and duty" />
                  <ThemeTag theme="Reality of conflict" />
                  <ThemeTag theme="Loss and grief" />
                  <ThemeTag theme="Patriotism and remembrance" />
                </div>
              </SubSection>

              <SubSection title="Comparison Suggestions">
                <ul className="space-y-2 list-none">
                  <ComparisonSuggestion poem="Exposure" reason="Both depict the reality of war, but Tennyson glorifies sacrifice while Owen presents war as futile and pointless. Compare their contrasting attitudes to duty." />
                  <ComparisonSuggestion poem="Bayonet Charge" reason="Both describe soldiers in the act of charging, but Tennyson celebrates collective heroism while Hughes focuses on individual terror and the collapse of patriotic ideals." />
                  <ComparisonSuggestion poem="Remains" reason="Contrast Tennyson's memorialising tone with Armitage's raw, guilt-ridden account. Both deal with the aftermath of conflict on those who survive." />
                </ul>
              </SubSection>

            </Section>
          </div>

          {/* ───────────────────── 6. Exposure ───────────────────── */}
          <div id="exposure" style={{ display: visiblePoemIds.has("exposure") ? undefined : "none" }}>
            <Section id="exposure" title="Exposure" poet="Wilfred Owen (1917)">

              <SubSection title="Summary">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Owen describes soldiers in the trenches of World War I, not fighting but simply enduring the brutal cold. The real enemy is not the opposing army but the weather itself: freezing winds, snow, and rain that slowly drain the soldiers of life and hope. The poem conveys the monotony, futility, and psychological torment of trench warfare. The soldiers question what they are fighting for, and each stanza returns to the same bleak refrain: &ldquo;But nothing happens.&rdquo;
                </p>
              </SubSection>

              <SubSection title="Form &amp; Structure">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Eight five-line stanzas with a consistent ABBAC rhyme scheme use pararhyme (half-rhyme), where consonants match but vowels differ (e.g. &ldquo;knive us&rdquo; / &ldquo;nervous&rdquo;). This creates a sense of discord, unease, and incompleteness that reflects the soldiers&apos; suffering. Each stanza ends with a shortened final line, often returning to the refrain &ldquo;But nothing happens,&rdquo; which enacts the futility and monotony of their situation. The cyclical structure (the poem seems to go nowhere) mirrors the soldiers&apos; entrapment.
                </p>
              </SubSection>

              <SubSection title="Key Quotes">
                <div className="space-y-3">
                  <Quote
                    text="Our brains ache, in the merciless east winds that knive us"
                    technique="Personification / violent verb"
                    analysis="The opening immediately establishes the wind as the enemy, personified with the violent verb 'knive' (an invented word from 'knife'). Nature is presented as deliberately cruel ('merciless'), actively attacking the soldiers. The collective 'our' creates solidarity in suffering."
                  />
                  <Quote
                    text="We only know war lasts, rain soaks, and clouds sag stormy"
                    technique="Tricolon / pathetic fallacy"
                    analysis="The tricolon reduces their entire experience to three bleak realities. The heavy, monosyllabic words mirror the weight of exhaustion. 'Clouds sag stormy' uses pathetic fallacy to reflect the soldiers' drooping spirits and the oppressive atmosphere."
                  />
                  <Quote
                    text="Dawn massing in the east her melancholy army"
                    technique="Personification / military metaphor"
                    analysis="Dawn, usually a symbol of hope, is reimagined as a threatening military force. Nature itself marshals an army against the soldiers, subverting expectations and suggesting there is no relief or rescue coming."
                  />
                  <Quote
                    text="For love of God seems dying"
                    technique="Ambiguity / religious allusion"
                    analysis="This can be read two ways: God's love for humanity is fading, or the soldiers' faith in God is dying. Either interpretation suggests profound spiritual despair. Owen challenges the idea that suffering in war serves any divine purpose."
                  />
                  <Quote
                    text="But nothing happens"
                    technique="Refrain / anticlimax"
                    analysis="The repeated refrain is devastatingly anticlimactic. After vivid descriptions of suffering, the bathos of 'nothing happens' captures the futility of trench warfare. The soldiers endure immense hardship without any meaningful outcome. The repetition traps the reader in the same cycle of hopelessness."
                  />
                </div>
              </SubSection>

              <SubSection title="Themes">
                <div className="flex flex-wrap gap-2">
                  <ThemeTag theme="Reality of conflict" />
                  <ThemeTag theme="Power of nature" />
                  <ThemeTag theme="Suffering and oppression" />
                  <ThemeTag theme="Futility of war" />
                </div>
              </SubSection>

              <SubSection title="Comparison Suggestions">
                <ul className="space-y-2 list-none">
                  <ComparisonSuggestion poem="Storm on the Island" reason="Both present nature as a threatening, powerful force. Owen's soldiers are helpless victims; Heaney's community tries to prepare but is still overwhelmed." />
                  <ComparisonSuggestion poem="The Charge of the Light Brigade" reason="Stark contrast: Tennyson glorifies war and sacrifice; Owen presents war as futile suffering with no glory or purpose." />
                  <ComparisonSuggestion poem="Bayonet Charge" reason="Both WWI-inspired poems that strip away patriotic ideals to reveal the terror and futility of conflict." />
                </ul>
              </SubSection>

            </Section>
          </div>

          {/* ───────────────────── 7. Storm on the Island ───────────────────── */}
          <div id="storm-on-the-island" style={{ display: visiblePoemIds.has("storm-on-the-island") ? undefined : "none" }}>
            <Section id="storm-on-the-island" title="Storm on the Island" poet="Seamus Heaney (1966)">

              <SubSection title="Summary">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  The speaker describes a remote island community preparing for and enduring a violent storm. The inhabitants initially appear confident in their preparations &mdash; their houses are solidly built, they have no trees that could fall. However, as the storm intensifies, the poem reveals that nature&apos;s power is terrifying precisely because it is invisible and uncontrollable. The poem can also be read as an allegory for the political conflict in Northern Ireland (the first eight letters spell &ldquo;STORMONT,&rdquo; the seat of the Northern Irish government).
                </p>
              </SubSection>

              <SubSection title="Form &amp; Structure">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Written in blank verse (unrhymed iambic pentameter) in a single continuous stanza, the form reflects both the relentless force of the storm and conversational, seemingly casual speech (&ldquo;We are prepared: we build our houses squat&rdquo;). The poem moves from confident preparation to growing unease, and the final lines reveal a profound shift: what was dismissed as &ldquo;nothing&rdquo; becomes terrifying. The enjambment mirrors the unpredictable, unstoppable force of the wind.
                </p>
              </SubSection>

              <SubSection title="Key Quotes">
                <div className="space-y-3">
                  <Quote
                    text="We are prepared: we build our houses squat"
                    technique="Declarative / collective pronoun"
                    analysis="The opening statement is confident and assertive. The collective 'we' creates a sense of community solidarity. 'Squat' suggests low, sturdy buildings designed to withstand nature. Yet this confidence is gradually undermined as the poem progresses."
                  />
                  <Quote
                    text="spits like a tame cat / Turned savage"
                    technique="Simile / semantic shift"
                    analysis="The sea is compared to a domestic cat that becomes wild, suggesting that familiar, seemingly safe things can turn dangerous without warning. The enjambment across 'tame cat / Turned savage' enacts the sudden transformation from safety to danger."
                  />
                  <Quote
                    text="We just sit tight while wind dives / And strafes invisibly"
                    technique="Military metaphor / violent verbs"
                    analysis="The military vocabulary ('dives,' 'strafes') transforms the storm into an aerial attack, linking natural power to conflict. If read as an allegory for Northern Ireland, the military language takes on a literal dimension. 'Invisibly' suggests an enemy that cannot be seen or fought."
                  />
                  <Quote
                    text="It is a huge nothing that we fear"
                    technique="Oxymoron / paradox"
                    analysis="The poem's conclusion is paradoxical: the islanders fear 'nothing,' yet this nothing is 'huge.' The absence of a tangible enemy makes the fear worse, not better. This captures the nature of anxiety and, potentially, the invisible threat of political violence."
                  />
                </div>
              </SubSection>

              <SubSection title="Themes">
                <div className="flex flex-wrap gap-2">
                  <ThemeTag theme="Power of nature" />
                  <ThemeTag theme="Fear and awe" />
                  <ThemeTag theme="Conflict (political allegory)" />
                  <ThemeTag theme="Human vulnerability" />
                </div>
              </SubSection>

              <SubSection title="Comparison Suggestions">
                <ul className="space-y-2 list-none">
                  <ComparisonSuggestion poem="Extract from The Prelude" reason="Both explore nature's power to overwhelm and terrify. Wordsworth experiences nature alone; Heaney's community faces it together." />
                  <ComparisonSuggestion poem="Exposure" reason="Both use nature as a threatening force, with military language blurring the line between natural and human conflict." />
                  <ComparisonSuggestion poem="Ozymandias" reason="Both show human efforts dwarfed by greater forces. Heaney's storm threatens the present; Shelley's desert has already erased the past." />
                </ul>
              </SubSection>

            </Section>
          </div>

          {/* ───────────────────── 8. Bayonet Charge ───────────────────── */}
          <div id="bayonet-charge" style={{ display: visiblePoemIds.has("bayonet-charge") ? undefined : "none" }}>
            <Section id="bayonet-charge" title="Bayonet Charge" poet="Ted Hughes (1957)">

              <SubSection title="Summary">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  The poem describes a single soldier&apos;s experience during a bayonet charge in World War I. It begins in medias res (in the middle of action) with the soldier already running. He is overwhelmed by terror and confusion, and the second stanza sees him freeze as patriotic ideals (&ldquo;King, honour, human dignity&rdquo;) dissolve under the reality of combat. The final stanza presents him as reduced to a terrified animal, driven by raw survival instinct rather than any noble cause.
                </p>
              </SubSection>

              <SubSection title="Form &amp; Structure">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Three stanzas of irregular length use free verse with no consistent rhyme scheme, reflecting the chaos and disorder of battle. The poem begins in medias res, plunging the reader into the action without warning, just as the soldier is thrown into combat. The second stanza slows dramatically as the soldier pauses, creating a structural contrast between frantic action and frozen thought. Heavy enjambment and long, breathless sentences mirror the soldier&apos;s panicked running.
                </p>
              </SubSection>

              <SubSection title="Key Quotes">
                <div className="space-y-3">
                  <Quote
                    text="Suddenly he awoke and was running — raw"
                    technique="In medias res / adjective"
                    analysis="The poem opens mid-action, disorientating the reader just as the soldier is disorientated. 'Awoke' suggests the soldier has been jolted from safety into terrifying reality. 'Raw' is placed at the end of the line for emphasis, suggesting vulnerability, exposure, and pain."
                  />
                  <Quote
                    text="raw / In raw-seamed hot khaki"
                    technique="Repetition / tactile imagery"
                    analysis="The repetition of 'raw' connects the soldier's emotional state to his physical discomfort. The uniform that should protect him is instead painful, its rough seams chafing. The detail makes the experience visceral and immediate."
                  />
                  <Quote
                    text="King, honour, human dignity, etcetera / Dropped like luxuries"
                    technique="Bathos / simile"
                    analysis="The dismissive 'etcetera' reduces patriotic ideals to an afterthought, stripping them of meaning. These abstract concepts are compared to 'luxuries' — pleasant but non-essential things that are abandoned when survival is at stake. Hughes devastatingly critiques the ideals used to justify war."
                  />
                  <Quote
                    text="a yellow hare that rolled like a flame"
                    technique="Simile / symbolism"
                    analysis="The terrified hare, caught in the crossfire, symbolises the soldier's own helplessness and terror. The simile 'like a flame' suggests both the hare's rapid movement and the surrounding gunfire. The natural world is caught up in human violence."
                  />
                </div>
              </SubSection>

              <SubSection title="Themes">
                <div className="flex flex-wrap gap-2">
                  <ThemeTag theme="Reality of conflict" />
                  <ThemeTag theme="Fear and awe" />
                  <ThemeTag theme="Loss of identity" />
                  <ThemeTag theme="Futility of patriotic ideals" />
                </div>
              </SubSection>

              <SubSection title="Comparison Suggestions">
                <ul className="space-y-2 list-none">
                  <ComparisonSuggestion poem="The Charge of the Light Brigade" reason="Both depict soldiers charging into battle, but Tennyson glorifies collective duty while Hughes reveals individual terror and the collapse of ideology." />
                  <ComparisonSuggestion poem="Exposure" reason="Both present the reality of WWI, stripping away patriotic glamour. Owen focuses on the torment of waiting; Hughes on the terror of action." />
                  <ComparisonSuggestion poem="Remains" reason="Both explore the psychological impact of conflict on individual soldiers, though Hughes captures the moment of combat while Armitage focuses on the aftermath." />
                </ul>
              </SubSection>

            </Section>
          </div>

          {/* ───────────────────── 9. Remains ───────────────────── */}
          <div id="remains" style={{ display: visiblePoemIds.has("remains") ? undefined : "none" }}>
            <Section id="remains" title="Remains" poet="Simon Armitage (2008)">

              <SubSection title="Summary">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Based on the real testimony of a soldier, the speaker describes shooting a looter while on patrol. The soldier and his colleagues open fire, and the man is left dying in the road. The speaker is then haunted by the memory: the dead man&apos;s image stays with him, appearing when he tries to sleep, walk, or even think. The poem explores how a single act of violence can cause lasting psychological trauma, presenting the reality of PTSD (post-traumatic stress disorder).
                </p>
              </SubSection>

              <SubSection title="Form &amp; Structure">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Written in free verse with a colloquial, conversational tone that mimics a soldier recounting his experience. The poem begins with the casual &ldquo;On another occasion,&rdquo; as if this is just one of many stories, but this ordinariness makes the content more disturbing. The stanzas are mostly regular quatrains until the final couplet, where the structure breaks down, mirroring the soldier&apos;s psychological disintegration. The shift from past tense (the event) to present tense (the haunting) shows the trauma is ongoing and inescapable.
                </p>
              </SubSection>

              <SubSection title="Key Quotes">
                <div className="space-y-3">
                  <Quote
                    text="probably armed, possibly not"
                    technique="Hedging language / moral ambiguity"
                    analysis="The words 'probably' and 'possibly' reveal the soldier's uncertainty about whether the shooting was justified. This ambiguity is the source of his guilt: he can never know if the man was a genuine threat. The casual tone makes the moral weight even more unsettling."
                  />
                  <Quote
                    text="And one of them legs it up the road"
                    technique="Colloquial language / slang"
                    analysis="The informal 'legs it' is strikingly casual for a moment of life-or-death violence. This reflects how soldiers use everyday language to process extraordinary events, and how military culture can normalise violence."
                  />
                  <Quote
                    text="his blood-Loss shadow stays on the street"
                    technique="Imagery / double meaning"
                    analysis="The bloodstain literally remains on the road, but 'shadow' also suggests the dead man's presence lingers as a ghost or memory. The image foreshadows the psychological haunting that dominates the second half of the poem."
                  />
                  <Quote
                    text="his bloody life in my bloody hands"
                    technique="Pun / repetition"
                    analysis="'Bloody' works as both a swear word (reflecting the soldier's colloquial voice) and a literal description (his hands are stained with blood). The double meaning captures the collision of casual language and profound guilt. The responsibility is inescapable: 'my' hands."
                  />
                  <Quote
                    text="he's here in my head when I close my eyes"
                    technique="Present tense / psychological imagery"
                    analysis="The shift to present tense shows the trauma is not in the past but ongoing. The dead man has moved from the street into the soldier's mind, where he cannot be escaped. Closing your eyes should bring rest, but for this soldier it brings the image closer."
                  />
                </div>
              </SubSection>

              <SubSection title="Themes">
                <div className="flex flex-wrap gap-2">
                  <ThemeTag theme="Reality of conflict" />
                  <ThemeTag theme="Guilt and responsibility" />
                  <ThemeTag theme="Memory and reflection" />
                  <ThemeTag theme="Psychological trauma" />
                </div>
              </SubSection>

              <SubSection title="Comparison Suggestions">
                <ul className="space-y-2 list-none">
                  <ComparisonSuggestion poem="War Photographer" reason="Both explore the lasting psychological impact of witnessing violence. Armitage's speaker is a soldier; Duffy's is a civilian photographer. Both struggle to process what they have seen." />
                  <ComparisonSuggestion poem="Bayonet Charge" reason="Both strip away patriotic ideals to reveal the raw, terrifying reality of combat. Hughes captures the moment; Armitage captures the aftermath." />
                  <ComparisonSuggestion poem="Poppies" reason="Both explore the human cost of war, but from different perspectives: the soldier who inflicts violence and the mother who loses a child to it." />
                </ul>
              </SubSection>

            </Section>
          </div>

          {/* ───────────────────── 10. Poppies ───────────────────── */}
          <div id="poppies" style={{ display: visiblePoemIds.has("poppies") ? undefined : "none" }}>
            <Section id="poppies" title="Poppies" poet="Jane Weir (2009)">

              <SubSection title="Summary">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  A mother describes the experience of her son leaving for military service. The poem moves between different moments in time: pinning a poppy to his lapel, smoothing his collar, and later visiting a war memorial. Through domestic imagery and sensory details, Weir captures the private, personal grief of a mother whose loss is set against the public rituals of remembrance. The poem does not confirm whether the son has been killed, leaving the grief ambiguous and universal.
                </p>
              </SubSection>

              <SubSection title="Form &amp; Structure">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Written in free verse with four stanzas of irregular length, the lack of a fixed structure reflects the mother&apos;s fragmented emotional state and the non-linear nature of memory. Enjambment creates a flowing, stream-of-consciousness quality as memories merge and overlap. The poem moves between past and present, domestic space and public memorial, personal grief and national remembrance. The lack of rhyme creates an intimate, prose-like tone that suits the personal subject matter.
                </p>
              </SubSection>

              <SubSection title="Key Quotes">
                <div className="space-y-3">
                  <Quote
                    text="Sellotape bandaged around my hand"
                    technique="Domestic imagery / metaphor"
                    analysis="The Sellotape from craft activities becomes a 'bandage,' transforming an innocent domestic object into a symbol of injury and healing. The mother's emotional wounds are expressed through everyday objects, grounding the poem in the personal and domestic."
                  />
                  <Quote
                    text="the world overflowing / like a treasure chest"
                    technique="Simile / enjambment"
                    analysis="This simile captures the mother's memory of her son's childhood wonder and excitement. The enjambment across lines mirrors the 'overflowing' quality. It contrasts painfully with the present moment of loss, making the grief more acute."
                  />
                  <Quote
                    text="I was brave, as I walked / with you, to the front door"
                    technique="Military language / double meaning"
                    analysis="'Brave' and 'front' carry military connotations, but are used in a domestic context. The mother must be as courageous as a soldier to let her son go. 'The front door' also echoes 'the front' (the front line), blurring the boundary between home and battlefield."
                  />
                  <Quote
                    text="released a bird from its cage"
                    technique="Metaphor / symbolism"
                    analysis="The metaphor of releasing a caged bird captures both the freedom of the son leaving and the mother's act of letting go. There is tenderness but also loss: the bird is free, but the cage-holder is left empty. It also suggests the irreversibility of the departure."
                  />
                  <Quote
                    text="leaned against it like a bird"
                    technique="Simile / structural echo"
                    analysis="At the war memorial, the mother leans against it 'like a bird,' echoing the earlier caged-bird metaphor but now she is the vulnerable one. The role reversal is poignant: the son has flown; the mother is left exposed and fragile."
                  />
                </div>
              </SubSection>

              <SubSection title="Themes">
                <div className="flex flex-wrap gap-2">
                  <ThemeTag theme="Loss and grief" />
                  <ThemeTag theme="Memory and reflection" />
                  <ThemeTag theme="Identity and belonging" />
                  <ThemeTag theme="Personal vs public conflict" />
                </div>
              </SubSection>

              <SubSection title="Comparison Suggestions">
                <ul className="space-y-2 list-none">
                  <ComparisonSuggestion poem="Remains" reason="Both explore the personal cost of conflict, but from opposite perspectives: the soldier's guilt and the mother's grief." />
                  <ComparisonSuggestion poem="War Photographer" reason="Both examine the gap between those who experience conflict directly and those who observe from a distance." />
                  <ComparisonSuggestion poem="Kamikaze" reason="Both explore family responses to conflict and the tension between duty and personal relationships." />
                </ul>
              </SubSection>

            </Section>
          </div>

          {/* ───────────────────── 11. War Photographer ───────────────────── */}
          <div id="war-photographer" style={{ display: visiblePoemIds.has("war-photographer") ? undefined : "none" }}>
            <Section id="war-photographer" title="War Photographer" poet="Carol Ann Duffy (1985)">

              <SubSection title="Summary">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  A war photographer develops his photographs in a darkroom after returning from a conflict zone. As the images emerge, he remembers the suffering he witnessed. The poem contrasts the horror of war zones (Belfast, Phnom Penh, somewhere from which the &ldquo;running children in a nightmare heat&rdquo; come) with &ldquo;Rural England&rdquo; and its comfortable indifference. Duffy explores the photographer&apos;s moral conflict: he records suffering for a living, but the public barely engages with the images before moving on. The poem ends with him boarding a plane to another war zone, trapped in a cycle.
                </p>
              </SubSection>

              <SubSection title="Form &amp; Structure">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Four sestets (six-line stanzas) with a regular ABBCDD rhyme scheme create a controlled, ordered structure that mirrors the photographer&apos;s attempt to impose order on chaotic, traumatic memories. The regularity contrasts with the disturbing content, just as the neat rows of photographs contrast with the chaos they depict. The poem moves from the darkroom to the war zone and back, with a cyclical ending as the photographer prepares to leave again &mdash; suggesting the cycle of violence and indifference is unbroken.
                </p>
              </SubSection>

              <SubSection title="Key Quotes">
                <div className="space-y-3">
                  <Quote
                    text="In his darkroom he is finally alone / with spools of suffering set out in ordered rows"
                    technique="Alliteration / juxtaposition"
                    analysis="The sibilance in 'spools of suffering' creates a hissing, unsettling sound. 'Ordered rows' echoes graves in a military cemetery, but also the neat filing of photographs. The juxtaposition of 'suffering' and 'ordered' highlights the tension between raw human pain and its careful, clinical documentation."
                  />
                  <Quote
                    text="All flesh is grass"
                    technique="Biblical allusion"
                    analysis="This quotation from Isaiah emphasises the fragility and brevity of human life. In the context of war photography, it reminds the reader that the subjects of these photographs were living people, not just images. The allusion gives the photographer's work a spiritual or moral weight."
                  />
                  <Quote
                    text="a half-formed ghost"
                    technique="Metaphor / imagery"
                    analysis="As the photograph develops in solution, the emerging image is described as a ghost. This captures the idea that the photograph preserves a person who may now be dead. 'Half-formed' suggests the image, like the public's understanding, is incomplete."
                  />
                  <Quote
                    text="Rural England"
                    technique="Proper noun / contrast"
                    analysis="The capitalisation of 'Rural England' makes it a specific, named place, set against the unnamed war zones. The phrase evokes comfort, safety, and green countryside — everything that the war zones are not. Duffy uses this contrast to critique British complacency."
                  />
                  <Quote
                    text="The reader's eyeballs prick / with tears between the bath and pre-lunch beers"
                    technique="Bathos / contrast"
                    analysis="The public's emotional response is fleeting and shallow: they feel momentary pity but quickly return to comfortable routines. The domestic details ('bath,' 'pre-lunch beers') trivialise the suffering. Duffy critiques a society that can observe atrocities and remain fundamentally unmoved."
                  />
                </div>
              </SubSection>

              <SubSection title="Themes">
                <div className="flex flex-wrap gap-2">
                  <ThemeTag theme="Reality of conflict" />
                  <ThemeTag theme="Guilt and responsibility" />
                  <ThemeTag theme="Suffering and oppression" />
                  <ThemeTag theme="Indifference and complacency" />
                </div>
              </SubSection>

              <SubSection title="Comparison Suggestions">
                <ul className="space-y-2 list-none">
                  <ComparisonSuggestion poem="Remains" reason="Both explore the psychological impact of witnessing violence. The photographer is haunted by images; the soldier is haunted by memories. Both struggle to process what they have seen." />
                  <ComparisonSuggestion poem="Poppies" reason="Both examine the distance between those who experience conflict and those who observe it from safety. Both explore how individuals process grief and suffering." />
                  <ComparisonSuggestion poem="London" reason="Both critique society's failure to respond adequately to suffering. Blake's speaker witnesses London's misery; Duffy's photographer records distant wars for an indifferent audience." />
                </ul>
              </SubSection>

            </Section>
          </div>

          {/* ───────────────────── 12. Tissue ───────────────────── */}
          <div id="tissue" style={{ display: visiblePoemIds.has("tissue") ? undefined : "none" }}>
            <Section id="tissue" title="Tissue" poet="Imtiaz Dharker (2006)">

              <SubSection title="Summary">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Dharker uses paper as an extended metaphor to explore the structures humans create &mdash; maps, religious texts, receipts, architecture &mdash; and how fragile these constructs really are. The poem suggests that the things we use to organise, record, and control life (borders, money, buildings) are as thin and temporary as tissue paper. In the final stanza, the poem shifts to the human body itself, suggesting that human life is the most important &ldquo;tissue&rdquo; of all, more significant than any constructed system.
                </p>
              </SubSection>

              <SubSection title="Form &amp; Structure">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Ten quatrains followed by a single isolated line create a structure that itself feels thin and fragile, like layers of tissue. The heavy use of enjambment (both within and between stanzas) means ideas flow across boundaries, mirroring the poem&apos;s argument that human-made borders and structures are artificial. The final single line (&ldquo;turned into your skin&rdquo;) breaks the pattern, drawing attention to its message: human life matters more than any system. The lack of rhyme and loose metre create a reflective, philosophical tone.
                </p>
              </SubSection>

              <SubSection title="Key Quotes">
                <div className="space-y-3">
                  <Quote
                    text="Paper that lets the light / shine through"
                    technique="Enjambment / symbolism"
                    analysis="Light shining through paper suggests transparency, truth, and fragility. The enjambment across lines enacts the light passing through, as meaning flows beyond the line boundary. Paper is positioned as something that reveals rather than conceals."
                  />
                  <Quote
                    text="the sun shines through / their borderlines"
                    technique="Double meaning / imagery"
                    analysis="'Borderlines' refers literally to lines on a map but also to national borders. The sun shining through them suggests these divisions are artificial and impermanent. Dharker questions the human need to divide and control the world through arbitrary boundaries."
                  />
                  <Quote
                    text="might fly our lives like paper kites"
                    technique="Simile / symbolism"
                    analysis="The image of lives as paper kites suggests both freedom (kites soaring) and fragility (paper tearing). It imagines a world where we hold our structures lightly, accepting their impermanence rather than clinging to them."
                  />
                  <Quote
                    text="turned into your skin"
                    technique="Direct address / structural shift"
                    analysis="The final single line shifts from the abstract to the personal. 'Your skin' is the most fragile tissue of all, yet also the most important. The direct address ('your') involves the reader personally, suggesting that human identity and the body matter more than any paper structure."
                  />
                </div>
              </SubSection>

              <SubSection title="Themes">
                <div className="flex flex-wrap gap-2">
                  <ThemeTag theme="Power of humans" />
                  <ThemeTag theme="Transience of power" />
                  <ThemeTag theme="Identity and belonging" />
                  <ThemeTag theme="Fragility of human structures" />
                </div>
              </SubSection>

              <SubSection title="Comparison Suggestions">
                <ul className="space-y-2 list-none">
                  <ComparisonSuggestion poem="Ozymandias" reason="Both explore the impermanence of human power and constructs. Shelley uses a ruined statue; Dharker uses the metaphor of paper. Both suggest nature and time outlast human ambition." />
                  <ComparisonSuggestion poem="London" reason="Both critique human-made systems of control. Blake attacks specific institutions; Dharker questions the concept of human structures more broadly." />
                  <ComparisonSuggestion poem="The Emigree" reason="Both explore borders, identity, and belonging. Dharker questions the validity of borders; Rumens explores how displacement reshapes identity." />
                </ul>
              </SubSection>

            </Section>
          </div>

          {/* ───────────────────── 13. The Emigree ───────────────────── */}
          <div id="the-emigree" style={{ display: visiblePoemIds.has("the-emigree") ? undefined : "none" }}>
            <Section id="the-emigree" title="The Emigree" poet="Carol Rumens (1993)">

              <SubSection title="Summary">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  The speaker reflects on a country they left as a child. Despite knowing the place has been affected by conflict or political oppression (&ldquo;There once was a country... I left it as a child&rdquo;), their memory of it remains sunlit and idealised. External forces &mdash; &ldquo;they&rdquo; who are &ldquo;at the door&rdquo; &mdash; try to intimidate and erase the speaker&apos;s connection to their homeland, but the speaker defiantly clings to their memories and identity. The poem explores how memory, language, and identity persist even under threat.
                </p>
              </SubSection>

              <SubSection title="Form &amp; Structure">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Three stanzas of eight to nine lines with no regular rhyme scheme. Each stanza ends with a refrain about the city being &ldquo;sunlight,&rdquo; creating a defiant, resilient structure that resists the threats described. The poem moves from childhood memory to present-day threat, but the consistent light imagery shows that the speaker&apos;s inner world remains unbroken. The unnamed country and vague threats create a sense of universality: this could be any displaced person&apos;s experience.
                </p>
              </SubSection>

              <SubSection title="Key Quotes">
                <div className="space-y-3">
                  <Quote
                    text="There once was a country... I left it as a child"
                    technique="Fairy-tale opening / ellipsis"
                    analysis="The fairy-tale phrasing ('There once was') creates a dreamlike, nostalgic quality but also suggests the country may no longer exist as the speaker knew it. The ellipsis creates a pause, hinting at loss and the difficulty of articulating the experience of displacement."
                  />
                  <Quote
                    text="my memory of it is sunlight-clear"
                    technique="Compound adjective / light imagery"
                    analysis="The compound adjective 'sunlight-clear' presents the memory as vivid and untarnished. Sunlight suggests warmth, happiness, and clarity. Despite time and distance, the speaker's memory remains bright and positive, defying the reality of what the country has become."
                  />
                  <Quote
                    text="I have no passport, there's no way back at all"
                    technique="Declarative / finality"
                    analysis="The blunt statements acknowledge the permanence of exile. Having no passport means having no official identity or right to return. Yet despite this, the speaker's emotional and imaginative connection to their homeland persists, suggesting identity is not dependent on documents."
                  />
                  <Quote
                    text="They accuse me of being dark in their free city"
                    technique="Ambiguity / irony"
                    analysis="'Dark' is ambiguous: it could refer to skin colour (racial prejudice), secretiveness, or being 'unenlightened.' The irony of 'free city' is sharp: a place that claims to be free yet discriminates against outsiders. The pronoun 'they' creates a faceless, threatening force."
                  />
                  <Quote
                    text="my city takes me dancing through the city / of walls"
                    technique="Personification / contrast"
                    analysis="The speaker's remembered city is personified as a joyful companion that 'takes me dancing,' contrasting with the oppressive 'city of walls' that surrounds them. The internal, remembered city triumphs over the external, hostile one. Memory becomes an act of resistance."
                  />
                </div>
              </SubSection>

              <SubSection title="Themes">
                <div className="flex flex-wrap gap-2">
                  <ThemeTag theme="Identity and belonging" />
                  <ThemeTag theme="Memory and reflection" />
                  <ThemeTag theme="Control and dominance" />
                  <ThemeTag theme="Displacement and exile" />
                </div>
              </SubSection>

              <SubSection title="Comparison Suggestions">
                <ul className="space-y-2 list-none">
                  <ComparisonSuggestion poem="Checking Out Me History" reason="Both explore identity under threat from external forces. Rumens's speaker resists through memory; Agard's speaker resists through reclaiming history." />
                  <ComparisonSuggestion poem="Tissue" reason="Both question the power of borders and human-made structures. Dharker suggests these are fragile; Rumens shows how memory can transcend them." />
                  <ComparisonSuggestion poem="Kamikaze" reason="Both explore the tension between individual identity and social/political pressure, and how memory shapes a person's sense of self." />
                </ul>
              </SubSection>

            </Section>
          </div>

          {/* ───────────────────── 14. Checking Out Me History ───────────────────── */}
          <div id="checking-out-me-history" style={{ display: visiblePoemIds.has("checking-out-me-history") ? undefined : "none" }}>
            <Section id="checking-out-me-history" title="Checking Out Me History" poet="John Agard (1996)">

              <SubSection title="Summary">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Agard, a Guyanese-British poet, protests against a Eurocentric education system that taught him about British historical figures (Guy Fawkes, Lord Nelson, Florence Nightingale) while ignoring the achievements of Black and Caribbean figures (Toussaint L&apos;Ouverture, Nanny de Maroon, Mary Seacole). The poem alternates between mocking the British history he was taught and celebrating the figures who were hidden from him. It is a powerful statement about identity, education, and the politics of who controls historical narratives.
                </p>
              </SubSection>

              <SubSection title="Form &amp; Structure">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  The poem alternates between two distinct visual styles: italicised stanzas about Black historical figures and non-italicised stanzas about the British education system. This structural division physically enacts the separation between the two histories. The poem uses Caribbean dialect (&ldquo;dem,&rdquo; &ldquo;me,&rdquo; &ldquo;dat&rdquo;) as an act of linguistic resistance against Standard English. No regular rhyme scheme, but heavy use of rhythm and repetition creates a spoken-word, performance quality.
                </p>
              </SubSection>

              <SubSection title="Key Quotes">
                <div className="space-y-3">
                  <Quote
                    text="Dem tell me / Dem tell me"
                    technique="Repetition / pronoun"
                    analysis="The repeated refrain 'Dem tell me' establishes a clear opposition between 'dem' (the colonial education system, those in power) and 'me' (the speaker, the colonised). The repetition creates an angry, rhythmic insistence that builds throughout the poem."
                  />
                  <Quote
                    text="Bandage up me eye with me own history"
                    technique="Metaphor / violent imagery"
                    analysis="The metaphor of blindfolding suggests that the colonial education system deliberately prevents the speaker from seeing his own heritage. 'Bandage' implies injury: his identity has been wounded by the erasure of his history. Using 'me own history' as the blindfold is deeply ironic — his history is used against him."
                  />
                  <Quote
                    text="a healing star / among the wounded"
                    technique="Metaphor / imagery"
                    analysis="Mary Seacole is described with luminous, celestial imagery ('star') that elevates her above the British figures listed dismissively elsewhere. The contrast between the reverent tone used for Caribbean heroes and the mocking tone for British history is structurally significant."
                  />
                  <Quote
                    text="But now I checking out me own history"
                    technique="Declarative / dialect"
                    analysis="The shift to 'I' (from the passive 'me' being told) marks the speaker's reclamation of agency. 'Checking out' is deliberately informal and confident. The use of Caribbean dialect throughout is itself an act of resistance against the Standard English of the colonial system."
                  />
                </div>
              </SubSection>

              <SubSection title="Themes">
                <div className="flex flex-wrap gap-2">
                  <ThemeTag theme="Identity and belonging" />
                  <ThemeTag theme="Power of humans" />
                  <ThemeTag theme="Corruption and injustice" />
                  <ThemeTag theme="Resistance and defiance" />
                </div>
              </SubSection>

              <SubSection title="Comparison Suggestions">
                <ul className="space-y-2 list-none">
                  <ComparisonSuggestion poem="London" reason="Both protest against oppressive systems. Blake attacks the Church and monarchy; Agard attacks the colonial education system. Both use repetition to build anger." />
                  <ComparisonSuggestion poem="The Emigree" reason="Both explore identity threatened by external forces. Agard resists through reclaiming history; Rumens resists through preserving memory." />
                  <ComparisonSuggestion poem="My Last Duchess" reason="Both explore who controls narratives. The Duke controls his wife's story; the colonial system controls which histories are told." />
                </ul>
              </SubSection>

            </Section>
          </div>

          {/* ───────────────────── 15. Kamikaze ───────────────────── */}
          <div id="kamikaze" style={{ display: visiblePoemIds.has("kamikaze") ? undefined : "none" }}>
            <Section id="kamikaze" title="Kamikaze" poet="Beatrice Garland (2013)">

              <SubSection title="Summary">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  The poem tells the story of a Japanese kamikaze pilot who turns his plane around instead of completing his suicide mission. As he flies towards his target, he sees the sea below and is reminded of his childhood &mdash; fishing with his father, the beauty of the natural world. These memories overpower his sense of duty, and he returns home. However, his family and community treat him as if he were dead: his wife refuses to speak to him, his children learn to act as if he does not exist. The poem ends ambiguously, questioning whether his decision was an act of courage or cowardice.
                </p>
              </SubSection>

              <SubSection title="Form &amp; Structure">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Seven sestets (six-line stanzas) followed by a final couplet. The poem is narrated in the third person by the pilot&apos;s daughter, creating distance and suggesting the story has been passed down. The regular stanza length contrasts with the emotional turbulence of the content. The shift from third person to first person in the final lines (&ldquo;he must have wondered / which had been the better way to die&rdquo;) is devastating, as the daughter imagines her father&apos;s perspective. Enjambment creates a flowing, reflective quality that mirrors the act of remembering.
                </p>
              </SubSection>

              <SubSection title="Key Quotes">
                <div className="space-y-3">
                  <Quote
                    text="her father embarked at sunrise"
                    technique="Third-person narration / imagery"
                    analysis="The third-person narration immediately creates distance: this is a story told by someone who was not there. 'Sunrise' symbolises a new beginning but is ironic, as the pilot was flying towards death. The daughter reconstructs her father's experience from fragments."
                  />
                  <Quote
                    text="a shaven head / full of powerful incantations"
                    technique="Imagery / cultural context"
                    analysis="The 'shaven head' marks the ritual preparation for death, and 'powerful incantations' refers to the prayers and ideology that were meant to sustain his resolve. The phrase 'full of' suggests these were forced into him, filling his mind and leaving no room for doubt — until nature intervenes."
                  />
                  <Quote
                    text="the dark shoals of fishes / flashing silver as their bellies / swivelled towards the sun"
                    technique="Natural imagery / colour contrast"
                    analysis="The vivid description of fish catching the sunlight is beautiful and life-affirming. The movement from 'dark' to 'silver' to 'sun' mirrors the pilot's shift from duty (darkness, death) to life. Nature's beauty becomes more powerful than military ideology."
                  />
                  <Quote
                    text="they treated him / as though he no longer existed"
                    technique="Social death / simile"
                    analysis="The pilot's family enact a social death: he is alive but treated as if dead. This is arguably worse than the physical death he avoided. The phrase captures the devastating irony: he chose life, but was punished with a living death."
                  />
                  <Quote
                    text="he must have wondered / which had been the better way to die"
                    technique="Ambiguity / rhetorical question"
                    analysis="The final lines are devastating in their ambiguity. 'Which had been the better way to die' implies both options led to death: physical death in the mission or social death at home. The daughter's speculation ('must have') shows she can never fully know her father's experience."
                  />
                </div>
              </SubSection>

              <SubSection title="Themes">
                <div className="flex flex-wrap gap-2">
                  <ThemeTag theme="Honour and duty" />
                  <ThemeTag theme="Identity and belonging" />
                  <ThemeTag theme="Memory and reflection" />
                  <ThemeTag theme="Loss and grief" />
                  <ThemeTag theme="Nature vs ideology" />
                </div>
              </SubSection>

              <SubSection title="Comparison Suggestions">
                <ul className="space-y-2 list-none">
                  <ComparisonSuggestion poem="The Charge of the Light Brigade" reason="Both explore duty and obedience. Tennyson's soldiers follow orders to their deaths; Garland's pilot defies orders but faces social death instead." />
                  <ComparisonSuggestion poem="Poppies" reason="Both explore the impact of conflict on families. Weir's mother loses her son to war; Garland's pilot loses his family by refusing to die." />
                  <ComparisonSuggestion poem="The Emigree" reason="Both explore how identity is shaped by memory and how individuals are ostracised or displaced by forces beyond their control." />
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
              theme: "Power of Nature",
              poems: ["Ozymandias", "Extract from The Prelude", "Storm on the Island", "Exposure"],
              colour: "border-accent",
            },
            {
              theme: "Reality of Conflict",
              poems: ["Exposure", "Bayonet Charge", "Remains", "War Photographer", "The Charge of the Light Brigade"],
              colour: "border-warn",
            },
            {
              theme: "Pride, Power and Control",
              poems: ["Ozymandias", "My Last Duchess", "London", "Checking Out Me History"],
              colour: "border-primary",
            },
            {
              theme: "Identity and Belonging",
              poems: ["The Emigree", "Checking Out Me History", "Kamikaze", "Tissue"],
              colour: "border-success",
            },
            {
              theme: "Loss and Grief",
              poems: ["Poppies", "Remains", "War Photographer", "The Charge of the Light Brigade", "Kamikaze"],
              colour: "border-accent",
            },
            {
              theme: "Memory and Its Power",
              poems: ["Extract from The Prelude", "Remains", "Poppies", "The Emigree", "Kamikaze"],
              colour: "border-warn",
            },
            {
              theme: "Guilt and Responsibility",
              poems: ["Remains", "War Photographer", "London"],
              colour: "border-primary",
            },
            {
              theme: "Fear and Vulnerability",
              poems: ["Storm on the Island", "Bayonet Charge", "Extract from The Prelude", "Exposure"],
              colour: "border-success",
            },
            {
              theme: "Honour, Duty and Patriotism",
              poems: ["The Charge of the Light Brigade", "Kamikaze", "Bayonet Charge"],
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
          <h2 className="text-2xl font-bold text-foreground">Exam Tips for Power and Conflict</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Choose Your Comparison Wisely",
                text: "You'll be given one poem and asked to compare it to another of your choice. Pick a poem with clear thematic or structural links — not just the one you know best. If given 'Exposure,' choosing 'Storm on the Island' (both explore nature's power) is stronger than a loosely connected choice.",
              },
              {
                title: "Weave, Don't Split",
                text: "Avoid writing about one poem then the other. Instead, make a point about both poems together, using connectives: 'similarly,' 'in contrast,' 'whereas,' 'however.' A comparative essay should feel like a conversation between two poems.",
              },
              {
                title: "Short Quotes, Big Analysis",
                text: "Embed single words or short phrases into your sentences. Long block quotes waste time. Instead, zoom in on individual word choices and their effects. For example, analyse 'knive us' from Exposure rather than quoting the entire line.",
              },
              {
                title: "Comment on Form and Structure",
                text: "Always discuss the poet's choice of form (sonnet, monologue, free verse), rhyme scheme, line length, and structural features like volta, refrain, or cyclical endings. Link form to meaning: why did the poet choose this structure?",
              },
              {
                title: "Link Context to Meaning",
                text: "Don't just state facts about the poet's life or historical period. Explain how context shapes meaning: 'Owen's experience in the trenches creates the poem's tone of futile despair' is better than simply noting he was a WWI soldier.",
              },
              {
                title: "Use Subject Terminology",
                text: "Name techniques accurately: enjambment, caesura, sibilance, volta, dramatic monologue, pararhyme. But always explain the effect — feature-spotting without analysis scores poorly. Say what the technique does, not just what it is.",
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
