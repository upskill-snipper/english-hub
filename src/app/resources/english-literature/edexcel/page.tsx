import type { Metadata } from "next";
import Link from "next/link";
import { ExamBoardDisclaimer } from "@/components/ExamBoardDisclaimer";

/* ─── Metadata ───────────────────────────────────────────────── */

export const metadata: Metadata = {
  title: "Edexcel English Literature GCSE Revision",
  description:
    "Comprehensive revision resources for Edexcel (Pearson) GCSE English Literature. Study guides for Shakespeare, Post-1914 texts, 19th-century novels, and poetry anthology.",
};

/* ─── Data ───────────────────────────────────────────────────── */

const PAPERS = [
  {
    href: "/resources/english-literature/edexcel/paper-1",
    title: "Paper 1: Shakespeare and Post-1914 Literature",
    description:
      "Shakespeare plays including Macbeth, Romeo and Juliet, and more. Post-1914 texts such as An Inspector Calls, Lord of the Flies, and Animal Farm.",
    marks: "80 marks — 50% of GCSE",
    colour: "bg-[#1A5276]",
  },
  {
    href: "/resources/english-literature/edexcel/paper-2",
    title: "Paper 2: 19th-Century Novel and Poetry since 1789",
    description:
      "19th-century novels including A Christmas Carol, Jekyll and Hyde, and Jane Eyre. Poetry anthology (Relationships and Conflict clusters) plus unseen poetry.",
    marks: "80 marks — 50% of GCSE",
    colour: "bg-[#2E86C1]",
  },
];

const TEXT_GUIDES = [
  /* ── Paper 1: Shakespeare ─────────────────────────────────────── */
  {
    href: "/resources/english-literature/edexcel/macbeth",
    title: "Macbeth",
    type: "Shakespeare",
    paper: "Paper 1",
  },
  {
    href: "/resources/english-literature/edexcel/romeo-and-juliet",
    title: "Romeo and Juliet",
    type: "Shakespeare",
    paper: "Paper 1",
  },
  /* ── Paper 1: Post-1914 Literature ────────────────────────────── */
  {
    href: "/resources/english-literature/edexcel/inspector-calls",
    title: "An Inspector Calls",
    type: "Post-1914 Literature",
    paper: "Paper 1",
  },
  {
    href: "/resources/english-literature/edexcel/lord-of-the-flies",
    title: "Lord of the Flies",
    type: "Post-1914 Literature",
    paper: "Paper 1",
  },
  {
    href: "/resources/english-literature/edexcel/animal-farm",
    title: "Animal Farm",
    type: "Post-1914 Literature",
    paper: "Paper 1",
  },
  /* ── Paper 2: 19th-Century Novel ──────────────────────────────── */
  {
    href: "/resources/english-literature/edexcel/christmas-carol",
    title: "A Christmas Carol",
    type: "19th-Century Novel",
    paper: "Paper 2",
  },
  {
    href: "/resources/english-literature/edexcel/jekyll-and-hyde",
    title: "Jekyll and Hyde",
    type: "19th-Century Novel",
    paper: "Paper 2",
  },
  /* ── Paper 2: Poetry ──────────────────────────────────────────── */
  {
    href: "/resources/english-literature/edexcel/poetry",
    title: "Poetry Anthology",
    type: "Relationships & Conflict",
    paper: "Paper 2",
  },
];

/* ─── Page component ─────────────────────────────────────────── */

export default function EdexcelEnglishLiteraturePage() {
  return (
    <>

      {/* ── Hero ──────────────────────────────────────────────── */}
      <section className="bg-gradient-to-br from-[#1A5276] to-[#2E86C1] px-4 py-16 text-white sm:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-white/70">
            Edexcel (Pearson) GCSE
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            English Literature Revision
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-lg text-white/90">
            Everything you need to revise for Edexcel GCSE English Literature
            (1ET0). Paper overviews, full study guides, key quotes, exam
            technique, and poetry analysis.
          </p>
        </div>
      </section>

      {/* ── Exam overview ─────────────────────────────────────── */}
      <section className="mx-auto max-w-5xl px-4 py-12 sm:py-16">
        <h2 className="text-2xl font-bold text-gray-900">Exam Overview</h2>
        <p className="mt-2 text-gray-600">
          The Edexcel GCSE English Literature qualification (1ET0) is assessed
          through two externally examined papers, each worth 50% of the final
          grade. Both papers are closed-book — no texts are allowed in the exam
          room.
        </p>

        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {PAPERS.map((paper) => (
            <Link
              key={paper.href}
              href={paper.href}
              className="group rounded-xl border border-gray-200 p-6 shadow-sm transition hover:shadow-md"
            >
              <div
                className={`inline-block rounded-full ${paper.colour} px-3 py-1 text-xs font-semibold text-white`}
              >
                {paper.marks}
              </div>
              <h3 className="mt-3 text-lg font-bold text-gray-900 group-hover:text-[#2E86C1]">
                {paper.title}
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                {paper.description}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* ── Text study guides ─────────────────────────────────── */}
      <section className="bg-gray-50 px-4 py-12 sm:py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-2xl font-bold text-gray-900">
            Full Study Guides
          </h2>
          <p className="mt-2 text-gray-600">
            In-depth guides with plot summaries, character analysis, themes,
            20+ key quotes, context, and Edexcel-specific exam technique.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {TEXT_GUIDES.map((guide) => (
              <Link
                key={guide.href}
                href={guide.href}
                className="group rounded-lg border border-gray-200 bg-white p-5 shadow-sm transition hover:shadow-md"
              >
                <p className="text-xs font-semibold uppercase tracking-wide text-[#2E86C1]">
                  {guide.paper} — {guide.type}
                </p>
                <h3 className="mt-2 text-lg font-bold text-gray-900 group-hover:text-[#1A5276]">
                  {guide.title}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Key differences from AQA ──────────────────────────── */}
      <section className="mx-auto max-w-5xl px-4 py-12 sm:py-16">
        <h2 className="text-2xl font-bold text-gray-900">
          How Edexcel Differs from AQA
        </h2>
        <div className="mt-6 space-y-4 text-gray-700 leading-relaxed">
          <div className="rounded-lg border-l-4 border-[#1A5276] bg-blue-50 p-4">
            <h3 className="font-semibold text-[#1A5276]">Closed-book exam</h3>
            <p className="mt-1 text-sm">
              Both Edexcel papers are fully closed-book. You must memorise
              quotations for every text. AQA provides an extract for Shakespeare
              and the 19th-century novel, but Edexcel does not.
            </p>
          </div>
          <div className="rounded-lg border-l-4 border-[#1A5276] bg-blue-50 p-4">
            <h3 className="font-semibold text-[#1A5276]">
              Different text options
            </h3>
            <p className="mt-1 text-sm">
              Edexcel offers different Post-1914 and 19th-century text choices.
              For example, Never Let Me Go and Anita and Me are Edexcel options,
              while AQA offers different modern texts.
            </p>
          </div>
          <div className="rounded-lg border-l-4 border-[#1A5276] bg-blue-50 p-4">
            <h3 className="font-semibold text-[#1A5276]">
              Poetry anthology clusters
            </h3>
            <p className="mt-1 text-sm">
              Edexcel uses Relationships and Conflict clusters (15 poems each),
              while AQA uses Power and Conflict plus Love and Relationships.
            </p>
          </div>
          <div className="rounded-lg border-l-4 border-[#1A5276] bg-blue-50 p-4">
            <h3 className="font-semibold text-[#1A5276]">
              Question structure
            </h3>
            <p className="mt-1 text-sm">
              Edexcel Shakespeare questions give a theme or character to discuss
              across the whole play (no extract). Post-1914 questions may offer
              a choice of two essay titles. Poetry requires comparison with a
              named poem.
            </p>
          </div>
        </div>
      </section>

      {/* ── Assessment objectives ─────────────────────────────── */}
      <section className="bg-gray-50 px-4 py-12 sm:py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-2xl font-bold text-gray-900">
            Assessment Objectives
          </h2>
          <p className="mt-2 text-gray-600">
            All responses are marked against these four AOs. Knowing how marks
            are weighted for each question helps you structure your answer.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {[
              {
                ao: "AO1",
                desc: "Read, understand, and respond to texts. Use textual references (including quotations) to support and illustrate interpretations.",
              },
              {
                ao: "AO2",
                desc: "Analyse the language, form, and structure used by a writer to create meanings and effects, using relevant subject terminology where appropriate.",
              },
              {
                ao: "AO3",
                desc: "Show understanding of the relationships between texts and the contexts in which they were written.",
              },
              {
                ao: "AO4",
                desc: "Use a range of vocabulary and sentence structures for clarity, purpose, and effect, with accurate spelling and punctuation. (Only assessed on certain questions.)",
              },
            ].map((obj) => (
              <div
                key={obj.ao}
                className="rounded-lg border border-gray-200 bg-white p-5"
              >
                <span className="inline-block rounded bg-[#1A5276] px-2 py-0.5 text-xs font-bold text-white">
                  {obj.ao}
                </span>
                <p className="mt-2 text-sm text-gray-700">{obj.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ExamBoardDisclaimer variant="content" className="mx-auto max-w-5xl px-4 py-8" />
    </>
  );
}
