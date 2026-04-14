"use client";

import Link from "next/link";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

/* ─── Page component ─────────────────────────────────────────── */

export default function UnseenPoetryPage() {
  return (
    <>
      {/* ── Hero ────────────────────────────────────────────────── */}
      <section className="border-b bg-gradient-to-b from-primary/[0.06] to-transparent px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
            Cambridge IGCSE English Literature &mdash; Paper 4
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Unseen Poetry: The Complete Guide
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Master Paper 4 with a step-by-step method for analysing any unseen
            poem. Includes technique checklists, a fully annotated model
            response, level descriptors, and common pitfalls to avoid.
          </p>
          <div className="mx-auto mt-6 flex max-w-md flex-wrap items-center justify-center gap-3 text-sm font-medium text-muted-foreground">
            <span className="rounded-full border px-3 py-1">
              1h 15m
            </span>
            <span className="rounded-full border px-3 py-1">
              25 marks
            </span>
            <span className="rounded-full border px-3 py-1">
              Critical commentary
            </span>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-12 sm:py-16 lg:py-20">
        {/* ── Paper 4 overview ──────────────────────────────────── */}
        <section aria-labelledby="overview-heading">
          <h2
            id="overview-heading"
            className="text-2xl font-bold text-foreground"
          >
            Paper 4 at a Glance
          </h2>
          <div className="mt-4 space-y-3 text-sm leading-relaxed text-muted-foreground">
            <p>
              Paper 4 (Unseen) is worth <strong>25 marks</strong> and lasts{" "}
              <strong>1 hour 15 minutes</strong>. You receive a single unseen
              poem (or occasionally a prose passage) and must write a{" "}
              <strong>critical commentary</strong> exploring how the writer
              creates meaning through language, form, and structure.
            </p>
            <p>
              There is no set text to revise. Instead, you are assessed on your
              ability to respond independently to an unfamiliar poem. This makes
              Paper 4 one of the most skill-based components of the IGCSE: the
              techniques you practise will work for any poem you encounter.
            </p>
            <p>
              Your response is marked against <strong>four Assessment
              Objectives</strong>:
            </p>
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {[
              {
                ao: "Textual Knowledge",
                title: "Knowledge & Understanding",
                desc: "Show understanding of the poem's content, themes, and ideas. Demonstrate that you grasp what the poem is about.",
              },
              {
                ao: "Writer's Methods",
                title: "Language, Form & Structure",
                desc: "Analyse how the writer uses language, form, and structure to create effects and shape meaning.",
              },
              {
                ao: "Interpretation",
                title: "Writer's Methods & Effects",
                desc: "Explain the effects of the writer's choices on the reader. Go beyond naming techniques to exploring impact.",
              },
              {
                ao: "Personal Response",
                title: "Personal Response",
                desc: "Develop an informed, personal response supported by references to the text. Show genuine engagement.",
              },
            ].map((item) => (
              <Card key={item.ao}>
                <CardHeader>
                  <CardTitle>
                    <span className="mr-2 inline-flex h-7 w-7 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                      {item.ao}
                    </span>
                    {item.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <hr className="my-10 border-border" />

        {/* ── Step-by-step method ───────────────────────────────── */}
        <section aria-labelledby="method-heading">
          <h2
            id="method-heading"
            className="text-2xl font-bold text-foreground"
          >
            Step-by-Step Method for Unseen Poetry
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Follow this four-stage approach every time you tackle an unseen poem.
            With practice it becomes instinctive.
          </p>

          <div className="mt-6 space-y-4">
            {/* Step 1 */}
            <Card>
              <CardHeader>
                <CardTitle>Step 1: First Reading &mdash; Overall Meaning &amp; Tone (3&ndash;4 minutes)</CardTitle>
                <CardDescription>Read the poem through without writing. Get the big picture.</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>&bull; Read the title first. It often signals the subject, context, or the poet&rsquo;s attitude.</li>
                  <li>&bull; Read the whole poem from start to finish without stopping. Do not panic if you do not understand every line.</li>
                  <li>&bull; Ask: <em>What is this poem about on a surface level? Who is speaking? To whom? What is the situation?</em></li>
                  <li>&bull; Identify the dominant tone: is the speaker angry, reflective, celebratory, mournful, ironic, tender, bitter?</li>
                  <li>&bull; Notice whether the tone stays consistent or shifts. If it shifts, where does the change occur?</li>
                  <li>&bull; Form a one-sentence &ldquo;thesis&rdquo; in your head: &ldquo;This poem is about X and the poet seems to feel Y about it.&rdquo;</li>
                </ul>
              </CardContent>
            </Card>

            {/* Step 2 */}
            <Card>
              <CardHeader>
                <CardTitle>Step 2: Second Reading &mdash; Annotate Language, Imagery &amp; Form (5&ndash;6 minutes)</CardTitle>
                <CardDescription>Read again with a pen. Mark everything that creates an effect.</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>&bull; <strong>Language:</strong> Underline striking words, unusual word choices, and loaded vocabulary. Circle any words with multiple meanings or connotations.</li>
                  <li>&bull; <strong>Imagery:</strong> Identify metaphors, similes, personification, and symbolism. Ask: what picture does this create? What does it suggest beyond the literal meaning?</li>
                  <li>&bull; <strong>Sound:</strong> Note alliteration, assonance, sibilance, onomatopoeia, and rhyme. Read lines aloud in your head to hear the effect.</li>
                  <li>&bull; <strong>Form:</strong> How many stanzas? Regular or irregular? What is the rhyme scheme? Is it a sonnet, free verse, dramatic monologue, or another form?</li>
                  <li>&bull; <strong>Structure:</strong> Look for enjambment, caesura, repetition, and stanza breaks. Where does the poet speed up or slow down the reader?</li>
                  <li>&bull; <strong>Shifts:</strong> Mark any volta (turning point), change in perspective, or tonal shift with a line in the margin.</li>
                </ul>
              </CardContent>
            </Card>

            {/* Step 3 */}
            <Card>
              <CardHeader>
                <CardTitle>Step 3: Planning &mdash; Group Observations (3&ndash;4 minutes)</CardTitle>
                <CardDescription>Organise your annotations into 3&ndash;4 coherent points.</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>&bull; Group your annotations by technique or theme, not by stanza order. This produces a more analytical (less descriptive) response.</li>
                  <li>&bull; For each point, select a short quotation that best supports your argument.</li>
                  <li>&bull; Ensure your plan covers all four skills: understanding (Textual Knowledge), language and form (Writer's Methods), effects (Interpretation), and personal response (Personal Response).</li>
                  <li>&bull; Aim for at least one point on form or structure &mdash; this is where many students lose marks.</li>
                  <li>&bull; Decide on your order: you might move from surface meaning to deeper symbolism, or from language to form to tone.</li>
                  <li>&bull; Write a brief plan (numbered points with key quotes) in the margin. Time spent planning is never wasted.</li>
                </ul>
              </CardContent>
            </Card>

            {/* Step 4 */}
            <Card>
              <CardHeader>
                <CardTitle>Step 4: Writing &mdash; Structured Response Hitting All 4 skills (55&ndash;60 minutes)</CardTitle>
                <CardDescription>Write a sustained, analytical commentary. Quality over quantity.</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>&bull; <strong>Opening:</strong> Begin with a concise overview of the poem&rsquo;s subject, tone, and the poet&rsquo;s apparent purpose. Do not retell the poem.</li>
                  <li>&bull; <strong>Body paragraphs:</strong> Use the PEAL structure &mdash; <strong>P</strong>oint (what the poet does), <strong>E</strong>vidence (short embedded quotation), <strong>A</strong>nalysis (how the technique creates an effect), <strong>L</strong>ink (connect to theme or wider meaning).</li>
                  <li>&bull; <strong>Embed quotations:</strong> Weave short phrases into your sentences rather than copying out full lines. &ldquo;The poet&rsquo;s use of &lsquo;shattered&rsquo; suggests...&rdquo; is better than a block quote.</li>
                  <li>&bull; <strong>Analyse single words:</strong> Zoom in on individual word choices to demonstrate close reading. Explore connotations, sound, and ambiguity.</li>
                  <li>&bull; <strong>Cover form and structure:</strong> Comment on how stanza arrangement, line length, rhyme scheme, or enjambment contribute to meaning.</li>
                  <li>&bull; <strong>Personal response:</strong> Use phrases like &ldquo;The reader is left with a sense of...&rdquo; or &ldquo;This perhaps suggests...&rdquo; to show genuine engagement rather than assertion.</li>
                  <li>&bull; <strong>Conclusion:</strong> End with a comment on the poem&rsquo;s overall effect, the significance of the ending, or an unresolved tension.</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        <hr className="my-10 border-border" />

        {/* ── Key techniques to look for ────────────────────────── */}
        <section aria-labelledby="techniques-heading">
          <h2
            id="techniques-heading"
            className="text-2xl font-bold text-foreground"
          >
            Key Techniques to Look For
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Know these terms and, more importantly, know how to explain their
            effect. Naming a technique without analysis does not earn marks.
          </p>

          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                term: "Imagery",
                def: "Vivid descriptive language that creates a picture in the reader's mind. The foundation of all poetic analysis.",
              },
              {
                term: "Metaphor",
                def: "Describing something as if it IS something else. Creates layered meaning and invites the reader to see connections.",
              },
              {
                term: "Simile",
                def: "Comparison using 'like' or 'as'. Makes abstract ideas concrete and accessible to the reader.",
              },
              {
                term: "Personification",
                def: "Giving human qualities to non-human things. Creates emotional connection and atmosphere.",
              },
              {
                term: "Alliteration",
                def: "Repetition of initial consonant sounds. Creates rhythm, emphasis, or mimics the thing being described.",
              },
              {
                term: "Assonance",
                def: "Repetition of vowel sounds within words. Creates internal harmony, musicality, or a mournful, elongated effect.",
              },
              {
                term: "Enjambment",
                def: "A sentence running across a line break without punctuation. Creates momentum, urgency, or a sense of overflow.",
              },
              {
                term: "Caesura",
                def: "A pause within a line (full stop, comma, dash). Creates emphasis, hesitation, or a dramatic shift in thought.",
              },
              {
                term: "Rhyme scheme",
                def: "The pattern of rhymes at the end of lines (ABAB, AABB, etc.). Creates cohesion, expectation, or, when broken, surprise.",
              },
              {
                term: "Rhythm & metre",
                def: "The pattern of stressed and unstressed syllables. Iambic pentameter suggests formality; irregular metre can suggest turmoil.",
              },
              {
                term: "Tone shifts",
                def: "Changes in the speaker's attitude within the poem. Often signalled by conjunctions ('But', 'Yet') or a volta.",
              },
              {
                term: "Symbolism",
                def: "An object or image representing a deeper, abstract meaning. Adds layers of significance beyond the literal.",
              },
            ].map((t) => (
              <Card key={t.term} size="sm">
                <CardHeader>
                  <CardTitle>{t.term}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{t.def}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <hr className="my-10 border-border" />

        {/* ── Form and structure ────────────────────────────────── */}
        <section aria-labelledby="form-heading">
          <h2
            id="form-heading"
            className="text-2xl font-bold text-foreground"
          >
            How to Write About Form &amp; Structure
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Many students focus only on language. Writing about form and
            structure is what separates good responses from excellent ones.
          </p>

          <div className="mt-6 space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Form: The &ldquo;Shape&rdquo; of the Poem</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>&bull; <strong>Sonnet (14 lines):</strong> Traditionally associated with love, but subversions of the form are just as important. A sonnet about war or death deliberately borrows the form of love poetry to create irony.</li>
                  <li>&bull; <strong>Free verse:</strong> No fixed rhyme or metre. This is not &ldquo;lazy&rdquo; &mdash; it allows the poet freedom to mirror natural speech, thought patterns, or emotional chaos.</li>
                  <li>&bull; <strong>Dramatic monologue:</strong> A single speaker addresses a silent listener. Reveals character through what they say (and what they leave unsaid).</li>
                  <li>&bull; <strong>Stanza length:</strong> Regular stanzas suggest order and control. Irregular stanzas can suggest fragmentation or emotional instability.</li>
                  <li>&bull; <strong>Line length:</strong> Long lines create a flowing, expansive effect. Short lines create emphasis, urgency, or isolation.</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Structure: How the Poem &ldquo;Moves&rdquo;</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>&bull; <strong>Opening and closing:</strong> Compare the first and last lines. Has the speaker changed? Is there resolution or is the ending deliberately ambiguous?</li>
                  <li>&bull; <strong>Volta / turning point:</strong> Especially in sonnets, look for a shift around line 9 (Petrarchan) or before the final couplet (Shakespearean). In other poems, look for &ldquo;But&rdquo;, &ldquo;Yet&rdquo;, or &ldquo;However&rdquo;.</li>
                  <li>&bull; <strong>Enjambment:</strong> Lines that run on without punctuation create a sense of urgency or thoughts spilling over. The break between lines can also create a momentary double meaning.</li>
                  <li>&bull; <strong>Caesura:</strong> A mid-line pause (marked by punctuation) forces the reader to stop. This can create emphasis, dramatic effect, or mirror hesitation.</li>
                  <li>&bull; <strong>Repetition:</strong> Repeated words, phrases, or structures create emphasis, obsession, or a ritualistic quality.</li>
                  <li>&bull; <strong>Progression:</strong> Does the poem move from past to present? From specific to universal? From description to reflection? Identifying the poem&rsquo;s journey is a hallmark of sophisticated analysis.</li>
                </ul>
              </CardContent>
            </Card>

            <div className="rounded-lg border-l-4 border-primary bg-card p-5 shadow-md">
              <p className="text-xs font-semibold uppercase tracking-wide text-foreground">
                Marker tip
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                When discussing form and structure, always link your observation
                to <em>meaning</em>. Do not simply say &ldquo;the poet uses
                enjambment&rdquo;. Say <em>why</em> the enjambment matters:
                &ldquo;The enjambment between lines 3 and 4 creates a sense of
                the speaker&rsquo;s thoughts tumbling forward uncontrollably,
                mirroring the emotional overwhelm described in the imagery.&rdquo;
              </p>
            </div>
          </div>
        </section>

        <hr className="my-10 border-border" />

        {/* ── Developing personal response (Personal Response) ────────────────── */}
        <section aria-labelledby="personal-response-heading">
          <h2
            id="personal-response-heading"
            className="text-2xl font-bold text-foreground"
          >
            How to Develop a Personal Response
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            The Personal Response skill rewards genuine, thoughtful engagement with the poem. It is not
            about saying whether you &ldquo;liked&rdquo; it. It is about showing
            that you have thought independently about what the poem means and
            how it affects you as a reader.
          </p>

          <div className="mt-6 space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>What Personal Response Looks Like</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>&bull; <strong>Tentative language:</strong> Use &ldquo;perhaps&rdquo;, &ldquo;this could suggest&rdquo;, &ldquo;the reader might interpret this as&rdquo;. This shows you are thinking, not just asserting.</li>
                  <li>&bull; <strong>Alternative interpretations:</strong> Offer more than one reading: &ldquo;On one level this suggests X, but it could also imply Y.&rdquo; This demonstrates sophisticated thinking.</li>
                  <li>&bull; <strong>Emotional impact:</strong> Explain how the poem makes the reader feel and WHY: &ldquo;The abrupt ending leaves the reader with a sense of unease, as though the speaker&rsquo;s grief remains unresolved.&rdquo;</li>
                  <li>&bull; <strong>Wider connections:</strong> If the poem reminds you of universal human experiences (loss, love, conflict, identity), say so &mdash; but always ground your comments in the text.</li>
                  <li>&bull; <strong>Evaluative comments:</strong> Comment on why a particular technique is effective: &ldquo;The metaphor is particularly striking because it forces the reader to reconsider...&rdquo;</li>
                </ul>
              </CardContent>
            </Card>

            <div className="grid gap-3 sm:grid-cols-2">
              <div className="rounded-lg border border-red-500/30 bg-red-500/5 p-4">
                <p className="text-sm font-semibold text-red-400">Weak personal response</p>
                <p className="mt-2 text-sm text-muted-foreground italic">
                  &ldquo;I think this poem is very good because it uses lots of
                  techniques and makes the reader think.&rdquo;
                </p>
              </div>
              <div className="rounded-lg border border-green-500/30 bg-green-500/5 p-4">
                <p className="text-sm font-semibold text-green-400">Strong personal response</p>
                <p className="mt-2 text-sm text-muted-foreground italic">
                  &ldquo;The final image of the &lsquo;empty chair&rsquo; is
                  quietly devastating. Rather than describing grief directly,
                  the poet lets the absence speak for itself, and the reader is
                  left to fill the silence with their own understanding of
                  loss.&rdquo;
                </p>
              </div>
            </div>
          </div>
        </section>

        <hr className="my-10 border-border" />

        {/* ── Sample unseen poem with annotated model response ──── */}
        <section aria-labelledby="sample-heading">
          <h2
            id="sample-heading"
            className="text-2xl font-bold text-foreground"
          >
            Sample Unseen Poem with Annotated Model Response
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Below is an original practice poem followed by a model critical
            commentary demonstrating how to achieve a top-band response.
          </p>

          {/* The poem */}
          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Practice Poem: &ldquo;The Harbour at Dawn&rdquo;</CardTitle>
              <CardDescription>An original poem for unseen practice</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="whitespace-pre-line font-serif text-sm leading-loose text-foreground">
{`The boats are sleeping in the harbour mouth,
their masts like fingers pressed against the sky.
A gull screams once and turns towards the south.
The lighthouse blinks its slow, indifferent eye.

Below the wall, the water folds and sighs,
smoothing the stones it has been smoothing
for a thousand years. It does not tire.
It does not ask why the fishermen have gone,

why the nets hang empty on the pier,
heavy with nothing, dripping with the dark.
Only the wind remembers how to steer
a boat across the bay. Only the lark

still rises, singing, from the salted grass
as though the world were whole, as though
the harbour were not slowly filling up with glass
and silence, and the debris of the slow

forgetting that happens when a place
is left behind. The boats will rot.
The ropes will fray. The tide will erase
the names carved into every mooring spot.

But this morning, before the forgetting is done,
the harbour holds its breath. And waits. For no one.`}
              </div>
            </CardContent>
          </Card>

          {/* Question */}
          <div className="mt-4 rounded-lg border border-border bg-card p-5 shadow-md">
            <p className="text-xs font-semibold uppercase tracking-wide text-foreground">
              Practice question
            </p>
            <p className="mt-1 text-sm font-medium text-foreground">
              How does the poet convey a sense of loss and abandonment in
              &ldquo;The Harbour at Dawn&rdquo;?
            </p>
          </div>

          {/* Model response */}
          <div className="mt-4 rounded-lg border-l-4 border-primary bg-card p-5 shadow-md">
            <p className="text-xs font-semibold uppercase tracking-wide text-foreground">
              Model critical commentary
            </p>
            <div className="mt-3 space-y-4 text-sm leading-relaxed text-muted-foreground">
              <p>
                &ldquo;The Harbour at Dawn&rdquo; presents a once-thriving
                harbour that has been abandoned, using the natural landscape
                as both witness and metaphor for human departure. The poem&rsquo;s
                tone is elegiac &mdash; quiet, resigned, and suffused with a
                sense of inevitability rather than anger.
              </p>
              <p>
                <span className="font-semibold text-foreground">[Writer&rsquo;s Methods &mdash; Imagery &amp; Language]</span>{" "}
                The opening metaphor, &ldquo;boats are sleeping,&rdquo;
                personifies the vessels as dormant rather than dead, suggesting
                a fragile hope that they might wake. However, this is
                immediately complicated by the simile &ldquo;their masts like
                fingers pressed against the sky&rdquo; &mdash; the image of
                &lsquo;fingers pressed&rsquo; evokes supplication or prayer,
                as though the boats themselves are reaching out for help that
                will not come. The poet&rsquo;s choice of &lsquo;pressed&rsquo;
                rather than &lsquo;pointing&rsquo; or &lsquo;reaching&rsquo;
                creates a sense of gentle desperation rather than active
                resistance.
              </p>
              <p>
                <span className="font-semibold text-foreground">[Writer&rsquo;s Methods &mdash; Sound &amp; Personification]</span>{" "}
                The lighthouse &ldquo;blinks its slow, indifferent eye&rdquo;
                is a striking personification: it sees the harbour&rsquo;s
                decay but is &lsquo;indifferent&rsquo; to it. The word
                &lsquo;indifferent&rsquo; is carefully chosen &mdash; it
                implies not cruelty but apathy, reflecting the wider world&rsquo;s
                lack of concern for this forgotten place. The sibilance in
                &ldquo;water folds and sighs, / smoothing the stones&rdquo;
                creates a soft, repetitive sound that mirrors the endless,
                unthinking action of the sea, reinforcing the theme of time
                continuing regardless of human absence.
              </p>
              <p>
                <span className="font-semibold text-foreground">[Writer&rsquo;s Methods &mdash; Form &amp; Structure]</span>{" "}
                Structurally, the poem moves from description to reflection
                to prophecy. The opening stanzas observe; the middle stanzas
                introduce the concept of &ldquo;forgetting&rdquo;; and the
                final lines project into the future (&ldquo;The boats will
                rot. / The ropes will fray.&rdquo;). This progression mirrors
                the stages of abandonment itself. The use of enjambment is
                particularly effective across stanzas 4 and 5, where
                &ldquo;the slow // forgetting&rdquo; is itself slowed down by
                the line break, forcing the reader to enact the very process
                the poem describes. The short, declarative sentences in the
                final stanza (&ldquo;The boats will rot. The ropes will
                fray.&rdquo;) create a blunt, factual finality that contrasts
                with the lyrical descriptions earlier, as though the poem
                has stopped trying to beautify what is simply inevitable.
              </p>
              <p>
                <span className="font-semibold text-foreground">[Interpretation &mdash; Effects on Reader]</span>{" "}
                The image of nets &ldquo;heavy with nothing, dripping with the
                dark&rdquo; is perhaps the poem&rsquo;s most powerful paradox.
                Nets are designed to be heavy with fish; here, their heaviness
                is caused by absence itself. The phrase &lsquo;dripping with
                the dark&rsquo; transforms darkness into a liquid substance,
                creating an almost tactile sense of emptiness. The reader is
                made to feel that loss is not merely the removal of something
                but has its own oppressive, physical weight.
              </p>
              <p>
                <span className="font-semibold text-foreground">[Personal Response]</span>{" "}
                The final line &mdash; &ldquo;And waits. For no one.&rdquo;
                &mdash; is quietly devastating. The caesura before &ldquo;For
                no one&rdquo; creates a pause in which the reader momentarily
                expects a redemptive ending: perhaps someone will return,
                perhaps the harbour will be saved. The two-word sentence
                &ldquo;For no one&rdquo; extinguishes that hope. The poem
                does not rage against abandonment; it simply observes it with
                a resigned clarity that is, in some ways, more affecting than
                anger. The harbour becomes a symbol not just of a specific
                place but of anything &mdash; a relationship, a community, a
                way of life &mdash; that has been quietly left behind.
              </p>
            </div>
          </div>

          {/* Why this works */}
          <div className="mt-4 rounded-lg border border-primary/20 bg-primary/5 p-5">
            <p className="text-xs font-semibold text-foreground">
              Why this response scores highly:
            </p>
            <ul className="mt-2 space-y-1.5 text-sm text-muted-foreground">
              <li>&bull; Addresses all four Assessment Objectives explicitly</li>
              <li>&bull; Analyses specific words (&lsquo;pressed&rsquo;, &lsquo;indifferent&rsquo;) rather than just naming techniques</li>
              <li>&bull; Discusses form and structure (enjambment, sentence length, progression) as well as language</li>
              <li>&bull; Quotations are short and embedded, not block-quoted</li>
              <li>&bull; Offers alternative interpretations (&ldquo;perhaps&rdquo;, &ldquo;in some ways&rdquo;)</li>
              <li>&bull; Explains effects on the reader with specificity</li>
              <li>&bull; Concludes with a wider thematic point, showing genuine personal engagement</li>
            </ul>
          </div>
        </section>

        <hr className="my-10 border-border" />

        {/* ── Common pitfalls ───────────────────────────────────── */}
        <section aria-labelledby="pitfalls-heading">
          <h2
            id="pitfalls-heading"
            className="text-2xl font-bold text-foreground"
          >
            Common Pitfalls &amp; How to Avoid Them
          </h2>
          <div className="mt-6 space-y-3">
            {[
              {
                pitfall: "Retelling the poem",
                fix: "The marker knows what the poem says. Your job is to analyse HOW the poet creates effects, not to describe WHAT happens. Every sentence should contain analysis, not summary.",
              },
              {
                pitfall: "Feature-spotting without analysis",
                fix: "\"The poet uses alliteration\" earns zero marks. \"The alliteration of the harsh plosive 'b' in 'broken, burnt, buried' creates a percussive rhythm that conveys the violence of destruction\" earns marks. Always explain the EFFECT.",
              },
              {
                pitfall: "Ignoring form and structure",
                fix: "Many students write only about language. You must comment on how the poem is constructed: stanza arrangement, line length, enjambment, caesura, rhyme scheme, and overall progression.",
              },
              {
                pitfall: "Using vague language",
                fix: "Avoid empty phrases like \"this makes the reader think\" or \"this is effective\". Be specific: WHAT does the reader think? HOW is it effective? What emotion or idea is created?",
              },
              {
                pitfall: "Writing about the poet's life",
                fix: "This is an unseen poem. You know nothing about the poet. Do not invent biographical context. Focus entirely on what is in the text.",
              },
              {
                pitfall: "Quoting too much",
                fix: "Long block quotations waste time and show no analysis. Embed short phrases (2-5 words) within your sentences. This demonstrates that you can select and integrate evidence precisely.",
              },
              {
                pitfall: "No personal response",
                fix: "Personal Response requires you to engage personally with the poem. Use tentative language: \"perhaps\", \"this could suggest\", \"the reader is left feeling\". Offer alternative interpretations to show independent thought.",
              },
              {
                pitfall: "Running out of time",
                fix: "Spend 10-12 minutes reading, annotating, and planning. This is not wasted time. A planned response is always better than an unplanned one, even if it is slightly shorter.",
              },
            ].map((item) => (
              <div
                key={item.pitfall}
                className="flex items-start gap-3 rounded-lg border border-border bg-card p-4 shadow-md"
              >
                <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-red-500/10 text-xs font-bold text-red-400">
                  !
                </span>
                <div>
                  <p className="text-sm font-semibold text-foreground">
                    {item.pitfall}
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {item.fix}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <hr className="my-10 border-border" />

        {/* ── Level descriptors ─────────────────────────────────── */}
        <section aria-labelledby="levels-heading">
          <h2
            id="levels-heading"
            className="text-2xl font-bold text-foreground"
          >
            Level Descriptors Explained
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Understanding what markers are looking for at each level helps you
            target your response. Paper 4 is marked out of 25.
          </p>

          <div className="mt-6 space-y-4">
            {/* Top band */}
            <Card className="border-green-500/30">
              <CardHeader>
                <CardTitle>
                  <span className="mr-2 inline-flex items-center rounded-full bg-green-500/10 px-2.5 py-0.5 text-xs font-bold text-green-400">
                    20&ndash;25 marks
                  </span>
                  Outstanding to Excellent
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>&bull; <strong>Sustained, perceptive analysis</strong> that demonstrates a thorough understanding of the poem&rsquo;s meaning, tone, and purpose.</li>
                  <li>&bull; <strong>Detailed discussion of language, form, and structure</strong> with well-selected, embedded quotations analysed at word level.</li>
                  <li>&bull; <strong>Clear awareness of the poet&rsquo;s methods</strong> and their effects on the reader, explained with precision and nuance.</li>
                  <li>&bull; <strong>Confident personal response</strong> that offers alternative interpretations and connects specific details to wider themes.</li>
                  <li>&bull; <strong>Well-organised</strong> with a clear line of argument that develops logically from introduction to conclusion.</li>
                </ul>
              </CardContent>
            </Card>

            {/* Mid band */}
            <Card className="border-yellow-500/30">
              <CardHeader>
                <CardTitle>
                  <span className="mr-2 inline-flex items-center rounded-full bg-yellow-500/10 px-2.5 py-0.5 text-xs font-bold text-yellow-400">
                    10&ndash;15 marks
                  </span>
                  Competent to Good
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>&bull; <strong>Sound understanding</strong> of the poem with some relevant analysis, but may not sustain this throughout the entire response.</li>
                  <li>&bull; <strong>Some discussion of techniques</strong> with quotations used as evidence, though analysis may not always explore effects in detail.</li>
                  <li>&bull; <strong>Awareness of form or structure</strong> may be present but is likely to be limited to one or two observations rather than integrated throughout.</li>
                  <li>&bull; <strong>Personal response is present</strong> but may be asserted rather than developed: &ldquo;this is effective&rdquo; without full explanation of how or why.</li>
                  <li>&bull; <strong>Organisation is generally clear</strong> but the response may be somewhat uneven, with stronger and weaker paragraphs.</li>
                </ul>
              </CardContent>
            </Card>

            {/* Lower band */}
            <Card className="border-red-500/30">
              <CardHeader>
                <CardTitle>
                  <span className="mr-2 inline-flex items-center rounded-full bg-red-500/10 px-2.5 py-0.5 text-xs font-bold text-red-400">
                    Under 10 marks
                  </span>
                  Limited to Basic
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>&bull; <strong>Surface-level understanding</strong> that may retell or paraphrase the poem rather than analyse it.</li>
                  <li>&bull; <strong>Techniques may be identified</strong> (&ldquo;the poet uses a metaphor&rdquo;) but without meaningful analysis of their effect on the reader.</li>
                  <li>&bull; <strong>Little or no comment on form and structure</strong>. The response focuses entirely on content or language at a basic level.</li>
                  <li>&bull; <strong>No personal response</strong> or only vague, unsupported assertions (&ldquo;I liked this poem because it was interesting&rdquo;).</li>
                  <li>&bull; <strong>Poorly organised</strong>: may lack clear paragraphing or jump between points without logical connection.</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="mt-6 rounded-lg border-l-4 border-primary bg-card p-5 shadow-md">
            <p className="text-xs font-semibold uppercase tracking-wide text-foreground">
              The key difference between bands
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              The single biggest factor separating a 20+ response from a 10&ndash;15
              response is <strong>depth of analysis</strong>. A top-band response
              does not necessarily cover more techniques &mdash; it analyses fewer
              techniques in greater depth. It zooms in on individual words, explores
              connotations, considers alternative meanings, and always explains the
              effect on the reader. A mid-band response tends to identify techniques
              correctly but move on too quickly, without fully unpacking why the
              poet&rsquo;s choices matter.
            </p>
          </div>
        </section>

        {/* ── Back link ─────────────────────────────────────────── */}
        <div className="mt-12 flex items-center gap-2 text-sm">
          <Link
            href="/resources/english-literature/caie"
            className="font-medium text-foreground underline underline-offset-2 hover:text-primary"
          >
            &larr; Back to Cambridge IGCSE English Literature
          </Link>
        </div>
      </div>
    </>
  );
}
