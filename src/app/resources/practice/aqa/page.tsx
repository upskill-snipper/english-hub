"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { QuestionCard } from "../QuestionCard";
import {
  DIFFICULTY_LABELS,
  DIFFICULTY_COLORS,
} from "../types";
import { aqaQuestions } from "./questions";

/* ─── Paper / section grouping ───────────────────────────────── */

interface SectionConfig {
  key: string;
  label: string;
  description: string;
  icon: React.ReactNode;
}

const SECTIONS: SectionConfig[] = [
  {
    key: "lang-p1",
    label: "Language Paper 1",
    description: "Explorations in Creative Reading & Writing",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
      </svg>
    ),
  },
  {
    key: "lang-p2",
    label: "Language Paper 2",
    description: "Writers' Viewpoints & Perspectives",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 0 1 1.037-.443 48.282 48.282 0 0 0 5.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
      </svg>
    ),
  },
  {
    key: "lit",
    label: "Literature",
    description: "Shakespeare, Modern Text & 19th Century Novel",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342" />
      </svg>
    ),
  },
];

function getSectionKey(q: (typeof aqaQuestions)[number]): string {
  if (q.subject === "literature") return "lit";
  if (q.paper === "Paper 1") return "lang-p1";
  if (q.paper === "Paper 2") return "lang-p2";
  return "other";
}

/* ─── Page ───────────────────────────────────────────────────── */

export default function AQAPracticePage() {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [selectedDifficulty, setSelectedDifficulty] = useState<number | null>(null);

  /* Group questions by section */
  const grouped = useMemo(() => {
    const map = new Map<string, typeof aqaQuestions>();
    for (const q of aqaQuestions) {
      const key = getSectionKey(q);
      if (!map.has(key)) map.set(key, []);
      map.get(key)!.push(q);
    }
    return map;
  }, []);

  /* Filtered questions */
  const filteredBySection = useMemo(() => {
    let questions = aqaQuestions;
    if (activeSection) {
      questions = questions.filter((q) => getSectionKey(q) === activeSection);
    }
    if (selectedDifficulty) {
      questions = questions.filter((q) => q.difficulty === selectedDifficulty);
    }
    return questions;
  }, [activeSection, selectedDifficulty]);

  /* Section counts */
  const sectionCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    for (const section of SECTIONS) {
      counts[section.key] = grouped.get(section.key)?.length ?? 0;
    }
    return counts;
  }, [grouped]);

  return (
    <>
      {/* ── Breadcrumb ────────────────────────────────────────── */}
      <div className="mb-6">
        <Link
          href="/resources/practice"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-500 transition-colors hover:text-[#1A5276]"
        >
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
          </svg>
          All practice questions
        </Link>
      </div>

      {/* ── Hero ──────────────────────────────────────────────── */}
      <div className="mb-8 overflow-hidden rounded-2xl bg-gradient-to-br from-[#1A5276] to-[#2E86C1] p-6 text-white sm:p-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="mb-2 inline-flex items-center gap-1.5 rounded-full bg-white/20 px-3 py-1 text-xs font-semibold backdrop-blur-sm">
              <span className="h-2 w-2 rounded-full bg-white" />
              AQA GCSE English
            </div>
            <h1 className="text-2xl font-bold sm:text-3xl">
              AQA Practice Questions
            </h1>
            <p className="mt-2 max-w-xl text-sm text-white/80">
              {aqaQuestions.length} exam-style questions covering Language
              Paper 1, Language Paper 2, and Literature. Each includes mark
              allocations, timing guidance, and a detailed model answer.
            </p>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-3 sm:flex-col sm:items-end">
            <div className="flex items-center gap-2 rounded-lg bg-white/10 px-3 py-2 text-sm backdrop-blur-sm">
              <svg className="h-4 w-4 text-white/70" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
              </svg>
              <span className="font-semibold">{aqaQuestions.length}</span>
              <span className="text-white/70">questions</span>
            </div>
            <div className="flex items-center gap-2 rounded-lg bg-white/10 px-3 py-2 text-sm backdrop-blur-sm">
              <svg className="h-4 w-4 text-white/70" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
              <span className="text-white/70">AI feedback</span>
            </div>
          </div>
        </div>
      </div>

      {/* ── Section pills ─────────────────────────────────────── */}
      <div className="mb-6 grid gap-3 sm:grid-cols-3">
        {SECTIONS.map((section) => {
          const isActive = activeSection === section.key;
          const count = sectionCounts[section.key];
          return (
            <button
              key={section.key}
              onClick={() =>
                setActiveSection(isActive ? null : section.key)
              }
              className={`group relative flex items-start gap-3 rounded-xl border p-4 text-left transition-all ${
                isActive
                  ? "border-[#2E86C1] bg-[#2E86C1]/5 shadow-sm"
                  : "border-gray-200 bg-white hover:border-[#2E86C1]/40 hover:shadow-sm"
              }`}
            >
              <div
                className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg ${
                  isActive
                    ? "bg-[#2E86C1] text-white"
                    : "bg-gray-100 text-gray-500 group-hover:bg-[#2E86C1]/10 group-hover:text-[#2E86C1]"
                }`}
              >
                {section.icon}
              </div>
              <div className="min-w-0 flex-1">
                <p
                  className={`text-sm font-semibold ${
                    isActive ? "text-[#1A5276]" : "text-gray-900"
                  }`}
                >
                  {section.label}
                </p>
                <p className="mt-0.5 text-xs text-gray-500 line-clamp-1">
                  {section.description}
                </p>
                <p className="mt-1 text-xs font-medium text-[#2E86C1]">
                  {count} {count === 1 ? "question" : "questions"}
                </p>
              </div>
              {isActive && (
                <span className="absolute right-3 top-3 flex h-5 w-5 items-center justify-center rounded-full bg-[#2E86C1] text-white">
                  <svg className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
                  </svg>
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* ── Difficulty filter ─────────────────────────────────── */}
      <div className="mb-6 flex flex-wrap items-center gap-2">
        <span className="text-xs font-semibold uppercase tracking-wider text-gray-500">
          Difficulty:
        </span>
        <button
          onClick={() => setSelectedDifficulty(null)}
          className={`rounded-lg border px-3 py-1.5 text-xs font-medium transition-all ${
            selectedDifficulty === null
              ? "border-[#1A5276] bg-[#1A5276] text-white"
              : "border-gray-200 bg-white text-gray-500 hover:border-gray-300"
          }`}
        >
          All
        </button>
        {[1, 2, 3, 4, 5].map((d) => (
          <button
            key={d}
            onClick={() =>
              setSelectedDifficulty(selectedDifficulty === d ? null : d)
            }
            className={`rounded-lg border px-3 py-1.5 text-xs font-medium transition-all ${
              selectedDifficulty === d
                ? DIFFICULTY_COLORS[d] + " border-transparent shadow-sm"
                : "border-gray-200 bg-white text-gray-500 hover:border-gray-300"
            }`}
          >
            {DIFFICULTY_LABELS[d]}
          </button>
        ))}
      </div>

      {/* ── Results count ─────────────────────────────────────── */}
      <div className="mb-4 flex items-center justify-between">
        <p className="text-sm text-gray-500">
          Showing{" "}
          <span className="font-semibold text-gray-900">
            {filteredBySection.length}
          </span>{" "}
          {filteredBySection.length === 1 ? "question" : "questions"}
          {(activeSection || selectedDifficulty) && (
            <button
              onClick={() => {
                setActiveSection(null);
                setSelectedDifficulty(null);
              }}
              className="ml-2 text-xs font-medium text-[#2E86C1] hover:underline"
            >
              Clear filters
            </button>
          )}
        </p>
      </div>

      {/* ── Question grid ─────────────────────────────────────── */}
      {filteredBySection.length > 0 ? (
        activeSection ? (
          /* Flat grid when filtering by section */
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filteredBySection.map((q) => (
              <QuestionCard key={q.id} question={q} />
            ))}
          </div>
        ) : (
          /* Grouped by section when showing all */
          <div className="space-y-8">
            {SECTIONS.map((section) => {
              const sectionQuestions = filteredBySection.filter(
                (q) => getSectionKey(q) === section.key,
              );
              if (sectionQuestions.length === 0) return null;
              return (
                <div key={section.key}>
                  <div className="mb-4 flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#1A5276]/10 text-[#1A5276]">
                      {section.icon}
                    </div>
                    <div>
                      <h2 className="text-base font-bold text-gray-900">
                        {section.label}
                      </h2>
                      <p className="text-xs text-gray-500">
                        {section.description}
                      </p>
                    </div>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {sectionQuestions.map((q) => (
                      <QuestionCard key={q.id} question={q} />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        )
      ) : (
        <div className="flex flex-col items-center rounded-2xl border border-dashed border-gray-300 bg-white py-16 text-center">
          <svg
            className="h-12 w-12 text-gray-300"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1}
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m5.231 13.481L15 17.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v16.5c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Zm3.75 11.625a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"
            />
          </svg>
          <p className="mt-4 text-sm font-medium text-gray-900">
            No questions match your filters
          </p>
          <p className="mt-1 text-sm text-gray-500">
            Try adjusting your filters to see more questions.
          </p>
          <button
            onClick={() => {
              setActiveSection(null);
              setSelectedDifficulty(null);
            }}
            className="mt-4 rounded-lg bg-[#1A5276] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[#1A5276]/90"
          >
            Show all questions
          </button>
        </div>
      )}

      {/* ── Exam overview section ─────────────────────────────── */}
      <div className="mt-12 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
        <h2 className="text-lg font-bold text-gray-900">
          AQA GCSE English Exam Overview
        </h2>
        <p className="mt-2 text-sm text-gray-600">
          Quick reference for mark allocations and timing across both papers.
        </p>

        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          {/* Language Paper 1 */}
          <div className="rounded-xl border border-gray-100 bg-gray-50 p-4">
            <h3 className="text-sm font-bold text-[#1A5276]">
              Language Paper 1
            </h3>
            <p className="mb-3 text-xs text-gray-500">
              Explorations in Creative Reading &amp; Writing (1h 45m)
            </p>
            <div className="space-y-2">
              {[
                { q: "Q1", desc: "List 4 things", marks: "4", time: "5 min" },
                { q: "Q2", desc: "Language analysis", marks: "8", time: "10 min" },
                { q: "Q3", desc: "Structure analysis", marks: "8", time: "10 min" },
                { q: "Q4", desc: "Evaluation", marks: "20", time: "25 min" },
                { q: "Q5", desc: "Creative writing", marks: "40", time: "45 min" },
              ].map((row) => (
                <div
                  key={row.q}
                  className="flex items-center justify-between rounded-lg bg-white px-3 py-2 text-xs"
                >
                  <div className="flex items-center gap-2">
                    <span className="inline-flex h-5 w-7 items-center justify-center rounded bg-[#1A5276]/10 text-[10px] font-bold text-[#1A5276]">
                      {row.q}
                    </span>
                    <span className="text-gray-700">{row.desc}</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-500">
                    <span>{row.marks} marks</span>
                    <span className="text-gray-300">|</span>
                    <span>{row.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Language Paper 2 */}
          <div className="rounded-xl border border-gray-100 bg-gray-50 p-4">
            <h3 className="text-sm font-bold text-[#1A5276]">
              Language Paper 2
            </h3>
            <p className="mb-3 text-xs text-gray-500">
              Writers&apos; Viewpoints &amp; Perspectives (1h 45m)
            </p>
            <div className="space-y-2">
              {[
                { q: "Q1", desc: "True/false statements", marks: "4", time: "5 min" },
                { q: "Q2", desc: "Summary of differences", marks: "8", time: "10 min" },
                { q: "Q3", desc: "Language analysis", marks: "12", time: "15 min" },
                { q: "Q4", desc: "Comparison", marks: "16", time: "20 min" },
                { q: "Q5", desc: "Viewpoint writing", marks: "40", time: "45 min" },
              ].map((row) => (
                <div
                  key={row.q}
                  className="flex items-center justify-between rounded-lg bg-white px-3 py-2 text-xs"
                >
                  <div className="flex items-center gap-2">
                    <span className="inline-flex h-5 w-7 items-center justify-center rounded bg-[#1A5276]/10 text-[10px] font-bold text-[#1A5276]">
                      {row.q}
                    </span>
                    <span className="text-gray-700">{row.desc}</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-500">
                    <span>{row.marks} marks</span>
                    <span className="text-gray-300">|</span>
                    <span>{row.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Literature overview */}
          <div className="rounded-xl border border-gray-100 bg-gray-50 p-4 sm:col-span-2">
            <h3 className="text-sm font-bold text-[#1A5276]">
              Literature Papers
            </h3>
            <p className="mb-3 text-xs text-gray-500">
              Paper 1: Shakespeare &amp; 19th Century Novel | Paper 2: Modern Text &amp; Poetry
            </p>
            <div className="grid gap-2 sm:grid-cols-2">
              {[
                { text: "Macbeth", desc: "Extract + essay", marks: "30+4 SPaG", time: "50 min" },
                { text: "A Christmas Carol", desc: "Extract + essay", marks: "30", time: "45 min" },
                { text: "An Inspector Calls", desc: "Essay question", marks: "30+4 SPaG", time: "45 min" },
                { text: "Power & Conflict Poetry", desc: "Comparison essay", marks: "30", time: "45 min" },
              ].map((row) => (
                <div
                  key={row.text}
                  className="flex items-center justify-between rounded-lg bg-white px-3 py-2 text-xs"
                >
                  <div>
                    <span className="font-medium text-gray-700">
                      {row.text}
                    </span>
                    <span className="ml-1.5 text-gray-400">{row.desc}</span>
                  </div>
                  <div className="flex-shrink-0 text-gray-500">
                    {row.marks}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
