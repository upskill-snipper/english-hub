"use client";

import React, { useState } from "react";
import Link from "next/link";
import { edexcelQuestions } from "./questions";
import {
  DIFFICULTY_LABELS,
  DIFFICULTY_COLORS,
} from "../types";

type PaperFilter =
  | "all"
  | "p1-reading"
  | "p1-writing"
  | "p2-reading"
  | "p2-writing"
  | "literature";

const FILTER_TABS: { value: PaperFilter; label: string; count: number }[] = [
  { value: "all", label: "All Questions", count: edexcelQuestions.length },
  {
    value: "p1-reading",
    label: "Paper 1 Reading",
    count: edexcelQuestions.filter(
      (q) =>
        q.paper === "Paper 1" &&
        q.topic !== "Imaginative Writing"
    ).length,
  },
  {
    value: "p1-writing",
    label: "Paper 1 Writing",
    count: edexcelQuestions.filter(
      (q) => q.paper === "Paper 1" && q.topic === "Imaginative Writing"
    ).length,
  },
  {
    value: "p2-reading",
    label: "Paper 2 Reading",
    count: edexcelQuestions.filter(
      (q) =>
        q.paper === "Paper 2" &&
        q.topic !== "Transactional Writing"
    ).length,
  },
  {
    value: "p2-writing",
    label: "Paper 2 Writing",
    count: edexcelQuestions.filter(
      (q) => q.paper === "Paper 2" && q.topic === "Transactional Writing"
    ).length,
  },
  {
    value: "literature",
    label: "Literature",
    count: edexcelQuestions.filter((q) => q.subject === "literature").length,
  },
];

function filterQuestions(filter: PaperFilter) {
  switch (filter) {
    case "p1-reading":
      return edexcelQuestions.filter(
        (q) =>
          q.paper === "Paper 1" &&
          q.topic !== "Imaginative Writing"
      );
    case "p1-writing":
      return edexcelQuestions.filter(
        (q) => q.paper === "Paper 1" && q.topic === "Imaginative Writing"
      );
    case "p2-reading":
      return edexcelQuestions.filter(
        (q) =>
          q.paper === "Paper 2" &&
          q.topic !== "Transactional Writing"
      );
    case "p2-writing":
      return edexcelQuestions.filter(
        (q) => q.paper === "Paper 2" && q.topic === "Transactional Writing"
      );
    case "literature":
      return edexcelQuestions.filter((q) => q.subject === "literature");
    default:
      return edexcelQuestions;
  }
}

function DifficultyBadge({ difficulty }: { difficulty: number }) {
  return (
    <span
      className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium ${DIFFICULTY_COLORS[difficulty]}`}
    >
      {DIFFICULTY_LABELS[difficulty]}
    </span>
  );
}

function QuestionItem({
  question,
}: {
  question: (typeof edexcelQuestions)[number];
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="rounded-xl border border-gray-200 bg-white transition-all hover:border-[#2E86C1]/30 hover:shadow-md hover:shadow-[#2E86C1]/5">
      {/* Top accent bar */}
      <div className="h-1 rounded-t-xl bg-gradient-to-r from-[#1A5276] to-[#2E86C1]" />

      <div className="p-5 sm:p-6">
        {/* Header row */}
        <div className="mb-3 flex flex-wrap items-center gap-2">
          <span className="inline-flex items-center rounded-full bg-[#1A5276]/10 px-2.5 py-0.5 text-xs font-semibold text-[#1A5276]">
            Edexcel
          </span>
          {question.paper && (
            <span className="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-600">
              {question.paper}
            </span>
          )}
          {question.questionNumber && (
            <span className="inline-flex items-center rounded-full bg-[#2E86C1]/10 px-2.5 py-0.5 text-xs font-medium text-[#2E86C1]">
              {question.questionNumber}
            </span>
          )}
          <DifficultyBadge difficulty={question.difficulty} />
        </div>

        {/* Title */}
        <h3 className="mb-1 text-lg font-semibold text-gray-900">
          {question.title}
        </h3>
        <p className="mb-4 text-sm text-gray-500">{question.topic}</p>

        {/* Meta row */}
        <div className="mb-5 flex flex-wrap items-center gap-4 rounded-lg bg-gray-50 px-4 py-3">
          <div className="flex items-center gap-1.5 text-sm text-gray-600">
            <svg
              className="h-4 w-4 text-[#2E86C1]"
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
            <span className="font-medium">{question.marks}</span> marks
          </div>
          <div className="flex items-center gap-1.5 text-sm text-gray-600">
            <svg
              className="h-4 w-4 text-[#2E86C1]"
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
            <span className="font-medium">{question.timeMinutes}</span> minutes
          </div>
          {question.subject === "language" && (
            <span className="rounded-full bg-blue-50 px-2.5 py-0.5 text-xs font-medium text-blue-700">
              English Language
            </span>
          )}
          {question.subject === "literature" && (
            <span className="rounded-full bg-purple-50 px-2.5 py-0.5 text-xs font-medium text-purple-700">
              English Literature
            </span>
          )}
        </div>

        {/* Question text */}
        <div className="mb-5 rounded-lg border border-[#1A5276]/10 bg-[#1A5276]/[0.02] p-4 sm:p-5">
          <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-[#1A5276]">
            Question
          </p>
          <div className="whitespace-pre-line text-sm leading-relaxed text-gray-800 sm:text-base">
            {question.question}
          </div>
        </div>

        {/* Tips */}
        {question.tips && question.tips.length > 0 && (
          <div className="mb-5 rounded-lg border border-amber-100 bg-amber-50/50 p-4">
            <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-amber-700">
              Exam Tips
            </p>
            <ul className="space-y-1.5">
              {question.tips.map((tip, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2 text-sm text-amber-900"
                >
                  <svg
                    className="mt-0.5 h-4 w-4 flex-shrink-0 text-amber-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"
                    />
                  </svg>
                  {tip}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Mark scheme summary */}
        {question.markScheme && (
          <div className="mb-4 rounded-lg border border-gray-100 bg-gray-50 p-4">
            <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-gray-500">
              Mark Scheme
            </p>
            <p className="text-sm leading-relaxed text-gray-700">
              {question.markScheme}
            </p>
          </div>
        )}

        {/* Expandable model answer */}
        <div className="rounded-lg border border-[#2E86C1]/20 bg-white">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex w-full items-center justify-between px-4 py-3 text-left transition-colors hover:bg-[#2E86C1]/5"
          >
            <span className="flex items-center gap-2 text-sm font-semibold text-[#1A5276]">
              <svg
                className="h-5 w-5 text-[#2E86C1]"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
                />
              </svg>
              Model Answer
            </span>
            <svg
              className={`h-5 w-5 text-[#2E86C1] transition-transform ${
                isOpen ? "rotate-180" : ""
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
          {isOpen && (
            <div className="border-t border-[#2E86C1]/10 px-4 py-4 sm:px-5">
              <div className="whitespace-pre-line text-sm leading-relaxed text-gray-800">
                {question.modelAnswer}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function EdexcelPracticePage() {
  const [activeFilter, setActiveFilter] = useState<PaperFilter>("all");
  const filtered = filterQuestions(activeFilter);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#1A5276] via-[#1A5276] to-[#2E86C1] py-16 sm:py-20">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djItSDJ2LTJoMzR6bTAtMzBWMkgydjJoMzR6TTIgMmgzNHYySDJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-50" />
        <div className="relative mx-auto max-w-5xl px-4 sm:px-6">
          <Link
            href="/resources"
            className="mb-6 inline-flex items-center gap-1.5 text-sm font-medium text-white/70 transition-colors hover:text-white"
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
          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Edexcel Practice Questions
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-white/80">
            Exam-style questions with mark allocations, timing guides, and
            detailed model answers. Covering Paper 1, Paper 2, and Literature.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <div className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm text-white/90 backdrop-blur-sm">
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
                  d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
                />
              </svg>
              {edexcelQuestions.length} Questions
            </div>
            <div className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm text-white/90 backdrop-blur-sm">
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
                  d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
                />
              </svg>
              Model Answers Included
            </div>
          </div>
        </div>
      </section>

      {/* Filter tabs */}
      <section className="sticky top-0 z-10 border-b border-gray-200 bg-white/95 backdrop-blur-sm">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="-mb-px flex gap-1 overflow-x-auto py-1 scrollbar-hide">
            {FILTER_TABS.map((tab) => (
              <button
                key={tab.value}
                onClick={() => setActiveFilter(tab.value)}
                className={`flex-shrink-0 whitespace-nowrap rounded-t-lg px-4 py-3 text-sm font-medium transition-colors ${
                  activeFilter === tab.value
                    ? "border-b-2 border-[#2E86C1] text-[#1A5276]"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                {tab.label}
                <span
                  className={`ml-2 inline-flex h-5 min-w-[20px] items-center justify-center rounded-full px-1.5 text-xs font-semibold ${
                    activeFilter === tab.value
                      ? "bg-[#2E86C1]/10 text-[#2E86C1]"
                      : "bg-gray-100 text-gray-500"
                  }`}
                >
                  {tab.count}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Questions list */}
      <section className="mx-auto max-w-5xl px-4 py-8 sm:px-6 sm:py-12">
        <div className="space-y-6">
          {filtered.map((question) => (
            <QuestionItem key={question.id} question={question} />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="flex flex-col items-center justify-center py-16 text-center">
            <svg
              className="mb-4 h-12 w-12 text-gray-300"
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
            <p className="text-lg font-medium text-gray-500">
              No questions in this category yet
            </p>
            <p className="mt-1 text-sm text-gray-400">
              Check back soon for more practice material
            </p>
          </div>
        )}
      </section>

      {/* Exam overview section */}
      <section className="border-t border-gray-100 bg-gray-50 py-12 sm:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <h2 className="mb-8 text-2xl font-bold text-gray-900">
            Edexcel GCSE English Exam Overview
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* Paper 1 */}
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-[#1A5276]/10">
                <svg
                  className="h-5 w-5 text-[#1A5276]"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"
                  />
                </svg>
              </div>
              <h3 className="mb-2 text-lg font-semibold text-gray-900">
                Paper 1: Fiction &amp; Imaginative Writing
              </h3>
              <p className="mb-3 text-sm text-gray-600">
                1 hour 45 minutes &bull; 64 marks &bull; 40% of GCSE
              </p>
              <ul className="space-y-1.5 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#2E86C1]" />
                  Section A: Reading a fiction extract (Q1-Q4)
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#2E86C1]" />
                  Section B: Imaginative writing (Q5)
                </li>
              </ul>
            </div>

            {/* Paper 2 */}
            <div className="rounded-xl border border-gray-200 bg-white p-6">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-[#2E86C1]/10">
                <svg
                  className="h-5 w-5 text-[#2E86C1]"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5"
                  />
                </svg>
              </div>
              <h3 className="mb-2 text-lg font-semibold text-gray-900">
                Paper 2: Non-Fiction &amp; Transactional Writing
              </h3>
              <p className="mb-3 text-sm text-gray-600">
                2 hours 5 minutes &bull; 96 marks &bull; 60% of GCSE
              </p>
              <ul className="space-y-1.5 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#2E86C1]" />
                  Section A: Reading two non-fiction texts (Q1-Q4)
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#2E86C1]" />
                  Section B: Transactional writing (Q5)
                </li>
              </ul>
            </div>

            {/* Literature */}
            <div className="rounded-xl border border-gray-200 bg-white p-6 sm:col-span-2 lg:col-span-1">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-purple-100">
                <svg
                  className="h-5 w-5 text-purple-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
                  />
                </svg>
              </div>
              <h3 className="mb-2 text-lg font-semibold text-gray-900">
                English Literature
              </h3>
              <p className="mb-3 text-sm text-gray-600">
                Multiple papers &bull; Shakespeare, 19th-century novel, modern texts, poetry
              </p>
              <ul className="space-y-1.5 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-purple-400" />
                  Essay-based questions with AO1-AO4 assessed
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-purple-400" />
                  Context (AO3) worth up to 8 marks per question
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
