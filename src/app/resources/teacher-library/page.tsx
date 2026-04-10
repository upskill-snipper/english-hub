import type { Metadata } from "next";
import Link from "next/link";
import { getServerBoard } from "@/lib/board/get-server-board";
import { getBoardConfig } from '@/lib/board/board-config';

export const metadata: Metadata = {
  title: "Teacher Resources Library",
  description:
    "Free, downloadable teaching resources for GCSE English: lesson plans, worksheets, mark schemes, revision packs, starter activities, and homework tasks.",
  alternates: {
    canonical: "https://theenglishhub.app/resources/teacher-library",
  },
  openGraph: {
    title: "Teacher Resources Library — The English Hub",
    description:
      "Free, downloadable teaching resources for GCSE English teachers. Lesson plans, worksheets, mark schemes, and more.",
  },
};

const CATEGORIES: {
  title: string;
  description: string;
  href: string;
  count: string;
  kind: string;
}[] = [
  {
    title: "Lesson Plans",
    description:
      "Full 60-minute lesson plans with learning objectives, starters, main activities, plenaries, and differentiation notes.",
    href: "/resources/teacher-library/lesson-plans",
    count: "20 plans",
    kind: "Lesson Plan",
  },
  {
    title: "Worksheets",
    description:
      "Print-ready student worksheets for comprehension, analysis, writing scaffolds, and exam skills practice.",
    href: "/resources/teacher-library/worksheets",
    count: "25 worksheets",
    kind: "Worksheet",
  },
  {
    title: "Mark Schemes",
    description:
      "AQA, Edexcel, OCR, and Eduqas mark scheme references with grade descriptors and assessment objectives.",
    href: "/resources/teacher-library/mark-schemes",
    count: "All major boards",
    kind: "Mark Scheme",
  },
  {
    title: "Revision Packs",
    description:
      "Ready-made revision booklets by set text — quote banks, theme notes, character analysis, and essay plans.",
    href: "/resources/teacher-library/revision-packs",
    count: "Set text packs",
    kind: "Revision Pack",
  },
  {
    title: "Starter Activities",
    description:
      "20 quick 5-minute starters to hook your class — vocabulary, retrieval practice, analysis warm-ups.",
    href: "/resources/teacher-library/starters",
    count: "20 starters",
    kind: "Starter",
  },
  {
    title: "Homework Tasks",
    description:
      "Meaningful homework tasks that extend classroom learning without creating a marking mountain.",
    href: "/resources/teacher-library/homework",
    count: "Task library",
    kind: "Homework",
  },
];

export default async function TeacherLibraryHub() {
  const board = await getServerBoard();
  const boardConfig = getBoardConfig(board);
  return (
    <main className="min-h-screen bg-background">
      {/* Hero */}
      <section className="border-b border-border bg-card">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="flex flex-col items-start gap-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary ring-1 ring-inset ring-primary/20">
                For Teachers
              </span>
              {boardConfig && (
                <span className="inline-flex items-center rounded-full border border-primary/30 bg-primary/5 px-3 py-1 text-xs font-semibold text-primary">
                  For {boardConfig.shortName}
                </span>
              )}
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Teacher Resources Library
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Free, classroom-ready teaching resources for GCSE English.
              Everything you need — planned, printable, and ready to use
              tomorrow. No sign-up required.
            </p>
            <div className="mt-2 flex flex-wrap gap-3 text-sm">
              <span className="inline-flex items-center gap-2 rounded-lg border border-border bg-background px-3 py-1.5 text-foreground">
                <span className="h-1.5 w-1.5 rounded-full bg-success-600" />
                100% free
              </span>
              <span className="inline-flex items-center gap-2 rounded-lg border border-border bg-background px-3 py-1.5 text-foreground">
                <span className="h-1.5 w-1.5 rounded-full bg-success-600" />
                No account needed
              </span>
              <span className="inline-flex items-center gap-2 rounded-lg border border-border bg-background px-3 py-1.5 text-foreground">
                <span className="h-1.5 w-1.5 rounded-full bg-success-600" />
                AQA / Edexcel / OCR / Eduqas
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Category grid */}
      <section className="mx-auto max-w-6xl px-6 py-12">
        <h2 className="mb-8 text-2xl font-bold text-foreground">
          Browse by category
        </h2>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {CATEGORIES.map((cat) => (
            <Link
              key={cat.title}
              href={cat.href}
              className="group relative flex flex-col rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            >
              <div className="flex items-start justify-between">
                <span className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-semibold text-primary ring-1 ring-inset ring-primary/20">
                  {cat.kind}
                </span>
                <span className="text-xs font-medium text-muted-foreground">
                  {cat.count}
                </span>
              </div>
              <h3 className="mt-4 text-xl font-bold text-foreground transition-colors group-hover:text-primary">
                {cat.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                {cat.description}
              </p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-accent transition-colors group-hover:text-primary">
                Browse resources
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

      {/* Footer strip */}
      <section className="border-t border-border bg-muted/30">
        <div className="mx-auto max-w-6xl px-6 py-10 text-center">
          <h2 className="text-xl font-bold text-foreground">
            Looking for something specific?
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Browse our full teaching resources hub for assessment tools, exam
            specs, and printable classroom materials.
          </p>
          <Link
            href="/resources/teaching"
            className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline"
          >
            Visit main teaching hub →
          </Link>
        </div>
      </section>
    </main>
  );
}
