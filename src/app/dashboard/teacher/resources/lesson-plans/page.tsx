import Link from "next/link";

export const metadata = { title: "Lesson Plans — Teacher Resources" };

/* ─── Example Lesson Plan Content ─────────────────────────────────── */

const LESSON_PLANS = [
  {
    id: "lp-inspector-calls",
    title: "An Inspector Calls: Responsibility & Social Class",
    board: "AQA",
    duration: "5 lessons (1 hour each)",
    yearGroup: "Year 10/11",
    overview:
      "A complete scheme of work exploring J.B. Priestley's An Inspector Calls. Students analyse how Priestley uses the Birling family to critique Edwardian social attitudes and explore collective responsibility.",
    objectives: [
      "AO1: Read, understand and respond to texts — select and synthesise evidence",
      "AO2: Analyse language, form and structure using subject terminology",
      "AO3: Show understanding of relationships between texts and the contexts in which they were written",
    ],
    lessons: [
      {
        number: 1,
        title: "Context & the Birling Family",
        starter: "Brainstorm: What was life like in 1912 vs 1945? Display two photographs and ask students to identify key differences.",
        mainActivities: [
          "Teacher-led: 10-minute context presentation covering Edwardian class system, capitalism vs socialism, the welfare state",
          "Paired reading: Act 1 opening stage directions — annotate what we learn about the Birlings from Priestley's descriptions",
          "Group task: Create a 'Family Profile' poster for the Birlings using evidence from Act 1. Include: social status, attitudes to others, key quotes",
        ],
        plenary: "Exit ticket: 'What impression does Priestley create of the Birling family in the opening of the play? Use one quote to support your answer.'",
        differentiation: "Scaffolded quote analysis frame for lower-ability; extension question on dramatic irony of Mr Birling's speeches for higher-ability.",
        resources: ["Context presentation slides", "Act 1 extract (printed)", "Family Profile template", "Exit ticket slips"],
      },
      {
        number: 2,
        title: "The Inspector's Arrival & Eva Smith",
        starter: "Recall quiz: 5 questions on Act 1 context (mini whiteboards).",
        mainActivities: [
          "Shared reading: Inspector Goole's entrance — track stage directions and language choices",
          "Language analysis: How does Priestley present the Inspector differently from the Birlings? Complete a comparison table",
          "Close reading: Eva Smith's story through Sheila's confession. Students highlight linguistic techniques and annotate effects",
          "Timed practice: Write 2 PEEL paragraphs on 'How does Priestley present the Inspector as a mouthpiece for his socialist views?'",
        ],
        plenary: "Peer assessment using the AQA mark scheme criteria (displayed on board). Students give one WWW and one EBI.",
        differentiation: "Model PEEL paragraph provided for lower-ability; higher-ability attempt a third paragraph comparing to Mr Birling.",
        resources: ["Mini whiteboards", "Comparison table handout", "AQA mark scheme extract", "PEEL frame"],
      },
      {
        number: 3,
        title: "Generational Divide: Sheila vs Mr Birling",
        starter: "Spectrum line: 'Who is most responsible for Eva Smith's death?' Students physically position themselves and justify.",
        mainActivities: [
          "Character study: Create a Venn diagram comparing Sheila and Mr Birling's responses to the Inspector's revelations",
          "Quote explosion: Each group given 3 key quotes — explode with annotations covering language, structure, context",
          "Essay planning: 'How does Priestley use the character of Sheila to convey his message about responsibility?' Plan using a structured template",
        ],
        plenary: "Share one 'golden sentence' from their essay plan with the class. Peer vote on strongest opening.",
        differentiation: "Pre-selected quotes with sentence starters for lower-ability; higher-ability select their own quotes and consider alternative interpretations.",
        resources: ["Venn diagram template", "Quote cards (6 per group)", "Essay planning frame", "Sentence starters sheet"],
      },
      {
        number: 4,
        title: "Mrs Birling, Eric & the Climax",
        starter: "Dramatic reading: Two students perform Mrs Birling's confrontation with the Inspector. Class note down 3 key quotes.",
        mainActivities: [
          "Hot-seating: Student volunteers answer questions as Mrs Birling and Eric — class prepares questions in advance",
          "Thematic tracking: Complete a 'Responsibility Grid' showing how each character responds to guilt",
          "Extended writing: Timed 25-minute exam-style response: 'How does Priestley present ideas about responsibility in An Inspector Calls?'",
        ],
        plenary: "Self-assessment against AQA band descriptors. Students identify which band their response sits in and set a target for improvement.",
        differentiation: "Writing frame with topic sentences for lower-ability; higher-ability write under timed conditions without a frame.",
        resources: ["Responsibility Grid handout", "AQA band descriptors (student-friendly version)", "Timer display"],
      },
      {
        number: 5,
        title: "The Ending & Priestley's Message",
        starter: "Discussion: 'Is the Inspector real?' Students debate in pairs before sharing with the class.",
        mainActivities: [
          "Close reading: The final phone call — analyse the cyclical structure and its significance",
          "Context connection: How does the play's 1945 audience change the meaning of the ending compared to a modern audience?",
          "Full essay: 'Starting with this extract, explore how Priestley presents the theme of social responsibility.' (40 minutes, exam conditions)",
        ],
        plenary: "Gallery walk: Students read 2 other essays and leave a positive comment on a Post-it note.",
        differentiation: "Extract provided with key quotes highlighted for lower-ability; higher-ability given the extract without annotations.",
        resources: ["Extract handout", "Essay answer booklets", "Post-it notes for gallery walk", "AQA mark scheme for self-marking"],
      },
    ],
    assessmentOpportunities: [
      "Lesson 1: Exit ticket (formative)",
      "Lesson 2: Peer-assessed PEEL paragraphs (formative)",
      "Lesson 4: Timed exam response — teacher-marked (summative)",
      "Lesson 5: Full essay under exam conditions — teacher-marked (summative)",
    ],
    crossCurricular: [
      "History: Edwardian Britain, class system, WWI and WWII",
      "PSHE: Social responsibility, community, inequality",
      "Drama: Performance techniques, stage directions, dramatic irony",
    ],
  },
];

export default function LessonPlansPage() {
  const plan = LESSON_PLANS[0];

  return (
    <div className="mx-auto max-w-4xl space-y-8">
      <div>
        <Link
          href="/dashboard/teacher/resources"
          className="text-sm text-accent hover:text-primary mb-2 inline-block"
        >
          &larr; Back to Resources
        </Link>
        <h1 className="text-2xl font-bold text-primary">{plan.title}</h1>
        <div className="mt-2 flex flex-wrap gap-2">
          <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
            {plan.board}
          </span>
          <span className="inline-flex items-center rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">
            {plan.duration}
          </span>
          <span className="inline-flex items-center rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">
            {plan.yearGroup}
          </span>
        </div>
      </div>

      {/* Overview */}
      <section className="card">
        <h2 className="text-lg font-semibold text-foreground mb-2">Overview</h2>
        <p className="text-sm text-muted-foreground">{plan.overview}</p>
      </section>

      {/* Learning Objectives */}
      <section className="card">
        <h2 className="text-lg font-semibold text-foreground mb-3">Learning Objectives</h2>
        <ul className="space-y-2">
          {plan.objectives.map((obj, i) => (
            <li key={i} className="flex gap-2 text-sm text-muted-foreground">
              <span className="text-primary font-bold shrink-0">AO{i + 1}</span>
              <span>{obj}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Individual Lessons */}
      {plan.lessons.map((lesson) => (
        <section key={lesson.number} className="card space-y-4">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white text-sm font-bold">
              {lesson.number}
            </div>
            <h2 className="text-lg font-semibold text-foreground">{lesson.title}</h2>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground mb-1">Starter (5-10 mins)</h3>
            <p className="text-sm text-muted-foreground">{lesson.starter}</p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground mb-2">Main Activities</h3>
            <ol className="space-y-2">
              {lesson.mainActivities.map((activity, i) => (
                <li key={i} className="flex gap-2 text-sm text-muted-foreground">
                  <span className="text-primary font-medium shrink-0">{i + 1}.</span>
                  <span>{activity}</span>
                </li>
              ))}
            </ol>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground mb-1">Plenary (5-10 mins)</h3>
            <p className="text-sm text-muted-foreground">{lesson.plenary}</p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-lg bg-blue-500/10 p-3">
              <h3 className="text-sm font-semibold text-blue-700 dark:text-blue-300 mb-1">Differentiation</h3>
              <p className="text-xs text-blue-700 dark:text-blue-300">{lesson.differentiation}</p>
            </div>
            <div className="rounded-lg bg-amber-500/10 p-3">
              <h3 className="text-sm font-semibold text-amber-700 dark:text-amber-300 mb-1">Resources Needed</h3>
              <ul className="text-xs text-amber-700 dark:text-amber-300 space-y-0.5">
                {lesson.resources.map((r, i) => (
                  <li key={i}>• {r}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      ))}

      {/* Assessment Opportunities */}
      <section className="card">
        <h2 className="text-lg font-semibold text-foreground mb-3">Assessment Opportunities</h2>
        <ul className="space-y-1.5">
          {plan.assessmentOpportunities.map((opp, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
              <svg className="h-4 w-4 shrink-0 text-primary mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              {opp}
            </li>
          ))}
        </ul>
      </section>

      {/* Cross-Curricular Links */}
      <section className="card">
        <h2 className="text-lg font-semibold text-foreground mb-3">Cross-Curricular Links</h2>
        <ul className="space-y-1.5">
          {plan.crossCurricular.map((link, i) => (
            <li key={i} className="text-sm text-muted-foreground">
              <span className="font-medium">{link.split(':')[0]}:</span>
              {link.split(':').slice(1).join(':')}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
