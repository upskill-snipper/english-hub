import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  alternates: { canonical: 'https://theenglishhub.app/resources/study-tools' },
  title: "Study Tools - GCSE English Revision",
  description:
    "Interactive study tools for GCSE and IGCSE English revision. Revision planner, quote flashcards, quote tester, and progress checklists to help you prepare for your exams.",
};

/* ─── Data ───────────────────────────────────────────────────── */

const TOOLS = [
  {
    title: "Revision Planner",
    href: "/resources/study-tools/revision-planner",
    description:
      "Plan your revision with a calendar-style planner. Set your exam dates, get a suggested schedule, track topics by exam board, and see a live countdown to your exams.",
    features: [
      "Calendar-style revision schedule",
      "Exam date countdown",
      "Suggested study plan by phase",
      "Topic checklist by exam board",
    ],
    colour: "from-primary to-primary-400",
    icon: (
      <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
      </svg>
    ),
  },
  {
    title: "Quote Flashcards",
    href: "/resources/study-tools/flashcards",
    description:
      "Pre-made flashcard sets for every key GCSE Literature text. Click to reveal analysis, shuffle for random testing, and track which quotes you have mastered.",
    features: [
      "Macbeth, ACC, AIC, J&H, R&J sets",
      "Click-to-reveal analysis",
      "Shuffle and test mode",
      "Mastery tracking",
    ],
    colour: "from-accent to-accent-400",
    icon: (
      <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9.776c.112-.017.227-.026.344-.026h15.812c.117 0 .232.009.344.026m-16.5 0a2.25 2.25 0 00-1.883 2.542l.857 6a2.25 2.25 0 002.227 1.932H19.05a2.25 2.25 0 002.227-1.932l.857-6a2.25 2.25 0 00-1.883-2.542m-16.5 0V6A2.25 2.25 0 016 3.75h3.879a1.5 1.5 0 011.06.44l2.122 2.12a1.5 1.5 0 001.06.44H18A2.25 2.25 0 0120.25 9v.776" />
      </svg>
    ),
  },
  {
    title: "Quote Tester",
    href: "/resources/study-tools/tester",
    description:
      "Test yourself on key quotations from your set texts. Fill-in-the-blank challenges, timed recall tests, and spaced repetition to lock quotes into long-term memory.",
    features: [
      "Fill-in-the-blank quotes",
      "Timed recall challenges",
      "Spaced repetition system",
      "Score tracking",
    ],
    colour: "from-amber-600 to-amber-400",
    icon: (
      <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
      </svg>
    ),
  },
  {
    title: "Progress Checklists",
    href: "/resources/study-tools/checklists",
    description:
      "Comprehensive skill-by-skill checklists for every exam board. Tick off each topic as you revise and watch your progress grow. Saves automatically to your browser.",
    features: [
      "AQA Language & Literature",
      "Edexcel Language & Literature",
      "Cambridge IGCSE checklists",
      "Auto-saving progress tracker",
    ],
    colour: "from-emerald-700 to-emerald-500",
    icon: (
      <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

/* ─── Page ───────────────────────────────────────────────────── */

export default function StudyToolsHub() {
  return (
    <>
      {/* Hero */}
      <div className="mb-10">
        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Study Tools
        </h1>
        <p className="mt-3 max-w-3xl text-lg text-muted-foreground leading-relaxed">
          Interactive revision tools designed to help you prepare for your GCSE and IGCSE English exams.
          Plan your revision, test yourself on key quotes, and track your progress across every topic.
        </p>
      </div>

      {/* Tool cards */}
      <div className="grid gap-6 sm:grid-cols-2">
        {TOOLS.map((tool) => (
          <Link
            key={tool.href}
            href={tool.href}
            className="group relative flex flex-col overflow-hidden rounded-xl border border-border bg-card shadow-md transition hover:shadow-lg hover:border-accent-300"
          >
            {/* Gradient header */}
            <div className={`bg-gradient-to-br ${tool.colour} px-6 py-6 text-white`}>
              <div className="flex items-start justify-between">
                <h2 className="text-xl font-bold leading-tight">{tool.title}</h2>
                <div className="opacity-80">{tool.icon}</div>
              </div>
            </div>

            {/* Body */}
            <div className="flex flex-1 flex-col p-6">
              <p className="text-sm leading-relaxed text-muted-foreground">
                {tool.description}
              </p>

              {/* Feature list */}
              <ul className="mt-4 space-y-1.5">
                {tool.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <svg className="mt-0.5 h-4 w-4 shrink-0 text-accent" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <div className="mt-auto pt-5">
                <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent group-hover:text-primary transition-colors">
                  Open tool
                  <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Tip box */}
      <div className="mt-10 rounded-xl border border-accent-100 bg-accent-50/50 p-6">
        <h3 className="text-lg font-bold text-foreground">Getting the most from these tools</h3>
        <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
          <li className="flex items-start gap-2">
            <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            <span><strong>Start with the revision planner.</strong> Set your exam dates and build a schedule before diving into individual topics.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            <span><strong>Use flashcards daily.</strong> Short, regular sessions are far more effective than marathon cramming.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            <span><strong>Track your progress.</strong> Use the checklists to identify weak areas and focus your remaining revision time.</span>
          </li>
        </ul>
      </div>
    </>
  );
}
