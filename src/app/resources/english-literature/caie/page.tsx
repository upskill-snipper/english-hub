import type { Metadata } from "next";
import Link from "next/link";
import { ExamBoardDisclaimer } from "@/components/ExamBoardDisclaimer";

/* ─── Metadata ───────────────────────────────────────────────── */

export const metadata: Metadata = {
  title: "Cambridge IGCSE English Literature (0475/0992)",
  description:
    "Comprehensive study resources for Cambridge IGCSE English Literature. Poetry analysis, drama guides, Macbeth study notes, unseen techniques, and exam preparation for Papers 1 and 2.",
};

/* ─── Resource cards data ────────────────────────────────────── */

type Resource = {
  title: string;
  href: string;
  description: string;
  icon: React.ReactNode;
};

type ResourceGroup = {
  heading: string;
  subtitle: string;
  items: Resource[];
};

const resourceGroups: ResourceGroup[] = [
  {
    heading: "Exam Papers",
    subtitle: "Understand the structure, question types, and technique for each paper.",
    items: [
      {
        title: "Paper 1: Poetry & Prose",
        href: "/resources/english-literature/caie/paper-1",
        description:
          "Songs of Ourselves anthology, set prose texts, passage-based and essay question technique.",
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
          </svg>
        ),
      },
      {
        title: "Paper 2: Drama",
        href: "/resources/english-literature/caie/paper-2",
        description:
          "Shakespeare set texts, modern drama, writing about dramatic technique and stagecraft.",
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
          </svg>
        ),
      },
    ],
  },
  {
    heading: "Set Text Guides",
    subtitle: "In-depth study guides for each set text, with summaries, themes, characters, and key quotes.",
    items: [
      {
        title: "Macbeth",
        href: "/resources/english-literature/caie/macbeth",
        description:
          "Full plot summary, character analysis, themes, 20+ key quotes, historical context, and Cambridge exam questions.",
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6z" />
          </svg>
        ),
      },
      {
        title: "An Inspector Calls",
        href: "/resources/english-literature/caie/inspector-calls",
        description:
          "J.B. Priestley's classic: plot summary, character analysis, themes of social responsibility, key quotes, and exam-style questions.",
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21" />
          </svg>
        ),
      },
      {
        title: "A Christmas Carol",
        href: "/resources/english-literature/caie/christmas-carol",
        description:
          "Dickens' festive novella: stave-by-stave summary, character transformations, themes of redemption, key quotations, and exam practice.",
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        ),
      },
      {
        title: "Jekyll and Hyde",
        href: "/resources/english-literature/caie/jekyll-and-hyde",
        description:
          "Stevenson's gothic novella: chapter summaries, duality and repression themes, character analysis, key quotes, and Cambridge exam guidance.",
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
          </svg>
        ),
      },
    ],
  },
  {
    heading: "Skills & Techniques",
    subtitle: "Build the analytical skills you need across poetry analysis and unseen texts.",
    items: [
      {
        title: "Poetry Analysis",
        href: "/resources/english-literature/caie/poetry",
        description:
          "10+ poems from Songs of Ourselves with full analysis, comparison techniques, and marking guidance.",
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
          </svg>
        ),
      },
      {
        title: "Unseen Analysis",
        href: "/resources/english-literature/caie/unseen",
        description:
          "Step-by-step techniques for unseen prose and poetry analysis, with worked examples and examiner tips.",
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
          </svg>
        ),
      },
    ],
  },
];

/* ─── Page component ─────────────────────────────────────────── */

export default function CaieEnglishLiteratureHub() {
  return (
    <>

      {/* ── Hero banner ─────────────────────────────────────────── */}
      <section className="bg-gradient-to-br from-[#1A5276] to-[#2E86C1] px-4 py-16 text-white sm:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-white/70">
            Cambridge IGCSE
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            English Literature (0475/0992)
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/90">
            Everything you need to prepare for Cambridge IGCSE English Literature.
            Poetry, prose, drama, unseen analysis &mdash; structured around
            Papers&nbsp;1 and&nbsp;2 with real study content and exam technique.
          </p>
        </div>
      </section>

      {/* ── Specification overview ──────────────────────────────── */}
      <section className="mx-auto max-w-5xl px-4 py-12 sm:py-16">
        <h2 className="text-2xl font-bold text-foreground">Specification Overview</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <div className="rounded-lg border border-border bg-card p-5 shadow-md">
            <h3 className="font-semibold text-foreground">Paper 1: Poetry &amp; Prose</h3>
            <p className="mt-1 text-sm text-muted-foreground">1 hour 30 minutes &middot; 50 marks</p>
            <ul className="mt-3 space-y-1 text-sm text-muted-foreground">
              <li>&bull; Section A &mdash; Set poetry (Songs of Ourselves)</li>
              <li>&bull; Section B &mdash; Set prose text</li>
              <li>&bull; Passage-based and essay questions</li>
            </ul>
          </div>
          <div className="rounded-lg border border-border bg-card p-5 shadow-md">
            <h3 className="font-semibold text-foreground">Paper 2: Drama</h3>
            <p className="mt-1 text-sm text-muted-foreground">1 hour 30 minutes &middot; 50 marks</p>
            <ul className="mt-3 space-y-1 text-sm text-muted-foreground">
              <li>&bull; Section A &mdash; Set Shakespeare play</li>
              <li>&bull; Section B &mdash; Other set drama text</li>
              <li>&bull; Focus on dramatic technique and stagecraft</li>
            </ul>
          </div>
        </div>

        <div className="mt-6 rounded-lg border border-[#2E86C1]/20 bg-primary/5 p-5">
          <h3 className="font-semibold text-foreground">Assessment Objectives</h3>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li>
              <strong className="text-foreground">AO1</strong> &mdash; Show detailed knowledge
              of the content of literary texts, supported by reference to the text.
            </li>
            <li>
              <strong className="text-foreground">AO2</strong> &mdash; Understand the meanings
              of literary texts and their contexts, and explore texts beyond surface meanings to
              show deeper awareness of ideas and attitudes.
            </li>
            <li>
              <strong className="text-foreground">AO3</strong> &mdash; Recognise and appreciate
              ways in which writers use language, structure, and form to create and shape meanings
              and effects.
            </li>
            <li>
              <strong className="text-foreground">AO4</strong> &mdash; Communicate a sensitive
              and informed personal response to literary texts.
            </li>
          </ul>
        </div>
      </section>

      {/* ── Resource cards ──────────────────────────────────────── */}
      <section className="bg-muted px-4 py-12 sm:py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-2xl font-bold text-foreground">Study Resources</h2>
          <p className="mt-2 text-muted-foreground">
            Eight focused guides covering every part of the Cambridge IGCSE English Literature course.
          </p>

          {resourceGroups.map((group) => (
            <div key={group.heading} className="mt-10">
              <div className="mb-4 flex items-center gap-3">
                <h3 className="text-lg font-bold text-foreground">{group.heading}</h3>
                <span className="h-px flex-1 bg-[#1A5276]/15" />
              </div>
              <p className="mb-5 text-sm text-muted-foreground">{group.subtitle}</p>

              <div className="grid gap-5 sm:grid-cols-2">
                {group.items.map((r) => (
                  <Link
                    key={r.href}
                    href={r.href}
                    className="group flex flex-col rounded-xl border border-border bg-card p-6 shadow-md transition hover:border-[#2E86C1] hover:shadow-md"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#1A5276]/10 text-foreground transition group-hover:bg-primary/10 group-hover:text-primary">
                      {r.icon}
                    </div>
                    <h4 className="mt-4 text-lg font-semibold text-foreground group-hover:text-primary">
                      {r.title}
                    </h4>
                    <p className="mt-2 flex-1 text-sm text-muted-foreground">{r.description}</p>
                    <span className="mt-4 inline-flex items-center text-sm font-medium text-foreground group-hover:text-primary">
                      View resource
                      <svg xmlns="http://www.w3.org/2000/svg" className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Exam tips ───────────────────────────────────────────── */}
      <section className="mx-auto max-w-5xl px-4 py-12 sm:py-16">
        <h2 className="text-2xl font-bold text-foreground">Quick Exam Tips</h2>
        <div className="mt-6 space-y-4">
          {[
            {
              tip: "Always support your points with short, embedded quotations rather than long block quotes.",
              label: "Quoting",
            },
            {
              tip: "Cambridge examiners reward personal response. Use phrases such as \"I find it striking that...\" or \"This suggests to me...\" to show engagement.",
              label: "Personal Response",
            },
            {
              tip: "For passage-based questions, work through the extract systematically but also connect outward to the rest of the text.",
              label: "Passage Questions",
            },
            {
              tip: "Name specific literary techniques (enjambment, dramatic irony, sibilance) and explain their effect on the reader.",
              label: "Terminology",
            },
            {
              tip: "Time management: spend roughly 45 minutes on each section of the paper, including 5 minutes planning.",
              label: "Timing",
            },
          ].map((item) => (
            <div
              key={item.label}
              className="flex items-start gap-3 rounded-lg border border-border bg-card p-4 shadow-md"
            >
              <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                !
              </span>
              <div>
                <p className="text-sm font-semibold text-foreground">{item.label}</p>
                <p className="mt-1 text-sm text-muted-foreground">{item.tip}</p>
              </div>
            </div>
          ))}
        </div>

        <ExamBoardDisclaimer variant="content" className="mt-12" />
      </section>

    </>
  );
}
