import type { Metadata } from 'next'
import Link from 'next/link'
import { ExamBoardDisclaimer } from '@/components/ExamBoardDisclaimer'
import { BreadcrumbJsonLd } from '@/components/seo/json-ld'

/* ─── Metadata ───────────────────────────────────────────────── */

export const metadata: Metadata = {
  openGraph: {
    title: 'WJEC GCSE English Language resources — The English Hub',
    description:
      'WJEC Eduqas GCSE English Language resources covering Paper 1 and Paper 2 walkthroughs, writing skills, exam technique guides and grade boundaries.',
  },
  title: 'WJEC GCSE English Language resources — The English Hub',
  description:
    'WJEC Eduqas GCSE English Language resources covering Paper 1 and Paper 2 walkthroughs, writing skills, exam technique guides and grade boundaries.',
  alternates: { canonical: 'https://theenglishhub.app/resources/english-language/wjec' },
}

/* ─── Card data ──────────────────────────────────────────────── */

const sections = [
  {
    title: 'Paper 1: 20th Century Literature Reading & Creative Prose Writing',
    description:
      'Section A: Reading a 20th-century literary prose extract with structured questions. Section B: One creative prose writing task from a choice of four titles. 1 hour 45 minutes, 80 marks.',
    href: '/resources/english-language/wjec',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
        />
      </svg>
    ),
    colour: 'bg-primary',
  },
  {
    title: 'Paper 2: 19th & 21st Century Non-Fiction Reading & Writing for Real Purposes',
    description:
      'Section A: Reading two non-fiction extracts (one 19th century, one 21st century) with structured and extended response questions. Section B: Two writing for real purposes tasks. 2 hours, 80 marks.',
    href: '/resources/english-language/wjec',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
        />
      </svg>
    ),
    colour: 'bg-primary',
  },
]

/* ─── Page component ─────────────────────────────────────────── */

export default function WJECEnglishLanguagePage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: 'https://theenglishhub.app' },
          { name: 'Resources', url: 'https://theenglishhub.app/resources' },
          { name: 'English Language', url: 'https://theenglishhub.app/resources/english-language' },
          {
            name: 'WJEC Eduqas',
            url: 'https://theenglishhub.app/resources/english-language/wjec',
          },
        ]}
      />
      {/* ── Hero ──────────────────────────────────────────────────── */}
      <section className="border-b bg-gradient-to-b from-primary/[0.06] to-transparent px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-muted-foreground">
            WJEC Eduqas GCSE (C700QS)
          </p>
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            English Language Revision Hub
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Everything you need for your WJEC Eduqas English Language GCSE. Two components covering
            20th-century literature reading, creative prose writing, non-fiction reading, and
            writing for real purposes &mdash; fully broken down with exam technique and
            marking-guide guidance.
          </p>
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
              { label: 'Exam Board', value: 'WJEC Eduqas' },
              { label: 'Specification', value: 'C700QS' },
              { label: 'Total Exam Time', value: '3 hrs 45 mins' },
              { label: 'Total Marks', value: '160 (+ Spoken Language)' },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-xl border border-border bg-card p-5 text-center shadow-md"
              >
                <p className="text-sm font-medium text-muted-foreground">{item.label}</p>
                <p className="mt-1 text-lg font-bold text-foreground">{item.value}</p>
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
                  <td className="px-4 py-3 font-medium text-foreground">
                    Paper 1 &mdash; 20th Century Literature Reading &amp; Creative Prose Writing
                  </td>
                  <td className="px-4 py-3 text-muted-foreground">1 hr 45 min</td>
                  <td className="px-4 py-3 text-muted-foreground">80</td>
                  <td className="px-4 py-3 text-muted-foreground">40%</td>
                </tr>
                <tr className="hover:bg-muted">
                  <td className="px-4 py-3 font-medium text-foreground">
                    Paper 2 &mdash; 19th &amp; 21st Century Non-Fiction Reading &amp; Writing for
                    Real Purposes
                  </td>
                  <td className="px-4 py-3 text-muted-foreground">2 hr</td>
                  <td className="px-4 py-3 text-muted-foreground">80</td>
                  <td className="px-4 py-3 text-muted-foreground">60%</td>
                </tr>
                <tr className="hover:bg-muted">
                  <td className="px-4 py-3 font-medium text-foreground">
                    Spoken Language Endorsement
                  </td>
                  <td className="px-4 py-3 text-muted-foreground">N/A</td>
                  <td className="px-4 py-3 text-muted-foreground">Separate</td>
                  <td className="px-4 py-3 text-muted-foreground">Reported separately</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── Component breakdown ────────────────────────────────────── */}
      <section className="px-4 py-14 sm:py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center text-2xl font-bold text-foreground sm:text-3xl">
            Component Breakdown
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-center text-muted-foreground">
            Understand exactly what each component covers, how it is structured, and what the marker
            is looking for.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {sections.map((s) => (
              <div
                key={s.title}
                className="group flex flex-col rounded-xl border border-border bg-card p-6 shadow-md transition hover:shadow-md hover:-translate-y-0.5"
              >
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-lg text-white ${s.colour}`}
                >
                  {s.icon}
                </div>
                <h3 className="mt-4 text-lg font-bold text-foreground group-hover:text-foreground">
                  {s.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {s.description}
                </p>
              </div>
            ))}
          </div>

          {/* ── Paper 1 detail ─────────────────────────────────── */}
          <div className="mt-12 rounded-xl border border-border bg-card p-6 shadow-md sm:p-8">
            <h3 className="text-xl font-bold text-foreground">
              Paper 1: 20th Century Literature Reading &amp; Creative Prose Writing
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              1 hour 45 minutes &bull; 80 marks &bull; 40% of GCSE
            </p>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <div className="rounded-lg bg-muted p-4">
                <h4 className="font-semibold text-foreground">Section A: Reading (40 marks)</h4>
                <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                  <li>&bull; One extract from a 20th-century literary prose text</li>
                  <li>
                    &bull; Structured questions testing retrieval, inference, language analysis, and
                    evaluation
                  </li>
                  <li>&bull; Questions progress from short to extended response</li>
                  <li>&bull; Final question: critical evaluation with textual references</li>
                </ul>
              </div>
              <div className="rounded-lg bg-muted p-4">
                <h4 className="font-semibold text-foreground">Section B: Writing (40 marks)</h4>
                <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                  <li>&bull; One creative prose writing task</li>
                  <li>&bull; Choice of four titles</li>
                  <li>&bull; Assessed on content (24 marks) and technical accuracy (16 marks)</li>
                  <li>&bull; Narrative or descriptive prose expected</li>
                </ul>
              </div>
            </div>
          </div>

          {/* ── Paper 2 detail ─────────────────────────────────── */}
          <div className="mt-6 rounded-xl border border-border bg-card p-6 shadow-md sm:p-8">
            <h3 className="text-xl font-bold text-foreground">
              Paper 2: 19th &amp; 21st Century Non-Fiction Reading &amp; Writing for Real Purposes
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              2 hours &bull; 80 marks &bull; 60% of GCSE
            </p>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <div className="rounded-lg bg-muted p-4">
                <h4 className="font-semibold text-foreground">Section A: Reading (40 marks)</h4>
                <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                  <li>&bull; Two non-fiction texts: one 19th century, one 21st century</li>
                  <li>&bull; Questions on each text individually and a comparison question</li>
                  <li>
                    &bull; Tests retrieval, inference, language/structural analysis, synthesis, and
                    comparison
                  </li>
                  <li>
                    &bull; Extended response comparing attitudes or perspectives across both texts
                  </li>
                </ul>
              </div>
              <div className="rounded-lg bg-muted p-4">
                <h4 className="font-semibold text-foreground">Section B: Writing (40 marks)</h4>
                <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                  <li>&bull; Two compulsory writing for real purposes tasks</li>
                  <li>
                    &bull; Different forms, audiences, and purposes (e.g. letter, article, speech,
                    review)
                  </li>
                  <li>&bull; Each task: content (12 marks) and technical accuracy (8 marks)</li>
                  <li>&bull; Requires adaptation of tone, style, and register</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Assessment Objectives ─────────────────────────────────── */}
      <section className="bg-muted px-4 py-14">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center text-2xl font-bold text-foreground sm:text-3xl">
            Key Skills Assessed
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-center text-muted-foreground">
            Every question targets specific skills. Understanding them helps you know exactly what
            markers want.
          </p>

          <div className="mt-8 space-y-4">
            {[
              {
                ao: 'Retrieval',
                title: 'Identify and interpret explicit and implicit information and ideas',
                detail: 'Select and synthesise evidence from different texts.',
                weight: 'Reading',
              },
              {
                ao: 'Analysis',
                title: 'Explain, comment on and analyse how writers use language and structure',
                detail: 'Analyse effects on readers, using relevant subject terminology.',
                weight: 'Reading',
              },
              {
                ao: 'Compare',
                title: "Compare writers' ideas and perspectives",
                detail:
                  'Compare across two or more texts, supported by detailed references. Primarily assessed in Paper 2.',
                weight: 'Reading (Paper 2)',
              },
              {
                ao: 'Evaluate',
                title: 'Evaluate texts critically',
                detail:
                  'Support evaluation with appropriate textual references. Assessed in Paper 1 Section A.',
                weight: 'Reading (Paper 1)',
              },
              {
                ao: 'Content',
                title: 'Communicate clearly, effectively, and imaginatively',
                detail:
                  'Select and adapt tone, style and register for different forms, purposes and audiences. Organise information and ideas using structural and grammatical features.',
                weight: 'Writing',
              },
              {
                ao: 'Accuracy',
                title:
                  'Use a range of vocabulary and sentence structures with accurate spelling and punctuation',
                detail: 'Candidates must use accurate Standard English with control of grammar.',
                weight: 'Writing',
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
                  <span className="mt-2 inline-block rounded-full bg-blue-500/10 px-2.5 py-0.5 text-xs font-medium text-primary">
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
          <h2 className="text-center text-2xl font-bold text-foreground sm:text-3xl">
            Explore Revision Resources
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-center text-muted-foreground">
            Dive deeper into specific areas of the WJEC Eduqas English Language GCSE.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Link
              href="/resources/english-language/wjec/grade-boundaries"
              className="group flex flex-col rounded-xl border border-border bg-card p-6 shadow-md transition hover:shadow-md hover:border-primary/40 hover:-translate-y-0.5"
            >
              <div className="flex items-center justify-between">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-foreground"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
                  />
                </svg>
                <span className="rounded-full bg-blue-500/10 px-3 py-1 text-xs font-semibold text-primary">
                  2023&ndash;2025 data
                </span>
              </div>
              <h3 className="mt-4 text-lg font-bold text-foreground group-hover:text-foreground transition-colors">
                Grade Boundaries
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                Recent WJEC Eduqas English Language grade boundaries, what each grade looks like in
                practice, and how to push your marks higher.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* ── Key differences from AQA/Edexcel ──────────────────────── */}
      <section className="bg-muted px-4 py-14">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center text-2xl font-bold text-foreground sm:text-3xl">
            How WJEC Eduqas Differs from AQA &amp; Edexcel
          </h2>
          <div className="mt-8 space-y-4">
            <div className="rounded-lg border-l-4 border-primary bg-blue-500/10 p-4">
              <h3 className="font-semibold text-foreground">Components, not Papers</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                WJEC Eduqas uses the term &ldquo;Component&rdquo; rather than &ldquo;Paper.&rdquo;
                Paper 1 focuses on 20th-century literature and creative writing, while Paper 2
                covers 19th and 21st-century non-fiction with writing for real purposes.
              </p>
            </div>
            <div className="rounded-lg border-l-4 border-primary bg-blue-500/10 p-4">
              <h3 className="font-semibold text-foreground">20th Century Literature Extract</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Paper 1 reading uses a 20th-century literary prose extract &mdash; neither AQA
                (which uses fiction from any period) nor Edexcel (which uses 19th-century fiction)
                share this exact focus. Expect extracts from novels or short stories published
                between 1900 and 1999.
              </p>
            </div>
            <div className="rounded-lg border-l-4 border-primary bg-blue-500/10 p-4">
              <h3 className="font-semibold text-foreground">
                Two Compulsory Writing Tasks in Paper 2
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Unlike AQA and Edexcel, where the non-fiction writing section requires one extended
                piece, WJEC Eduqas Paper 2 requires two shorter writing for real purposes tasks.
                This tests your ability to adapt to different forms and audiences within the same
                exam sitting.
              </p>
            </div>
            <div className="rounded-lg border-l-4 border-primary bg-blue-500/10 p-4">
              <h3 className="font-semibold text-foreground">Creative Writing: Prose Only</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Paper 1&apos;s creative writing section is strictly prose &mdash; narrative or
                descriptive writing. AQA also offers descriptive/narrative, but Edexcel gives
                broader imaginative writing options. WJEC provides a choice of four titles.
              </p>
            </div>
            <div className="rounded-lg border-l-4 border-primary bg-blue-500/10 p-4">
              <h3 className="font-semibold text-foreground">Weighting: 40/60 Split</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Paper 1 is worth 40% and Paper 2 is worth 60%. This contrasts with AQA&apos;s 50/50
                split and differs from Edexcel&apos;s 40/60 weighting (though the content focus of
                each paper is different).
              </p>
            </div>
          </div>
        </div>
      </section>

      <ExamBoardDisclaimer />
    </>
  )
}
