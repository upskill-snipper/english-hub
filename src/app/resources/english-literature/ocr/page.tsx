import type { Metadata } from "next";
import Link from "next/link";
import { ExamBoardDisclaimer } from "@/components/ExamBoardDisclaimer";

/* ─── Metadata ───────────────────────────────────────────────── */

export const metadata: Metadata = {
  alternates: { canonical: 'https://theenglishhub.app/resources/english-literature/ocr' },
  title: "OCR GCSE English Literature (J352) | The English Hub",
  description:
    "Complete revision hub for OCR GCSE English Literature (J352). Study guides for Paper 1, Paper 2, Macbeth, An Inspector Calls, A Christmas Carol, Jekyll and Hyde, and the OCR poetry anthology.",
};

/* ─── Data ───────────────────────────────────────────────────── */

const examPapers = [
  {
    title: "Paper 1: Exploring Modern and Literary Heritage Texts",
    href: "/resources/english-literature/ocr/paper-1",
    description:
      "Modern prose or drama text, plus a literary heritage prose text. Worth 50% of the GCSE.",
    component: "Component 01",
    duration: "2 hours",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
      </svg>
    ),
  },
  {
    title: "Paper 2: Exploring Poetry and Shakespeare",
    href: "/resources/english-literature/ocr/paper-2",
    description:
      "Shakespeare play, plus poetry from the OCR anthology and unseen poetry. Worth 50% of the GCSE.",
    component: "Component 02",
    duration: "2 hours",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
  },
];

const textGuides = [
  {
    title: "Macbeth",
    href: "/resources/english-literature/ocr/macbeth",
    description:
      "Characters, themes, key quotations, and essay planning for Shakespeare\u2019s Macbeth.",
    paper: "Paper 2",
    genre: "Shakespeare",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.047 8.287 8.287 0 009 9.601a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 00.495-7.468 5.99 5.99 0 00-1.925 3.547 5.975 5.975 0 01-2.133-1.001A3.75 3.75 0 0012 18z" />
      </svg>
    ),
  },
  {
    title: "An Inspector Calls",
    href: "/resources/english-literature/ocr/inspector-calls",
    description:
      "Characters, themes, key quotations, and context for Priestley\u2019s An Inspector Calls.",
    paper: "Paper 1",
    genre: "Modern Drama",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
      </svg>
    ),
  },
  {
    title: "A Christmas Carol",
    href: "/resources/english-literature/ocr/christmas-carol",
    description:
      "Characters, themes, key quotations, and context for Dickens\u2019 A Christmas Carol.",
    paper: "Paper 1",
    genre: "19th-Century Prose",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
      </svg>
    ),
  },
  {
    title: "Jekyll and Hyde",
    href: "/resources/english-literature/ocr/jekyll-and-hyde",
    description:
      "Characters, themes, key quotations, and context for Stevenson\u2019s Strange Case of Dr Jekyll and Mr Hyde.",
    paper: "Paper 1",
    genre: "19th-Century Prose",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
      </svg>
    ),
  },
  {
    title: "Poetry Anthology",
    href: "/resources/english-literature/ocr/poetry",
    description:
      "Detailed analysis of poems from the OCR poetry anthology \u2014 themes, techniques, and comparison strategies.",
    paper: "Paper 2",
    genre: "Poetry",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z" />
      </svg>
    ),
  },
];

/* ─── Page component ─────────────────────────────────────────── */

export default function OCREnglishLiteraturePage() {
  return (
    <>

      {/* ── Hero banner ─────────────────────────────────────────── */}
      <section
        className="px-4 py-16 text-white sm:py-20"
        style={{
          background: "linear-gradient(135deg, #1A5276 0%, #2E86C1 100%)",
        }}
      >
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-white/80">
            OCR GCSE (J352)
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            English Literature
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-lg text-white/90">
            Everything you need to revise for OCR GCSE English Literature. Two
            examined papers covering modern texts, literary heritage, poetry,
            and Shakespeare.
          </p>
        </div>
      </section>

      {/* ── Main content ────────────────────────────────────────── */}
      <div className="mx-auto max-w-5xl px-4 py-12 sm:py-16">

        {/* ── Exam overview ───────────────────────────────────────── */}
        <section aria-labelledby="overview-heading">
          <h2
            id="overview-heading"
            className="text-2xl font-bold text-foreground"
          >
            Exam Overview
          </h2>
          <p className="mt-3 text-muted-foreground leading-relaxed">
            The OCR GCSE English Literature specification (J352) is assessed
            through two examined papers, each worth 50% of the final grade.
            There is no coursework or controlled assessment.
          </p>

          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            {/* Component 01 */}
            <div
              className="rounded-xl border-l-4 bg-card p-6 shadow-md"
              style={{ borderColor: "#1A5276" }}
            >
              <p
                className="text-xs font-bold uppercase tracking-wider"
                style={{ color: "#1A5276" }}
              >
                Component 01
              </p>
              <h3 className="mt-1 text-lg font-semibold text-foreground">
                Exploring Modern &amp; Literary Heritage Texts
              </h3>
              <ul className="mt-3 space-y-1 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                  Modern prose or drama text (post-1914)
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                  19th-century prose text (literary heritage)
                </li>
              </ul>
              <div className="mt-4 flex gap-4 text-xs text-muted-foreground">
                <span className="rounded-full bg-gray-100 px-3 py-1 font-medium">
                  50% of GCSE
                </span>
                <span className="rounded-full bg-gray-100 px-3 py-1 font-medium">
                  2 hours
                </span>
              </div>
            </div>

            {/* Component 02 */}
            <div
              className="rounded-xl border-l-4 bg-card p-6 shadow-md"
              style={{ borderColor: "#2E86C1" }}
            >
              <p
                className="text-xs font-bold uppercase tracking-wider"
                style={{ color: "#2E86C1" }}
              >
                Component 02
              </p>
              <h3 className="mt-1 text-lg font-semibold text-foreground">
                Exploring Poetry &amp; Shakespeare
              </h3>
              <ul className="mt-3 space-y-1 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                  A Shakespeare play
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                  Poetry from the OCR anthology
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                  Unseen poetry
                </li>
              </ul>
              <div className="mt-4 flex gap-4 text-xs text-muted-foreground">
                <span className="rounded-full bg-gray-100 px-3 py-1 font-medium">
                  50% of GCSE
                </span>
                <span className="rounded-full bg-gray-100 px-3 py-1 font-medium">
                  2 hours
                </span>
              </div>
            </div>
          </div>
        </section>

        <hr className="my-10 border-border" />

        {/* ── Exam paper cards ────────────────────────────────────── */}
        <section aria-labelledby="papers-heading">
          <h2
            id="papers-heading"
            className="text-2xl font-bold text-foreground"
          >
            Exam Papers
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Detailed breakdowns of each paper, including question types, mark
            allocations, and timing advice.
          </p>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            {examPapers.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="group flex flex-col rounded-xl border border-border bg-card p-6 shadow-md transition hover:shadow-md"
                style={{
                  borderTopWidth: "3px",
                  borderTopColor: "#2E86C1",
                }}
              >
                <div
                  className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg text-white transition"
                  style={{ backgroundColor: "#1A5276" }}
                >
                  {s.icon}
                </div>
                <p className="text-xs font-bold uppercase tracking-wider text-accent">
                  {s.component} &middot; {s.duration}
                </p>
                <h3 className="mt-1 text-lg font-semibold text-foreground group-hover:text-accent">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {s.description}
                </p>
              </Link>
            ))}
          </div>
        </section>

        <hr className="my-10 border-border" />

        {/* ── Text study guide cards ──────────────────────────────── */}
        <section aria-labelledby="guides-heading">
          <h2
            id="guides-heading"
            className="text-2xl font-bold text-foreground"
          >
            Text Study Guides
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            In-depth revision guides for each set text, covering characters,
            themes, key quotations, context, and essay planning.
          </p>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {textGuides.map((g) => (
              <Link
                key={g.href}
                href={g.href}
                className="group flex flex-col rounded-xl border border-border bg-card p-6 shadow-md transition hover:shadow-md"
                style={{
                  borderTopWidth: "3px",
                  borderTopColor: "#1A5276",
                }}
              >
                <div
                  className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg text-white transition"
                  style={{ backgroundColor: "#2E86C1" }}
                >
                  {g.icon}
                </div>
                <div className="mb-2 flex flex-wrap gap-2">
                  <span
                    className="rounded-full px-2.5 py-0.5 text-xs font-medium text-white"
                    style={{ backgroundColor: "#1A5276" }}
                  >
                    {g.paper}
                  </span>
                  <span className="rounded-full border border-border bg-muted px-2.5 py-0.5 text-xs font-medium text-muted-foreground">
                    {g.genre}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-foreground group-hover:text-accent">
                  {g.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {g.description}
                </p>
              </Link>
            ))}
          </div>
        </section>

        <hr className="my-10 border-border" />

        {/* ── Assessment objectives ─────────────────────────────── */}
        <section aria-labelledby="ao-heading">
          <h2
            id="ao-heading"
            className="text-2xl font-bold text-foreground"
          >
            Assessment Objectives
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            All questions are marked against these four assessment objectives.
            Understanding them will help you target your revision effectively.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div
              className="rounded-xl border-l-4 bg-card p-5 shadow-md"
              style={{ borderColor: "#1A5276" }}
            >
              <p className="font-bold text-primary">AO1</p>
              <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">
                Read, understand, and respond to texts. Maintain a critical
                style and develop an informed personal response. Use textual
                references, including quotations, to support and illustrate
                interpretations.
              </p>
            </div>
            <div
              className="rounded-xl border-l-4 bg-card p-5 shadow-md"
              style={{ borderColor: "#2E86C1" }}
            >
              <p className="font-bold text-accent">AO2</p>
              <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">
                Analyse the language, form, and structure used by a writer to
                create meanings and effects, using relevant subject terminology
                where appropriate.
              </p>
            </div>
            <div
              className="rounded-xl border-l-4 bg-card p-5 shadow-md"
              style={{ borderColor: "#1A5276" }}
            >
              <p className="font-bold text-primary">AO3</p>
              <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">
                Show understanding of the relationships between texts and the
                contexts in which they were written.
              </p>
            </div>
            <div
              className="rounded-xl border-l-4 bg-card p-5 shadow-md"
              style={{ borderColor: "#2E86C1" }}
            >
              <p className="font-bold text-accent">AO4</p>
              <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">
                Use a range of vocabulary and sentence structures for clarity,
                purpose, and effect, with accurate spelling and punctuation.
                (Only assessed in the Shakespeare section of Paper 2.)
              </p>
            </div>
          </div>
        </section>

        <hr className="my-10 border-border" />

        {/* ── Key skills ────────────────────────────────────────── */}
        <section aria-labelledby="skills-heading">
          <h2
            id="skills-heading"
            className="text-2xl font-bold text-foreground"
          >
            Key Skills for English Literature
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-border bg-card p-5 shadow-md">
              <h3 className="font-semibold text-primary">
                Close Language Analysis
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Zoom into individual words and phrases. Explore connotations,
                the effect of techniques, and what specific language choices
                reveal about characters, themes, and the writer&rsquo;s
                intentions.
              </p>
            </div>
            <div className="rounded-xl border border-border bg-card p-5 shadow-md">
              <h3 className="font-semibold text-primary">
                Contextual Understanding
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Link your analysis to the historical, social, and cultural
                context in which the text was written. Context should enhance
                your analysis, not replace it.
              </p>
            </div>
            <div className="rounded-xl border border-border bg-card p-5 shadow-md">
              <h3 className="font-semibold text-primary">Thematic Analysis</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Track how themes develop across a whole text. Consider how
                themes connect to the writer&rsquo;s message and how they
                relate to the context of the period.
              </p>
            </div>
            <div className="rounded-xl border border-border bg-card p-5 shadow-md">
              <h3 className="font-semibold text-primary">
                Comparative Skills
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                For the poetry comparison, you must compare poems
                effectively &mdash; exploring similarities and differences in
                themes, methods, and effects.
              </p>
            </div>
          </div>
        </section>

        <hr className="my-10 border-border" />

        {/* ── Grade Boundaries ────────────────────────────────────── */}
        <section aria-labelledby="grades-heading">
          <h2
            id="grades-heading"
            className="text-2xl font-bold text-foreground"
          >
            Grade Boundaries
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Check the latest OCR GCSE English Literature grade boundaries,
            see what each grade looks like, and plan how to push your marks
            higher.
          </p>
          <div className="mt-4">
            <Link
              href="/resources/english-literature/ocr/grade-boundaries"
              className="inline-flex items-center gap-2 rounded-lg px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90"
              style={{ backgroundColor: "#2E86C1" }}
            >
              View Grade Boundaries
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
        </section>

        <ExamBoardDisclaimer variant="content" className="mt-12" />
      </div>

    </>
  );
}
