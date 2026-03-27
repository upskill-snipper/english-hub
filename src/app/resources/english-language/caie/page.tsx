import type { Metadata } from "next";
import Link from "next/link";
import { ExamBoardDisclaimer } from "@/components/ExamBoardDisclaimer";

/* ─── Metadata ───────────────────────────────────────────────── */

export const metadata: Metadata = {
  alternates: { canonical: 'https://theenglishhub.app/resources/english-language/caie' },
  title: "Cambridge IGCSE English Language (0500/0990)",
  description:
    "Comprehensive revision hub for Cambridge IGCSE English Language (0500/0990). Reading, directed writing, composition, language techniques, and grade boundaries for international students.",
  keywords: [
    "Cambridge IGCSE English Language",
    "CAIE 0500",
    "CAIE 0990",
    "IGCSE English revision",
    "Cambridge English Language",
    "IGCSE reading comprehension",
    "IGCSE directed writing",
    "IGCSE composition",
    "Qatar IGCSE",
  ],
};

/* ─── Resource cards ─────────────────────────────────────────── */

const RESOURCES = [
  {
    href: "/resources/english-language/caie/paper-1",
    title: "Paper 1: Reading",
    subtitle: "Core Paper 1 / Extended Paper 2",
    description:
      "Master reading comprehension, summary writing, and note-making. Learn how to answer every question type with examiner-approved techniques.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
  {
    href: "/resources/english-language/caie/paper-2",
    title: "Paper 2: Directed Writing & Composition",
    subtitle: "Extended Paper Only",
    description:
      "Directed writing formats, narrative and descriptive composition, full band descriptors, and model approaches to secure top marks.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
      </svg>
    ),
  },
  {
    href: "/resources/english-language/caie/techniques",
    title: "Language Techniques",
    subtitle: "30+ Techniques with Examples",
    description:
      "A comprehensive glossary of literary and language techniques. Each entry includes a definition, examples, and guidance on how to analyse effect.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z" />
      </svg>
    ),
  },
  {
    href: "/resources/english-language/caie/writing-skills",
    title: "Writing Skills",
    subtitle: "All Formats & Techniques",
    description:
      "Directed writing formats (letters, reports, speeches, articles, journals), summary technique, and narrative/descriptive composition guidance.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
  },
  {
    href: "/resources/english-language/caie/grade-boundaries",
    title: "Grade Boundaries",
    subtitle: "Historical Data & Analysis",
    description:
      "Cambridge IGCSE English Language grade boundaries across recent exam series, with guidance on what each grade means and how to reach the next level.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
  },
] as const;

/* ─── Page component ─────────────────────────────────────────── */

export default function CaieEnglishLanguagePage() {
  return (
    <>

      {/* ── Hero banner ─────────────────────────────────────────── */}
      <section className="bg-gradient-to-br from-primary to-primary px-4 py-16 text-white sm:py-20">
        <div className="mx-auto max-w-4xl text-center">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-6 flex justify-center">
            <ol className="flex items-center gap-1.5 text-xs font-medium text-white/60">
              <li>
                <Link href="/" className="transition-colors hover:text-white/90">Home</Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link href="/resources" className="transition-colors hover:text-white/90">Resources</Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link href="/resources/english-language" className="transition-colors hover:text-white/90">English Language</Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-white/90">CAIE</li>
            </ol>
          </nav>
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-white/70">
            Cambridge International (CAIE)
          </p>
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            IGCSE English Language
          </h1>
          <p className="mt-2 text-lg font-medium text-white/90">
            Syllabus 0500 (Core &amp; Extended) / 0990 (9&ndash;1 Grading)
          </p>
          <p className="mx-auto mt-4 max-w-2xl text-base text-white/80">
            Everything you need to prepare for your Cambridge IGCSE English
            Language examination. Thorough coverage of both reading and writing
            papers, language techniques, mark schemes, and grade boundaries.
          </p>
        </div>
      </section>

      {/* ── Syllabus overview ───────────────────────────────────── */}
      <section className="mx-auto max-w-5xl px-4 py-12 sm:py-16">
        <h2 className="text-2xl font-bold text-foreground">Syllabus Overview</h2>
        <div className="mt-6 overflow-x-auto">
          <table className="w-full min-w-[600px] text-left text-sm">
            <thead>
              <tr className="border-b-2 border-primary/20">
                <th className="py-3 pr-4 font-semibold text-foreground">Component</th>
                <th className="py-3 pr-4 font-semibold text-foreground">Paper</th>
                <th className="py-3 pr-4 font-semibold text-foreground">Duration</th>
                <th className="py-3 pr-4 font-semibold text-foreground">Marks</th>
                <th className="py-3 font-semibold text-foreground">Weighting</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border text-muted-foreground">
              <tr>
                <td className="py-3 pr-4 font-medium">Reading (Core)</td>
                <td className="py-3 pr-4">Paper 1</td>
                <td className="py-3 pr-4">1 hour 45 min</td>
                <td className="py-3 pr-4">80</td>
                <td className="py-3">50%</td>
              </tr>
              <tr>
                <td className="py-3 pr-4 font-medium">Reading (Extended)</td>
                <td className="py-3 pr-4">Paper 2</td>
                <td className="py-3 pr-4">2 hours</td>
                <td className="py-3 pr-4">80</td>
                <td className="py-3">50%</td>
              </tr>
              <tr>
                <td className="py-3 pr-4 font-medium">Directed Writing &amp; Composition</td>
                <td className="py-3 pr-4">Paper 1 (Core) / Paper 2 (Ext.)</td>
                <td className="py-3 pr-4">2 hours</td>
                <td className="py-3 pr-4">80</td>
                <td className="py-3">50%</td>
              </tr>
              <tr>
                <td className="py-3 pr-4 font-medium">Speaking &amp; Listening</td>
                <td className="py-3 pr-4">Component 5 / 6</td>
                <td className="py-3 pr-4">Varies</td>
                <td className="py-3 pr-4">40</td>
                <td className="py-3">Separately endorsed</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-sm text-muted-foreground">
          Most international schools in Qatar and the Gulf region enter students
          for the <strong>Extended tier</strong> (grades A*&ndash;E or 9&ndash;1).
          Core tier candidates are eligible for grades C&ndash;G only.
        </p>
      </section>

      {/* ── Resource cards ──────────────────────────────────────── */}
      <section className="bg-muted px-4 py-12 sm:py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-2xl font-bold text-foreground">Study Resources</h2>
          <p className="mt-2 text-muted-foreground">
            Select a topic below to access full, detailed revision material.
          </p>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {RESOURCES.map((r) => (
              <Link
                key={r.href}
                href={r.href}
                className="group flex flex-col rounded-xl border border-border bg-card p-6 shadow-md transition-all hover:border-primary/40 hover:shadow-md hover:shadow-primary/5"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-foreground transition-colors group-hover:bg-primary/10 group-hover:text-primary">
                  {r.icon}
                </div>
                <h3 className="text-lg font-semibold text-foreground group-hover:text-primary">
                  {r.title}
                </h3>
                <p className="mt-0.5 text-xs font-medium uppercase tracking-wide text-primary">
                  {r.subtitle}
                </p>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {r.description}
                </p>
                <span className="mt-4 inline-flex items-center text-sm font-medium text-foreground group-hover:text-primary">
                  View resource
                  <svg xmlns="http://www.w3.org/2000/svg" className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Key dates & tips ────────────────────────────────────── */}
      <section className="mx-auto max-w-5xl px-4 py-12 sm:py-16">
        <h2 className="text-2xl font-bold text-foreground">
          Exam Tips for International Students
        </h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          <div className="rounded-lg border border-border border-l-4 border-l-primary bg-card p-5 shadow-md">
            <h3 className="font-semibold text-foreground">Time Management</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              In Paper 2 (Extended Reading), you have 2 hours for three
              questions. Allocate roughly 25 minutes for Question 1 (detailed
              comprehension), 30 minutes for Question 2 (summary), and 55
              minutes for Question 3 (analysis). Always leave 10 minutes to
              check your work.
            </p>
          </div>
          <div className="rounded-lg border border-border border-l-4 border-l-primary bg-card p-5 shadow-md">
            <h3 className="font-semibold text-foreground">Use the Passages</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Cambridge examiners reward candidates who engage closely with the
              text. Always refer to the passage using short, embedded quotations.
              Avoid copying long chunks &mdash; select precise words and phrases
              that support your point.
            </p>
          </div>
          <div className="rounded-lg border border-border border-l-4 border-l-primary bg-card p-5 shadow-md">
            <h3 className="font-semibold text-foreground">Directed Writing Format</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              In directed writing, always adopt the correct format (letter,
              report, speech, etc.) and use an appropriate register. Include
              content from the passage <strong>and</strong> your own ideas. This
              is where many students lose marks unnecessarily.
            </p>
          </div>
          <div className="rounded-lg border border-border border-l-4 border-l-primary bg-card p-5 shadow-md">
            <h3 className="font-semibold text-foreground">Vocabulary Building</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Cambridge passages often use sophisticated vocabulary. Build your
              word bank by reading widely &mdash; newspapers, quality magazines,
              and fiction. For each new word, note its meaning, part of speech,
              and an example sentence.
            </p>
          </div>
        </div>
      </section>

      {/* ── Disclaimer ──────────────────────────────────────────── */}
      <div className="mx-auto max-w-5xl px-4 pb-12">
        <ExamBoardDisclaimer variant="content" />
      </div>

    </>
  );
}
