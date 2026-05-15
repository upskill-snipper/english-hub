import type { Metadata } from 'next'
import Link from 'next/link'
import { ExamBoardDisclaimer } from '@/components/ExamBoardDisclaimer'

/* ─── Metadata ───────────────────────────────────────────────── */

export const metadata: Metadata = {
  openGraph: {
    title: 'Unseen Analysis - Cambridge IGCSE English Literature',
    description:
      'Step-by-step techniques for unseen prose and poetry analysis in Cambridge IGCSE English Literature. Worked examples, frameworks, and marker tips.',
  },
  alternates: { canonical: 'https://theenglishhub.app/resources/english-literature/caie/unseen' },
  title: 'Unseen Analysis - Cambridge IGCSE English Literature',
  description:
    'Step-by-step techniques for unseen prose and poetry analysis in Cambridge IGCSE English Literature. Worked examples, frameworks, and marker tips.',
}

/* ─── Page component ─────────────────────────────────────────── */

export default function UnseenAnalysisPage() {
  return (
    <>
      {/* ── Hero ────────────────────────────────────────────────── */}
      <section className="border-b bg-gradient-to-b from-primary/[0.06] to-transparent px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
            Cambridge IGCSE English Literature
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Unseen Poetry &amp; Prose Analysis
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            A complete guide to tackling unseen texts with confidence. Step-by-step frameworks,
            worked examples, and marker tips for Cambridge IGCSE.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-12 sm:py-16 lg:py-20">
        {/* ── Introduction ────────────────────────────────────────── */}
        <section aria-labelledby="intro-heading">
          <h2 id="intro-heading" className="text-2xl font-bold text-foreground">
            What Is the Unseen Component?
          </h2>
          <div className="mt-4 space-y-3 text-sm leading-relaxed text-muted-foreground">
            <p>
              In the Cambridge IGCSE English Literature examination, unseen analysis tests your
              ability to respond to a text you have never seen before. You cannot revise the
              specific text, but you <em>can</em> revise the skills needed to analyse any text
              effectively.
            </p>
            <p>
              The unseen component may appear as part of Paper 1 (0992) or as a separate component
              depending on your syllabus variant. You will be given a poem or a prose extract and
              asked to write about how the writer creates effects through language, form, and
              structure.
            </p>
            <p>
              This page provides a systematic approach to unseen analysis that works for both poetry
              and prose.
            </p>
          </div>
        </section>

        <hr className="my-10 border-border" />

        {/* ── Step-by-step: Unseen Poetry ─────────────────────────── */}
        <section aria-labelledby="poetry-steps-heading">
          <h2 id="poetry-steps-heading" className="text-2xl font-bold text-foreground">
            Unseen Poetry: Step-by-Step Framework
          </h2>
          <div className="mt-6 space-y-4">
            {[
              {
                step: '1. First Reading: Get the Big Picture',
                content: [
                  'Read the poem through once without writing anything. Do not panic if you do not understand every line.',
                  'Ask yourself: What is the poem about on a surface level? Who is speaking? What is the mood or tone?',
                  "Note the title: it often provides crucial context. A title like 'War Photographer' immediately signals the subject matter.",
                ],
              },
              {
                step: '2. Second Reading: Annotate',
                content: [
                  'Read again, this time underlining or circling key words, images, and phrases that stand out.',
                  "Mark any shifts in tone, mood, or subject. Look for a 'volta' (turning point), especially in sonnets.",
                  'Note the form: how many stanzas? Regular or irregular? Rhyming or free verse? What is the line length?',
                  "Identify the speaker's attitude: are they angry, reflective, celebratory, mournful, ironic?",
                ],
              },
              {
                step: "3. Identify the Writer's Methods",
                content: [
                  'Imagery: metaphor, simile, personification, symbolism. What picture does the poet create? What does it represent?',
                  'Sound: alliteration, sibilance, assonance, onomatopoeia, rhyme. How does the poem sound when read aloud?',
                  "Structure: enjambment, caesura, stanza breaks, repetition. How does the structure control the reader's pace and attention?",
                  "Tone: what is the speaker's attitude? Does it change? Where and why?",
                ],
              },
              {
                step: '4. Plan Your Response (3-5 Minutes)',
                content: [
                  'Identify 3 or 4 key points you want to make, each supported by a quotation.',
                  'Arrange them in a logical order: you might work through the poem chronologically, or group by technique.',
                  'Ensure at least one point addresses form or structure, not just language.',
                ],
              },
              {
                step: '5. Write Your Response',
                content: [
                  "Open with a brief overview of the poem's subject and tone. Do not retell the poem.",
                  'Use the PEAL structure: Point, Evidence (quote), Analysis of language/technique, Link to meaning/effect.',
                  'Embed short quotations within your sentences rather than copying out long chunks.',
                  'Use literary terminology accurately: do not name-drop terms without explaining their effect.',
                  "End with a comment on the poem's overall effect or the significance of the ending.",
                ],
              },
            ].map((s) => (
              <div key={s.step} className="rounded-lg border border-border bg-card p-5 shadow-md">
                <h3 className="font-semibold text-foreground">{s.step}</h3>
                <ul className="mt-2 space-y-1.5">
                  {s.content.map((c, i) => (
                    <li key={i} className="text-sm text-muted-foreground">
                      &bull; {c}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <hr className="my-10 border-border" />

        {/* ── Step-by-step: Unseen Prose ──────────────────────────── */}
        <section aria-labelledby="prose-steps-heading">
          <h2 id="prose-steps-heading" className="text-2xl font-bold text-foreground">
            Unseen Prose: Step-by-Step Framework
          </h2>
          <div className="mt-6 space-y-4">
            {[
              {
                step: '1. First Reading: Understand the Narrative',
                content: [
                  'Read the extract through once. Identify: Who is the narrator? What is happening? Where and when is it set?',
                  'Note the narrative perspective: first person (intimate, subjective), third person limited (close to one character), or omniscient (all-knowing).',
                  'Consider the genre: is this a realistic novel, a gothic text, a war narrative, a coming-of-age story?',
                ],
              },
              {
                step: "2. Second Reading: Identify the Writer's Craft",
                content: [
                  'Underline powerful verbs, adjectives, and imagery. What atmosphere do they create?',
                  'Look at sentence structure: are sentences long and flowing (creating a reflective mood) or short and fragmented (creating tension)?',
                  'Identify dialogue: what does it reveal about character? How does the writer use speech rhythms?',
                  'Look at the opening and closing lines: they often carry the most weight.',
                ],
              },
              {
                step: '3. Analyse Specific Techniques',
                content: [
                  'Narrative voice: does the narrator seem reliable? Are there gaps or silences that suggest more than is stated?',
                  'Setting and atmosphere: how does the writer use physical description to create mood?',
                  'Characterisation: how are characters revealed through their actions, speech, thoughts, or how others react to them?',
                  'Symbolism and motifs: are there recurring images or objects that carry deeper meaning?',
                  'Pace and tension: does the writer slow down for description or speed up through short sentences and dialogue?',
                ],
              },
              {
                step: '4. Write Your Response',
                content: [
                  "Begin with a statement about the extract's overall effect or the writer's apparent purpose.",
                  'Analyse specific moments closely: quote a phrase, name the technique, explain the effect.',
                  "Consider the reader's response: how does the writer make us feel? Why?",
                  'Comment on structure: how does the extract begin, develop, and end? Is there a climax or shift?',
                  'Avoid narrative summary. The marker knows what happens; they want to know HOW the writer makes it happen.',
                ],
              },
            ].map((s) => (
              <div key={s.step} className="rounded-lg border border-border bg-card p-5 shadow-md">
                <h3 className="font-semibold text-foreground">{s.step}</h3>
                <ul className="mt-2 space-y-1.5">
                  {s.content.map((c, i) => (
                    <li key={i} className="text-sm text-muted-foreground">
                      &bull; {c}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <hr className="my-10 border-border" />

        {/* ── Worked example: Poetry ──────────────────────────────── */}
        <section aria-labelledby="worked-poetry-heading">
          <h2 id="worked-poetry-heading" className="text-2xl font-bold text-foreground">
            Worked Example: Unseen Poetry Response
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Below is a model paragraph demonstrating how to analyse an unseen poem effectively. The
            example uses an imagined poem about a storm.
          </p>

          <div className="mt-6 rounded-lg border border-border bg-card p-5 shadow-md">
            <p className="text-xs font-semibold uppercase tracking-wide text-foreground">
              Imagined question
            </p>
            <p className="mt-1 text-sm font-medium text-foreground">
              How does the poet convey the power of the storm in this poem?
            </p>
          </div>

          <div className="mt-4 rounded-lg border-l-4 border-primary bg-card p-5 shadow-md">
            <p className="text-xs font-semibold uppercase tracking-wide text-foreground">
              Model paragraph
            </p>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              The poet conveys the storm&rsquo;s overwhelming power through violent personification.
              The wind &ldquo;tore the roof from its hinges and flung it like a playing card&rdquo;
              &mdash; the verbs &lsquo;tore&rsquo; and &lsquo;flung&rsquo; are forceful and
              deliberate, suggesting the storm acts with intent rather than randomness. The simile
              &lsquo;like a playing card&rsquo; reduces the solid, heavy roof to something flimsy
              and weightless, emphasising the disparity between human construction and natural
              force. The effect on the reader is one of awe and helplessness: if a roof is a
              &lsquo;playing card&rsquo;, then human beings are even more insignificant. This sense
              of human vulnerability is central to the poem&rsquo;s exploration of nature&rsquo;s
              indifference.
            </p>
          </div>

          <div className="mt-4 rounded-lg border border-primary/20 bg-primary/5 p-5">
            <p className="text-xs font-semibold text-foreground">Why this works:</p>
            <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
              <li>
                &bull; Opens with a clear point about the writer&rsquo;s method (personification)
              </li>
              <li>&bull; Quotes are short and embedded, not copied as block text</li>
              <li>
                &bull; Analyses specific words (&lsquo;tore&rsquo;, &lsquo;flung&rsquo;) rather than
                just naming the technique
              </li>
              <li>&bull; Explains the effect on the reader</li>
              <li>&bull; Links to the poem&rsquo;s wider theme (nature versus humanity)</li>
            </ul>
          </div>
        </section>

        <hr className="my-10 border-border" />

        {/* ── Worked example: Prose ───────────────────────────────── */}
        <section aria-labelledby="worked-prose-heading">
          <h2 id="worked-prose-heading" className="text-2xl font-bold text-foreground">
            Worked Example: Unseen Prose Response
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Below is a model paragraph demonstrating how to analyse an unseen prose extract. The
            example uses an imagined passage describing a character&rsquo;s arrival in a new city.
          </p>

          <div className="mt-6 rounded-lg border border-border bg-card p-5 shadow-md">
            <p className="text-xs font-semibold uppercase tracking-wide text-foreground">
              Imagined question
            </p>
            <p className="mt-1 text-sm font-medium text-foreground">
              How does the writer create a sense of the character&rsquo;s isolation in this passage?
            </p>
          </div>

          <div className="mt-4 rounded-lg border-l-4 border-primary bg-card p-5 shadow-md">
            <p className="text-xs font-semibold uppercase tracking-wide text-foreground">
              Model paragraph
            </p>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              The writer creates a sense of isolation through the contrast between the crowded
              setting and the character&rsquo;s internal emptiness. Although the streets are
              &ldquo;thick with people&rdquo;, the narrator observes that &ldquo;not one face turned
              towards her&rdquo;. The juxtaposition of physical proximity and emotional distance is
              striking: the crowd becomes a mass of indifference rather than a source of connection.
              The writer&rsquo;s choice of the word &lsquo;thick&rsquo; to describe the crowd is
              significant &mdash; it suggests something oppressive and impenetrable, as though the
              people form a barrier rather than a community. The short sentence that follows &mdash;
              &ldquo;She stopped walking.&rdquo; &mdash; creates a moment of stillness that
              interrupts the bustling pace of the previous paragraph, mirroring the
              character&rsquo;s sense of being out of step with the world around her.
            </p>
          </div>

          <div className="mt-4 rounded-lg border border-primary/20 bg-primary/5 p-5">
            <p className="text-xs font-semibold text-foreground">Why this works:</p>
            <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
              <li>
                &bull; Identifies the technique (juxtaposition, sentence structure) rather than just
                describing the scene
              </li>
              <li>&bull; Analyses a single word (&lsquo;thick&rsquo;) to show close reading</li>
              <li>&bull; Comments on sentence length as a structural choice</li>
              <li>&bull; Explains the reader&rsquo;s experience and the effect created</li>
              <li>
                &bull; Does not retell the story; focuses entirely on HOW the writer creates the
                effect
              </li>
            </ul>
          </div>
        </section>

        <hr className="my-10 border-border" />

        {/* ── Terminology toolkit ─────────────────────────────────── */}
        <section aria-labelledby="toolkit-heading">
          <h2 id="toolkit-heading" className="text-2xl font-bold text-foreground">
            Literary Terminology Toolkit
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Know these terms and, more importantly, know how to explain their effect. Naming a
            technique without analysis does not earn marks.
          </p>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {[
              {
                term: 'Metaphor',
                def: 'Describing something as if it is something else. Creates vivid imagery and invites comparison.',
              },
              {
                term: 'Simile',
                def: "Comparison using 'like' or 'as'. Makes abstract ideas concrete and accessible.",
              },
              {
                term: 'Personification',
                def: 'Giving human qualities to non-human things. Creates atmosphere and emotional connection.',
              },
              {
                term: 'Alliteration',
                def: 'Repetition of initial consonant sounds. Can create rhythm, emphasis, or mimic sounds.',
              },
              {
                term: 'Sibilance',
                def: "Repetition of 's' sounds. Often creates a sinister, whispering, or soothing effect.",
              },
              {
                term: 'Onomatopoeia',
                def: "Words that imitate sounds ('crash', 'whisper'). Creates a sensory, immersive experience.",
              },
              {
                term: 'Enjambment',
                def: 'A sentence running over a line break. Creates momentum, urgency, or a sense of overflow.',
              },
              {
                term: 'Caesura',
                def: 'A pause within a line (often a full stop or comma). Creates emphasis, hesitation, or a shift in thought.',
              },
              {
                term: 'Oxymoron',
                def: "Two contradictory words together ('bitter sweet'). Creates tension and complexity.",
              },
              {
                term: 'Juxtaposition',
                def: 'Placing contrasting ideas side by side. Highlights differences and creates meaning through contrast.',
              },
              {
                term: 'Pathetic fallacy',
                def: "Weather or setting reflecting mood. Externalises characters' emotions through the environment.",
              },
              {
                term: 'Symbolism',
                def: 'An object or image representing a deeper meaning. Adds layers of significance beyond the literal.',
              },
              {
                term: 'Tone',
                def: "The writer's attitude towards the subject. Can be ironic, tender, angry, reflective, etc.",
              },
              {
                term: 'Volta',
                def: 'A turning point in a poem, especially a sonnet. Signals a shift in argument, mood, or perspective.',
              },
              {
                term: 'Anaphora',
                def: 'Repetition of a word or phrase at the start of successive lines. Creates emphasis and rhythm.',
              },
              {
                term: 'Semantic field',
                def: 'A group of words related to the same topic (e.g., war, religion). Creates a sustained atmosphere.',
              },
            ].map((t) => (
              <div key={t.term} className="rounded-lg border border-border bg-card p-4 shadow-md">
                <p className="font-semibold text-foreground">{t.term}</p>
                <p className="mt-1 text-sm text-muted-foreground">{t.def}</p>
              </div>
            ))}
          </div>
        </section>

        <hr className="my-10 border-border" />

        {/* ── Marker tips ───────────────────────────────────────── */}
        <section aria-labelledby="tips-heading">
          <h2 id="tips-heading" className="text-2xl font-bold text-foreground">
            Marker Tips for Unseen Analysis
          </h2>
          <div className="mt-6 space-y-3">
            {[
              {
                label: 'Do not panic',
                tip: 'You are not expected to know the text. The marker is testing your analytical skills, not your memory. A thoughtful, well-structured response to an unfamiliar text is exactly what they want to see.',
              },
              {
                label: 'Quality over quantity',
                tip: 'Three well-analysed points are better than six superficial ones. Spend time exploring a quotation in depth rather than rushing through many.',
              },
              {
                label: 'Avoid feature-spotting',
                tip: "Naming techniques without explaining their effect is a common weakness. 'The poet uses alliteration' is not analysis. 'The alliteration of the plosive 'b' in 'bitter, broken, burnt' creates a harsh, percussive rhythm that conveys the violence of the scene' IS analysis.",
              },
              {
                label: 'Comment on structure',
                tip: 'Many students focus only on language. Structure is equally important: how the text begins and ends, how stanzas/paragraphs are arranged, where the turning point occurs, and how pace varies.',
              },
              {
                label: "Use 'the writer' not 'the poem'",
                tip: "Say 'the poet creates' or 'the writer suggests' rather than 'the poem says'. This shows you understand that a conscious artist has made deliberate choices.",
              },
              {
                label: 'Trust your instincts',
                tip: 'If a word or image strikes you, there is probably a reason. Your personal response is valuable. Cambridge rewards genuine engagement over formulaic answers.',
              },
              {
                label: 'Time yourself',
                tip: 'In practice, allow 5 minutes for reading and annotating, 5 minutes for planning, and 30-35 minutes for writing. This ensures a well-structured response.',
              },
            ].map((item) => (
              <div
                key={item.label}
                className="flex items-start gap-3 rounded-lg border border-border bg-card p-4 shadow-md"
              >
                <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                  !
                </span>
                <div>
                  <p className="text-sm font-semibold text-foreground">{item.label}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{item.tip}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Back link & disclaimer ──────────────────────────────── */}
        <div className="mt-12 flex items-center gap-2 text-sm">
          <Link
            href="/resources/english-literature/caie"
            className="font-medium text-foreground underline underline-offset-2 hover:text-primary"
          >
            &larr; Back to Cambridge IGCSE English Literature
          </Link>
        </div>

        <ExamBoardDisclaimer variant="content" className="mt-8" />
      </div>
    </>
  )
}
