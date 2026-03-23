"use client";

import React from "react";
import {
  EXAM_BOARDS,
  SUBJECTS,
  DIFFICULTY_LABELS,
  DIFFICULTY_COLORS,
} from "./types";

interface PracticeFiltersProps {
  selectedBoard: string | null;
  selectedSubject: string | null;
  selectedTopic: string | null;
  selectedDifficulty: number | null;
  topics: string[];
  onBoardChange: (board: string | null) => void;
  onSubjectChange: (subject: string | null) => void;
  onTopicChange: (topic: string | null) => void;
  onDifficultyChange: (difficulty: number | null) => void;
}

export function PracticeFilters({
  selectedBoard,
  selectedSubject,
  selectedTopic,
  selectedDifficulty,
  topics,
  onBoardChange,
  onSubjectChange,
  onTopicChange,
  onDifficultyChange,
}: PracticeFiltersProps) {
  return (
    <div className="space-y-5">
      {/* Exam Board Pills */}
      <div>
        <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-gray-500">
          Exam Board
        </p>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => onBoardChange(null)}
            className={`rounded-full px-4 py-1.5 text-sm font-medium transition-all ${
              selectedBoard === null
                ? "bg-[#1A5276] text-white shadow-md shadow-[#1A5276]/25"
                : "bg-white text-gray-600 border border-gray-200 hover:border-[#2E86C1] hover:text-[#2E86C1]"
            }`}
          >
            All Boards
          </button>
          {EXAM_BOARDS.map((board) => (
            <button
              key={board.slug}
              onClick={() =>
                onBoardChange(selectedBoard === board.slug ? null : board.slug)
              }
              className={`rounded-full px-4 py-1.5 text-sm font-medium transition-all ${
                selectedBoard === board.slug
                  ? "bg-[#1A5276] text-white shadow-md shadow-[#1A5276]/25"
                  : "bg-white text-gray-600 border border-gray-200 hover:border-[#2E86C1] hover:text-[#2E86C1]"
              }`}
            >
              {board.label}
            </button>
          ))}
        </div>
      </div>

      {/* Subject Pills */}
      <div>
        <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-gray-500">
          Subject
        </p>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => onSubjectChange(null)}
            className={`rounded-full px-4 py-1.5 text-sm font-medium transition-all ${
              selectedSubject === null
                ? "bg-[#2E86C1] text-white shadow-md shadow-[#2E86C1]/25"
                : "bg-white text-gray-600 border border-gray-200 hover:border-[#2E86C1] hover:text-[#2E86C1]"
            }`}
          >
            All Subjects
          </button>
          {SUBJECTS.map((subject) => (
            <button
              key={subject.slug}
              onClick={() =>
                onSubjectChange(
                  selectedSubject === subject.slug ? null : subject.slug
                )
              }
              className={`rounded-full px-4 py-1.5 text-sm font-medium transition-all ${
                selectedSubject === subject.slug
                  ? "bg-[#2E86C1] text-white shadow-md shadow-[#2E86C1]/25"
                  : "bg-white text-gray-600 border border-gray-200 hover:border-[#2E86C1] hover:text-[#2E86C1]"
              }`}
            >
              {subject.label}
            </button>
          ))}
        </div>
      </div>

      {/* Topic Dropdown + Difficulty in one row */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end">
        {/* Topic Dropdown */}
        <div className="flex-1">
          <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-gray-500">
            Topic
          </p>
          <div className="relative">
            <select
              value={selectedTopic ?? ""}
              onChange={(e) =>
                onTopicChange(e.target.value === "" ? null : e.target.value)
              }
              className="w-full appearance-none rounded-lg border border-gray-200 bg-white px-4 py-2.5 pr-10 text-sm text-gray-700 transition-colors focus:border-[#2E86C1] focus:outline-none focus:ring-2 focus:ring-[#2E86C1]/20"
            >
              <option value="">All Topics</option>
              {topics.map((topic) => (
                <option key={topic} value={topic}>
                  {topic}
                </option>
              ))}
            </select>
            <svg
              className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400"
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
          </div>
        </div>

        {/* Difficulty Badges */}
        <div>
          <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-gray-500">
            Difficulty
          </p>
          <div className="flex flex-wrap gap-1.5">
            <button
              onClick={() => onDifficultyChange(null)}
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
                  onDifficultyChange(selectedDifficulty === d ? null : d)
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
        </div>
      </div>
    </div>
  );
}
