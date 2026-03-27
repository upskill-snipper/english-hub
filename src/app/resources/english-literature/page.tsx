"use client";

import { useState } from "react";
import Link from "next/link";
import { ExamBoardDisclaimer } from "@/components/ExamBoardDisclaimer";

/* ─── Data ───────────────────────────────────────────────────── */

const BOARDS = [
  {
    slug: "aqa",
    name: "AQA",
    spec: "8702",
    description:
      "Shakespeare, the 19th-century novel, modern texts and drama, plus a poetry anthology and unseen poetry. Two exam papers with no coursework.",
    papers: [
      "Paper 1: Shakespeare & 19th-Century Novel",
      "Paper 2: Modern Texts & Poetry",
    ],
    color: "border-primary",
    bgColor: "bg-primary",
    students: "~300,000",
    highlight: "Most popular board in England",
  },
  {
    slug: "edexcel",
    name: "Edexcel (Pearson)",
    spec: "1ET0",
    description:
      "Shakespeare and post-1914 literature (Paper 1), plus 19th-century novel, poetry anthology, and unseen poetry (Paper 2).",
    papers: [
      "Paper 1: Shakespeare & Post-1914 Literature",
      "Paper 2: 19th-Century Novel & Poetry",
    ],
    color: "border-[#27AE60]",
    bgColor: "bg-[#27AE60]",
    students: "~180,000",
    highlight: "Strong international presence",
  },
  {
    slug: "caie",
    name: "Cambridge IGCSE",
    spec: "0475",
    description:
      "Literature in English covering prose, drama, and poetry from a wide range of international texts with both exam and coursework routes.",
    papers: ["Paper 1: Poetry & Prose", "Paper 2: Drama"],
    color: "border-[#E74C3C]",
    bgColor: "bg-[#E74C3C]",
    students: "~100,000+",
    highlight: "Taken in 130+ countries worldwide",
  },
  {
    slug: "ocr",
    name: "OCR",
    spec: "J352",
    description:
      "Exploring modern and literary heritage texts, plus poetry across time. Two exam components covering Shakespeare, prose, and poetry.",
    papers: [
      "Component 01: Exploring Modern & Literary Heritage Texts",
      "Component 02: Poetry Across Time",
    ],
    color: "border-[#8E44AD]",
    bgColor: "bg-[#8E44AD]",
    students: "~50,000",
    highlight: "Cambridge Assessment group",
  },
  {
    slug: "wjec",
    name: "WJEC Eduqas",
    spec: "C720QS",
    description:
      "Two components covering Shakespeare, poetry anthology, post-1914 prose/drama, 19th-century prose, and unseen poetry. Popular in Wales and increasingly chosen in England.",
    papers: [
      "Component 1: Shakespeare & Poetry",
      "Component 2: Post-1914, 19th-Century Prose & Unseen Poetry",
    ],
    color: "border-[#D4AC0D]",
    bgColor: "bg-[#D4AC0D]",
    students: "~60,000",
    highlight: "Default board in Wales",
  },
];

const HERO_STATS = [
  { label: "Exam Boards Covered", value: "5" },
  { label: "Set Texts Analysed", value: "30+" },
  { label: "Revision Notes", value: "200+" },
  { label: "Practice Questions", value: "500+" },
];

const OVERVIEW_TOPICS = [
  "Shakespeare plays in depth",
  "19th-century novels and their contexts",
  "Modern prose and drama",
  "Poetry anthology analysis",
  "Unseen poetry techniques",
  "Comparing themes, characters, and writers' methods",
];

const SET_TEXTS_COMPARISON = [
  {
    title: "Macbeth",
    type: "Shakespeare",
    boards: { aqa: true, edexcel: true, caie: true, ocr: true, wjec: true },
    link: "macbeth",
  },
  {
    title: "Romeo and Juliet",
    type: "Shakespeare",
    boards: { aqa: true, edexcel: true, caie: false, ocr: true, wjec: true },
    link: "romeo-and-juliet",
  },
  {
    title: "The Tempest",
    type: "Shakespeare",
    boards: { aqa: true, edexcel: true, caie: false, ocr: true, wjec: false },
    link: "the-tempest",
  },
  {
    title: "A Christmas Carol",
    type: "19th-Century Novel",
    boards: { aqa: true, edexcel: true, caie: false, ocr: true, wjec: false },
    link: "christmas-carol",
  },
  {
    title: "An Inspector Calls",
    type: "Modern Text",
    boards: { aqa: true, edexcel: true, caie: false, ocr: true, wjec: true },
    link: "inspector-calls",
  },
  {
    title: "Jekyll and Hyde",
    type: "19th-Century Novel",
    boards: { aqa: true, edexcel: true, caie: false, ocr: false, wjec: false },
    link: "jekyll-and-hyde",
  },
  {
    title: "Great Expectations",
    type: "19th-Century Novel",
    boards: { aqa: true, edexcel: true, caie: true, ocr: false, wjec: true },
    link: "great-expectations",
  },
  {
    title: "Lord of the Flies",
    type: "Modern Text",
    boards: { aqa: true, edexcel: false, caie: true, ocr: false, wjec: false },
    link: "lord-of-the-flies",
  },
];

const BOARD_FINDER_QUESTIONS = [
  {
    question: "Are you studying in Wales?",
    yes: "wjec",
    yesLabel: "Most likely WJEC Eduqas",
  },
  {
    question: "Are you taking an IGCSE (international) qualification?",
    yes: "caie",
    yesLabel: "Most likely Cambridge IGCSE",
  },
  {
    question: 'Does your spec code start with "8702"?',
    yes: "aqa",
    yesLabel: "You are studying AQA",
  },
  {
    question: 'Does your spec code start with "1ET0"?',
    yes: "edexcel",
    yesLabel: "You are studying Edexcel",
  },
  {
    question: 'Does your spec code start with "J352"?',
    yes: "ocr",
    yesLabel: "You are studying OCR",
  },
];

const QUICK_LINKS_TEXTS = [
  {
    title: "Macbeth",
    subtitle: "Shakespeare",
    href: "/resources/english-literature/aqa/macbeth",
    icon: "crown",
  },
  {
    title: "A Christmas Carol",
    subtitle: "Charles Dickens",
    href: "/resources/english-literature/aqa/christmas-carol",
    icon: "book",
  },
  {
    title: "An Inspector Calls",
    subtitle: "J.B. Priestley",
    href: "/resources/english-literature/aqa/inspector-calls",
    icon: "magnifier",
  },
  {
    title: "Poetry Anthology",
    subtitle: "AQA Power & Conflict",
    href: "/resources/english-literature/aqa/paper-2",
    icon: "feather",
  },
];

const EXPLORE_SECTIONS = [
  {
    title: "Poetry Analysis",
    description:
      "Line-by-line annotation, language techniques, and comparison practice for anthology and unseen poems.",
    href: "/resources/english-literature/aqa/paper-2",
    color: "from-primary to-primary",
  },
  {
    title: "Themes & Context",
    description:
      "Historical, social, and cultural context for every set text. Understand how context shapes meaning.",
    href: "/resources/english-literature/aqa/paper-1",
    color: "from-[#8E44AD] to-[#A569BD]",
  },
  {
    title: "Comparison Skills",
    description:
      "Learn how to compare characters, themes, and writers' methods across texts and poems effectively.",
    href: "/resources/english-literature/edexcel/paper-2",
    color: "from-[#27AE60] to-[#52BE80]",
  },
];

/* ─── Icons ──────────────────────────────────────────────────── */

function ArrowRight({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg
      className={`transition-transform group-hover:translate-x-1 ${className}`}
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
      />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      className="mt-0.5 h-4 w-4 shrink-0 text-primary"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m4.5 12.75 6 6 9-13.5"
      />
    </svg>
  );
}

function TickCell() {
  return (
    <td className="px-3 py-2.5 text-center">
      <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-green-100 text-green-600">
        <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
        </svg>
      </span>
    </td>
  );
}

function CrossCell() {
  return (
    <td className="px-3 py-2.5 text-center">
      <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-muted text-muted-foreground">
        <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
        </svg>
      </span>
    </td>
  );
}

function BookIcon() {
  return (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
    </svg>
  );
}

function SparklesIcon() {
  return (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 0 0-2.455 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
    </svg>
  );
}

/* ─── Page ───────────────────────────────────────────────────── */

export default function EnglishLiteraturePage() {
  const [finderResult, setFinderResult] = useState<string | null>(null);
  const [finderStep, setFinderStep] = useState(0);

  const handleFinderAnswer = (answer: "yes" | "no") => {
    if (answer === "yes") {
      setFinderResult(BOARD_FINDER_QUESTIONS[finderStep].yes);
    } else if (finderStep < BOARD_FINDER_QUESTIONS.length - 1) {
      setFinderStep(finderStep + 1);
    } else {
      setFinderResult("unknown");
    }
  };

  const resetFinder = () => {
    setFinderResult(null);
    setFinderStep(0);
  };

  return (
    <>

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary/95 to-primary/80 px-4 py-16 text-white sm:py-20">
        <div className="absolute inset-0 opacity-10" aria-hidden="true">
          <div className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-card/20 blur-3xl" />
          <div className="absolute -bottom-32 -left-32 h-[30rem] w-[30rem] rounded-full bg-primary/30 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-5xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary/70">
            GCSE &amp; IGCSE
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
            English Literature
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-white/90">
            Explore Shakespeare, poetry, prose, and drama with detailed study
            guides, character analysis, theme breakdowns, and essay-writing
            techniques tailored to your exam board.
          </p>

          {/* Hero stat cards */}
          <div className="mx-auto mt-10 grid max-w-3xl grid-cols-2 gap-4 sm:grid-cols-4">
            {HERO_STATS.map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl bg-card/10 px-4 py-4 backdrop-blur-sm"
              >
                <p className="text-2xl font-extrabold sm:text-3xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-xs font-medium uppercase tracking-wide text-white/70">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── What English Literature covers ───────────────────── */}
      <section className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="rounded-xl border border-primary/20 bg-primary/5 p-6 sm:p-8">
          <h2 className="text-xl font-bold text-foreground">
            What does English Literature cover?
          </h2>
          <p className="mt-3 leading-relaxed text-muted-foreground">
            GCSE English Literature requires you to read and respond to a range
            of literary texts from different periods and genres. You will develop
            skills in close reading, critical analysis, comparison, and essay
            writing, demonstrating your understanding of how writers create
            meaning through language, form, and structure.
          </p>
          <ul className="mt-4 grid gap-2 sm:grid-cols-2">
            {OVERVIEW_TOPICS.map((topic) => (
              <li
                key={topic}
                className="flex items-start gap-2 text-sm text-muted-foreground"
              >
                <CheckIcon />
                {topic}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Board Selection Cards ────────────────────────────── */}
      <section className="mx-auto max-w-5xl px-4 pb-12 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-foreground">
          Select your exam board
        </h2>
        <p className="mt-2 text-muted-foreground">
          Choose your exam board below to access board-specific study guides,
          text analysis, and exam preparation materials.
        </p>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {BOARDS.map((board) => (
            <Link
              key={board.slug}
              href={`/resources/english-literature/${board.slug}`}
              className={`group flex flex-col rounded-xl border-2 ${board.color} bg-card p-6 shadow-md transition hover:shadow-lg hover:-translate-y-0.5`}
            >
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold text-foreground transition-colors group-hover:text-foreground">
                  {board.name}
                </h3>
                <span className="rounded-full bg-muted px-2.5 py-0.5 text-xs font-semibold text-muted-foreground">
                  {board.spec}
                </span>
              </div>

              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                {board.description}
              </p>

              <div className="mt-3">
                <span
                  className={`inline-block rounded-full ${board.bgColor}/10 px-2.5 py-0.5 text-xs font-medium text-muted-foreground`}
                >
                  {board.highlight}
                </span>
              </div>

              <div className="mt-3 space-y-1">
                {board.papers.map((paper) => (
                  <p key={paper} className="text-xs text-muted-foreground">
                    {paper}
                  </p>
                ))}
              </div>

              <div className="mt-3 flex items-center justify-between">
                <span className="text-xs text-muted-foreground">
                  ~{board.students} students/year
                </span>
                <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary transition-colors group-hover:text-foreground">
                  View resources <ArrowRight />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── Which Board Am I Studying? ───────────────────────── */}
      <section className="bg-muted px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center text-2xl font-bold text-foreground">
            Which board am I studying?
          </h2>
          <p className="mt-2 text-center text-muted-foreground">
            Not sure which exam board your school uses? Answer a few quick
            questions to find out.
          </p>

          <div className="mt-8 rounded-xl border border-border bg-card p-6 shadow-md sm:p-8">
            {finderResult === null ? (
              <>
                <p className="text-sm font-medium uppercase tracking-wide text-primary">
                  Question {finderStep + 1} of{" "}
                  {BOARD_FINDER_QUESTIONS.length}
                </p>
                <p className="mt-3 text-lg font-semibold text-foreground">
                  {BOARD_FINDER_QUESTIONS[finderStep].question}
                </p>
                <div className="mt-6 flex gap-4">
                  <button
                    onClick={() => handleFinderAnswer("yes")}
                    className="rounded-lg bg-primary px-6 py-2.5 text-sm font-semibold text-white shadow transition hover:bg-primary/90"
                  >
                    Yes
                  </button>
                  <button
                    onClick={() => handleFinderAnswer("no")}
                    className="rounded-lg border border-border bg-card px-6 py-2.5 text-sm font-semibold text-muted-foreground shadow-md transition hover:bg-muted"
                  >
                    No
                  </button>
                </div>
              </>
            ) : finderResult === "unknown" ? (
              <div className="text-center">
                <p className="text-lg font-semibold text-foreground">
                  We could not determine your board automatically.
                </p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Check the front of your textbook, ask your teacher, or look at
                  your school&apos;s exam entry letter for the specification code.
                </p>
                <button
                  onClick={resetFinder}
                  className="mt-4 rounded-lg bg-primary px-5 py-2 text-sm font-semibold text-white transition hover:bg-primary/90"
                >
                  Try again
                </button>
              </div>
            ) : (
              <div className="text-center">
                <p className="text-sm font-medium uppercase tracking-wide text-green-600">
                  Result
                </p>
                <p className="mt-2 text-xl font-bold text-foreground">
                  {
                    BOARD_FINDER_QUESTIONS.find((q) => q.yes === finderResult)
                      ?.yesLabel
                  }
                </p>
                <div className="mt-6 flex items-center justify-center gap-4">
                  <Link
                    href={`/resources/english-literature/${finderResult}`}
                    className="rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-white shadow transition hover:bg-primary/90"
                  >
                    Go to{" "}
                    {BOARDS.find((b) => b.slug === finderResult)?.name}{" "}
                    resources
                  </Link>
                  <button
                    onClick={resetFinder}
                    className="rounded-lg border border-border bg-card px-5 py-2.5 text-sm font-semibold text-muted-foreground shadow-md transition hover:bg-muted"
                  >
                    Start over
                  </button>
                </div>
              </div>
            )}
          </div>

          <p className="mt-4 text-center text-xs text-muted-foreground">
            Tip: Your specification code is usually printed on your textbook
            cover or exam entry paperwork.
          </p>
        </div>
      </section>

      {/* ── Set Texts Comparison Table ────────────────────────── */}
      <section className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-foreground">
          Set texts across exam boards
        </h2>
        <p className="mt-2 text-muted-foreground">
          See at a glance which popular set texts appear on each board. Tap a
          text name to jump to its revision notes.
        </p>

        <div className="mt-6 overflow-x-auto rounded-xl border border-border shadow-md">
          <table className="w-full min-w-[600px] text-sm">
            <thead>
              <tr className="bg-primary text-white">
                <th className="px-4 py-3 text-left font-semibold">Text</th>
                <th className="px-3 py-3 text-left text-xs font-semibold">
                  Type
                </th>
                <th className="px-3 py-3 text-center font-semibold">AQA</th>
                <th className="px-3 py-3 text-center font-semibold">
                  Edexcel
                </th>
                <th className="px-3 py-3 text-center font-semibold">CAIE</th>
                <th className="px-3 py-3 text-center font-semibold">OCR</th>
                <th className="px-3 py-3 text-center font-semibold">WJEC</th>
              </tr>
            </thead>
            <tbody>
              {SET_TEXTS_COMPARISON.map((text, i) => (
                <tr
                  key={text.title}
                  className={`border-t border-border ${
                    i % 2 === 0 ? "bg-card" : "bg-muted/50"
                  }`}
                >
                  <td className="px-4 py-2.5 font-medium text-foreground">
                    <Link
                      href={`/resources/english-literature/aqa/${text.link}`}
                      className="hover:underline"
                    >
                      {text.title}
                    </Link>
                  </td>
                  <td className="px-3 py-2.5 text-xs text-muted-foreground">
                    {text.type}
                  </td>
                  {text.boards.aqa ? <TickCell /> : <CrossCell />}
                  {text.boards.edexcel ? <TickCell /> : <CrossCell />}
                  {text.boards.caie ? <TickCell /> : <CrossCell />}
                  {text.boards.ocr ? <TickCell /> : <CrossCell />}
                  {text.boards.wjec ? <TickCell /> : <CrossCell />}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-xs text-muted-foreground">
          Table shows the most commonly studied texts. Each board offers
          additional options &mdash; check your board page for the full list.
        </p>
      </section>

      {/* ── Quick Links to Key Text Revision Notes ───────────── */}
      <section className="bg-muted px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-2xl font-bold text-foreground">
            Quick links: popular revision notes
          </h2>
          <p className="mt-2 text-muted-foreground">
            Jump straight into revision for the most popular GCSE set texts.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {QUICK_LINKS_TEXTS.map((text) => (
              <Link
                key={text.title}
                href={text.href}
                className="group flex items-start gap-3 rounded-xl border border-border bg-card p-4 shadow-md transition hover:shadow-md hover:border-primary/40"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-foreground">
                  <BookIcon />
                </div>
                <div>
                  <p className="font-semibold text-foreground group-hover:text-foreground transition-colors">
                    {text.title}
                  </p>
                  <p className="text-xs text-muted-foreground">{text.subtitle}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── AI Feedback Callout ──────────────────────────────── */}
      <section className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-primary to-primary p-8 text-white shadow-lg sm:p-10">
          <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-card/10 blur-2xl" />
          <div className="absolute -bottom-16 -left-16 h-56 w-56 rounded-full bg-card/5 blur-3xl" />

          <div className="relative flex flex-col items-start gap-6 sm:flex-row sm:items-center">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-card/20 backdrop-blur-sm">
              <SparklesIcon />
            </div>
            <div className="flex-1">
              <h2 className="text-xl font-bold sm:text-2xl">
                Get AI-powered essay feedback
              </h2>
              <p className="mt-2 max-w-xl text-sm leading-relaxed text-white/90">
                Paste your literature essay and receive instant, detailed
                feedback on your argument, use of evidence, analysis of
                language, and exam technique. Our AI marker is calibrated to
                GCSE mark schemes across all five boards.
              </p>
            </div>
            <Link
              href="/contact"
              className="shrink-0 rounded-lg bg-card px-6 py-3 text-sm font-bold text-foreground shadow transition hover:bg-card/90"
            >
              Try it free
            </Link>
          </div>
        </div>
      </section>

      {/* ── Poetry, Themes & Comparison Sections ─────────────── */}
      <section className="bg-muted px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-2xl font-bold text-foreground">
            Explore by skill area
          </h2>
          <p className="mt-2 text-muted-foreground">
            Strengthen specific skills that examiners reward most highly.
          </p>

          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {EXPLORE_SECTIONS.map((section) => (
              <Link
                key={section.title}
                href={section.href}
                className="group relative overflow-hidden rounded-xl shadow-md transition hover:shadow-lg hover:-translate-y-0.5"
              >
                <div
                  className={`bg-gradient-to-br ${section.color} px-5 py-8 text-white`}
                >
                  <h3 className="text-lg font-bold">{section.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/90">
                    {section.description}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-white/80 transition-colors group-hover:text-white">
                    Explore <ArrowRight />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Exam Tips Banner ─────────────────────────────────── */}
      <section className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="rounded-xl border border-primary/20 bg-primary/5 p-6 sm:p-8">
          <h2 className="text-xl font-bold text-foreground">
            Top 5 literature exam tips
          </h2>
          <ol className="mt-4 space-y-3">
            {[
              "Always embed short, precise quotations within your sentences rather than block-quoting.",
              "Link every point back to the writer's purpose or message \u2014 examiners call this 'authorial intent'.",
              "Use subject-specific terminology (metre, sibilance, dramatic irony) naturally and accurately.",
              "In comparison questions, integrate both texts throughout rather than writing about them separately.",
              "Leave 5 minutes at the end of each answer to proofread for spelling and expression.",
            ].map((tip, i) => (
              <li
                key={i}
                className="flex items-start gap-3 text-sm text-muted-foreground"
              >
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">
                  {i + 1}
                </span>
                {tip}
              </li>
            ))}
          </ol>
        </div>
      </section>

      <ExamBoardDisclaimer />
    </>
  );
}
