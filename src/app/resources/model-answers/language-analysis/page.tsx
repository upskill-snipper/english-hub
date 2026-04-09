import type { Metadata } from "next";
import Link from "next/link";
import { GradeTabs } from "@/components/model-answers/GradeTabs";
import { GradeBadge, GradeSummary } from "@/components/model-answers/GradeComponents";
import { GRADE_LEVELS } from "@/components/model-answers/grade-data";

/* ─── Metadata ───────────────────────────────────────────────── */

export const metadata: Metadata = {
  alternates: {
    canonical:
      "https://theenglishhub.app/resources/model-answers/language-analysis",
  },
  title: "Model Language Analysis Answers | The English Hub",
  description:
    "Grade 3, 5, 7, and 9 model language analysis responses with examiner commentary, technique annotations, and side-by-side comparisons showing what makes the difference between grades.",
};

/* ─── Annotation component ───────────────────────────────────── */

function Annotation({
  children,
  note,
}: {
  children: React.ReactNode;
  note: string;
}) {
  return (
    <span className="group relative">
      <span className="cursor-help rounded border-b-2 border-dashed border-primary/40 bg-primary/10 px-1 py-0.5 text-foreground">
        {children}
      </span>
      <span className="pointer-events-none absolute bottom-full left-1/2 z-10 mb-2 w-60 -translate-x-1/2 rounded-lg bg-primary px-3 py-2 text-xs leading-relaxed text-white opacity-0 shadow-lg transition-opacity group-hover:pointer-events-auto group-hover:opacity-100">
        {note}
        <span className="absolute left-1/2 top-full -translate-x-1/2 border-4 border-transparent border-t-primary" />
      </span>
    </span>
  );
}

/* ─── Examiner comment ───────────────────────────────────────── */

function ExaminerComment({ children }: { children: React.ReactNode }) {
  return (
    <div className="mt-4 rounded-lg border-l-4 border-primary bg-primary/5 p-4">
      <p className="mb-1 text-xs font-bold uppercase tracking-wider text-primary">
        Examiner Commentary
      </p>
      <p className="text-sm leading-relaxed text-muted-foreground">
        {children}
      </p>
    </div>
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
      <h2 className="mb-6 border-b-2 border-primary/20 pb-3 text-2xl font-bold text-foreground">
        {title}
      </h2>
      {children}
    </section>
  );
}

/* ─── Answer card wrapper ────────────────────────────────────── */

function AnswerCard({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-xl border border-border bg-card p-6 shadow-md">
      <div className="prose prose-sm max-w-none leading-relaxed text-muted-foreground">
        {children}
      </div>
    </div>
  );
}

/* ─── Page ───────────────────────────────────────────────────── */

export default function LanguageAnalysisPage() {
  return (
    <>
      {/* Hero */}
      <section className="border-b bg-gradient-to-b from-primary/[0.06] to-transparent px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
            Model Answers
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Language Analysis
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            See exactly how top students respond to &ldquo;How does the writer
            use language...&rdquo; questions. Grade 3, 5, 7, and 9 examples with
            full examiner commentary.
          </p>
        </div>
      </section>

      {/* Breadcrumb */}
      <nav className="mx-auto max-w-5xl px-4 pt-6" aria-label="Breadcrumb">
        <ol className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
          <li>
            <Link href="/" className="transition-colors hover:text-foreground">
              Home
            </Link>
          </li>
          <li>/</li>
          <li>
            <Link
              href="/resources"
              className="transition-colors hover:text-foreground"
            >
              Resources
            </Link>
          </li>
          <li>/</li>
          <li>
            <Link
              href="/resources/model-answers"
              className="transition-colors hover:text-foreground"
            >
              Model Answers
            </Link>
          </li>
          <li>/</li>
          <li className="font-medium text-foreground">Language Analysis</li>
        </ol>
      </nav>

      {/* Content */}
      <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-[220px_1fr] lg:gap-10">
          {/* Sidebar TOC */}
          <aside className="hidden lg:block">
            <nav className="sticky top-24 space-y-1 text-sm">
              <p className="mb-2 text-xs font-bold uppercase tracking-wider text-foreground">
                Contents
              </p>
              {[
                { id: "question", label: "The Question" },
                { id: "responses", label: "Model Responses" },
                { id: "comparison", label: "Grade Comparison" },
              ].map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="block rounded-lg px-3 py-1.5 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </aside>

          {/* Main content */}
          <div className="space-y-16">
            {/* ─── THE QUESTION ─────────────────────────────────── */}
            <Section id="question" title="The Question">
              <div className="rounded-xl border border-border bg-card p-6 shadow-md">
                <p className="mb-2 text-xs font-bold uppercase tracking-wider text-primary">
                  AQA English Language Paper 1, Question 2
                </p>
                <p className="font-medium leading-relaxed text-foreground">
                  How does the writer use language to describe the setting of the
                  storm?
                </p>
                <p className="mt-2 text-sm text-muted-foreground">
                  You could include the writer&apos;s choice of words and
                  phrases, language features and techniques, and sentence forms.
                </p>
                <div className="mt-4 rounded-lg bg-muted p-4">
                  <p className="mb-2 text-xs font-bold uppercase tracking-wider text-muted-foreground">
                    Source Text (Extract)
                  </p>
                  <p className="text-sm italic leading-relaxed text-muted-foreground">
                    &ldquo;The sky had turned the colour of a bruise, deep
                    purples bleeding into blacks that swallowed the last traces of
                    daylight. Wind tore through the narrow streets like a living
                    thing, rattling shutters, upending bins, sending newspapers
                    spiralling into the air like startled birds. Rain came not in
                    drops but in sheets, hammering against the pavement with a
                    relentless, percussive fury that drowned out every other
                    sound. The old oak at the corner of Marsh Lane groaned under
                    the assault, its branches clawing at the sky as though
                    begging for mercy. Somewhere in the distance, thunder rolled
                    &mdash; a low, ominous growl that seemed to come from the
                    earth itself.&rdquo;
                  </p>
                </div>
              </div>
            </Section>

            {/* ─── RESPONSES ─────────────────────────────────────── */}
            <Section id="responses" title="Model Responses">
              <GradeTabs defaultGrade={9}>
                {{
                  /* ── Grade 9 ────────────────────────────── */
                  9: (
                    <>
                      <div className="mb-4 flex items-center gap-3">
                        <GradeBadge
                          grade="Grade 9 (Exceptional)"
                          color="bg-primary"
                        />
                        <span className="text-sm text-muted-foreground">
                          8 / 8
                        </span>
                      </div>
                      <AnswerCard>
                        <p>
                          <Annotation note="Conceptualised opening: immediately frames an overarching interpretation rather than diving into technique-spotting.">
                            The writer constructs the storm not merely as a weather
                            event but as an elemental antagonist, deploying a
                            sustained pattern of personification and violent imagery
                            that strips humanity of its authority over the natural
                            world.
                          </Annotation>
                        </p>
                        <p className="mt-4">
                          The extract opens with a metaphor of physical trauma: the
                          sky has &ldquo;turned the colour of a bruise.&rdquo; The
                          passive construction here is significant &mdash;
                          <Annotation note="Excellent: analyses the grammatical choice (passive voice) and links it to a wider interpretation about human helplessness.">
                            the sky has not changed but has been changed, as though
                            acted upon by a force beyond comprehension
                          </Annotation>
                          . The verb &ldquo;bleeding&rdquo; extends this corporeal
                          metaphor, while the phrase &ldquo;swallowed the last traces
                          of daylight&rdquo; introduces a predatory quality:
                          <Annotation note="Perceptive analysis of how the writer shifts between semantic fields to build a layered portrayal of the storm.">
                            the storm is not simply dark but actively consuming the
                            light, shifting from victim (&ldquo;bruise&rdquo;) to
                            predator (&ldquo;swallowed&rdquo;) within a single
                            sentence
                          </Annotation>
                          .
                        </p>
                        <p className="mt-4">
                          The wind is characterised as &ldquo;a living thing,&rdquo;
                          and the writer sustains this personification through a
                          <Annotation note="Analyses the rhythm and structure of the sentence, not just the content. This is a hallmark of a top-band response.">
                            breathless asyndetic list &mdash; &ldquo;rattling
                            shutters, upending bins, sending newspapers&rdquo;
                            &mdash; whose accumulative rhythm mirrors the relentless,
                            escalating force of the gale
                          </Annotation>
                          . The simile &ldquo;like startled birds&rdquo; is a
                          momentary shift in register: amid the violence, the
                          newspapers become almost graceful, yet the word
                          &ldquo;startled&rdquo; ensures that even this image is
                          underpinned by fear. The effect is one of
                          <Annotation note="Sophisticated synthesis: links micro-level language choices to a macro-level emotional effect on the reader.">
                            dissonance &mdash; beauty and terror coexisting in a
                            single image
                          </Annotation>
                          .
                        </p>
                        <p className="mt-4">
                          Perhaps most powerful is the pathetic fallacy of the oak
                          tree, whose branches are described as &ldquo;clawing at the
                          sky as though begging for mercy.&rdquo;
                          <Annotation note="Outstanding: explores the reversal of the natural order and connects it to the writer's broader thematic purpose.">
                            The reversal is complete: a tree, traditionally a symbol
                            of strength and endurance, is reduced to a supplicant,
                            and the sky it reaches towards has itself been
                            &ldquo;bruised&rdquo; and &ldquo;swallowed.&rdquo; There
                            is no refuge in this landscape
                          </Annotation>
                          . The final image of thunder as &ldquo;a low, ominous growl
                          that seemed to come from the earth itself&rdquo; closes the
                          trap: the threat is above, around, and now beneath, leaving
                          the reader with a visceral sense of enclosure and
                          powerlessness.
                        </p>
                      </AnswerCard>
                      <ExaminerComment>
                        This is a sophisticated, perceptive response that moves well
                        beyond technique identification. The student offers a
                        conceptualised reading from the outset, analyses grammatical
                        and structural choices alongside imagery, and tracks the
                        shifting semantic field across the extract. The analysis is
                        precise and evaluative. Full marks: 8/8.
                      </ExaminerComment>
                      <GradeSummary
                        level={GRADE_LEVELS[0]}
                        points={[
                          "Opens with a conceptualised interpretation rather than technique-spotting",
                          "Analyses grammatical choices (passive voice, asyndeton) not just imagery",
                          "Tracks shifts in semantic field across the whole extract",
                          "Precise, evaluative vocabulary ('dissonance', 'corporeal', 'supplicant')",
                          "Embeds quotations fluently — single words and short phrases woven into analysis",
                          "Shows how micro-level language choices create macro-level effects on the reader",
                        ]}
                      />
                    </>
                  ),

                  /* ── Grade 7 ────────────────────────────── */
                  7: (
                    <>
                      <div className="mb-4 flex items-center gap-3">
                        <GradeBadge
                          grade="Grade 7 (Strong)"
                          color="bg-green-600"
                        />
                        <span className="text-sm text-muted-foreground">
                          6&ndash;7 / 8
                        </span>
                      </div>
                      <AnswerCard>
                        <p>
                          The writer presents the storm as an overwhelming, almost
                          violent force through carefully chosen language. The opening
                          metaphor &ldquo;the colour of a bruise&rdquo; is striking
                          because it
                          <Annotation note="Good: moves beyond identification to explore the specific connotations of 'bruise' and links to the semantic field of violence.">
                            draws on the semantic field of injury, implying the sky
                            itself has been wounded by the storm
                          </Annotation>
                          . The progression from &ldquo;deep purples&rdquo; to
                          &ldquo;blacks&rdquo; suggests a
                          <Annotation note="Effective analysis of how colour imagery creates a sense of escalation.">
                            darkening that mirrors the escalating intensity of the
                            weather
                          </Annotation>
                          , while the verb &ldquo;bleeding&rdquo; reinforces the
                          sense of damage and creates an unsettling, almost visceral
                          image.
                        </p>
                        <p className="mt-4">
                          The personification of the wind as &ldquo;a living
                          thing&rdquo; is developed through a
                          <Annotation note="Strong point: identifies how a list of verbs builds an effect rather than just naming the technique.">
                            tricolon of violent verbs &mdash;
                            &ldquo;rattling,&rdquo; &ldquo;upending,&rdquo;
                            &ldquo;sending&rdquo;
                          </Annotation>{" "}
                          &mdash; which creates a breathless sense of chaos. The
                          simile &ldquo;like startled birds&rdquo; briefly introduces
                          a sense of panic into the scene, as though even inanimate
                          objects are afraid of the storm&apos;s power.
                        </p>
                        <p className="mt-4">
                          The{" "}
                          <Annotation note="Effective focus on sound and rhythm. Could push further by exploring why 'percussive' specifically is effective.">
                            plosive sounds in &ldquo;percussive&rdquo; and
                            &ldquo;pavement&rdquo;
                          </Annotation>{" "}
                          create an auditory quality that mirrors the rain&apos;s
                          aggressive impact. The verb &ldquo;hammering&rdquo;
                          suggests relentless, mechanical force, reducing the rain to
                          a weapon that &ldquo;drowned out every other sound,&rdquo;
                          leaving the reader with a sense of total sensory overwhelm.
                        </p>
                      </AnswerCard>
                      <ExaminerComment>
                        A clear step up from grade 5. This response explores
                        connotations rather than simply identifying techniques. The
                        student links language choices to effects with more precision
                        and considers how techniques work together. To reach grade 9,
                        the response could engage more with grammatical and
                        structural choices, and open with a conceptualised
                        interpretation. Marks: 7/8.
                      </ExaminerComment>
                      <GradeSummary
                        level={GRADE_LEVELS[1]}
                        points={[
                          "Explores connotations rather than just identifying techniques",
                          "Links language choices to effects with precision",
                          "Uses wider terminology ('semantic field', 'plosive', 'tricolon')",
                          "Considers how techniques work together to build effects",
                          "Shorter, well-chosen quotations with focused analysis",
                          "Emerging personal response, though not yet fully conceptualised",
                        ]}
                      />
                    </>
                  ),

                  /* ── Grade 5 ────────────────────────────── */
                  5: (
                    <>
                      <div className="mb-4 flex items-center gap-3">
                        <GradeBadge
                          grade="Grade 5 (Solid)"
                          color="bg-amber-500"
                        />
                        <span className="text-sm text-muted-foreground">
                          5&ndash;6 / 8
                        </span>
                      </div>
                      <AnswerCard>
                        <p>
                          The writer uses language to describe the storm as scary and
                          powerful. The sky is described as &ldquo;
                          <Annotation note="Identifies the metaphor but does not fully explore its connotations.">
                            the colour of a bruise
                          </Annotation>
                          &rdquo; which is a metaphor that suggests the sky looks
                          damaged and hurt, like it has been injured. This makes the
                          reader think the storm is violent.
                        </p>
                        <p className="mt-4">
                          The writer also uses a simile when they say the wind went
                          through the streets &ldquo;
                          <Annotation note="Identifies the technique but the analysis is surface-level.">
                            like a living thing
                          </Annotation>
                          .&rdquo; This makes the wind seem alive and dangerous. The
                          verb &ldquo;rattling&rdquo; shows that the wind is strong
                          and noisy.
                        </p>
                        <p className="mt-4">
                          Furthermore, the rain is described as coming &ldquo;in
                          sheets&rdquo; rather than drops, which shows how{" "}
                          <Annotation note="Uses 'heavy' as analysis — this is quite vague. A stronger response would explore the connotations more precisely.">
                            heavy
                          </Annotation>{" "}
                          the rain is. The word &ldquo;hammering&rdquo; is
                          <Annotation note="Correct identification but limited exploration. What does 'hammering' specifically connote?">
                            onomatopoeia
                          </Annotation>{" "}
                          which makes the reader feel like they can hear the rain.
                        </p>
                      </AnswerCard>
                      <ExaminerComment>
                        This response identifies relevant language features
                        (metaphor, simile, onomatopoeia) and makes some attempt to
                        explain their effects. However, the analysis remains at a
                        surface level: the student tends to identify and explain
                        rather than analyse. To move to grade 7, the student needs to
                        explore connotations more precisely. Marks: 5/8.
                      </ExaminerComment>
                      <GradeSummary
                        level={GRADE_LEVELS[2]}
                        points={[
                          "Identifies techniques correctly (metaphor, simile, onomatopoeia)",
                          "Some attempt to explain effects, though analysis is surface-level",
                          "Uses generic phrases like 'makes the reader feel' and 'shows how'",
                          "Quotations are relevant but sometimes too long",
                          "Point-by-point structure with limited linking between ideas",
                          "Basic but accurate terminology",
                        ]}
                      />
                    </>
                  ),

                  /* ── Grade 3 ────────────────────────────── */
                  3: (
                    <>
                      <div className="mb-4 flex items-center gap-3">
                        <GradeBadge
                          grade="Grade 3 (Developing)"
                          color="bg-red-500"
                        />
                        <span className="text-sm text-muted-foreground">
                          3&ndash;4 / 8
                        </span>
                      </div>
                      <AnswerCard>
                        <p>
                          <Annotation note="Retells the content rather than analysing the language. The student describes what happens in the extract rather than how the writer creates effects.">
                            The writer describes a really bad storm. The sky is dark
                            and it is really windy. The rain is very heavy and loud.
                          </Annotation>
                        </p>
                        <p className="mt-4">
                          The writer says the sky is &ldquo;the colour of a
                          bruise&rdquo; which means it is
                          <Annotation note="Identifies a technique but the explanation is a simple translation ('means it is dark purple') rather than an analysis of effect or connotation.">
                            dark purple
                          </Annotation>
                          . This shows the storm is bad.
                        </p>
                        <p className="mt-4">
                          <Annotation note="The student spots the simile but does not name it or explain its effect. 'Scary' is vague — what kind of fear does the writer create?">
                            The wind is described as &ldquo;like a living
                            thing&rdquo; which is scary because wind is not alive
                          </Annotation>
                          . The rain is &ldquo;hammering&rdquo; which shows it is
                          <Annotation note="'Really loud and heavy' is descriptive rather than analytical. The student is translating the quote rather than exploring its connotations.">
                            really loud and heavy
                          </Annotation>
                          .
                        </p>
                      </AnswerCard>
                      <ExaminerComment>
                        This response shows some awareness of the text and makes a
                        basic attempt to comment on language. However, it largely
                        retells the content or translates quotations into simpler
                        language rather than analysing effects. Techniques are not
                        named, and the analysis does not go beyond the surface. To
                        improve, the student should name techniques, use the word
                        &ldquo;suggests&rdquo; or &ldquo;implies&rdquo; rather than
                        &ldquo;shows,&rdquo; and explain how the writer makes the
                        reader feel. Marks: 3/8.
                      </ExaminerComment>
                      <GradeSummary
                        level={GRADE_LEVELS[3]}
                        points={[
                          "Largely retells content rather than analysing language",
                          "Translates quotations into simpler language instead of exploring effects",
                          "Does not name techniques (metaphor, simile, personification)",
                          "Uses vague evaluative words ('scary', 'bad', 'loud')",
                          "No subject-specific terminology",
                          "No consideration of the writer's purpose or the reader's response",
                        ]}
                      />
                    </>
                  ),
                }}
              </GradeTabs>
            </Section>

            {/* ─── COMPARISON ──────────────────────────────────── */}
            <Section id="comparison" title="What Makes the Difference?">
              <p className="mb-6 leading-relaxed text-muted-foreground">
                Understanding what separates each grade boundary is the key to
                improvement. Here is a side-by-side breakdown of how the four
                responses differ:
              </p>

              <div className="overflow-x-auto">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr>
                      <th className="border border-border bg-muted p-3 text-left font-bold text-foreground">
                        Skill
                      </th>
                      <th className="border border-border bg-card p-3 text-left font-bold text-red-600">
                        Grade 3
                      </th>
                      <th className="border border-border bg-card p-3 text-left font-bold text-amber-600">
                        Grade 5
                      </th>
                      <th className="border border-border bg-card p-3 text-left font-bold text-green-600">
                        Grade 7
                      </th>
                      <th className="border border-border bg-card p-3 text-left font-bold text-foreground">
                        Grade 9
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-border p-3 font-medium text-foreground">
                        Technique Identification
                      </td>
                      <td className="border border-border p-3 text-muted-foreground">
                        Spots features but does not name them
                      </td>
                      <td className="border border-border p-3 text-muted-foreground">
                        Names techniques correctly
                      </td>
                      <td className="border border-border p-3 text-muted-foreground">
                        Identifies and links related techniques
                      </td>
                      <td className="border border-border p-3 text-muted-foreground">
                        Embeds identification within analysis; does not
                        &ldquo;spot&rdquo;
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-border p-3 font-medium text-foreground">
                        Analysis of Effect
                      </td>
                      <td className="border border-border p-3 text-muted-foreground">
                        Translates or retells rather than analyses
                      </td>
                      <td className="border border-border p-3 text-muted-foreground">
                        &ldquo;This makes the reader feel...&rdquo;
                      </td>
                      <td className="border border-border p-3 text-muted-foreground">
                        Explores specific connotations with some depth
                      </td>
                      <td className="border border-border p-3 text-muted-foreground">
                        Precise, evaluative analysis of how and why effects are
                        created
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-border p-3 font-medium text-foreground">
                        Use of Terminology
                      </td>
                      <td className="border border-border p-3 text-muted-foreground">
                        No subject-specific terminology
                      </td>
                      <td className="border border-border p-3 text-muted-foreground">
                        Basic but accurate (&ldquo;metaphor,&rdquo;
                        &ldquo;simile&rdquo;)
                      </td>
                      <td className="border border-border p-3 text-muted-foreground">
                        Wider range (&ldquo;semantic field,&rdquo;
                        &ldquo;plosive&rdquo;)
                      </td>
                      <td className="border border-border p-3 text-muted-foreground">
                        Integrated and precise (&ldquo;asyndetic,&rdquo;
                        &ldquo;dissonance,&rdquo; &ldquo;register&rdquo;)
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-border p-3 font-medium text-foreground">
                        Conceptualised Response
                      </td>
                      <td className="border border-border p-3 text-muted-foreground">
                        None &mdash; retelling content
                      </td>
                      <td className="border border-border p-3 text-muted-foreground">
                        Limited &mdash; point-by-point
                      </td>
                      <td className="border border-border p-3 text-muted-foreground">
                        Emerging &mdash; some linking between points
                      </td>
                      <td className="border border-border p-3 text-muted-foreground">
                        Clear overarching interpretation from the start
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-border p-3 font-medium text-foreground">
                        Quotation Use
                      </td>
                      <td className="border border-border p-3 text-muted-foreground">
                        Long quotations with minimal comment
                      </td>
                      <td className="border border-border p-3 text-muted-foreground">
                        Longer quotations, sometimes under-analysed
                      </td>
                      <td className="border border-border p-3 text-muted-foreground">
                        Shorter, well-chosen quotations
                      </td>
                      <td className="border border-border p-3 text-muted-foreground">
                        Single words and phrases embedded fluently within
                        sentences
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Key takeaways */}
              <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <div className="rounded-xl border-2 border-border bg-card p-5">
                  <h3 className="font-bold text-red-600">
                    Grade 3 &rarr; 5
                  </h3>
                  <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                    <li>&bull; Name the technique you spot</li>
                    <li>
                      &bull; Use &ldquo;suggests&rdquo; instead of
                      &ldquo;shows&rdquo;
                    </li>
                    <li>&bull; Explain the effect on the reader</li>
                    <li>&bull; Stop retelling &mdash; start analysing</li>
                  </ul>
                </div>
                <div className="rounded-xl border-2 border-border bg-card p-5">
                  <h3 className="font-bold text-amber-600">
                    Grade 5 &rarr; 7
                  </h3>
                  <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                    <li>&bull; Move from identifying to exploring</li>
                    <li>&bull; Use shorter, more precise quotations</li>
                    <li>&bull; Link techniques to the semantic field</li>
                    <li>
                      &bull; Avoid generic phrases like &ldquo;makes the reader
                      feel&rdquo;
                    </li>
                  </ul>
                </div>
                <div className="rounded-xl border-2 border-border bg-card p-5">
                  <h3 className="font-bold text-green-600">
                    Grade 7 &rarr; 9
                  </h3>
                  <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                    <li>&bull; Open with a conceptualised interpretation</li>
                    <li>&bull; Analyse grammar and sentence structure</li>
                    <li>&bull; Track shifts across the whole extract</li>
                    <li>&bull; Show how techniques work together</li>
                  </ul>
                </div>
                <div className="rounded-xl border-2 border-border bg-card p-5">
                  <h3 className="font-bold text-foreground">Top Tips</h3>
                  <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                    <li>
                      &bull; Quality over quantity &mdash; fewer points, deeper
                      analysis
                    </li>
                    <li>
                      &bull; Use &ldquo;perhaps&rdquo; to explore alternative
                      interpretations
                    </li>
                    <li>&bull; Always return to the question focus</li>
                    <li>&bull; Read the extract twice before writing</li>
                  </ul>
                </div>
              </div>
            </Section>
          </div>
        </div>
      </div>
    </>
  );
}
