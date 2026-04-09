import type { Metadata } from "next";
import Link from "next/link";
import { ExamBoardDisclaimer } from "@/components/ExamBoardDisclaimer";

/* ─── Metadata ───────────────────────────────────────────────── */

export const metadata: Metadata = {
  alternates: { canonical: 'https://theenglishhub.app/resources/english-literature/aqa/poetry' },
  title: "AQA Poetry Anthology — Power and Conflict & Love and Relationships",
  description:
    "Full analysis of all 30 poems in the AQA GCSE English Literature poetry anthology. Power and Conflict & Love and Relationships clusters with themes, language analysis, structure, and comparison ideas.",
};

/* ─── Data ───────────────────────────────────────────────────── */

interface PoemEntry {
  title: string;
  poet: string;
  themes: string[];
  slug: string;
}

const POWER_AND_CONFLICT_POEMS: PoemEntry[] = [
  {
    title: "Ozymandias",
    poet: "Percy Bysshe Shelley",
    themes: ["Power of nature", "Hubris", "Transience of power"],
    slug: "ozymandias",
  },
  {
    title: "London",
    poet: "William Blake",
    themes: ["Corruption", "Oppression", "Social inequality"],
    slug: "london",
  },
  {
    title: "Extract from The Prelude",
    poet: "William Wordsworth",
    themes: ["Power of nature", "Fear", "Growing up"],
    slug: "the-prelude",
  },
  {
    title: "My Last Duchess",
    poet: "Robert Browning",
    themes: ["Power and control", "Jealousy", "Objectification"],
    slug: "my-last-duchess",
  },
  {
    title: "The Charge of the Light Brigade",
    poet: "Alfred Lord Tennyson",
    themes: ["Heroism", "Duty", "Futility of war"],
    slug: "the-charge-of-the-light-brigade",
  },
  {
    title: "Exposure",
    poet: "Wilfred Owen",
    themes: ["Suffering", "Nature as enemy", "Futility"],
    slug: "exposure",
  },
  {
    title: "Storm on the Island",
    poet: "Seamus Heaney",
    themes: ["Power of nature", "Fear", "Conflict"],
    slug: "storm-on-the-island",
  },
  {
    title: "Bayonet Charge",
    poet: "Ted Hughes",
    themes: ["Terror of war", "Loss of identity", "Patriotism questioned"],
    slug: "bayonet-charge",
  },
  {
    title: "Remains",
    poet: "Simon Armitage",
    themes: ["Guilt", "PTSD", "Memory"],
    slug: "remains",
  },
  {
    title: "Poppies",
    poet: "Jane Weir",
    themes: ["Loss", "Motherhood", "Grief"],
    slug: "poppies",
  },
  {
    title: "War Photographer",
    poet: "Carol Ann Duffy",
    themes: ["Suffering", "Desensitisation", "Guilt"],
    slug: "war-photographer",
  },
  {
    title: "Tissue",
    poet: "Imtiaz Dharker",
    themes: ["Power of nature", "Fragility", "Identity"],
    slug: "tissue",
  },
  {
    title: "The Emigree",
    poet: "Carol Rumens",
    themes: ["Identity", "Memory", "Conflict"],
    slug: "the-emigree",
  },
  {
    title: "Kamikaze",
    poet: "Beatrice Garland",
    themes: ["Honour", "Family", "Conflict of duty"],
    slug: "kamikaze",
  },
  {
    title: "Checking Out Me History",
    poet: "John Agard",
    themes: ["Identity", "Colonialism", "Anger"],
    slug: "checking-out-me-history",
  },
];

const LOVE_AND_RELATIONSHIPS_POEMS: PoemEntry[] = [
  {
    title: "When We Two Parted",
    poet: "Lord Byron",
    themes: ["Loss", "Betrayal", "Secrecy"],
    slug: "when-we-two-parted",
  },
  {
    title: "Love's Philosophy",
    poet: "Percy Bysshe Shelley",
    themes: ["Desire", "Persuasion", "Nature and love"],
    slug: "loves-philosophy",
  },
  {
    title: "Porphyria's Lover",
    poet: "Robert Browning",
    themes: ["Obsession", "Power", "Madness"],
    slug: "porphyrias-lover",
  },
  {
    title: "Sonnet 29 — 'I think of thee!'",
    poet: "Elizabeth Barrett Browning",
    themes: ["Longing", "Romantic love", "Absence"],
    slug: "sonnet-29",
  },
  {
    title: "Neutral Tones",
    poet: "Thomas Hardy",
    themes: ["Loss of love", "Memory", "Bitterness"],
    slug: "neutral-tones",
  },
  {
    title: "The Farmer's Bride",
    poet: "Charlotte Mew",
    themes: ["Desire", "Isolation", "Gender"],
    slug: "the-farmers-bride",
  },
  {
    title: "Walking Away",
    poet: "Cecil Day-Lewis",
    themes: ["Parental love", "Letting go", "Memory"],
    slug: "walking-away",
  },
  {
    title: "Letters from Yorkshire",
    poet: "Maura Dooley",
    themes: ["Distance", "Connection", "Nature"],
    slug: "letters-from-yorkshire",
  },
  {
    title: "Eden Rock",
    poet: "Charles Causley",
    themes: ["Memory", "Family", "Death"],
    slug: "eden-rock",
  },
  {
    title: "Follower",
    poet: "Seamus Heaney",
    themes: ["Admiration", "Role reversal", "Family"],
    slug: "follower",
  },
  {
    title: "Mother, any distance",
    poet: "Simon Armitage",
    themes: ["Independence", "Parental love", "Growing up"],
    slug: "mother-any-distance",
  },
  {
    title: "Before You Were Mine",
    poet: "Carol Ann Duffy",
    themes: ["Possessiveness", "Memory", "Mother-daughter bond"],
    slug: "before-you-were-mine",
  },
  {
    title: "Winter Swans",
    poet: "Owen Sheers",
    themes: ["Reconciliation", "Nature", "Love"],
    slug: "winter-swans",
  },
  {
    title: "Singh Song!",
    poet: "Daljit Nagra",
    themes: ["Joy", "Cultural identity", "Devotion"],
    slug: "singh-song",
  },
  {
    title: "Climbing My Grandfather",
    poet: "Andrew Waterhouse",
    themes: ["Admiration", "Family", "Memory"],
    slug: "climbing-my-grandfather",
  },
];

/* ─── Page component ─────────────────────────────────────────── */

function PoemRow({
  poem,
  clusterPath,
}: {
  poem: PoemEntry;
  clusterPath: string;
}) {
  return (
    <Link
      href={`${clusterPath}/${poem.slug}`}
      className="group flex flex-col gap-2 rounded-xl border border-border p-5 shadow-md transition hover:border-primary hover:shadow-md sm:flex-row sm:items-center sm:justify-between"
    >
      <div>
        <h3 className="text-lg font-bold text-foreground group-hover:text-primary">
          {poem.title}
        </h3>
        <p className="text-sm text-muted-foreground">{poem.poet}</p>
      </div>
      <div className="flex flex-wrap gap-1.5">
        {poem.themes.map((t) => (
          <span
            key={t}
            className="rounded-full bg-blue-500/10 px-2.5 py-0.5 text-xs font-medium text-foreground"
          >
            {t}
          </span>
        ))}
      </div>
    </Link>
  );
}

export default function AqaPoetryPage() {
  return (
    <>

      {/* ── Hero ──────────────────────────────────────────────── */}
      <section className="bg-gradient-to-br from-primary to-primary px-4 py-16 text-white sm:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <Link
            href="/resources/english-literature/aqa"
            className="text-sm text-white/70 hover:text-white"
          >
            &larr; AQA English Literature
          </Link>
          <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Poetry Anthology — Full Guide
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-lg text-white/90">
            AQA GCSE English Literature &middot; Paper 2, Section B
            <br />
            Power &amp; Conflict and Love &amp; Relationships — All 30 Poems
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-5xl px-4 py-12 sm:py-16">
        {/* ── Quick nav ─────────────────────────────────────────── */}
        <nav className="rounded-xl bg-muted p-6">
          <h2 className="text-lg font-bold text-foreground">On this page</h2>
          <div className="mt-3 grid gap-4 sm:grid-cols-2">
            <div>
              <h3 className="text-sm font-semibold text-foreground">
                Power and Conflict
              </h3>
              <ul className="mt-2 space-y-1 text-sm">
                {POWER_AND_CONFLICT_POEMS.map((p) => (
                  <li key={p.title}>
                    <a
                      href={`#pac-${p.slug}`}
                      className="text-primary hover:underline"
                    >
                      {p.title} — {p.poet}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-foreground">
                Love and Relationships
              </h3>
              <ul className="mt-2 space-y-1 text-sm">
                {LOVE_AND_RELATIONSHIPS_POEMS.map((p) => (
                  <li key={p.title}>
                    <a
                      href={`#lar-${p.slug}`}
                      className="text-primary hover:underline"
                    >
                      {p.title} — {p.poet}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </nav>

        {/* ── Exam overview ─────────────────────────────────────── */}
        <section className="mt-14">
          <h2 className="text-2xl font-bold text-foreground">
            How the AQA Poetry Exam Works
          </h2>
          <div className="mt-4 rounded-xl bg-muted p-6 text-sm text-muted-foreground leading-relaxed space-y-3">
            <p>
              Your school will have studied <strong>one cluster</strong> —
              either Power and Conflict or Love and Relationships. In the exam
              (Paper 2, Section B), one poem from your cluster will be{" "}
              <strong>printed on the paper</strong>, and you must compare it
              with <strong>another poem of your choice</strong> from the same
              cluster (from memory).
            </p>
            <p>
              The question will ask you to compare how the poets present a
              particular theme, idea, or feeling. This section is worth{" "}
              <strong>30 marks</strong> and you should spend approximately{" "}
              <strong>45 minutes</strong> on it (including planning time).
            </p>
            <p>
              AQA&apos;s comparison question typically follows this format:
            </p>
            <div className="mt-2 rounded-lg border border-primary bg-card p-4 italic text-muted-foreground">
              &ldquo;Compare how poets present [theme/idea] in
              &lsquo;[named poem]&rsquo; and in one other poem from your
              anthology.&rdquo;
            </div>
          </div>
        </section>

        {/* ── AO breakdown ────────────────────────────────────── */}
        <section className="mt-14">
          <h2 className="text-2xl font-bold text-foreground">
            Assessment Objectives — What the Examiner Wants
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            <div className="rounded-xl border border-border p-5 shadow-md">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                AO1
              </div>
              <h3 className="mt-3 font-bold text-foreground">
                Response &amp; Comparison (12 marks)
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Read, understand, and respond to texts. Use textual references
                (including quotations) to support and illustrate
                interpretations. Make <strong>critical comparisons</strong>{" "}
                across texts.
              </p>
              <p className="mt-2 text-xs font-medium text-primary">
                Tip: Use comparative connectives throughout. Embed short
                quotations. Every paragraph should discuss both poems.
              </p>
            </div>
            <div className="rounded-xl border border-border p-5 shadow-md">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                AO2
              </div>
              <h3 className="mt-3 font-bold text-foreground">
                Methods &amp; Effects (12 marks)
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Analyse the language, form, and structure used by the writer to
                create meanings and effects. Use relevant subject terminology.
              </p>
              <p className="mt-2 text-xs font-medium text-primary">
                Tip: Don&apos;t just identify techniques — explain the effect on
                the reader. Compare how both poets use different methods to
                achieve similar or contrasting effects.
              </p>
            </div>
            <div className="rounded-xl border border-border p-5 shadow-md">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                AO3
              </div>
              <h3 className="mt-3 font-bold text-foreground">
                Context (6 marks)
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Show understanding of the relationships between texts and the
                contexts in which they were written.
              </p>
              <p className="mt-2 text-xs font-medium text-primary">
                Tip: Weave context into your analysis naturally. Explain how the
                poet&apos;s background or historical period shapes the poem&apos;s
                meaning — don&apos;t bolt on a paragraph of biography.
              </p>
            </div>
          </div>
        </section>

        {/* ── Timing advice ───────────────────────────────────── */}
        <section className="mt-14">
          <h2 className="text-2xl font-bold text-foreground">
            Timing &amp; Exam Strategy
          </h2>
          <div className="mt-4 rounded-xl border-2 border-primary bg-blue-500/10 p-6 text-sm text-muted-foreground leading-relaxed space-y-3">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <h3 className="font-bold text-foreground">
                  Suggested Time Split (45 mins)
                </h3>
                <ul className="mt-2 space-y-1.5">
                  <li className="flex gap-2">
                    <span className="font-semibold text-foreground">5 mins</span>
                    <span>Read the printed poem carefully. Annotate it. Choose your comparison poem.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="font-semibold text-foreground">5 mins</span>
                    <span>Plan your response — identify 3-4 comparison points (themes, methods, context).</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="font-semibold text-foreground">30 mins</span>
                    <span>Write your comparative essay (aim for 3-4 developed paragraphs).</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="font-semibold text-foreground">5 mins</span>
                    <span>Check your spelling, punctuation, and that you have compared throughout.</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-foreground">Key Strategies</h3>
                <ul className="mt-2 space-y-1.5">
                  <li>
                    Prepare <strong>2-3 comparison partners</strong> for every
                    poem so you are never caught off guard.
                  </li>
                  <li>
                    Write about the <strong>named poem in more detail</strong>{" "}
                    — you have it in front of you, so quote precisely.
                  </li>
                  <li>
                    Use a <strong>point-by-point</strong> structure (both poems
                    in every paragraph), not a block structure (all of poem A
                    then all of poem B).
                  </li>
                  <li>
                    Open with a strong thesis that identifies an overarching
                    similarity or difference.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ── Power and Conflict cluster ──────────────────────── */}
        <section className="mt-14">
          <h2 className="text-2xl font-bold text-foreground">
            Power and Conflict — All 15 Poems
          </h2>
          <p className="mt-2 text-muted-foreground">
            15 poems exploring the abuse and loss of power, the reality of
            conflict, the power of nature, and the struggle for identity.
            Click any poem to read the full detailed analysis.
          </p>

          <div className="mt-6 space-y-3">
            {POWER_AND_CONFLICT_POEMS.map((poem) => (
              <div
                key={poem.slug}
                id={`pac-${poem.slug}`}
                className="scroll-mt-20"
              >
                <PoemRow
                  poem={poem}
                  clusterPath="/resources/poetry/power-and-conflict"
                />
              </div>
            ))}
          </div>
        </section>

        {/* ── Love and Relationships cluster ──────────────────── */}
        <section className="mt-14">
          <h2 className="text-2xl font-bold text-foreground">
            Love and Relationships — All 15 Poems
          </h2>
          <p className="mt-2 text-muted-foreground">
            15 poems exploring romantic love, family bonds, desire, memory,
            loss, and the complexities of human relationships across time.
            Click any poem to read the full detailed analysis.
          </p>

          <div className="mt-6 space-y-3">
            {LOVE_AND_RELATIONSHIPS_POEMS.map((poem) => (
              <div
                key={poem.slug}
                id={`lar-${poem.slug}`}
                className="scroll-mt-20"
              >
                <PoemRow
                  poem={poem}
                  clusterPath="/resources/poetry/love-and-relationships"
                />
              </div>
            ))}
          </div>
        </section>

        {/* ── Comparison technique ──────────────────────────────── */}
        <section className="mt-14">
          <h2 className="text-2xl font-bold text-foreground">
            How to Write an AQA Poetry Comparison
          </h2>

          <div className="mt-6 space-y-6">
            <div className="rounded-xl bg-muted p-6">
              <h3 className="text-lg font-bold text-foreground">
                Recommended Paragraph Structure
              </h3>
              <ol className="mt-4 space-y-3 text-sm text-muted-foreground">
                <li className="flex gap-3">
                  <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">
                    1
                  </span>
                  <span>
                    <strong>Introduction</strong> — briefly state how both
                    poems present the named theme. Identify a key overarching
                    similarity or difference to give your essay a clear
                    argument.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">
                    2
                  </span>
                  <span>
                    <strong>Comparative paragraphs (3-4)</strong> — each
                    paragraph should discuss <strong>both poems</strong>.
                    Compare a specific technique, image, or idea. Use
                    comparative connectives throughout.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">
                    3
                  </span>
                  <span>
                    <strong>Analyse methods (AO2)</strong> — don&apos;t just
                    compare what the poems say, but <em>how</em> they say it.
                    Compare language choices, structural techniques, form,
                    tone, and imagery. Name the technique and explain its
                    effect.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">
                    4
                  </span>
                  <span>
                    <strong>Integrate context (AO3)</strong> — weave in
                    relevant context about the poet&apos;s life, the time
                    period, or social attitudes. Explain how context shapes
                    the poem&apos;s meaning rather than bolting on
                    biographical facts.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">
                    5
                  </span>
                  <span>
                    <strong>Brief conclusion</strong> — return to your
                    overarching argument. Which poem is more effective or
                    striking? Or how do they complement each other?
                  </span>
                </li>
              </ol>
            </div>

            <div className="rounded-xl border-2 border-primary bg-blue-500/10 p-6">
              <h3 className="text-lg font-bold text-foreground">
                Useful Comparison Connectives
              </h3>
              <div className="mt-3 grid gap-4 text-sm text-muted-foreground sm:grid-cols-2">
                <div>
                  <h4 className="font-semibold text-foreground">Similarities</h4>
                  <ul className="mt-2 space-y-1">
                    <li>Similarly, [poet] also...</li>
                    <li>Both poets present...</li>
                    <li>Like &lsquo;[poem A]&rsquo;, &lsquo;[poem B]&rsquo; also...</li>
                    <li>In the same way...</li>
                    <li>This idea is echoed in...</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Differences</h4>
                  <ul className="mt-2 space-y-1">
                    <li>In contrast, [poet]...</li>
                    <li>Whereas &lsquo;[poem A]&rsquo;..., &lsquo;[poem B]&rsquo;...</li>
                    <li>However, [poet] takes a different approach...</li>
                    <li>Unlike &lsquo;[poem A]&rsquo;...</li>
                    <li>On the other hand...</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* ── Common comparison pairings ─────────────────── */}
            <div className="rounded-xl bg-muted p-6">
              <h3 className="text-lg font-bold text-foreground">
                Strong Comparison Pairings
              </h3>
              <div className="mt-4 grid gap-6 sm:grid-cols-2">
                <div>
                  <h4 className="text-sm font-semibold text-foreground">
                    Power and Conflict
                  </h4>
                  <ul className="mt-2 space-y-1.5 text-sm text-muted-foreground">
                    <li>
                      <strong>Ozymandias</strong> + <strong>My Last Duchess</strong> — abuse of power, arrogance
                    </li>
                    <li>
                      <strong>Exposure</strong> + <strong>Bayonet Charge</strong> — reality of war, suffering
                    </li>
                    <li>
                      <strong>Remains</strong> + <strong>War Photographer</strong> — guilt, lasting trauma
                    </li>
                    <li>
                      <strong>Storm on the Island</strong> + <strong>Extract from The Prelude</strong> — power of nature, fear
                    </li>
                    <li>
                      <strong>Poppies</strong> + <strong>Kamikaze</strong> — family and war, personal cost
                    </li>
                    <li>
                      <strong>London</strong> + <strong>Checking Out Me History</strong> — anger at authority, oppression
                    </li>
                    <li>
                      <strong>Tissue</strong> + <strong>Ozymandias</strong> — fragility of power, impermanence
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-foreground">
                    Love and Relationships
                  </h4>
                  <ul className="mt-2 space-y-1.5 text-sm text-muted-foreground">
                    <li>
                      <strong>When We Two Parted</strong> + <strong>Neutral Tones</strong> — end of love, bitterness
                    </li>
                    <li>
                      <strong>Love&apos;s Philosophy</strong> + <strong>Sonnet 29</strong> — desire and longing
                    </li>
                    <li>
                      <strong>Porphyria&apos;s Lover</strong> + <strong>The Farmer&apos;s Bride</strong> — obsession, power imbalance
                    </li>
                    <li>
                      <strong>Walking Away</strong> + <strong>Follower</strong> — parent-child bonds, letting go
                    </li>
                    <li>
                      <strong>Mother, any distance</strong> + <strong>Walking Away</strong> — growing independence
                    </li>
                    <li>
                      <strong>Eden Rock</strong> + <strong>Follower</strong> — memory, family bonds
                    </li>
                    <li>
                      <strong>Singh Song!</strong> + <strong>Love&apos;s Philosophy</strong> — joyful desire, devotion
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <ExamBoardDisclaimer variant="content" className="mx-auto max-w-5xl px-4 py-8" />
    </>
  );
}
