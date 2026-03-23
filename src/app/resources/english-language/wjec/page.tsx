import type { Metadata } from "next";
import Link from "next/link";
import { ExamBoardDisclaimer } from "@/components/ExamBoardDisclaimer";

/* ─── Metadata ───────────────────────────────────────────────── */

export const metadata: Metadata = {
  title: "WJEC Eduqas GCSE English Language Revision",
  description:
    "Complete WJEC Eduqas GCSE English Language revision hub. Component 1: 20th Century Literature Reading & Creative Prose Writing. Component 2: 19th & 21st Century Non-Fiction Reading & Transactional/Persuasive Writing.",
};

/* ─── Card data ──────────────────────────────────────────────── */

const sections = [
  {
    title: "Component 1: 20th Century Literature Reading & Creative Prose Writing",
    description:
      "Section A: Reading a 20th-century literary prose extract with structured questions. Section B: One creative prose writing task from a choice of four titles. 1 hour 45 minutes, 80 marks.",
    href: "/resources/english-language/wjec/component-1",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
      </svg>
    ),
    colour: "bg-[#1A5276]",
  },
  {
    title: "Component 2: 19th & 21st Century Non-Fiction Reading & Transactional/Persuasive Writing",
    description:
      "Section A: Reading two non-fiction extracts (one 19th century, one 21st century) with structured and extended response questions. Section B: Two transactional/persuasive writing tasks. 2 hours, 80 marks.",
    href: "/resources/english-language/wjec/component-2",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
    colour: "bg-[#2E86C1]",
  },
];

/* ─── Page component ─────────────────────────────────────────── */

export default function WJECEnglishLanguagePage() {
  return (
    <>

      {/* ── Hero ──────────────────────────────────────────────────── */}
      <section className="bg-gradient-to-br from-[#1A5276] to-[#2E86C1] px-4 py-16 text-white sm:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-white/70">
            WJEC Eduqas GCSE (C700QS)
          </p>
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            English Language Revision Hub
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/90">
            Everything you need for your WJEC Eduqas English Language GCSE. Two components covering
            20th-century literature reading, creative prose writing, non-fiction reading, and
            transactional/persuasive writing &mdash; fully broken down with exam technique and mark-scheme guidance.
          </p>
        </div>
      </section>

      {/* ── Exam overview ─────────────────────────────────────────── */}
      <section className="bg-gray-50 px-4 py-12">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center text-2xl font-bold text-gray-900 sm:text-3xl">
            Exam at a Glance
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { label: "Exam Board", value: "WJEC Eduqas" },
              { label: "Specification", value: "C700QS" },
              { label: "Total Exam Time", value: "3 hrs 45 mins" },
              { label: "Total Marks", value: "160 (+ Spoken Language)" },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-xl border border-gray-200 bg-white p-5 text-center shadow-sm"
              >
                <p className="text-sm font-medium text-gray-500">{item.label}</p>
                <p className="mt-1 text-lg font-bold text-[#1A5276]">{item.value}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 overflow-x-auto rounded-xl border border-gray-200 bg-white shadow-sm">
            <table className="w-full text-left text-sm">
              <thead className="bg-[#1A5276] text-white">
                <tr>
                  <th className="px-4 py-3 font-semibold">Component</th>
                  <th className="px-4 py-3 font-semibold">Duration</th>
                  <th className="px-4 py-3 font-semibold">Marks</th>
                  <th className="px-4 py-3 font-semibold">% of GCSE</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-3 font-medium text-gray-900">Component 1 &mdash; 20th Century Literature Reading &amp; Creative Prose Writing</td>
                  <td className="px-4 py-3 text-gray-700">1 hr 45 min</td>
                  <td className="px-4 py-3 text-gray-700">80</td>
                  <td className="px-4 py-3 text-gray-700">40%</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-3 font-medium text-gray-900">Component 2 &mdash; 19th &amp; 21st Century Non-Fiction Reading &amp; Transactional/Persuasive Writing</td>
                  <td className="px-4 py-3 text-gray-700">2 hr</td>
                  <td className="px-4 py-3 text-gray-700">80</td>
                  <td className="px-4 py-3 text-gray-700">60%</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-4 py-3 font-medium text-gray-900">Spoken Language Endorsement</td>
                  <td className="px-4 py-3 text-gray-700">N/A</td>
                  <td className="px-4 py-3 text-gray-700">Separate</td>
                  <td className="px-4 py-3 text-gray-700">Reported separately</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── Component breakdown ────────────────────────────────────── */}
      <section className="px-4 py-14 sm:py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center text-2xl font-bold text-gray-900 sm:text-3xl">
            Component Breakdown
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-center text-gray-600">
            Understand exactly what each component covers, how it is structured, and what the examiner is looking for.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {sections.map((s) => (
              <div
                key={s.title}
                className="group flex flex-col rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md hover:-translate-y-0.5"
              >
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-lg text-white ${s.colour}`}
                >
                  {s.icon}
                </div>
                <h3 className="mt-4 text-lg font-bold text-gray-900 group-hover:text-[#1A5276]">
                  {s.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-gray-600">
                  {s.description}
                </p>
              </div>
            ))}
          </div>

          {/* ── Component 1 detail ─────────────────────────────────── */}
          <div className="mt-12 rounded-xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
            <h3 className="text-xl font-bold text-[#1A5276]">
              Component 1: 20th Century Literature Reading &amp; Creative Prose Writing
            </h3>
            <p className="mt-2 text-sm text-gray-600">1 hour 45 minutes &bull; 80 marks &bull; 40% of GCSE</p>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <div className="rounded-lg bg-gray-50 p-4">
                <h4 className="font-semibold text-gray-900">Section A: Reading (40 marks)</h4>
                <ul className="mt-2 space-y-1 text-sm text-gray-700">
                  <li>&bull; One extract from a 20th-century literary prose text</li>
                  <li>&bull; Structured questions testing retrieval, inference, language analysis, and evaluation</li>
                  <li>&bull; Questions progress from short to extended response</li>
                  <li>&bull; Final question: critical evaluation with textual references</li>
                </ul>
              </div>
              <div className="rounded-lg bg-gray-50 p-4">
                <h4 className="font-semibold text-gray-900">Section B: Writing (40 marks)</h4>
                <ul className="mt-2 space-y-1 text-sm text-gray-700">
                  <li>&bull; One creative prose writing task</li>
                  <li>&bull; Choice of four titles</li>
                  <li>&bull; Assessed on content (24 marks) and technical accuracy (16 marks)</li>
                  <li>&bull; Narrative or descriptive prose expected</li>
                </ul>
              </div>
            </div>
          </div>

          {/* ── Component 2 detail ─────────────────────────────────── */}
          <div className="mt-6 rounded-xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
            <h3 className="text-xl font-bold text-[#1A5276]">
              Component 2: 19th &amp; 21st Century Non-Fiction Reading &amp; Transactional/Persuasive Writing
            </h3>
            <p className="mt-2 text-sm text-gray-600">2 hours &bull; 80 marks &bull; 60% of GCSE</p>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <div className="rounded-lg bg-gray-50 p-4">
                <h4 className="font-semibold text-gray-900">Section A: Reading (40 marks)</h4>
                <ul className="mt-2 space-y-1 text-sm text-gray-700">
                  <li>&bull; Two non-fiction texts: one 19th century, one 21st century</li>
                  <li>&bull; Questions on each text individually and a comparison question</li>
                  <li>&bull; Tests retrieval, inference, language/structural analysis, synthesis, and comparison</li>
                  <li>&bull; Extended response comparing attitudes or perspectives across both texts</li>
                </ul>
              </div>
              <div className="rounded-lg bg-gray-50 p-4">
                <h4 className="font-semibold text-gray-900">Section B: Writing (40 marks)</h4>
                <ul className="mt-2 space-y-1 text-sm text-gray-700">
                  <li>&bull; Two compulsory transactional/persuasive writing tasks</li>
                  <li>&bull; Different forms, audiences, and purposes (e.g. letter, article, speech, review)</li>
                  <li>&bull; Each task: content (12 marks) and technical accuracy (8 marks)</li>
                  <li>&bull; Requires adaptation of tone, style, and register</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Assessment Objectives ─────────────────────────────────── */}
      <section className="bg-gray-50 px-4 py-14">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center text-2xl font-bold text-gray-900 sm:text-3xl">
            Assessment Objectives (AOs)
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-center text-gray-600">
            Every question targets specific AOs. Understanding them helps you know exactly what examiners want.
          </p>

          <div className="mt-8 space-y-4">
            {[
              {
                ao: "AO1",
                title: "Identify and interpret explicit and implicit information and ideas",
                detail: "Select and synthesise evidence from different texts.",
                weight: "Reading",
              },
              {
                ao: "AO2",
                title: "Explain, comment on and analyse how writers use language and structure",
                detail: "Analyse effects on readers, using relevant subject terminology.",
                weight: "Reading",
              },
              {
                ao: "AO3",
                title: "Compare writers' ideas and perspectives",
                detail: "Compare across two or more texts, supported by detailed references. Primarily assessed in Component 2.",
                weight: "Reading (Component 2)",
              },
              {
                ao: "AO4",
                title: "Evaluate texts critically",
                detail: "Support evaluation with appropriate textual references. Assessed in Component 1 Section A.",
                weight: "Reading (Component 1)",
              },
              {
                ao: "AO5",
                title: "Communicate clearly, effectively, and imaginatively",
                detail: "Select and adapt tone, style and register for different forms, purposes and audiences. Organise information and ideas using structural and grammatical features.",
                weight: "Writing",
              },
              {
                ao: "AO6",
                title: "Use a range of vocabulary and sentence structures with accurate spelling and punctuation",
                detail: "Candidates must use accurate Standard English with control of grammar.",
                weight: "Writing",
              },
            ].map((obj) => (
              <div
                key={obj.ao}
                className="flex gap-4 rounded-xl border border-gray-200 bg-white p-5 shadow-sm"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#1A5276] text-sm font-bold text-white">
                  {obj.ao}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{obj.title}</h3>
                  <p className="mt-1 text-sm text-gray-600">{obj.detail}</p>
                  <span className="mt-2 inline-block rounded-full bg-blue-50 px-2.5 py-0.5 text-xs font-medium text-[#2E86C1]">
                    {obj.weight}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Quick links ───────────────────────────────────────────── */}
      <section className="px-4 py-14">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center text-2xl font-bold text-gray-900 sm:text-3xl">
            Explore Revision Resources
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-center text-gray-600">
            Dive deeper into specific areas of the WJEC Eduqas English Language GCSE.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Link
              href="/resources/english-language/wjec/grade-boundaries"
              className="group flex flex-col rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md hover:border-[#2E86C1]/40 hover:-translate-y-0.5"
            >
              <div className="flex items-center justify-between">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#1A5276]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                </svg>
                <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-[#2E86C1]">
                  2023&ndash;2025 data
                </span>
              </div>
              <h3 className="mt-4 text-lg font-bold text-gray-900 group-hover:text-[#1A5276] transition-colors">
                Grade Boundaries
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-gray-600">
                Recent WJEC Eduqas English Language grade boundaries, what each grade looks like in practice, and how to push your marks higher.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* ── Key differences from AQA/Edexcel ──────────────────────── */}
      <section className="bg-gray-50 px-4 py-14">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center text-2xl font-bold text-gray-900 sm:text-3xl">
            How WJEC Eduqas Differs from AQA &amp; Edexcel
          </h2>
          <div className="mt-8 space-y-4">
            <div className="rounded-lg border-l-4 border-[#1A5276] bg-blue-50 p-4">
              <h3 className="font-semibold text-[#1A5276]">Components, not Papers</h3>
              <p className="mt-1 text-sm text-gray-700">
                WJEC Eduqas uses the term &ldquo;Component&rdquo; rather than &ldquo;Paper.&rdquo;
                Component 1 focuses on 20th-century literature and creative writing, while
                Component 2 covers 19th and 21st-century non-fiction with transactional writing.
              </p>
            </div>
            <div className="rounded-lg border-l-4 border-[#1A5276] bg-blue-50 p-4">
              <h3 className="font-semibold text-[#1A5276]">20th Century Literature Extract</h3>
              <p className="mt-1 text-sm text-gray-700">
                Component 1 reading uses a 20th-century literary prose extract &mdash; neither AQA
                (which uses fiction from any period) nor Edexcel (which uses 19th-century fiction)
                share this exact focus. Expect extracts from novels or short stories published
                between 1900 and 1999.
              </p>
            </div>
            <div className="rounded-lg border-l-4 border-[#1A5276] bg-blue-50 p-4">
              <h3 className="font-semibold text-[#1A5276]">Two Compulsory Writing Tasks in Component 2</h3>
              <p className="mt-1 text-sm text-gray-700">
                Unlike AQA and Edexcel, where the non-fiction writing section requires one extended
                piece, WJEC Eduqas Component 2 requires two shorter transactional/persuasive writing
                tasks. This tests your ability to adapt to different forms and audiences within the
                same exam sitting.
              </p>
            </div>
            <div className="rounded-lg border-l-4 border-[#1A5276] bg-blue-50 p-4">
              <h3 className="font-semibold text-[#1A5276]">Creative Writing: Prose Only</h3>
              <p className="mt-1 text-sm text-gray-700">
                Component 1&apos;s creative writing section is strictly prose &mdash; narrative or
                descriptive writing. AQA also offers descriptive/narrative, but Edexcel gives broader
                imaginative writing options. WJEC provides a choice of four titles.
              </p>
            </div>
            <div className="rounded-lg border-l-4 border-[#1A5276] bg-blue-50 p-4">
              <h3 className="font-semibold text-[#1A5276]">Weighting: 40/60 Split</h3>
              <p className="mt-1 text-sm text-gray-700">
                Component 1 is worth 40% and Component 2 is worth 60%. This contrasts with AQA&apos;s
                50/50 split and differs from Edexcel&apos;s 40/60 weighting (though the content focus
                of each paper is different).
              </p>
            </div>
          </div>
        </div>
      </section>

      <ExamBoardDisclaimer />
    </>
  );
}
