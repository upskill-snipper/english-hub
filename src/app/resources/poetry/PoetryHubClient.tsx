"use client";

import { useState } from "react";
import Link from "next/link";

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

type Board = "All" | "AQA" | "Edexcel";

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const ANTHOLOGY_SECTIONS = [
  {
    title: "AQA Power and Conflict",
    href: "/resources/poetry/power-and-conflict",
    description:
      "All 15 poems analysed in depth: Ozymandias, London, The Prelude, My Last Duchess, Charge of the Light Brigade, Exposure, Storm on the Island, Bayonet Charge, Remains, Poppies, War Photographer, Tissue, The Emigree, Kamikaze, and Checking Out Me History.",
    poems: 15,
    board: "AQA" as const,
    colour: "border-[#2E86C1]",
  },
  {
    title: "AQA Love and Relationships",
    href: "/resources/poetry/love-and-relationships",
    description:
      "All 15 poems analysed: When We Two Parted, Love's Philosophy, Porphyria's Lover, Sonnet 29, Neutral Tones, Letters from Yorkshire, The Farmer's Bride, Walking Away, Eden Rock, Follower, Mother Any Distance, Before You Were Mine, Winter Swans, Singh Song!, and Climbing My Grandfather.",
    poems: 15,
    board: "AQA" as const,
    colour: "border-[#2E86C1]",
  },
  {
    title: "Edexcel Poetry Anthology",
    href: "/resources/poetry/edexcel-anthology",
    description:
      "Analysis of Edexcel GCSE English Literature poetry clusters including Relationships, Conflict, Time and Place. Key poems, techniques, and comparison guidance.",
    poems: 15,
    board: "Edexcel" as const,
    colour: "border-[#27AE60]",
  },
];

const SKILL_GUIDES = [
  {
    title: "Poetry Analysis Techniques",
    href: "/resources/poetry/techniques",
    description:
      "Master 25+ poetic devices: metaphor, simile, enjambment, caesura, volta, sibilance, and more. Definitions, examples, effects, and how to write about them in your exam.",
    tag: "Essential",
    icon: "techniques" as const,
  },
  {
    title: "Unseen Poetry",
    href: "/resources/poetry/unseen-poetry",
    description:
      "Step-by-step method for tackling unseen poetry in the exam. Annotation strategies, timed approaches, comparison techniques, and practice examples with model responses.",
    tag: "Exam Skill",
    icon: "unseen" as const,
  },
  {
    title: "How to Compare Poems",
    href: "/resources/poetry/comparing-poems",
    description:
      "A structured approach to comparison questions. Learn how to weave both poems together, choose strong comparison points, and write integrated paragraphs that impress examiners.",
    tag: "Key Skill",
    icon: "compare" as const,
  },
];

const TOP_TEN_POEMS = [
  { title: "Ozymandias", poet: "Percy Bysshe Shelley", board: "AQA" as const, href: "/resources/poetry/power-and-conflict/ozymandias" },
  { title: "London", poet: "William Blake", board: "AQA" as const, href: "/resources/poetry/power-and-conflict/london" },
  { title: "My Last Duchess", poet: "Robert Browning", board: "AQA" as const, href: "/resources/poetry/power-and-conflict/my-last-duchess" },
  { title: "Remains", poet: "Simon Armitage", board: "AQA" as const, href: "/resources/poetry/power-and-conflict/remains" },
  { title: "Exposure", poet: "Wilfred Owen", board: "AQA" as const, href: "/resources/poetry/power-and-conflict/exposure" },
  { title: "Porphyria's Lover", poet: "Robert Browning", board: "AQA" as const, href: "/resources/poetry/love-and-relationships/porphyrias-lover" },
  { title: "Neutral Tones", poet: "Thomas Hardy", board: "AQA" as const, href: "/resources/poetry/love-and-relationships/neutral-tones" },
  { title: "When We Two Parted", poet: "Lord Byron", board: "AQA" as const, href: "/resources/poetry/love-and-relationships/when-we-two-parted" },
  { title: "War Photographer", poet: "Carol Ann Duffy", board: "AQA" as const, href: "/resources/poetry/power-and-conflict/war-photographer" },
  { title: "The Charge of the Light Brigade", poet: "Alfred, Lord Tennyson", board: "AQA" as const, href: "/resources/poetry/power-and-conflict/charge-of-the-light-brigade" },
];

const QUICK_TIPS = [
  {
    title: "Memorise Key Quotations",
    text: "For anthology poems, aim for 5 short quotations per poem. Single words or phrases are easier to remember and more flexible in an essay than long passages.",
  },
  {
    title: "Always Identify Technique + Effect",
    text: "Naming a device is not enough. You must explain WHY the poet chose it and WHAT effect it creates on the reader. Link to the poem's themes.",
  },
  {
    title: "Compare, Don't Describe",
    text: "In comparison questions, weave both poems together. Use connectives like 'similarly', 'in contrast', 'whereas', and 'however' to show your analytical thinking.",
  },
  {
    title: "Context Is Not Biography",
    text: "Don't narrate the poet's life story. Instead, explain how historical, social, or cultural factors shape the poem's meaning and the reader's interpretation.",
  },
  {
    title: "Structure Matters",
    text: "Comment on form (sonnet, dramatic monologue), stanza shape, line length, enjambment, and caesura. Examiners reward students who analyse structure, not just language.",
  },
  {
    title: "Plan Your Comparison",
    text: "Spend 5 minutes planning. Pick 3 points of comparison. For each, have a quote from both poems. This prevents you from writing about one poem far more than the other.",
  },
];

/* ------------------------------------------------------------------ */
/*  Icons                                                              */
/* ------------------------------------------------------------------ */

function ArrowRight() {
  return (
    <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
    </svg>
  );
}

function PoemIcon() {
  return (
    <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
    </svg>
  );
}

function TechniquesIcon() {
  return (
    <svg className="h-7 w-7 text-primary" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
    </svg>
  );
}

function UnseenIcon() {
  return (
    <svg className="h-7 w-7 text-primary" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
    </svg>
  );
}

function CompareIcon() {
  return (
    <svg className="h-7 w-7 text-primary" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
    </svg>
  );
}

function getSkillIcon(icon: string) {
  switch (icon) {
    case "techniques":
      return <TechniquesIcon />;
    case "unseen":
      return <UnseenIcon />;
    case "compare":
      return <CompareIcon />;
    default:
      return <TechniquesIcon />;
  }
}

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export function PoetryHubClient() {
  const [activeBoard, setActiveBoard] = useState<Board>("All");

  const filteredAnthologies =
    activeBoard === "All"
      ? ANTHOLOGY_SECTIONS
      : ANTHOLOGY_SECTIONS.filter((s) => s.board === activeBoard);

  const filteredTopTen =
    activeBoard === "All"
      ? TOP_TEN_POEMS
      : TOP_TEN_POEMS.filter((p) => p.board === activeBoard);

  const boards: Board[] = ["All", "AQA", "Edexcel"];

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section className="bg-gradient-to-br from-[#1A5276] to-[#1A5276]/80 px-4 py-16 text-white sm:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary/70">
            GCSE English Literature
          </p>
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Poetry Made Clear
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/90">
            Everything you need to master GCSE poetry. Anthology analysis,
            poetic techniques, unseen poetry strategies, and comparison skills
            &mdash; all in one place.
          </p>

          {/* Exam board filter */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            <span className="mr-1 text-sm font-medium text-white/70">
              Filter by board:
            </span>
            {boards.map((board) => (
              <button
                key={board}
                onClick={() => setActiveBoard(board)}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white ${
                  activeBoard === board
                    ? "bg-card text-foreground shadow-md"
                    : "bg-card/15 text-white hover:bg-card/25 backdrop-blur-sm"
                }`}
              >
                {board === "All" ? "All Boards" : board}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── Anthology sections ───────────────────────────────────── */}
      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-foreground">
          Anthology Analysis
        </h2>
        <p className="mt-2 max-w-3xl text-muted-foreground">
          In-depth analysis of every poem in your exam board anthology.
          Stanza-by-stanza breakdowns, key quotations with technique
          identification, themes, context, and comparison links.
        </p>

        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {filteredAnthologies.length === 0 && (
            <p className="col-span-full text-sm text-muted-foreground">
              No anthology sections match the selected board. Try selecting
              &ldquo;All Boards&rdquo;.
            </p>
          )}
          {filteredAnthologies.map((section) => (
            <Link
              key={section.href}
              href={section.href}
              className={`group flex flex-col rounded-xl border-2 ${section.colour} bg-card p-6 shadow-md transition hover:shadow-md`}
            >
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-foreground">
                  <PoemIcon />
                  {section.poems} poems
                </span>
                <span className="rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-muted-foreground">
                  {section.board}
                </span>
              </div>
              <h3 className="mt-3 text-lg font-bold text-foreground transition-colors group-hover:text-primary">
                {section.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                {section.description}
              </p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary transition-colors group-hover:text-foreground">
                View analysis <ArrowRight />
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* ── Skills guides ────────────────────────────────────────── */}
      <section className="bg-card px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-2xl font-bold text-foreground">Poetry Skills</h2>
          <p className="mt-2 text-muted-foreground">
            Build the analytical skills you need for both anthology and unseen
            poetry questions.
          </p>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SKILL_GUIDES.map((guide) => (
              <Link
                key={guide.href}
                href={guide.href}
                className="group flex flex-col rounded-xl border border-border bg-card p-6 shadow-md transition hover:border-[#2E86C1]/40 hover:shadow-md"
              >
                <div className="flex items-center justify-between">
                  {getSkillIcon(guide.icon)}
                  <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                    {guide.tag}
                  </span>
                </div>
                <h3 className="mt-4 text-lg font-bold text-foreground transition-colors group-hover:text-primary">
                  {guide.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {guide.description}
                </p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary transition-colors group-hover:text-foreground">
                  Start learning <ArrowRight />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Top 10 most tested poems ─────────────────────────────── */}
      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-foreground">
          10 Most Commonly Tested Poems
        </h2>
        <p className="mt-2 text-muted-foreground">
          Quick access to the poems that appear most frequently in GCSE exams.
          Start your revision here.
        </p>

        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {filteredTopTen.length === 0 && (
            <p className="col-span-full text-sm text-muted-foreground">
              No poems match the selected board.
            </p>
          )}
          {filteredTopTen.map((poem, i) => (
            <Link
              key={poem.href}
              href={poem.href}
              className="group flex items-start gap-3 rounded-lg border border-border bg-card p-4 shadow-md transition hover:border-[#2E86C1]/40 hover:shadow-md"
            >
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#1A5276] text-xs font-bold text-white">
                {i + 1}
              </span>
              <div className="min-w-0">
                <h3 className="truncate text-sm font-bold text-foreground transition-colors group-hover:text-primary">
                  {poem.title}
                </h3>
                <p className="mt-0.5 truncate text-xs text-muted-foreground">
                  {poem.poet}
                </p>
                <span className="mt-1 inline-block rounded-full bg-gray-100 px-2 py-0.5 text-[10px] font-medium text-muted-foreground">
                  {poem.board}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── Quick tips ───────────────────────────────────────────── */}
      <section className="bg-card px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-2xl font-bold text-foreground">
            Top Poetry Exam Tips
          </h2>
          <p className="mt-2 text-muted-foreground">
            Essential strategies to maximise your marks in the poetry section.
          </p>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {QUICK_TIPS.map((tip) => (
              <div
                key={tip.title}
                className="rounded-xl border border-border bg-muted p-5 shadow-md"
              >
                <h3 className="font-semibold text-foreground">{tip.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {tip.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How poetry is assessed ───────────────────────────────── */}
      <section className="bg-[#1A5276]/5 px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-2xl font-bold text-foreground">
            How Poetry Is Assessed
          </h2>
          <p className="mt-2 text-muted-foreground">
            Understanding the assessment objectives helps you target your
            revision and write answers that hit every mark.
          </p>

          <div className="mt-6 space-y-4">
            {[
              {
                ao: "AO1",
                detail:
                  "Read, understand and respond to texts. Use textual references, including quotations, to support and illustrate interpretations of the poems.",
                tip: "Embed short quotations fluently into your sentences rather than bolting them on as afterthoughts.",
              },
              {
                ao: "AO2",
                detail:
                  "Analyse the language, form and structure used by a writer to create meanings and effects, using relevant subject terminology where appropriate.",
                tip: "Name the technique, quote it, then explain the effect. Do not just 'feature-spot' without analysis.",
              },
              {
                ao: "AO3",
                detail:
                  "Show understanding of the relationships between texts and the contexts in which they were written.",
                tip: "Link context to meaning. For example, Wilfred Owen's experience in the trenches shapes every image in Exposure.",
              },
            ].map((obj) => (
              <div
                key={obj.ao}
                className="rounded-lg border border-border bg-card p-5 shadow-md"
              >
                <div className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#1A5276] text-sm font-bold text-white">
                    {obj.ao}
                  </span>
                  <div>
                    <p className="leading-relaxed text-foreground">
                      {obj.detail}
                    </p>
                    <p className="mt-2 text-sm font-medium text-primary">
                      Tip: {obj.tip}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
