"use client";

import React, { useState } from "react";
import Link from "next/link";
import { caieQuestions } from "./questions";
import {
  DIFFICULTY_LABELS,
  DIFFICULTY_COLORS,
} from "../types";

/* ── Category definitions matching the user requirements ── */
const CATEGORIES = [
  { key: "all", label: "All Questions" },
  { key: "comprehension", label: "Paper 1 Comprehension" },
  { key: "summary", label: "Paper 1 Summary" },
  { key: "directed", label: "Paper 2 Directed Writing" },
  { key: "composition", label: "Paper 2 Composition" },
] as const;

type CategoryKey = (typeof CATEGORIES)[number]["key"];

function categorise(topic: string, paper?: string): CategoryKey {
  const t = topic.toLowerCase();
  if (t.includes("comprehension") || t.includes("writer's effect"))
    return "comprehension";
  if (t.includes("summary")) return "summary";
  if (
    t.includes("directed") ||
    t.includes("argumentative") ||
    (paper === "Paper 2" &&
      !t.includes("descriptive") &&
      !t.includes("narrative"))
  )
    return "directed";
  if (t.includes("descriptive") || t.includes("narrative"))
    return "composition";
  return "comprehension"; // fallback
}

/* ── Expandable section component ── */
function Expandable({
  title,
  children,
  defaultOpen = false,
}: {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-4 py-3 bg-gray-50 hover:bg-gray-100 transition-colors text-left"
      >
        <span className="text-sm font-semibold text-[#1A5276]">{title}</span>
        <svg
          className={`h-4 w-4 text-gray-500 transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m19.5 8.25-7.5 7.5-7.5-7.5"
          />
        </svg>
      </button>
      {open && <div className="px-4 py-4 bg-white">{children}</div>}
    </div>
  );
}

/* ── Main page ── */
export default function CaiePracticePage() {
  const [activeCategory, setActiveCategory] = useState<CategoryKey>("all");
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const filtered =
    activeCategory === "all"
      ? caieQuestions.filter((q) => q.subject === "language")
      : caieQuestions.filter(
          (q) =>
            q.subject === "language" &&
            categorise(q.topic, q.paper) === activeCategory
        );

  const toggleExpand = (id: string) =>
    setExpandedId((prev) => (prev === id ? null : id));

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#1A5276] via-[#1A5276] to-[#2E86C1] text-white">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 rounded-full bg-white/20 blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-[#2E86C1]/30 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <Link
            href="/resources"
            className="inline-flex items-center gap-1.5 text-sm text-white/70 hover:text-white transition-colors mb-6"
          >
            <svg
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
              />
            </svg>
            Back to Resources
          </Link>

          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <span className="inline-block rounded-full bg-white/15 px-3 py-1 text-xs font-semibold tracking-wider uppercase mb-4">
                Cambridge IGCSE
              </span>
              <h1 className="text-3xl font-bold sm:text-4xl lg:text-5xl tracking-tight">
                Practice Questions
              </h1>
              <p className="mt-3 max-w-2xl text-lg text-white/80">
                Exam-style questions for Cambridge IGCSE English Language (0500)
                with mark allocations, timing guides, band descriptor
                references, and model answers.
              </p>
            </div>
            <div className="flex gap-3 text-sm">
              <div className="flex items-center gap-2 rounded-lg bg-white/10 px-4 py-2">
                <svg
                  className="h-5 w-5 text-white/70"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
                  />
                </svg>
                <span className="font-medium">{filtered.length} Questions</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Content ── */}
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        {/* Category filter pills */}
        <div className="mb-8">
          <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-gray-500">
            Filter by Paper &amp; Task
          </p>
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                  activeCategory === cat.key
                    ? "bg-[#1A5276] text-white shadow-md shadow-[#1A5276]/25"
                    : "bg-white text-gray-600 border border-gray-200 hover:border-[#2E86C1] hover:text-[#2E86C1]"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Questions list */}
        <div className="space-y-6">
          {filtered.map((q, idx) => {
            const isExpanded = expandedId === q.id;
            const cat = categorise(q.topic, q.paper);
            return (
              <div
                key={q.id}
                className="rounded-xl border border-gray-200 bg-white shadow-sm overflow-hidden transition-shadow hover:shadow-md"
              >
                {/* Top accent */}
                <div className="h-1 bg-gradient-to-r from-[#1A5276] to-[#2E86C1]" />

                <div className="p-5 sm:p-6">
                  {/* Header row */}
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                    <div className="flex-1 min-w-0">
                      {/* Badges */}
                      <div className="mb-3 flex flex-wrap items-center gap-2">
                        <span className="inline-flex items-center rounded-full bg-[#1A5276]/10 px-2.5 py-0.5 text-xs font-semibold text-[#1A5276]">
                          {q.paper ?? "General"}
                        </span>
                        {q.questionNumber && (
                          <span className="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-600">
                            {q.questionNumber}
                          </span>
                        )}
                        <span className="inline-flex items-center rounded-full bg-[#2E86C1]/10 px-2.5 py-0.5 text-xs font-medium text-[#2E86C1] capitalize">
                          {cat === "comprehension"
                            ? "Comprehension"
                            : cat === "summary"
                            ? "Summary Writing"
                            : cat === "directed"
                            ? "Directed Writing"
                            : "Composition"}
                        </span>
                        <span
                          className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium ${
                            DIFFICULTY_COLORS[q.difficulty]
                          }`}
                        >
                          {DIFFICULTY_LABELS[q.difficulty]}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">
                        <span className="text-[#2E86C1] mr-2 font-bold">
                          Q{idx + 1}.
                        </span>
                        {q.title}
                      </h3>
                      <p className="text-sm text-gray-500">{q.topic}</p>
                    </div>

                    {/* Meta stats */}
                    <div className="flex flex-row sm:flex-col items-start gap-3 sm:gap-2 sm:items-end shrink-0">
                      <div className="flex items-center gap-1.5 text-sm font-medium text-[#1A5276]">
                        <svg
                          className="h-4 w-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                          />
                        </svg>
                        {q.marks} marks
                      </div>
                      <div className="flex items-center gap-1.5 text-sm text-gray-500">
                        <svg
                          className="h-4 w-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                          />
                        </svg>
                        {q.timeMinutes} min
                      </div>
                    </div>
                  </div>

                  {/* Question text */}
                  <div className="mt-4 rounded-lg bg-slate-50 border border-slate-200 p-4 sm:p-5">
                    <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">
                      Question
                    </p>
                    <div className="text-sm text-gray-700 leading-relaxed whitespace-pre-line">
                      {q.question}
                    </div>
                  </div>

                  {/* Expand / collapse button */}
                  <button
                    onClick={() => toggleExpand(q.id)}
                    className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#2E86C1] hover:text-[#1A5276] transition-colors"
                  >
                    {isExpanded
                      ? "Hide Model Answer & Mark Scheme"
                      : "Show Model Answer & Mark Scheme"}
                    <svg
                      className={`h-4 w-4 transition-transform duration-200 ${
                        isExpanded ? "rotate-180" : ""
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m19.5 8.25-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                  </button>

                  {/* Expandable content */}
                  {isExpanded && (
                    <div className="mt-4 space-y-4">
                      {/* Model Answer */}
                      <Expandable title="Model Answer" defaultOpen={true}>
                        <div className="text-sm text-gray-700 leading-relaxed whitespace-pre-line">
                          {q.modelAnswer}
                        </div>
                      </Expandable>

                      {/* Mark Scheme & Band Descriptors */}
                      {q.markScheme && (
                        <Expandable title="Mark Scheme & Band Descriptors">
                          <div className="text-sm text-gray-700 leading-relaxed whitespace-pre-line">
                            {q.markScheme}
                          </div>
                        </Expandable>
                      )}

                      {/* Tips */}
                      {q.tips && q.tips.length > 0 && (
                        <Expandable title="Examiner Tips">
                          <ul className="space-y-2">
                            {q.tips.map((tip, i) => (
                              <li
                                key={i}
                                className="flex items-start gap-2 text-sm text-gray-700"
                              >
                                <svg
                                  className="mt-0.5 h-4 w-4 shrink-0 text-[#2E86C1]"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  strokeWidth={2}
                                  stroke="currentColor"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                                  />
                                </svg>
                                {tip}
                              </li>
                            ))}
                          </ul>
                        </Expandable>
                      )}

                      {/* Timing guidance */}
                      <div className="rounded-lg bg-amber-50 border border-amber-200 p-4">
                        <div className="flex items-start gap-3">
                          <svg
                            className="mt-0.5 h-5 w-5 shrink-0 text-amber-600"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                            />
                          </svg>
                          <div>
                            <p className="text-sm font-semibold text-amber-800">
                              Timing Guide
                            </p>
                            <p className="mt-1 text-sm text-amber-700">
                              Allow <strong>{q.timeMinutes} minutes</strong> for
                              this question ({q.marks} marks). In the exam, aim
                              for roughly{" "}
                              {Math.round(q.timeMinutes / q.marks) > 0
                                ? `${(q.timeMinutes / q.marks).toFixed(1)} minutes per mark`
                                : "1 minute per mark"}
                              . Include 3-5 minutes for planning and 2-3 minutes
                              for checking.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Empty state */}
        {filtered.length === 0 && (
          <div className="rounded-xl border-2 border-dashed border-gray-200 p-12 text-center">
            <svg
              className="mx-auto h-12 w-12 text-gray-300"
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
            <p className="mt-4 text-sm font-medium text-gray-500">
              No questions found for this filter.
            </p>
          </div>
        )}

        {/* Exam info panel */}
        <div className="mt-12 rounded-xl border border-[#2E86C1]/20 bg-gradient-to-br from-[#1A5276]/5 to-[#2E86C1]/5 p-6 sm:p-8">
          <h2 className="text-xl font-bold text-[#1A5276] mb-4">
            Cambridge IGCSE English Language (0500) at a Glance
          </h2>
          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <h3 className="font-semibold text-[#1A5276] mb-2">
                Paper 1: Reading (2 hours)
              </h3>
              <ul className="space-y-1.5 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#2E86C1] shrink-0" />
                  <span>
                    <strong>Q1 (a-e):</strong> Comprehension &mdash; 15 marks
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#2E86C1] shrink-0" />
                  <span>
                    <strong>Q1 (f):</strong> Summary &mdash; 15 marks
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#2E86C1] shrink-0" />
                  <span>
                    <strong>Q2:</strong> Writer&apos;s Effect &mdash; 25 marks
                  </span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-[#1A5276] mb-2">
                Paper 2: Writing (2 hours)
              </h3>
              <ul className="space-y-1.5 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#2E86C1] shrink-0" />
                  <span>
                    <strong>Q1:</strong> Directed Writing (letter, report,
                    article, speech) &mdash; 25 marks
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#2E86C1] shrink-0" />
                  <span>
                    <strong>Q2:</strong> Composition &mdash; choice of
                    descriptive or narrative &mdash; 25 marks
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-6 pt-4 border-t border-[#2E86C1]/10">
            <p className="text-xs text-gray-500">
              Band descriptors range from Band 1 (1-5 marks) to Band 5 (21-25
              marks). Each question&apos;s model answer above targets Band 5 performance.
              Refer to the Cambridge 0500 syllabus for full band descriptor
              criteria.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
