import type { Metadata } from "next";
import Link from "next/link";

/* ─── Metadata ───────────────────────────────────────────────── */

export const metadata: Metadata = {
  title: "Model Literature Essays | The English Hub",
  description:
    "Grade 7 and grade 9 model literature essays on Macbeth, A Christmas Carol, An Inspector Calls, and poetry comparison. Annotations show how to structure arguments and embed quotations.",
};

/* ─── Annotation component ───────────────────────────────────── */

function Annotation({ children, note }: { children: React.ReactNode; note: string }) {
  return (
    <span className="group relative">
      <span className="rounded bg-[#2E86C1]/10 px-1 py-0.5 text-[#1A5276] border-b-2 border-dashed border-[#2E86C1]/40 cursor-help">
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
    <div className="mt-4 rounded-lg border-l-4 border-[#2E86C1] bg-[#2E86C1]/5 p-4">
      <p className="mb-1 text-xs font-bold uppercase tracking-wider text-[#2E86C1]">
        Examiner Commentary
      </p>
      <div className="text-sm leading-relaxed text-gray-700">{children}</div>
    </div>
  );
}

/* ─── Section wrapper ────────────────────────────────────────── */

function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="scroll-mt-24">
      <h2 className="mb-6 text-2xl font-bold text-[#1A5276] border-b-2 border-[#2E86C1]/20 pb-3">
        {title}
      </h2>
      {children}
    </section>
  );
}

/* ─── Page ───────────────────────────────────────────────────── */

export default function LiteratureEssayPage() {
  return (
    <>

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#1A5276] to-[#1A5276]/80 px-4 py-16 text-white sm:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#2E86C1]/80">
            Model Answers
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Literature Essays
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/90">
            Grade 9 model essays on the most popular GCSE texts. Every paragraph is annotated
            to show you exactly how to build arguments, embed quotations, and explore context.
          </p>
        </div>
      </section>

      {/* Breadcrumb */}
      <nav className="mx-auto max-w-5xl px-4 pt-6" aria-label="Breadcrumb">
        <ol className="flex flex-wrap items-center gap-2 text-sm text-gray-500">
          <li><Link href="/" className="hover:text-[#1A5276] transition-colors">Home</Link></li>
          <li>/</li>
          <li><Link href="/resources" className="hover:text-[#1A5276] transition-colors">Resources</Link></li>
          <li>/</li>
          <li><Link href="/resources/model-answers" className="hover:text-[#1A5276] transition-colors">Model Answers</Link></li>
          <li>/</li>
          <li className="font-medium text-[#1A5276]">Literature Essays</li>
        </ol>
      </nav>

      {/* Content */}
      <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-[220px_1fr] lg:gap-10">

          {/* Sidebar TOC */}
          <aside className="hidden lg:block">
            <nav className="sticky top-24 space-y-1 text-sm">
              <p className="mb-2 font-bold text-[#1A5276] uppercase tracking-wider text-xs">Contents</p>
              {[
                { id: "macbeth", label: "Macbeth (Grade 9)" },
                { id: "christmas-carol", label: "A Christmas Carol" },
                { id: "inspector-calls", label: "An Inspector Calls" },
                { id: "poetry", label: "Poetry Comparison" },
                { id: "grade-criteria", label: "What Examiners Want" },
              ].map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="block rounded-lg px-3 py-1.5 text-gray-600 hover:bg-[#2E86C1]/10 hover:text-[#1A5276] transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </aside>

          {/* Main content */}
          <div className="space-y-16">

            {/* ─── MACBETH ─────────────────────────────────────── */}
            <Section id="macbeth" title="Macbeth &mdash; Grade 9">
              <div className="mb-4 flex items-center gap-3">
                <GradeBadge grade="Grade 9" color="bg-[#1A5276]" />
                <span className="text-sm text-gray-500">AQA Literature Paper 1</span>
              </div>

              <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm mb-4">
                <p className="text-xs font-bold uppercase tracking-wider text-[#2E86C1] mb-2">Question</p>
                <p className="text-gray-800 font-medium">
                  Starting with this extract, how does Shakespeare present the theme of ambition in <em>Macbeth</em>?
                </p>
                <p className="mt-1 text-sm text-gray-500">Write about the extract and the play as a whole. [34 marks]</p>
              </div>

              <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                <div className="prose prose-sm max-w-none text-gray-700 leading-relaxed space-y-4">
                  <p>
                    <Annotation note="Conceptualised opening: immediately establishes an argument about ambition as a destructive force, not just a character trait.">
                      Shakespeare presents ambition not as a noble aspiration but as a corrosive, self-consuming force
                      that dismantles the moral and political order of the play.
                    </Annotation>{" "}
                    Through Macbeth&apos;s trajectory from &ldquo;valiant cousin&rdquo; to &ldquo;dead butcher,&rdquo;
                    Shakespeare dramatises the Jacobean anxiety that unchecked ambition could destabilise
                    the divinely ordained hierarchy &mdash;
                    <Annotation note="Contextual integration from the outset. This is not a bolted-on context paragraph but woven into the argument.">
                      a fear acutely relevant to a king who had survived the Gunpowder Plot just a year before the play&apos;s first performance
                    </Annotation>.
                  </p>
                  <p>
                    In the extract, Macbeth&apos;s soliloquy reveals ambition as an internal torment. His admission
                    that he has &ldquo;no spur / To prick the sides of my intent, but only /
                    <Annotation note="Close language analysis of the metaphor. The student explores the specific connotations of 'vaulting' and connects it to the idea of over-reaching.">
                      Vaulting ambition, which o&apos;erleaps itself&rdquo; employs an equestrian metaphor
                      in which ambition is figured as a rider who, in attempting to mount the horse, falls
                      on the other side
                    </Annotation>.
                    The prefix &ldquo;o&apos;er&rdquo; emphasises excess &mdash; ambition does not simply leap but
                    <Annotation note="Precise analysis of a single word. This level of close reading is characteristic of top-band responses.">
                      over-leaps, transgressing the natural boundary of what is achievable or permissible
                    </Annotation>.
                    Shakespeare&apos;s audience would have recognised in this the
                    <Annotation note="Contextual understanding integrated with analysis, not separated into a standalone paragraph.">
                      theological concept of superbia &mdash; the pride that precedes a fall &mdash;
                      reinforcing the play&apos;s moral framework
                    </Annotation>.
                  </p>
                  <p>
                    Beyond the extract, ambition is externalised through Lady Macbeth, whose invocation to the spirits to
                    &ldquo;unsex me here&rdquo; reveals ambition as a force so powerful it demands the
                    <Annotation note="Links ambition to gender and the supernatural — showing the theme's wider significance across the play.">
                      erasure of femininity and natural order
                    </Annotation>.
                    Her command to &ldquo;fill me from the crown to the toe top-full / Of direst cruelty&rdquo;
                    uses corporeal imagery that mirrors the disease imagery later associated with Scotland itself,
                    suggesting that
                    <Annotation note="Tracking a motif across the play demonstrates whole-text knowledge and structural understanding.">
                      ambition is a contagion that spreads from individual to nation
                    </Annotation>.
                  </p>
                  <p>
                    The witches complicate ambition further. They do not create Macbeth&apos;s ambition but
                    <Annotation note="Evaluative interpretation: the student is not just describing but arguing a specific reading of the witches' role.">
                      catalyse what already exists, raising the troubling question of whether ambition is
                      innate or externally provoked
                    </Annotation>.
                    Their equivocal language &mdash; &ldquo;fair is foul and foul is fair&rdquo; &mdash; establishes a
                    world in which moral certainties dissolve, and it is in this moral vacuum that ambition
                    thrives. Shakespeare thus suggests that ambition is most dangerous not in strong characters
                    but in
                    <Annotation note="Sophisticated concluding point that moves beyond character to explore Shakespeare's broader thematic concern.">
                      unstable moral landscapes where the boundary between right and wrong has been deliberately blurred
                    </Annotation>.
                  </p>
                </div>
              </div>

              <ExaminerComment>
                <p>
                  A compelling, conceptualised response that demonstrates all the hallmarks of a top-band essay.
                  The argument is sustained and clearly structured, moving from the extract to the wider play with fluency.
                  Context is not bolted on but integrated naturally into the analysis. Close language analysis (&ldquo;o&apos;erleaps,&rdquo;
                  the equestrian metaphor) is combined with whole-text awareness (tracking the disease motif, the role of the witches).
                  The student offers a personal, evaluative interpretation throughout. Marks: 34/34.
                </p>
              </ExaminerComment>
            </Section>

            {/* ─── A CHRISTMAS CAROL ──────────────────────────── */}
            <Section id="christmas-carol" title="A Christmas Carol &mdash; Grade 7 vs Grade 9">
              <div className="mb-4">
                <p className="text-sm text-gray-500 mb-2">Question: How does Dickens present Scrooge&apos;s transformation?</p>
              </div>

              {/* Grade 7 */}
              <div className="mb-8">
                <div className="mb-3 flex items-center gap-3">
                  <GradeBadge grade="Grade 7" color="bg-green-600" />
                  <span className="text-sm text-gray-500">Extract from response</span>
                </div>

                <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                  <div className="prose prose-sm max-w-none text-gray-700 leading-relaxed space-y-4">
                    <p>
                      Dickens presents Scrooge&apos;s transformation through the visits of the three spirits. At the
                      start, Scrooge is described as &ldquo;<Annotation note="Good quotation selection but the analysis that follows is descriptive rather than evaluative.">a squeezing, wrenching, grasping, scraping, clutching, covetous old sinner</Annotation>.&rdquo;
                      The list of adjectives creates a sense of relentless greed and suggests Scrooge is defined entirely
                      by his desire for money. The word &ldquo;sinner&rdquo; has religious connotations and implies that
                      his behaviour is morally wrong.
                    </p>
                    <p>
                      By the end of the novella, Scrooge has completely changed. He is described as
                      &ldquo;<Annotation note="Effective contrast between opening and closing descriptions. Could push further by exploring why Dickens uses 'as good a man' specifically.">as good a friend, as good a master, and as good a man as the good old City knew</Annotation>.&rdquo;
                      The repetition of &ldquo;good&rdquo; emphasises how much he has changed. Dickens uses this transformation
                      to show Victorian readers that it is never too late to change and that
                      <Annotation note="Context is relevant but separated from the textual analysis. Integrating it would strengthen the response.">generosity is more important than wealth, which was an important message in Victorian society where there was a big gap between rich and poor</Annotation>.
                    </p>
                  </div>
                </div>
              </div>

              {/* Grade 9 */}
              <div>
                <div className="mb-3 flex items-center gap-3">
                  <GradeBadge grade="Grade 9" color="bg-[#1A5276]" />
                  <span className="text-sm text-gray-500">Extract from response</span>
                </div>

                <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                  <div className="prose prose-sm max-w-none text-gray-700 leading-relaxed space-y-4">
                    <p>
                      <Annotation note="Opens with an argument, not a description. The student frames the transformation in terms of Dickens's didactic purpose.">
                        Dickens constructs Scrooge&apos;s transformation as a moral parable designed to agitate
                        the conscience of his middle-class readership.
                      </Annotation>{" "}
                      The opening catalogue of participial adjectives &mdash; &ldquo;squeezing, wrenching, grasping,
                      scraping, clutching&rdquo; &mdash;
                      <Annotation note="Analyses the grammatical form (participles) and their effect, not just the content of the words.">
                        reduces Scrooge to a series of grasping actions, each present participle
                        suggesting continuous, habitual greed rather than a single instance of meanness
                      </Annotation>.
                      The cumulative effect is almost comic in its excess, yet Dickens immediately undercuts
                      this with &ldquo;covetous old sinner&rdquo; &mdash; a term that
                      <Annotation note="Links a single word to the Ten Commandments and Dickens's moral framework. This is precisely integrated context.">
                        invokes the Tenth Commandment and positions Scrooge&apos;s avarice as a spiritual crime,
                        not merely a social failing
                      </Annotation>.
                    </p>
                    <p>
                      The transformation itself is crucially staged through confrontation with absence:
                      <Annotation note="Sophisticated structural analysis — the student analyses not just what happens but how Dickens structures the revelation.">
                        Scrooge does not change because he sees something new but because he is forced to see
                        what he has refused to see
                      </Annotation> &mdash;
                      Tiny Tim&apos;s empty chair, his own neglected grave. Dickens&apos;s strategy is one of
                      <Annotation note="Evaluative and analytical vocabulary: 'strategic discomfort' shows the student thinking about Dickens as a craftsman with a purpose.">
                        strategic discomfort: by making his protagonist witness the consequences of indifference,
                        he simultaneously confronts the reader
                      </Annotation>.
                      In a society where the 1834 Poor Law had institutionalised the idea that poverty was a
                      moral failing of the poor, Dickens radically inverts this narrative, suggesting it is the
                      wealthy who are morally deficient.
                    </p>
                  </div>
                </div>
              </div>

              <ExaminerComment>
                <p>
                  The grade 7 response identifies relevant quotations and makes competent points about language and context,
                  but the analysis is descriptive (&ldquo;creates a sense of&rdquo;) and context is bolted on at the end.
                  The grade 9 response, by contrast, opens with a conceptualised argument, analyses grammatical form
                  (participles, not just adjectives), integrates context seamlessly (the Tenth Commandment, the Poor Law),
                  and evaluates Dickens&apos;s structural choices. The key difference is the grade 9 student writes about
                  Dickens as a writer with a deliberate strategy, while the grade 7 student describes what happens in the text.
                </p>
              </ExaminerComment>
            </Section>

            {/* ─── AN INSPECTOR CALLS ─────────────────────────── */}
            <Section id="inspector-calls" title="An Inspector Calls &mdash; Grade 9">
              <div className="mb-4 flex items-center gap-3">
                <GradeBadge grade="Grade 9" color="bg-[#1A5276]" />
                <span className="text-sm text-gray-500">AQA Literature Paper 2</span>
              </div>

              <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm mb-4">
                <p className="text-xs font-bold uppercase tracking-wider text-[#2E86C1] mb-2">Question</p>
                <p className="text-gray-800 font-medium">
                  How does Priestley present ideas about responsibility in <em>An Inspector Calls</em>?
                </p>
              </div>

              <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                <div className="prose prose-sm max-w-none text-gray-700 leading-relaxed space-y-4">
                  <p>
                    <Annotation note="Thesis-driven opening. The student does not begin with 'Priestley presents responsibility as...' but offers an original argument about the play's structure.">
                      Priestley weaponises the detective genre to dismantle the Birlings&apos; moral complacency,
                      transforming a drawing-room mystery into a socialist polemic in which the real crime
                      is not Eva Smith&apos;s death but the collective indifference that caused it.
                    </Annotation>
                  </p>
                  <p>
                    The play&apos;s structure is its most potent tool for exploring responsibility.
                    <Annotation note="Analyses dramatic structure rather than just content — a hallmark of top-band drama essays.">
                      By confining the action to a single room and a single evening, Priestley creates a
                      pressure-cooker environment from which the Birlings cannot escape
                    </Annotation>.
                    The Inspector functions as a
                    <Annotation note="Multiple interpretations offered — the student considers the Inspector as a dramatic device with several possible readings.">
                      catalyst, a moral mirror, and perhaps a prophetic figure
                    </Annotation> &mdash;
                    his name, &ldquo;Goole,&rdquo; phonetically echoing &ldquo;ghoul,&rdquo; suggests he
                    exists outside the naturalistic framework of the play, lending his message a supernatural authority.
                  </p>
                  <p>
                    The generational divide is central. Sheila&apos;s transformation &mdash; from the girl who had a shop
                    worker dismissed for a perceived slight to the young woman who declares &ldquo;I&apos;ll never,
                    never do it again&rdquo; &mdash;
                    <Annotation note="Contextualises the generational divide in relation to Priestley's post-war audience.">
                      represents Priestley&apos;s hope that the post-war generation would build a more equitable society
                    </Annotation>.
                    Mr Birling, by contrast, remains intransigent, his repeated appeals to his
                    &ldquo;responsibilities&rdquo; being exclusively commercial and self-interested.
                    <Annotation note="Analyses how Priestley uses a single word differently for different characters to expose hypocrisy.">
                      Priestley thus exposes the word &ldquo;responsibility&rdquo; itself as contested terrain:
                      for Birling, it means protecting the family name; for the Inspector, it means
                      recognising our shared humanity
                    </Annotation>.
                  </p>
                  <p>
                    The final telephone call &mdash; &ldquo;a girl has just died&rdquo; &mdash; is Priestley&apos;s
                    masterstroke.
                    <Annotation note="Analyses the ending as a structural and ideological choice, not just a plot twist.">
                      It shatters the Birlings&apos; relief and the audience&apos;s complacency simultaneously,
                      suggesting that responsibility is not a question that can be answered and set aside
                      but a perpetual moral obligation
                    </Annotation>.
                    Written in 1945 but set in 1912, the play&apos;s temporal duality allows Priestley to
                    dramatise the cost of ignoring responsibility: the audience knows that two world wars
                    followed the Birlings&apos; Edwardian complacency. The message is clear &mdash; if we do
                    not learn, history will repeat itself.
                  </p>
                </div>
              </div>

              <ExaminerComment>
                <p>
                  A forceful, argumentative response that treats the play as a deliberate construct rather than a story.
                  The student analyses dramatic structure (unity of time and place), character as thematic vehicle
                  (Sheila vs Birling), language as contested territory (&ldquo;responsibility&rdquo;), and the significance
                  of the play&apos;s dual time setting. Context is precisely integrated, not appended. The writing is
                  confident and evaluative throughout. Marks: 34/34.
                </p>
              </ExaminerComment>
            </Section>

            {/* ─── POETRY COMPARISON ──────────────────────────── */}
            <Section id="poetry" title="Poetry Comparison &mdash; Grade 9">
              <div className="mb-4 flex items-center gap-3">
                <GradeBadge grade="Grade 9" color="bg-[#1A5276]" />
                <span className="text-sm text-gray-500">AQA Literature Paper 2 &mdash; Power and Conflict</span>
              </div>

              <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm mb-4">
                <p className="text-xs font-bold uppercase tracking-wider text-[#2E86C1] mb-2">Question</p>
                <p className="text-gray-800 font-medium">
                  Compare how the poets present the power of nature in &lsquo;Storm on the Island&rsquo; (Heaney)
                  and one other poem from the anthology.
                </p>
                <p className="mt-1 text-sm text-gray-500">Comparison poem chosen: &lsquo;Exposure&rsquo; (Owen)</p>
              </div>

              <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                <div className="prose prose-sm max-w-none text-gray-700 leading-relaxed space-y-4">
                  <p>
                    <Annotation note="Comparative thesis from the outset. Both poems are introduced within a single conceptualised argument.">
                      Both Heaney and Owen present nature as an adversary that exposes human vulnerability,
                      yet while Heaney&apos;s storm is an immediate, tangible assault, Owen&apos;s weather
                      is an insidious, slow-burning force that kills through attrition rather than violence.
                    </Annotation>
                  </p>
                  <p>
                    Heaney opens with a deceptive sense of preparedness: &ldquo;We are prepared: we build our houses squat.&rdquo;
                    <Annotation note="Analyses the colon as a grammatical choice — this close attention to punctuation is a grade 9 skill.">
                      The colon after &ldquo;prepared&rdquo; implies a causal logic &mdash; we are prepared because
                      we have built well &mdash; yet the poem systematically dismantles this confidence
                    </Annotation>.
                    The storm is personified as a military aggressor that &ldquo;pummels&rdquo; and &ldquo;strafes,&rdquo;
                    the latter a verb drawn specifically from aerial warfare, creating an
                    <Annotation note="Connects Heaney's word choice to the political context of Northern Ireland — the 'storm' can be read allegorically.">
                      unsettling overlap between natural and military violence that invites an allegorical reading
                      of the Troubles
                    </Annotation>.
                  </p>
                  <p>
                    Owen, by contrast, strips nature of agency. The weather in &ldquo;Exposure&rdquo; does not attack
                    but simply <Annotation note="Comparative point embedded fluidly. The student is not mechanically alternating between poems but weaving them together.">exists, and it is this indifference that makes it lethal</Annotation>.
                    The repeated refrain &ldquo;But nothing happens&rdquo; is devastating in its understatement:
                    <Annotation note="Analyses the structural effect of the refrain across the whole poem, not just as a single instance.">
                      each repetition drains the poem of forward momentum, trapping the soldiers and the reader
                      in an endless, frozen present
                    </Annotation>.
                    Where Heaney&apos;s storm is dramatic and kinetic, Owen&apos;s is static and suffocating.
                  </p>
                  <p>
                    Both poets use form to reinforce their presentations of nature.
                    <Annotation note="Comparative analysis of form — a skill many students neglect. This shows genuine understanding of how form creates meaning.">
                      Heaney&apos;s blank verse gives the poem a conversational, almost defiant tone,
                      as though the speaker is talking the storm down, while Owen&apos;s pararhymes
                      (&ldquo;knive us... nervous&rdquo;) create a persistent sense of incompleteness and unease
                      that mirrors the soldiers&apos; psychological state
                    </Annotation>.
                    Ultimately, both poems suggest that nature&apos;s power lies not in its strength but in
                    humanity&apos;s inability to control it &mdash; a theme that resonates whether the &ldquo;storm&rdquo;
                    is meteorological, military, or political.
                  </p>
                </div>
              </div>

              <ExaminerComment>
                <p>
                  An exemplary comparison that integrates both poems throughout rather than treating them separately.
                  The student analyses language, form, and structure in both poems, and the contextual readings
                  (the Troubles, World War I) are precisely integrated. The comparative thesis is sustained from
                  the opening sentence, and the conclusion draws the two poems together with a unifying insight.
                  This demonstrates exactly the kind of &ldquo;exploratory, conceptualised response&rdquo; that the
                  mark scheme demands at the top band. Marks: 30/30.
                </p>
              </ExaminerComment>
            </Section>

            {/* ─── WHAT EXAMINERS WANT ────────────────────────── */}
            <Section id="grade-criteria" title="What Examiners Want at Each Grade">
              <p className="mb-6 text-gray-700 leading-relaxed">
                Understanding the assessment objectives is crucial. Here is what examiners are looking for
                at each grade boundary for literature essays:
              </p>

              <div className="space-y-6">
                {[
                  {
                    grade: "Grade 5",
                    color: "border-amber-400 bg-amber-50",
                    titleColor: "text-amber-700",
                    points: [
                      "Clear, explained response to the task",
                      "Relevant quotations used to support points",
                      "Some awareness of language, form, and structure",
                      "Context is mentioned but may feel separate from the analysis",
                      "A personal response is developing but may be inconsistent",
                    ],
                  },
                  {
                    grade: "Grade 7",
                    color: "border-green-400 bg-green-50",
                    titleColor: "text-green-700",
                    points: [
                      "Thoughtful, developed response with a clear argument",
                      "Well-chosen quotations with close language analysis",
                      "Analysis of how the writer uses language, form, and structure to create effects",
                      "Context is relevant and begins to be integrated",
                      "A personal response is sustained across the essay",
                    ],
                  },
                  {
                    grade: "Grade 9",
                    color: "border-[#1A5276] bg-[#1A5276]/5",
                    titleColor: "text-[#1A5276]",
                    points: [
                      "Critical, exploratory, conceptualised response",
                      "Precise, fluently embedded quotations with single-word analysis",
                      "Sophisticated analysis of language, form, and structure as deliberate authorial choices",
                      "Context is precisely integrated and illuminates the interpretation",
                      "An original, evaluative personal response sustained throughout",
                      "Consideration of alternative interpretations ('perhaps,' 'it could be argued')",
                    ],
                  },
                ].map((level) => (
                  <div key={level.grade} className={`rounded-xl border-2 p-6 ${level.color}`}>
                    <h3 className={`text-lg font-bold ${level.titleColor}`}>{level.grade}</h3>
                    <ul className="mt-3 space-y-2">
                      {level.points.map((point, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                          <span className="mt-0.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gray-400" />
                          {point}
                        </li>
                      ))}
                    </ul>
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
