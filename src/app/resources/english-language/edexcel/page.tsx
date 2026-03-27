import type { Metadata } from "next";
import Link from "next/link";
import { ExamBoardDisclaimer } from "@/components/ExamBoardDisclaimer";

/* ─── Metadata ───────────────────────────────────────────────── */

export const metadata: Metadata = {
  alternates: { canonical: 'https://theenglishhub.app/resources/english-language/edexcel' },
  title: "Edexcel English Language GCSE Revision",
  description:
    "Complete Edexcel English Language GCSE revision hub. Paper 1 Fiction & Imaginative Writing, Paper 2 Non-Fiction & Transactional Writing, techniques, writing skills, and grade boundaries.",
};

/* ─── Card data ──────────────────────────────────────────────── */

const sections = [
  {
    title: "Paper 1: Fiction & Imaginative Writing",
    description:
      "Section A: Reading 19th-century fiction extracts. Section B: Imaginative writing from a choice of two tasks. 1 hour 45 minutes, 64 marks.",
    href: "/resources/english-language/edexcel/paper-1",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
      </svg>
    ),
    colour: "bg-primary",
  },
  {
    title: "Paper 2: Non-Fiction & Transactional Writing",
    description:
      "Section A: Reading two linked non-fiction texts (19th & 21st century). Section B: Transactional writing. 2 hours 5 minutes, 64 marks.",
    href: "/resources/english-language/edexcel/paper-2",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
    colour: "bg-accent",
  },
  {
    title: "Language & Structural Techniques",
    description:
      "Over 30 language and structural techniques with clear definitions, examples from literature, and analysis of their effects on the reader.",
    href: "/resources/english-language/edexcel/techniques",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z" />
      </svg>
    ),
    colour: "bg-primary",
  },
  {
    title: "Transactional Writing Masterclass",
    description:
      "Step-by-step guides for articles, letters, speeches, reviews, and essays. Learn conventions, formats, and techniques to hit every mark-scheme bullet.",
    href: "/resources/english-language/edexcel/writing-skills",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
      </svg>
    ),
    colour: "bg-accent",
  },
  {
    title: "Grade Boundaries",
    description:
      "Historical Edexcel English Language grade boundaries from recent exam series. Understand the marks you need for each grade.",
    href: "/resources/english-language/edexcel/grade-boundaries",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
    colour: "bg-primary",
  },
];

/* ─── Page component ─────────────────────────────────────────── */

export default function EdexcelEnglishLanguagePage() {
  return (
    <>

      {/* ── Hero ──────────────────────────────────────────────────── */}
      <section className="bg-gradient-to-br from-primary via-primary/90 to-accent px-4 py-16 text-white sm:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary/20">
            Edexcel GCSE (1EN0)
          </p>
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            English Language Revision Hub
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/90">
            Everything you need to ace your Edexcel English Language GCSE. Two papers, full mark-scheme
            breakdowns, 30+ techniques, writing masterclasses, and grade boundary data &mdash; all in one place.
          </p>

          {/* Quick-jump pills */}
          <div className="mx-auto mt-8 flex max-w-2xl flex-wrap items-center justify-center gap-3">
            {[
              { label: "Paper 1", href: "/resources/english-language/edexcel/paper-1" },
              { label: "Paper 2", href: "/resources/english-language/edexcel/paper-2" },
              { label: "Techniques", href: "/resources/english-language/edexcel/techniques" },
              { label: "Writing Skills", href: "/resources/english-language/edexcel/writing-skills" },
              { label: "Grade Boundaries", href: "/resources/english-language/edexcel/grade-boundaries" },
            ].map((pill) => (
              <Link
                key={pill.href}
                href={pill.href}
                className="rounded-full border border-white/30 bg-card/10 px-4 py-1.5 text-sm font-medium text-white backdrop-blur transition hover:bg-card/20"
              >
                {pill.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Exam overview ─────────────────────────────────────────── */}
      <section className="bg-muted px-4 py-12">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center text-2xl font-bold text-foreground sm:text-3xl">
            Exam at a Glance
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { label: "Exam Board", value: "Pearson Edexcel" },
              { label: "Specification", value: "1EN0" },
              { label: "Total Exam Time", value: "3 hrs 50 mins" },
              { label: "Total Marks", value: "128 (+ 20% Spoken Language)" },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-xl border border-border bg-card p-5 text-center shadow-md"
              >
                <p className="text-sm font-medium text-muted-foreground">{item.label}</p>
                <p className="mt-1 text-lg font-bold text-primary">{item.value}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 overflow-x-auto rounded-xl border border-border bg-card shadow-md">
            <table className="w-full text-left text-sm">
              <thead className="bg-primary text-white">
                <tr>
                  <th className="px-4 py-3 font-semibold">Component</th>
                  <th className="px-4 py-3 font-semibold">Duration</th>
                  <th className="px-4 py-3 font-semibold">Marks</th>
                  <th className="px-4 py-3 font-semibold">% of GCSE</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr className="hover:bg-muted">
                  <td className="px-4 py-3 font-medium text-foreground">Paper 1 &mdash; Fiction &amp; Imaginative Writing</td>
                  <td className="px-4 py-3 text-muted-foreground">1 hr 45 min</td>
                  <td className="px-4 py-3 text-muted-foreground">64</td>
                  <td className="px-4 py-3 text-muted-foreground">40%</td>
                </tr>
                <tr className="hover:bg-muted">
                  <td className="px-4 py-3 font-medium text-foreground">Paper 2 &mdash; Non-Fiction &amp; Transactional Writing</td>
                  <td className="px-4 py-3 text-muted-foreground">2 hr 5 min</td>
                  <td className="px-4 py-3 text-muted-foreground">64</td>
                  <td className="px-4 py-3 text-muted-foreground">60%</td>
                </tr>
                <tr className="hover:bg-muted">
                  <td className="px-4 py-3 font-medium text-foreground">Spoken Language Endorsement</td>
                  <td className="px-4 py-3 text-muted-foreground">N/A</td>
                  <td className="px-4 py-3 text-muted-foreground">Separate</td>
                  <td className="px-4 py-3 text-muted-foreground">Reported separately</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── Section cards ─────────────────────────────────────────── */}
      <section className="px-4 py-14 sm:py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center text-2xl font-bold text-foreground sm:text-3xl">
            Explore Revision Materials
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-center text-muted-foreground">
            Click any section below to access full study notes, mark schemes, example responses, and exam tips.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {sections.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="group flex flex-col rounded-xl border border-border bg-card p-6 shadow-md transition hover:shadow-md hover:-translate-y-0.5"
              >
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-lg text-white ${s.colour}`}
                >
                  {s.icon}
                </div>
                <h3 className="mt-4 text-lg font-bold text-foreground group-hover:text-primary">
                  {s.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {s.description}
                </p>
                <span className="mt-4 inline-flex items-center text-sm font-semibold text-accent group-hover:text-primary">
                  View guide
                  <svg className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Assessment Objectives ─────────────────────────────────── */}
      <section className="bg-muted px-4 py-14">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center text-2xl font-bold text-foreground sm:text-3xl">
            Assessment Objectives (AOs)
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-center text-muted-foreground">
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
                detail: "Compare across two or more texts, supported by detailed references.",
                weight: "Reading (Paper 2)",
              },
              {
                ao: "AO4",
                title: "Evaluate texts critically",
                detail: "Support evaluation with appropriate textual references.",
                weight: "Reading",
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
                className="flex gap-4 rounded-xl border border-border bg-card p-5 shadow-md"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary text-sm font-bold text-white">
                  {obj.ao}
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">{obj.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{obj.detail}</p>
                  <span className="mt-2 inline-block rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                    {obj.weight}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ExamBoardDisclaimer />
    </>
  );
}
