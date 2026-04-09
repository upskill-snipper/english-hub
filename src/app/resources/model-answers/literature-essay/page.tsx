import type { Metadata } from "next";
import Link from "next/link";
import { GradeTabs } from "@/components/model-answers/GradeTabs";
import { GradeBadge, GradeSummary } from "@/components/model-answers/GradeComponents";
import { GRADE_LEVELS } from "@/components/model-answers/grade-data";

/* ─── Metadata ───────────────────────────────────────────────── */

export const metadata: Metadata = {
  alternates: {
    canonical:
      "https://theenglishhub.app/resources/model-answers/literature-essay",
  },
  title: "Model Literature Essays | The English Hub",
  description:
    "Grade 3, 5, 7, and 9 model literature essays on Macbeth, A Christmas Carol, An Inspector Calls, and poetry comparison. Annotations show how to structure arguments and embed quotations at every level.",
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

export default function LiteratureEssayPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-primary/80 px-4 py-16 text-white sm:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-white/70">
            Model Answers
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Literature Essays
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/90">
            Model essays on the most popular GCSE texts at grade 3, 5, 7, and 9.
            Every paragraph is annotated to show you exactly how to build
            arguments, embed quotations, and explore context.
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
          <li className="font-medium text-foreground">Literature Essays</li>
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
                { id: "macbeth", label: "Macbeth" },
                { id: "christmas-carol", label: "A Christmas Carol" },
                { id: "inspector-calls", label: "An Inspector Calls" },
                { id: "poetry", label: "Poetry Comparison" },
                { id: "grade-criteria", label: "What Examiners Want" },
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
            {/* ─── MACBETH ─────────────────────────────────────── */}
            <Section id="macbeth" title="Macbeth &mdash; Ambition">
              <div className="mb-6 rounded-xl border border-border bg-card p-6 shadow-md">
                <p className="mb-2 text-xs font-bold uppercase tracking-wider text-primary">
                  AQA Literature Paper 1
                </p>
                <p className="font-medium text-foreground">
                  Starting with this extract, how does Shakespeare present the
                  theme of ambition in <em>Macbeth</em>?
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Write about the extract and the play as a whole. [34 marks]
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
                          34/34
                        </span>
                      </div>
                      <AnswerCard>
                        <p>
                          <Annotation note="Conceptualised opening: immediately establishes an argument about ambition as a destructive force, not just a character trait.">
                            Shakespeare presents ambition not as a noble aspiration
                            but as a corrosive, self-consuming force that dismantles
                            the moral and political order of the play.
                          </Annotation>{" "}
                          Through Macbeth&apos;s trajectory from &ldquo;valiant
                          cousin&rdquo; to &ldquo;dead butcher,&rdquo; Shakespeare
                          dramatises the Jacobean anxiety that unchecked ambition
                          could destabilise the divinely ordained hierarchy &mdash;
                          <Annotation note="Contextual integration from the outset. This is not a bolted-on context paragraph but woven into the argument.">
                            a fear acutely relevant to a king who had survived the
                            Gunpowder Plot just a year before the play&apos;s first
                            performance
                          </Annotation>
                          .
                        </p>
                        <p>
                          In the extract, Macbeth&apos;s soliloquy reveals ambition
                          as an internal torment. His admission that he has
                          &ldquo;no spur / To prick the sides of my intent, but only
                          /
                          <Annotation note="Close language analysis of the metaphor. The student explores the specific connotations of 'vaulting' and connects it to the idea of over-reaching.">
                            Vaulting ambition, which o&apos;erleaps itself&rdquo;
                            employs an equestrian metaphor in which ambition is
                            figured as a rider who, in attempting to mount the horse,
                            falls on the other side
                          </Annotation>
                          . The prefix &ldquo;o&apos;er&rdquo; emphasises excess
                          &mdash; ambition does not simply leap but
                          <Annotation note="Precise analysis of a single word. This level of close reading is characteristic of top-band responses.">
                            over-leaps, transgressing the natural boundary of what is
                            achievable or permissible
                          </Annotation>
                          .
                        </p>
                        <p>
                          Beyond the extract, ambition is externalised through Lady
                          Macbeth, whose invocation to the spirits to &ldquo;unsex me
                          here&rdquo; reveals ambition as a force so powerful it
                          demands the
                          <Annotation note="Links ambition to gender and the supernatural — showing the theme's wider significance across the play.">
                            erasure of femininity and natural order
                          </Annotation>
                          . The witches complicate ambition further. They do not
                          create Macbeth&apos;s ambition but
                          <Annotation note="Evaluative interpretation: the student is arguing a specific reading of the witches' role.">
                            catalyse what already exists, raising the troubling
                            question of whether ambition is innate or externally
                            provoked
                          </Annotation>
                          .
                        </p>
                      </AnswerCard>
                      <ExaminerComment>
                        <p>
                          A compelling, conceptualised response that demonstrates all
                          the hallmarks of a top-band essay. The argument is sustained
                          and clearly structured, moving from the extract to the wider
                          play with fluency. Context is integrated naturally into the
                          analysis. Close language analysis is combined with whole-text
                          awareness. Marks: 34/34.
                        </p>
                      </ExaminerComment>
                      <GradeSummary
                        level={GRADE_LEVELS[0]}
                        points={[
                          "Conceptualised argument established from the opening sentence",
                          "Context integrated seamlessly — not bolted on as a separate paragraph",
                          "Close single-word analysis ('o'erleaps') combined with whole-text awareness",
                          "Evaluative and exploratory — offers personal interpretation",
                          "Tracks the theme across multiple characters and scenes",
                          "Writes about Shakespeare as a deliberate craftsman with purpose",
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
                          26&ndash;28/34
                        </span>
                      </div>
                      <AnswerCard>
                        <p>
                          <Annotation note="A clear opening that signals the argument, though not as conceptualised as grade 9. The student identifies ambition as destructive but doesn't yet frame it in terms of Shakespeare's broader purpose.">
                            Shakespeare presents ambition as a powerful but
                            ultimately destructive force in Macbeth. Through
                            Macbeth&apos;s actions and language, the audience sees
                            how ambition can corrupt even a brave and loyal soldier.
                          </Annotation>
                        </p>
                        <p>
                          In the extract, Macbeth describes his ambition as
                          &ldquo;vaulting ambition, which o&apos;erleaps
                          itself.&rdquo;
                          <Annotation note="Good quotation selection and the analysis explores the metaphor. However, it doesn't push as far as grade 9 in exploring the significance of 'o'er'.">
                            This metaphor compares ambition to a horse rider who
                            jumps too far and falls. This suggests that Macbeth knows
                            his ambition is dangerous and could lead to his downfall
                          </Annotation>
                          , yet he continues to pursue it. The word
                          &ldquo;vaulting&rdquo; suggests something energetic and
                          uncontrollable.
                        </p>
                        <p>
                          In the wider play, Lady Macbeth also shows the destructive
                          nature of ambition. She calls on &ldquo;spirits&rdquo; to
                          &ldquo;unsex&rdquo; her, showing she is willing to
                          <Annotation note="Relevant wider play knowledge. Context is mentioned but feels slightly separate from the textual analysis.">
                            give up her femininity to achieve power. In Jacobean
                            society, this would have been seen as deeply unnatural
                            and sinful, as women were expected to be gentle and
                            obedient
                          </Annotation>
                          .
                        </p>
                      </AnswerCard>
                      <ExaminerComment>
                        <p>
                          A thoughtful response with clear analysis and relevant wider
                          play knowledge. The student explores the metaphor and links
                          it to Macbeth&apos;s character. Context is relevant but
                          feels slightly bolted on rather than integrated. To reach
                          grade 9, the student should open with a more conceptualised
                          argument and analyse individual words with greater
                          precision. Marks: 27/34.
                        </p>
                      </ExaminerComment>
                      <GradeSummary
                        level={GRADE_LEVELS[1]}
                        points={[
                          "Clear argument about ambition established in the opening",
                          "Explores the metaphor with some depth and links to character",
                          "Relevant wider play knowledge (Lady Macbeth, the witches)",
                          "Context is relevant but tends to sit in its own paragraph",
                          "Good quotation selection, though analysis could be more precise",
                          "Sustained personal response across the essay",
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
                          19&ndash;22/34
                        </span>
                      </div>
                      <AnswerCard>
                        <p>
                          <Annotation note="A basic opening that addresses the question but does not offer an argument or interpretation. The student describes rather than argues.">
                            Shakespeare presents ambition in Macbeth through the main
                            character. Macbeth is ambitious because he wants to
                            become king.
                          </Annotation>
                        </p>
                        <p>
                          In the extract, Macbeth talks about his &ldquo;vaulting
                          ambition.&rdquo;
                          <Annotation note="Identifies the quotation and makes a basic comment, but the analysis does not go beyond paraphrasing. What does 'vaulting' specifically suggest?">
                            This shows that his ambition is very strong and he cannot
                            control it. He knows it might cause problems but he
                            carries on anyway
                          </Annotation>
                          .
                        </p>
                        <p>
                          Lady Macbeth is also ambitious. She persuades Macbeth to
                          kill King Duncan by
                          <Annotation note="Retells the plot rather than analysing language or technique. A stronger response would focus on what the language reveals rather than what happens.">
                            questioning his manhood and calling him a coward. This
                            shows she is determined to become queen. In the end, her
                            ambition makes her go mad and she kills herself
                          </Annotation>
                          .
                        </p>
                        <p>
                          <Annotation note="Context is relevant but feels like a separate add-on rather than part of the analysis.">
                            In Shakespeare&apos;s time, people believed in the Divine
                            Right of Kings, so killing a king would have been seen as
                            a terrible sin. This makes Macbeth&apos;s ambition seem
                            even worse.
                          </Annotation>
                        </p>
                      </AnswerCard>
                      <ExaminerComment>
                        <p>
                          A clear response that shows knowledge of the play and makes
                          some relevant points. However, the analysis is largely
                          descriptive — the student retells rather than analyses. The
                          quotation is identified but not closely analysed. Context is
                          relevant but separated. To improve, the student should
                          analyse specific word choices, avoid plot retelling, and
                          weave context into the analysis. Marks: 20/34.
                        </p>
                      </ExaminerComment>
                      <GradeSummary
                        level={GRADE_LEVELS[2]}
                        points={[
                          "Addresses the question but does not offer a clear argument",
                          "Some relevant quotations but analysis is surface-level",
                          "Tends to retell the plot rather than analyse language",
                          "Context is relevant but bolted on as a separate point",
                          "Basic awareness of characters and themes",
                          "Limited range of analytical vocabulary",
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
                          10&ndash;14/34
                        </span>
                      </div>
                      <AnswerCard>
                        <p>
                          <Annotation note="The opening does not address the question about how Shakespeare presents ambition. It simply states what Macbeth does.">
                            Macbeth is a play about a man who kills the king because
                            he wants to be king himself. He is very ambitious.
                          </Annotation>
                        </p>
                        <p>
                          <Annotation note="Plot retelling with no analysis of language. The student describes events but does not examine how Shakespeare uses language to present ambition.">
                            In the play, Macbeth meets three witches who tell him he
                            will be king. This makes him want to kill Duncan. His
                            wife helps him and they kill Duncan in his sleep.
                          </Annotation>
                        </p>
                        <p>
                          <Annotation note="A basic moral judgement rather than literary analysis. There is no quotation and no engagement with Shakespeare's techniques.">
                            Macbeth&apos;s ambition is bad because it makes him do
                            terrible things. He kills his friend Banquo and tries to
                            kill Banquo&apos;s son. In the end he gets killed by
                            Macduff. This shows that ambition is dangerous.
                          </Annotation>
                        </p>
                      </AnswerCard>
                      <ExaminerComment>
                        <p>
                          This response shows basic knowledge of the plot but does not
                          engage with the question about how Shakespeare presents
                          ambition. There are no quotations, no analysis of language
                          or technique, and no context. The response reads as a plot
                          summary with a moral conclusion. To improve, the student
                          must include quotations, name techniques, and focus on how
                          rather than what. Marks: 12/34.
                        </p>
                      </ExaminerComment>
                      <GradeSummary
                        level={GRADE_LEVELS[3]}
                        points={[
                          "Retells the plot rather than analysing how ambition is presented",
                          "No quotations from the text",
                          "No identification of language techniques or literary devices",
                          "No contextual knowledge integrated",
                          "Simple moral judgements ('ambition is bad') rather than analysis",
                          "Does not engage with the question focus of 'how does Shakespeare present'",
                        ]}
                      />
                    </>
                  ),
                }}
              </GradeTabs>
            </Section>

            {/* ─── A CHRISTMAS CAROL ──────────────────────────── */}
            <Section id="christmas-carol" title="A Christmas Carol &mdash; Scrooge&apos;s Transformation">
              <div className="mb-6 rounded-xl border border-border bg-card p-6 shadow-md">
                <p className="mb-2 text-xs font-bold uppercase tracking-wider text-primary">
                  Question
                </p>
                <p className="font-medium text-foreground">
                  How does Dickens present Scrooge&apos;s transformation?
                </p>
              </div>

              <GradeTabs defaultGrade={9} levels={[9, 7]}>
                {{
                  7: (
                    <>
                      <div className="mb-4 flex items-center gap-3">
                        <GradeBadge
                          grade="Grade 7 (Strong)"
                          color="bg-green-600"
                        />
                      </div>
                      <AnswerCard>
                        <p>
                          Dickens presents Scrooge&apos;s transformation through the
                          visits of the three spirits. At the start, Scrooge is
                          described as &ldquo;
                          <Annotation note="Good quotation selection but the analysis that follows is descriptive rather than evaluative.">
                            a squeezing, wrenching, grasping, scraping, clutching,
                            covetous old sinner
                          </Annotation>
                          .&rdquo; The list of adjectives creates a sense of
                          relentless greed and suggests Scrooge is defined entirely by
                          his desire for money. The word &ldquo;sinner&rdquo; has
                          religious connotations and implies that his behaviour is
                          morally wrong.
                        </p>
                        <p>
                          By the end of the novella, Scrooge has completely changed.
                          He is described as &ldquo;
                          <Annotation note="Effective contrast between opening and closing descriptions.">
                            as good a friend, as good a master, and as good a man as
                            the good old City knew
                          </Annotation>
                          .&rdquo; The repetition of &ldquo;good&rdquo; emphasises
                          how much he has changed. Dickens uses this transformation to
                          show Victorian readers that
                          <Annotation note="Context is relevant but separated from the textual analysis.">
                            generosity is more important than wealth, which was an
                            important message in Victorian society where there was a
                            big gap between rich and poor
                          </Annotation>
                          .
                        </p>
                      </AnswerCard>
                      <ExaminerComment>
                        <p>
                          Competent analysis with relevant quotations and some
                          exploration of connotations. Context is relevant but sits
                          separately from the analysis. To reach grade 9, the student
                          should analyse grammatical form and integrate context more
                          seamlessly.
                        </p>
                      </ExaminerComment>
                      <GradeSummary
                        level={GRADE_LEVELS[1]}
                        points={[
                          "Relevant quotations with some exploration of connotations",
                          "Clear contrast between opening and closing of the novella",
                          "Context is relevant but sits in its own sentence rather than being integrated",
                          "Analyses content of words but not their grammatical form",
                          "Sustained engagement with the question",
                          "Some awareness of Dickens's purpose",
                        ]}
                      />
                    </>
                  ),

                  9: (
                    <>
                      <div className="mb-4 flex items-center gap-3">
                        <GradeBadge
                          grade="Grade 9 (Exceptional)"
                          color="bg-primary"
                        />
                      </div>
                      <AnswerCard>
                        <p>
                          <Annotation note="Opens with an argument, not a description. The student frames the transformation in terms of Dickens's didactic purpose.">
                            Dickens constructs Scrooge&apos;s transformation as a
                            moral parable designed to agitate the conscience of his
                            middle-class readership.
                          </Annotation>{" "}
                          The opening catalogue of participial adjectives &mdash;
                          &ldquo;squeezing, wrenching, grasping, scraping,
                          clutching&rdquo; &mdash;
                          <Annotation note="Analyses the grammatical form (participles) and their effect, not just the content of the words.">
                            reduces Scrooge to a series of grasping actions, each
                            present participle suggesting continuous, habitual greed
                            rather than a single instance of meanness
                          </Annotation>
                          . The cumulative effect is almost comic in its excess, yet
                          Dickens immediately undercuts this with &ldquo;covetous old
                          sinner&rdquo; &mdash; a term that
                          <Annotation note="Links a single word to the Ten Commandments and Dickens's moral framework.">
                            invokes the Tenth Commandment and positions
                            Scrooge&apos;s avarice as a spiritual crime, not merely a
                            social failing
                          </Annotation>
                          .
                        </p>
                        <p>
                          The transformation itself is crucially staged through
                          confrontation with absence:
                          <Annotation note="Sophisticated structural analysis — the student analyses not just what happens but how Dickens structures the revelation.">
                            Scrooge does not change because he sees something new but
                            because he is forced to see what he has refused to see
                          </Annotation>{" "}
                          &mdash; Tiny Tim&apos;s empty chair, his own neglected
                          grave. Dickens&apos;s strategy is one of
                          <Annotation note="Evaluative vocabulary: 'strategic discomfort' shows the student thinking about Dickens as a craftsman with a purpose.">
                            strategic discomfort: by making his protagonist witness
                            the consequences of indifference, he simultaneously
                            confronts the reader
                          </Annotation>
                          . In a society where the 1834 Poor Law had
                          institutionalised the idea that poverty was a moral failing
                          of the poor, Dickens radically inverts this narrative,
                          suggesting it is the wealthy who are morally deficient.
                        </p>
                      </AnswerCard>
                      <ExaminerComment>
                        <p>
                          The grade 9 response opens with a conceptualised argument,
                          analyses grammatical form (participles, not just
                          adjectives), integrates context seamlessly, and evaluates
                          Dickens&apos;s structural choices. The key difference from
                          grade 7 is writing about Dickens as a writer with a
                          deliberate strategy, not just describing what happens.
                          Marks: 34/34.
                        </p>
                      </ExaminerComment>
                      <GradeSummary
                        level={GRADE_LEVELS[0]}
                        points={[
                          "Conceptualised argument about Dickens's didactic purpose from the outset",
                          "Analyses grammatical form (participles) not just word meaning",
                          "Context integrated seamlessly (Ten Commandments, 1834 Poor Law)",
                          "Evaluates Dickens's structural choices (staging through absence)",
                          "Original analytical vocabulary ('strategic discomfort')",
                          "Writes about Dickens as a deliberate craftsman with a social agenda",
                        ]}
                      />
                    </>
                  ),
                }}
              </GradeTabs>
            </Section>

            {/* ─── AN INSPECTOR CALLS ─────────────────────────── */}
            <Section id="inspector-calls" title="An Inspector Calls &mdash; Responsibility">
              <div className="mb-6 rounded-xl border border-border bg-card p-6 shadow-md">
                <p className="mb-2 text-xs font-bold uppercase tracking-wider text-primary">
                  AQA Literature Paper 2
                </p>
                <p className="font-medium text-foreground">
                  How does Priestley present ideas about responsibility in{" "}
                  <em>An Inspector Calls</em>?
                </p>
              </div>

              <GradeTabs defaultGrade={9} levels={[9]}>
                {{
                  9: (
                    <>
                      <div className="mb-4 flex items-center gap-3">
                        <GradeBadge
                          grade="Grade 9 (Exceptional)"
                          color="bg-primary"
                        />
                        <span className="text-sm text-muted-foreground">
                          34/34
                        </span>
                      </div>
                      <AnswerCard>
                        <p>
                          <Annotation note="Thesis-driven opening. The student does not begin with 'Priestley presents responsibility as...' but offers an original argument about the play's structure.">
                            Priestley weaponises the detective genre to dismantle the
                            Birlings&apos; moral complacency, transforming a
                            drawing-room mystery into a socialist polemic in which the
                            real crime is not Eva Smith&apos;s death but the
                            collective indifference that caused it.
                          </Annotation>
                        </p>
                        <p>
                          The play&apos;s structure is its most potent tool for
                          exploring responsibility.
                          <Annotation note="Analyses dramatic structure rather than just content — a hallmark of top-band drama essays.">
                            By confining the action to a single room and a single
                            evening, Priestley creates a pressure-cooker environment
                            from which the Birlings cannot escape
                          </Annotation>
                          . The generational divide is central. Sheila&apos;s
                          transformation represents
                          <Annotation note="Contextualises the generational divide in relation to Priestley's post-war audience.">
                            Priestley&apos;s hope that the post-war generation would
                            build a more equitable society
                          </Annotation>
                          .
                          <Annotation note="Analyses how Priestley uses a single word differently for different characters to expose hypocrisy.">
                            Priestley thus exposes the word
                            &ldquo;responsibility&rdquo; itself as contested terrain:
                            for Birling, it means protecting the family name; for the
                            Inspector, it means recognising our shared humanity
                          </Annotation>
                          .
                        </p>
                        <p>
                          The final telephone call &mdash; &ldquo;a girl has just
                          died&rdquo; &mdash; is Priestley&apos;s masterstroke.
                          <Annotation note="Analyses the ending as a structural and ideological choice.">
                            It shatters the Birlings&apos; relief and the
                            audience&apos;s complacency simultaneously, suggesting
                            that responsibility is a perpetual moral obligation
                          </Annotation>
                          . Written in 1945 but set in 1912, the play&apos;s temporal
                          duality allows Priestley to dramatise the cost of ignoring
                          responsibility: the audience knows that two world wars
                          followed the Birlings&apos; Edwardian complacency.
                        </p>
                      </AnswerCard>
                      <ExaminerComment>
                        <p>
                          A forceful, argumentative response that treats the play as a
                          deliberate construct. The student analyses dramatic
                          structure, character as thematic vehicle, language as
                          contested territory, and the dual time setting. Context is
                          precisely integrated, not appended. Marks: 34/34.
                        </p>
                      </ExaminerComment>
                      <GradeSummary
                        level={GRADE_LEVELS[0]}
                        points={[
                          "Original thesis about the genre being 'weaponised'",
                          "Analyses dramatic structure (unity of time and place)",
                          "Explores how a single word ('responsibility') carries different meanings for different characters",
                          "Context is precisely integrated (post-war audience, 1912 vs 1945)",
                          "Treats characters as thematic vehicles, not real people",
                          "Evaluative throughout — every point advances the argument",
                        ]}
                      />
                    </>
                  ),
                }}
              </GradeTabs>
            </Section>

            {/* ─── POETRY COMPARISON ──────────────────────────── */}
            <Section id="poetry" title="Poetry Comparison &mdash; Power of Nature">
              <div className="mb-6 rounded-xl border border-border bg-card p-6 shadow-md">
                <p className="mb-2 text-xs font-bold uppercase tracking-wider text-primary">
                  AQA Literature Paper 2 &mdash; Power and Conflict
                </p>
                <p className="font-medium text-foreground">
                  Compare how the poets present the power of nature in
                  &lsquo;Storm on the Island&rsquo; (Heaney) and one other poem
                  from the anthology.
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Comparison poem chosen: &lsquo;Exposure&rsquo; (Owen)
                </p>
              </div>

              <GradeTabs defaultGrade={9} levels={[9]}>
                {{
                  9: (
                    <>
                      <div className="mb-4 flex items-center gap-3">
                        <GradeBadge
                          grade="Grade 9 (Exceptional)"
                          color="bg-primary"
                        />
                        <span className="text-sm text-muted-foreground">
                          30/30
                        </span>
                      </div>
                      <AnswerCard>
                        <p>
                          <Annotation note="Comparative thesis from the outset. Both poems are introduced within a single conceptualised argument.">
                            Both Heaney and Owen present nature as an adversary that
                            exposes human vulnerability, yet while Heaney&apos;s
                            storm is an immediate, tangible assault, Owen&apos;s
                            weather is an insidious, slow-burning force that kills
                            through attrition rather than violence.
                          </Annotation>
                        </p>
                        <p>
                          Heaney opens with a deceptive sense of preparedness:
                          &ldquo;We are prepared: we build our houses squat.&rdquo;
                          <Annotation note="Analyses the colon as a grammatical choice — attention to punctuation is a grade 9 skill.">
                            The colon after &ldquo;prepared&rdquo; implies a causal
                            logic &mdash; we are prepared because we have built well
                            &mdash; yet the poem systematically dismantles this
                            confidence
                          </Annotation>
                          . The storm is personified as a military aggressor that
                          &ldquo;pummels&rdquo; and &ldquo;strafes,&rdquo; the
                          latter
                          <Annotation note="Connects Heaney's word choice to the political context of Northern Ireland.">
                            drawn specifically from aerial warfare, creating an
                            unsettling overlap between natural and military violence
                            that invites an allegorical reading of the Troubles
                          </Annotation>
                          .
                        </p>
                        <p>
                          Owen, by contrast, strips nature of agency. The repeated
                          refrain &ldquo;But nothing happens&rdquo; is devastating in
                          its understatement:
                          <Annotation note="Analyses the structural effect of the refrain across the whole poem.">
                            each repetition drains the poem of forward momentum,
                            trapping the soldiers and the reader in an endless, frozen
                            present
                          </Annotation>
                          . Both poets use form to reinforce their presentations.
                          <Annotation note="Comparative analysis of form — a skill many students neglect.">
                            Heaney&apos;s blank verse gives the poem a conversational
                            tone, while Owen&apos;s pararhymes create a persistent
                            sense of incompleteness that mirrors the soldiers&apos;
                            psychological state
                          </Annotation>
                          .
                        </p>
                      </AnswerCard>
                      <ExaminerComment>
                        <p>
                          An exemplary comparison that integrates both poems
                          throughout rather than treating them separately. The student
                          analyses language, form, and structure, and the contextual
                          readings are precisely integrated. Full marks: 30/30.
                        </p>
                      </ExaminerComment>
                      <GradeSummary
                        level={GRADE_LEVELS[0]}
                        points={[
                          "Comparative thesis sustained from the opening sentence",
                          "Both poems woven together throughout — not treated separately",
                          "Analyses language, form, and structure in both poems",
                          "Contextual readings (the Troubles, WWI) precisely integrated",
                          "Close attention to punctuation and grammatical choices",
                          "Considers how form and structure reinforce meaning",
                        ]}
                      />
                    </>
                  ),
                }}
              </GradeTabs>
            </Section>

            {/* ─── WHAT EXAMINERS WANT ────────────────────────── */}
            <Section id="grade-criteria" title="What Examiners Want at Each Grade">
              <p className="mb-6 leading-relaxed text-muted-foreground">
                Understanding the assessment objectives is crucial. Here is what
                examiners are looking for at each grade boundary for literature
                essays:
              </p>

              <div className="space-y-6">
                {[
                  {
                    grade: "Grade 3 (Developing)",
                    color: "border-red-500 bg-card",
                    titleColor: "text-red-600",
                    points: [
                      "Some awareness of the text and its plot",
                      "Basic comments with limited or no quotation",
                      "No identification of language techniques",
                      "Context is absent or inaccurate",
                      "Response reads as plot summary rather than analysis",
                    ],
                  },
                  {
                    grade: "Grade 5 (Solid)",
                    color: "border-amber-500 bg-card",
                    titleColor: "text-amber-600",
                    points: [
                      "Clear, explained response to the task",
                      "Relevant quotations used to support points",
                      "Some awareness of language, form, and structure",
                      "Context is mentioned but may feel separate from the analysis",
                      "A personal response is developing but may be inconsistent",
                    ],
                  },
                  {
                    grade: "Grade 7 (Strong)",
                    color: "border-green-600 bg-card",
                    titleColor: "text-green-600",
                    points: [
                      "Thoughtful, developed response with a clear argument",
                      "Well-chosen quotations with close language analysis",
                      "Analysis of how the writer uses language, form, and structure to create effects",
                      "Context is relevant and begins to be integrated",
                      "A personal response is sustained across the essay",
                    ],
                  },
                  {
                    grade: "Grade 9 (Exceptional)",
                    color: "border-primary bg-primary/5",
                    titleColor: "text-foreground",
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
                  <div
                    key={level.grade}
                    className={`rounded-xl border-2 p-6 ${level.color}`}
                  >
                    <h3 className={`text-lg font-bold ${level.titleColor}`}>
                      {level.grade}
                    </h3>
                    <ul className="mt-3 space-y-2">
                      {level.points.map((point, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-sm text-muted-foreground"
                        >
                          <span className="mt-0.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-muted-foreground" />
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
