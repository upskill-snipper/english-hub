import type { Metadata } from "next";
import Link from "next/link";
import { ExamBoardDisclaimer } from "@/components/ExamBoardDisclaimer";

/* ─── Metadata ───────────────────────────────────────────────── */

export const metadata: Metadata = {
  alternates: { canonical: 'https://theenglishhub.app/resources/exam-technique' },
  title: "Exam Technique",
  description:
    "Master the exam techniques that turn knowledge into top grades. Time management, question types, essay structure, and exam-day advice for GCSE and IGCSE English -- AQA, Edexcel, CAIE, and OCR.",
};

/* ─── Section data ───────────────────────────────────────────── */

const SECTIONS = [
  {
    title: "Time Management",
    href: "/resources/exam-technique/time-management",
    description:
      "Paper-by-paper timing breakdowns for every exam board. Learn exactly how long to spend on each question, how to plan your time, and what to do if you run out.",
    colour: "border-accent",
    badge: "Essential",
    icon: (
      <svg
        className="h-10 w-10 text-accent"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
        />
      </svg>
    ),
    topics: [
      "AQA timings",
      "Edexcel timings",
      "CAIE timings",
      "OCR timings",
      "Running out of time",
      "Planning allocation",
    ],
  },
  {
    title: "Question Types",
    href: "/resources/exam-technique/question-types",
    description:
      "Decode every question type you will face. From \"How does the writer...\" to comparison questions and creative writing tasks -- learn what each is really asking and how to structure your response.",
    colour: "border-primary",
    badge: "6 types",
    icon: (
      <svg
        className="h-10 w-10 text-primary"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z"
        />
      </svg>
    ),
    topics: [
      "\"How does the writer...\"",
      "\"To what extent...\"",
      "Comparison questions",
      "Extract-based questions",
      "Essay questions",
      "Creative writing tasks",
    ],
  },
  {
    title: "Essay Structure",
    href: "/resources/exam-technique/essay-structure",
    description:
      "Proven templates and frameworks for structuring exam essays. Introduction techniques, PEEL paragraphs, topic sentences, linking, and how many paragraphs you need for different mark allocations.",
    colour: "border-accent",
    badge: "Templates",
    icon: (
      <svg
        className="h-10 w-10 text-accent"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
        />
      </svg>
    ),
    topics: [
      "Introduction techniques",
      "PEEL paragraphs",
      "Topic sentences",
      "Linking paragraphs",
      "Conclusion techniques",
      "Paragraph count by marks",
    ],
  },
  {
    title: "Exam Day Advice",
    href: "/resources/exam-technique/exam-day",
    description:
      "Practical, no-nonsense advice for the day itself. What to bring, how to read the paper, how to plan your answers, how to stay calm, and what to do in the last five minutes.",
    colour: "border-primary",
    badge: "Practical",
    icon: (
      <svg
        className="h-10 w-10 text-primary"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
        />
      </svg>
    ),
    topics: [
      "What to bring",
      "Reading the paper",
      "Planning answers",
      "Staying calm",
      "Last 5 minutes",
      "Common mistakes",
    ],
  },
] as const;

/* ─── Icons ──────────────────────────────────────────────────── */

function ArrowRight() {
  return (
    <svg
      className="h-4 w-4 transition-transform group-hover:translate-x-1"
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

/* ─── Page ───────────────────────────────────────────────────── */

export default function ExamTechniquePage() {
  return (
    <>

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-primary px-4 py-16 text-white sm:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary/20">
            Resources
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Exam Technique Guide
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/90">
            Knowing the content is only half the battle. The other half is
            knowing how to use it under timed conditions. Master the techniques
            that turn knowledge into top grades.
          </p>
        </div>
      </section>

      {/* Breadcrumb */}
      <nav className="mx-auto max-w-5xl px-4 pt-6" aria-label="Breadcrumb">
        <ol className="flex items-center gap-2 text-sm text-muted-foreground">
          <li>
            <Link href="/" className="hover:text-primary transition-colors">
              Home
            </Link>
          </li>
          <li>/</li>
          <li>
            <Link
              href="/resources"
              className="hover:text-primary transition-colors"
            >
              Resources
            </Link>
          </li>
          <li>/</li>
          <li className="font-medium text-primary">Exam Technique</li>
        </ol>
      </nav>

      {/* Why exam technique matters */}
      <section className="mx-auto max-w-5xl px-4 py-10">
        <div className="rounded-xl border border-primary/20 bg-primary/10/50 p-6 sm:p-8">
          <h2 className="text-xl font-bold text-foreground">
            Why exam technique matters
          </h2>
          <div className="mt-4 space-y-3 text-muted-foreground leading-relaxed">
            <p>
              Every year, thousands of students who know the content well still
              underperform because of poor exam technique. They run out of time,
              misread question demands, write unfocused essays, or panic on the
              day. These are all fixable problems.
            </p>
            <p>
              This guide covers the four pillars of exam technique: managing
              your time, understanding question types, structuring your essays,
              and performing on exam day. Each section is packed with actionable
              strategies you can start using immediately.
            </p>
          </div>
        </div>
      </section>

      {/* Section cards */}
      <section
        className="mx-auto max-w-6xl px-4 pb-14 sm:px-6 lg:px-8"
        aria-labelledby="sections-heading"
      >
        <h2
          id="sections-heading"
          className="text-2xl font-bold text-foreground sm:text-3xl"
        >
          Explore by topic
        </h2>
        <p className="mt-2 text-muted-foreground">
          Each guide is designed to be practical, specific, and immediately
          useful in your revision.
        </p>

        <div className="mt-8 grid gap-8 md:grid-cols-2">
          {SECTIONS.map((s) => (
            <Link
              key={s.href}
              href={s.href}
              className={`group flex flex-col rounded-2xl border-2 ${s.colour} bg-card p-8 shadow-md transition hover:shadow-lg`}
            >
              <div className="flex items-start justify-between">
                {s.icon}
                <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary">
                  {s.badge}
                </span>
              </div>
              <h3 className="mt-5 text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                {s.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                {s.description}
              </p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {s.topics.map((t) => (
                  <li
                    key={t}
                    className="rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground"
                  >
                    {t}
                  </li>
                ))}
              </ul>
              <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-accent group-hover:text-primary transition-colors">
                Read guide <ArrowRight />
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Quick wins */}
      <section className="bg-muted px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-2xl font-bold text-foreground">
            Five quick wins for any English exam
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-muted-foreground">
            No matter your board or paper, these five habits will instantly
            improve your exam performance.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {[
              {
                heading: "Read the question twice",
                body: "Underline the key command words and any specific focus before you start writing.",
              },
              {
                heading: "Plan before you write",
                body: "Spend 3-5 minutes planning. A planned answer is always better than an unplanned one.",
              },
              {
                heading: "Watch the clock",
                body: "Write your target end-time for each question on the paper. Stick to it.",
              },
              {
                heading: "Use short quotations",
                body: "Embed 2-5 word quotes into your sentences. Never copy out whole paragraphs.",
              },
              {
                heading: "Leave time to check",
                body: "Reserve the last 5 minutes for proofreading. Fix SPaG errors and add missing analysis.",
              },
            ].map((tip, i) => (
              <div
                key={tip.heading}
                className="rounded-xl border border-border bg-card p-6 shadow-md"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                  {i + 1}
                </span>
                <h3 className="mt-4 text-base font-bold text-foreground">
                  {tip.heading}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {tip.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Continue exploring */}
      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-foreground">
          Continue exploring
        </h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {[
            {
              label: "Exam Guide",
              href: "/resources/exam-guide",
              desc: "Paper structures, mark schemes, and assessment objectives.",
            },
            {
              label: "Techniques Reference",
              href: "/resources/techniques",
              desc: "Language and structural devices with examples and effects.",
            },
            {
              label: "All Resources",
              href: "/resources",
              desc: "Browse everything by exam board and subject.",
            },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group rounded-xl border border-border bg-card p-5 shadow-md transition hover:shadow-md hover:border-accent/40"
            >
              <h3 className="font-bold text-foreground group-hover:text-primary transition-colors">
                {link.label}
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">{link.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      <ExamBoardDisclaimer />
    </>
  );
}
