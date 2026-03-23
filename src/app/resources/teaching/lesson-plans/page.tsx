"use client";

import { useState, useMemo } from "react";
import Link from "next/link";

/* ─── Role guard ──────────────────────────────────────────────── */
const MOCK_USER_ROLE: "student" | "teacher" | "parent" = "teacher";

/* ─── Types ───────────────────────────────────────────────────── */

interface LessonPlan {
  id: string;
  title: string;
  text: string;
  topic: string;
  yearGroup: string;
  duration: string;
  examBoard: string;
  subject: "English Literature" | "English Language";
  overview: string;
}

/* ─── Lesson plan data (10 plans) ─────────────────────────────── */

const LESSON_PLANS: LessonPlan[] = [
  {
    id: "introduction-to-macbeth",
    title: "Introduction to Macbeth",
    text: "Macbeth",
    topic: "Shakespeare",
    yearGroup: "Year 10",
    duration: "60 mins",
    examBoard: "AQA",
    subject: "English Literature",
    overview:
      "Introduce students to Macbeth through Act 1 Scene 1 and the witches. Explore the context of Jacobean England, the Great Chain of Being, and how Shakespeare uses the supernatural to unsettle his audience from the very first line.",
  },
  {
    id: "language-paper1-q5-creative-writing",
    title: "Language Paper 1 Q5: Creative Writing",
    text: "Language Paper 1",
    topic: "Creative Writing",
    yearGroup: "Year 11",
    duration: "60 mins",
    examBoard: "AQA",
    subject: "English Language",
    overview:
      "Master the 40-mark creative writing question. Focus on narrative structure, descriptive techniques, and crafting an engaging opening using sensory detail and varied sentence forms.",
  },
  {
    id: "comparing-power-conflict-poems",
    title: "Comparing Power and Conflict Poems",
    text: "AQA Poetry Anthology",
    topic: "Poetry",
    yearGroup: "Year 11",
    duration: "60 mins",
    examBoard: "AQA",
    subject: "English Literature",
    overview:
      "Develop the skill of comparing two Power and Conflict poems thematically and structurally. Students practise integrated comparison using connectives and learn to structure a high-level comparative essay response.",
  },
  {
    id: "christmas-carol-scrooges-transformation",
    title: "A Christmas Carol: Scrooge's Transformation",
    text: "A Christmas Carol",
    topic: "19th Century Novel",
    yearGroup: "Year 10",
    duration: "60 mins",
    examBoard: "AQA",
    subject: "English Literature",
    overview:
      "Track Scrooge's character arc from miser to philanthropist. Analyse how Dickens uses the novella to critique Victorian attitudes to poverty and social responsibility.",
  },
  {
    id: "inspector-calls-social-responsibility",
    title: "An Inspector Calls: Social Responsibility",
    text: "An Inspector Calls",
    topic: "Modern Drama",
    yearGroup: "Year 11",
    duration: "60 mins",
    examBoard: "AQA",
    subject: "English Literature",
    overview:
      "Explore how Priestley presents the theme of social responsibility through the Birling family. Analyse the Inspector as a mouthpiece for Priestley's socialist message and consider how the play challenges capitalist attitudes.",
  },
  {
    id: "persuasive-writing-techniques",
    title: "Persuasive Writing Techniques",
    text: "Language Paper 2",
    topic: "Non-Fiction Writing",
    yearGroup: "Year 10",
    duration: "60 mins",
    examBoard: "AQA",
    subject: "English Language",
    overview:
      "Build a toolkit of persuasive devices: rhetorical questions, tricolon, emotive language, anecdotes, statistics, and direct address. Apply them in a structured speech or article.",
  },
  {
    id: "unseen-poetry-approach",
    title: "Unseen Poetry Approach",
    text: "Unseen Poetry",
    topic: "Poetry",
    yearGroup: "Year 11",
    duration: "60 mins",
    examBoard: "AQA",
    subject: "English Literature",
    overview:
      "Equip students with a systematic approach to tackling unseen poetry. Use the SMILE framework (Structure, Meaning, Imagery, Language, Effect) to analyse unfamiliar poems confidently.",
  },
  {
    id: "language-analysis-skills",
    title: "Language Analysis Skills",
    text: "Language Paper 1",
    topic: "Reading Skills",
    yearGroup: "Year 10",
    duration: "60 mins",
    examBoard: "AQA",
    subject: "English Language",
    overview:
      "Develop close reading and language analysis skills. Students learn to identify and analyse the effect of word choices, figurative language, and sentence structures using the What-How-Why framework.",
  },
  {
    id: "jekyll-hyde-victorian-context",
    title: "Jekyll and Hyde: Victorian Context",
    text: "Jekyll and Hyde",
    topic: "19th Century Novel",
    yearGroup: "Year 10",
    duration: "60 mins",
    examBoard: "AQA",
    subject: "English Literature",
    overview:
      "Link Stevenson's novella to its Victorian context: repression, duality, Darwinian theory, and the fear of degeneration. Analyse how Stevenson uses setting and symbolism to reflect anxieties of the era.",
  },
  {
    id: "romeo-juliet-balcony-scene",
    title: "Romeo and Juliet: The Balcony Scene",
    text: "Romeo and Juliet",
    topic: "Shakespeare",
    yearGroup: "Year 10",
    duration: "60 mins",
    examBoard: "AQA",
    subject: "English Literature",
    overview:
      "Close analysis of Act 2 Scene 2, the iconic balcony scene. Explore Shakespeare's use of light and dark imagery, extended metaphor, and the tension between private love and public conflict.",
  },
];

/* ─── Filter options ──────────────────────────────────────────── */

const ALL_TOPICS = [...new Set(LESSON_PLANS.map((lp) => lp.topic))];
const ALL_YEAR_GROUPS = [...new Set(LESSON_PLANS.map((lp) => lp.yearGroup))];
const ALL_TEXTS = [...new Set(LESSON_PLANS.map((lp) => lp.text))];

/* ─── Icons ───────────────────────────────────────────────────── */

function SearchIcon() {
  return (
    <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
    </svg>
  );
}

function ArrowRight() {
  return (
    <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    </svg>
  );
}

/* ─── Page ───────────────────────────────────────────────────── */

export default function LessonPlansPage() {
  const [search, setSearch] = useState("");
  const [topicFilter, setTopicFilter] = useState("");
  const [yearGroupFilter, setYearGroupFilter] = useState("");
  const [textFilter, setTextFilter] = useState("");

  const filtered = useMemo(() => {
    return LESSON_PLANS.filter((lp) => {
      const matchesSearch =
        search === "" ||
        lp.title.toLowerCase().includes(search.toLowerCase()) ||
        lp.overview.toLowerCase().includes(search.toLowerCase()) ||
        lp.text.toLowerCase().includes(search.toLowerCase());
      const matchesTopic = topicFilter === "" || lp.topic === topicFilter;
      const matchesYear = yearGroupFilter === "" || lp.yearGroup === yearGroupFilter;
      const matchesText = textFilter === "" || lp.text === textFilter;
      return matchesSearch && matchesTopic && matchesYear && matchesText;
    });
  }, [search, topicFilter, yearGroupFilter, textFilter]);

  /* ── Access guard ──────────────────────────────────────────── */
  if (MOCK_USER_ROLE !== "teacher") {
    return (
      <>
        <div className="flex min-h-[60vh] items-center justify-center px-4">
          <div className="max-w-md rounded-xl border border-red-200 bg-red-50 p-8 text-center">
            <h2 className="text-lg font-bold text-red-800">Teacher Access Only</h2>
            <p className="mt-2 text-sm text-red-600">
              Lesson plans are only available to verified teacher accounts.
            </p>
            <Link
              href="/resources"
              className="mt-6 inline-block rounded-lg bg-[#1A5276] px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-[#1A5276]/90"
            >
              Back to Resources
            </Link>
          </div>
        </div>
      </>
    );
  }

  return (
    <>

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#1A5276] to-[#1A5276]/80 px-4 py-12 text-white sm:py-16">
        <div className="mx-auto max-w-4xl text-center">
          <nav className="mb-4 text-sm text-white/70">
            <Link href="/resources/teaching" className="hover:text-white transition-colors">
              Teaching Resources
            </Link>
            <span className="mx-2">/</span>
            <span className="text-white">Lesson Plans</span>
          </nav>
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Lesson Plan Library
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/90">
            {LESSON_PLANS.length} ready-to-teach lesson plans covering GCSE English Language and Literature.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="border-b border-gray-200 bg-white px-4 py-6 shadow-sm">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {/* Search */}
            <div className="relative">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <SearchIcon />
              </div>
              <input
                type="search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search lesson plans..."
                className="w-full rounded-lg border border-gray-300 bg-white py-2.5 pl-10 pr-4 text-sm text-gray-900 placeholder:text-gray-400 focus:border-[#2E86C1] focus:outline-none focus:ring-2 focus:ring-[#2E86C1]/20"
              />
            </div>

            {/* Topic filter */}
            <select
              value={topicFilter}
              onChange={(e) => setTopicFilter(e.target.value)}
              className="rounded-lg border border-gray-300 bg-white px-3 py-2.5 text-sm text-gray-700 focus:border-[#2E86C1] focus:outline-none focus:ring-2 focus:ring-[#2E86C1]/20"
            >
              <option value="">All Topics</option>
              {ALL_TOPICS.map((t) => (
                <option key={t} value={t}>{t}</option>
              ))}
            </select>

            {/* Year group filter */}
            <select
              value={yearGroupFilter}
              onChange={(e) => setYearGroupFilter(e.target.value)}
              className="rounded-lg border border-gray-300 bg-white px-3 py-2.5 text-sm text-gray-700 focus:border-[#2E86C1] focus:outline-none focus:ring-2 focus:ring-[#2E86C1]/20"
            >
              <option value="">All Year Groups</option>
              {ALL_YEAR_GROUPS.map((y) => (
                <option key={y} value={y}>{y}</option>
              ))}
            </select>

            {/* Text filter */}
            <select
              value={textFilter}
              onChange={(e) => setTextFilter(e.target.value)}
              className="rounded-lg border border-gray-300 bg-white px-3 py-2.5 text-sm text-gray-700 focus:border-[#2E86C1] focus:outline-none focus:ring-2 focus:ring-[#2E86C1]/20"
            >
              <option value="">All Texts</option>
              {ALL_TEXTS.map((t) => (
                <option key={t} value={t}>{t}</option>
              ))}
            </select>
          </div>

          {/* Active filter count */}
          {(search || topicFilter || yearGroupFilter || textFilter) && (
            <div className="mt-3 flex items-center gap-2">
              <span className="text-sm text-gray-500">
                {filtered.length} result{filtered.length !== 1 ? "s" : ""}
              </span>
              <button
                onClick={() => {
                  setSearch("");
                  setTopicFilter("");
                  setYearGroupFilter("");
                  setTextFilter("");
                }}
                className="text-sm font-medium text-[#2E86C1] hover:text-[#1A5276] transition-colors"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Cards */}
      <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        {filtered.length === 0 ? (
          <div className="rounded-xl border border-gray-200 bg-white p-12 text-center">
            <p className="text-lg font-medium text-gray-600">No lesson plans match your filters.</p>
            <p className="mt-2 text-sm text-gray-400">Try adjusting your search or filter criteria.</p>
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((lp) => (
              <Link
                key={lp.id}
                href={`/resources/teaching/lesson-plans/${lp.id}`}
                className="group flex flex-col rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md hover:border-[#2E86C1]/40"
              >
                {/* Tags row */}
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-full bg-[#1A5276]/10 px-2.5 py-0.5 text-xs font-semibold text-[#1A5276]">
                    {lp.subject}
                  </span>
                  <span className="rounded-full bg-[#2E86C1]/10 px-2.5 py-0.5 text-xs font-semibold text-[#2E86C1]">
                    {lp.examBoard}
                  </span>
                </div>

                {/* Title */}
                <h3 className="mt-3 text-base font-bold text-gray-900 group-hover:text-[#1A5276] transition-colors">
                  {lp.title}
                </h3>

                {/* Meta */}
                <div className="mt-2 flex flex-wrap items-center gap-3 text-xs text-gray-500">
                  <span className="inline-flex items-center gap-1">
                    <ClockIcon />
                    {lp.duration}
                  </span>
                  <span>{lp.yearGroup}</span>
                  <span className="font-medium text-gray-600">{lp.text}</span>
                </div>

                {/* Overview */}
                <p className="mt-3 flex-1 text-sm leading-relaxed text-gray-600 line-clamp-3">
                  {lp.overview}
                </p>

                {/* CTA */}
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[#2E86C1] group-hover:text-[#1A5276] transition-colors">
                  View lesson plan <ArrowRight />
                </span>
              </Link>
            ))}
          </div>
        )}
      </section>

    </>
  );
}
