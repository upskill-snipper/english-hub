"use client";

import React from "react";
import Link from "next/link";
import {
  type PracticeQuestion,
  DIFFICULTY_LABELS,
  DIFFICULTY_COLORS,
  EXAM_BOARDS,
} from "./types";

interface QuestionCardProps {
  question: PracticeQuestion;
}

export function QuestionCard({ question }: QuestionCardProps) {
  const boardLabel =
    EXAM_BOARDS.find((b) => b.slug === question.examBoard)?.label ??
    question.examBoard.toUpperCase();

  return (
    <Link
      href={`/resources/practice/${question.id}`}
      className="group relative flex flex-col overflow-hidden rounded-xl border border-gray-200 bg-white transition-all hover:border-[#2E86C1]/40 hover:shadow-lg hover:shadow-[#2E86C1]/5"
    >
      {/* Top accent bar */}
      <div className="h-1 bg-gradient-to-r from-[#1A5276] to-[#2E86C1]" />

      <div className="flex flex-1 flex-col p-5">
        {/* Badges row */}
        <div className="mb-3 flex flex-wrap items-center gap-2">
          <span className="inline-flex items-center rounded-full bg-[#1A5276]/10 px-2.5 py-0.5 text-xs font-semibold text-[#1A5276]">
            {boardLabel}
          </span>
          {question.paper && (
            <span className="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-600">
              {question.paper}
            </span>
          )}
          <span
            className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium ${DIFFICULTY_COLORS[question.difficulty]}`}
          >
            {DIFFICULTY_LABELS[question.difficulty]}
          </span>
        </div>

        {/* Title */}
        <h3 className="mb-2 text-base font-semibold text-gray-900 group-hover:text-[#1A5276] transition-colors line-clamp-2">
          {question.title}
        </h3>

        {/* Topic */}
        <p className="mb-4 text-sm text-gray-500 line-clamp-1">
          {question.topic}
        </p>

        {/* Footer meta */}
        <div className="mt-auto flex items-center gap-4 border-t border-gray-100 pt-3">
          <div className="flex items-center gap-1.5 text-xs text-gray-500">
            <svg
              className="h-3.5 w-3.5"
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
            <span>{question.marks} marks</span>
          </div>
          <div className="flex items-center gap-1.5 text-xs text-gray-500">
            <svg
              className="h-3.5 w-3.5"
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
            <span>{question.timeMinutes} min</span>
          </div>
          <div className="ml-auto">
            <span className="inline-flex items-center gap-1 text-xs font-medium text-[#2E86C1] opacity-0 transition-opacity group-hover:opacity-100">
              Start
              <svg
                className="h-3.5 w-3.5"
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
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
