import type { Metadata } from "next";
import Link from "next/link";
import { ExamBoardDisclaimer } from "@/components/ExamBoardDisclaimer";

/* ─── Metadata ───────────────────────────────────────────────── */

export const metadata: Metadata = {
  title: "Exam Guide",
  description:
    "Understand your GCSE or IGCSE English exam inside and out. Paper structures, mark allocations, assessment objectives, time management tips, and examiner advice for AQA, Edexcel, CAIE, OCR, and WJEC Eduqas.",
};

/* ─── Board data ─────────────────────────────────────────────── */

const BOARDS = [
  {
    id: "aqa",
    name: "AQA",
    specCode: "8700 / 8702",
    href: "/resources/exam-guide/aqa",
    description:
      "The most popular GCSE English board in England. Two Language papers and two Literature papers, all externally examined.",
    papers: "4 papers total",
    colour: "bg-[#40197F]",
  },
  {
    id: "edexcel",
    name: "Pearson Edexcel",
    specCode: "1EN0 / 1ET0",
    href: "/resources/exam-guide/edexcel",
    description:
      "Edexcel GCSE English with its distinctive anthology and unseen poetry comparison. Two Language papers and two Literature papers.",
    papers: "4 papers total",
    colour: "bg-[#E5231B]",
  },
  {
    id: "caie",
    name: "Cambridge IGCSE",
    specCode: "0500 / 0475 / 0992",
    href: "/resources/exam-guide/caie",
    description:
      "The international gold standard. Cambridge IGCSE English Language and English Literature with coursework or exam-only routes.",
    papers: "Multiple routes",
    colour: "bg-[#00A651]",
  },
  {
    id: "ocr",
    name: "OCR",
    specCode: "J351 / J352",
    href: "/resources/exam-guide/ocr",
    description:
      "OCR GCSE English Language and Literature. Known for its emphasis on spoken language and exploring effects of texts.",
    papers: "4 papers total",
    colour: "bg-[#2A7DE1]",
  },
  {
    id: "wjec",
    name: "WJEC Eduqas",
    specCode: "C700QS / C720QS",
    href: "/resources/exam-guide/wjec",
    description:
      "The Welsh board's Eduqas GCSE English specification for England. Two Language papers and two Literature papers with a distinctive approach to reading and writing.",
    papers: "4 papers total",
    colour: "bg-[#1A5276]",
  },
] as const;

/* ─── Page component ─────────────────────────────────────────── */

export default function ExamGuidePage() {
  return (
    <>

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-primary-600 px-4 py-16 text-white sm:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent-200">
            Resources
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Exam Guide
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/90">
            Know your exam before you sit it. Every paper structure, mark
            allocation, assessment objective, and examiner tip -- broken down
            clearly for your specific exam board.
          </p>
        </div>
      </section>

      {/* Breadcrumb */}
      <nav className="mx-auto max-w-5xl px-4 pt-6" aria-label="Breadcrumb">
        <ol className="flex items-center gap-2 text-sm text-gray-500">
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
          <li className="font-medium text-primary">Exam Guide</li>
        </ol>
      </nav>

      {/* Why this matters */}
      <section className="mx-auto max-w-5xl px-4 py-10">
        <div className="rounded-xl border border-accent-100 bg-accent-50/50 p-6 sm:p-8">
          <h2 className="text-xl font-bold text-gray-900">
            Why understanding your exam matters
          </h2>
          <div className="mt-4 space-y-3 text-gray-700 leading-relaxed">
            <p>
              One of the most common reasons students lose marks is not
              understanding what the exam actually requires. Knowing your paper
              structure, how marks are distributed, and what examiners are
              specifically looking for can make the difference between grades.
            </p>
            <p>
              Select your exam board below to get a complete breakdown of every
              paper, every question, and every assessment objective you need to
              know.
            </p>
          </div>
        </div>
      </section>

      {/* Board selection */}
      <section
        className="mx-auto max-w-5xl px-4 pb-12"
        aria-labelledby="boards-heading"
      >
        <h2
          id="boards-heading"
          className="text-2xl font-bold text-gray-900 sm:text-3xl"
        >
          Choose your exam board
        </h2>
        <p className="mt-2 text-gray-500">
          Each guide contains accurate, detailed information specific to that
          board&rsquo;s specification.
        </p>

        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {BOARDS.map((board) => (
            <Link
              key={board.id}
              href={board.href}
              className="group flex flex-col rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md hover:border-accent-300"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span
                    className={`flex h-10 w-10 items-center justify-center rounded-lg text-sm font-bold text-white ${board.colour}`}
                  >
                    {board.id === "caie"
                      ? "CIE"
                      : board.id === "wjec"
                        ? "WJC"
                        : board.id.toUpperCase().slice(0, 3)}
                  </span>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-primary transition-colors">
                      {board.name}
                    </h3>
                    <p className="text-xs text-gray-400">{board.specCode}</p>
                  </div>
                </div>
                <span className="rounded-full bg-accent-50 px-3 py-1 text-xs font-semibold text-accent-600">
                  {board.papers}
                </span>
              </div>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-gray-600">
                {board.description}
              </p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-accent group-hover:text-primary transition-colors">
                View full guide
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
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Exam overview at a glance */}
      <section className="bg-gray-50 px-4 py-12 sm:py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center text-2xl font-bold text-gray-900 sm:text-3xl">
            GCSE English at a glance
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-center text-gray-500">
            Regardless of your exam board, GCSE English is split into two
            subjects, each with its own set of exams.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {/* Language */}
            <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <svg
                  className="h-7 w-7"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"
                  />
                </svg>
              </div>
              <h3 className="mt-4 text-lg font-bold text-gray-900">
                English Language
              </h3>
              <ul className="mt-3 space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  Tests reading comprehension and analytical skills
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  Tests creative and transactional writing
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  Usually 2 written exam papers
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  Spoken language endorsement (separate, non-exam)
                </li>
              </ul>
            </div>

            {/* Literature */}
            <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <svg
                  className="h-7 w-7"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                  />
                </svg>
              </div>
              <h3 className="mt-4 text-lg font-bold text-gray-900">
                English Literature
              </h3>
              <ul className="mt-3 space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  Tests understanding of set texts (novels, plays, poetry)
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  Essay-based responses with textual evidence
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  Usually 2 written exam papers
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  Closed book (no texts in the exam room)
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <ExamBoardDisclaimer variant="content" className="mx-auto max-w-5xl px-4 mt-10 mb-6" />
    </>
  );
}
