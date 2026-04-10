import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  alternates: { canonical: 'https://theenglishhub.app/resources/english-literature/aqa' },
  title: "AQA English Literature GCSE Revision",
  description:
    "Comprehensive AQA English Literature GCSE revision materials. Study guides for Macbeth, Romeo and Juliet, A Christmas Carol, An Inspector Calls, Jekyll and Hyde, Power and Conflict poetry, and more.",
};

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const studyGuides = [
  {
    title: "Macbeth",
    href: "/resources/english-literature/aqa/macbeth",
    description:
      "Full study guide: plot, characters, themes, key quotations, context, and essay planning.",
    tag: "Shakespeare",
    paper: 1,
  },
  {
    title: "Romeo and Juliet",
    href: "/resources/english-literature/aqa/romeo-and-juliet",
    description:
      "Full study guide: plot, characters, themes, key quotations, Elizabethan context, and essay planning.",
    tag: "Shakespeare",
    paper: 1,
  },
  {
    title: "A Christmas Carol",
    href: "/resources/english-literature/aqa/christmas-carol",
    description:
      "Full study guide: stave summaries, character analysis, themes, quotations, and Victorian context.",
    tag: "19th-Century Novel",
    paper: 1,
  },
  {
    title: "The Strange Case of Dr Jekyll and Mr Hyde",
    href: "/resources/english-literature/aqa/jekyll-and-hyde",
    description:
      "Full study guide: chapter summaries, character analysis, themes, quotations, and Victorian context.",
    tag: "19th-Century Novel",
    paper: 1,
  },
  {
    title: "An Inspector Calls",
    href: "/resources/english-literature/aqa/inspector-calls",
    description:
      "Full study guide: plot, characters, themes, quotations, and Edwardian/post-war context.",
    tag: "Modern Text",
    paper: 2,
  },
  {
    title: "Power and Conflict Poetry",
    href: "/resources/english-literature/aqa/poetry",
    description:
      "All 15 poems analysed: stanza-by-stanza breakdown, techniques, themes, context, and comparison pairs.",
    tag: "Poetry Anthology",
    paper: 2,
  },
];

const papers = [
  {
    paper: "Paper 1",
    title: "Shakespeare and the 19th-Century Novel",
    time: "1 hour 45 minutes",
    marks: "64 marks (40% of GCSE)",
    sections: [
      {
        name: "Section A: Shakespeare",
        detail:
          "You will be given an extract from your studied Shakespeare play, plus a question. Write about the extract and then the play as a whole. (30 marks + 4 marks AO4)",
      },
      {
        name: "Section B: 19th-Century Novel",
        detail:
          "You will be given an extract from your studied novel, plus a question. Write about the extract and then the novel as a whole. (30 marks)",
      },
    ],
    href: "/resources/english-literature/aqa/paper-1",
  },
  {
    paper: "Paper 2",
    title: "Modern Texts and Poetry",
    time: "2 hours 15 minutes",
    marks: "96 marks (60% of GCSE)",
    sections: [
      {
        name: "Section A: Modern Text",
        detail:
          "Answer one essay question (from a choice of two) on your studied modern prose or drama text. No extract provided. (34 marks)",
      },
      {
        name: "Section B: Poetry Anthology",
        detail:
          "Compare one named poem from the anthology with another poem of your choice from the same cluster. (30 marks)",
      },
      {
        name: "Section C: Unseen Poetry",
        detail:
          "Q1: Analyse one unseen poem (24 marks). Q2: Compare it with a second unseen poem (8 marks).",
      },
    ],
    href: "/resources/english-literature/aqa/paper-2",
  },
];

const assessmentObjectives = [
  {
    ao: "AO1",
    summary: "Read, respond, and use quotations",
    detail:
      "Read, understand and respond to texts. Use textual references, including quotations, to support and illustrate interpretations.",
    weight: "Approx. 12 marks per question",
  },
  {
    ao: "AO2",
    summary: "Analyse language, form and structure",
    detail:
      "Analyse the language, form and structure used by a writer to create meanings and effects, using relevant subject terminology where appropriate.",
    weight: "Approx. 12 marks per question",
  },
  {
    ao: "AO3",
    summary: "Show understanding of context",
    detail:
      "Show understanding of the relationships between texts and the contexts in which they were written.",
    weight: "Approx. 6 marks per question",
  },
  {
    ao: "AO4",
    summary: "Accurate written expression",
    detail:
      "Use a range of vocabulary and sentence structures for clarity, purpose and effect, with accurate spelling and punctuation. Assessed in Paper 1 Section A (Shakespeare) and Paper 2 Section C (unseen poetry comparison) only.",
    weight: "4 marks (Paper 1 Sec A) + 4 marks (Paper 2 Sec C)",
  },
];

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function AqaEnglishLiteraturePage() {
  return (
    <>

      {/* ── Hero ── */}
      <section className="border-b bg-gradient-to-b from-primary/[0.06] to-transparent px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-muted-foreground">
            GCSE Revision
          </p>
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            AQA English Literature
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Everything you need to revise for AQA GCSE English Literature
            (8702). In-depth study guides, exam technique, assessment objective
            breakdowns, and poetry analysis &mdash; all in one place.
          </p>
        </div>
      </section>

      {/* ── Exam overview ── */}
      <section className="mx-auto max-w-5xl px-4 py-12 sm:py-16">
        <h2 className="text-2xl font-bold text-foreground">Exam Overview</h2>
        <p className="mt-3 max-w-3xl text-muted-foreground leading-relaxed">
          AQA GCSE English Literature (8702) is assessed through{" "}
          <strong>two written exams</strong> with{" "}
          <strong>no coursework</strong>. Both papers are{" "}
          <strong>closed-book</strong> &mdash; you cannot take your texts into
          the exam. The qualification is worth{" "}
          <strong>160 marks in total</strong>.
        </p>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          {papers.map((paper) => (
            <div
              key={paper.paper}
              className="rounded-xl border border-border overflow-hidden"
            >
              {/* Paper header */}
              <div className="border-b border-border bg-primary/5 px-6 py-4 flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-bold text-foreground">
                    {paper.paper}: {paper.title}
                  </h3>
                  <p className="mt-0.5 text-sm text-muted-foreground">
                    {paper.time} &middot; {paper.marks}
                  </p>
                </div>
                <Link
                  href={paper.href}
                  className="shrink-0 rounded-lg bg-primary px-3 py-1.5 text-xs font-semibold text-primary-foreground hover:bg-primary/90 transition"
                >
                  Full guide &rarr;
                </Link>
              </div>

              {/* Sections */}
              <ul className="divide-y divide-border bg-card">
                {paper.sections.map((sec) => (
                  <li key={sec.name} className="px-6 py-4">
                    <p className="font-semibold text-foreground">{sec.name}</p>
                    <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                      {sec.detail}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* ── Set text study guides ── */}
      <section className="bg-muted px-4 py-12 sm:py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-2xl font-bold text-foreground">
            Set Text Study Guides
          </h2>
          <p className="mt-2 text-muted-foreground">
            Detailed revision resources for AQA set texts. Each guide covers
            plot, characters, themes, key quotations, context, and exam
            technique.
          </p>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {studyGuides.map((guide) => (
              <Link
                key={guide.href}
                href={guide.href}
                className="group flex flex-col rounded-xl border border-border bg-card shadow-md transition hover:shadow-md hover:border-primary"
              >
                {/* Coloured top strip */}
                <div
                  className={`h-1.5 rounded-t-xl ${guide.paper === 1 ? "bg-primary" : "bg-primary"}`}
                />
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center gap-2">
                    <span className="inline-block rounded-full bg-primary/15 px-3 py-1 text-xs font-semibold text-primary">
                      {guide.tag}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      Paper {guide.paper}
                    </span>
                  </div>
                  <h3 className="mt-3 text-lg font-bold text-foreground group-hover:text-primary">
                    {guide.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm text-muted-foreground">
                    {guide.description}
                  </p>
                  <span className="mt-4 text-sm font-medium text-primary group-hover:underline">
                    View study guide &rarr;
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Paper format summaries ── */}
      <section className="mx-auto max-w-5xl px-4 py-12 sm:py-16">
        <h2 className="text-2xl font-bold text-foreground">
          Paper Format at a Glance
        </h2>
        <p className="mt-2 text-muted-foreground">
          Quick reference for what each paper looks like on exam day.
        </p>

        <div className="mt-8 overflow-x-auto">
          <table className="w-full min-w-[600px] text-left text-sm">
            <thead>
              <tr className="border-b-2 border-border">
                <th className="py-3 pr-4 font-semibold text-foreground">
                  &nbsp;
                </th>
                <th className="py-3 pr-4 font-semibold text-foreground">
                  Paper 1
                </th>
                <th className="py-3 font-semibold text-foreground">Paper 2</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              <tr>
                <td className="py-3 pr-4 font-medium text-muted-foreground">
                  Duration
                </td>
                <td className="py-3 pr-4 text-muted-foreground">1 h 45 min</td>
                <td className="py-3 text-muted-foreground">2 h 15 min</td>
              </tr>
              <tr>
                <td className="py-3 pr-4 font-medium text-muted-foreground">Marks</td>
                <td className="py-3 pr-4 text-muted-foreground">64 (40%)</td>
                <td className="py-3 text-muted-foreground">96 (60%)</td>
              </tr>
              <tr>
                <td className="py-3 pr-4 font-medium text-muted-foreground">
                  Section A
                </td>
                <td className="py-3 pr-4 text-muted-foreground">
                  Shakespeare (extract + essay)
                </td>
                <td className="py-3 text-muted-foreground">
                  Modern text (essay, no extract)
                </td>
              </tr>
              <tr>
                <td className="py-3 pr-4 font-medium text-muted-foreground">
                  Section B
                </td>
                <td className="py-3 pr-4 text-muted-foreground">
                  19th-century novel (extract + essay)
                </td>
                <td className="py-3 text-muted-foreground">
                  Poetry anthology comparison
                </td>
              </tr>
              <tr>
                <td className="py-3 pr-4 font-medium text-muted-foreground">
                  Section C
                </td>
                <td className="py-3 pr-4 text-muted-foreground">&mdash;</td>
                <td className="py-3 text-muted-foreground">
                  Unseen poetry (analysis + comparison)
                </td>
              </tr>
              <tr>
                <td className="py-3 pr-4 font-medium text-muted-foreground">
                  Closed-book?
                </td>
                <td className="py-3 pr-4 text-muted-foreground">Yes</td>
                <td className="py-3 text-muted-foreground">Yes</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── Assessment objectives ── */}
      <section className="bg-muted px-4 py-12 sm:py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-2xl font-bold text-foreground">
            Assessment Objectives (AO1&ndash;AO4)
          </h2>
          <p className="mt-2 text-muted-foreground">
            Understanding how your work is marked is essential for maximising
            your grade. Every question targets specific AOs.
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {assessmentObjectives.map((obj) => (
              <div
                key={obj.ao}
                className="rounded-lg bg-card p-5 shadow-md border border-border"
              >
                <div className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                    {obj.ao}
                  </span>
                  <div>
                    <p className="font-semibold text-foreground">{obj.summary}</p>
                    <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                      {obj.detail}
                    </p>
                    <p className="mt-2 text-xs text-muted-foreground">{obj.weight}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Quick revision tips ── */}
      <section className="mx-auto max-w-5xl px-4 py-12 sm:py-16">
        <h2 className="text-2xl font-bold text-foreground">
          Top Revision Tips
        </h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Learn Key Quotations",
              text: "The exam is closed-book. Aim to memorise 15\u201320 short quotations per text. Focus on quotes that link to multiple themes.",
            },
            {
              title: "Understand Context",
              text: "AO3 (context) is worth significant marks. Know the historical, social, and literary context for every set text you study.",
            },
            {
              title: "Plan Before You Write",
              text: "Spend 5 minutes planning each essay. A clear structure with a thesis will always score higher than a longer, rambling answer.",
            },
            {
              title: "Use Subject Terminology",
              text: "AO2 requires analysis of language and structure. Name techniques (metaphor, dramatic irony, foreshadowing) and explain their effect.",
            },
            {
              title: "Compare Poems Effectively",
              text: "In the poetry comparison, pick two poems with clear connections but also interesting differences. Alternate between them in your paragraphs.",
            },
            {
              title: "Time Management",
              text: "Paper 1: ~50 min Shakespeare, ~50 min novel. Paper 2: ~45 min modern text, ~45 min anthology poetry, ~30 min unseen poetry.",
            },
          ].map((tip) => (
            <div
              key={tip.title}
              className="rounded-lg border border-border p-5"
            >
              <h3 className="font-semibold text-foreground">{tip.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                {tip.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA banner ── */}
      <section className="border-y bg-gradient-to-b from-primary/[0.06] to-transparent px-4 py-12 text-center">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold sm:text-3xl">
            Ready to start revising?
          </h2>
          <p className="mt-3 text-muted-foreground">
            Pick a study guide above and begin working through the key
            quotations, themes, and practice questions.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <Link
              href="/resources/english-literature/aqa/macbeth"
              className="rounded-lg bg-card px-5 py-2.5 text-sm font-semibold text-foreground shadow hover:bg-muted transition"
            >
              Start with Macbeth
            </Link>
            <Link
              href="/resources/english-literature/aqa/poetry"
              className="rounded-lg border px-5 py-2.5 text-sm font-semibold text-foreground hover:bg-muted transition"
            >
              Explore Poetry Anthology
            </Link>
          </div>
        </div>
      </section>

    </>
  );
}
