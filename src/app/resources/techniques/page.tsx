"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { ExamBoardDisclaimer } from "@/components/ExamBoardDisclaimer";

/* ─── Quick-reference technique data ─────────────────────────── */

type QuickTechnique = {
  name: string;
  definition: string;
  category: "language" | "structural";
};

const QUICK_TECHNIQUES: QuickTechnique[] = [
  { name: "Metaphor", definition: "Describing something as if it literally is something else to create a vivid comparison.", category: "language" },
  { name: "Simile", definition: "A comparison using 'like' or 'as' to draw attention to a shared quality.", category: "language" },
  { name: "Personification", definition: "Giving human qualities to non-human things to make descriptions more vivid or relatable.", category: "language" },
  { name: "Alliteration", definition: "Repetition of the same consonant sound at the start of nearby words to create rhythm or emphasis.", category: "language" },
  { name: "Sibilance", definition: "Repetition of 's' and 'sh' sounds to create a hissing, sinister, or soothing effect.", category: "language" },
  { name: "Pathetic Fallacy", definition: "Using weather or the environment to reflect a character's mood or the atmosphere.", category: "language" },
  { name: "Semantic Field", definition: "A group of words from the same topic area used together to reinforce a theme.", category: "language" },
  { name: "Irony", definition: "A contrast between expectation and reality, used for humour, criticism, or dramatic tension.", category: "language" },
  { name: "Juxtaposition", definition: "Placing two contrasting ideas side by side to highlight their differences.", category: "language" },
  { name: "Hyperbole", definition: "Deliberate exaggeration to emphasise a point or create dramatic effect.", category: "language" },
  { name: "Emotive Language", definition: "Words specifically chosen to provoke an emotional response from the reader.", category: "language" },
  { name: "Rhetorical Question", definition: "A question asked for effect rather than an answer, to make the reader think or agree.", category: "language" },
  { name: "Enjambment", definition: "A sentence or phrase that runs over from one line of poetry to the next without stopping.", category: "structural" },
  { name: "Caesura", definition: "A pause in the middle of a line of poetry, created by punctuation, to add emphasis.", category: "structural" },
  { name: "Cyclical Structure", definition: "A text that ends where it began, creating a sense of completeness or entrapment.", category: "structural" },
  { name: "Short Sentences", definition: "Brief, punchy sentences used to create tension, shock, or emphasis.", category: "structural" },
  { name: "Foreshadowing", definition: "Hints or clues about what will happen later in a text, building suspense.", category: "structural" },
  { name: "Shift in Focus", definition: "A deliberate change in subject, tone, or perspective to surprise or redirect the reader.", category: "structural" },
];

/* ─── Category cards ─────────────────────────────────────────── */

const CATEGORIES = [
  {
    title: "Language Devices",
    href: "/resources/techniques/language-devices",
    count: "45+",
    description:
      "Every language and literary technique you need for GCSE English. Metaphor, simile, personification, irony, semantic fields, sound devices, and much more -- each with a definition, example, effect, and exam sentence starter.",
    colour: "border-accent",
    bgGradient: "from-[#2E86C1]/5 to-[#2E86C1]/10",
    iconColour: "text-accent",
    topics: [
      "Figurative Language",
      "Sound Devices",
      "Imagery",
      "Rhetorical Devices",
      "Word-Level Choices",
      "Irony & Tone",
    ],
    icon: (
      <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
      </svg>
    ),
  },
  {
    title: "Structural Devices",
    href: "/resources/techniques/structural-devices",
    count: "20+",
    description:
      "Master the structural and form techniques examiners reward. Sentence types, narrative structures, poetic form, dialogue, shifts in focus, and how writers organise whole texts for effect.",
    colour: "border-primary",
    bgGradient: "from-[#1A5276]/5 to-[#1A5276]/10",
    iconColour: "text-primary",
    topics: [
      "Sentence Types",
      "Narrative Structure",
      "Poetic Form",
      "Opening & Ending",
      "Perspective Shifts",
      "Cyclical Structure",
    ],
    icon: (
      <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25a2.25 2.25 0 0 1-2.25-2.25v-2.25Z" />
      </svg>
    ),
  },
];

/* ─── What-How-Why method steps ───────────────────────────────── */

const WHW_STEPS = [
  {
    letter: "W",
    label: "What",
    colour: "bg-primary",
    heading: "What technique is being used?",
    description:
      "Identify the specific device. Be precise -- say 'sibilance' rather than 'sound technique', or 'extended metaphor' rather than just 'metaphor'.",
    example: "Shakespeare uses sibilance in the phrase \"the serpent's subtle sting\"...",
  },
  {
    letter: "H",
    label: "How",
    colour: "bg-primary",
    heading: "How does it work?",
    description:
      "Explain the mechanics. What does the technique do to the language? How does it change the sound, rhythm, imagery, or tone?",
    example: "...the repeated 's' sounds create a hissing quality that mimics the snake itself...",
  },
  {
    letter: "W",
    label: "Why",
    colour: "bg-primary",
    heading: "Why has the writer used it?",
    description:
      "Connect to the writer's purpose. What effect does it have on the reader? How does it link to themes, character, or context?",
    example: "...reinforcing the theme of deception and suggesting hidden danger beneath a calm surface.",
  },
];

/* ─── Exam tips ──────────────────────────────────────────────── */

const EXAM_TIPS = [
  {
    heading: "Name the technique precisely",
    body: "Always identify the specific device. Say 'sibilance' not 'a sound effect', 'pathetic fallacy' not 'the weather'. Examiners reward precise terminology.",
  },
  {
    heading: "Embed short quotations",
    body: "Weave 2-5 word quotes into your sentences rather than copying full lines. This keeps your analysis flowing and shows confident text handling.",
  },
  {
    heading: "Analyse the effect on the reader",
    body: "Explain how and why the technique impacts the reader. This is where the marks are -- identification alone stays in the lower bands.",
  },
  {
    heading: "Link to the writer's purpose",
    body: "Connect techniques to the writer's intentions, audience, historical context, or the wider themes of the text for top-band responses.",
  },
  {
    heading: "Use tentative language",
    body: "Phrases like 'perhaps', 'this could suggest', and 'the reader may interpret' show analytical sophistication and open up multiple readings.",
  },
  {
    heading: "Compare where possible",
    body: "In comparison questions, discuss how two writers use the same technique differently, or different techniques to achieve similar effects.",
  },
];

/* ─── Arrow icon ─────────────────────────────────────────────── */

function ArrowRight() {
  return (
    <svg
      className="h-4 w-4 transition-transform group-hover:translate-x-1"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg
      className="h-5 w-5 text-muted-foreground"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
    </svg>
  );
}

/* ─── Page ───────────────────────────────────────────────────── */

export default function TechniquesHubPage() {
  const [search, setSearch] = useState("");
  const [categoryFilter, setCategoryFilter] = useState<"all" | "language" | "structural">("all");

  const filteredTechniques = useMemo(() => {
    return QUICK_TECHNIQUES.filter((t) => {
      const matchesSearch =
        search.trim() === "" ||
        t.name.toLowerCase().includes(search.toLowerCase()) ||
        t.definition.toLowerCase().includes(search.toLowerCase());
      const matchesCategory =
        categoryFilter === "all" || t.category === categoryFilter;
      return matchesSearch && matchesCategory;
    });
  }, [search, categoryFilter]);

  return (
    <>

      {/* ── Hero Section ─────────────────────────────────────────── */}
      <section className="bg-gradient-to-br from-[#1A5276] via-[#1A5276] to-[#2E86C1] px-4 py-16 text-white sm:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-200">
            Techniques Reference
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Master Every Technique
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/90">
            The definitive guide to 60+ language and structural techniques for
            GCSE English. Definitions, examples, effects, and exam-ready
            sentence starters -- everything you need in one place.
          </p>

          {/* Search bar */}
          <div className="mx-auto mt-8 max-w-lg">
            <div className="relative">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
                <SearchIcon />
              </div>
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search techniques... e.g. metaphor, sibilance"
                className="w-full rounded-xl border-0 bg-card/95 py-3.5 pl-11 pr-4 text-sm text-foreground shadow-lg placeholder:text-muted-foreground focus:bg-card focus:outline-none focus:ring-2 focus:ring-white/50"
              />
            </div>
          </div>

          {/* CTA buttons */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/resources/techniques/language-devices"
              className="rounded-lg bg-card px-6 py-3 text-sm font-semibold text-foreground shadow-lg transition hover:bg-card/90"
            >
              Language Devices
            </Link>
            <Link
              href="/resources/techniques/structural-devices"
              className="rounded-lg border-2 border-white/30 bg-card/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-card/20"
            >
              Structural Devices
            </Link>
          </div>
        </div>
      </section>

      {/* ── Main Category Cards ──────────────────────────────────── */}
      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <h2 className="text-center text-2xl font-bold text-foreground sm:text-3xl">
          Browse by Category
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-muted-foreground">
          All techniques are organised into two main categories. Each entry
          includes a definition, example, effect analysis, and a sentence
          starter you can use in your exam.
        </p>

        <div className="mt-10 grid gap-8 md:grid-cols-2">
          {CATEGORIES.map((cat) => (
            <Link
              key={cat.href}
              href={cat.href}
              className={`group flex flex-col rounded-2xl border-2 border-primary bg-gradient-to-br from-primary/5 to-primary/10 p-8 shadow-md transition hover:shadow-lg`}
            >
              <div className="flex items-start justify-between">
                <div className="text-primary">{cat.icon}</div>
                <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary">
                  {cat.count} techniques
                </span>
              </div>
              <h3 className="mt-5 text-xl font-bold text-foreground transition-colors group-hover:text-foreground">
                {cat.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                {cat.description}
              </p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {cat.topics.map((t) => (
                  <li
                    key={t}
                    className="rounded-full bg-card/80 px-3 py-1 text-xs font-medium text-muted-foreground"
                  >
                    {t}
                  </li>
                ))}
              </ul>
              <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors group-hover:text-foreground">
                Browse all {cat.title.toLowerCase()} <ArrowRight />
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* ── Quick Reference Grid ─────────────────────────────────── */}
      <section className="bg-muted px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-2xl font-bold text-foreground sm:text-3xl">
            Quick Reference
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-muted-foreground">
            The most commonly tested techniques at a glance. Use the search bar
            above or filter by category to find what you need.
          </p>

          {/* Category filter pills */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
            {[
              { key: "all" as const, label: "All Techniques" },
              { key: "language" as const, label: "Language" },
              { key: "structural" as const, label: "Structural" },
            ].map((filter) => (
              <button
                key={filter.key}
                onClick={() => setCategoryFilter(filter.key)}
                className={`rounded-full px-4 py-1.5 text-sm font-semibold transition-colors ${
                  categoryFilter === filter.key
                    ? "bg-primary text-white"
                    : "bg-card text-muted-foreground hover:bg-primary/10 hover:text-foreground"
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filteredTechniques.map((tech) => (
              <div
                key={tech.name}
                className="rounded-xl border border-border bg-card p-5 shadow-md transition hover:shadow-md hover:border-primary/40"
              >
                <div className="flex items-start justify-between gap-2">
                  <h3 className="text-base font-bold text-foreground">
                    {tech.name}
                  </h3>
                  <span
                    className={`shrink-0 rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider ${
                      tech.category === "language"
                        ? "bg-primary/10 text-primary"
                        : "bg-primary/10 text-primary"
                    }`}
                  >
                    {tech.category === "language" ? "Lang" : "Struct"}
                  </span>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {tech.definition}
                </p>
              </div>
            ))}
          </div>

          {filteredTechniques.length === 0 && (
            <p className="mt-8 text-center text-sm text-muted-foreground">
              No techniques match your search. Try a different term or{" "}
              <button
                onClick={() => {
                  setSearch("");
                  setCategoryFilter("all");
                }}
                className="font-semibold text-primary underline"
              >
                clear filters
              </button>
              .
            </p>
          )}

          {/* Link to full lists */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/resources/techniques/language-devices"
              className="group inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors hover:text-foreground"
            >
              See all language devices <ArrowRight />
            </Link>
            <span className="text-muted-foreground">|</span>
            <Link
              href="/resources/techniques/structural-devices"
              className="group inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors hover:text-foreground"
            >
              See all structural devices <ArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* ── How to Analyse: What-How-Why ─────────────────────────── */}
      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <h2 className="text-center text-2xl font-bold text-foreground sm:text-3xl">
          How to Analyse: The What-How-Why Method
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-muted-foreground">
          Identifying a technique is only step one. To reach the top bands, you
          need to explain <strong>what</strong> the technique is,{" "}
          <strong>how</strong> it works, and <strong>why</strong> the writer
          chose it. Follow this three-step method every time.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {WHW_STEPS.map((step, i) => (
            <div
              key={step.label + i}
              className="relative rounded-2xl border border-border bg-card p-6 shadow-md"
            >
              {/* Step number circle */}
              <div
                className={`flex h-12 w-12 items-center justify-center rounded-full ${step.colour} text-lg font-bold text-white`}
              >
                {i + 1}
              </div>
              <h3 className="mt-4 text-lg font-bold text-foreground">
                {step.heading}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {step.description}
              </p>
              {/* Example */}
              <div className="mt-4 rounded-lg bg-muted p-3">
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Example
                </p>
                <p className="mt-1 text-sm italic leading-relaxed text-muted-foreground">
                  {step.example}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Full worked example */}
        <div className="mt-10 rounded-2xl border-2 border-primary/20 bg-primary/5 p-6 sm:p-8">
          <h3 className="text-lg font-bold text-foreground">
            Putting it all together
          </h3>
          <div className="mt-4 rounded-xl bg-card p-5 shadow-md">
            <p className="text-sm leading-relaxed text-muted-foreground">
              <span className="font-semibold text-foreground">[What]</span>{" "}
              Shakespeare uses <strong>sibilance</strong> in the phrase
              &quot;the serpent&apos;s subtle sting&quot;.{" "}
              <span className="font-semibold text-primary">[How]</span> The
              repeated &apos;s&apos; sounds create a hissing quality that mimics
              the snake itself, making the language feel dangerous and unsettling.{" "}
              <span className="font-semibold text-foreground">[Why]</span> This
              reinforces the theme of deception, suggesting hidden danger
              beneath a calm surface -- perhaps reflecting how characters mask
              their true intentions.
            </p>
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            Notice how each part builds on the last. The <strong>What</strong>{" "}
            identifies, the <strong>How</strong> explains the mechanics, and the{" "}
            <strong>Why</strong> connects to meaning. This structure works for
            any technique in any question.
          </p>
        </div>
      </section>

      {/* ── Exam Tips ────────────────────────────────────────────── */}
      <section className="bg-muted px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-2xl font-bold text-foreground sm:text-3xl">
            Exam Tips for Writing About Techniques
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-muted-foreground">
            Six principles that turn basic identification into top-band
            analysis. Apply these every time you write about a technique.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {EXAM_TIPS.map((tip, i) => (
              <div
                key={tip.heading}
                className="rounded-xl border border-border bg-card p-6 shadow-md"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                  {i + 1}
                </span>
                <h3 className="mt-4 text-base font-bold text-foreground">
                  {tip.heading}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {tip.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Continue Exploring ────────────────────────────────────── */}
      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-foreground">
          Continue exploring
        </h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {[
            {
              label: "Revision Notes",
              href: "/resources/revision-notes",
              desc: "Text-by-text revision guides for Literature.",
            },
            {
              label: "Exam Guide",
              href: "/resources/exam-guide",
              desc: "Paper structures, timings, and mark schemes.",
            },
            {
              label: "All Resources",
              href: "/resources",
              desc: "Browse everything by exam board and subject.",
            },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group rounded-xl border border-border bg-card p-5 shadow-md transition hover:shadow-md hover:border-primary/40"
            >
              <h3 className="font-bold text-foreground transition-colors group-hover:text-foreground">
                {link.label}
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">{link.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      <ExamBoardDisclaimer />
    </>
  );
}
