import type { Metadata } from "next";
import Link from "next/link";
import { ExamBoardDisclaimer } from "@/components/ExamBoardDisclaimer";

/* ─── Metadata ───────────────────────────────────────────────── */

export const metadata: Metadata = {
  title: "Theme Explorer | GCSE English Literature",
  description:
    "Explore major GCSE English Literature themes across texts. Compare how power, guilt, love, conflict, and social responsibility appear in set texts for AQA, Edexcel, OCR, and Cambridge IGCSE.",
};

/* ─── Data ───────────────────────────────────────────────────── */

const THEMES = [
  {
    slug: "power",
    title: "Power",
    description:
      "How writers present power, ambition, and authority across prose, drama, and poetry -- from Macbeth's tyranny to Ozymandias' crumbling empire.",
    texts: ["Macbeth", "An Inspector Calls", "Animal Farm", "Ozymandias", "My Last Duchess"],
    colour: "border-[#C0392B]",
    bgColour: "bg-[#C0392B]/10",
    textColour: "text-[#C0392B]",
    icon: (
      <svg className="h-10 w-10 text-[#C0392B]" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21" />
      </svg>
    ),
  },
  {
    slug: "guilt",
    title: "Guilt",
    description:
      "Guilt as a destructive force -- from Lady Macbeth's madness to the collective shame in An Inspector Calls and the PTSD of Remains.",
    texts: ["Macbeth", "An Inspector Calls", "Remains", "A Christmas Carol"],
    colour: "border-[#8E44AD]",
    bgColour: "bg-[#8E44AD]/10",
    textColour: "text-[#8E44AD]",
    icon: (
      <svg className="h-10 w-10 text-[#8E44AD]" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
      </svg>
    ),
  },
  {
    slug: "social-responsibility",
    title: "Social Responsibility",
    description:
      "Writers who challenge their audience to consider their duty to society -- from Priestley's socialism to Dickens' critique of Victorian poverty.",
    texts: ["An Inspector Calls", "A Christmas Carol", "London (Blake)"],
    colour: "border-[#2E86C1]",
    bgColour: "bg-[#2E86C1]/10",
    textColour: "text-[#2E86C1]",
    icon: (
      <svg className="h-10 w-10 text-[#2E86C1]" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
      </svg>
    ),
  },
  {
    slug: "conflict",
    title: "Conflict",
    description:
      "Internal and external conflict across the GCSE canon -- from the Montagues and Capulets to the Power and Conflict anthology.",
    texts: ["Romeo and Juliet", "Power and Conflict Poetry", "Lord of the Flies"],
    colour: "border-[#D35400]",
    bgColour: "bg-[#D35400]/10",
    textColour: "text-[#D35400]",
    icon: (
      <svg className="h-10 w-10 text-[#D35400]" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z" />
      </svg>
    ),
  },
  {
    slug: "love",
    title: "Love",
    description:
      "Romantic, familial, and unrequited love across drama, prose, and poetry -- from Shakespeare's star-crossed lovers to the Love and Relationships anthology.",
    texts: ["Romeo and Juliet", "Love and Relationships Poetry", "Pride and Prejudice"],
    colour: "border-[#E74C3C]",
    bgColour: "bg-[#E74C3C]/10",
    textColour: "text-[#E74C3C]",
    icon: (
      <svg className="h-10 w-10 text-[#E74C3C]" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
      </svg>
    ),
  },
];

/* ─── Icons ──────────────────────────────────────────────────── */

function ArrowRight() {
  return (
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
  );
}

/* ─── Page ───────────────────────────────────────────────────── */

export default function ThemeExplorerPage() {
  return (
    <>

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#1A5276] to-[#1A5276]/80 px-4 py-16 text-white sm:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#2E86C1]/80">
            Resources
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Theme Explorer
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/90">
            Explore the major themes that run across your GCSE set texts.
            Compare how different writers tackle the same ideas -- perfect for
            comparison essays and cross-text revision.
          </p>
        </div>
      </section>

      {/* Theme grid */}
      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-gray-900">Major GCSE Themes</h2>
        <p className="mt-2 text-gray-600">
          Select a theme to see how it appears across your set texts, with key
          quotes and comparison essay ideas.
        </p>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {THEMES.map((theme) => (
            <Link
              key={theme.slug}
              href={`/resources/themes/${theme.slug}`}
              className={`group flex flex-col rounded-2xl border-2 ${theme.colour} bg-white p-7 shadow-sm transition hover:shadow-lg`}
            >
              <div className="flex items-start justify-between">
                {theme.icon}
                <span
                  className={`rounded-full ${theme.bgColour} px-3 py-1 text-xs font-bold ${theme.textColour}`}
                >
                  {theme.texts.length} texts
                </span>
              </div>

              <h3 className="mt-5 text-xl font-bold text-gray-900 group-hover:text-[#1A5276] transition-colors">
                {theme.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-gray-600">
                {theme.description}
              </p>

              <ul className="mt-5 flex flex-wrap gap-2">
                {theme.texts.map((text) => (
                  <li
                    key={text}
                    className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600"
                  >
                    {text}
                  </li>
                ))}
              </ul>

              <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-[#2E86C1] group-hover:text-[#1A5276] transition-colors">
                Explore theme <ArrowRight />
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* How to use themes in essays */}
      <section className="bg-gray-50 px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-2xl font-bold text-gray-900">
            Using themes in comparison essays
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-gray-600">
            Cross-text comparison is one of the highest-value skills at GCSE.
            Follow these steps to structure a strong thematic comparison.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                step: 1,
                heading: "Identify the theme",
                body: "Pick a theme that appears meaningfully in both texts -- don't force a connection that isn't there.",
              },
              {
                step: 2,
                heading: "Choose key quotes",
                body: "Select 2-3 short, quotable moments from each text that reveal the writer's attitude to the theme.",
              },
              {
                step: 3,
                heading: "Analyse methods",
                body: "Explain how each writer uses language, structure, or form to present the theme differently.",
              },
              {
                step: 4,
                heading: "Link to context",
                body: "Show how each writer's historical, social, or personal context shapes their presentation of the theme.",
              },
            ].map((tip) => (
              <div
                key={tip.step}
                className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#2E86C1] text-sm font-bold text-white">
                  {tip.step}
                </span>
                <h3 className="mt-4 text-base font-bold text-gray-900">
                  {tip.heading}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">
                  {tip.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick links */}
      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-gray-900">Continue exploring</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {[
            {
              label: "Revision Notes",
              href: "/resources/revision-notes",
              desc: "Text-by-text revision guides for Literature.",
            },
            {
              label: "Techniques Reference",
              href: "/resources/techniques",
              desc: "60+ language and structural devices explained.",
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
              className="group rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition hover:shadow-md hover:border-[#2E86C1]/40"
            >
              <h3 className="font-bold text-gray-900 group-hover:text-[#1A5276] transition-colors">
                {link.label}
              </h3>
              <p className="mt-1 text-sm text-gray-500">{link.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      <ExamBoardDisclaimer />
    </>
  );
}
