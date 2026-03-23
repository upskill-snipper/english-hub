import type { Metadata } from "next";
import Link from "next/link";
import { ExamBoardDisclaimer } from "@/components/ExamBoardDisclaimer";

/* ─── Metadata ───────────────────────────────────────────────── */

export const metadata: Metadata = {
  title: "OCR Poetry Anthology Analysis | The English Hub",
  description:
    "Detailed analysis of poems from the OCR GCSE English Literature poetry anthology. Themes, techniques, comparison strategies, and key quotations.",
};

/* ─── Page component ─────────────────────────────────────────── */

export default function OCRPoetryPage() {
  return (
    <>

      {/* ── Hero ──────────────────────────────────────────────── */}
      <section className="bg-gradient-to-br from-primary to-primary-600 px-4 py-16 text-white sm:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <Link
            href="/resources/english-literature/ocr"
            className="inline-flex items-center gap-1 text-sm text-white/70 transition hover:text-white"
          >
            &larr; OCR English Literature
          </Link>
          <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Poetry Anthology Analysis
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-lg text-white/90">
            Master the OCR poetry anthology. Detailed analysis, comparison
            strategies, and exam techniques for Paper 2, Section B.
          </p>
        </div>
      </section>

      {/* ── Main content ──────────────────────────────────────── */}
      <div className="mx-auto max-w-4xl px-4 py-12 sm:py-16 lg:py-20">
        {/* Overview */}
        <section aria-labelledby="overview-heading">
          <h2
            id="overview-heading"
            className="text-2xl font-bold text-gray-900"
          >
            The OCR Poetry Anthology
          </h2>
          <div className="mt-4 space-y-4 text-gray-700 leading-relaxed">
            <p>
              The OCR GCSE English Literature poetry anthology is organised
              into thematic clusters. Your school will study one cluster. In
              the exam, you will be given <strong>one poem</strong> from your
              cluster (printed on the paper) and asked to compare it with
              <strong> another poem of your choice</strong> from the same
              cluster.
            </p>
            <p>
              The anthology clusters cover themes such as:
            </p>
            <ul className="ml-6 list-disc space-y-1">
              <li><strong>Love and Relationships</strong></li>
              <li><strong>Conflict</strong></li>
              <li><strong>Youth and Age</strong></li>
            </ul>
            <p>
              Regardless of which cluster you study, the analytical skills
              and comparison techniques are the same. This guide covers
              everything you need.
            </p>
          </div>
        </section>

        <hr className="my-10 border-gray-200" />

        {/* How to analyse a poem */}
        <section aria-labelledby="analysis-heading">
          <h2
            id="analysis-heading"
            className="text-2xl font-bold text-gray-900"
          >
            How to Analyse a Poem
          </h2>
          <div className="mt-4 space-y-6 text-gray-700 leading-relaxed">
            <p>
              When approaching any poem from the anthology, work through
              these layers of analysis:
            </p>

            {/* Layer 1: Meaning */}
            <div className="rounded-lg border border-gray-200 bg-gray-50 p-5">
              <h3 className="font-semibold text-gray-900">
                1. Subject and Meaning
              </h3>
              <p className="mt-2 text-sm">
                What is the poem about on the surface? What deeper themes or
                ideas does it explore? Is there a narrative, or is it more
                reflective? What is the poet&rsquo;s message or attitude
                towards the subject?
              </p>
              <p className="mt-2 text-sm">
                <strong>Questions to ask:</strong> What is the situation in the
                poem? Who is speaking? To whom? What is their attitude? Does
                the meaning change by the end?
              </p>
            </div>

            {/* Layer 2: Voice and Tone */}
            <div className="rounded-lg border border-gray-200 bg-gray-50 p-5">
              <h3 className="font-semibold text-gray-900">
                2. Voice and Tone
              </h3>
              <p className="mt-2 text-sm">
                Who is the speaker (persona)? Is it the poet themselves, or a
                fictional character? What is the tone &mdash; bitter, nostalgic,
                angry, celebratory, mournful, ironic, defiant? Does the tone
                shift during the poem? If so, where and why?
              </p>
              <p className="mt-2 text-sm">
                <strong>Key vocabulary for tone:</strong> wistful, sardonic,
                melancholic, reverent, indignant, resigned, contemplative,
                anguished, jubilant, detached, intimate, confrontational.
              </p>
            </div>

            {/* Layer 3: Language */}
            <div className="rounded-lg border border-gray-200 bg-gray-50 p-5">
              <h3 className="font-semibold text-gray-900">
                3. Language and Imagery
              </h3>
              <p className="mt-2 text-sm">
                This is where you earn most of your marks. Identify specific
                language techniques and analyse their effects:
              </p>
              <ul className="ml-4 mt-2 list-disc space-y-1 text-sm">
                <li>
                  <strong>Imagery</strong> &mdash; What pictures does the
                  poet create? Are there recurring images (motifs)? What do
                  they symbolise?
                </li>
                <li>
                  <strong>Figurative language</strong> &mdash; Similes,
                  metaphors, personification, symbolism. What is being
                  compared to what? What does this reveal?
                </li>
                <li>
                  <strong>Word choice (diction)</strong> &mdash; Zoom into
                  individual words. What are their connotations? Why has the
                  poet chosen this word over an alternative?
                </li>
                <li>
                  <strong>Semantic fields</strong> &mdash; Are there groups
                  of related words? What atmosphere or theme do they
                  reinforce?
                </li>
                <li>
                  <strong>Sound devices</strong> &mdash; Alliteration,
                  sibilance, assonance, onomatopoeia. What auditory effect
                  do they create?
                </li>
                <li>
                  <strong>Sensory language</strong> &mdash; Appeals to sight,
                  sound, touch, taste, and smell.
                </li>
              </ul>
            </div>

            {/* Layer 4: Form and Structure */}
            <div className="rounded-lg border border-gray-200 bg-gray-50 p-5">
              <h3 className="font-semibold text-gray-900">
                4. Form and Structure
              </h3>
              <p className="mt-2 text-sm">
                Form and structure are often overlooked, but they are essential
                for top-band answers:
              </p>
              <ul className="ml-4 mt-2 list-disc space-y-1 text-sm">
                <li>
                  <strong>Form</strong> &mdash; Is it a sonnet, ballad, free
                  verse, dramatic monologue, or another form? Why has the
                  poet chosen this form? How does the form relate to the
                  content?
                </li>
                <li>
                  <strong>Stanza structure</strong> &mdash; How many stanzas?
                  Are they regular or irregular? What does the structure
                  suggest?
                </li>
                <li>
                  <strong>Rhyme scheme</strong> &mdash; Is there a regular
                  rhyme scheme? Half-rhyme? No rhyme? What effect does this
                  create?
                </li>
                <li>
                  <strong>Metre and rhythm</strong> &mdash; Is there a
                  regular beat? Where does it break? What effect does this
                  have?
                </li>
                <li>
                  <strong>Enjambment</strong> &mdash; Lines that run on
                  without a pause. Creates flow, urgency, or a sense of
                  something uncontainable.
                </li>
                <li>
                  <strong>Caesura</strong> &mdash; A pause in the middle of
                  a line. Creates a dramatic break, shift, or moment of
                  reflection.
                </li>
                <li>
                  <strong>Volta</strong> &mdash; A turn or shift in the
                  poem&rsquo;s argument, mood, or direction. Common in
                  sonnets.
                </li>
                <li>
                  <strong>Opening and ending</strong> &mdash; How does the
                  poem begin and end? Is there a circular structure? A
                  dramatic shift? A resolution or lack of one?
                </li>
              </ul>
            </div>

            {/* Layer 5: Context */}
            <div className="rounded-lg border border-gray-200 bg-gray-50 p-5">
              <h3 className="font-semibold text-gray-900">
                5. Context
              </h3>
              <p className="mt-2 text-sm">
                Context should be embedded in your analysis, not presented
                as a separate paragraph. Consider:
              </p>
              <ul className="ml-4 mt-2 list-disc space-y-1 text-sm">
                <li>When was the poem written? What was happening historically?</li>
                <li>What was the poet&rsquo;s background and experiences?</li>
                <li>What literary movement or tradition does the poem belong to?</li>
                <li>How might the original audience have responded?</li>
                <li>How might a modern reader respond differently?</li>
              </ul>
            </div>
          </div>
        </section>

        <hr className="my-10 border-gray-200" />

        {/* Comparison strategies */}
        <section aria-labelledby="comparison-heading">
          <h2
            id="comparison-heading"
            className="text-2xl font-bold text-gray-900"
          >
            Comparison Strategies
          </h2>
          <div className="mt-4 space-y-6 text-gray-700 leading-relaxed">
            <p>
              The OCR poetry comparison question is worth 24 marks. You must
              compare the printed poem with one of your choice from the same
              cluster. Here is how to approach it:
            </p>

            {/* Choosing the comparison */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900">
                Choosing Your Comparison Poem
              </h3>
              <p className="mt-2">
                When you see the printed poem and the question, quickly
                decide which poem from your cluster offers the best
                comparison. Consider:
              </p>
              <ul className="ml-6 mt-2 list-disc space-y-2">
                <li>
                  Which poem explores a <strong>similar theme</strong> but
                  through <strong>different methods</strong>? This gives you
                  the richest comparison material.
                </li>
                <li>
                  Which poem can you remember the most quotations from? You
                  need to quote from memory for your chosen poem.
                </li>
                <li>
                  Which poem allows you to discuss <strong>both
                  similarities and differences</strong>? A nuanced comparison
                  is always better than one that only discusses similarities.
                </li>
              </ul>
            </div>

            {/* What to compare */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900">
                What to Compare
              </h3>
              <p className="mt-2">
                Compare across multiple layers &mdash; not just theme:
              </p>
              <div className="mt-3 grid gap-3 sm:grid-cols-2">
                <div className="rounded-lg border border-primary/20 bg-primary-50 p-4">
                  <p className="font-semibold text-primary">Themes and Ideas</p>
                  <p className="mt-1 text-sm text-gray-700">
                    How do both poets explore the same theme? Do they agree or
                    disagree? Do they focus on different aspects?
                  </p>
                </div>
                <div className="rounded-lg border border-primary/20 bg-primary-50 p-4">
                  <p className="font-semibold text-primary">Language and Imagery</p>
                  <p className="mt-1 text-sm text-gray-700">
                    What types of imagery do the poets use? Are there
                    contrasting semantic fields? Different tones?
                  </p>
                </div>
                <div className="rounded-lg border border-primary/20 bg-primary-50 p-4">
                  <p className="font-semibold text-primary">Form and Structure</p>
                  <p className="mt-1 text-sm text-gray-700">
                    How do the poets structure their poems? Regular vs
                    irregular form? Different use of enjambment, stanzas, or
                    line length?
                  </p>
                </div>
                <div className="rounded-lg border border-primary/20 bg-primary-50 p-4">
                  <p className="font-semibold text-primary">Voice and Perspective</p>
                  <p className="mt-1 text-sm text-gray-700">
                    Who is speaking in each poem? First person vs third
                    person? Personal vs universal? How does perspective shape
                    meaning?
                  </p>
                </div>
                <div className="rounded-lg border border-primary/20 bg-primary-50 p-4">
                  <p className="font-semibold text-primary">Tone and Mood</p>
                  <p className="mt-1 text-sm text-gray-700">
                    What is the emotional atmosphere of each poem? Where do
                    the tones differ? How does tone relate to meaning?
                  </p>
                </div>
                <div className="rounded-lg border border-primary/20 bg-primary-50 p-4">
                  <p className="font-semibold text-primary">Context</p>
                  <p className="mt-1 text-sm text-gray-700">
                    How does the historical or personal context of each poet
                    shape their treatment of the theme?
                  </p>
                </div>
              </div>
            </div>

            {/* Comparative language */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900">
                Comparative Language to Use
              </h3>
              <p className="mt-2">
                Use these phrases to integrate comparison throughout your
                response:
              </p>
              <div className="mt-3 grid gap-3 sm:grid-cols-2">
                <div className="rounded border border-gray-200 bg-gray-50 p-3">
                  <p className="text-xs font-semibold uppercase text-gray-500">Similarity</p>
                  <ul className="mt-1 space-y-1 text-sm">
                    <li>&ldquo;Similarly, [poet] also&hellip;&rdquo;</li>
                    <li>&ldquo;Both poets present&hellip;&rdquo;</li>
                    <li>&ldquo;In a comparable way&hellip;&rdquo;</li>
                    <li>&ldquo;Like [poet], [poet] also uses&hellip;&rdquo;</li>
                    <li>&ldquo;This mirrors the way [poet]&hellip;&rdquo;</li>
                  </ul>
                </div>
                <div className="rounded border border-gray-200 bg-gray-50 p-3">
                  <p className="text-xs font-semibold uppercase text-gray-500">Difference</p>
                  <ul className="mt-1 space-y-1 text-sm">
                    <li>&ldquo;In contrast, [poet]&hellip;&rdquo;</li>
                    <li>&ldquo;Whereas [poet] presents&hellip;, [poet]&hellip;&rdquo;</li>
                    <li>&ldquo;Unlike [poet], who&hellip;&rdquo;</li>
                    <li>&ldquo;However, [poet] takes a different approach&hellip;&rdquo;</li>
                    <li>&ldquo;On the other hand&hellip;&rdquo;</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <hr className="my-10 border-gray-200" />

        {/* Thematic links */}
        <section aria-labelledby="themes-heading">
          <h2
            id="themes-heading"
            className="text-2xl font-bold text-gray-900"
          >
            Common Themes Across the Anthology
          </h2>
          <div className="mt-4 space-y-4 text-gray-700 leading-relaxed">
            <p>
              Regardless of which cluster you study, these broad themes
              frequently appear. Mapping poems to themes helps you prepare
              comparison pairs in advance:
            </p>

            <div className="space-y-4">
              <div className="rounded-lg border border-gray-200 bg-gray-50 p-5">
                <h3 className="text-lg font-semibold text-gray-900">Power and Powerlessness</h3>
                <p className="mt-2 text-sm">
                  Who holds power in the poem? Is it political, personal,
                  natural, or emotional power? How is powerlessness conveyed?
                  Is power gained, lost, abused, or resisted? Consider how
                  the poet uses form and structure to mirror or subvert power
                  dynamics.
                </p>
              </div>

              <div className="rounded-lg border border-gray-200 bg-gray-50 p-5">
                <h3 className="text-lg font-semibold text-gray-900">Loss and Memory</h3>
                <p className="mt-2 text-sm">
                  Many poems explore the pain of loss &mdash; of a person, a
                  place, innocence, or identity. How does the poet use memory
                  as a way of coping with loss? Is the tone nostalgic,
                  bitter, accepting, or angry? Consider how time is
                  represented: linear, fragmented, circular?
                </p>
              </div>

              <div className="rounded-lg border border-gray-200 bg-gray-50 p-5">
                <h3 className="text-lg font-semibold text-gray-900">Identity and Belonging</h3>
                <p className="mt-2 text-sm">
                  How does the speaker define themselves? Is their identity
                  stable or in crisis? Do they feel they belong, or are they
                  an outsider? Consider the role of culture, family, place,
                  and language in shaping identity.
                </p>
              </div>

              <div className="rounded-lg border border-gray-200 bg-gray-50 p-5">
                <h3 className="text-lg font-semibold text-gray-900">Nature and the Environment</h3>
                <p className="mt-2 text-sm">
                  Is nature presented as beautiful, destructive, indifferent,
                  or spiritual? Is it used literally or symbolically? How
                  does the poet contrast the natural world with the human
                  world? Consider pathetic fallacy and how landscape reflects
                  inner emotion.
                </p>
              </div>

              <div className="rounded-lg border border-gray-200 bg-gray-50 p-5">
                <h3 className="text-lg font-semibold text-gray-900">Conflict and Violence</h3>
                <p className="mt-2 text-sm">
                  Is the conflict physical (war, violence) or emotional
                  (internal struggle, relationship conflict)? How does the
                  poet present the consequences of conflict? Is there a
                  resolution, or does the conflict remain unresolved? Consider
                  the perspectives of perpetrators, victims, and witnesses.
                </p>
              </div>

              <div className="rounded-lg border border-gray-200 bg-gray-50 p-5">
                <h3 className="text-lg font-semibold text-gray-900">Time and Change</h3>
                <p className="mt-2 text-sm">
                  How does the poet represent the passage of time? Is time
                  comforting or threatening? Does the poem look back at the
                  past, contemplate the present, or anticipate the future?
                  Consider how the poem&rsquo;s structure mirrors its
                  treatment of time.
                </p>
              </div>
            </div>
          </div>
        </section>

        <hr className="my-10 border-gray-200" />

        {/* Analytical frameworks */}
        <section aria-labelledby="frameworks-heading">
          <h2
            id="frameworks-heading"
            className="text-2xl font-bold text-gray-900"
          >
            Analytical Paragraph Framework
          </h2>
          <div className="mt-4 space-y-4 text-gray-700 leading-relaxed">
            <p>
              Each paragraph in your comparison essay should follow this
              structure:
            </p>
            <div className="mt-3 space-y-3">
              <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
                <p className="font-semibold text-primary">1. Comparative topic sentence</p>
                <p className="mt-1 text-sm text-gray-700">
                  State the point of comparison: &ldquo;Both poets present
                  conflict as destructive, but through contrasting methods.&rdquo;
                </p>
              </div>
              <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
                <p className="font-semibold text-primary">2. Analyse the printed poem</p>
                <p className="mt-1 text-sm text-gray-700">
                  Quote directly from the poem on the paper. Analyse specific
                  word choices, techniques, and their effects.
                </p>
              </div>
              <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
                <p className="font-semibold text-primary">3. Compare with your chosen poem</p>
                <p className="mt-1 text-sm text-gray-700">
                  Use a comparative connective. Quote from memory (even short
                  phrases). Analyse the language and explain the comparison.
                </p>
              </div>
              <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
                <p className="font-semibold text-primary">4. Evaluate the effect</p>
                <p className="mt-1 text-sm text-gray-700">
                  What does this comparison reveal? Which approach is more
                  effective and why? Consider the reader&rsquo;s response.
                </p>
              </div>
            </div>

            {/* Model paragraph */}
            <h3 className="mt-8 text-xl font-semibold text-gray-900">
              Model Comparison Paragraph
            </h3>
            <div className="mt-3 rounded-lg border border-gray-200 bg-white p-5 shadow-sm">
              <p className="text-sm italic text-gray-700">
                &ldquo;Both poets explore the theme of lost love, yet their
                tones are markedly different. In [Poem A], the poet uses the
                metaphor of &lsquo;embers dying in the grate&rsquo; to
                suggest that love has not vanished entirely but has faded to
                a faint, weakening warmth. The verb &lsquo;dying&rsquo;
                implies a gradual, painful process, suggesting that the
                speaker cannot bring themselves to accept the relationship is
                over. In contrast, [Poem B] presents lost love through the
                stark image of a &lsquo;slammed door,&rsquo; using the
                forceful, plosive verb &lsquo;slammed&rsquo; to convey anger
                and finality. Where [Poem A] lingers in melancholy, [Poem B]
                embraces fury. This contrast suggests that loss is experienced
                differently by different individuals &mdash; some retreat into
                sadness, while others channel their pain into defiance.&rdquo;
              </p>
            </div>
          </div>
        </section>

        <hr className="my-10 border-gray-200" />

        {/* Revision strategies */}
        <section aria-labelledby="revision-heading">
          <h2
            id="revision-heading"
            className="text-2xl font-bold text-gray-900"
          >
            Revision Strategies for Poetry
          </h2>
          <div className="mt-4 space-y-4 text-gray-700 leading-relaxed">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-lg border border-gray-200 bg-gray-50 p-5">
                <h3 className="font-semibold text-gray-900">Create Comparison Grids</h3>
                <p className="mt-2 text-sm">
                  Make a grid with themes along the top and poems down the
                  side. Tick which poems relate to which themes. This helps
                  you see at a glance which poems pair well together.
                </p>
              </div>
              <div className="rounded-lg border border-gray-200 bg-gray-50 p-5">
                <h3 className="font-semibold text-gray-900">Memorise Key Quotations</h3>
                <p className="mt-2 text-sm">
                  For each poem, learn 3&ndash;5 short quotations (2&ndash;4
                  words each). Short quotations are easier to remember and
                  embed in your analysis. Write them on flashcards and test
                  yourself daily.
                </p>
              </div>
              <div className="rounded-lg border border-gray-200 bg-gray-50 p-5">
                <h3 className="font-semibold text-gray-900">Practise Timed Comparisons</h3>
                <p className="mt-2 text-sm">
                  Give yourself 40 minutes (the exam allocation) to write a
                  comparison. Practise with different poem pairings and
                  different themes. The more you practise, the faster and
                  more confident you become.
                </p>
              </div>
              <div className="rounded-lg border border-gray-200 bg-gray-50 p-5">
                <h3 className="font-semibold text-gray-900">Annotate Every Poem</h3>
                <p className="mt-2 text-sm">
                  Create detailed annotations for every poem in your cluster.
                  Note key techniques, word-level analysis, structural
                  features, and contextual links. These annotations are your
                  revision notes.
                </p>
              </div>
              <div className="rounded-lg border border-gray-200 bg-gray-50 p-5">
                <h3 className="font-semibold text-gray-900">Know the Poems Inside Out</h3>
                <p className="mt-2 text-sm">
                  You need to write about your chosen poem from memory. Read
                  each poem so many times that you can summarise its content,
                  structure, and key techniques without looking at the text.
                </p>
              </div>
              <div className="rounded-lg border border-gray-200 bg-gray-50 p-5">
                <h3 className="font-semibold text-gray-900">Prepare Flexible Pairings</h3>
                <p className="mt-2 text-sm">
                  Prepare comparison notes for multiple pairings. Any poem
                  could appear in the exam, so you need to be able to compare
                  any poem with at least 2&ndash;3 others on different themes.
                </p>
              </div>
            </div>
          </div>
        </section>

        <hr className="my-10 border-gray-200" />

        {/* Common mistakes */}
        <section aria-labelledby="mistakes-heading">
          <h2
            id="mistakes-heading"
            className="text-2xl font-bold text-gray-900"
          >
            Common Mistakes to Avoid
          </h2>
          <div className="mt-4">
            <ul className="ml-6 list-disc space-y-3 text-gray-700 leading-relaxed">
              <li>
                <strong>Writing about each poem separately</strong> &mdash;
                This is the most common mistake. You must compare
                throughout, not write about Poem A then Poem B.
              </li>
              <li>
                <strong>Only comparing themes</strong> &mdash; Saying &ldquo;both
                poems are about love&rdquo; is not enough. You must compare
                <em> methods</em>: how the poets use language, form, and
                structure to explore the theme.
              </li>
              <li>
                <strong>Forgetting to analyse the printed poem</strong>{" "}
                &mdash; The printed poem is right in front of you. Use it.
                Quote directly and analyse word-level choices.
              </li>
              <li>
                <strong>Not knowing quotations from memory</strong> &mdash;
                Your chosen poem is not printed. If you can&rsquo;t quote
                from it, your analysis will be thin and unsubstantiated.
              </li>
              <li>
                <strong>Ignoring form and structure</strong> &mdash; Many
                students focus only on language. Analysing form, stanza
                structure, rhyme, enjambment, and caesura demonstrates
                sophisticated understanding.
              </li>
              <li>
                <strong>Context as an afterthought</strong> &mdash; Do not
                bolt context onto the end of a paragraph. Embed it naturally
                within your analysis of the poet&rsquo;s choices and their
                effects.
              </li>
              <li>
                <strong>Superficial analysis</strong> &mdash; Don&rsquo;t
                just name a technique. Zoom into individual words, explore
                their connotations, and explain precisely what effect they
                create for the reader.
              </li>
            </ul>
          </div>
        </section>

        <ExamBoardDisclaimer variant="content" className="mt-12" />
      </div>

    </>
  );
}
