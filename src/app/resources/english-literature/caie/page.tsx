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

/* ─── SVG icon helpers ────────────────────────────────────── */

const dramaIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
  </svg>
);

const proseIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
  </svg>
);

const poetryIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
  </svg>
);

const examIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 00-.491 6.347A48.62 48.62 0 0112 20.904a48.62 48.62 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.636 50.636 0 00-2.658-.813A59.906 59.906 0 0112 3.493a59.903 59.903 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
  </svg>
);

const resourceGroups: ResourceGroup[] = [
  {
    heading: "Drama",
    subtitle: "Study guides for each set drama text, with summaries, themes, characters, and key quotes.",
    items: [
      {
        title: "A Midsummer Night's Dream",
        href: "/resources/english-literature/caie/a-midsummer-nights-dream",
        description:
          "Shakespeare's enchanting comedy: plot summary, character analysis, themes of love and illusion, key quotes, and exam guidance.",
        icon: dramaIcon,
      },
      {
        title: "A Streetcar Named Desire",
        href: "/resources/english-literature/caie/a-streetcar-named-desire",
        description:
          "Tennessee Williams' classic: scene-by-scene summary, character study, themes of desire and decay, key quotes, and exam practice.",
        icon: dramaIcon,
      },
      {
        title: "A Taste of Honey",
        href: "/resources/english-literature/caie/a-taste-of-honey",
        description:
          "Shelagh Delaney's kitchen-sink drama: plot summary, character analysis, themes of class and identity, key quotes, and exam guidance.",
        icon: dramaIcon,
      },
      {
        title: "Macbeth",
        href: "/resources/english-literature/caie/macbeth",
        description:
          "Full plot summary, character analysis, themes, 20+ key quotes, historical context, and Cambridge exam questions.",
        icon: dramaIcon,
      },
    ],
  },
  {
    heading: "Prose",
    subtitle: "In-depth study guides for each set prose text, covering plot, characters, themes, and exam technique.",
    items: [
      {
        title: "Great Expectations",
        href: "/resources/english-literature/caie/great-expectations",
        description:
          "Dickens' bildungsroman: chapter summaries, character analysis, themes of ambition and social class, key quotes, and exam guidance.",
        icon: proseIcon,
      },
      {
        title: "To Kill a Mockingbird",
        href: "/resources/english-literature/caie/to-kill-a-mockingbird",
        description:
          "Harper Lee's classic: plot summary, character study, themes of justice and prejudice, key quotes, and Cambridge exam practice.",
        icon: proseIcon,
      },
      {
        title: "Things Fall Apart",
        href: "/resources/english-literature/caie/things-fall-apart",
        description:
          "Chinua Achebe's landmark novel: plot summary, character analysis, themes of colonialism and cultural identity, key quotes, and exam guidance.",
        icon: proseIcon,
      },
      {
        title: "Rebecca",
        href: "/resources/english-literature/caie/rebecca",
        description:
          "Daphne du Maurier's gothic romance: plot summary, character analysis, themes of identity and obsession, key quotes, and exam practice.",
        icon: proseIcon,
      },
      {
        title: "The War of the Worlds",
        href: "/resources/english-literature/caie/war-of-the-worlds",
        description:
          "H.G. Wells' sci-fi classic: plot summary, character analysis, themes of imperialism and survival, key quotes, and exam guidance.",
        icon: proseIcon,
      },
      {
        title: "Fire on the Mountain",
        href: "/resources/english-literature/caie/fire-on-the-mountain",
        description:
          "Anita Desai's evocative novella: plot summary, character analysis, themes of isolation and disillusionment, key quotes, and exam practice.",
        icon: proseIcon,
      },
      {
        title: "Picnic at Hanging Rock",
        href: "/resources/english-literature/caie/picnic-at-hanging-rock",
        description:
          "Joan Lindsay's mystery: plot summary, character analysis, themes of the uncanny and nature, key quotes, and Cambridge exam guidance.",
        icon: proseIcon,
      },
    ],
  },
  {
    heading: "Poetry",
    subtitle: "Comprehensive poetry guides with full analysis, comparison techniques, and marking guidance.",
    items: [
      {
        title: "Songs of Ourselves Volume 1",
        href: "/resources/english-literature/caie/songs-of-ourselves-v1",
        description:
          "Full analysis of set poems from Volume 1, with themes, language techniques, comparison pairs, and exam-ready notes.",
        icon: poetryIcon,
      },
      {
        title: "Songs of Ourselves Volume 2",
        href: "/resources/english-literature/caie/songs-of-ourselves-v2",
        description:
          "Full analysis of set poems from Volume 2, with themes, language techniques, comparison pairs, and exam-ready notes.",
        icon: poetryIcon,
      },
      {
        title: "Unseen Poetry",
        href: "/resources/english-literature/caie/unseen-poetry",
        description:
          "Step-by-step techniques for unseen poetry analysis, with worked examples, annotated responses, and examiner tips.",
        icon: poetryIcon,
      },
    ],
  },
  {
    heading: "Exam Skills",
    subtitle: "Build the exam technique and knowledge you need to maximise your marks.",
    items: [
      {
        title: "Exam Technique",
        href: "/resources/english-literature/caie/exam-technique",
        description:
          "Time management, essay structure, quoting strategies, and examiner-approved approaches for Papers 1 and 2.",
        icon: examIcon,
      },
      {
        title: "Grade Boundaries",
        href: "/resources/english-literature/caie/grade-boundaries",
        description:
          "Historical grade boundaries for Cambridge IGCSE English Literature, with analysis of trends and what you need to aim for.",
        icon: examIcon,
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
            Focused guides covering every part of the Cambridge IGCSE English Literature course &mdash; drama, prose, poetry, and exam skills.
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
