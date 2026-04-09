import type { Metadata } from "next";
import Link from "next/link";
import { GradeTabs } from "@/components/model-answers/GradeTabs";
import { GradeBadge, GradeSummary } from "@/components/model-answers/GradeComponents";
import { GRADE_LEVELS } from "@/components/model-answers/grade-data";

/* ─── Metadata ───────────────────────────────────────────────── */

export const metadata: Metadata = {
  alternates: {
    canonical:
      "https://theenglishhub.app/resources/model-answers/creative-writing",
  },
  title: "Model Creative Writing Answers | The English Hub",
  description:
    "Grade 3, 5, 7, and 9 model creative writing responses for GCSE English. Descriptive and narrative writing with examiner commentary and technique annotations at every grade level.",
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
      <div className="text-sm leading-relaxed text-muted-foreground">
        {children}
      </div>
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
      <div className="prose prose-sm max-w-none space-y-4 leading-relaxed text-muted-foreground">
        {children}
      </div>
    </div>
  );
}

/* ─── Page ───────────────────────────────────────────────────── */

export default function CreativeWritingModelAnswersPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-primary/80 px-4 py-16 text-white sm:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-white/70">
            Model Answers
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Creative Writing
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/90">
            Full model descriptive and narrative responses at grade 3, 5, 7, and
            9, with annotations highlighting every technique and examiner
            insights on what earns each grade.
          </p>
        </div>
      </section>

      {/* Breadcrumb */}
      <nav className="mx-auto max-w-5xl px-4 pt-6" aria-label="Breadcrumb">
        <ol className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
          <li>
            <Link
              href="/"
              className="transition-colors hover:text-foreground"
            >
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
          <li className="font-medium text-foreground">Creative Writing</li>
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
                { id: "descriptive", label: "Descriptive Writing" },
                { id: "narrative", label: "Narrative Writing" },
                { id: "techniques", label: "Key Techniques" },
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
            {/* ─── DESCRIPTIVE WRITING ─────────────────────────── */}
            <Section id="descriptive" title="Descriptive Writing">
              <div className="mb-6 rounded-xl border border-border bg-card p-6 shadow-md">
                <p className="mb-2 text-xs font-bold uppercase tracking-wider text-primary">
                  Task
                </p>
                <p className="font-medium text-foreground">
                  Describe a busy market scene.
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  You could write about what you see, hear, smell, and feel.
                  Focus on creating a vivid sense of place.
                </p>
              </div>

              <GradeTabs defaultGrade={9}>
                {{
                  9: (
                    <>
                      <div className="mb-4 flex items-center gap-3">
                        <GradeBadge
                          grade="Grade 9 (Exceptional)"
                          color="bg-primary"
                        />
                        <span className="text-sm text-muted-foreground">
                          40/40
                        </span>
                      </div>
                      <AnswerCard>
                        <p>
                          <Annotation note="Single-sentence paragraph creates immediate impact. The sensory opening (sound) immerses the reader before any visual description.">
                            It began with sound.
                          </Annotation>
                        </p>
                        <p>
                          Before you saw the market, you heard it: a
                          <Annotation note="Tricolon of contrasting sounds creates a rich auditory landscape. The progression from 'hum' to 'clatter' to 'bark' increases intensity.">
                            low hum that swelled into a clatter, then a bark of
                            competing voices
                          </Annotation>
                          , each one clamouring to be heard above the rest. The air
                          itself seemed to vibrate,
                          <Annotation note="Synaesthesia — blending sound and physical sensation — is a sophisticated technique that creates a multi-sensory experience.">
                            thick with noise and the warm, greasy sweetness of
                            frying onions
                          </Annotation>
                          .
                        </p>
                        <p>
                          <Annotation note="Shift to visual. The zoom-in structure (wide shot to close-up) mirrors how a person would actually perceive the scene.">
                            Canvas awnings stretched overhead in patchwork strips of
                            rust-orange and faded blue
                          </Annotation>
                          , their edges fraying where the wind had worried at them
                          season after season. Beneath them, the stalls were
                          <Annotation note="Extended metaphor of the stalls as geological features gives weight and permanence to the scene.">
                            geological: great slabs of fruit arranged in terraces,
                            pyramids of clementines bright as traffic lights, crates
                            of apples tilting at precarious angles
                          </Annotation>
                          . A woman in a waxed apron presided over the nearest
                          display, her hands
                          <Annotation note="Precise, cinematic detail. 'Presided' elevates her role; the verb 'rearranging' suggests constant, practiced motion.">
                            never still, always rearranging, always angling a peach
                            to catch the light
                          </Annotation>
                          .
                        </p>
                        <p>
                          Between the stalls, the crowd moved with
                          <Annotation note="Personification of the crowd as a single organic entity. The 'its own logic' suggests the market has a life independent of any individual.">
                            a current of its own, unpredictable and self-correcting
                          </Annotation>
                          . Elbows nudged. Shoulders turned. A child was lifted,
                          briefly, above the
                          <Annotation note="Minor sentences (two-word structures) mimic the quick, fragmented impressions of being in a crowded space.">
                            tide of heads
                          </Annotation>
                          , her face split by a grin so wide it seemed borrowed from
                          someone twice her size.
                        </p>
                        <p>
                          And underneath everything &mdash; beneath the shouting, the
                          shuffling, the
                          <Annotation note="Circular structure: returns to sound, creating a satisfying sense of wholeness. The final sentence is deliberately calm amid the chaos.">
                            persistent bell of a cash register &mdash; there was a
                            quieter rhythm: the steady, unhurried heartbeat of a
                            place that had been doing this for a hundred years and
                            fully intended to do it for a hundred more
                          </Annotation>
                          .
                        </p>
                      </AnswerCard>
                      <ExaminerComment>
                        <p>
                          An exceptional response that demonstrates complete control
                          of the craft of descriptive writing. The piece opens with a
                          striking single-sentence paragraph, uses varied and
                          sophisticated sentence structures throughout, and deploys
                          figurative language with precision. The circular structure
                          &mdash; opening and closing with sound &mdash; shows
                          structural awareness. Vocabulary is ambitious but never
                          overwrought. Full marks: 40/40.
                        </p>
                      </ExaminerComment>
                      <GradeSummary
                        level={GRADE_LEVELS[0]}
                        points={[
                          "Sophisticated figurative language deployed with precision (synaesthesia, extended metaphor, personification)",
                          "Varied sentence structures for deliberate rhythmic and tonal effect",
                          "Circular structure shows confident structural control",
                          "Shows not tells — atmosphere is created through detail, never stated",
                          "Ambitious vocabulary that feels natural, never overwrought",
                          "Fluent movement between senses and perspectives (zoom in/out)",
                        ]}
                      />
                    </>
                  ),

                  7: (
                    <>
                      <div className="mb-4 flex items-center gap-3">
                        <GradeBadge
                          grade="Grade 7 (Strong)"
                          color="bg-green-600"
                        />
                        <span className="text-sm text-muted-foreground">
                          33/40
                        </span>
                      </div>
                      <AnswerCard>
                        <p>
                          <Annotation note="A more engaging opening than grade 5 — uses a sensory detail to set the scene. However, it lacks the boldness of the grade 9 single-sentence opener.">
                            The smell reached me before anything else: warm bread
                            and roasting chestnuts, carried on the wind like an
                            invitation.
                          </Annotation>
                        </p>
                        <p>
                          The market stretched out ahead, a
                          <Annotation note="Effective metaphor showing awareness of figurative language. The comparison is original but could be developed further.">
                            maze of canvas and colour
                          </Annotation>{" "}
                          that seemed to pulse with energy. Stalls lined both sides
                          of the narrow lane, their wooden frames sagging under the
                          weight of produce.
                          <Annotation note="Good specific detail — naming the fruits adds vividness. The verb 'tumbling' adds a sense of abundance.">
                            Oranges, plums, and fat green grapes tumbled over the
                            edges of crates
                          </Annotation>
                          , while hand-written signs advertised prices in thick black
                          marker.
                        </p>
                        <p>
                          A man at the nearest stall was
                          <Annotation note="Effective use of dialogue to bring the scene alive. The specific detail of 'red-faced' shows observation.">
                            bellowing prices with a grin on his red face
                          </Annotation>
                          . &ldquo;Two for a pound, love! You won&apos;t find
                          better!&rdquo; He tossed an apple from hand to hand while
                          he waited for customers, never quite looking at the fruit,
                          as though his hands knew the routine without him.
                        </p>
                        <p>
                          The crowd moved in unpredictable waves. People
                          <Annotation note="Attempts to vary sentence rhythm with a list. Effective but not as controlled as the grade 9 minor sentences.">
                            squeezed past each other, paused at displays, craned
                            their necks to read menus
                          </Annotation>
                          . Children weaved between legs at knee height. Somewhere
                          behind me, a musician was playing a guitar, the melody
                          rising and falling beneath the chatter like a
                          <Annotation note="Simile is effective and original. Comparing melody to a current shows control of figurative language.">
                            current beneath the surface of a river
                          </Annotation>
                          .
                        </p>
                        <p>
                          By the time I left, the sun had dipped behind the rooftops
                          and the stall-holders were beginning to pack up, folding
                          their awnings like closing books.
                          <Annotation note="A thoughtful closing image that gives the piece a sense of finality. The simile is effective.">
                            The market was winding down, but its warmth stayed with
                            me.
                          </Annotation>
                        </p>
                      </AnswerCard>
                      <ExaminerComment>
                        <p>
                          A strong response with clear sensory engagement and some
                          effective figurative language. Sentence variety is present
                          but not as controlled as at grade 9. To reach grade 9, the
                          student should use more sophisticated structural techniques
                          (circular structure, zoom effects) and develop extended
                          metaphors rather than single similes. Marks: 33/40.
                        </p>
                      </ExaminerComment>
                      <GradeSummary
                        level={GRADE_LEVELS[1]}
                        points={[
                          "Sensory detail used across multiple senses (smell, sight, sound)",
                          "Some effective figurative language — similes are original",
                          "Specific, observed details bring the scene to life",
                          "Some sentence variety, though not as deliberately controlled as grade 9",
                          "Mostly shows rather than tells, with occasional lapses",
                          "A clear sense of structure with a distinct beginning and ending",
                        ]}
                      />
                    </>
                  ),

                  5: (
                    <>
                      <div className="mb-4 flex items-center gap-3">
                        <GradeBadge
                          grade="Grade 5 (Solid)"
                          color="bg-amber-500"
                        />
                        <span className="text-sm text-muted-foreground">
                          28/40
                        </span>
                      </div>
                      <AnswerCard>
                        <p>
                          The market was{" "}
                          <Annotation note="Adequate opening but lacks atmosphere. A stronger opening would use a sensory detail to immerse the reader immediately.">
                            busy and noisy
                          </Annotation>
                          . People pushed past each other trying to get to the
                          different stalls. There were{" "}
                          <Annotation note="A list of items shows awareness of setting but lacks the vivid, specific detail needed for higher marks.">
                            fruit stalls, clothes stalls, and stalls selling hot food
                          </Annotation>
                          . The smell of cooking filled the air and made my stomach
                          rumble.
                        </p>
                        <p>
                          A woman with a{" "}
                          <Annotation note="Some attempt at specific detail, which is good. Could be developed further with figurative language.">
                            bright red scarf
                          </Annotation>{" "}
                          shouted about her prices. &ldquo;Two pounds a bowl! Get
                          your soup here!&rdquo; she yelled. Her voice was loud and
                          carried over the noise of the crowd. Next to her, a man was
                          selling watches laid out on a
                          <Annotation note="Competent detail but the writing remains largely literal. Figurative language would elevate this.">
                            blue velvet cloth
                          </Annotation>
                          .
                        </p>
                        <p>
                          The ground was wet and slippery from the morning rain.
                          <Annotation note="A simile — good technique, though 'like a river' is a cliche. Original comparisons earn higher marks.">
                            Puddles reflected the colourful awnings like a river of
                            colours
                          </Annotation>
                          . Children ran between the stalls, laughing and chasing
                          each other. It was a{" "}
                          <Annotation note="Telling rather than showing — a common grade 5 habit. Instead of stating the atmosphere, the writer should let the reader feel it through the details.">
                            lively and exciting place to be
                          </Annotation>
                          .
                        </p>
                      </AnswerCard>
                      <ExaminerComment>
                        <p>
                          This response demonstrates a generally competent approach
                          with some awareness of descriptive techniques. However, the
                          writing is largely literal and sometimes tells rather than
                          shows. Sentence structures are mostly simple or compound
                          with limited variety. Marks: 28/40.
                        </p>
                      </ExaminerComment>
                      <GradeSummary
                        level={GRADE_LEVELS[2]}
                        points={[
                          "Engages multiple senses but without depth or sustained effect",
                          "Some figurative language but tends towards cliches (like a river)",
                          "Adequate structure but lacks a deliberate opening or closing strategy",
                          "Limited sentence variety — mostly simple and compound sentences",
                          "Tends to tell rather than show ('lively and exciting')",
                          "Some specific detail but relies on general descriptions",
                        ]}
                      />
                    </>
                  ),

                  3: (
                    <>
                      <div className="mb-4 flex items-center gap-3">
                        <GradeBadge
                          grade="Grade 3 (Developing)"
                          color="bg-red-500"
                        />
                        <span className="text-sm text-muted-foreground">
                          18/40
                        </span>
                      </div>
                      <AnswerCard>
                        <p>
                          <Annotation note="Very basic opening that names the subject but provides no sensory detail or atmosphere. The reader has no sense of being there.">
                            The market was really busy.
                          </Annotation>{" "}
                          There were lots of people there and they were all walking
                          around looking at things. There were stalls everywhere
                          selling different things.
                        </p>
                        <p>
                          <Annotation note="The detail 'loud' tells rather than shows. What does the loudness sound like? Specific sounds would bring this to life.">
                            It was really loud because everyone was talking
                          </Annotation>{" "}
                          and some people were shouting. A man was selling fish and it
                          <Annotation note="This is the only sensory detail beyond sight. It names the smell but does not describe it — 'smelled bad' is vague.">
                            smelled really bad
                          </Annotation>
                          . There was also a lady selling cakes and they looked nice.
                        </p>
                        <p>
                          <Annotation note="Simple narrative statement. The piece reads more like a recount of events than a descriptive piece.">
                            I walked around for a bit and then I bought some food.
                          </Annotation>{" "}
                          It was hot and tasty. The market was fun and I had a
                          <Annotation note="Ends with a general statement. No closing technique, no return to an image, no sense of the piece being shaped.">
                            good time there
                          </Annotation>
                          .
                        </p>
                      </AnswerCard>
                      <ExaminerComment>
                        <p>
                          This response shows basic awareness of the task but
                          struggles to move beyond simple statements. The writing is
                          heavily reliant on telling and lacks any figurative
                          language. Sentence structures are entirely simple with no
                          variety. To improve, the student should practise using
                          sensory details and attempt similes or metaphors. Marks:
                          18/40.
                        </p>
                      </ExaminerComment>
                      <GradeSummary
                        level={GRADE_LEVELS[3]}
                        points={[
                          "Relies heavily on telling rather than showing ('really busy', 'smelled bad')",
                          "No figurative language — descriptions are entirely literal",
                          "Simple sentence structures with no deliberate variety",
                          "Reads more like a recount than a descriptive piece",
                          "Vocabulary is basic and repetitive ('really', 'nice', 'good')",
                          "No structural awareness — no deliberate opening, closing, or pacing",
                        ]}
                      />
                    </>
                  ),
                }}
              </GradeTabs>
            </Section>

            {/* ─── NARRATIVE WRITING ─────────────────────────────── */}
            <Section id="narrative" title="Narrative Writing">
              <div className="mb-6 rounded-xl border border-border bg-card p-6 shadow-md">
                <p className="mb-2 text-xs font-bold uppercase tracking-wider text-primary">
                  Task
                </p>
                <p className="font-medium text-foreground">
                  Write about a time when everything changed.
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  You may wish to write about your own experiences or create a
                  fictional narrative.
                </p>
              </div>

              <GradeTabs defaultGrade={9}>
                {{
                  9: (
                    <>
                      <div className="mb-4 flex items-center gap-3">
                        <GradeBadge
                          grade="Grade 9 (Exceptional)"
                          color="bg-primary"
                        />
                        <span className="text-sm text-muted-foreground">
                          40/40
                        </span>
                      </div>
                      <AnswerCard>
                        <p>
                          <Annotation note="In medias res opening drops the reader into the emotional heart of the story. The small, specific detail ('the wrong mug') makes the moment feel painfully real.">
                            She used the wrong mug. That was how I knew.
                          </Annotation>
                        </p>
                        <p>
                          My mother was a creature of habit &mdash;
                          <Annotation note="The rule of three establishes routine, making the disruption that follows more powerful.">
                            same mug, same chair, same radio station murmuring
                            beneath the tick of the kitchen clock
                          </Annotation>
                          . But that morning she sat at the table with a white mug I
                          did not recognise, turning it between her palms as though it
                          were something fragile, something she might drop.
                          <Annotation note="The mug becomes a symbol — an object that carries the weight of what has not yet been said.">
                            The tea inside it had gone cold. I could tell by the
                            stillness of the surface.
                          </Annotation>
                        </p>
                        <p>
                          &ldquo;Sit down,&rdquo; she said, and the two words
                          <Annotation note="Showing not telling: the emotional devastation is conveyed through an extended metaphor rather than stated directly.">
                            rearranged the furniture of my life
                          </Annotation>
                          .
                        </p>
                        <p>
                          I do not remember the exact words she used. I remember the
                          clock. I remember the
                          <Annotation note="Anaphoric repetition ('I remember') combined with sensory fragments creates a fragmented, trauma-like memory.">
                            way the light fell through the kitchen blind in thin,
                            surgical lines across the table. I remember the sound of
                            next door&apos;s dog barking, indifferent, absurdly
                            normal
                          </Annotation>
                          . The world outside continued. Inside, something had quietly
                          and irreversibly broken.
                        </p>
                        <p>
                          <Annotation note="Time shift handled elegantly. The paragraph break signals the passage of time without needing to state it.">
                            Three weeks later, I stood at the end of the street with
                            a rucksack on my back and a suitcase that pulled to the
                            left.
                          </Annotation>{" "}
                          Jake was there. He handed me a photograph without speaking
                          &mdash;
                          <Annotation note="Powerful restraint. The absence of dialogue says more than words could.">
                            the two of us at Whitby last July, sand in our hair,
                            squinting against the sun. I folded it carefully and put
                            it in my coat pocket, where it would bend, I knew, into
                            the shape of my body
                          </Annotation>
                          .
                        </p>
                        <p>
                          In the car, I pressed my forehead against the glass and
                          watched the houses
                          <Annotation note="Active verb choice: the houses 'peel away' rather than the narrator leaving them. This shifts agency.">
                            peel away like layers of something I had not known was
                            mine until it was taken
                          </Annotation>
                          .
                        </p>
                        <p>
                          <Annotation note="Circular structure: returns to the mug motif. The final image is deliberately small and domestic, reinforcing the theme that change lives in the ordinary.">
                            The new house smelled of paint and someone else&apos;s
                            cooking. In the kitchen, there were mugs already in the
                            cupboard, left by the previous owners. I chose one at
                            random. It did not matter which. None of them were hers.
                          </Annotation>
                        </p>
                      </AnswerCard>
                      <ExaminerComment>
                        <p>
                          A beautifully crafted narrative that demonstrates mastery of
                          voice, structure, and technique. The in medias res opening
                          is arresting, and the mug motif is sustained throughout to
                          create a satisfying circular structure. The writer shows
                          extraordinary restraint. Full marks: 40/40.
                        </p>
                      </ExaminerComment>
                      <GradeSummary
                        level={GRADE_LEVELS[0]}
                        points={[
                          "In medias res opening drops the reader straight into the emotional core",
                          "Sustained motif (the mug) creates a circular, cohesive structure",
                          "Extraordinary restraint — emotion shown through physical detail, never stated",
                          "Distinctive, assured narrative voice throughout",
                          "Varied sentence structures used for deliberate rhythmic effect",
                          "Every detail earns its place — nothing is wasted or decorative",
                        ]}
                      />
                    </>
                  ),

                  7: (
                    <>
                      <div className="mb-4 flex items-center gap-3">
                        <GradeBadge
                          grade="Grade 7 (Strong)"
                          color="bg-green-600"
                        />
                        <span className="text-sm text-muted-foreground">
                          32/40
                        </span>
                      </div>
                      <AnswerCard>
                        <p>
                          <Annotation note="Opens with a clear attempt at atmosphere. The simile is original, though the opening is more conventional than the grade 9 in medias res.">
                            The letter sat on the kitchen table like an uninvited
                            guest.
                          </Annotation>{" "}
                          My mother stood by the window, her back to me, her fingers
                          laced together as though she were holding herself in place.
                          I knew, before she spoke, that something had shifted.
                        </p>
                        <p>
                          &ldquo;We need to talk,&rdquo; she said, and her voice was
                          careful,
                          <Annotation note="Good use of simile with an original comparison. The word 'measured' is precise vocabulary.">
                            measured, like someone stepping across ice
                          </Annotation>
                          . She told me about the job. About Manchester. About how it
                          was an opportunity she could not turn down. Each sentence
                          landed with a kind of finality, as though she had rehearsed
                          them.
                        </p>
                        <p>
                          <Annotation note="Effective use of internal response. However, 'my stomach dropped' is a common expression rather than an original image.">
                            My stomach dropped. I wanted to argue, to shout, but
                            nothing came out.
                          </Annotation>{" "}
                          I thought about my friends, my room, the park at the end of
                          the road where Jake and I had spent every summer since we
                          were ten.
                          <Annotation note="The list of memories is effective and specific. It shows what the character stands to lose.">
                            All of it, suddenly, felt like something I was already
                            losing.
                          </Annotation>
                        </p>
                        <p>
                          The day we left, Jake came to say goodbye. He gave me a
                          photo of us at the beach. Neither of us knew what to say,
                          so we just stood there, hands in our pockets,
                          <Annotation note="Good moment of restraint — the silence speaks for itself.">
                            watching the removal van pull away with our furniture
                            inside
                          </Annotation>
                          .
                        </p>
                        <p>
                          <Annotation note="The ending attempts reflection but is slightly rushed. A stronger close would use a specific image rather than a general statement.">
                            The new house was smaller and smelled of fresh paint. It
                            did not feel like home. But then, I thought, home was
                            never really about the building.
                          </Annotation>
                        </p>
                      </AnswerCard>
                      <ExaminerComment>
                        <p>
                          A well-crafted narrative with a clear sense of voice and
                          some effective moments. Some expressions are conventional,
                          and the ending feels slightly rushed. To reach grade 9, the
                          student should develop a sustained motif and use more
                          original imagery throughout. Marks: 32/40.
                        </p>
                      </ExaminerComment>
                      <GradeSummary
                        level={GRADE_LEVELS[1]}
                        points={[
                          "Engaging opening with effective simile, though conventional in structure",
                          "Specific, concrete details ground the piece emotionally",
                          "Some effective figurative language, occasionally relying on common expressions",
                          "Clear sense of voice and narrative perspective",
                          "Good but not fully sustained structural control",
                          "Ending shows reflection but could be more developed",
                        ]}
                      />
                    </>
                  ),

                  5: (
                    <>
                      <div className="mb-4 flex items-center gap-3">
                        <GradeBadge
                          grade="Grade 5 (Solid)"
                          color="bg-amber-500"
                        />
                        <span className="text-sm text-muted-foreground">
                          26/40
                        </span>
                      </div>
                      <AnswerCard>
                        <p>
                          <Annotation note="Chronological opening is clear but unengaging. A more effective approach would be to start in medias res.">
                            It all started on a normal Tuesday morning.
                          </Annotation>{" "}
                          I woke up, got dressed and went downstairs for breakfast
                          like I always did. My mum was in the kitchen making toast.
                          Everything seemed normal.
                        </p>
                        <p>
                          Then{" "}
                          <Annotation note="'Then' is a weak connective for a pivotal moment.">
                            my mum told me
                          </Annotation>{" "}
                          we were moving to a different city because of her new job. I
                          was
                          <Annotation note="Telling the reader about the emotion rather than showing it through action, dialogue, or physical sensation.">
                            shocked and upset
                          </Annotation>
                          . I didn&apos;t want to leave my friends or my school. I
                          went to my room and
                          <Annotation note="Some attempt at showing emotion through action, which is better than the 'shocked and upset' statement.">
                            slammed the door
                          </Annotation>
                          .
                        </p>
                        <p>
                          Over the next few weeks, I had to say goodbye to everyone.
                          My best friend Jake gave me a
                          <Annotation note="A specific, concrete detail that adds emotional weight. This is the strongest moment in the piece.">
                            photo of us at the beach last summer
                          </Annotation>
                          . I tried not to cry but it was really hard. On the day we
                          left, I looked out of the car window and watched my street
                          get smaller and smaller until it disappeared.
                        </p>
                        <p>
                          <Annotation note="The resolution is rushed. A stronger response would develop the emotional complexity of the ending.">
                            When we arrived at the new house, it didn&apos;t feel
                            like home. But I knew that eventually it would.
                          </Annotation>
                        </p>
                      </AnswerCard>
                      <ExaminerComment>
                        <p>
                          A clear narrative with some effective moments (the photo,
                          watching the street disappear). However, the piece relies
                          heavily on telling rather than showing emotion.
                          Marks: 26/40.
                        </p>
                      </ExaminerComment>
                      <GradeSummary
                        level={GRADE_LEVELS[2]}
                        points={[
                          "Clear chronological structure but lacks a deliberate opening strategy",
                          "Some effective moments of specific detail",
                          "Relies on telling emotions ('shocked and upset') rather than showing them",
                          "Limited sentence variety — mostly simple and compound structures",
                          "Narrative voice is functional but not distinctive",
                          "Resolution is rushed and underdeveloped",
                        ]}
                      />
                    </>
                  ),

                  3: (
                    <>
                      <div className="mb-4 flex items-center gap-3">
                        <GradeBadge
                          grade="Grade 3 (Developing)"
                          color="bg-red-500"
                        />
                        <span className="text-sm text-muted-foreground">
                          16/40
                        </span>
                      </div>
                      <AnswerCard>
                        <p>
                          <Annotation note="Very basic opening that could be the start of any story. No attempt to engage the reader or create intrigue.">
                            One day my mum said we were moving house.
                          </Annotation>{" "}
                          I was really sad because I didn&apos;t want to go. I liked
                          my school and I had lots of friends there.
                        </p>
                        <p>
                          <Annotation note="The writing reads like a list of events rather than a shaped narrative.">
                            We had to pack up all our stuff and put it in boxes.
                          </Annotation>{" "}
                          It took ages and I was bored. My friend came round to say
                          bye and we were
                          <Annotation note="States the emotion directly. What did the sadness look like? Showing through action or dialogue would be far more effective.">
                            both sad
                          </Annotation>
                          . He said he would text me.
                        </p>
                        <p>
                          Then we got in the car and drove to the new house.
                          <Annotation note="The journey — potentially the most emotional part — is skipped entirely. This is a missed opportunity.">
                            It took a long time to get there.
                          </Annotation>{" "}
                          The new house was ok but it wasn&apos;t the same as my old
                          one.
                          <Annotation note="The ending is abrupt and offers no reflection or emotional depth.">
                            I think everything changed after that.
                          </Annotation>
                        </p>
                      </AnswerCard>
                      <ExaminerComment>
                        <p>
                          This response tells a basic story but struggles to develop
                          it beyond a simple recount. The writing is almost entirely
                          telling with no figurative language and no sentence variety.
                          Key emotional moments are rushed or skipped.
                          Marks: 16/40.
                        </p>
                      </ExaminerComment>
                      <GradeSummary
                        level={GRADE_LEVELS[3]}
                        points={[
                          "Reads as a simple recount rather than a shaped narrative",
                          "Almost entirely telling — emotions stated directly ('I was sad')",
                          "No figurative language or imagery attempted",
                          "Key emotional moments are rushed or skipped entirely",
                          "No sentence variety — all simple sentences of similar length",
                          "No distinctive voice or deliberate vocabulary choices",
                        ]}
                      />
                    </>
                  ),
                }}
              </GradeTabs>
            </Section>

            {/* ─── KEY TECHNIQUES ──────────────────────────────── */}
            <Section id="techniques" title="Key Techniques Annotated">
              <p className="mb-6 leading-relaxed text-muted-foreground">
                These are the techniques that separate good creative writing from
                exceptional creative writing. Study how they are used in the
                grade 9 examples above.
              </p>

              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  {
                    name: "Show, Don't Tell",
                    desc: "Convey emotions through actions, sensory details, and imagery rather than naming them directly.",
                    example:
                      "Grade 3: 'I was really sad.' Grade 5: 'I was shocked and upset.' Grade 9: 'The two words rearranged the furniture of my life.'",
                  },
                  {
                    name: "Motif / Symbolism",
                    desc: "Repeat an image or object throughout to create cohesion and deeper meaning.",
                    example:
                      "The mug appears in the opening and closing, carrying the weight of change and loss.",
                  },
                  {
                    name: "Varied Sentence Structures",
                    desc: "Alternate between short, punchy sentences and longer, more complex ones for rhythm and emphasis.",
                    example:
                      "'That was how I knew.' vs. 'I watched the houses peel away like layers of something I had not known was mine until it was taken.'",
                  },
                  {
                    name: "Circular Structure",
                    desc: "End the piece by returning to an image, idea, or setting from the opening.",
                    example:
                      "Both the descriptive and narrative grade 9 pieces use circular structures for a sense of completeness.",
                  },
                  {
                    name: "Precise Verbs",
                    desc: "Choose specific, evocative verbs rather than generic ones to create vivid imagery.",
                    example:
                      "'Presided' instead of 'stood'; 'peel away' instead of 'disappear'.",
                  },
                  {
                    name: "Restraint",
                    desc: "Sometimes what you leave out is more powerful than what you include. Let the reader fill in the emotional gaps.",
                    example:
                      "Jake hands over the photograph 'without speaking' — the silence says everything.",
                  },
                ].map((tech) => (
                  <div
                    key={tech.name}
                    className="rounded-xl border border-border bg-card p-5 shadow-md"
                  >
                    <h4 className="font-bold text-foreground">{tech.name}</h4>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {tech.desc}
                    </p>
                    <div className="mt-3 rounded-lg border border-border bg-card px-4 py-3">
                      <p className="text-sm italic text-muted-foreground">
                        {tech.example}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </Section>
          </div>
        </div>
      </div>
    </>
  );
}
