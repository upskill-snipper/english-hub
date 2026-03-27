import type { Metadata } from "next";
import Link from "next/link";

/* ─── Metadata ───────────────────────────────────────────────── */

export const metadata: Metadata = {
  alternates: { canonical: 'https://theenglishhub.app/resources/model-answers' },
  title: "Model Answers | The English Hub",
  description:
    "Browse expert model answers for GCSE and IGCSE English Language and Literature. Grade 5, 7, and 9 examples with examiner commentary, technique annotations, and grade-boundary breakdowns for AQA, Edexcel, Cambridge IGCSE, and OCR.",
};

/* ─── Data ───────────────────────────────────────────────────── */

const QUESTION_TYPES = [
  {
    slug: "language-analysis",
    title: "Language Analysis",
    description:
      "Model responses to 'How does the writer use language...' questions. Grade 5, 7, and 9 examples with examiner commentary and side-by-side comparisons showing what makes the difference.",
    grades: ["Grade 5", "Grade 7", "Grade 9"],
    icon: (
      <svg className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m5.231 13.481L15 17.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v16.5c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Zm3.75 11.625a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
      </svg>
    ),
  },
  {
    slug: "creative-writing",
    title: "Creative Writing",
    description:
      "Descriptive and narrative model responses at different grade levels. Full annotated examples showing how to craft atmosphere, use structural techniques, and deploy sophisticated vocabulary.",
    grades: ["Grade 5", "Grade 9"],
    icon: (
      <svg className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
      </svg>
    ),
  },
  {
    slug: "literature-essay",
    title: "Literature Essays",
    description:
      "Grade 9 literature essays on key texts including Macbeth, A Christmas Carol, An Inspector Calls, and poetry comparison. Annotations show how to structure arguments and embed quotations effectively.",
    grades: ["Grade 7", "Grade 9"],
    icon: (
      <svg className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
      </svg>
    ),
  },
  {
    slug: "persuasive-writing",
    title: "Persuasive & Transactional Writing",
    description:
      "Model articles, speeches, and letters with annotations highlighting rhetorical devices, structural choices, and persuasive techniques that earn top marks.",
    grades: ["Grade 7", "Grade 9"],
    icon: (
      <svg className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 1 1 0-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38a.75.75 0 0 1-1.006-.287 19.418 19.418 0 0 1-1.88-4.56M10.34 15.84A21.012 21.012 0 0 0 9.75 12c0-1.318.12-2.607.34-3.84m0 7.68a21.012 21.012 0 0 1 0-7.68m0 0c.688.06 1.386.09 2.09.09h.75a4.5 4.5 0 0 1 0 9h-.75c-.704 0-1.402.03-2.09.09" />
      </svg>
    ),
  },
];

const EXAM_BOARDS = [
  { id: "all", label: "All Boards" },
  { id: "aqa", label: "AQA" },
  { id: "edexcel", label: "Edexcel" },
  { id: "caie", label: "Cambridge IGCSE" },
  { id: "ocr", label: "OCR" },
];

const GRADE_FILTERS = [
  { id: "all", label: "All Grades" },
  { id: "5", label: "Grade 5" },
  { id: "7", label: "Grade 7" },
  { id: "9", label: "Grade 9" },
];

/* ─── Page ───────────────────────────────────────────────────── */

export default function ModelAnswersPage() {
  return (
    <>

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-primary/80 px-4 py-16 text-white sm:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary/80">
            Learn from the Best
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Model Answers
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/90">
            Expert-written model responses at every grade level. Each answer includes
            examiner commentary, technique annotations, and clear explanations of
            what separates a good answer from a great one.
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
          <li className="font-medium text-foreground">Model Answers</li>
        </ol>
      </nav>

      {/* Filters */}
      <div className="mx-auto max-w-5xl px-4 pt-8 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          {/* Board filter */}
          <div>
            <label className="mb-1 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Exam Board
            </label>
            <div className="flex flex-wrap gap-2">
              {EXAM_BOARDS.map((board) => (
                <button
                  key={board.id}
                  className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                    board.id === "all"
                      ? "bg-primary text-white"
                      : "bg-muted text-muted-foreground hover:bg-primary/10 hover:text-foreground"
                  }`}
                >
                  {board.label}
                </button>
              ))}
            </div>
          </div>

          {/* Grade filter */}
          <div>
            <label className="mb-1 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Grade Level
            </label>
            <div className="flex flex-wrap gap-2">
              {GRADE_FILTERS.map((grade) => (
                <button
                  key={grade.id}
                  className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                    grade.id === "all"
                      ? "bg-primary text-white"
                      : "bg-muted text-muted-foreground hover:bg-primary/10 hover:text-foreground"
                  }`}
                >
                  {grade.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Question Type Grid */}
      <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2">
          {QUESTION_TYPES.map((type) => (
            <Link
              key={type.slug}
              href={`/resources/model-answers/${type.slug}`}
              className="group rounded-xl border border-border bg-card p-6 shadow-md transition-all hover:border-primary/40 hover:shadow-md"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 rounded-lg bg-primary/10 p-3">
                  {type.icon}
                </div>
                <div className="flex-1">
                  <h2 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                    {type.title}
                  </h2>
                  <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                    {type.description}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {type.grades.map((grade) => (
                      <span
                        key={grade}
                        className="rounded-full bg-primary/10 px-3 py-0.5 text-xs font-semibold text-foreground"
                      >
                        {grade}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* How to Use section */}
        <div className="mt-12 rounded-xl border border-primary/20 bg-primary/5 p-6 sm:p-8">
          <h2 className="text-xl font-bold text-foreground">
            How to Use These Model Answers
          </h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-3">
            <div className="flex items-start gap-3">
              <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                1
              </span>
              <div>
                <h3 className="font-semibold text-foreground">Read Actively</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Hover over highlighted text to see technique annotations and examiner insights.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                2
              </span>
              <div>
                <h3 className="font-semibold text-foreground">Compare Grades</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Study the difference between grade 5, 7, and 9 responses on the same question.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                3
              </span>
              <div>
                <h3 className="font-semibold text-foreground">Practise</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Use the techniques you have identified to improve your own answers.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Quick stats */}
        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {[
            { stat: "20+", label: "Model Answers" },
            { stat: "3", label: "Grade Levels" },
            { stat: "4", label: "Question Types" },
            { stat: "100+", label: "Annotations" },
          ].map((item) => (
            <div
              key={item.label}
              className="rounded-xl border border-border bg-card p-5 text-center shadow-md"
            >
              <p className="text-2xl font-bold text-primary">{item.stat}</p>
              <p className="mt-1 text-sm text-muted-foreground">{item.label}</p>
            </div>
          ))}
        </div>
      </div>

    </>
  );
}
