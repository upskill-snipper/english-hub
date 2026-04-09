"use client";

import { useState } from "react";
import Link from "next/link";

/* ─── Data ───────────────────────────────────────────────────── */

const CATEGORIES = [
  {
    title: "Academic Vocabulary",
    href: "/resources/vocabulary/academic",
    description:
      "50+ tier 2 and tier 3 words for essay writing. Organised by function -- analysis, evaluation, comparison, and description. Replace overused words like 'good', 'bad', and 'shows' with sophisticated alternatives.",
    count: "50+",
    topics: [
      "Analysis words",
      "Evaluation words",
      "Comparison words",
      "Description words",
      "Words to replace",
    ],
    colour: "border-primary",
    bg: "bg-primary/5",
    iconColour: "text-primary",
    icon: (
      <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a23.838 23.838 0 0 0-1.012 5.434c3.272-.956 6.625-1.488 10.02-1.632a48.578 48.578 0 0 1 6.474.52 23.836 23.836 0 0 0-1.012-5.434m-15.482 0A23.94 23.94 0 0 1 12 3.75a23.94 23.94 0 0 1 7.74 3.397m-15.48 3A23.94 23.94 0 0 1 12 6.272a23.94 23.94 0 0 1 7.74 3.875" />
      </svg>
    ),
  },
  {
    title: "Descriptive Vocabulary",
    href: "/resources/vocabulary/descriptive",
    description:
      "Build a rich bank of sensory, emotional, and atmospheric vocabulary for creative writing. 200+ words organised by category -- senses, emotions, weather, character, and setting.",
    count: "200+",
    topics: [
      "Sensory vocabulary",
      "Emotion vocabulary",
      "Weather & atmosphere",
      "Character description",
      "Setting description",
    ],
    colour: "border-accent",
    bg: "bg-accent/5",
    iconColour: "text-accent",
    icon: (
      <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
      </svg>
    ),
  },
  {
    title: "Analytical Vocabulary",
    href: "/resources/vocabulary/analytical",
    description:
      "Master the language of literary and linguistic analysis. Evaluative adverbs, tentative phrasing, comparative connectives, and precise vocabulary for discussing writer's methods.",
    count: "80+",
    topics: [
      "Evaluative adverbs",
      "Tentative language",
      "Comparative connectives",
      "Writer's methods vocabulary",
    ],
    colour: "border-primary",
    bg: "bg-primary/5",
    iconColour: "text-primary",
    icon: (
      <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
      </svg>
    ),
  },
  {
    title: "Persuasive Vocabulary",
    href: "/resources/vocabulary/academic#persuasive",
    description:
      "Powerful language for argumentative and persuasive writing. Emotive vocabulary, rhetorical intensifiers, and authoritative phrasing to make your writing convincing.",
    count: "40+",
    topics: [
      "Emotive language",
      "Rhetorical intensifiers",
      "Authoritative phrasing",
      "Connectives for argument",
    ],
    colour: "border-warn",
    bg: "bg-warn/5",
    iconColour: "text-warn",
    icon: (
      <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z" />
      </svg>
    ),
  },
];

const UPGRADE_WORDS = [
  { weak: "good", upgrades: ["effective", "compelling", "proficient", "commendable", "exemplary"] },
  { weak: "bad", upgrades: ["detrimental", "inadequate", "flawed", "deficient", "problematic"] },
  { weak: "nice", upgrades: ["pleasant", "agreeable", "delightful", "refined", "appealing"] },
  { weak: "shows", upgrades: ["demonstrates", "illustrates", "conveys", "reveals", "exemplifies"] },
  { weak: "says", upgrades: ["asserts", "contends", "declares", "maintains", "articulates"] },
  { weak: "big", upgrades: ["substantial", "considerable", "significant", "immense", "monumental"] },
  { weak: "very", upgrades: ["exceedingly", "remarkably", "profoundly", "considerably", "notably"] },
  { weak: "a lot", upgrades: ["numerous", "extensive", "abundant", "copious", "substantial"] },
];

/* ─── Component ─────────────────────────────────────────────── */

function ArrowRight() {
  return (
    <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
    </svg>
  );
}

export default function VocabularyHubPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredUpgrades = UPGRADE_WORDS.filter(
    (w) =>
      w.weak.toLowerCase().includes(searchTerm.toLowerCase()) ||
      w.upgrades.some((u) => u.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <>

      {/* Hero */}
      <section className="border-b bg-gradient-to-b from-primary/[0.06] to-transparent px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
            Resources
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Vocabulary Builder
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Upgrade your vocabulary for every type of GCSE English writing.
            Academic essays, creative pieces, literary analysis, and persuasive
            texts -- find the right word every time.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/resources/vocabulary/academic"
              className="btn-accent rounded-lg px-6 py-3 text-sm font-semibold shadow-lg"
            >
              Academic Words
            </Link>
            <Link
              href="/resources/vocabulary/descriptive"
              className="rounded-lg border px-6 py-3 text-sm font-semibold text-foreground transition hover:bg-muted"
            >
              Descriptive Words
            </Link>
            <Link
              href="/resources/vocabulary/analytical"
              className="rounded-lg border px-6 py-3 text-sm font-semibold text-foreground transition hover:bg-muted"
            >
              Analytical Words
            </Link>
          </div>
        </div>
      </section>

      {/* Category cards */}
      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2">
          {CATEGORIES.map((c) => (
            <Link
              key={c.title}
              href={c.href}
              className={`group flex flex-col rounded-2xl border-2 ${c.colour} ${c.bg} p-8 shadow-md transition hover:shadow-lg`}
            >
              <div className="flex items-start justify-between">
                <span className={c.iconColour}>{c.icon}</span>
                <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary">
                  {c.count} words
                </span>
              </div>
              <h2 className="mt-5 text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                {c.title}
              </h2>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                {c.description}
              </p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {c.topics.map((t) => (
                  <li key={t} className="rounded-full bg-card px-3 py-1 text-xs font-medium text-muted-foreground shadow-md">
                    {t}
                  </li>
                ))}
              </ul>
              <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-accent group-hover:text-primary transition-colors">
                Explore vocabulary <ArrowRight />
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Upgrade your vocabulary interactive section */}
      <section className="bg-muted px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-2xl font-bold text-foreground">
            Upgrade Your Vocabulary
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-muted-foreground">
            Stop using overused words. Search below or browse the table to find
            more sophisticated alternatives that will impress examiners.
          </p>

          {/* Search */}
          <div className="mx-auto mt-8 max-w-md">
            <div className="relative">
              <svg className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
              </svg>
              <input
                type="text"
                placeholder="Search for a word to upgrade..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full rounded-xl border border-border bg-card py-3 pl-10 pr-4 text-sm shadow-md transition focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
              />
            </div>
          </div>

          {/* Upgrade cards */}
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {filteredUpgrades.map((w) => (
              <div key={w.weak} className="rounded-xl border border-border bg-card p-5 shadow-md">
                <div className="flex items-center gap-2">
                  <span className="rounded-full bg-red-500/10 px-3 py-1 text-xs font-bold text-red-400 line-through">
                    {w.weak}
                  </span>
                  <svg className="h-4 w-4 text-muted-foreground" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </div>
                <ul className="mt-3 space-y-1.5">
                  {w.upgrades.map((u) => (
                    <li key={u} className="flex items-center gap-2 text-sm">
                      <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                      <span className="font-medium text-muted-foreground">{u}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {filteredUpgrades.length === 0 && (
            <p className="mt-8 text-center text-sm text-muted-foreground">
              No matches found. Try searching for a different word.
            </p>
          )}
        </div>
      </section>

      {/* Quick links */}
      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-foreground">Continue exploring</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {[
            { label: "Writing Skills", href: "/resources/writing-skills", desc: "Master creative, persuasive, and analytical writing." },
            { label: "Techniques Reference", href: "/resources/techniques", desc: "60+ language and structural devices explained." },
            { label: "All Resources", href: "/resources", desc: "Browse everything by exam board and subject." },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group rounded-xl border border-border bg-card p-5 shadow-md transition hover:shadow-md hover:border-accent/40"
            >
              <h3 className="font-bold text-foreground group-hover:text-primary transition-colors">{link.label}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{link.desc}</p>
            </Link>
          ))}
        </div>
      </section>

    </>
  );
}
