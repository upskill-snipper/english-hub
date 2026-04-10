import type { Metadata } from "next";
import Link from "next/link";

/* ─── Metadata ───────────────────────────────────────────────── */

export const metadata: Metadata = {
  alternates: { canonical: 'https://theenglishhub.app/resources/grade-targets/grade-5' },
  title: "Getting a Grade 5 | Grade Targets | The English Hub",
  description:
    "Everything you need to achieve a Grade 5 in GCSE English. What examiners expect, skills checklists, common weaknesses, example responses, and specific tips for moving from a 4 to a 5.",
};

/* ─── Data ───────────────────────────────────────────────────── */

const EXAMINER_EXPECTATIONS = [
  {
    area: "Reading & Analysis",
    expectations: [
      "Clear understanding of texts, not just surface-level retelling",
      "Explanations of how writers use language and structure for effect",
      "Relevant quotations used to support points",
      "Appropriate use of subject terminology (e.g. metaphor, juxtaposition, tone)",
      "Awareness of the writer's purpose and how it connects to the reader",
    ],
  },
  {
    area: "Writing",
    expectations: [
      "Writing that is clearly organised into paragraphs with a logical flow",
      "A range of vocabulary -- not always the most ambitious, but well-chosen",
      "Varied sentence structures (not just simple sentences)",
      "Generally accurate spelling, punctuation, and grammar",
      "Clear sense of audience and purpose in transactional writing",
    ],
  },
  {
    area: "Literature Essays",
    expectations: [
      "A clear argument that addresses the question directly",
      "Relevant references to the text (quotations or paraphrases)",
      "Some explanation of writer's methods, not just 'what happens'",
      "Basic awareness of context where relevant",
      "A structured response with an introduction, developed paragraphs, and conclusion",
    ],
  },
];

const SKILLS_CHECKLIST = [
  { skill: "I can identify the main ideas and themes in a text", category: "Reading" },
  { skill: "I can explain how a writer uses language for effect", category: "Reading" },
  { skill: "I can select relevant quotations to support my points", category: "Reading" },
  { skill: "I can use subject terminology correctly (simile, metaphor, etc.)", category: "Reading" },
  { skill: "I can explain how structure contributes to meaning", category: "Reading" },
  { skill: "I write in clear, organised paragraphs", category: "Writing" },
  { skill: "I use a range of vocabulary, not just basic words", category: "Writing" },
  { skill: "I vary my sentence structures for effect", category: "Writing" },
  { skill: "My spelling, punctuation, and grammar are mostly accurate", category: "Writing" },
  { skill: "I can write in an appropriate register for the task", category: "Writing" },
  { skill: "I can write a clear thesis statement that answers the question", category: "Literature" },
  { skill: "I can write PEEL paragraphs (Point, Evidence, Explanation, Link)", category: "Literature" },
  { skill: "I can comment on writer's methods, not just plot", category: "Literature" },
  { skill: "I include some relevant context in my essays", category: "Literature" },
];

const COMMON_WEAKNESSES = [
  {
    weakness: "Retelling the story instead of analysing",
    fix: "Always ask yourself: 'What is the writer doing here and why?' Focus on techniques and effects, not plot summary.",
  },
  {
    weakness: "Feature-spotting without explanation",
    fix: "Don't just say 'the writer uses a metaphor.' Explain what the metaphor suggests, what associations it creates, and how it affects the reader.",
  },
  {
    weakness: "Vague or generic explanations",
    fix: "Instead of 'this creates tension,' explain exactly how it creates tension. What specific words or images make the reader feel uneasy?",
  },
  {
    weakness: "Weak or no quotations",
    fix: "Embed short, precise quotations into your sentences. You don't need whole sentences -- single words or phrases are often more effective.",
  },
  {
    weakness: "Ignoring the question",
    fix: "Re-read the question after every paragraph. Does your point directly answer what has been asked? If not, refocus.",
  },
  {
    weakness: "Repetitive sentence structures in writing tasks",
    fix: "Practice starting sentences in different ways: with adverbs, prepositional phrases, or subordinate clauses. Mix short and long sentences.",
  },
  {
    weakness: "Weak openings and endings in creative writing",
    fix: "Avoid 'I woke up' openings. Start in the middle of the action, with dialogue, or with a striking image. End with resonance, not a neat wrap-up.",
  },
];

const IMPROVEMENT_STEPS = [
  {
    step: 1,
    title: "Master the PEEL paragraph",
    description:
      "Every analytical paragraph should have a clear Point, Evidence (quotation), Explanation of language/technique, and a Link back to the question. Practice this structure until it becomes automatic.",
  },
  {
    step: 2,
    title: "Build your vocabulary for analysis",
    description:
      "Learn 10-15 key analytical verbs: suggests, implies, connotes, evokes, emphasises, conveys, reinforces, undermines, highlights, reveals. Use them instead of 'shows' every time.",
  },
  {
    step: 3,
    title: "Practice embedding quotations",
    description:
      "Instead of: 'A quote that shows this is \"the dagger of the mind.\"' Write: 'Macbeth's reference to \"the dagger of the mind\" suggests his growing psychological torment.'",
  },
  {
    step: 4,
    title: "Learn 10 key techniques thoroughly",
    description:
      "You don't need to know 50 techniques superficially. Know 10 really well (metaphor, simile, personification, alliteration, sibilance, juxtaposition, repetition, short sentences, enjambment, pathetic fallacy) and practise explaining their effects.",
  },
  {
    step: 5,
    title: "Improve your SPaG accuracy",
    description:
      "Spelling, punctuation, and grammar are worth marks in every paper. Focus on common errors: their/there/they're, comma splices, apostrophes, and homophones. Proofread every response.",
  },
  {
    step: 6,
    title: "Time yourself under exam conditions",
    description:
      "Grade 4 students often run out of time or spend too long on low-mark questions. Practise writing to time: roughly 1 minute per mark. Plan before you write.",
  },
];

const EXAMPLE_RESPONSES = [
  {
    type: "Language Analysis",
    question: "How does the writer use language to describe the storm?",
    extract:
      "\"The wind howled through the empty streets, tearing at the shutters like claws. Rain hammered the cobblestones, each drop a tiny explosion of grey.\"",
    response:
      "The writer personifies the wind, describing it as having \"howled,\" which suggests it is a living, threatening force rather than simply a weather event. The simile \"like claws\" reinforces this sense of aggression, as claws are associated with predatory animals, implying that the storm is attacking the town. The verb \"hammered\" is particularly effective because it connotes relentless, violent force, suggesting the rain is punishing the ground rather than simply falling. The metaphor of \"each drop a tiny explosion\" emphasises the intensity of the storm, with the word \"explosion\" carrying connotations of destruction and chaos. Overall, the writer creates a vivid sense of danger through language that transforms the natural event into something almost deliberately hostile.",
    annotation:
      "This response works at Grade 5 because it identifies specific techniques (personification, simile, metaphor), uses relevant quotations, and explains their effects on the reader. It uses subject terminology accurately and has a clear analytical structure. To push higher, the student could explore alternative interpretations or comment on the cumulative effect of the writer's choices.",
  },
  {
    type: "Creative Writing",
    question: "Describe a place that feels abandoned. (First two paragraphs)",
    response:
      "The factory stood like a forgotten giant at the edge of town, its broken windows staring blankly at the sky. Weeds had forced their way through cracks in the concrete, patient and unstoppable, reclaiming what had once been theirs. The car park, which had once held rows of gleaming vehicles, was now a patchwork of puddles and crumbling tarmac.\n\nInside, the silence was the loudest thing. Dust hung in the air like a held breath, disturbed only when a pigeon clattered through a gap in the roof. Machinery stood frozen mid-task, a half-finished widget still clamped in rusted jaws. On the wall, a faded safety poster warned workers to wear their hard hats -- a message nobody would ever read again.",
    annotation:
      "This works at Grade 5 because it uses a range of techniques effectively: simile (\"like a forgotten giant\"), personification (\"staring blankly\"), and sensory details. The vocabulary is varied and well-chosen (\"patchwork,\" \"clattered\"). There is a clear sense of atmosphere. To improve, the student could use more varied sentence lengths for effect, experiment with more ambitious structural choices, and push the imagery to be more original.",
  },
  {
    type: "Literature Essay",
    question: "How does Shakespeare present Macbeth as a tragic hero?",
    response:
      "Shakespeare presents Macbeth as a tragic hero by showing his transformation from a loyal, brave warrior into a guilt-ridden tyrant. At the start of the play, Macbeth is described as \"brave Macbeth\" and \"Bellona's bridegroom,\" which shows that he is respected and admired. The noun \"bridegroom\" suggests he is married to war, implying he is a natural and skilled fighter. This establishes him as a noble figure, which is important because a tragic hero must start in a position of greatness before they fall.\n\nHowever, Macbeth's fatal flaw is his \"vaulting ambition,\" which Lady Macbeth and the witches exploit. The adjective \"vaulting\" suggests ambition that overreaches, like a rider trying to jump too high and falling. After killing Duncan, Macbeth says his hands are \"a sorry sight\" and asks \"will all great Neptune's ocean wash this blood clean from my hand?\" The hyperbole of needing an entire ocean shows the enormity of his guilt, and the fact that he knows the answer is no suggests he understands he has crossed a line he can never return from. This makes him tragic because he is aware of his own destruction but cannot stop it.",
    annotation:
      "This is a solid Grade 5 Literature response. It has a clear argument (Macbeth transforms from hero to tyrant), uses relevant quotations, and explains the effects of specific words. The student comments on writer's methods (Shakespeare's use of hyperbole, adjective choice) rather than just retelling the plot. To push higher, the student could engage more deeply with context (Jacobean ideas about kingship and ambition), explore alternative interpretations, and use more sophisticated analytical vocabulary.",
  },
];

const SPECIFIC_TIPS = [
  {
    tip: "Use the 'what, how, why' formula",
    detail: "What is the writer saying? How are they saying it (technique/language)? Why -- what effect does this create for the reader?",
  },
  {
    tip: "Front-load your paragraphs",
    detail: "Start each paragraph with a clear, direct point that answers the question. Don't build up to your point -- state it immediately.",
  },
  {
    tip: "Learn 5 context points per text",
    detail: "You don't need to be a history expert. Learn 5 key context points for each Literature text and practise linking them to the writer's message.",
  },
  {
    tip: "Plan for 5 minutes, write for 25",
    detail: "A 5-minute plan saves time overall. Jot down your key points, quotations, and the order you'll write them in. Planned responses are always better.",
  },
  {
    tip: "Read the mark scheme",
    detail: "Look at what examiners actually reward. Grade 5 descriptors use words like 'clear,' 'relevant,' and 'appropriate' -- make sure your responses match these.",
  },
  {
    tip: "Check your work with CUPS",
    detail: "Capitals, Understanding (does it make sense?), Punctuation, Spelling. Spend the last 2-3 minutes of every answer checking for errors.",
  },
];

/* ─── Icons ──────────────────────────────────────────────────── */

function ArrowRight() {
  return (
    <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg className="h-5 w-5 flex-shrink-0 text-emerald-600" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
    </svg>
  );
}

function WarningIcon() {
  return (
    <svg className="h-5 w-5 flex-shrink-0 text-amber-500" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
    </svg>
  );
}

/* ─── Page ───────────────────────────────────────────────────── */

export default function Grade5Page() {
  return (
    <>

      {/* Hero */}
      <section className="border-b bg-gradient-to-b from-primary/[0.06] to-transparent px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <Link
            href="/resources/grade-targets"
            className="inline-flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
            </svg>
            Grade Targets
          </Link>
          <div className="mt-4 flex items-center justify-center gap-3">
            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-600 text-2xl font-bold text-white shadow-lg">
              5
            </span>
            <div className="text-left">
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Getting a Grade 5
              </h1>
              <p className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
                Strong Pass
              </p>
            </div>
          </div>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            A Grade 5 is a strong pass that shows clear understanding and
            competent skills. Here is exactly what you need to do to get there.
          </p>
        </div>
      </section>

      {/* What examiners expect */}
      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-foreground">
          What examiners expect at Grade 5
        </h2>
        <p className="mt-2 text-muted-foreground">
          The key word at Grade 5 is <strong>clear</strong>. Examiners want to
          see clear understanding, clear explanations, and clear communication.
          You don&apos;t need to be brilliant -- you need to be consistently competent.
        </p>

        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {EXAMINER_EXPECTATIONS.map((section) => (
            <div
              key={section.area}
              className="rounded-xl border border-border bg-card p-6 shadow-md"
            >
              <h3 className="text-lg font-bold text-foreground">
                {section.area}
              </h3>
              <ul className="mt-4 space-y-3">
                {section.expectations.map((exp) => (
                  <li key={exp} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckIcon />
                    <span>{exp}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Skills checklist */}
      <section className="bg-muted px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-2xl font-bold text-foreground">
            Grade 5 Skills Checklist
          </h2>
          <p className="mt-2 text-muted-foreground">
            Tick off the skills you are confident with. Any gaps? Those are your
            revision priorities.
          </p>

          {["Reading", "Writing", "Literature"].map((category) => (
            <div key={category} className="mt-6">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-emerald-600">
                {category}
              </h3>
              <div className="mt-2 space-y-2">
                {SKILLS_CHECKLIST.filter((s) => s.category === category).map(
                  (item) => (
                    <label
                      key={item.skill}
                      className="flex cursor-pointer items-center gap-3 rounded-lg border border-border bg-card p-3 transition hover:border-emerald-600/40"
                    >
                      <input
                        type="checkbox"
                        className="h-4 w-4 rounded border-border text-emerald-600 focus:ring-emerald-600"
                      />
                      <span className="text-sm text-muted-foreground">{item.skill}</span>
                    </label>
                  )
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Common weaknesses */}
      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-foreground">
          Common weaknesses at this level
        </h2>
        <p className="mt-2 text-muted-foreground">
          These are the mistakes that keep students at Grade 4 when they could be
          reaching a 5. Recognise any?
        </p>

        <div className="mt-8 space-y-4">
          {COMMON_WEAKNESSES.map((item) => (
            <div
              key={item.weakness}
              className="rounded-xl border border-border bg-card p-5 shadow-md"
            >
              <div className="flex items-start gap-3">
                <WarningIcon />
                <div>
                  <h3 className="font-semibold text-foreground">{item.weakness}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    <span className="font-medium text-emerald-600">Fix: </span>
                    {item.fix}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* How to improve from 4 to 5 */}
      <section className="bg-gradient-to-br from-emerald-600/5 to-emerald-600/10 px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-2xl font-bold text-foreground">
            How to move from Grade 4 to Grade 5
          </h2>
          <p className="mt-2 text-muted-foreground">
            Six concrete steps to close the gap. Focus on one at a time.
          </p>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {IMPROVEMENT_STEPS.map((item) => (
              <div
                key={item.step}
                className="rounded-xl border border-emerald-600/20 bg-card p-6 shadow-md"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-600 text-sm font-bold text-white">
                  {item.step}
                </span>
                <h3 className="mt-3 font-bold text-foreground">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Example responses */}
      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-foreground">
          Example Grade 5 Responses
        </h2>
        <p className="mt-2 text-muted-foreground">
          See what Grade 5 work actually looks like, with annotations explaining
          what works and how to improve.
        </p>

        <div className="mt-8 space-y-8">
          {EXAMPLE_RESPONSES.map((example) => (
            <div
              key={example.type}
              className="overflow-hidden rounded-xl border border-border bg-card shadow-md"
            >
              <div className="border-b border-border bg-muted px-6 py-4">
                <span className="rounded-full bg-emerald-600/10 px-3 py-1 text-xs font-semibold text-emerald-600">
                  {example.type}
                </span>
                <p className="mt-2 font-semibold text-foreground">
                  {example.question}
                </p>
                {example.extract && (
                  <p className="mt-2 text-sm italic text-muted-foreground">
                    {example.extract}
                  </p>
                )}
              </div>

              <div className="px-6 py-5">
                <h4 className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  Student Response
                </h4>
                <div className="mt-2 rounded-lg bg-muted p-4">
                  {example.response.split("\n\n").map((para, i) => (
                    <p
                      key={i}
                      className="mt-2 first:mt-0 text-sm leading-relaxed text-muted-foreground"
                    >
                      {para}
                    </p>
                  ))}
                </div>
              </div>

              <div className="border-t border-emerald-600/20 bg-emerald-600/5 px-6 py-4">
                <h4 className="text-xs font-semibold uppercase tracking-wide text-emerald-600">
                  Examiner Comment
                </h4>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  {example.annotation}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Specific tips */}
      <section className="bg-muted px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-2xl font-bold text-foreground">
            Grade 5 Tips
          </h2>
          <p className="mt-2 text-muted-foreground">
            Quick, actionable advice you can apply immediately.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {SPECIFIC_TIPS.map((item) => (
              <div
                key={item.tip}
                className="rounded-xl border border-border bg-card p-5 shadow-md"
              >
                <h3 className="font-bold text-foreground">{item.tip}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>

          {/* Navigation */}
          <div className="mt-12 flex flex-col items-center justify-between gap-4 sm:flex-row">
            <Link
              href="/resources/grade-targets"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-foreground transition-colors"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
              </svg>
              All Grade Targets
            </Link>
            <Link
              href="/resources/grade-targets/grade-7"
              className="group inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-white shadow transition hover:bg-primary"
            >
              Ready for Grade 7? <ArrowRight />
            </Link>
          </div>
        </div>
      </section>

    </>
  );
}
