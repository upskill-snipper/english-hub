"use client";

import Link from "next/link";

/* ─── Role guard ──────────────────────────────────────────────── */
const MOCK_USER_ROLE: "student" | "teacher" | "parent" = "teacher";

/* ─── Types ───────────────────────────────────────────────────── */

interface PrintableResource {
  id: string;
  title: string;
  description: string;
  category: string;
  tags: string[];
}

/* ─── Printable resources data ────────────────────────────────── */

const CATEGORIES = [
  {
    slug: "writing-frames",
    label: "Writing Frame Templates",
    description: "Structured writing scaffolds to support students across different text types and exam questions.",
    icon: (
      <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
      </svg>
    ),
  },
  {
    slug: "quote-organisers",
    label: "Quote Organiser Templates",
    description: "Structured templates for collecting, categorising, and annotating key quotations from set texts.",
    icon: (
      <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
      </svg>
    ),
  },
  {
    slug: "vocabulary",
    label: "Vocabulary Enhancement Worksheets",
    description: "Worksheets designed to build subject-specific vocabulary and improve analytical language in essays.",
    icon: (
      <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
      </svg>
    ),
  },
  {
    slug: "exam-checklists",
    label: "Exam Technique Checklists",
    description: "Step-by-step checklists students can use during revision and in the exam hall to stay on track.",
    icon: (
      <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15a2.25 2.25 0 0 1 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z" />
      </svg>
    ),
  },
];

const PRINTABLES: PrintableResource[] = [
  /* ── Writing Frames ────────────────────────────────────────── */
  {
    id: "creative-writing-frame",
    title: "Creative Writing Frame",
    description:
      "A scaffolded template for narrative and descriptive writing. Includes sections for opening hook, sensory detail planning, paragraph structure, and a strong ending. Ideal for AQA Paper 1 Q5.",
    category: "writing-frames",
    tags: ["English Language", "Paper 1", "All Boards"],
  },
  {
    id: "persuasive-writing-frame",
    title: "Persuasive Writing Frame",
    description:
      "Structured template for speeches, articles, and letters. Covers AFOREST techniques, counter-argument planning, rhetorical question placement, and a compelling conclusion. Suits Paper 2 Q5.",
    category: "writing-frames",
    tags: ["English Language", "Paper 2", "All Boards"],
  },
  {
    id: "analytical-writing-frame",
    title: "Analytical Essay Writing Frame",
    description:
      "Step-by-step scaffold for literature essays using the What-How-Why framework. Includes spaces for thesis statement, embedded quotations, language analysis, and contextual links.",
    category: "writing-frames",
    tags: ["English Literature", "Essay Writing", "All Boards"],
  },

  /* ── Quote Organisers ──────────────────────────────────────── */
  {
    id: "macbeth-quote-organiser",
    title: "Macbeth Quote Organiser",
    description:
      "Organised by character and theme with space for act/scene references, quotation, technique identification, and effect analysis. Covers ambition, guilt, the supernatural, and masculinity.",
    category: "quote-organisers",
    tags: ["English Literature", "Shakespeare", "AQA"],
  },
  {
    id: "christmas-carol-quote-organiser",
    title: "A Christmas Carol Quote Organiser",
    description:
      "Tracks Scrooge's transformation across all five staves. Includes columns for quotation, technique, context (Victorian poverty), and thematic links to social responsibility and redemption.",
    category: "quote-organisers",
    tags: ["English Literature", "19th Century", "AQA"],
  },
  {
    id: "inspector-calls-quote-organiser",
    title: "An Inspector Calls Quote Organiser",
    description:
      "Character-by-character organiser covering the Birlings, Gerald, and the Inspector. Links quotations to Priestley's socialist message, generational divide, and dramatic irony.",
    category: "quote-organisers",
    tags: ["English Literature", "Modern Drama", "AQA"],
  },
  {
    id: "jekyll-hyde-quote-organiser",
    title: "Jekyll and Hyde Quote Organiser",
    description:
      "Organised by theme: duality, repression, science vs religion, and Victorian society. Includes space for chapter reference, quotation, language analysis, and contextual connections.",
    category: "quote-organisers",
    tags: ["English Literature", "19th Century", "AQA"],
  },
  {
    id: "romeo-juliet-quote-organiser",
    title: "Romeo and Juliet Quote Organiser",
    description:
      "Covers love, conflict, fate, and family honour. Organised by act with columns for character, quotation, dramatic technique, and links to Elizabethan context.",
    category: "quote-organisers",
    tags: ["English Literature", "Shakespeare", "AQA"],
  },
  {
    id: "poetry-anthology-quote-organiser",
    title: "Poetry Anthology Quote Organiser",
    description:
      "One-page-per-poem template covering all 15 Power and Conflict poems. Space for key quotations, structural features, poetic techniques, and comparison links to other poems.",
    category: "quote-organisers",
    tags: ["English Literature", "Poetry", "AQA"],
  },

  /* ── Vocabulary Enhancement ────────────────────────────────── */
  {
    id: "analytical-vocabulary-builder",
    title: "Analytical Vocabulary Builder",
    description:
      "Worksheet with 50+ high-level analytical verbs and phrases (e.g. 'connotes', 'juxtaposes', 'subverts'). Includes definitions, example sentences, and gap-fill exercises for practice.",
    category: "vocabulary",
    tags: ["English Language", "English Literature", "All Boards"],
  },
  {
    id: "literary-techniques-glossary",
    title: "Literary Techniques Glossary Worksheet",
    description:
      "Illustrated glossary of 30 essential literary and language techniques. Each entry includes the term, definition, example, and space for students to find their own examples from set texts.",
    category: "vocabulary",
    tags: ["English Language", "English Literature", "All Boards"],
  },
  {
    id: "descriptive-vocabulary-mat",
    title: "Descriptive Vocabulary Mat",
    description:
      "Colour-coded vocabulary mat organised by sense (sight, sound, touch, taste, smell). Includes ambitious adjectives, powerful verbs, and simile/metaphor starters for creative writing.",
    category: "vocabulary",
    tags: ["English Language", "Creative Writing", "All Boards"],
  },

  /* ── Exam Technique Checklists ─────────────────────────────── */
  {
    id: "language-paper1-checklist",
    title: "Language Paper 1 Exam Checklist",
    description:
      "Question-by-question checklist for AQA English Language Paper 1. Covers timing guidance, mark allocation reminders, key command words, and common pitfalls for each question.",
    category: "exam-checklists",
    tags: ["English Language", "Paper 1", "AQA"],
  },
  {
    id: "language-paper2-checklist",
    title: "Language Paper 2 Exam Checklist",
    description:
      "Step-by-step exam checklist for Paper 2: Writers' Viewpoints and Perspectives. Includes comparison structure tips, viewpoint identification prompts, and writing task planning guidance.",
    category: "exam-checklists",
    tags: ["English Language", "Paper 2", "AQA"],
  },
  {
    id: "literature-essay-checklist",
    title: "Literature Essay Technique Checklist",
    description:
      "Universal checklist for any literature essay response. Covers thesis clarity, quotation embedding, analytical depth (What-How-Why), context integration, and proofreading steps.",
    category: "exam-checklists",
    tags: ["English Literature", "Essay Writing", "All Boards"],
  },
  {
    id: "revision-planning-checklist",
    title: "Revision Planning Checklist",
    description:
      "A comprehensive pre-exam revision checklist covering all texts, topics, and skills. Students tick off areas of confidence, identify gaps, and create a targeted revision timetable.",
    category: "exam-checklists",
    tags: ["English Language", "English Literature", "All Boards"],
  },
];

/* ─── Icons ───────────────────────────────────────────────────── */

function PrinterIcon() {
  return (
    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M6.72 13.829c-.24.03-.48.062-.72.096m.72-.096a42.415 42.415 0 0 1 10.56 0m-10.56 0L6.34 18m10.94-4.171c.24.03.48.062.72.096m-.72-.096L17.66 18m0 0 .229 2.523a1.125 1.125 0 0 1-1.12 1.227H7.231c-.662 0-1.18-.568-1.12-1.227L6.34 18m11.318 0h1.091A2.25 2.25 0 0 0 21 15.75V9.456c0-1.081-.768-2.015-1.837-2.175a48.055 48.055 0 0 0-1.913-.247M6.34 18H5.25A2.25 2.25 0 0 1 3 15.75V9.456c0-1.081.768-2.015 1.837-2.175a48.041 48.041 0 0 1 1.913-.247m10.5 0a48.536 48.536 0 0 0-10.5 0m10.5 0V3.375c0-.621-.504-1.125-1.125-1.125h-8.25c-.621 0-1.125.504-1.125 1.125v3.659M18 10.5h.008v.008H18V10.5Zm-3 0h.008v.008H15V10.5Z" />
    </svg>
  );
}

/* ─── Page ────────────────────────────────────────────────────── */

export default function PrintableResourcesPage() {
  /* ── Access guard ──────────────────────────────────────────── */
  if (MOCK_USER_ROLE !== "teacher") {
    return (
      <>
        <div className="flex min-h-[60vh] items-center justify-center px-4">
          <div className="max-w-md rounded-xl border border-destructive/20 bg-destructive/10 p-8 text-center">
            <svg className="mx-auto h-12 w-12 text-destructive" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
            </svg>
            <h2 className="mt-4 text-lg font-bold text-destructive">Teacher Plan Required</h2>
            <p className="mt-2 text-sm text-destructive/80">
              Printable resources are only available to users with a Teacher Plan.
              Upgrade your account or log in with a teacher account to access these materials.
            </p>
            <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <Link
                href="/account/billing"
                className="inline-block rounded-lg bg-primary px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-primary/90"
              >
                View Teacher Plans
              </Link>
              <Link
                href="/resources"
                className="inline-block rounded-lg border border-border px-6 py-2.5 text-sm font-semibold text-muted-foreground transition hover:bg-muted"
              >
                Back to Resources
              </Link>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>

      {/* Hero */}
      <section className="border-b bg-gradient-to-b from-primary/[0.06] to-transparent px-4 py-12 sm:py-16">
        <div className="mx-auto max-w-4xl text-center">
          <nav className="mb-4 text-sm text-muted-foreground">
            <Link href="/resources/teaching" className="hover:text-foreground transition-colors">
              Teaching Resources
            </Link>
            <span className="mx-2">/</span>
            <span className="text-white">Printable Resources</span>
          </nav>
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Printable Resources
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Downloadable worksheets, writing frames, quote organisers, and exam checklists
            ready to print for classroom use.
          </p>
        </div>
      </section>

      {/* Category overview */}
      <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {CATEGORIES.map((cat) => {
            const count = PRINTABLES.filter((p) => p.category === cat.slug).length;
            return (
              <a
                key={cat.slug}
                href={`#${cat.slug}`}
                className="group flex items-start gap-3 rounded-xl border border-border bg-card p-4 shadow-md transition hover:shadow-md hover:border-primary/40"
              >
                <div className="mt-0.5 shrink-0">{cat.icon}</div>
                <div>
                  <h3 className="text-sm font-bold text-foreground group-hover:text-foreground transition-colors">
                    {cat.label}
                  </h3>
                  <p className="mt-0.5 text-xs text-muted-foreground">
                    {count} resource{count !== 1 ? "s" : ""}
                  </p>
                </div>
              </a>
            );
          })}
        </div>
      </section>

      {/* Resource sections */}
      {CATEGORIES.map((cat) => {
        const resources = PRINTABLES.filter((p) => p.category === cat.slug);
        return (
          <section
            key={cat.slug}
            id={cat.slug}
            className="border-t border-border px-4 py-10 sm:px-6 lg:px-8 even:bg-muted"
          >
            <div className="mx-auto max-w-6xl">
              <div className="flex items-center gap-3">
                {cat.icon}
                <div>
                  <h2 className="text-xl font-bold text-foreground">{cat.label}</h2>
                  <p className="mt-1 text-sm text-muted-foreground">{cat.description}</p>
                </div>
              </div>

              <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {resources.map((resource) => (
                  <div
                    key={resource.id}
                    className="group flex flex-col rounded-xl border border-border bg-card p-5 shadow-md transition hover:shadow-md hover:border-primary/40"
                  >
                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5">
                      {resource.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-primary/10 px-2 py-0.5 text-[11px] font-semibold text-primary"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Title */}
                    <h3 className="mt-3 text-base font-bold text-foreground group-hover:text-foreground transition-colors">
                      {resource.title}
                    </h3>

                    {/* Description */}
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                      {resource.description}
                    </p>

                    {/* Actions */}
                    <div className="mt-4 flex items-center gap-3">
                      <button
                        onClick={() => window.print()}
                        className="inline-flex items-center gap-1.5 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white transition hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                      >
                        <PrinterIcon />
                        Print
                      </button>
                      <button
                        onClick={() => window.print()}
                        className="inline-flex items-center gap-1.5 rounded-lg border border-border px-4 py-2 text-sm font-semibold text-muted-foreground transition hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                      >
                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                        </svg>
                        Download PDF
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        );
      })}

      {/* Teacher Plan notice */}
      <section className="bg-primary/5 px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl rounded-xl border border-primary/20 bg-card p-6 text-center shadow-md sm:p-8">
          <h3 className="text-lg font-bold text-foreground">
            Need more resources?
          </h3>
          <p className="mt-2 text-sm text-muted-foreground">
            New printable resources are added regularly. All printable resources are included
            with the Teacher Plan at no extra cost.
          </p>
          <div className="mt-5 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link
              href="/resources/teaching"
              className="inline-block rounded-lg bg-primary px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-primary/90"
            >
              Back to Teaching Hub
            </Link>
            <Link
              href="/resources/teaching/lesson-plans"
              className="inline-block rounded-lg border border-border px-6 py-2.5 text-sm font-semibold text-muted-foreground transition hover:bg-muted"
            >
              Browse Lesson Plans
            </Link>
          </div>
        </div>
      </section>

    </>
  );
}
