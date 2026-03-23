"use client";

import React, { useState, useMemo, useCallback, useEffect, useRef } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { AITextArea } from "@/components/AITextArea";
import {
  type PracticeQuestion as PracticeQuestionType,
  EXAM_BOARDS,
  DIFFICULTY_LABELS,
  DIFFICULTY_COLORS,
} from "../types";

import { aqaQuestions } from "../aqa/questions";
import { edexcelQuestions } from "../edexcel/questions";
import { caieQuestions } from "../caie/questions";
import { ocrQuestions } from "../ocr/questions";
import { wjecQuestions } from "../wjec/questions";

/* ─── All questions ──────────────────────────────────────────── */

const ALL_QUESTIONS: PracticeQuestionType[] = [
  ...aqaQuestions,
  ...edexcelQuestions,
  ...caieQuestions,
  ...ocrQuestions,
  ...wjecQuestions,
];

/* ─── Timer hook ─────────────────────────────────────────────── */

function useTimer(limitMinutes: number) {
  const [secondsElapsed, setSecondsElapsed] = useState(0);
  const [running, setRunning] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const totalSeconds = limitMinutes * 60;
  const remaining = Math.max(0, totalSeconds - secondsElapsed);
  const isExpired = remaining <= 0;
  const progress = totalSeconds > 0 ? secondsElapsed / totalSeconds : 0;

  const start = useCallback(() => setRunning(true), []);
  const stop = useCallback(() => setRunning(false), []);
  const reset = useCallback(() => {
    setSecondsElapsed(0);
    setRunning(false);
  }, []);

  useEffect(() => {
    if (running) {
      intervalRef.current = setInterval(() => {
        setSecondsElapsed((prev) => prev + 1);
      }, 1000);
    }
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [running]);

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m}:${s.toString().padStart(2, "0")}`;
  };

  return {
    secondsElapsed,
    remaining,
    isExpired,
    running,
    progress: Math.min(progress, 1),
    start,
    stop,
    reset,
    formattedRemaining: formatTime(remaining),
  };
}

/* ─── Page ───────────────────────────────────────────────────── */

export default function PracticeQuestionPage() {
  const params = useParams();
  const id = params.id as string;

  const question = useMemo(
    () => ALL_QUESTIONS.find((q) => q.id === id) ?? null,
    [id],
  );

  /* Navigation: previous / next within the same board */
  const { prev, next } = useMemo(() => {
    if (!question) return { prev: null, next: null };
    const boardQuestions = ALL_QUESTIONS.filter(
      (q) => q.examBoard === question.examBoard,
    );
    const idx = boardQuestions.findIndex((q) => q.id === id);
    return {
      prev: idx > 0 ? boardQuestions[idx - 1] : null,
      next: idx < boardQuestions.length - 1 ? boardQuestions[idx + 1] : null,
    };
  }, [question, id]);

  /* State */
  const [submitted, setSubmitted] = useState(false);
  const [showModelAnswer, setShowModelAnswer] = useState(false);
  const [showTips, setShowTips] = useState(false);
  const [timerEnabled, setTimerEnabled] = useState(false);
  const [timerStarted, setTimerStarted] = useState(false);

  const timer = useTimer(question?.timeMinutes ?? 15);

  /* Reset state when navigating between questions */
  useEffect(() => {
    setSubmitted(false);
    setShowModelAnswer(false);
    setShowTips(false);
    setTimerEnabled(false);
    setTimerStarted(false);
    timer.reset();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  /* Stop timer on submit */
  useEffect(() => {
    if (submitted && timer.running) timer.stop();
  }, [submitted, timer]);

  const handleStartTimer = useCallback(() => {
    setTimerStarted(true);
    timer.start();
  }, [timer]);

  const handleSubmit = useCallback(() => {
    setSubmitted(true);
  }, []);

  /* Timer colour */
  const timerColor =
    timer.progress < 0.5
      ? "text-emerald-600"
      : timer.progress < 0.8
        ? "text-amber-600"
        : "text-rose-600";

  const timerBarColor =
    timer.progress < 0.5
      ? "bg-emerald-500"
      : timer.progress < 0.8
        ? "bg-amber-500"
        : "bg-rose-500";

  /* ── Not found ─────────────────────────────────────────────── */

  if (!question) {
    return (
      <div className="flex flex-col items-center py-20 text-center">
        <svg
          className="h-16 w-16 text-gray-300"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1}
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"
          />
        </svg>
        <h2 className="mt-4 text-lg font-semibold text-gray-900">
          Question not found
        </h2>
        <p className="mt-1 text-sm text-gray-500">
          The question you are looking for does not exist or has been moved.
        </p>
        <Link
          href="/resources/practice"
          className="mt-6 rounded-lg bg-[#1A5276] px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#1A5276]/90"
        >
          Browse all questions
        </Link>
      </div>
    );
  }

  const boardLabel =
    EXAM_BOARDS.find((b) => b.slug === question.examBoard)?.label ??
    question.examBoard.toUpperCase();

  /* ── Render ────────────────────────────────────────────────── */

  return (
    <div className="mx-auto max-w-3xl">
      {/* ── Back link ──────────────────────────────────────────── */}
      <Link
        href="/resources/practice"
        className="mb-4 inline-flex items-center gap-1.5 text-sm font-medium text-gray-500 transition-colors hover:text-[#1A5276]"
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
        All practice questions
      </Link>

      {/* ── Question card ──────────────────────────────────────── */}
      <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
        {/* Accent bar */}
        <div className="h-1.5 bg-gradient-to-r from-[#1A5276] to-[#2E86C1]" />

        {/* Header */}
        <div className="border-b border-gray-100 px-5 py-5 sm:px-6">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div className="flex-1">
              <h1 className="text-lg font-bold text-gray-900 sm:text-xl">
                {question.title}
              </h1>
              {question.paper && (
                <p className="mt-0.5 text-sm text-gray-500">
                  {question.paper}
                  {question.questionNumber && ` - ${question.questionNumber}`}
                </p>
              )}
            </div>

            {/* Badges */}
            <div className="flex flex-shrink-0 flex-wrap items-center gap-2">
              <span className="inline-flex items-center rounded-full bg-[#1A5276]/10 px-3 py-1 text-xs font-semibold text-[#1A5276]">
                {boardLabel}
              </span>
              <span className="inline-flex items-center rounded-full bg-[#2E86C1]/10 px-3 py-1 text-xs font-medium text-[#2E86C1]">
                {question.marks} {question.marks === 1 ? "mark" : "marks"}
              </span>
              <span
                className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium ${DIFFICULTY_COLORS[question.difficulty]}`}
              >
                {DIFFICULTY_LABELS[question.difficulty]}
              </span>
            </div>
          </div>

          {/* Meta row: time + topic */}
          <div className="mt-3 flex flex-wrap items-center gap-4 text-xs text-gray-500">
            <span className="inline-flex items-center gap-1">
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
              {question.timeMinutes} min suggested
            </span>
            <span className="inline-flex items-center gap-1">
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
                  d="M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 0 0 9.568 3Z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 6h.008v.008H6V6Z"
                />
              </svg>
              {question.topic}
            </span>
          </div>
        </div>

        {/* ── Question body ──────────────────────────────────────── */}
        <div className="px-5 py-5 sm:px-6">
          {/* Question text */}
          <div className="rounded-xl bg-gray-50 p-4 sm:p-5">
            <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-gray-400">
              Question
            </p>
            <div className="whitespace-pre-wrap text-sm leading-relaxed text-gray-800">
              {question.question}
            </div>
          </div>

          {/* Source text (if any) */}
          {question.sourceText && (
            <div className="mt-4 rounded-xl border border-gray-200 bg-white p-4 sm:p-5">
              <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-gray-400">
                Source Text
              </p>
              <div className="whitespace-pre-wrap text-sm italic leading-relaxed text-gray-700">
                {question.sourceText}
              </div>
            </div>
          )}

          {/* Tips (expandable) */}
          {question.tips && question.tips.length > 0 && (
            <div className="mt-4">
              <button
                onClick={() => setShowTips(!showTips)}
                className="flex w-full items-center justify-between rounded-lg bg-amber-50 px-4 py-2.5 text-sm font-medium text-amber-800 transition-colors hover:bg-amber-100"
                aria-expanded={showTips}
              >
                <span className="flex items-center gap-2">
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
                      d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"
                    />
                  </svg>
                  Exam tips
                </span>
                <svg
                  className={`h-4 w-4 transform transition-transform ${showTips ? "rotate-180" : ""}`}
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
              {showTips && (
                <ul className="mt-2 space-y-1.5 rounded-lg bg-amber-50/50 px-4 py-3">
                  {question.tips.map((tip, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-sm text-amber-900"
                    >
                      <span className="mt-1.5 block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-amber-400" />
                      {tip}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}

          {/* ── Timer option ──────────────────────────────────────── */}
          {!submitted && (
            <div className="mt-5 flex flex-col gap-3 rounded-xl border border-gray-100 bg-gray-50 p-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-3">
                <label className="flex cursor-pointer items-center gap-2 text-sm font-medium text-gray-700">
                  <input
                    type="checkbox"
                    checked={timerEnabled}
                    onChange={(e) => {
                      setTimerEnabled(e.target.checked);
                      if (!e.target.checked) {
                        setTimerStarted(false);
                        timer.reset();
                      }
                    }}
                    className="h-4 w-4 rounded border-gray-300 text-[#2E86C1] focus:ring-[#2E86C1]"
                  />
                  Timed practice ({question.timeMinutes} min)
                </label>
              </div>

              {timerEnabled && !timerStarted && (
                <button
                  onClick={handleStartTimer}
                  className="inline-flex items-center gap-1.5 rounded-lg bg-[#2E86C1] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[#2E86C1]/90"
                >
                  <svg
                    className="h-4 w-4"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                  </svg>
                  Start Timer
                </button>
              )}

              {timerEnabled && timerStarted && (
                <div className="flex items-center gap-3">
                  <svg
                    className={`h-4 w-4 ${timerColor}`}
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm.75-13a.75.75 0 00-1.5 0v5c0 .414.336.75.75.75h4a.75.75 0 000-1.5h-3.25V5z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span
                    className={`text-sm font-semibold tabular-nums ${timerColor}`}
                  >
                    {timer.formattedRemaining}
                  </span>
                  <div className="hidden w-32 sm:block">
                    <div className="h-1.5 w-full overflow-hidden rounded-full bg-gray-200">
                      <div
                        className={`h-full rounded-full transition-all duration-1000 ${timerBarColor}`}
                        style={{
                          width: `${(1 - timer.progress) * 100}%`,
                        }}
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Timer expired notice */}
          {timerEnabled && timer.isExpired && !submitted && (
            <div className="mt-3 rounded-lg border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-700">
              <p className="font-medium">Time is up!</p>
              <p className="mt-0.5 text-rose-600">
                You can still submit your answer or get AI feedback on what you
                have written.
              </p>
            </div>
          )}

          {/* ── Answer area ───────────────────────────────────────── */}
          <div className="mt-5">
            <AITextArea
              label="Your Answer"
              placeholder="Write your answer here..."
              examBoard={boardLabel}
              subject={
                question.subject === "language"
                  ? "English Language"
                  : "English Literature"
              }
              topic={question.topic}
              minWords={20}
              onSubmit={handleSubmit}
              disabled={timerEnabled && timer.isExpired}
              rows={12}
            />
          </div>

          {/* Mark scheme */}
          {question.markScheme && submitted && (
            <div className="mt-4 rounded-xl border border-gray-200 bg-gray-50 p-4">
              <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-gray-400">
                Mark Scheme
              </p>
              <p className="whitespace-pre-wrap text-sm leading-relaxed text-gray-700">
                {question.markScheme}
              </p>
            </div>
          )}

          {/* ── Model answer (expandable, revealed after submit) ── */}
          {submitted && (
            <div className="mt-5 border-t border-gray-100 pt-5">
              <button
                onClick={() => setShowModelAnswer(!showModelAnswer)}
                className="flex w-full items-center justify-between rounded-xl bg-[#1A5276]/5 px-4 py-3.5 text-sm font-medium text-[#1A5276] transition-colors hover:bg-[#1A5276]/10"
                aria-expanded={showModelAnswer}
              >
                <span className="flex items-center gap-2">
                  <svg
                    className="h-4 w-4"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M10 12.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z" />
                    <path
                      fillRule="evenodd"
                      d="M.664 10.59a1.651 1.651 0 010-1.186A10.004 10.004 0 0110 3c4.257 0 7.893 2.66 9.336 6.41.147.381.146.804 0 1.186A10.004 10.004 0 0110 17c-4.257 0-7.893-2.66-9.336-6.41zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  View Model Answer
                </span>
                <svg
                  className={`h-4 w-4 transform transition-transform ${showModelAnswer ? "rotate-180" : ""}`}
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>

              {showModelAnswer && (
                <div className="mt-3 rounded-xl border border-[#1A5276]/10 bg-[#1A5276]/5 p-4 sm:p-5">
                  <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-[#1A5276]/60">
                    Model Answer
                  </p>
                  <div className="whitespace-pre-wrap text-sm leading-relaxed text-gray-700">
                    {question.modelAnswer}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* ── Navigation: Previous / Next ────────────────────────── */}
      <div className="mt-6 flex items-center justify-between">
        {prev ? (
          <Link
            href={`/resources/practice/${prev.id}`}
            className="inline-flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-sm font-medium text-gray-700 transition-colors hover:border-[#2E86C1] hover:text-[#2E86C1]"
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
            <span className="hidden sm:inline">Previous</span>
          </Link>
        ) : (
          <div />
        )}

        {next ? (
          <Link
            href={`/resources/practice/${next.id}`}
            className="inline-flex items-center gap-2 rounded-lg bg-[#1A5276] px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#1A5276]/90"
          >
            <span className="hidden sm:inline">Next question</span>
            <span className="sm:hidden">Next</span>
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
                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
              />
            </svg>
          </Link>
        ) : (
          <Link
            href="/resources/practice"
            className="inline-flex items-center gap-2 rounded-lg bg-[#1A5276] px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#1A5276]/90"
          >
            Back to all questions
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
                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
              />
            </svg>
          </Link>
        )}
      </div>
    </div>
  );
}
