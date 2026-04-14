"use client";

import { useState } from "react";
import Link from "next/link";
import { ExamBoardDisclaimer } from "@/components/ExamBoardDisclaimer";
import { useBoard } from "@/hooks/useBoard";
import { getBoardConfig, type ExamBoard } from "@/lib/board/board-config";

/* ─── Types ──────────────────────────────────────────────────── */

type Board = {
  slug: string;
  name: string;
  spec: string;
  description: string;
  papers: string[];
  totalMarks: number;
  duration: string;
  uniqueFeature: string;
  color: string;
  accent: string;
  icon: string;
  examBoards: ExamBoard[];
};

/* ─── Data ───────────────────────────────────────────────────── */

const BOARDS: Board[] = [
  {
    slug: "aqa",
    name: "AQA",
    spec: "8700",
    description:
      "The most popular English Language board in the UK. Two exam papers covering creative reading and writing (Paper 1) and writers' viewpoints and perspectives (Paper 2), plus a spoken language endorsement graded separately.",
    papers: [
      "Paper 1: Explorations in Creative Reading & Writing",
      "Paper 2: Writers' Viewpoints & Perspectives",
    ],
    totalMarks: 160,
    duration: "1h 45m per paper",
    uniqueFeature: "Spoken language endorsement (Pass/Merit/Distinction)",
    color: "border-primary",
    accent: "bg-primary",
    icon: "A",
    examBoards: ["aqa"],
  },
  {
    slug: "edexcel",
    name: "Edexcel (Pearson)",
    spec: "1EN0",
    description:
      "Focuses on fiction and imaginative writing in Paper 1 and non-fiction texts with writing for real purposes in Paper 2. Known for its clear marking-guide structure and accessible question style.",
    papers: [
      "Paper 1: Fiction & Imaginative Writing",
      "Paper 2: Non-Fiction & Writing for Real Purposes",
    ],
    totalMarks: 160,
    duration: "1h 45m + 2h 05m",
    uniqueFeature: "Separate fiction and non-fiction components",
    color: "border-primary",
    accent: "bg-primary",
    icon: "E",
    examBoards: ["edexcel", "edexcel-igcse"],
  },
  {
    slug: "caie",
    name: "Cambridge IGCSE",
    spec: "0500",
    description:
      "An international qualification with a focus on reading passages, directed writing, and composition. Offers both coursework and exam-only routes, making it flexible for international schools.",
    papers: [
      "Paper 1: Reading Passages (Core/Extended)",
      "Paper 2: Directed Writing & Composition",
    ],
    totalMarks: 100,
    duration: "2h + 2h",
    uniqueFeature: "Core and Extended tier options",
    color: "border-primary",
    accent: "bg-primary",
    icon: "C",
    examBoards: ["cambridge-0500", "cambridge-0990"],
  },
  {
    slug: "ocr",
    name: "OCR",
    spec: "J351",
    description:
      "Two components covering communicating information and ideas alongside exploring effects and impact. Features a strong emphasis on comparing texts and analysing how writers achieve effects.",
    papers: [
      "Component 01: Communicating Information & Ideas",
      "Component 02: Exploring Effects & Impact",
    ],
    totalMarks: 160,
    duration: "2h + 2h",
    uniqueFeature: "Strong emphasis on comparing multiple texts",
    color: "border-primary",
    accent: "bg-primary",
    icon: "O",
    examBoards: ["ocr"],
  },
  {
    slug: "wjec",
    name: "WJEC Eduqas",
    spec: "C700QS",
    description:
      "The Welsh board offering GCSE English Language across England and Wales. Features two components with a distinctive blend of reading comprehension, creative prose writing, and presentational writing tasks.",
    papers: [
      "Paper 1: 20th Century Literature Reading & Creative Prose Writing",
      "Paper 2: 19th & 21st Century Non-Fiction Reading & Writing for Real Purposes",
    ],
    totalMarks: 160,
    duration: "1h 45m + 2h",
    uniqueFeature: "Proofreading and editing task in Paper 2",
    color: "border-primary",
    accent: "bg-primary",
    icon: "W",
    examBoards: ["eduqas"],
  },
];

const HERO_STATS = [
  { label: "Exam Boards", value: "5", sub: "AQA, Edexcel, CAIE, OCR, WJEC" },
  { label: "Papers Covered", value: "10+", sub: "Reading & writing exams" },
  { label: "Total Marks", value: "740+", sub: "Across all boards" },
  { label: "Key Skills", value: "6", sub: "Core areas of study" },
];

const BOARD_FINDER_QUESTIONS = [
  {
    question: "Are you studying in the UK or internationally?",
    options: [
      { label: "UK (England)", boards: ["aqa", "edexcel", "ocr", "wjec"] },
      { label: "UK (Wales)", boards: ["wjec"] },
      { label: "International", boards: ["caie"] },
    ],
  },
];

const CORE_SKILLS = [
  {
    title: "Reading Comprehension",
    description:
      "Identify and interpret explicit and implicit information from fiction and non-fiction texts. All boards test your ability to retrieve key details and summarise ideas.",
    icon: "book",
  },
  {
    title: "Language Analysis",
    description:
      "Analyse how writers use language features, including word choice, figurative language, and sentence forms, to achieve effects and influence readers.",
    icon: "magnifier",
  },
  {
    title: "Structural Analysis",
    description:
      "Examine how writers structure their texts at whole-text, paragraph, and sentence level to engage and guide the reader through their writing.",
    icon: "layers",
  },
  {
    title: "Evaluative Writing",
    description:
      "Form and express a critical opinion on a text, supporting your views with detailed references and exploring how effectively the writer achieves their purpose.",
    icon: "star",
  },
  {
    title: "Creative Writing",
    description:
      "Produce imaginative, descriptive, and narrative writing demonstrating a range of vocabulary, sentence structures, and literary techniques.",
    icon: "pen",
  },
  {
    title: "Writing for Real Purposes",
    description:
      "Write for specific purposes and audiences, including letters, articles, speeches, and reviews, adapting tone and register appropriately.",
    icon: "mail",
  },
];

const RESOURCE_LINKS = [
  {
    title: "Writing Skills Guides",
    description: "Master creative, persuasive, and analytical writing techniques with step-by-step guides.",
    href: "/resources/writing-skills",
    color: "from-primary to-primary/80",
  },
  {
    title: "Language Techniques",
    description: "Learn every language device from metaphor to anaphora with clear examples and effects.",
    href: "/resources/techniques",
    color: "from-accent to-accent/80",
  },
  {
    title: "Practice Questions",
    description: "Practice exam-style questions with model answers and AI-powered feedback.",
    href: "/practice",
    color: "from-primary to-accent",
  },
];

/* ─── Icons ──────────────────────────────────────────────────── */

function ArrowRight({ className }: { className?: string }) {
  return (
    <svg
      className={className ?? "h-4 w-4 transition-transform group-hover:translate-x-1"}
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
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
      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
    </svg>
  );
}

function SparklesIcon() {
  return (
    <svg
      className="h-6 w-6 text-amber-500"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 0 0-2.455 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z"
      />
    </svg>
  );
}

function AcademicCapIcon() {
  return (
    <svg
      className="h-5 w-5 text-foreground"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15v-3.75m0 0h10.5"
      />
    </svg>
  );
}

/* ─── Skill Icon ─────────────────────────────────────────────── */

function SkillIcon({ icon }: { icon: string }) {
  const paths: Record<string, string> = {
    book: "M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25",
    magnifier:
      "m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z",
    layers:
      "m6.75 7.5 3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0 0 21 18V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v12a2.25 2.25 0 0 0 2.25 2.25Z",
    star: "M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z",
    pen: "m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10",
    mail: "M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75",
  };

  return (
    <svg
      className="h-6 w-6 text-primary"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d={paths[icon] ?? paths.book} />
    </svg>
  );
}

/* ─── Page ───────────────────────────────────────────────────── */

export default function EnglishLanguagePage() {
  const [finderStep, setFinderStep] = useState<number | null>(null);
  const [finderResult, setFinderResult] = useState<string[] | null>(null);
  const { board, isHydrated } = useBoard();
  const boardConfig = getBoardConfig(board);

  // Render nothing while the client board store is rehydrating so we don't
  // briefly flash content for a different board.
  if (!isHydrated) {
    return null;
  }

  // STRICT filter: if the user has selected an exam board, only show the
  // resources/sections that belong to that board.
  const visibleBoards = board
    ? BOARDS.filter((b) => b.examBoards.includes(board))
    : BOARDS;

  const handleFinderOption = (boards: string[]) => {
    setFinderResult(boards);
    setFinderStep(1);
  };

  const resetFinder = () => {
    setFinderStep(null);
    setFinderResult(null);
  };

  return (
    <>

      {/* ─── Hero Section ─────────────────────────────────────── */}
      <section className="border-b bg-gradient-to-b from-primary/[0.06] to-transparent px-4 py-16 sm:py-20">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-primary/20 blur-3xl" />
          <div className="absolute -bottom-32 -left-20 h-96 w-96 rounded-full bg-primary/30 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-5xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            GCSE &amp; IGCSE
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            English Language
          </h1>
          {boardConfig && (
            <div className="mt-4 flex justify-center">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                For {boardConfig.shortName}
              </span>
            </div>
          )}
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Master reading analysis, creative writing, and writing for real purposes with comprehensive
            revision resources tailored to your exam board. Covering all five major boards with
            AI-powered feedback on your practice answers.
          </p>

          {/* Hero Stats */}
          <div className="mx-auto mt-10 grid max-w-3xl grid-cols-2 gap-4 sm:grid-cols-4">
            {HERO_STATS.map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl border bg-card px-4 py-4"
              >
                <p className="text-2xl font-bold sm:text-3xl">{stat.value}</p>
                <p className="mt-1 text-sm font-semibold text-muted-foreground">{stat.label}</p>
                <p className="mt-0.5 text-xs text-muted-foreground">{stat.sub}</p>
              </div>
            ))}
          </div>

          {/* Quick CTA */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#boards"
              className="rounded-lg bg-card px-5 py-2.5 text-sm font-semibold text-foreground shadow-lg transition hover:bg-card/90 hover:shadow-xl"
            >
              Choose your board
            </a>
          </div>
        </div>
      </section>

      {/* ─── What English Language Covers ─────────────────────── */}
      <section className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="rounded-xl border border-primary/20 bg-primary/5 p-6 sm:p-8">
          <h2 className="text-xl font-bold text-foreground">
            What does English Language cover?
          </h2>
          <p className="mt-3 leading-relaxed text-muted-foreground">
            GCSE English Language develops your ability to read critically, analyse how writers use
            language and structure, and produce your own high-quality writing across a range of forms
            and purposes. It is a core qualification required by most employers and further education
            providers, and a grade 4 or above is typically needed for sixth form, college, and
            apprenticeship entry.
          </p>
          <p className="mt-3 leading-relaxed text-muted-foreground">
            The course is assessed through written examinations (and a spoken language component in
            most boards). You will study a mix of fiction and non-fiction texts and develop both
            analytical and creative writing skills that are transferable to A Level and beyond.
          </p>
          <ul className="mt-4 grid gap-2 sm:grid-cols-2">
            {[
              "Reading comprehension and analysis",
              "Language techniques and their effects",
              "Creative and descriptive writing",
              "Persuasive, argumentative, and writing for real purposes",
              "Comparing writers' perspectives",
              "Spoken language endorsement",
            ].map((topic) => (
              <li key={topic} className="flex items-start gap-2 text-sm text-muted-foreground">
                <CheckIcon />
                {topic}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ─── Board Selection Cards ────────────────────────────── */}
      {visibleBoards.length > 0 && (
      <section id="boards" className="mx-auto max-w-5xl px-4 pb-12 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-foreground">
          {board ? "Your exam board" : "Select your exam board"}
        </h2>
        <p className="mt-2 text-muted-foreground">
          {board
            ? "You're viewing resources for your chosen exam board only."
            : (
              <>
                Choose your exam board below to access board-specific revision resources, marking guides,
                and exam tips. Not sure which board you study? Use our{" "}
                <a href="#board-finder" className="font-medium text-primary underline underline-offset-2 hover:text-foreground">
                  board finder
                </a>{" "}
                below.
              </>
            )}
        </p>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visibleBoards.map((board) => (
            <Link
              key={board.slug}
              href={`/resources/english-language/${board.slug}`}
              className="group flex flex-col rounded-xl border border-border bg-card p-6 shadow-md transition hover:shadow-lg hover:border-primary/30 hover:-translate-y-0.5"
            >
              <div>
                <h3 className="text-lg font-bold text-foreground transition-colors group-hover:text-primary">
                  {board.name}
                </h3>
                <span className="text-xs font-medium text-muted-foreground">{board.spec}</span>
              </div>

              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                {board.description}
              </p>

              <div className="mt-4 space-y-1 border-t border-border pt-3">
                {board.papers.map((paper) => (
                  <p key={paper} className="text-xs text-muted-foreground">
                    {paper}
                  </p>
                ))}
              </div>

              <div className="mt-3 flex items-center justify-between">
                <span className="text-xs text-muted-foreground">{board.totalMarks} marks total</span>
                <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary transition-colors group-hover:text-foreground">
                  View resources <ArrowRight />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
      )}

      {/* ─── Board Finder Helper ──────────────────────────────── */}
      {!board && (
      <section id="board-finder" className="bg-muted px-4 py-12">
        <div className="mx-auto max-w-3xl">
          <div className="flex items-center gap-3">
            <AcademicCapIcon />
            <h2 className="text-2xl font-bold text-foreground">Which board am I studying?</h2>
          </div>
          <p className="mt-3 text-muted-foreground">
            Not sure which exam board your school uses? Here are some quick ways to find out, plus a
            simple helper to narrow it down.
          </p>

          {/* Tips */}
          <div className="mt-6 rounded-xl border border-border bg-card p-6">
            <h3 className="font-semibold text-foreground">How to check your exam board</h3>
            <ul className="mt-3 space-y-2">
              {[
                "Check the front cover of your English Language textbook or workbook for the board name and logo.",
                "Ask your English teacher or Head of English - they will know immediately.",
                "Look at past papers your teacher has given you - the board name appears on every page.",
                "Check your school's website under curriculum or exam information.",
                "Log in to your school's exam entries portal if available.",
              ].map((tip, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                    {i + 1}
                  </span>
                  {tip}
                </li>
              ))}
            </ul>
          </div>

          {/* Interactive finder */}
          <div className="mt-6 rounded-xl border border-primary/30 bg-primary/5 p-6">
            <h3 className="font-semibold text-foreground">Quick board finder</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Answer the question below to narrow down your likely exam board.
            </p>

            {finderStep === null && (
              <div className="mt-4">
                <p className="text-sm font-medium text-foreground">
                  {BOARD_FINDER_QUESTIONS[0].question}
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {BOARD_FINDER_QUESTIONS[0].options.map((option) => (
                    <button
                      key={option.label}
                      onClick={() => handleFinderOption(option.boards)}
                      className="rounded-lg border border-primary/30 bg-card px-4 py-2 text-sm font-medium text-foreground transition hover:border-primary hover:bg-primary/10"
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {finderResult && (
              <div className="mt-4">
                <p className="text-sm font-medium text-foreground">
                  You are most likely studying one of these boards:
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {BOARDS.filter((b) => finderResult.includes(b.slug)).map((board) => (
                    <Link
                      key={board.slug}
                      href={`/resources/english-language/${board.slug}`}
                      className="inline-flex items-center gap-2 rounded-lg border border-primary/30 bg-card px-4 py-2 text-sm font-semibold text-foreground transition hover:border-primary hover:shadow-md"
                    >
                      {board.name}
                    </Link>
                  ))}
                </div>
                <button
                  onClick={resetFinder}
                  className="mt-3 text-sm font-medium text-primary underline underline-offset-2 hover:text-foreground"
                >
                  Start again
                </button>
              </div>
            )}
          </div>
        </div>
      </section>
      )}

      {/* ─── Common Skills Across All Boards ─────────────────── */}
      <section className="bg-muted px-4 py-12">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-2xl font-bold text-foreground">
            Core skills across all boards
          </h2>
          <p className="mt-2 text-muted-foreground">
            Regardless of which exam board you study, these six key skill areas form the backbone of
            every GCSE English Language course.
          </p>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {CORE_SKILLS.map((skill) => (
              <div
                key={skill.title}
                className="rounded-xl border border-border bg-card p-5 shadow-md"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <SkillIcon icon={skill.icon} />
                  </div>
                  <h3 className="font-semibold text-foreground">{skill.title}</h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── AI Feedback Callout ──────────────────────────────── */}
      <section className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-2xl border border-amber-500/30 bg-gradient-to-r from-amber-500/10 to-orange-500/10 shadow-md">
          <div className="flex flex-col items-start gap-6 p-6 sm:flex-row sm:items-center sm:p-8">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-amber-500/15">
              <SparklesIcon />
            </div>
            <div className="flex-1">
              <h2 className="text-xl font-bold text-foreground">
                Get instant AI feedback on your answers
              </h2>
              <p className="mt-2 leading-relaxed text-muted-foreground">
                Practice exam-style questions and receive detailed, marking-guide-aligned feedback
                powered by AI. Our system analyses your response against the assessment objectives
                for your specific exam board and provides targeted improvement suggestions.
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                <Link
                  href="/practice"
                  className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-white shadow transition hover:bg-primary/90 hover:shadow-md"
                >
                  Try practice questions
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/practice"
                  className="inline-flex items-center gap-2 rounded-lg border border-primary/30 px-5 py-2.5 text-sm font-semibold text-foreground transition hover:bg-primary/5"
                >
                  See how it works
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Resource Links ───────────────────────────────────── */}
      <section className="bg-muted px-4 py-12">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-2xl font-bold text-foreground">Explore more resources</h2>
          <p className="mt-2 text-muted-foreground">
            Strengthen your English Language skills with these additional study areas.
          </p>

          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {RESOURCE_LINKS.map((link) => (
              <Link
                key={link.title}
                href={link.href}
                className="group overflow-hidden rounded-xl border border-border bg-card shadow-md transition hover:shadow-lg hover:-translate-y-0.5"
              >
                <div className={`h-2 bg-gradient-to-r ${link.color}`} />
                <div className="p-5">
                  <h3 className="font-semibold text-foreground transition-colors group-hover:text-foreground">
                    {link.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{link.description}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary transition-colors group-hover:text-foreground">
                    Explore <ArrowRight />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Quick Board Links Bar ────────────────────────────── */}
      {visibleBoards.length > 0 && (
      <section className="border-t border-border bg-card px-4 py-8">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center text-lg font-bold text-foreground">
            {board ? "Your exam board" : "Jump to your board"}
          </h2>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
            {visibleBoards.map((board) => (
              <Link
                key={board.slug}
                href={`/resources/english-language/${board.slug}`}
                className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-2 text-sm font-semibold text-foreground transition hover:border-primary hover:shadow-md hover:-translate-y-0.5"
              >
                {board.name}
              </Link>
            ))}
          </div>
        </div>
      </section>
      )}

      <ExamBoardDisclaimer />
    </>
  );
}
