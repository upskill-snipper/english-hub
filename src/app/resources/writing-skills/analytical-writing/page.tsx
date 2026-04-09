import type { Metadata } from "next";
import Link from "next/link";

/* ─── Metadata ───────────────────────────────────────────────── */

export const metadata: Metadata = {
  alternates: { canonical: 'https://theenglishhub.app/resources/writing-skills/analytical-writing' },
  title: "Analytical Writing Masterclass | The English Hub",
  description:
    "Complete guide to analytical writing for GCSE and IGCSE English. PEEL paragraphs, embedding quotations, language and structural analysis, evaluative vocabulary, linking to context, model literature and language essays with annotations, comparing texts, and grade-level response comparisons.",
};

/* ─── Annotation component ───────────────────────────────────── */

function Annotation({ children, note }: { children: React.ReactNode; note: string }) {
  return (
    <span className="group relative">
      <span className="rounded bg-primary/10 px-1 py-0.5 text-foreground border-b-2 border-dashed border-primary/40">
        {children}
      </span>
      <span className="pointer-events-none absolute bottom-full left-1/2 z-10 mb-2 w-56 -translate-x-1/2 rounded-lg bg-primary px-3 py-2 text-xs leading-relaxed text-white opacity-0 shadow-lg transition-opacity group-hover:pointer-events-auto group-hover:opacity-100">
        {note}
        <span className="absolute left-1/2 top-full -translate-x-1/2 border-4 border-transparent border-t-[primary]" />
      </span>
    </span>
  );
}

/* ─── Section wrapper ────────────────────────────────────────── */

function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24">
      <h2 className="mb-6 text-2xl font-bold text-foreground border-b-2 border-primary/20 pb-3">
        {title}
      </h2>
      {children}
    </section>
  );
}

/* ─── Page ───────────────────────────────────────────────────── */

export default function AnalyticalWritingPage() {
  return (
    <>

      {/* Hero */}
      <section className="border-b bg-gradient-to-b from-primary/[0.06] to-transparent px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
            Writing Skills Masterclass
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Analytical Writing
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Master the art of analytical response writing for English Literature
            and Language. PEEL paragraphs, quotation embedding, evaluative
            language, and full annotated model essays with grade-level comparisons.
          </p>
        </div>
      </section>

      {/* Breadcrumb */}
      <nav className="mx-auto max-w-5xl px-4 pt-6" aria-label="Breadcrumb">
        <ol className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
          <li><Link href="/" className="hover:text-foreground transition-colors">Home</Link></li>
          <li>/</li>
          <li><Link href="/resources" className="hover:text-foreground transition-colors">Resources</Link></li>
          <li>/</li>
          <li><Link href="/resources/writing-skills" className="hover:text-foreground transition-colors">Writing Skills</Link></li>
          <li>/</li>
          <li className="font-medium text-foreground">Analytical Writing</li>
        </ol>
      </nav>

      {/* Table of contents + content */}
      <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-[220px_1fr] lg:gap-10">

          {/* Sticky sidebar TOC */}
          <aside className="hidden lg:block">
            <nav className="sticky top-24 space-y-1 text-sm">
              <p className="mb-2 font-bold text-foreground uppercase tracking-wider text-xs">Contents</p>
              {[
                { id: "peel", label: "PEEL Paragraphs" },
                { id: "quotations", label: "Embedding Quotations" },
                { id: "language-analysis", label: "Language Analysis" },
                { id: "structural-analysis", label: "Structural Analysis" },
                { id: "evaluative-language", label: "Evaluative Language" },
                { id: "context", label: "Linking to Context" },
                { id: "model-literature", label: "Model: Literature Essay" },
                { id: "model-language", label: "Model: Language Analysis" },
                { id: "comparing-texts", label: "Comparing Texts" },
                { id: "grade-comparison", label: "Grade Comparison" },
              ].map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="block rounded-lg px-3 py-1.5 text-muted-foreground hover:bg-primary/10 hover:text-foreground transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </aside>

          {/* Main content */}
          <div className="space-y-16">

            {/* ─── 1. PEEL PARAGRAPHS ──────────────────────────────── */}
            <Section id="peel" title="1. PEEL Paragraphs Explained">
              <p className="mb-6 text-muted-foreground leading-relaxed">
                PEEL is the backbone of every analytical paragraph. It ensures your writing is
                structured, evidence-based, and fully developed. Every paragraph you write in an
                English Literature or Language essay should follow this framework.
              </p>

              <div className="grid gap-4 sm:grid-cols-2 mb-8">
                <div className="rounded-xl border-l-4 border-[primary] bg-primary/5 p-5">
                  <h4 className="font-bold text-foreground text-lg">P &mdash; Point</h4>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Your topic sentence. It makes a clear, arguable claim that directly addresses
                    the question. A strong point is <strong>specific</strong> and
                    <strong> analytical</strong>, not descriptive.
                  </p>
                  <div className="mt-3 rounded-lg bg-card p-3 border border-border">
                    <p className="text-xs font-semibold text-red-600 mb-1">Weak:</p>
                    <p className="text-sm text-muted-foreground italic">&ldquo;Shakespeare uses metaphors in Macbeth.&rdquo;</p>
                    <p className="text-xs font-semibold text-green-700 dark:text-green-300 mb-1 mt-2">Strong:</p>
                    <p className="text-sm text-muted-foreground italic">&ldquo;Shakespeare presents Macbeth&apos;s growing guilt as an inescapable psychological torment through increasingly violent imagery.&rdquo;</p>
                  </div>
                </div>

                <div className="rounded-xl border-l-4 border-primary bg-primary/5 p-5">
                  <h4 className="font-bold text-primary text-lg">E &mdash; Evidence</h4>
                  <p className="mt-2 text-sm text-muted-foreground">
                    A carefully selected quotation or reference from the text that directly supports
                    your point. Short, embedded quotations are always preferable to long block
                    quotes.
                  </p>
                  <div className="mt-3 rounded-lg bg-card p-3 border border-border">
                    <p className="text-xs font-semibold text-red-600 mb-1">Weak:</p>
                    <p className="text-sm text-muted-foreground italic">&ldquo;Macbeth says &lsquo;Will all great Neptune&apos;s ocean wash this blood clean from my hand?&rsquo;&rdquo;</p>
                    <p className="text-xs font-semibold text-green-700 dark:text-green-300 mb-1 mt-2">Strong:</p>
                    <p className="text-sm text-muted-foreground italic">&ldquo;This is evident when Macbeth despairs that not even &lsquo;great Neptune&apos;s ocean&rsquo; could &lsquo;wash this blood clean&rsquo; from his hands.&rdquo;</p>
                  </div>
                </div>

                <div className="rounded-xl border-l-4 border-[primary] bg-primary/5 p-5">
                  <h4 className="font-bold text-foreground text-lg">E &mdash; Explain</h4>
                  <p className="mt-2 text-sm text-muted-foreground">
                    The most important part. Analyse <strong>how</strong> and <strong>why</strong> the
                    evidence supports your point. Zoom in on specific words, techniques, and their
                    effects on the reader. This is where marks are won.
                  </p>
                  <div className="mt-3 rounded-lg bg-card p-3 border border-border">
                    <p className="text-sm text-muted-foreground italic">
                      &ldquo;The hyperbolic reference to &lsquo;Neptune&apos;s ocean&rsquo; &mdash; the
                      Roman god of the sea &mdash; suggests that Macbeth perceives his guilt as
                      cosmic in scale, beyond any human remedy. The verb &lsquo;wash&rsquo;
                      implies a desperate desire for purification, yet the rhetorical question
                      form reveals his belief that such cleansing is impossible.&rdquo;
                    </p>
                  </div>
                </div>

                <div className="rounded-xl border-l-4 border-primary bg-primary/5 p-5">
                  <h4 className="font-bold text-primary text-lg">L &mdash; Link</h4>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Connect back to the question, to the wider text, or to relevant context.
                    This demonstrates a holistic understanding and keeps your essay focused on
                    the question.
                  </p>
                  <div className="mt-3 rounded-lg bg-card p-3 border border-border">
                    <p className="text-sm text-muted-foreground italic">
                      &ldquo;This reflects the Jacobean belief that regicide was a sin against
                      God and nature &mdash; a transgression so profound that no earthly act
                      could atone for it. Shakespeare thus presents guilt not merely as an
                      emotion, but as a divine punishment.&rdquo;
                    </p>
                  </div>
                </div>
              </div>

              {/* Full PEEL example */}
              <h3 className="mb-4 text-lg font-bold text-foreground">Full PEEL Paragraph in Action</h3>
              <div className="rounded-xl border border-primary/30 bg-gradient-to-br from-[primary]/5 to-white p-6">
                <p className="text-foreground leading-relaxed">
                  <Annotation note="POINT: Clear, arguable claim addressing the question directly">
                    Shakespeare presents Macbeth&apos;s guilt as an inescapable, almost supernatural
                    force that consumes him entirely.
                  </Annotation>{" "}
                  <Annotation note="EVIDENCE: Short, embedded quotation woven into the sentence">
                    This is powerfully conveyed when Macbeth laments that not even &ldquo;great
                    Neptune&apos;s ocean&rdquo; could &ldquo;wash this blood clean&rdquo; from
                    his hands.
                  </Annotation>{" "}
                  <Annotation note="EXPLAIN: Zooms in on specific words and analyses their effect">
                    The hyperbolic allusion to Neptune, the Roman god of the sea, elevates
                    Macbeth&apos;s guilt from a personal emotion to something cosmic and
                    mythological in scale. The verb &ldquo;wash&rdquo; connotes purification
                    and baptism, yet the rhetorical question form reveals his agonised
                    conviction that no such cleansing is possible. Furthermore, the image of
                    &ldquo;blood&rdquo; &mdash; a motif that recurs throughout the play &mdash;
                    becomes a permanent stain on his conscience, symbolising the irreversible
                    moral corruption caused by regicide.
                  </Annotation>{" "}
                  <Annotation note="LINK: Connects to context and the broader question">
                    This reflects the Jacobean understanding that killing a king was not merely
                    murder but a violation of the divine right of kings &mdash; a sin so
                    profound that it could never be absolved. Shakespeare uses Macbeth&apos;s
                    torment as a warning to his audience about the devastating consequences
                    of unchecked ambition.
                  </Annotation>
                </p>
              </div>

              <div className="mt-6 rounded-lg bg-amber-500/10 border border-amber-500/30 p-4">
                <p className="text-sm font-semibold text-amber-700 dark:text-amber-300">Top tip</p>
                <p className="mt-1 text-sm text-amber-700 dark:text-amber-300">
                  The best responses have the E (Explain) section as the longest part of the
                  paragraph. Aim for at least 3&ndash;4 sentences of analysis for every
                  quotation you use. This is where the marks are.
                </p>
              </div>
            </Section>

            {/* ─── 2. EMBEDDING QUOTATIONS ─────────────────────────── */}
            <Section id="quotations" title="2. How to Embed Quotations">
              <p className="mb-6 text-muted-foreground leading-relaxed">
                Embedding quotations means weaving them seamlessly into your own sentences so they
                read naturally. This is a key skill that separates competent responses from
                excellent ones. There are three main methods.
              </p>

              {/* Method 1 */}
              <div className="mb-8 rounded-xl border border-border bg-card p-6 shadow-md">
                <div className="flex items-center gap-3 mb-4">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">1</span>
                  <h3 className="text-lg font-bold text-foreground">Mid-Sentence Embedding</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-3">
                  The quotation becomes a grammatical part of your own sentence. This is the most
                  sophisticated method and should be your default approach.
                </p>
                <div className="space-y-3">
                  <div className="rounded-lg bg-red-500/10 p-3 border border-red-500/30">
                    <p className="text-xs font-semibold text-red-600 mb-1">Instead of:</p>
                    <p className="text-sm text-muted-foreground">Scrooge is presented as miserly. &ldquo;He was a tight-fisted hand at the grindstone.&rdquo;</p>
                  </div>
                  <div className="rounded-lg bg-green-500/10 p-3 border border-green-500/30">
                    <p className="text-xs font-semibold text-green-700 dark:text-green-300 mb-1">Write:</p>
                    <p className="text-sm text-muted-foreground">Dickens presents Scrooge as a &ldquo;tight-fisted hand at the grindstone&rdquo;, immediately establishing his miserly and unfeeling nature.</p>
                  </div>
                </div>
              </div>

              {/* Method 2 */}
              <div className="mb-8 rounded-xl border border-border bg-card p-6 shadow-md">
                <div className="flex items-center gap-3 mb-4">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">2</span>
                  <h3 className="text-lg font-bold text-foreground">Single Word / Short Phrase Embedding</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-3">
                  Isolate individual words or very short phrases to zoom in on the writer&apos;s
                  specific language choices. This allows you to analyse at word level &mdash; a
                  hallmark of top-grade responses.
                </p>
                <div className="space-y-3">
                  <div className="rounded-lg bg-green-500/10 p-3 border border-green-500/30">
                    <p className="text-xs font-semibold text-green-700 dark:text-green-300 mb-1">Example:</p>
                    <p className="text-sm text-muted-foreground">
                      The verb &ldquo;squeezing&rdquo; suggests Scrooge physically extracts
                      value from others, while the adjective &ldquo;covetous&rdquo; implies
                      an almost sinful greed, linking to the biblical sin of avarice.
                    </p>
                  </div>
                </div>
              </div>

              {/* Method 3 */}
              <div className="mb-8 rounded-xl border border-border bg-card p-6 shadow-md">
                <div className="flex items-center gap-3 mb-4">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">3</span>
                  <h3 className="text-lg font-bold text-foreground">Contextualised Introduction</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-3">
                  Introduce the quotation with context about who is speaking, when, or why.
                  This is useful for longer quotations or when the dramatic context matters.
                </p>
                <div className="space-y-3">
                  <div className="rounded-lg bg-green-500/10 p-3 border border-green-500/30">
                    <p className="text-xs font-semibold text-green-700 dark:text-green-300 mb-1">Example:</p>
                    <p className="text-sm text-muted-foreground">
                      At the climax of his moral crisis, Macbeth acknowledges his own damnation,
                      confessing that he has &ldquo;filed my mind&rdquo; and given his
                      &ldquo;eternal jewel&rdquo; to &ldquo;the common enemy of man.&rdquo;
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-lg bg-amber-500/10 border border-amber-500/30 p-4">
                <p className="text-sm font-semibold text-amber-700 dark:text-amber-300">Golden rule</p>
                <p className="mt-1 text-sm text-amber-700 dark:text-amber-300">
                  Never let a quotation sit on its own as a standalone sentence. It should always be
                  embedded within your analysis or introduced with context. If you can remove the
                  quotation marks and the sentence still reads grammatically, you have embedded
                  it correctly.
                </p>
              </div>
            </Section>

            {/* ─── 3. LANGUAGE ANALYSIS ────────────────────────────── */}
            <Section id="language-analysis" title="3. Language Analysis: Three Levels">
              <p className="mb-6 text-muted-foreground leading-relaxed">
                Strong language analysis operates at three levels. The best responses move
                fluidly between all three, showing the examiner that you can zoom in and
                zoom out.
              </p>

              {/* Word Level */}
              <div className="mb-8">
                <h3 className="mb-4 text-lg font-bold text-foreground flex items-center gap-2">
                  <span className="inline-block h-3 w-3 rounded-full bg-primary"></span>
                  Word Level
                </h3>
                <p className="mb-4 text-sm text-muted-foreground">
                  Focus on individual word choices: verbs, adjectives, adverbs, nouns. Consider
                  connotations, semantic fields, and the precise effect of one word over another.
                </p>
                <div className="rounded-xl border border-border bg-card p-5 shadow-md">
                  <p className="text-sm text-muted-foreground font-semibold mb-2">Source text:</p>
                  <p className="text-sm text-muted-foreground italic mb-4">
                    &ldquo;The creature <strong>dragged</strong> itself across the frozen earth.&rdquo;
                  </p>
                  <p className="text-sm text-muted-foreground font-semibold mb-2">Analysis:</p>
                  <p className="text-sm text-muted-foreground">
                    The verb &ldquo;dragged&rdquo; connotes extreme exhaustion and physical
                    suffering &mdash; it implies the creature lacks the strength to walk or
                    crawl, reducing it to the most basic, painful form of movement. The
                    reflexive pronoun &ldquo;itself&rdquo; (rather than &ldquo;he&rdquo; or
                    &ldquo;she&rdquo;) dehumanises the figure, presenting it as something
                    less than human. This word choice creates a visceral image of degradation
                    and suffering.
                  </p>
                </div>
              </div>

              {/* Sentence Level */}
              <div className="mb-8">
                <h3 className="mb-4 text-lg font-bold text-foreground flex items-center gap-2">
                  <span className="inline-block h-3 w-3 rounded-full bg-primary"></span>
                  Sentence Level
                </h3>
                <p className="mb-4 text-sm text-muted-foreground">
                  Examine sentence structure: length, type (simple, compound, complex),
                  syntax, punctuation choices, and their effects on pace, tension, and emphasis.
                </p>
                <div className="rounded-xl border border-border bg-card p-5 shadow-md">
                  <p className="text-sm text-muted-foreground font-semibold mb-2">Source text:</p>
                  <p className="text-sm text-muted-foreground italic mb-4">
                    &ldquo;She ran. She stumbled. She fell. The darkness swallowed her whole,
                    pulling her down into a silence so complete that even her own heartbeat
                    seemed to vanish.&rdquo;
                  </p>
                  <p className="text-sm text-muted-foreground font-semibold mb-2">Analysis:</p>
                  <p className="text-sm text-muted-foreground">
                    The writer employs a trio of short, simple sentences &mdash; &ldquo;She ran.
                    She stumbled. She fell.&rdquo; &mdash; to create a staccato rhythm that
                    mirrors the character&apos;s rapid, panicked movements. Each sentence is
                    progressively more desperate, charting a decline from action to helplessness.
                    This is then juxtaposed with a long, complex sentence that seems to envelop
                    the reader, mirroring the way the &ldquo;darkness swallowed her whole.&rdquo;
                    The shift in sentence length enacts the transition from frantic movement to
                    terrifying stillness.
                  </p>
                </div>
              </div>

              {/* Whole-Text Level */}
              <div className="mb-8">
                <h3 className="mb-4 text-lg font-bold text-foreground flex items-center gap-2">
                  <span className="inline-block h-3 w-3 rounded-full bg-primary"></span>
                  Whole-Text Level
                </h3>
                <p className="mb-4 text-sm text-muted-foreground">
                  Consider patterns across the entire text: recurring motifs, semantic fields,
                  tone shifts, narrative voice, and how the writer&apos;s language choices
                  contribute to the text&apos;s overall meaning and purpose.
                </p>
                <div className="rounded-xl border border-border bg-card p-5 shadow-md">
                  <p className="text-sm text-muted-foreground font-semibold mb-2">Analysis example:</p>
                  <p className="text-sm text-muted-foreground">
                    Throughout the extract, the writer constructs a semantic field of decay and
                    decomposition &mdash; &ldquo;rotting,&rdquo; &ldquo;crumbling,&rdquo;
                    &ldquo;withered,&rdquo; &ldquo;hollowed&rdquo; &mdash; which permeates
                    every description of the setting. This sustained pattern transforms the
                    landscape into a symbol of moral and social decline, suggesting that the
                    physical environment reflects the inner corruption of its inhabitants.
                    The relentless accumulation of this imagery leaves the reader with a
                    pervasive sense of hopelessness, as if decay is not merely present but
                    inevitable.
                  </p>
                </div>
              </div>
            </Section>

            {/* ─── 4. STRUCTURAL ANALYSIS ──────────────────────────── */}
            <Section id="structural-analysis" title="4. Structural Analysis: How to Write About Structure">
              <p className="mb-6 text-muted-foreground leading-relaxed">
                Structure refers to how a writer organises and sequences their text to guide
                the reader&apos;s experience. Many students struggle with structural analysis
                because they confuse it with language analysis. Structure is about
                <strong> order, arrangement, and movement</strong> &mdash; not individual word choices.
              </p>

              <h3 className="mb-4 text-lg font-bold text-foreground">What to Look For</h3>
              <div className="grid gap-4 sm:grid-cols-2 mb-8">
                {[
                  { term: "Opening / Exposition", desc: "How the writer begins: in medias res, with a question, with setting, with dialogue? What is established and what is withheld?" },
                  { term: "Shifts in Focus", desc: "Changes in time, place, perspective, or topic. A shift from external description to internal thought. A zoom from wide shot to close-up." },
                  { term: "Pace and Tension", desc: "How the writer speeds up or slows down the narrative. Short paragraphs and sentences accelerate pace; long, detailed passages slow it." },
                  { term: "Climax and Resolution", desc: "The moment of greatest tension or significance. How does the writer build towards it? Is there resolution, or does the text end ambiguously?" },
                  { term: "Cyclical Structure", desc: "The text ends where it began, creating a sense of entrapment, inevitability, or thematic unity." },
                  { term: "Contrasts and Juxtaposition", desc: "Placing opposing ideas, settings, or characters side by side to highlight differences and create meaning." },
                ].map((item) => (
                  <div key={item.term} className="rounded-lg bg-primary/5 border border-primary/20 p-4">
                    <p className="font-bold text-foreground text-sm">{item.term}</p>
                    <p className="mt-1 text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                ))}
              </div>

              <h3 className="mb-4 text-lg font-bold text-foreground">Model Structural Analysis Paragraph</h3>
              <div className="rounded-xl border border-primary/30 bg-gradient-to-br from-[primary]/5 to-white p-6">
                <p className="text-foreground leading-relaxed">
                  <Annotation note="POINT about structure, not language">
                    At the opening of the extract, the writer establishes a deceptively calm
                    atmosphere before systematically dismantling it.
                  </Annotation>{" "}
                  <Annotation note="EVIDENCE: references to specific structural choices">
                    The first two paragraphs are composed of long, flowing sentences rich in
                    sensory detail, describing the &ldquo;golden light&rdquo; and &ldquo;gentle
                    hum of bees.&rdquo; However, the third paragraph consists of a single,
                    abrupt sentence: &ldquo;Then the screaming started.&rdquo;
                  </Annotation>{" "}
                  <Annotation note="EXPLAIN: analyses the effect of the structural choice">
                    This dramatic structural shift &mdash; from expansive, leisurely prose to a
                    terse, violent declaration &mdash; jolts the reader out of their complacency.
                    The paragraph break acts as a caesura, forcing a pause before the revelation
                    that mirrors the sudden rupture of peace within the narrative. By front-loading
                    the tranquillity, the writer makes the disruption feel more shocking, as the
                    reader&apos;s expectations are deliberately subverted.
                  </Annotation>{" "}
                  <Annotation note="LINK: connects to the writer's broader purpose">
                    This technique of structural contrast reflects a key theme of the text: that
                    safety is an illusion, and violence can erupt without warning.
                  </Annotation>
                </p>
              </div>

              <div className="mt-6 rounded-lg bg-amber-500/10 border border-amber-500/30 p-4">
                <p className="text-sm font-semibold text-amber-700 dark:text-amber-300">Key phrases for structural analysis</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {[
                    "At the opening...", "The writer shifts focus to...",
                    "The pace accelerates through...", "This structural contrast...",
                    "The reader's attention is directed towards...", "By placing... alongside...",
                    "The narrative perspective shifts from...", "The text builds towards...",
                    "The writer withholds... until...", "This cyclical structure suggests...",
                  ].map((phrase) => (
                    <span key={phrase} className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-foreground">
                      {phrase}
                    </span>
                  ))}
                </div>
              </div>
            </Section>

            {/* ─── 5. EVALUATIVE LANGUAGE ──────────────────────────── */}
            <Section id="evaluative-language" title="5. Evaluative Language">
              <p className="mb-6 text-muted-foreground leading-relaxed">
                Evaluative language demonstrates your personal response and critical judgement.
                It shows the examiner that you are not just identifying techniques but assessing
                their effectiveness. This is the difference between description and analysis.
              </p>

              <h3 className="mb-4 text-lg font-bold text-foreground">Evaluative Adverbs</h3>
              <p className="mb-4 text-sm text-muted-foreground">
                These modify your analysis, showing judgement and confidence.
              </p>
              <div className="mb-8 flex flex-wrap gap-2">
                {[
                  "compellingly", "masterfully", "subtly", "powerfully", "deliberately",
                  "effectively", "provocatively", "hauntingly", "relentlessly", "arguably",
                  "perhaps", "significantly", "crucially", "strikingly", "ingeniously",
                ].map((word) => (
                  <span key={word} className="rounded-full bg-primary/10 px-3 py-1.5 text-sm font-medium text-foreground">
                    {word}
                  </span>
                ))}
              </div>

              <h3 className="mb-4 text-lg font-bold text-foreground">Evaluative Sentence Starters</h3>
              <div className="grid gap-3 sm:grid-cols-2 mb-8">
                {[
                  { starter: "Shakespeare masterfully employs...", use: "Attributing skill to the writer" },
                  { starter: "This compellingly suggests...", use: "Evaluating the effect of a technique" },
                  { starter: "Arguably, Dickens intends...", use: "Introducing an interpretation with nuance" },
                  { starter: "The reader is powerfully confronted with...", use: "Focusing on reader response" },
                  { starter: "Perhaps most strikingly,...", use: "Highlighting the most significant point" },
                  { starter: "Stevenson deliberately subverts...", use: "Showing the writer's intentionality" },
                ].map((item) => (
                  <div key={item.starter} className="rounded-lg border border-border bg-card p-4">
                    <p className="text-sm font-semibold text-foreground">{item.starter}</p>
                    <p className="mt-1 text-xs text-muted-foreground">{item.use}</p>
                  </div>
                ))}
              </div>

              <h3 className="mb-4 text-lg font-bold text-foreground">Without vs. With Evaluative Language</h3>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-xl border border-red-500/30 bg-red-500/10 p-5">
                  <p className="text-xs font-bold text-red-600 uppercase tracking-wider mb-2">Without evaluation</p>
                  <p className="text-sm text-muted-foreground">
                    &ldquo;Shakespeare uses the metaphor of blood to show guilt. The word
                    &lsquo;blood&rsquo; is repeated many times. This shows that Macbeth
                    feels guilty.&rdquo;
                  </p>
                </div>
                <div className="rounded-xl border border-green-500/30 bg-green-500/10 p-5">
                  <p className="text-xs font-bold text-green-700 dark:text-green-300 uppercase tracking-wider mb-2">With evaluation</p>
                  <p className="text-sm text-muted-foreground">
                    &ldquo;Shakespeare masterfully constructs blood as a pervasive motif that
                    compellingly charts Macbeth&apos;s psychological disintegration. The
                    relentless repetition arguably transforms blood from a physical substance
                    into a symbol of inescapable moral corruption.&rdquo;
                  </p>
                </div>
              </div>
            </Section>

            {/* ─── 6. LINKING TO CONTEXT ───────────────────────────── */}
            <Section id="context" title="6. Linking to Context Effectively">
              <p className="mb-6 text-muted-foreground leading-relaxed">
                Context must be woven into your analysis, not bolted on as a separate
                paragraph. The key principle is: <strong>context should explain
                <em> why</em> the writer made a particular choice</strong>, not simply
                provide historical background.
              </p>

              <h3 className="mb-4 text-lg font-bold text-foreground">Three Rules for Context</h3>
              <div className="space-y-4 mb-8">
                <div className="flex gap-4 items-start">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-red-500/15 text-sm font-bold text-red-700 dark:text-red-300">1</span>
                  <div>
                    <p className="font-semibold text-foreground">Never write a &ldquo;context paragraph&rdquo;</p>
                    <p className="text-sm text-muted-foreground mt-1">
                      Context should appear within your analytical paragraphs, usually in the
                      Link section of PEEL. A separate context paragraph reads as a history
                      essay, not an English essay.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-red-500/15 text-sm font-bold text-red-700 dark:text-red-300">2</span>
                  <div>
                    <p className="font-semibold text-foreground">Always connect context to the writer&apos;s purpose</p>
                    <p className="text-sm text-muted-foreground mt-1">
                      Ask: &ldquo;Why does this context explain the writer&apos;s choice?&rdquo;
                      If it doesn&apos;t, it&apos;s irrelevant.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-red-500/15 text-sm font-bold text-red-700 dark:text-red-300">3</span>
                  <div>
                    <p className="font-semibold text-foreground">Use context to deepen analysis, not replace it</p>
                    <p className="text-sm text-muted-foreground mt-1">
                      Context supports your interpretation. It should never be the main content
                      of a paragraph.
                    </p>
                  </div>
                </div>
              </div>

              <h3 className="mb-4 text-lg font-bold text-foreground">Weak vs. Strong Context Integration</h3>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-xl border border-red-500/30 bg-red-500/10 p-5">
                  <p className="text-xs font-bold text-red-600 uppercase tracking-wider mb-2">Bolted on (weak)</p>
                  <p className="text-sm text-muted-foreground">
                    &ldquo;In Victorian times, there was a lot of poverty. Many people were poor.
                    The workhouses were terrible places. Dickens wrote A Christmas Carol to
                    show that rich people should help poor people.&rdquo;
                  </p>
                </div>
                <div className="rounded-xl border border-green-500/30 bg-green-500/10 p-5">
                  <p className="text-xs font-bold text-green-700 dark:text-green-300 uppercase tracking-wider mb-2">Woven in (strong)</p>
                  <p className="text-sm text-muted-foreground">
                    &ldquo;Dickens&apos; portrayal of Scrooge as &lsquo;solitary as an
                    oyster&rsquo; arguably reflects the utilitarian philosophy prevalent in
                    1843, which reduced human value to economic productivity. By transforming
                    Scrooge from miser to benefactor, Dickens directly challenges this ideology,
                    advocating instead for the Christian charity that he felt was being eroded
                    by industrialisation.&rdquo;
                  </p>
                </div>
              </div>
            </Section>

            {/* ─── 7. MODEL LITERATURE ESSAY ───────────────────────── */}
            <Section id="model-literature" title="7. Model Literature Essay: Macbeth">
              <div className="mb-4 rounded-lg bg-primary/5 border border-[primary]/20 p-4">
                <p className="text-sm font-semibold text-foreground">Question:</p>
                <p className="text-sm text-muted-foreground mt-1 italic">
                  Starting with this extract, explore how Shakespeare presents the theme of
                  guilt in Macbeth. Write about the extract and the play as a whole.
                </p>
              </div>

              <div className="rounded-xl border border-primary/30 bg-gradient-to-br from-[primary]/5 to-white p-6 space-y-6">
                {/* Introduction */}
                <div>
                  <p className="text-xs font-bold text-primary uppercase tracking-wider mb-2">Introduction</p>
                  <p className="text-foreground leading-relaxed">
                    <Annotation note="Addresses the question immediately with a conceptual overview">
                      Throughout Macbeth, Shakespeare presents guilt not as a simple emotion but
                      as a destructive, almost supernatural force that consumes those who
                      transgress the moral and divine order.
                    </Annotation>{" "}
                    <Annotation note="Signals the argument the essay will develop">
                      From the moment of Duncan&apos;s murder, guilt manifests physically,
                      psychologically, and spiritually &mdash; becoming the mechanism through
                      which Shakespeare dramatises the consequences of unchecked ambition for
                      his Jacobean audience.
                    </Annotation>
                  </p>
                </div>

                {/* Paragraph 1 */}
                <div>
                  <p className="text-xs font-bold text-primary uppercase tracking-wider mb-2">Paragraph 1 &mdash; Extract Analysis</p>
                  <p className="text-foreground leading-relaxed">
                    <Annotation note="POINT: Specific, arguable claim about guilt">
                      In the extract, Shakespeare presents Macbeth&apos;s guilt as an
                      overwhelming, physical sensation that he cannot escape.
                    </Annotation>{" "}
                    <Annotation note="EVIDENCE: Embedded quotation">
                      Immediately after the murder, Macbeth stares at his hands and despairs,
                      &ldquo;Will all great Neptune&apos;s ocean wash this blood / Clean from
                      my hand?&rdquo;
                    </Annotation>{" "}
                    <Annotation note="EXPLAIN: Multi-layered word-level analysis">
                      The hyperbolic allusion to &ldquo;Neptune&rdquo; &mdash; the Roman god
                      who commands the entirety of the sea &mdash; elevates Macbeth&apos;s guilt
                      from a personal emotion to something cosmic and mythological in scale.
                      The verb &ldquo;wash&rdquo; connotes ritual purification and baptism,
                      yet the rhetorical question form reveals his agonised conviction that
                      such cleansing is impossible. The image of &ldquo;blood&rdquo;,
                      functioning metonymically for guilt itself, suggests that his crime has
                      become inseparable from his identity.
                    </Annotation>{" "}
                    <Annotation note="EXPLAIN: Further analysis of a second quotation">
                      He then declares that his hands will &ldquo;the multitudinous seas
                      incarnadine, / Making the green one red.&rdquo; The Latinate
                      &ldquo;multitudinous&rdquo; and &ldquo;incarnadine&rdquo; create a
                      grandiloquent, almost biblical register, before the stark monosyllables
                      &ldquo;the green one red&rdquo; bring the horror into blunt, visceral
                      clarity. This tonal shift from elevated to plain language mirrors
                      Macbeth&apos;s psychological state: the intellectual rationalisation
                      giving way to raw, unprocessed horror.
                    </Annotation>{" "}
                    <Annotation note="LINK: Context woven into the analysis">
                      For Shakespeare&apos;s Jacobean audience, who believed in the divine
                      right of kings, this image of blood that can never be washed away would
                      have carried profound theological weight &mdash; regicide was not merely
                      murder but a sin against God himself.
                    </Annotation>
                  </p>
                </div>

                {/* Paragraph 2 */}
                <div>
                  <p className="text-xs font-bold text-primary uppercase tracking-wider mb-2">Paragraph 2 &mdash; Wider Play</p>
                  <p className="text-foreground leading-relaxed">
                    <Annotation note="POINT: New aspect of guilt, moving beyond the extract">
                      Beyond the extract, Shakespeare presents guilt as a force that destroys
                      the mind, manifesting as hallucination and madness.
                    </Annotation>{" "}
                    <Annotation note="EVIDENCE: Two embedded quotations for comparison">
                      Prior to the murder, Macbeth sees a &ldquo;dagger of the mind, a false
                      creation&rdquo; leading him towards Duncan&apos;s chamber, and later
                      Lady Macbeth is tormented by an imagined &ldquo;spot&rdquo; of blood
                      that &ldquo;all the perfumes of Arabia will not sweeten.&rdquo;
                    </Annotation>{" "}
                    <Annotation note="EXPLAIN: Comparative analysis of both characters">
                      The spectral dagger is described as a &ldquo;false creation / Proceeding
                      from the heat-oppressed brain&rdquo; &mdash; Shakespeare&apos;s use of
                      &ldquo;heat-oppressed&rdquo; presents the mind as physically burdened,
                      almost feverish with guilt before the crime has even been committed.
                      The parallel between Macbeth&apos;s blood-stained hands and Lady
                      Macbeth&apos;s obsessive handwashing in Act 5 creates a structural
                      echo that compellingly demonstrates how guilt has transferred between
                      them, ultimately consuming Lady Macbeth completely.
                    </Annotation>{" "}
                    <Annotation note="LINK: Writer's purpose and audience">
                      Shakespeare thus uses the motif of guilt as a dramatic device to chart
                      the complete psychological disintegration of both protagonists, serving
                      as a cautionary tale about the inevitable consequences of moral
                      transgression.
                    </Annotation>
                  </p>
                </div>

                {/* Paragraph 3 */}
                <div>
                  <p className="text-xs font-bold text-primary uppercase tracking-wider mb-2">Paragraph 3 &mdash; Wider Play</p>
                  <p className="text-foreground leading-relaxed">
                    <Annotation note="POINT: Third angle - guilt and the supernatural">
                      Shakespeare also intertwines guilt with the supernatural, suggesting
                      that moral transgression disrupts the natural order itself.
                    </Annotation>{" "}
                    <Annotation note="EVIDENCE: Embedded quotation with context">
                      On the night of Duncan&apos;s murder, Lennox reports that &ldquo;the
                      earth was feverous and did shake,&rdquo; while an Old Man describes
                      how Duncan&apos;s horses &ldquo;turned wild in nature&rdquo; and
                      &ldquo;ate each other.&rdquo;
                    </Annotation>{" "}
                    <Annotation note="EXPLAIN: Analysis of pathetic fallacy and the Great Chain of Being">
                      The personification of the earth as &ldquo;feverous&rdquo; employs
                      pathetic fallacy to suggest that Macbeth&apos;s guilt has literally
                      infected the natural world. The unnatural behaviour of the horses &mdash;
                      herbivores turning carnivorous &mdash; symbolises the grotesque
                      inversion of the natural order caused by regicide. Shakespeare presents
                      a world in which guilt is not contained within the individual but ripples
                      outward, corrupting everything it touches.
                    </Annotation>{" "}
                    <Annotation note="LINK: Context about the Great Chain of Being">
                      This reflects the Jacobean concept of the Great Chain of Being, in which
                      the king occupied a divinely ordained position. His murder would
                      inevitably cause cosmic disruption &mdash; a belief Shakespeare
                      dramatises to reinforce the message that ambition that defies divine
                      order leads to universal chaos.
                    </Annotation>
                  </p>
                </div>

                {/* Conclusion */}
                <div>
                  <p className="text-xs font-bold text-primary uppercase tracking-wider mb-2">Conclusion</p>
                  <p className="text-foreground leading-relaxed">
                    <Annotation note="Synthesises the argument and returns to the question">
                      Ultimately, Shakespeare presents guilt in Macbeth as a force that is
                      simultaneously personal and cosmic, psychological and supernatural. It
                      manifests in blood that cannot be washed, daggers that cannot be grasped,
                      and a natural world thrown into chaos.
                    </Annotation>{" "}
                    <Annotation note="Final evaluative statement about writer's purpose">
                      Through this multifaceted presentation, Shakespeare constructs guilt as
                      the inevitable and inescapable consequence of violating moral and divine
                      law &mdash; a message that resonated powerfully with his Jacobean audience
                      and continues to unsettle readers today.
                    </Annotation>
                  </p>
                </div>
              </div>
            </Section>

            {/* ─── 8. MODEL LANGUAGE ANALYSIS ──────────────────────── */}
            <Section id="model-language" title="8. Model Language Analysis Response">
              <div className="mb-4 rounded-lg bg-primary/5 border border-[primary]/20 p-4">
                <p className="text-sm font-semibold text-foreground">Question:</p>
                <p className="text-sm text-muted-foreground mt-1 italic">
                  How does the writer use language to describe the storm?
                </p>
              </div>

              <div className="mb-4 rounded-lg bg-muted border border-border p-4">
                <p className="text-sm font-semibold text-muted-foreground mb-2">Source text (extract):</p>
                <p className="text-sm text-muted-foreground italic leading-relaxed">
                  &ldquo;The sky had turned the colour of a bruise &mdash; deep purples and
                  sickly yellows pressing down on the town like a lid on a coffin. The wind
                  did not blow; it screamed, tearing at the rooftops with invisible claws,
                  ripping tiles free and hurling them into the void. Rain fell in sheets so
                  thick that the world beyond the window ceased to exist. And then, silence.
                  A silence so sudden and so complete that it felt like a held breath &mdash;
                  the whole town waiting, suspended, for what would come next.&rdquo;
                </p>
              </div>

              <div className="rounded-xl border border-primary/30 bg-gradient-to-br from-[primary]/5 to-white p-6 space-y-6">
                {/* Paragraph 1 */}
                <div>
                  <p className="text-xs font-bold text-primary uppercase tracking-wider mb-2">Paragraph 1 &mdash; Word Level</p>
                  <p className="text-foreground leading-relaxed">
                    <Annotation note="POINT: About the writer's language choices">
                      The writer uses violent, aggressive language to personify the storm as a
                      malevolent, almost sentient force.
                    </Annotation>{" "}
                    <Annotation note="EVIDENCE: Short embedded quotations">
                      The wind does not simply blow but &ldquo;screamed,&rdquo; while it attacks
                      with &ldquo;invisible claws,&rdquo; &ldquo;tearing&rdquo; and
                      &ldquo;ripping&rdquo; at the rooftops.
                    </Annotation>{" "}
                    <Annotation note="EXPLAIN: Word-level analysis with connotations">
                      The verb &ldquo;screamed&rdquo; personifies the wind as something in
                      pain or rage, transforming a natural phenomenon into something that
                      feels deliberately hostile. The metaphor of &ldquo;invisible claws&rdquo;
                      draws on predatory, animalistic imagery, presenting the storm as a
                      creature that hunts and destroys. The verbs &ldquo;tearing&rdquo; and
                      &ldquo;ripping&rdquo; belong to a semantic field of violence, and their
                      progressive intensification creates a sense of escalating destruction.
                      The modifier &ldquo;invisible&rdquo; is particularly effective, as it
                      implies the storm&apos;s power is all the more terrifying because it
                      cannot be seen or understood.
                    </Annotation>{" "}
                    <Annotation note="LINK: Effect on reader">
                      This language compellingly positions the reader as a helpless observer,
                      confronted by a force that is both devastating and incomprehensible.
                    </Annotation>
                  </p>
                </div>

                {/* Paragraph 2 */}
                <div>
                  <p className="text-xs font-bold text-primary uppercase tracking-wider mb-2">Paragraph 2 &mdash; Imagery and Figurative Language</p>
                  <p className="text-foreground leading-relaxed">
                    <Annotation note="POINT: About the writer's use of simile and metaphor">
                      The writer employs striking figurative language to convey both the
                      oppressive atmosphere and the sense of mortality created by the storm.
                    </Annotation>{" "}
                    <Annotation note="EVIDENCE: Two embedded quotations">
                      The sky is described as &ldquo;the colour of a bruise,&rdquo; with clouds
                      &ldquo;pressing down on the town like a lid on a coffin.&rdquo;
                    </Annotation>{" "}
                    <Annotation note="EXPLAIN: Analysis of both images">
                      The simile &ldquo;the colour of a bruise&rdquo; is powerfully
                      multifaceted: it conveys the visual reality of the stormy sky (purples
                      and yellows) while simultaneously connoting injury and pain, as if the
                      sky itself has been wounded. The subsequent simile, &ldquo;like a lid on
                      a coffin,&rdquo; intensifies this from injury to death, creating a
                      claustrophobic image of the town being sealed inside its own grave.
                      The verb &ldquo;pressing&rdquo; adds physical weight to this metaphor,
                      suggesting suffocation and entrapment.
                    </Annotation>{" "}
                    <Annotation note="LINK: Overall effect and writer's craft">
                      Through this layered imagery, the writer masterfully transforms a weather
                      event into an existential threat, building a pervasive atmosphere of
                      dread.
                    </Annotation>
                  </p>
                </div>

                {/* Paragraph 3 */}
                <div>
                  <p className="text-xs font-bold text-primary uppercase tracking-wider mb-2">Paragraph 3 &mdash; Sentence Level and Structure</p>
                  <p className="text-foreground leading-relaxed">
                    <Annotation note="POINT: About structural and sentence-level choices">
                      The writer manipulates sentence structure to mirror the storm&apos;s
                      progression from chaos to eerie stillness.
                    </Annotation>{" "}
                    <Annotation note="EVIDENCE: References to sentence structures">
                      The long, multi-clause sentences describing the storm&apos;s violence
                      give way to the stark minor sentence, &ldquo;And then, silence.&rdquo;
                    </Annotation>{" "}
                    <Annotation note="EXPLAIN: Analysis of the structural effect">
                      The breathless, accumulative syntax of the storm description &mdash;
                      clause piling upon clause &mdash; creates a relentless momentum that
                      mirrors the storm&apos;s overwhelming intensity. The abrupt shift to
                      &ldquo;And then, silence&rdquo; is devastatingly effective: the minor
                      sentence, stripped of all elaboration, enacts the very suddenness it
                      describes. The commas around &ldquo;silence&rdquo; isolate the word,
                      forcing the reader to pause and experience the stillness. The subsequent
                      simile &mdash; &ldquo;like a held breath&rdquo; &mdash; sustains the
                      tension by suggesting the calm is temporary, pregnant with the threat of
                      what is to come.
                    </Annotation>{" "}
                    <Annotation note="LINK: Effect on the reader">
                      This structural technique leaves the reader in a state of suspense,
                      arguably more unsettled by the silence than by the storm itself.
                    </Annotation>
                  </p>
                </div>
              </div>
            </Section>

            {/* ─── 9. COMPARING TEXTS ──────────────────────────────── */}
            <Section id="comparing-texts" title="9. Comparing Texts Technique">
              <p className="mb-6 text-muted-foreground leading-relaxed">
                When comparing two texts, the key is to write about <strong>both texts
                together</strong> in every paragraph, not one after the other. Use comparative
                connectives to weave your analysis of both texts into a unified argument.
              </p>

              <h3 className="mb-4 text-lg font-bold text-foreground">The Integrated Comparison Method</h3>
              <div className="mb-8 space-y-4">
                <div className="rounded-xl border border-border bg-card p-5 shadow-md">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-red-500/15 text-sm font-bold text-red-700 dark:text-red-300">1</span>
                    <p className="font-semibold text-foreground">Make a comparative point</p>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Your topic sentence should address <strong>both</strong> texts, identifying a
                    similarity or difference.
                  </p>
                  <p className="text-sm italic text-muted-foreground mt-2">
                    &ldquo;Both writers present nature as a powerful, untameable force, yet
                    while Source A presents it as beautiful, Source B presents it as terrifying.&rdquo;
                  </p>
                </div>

                <div className="rounded-xl border border-border bg-card p-5 shadow-md">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-red-500/15 text-sm font-bold text-red-700 dark:text-red-300">2</span>
                    <p className="font-semibold text-foreground">Analyse Text A with evidence</p>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Provide a quotation from Text A and analyse it in detail.
                  </p>
                </div>

                <div className="rounded-xl border border-border bg-card p-5 shadow-md">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-red-500/15 text-sm font-bold text-red-700 dark:text-red-300">3</span>
                    <p className="font-semibold text-foreground">Use a comparative connective to transition</p>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">
                    Bridge to Text B with a comparison word or phrase.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "In contrast,", "Similarly,", "Conversely,", "While Source A..., Source B...",
                      "However,", "Both writers..., yet...", "Unlike Source A,",
                      "This differs markedly from Source B, where...",
                    ].map((conn) => (
                      <span key={conn} className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-foreground">
                        {conn}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="rounded-xl border border-border bg-card p-5 shadow-md">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-red-500/15 text-sm font-bold text-red-700 dark:text-red-300">4</span>
                    <p className="font-semibold text-foreground">Analyse Text B with evidence</p>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Provide a quotation from Text B and analyse it, always linking back to the
                    comparison you are making.
                  </p>
                </div>
              </div>

              <h3 className="mb-4 text-lg font-bold text-foreground">Model Comparison Paragraph</h3>
              <div className="rounded-xl border border-primary/30 bg-gradient-to-br from-[primary]/5 to-white p-6">
                <p className="text-foreground leading-relaxed">
                  <Annotation note="Comparative point addressing both texts">
                    Both writers present the sea as a force beyond human control, yet their
                    attitudes differ significantly: Source A romanticises the sea&apos;s power,
                    while Source B presents it as a genuine threat to survival.
                  </Annotation>{" "}
                  <Annotation note="Analysis of Source A">
                    In Source A, the writer describes the waves as &ldquo;magnificent
                    cathedrals of water, rising with a grace that defied their violence.&rdquo;
                    The metaphor of &ldquo;cathedrals&rdquo; elevates the sea to something
                    sacred and awe-inspiring, while &ldquo;grace&rdquo; imbues its destructive
                    power with elegance and beauty.
                  </Annotation>{" "}
                  <Annotation note="Comparative connective bridging to Source B">
                    In stark contrast, the writer of Source B presents the same phenomenon in
                    purely terrifying terms,
                  </Annotation>{" "}
                  <Annotation note="Analysis of Source B">
                    describing the waves as &ldquo;monstrous walls of black water that
                    obliterated the horizon.&rdquo; The adjective &ldquo;monstrous&rdquo;
                    dehumanises the sea, while &ldquo;obliterated&rdquo; &mdash; a verb
                    associated with total destruction &mdash; suggests the sea has the power
                    to erase the world itself.
                  </Annotation>{" "}
                  <Annotation note="Evaluative summary linking both">
                    This contrast arguably reflects the writers&apos; different purposes:
                    Source A, written for a travel magazine, seeks to enthral and inspire,
                    while Source B, a survivor&apos;s account, conveys the raw terror of
                    lived experience.
                  </Annotation>
                </p>
              </div>
            </Section>

            {/* ─── 10. GRADE COMPARISON ────────────────────────────── */}
            <Section id="grade-comparison" title="10. Grade 5 vs Grade 7 vs Grade 9 Response Comparison">
              <p className="mb-6 text-muted-foreground leading-relaxed">
                Understanding the difference between grade boundaries is crucial. Below are
                three responses to the same question, showing the progression from competent
                to exceptional.
              </p>

              <div className="mb-4 rounded-lg bg-primary/5 border border-[primary]/20 p-4">
                <p className="text-sm font-semibold text-foreground">Question:</p>
                <p className="text-sm text-muted-foreground mt-1 italic">
                  How does Shakespeare present Lady Macbeth as a powerful character?
                </p>
              </div>

              {/* Grade 5 */}
              <div className="mb-6 rounded-xl border-2 border-amber-500/40 bg-amber-500/10 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="rounded-full bg-amber-400 px-4 py-1 text-sm font-bold text-white">Grade 5</span>
                  <span className="text-sm font-semibold text-amber-700 dark:text-amber-300">Clear, explained response</span>
                </div>
                <div className="rounded-lg bg-card p-4 border border-amber-500/30">
                  <p className="text-sm text-foreground leading-relaxed">
                    Shakespeare presents Lady Macbeth as a powerful character. When she finds
                    out about the witches&apos; prophecy, she says &ldquo;unsex me here&rdquo;
                    which shows she wants to get rid of her femininity so she can be strong
                    enough to help Macbeth kill the king. The word &ldquo;unsex&rdquo; means
                    she wants to remove her womanly qualities because in those days women were
                    seen as weak. She also calls on &ldquo;spirits&rdquo; to help her which
                    shows she is willing to use dark forces to get power. This shows that Lady
                    Macbeth is determined and ambitious.
                  </p>
                </div>
                <div className="mt-4 space-y-2">
                  <p className="text-sm font-semibold text-amber-700 dark:text-amber-300">What keeps this at Grade 5:</p>
                  <ul className="list-disc pl-5 text-sm text-amber-700 dark:text-amber-300 space-y-1">
                    <li>Makes a valid point and uses quotations</li>
                    <li>Some explanation of language, but stays surface-level</li>
                    <li>Context is mentioned but feels &ldquo;bolted on&rdquo; (&ldquo;in those days&rdquo;)</li>
                    <li>Limited evaluative vocabulary &mdash; &ldquo;shows&rdquo; is repeated</li>
                    <li>Does not explore connotations or alternative interpretations</li>
                  </ul>
                </div>
              </div>

              {/* Grade 7 */}
              <div className="mb-6 rounded-xl border-2 border-blue-500/40 bg-blue-500/10 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="rounded-full bg-blue-500 px-4 py-1 text-sm font-bold text-white">Grade 7</span>
                  <span className="text-sm font-semibold text-blue-700 dark:text-blue-300">Thoughtful, developed response</span>
                </div>
                <div className="rounded-lg bg-card p-4 border border-blue-500/30">
                  <p className="text-sm text-foreground leading-relaxed">
                    Shakespeare presents Lady Macbeth as a character who deliberately rejects
                    femininity in order to seize power in a patriarchal world. Her invocation,
                    &ldquo;unsex me here, / And fill me from the crown to the toe top-full /
                    Of direst cruelty,&rdquo; is a deliberate appeal to dark, supernatural
                    forces. The imperative &ldquo;unsex me&rdquo; suggests she views her
                    gender as an obstacle to power &mdash; she must be stripped of femininity
                    before she can act with the ruthlessness she believes the situation
                    demands. The phrase &ldquo;top-full of direst cruelty&rdquo; implies she
                    wants to be completely consumed by cruelty, leaving no room for compassion
                    or hesitation. The superlative &ldquo;direst&rdquo; emphasises that she
                    does not want partial cruelty but the most extreme form possible. This
                    reflects the Jacobean belief that women who sought power were unnatural
                    and transgressive, aligning Lady Macbeth with the witches rather than with
                    conventional femininity.
                  </p>
                </div>
                <div className="mt-4 space-y-2">
                  <p className="text-sm font-semibold text-blue-700 dark:text-blue-300">What makes this Grade 7:</p>
                  <ul className="list-disc pl-5 text-sm text-blue-700 dark:text-blue-300 space-y-1">
                    <li>Clear, arguable topic sentence</li>
                    <li>Longer quotation that is embedded and analysed in detail</li>
                    <li>Zooms in on specific words (&ldquo;direst&rdquo;, &ldquo;top-full&rdquo;)</li>
                    <li>Context is integrated, not bolted on</li>
                    <li>Some evaluative language, but could be more varied</li>
                    <li>Could explore alternative interpretations or a counter-argument</li>
                  </ul>
                </div>
              </div>

              {/* Grade 9 */}
              <div className="mb-6 rounded-xl border-2 border-purple-500/40 bg-purple-500/10 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="rounded-full bg-purple-600 px-4 py-1 text-sm font-bold text-white">Grade 9</span>
                  <span className="text-sm font-semibold text-purple-700 dark:text-purple-300">Convincing, critical, conceptualised response</span>
                </div>
                <div className="rounded-lg bg-card p-4 border border-purple-500/30">
                  <p className="text-sm text-foreground leading-relaxed">
                    Shakespeare constructs Lady Macbeth&apos;s power as fundamentally
                    transgressive &mdash; a deliberate violation of the gender hierarchy that
                    underpinned Jacobean society. Her soliloquy is not merely a request but a
                    ritualistic invocation: &ldquo;Come, you spirits / That tend on mortal
                    thoughts, unsex me here.&rdquo; The imperative &ldquo;come&rdquo; and the
                    direct address to supernatural &ldquo;spirits&rdquo; frames this as a
                    demonic summoning, deliberately echoing the witches&apos; incantations
                    earlier in the play. Shakespeare thus structurally parallels Lady Macbeth
                    with the Weird Sisters, positioning her power as inherently unnatural and
                    dangerous. The verb &ldquo;unsex&rdquo; is a Shakespearean coinage &mdash;
                    a word so radical that it had to be invented, implying that what Lady
                    Macbeth desires is so far beyond the boundaries of accepted femininity
                    that existing language is insufficient to express it. She demands to be
                    filled &ldquo;from the crown to the toe top-full / Of direst cruelty&rdquo;
                    &mdash; the anatomical progression from &ldquo;crown&rdquo; to
                    &ldquo;toe&rdquo; suggests a complete, systematic replacement of her
                    humanity with cruelty, while the compound &ldquo;top-full&rdquo; implies
                    a vessel filled to overflowing. Arguably, however, the very extremity of
                    her language reveals its opposite: if Lady Macbeth truly possessed innate
                    ruthlessness, she would not need to plead for it from supernatural forces.
                    Her invocation, paradoxically, exposes the vulnerability and humanity she
                    is so desperate to suppress &mdash; a reading that gains devastating
                    retrospective force in the sleepwalking scene of Act 5, when her
                    suppressed guilt finally overwhelms her.
                  </p>
                </div>
                <div className="mt-4 space-y-2">
                  <p className="text-sm font-semibold text-purple-700 dark:text-purple-300">What makes this Grade 9:</p>
                  <ul className="list-disc pl-5 text-sm text-purple-700 dark:text-purple-300 space-y-1">
                    <li>Conceptualised argument (&ldquo;fundamentally transgressive&rdquo;)</li>
                    <li>Analyses the writer&apos;s craft, not just the character</li>
                    <li>Zooms into individual words <em>and</em> zooms out to structural parallels</li>
                    <li>Context is seamlessly woven throughout, not separated</li>
                    <li>Offers a counter-interpretation (&ldquo;Arguably, however...&rdquo;)</li>
                    <li>Tracks ideas across the whole play (links to Act 5)</li>
                    <li>Rich evaluative language throughout</li>
                    <li>Explores the idea that language itself is significant (the coinage &ldquo;unsex&rdquo;)</li>
                  </ul>
                </div>
              </div>

              {/* Summary table */}
              <h3 className="mb-4 text-lg font-bold text-foreground">Key Differences at a Glance</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-primary text-white">
                      <th className="px-4 py-3 text-left font-semibold">Skill</th>
                      <th className="px-4 py-3 text-left font-semibold">Grade 5</th>
                      <th className="px-4 py-3 text-left font-semibold">Grade 7</th>
                      <th className="px-4 py-3 text-left font-semibold">Grade 9</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    <tr className="bg-card">
                      <td className="px-4 py-3 font-medium text-foreground">Point</td>
                      <td className="px-4 py-3 text-muted-foreground">Valid but simple</td>
                      <td className="px-4 py-3 text-muted-foreground">Arguable and specific</td>
                      <td className="px-4 py-3 text-muted-foreground">Conceptualised and original</td>
                    </tr>
                    <tr className="bg-muted">
                      <td className="px-4 py-3 font-medium text-foreground">Evidence</td>
                      <td className="px-4 py-3 text-muted-foreground">Quotations used</td>
                      <td className="px-4 py-3 text-muted-foreground">Embedded and well-chosen</td>
                      <td className="px-4 py-3 text-muted-foreground">Precisely selected; single words isolated</td>
                    </tr>
                    <tr className="bg-card">
                      <td className="px-4 py-3 font-medium text-foreground">Analysis</td>
                      <td className="px-4 py-3 text-muted-foreground">Identifies technique and basic effect</td>
                      <td className="px-4 py-3 text-muted-foreground">Explores connotations and effects in detail</td>
                      <td className="px-4 py-3 text-muted-foreground">Multi-layered; word, sentence, and structural level</td>
                    </tr>
                    <tr className="bg-muted">
                      <td className="px-4 py-3 font-medium text-foreground">Context</td>
                      <td className="px-4 py-3 text-muted-foreground">Mentioned separately</td>
                      <td className="px-4 py-3 text-muted-foreground">Integrated into analysis</td>
                      <td className="px-4 py-3 text-muted-foreground">Seamlessly woven; explains writer&apos;s choices</td>
                    </tr>
                    <tr className="bg-card">
                      <td className="px-4 py-3 font-medium text-foreground">Evaluation</td>
                      <td className="px-4 py-3 text-muted-foreground">&ldquo;This shows...&rdquo;</td>
                      <td className="px-4 py-3 text-muted-foreground">Some evaluative adverbs</td>
                      <td className="px-4 py-3 text-muted-foreground">Rich evaluative vocabulary; counter-arguments</td>
                    </tr>
                    <tr className="bg-muted">
                      <td className="px-4 py-3 font-medium text-foreground">Whole text</td>
                      <td className="px-4 py-3 text-muted-foreground">Limited to the extract</td>
                      <td className="px-4 py-3 text-muted-foreground">Some links to wider text</td>
                      <td className="px-4 py-3 text-muted-foreground">Tracks ideas across the entire text</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Section>

          </div>
        </div>
      </div>

      {/* CTA */}
      <section className="bg-primary px-4 py-12 text-center text-white">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-2xl font-bold sm:text-3xl">Ready to write top-grade analytical responses?</h2>
          <p className="mt-3 text-muted-foreground">
            Practise PEEL paragraphs, embed quotations, and use evaluative language in
            every response you write. The more you practise, the more natural it becomes.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <Link
              href="/resources/writing-skills"
              className="rounded-lg bg-card px-6 py-3 text-sm font-semibold text-foreground shadow-md hover:bg-muted transition-colors"
            >
              All Writing Skills
            </Link>
            <Link
              href="/resources"
              className="rounded-lg border px-6 py-3 text-sm font-semibold text-foreground hover:bg-muted transition-colors"
            >
              Browse Resources
            </Link>
          </div>
        </div>
      </section>

    </>
  );
}
