import type { Metadata } from "next";
import Link from "next/link";

/* ─── Metadata ───────────────────────────────────────────────── */

export const metadata: Metadata = {
  title: "Model Creative Writing Answers | The English Hub",
  description:
    "Grade 5 and grade 9 model creative writing responses for GCSE English. Descriptive and narrative writing with examiner commentary and technique annotations.",
};

/* ─── Annotation component ───────────────────────────────────── */

function Annotation({ children, note }: { children: React.ReactNode; note: string }) {
  return (
    <span className="group relative">
      <span className="rounded bg-primary/10 px-1 py-0.5 text-foreground border-b-2 border-dashed border-[#2E86C1]/40 cursor-help">
        {children}
      </span>
      <span className="pointer-events-none absolute bottom-full left-1/2 z-10 mb-2 w-60 -translate-x-1/2 rounded-lg bg-[#1A5276] px-3 py-2 text-xs leading-relaxed text-white opacity-0 shadow-lg transition-opacity group-hover:pointer-events-auto group-hover:opacity-100">
        {note}
        <span className="absolute left-1/2 top-full -translate-x-1/2 border-4 border-transparent border-t-[#1A5276]" />
      </span>
    </span>
  );
}

/* ─── Grade badge ────────────────────────────────────────────── */

function GradeBadge({ grade, color }: { grade: string; color: string }) {
  return (
    <span className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-sm font-bold text-white ${color}`}>
      {grade}
    </span>
  );
}

/* ─── Examiner comment ───────────────────────────────────────── */

function ExaminerComment({ children }: { children: React.ReactNode }) {
  return (
    <div className="mt-4 rounded-lg border-l-4 border-[#2E86C1] bg-primary/5 p-4">
      <p className="mb-1 text-xs font-bold uppercase tracking-wider text-primary">
        Examiner Commentary
      </p>
      <div className="text-sm leading-relaxed text-muted-foreground">{children}</div>
    </div>
  );
}

/* ─── Section wrapper ────────────────────────────────────────── */

function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="scroll-mt-24">
      <h2 className="mb-6 text-2xl font-bold text-foreground border-b-2 border-[#2E86C1]/20 pb-3">
        {title}
      </h2>
      {children}
    </section>
  );
}

/* ─── Page ───────────────────────────────────────────────────── */

export default function CreativeWritingModelAnswersPage() {
  return (
    <>

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#1A5276] to-[#1A5276]/80 px-4 py-16 text-white sm:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary/80">
            Model Answers
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Creative Writing
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/90">
            Full model descriptive and narrative responses at grade 5 and grade 9, with
            annotations highlighting every technique and examiner insights on what earns top marks.
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
          <li><Link href="/resources/model-answers" className="hover:text-foreground transition-colors">Model Answers</Link></li>
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
              <p className="mb-2 font-bold text-foreground uppercase tracking-wider text-xs">Contents</p>
              {[
                { id: "desc-5", label: "Descriptive: Grade 5" },
                { id: "desc-9", label: "Descriptive: Grade 9" },
                { id: "narr-5", label: "Narrative: Grade 5" },
                { id: "narr-9", label: "Narrative: Grade 9" },
                { id: "techniques", label: "Key Techniques" },
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

            {/* ─── DESCRIPTIVE GRADE 5 ─────────────────────────── */}
            <Section id="desc-5" title="Descriptive Writing &mdash; Grade 5">
              <div className="mb-4 flex items-center gap-3">
                <GradeBadge grade="Grade 5" color="bg-amber-500" />
                <span className="text-sm text-muted-foreground">Task: Describe a busy market scene</span>
              </div>

              <div className="rounded-xl border border-border bg-card p-6 shadow-md">
                <div className="prose prose-sm max-w-none text-muted-foreground leading-relaxed space-y-4">
                  <p>
                    The market was <Annotation note="Adequate opening but lacks atmosphere. A stronger opening would use a sensory detail to immerse the reader immediately.">busy and noisy</Annotation>.
                    People pushed past each other trying to get to the different stalls.
                    There were <Annotation note="A list of items shows awareness of setting but lacks the vivid, specific detail needed for higher marks.">fruit stalls, clothes stalls, and stalls selling hot food</Annotation>.
                    The smell of cooking filled the air and made my stomach rumble.
                  </p>
                  <p>
                    A woman with a <Annotation note="Some attempt at specific detail, which is good. Could be developed further with figurative language.">bright red scarf</Annotation> shouted
                    about her prices. &ldquo;Two pounds a bowl! Get your soup here!&rdquo; she yelled.
                    Her voice was loud and carried over the noise of the crowd.
                    Next to her, a man was selling watches laid out on a
                    <Annotation note="Competent detail but the writing remains largely literal. Figurative language would elevate this.">blue velvet cloth</Annotation>.
                  </p>
                  <p>
                    The ground was wet and slippery from the morning rain.
                    <Annotation note="A simile — good technique, though 'like a river' is a cliche. Original comparisons earn higher marks.">Puddles
                    reflected the colourful awnings like a river of colours</Annotation>.
                    Children ran between the stalls, laughing and chasing each other.
                    It was a <Annotation note="Telling rather than showing — a common grade 5 habit. Instead of stating the atmosphere, the writer should let the reader feel it through the details.">lively and exciting place to be</Annotation>.
                  </p>
                </div>
              </div>

              <ExaminerComment>
                <p>
                  This response demonstrates a generally competent approach with some awareness of descriptive techniques.
                  There is a clear attempt to engage the senses (sound, smell, sight) and some use of figurative language.
                  However, the writing is largely literal and sometimes tells rather than shows (&ldquo;lively and exciting&rdquo;).
                  Sentence structures are mostly simple or compound with limited variety. To improve, the student should
                  vary sentence openings, use more original figurative language, and focus on creating atmosphere through
                  specific, carefully chosen details rather than general statements. Marks: 28/40.
                </p>
              </ExaminerComment>
            </Section>

            {/* ─── DESCRIPTIVE GRADE 9 ─────────────────────────── */}
            <Section id="desc-9" title="Descriptive Writing &mdash; Grade 9">
              <div className="mb-4 flex items-center gap-3">
                <GradeBadge grade="Grade 9" color="bg-[#1A5276]" />
                <span className="text-sm text-muted-foreground">Task: Describe a busy market scene</span>
              </div>

              <div className="rounded-xl border border-border bg-card p-6 shadow-md">
                <div className="prose prose-sm max-w-none text-muted-foreground leading-relaxed space-y-4">
                  <p>
                    <Annotation note="Single-sentence paragraph creates immediate impact. The sensory opening (sound) immerses the reader before any visual description.">
                      It began with sound.
                    </Annotation>
                  </p>
                  <p>
                    Before you saw the market, you heard it: a
                    <Annotation note="Tricolon of contrasting sounds creates a rich auditory landscape. The progression from 'hum' to 'clatter' to 'bark' increases intensity.">
                      low hum that swelled into a clatter, then a bark of competing voices
                    </Annotation>,
                    each one clamouring to be heard above the rest. The air itself seemed to vibrate,
                    <Annotation note="Synaesthesia — blending sound and physical sensation — is a sophisticated technique that creates a multi-sensory experience.">
                      thick with noise and the warm, greasy sweetness of frying onions
                    </Annotation>.
                  </p>
                  <p>
                    <Annotation note="Shift to visual. The zoom-in structure (wide shot to close-up) mirrors how a person would actually perceive the scene.">
                      Canvas awnings stretched overhead in patchwork strips of rust-orange and faded blue
                    </Annotation>,
                    their edges fraying where the wind had worried at them season after season. Beneath them,
                    the stalls were
                    <Annotation note="Extended metaphor of the stalls as geological features gives weight and permanence to the scene.">
                      geological: great slabs of fruit arranged in terraces, pyramids of clementines
                      bright as traffic lights, crates of apples tilting at precarious angles
                    </Annotation>.
                    A woman in a waxed apron presided over the nearest display, her hands
                    <Annotation note="Precise, cinematic detail. 'Presided' elevates her role; the verb 'rearranging' suggests constant, practiced motion.">
                      never still, always rearranging, always angling a peach to catch the light
                    </Annotation>.
                  </p>
                  <p>
                    Between the stalls, the crowd moved with
                    <Annotation note="Personification of the crowd as a single organic entity. The 'its own logic' suggests the market has a life independent of any individual.">
                      a current of its own, unpredictable and self-correcting
                    </Annotation>.
                    Elbows nudged. Shoulders turned. A child was lifted, briefly, above the
                    <Annotation note="Minor sentences (two-word structures) mimic the quick, fragmented impressions of being in a crowded space.">
                      tide of heads
                    </Annotation>,
                    her face split by a grin so wide it seemed borrowed from someone twice her size.
                  </p>
                  <p>
                    And underneath everything &mdash; beneath the shouting, the shuffling, the
                    <Annotation note="Circular structure: returns to sound, creating a satisfying sense of wholeness. The final sentence is deliberately calm amid the chaos.">
                      persistent bell of a cash register &mdash; there was a quieter rhythm: the steady,
                      unhurried heartbeat of a place that had been doing this for a hundred years
                      and fully intended to do it for a hundred more
                    </Annotation>.
                  </p>
                </div>
              </div>

              <ExaminerComment>
                <p>
                  An exceptional response that demonstrates complete control of the craft of descriptive writing.
                  The piece opens with a striking single-sentence paragraph, uses varied and sophisticated sentence
                  structures throughout, and deploys figurative language with precision (geological metaphor, crowd as current,
                  synaesthesia). The writer moves fluently between senses, zooms in and out, and creates a strong sense of
                  atmosphere without ever resorting to telling. The circular structure &mdash; opening and closing with sound &mdash;
                  shows structural awareness. Vocabulary is ambitious but never overwrought. Full marks: 40/40.
                </p>
              </ExaminerComment>
            </Section>

            {/* ─── NARRATIVE GRADE 5 ───────────────────────────── */}
            <Section id="narr-5" title="Narrative Writing &mdash; Grade 5">
              <div className="mb-4 flex items-center gap-3">
                <GradeBadge grade="Grade 5" color="bg-amber-500" />
                <span className="text-sm text-muted-foreground">Task: Write about a time when everything changed</span>
              </div>

              <div className="rounded-xl border border-border bg-card p-6 shadow-md">
                <div className="prose prose-sm max-w-none text-muted-foreground leading-relaxed space-y-4">
                  <p>
                    <Annotation note="Chronological opening is clear but unengaging. A more effective approach would be to start in medias res or with a flash-forward.">
                      It all started on a normal Tuesday morning.
                    </Annotation>{" "}
                    I woke up, got dressed and went downstairs for breakfast like I always did.
                    My mum was in the kitchen making toast. Everything seemed normal.
                  </p>
                  <p>
                    Then <Annotation note="'Then' is a weak connective for a pivotal moment. The abruptness could work, but here it feels accidental rather than deliberate.">my mum told me</Annotation> we
                    were moving to a different city because of her new job. I was
                    <Annotation note="Telling the reader about the emotion rather than showing it through action, dialogue, or physical sensation.">shocked and upset</Annotation>.
                    I didn&apos;t want to leave my friends or my school. I went to my room and
                    <Annotation note="Some attempt at showing emotion through action, which is better than the 'shocked and upset' statement.">slammed the door</Annotation>.
                  </p>
                  <p>
                    Over the next few weeks, I had to say goodbye to everyone.
                    My best friend Jake gave me a
                    <Annotation note="A specific, concrete detail that adds emotional weight. This is the strongest moment in the piece.">photo of us at the beach last summer</Annotation>.
                    I tried not to cry but it was really hard. On the day we left, I looked out of the car window
                    and watched my street get smaller and smaller until it disappeared.
                  </p>
                  <p>
                    <Annotation note="The resolution is rushed. A stronger response would develop the emotional complexity of the ending.">
                      When we arrived at the new house, it didn&apos;t feel like home. But I knew that eventually it would.
                    </Annotation>
                  </p>
                </div>
              </div>

              <ExaminerComment>
                <p>
                  A clear narrative with a logical structure and some effective moments (the photo, watching the street disappear).
                  However, the piece relies heavily on telling rather than showing emotion, and the opening is generic. Sentence
                  variety is limited, and the narrative voice lacks distinctiveness. The resolution is underdeveloped. To improve,
                  the student should consider a more engaging opening, use dialogue and sensory detail to convey emotion, and
                  spend more time on the most significant moments rather than narrating events in sequence. Marks: 26/40.
                </p>
              </ExaminerComment>
            </Section>

            {/* ─── NARRATIVE GRADE 9 ───────────────────────────── */}
            <Section id="narr-9" title="Narrative Writing &mdash; Grade 9">
              <div className="mb-4 flex items-center gap-3">
                <GradeBadge grade="Grade 9" color="bg-[#1A5276]" />
                <span className="text-sm text-muted-foreground">Task: Write about a time when everything changed</span>
              </div>

              <div className="rounded-xl border border-border bg-card p-6 shadow-md">
                <div className="prose prose-sm max-w-none text-muted-foreground leading-relaxed space-y-4">
                  <p>
                    <Annotation note="In medias res opening drops the reader into the emotional heart of the story. The small, specific detail ('the wrong mug') makes the moment feel painfully real.">
                      She used the wrong mug. That was how I knew.
                    </Annotation>
                  </p>
                  <p>
                    My mother was a creature of habit &mdash;
                    <Annotation note="The rule of three establishes routine, making the disruption that follows more powerful. The rhythmic parallel structure creates a sense of domestic ritual.">
                      same mug, same chair, same radio station murmuring beneath the tick of the kitchen clock
                    </Annotation>.
                    But that morning she sat at the table with a white mug I did not recognise, turning it
                    between her palms as though it were something fragile, something she might drop.
                    <Annotation note="The mug becomes a symbol — an object that carries the weight of what has not yet been said. This is a sophisticated use of pathetic fallacy and symbolism combined.">
                      The tea inside it had gone cold. I could tell by the stillness of the surface.
                    </Annotation>
                  </p>
                  <p>
                    &ldquo;Sit down,&rdquo; she said, and the two words
                    <Annotation note="Showing not telling: the emotional devastation is conveyed through an extended metaphor rather than stated directly.">
                      rearranged the furniture of my life
                    </Annotation>.
                  </p>
                  <p>
                    I do not remember the exact words she used. I remember the clock. I remember the
                    <Annotation note="Anaphoric repetition ('I remember') combined with sensory fragments creates a fragmented, trauma-like memory — perfectly mimicking how significant moments are actually recalled.">
                      way the light fell through the kitchen blind in thin, surgical lines across the table.
                      I remember the sound of next door&apos;s dog barking, indifferent, absurdly normal
                    </Annotation>.
                    The world outside continued. Inside, something had quietly and irreversibly broken.
                  </p>
                  <p>
                    <Annotation note="Time shift handled elegantly. The paragraph break signals the passage of time without needing to state it.">
                      Three weeks later, I stood at the end of the street with a rucksack on my back
                      and a suitcase that pulled to the left.
                    </Annotation>{" "}
                    Jake was there. He handed me a photograph without speaking &mdash;
                    <Annotation note="Powerful restraint. The absence of dialogue says more than words could. The detail of the photograph bending is a micro-moment that carries enormous emotional weight.">
                      the two of us at Whitby last July, sand in our hair, squinting against the sun.
                      I folded it carefully and put it in my coat pocket, where it would bend,
                      I knew, into the shape of my body
                    </Annotation>.
                  </p>
                  <p>
                    In the car, I pressed my forehead against the glass and watched the houses
                    <Annotation note="Active verb choice: the houses 'peel away' rather than the narrator leaving them. This shifts agency and creates a sense of the world leaving the narrator behind.">
                      peel away like layers of something I had not known was mine until it was taken
                    </Annotation>.
                  </p>
                  <p>
                    <Annotation note="Circular structure: returns to the mug motif. The final image is deliberately small and domestic, mirroring the opening and reinforcing the theme that change lives in the ordinary.">
                      The new house smelled of paint and someone else&apos;s cooking. In the kitchen,
                      there were mugs already in the cupboard, left by the previous owners.
                      I chose one at random. It did not matter which. None of them were hers.
                    </Annotation>
                  </p>
                </div>
              </div>

              <ExaminerComment>
                <p>
                  A beautifully crafted narrative that demonstrates mastery of voice, structure, and technique.
                  The in medias res opening is arresting, and the mug motif is sustained throughout to create a
                  satisfying circular structure. The writer shows extraordinary restraint &mdash; emotion is conveyed
                  through carefully selected physical details rather than stated directly. Sentence variety is excellent,
                  from the clipped opening (&ldquo;That was how I knew&rdquo;) to the longer, more reflective later sentences.
                  The narrative voice is distinctive and assured, and every detail earns its place.
                  This is writing of exceptional quality. Full marks: 40/40.
                </p>
              </ExaminerComment>
            </Section>

            {/* ─── KEY TECHNIQUES ──────────────────────────────── */}
            <Section id="techniques" title="Key Techniques Annotated">
              <p className="mb-6 text-muted-foreground leading-relaxed">
                These are the techniques that separate good creative writing from exceptional creative writing.
                Study how they are used in the grade 9 examples above.
              </p>

              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  {
                    name: "Show, Don't Tell",
                    desc: "Convey emotions through actions, sensory details, and imagery rather than naming them directly.",
                    example: "Grade 5: 'I was shocked and upset.' Grade 9: 'The two words rearranged the furniture of my life.'",
                  },
                  {
                    name: "Motif / Symbolism",
                    desc: "Repeat an image or object throughout to create cohesion and deeper meaning.",
                    example: "The mug appears in the opening and closing, carrying the weight of change and loss.",
                  },
                  {
                    name: "Varied Sentence Structures",
                    desc: "Alternate between short, punchy sentences and longer, more complex ones for rhythm and emphasis.",
                    example: "'That was how I knew.' vs. 'I watched the houses peel away like layers of something I had not known was mine until it was taken.'",
                  },
                  {
                    name: "Circular Structure",
                    desc: "End the piece by returning to an image, idea, or setting from the opening.",
                    example: "Both the descriptive and narrative grade 9 pieces use circular structures for a sense of completeness.",
                  },
                  {
                    name: "Precise Verbs",
                    desc: "Choose specific, evocative verbs rather than generic ones to create vivid imagery.",
                    example: "'Presided' instead of 'stood'; 'peel away' instead of 'disappear'.",
                  },
                  {
                    name: "Restraint",
                    desc: "Sometimes what you leave out is more powerful than what you include. Let the reader fill in the emotional gaps.",
                    example: "Jake hands over the photograph 'without speaking' — the silence says everything.",
                  },
                ].map((tech) => (
                  <div key={tech.name} className="rounded-xl border border-border bg-card p-5 shadow-md">
                    <h4 className="font-bold text-foreground">{tech.name}</h4>
                    <p className="mt-1 text-sm text-muted-foreground">{tech.desc}</p>
                    <div className="mt-3 rounded-lg bg-muted px-4 py-3">
                      <p className="text-sm italic text-muted-foreground">{tech.example}</p>
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
