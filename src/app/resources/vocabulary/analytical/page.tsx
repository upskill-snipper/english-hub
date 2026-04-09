"use client";

import { useState, useMemo } from "react";
import Link from "next/link";

/* ─── Types ──────────────────────────────────────────────────── */

interface AnalyticalWord {
  word: string;
  definition: string;
  example: string;
}

interface AnalyticalSection {
  id: string;
  title: string;
  description: string;
  colour: string;
  tagColour: string;
  words: AnalyticalWord[];
}

/* ─── Data ───────────────────────────────────────────────────── */

const SECTIONS: AnalyticalSection[] = [
  {
    id: "evaluative-adverbs",
    title: "Evaluative Adverbs & Phrases",
    description:
      "Use these to strengthen your analytical voice and show the examiner you are evaluating, not just describing.",
    colour: "border-primary",
    tagColour: "bg-primary/10 text-primary",
    words: [
      { word: "Significantly", definition: "In a way that is important or notable", example: "Significantly, the writer shifts from past to present tense at this point." },
      { word: "Notably", definition: "In a way that is worthy of attention", example: "Notably, Shakespeare gives Lady Macbeth the commanding imperative verbs." },
      { word: "Crucially", definition: "In a way that is of great importance", example: "Crucially, the Inspector's final speech addresses the audience directly." },
      { word: "Compellingly", definition: "In a way that evokes interest or admiration", example: "Dickens compellingly contrasts wealth and poverty through parallel scenes." },
      { word: "Strikingly", definition: "In a way that attracts attention by being unusual", example: "Strikingly, the poem offers no resolution or sense of closure." },
      { word: "Purposefully", definition: "In a way that shows determination or intention", example: "Shelley purposefully withholds the creature's perspective until Chapter 11." },
      { word: "Subtly", definition: "In a way that is not immediately obvious", example: "Priestley subtly undermines Mr Birling's authority from the outset." },
      { word: "Effectively", definition: "In a way that produces a desired result", example: "The metaphor effectively captures the character's sense of entrapment." },
      { word: "Provocatively", definition: "In a way that deliberately arouses a reaction", example: "The writer provocatively challenges the reader's assumptions about justice." },
      { word: "Unmistakably", definition: "In a way that cannot be mistaken or doubted", example: "The religious imagery is unmistakably linked to the theme of redemption." },
      { word: "Perceptively", definition: "In a way that shows keen insight", example: "The poet perceptively captures the paradox of modern isolation." },
      { word: "Incisively", definition: "In a way that is intelligently analytical", example: "Orwell incisively exposes the mechanisms of propaganda." },
      { word: "Systematically", definition: "In a methodical and organised way", example: "The writer systematically dismantles each of the family's excuses." },
      { word: "Poignantly", definition: "In a way that evokes a keen sense of sadness", example: "The final image poignantly encapsulates the loss of innocence." },
      { word: "Deftly", definition: "In a way that is neatly skilful", example: "Shakespeare deftly weaves the supernatural into the political plot." },
      { word: "Masterfully", definition: "In a way that shows great skill", example: "Dickens masterfully builds suspense through delayed revelation." },
      { word: "Paradoxically", definition: "In a way that seems contradictory but contains truth", example: "Paradoxically, the character's silence speaks louder than any dialogue." },
      { word: "Tellingly", definition: "In a way that reveals something significant", example: "Tellingly, the narrator avoids naming the victim throughout." },
      { word: "Arguably", definition: "It may be argued; possibly", example: "This is arguably the most pivotal moment in the entire play." },
      { word: "Undeniably", definition: "In a way that cannot be denied", example: "The social critique is undeniably relevant to contemporary audiences." },
    ],
  },
  {
    id: "tentative-language",
    title: "Tentative Language for Interpretation",
    description:
      "Tentative language shows the examiner that you understand there can be multiple interpretations. It is the hallmark of a sophisticated response.",
    colour: "border-accent",
    tagColour: "bg-accent/10 text-accent",
    words: [
      { word: "Perhaps", definition: "Used to express uncertainty or possibility", example: "Perhaps the writer intends the storm to symbolise the character's inner conflict." },
      { word: "Could be interpreted as", definition: "Signals one possible reading among many", example: "The red imagery could be interpreted as a symbol of both passion and danger." },
      { word: "Seemingly", definition: "So as to give the impression of being true", example: "The seemingly benign opening conceals a darker undertone." },
      { word: "Ostensibly", definition: "As appears or is stated to be true, though not necessarily", example: "Ostensibly a love poem, the text is in fact a meditation on mortality." },
      { word: "It is plausible that", definition: "It is reasonable to believe that", example: "It is plausible that Stevenson uses the fog to obscure moral clarity." },
      { word: "One might argue", definition: "A way of presenting a possible interpretation", example: "One might argue that the Inspector represents Priestley's own political stance." },
      { word: "Potentially", definition: "With the capacity to develop into something", example: "This potentially subverts the reader's expectations of the genre." },
      { word: "Appears to", definition: "Seems to; gives the impression of", example: "The narrator appears to be unreliable, casting doubt on the entire account." },
      { word: "Implies", definition: "Strongly suggests without being explicitly stated", example: "The abrupt ending implies that the cycle of violence will continue." },
      { word: "May well reflect", definition: "Could reasonably be seen as reflecting", example: "The oppressive setting may well reflect the constraints of Victorian society." },
      { word: "It is conceivable that", definition: "It is possible to believe that", example: "It is conceivable that the writer chose this structure to mirror the protagonist's confusion." },
      { word: "Arguably suggests", definition: "Could be seen to suggest", example: "The juxtaposition arguably suggests a deliberate critique of hypocrisy." },
      { word: "To some extent", definition: "Partially; in some degree", example: "To some extent, the character's downfall is of their own making." },
      { word: "On one reading", definition: "According to one interpretation", example: "On one reading, the poem celebrates resilience; on another, it mourns what was lost." },
      { word: "Hints at", definition: "Suggests indirectly", example: "The colour symbolism hints at the character's concealed guilt." },
    ],
  },
  {
    id: "comparative-connectives",
    title: "Comparative Connectives",
    description:
      "Use these to draw connections, contrasts, and comparisons between texts, characters, themes, or ideas.",
    colour: "border-primary",
    tagColour: "bg-primary/10 text-primary",
    words: [
      { word: "Similarly", definition: "In a similar way", example: "Similarly, both poets use natural imagery to convey a sense of loss." },
      { word: "In contrast", definition: "When comparing two things that are very different", example: "In contrast, Shelley presents ambition as destructive rather than heroic." },
      { word: "Whereas", definition: "In comparison with the fact that", example: "Whereas Macbeth is consumed by guilt, Lady Macbeth initially suppresses hers." },
      { word: "Conversely", definition: "Introducing a contrasting point", example: "Conversely, the second stanza abandons the regular metre entirely." },
      { word: "Equally", definition: "To the same extent or degree", example: "Equally, both writers foreground the suffering caused by social inequality." },
      { word: "By the same token", definition: "Following the same line of reasoning", example: "By the same token, the setting reinforces the theme of moral decay." },
      { word: "Nonetheless", definition: "In spite of what has just been said", example: "The character appears confident; nonetheless, the subtext reveals deep insecurity." },
      { word: "Correspondingly", definition: "In a way that matches or is equivalent", example: "As the tension escalates, the sentence length correspondingly decreases." },
      { word: "In a similar vein", definition: "In a related way; along the same lines", example: "In a similar vein, Orwell uses allegory to critique totalitarianism." },
      { word: "On the other hand", definition: "Used to present an alternative viewpoint", example: "On the other hand, the ending might be read as ultimately hopeful." },
      { word: "In parallel", definition: "Occurring or existing at the same time in a similar way", example: "In parallel, both protagonists undergo a crisis of identity." },
      { word: "Whilst", definition: "At the same time as; although", example: "Whilst the surface narrative is romantic, the subtext is deeply political." },
      { word: "Juxtaposed with", definition: "Placed side by side for contrasting effect", example: "Juxtaposed with the earlier calm, this passage is charged with menace." },
      { word: "Mirrors", definition: "Closely resembles or corresponds to", example: "The subplot mirrors the main narrative, reinforcing the central theme." },
      { word: "Diverges from", definition: "Differs or departs from", example: "At this point, the poet diverges from the conventional sonnet structure." },
    ],
  },
  {
    id: "writers-methods",
    title: "Words for Discussing Writer's Methods",
    description:
      "Precise vocabulary for talking about what writers do and how they do it. Essential for AO2 (writer's methods).",
    colour: "border-warn",
    tagColour: "bg-warn/10 text-warn",
    words: [
      { word: "Crafts", definition: "Skilfully creates or constructs", example: "Shakespeare crafts a sense of foreboding through the witches' prophecies." },
      { word: "Employs", definition: "Makes use of a technique or device", example: "The poet employs enjambment to create a breathless, urgent pace." },
      { word: "Deploys", definition: "Uses something effectively", example: "Priestley deploys dramatic irony to undermine Mr Birling's credibility." },
      { word: "Constructs", definition: "Builds or creates deliberately", example: "Dickens constructs a vivid contrast between Scrooge's isolation and the Cratchits' warmth." },
      { word: "Manipulates", definition: "Controls or influences skilfully", example: "The writer manipulates the reader's sympathy through selective revelation." },
      { word: "Establishes", definition: "Sets up or creates from the beginning", example: "The opening paragraph establishes an atmosphere of claustrophobic tension." },
      { word: "Foregrounds", definition: "Makes the most prominent or important feature", example: "Shelley foregrounds the ethical dilemma by beginning in medias res." },
      { word: "Subverts", definition: "Undermines or overturns an expectation", example: "The ending subverts the reader's expectation of a neat resolution." },
      { word: "Juxtaposes", definition: "Places side by side for contrasting effect", example: "The writer juxtaposes innocence and corruption to heighten the moral contrast." },
      { word: "Invokes", definition: "Calls upon or refers to", example: "The poet invokes Biblical imagery to lend the poem a sense of gravitas." },
      { word: "Orchestrates", definition: "Arranges or directs the elements of for maximum effect", example: "Shakespeare orchestrates the pace of revelation to maximise dramatic tension." },
      { word: "Cultivates", definition: "Deliberately develops or encourages", example: "The narrator cultivates an intimate, confessional tone throughout." },
      { word: "Distils", definition: "Extracts the essential meaning of", example: "The final couplet distils the poem's central argument into two devastating lines." },
      { word: "Amplifies", definition: "Increases the strength or amount of", example: "The repetition amplifies the speaker's growing desperation." },
      { word: "Exposes", definition: "Reveals the true nature of; lays bare", example: "Through satire, Orwell exposes the hypocrisy of the ruling class." },
      { word: "Encodes", definition: "Conveys meaning through indirect or symbolic means", example: "The writer encodes a critique of imperialism within the travel narrative." },
      { word: "Mirrors", definition: "Reflects or corresponds to", example: "The fragmented syntax mirrors the character's fractured mental state." },
      { word: "Undermines", definition: "Gradually weakens or damages", example: "The unreliable narrator undermines the reader's trust from the first page." },
      { word: "Evokes", definition: "Brings to mind; conjures up", example: "The pastoral imagery evokes a lost world of childhood innocence." },
      { word: "Heightens", definition: "Makes something more intense", example: "The pathetic fallacy heightens the emotional impact of the climactic scene." },
    ],
  },
];

/* ─── Component ─────────────────────────────────────────────── */

export default function AnalyticalVocabularyPage() {
  const [search, setSearch] = useState("");
  const [activeSection, setActiveSection] = useState<string>("all");

  const filteredSections = useMemo(() => {
    const s = search.toLowerCase();
    return SECTIONS.filter((sec) => activeSection === "all" || sec.id === activeSection)
      .map((sec) => ({
        ...sec,
        words: sec.words.filter(
          (w) =>
            !s ||
            w.word.toLowerCase().includes(s) ||
            w.definition.toLowerCase().includes(s) ||
            w.example.toLowerCase().includes(s)
        ),
      }))
      .filter((sec) => sec.words.length > 0);
  }, [search, activeSection]);

  const totalWords = SECTIONS.reduce((sum, s) => sum + s.words.length, 0);

  return (
    <>

      {/* Hero */}
      <section className="border-b bg-gradient-to-b from-primary/[0.06] to-transparent px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
            Vocabulary Builder
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Analytical Vocabulary
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            {totalWords}+ words and phrases to sharpen your literary and
            linguistic analysis. Evaluative adverbs, tentative phrasing,
            comparative connectives, and vocabulary for discussing writer&apos;s
            methods.
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
          <li className="font-medium text-primary">Analytical</li>
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
              placeholder="Search analytical words and phrases..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-xl border border-border bg-card py-3 pl-10 pr-4 text-sm shadow-md transition focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {[
              { id: "all", label: "All" },
              { id: "evaluative-adverbs", label: "Evaluative" },
              { id: "tentative-language", label: "Tentative" },
              { id: "comparative-connectives", label: "Comparative" },
              { id: "writers-methods", label: "Writer's Methods" },
            ].map((f) => (
              <button
                key={f.id}
                onClick={() => setActiveSection(f.id)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                  activeSection === f.id
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

      {/* Vocabulary sections */}
      <section className="mx-auto max-w-6xl px-4 pb-14 sm:px-6 lg:px-8">
        <div className="space-y-14">
          {filteredSections.map((sec) => (
            <div key={sec.id} id={sec.id}>
              <h2 className={`mb-2 text-2xl font-bold text-primary border-b-2 ${sec.colour} pb-3`}>
                {sec.title}
                <span className="ml-3 text-base font-normal text-muted-foreground">
                  ({sec.words.length} words)
                </span>
              </h2>
              <p className="mb-6 text-sm text-muted-foreground">{sec.description}</p>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {sec.words.map((w) => (
                  <div key={w.word} className="rounded-xl border border-border bg-card p-5 shadow-md hover:shadow-md transition">
                    <div className="flex items-start justify-between">
                      <h3 className="text-lg font-bold text-foreground">{w.word}</h3>
                      <span className={`shrink-0 rounded-full px-2.5 py-0.5 text-xs font-semibold ${sec.tagColour}`}>
                        {sec.title.split(" ")[0]}
                      </span>
                    </div>
                    <p className="mt-1 text-sm text-muted-foreground">{w.definition}</p>
                    <div className="mt-3 rounded-lg bg-muted px-4 py-3">
                      <p className="text-sm italic text-muted-foreground">
                        &ldquo;{w.example}&rdquo;
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {filteredSections.length === 0 && (
            <p className="text-center text-sm text-muted-foreground">
              No words match your search. Try a different term.
            </p>
          )}
        </div>
      </section>

      {/* Tips for using analytical language */}
      <section className="bg-muted px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-2xl font-bold text-foreground">
            How to Use Analytical Language in Your Essays
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-muted-foreground">
            Knowing the words is only half the battle. These four principles will
            help you deploy analytical vocabulary naturally and effectively.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                heading: "Be precise",
                body: "Choose the word that captures your exact meaning. 'Subverts' is more precise than 'changes' -- it tells the examiner exactly what the writer is doing.",
              },
              {
                heading: "Stay tentative",
                body: "Use 'perhaps', 'arguably', and 'could be interpreted as' to show you understand texts are open to multiple readings.",
              },
              {
                heading: "Vary your connectives",
                body: "Move beyond 'however' and 'also'. Use 'conversely', 'in a similar vein', and 'by the same token' to create sophisticated links.",
              },
              {
                heading: "Focus on the writer",
                body: "Say 'Shakespeare crafts...' or 'Dickens employs...', not 'the text shows...'. This keeps the writer's intention at the centre.",
              },
            ].map((tip, i) => (
              <div key={tip.heading} className="rounded-xl border border-border bg-card p-6 shadow-md">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-accent text-sm font-bold text-white">
                  {i + 1}
                </span>
                <h3 className="mt-4 text-base font-bold text-foreground">{tip.heading}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{tip.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Continue exploring */}
      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-foreground">Continue exploring</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {[
            { label: "Academic Vocabulary", href: "/resources/vocabulary/academic", desc: "50+ words for essay writing." },
            { label: "Descriptive Vocabulary", href: "/resources/vocabulary/descriptive", desc: "200+ words for creative writing." },
            { label: "All Vocabulary", href: "/resources/vocabulary", desc: "Browse all vocabulary categories." },
          ].map((link) => (
            <Link key={link.href} href={link.href} className="group rounded-xl border border-border bg-card p-5 shadow-md transition hover:shadow-md hover:border-accent/40">
              <h3 className="font-bold text-foreground group-hover:text-primary transition-colors">{link.label}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{link.desc}</p>
            </Link>
          ))}
        </div>
      </section>

    </>
  );
}
