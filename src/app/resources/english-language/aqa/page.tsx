import type { Metadata } from 'next'
import Link from 'next/link'
import { ExamBoardDisclaimer } from '@/components/ExamBoardDisclaimer'
import { BreadcrumbJsonLd } from '@/components/seo/json-ld'

export const metadata: Metadata = {
  openGraph: {
    title: 'AQA GCSE English Language resources — The English Hub',
    description:
      'AQA GCSE English Language Paper 1 and Paper 2 resources. Reading techniques, writing skills, exam technique, mark schemes and grade boundaries.',
  },
  title: 'AQA GCSE English Language resources',
  description:
    'AQA GCSE English Language Paper 1 and Paper 2 resources. Reading techniques, writing skills, exam technique, mark schemes and grade boundaries.',
  alternates: { canonical: 'https://theenglishhub.app/resources/english-language/aqa' },
}

const sections = [
  {
    title: 'Paper 1: Explorations in Creative Reading and Writing',
    href: '/resources/english-language/aqa/paper-1',
    description:
      'Full breakdown of Questions 1-4 (Reading) and Question 5 (Writing). Marking guides, marker tips, and example responses at every grade.',
    icon: (
      <svg
        className="h-8 w-8 text-accent"
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
    ),
    tag: '1 hour 45 minutes',
  },
  {
    title: "Paper 2: Writers' Viewpoints and Perspectives",
    href: '/resources/english-language/aqa/paper-2',
    description:
      'Questions 1-4 (Reading) including comparison and synthesis skills, plus Question 5 (Writing) for persuasive and argumentative texts.',
    icon: (
      <svg
        className="h-8 w-8 text-accent"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 0 1 1.037-.443 48.282 48.282 0 0 0 5.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
        />
      </svg>
    ),
    tag: '1 hour 45 minutes',
  },
  {
    title: 'Language Techniques Guide',
    href: '/resources/english-language/aqa/techniques',
    description:
      'Over 30 literary and language devices with definitions, examples, effects on the reader, and how to write about them in the exam.',
    icon: (
      <svg
        className="h-8 w-8 text-accent"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
        />
      </svg>
    ),
    tag: '30+ techniques',
  },
  {
    title: 'Writing Skills Masterclass',
    href: '/resources/english-language/aqa/writing-skills',
    description:
      'Sentence structures, paragraph structures, vocabulary tiers, punctuation for effect, and complete checklists for descriptive and narrative writing.',
    icon: (
      <svg
        className="h-8 w-8 text-accent"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 0 0-2.455 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z"
        />
      </svg>
    ),
    tag: 'Essential skills',
  },
  {
    title: 'Grade Boundaries',
    href: '/resources/english-language/aqa/grade-boundaries',
    description:
      'Recent AQA English Language grade boundaries, what each grade looks like in practice, and how to push your marks higher.',
    icon: (
      <svg
        className="h-8 w-8 text-accent"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z"
        />
      </svg>
    ),
    tag: '2023-2026 data',
  },
]

export default function AQAEnglishLanguagePage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: 'https://theenglishhub.app' },
          { name: 'Resources', url: 'https://theenglishhub.app/resources' },
          { name: 'English Language', url: 'https://theenglishhub.app/resources/english-language' },
          { name: 'AQA', url: 'https://theenglishhub.app/resources/english-language/aqa' },
        ]}
      />
      {/* Hero */}
      <section className="border-b bg-gradient-to-b from-primary/[0.06] to-transparent px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
            AQA GCSE (8700)
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            English Language Revision Hub
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Everything you need to achieve your best grade in AQA GCSE English Language. Detailed
            study notes, techniques, marking guides, and example responses for both papers.
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
            <Link href="/resources" className="hover:text-primary transition-colors">
              Resources
            </Link>
          </li>
          <li>/</li>
          <li className="text-primary font-medium">AQA English Language</li>
        </ol>
      </nav>

      {/* Overview */}
      <div className="mx-auto max-w-5xl px-4 py-10">
        <div className="rounded-xl border border-primary/20 bg-primary/10 p-6 sm:p-8">
          <h2 className="text-xl font-bold text-foreground">About this qualification</h2>
          <div className="mt-4 grid gap-4 text-muted-foreground sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <p className="text-sm font-semibold text-muted-foreground">Exam board</p>
              <p className="text-lg font-bold text-primary">AQA</p>
            </div>
            <div>
              <p className="text-sm font-semibold text-muted-foreground">Specification code</p>
              <p className="text-lg font-bold text-primary">8700</p>
            </div>
            <div>
              <p className="text-sm font-semibold text-muted-foreground">Assessment</p>
              <p className="text-lg font-bold text-primary">2 exams + NEA (spoken language)</p>
            </div>
            <div>
              <p className="text-sm font-semibold text-muted-foreground">Total marks</p>
              <p className="text-lg font-bold text-primary">160 (80 per paper)</p>
            </div>
          </div>
        </div>

        {/* Section cards */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {sections.map((s) => (
            <Link
              key={s.href}
              href={s.href}
              className="group flex flex-col rounded-xl border border-border bg-card p-6 shadow-md transition hover:shadow-md hover:border-primary/30"
            >
              <div className="flex items-center justify-between">
                {s.icon}
                <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                  {s.tag}
                </span>
              </div>
              <h3 className="mt-4 text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                {s.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                {s.description}
              </p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-accent group-hover:text-primary transition-colors">
                Study now
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

        {/* Exam structure summary */}
        <div className="mt-10 rounded-xl border border-primary/20 bg-gradient-to-r from-primary/10 to-primary/10 p-6 sm:p-8">
          <h2 className="text-xl font-bold text-foreground">
            How is the qualification structured?
          </h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <div className="rounded-lg border border-border bg-card/70 p-4">
              <h3 className="font-bold text-primary">Paper 1 (50%)</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Explorations in Creative Reading and Writing. One literature fiction text. 4 reading
                questions + 1 descriptive/narrative writing task. 1 hour 45 minutes.
              </p>
            </div>
            <div className="rounded-lg border border-border bg-card/70 p-4">
              <h3 className="font-bold text-primary">Paper 2 (50%)</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Writers' Viewpoints and Perspectives. One non-fiction and one literary non-fiction
                text. 4 reading questions + 1 writing to present a viewpoint task. 1 hour 45
                minutes.
              </p>
            </div>
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            Plus a non-exam assessment (NEA) for Spoken Language, reported as a separate endorsement
            (Pass, Merit, or Distinction) on the certificate.
          </p>
        </div>

        {/* Quick tips */}
        <div className="mt-10 rounded-xl border border-border bg-card p-6 sm:p-8">
          <h2 className="text-xl font-bold text-foreground">
            Quick revision tips for AQA English Language
          </h2>
          <ul className="mt-4 space-y-3 text-muted-foreground">
            <li className="flex gap-3">
              <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/15 text-xs font-bold text-primary">
                1
              </span>
              <span>
                <strong>Read widely.</strong> The best way to improve both your reading analysis and
                your writing is to read fiction and non-fiction regularly. Pay attention to how
                professional writers use language.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/15 text-xs font-bold text-primary">
                2
              </span>
              <span>
                <strong>Practise under timed conditions.</strong> Time management is one of the
                biggest reasons students underperform. Use the recommended timings on each question
                and stick to them.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/15 text-xs font-bold text-primary">
                3
              </span>
              <span>
                <strong>Learn the marking guides.</strong> Understanding exactly what markers are
                looking for is half the battle. Our Paper 1 and Paper 2 pages include full marking
                guide breakdowns.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/15 text-xs font-bold text-primary">
                4
              </span>
              <span>
                <strong>Build a toolkit of techniques.</strong> You do not need to use every
                technique in every response, but you should be confident identifying and using at
                least 15-20 language devices.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/15 text-xs font-bold text-primary">
                5
              </span>
              <span>
                <strong>Focus on analysis, not feature-spotting.</strong> Identifying a metaphor
                earns minimal credit. Explaining <em>why</em> the writer chose that metaphor and{' '}
                <em>how</em> it affects the reader is where the marks are.
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* CTA */}
      <section className="mx-auto max-w-5xl px-4 pb-12">
        <div className="rounded-xl border bg-gradient-to-b from-primary/[0.06] to-transparent p-8 text-center sm:p-10">
          <h2 className="text-2xl font-bold sm:text-3xl">Ready to start revising?</h2>
          <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
            Begin with Paper 1 or Paper 2, or build your foundations with the Language Techniques
            and Writing Skills guides.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link
              href="/resources/english-language/aqa/paper-1"
              className="rounded-lg bg-card px-6 py-3 text-sm font-bold text-primary shadow-md transition hover:bg-primary/10"
            >
              Paper 1
            </Link>
            <Link
              href="/resources/english-language/aqa/paper-2"
              className="rounded-lg bg-card px-6 py-3 text-sm font-bold text-primary shadow-md transition hover:bg-primary/10"
            >
              Paper 2
            </Link>
            <Link
              href="/resources/english-language/aqa/techniques"
              className="rounded-lg bg-card/20 px-6 py-3 text-sm font-bold text-white backdrop-blur-sm transition hover:bg-card/30"
            >
              Techniques
            </Link>
            <Link
              href="/resources/english-language/aqa/writing-skills"
              className="rounded-lg bg-card/20 px-6 py-3 text-sm font-bold text-white backdrop-blur-sm transition hover:bg-card/30"
            >
              Writing Skills
            </Link>
          </div>
        </div>
      </section>

      <ExamBoardDisclaimer />
    </>
  )
}
