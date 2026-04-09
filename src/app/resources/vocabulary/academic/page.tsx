"use client";

import { useState, useMemo } from "react";
import Link from "next/link";

/* ─── Types ──────────────────────────────────────────────────── */

interface VocabWord {
  word: string;
  definition: string;
  example: string;
  synonyms: string[];
}

interface VocabCategory {
  id: string;
  title: string;
  colour: string;
  words: VocabWord[];
}

/* ─── Data ───────────────────────────────────────────────────── */

const CATEGORIES: VocabCategory[] = [
  {
    id: "analysis",
    title: "Analysis Words",
    colour: "border-primary",
    words: [
      { word: "Conveys", definition: "Communicates or expresses a meaning or feeling", example: "Shakespeare conveys Macbeth's guilt through the recurring motif of blood.", synonyms: ["communicates", "expresses", "transmits"] },
      { word: "Denotes", definition: "Indicates or refers to specifically", example: "The colour red denotes danger and passion throughout the novel.", synonyms: ["indicates", "signifies", "represents"] },
      { word: "Connotes", definition: "Suggests or implies beyond the literal meaning", example: "The word 'crawled' connotes weakness, vulnerability, and submission.", synonyms: ["implies", "suggests", "evokes"] },
      { word: "Encapsulates", definition: "Expresses the essential features of something succinctly", example: "This quotation encapsulates the theme of social inequality.", synonyms: ["summarises", "captures", "epitomises"] },
      { word: "Elucidates", definition: "Makes something clearer; throws light on", example: "The soliloquy elucidates Hamlet's internal moral conflict.", synonyms: ["clarifies", "illuminates", "explains"] },
      { word: "Underscores", definition: "Emphasises the importance or relevance of", example: "Dickens underscores the plight of the poor through Tiny Tim's character.", synonyms: ["emphasises", "highlights", "accentuates"] },
      { word: "Juxtaposes", definition: "Places two elements close together for contrasting effect", example: "Stevenson juxtaposes the respectable Dr Jekyll with the monstrous Mr Hyde.", synonyms: ["contrasts", "sets against", "counterpoints"] },
      { word: "Exemplifies", definition: "Serves as a typical or excellent example of", example: "Inspector Goole exemplifies Priestley's socialist message.", synonyms: ["illustrates", "demonstrates", "typifies"] },
      { word: "Permeates", definition: "Spreads throughout; is present in every part of", example: "A sense of foreboding permeates the opening chapter.", synonyms: ["pervades", "saturates", "infuses"] },
      { word: "Reinforces", definition: "Strengthens or supports an idea or feeling", example: "The cyclical structure reinforces the theme of inescapable fate.", synonyms: ["strengthens", "bolsters", "consolidates"] },
      { word: "Foregrounds", definition: "Brings to the front; makes the most prominent feature", example: "Shelley foregrounds the dangers of unchecked ambition.", synonyms: ["highlights", "emphasises", "prioritises"] },
      { word: "Subverts", definition: "Undermines or overturns expectations", example: "The writer subverts the traditional fairy-tale ending.", synonyms: ["undermines", "overturns", "challenges"] },
      { word: "Embodies", definition: "Gives a tangible or visible form to an idea", example: "Scrooge embodies Victorian greed and selfishness.", synonyms: ["personifies", "represents", "manifests"] },
      { word: "Accentuates", definition: "Makes more noticeable or prominent", example: "The short sentence accentuates the character's shock.", synonyms: ["emphasises", "heightens", "intensifies"] },
    ],
  },
  {
    id: "evaluation",
    title: "Evaluation Words",
    colour: "border-accent",
    words: [
      { word: "Compelling", definition: "Evoking interest or attention in a powerfully irresistible way", example: "Priestley constructs a compelling argument for collective responsibility.", synonyms: ["persuasive", "convincing", "riveting"] },
      { word: "Nuanced", definition: "Characterised by subtle shades of meaning or expression", example: "Shakespeare presents a nuanced portrayal of Lady Macbeth.", synonyms: ["subtle", "refined", "sophisticated"] },
      { word: "Profound", definition: "Very great or intense; having deep meaning", example: "The ending delivers a profound commentary on class division.", synonyms: ["deep", "significant", "far-reaching"] },
      { word: "Evocative", definition: "Bringing strong images, memories, or feelings to mind", example: "The writer uses evocative sensory language to immerse the reader.", synonyms: ["suggestive", "vivid", "atmospheric"] },
      { word: "Poignant", definition: "Evoking a keen sense of sadness or regret", example: "The reunion scene is especially poignant given the earlier betrayal.", synonyms: ["moving", "touching", "affecting"] },
      { word: "Perceptive", definition: "Having or showing keen insight", example: "The student offers a perceptive reading of the writer's use of irony.", synonyms: ["insightful", "astute", "discerning"] },
      { word: "Provocative", definition: "Intended to provoke thought or strong reaction", example: "The opening line is deliberately provocative, challenging the reader's assumptions.", synonyms: ["thought-provoking", "stimulating", "challenging"] },
      { word: "Incisive", definition: "Intelligently analytical and clear-thinking", example: "Orwell provides an incisive critique of totalitarian regimes.", synonyms: ["penetrating", "sharp", "acute"] },
      { word: "Pivotal", definition: "Of crucial importance; forming a turning point", example: "This scene is pivotal to the development of the protagonist.", synonyms: ["crucial", "central", "critical"] },
      { word: "Deliberate", definition: "Done consciously and intentionally", example: "The writer's deliberate use of fragmented syntax mirrors the character's confusion.", synonyms: ["intentional", "calculated", "purposeful"] },
      { word: "Sophisticated", definition: "Developed to a high degree of complexity", example: "The narrator's sophisticated vocabulary contrasts with the simple setting.", synonyms: ["refined", "complex", "advanced"] },
      { word: "Emblematic", definition: "Serving as a symbol or representation", example: "The ghost is emblematic of Scrooge's repressed guilt.", synonyms: ["symbolic", "representative", "indicative"] },
    ],
  },
  {
    id: "comparison",
    title: "Comparison Words",
    colour: "border-primary",
    words: [
      { word: "Conversely", definition: "Introducing a statement that contrasts with a previous one", example: "Conversely, Mr Birling represents the failure of individual responsibility.", synonyms: ["on the other hand", "in contrast", "alternatively"] },
      { word: "Correspondingly", definition: "In a way that matches or is equivalent", example: "As the tension builds, the language correspondingly becomes more fragmented.", synonyms: ["similarly", "equivalently", "in parallel"] },
      { word: "Parallels", definition: "Points of similarity or comparison", example: "There are clear parallels between Romeo's love and his impulsiveness.", synonyms: ["similarities", "correspondences", "analogies"] },
      { word: "Diverges", definition: "Develops in a different direction; differs", example: "At this point, the narrative diverges from the typical bildungsroman.", synonyms: ["differs", "deviates", "departs"] },
      { word: "Mirrors", definition: "Closely resembles or reflects", example: "The subplot mirrors the main plot, reinforcing the central theme.", synonyms: ["reflects", "echoes", "replicates"] },
      { word: "Contrasts", definition: "Differs strikingly when compared", example: "The warmth of the Cratchit home contrasts sharply with Scrooge's cold isolation.", synonyms: ["opposes", "differs from", "counters"] },
      { word: "Akin to", definition: "Similar or related in nature", example: "The narrator's tone is akin to that of a confessional monologue.", synonyms: ["similar to", "comparable to", "analogous to"] },
      { word: "Distinguishes", definition: "Recognises or points out differences", example: "What distinguishes this poem from others in the anthology is its conversational tone.", synonyms: ["differentiates", "separates", "sets apart"] },
      { word: "Echoes", definition: "Recalls or reminds of something similar", example: "The final stanza echoes the imagery established at the poem's opening.", synonyms: ["reflects", "mirrors", "recalls"] },
      { word: "Complements", definition: "Adds to something in a way that enhances or improves it", example: "The structural shift complements the thematic shift in the character's outlook.", synonyms: ["enhances", "supplements", "augments"] },
      { word: "Inversely", definition: "In an opposite manner; the reverse way", example: "Inversely, as the Inspector gains authority, Mr Birling loses his.", synonyms: ["oppositely", "in reverse", "contrarily"] },
      { word: "Supersedes", definition: "Takes the place of something previously held or used", example: "Macbeth's ambition supersedes his sense of morality.", synonyms: ["replaces", "overrides", "supplants"] },
    ],
  },
  {
    id: "description",
    title: "Description & Argumentation Words",
    colour: "border-warn",
    words: [
      { word: "Pervasive", definition: "Spreading widely throughout an area or group", example: "A pervasive sense of dread runs through the extract.", synonyms: ["widespread", "prevalent", "omnipresent"] },
      { word: "Intrinsic", definition: "Belonging naturally; essential", example: "Loyalty is intrinsic to the character of Benvolio.", synonyms: ["inherent", "fundamental", "innate"] },
      { word: "Tangible", definition: "Clear and definite; able to be perceived", example: "The writer creates a tangible atmosphere of suspense.", synonyms: ["palpable", "perceptible", "concrete"] },
      { word: "Ubiquitous", definition: "Present, appearing, or found everywhere", example: "The motif of light and dark is ubiquitous in the play.", synonyms: ["omnipresent", "ever-present", "universal"] },
      { word: "Inexorable", definition: "Impossible to stop or prevent", example: "The inexorable decline of Macbeth's sanity drives the tragedy.", synonyms: ["relentless", "unstoppable", "inevitable"] },
      { word: "Paradoxical", definition: "Seemingly contradictory but containing a truth", example: "It is paradoxical that the Inspector, a figure of justice, uses manipulation.", synonyms: ["contradictory", "ironic", "self-contradicting"] },
      { word: "Multifaceted", definition: "Having many different aspects or features", example: "Shelley presents a multifaceted exploration of creation and responsibility.", synonyms: ["complex", "many-sided", "diverse"] },
      { word: "Catalyses", definition: "Causes or accelerates a change or reaction", example: "The arrival of the Inspector catalyses each character's moral reckoning.", synonyms: ["triggers", "precipitates", "sparks"] },
      { word: "Underpins", definition: "Provides the basis or foundation for", example: "A critique of patriarchal society underpins the entire narrative.", synonyms: ["supports", "sustains", "buttresses"] },
      { word: "Transcends", definition: "Goes beyond the range or limits of", example: "The poem transcends its historical context to speak to modern audiences.", synonyms: ["surpasses", "exceeds", "rises above"] },
      { word: "Precipitates", definition: "Causes something to happen suddenly or sooner than expected", example: "Duncan's murder precipitates a chain of catastrophic events.", synonyms: ["triggers", "hastens", "provokes"] },
      { word: "Elicits", definition: "Draws out or brings forth a response", example: "The writer's use of direct address elicits empathy from the reader.", synonyms: ["evokes", "provokes", "prompts"] },
      { word: "Perpetuates", definition: "Makes something continue indefinitely", example: "The cyclical ending perpetuates the sense of entrapment.", synonyms: ["maintains", "sustains", "preserves"] },
    ],
  },
];

const WORDS_TO_REPLACE = [
  {
    overused: "shows",
    alternatives: [
      { word: "demonstrates", context: "For clear, evidential points" },
      { word: "illustrates", context: "When giving an example" },
      { word: "reveals", context: "When uncovering something hidden" },
      { word: "conveys", context: "For communicating meaning" },
      { word: "exemplifies", context: "When something is a perfect example" },
      { word: "underscores", context: "For emphasis" },
    ],
  },
  {
    overused: "suggests",
    alternatives: [
      { word: "implies", context: "For indirect meaning" },
      { word: "connotes", context: "For associated meanings" },
      { word: "intimates", context: "For subtle hints" },
      { word: "insinuates", context: "For sly or negative suggestions" },
      { word: "alludes to", context: "For indirect references" },
    ],
  },
  {
    overused: "good",
    alternatives: [
      { word: "effective", context: "When something works well" },
      { word: "compelling", context: "When something is persuasive" },
      { word: "proficient", context: "For skilled performance" },
      { word: "exemplary", context: "When something is a model of quality" },
      { word: "commendable", context: "When something deserves praise" },
    ],
  },
  {
    overused: "bad",
    alternatives: [
      { word: "detrimental", context: "When something causes harm" },
      { word: "inadequate", context: "When something falls short" },
      { word: "problematic", context: "When something creates issues" },
      { word: "deficient", context: "When something is lacking" },
      { word: "reprehensible", context: "For morally wrong actions" },
    ],
  },
  {
    overused: "nice",
    alternatives: [
      { word: "pleasant", context: "For agreeable situations" },
      { word: "delightful", context: "For pleasing experiences" },
      { word: "amiable", context: "For friendly people" },
      { word: "refined", context: "For elegant or cultured things" },
      { word: "gracious", context: "For kind, courteous behaviour" },
    ],
  },
  {
    overused: "important",
    alternatives: [
      { word: "pivotal", context: "For turning points" },
      { word: "significant", context: "For meaningful moments" },
      { word: "paramount", context: "For the most important" },
      { word: "fundamental", context: "For foundational ideas" },
      { word: "instrumental", context: "For things that cause change" },
    ],
  },
  {
    overused: "interesting",
    alternatives: [
      { word: "compelling", context: "For irresistibly interesting" },
      { word: "intriguing", context: "For arousing curiosity" },
      { word: "thought-provoking", context: "For stimulating ideas" },
      { word: "noteworthy", context: "For things deserving attention" },
      { word: "striking", context: "For dramatically noticeable" },
    ],
  },
];

const PERSUASIVE_WORDS: VocabWord[] = [
  { word: "Compelling", definition: "Evoking interest in a powerfully irresistible way", example: "This evidence presents a compelling case for systemic change.", synonyms: ["persuasive", "convincing", "forceful"] },
  { word: "Indisputably", definition: "In a way that cannot be challenged or denied", example: "Climate change is indisputably the defining challenge of our generation.", synonyms: ["undeniably", "unquestionably", "irrefutably"] },
  { word: "Imperative", definition: "Of vital importance; crucial", example: "It is imperative that schools prioritise student wellbeing.", synonyms: ["essential", "crucial", "vital"] },
  { word: "Unconscionable", definition: "Not right or reasonable; morally wrong", example: "It is unconscionable to ignore the suffering of the most vulnerable.", synonyms: ["unacceptable", "inexcusable", "outrageous"] },
  { word: "Galvanise", definition: "Shock or excite someone into taking action", example: "We must galvanise our community to demand meaningful reform.", synonyms: ["motivate", "spur", "energise"] },
  { word: "Unequivocally", definition: "In a way that leaves no doubt", example: "The evidence unequivocally supports the need for intervention.", synonyms: ["clearly", "absolutely", "definitively"] },
  { word: "Detrimental", definition: "Tending to cause harm", example: "Social media has a detrimental effect on young people's self-esteem.", synonyms: ["harmful", "damaging", "injurious"] },
  { word: "Prevalent", definition: "Widespread in a particular area or at a particular time", example: "This attitude remains worryingly prevalent in modern society.", synonyms: ["widespread", "common", "pervasive"] },
  { word: "Exacerbates", definition: "Makes a problem or situation worse", example: "Poverty exacerbates educational inequality at every stage.", synonyms: ["worsens", "aggravates", "intensifies"] },
  { word: "Substantiate", definition: "Provide evidence to support or prove the truth of", example: "Statistics substantiate the claim that funding has been cut.", synonyms: ["verify", "confirm", "corroborate"] },
];

/* ─── Component ─────────────────────────────────────────────── */

export default function AcademicVocabularyPage() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filteredCategories = useMemo(() => {
    const s = search.toLowerCase();
    if (!s && activeCategory === "all") return CATEGORIES;

    return CATEGORIES.filter((c) => activeCategory === "all" || c.id === activeCategory)
      .map((c) => ({
        ...c,
        words: c.words.filter(
          (w) =>
            !s ||
            w.word.toLowerCase().includes(s) ||
            w.definition.toLowerCase().includes(s) ||
            w.synonyms.some((syn) => syn.toLowerCase().includes(s))
        ),
      }))
      .filter((c) => c.words.length > 0);
  }, [search, activeCategory]);

  const filteredPersuasive = useMemo(() => {
    const s = search.toLowerCase();
    if (!s) return PERSUASIVE_WORDS;
    return PERSUASIVE_WORDS.filter(
      (w) =>
        w.word.toLowerCase().includes(s) ||
        w.definition.toLowerCase().includes(s) ||
        w.synonyms.some((syn) => syn.toLowerCase().includes(s))
    );
  }, [search]);

  const totalWords =
    CATEGORIES.reduce((sum, c) => sum + c.words.length, 0) + PERSUASIVE_WORDS.length;

  return (
    <>

      {/* Hero */}
      <section className="border-b bg-gradient-to-b from-primary/[0.06] to-transparent px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
            Vocabulary Builder
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Academic Vocabulary
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            {totalWords}+ tier 2 and tier 3 words to elevate your essay writing.
            Organised by function with definitions, GCSE example sentences, and
            synonyms.
          </p>
        </div>
      </section>

      {/* Breadcrumb */}
      <nav className="mx-auto max-w-6xl px-4 pt-6" aria-label="Breadcrumb">
        <ol className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
          <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
          <li>/</li>
          <li><Link href="/resources" className="hover:text-primary transition-colors">Resources</Link></li>
          <li>/</li>
          <li><Link href="/resources/vocabulary" className="hover:text-primary transition-colors">Vocabulary</Link></li>
          <li>/</li>
          <li className="font-medium text-primary">Academic</li>
        </ol>
      </nav>

      {/* Search & filter */}
      <section className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
          <div className="relative flex-1">
            <svg className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
            <input
              type="text"
              placeholder="Search words, definitions, or synonyms..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-xl border border-border bg-card py-3 pl-10 pr-4 text-sm shadow-md transition focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {[{ id: "all", label: "All" }, ...CATEGORIES.map((c) => ({ id: c.id, label: c.title.replace(" Words", "") }))].map((f) => (
              <button
                key={f.id}
                onClick={() => setActiveCategory(f.id)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                  activeCategory === f.id
                    ? "bg-primary text-white shadow-md"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Vocabulary categories */}
      <section className="mx-auto max-w-6xl px-4 pb-14 sm:px-6 lg:px-8">
        <div className="space-y-12">
          {filteredCategories.map((cat) => (
            <div key={cat.id} id={cat.id}>
              <h2 className={`mb-6 text-2xl font-bold text-primary border-b-2 ${cat.colour} pb-3`}>
                {cat.title}
                <span className="ml-3 text-base font-normal text-muted-foreground">
                  ({cat.words.length} words)
                </span>
              </h2>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {cat.words.map((w) => (
                  <div key={w.word} className="rounded-xl border border-border bg-card p-5 shadow-md hover:shadow-md transition">
                    <h3 className="text-lg font-bold text-primary">{w.word}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{w.definition}</p>
                    <div className="mt-3 rounded-lg bg-muted px-4 py-3">
                      <p className="text-sm italic text-muted-foreground">
                        &ldquo;{w.example}&rdquo;
                      </p>
                    </div>
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {w.synonyms.map((s) => (
                        <span key={s} className="rounded-full bg-accent/10 px-2.5 py-0.5 text-xs font-medium text-accent">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {filteredCategories.length === 0 && !search && (
          <p className="text-center text-sm text-muted-foreground">Select a category to view words.</p>
        )}
        {filteredCategories.length === 0 && search && (
          <p className="text-center text-sm text-muted-foreground">
            No words match &ldquo;{search}&rdquo;. Try a different search term.
          </p>
        )}
      </section>

      {/* Persuasive vocabulary */}
      <section id="persuasive" className="bg-muted px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-6 text-2xl font-bold text-primary border-b-2 border-warn pb-3">
            Persuasive Vocabulary
            <span className="ml-3 text-base font-normal text-muted-foreground">
              ({filteredPersuasive.length} words)
            </span>
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filteredPersuasive.map((w) => (
              <div key={w.word} className="rounded-xl border border-border bg-card p-5 shadow-md hover:shadow-md transition">
                <h3 className="text-lg font-bold text-warn">{w.word}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{w.definition}</p>
                <div className="mt-3 rounded-lg bg-muted px-4 py-3">
                  <p className="text-sm italic text-muted-foreground">&ldquo;{w.example}&rdquo;</p>
                </div>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {w.synonyms.map((s) => (
                    <span key={s} className="rounded-full bg-warn/10 px-2.5 py-0.5 text-xs font-medium text-warn">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Words to replace */}
      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <h2 className="text-center text-2xl font-bold text-foreground">
          Words to Replace
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-muted-foreground">
          These overused words weaken your essays. Use the alternatives below to
          write with precision and sophistication.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {WORDS_TO_REPLACE.map((item) => (
            <div key={item.overused} className="rounded-xl border border-border bg-card p-5 shadow-md">
              <div className="flex items-center gap-2 mb-4">
                <span className="rounded-full bg-red-500/10 px-3 py-1 text-sm font-bold text-red-400 line-through">
                  {item.overused}
                </span>
                <svg className="h-4 w-4 text-muted-foreground" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
                <span className="text-xs font-medium text-emerald-400">Try instead:</span>
              </div>
              <ul className="space-y-2">
                {item.alternatives.map((alt) => (
                  <li key={alt.word} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    <div>
                      <span className="font-semibold text-sm text-foreground">{alt.word}</span>
                      <span className="text-xs text-muted-foreground ml-1">-- {alt.context}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Continue exploring */}
      <section className="bg-muted px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-2xl font-bold text-foreground">Continue exploring</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {[
              { label: "Descriptive Vocabulary", href: "/resources/vocabulary/descriptive", desc: "200+ words for creative writing." },
              { label: "Analytical Vocabulary", href: "/resources/vocabulary/analytical", desc: "Master the language of analysis." },
              { label: "All Vocabulary", href: "/resources/vocabulary", desc: "Browse all vocabulary categories." },
            ].map((link) => (
              <Link key={link.href} href={link.href} className="group rounded-xl border border-border bg-card p-5 shadow-md transition hover:shadow-md hover:border-accent/40">
                <h3 className="font-bold text-foreground group-hover:text-primary transition-colors">{link.label}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{link.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

    </>
  );
}
