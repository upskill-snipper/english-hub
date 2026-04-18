import Link from "next/link";

export const metadata = { title: "Differentiation Guide — Teacher Resources" };

/* ─── Example 5: Differentiation Resource for English Teachers ──── */

const STRATEGIES = [
  {
    category: "Questioning",
    icon: "💬",
    lower: [
      "Who is the character talking to?",
      "What happens in this scene?",
      "Can you find a word that shows the character is angry?",
    ],
    middle: [
      "How does the writer show the character's emotions?",
      "What effect does this word choice have on the reader?",
      "Why do you think the writer chose to start the story this way?",
    ],
    higher: [
      "To what extent does the writer subvert the reader's expectations here?",
      "How does this passage reflect the social anxieties of the period?",
      "Evaluate the effectiveness of the writer's structural choices across the whole text.",
    ],
  },
  {
    category: "Writing Scaffolds",
    icon: "🏗️",
    lower: [
      "Sentence starters: 'The writer uses... to show...'",
      "PEEL paragraph frame with guided prompts",
      "Key vocabulary word bank with definitions",
      "Pre-selected quotes highlighted in the extract",
    ],
    middle: [
      "Topic sentence starters only (students complete independently)",
      "Quote selection guidance (circled sections, not individual quotes)",
      "Technique checklist to reference while writing",
    ],
    higher: [
      "No scaffolding — independent response",
      "Comparative framework (link to other texts/scenes)",
      "Challenge: include an alternative interpretation",
      "Word limit constraint (forces precision)",
    ],
  },
  {
    category: "Reading Activities",
    icon: "📖",
    lower: [
      "Pre-teaching vocabulary before reading",
      "Paired reading with comprehension check questions",
      "Annotated extract with glossary",
      "Visual timeline or storyboard of events",
    ],
    middle: [
      "Independent reading with annotation guidelines",
      "Guided close reading of key passages",
      "Group discussion prompts before writing",
    ],
    higher: [
      "Independent annotation with critical lens (feminist, Marxist, post-colonial)",
      "Comparison across different scenes/chapters without guidance",
      "Research context independently and present findings",
    ],
  },
];

const PP_SEND_STRATEGIES = [
  {
    need: "Pupil Premium (PP)",
    strategies: [
      "Ensure PP students have access to texts (provide copies to keep, not just in-class sets)",
      "Pre-teach vocabulary and context in intervention sessions before the main lesson",
      "Provide revision materials and study guides to take home",
      "Pair with high-attaining peers for collaborative tasks (not ability grouping)",
      "Monitor engagement closely — PP students may disengage silently",
    ],
  },
  {
    need: "EAL (English as an Additional Language)",
    strategies: [
      "Provide bilingual glossary for key literary terms",
      "Use visual supports: images, diagrams, graphic organisers",
      "Allow processing time before expecting verbal responses",
      "Model spoken and written responses explicitly",
      "Value cultural perspectives — EAL students may offer rich alternative interpretations",
      "Distinguish between language acquisition difficulties and comprehension difficulties",
    ],
  },
  {
    need: "SEND — Dyslexia",
    strategies: [
      "Use cream/pastel paper for printed materials (reduce visual stress)",
      "Provide texts in accessible fonts (e.g., OpenDyslexic, Comic Sans, or minimum 12pt sans-serif)",
      "Allow audio recordings of essays instead of written responses for drafting",
      "Use reading rulers or coloured overlays",
      "Focus marking on content and ideas, not spelling (unless SPaG is specifically assessed)",
    ],
  },
  {
    need: "SEND — ADHD / Attention Difficulties",
    strategies: [
      "Break tasks into smaller, timed chunks (10-minute bursts with clear goals)",
      "Provide task checklists with tick boxes for each step",
      "Use movement: stand-up/sit-down discussions, gallery walks, post-it activities",
      "Allow fidget tools discreetly",
      "Position near the front, away from distractions (window, door)",
      "Use visual timers to support focus during timed writing",
    ],
  },
  {
    need: "SEND — Anxiety / Social Difficulties",
    strategies: [
      "Avoid cold-calling or put-on-the-spot questioning",
      "Use think-pair-share to allow rehearsal before whole-class sharing",
      "Offer written alternatives to verbal presentations",
      "Provide advance notice of lesson topics (especially sensitive content in literature texts)",
      "Create safe exit protocols for students who need to leave the room",
    ],
  },
];

const DIFFERENTIATED_TASK = {
  text: "Macbeth: Act 1 Scene 7 — 'If it were done when 'tis done'",
  question: "How does Shakespeare present Macbeth's inner conflict in this soliloquy?",
  bronze: {
    label: "Foundation",
    task: "Read the soliloquy with the glossary provided. Highlight three quotes that show Macbeth is unsure about killing Duncan. For each quote, write one sentence explaining what it tells us about Macbeth's feelings.",
    outcome: "3 quotes + 3 sentences (WHAT the quote shows)",
  },
  silver: {
    label: "Developing",
    task: "Analyse how Shakespeare uses language and imagery to present Macbeth's conflict. Write 2 PEEL paragraphs. Consider: Why does Macbeth use so many questions? What is the effect of the religious imagery?",
    outcome: "2 PEEL paragraphs (WHAT + HOW the writer achieves this)",
  },
  gold: {
    label: "Mastery",
    task: "Evaluate how Shakespeare uses this soliloquy to explore the theme of moral conflict. Consider the significance of this moment in the play's structure. How does it connect to the play's tragic arc? Include alternative critical perspectives where relevant.",
    outcome: "Extended analytical response with structural analysis, alternative interpretations, and contextual links (WHAT + HOW + WHY + SO WHAT)",
  },
};

export default function DifferentiationPage() {
  return (
    <div className="mx-auto max-w-4xl space-y-8">
      <div>
        <Link
          href="/dashboard/teacher/resources"
          className="text-sm text-accent hover:text-primary mb-2 inline-block"
        >
          &larr; Back to Resources
        </Link>
        <h1 className="text-2xl font-bold text-primary">Differentiation Guide for English</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Practical strategies for differentiating English lessons by ability, need, and learning style.
          Includes PP, SEND, and EAL guidance aligned to Ofsted expectations.
        </p>
      </div>

      {/* Differentiation by Ability */}
      <section>
        <h2 className="text-lg font-semibold text-foreground mb-4">Differentiation by Ability</h2>
        <div className="space-y-6">
          {STRATEGIES.map((strat) => (
            <div key={strat.category} className="card">
              <h3 className="font-semibold text-foreground mb-3">
                {strat.icon} {strat.category}
              </h3>
              <div className="grid gap-3 sm:grid-cols-3">
                <div className="rounded-lg bg-amber-500/10 p-3">
                  <p className="text-xs font-bold text-amber-700 mb-2">Lower Ability</p>
                  <ul className="space-y-1.5">
                    {strat.lower.map((item, i) => (
                      <li key={i} className="text-xs text-amber-700">{item}</li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-lg bg-blue-500/10 p-3">
                  <p className="text-xs font-bold text-blue-700 dark:text-blue-300 mb-2">Middle Ability</p>
                  <ul className="space-y-1.5">
                    {strat.middle.map((item, i) => (
                      <li key={i} className="text-xs text-blue-700 dark:text-blue-300">{item}</li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-lg bg-emerald-500/10 p-3">
                  <p className="text-xs font-bold text-emerald-700 dark:text-emerald-300 mb-2">Higher Ability</p>
                  <ul className="space-y-1.5">
                    {strat.higher.map((item, i) => (
                      <li key={i} className="text-xs text-emerald-700 dark:text-emerald-300">{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Example Differentiated Task */}
      <section className="card">
        <h2 className="text-lg font-semibold text-foreground mb-2">Example: Differentiated Task</h2>
        <p className="text-sm text-muted-foreground mb-1">{DIFFERENTIATED_TASK.text}</p>
        <p className="text-sm font-medium text-foreground mb-4">
          Q: {DIFFERENTIATED_TASK.question}
        </p>
        <div className="grid gap-3 sm:grid-cols-3">
          <div className="rounded-lg border-2 border-amber-500/30 p-3">
            <p className="text-xs font-bold text-amber-700 mb-1">{DIFFERENTIATED_TASK.bronze.label}</p>
            <p className="text-xs text-muted-foreground mb-2">{DIFFERENTIATED_TASK.bronze.task}</p>
            <p className="text-xs text-amber-600 font-medium">Target: {DIFFERENTIATED_TASK.bronze.outcome}</p>
          </div>
          <div className="rounded-lg border-2 border-blue-500/30 p-3">
            <p className="text-xs font-bold text-blue-700 dark:text-blue-300 mb-1">{DIFFERENTIATED_TASK.silver.label}</p>
            <p className="text-xs text-muted-foreground mb-2">{DIFFERENTIATED_TASK.silver.task}</p>
            <p className="text-xs text-blue-600 font-medium">Target: {DIFFERENTIATED_TASK.silver.outcome}</p>
          </div>
          <div className="rounded-lg border-2 border-emerald-500/30 p-3">
            <p className="text-xs font-bold text-emerald-700 dark:text-emerald-300 mb-1">{DIFFERENTIATED_TASK.gold.label}</p>
            <p className="text-xs text-muted-foreground mb-2">{DIFFERENTIATED_TASK.gold.task}</p>
            <p className="text-xs text-emerald-600 font-medium">Target: {DIFFERENTIATED_TASK.gold.outcome}</p>
          </div>
        </div>
      </section>

      {/* PP / SEND / EAL Strategies */}
      <section>
        <h2 className="text-lg font-semibold text-foreground mb-4">PP, SEND & EAL Strategies</h2>
        <div className="space-y-4">
          {PP_SEND_STRATEGIES.map((group) => (
            <div key={group.need} className="card">
              <h3 className="font-semibold text-foreground text-sm mb-2">{group.need}</h3>
              <ul className="space-y-1.5">
                {group.strategies.map((s, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs text-muted-foreground">
                    <svg className="h-3.5 w-3.5 shrink-0 text-primary mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
