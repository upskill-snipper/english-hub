"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { PracticeFilters } from "./PracticeFilters";
import { QuestionCard } from "./QuestionCard";
import {
  type PracticeQuestion,
  EXAM_BOARDS,
  SUBJECTS,
} from "./types";

import { aqaQuestions } from "./aqa/questions";
import { edexcelQuestions } from "./edexcel/questions";
import { caieQuestions } from "./caie/questions";
import { ocrQuestions } from "./ocr/questions";
import { wjecQuestions } from "./wjec/questions";

/* ─── All questions merged ────────────────────────────────────── */

const ALL_QUESTIONS: PracticeQuestion[] = [
  ...aqaQuestions,
  ...edexcelQuestions,
  ...caieQuestions,
  ...ocrQuestions,
  ...wjecQuestions,
];

/* ─── Quick-link board cards ──────────────────────────────────── */

const BOARD_CARDS = [
  {
    slug: "aqa",
    label: "AQA",
    color: "from-[#1A5276] to-[#2E86C1]",
    count: aqaQuestions.length,
  },
  {
    slug: "edexcel",
    label: "Edexcel",
    color: "from-[#27AE60] to-[#2ECC71]",
    count: edexcelQuestions.length,
  },
  {
    slug: "caie",
    label: "Cambridge (CAIE)",
    color: "from-[#E74C3C] to-[#EC7063]",
    count: caieQuestions.length,
  },
  {
    slug: "ocr",
    label: "OCR",
    color: "from-[#8E44AD] to-[#AF7AC5]",
    count: ocrQuestions.length,
  },
  {
    slug: "wjec",
    label: "WJEC",
    color: "from-[#1A5276] to-[#2E86C1]",
    count: wjecQuestions.length,
  },
] as const;

/* ─── Page ────────────────────────────────────────────────────── */

export default function PracticeQuestionsPage() {
  const [selectedBoard, setSelectedBoard] = useState<string | null>(null);
  const [selectedSubject, setSelectedSubject] = useState<string | null>(null);
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);
  const [selectedDifficulty, setSelectedDifficulty] = useState<number | null>(
    null,
  );

  /* Derive available topics from current question set */
  const topics = useMemo(() => {
    const set = new Set<string>();
    ALL_QUESTIONS.forEach((q) => set.add(q.topic));
    return Array.from(set).sort();
  }, []);

  /* Filtered questions */
  const filtered = useMemo(() => {
    return ALL_QUESTIONS.filter((q) => {
      if (selectedBoard && q.examBoard !== selectedBoard) return false;
      if (selectedSubject && q.subject !== selectedSubject) return false;
      if (selectedTopic && q.topic !== selectedTopic) return false;
      if (selectedDifficulty && q.difficulty !== selectedDifficulty)
        return false;
      return true;
    });
  }, [selectedBoard, selectedSubject, selectedTopic, selectedDifficulty]);

  return (
    <>
      {/* ── Hero header ─────────────────────────────────────────── */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
          Practice Questions
        </h1>
        <p className="mt-2 max-w-2xl text-base text-gray-600">
          Sharpen your exam skills with practice questions tailored to your exam
          board. Write answers, get AI feedback, and compare with model
          responses.
        </p>

        {/* Stats bar */}
        <div className="mt-4 flex flex-wrap items-center gap-4 text-sm">
          <span className="inline-flex items-center gap-1.5 font-medium text-[#1A5276]">
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
            {ALL_QUESTIONS.length}+ practice questions across all exam boards
          </span>
          <span className="text-gray-400">|</span>
          <span className="text-gray-500">
            {EXAM_BOARDS.length} exam boards
          </span>
          <span className="text-gray-400">|</span>
          <span className="text-gray-500">AI-powered feedback</span>
        </div>
      </div>

      {/* ── Quick-link board cards ──────────────────────────────── */}
      <div className="mb-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
        {BOARD_CARDS.map((board) => (
          <Link
            key={board.slug}
            href={`/resources/practice/${board.slug}`}
            className="group relative overflow-hidden rounded-xl p-4 text-white transition-transform hover:-translate-y-0.5 hover:shadow-lg"
          >
            <div
              className={`absolute inset-0 bg-gradient-to-br ${board.color}`}
            />
            <div className="relative">
              <p className="text-sm font-bold">{board.label}</p>
              <p className="mt-0.5 text-xs text-white/80">
                {board.count > 0
                  ? `${board.count} questions`
                  : "Coming soon"}
              </p>
            </div>
            <svg
              className="absolute bottom-2 right-2 h-5 w-5 text-white/40 transition-colors group-hover:text-white/70"
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
          </Link>
        ))}
      </div>

      {/* ── Filters ─────────────────────────────────────────────── */}
      <div className="mb-6 rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
        <PracticeFilters
          selectedBoard={selectedBoard}
          selectedSubject={selectedSubject}
          selectedTopic={selectedTopic}
          selectedDifficulty={selectedDifficulty}
          topics={topics}
          onBoardChange={setSelectedBoard}
          onSubjectChange={setSelectedSubject}
          onTopicChange={setSelectedTopic}
          onDifficultyChange={setSelectedDifficulty}
        />
      </div>

      {/* ── Results count ───────────────────────────────────────── */}
      <div className="mb-4 flex items-center justify-between">
        <p className="text-sm text-gray-500">
          Showing{" "}
          <span className="font-semibold text-gray-900">{filtered.length}</span>{" "}
          {filtered.length === 1 ? "question" : "questions"}
          {(selectedBoard || selectedSubject || selectedTopic || selectedDifficulty) && (
            <button
              onClick={() => {
                setSelectedBoard(null);
                setSelectedSubject(null);
                setSelectedTopic(null);
                setSelectedDifficulty(null);
              }}
              className="ml-2 text-xs font-medium text-[#2E86C1] hover:underline"
            >
              Clear filters
            </button>
          )}
        </p>
      </div>

      {/* ── Question grid ───────────────────────────────────────── */}
      {filtered.length > 0 ? (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((q) => (
            <QuestionCard key={q.id} question={q} />
          ))}
        </div>
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
            Try adjusting your filters or browse all questions.
          </p>
          <button
            onClick={() => {
              setSelectedBoard(null);
              setSelectedSubject(null);
              setSelectedTopic(null);
              setSelectedDifficulty(null);
            }}
            className="mt-4 rounded-lg bg-[#1A5276] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[#1A5276]/90"
          >
            Show all questions
          </button>
        </div>
      )}
    </>
  );
}
