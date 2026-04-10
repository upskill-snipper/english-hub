import type { Metadata } from "next";
import Link from "next/link";
import { ExamBoardDisclaimer } from "@/components/ExamBoardDisclaimer";

/* ─── Metadata ───────────────────────────────────────────────── */

export const metadata: Metadata = {
  alternates: { canonical: 'https://theenglishhub.app/resources/english-language/ocr/paper-2' },
  title:
    "OCR Paper 2: Exploring Effects and Impact | The English Hub",
  description:
    "Complete guide to OCR GCSE English Language Component 02 — Exploring Effects and Impact. Fiction reading and creative writing revision.",
};

/* ─── Page component ─────────────────────────────────────────── */

export default function OCRPaper2Page() {
  return (
    <>

      {/* ── Hero ──────────────────────────────────────────────── */}
      <section className="border-b bg-gradient-to-b from-primary/[0.06] to-transparent px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <Link
            href="/resources/english-language/ocr"
            className="inline-flex items-center gap-1 text-sm text-muted-foreground transition hover:text-foreground"
          >
            &larr; OCR English Language
          </Link>
          <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Paper 2: Exploring Effects and Impact
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
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
              OCR Component 02 focuses on fiction and literary texts for the
              reading section, and imaginative or creative writing for the
              writing section. Like Paper 1, it is split into two sections:
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
                    <td className="py-3 pr-4 font-medium">A &mdash; Reading</td>
                    <td className="py-3 pr-4">Fiction and literary texts</td>
                    <td className="py-3 pr-4">40 marks</td>
                    <td className="py-3">1 hour</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 font-medium">B &mdash; Writing</td>
                    <td className="py-3 pr-4">Imaginative / creative writing</td>
                    <td className="py-3 pr-4">40 marks</td>
                    <td className="py-3">1 hour</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <hr className="my-10 border-border" />

        {/* ── SECTION A: Reading Fiction ─────────────────────── */}
        <section aria-labelledby="reading-heading">
          <h2
            id="reading-heading"
            className="text-2xl font-bold text-foreground"
          >
            Section A: Reading Fiction and Literary Texts
          </h2>

          <div className="mt-6 space-y-6 text-muted-foreground leading-relaxed">
            <div>
              <h3 className="text-xl font-semibold text-foreground">
                What Types of Text Will You Encounter?
              </h3>
              <p className="mt-2">
                Section A provides one unseen fiction extract. This could be
                taken from:
              </p>
              <ul className="ml-6 mt-2 list-disc space-y-1">
                <li>A novel (19th, 20th, or 21st century)</li>
                <li>A short story</li>
                <li>Literary fiction from any period</li>
                <li>Prose extracts with rich descriptive or narrative elements</li>
              </ul>
              <p className="mt-3">
                The extract will be substantial enough to allow close analysis
                of language, structure, and form. You should expect a range of
                literary periods and styles across the exam series.
              </p>
            </div>

            {/* Language analysis */}
            <div>
              <h3 className="text-xl font-semibold text-foreground">
                Analysing Language in Fiction (AO2)
              </h3>
              <p className="mt-2">
                When analysing language in fiction, you are looking at the
                deliberate choices the writer has made at word and sentence
                level. Consider the following layers of analysis:
              </p>

              <div className="mt-4 space-y-4">
                <div className="rounded-lg border border-border bg-muted p-5">
                  <h4 className="font-semibold text-foreground">Word-Level Analysis</h4>
                  <ul className="ml-4 mt-2 list-disc space-y-1 text-sm">
                    <li>
                      <strong>Connotations</strong> &mdash; What associations
                      does a particular word carry? Consider the difference
                      between &ldquo;house&rdquo; and &ldquo;home&rdquo;, or
                      &ldquo;walked&rdquo; and &ldquo;trudged&rdquo;.
                    </li>
                    <li>
                      <strong>Semantic fields</strong> &mdash; Groups of words
                      relating to the same theme (e.g., a semantic field of
                      violence: &ldquo;slashed&rdquo;, &ldquo;pierced&rdquo;,
                      &ldquo;wounded&rdquo;).
                    </li>
                    <li>
                      <strong>Figurative language</strong> &mdash; Similes,
                      metaphors, personification, and symbolism. Explain what
                      is being compared to what, and what this reveals.
                    </li>
                    <li>
                      <strong>Sensory language</strong> &mdash; Appeals to
                      sight, sound, touch, taste, and smell. These create
                      vivid imagery and draw the reader into the scene.
                    </li>
                    <li>
                      <strong>Modifiers</strong> &mdash; Adjectives and adverbs
                      that shape meaning. A &ldquo;dark, suffocating
                      silence&rdquo; creates a very different effect from a
                      &ldquo;peaceful silence&rdquo;.
                    </li>
                  </ul>
                </div>

                <div className="rounded-lg border border-border bg-muted p-5">
                  <h4 className="font-semibold text-foreground">Sentence-Level Analysis</h4>
                  <ul className="ml-4 mt-2 list-disc space-y-1 text-sm">
                    <li>
                      <strong>Short sentences</strong> &mdash; Create tension,
                      shock, or emphasis. &ldquo;She stopped. The door was
                      open.&rdquo;
                    </li>
                    <li>
                      <strong>Long, complex sentences</strong> &mdash; Can
                      build atmosphere, convey stream of consciousness, or
                      create a sense of accumulation.
                    </li>
                    <li>
                      <strong>Minor sentences / fragments</strong> &mdash;
                      &ldquo;Darkness.&rdquo; Used for dramatic effect.
                    </li>
                    <li>
                      <strong>Questions</strong> &mdash; Create uncertainty or
                      reflect a character&rsquo;s inner turmoil.
                    </li>
                    <li>
                      <strong>Listing / accumulation</strong> &mdash; Can
                      create a sense of chaos, abundance, or overwhelming
                      detail.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Structure analysis */}
            <div>
              <h3 className="text-xl font-semibold text-foreground">
                Analysing Structure (AO2)
              </h3>
              <p className="mt-2">
                Structure refers to the way the writer organises and shapes the
                whole text. Consider:
              </p>
              <ul className="ml-6 mt-2 list-disc space-y-2">
                <li>
                  <strong>Opening</strong> &mdash; How does the extract begin?
                  In medias res (in the middle of action)? With setting? With
                  dialogue? What effect does this create?
                </li>
                <li>
                  <strong>Focus shifts</strong> &mdash; Does the writer shift
                  from one character to another? From interior thoughts to
                  external description? From present to past?
                </li>
                <li>
                  <strong>Pace</strong> &mdash; Is the pace fast (short
                  sentences, action verbs, dialogue) or slow (long
                  descriptions, detailed imagery)? Where does the pace change,
                  and why?
                </li>
                <li>
                  <strong>Narrative perspective</strong> &mdash; First person
                  (&ldquo;I&rdquo;), second person (&ldquo;you&rdquo;), third
                  person (&ldquo;he/she&rdquo;), omniscient narrator, or
                  limited narrator? How does this affect what the reader knows?
                </li>
                <li>
                  <strong>Tension and release</strong> &mdash; How does the
                  writer build tension? Is there a climax within the extract?
                  Is tension sustained or released?
                </li>
                <li>
                  <strong>Ending</strong> &mdash; How does the extract
                  conclude? Cliffhanger? Resolution? Circular structure? Open
                  ending?
                </li>
                <li>
                  <strong>Paragraph length and structure</strong> &mdash; A
                  single-line paragraph can create dramatic emphasis. Dense
                  paragraphs can convey complexity or claustrophobia.
                </li>
              </ul>
            </div>

            {/* Evaluation */}
            <div>
              <h3 className="text-xl font-semibold text-foreground">
                Evaluation Questions (AO4)
              </h3>
              <p className="mt-2">
                You may be given a statement about the text and asked to what
                extent you agree. For example: &ldquo;A student said: &lsquo;The
                writer makes the reader feel sympathy for the main
                character.&rsquo; To what extent do you agree?&rdquo;
              </p>
              <div className="mt-3 rounded border border-accent/20 bg-primary/10 p-4">
                <p className="text-sm font-medium text-primary">How to structure an evaluation response</p>
                <ol className="ml-4 mt-2 list-decimal space-y-1 text-sm text-primary">
                  <li>State your position clearly (agree, disagree, or partially agree)</li>
                  <li>Select evidence from the text that supports your view</li>
                  <li>Analyse the language and/or structural choices in your evidence</li>
                  <li>Consider alternative interpretations to show critical thinking</li>
                  <li>Reach a justified conclusion that reflects the complexity of the text</li>
                </ol>
              </div>
            </div>

            {/* Model paragraph */}
            <div>
              <h3 className="text-xl font-semibold text-foreground">
                Model Analysis Paragraph
              </h3>
              <p className="mt-2">
                Here is a strong analytical paragraph for a fiction extract
                where a character enters an abandoned building:
              </p>
              <div className="mt-3 rounded-lg border border-border bg-card p-5 shadow-md">
                <p className="text-sm italic text-muted-foreground">
                  The writer creates an oppressive, unsettling atmosphere
                  through the use of pathetic fallacy and sensory detail. The
                  description of &ldquo;dust motes spiralling in the thin blade
                  of light&rdquo; uses the metaphor &ldquo;blade&rdquo; to
                  suggest that even the light feels sharp and threatening, as
                  though the building itself is hostile to the
                  character&rsquo;s presence. The verb &ldquo;spiralling&rdquo;
                  connotes disorientation and chaos, mirroring the
                  character&rsquo;s growing unease. Structurally, the writer
                  delays revealing what the character sees by inserting this
                  extended description, building suspense through the deferral
                  of information. The reader is positioned alongside the
                  character, sharing their uncertainty and tension.
                </p>
              </div>
            </div>
          </div>
        </section>

        <hr className="my-10 border-border" />

        {/* ── SECTION B: Creative Writing ────────────────────── */}
        <section aria-labelledby="creative-heading">
          <h2
            id="creative-heading"
            className="text-2xl font-bold text-foreground"
          >
            Section B: Imaginative and Creative Writing
          </h2>

          <div className="mt-6 space-y-6 text-muted-foreground leading-relaxed">
            <div>
              <h3 className="text-xl font-semibold text-foreground">
                What Are You Asked to Write?
              </h3>
              <p className="mt-2">
                Section B gives you a choice of creative writing tasks. You
                will choose <strong>one</strong> task from a selection. Tasks
                may be inspired by the reading extract or may be standalone.
                You might be asked to:
              </p>
              <ul className="ml-6 mt-2 list-disc space-y-1">
                <li>Write a descriptive piece based on an image or scenario</li>
                <li>Write a narrative (short story or part of a story)</li>
                <li>Write from a particular perspective or point of view</li>
                <li>Continue or reimagine a scenario</li>
              </ul>
            </div>

            {/* Narrative writing */}
            <div>
              <h3 className="text-xl font-semibold text-foreground">
                Crafting a Strong Narrative
              </h3>
              <p className="mt-2">
                If you choose a narrative task, focus on quality over quantity.
                A short, well-crafted story will always score higher than a
                long, unfocused one.
              </p>

              <div className="mt-4 space-y-4">
                <div className="rounded-lg border border-border bg-muted p-5">
                  <h4 className="font-semibold text-foreground">Opening</h4>
                  <p className="mt-2 text-sm">
                    Grab the reader&rsquo;s attention immediately. Consider
                    starting with dialogue, a dramatic moment, a vivid
                    description, or an intriguing statement. Avoid cliched
                    openings like &ldquo;I woke up and&hellip;&rdquo; or
                    &ldquo;It was a dark and stormy night.&rdquo;
                  </p>
                  <div className="mt-2 rounded border border-accent/20 bg-primary/10 p-3">
                    <p className="text-sm font-medium text-primary">Strong opening example</p>
                    <p className="mt-1 text-sm italic text-primary">
                      &ldquo;The letter had been sitting on the kitchen table
                      for three days. Nobody wanted to open it.&rdquo;
                    </p>
                  </div>
                </div>

                <div className="rounded-lg border border-border bg-muted p-5">
                  <h4 className="font-semibold text-foreground">Character</h4>
                  <p className="mt-2 text-sm">
                    Develop your main character through action, dialogue, and
                    internal thought rather than simply telling the reader
                    about them. Show, don&rsquo;t tell: instead of &ldquo;She
                    was nervous,&rdquo; write &ldquo;Her fingers drummed
                    against the desk, leaving damp crescents on the wood.&rdquo;
                  </p>
                </div>

                <div className="rounded-lg border border-border bg-muted p-5">
                  <h4 className="font-semibold text-foreground">Setting</h4>
                  <p className="mt-2 text-sm">
                    Use sensory details to bring your setting alive. Engage all
                    five senses, not just sight. Setting can also reflect mood
                    (pathetic fallacy) or contrast with it for dramatic effect.
                  </p>
                </div>

                <div className="rounded-lg border border-border bg-muted p-5">
                  <h4 className="font-semibold text-foreground">Dialogue</h4>
                  <p className="mt-2 text-sm">
                    Use dialogue sparingly but effectively. It should reveal
                    character, advance the plot, or create tension. Punctuate
                    dialogue correctly: &ldquo;I don&rsquo;t understand,&rdquo;
                    she whispered, &ldquo;why you never told me.&rdquo;
                  </p>
                </div>

                <div className="rounded-lg border border-border bg-muted p-5">
                  <h4 className="font-semibold text-foreground">Ending</h4>
                  <p className="mt-2 text-sm">
                    Your ending should feel deliberate, not rushed. Consider a
                    circular structure (returning to the opening image), an
                    epiphany (a moment of realisation), an ambiguous ending, or
                    a twist. Avoid &ldquo;it was all a dream&rdquo; endings.
                  </p>
                </div>
              </div>
            </div>

            {/* Descriptive writing */}
            <div>
              <h3 className="text-xl font-semibold text-foreground">
                Crafting Strong Descriptive Writing
              </h3>
              <p className="mt-2">
                If you choose a descriptive task, your focus is on creating a
                vivid, immersive piece of writing rather than telling a story.
              </p>

              <div className="mt-4 space-y-3">
                <div className="rounded-lg border border-primary/20 bg-primary/10 p-4">
                  <p className="font-semibold text-primary">Use all five senses</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Don&rsquo;t rely solely on visual description. What can
                    your narrator hear, smell, touch, and taste? Sensory
                    details make writing tangible and immersive.
                  </p>
                </div>

                <div className="rounded-lg border border-primary/20 bg-primary/10 p-4">
                  <p className="font-semibold text-primary">Zoom in and out</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Alternate between wide-angle panoramic descriptions and
                    close-up, microscopic details. This creates variety and
                    keeps the reader engaged.
                  </p>
                </div>

                <div className="rounded-lg border border-primary/20 bg-primary/10 p-4">
                  <p className="font-semibold text-primary">Use figurative language purposefully</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    A few well-chosen metaphors are more effective than a page
                    overloaded with similes. Quality over quantity.
                  </p>
                </div>

                <div className="rounded-lg border border-primary/20 bg-primary/10 p-4">
                  <p className="font-semibold text-primary">Vary your sentence structures</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Long, flowing sentences for calm or beauty. Short, sharp
                    sentences for tension or impact. Fragments for drama.
                    Variety is key.
                  </p>
                </div>

                <div className="rounded-lg border border-primary/20 bg-primary/10 p-4">
                  <p className="font-semibold text-primary">Create a clear structure</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Even descriptive writing needs structure. Move through
                    time, space, or emotion in a deliberate way. Consider
                    moving from exterior to interior, or from general to
                    specific.
                  </p>
                </div>
              </div>
            </div>

            {/* Assessment criteria summary */}
            <div>
              <h3 className="text-xl font-semibold text-foreground">
                What the Examiner Is Looking For
              </h3>
              <div className="mt-3 grid gap-4 sm:grid-cols-2">
                <div className="rounded-lg border border-border bg-muted p-5">
                  <h4 className="font-semibold text-foreground">AO5: Content and Organisation (24 marks)</h4>
                  <ul className="ml-4 mt-2 list-disc space-y-1 text-sm">
                    <li>Communication is convincing and compelling</li>
                    <li>Tone, style, and register match purpose and audience</li>
                    <li>Extensive, ambitious vocabulary</li>
                    <li>Sustained crafting with varied structural features</li>
                    <li>Compelling, well-connected ideas with fluent paragraphing</li>
                  </ul>
                </div>
                <div className="rounded-lg border border-border bg-muted p-5">
                  <h4 className="font-semibold text-foreground">AO6: Technical Accuracy (16 marks)</h4>
                  <ul className="ml-4 mt-2 list-disc space-y-1 text-sm">
                    <li>Wide range of sentence forms for effect</li>
                    <li>Accurate and varied punctuation</li>
                    <li>Accurate spelling of ambitious vocabulary</li>
                    <li>Secure control of grammar</li>
                    <li>Standard English used accurately throughout</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Continue studying */}
        <div className="mt-12 rounded-xl border border-primary/20 bg-primary/5 p-6 sm:p-8">
          <h2 className="text-xl font-bold text-foreground">Continue studying</h2>
          <p className="mt-2 text-muted-foreground">
            Build your reading analysis and creative writing skills further.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link
              href="/resources/english-language/ocr/paper-1"
              className="rounded-lg border border-border bg-card px-5 py-2.5 text-sm font-semibold text-foreground transition hover:border-primary hover:shadow-md"
            >
              Paper 1: Information &amp; Ideas
            </Link>
            <Link
              href="/resources/english-language/ocr/techniques"
              className="rounded-lg border border-border bg-card px-5 py-2.5 text-sm font-semibold text-foreground transition hover:border-primary hover:shadow-md"
            >
              Language Techniques Guide
            </Link>
            <Link
              href="/resources/writing-skills"
              className="rounded-lg border border-border bg-card px-5 py-2.5 text-sm font-semibold text-foreground transition hover:border-primary hover:shadow-md"
            >
              Writing Skills
            </Link>
            <Link
              href="/practice"
              className="rounded-lg border border-border bg-card px-5 py-2.5 text-sm font-semibold text-foreground transition hover:border-primary hover:shadow-md"
            >
              Practice Questions
            </Link>
            <Link
              href="/revision"
              className="rounded-lg border border-border bg-card px-5 py-2.5 text-sm font-semibold text-foreground transition hover:border-primary hover:shadow-md"
            >
              Revision Hub
            </Link>
          </div>
        </div>

        <ExamBoardDisclaimer variant="content" className="mt-12" />
      </div>

    </>
  );
}
