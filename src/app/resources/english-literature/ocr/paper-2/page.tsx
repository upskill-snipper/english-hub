import type { Metadata } from "next";
import Link from "next/link";
import { ExamBoardDisclaimer } from "@/components/ExamBoardDisclaimer";

/* ─── Metadata ───────────────────────────────────────────────── */

export const metadata: Metadata = {
  alternates: { canonical: 'https://theenglishhub.app/resources/english-literature/ocr/paper-2' },
  title:
    "OCR Paper 2: Exploring Poetry and Shakespeare | The English Hub",
  description:
    "Complete guide to OCR GCSE English Literature Component 02. Shakespeare play, poetry anthology comparison, and unseen poetry revision.",
};

/* ─── Page component ─────────────────────────────────────────── */

export default function OCRLitPaper2Page() {
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
            Paper 2: Exploring Poetry and Shakespeare
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-lg text-white/90">
            Component 02 &middot; 2 hours &middot; 80 marks &middot; 50% of
            GCSE
          </p>
        </div>
      </section>

      {/* ── Main content ──────────────────────────────────────── */}
      <div className="mx-auto max-w-4xl px-4 py-12 sm:py-16 lg:py-20">
        {/* Paper structure */}
        <section aria-labelledby="structure-heading">
          <h2
            id="structure-heading"
            className="text-2xl font-bold text-foreground"
          >
            Paper Structure
          </h2>
          <div className="mt-4 space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Paper 2 covers Shakespeare and poetry. It is split into three
              sections:
            </p>
            <div className="overflow-x-auto">
              <table className="mt-2 w-full border-collapse text-sm">
                <thead>
                  <tr className="border-b-2 border-primary/20 text-left">
                    <th className="py-3 pr-4 font-semibold text-foreground">Section</th>
                    <th className="py-3 pr-4 font-semibold text-foreground">Focus</th>
                    <th className="py-3 pr-4 font-semibold text-foreground">Marks</th>
                    <th className="py-3 font-semibold text-foreground">Time Guide</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr>
                    <td className="py-3 pr-4 font-medium">A</td>
                    <td className="py-3 pr-4">Shakespeare (extract-based + essay)</td>
                    <td className="py-3 pr-4">40 marks</td>
                    <td className="py-3">50 minutes</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 font-medium">B</td>
                    <td className="py-3 pr-4">Poetry anthology (comparison)</td>
                    <td className="py-3 pr-4">24 marks</td>
                    <td className="py-3">40 minutes</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 font-medium">C</td>
                    <td className="py-3 pr-4">Unseen poetry</td>
                    <td className="py-3 pr-4">16 marks</td>
                    <td className="py-3">30 minutes</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="rounded border border-accent/20 bg-accent-50 p-4">
              <p className="text-sm font-medium text-accent-700">Key information</p>
              <p className="mt-1 text-sm text-accent-800">
                Section A (Shakespeare) is a <strong>closed-book</strong>{" "}
                exam, but you will be given a short extract to respond to.
                Section B provides a printed poem from the anthology.
                Section C provides the unseen poem(s).
              </p>
            </div>
          </div>
        </section>

        <hr className="my-10 border-border" />

        {/* ── Section A: Shakespeare ─────────────────────────── */}
        <section aria-labelledby="shakespeare-heading">
          <h2
            id="shakespeare-heading"
            className="text-2xl font-bold text-foreground"
          >
            Section A: Shakespeare
          </h2>

          <div className="mt-6 space-y-6 text-muted-foreground leading-relaxed">
            <div>
              <h3 className="text-xl font-semibold text-foreground">
                Set Plays
              </h3>
              <p className="mt-2">
                OCR offers a choice of Shakespeare plays. Common choices
                include:
              </p>
              <ul className="ml-6 mt-2 list-disc space-y-1">
                <li><em>Macbeth</em></li>
                <li><em>Romeo and Juliet</em></li>
                <li><em>The Merchant of Venice</em></li>
                <li><em>Much Ado About Nothing</em></li>
                <li><em>A Midsummer Night&rsquo;s Dream</em></li>
                <li><em>The Tempest</em></li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-foreground">
                Question Format
              </h3>
              <p className="mt-2">
                You will be given a short <strong>extract</strong> from your
                studied Shakespeare play. The question will ask you to analyse
                the extract and then explore the same theme or idea across the
                wider play.
              </p>
              <p className="mt-3">
                This means your response must do two things:
              </p>
              <ol className="ml-6 mt-2 list-decimal space-y-2">
                <li>
                  <strong>Analyse the extract in detail</strong> &mdash; close
                  language analysis of Shakespeare&rsquo;s words, imagery, and
                  dramatic techniques in the given passage.
                </li>
                <li>
                  <strong>Explore the wider play</strong> &mdash; discuss how
                  the same theme/character is presented elsewhere in the play,
                  showing knowledge of the whole text.
                </li>
              </ol>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-foreground">
                Analysing Shakespeare&rsquo;s Language
              </h3>
              <p className="mt-2">
                Shakespeare&rsquo;s language is rich and densely packed with
                meaning. Here are key features to look for:
              </p>

              <div className="mt-4 space-y-4">
                <div className="rounded-lg border border-border bg-muted p-5">
                  <h4 className="font-semibold text-foreground">Imagery</h4>
                  <p className="mt-2 text-sm">
                    Shakespeare uses vivid imagery — metaphors, similes, and
                    personification — to convey complex ideas. In
                    <em> Macbeth</em>, for example, blood imagery recurs
                    throughout the play, symbolising guilt, violence, and the
                    irreversibility of Macbeth&rsquo;s actions. Look for
                    patterns of imagery (semantic fields) across the extract
                    and the wider play.
                  </p>
                </div>

                <div className="rounded-lg border border-border bg-muted p-5">
                  <h4 className="font-semibold text-foreground">Verse and Prose</h4>
                  <p className="mt-2 text-sm">
                    Shakespeare deliberately switches between verse (poetry)
                    and prose (ordinary speech). Verse is typically used by
                    noble characters or in moments of heightened emotion.
                    Prose is often used by lower-status characters, for comic
                    scenes, or to indicate a character&rsquo;s disturbed mental
                    state (e.g., Lady Macbeth&rsquo;s sleepwalking scene).
                  </p>
                </div>

                <div className="rounded-lg border border-border bg-muted p-5">
                  <h4 className="font-semibold text-foreground">Iambic Pentameter</h4>
                  <p className="mt-2 text-sm">
                    Shakespeare&rsquo;s verse typically follows iambic
                    pentameter &mdash; ten syllables per line with alternating
                    unstressed and stressed syllables (da-DUM da-DUM da-DUM
                    da-DUM da-DUM). When this rhythm is broken, it often
                    signals emotional disturbance, conflict, or a shift in
                    power.
                  </p>
                </div>

                <div className="rounded-lg border border-border bg-muted p-5">
                  <h4 className="font-semibold text-foreground">Soliloquies and Asides</h4>
                  <p className="mt-2 text-sm">
                    A <strong>soliloquy</strong> is a speech delivered alone on
                    stage, revealing a character&rsquo;s inner thoughts. An
                    <strong> aside</strong> is a brief remark directed at the
                    audience that other characters cannot hear. Both create
                    dramatic irony and offer insight into a character&rsquo;s
                    true feelings.
                  </p>
                </div>

                <div className="rounded-lg border border-border bg-muted p-5">
                  <h4 className="font-semibold text-foreground">Dramatic Irony</h4>
                  <p className="mt-2 text-sm">
                    When the audience knows something that characters on stage
                    do not. This creates tension, suspense, and engagement.
                    Shakespeare uses dramatic irony extensively &mdash; for
                    example, in <em>Macbeth</em>, Duncan&rsquo;s praise of
                    Macbeth&rsquo;s castle is deeply ironic because the
                    audience knows Macbeth plans to murder him there.
                  </p>
                </div>
              </div>
            </div>

            {/* AO4 reminder */}
            <div className="rounded border border-accent/20 bg-accent-50 p-4">
              <p className="text-sm font-medium text-accent-700">
                AO4 is assessed in this section
              </p>
              <p className="mt-1 text-sm text-accent-800">
                Section A is the only part of the English Literature exam where
                your spelling, punctuation, and grammar (SPaG) are formally
                assessed. Write clearly, accurately, and with varied vocabulary
                and sentence structures.
              </p>
            </div>
          </div>
        </section>

        <hr className="my-10 border-border" />

        {/* ── Section B: Poetry anthology ────────────────────── */}
        <section aria-labelledby="anthology-heading">
          <h2
            id="anthology-heading"
            className="text-2xl font-bold text-foreground"
          >
            Section B: Poetry Anthology (Comparison)
          </h2>

          <div className="mt-6 space-y-6 text-muted-foreground leading-relaxed">
            <div>
              <h3 className="text-xl font-semibold text-foreground">
                What You Need to Do
              </h3>
              <p className="mt-2">
                You will be given <strong>one poem</strong> from the OCR
                poetry anthology, printed on the exam paper. You must compare
                this poem with <strong>another poem of your choice</strong>{" "}
                from the same anthology cluster. The question will focus on a
                theme, such as conflict, identity, belonging, or relationships.
              </p>
              <p className="mt-3">
                This means you must know all the poems in your cluster well
                enough to choose the best comparison and write about it from
                memory.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-foreground">
                How to Compare Poems Effectively
              </h3>

              <div className="mt-4 space-y-4">
                <div className="rounded-lg border border-border bg-muted p-5">
                  <h4 className="font-semibold text-foreground">
                    1. Choose Your Comparison Poem Wisely
                  </h4>
                  <p className="mt-2 text-sm">
                    Pick a poem that offers rich comparison possibilities
                    &mdash; ideally one with both similarities and differences
                    in theme, methods, or perspective. A nuanced comparison is
                    more rewarding than two poems that say the same thing.
                  </p>
                </div>

                <div className="rounded-lg border border-border bg-muted p-5">
                  <h4 className="font-semibold text-foreground">
                    2. Integrate Comparison Throughout
                  </h4>
                  <p className="mt-2 text-sm">
                    Do not write about one poem and then the other. Compare
                    throughout your response. Every paragraph should discuss
                    both poems. Use comparative language: &ldquo;Similarly&rdquo;,
                    &ldquo;In contrast&rdquo;, &ldquo;Whereas&rdquo;,
                    &ldquo;Both poets&rdquo;, &ldquo;Unlike&rdquo;.
                  </p>
                </div>

                <div className="rounded-lg border border-border bg-muted p-5">
                  <h4 className="font-semibold text-foreground">
                    3. Compare Methods, Not Just Themes
                  </h4>
                  <p className="mt-2 text-sm">
                    It is not enough to say &ldquo;Both poems are about
                    conflict.&rdquo; You must compare <em>how</em> the poets
                    present conflict: their use of imagery, form, structure,
                    tone, and perspective. This is where the marks lie.
                  </p>
                </div>

                <div className="rounded-lg border border-border bg-muted p-5">
                  <h4 className="font-semibold text-foreground">
                    4. Analyse Language Closely
                  </h4>
                  <p className="mt-2 text-sm">
                    For the printed poem, quote directly and analyse specific
                    word choices. For your comparison poem (from memory), you
                    can paraphrase or use approximate quotations, but try to
                    recall key phrases. Even 2&ndash;3 words quoted from memory
                    are powerful.
                  </p>
                </div>
              </div>
            </div>

            {/* Model comparison paragraph */}
            <div>
              <h3 className="text-xl font-semibold text-foreground">
                Model Comparison Paragraph
              </h3>
              <div className="mt-3 rounded-lg border border-border bg-card p-5 shadow-md">
                <p className="text-sm italic text-muted-foreground">
                  &ldquo;Both poets explore the destructive nature of conflict,
                  yet they do so through contrasting methods. In [Poem A], the
                  poet uses the extended metaphor of a storm to convey the
                  violence of war, with the verb &lsquo;ravaged&rsquo;
                  suggesting uncontrollable, indiscriminate destruction. In
                  contrast, [Poem B] presents conflict through the intimate,
                  domestic image of a &lsquo;locked door,&rsquo; using the
                  adjective &lsquo;locked&rsquo; to imply deliberate
                  exclusion and emotional warfare. While [Poem A] depicts
                  conflict as a vast, external force, [Poem B] reveals that
                  conflict can be equally devastating on a personal, internal
                  level. This difference in scale serves to highlight the
                  universal nature of conflict &mdash; it operates at every
                  level of human experience.&rdquo;
                </p>
              </div>
            </div>

            {/* Structure for comparison */}
            <div>
              <h3 className="text-xl font-semibold text-foreground">
                Recommended Essay Structure
              </h3>
              <div className="mt-3 space-y-3">
                <div className="rounded-lg border border-primary/20 bg-primary-50 p-4">
                  <p className="font-semibold text-primary">Introduction</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Introduce both poems and state the key similarity and/or
                    difference in how they approach the theme.
                  </p>
                </div>
                <div className="rounded-lg border border-primary/20 bg-primary-50 p-4">
                  <p className="font-semibold text-primary">Paragraph 1: First point of comparison</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Compare how both poets present the theme using a specific
                    method (e.g., imagery, tone). Close language analysis of
                    both poems.
                  </p>
                </div>
                <div className="rounded-lg border border-primary/20 bg-primary-50 p-4">
                  <p className="font-semibold text-primary">Paragraph 2: Second point of comparison</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Compare a different method (e.g., structure, form,
                    perspective). Continue to analyse specific language choices.
                  </p>
                </div>
                <div className="rounded-lg border border-primary/20 bg-primary-50 p-4">
                  <p className="font-semibold text-primary">Paragraph 3: Third point of comparison</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Consider the overall effect or message of each poem. How do
                    they differ in their conclusions about the theme?
                  </p>
                </div>
                <div className="rounded-lg border border-primary/20 bg-primary-50 p-4">
                  <p className="font-semibold text-primary">Conclusion</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Which poem do you find more effective and why? Offer a
                    final evaluative judgement.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <hr className="my-10 border-border" />

        {/* ── Section C: Unseen poetry ───────────────────────── */}
        <section aria-labelledby="unseen-heading">
          <h2
            id="unseen-heading"
            className="text-2xl font-bold text-foreground"
          >
            Section C: Unseen Poetry
          </h2>

          <div className="mt-6 space-y-6 text-muted-foreground leading-relaxed">
            <div>
              <h3 className="text-xl font-semibold text-foreground">
                What to Expect
              </h3>
              <p className="mt-2">
                You will be given a poem (or poems) you have never seen before
                and asked to analyse it. This tests your ability to respond
                independently to unfamiliar texts &mdash; a skill that can be
                developed with practice.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-foreground">
                Step-by-Step Approach to Unseen Poetry
              </h3>
              <ol className="ml-6 mt-3 list-decimal space-y-3">
                <li>
                  <strong>Read the poem through twice</strong> &mdash; First
                  for overall meaning and feeling. Second to notice specific
                  language, imagery, and structural choices.
                </li>
                <li>
                  <strong>Identify the subject and theme</strong> &mdash; What
                  is the poem about on the surface? What deeper themes or ideas
                  does it explore?
                </li>
                <li>
                  <strong>Consider the speaker and tone</strong> &mdash; Who is
                  speaking? What is their attitude towards the subject? How
                  does the tone shift (if it does)?
                </li>
                <li>
                  <strong>Annotate the poem</strong> &mdash; Underline
                  striking words and phrases. Circle techniques. Note the
                  effect of key choices in the margin.
                </li>
                <li>
                  <strong>Consider the form and structure</strong> &mdash; How
                  many stanzas? Regular or irregular? Does the poem follow a
                  pattern? Are there enjambments, caesurae, or other
                  structural features?
                </li>
                <li>
                  <strong>Plan your response</strong> &mdash; Identify
                  3&ndash;4 points to make, each with a quotation and
                  analysis.
                </li>
              </ol>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-foreground">
                Key Poetic Terms to Know
              </h3>
              <div className="mt-3 grid gap-3 sm:grid-cols-2">
                <div className="rounded border border-border bg-muted p-3">
                  <p className="text-sm font-semibold text-foreground">Enjambment</p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    A sentence or phrase that runs over from one line to the
                    next without a pause. Creates flow, momentum, or a sense
                    of urgency.
                  </p>
                </div>
                <div className="rounded border border-border bg-muted p-3">
                  <p className="text-sm font-semibold text-foreground">Caesura</p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    A pause in the middle of a line, often created by
                    punctuation. Creates a dramatic break or shift in thought.
                  </p>
                </div>
                <div className="rounded border border-border bg-muted p-3">
                  <p className="text-sm font-semibold text-foreground">Stanza</p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    A group of lines forming a unit within a poem (the poetic
                    equivalent of a paragraph). Stanza breaks can signal
                    shifts in time, tone, or focus.
                  </p>
                </div>
                <div className="rounded border border-border bg-muted p-3">
                  <p className="text-sm font-semibold text-foreground">Volta</p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    A turn or shift in a poem&rsquo;s argument, mood, or
                    subject. Common in sonnets (often at line 9 or the final
                    couplet).
                  </p>
                </div>
                <div className="rounded border border-border bg-muted p-3">
                  <p className="text-sm font-semibold text-foreground">Free verse</p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    Poetry without a regular rhyme scheme or metre. Can suggest
                    freedom, chaos, or a conversational tone.
                  </p>
                </div>
                <div className="rounded border border-border bg-muted p-3">
                  <p className="text-sm font-semibold text-foreground">Rhyme scheme</p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    The pattern of rhyming words at the end of lines (ABAB,
                    ABBA, etc.). Can create rhythm, connection, or tension
                    when broken.
                  </p>
                </div>
                <div className="rounded border border-border bg-muted p-3">
                  <p className="text-sm font-semibold text-foreground">Persona</p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    The voice or character adopted by the poet. The speaker of
                    the poem is not necessarily the poet themselves.
                  </p>
                </div>
                <div className="rounded border border-border bg-muted p-3">
                  <p className="text-sm font-semibold text-foreground">Tone</p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    The attitude or feeling conveyed by the poem (angry,
                    nostalgic, bitter, celebratory, mournful, etc.). Can shift
                    within a poem.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <ExamBoardDisclaimer variant="content" className="mt-12" />
      </div>

    </>
  );
}
