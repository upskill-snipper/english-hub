'use client';

import React, { useState, useEffect, useCallback, useRef } from 'react';
import { AITextArea } from './AITextArea';

// ─── Types ──────────────────────────────────────────────────────────────

interface PracticeQuestionProps {
  /** The question prompt text */
  question: string;
  /** Number of marks allocated */
  marks?: number;
  /** Exam board (e.g. AQA, Edexcel) */
  examBoard?: string;
  /** Subject context */
  subject?: string;
  /** Topic for AI feedback context */
  topic?: string;
  /** Minimum word count for the answer */
  minWords?: number;
  /** Maximum word count for the answer */
  maxWords?: number;
  /** Model answer text (revealed after submission) */
  modelAnswer?: string;
  /** Whether to show a timer */
  timed?: boolean;
  /** Time limit in minutes (default 15) */
  timeLimitMinutes?: number;
  /** Callback when answer is submitted */
  onSubmit?: (answer: string) => void;
  /** Additional CSS classes */
  className?: string;
}

// ─── Timer Hook ─────────────────────────────────────────────────────────

function useTimer(enabled: boolean, limitMinutes: number) {
  const [secondsElapsed, setSecondsElapsed] = useState(0);
  const [running, setRunning] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const totalSeconds = limitMinutes * 60;
  const remaining = Math.max(0, totalSeconds - secondsElapsed);
  const isExpired = remaining <= 0;
  const progress = totalSeconds > 0 ? secondsElapsed / totalSeconds : 0;

  const start = useCallback(() => {
    if (!enabled) return;
    setRunning(true);
  }, [enabled]);

  const stop = useCallback(() => {
    setRunning(false);
  }, []);

  const reset = useCallback(() => {
    setSecondsElapsed(0);
    setRunning(false);
  }, []);

  useEffect(() => {
    if (running && enabled) {
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
  }, [running, enabled]);

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m}:${s.toString().padStart(2, '0')}`;
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
    formattedElapsed: formatTime(secondsElapsed),
    formattedRemaining: formatTime(remaining),
  };
}

// ─── Main Component ─────────────────────────────────────────────────────

function PracticeQuestion({
  question,
  marks,
  examBoard,
  subject,
  topic,
  minWords = 30,
  maxWords,
  modelAnswer,
  timed = false,
  timeLimitMinutes = 15,
  onSubmit,
  className = '',
}: PracticeQuestionProps) {
  const [submitted, setSubmitted] = useState(false);
  const [showModelAnswer, setShowModelAnswer] = useState(false);
  const [answer, setAnswer] = useState('');
  const [started, setStarted] = useState(!timed);

  const timer = useTimer(timed, timeLimitMinutes);

  // Auto-stop timer on submit
  useEffect(() => {
    if (submitted && timer.running) {
      timer.stop();
    }
  }, [submitted, timer]);

  // Handle starting timed practice
  const handleStart = useCallback(() => {
    setStarted(true);
    timer.start();
  }, [timer]);

  // Handle answer submission
  const handleSubmit = useCallback(
    (text: string) => {
      setSubmitted(true);
      setAnswer(text);
      onSubmit?.(text);
    },
    [onSubmit]
  );

  // Timer colour: green -> amber -> red
  const timerColor =
    timer.progress < 0.5
      ? 'text-success-600'
      : timer.progress < 0.8
        ? 'text-amber-600'
        : 'text-warn-600';

  return (
    <div
      className={`rounded-2xl border border-border bg-card shadow-sm ${className}`}
    >
      {/* ── Header ─────────────────────────────────────────────────── */}
      <div className="border-b border-border px-5 py-4 sm:px-6">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div className="flex-1">
            <h3 className="text-base font-semibold leading-snug text-foreground sm:text-lg">
              {question}
            </h3>
          </div>

          <div className="flex flex-shrink-0 items-center gap-2">
            {/* Exam board badge */}
            {examBoard && (
              <span className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                {examBoard}
              </span>
            )}

            {/* Mark allocation */}
            {marks !== undefined && (
              <span className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                {marks} {marks === 1 ? 'mark' : 'marks'}
              </span>
            )}
          </div>
        </div>

        {/* Timer */}
        {timed && started && (
          <div className="mt-3 flex items-center gap-3">
            <div className="flex items-center gap-2">
              <svg
                className={`h-4 w-4 ${timerColor}`}
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm.75-13a.75.75 0 00-1.5 0v5c0 .414.336.75.75.75h4a.75.75 0 000-1.5h-3.25V5z"
                  clipRule="evenodd"
                />
              </svg>
              <span className={`text-sm font-medium tabular-nums ${timerColor}`}>
                {timer.formattedRemaining} remaining
              </span>
            </div>

            {/* Progress bar */}
            <div className="flex-1">
              <div className="h-1.5 w-full overflow-hidden rounded-full bg-muted">
                <div
                  className={[
                    'h-full rounded-full transition-all duration-1000',
                    timer.progress < 0.5
                      ? 'bg-success'
                      : timer.progress < 0.8
                        ? 'bg-amber-500'
                        : 'bg-warn',
                  ].join(' ')}
                  style={{ width: `${(1 - timer.progress) * 100}%` }}
                />
              </div>
            </div>
          </div>
        )}
      </div>

      {/* ── Body ───────────────────────────────────────────────────── */}
      <div className="p-5 sm:p-6">
        {/* Start screen for timed practice */}
        {timed && !started && (
          <div className="flex flex-col items-center py-8 text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
              <svg
                className="h-8 w-8"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm.75-13a.75.75 0 00-1.5 0v5c0 .414.336.75.75.75h4a.75.75 0 000-1.5h-3.25V5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <h4 className="mt-4 text-lg font-semibold text-foreground">
              Timed Practice
            </h4>
            <p className="mt-1 text-sm text-muted-foreground">
              You will have {timeLimitMinutes} minutes to complete your answer.
            </p>
            <button
              type="button"
              onClick={handleStart}
              className="mt-6 inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-2.5 text-sm font-medium text-white shadow-sm transition-colors hover:bg-primary/90"
            >
              <svg
                className="h-4 w-4"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
              </svg>
              Start Timer
            </button>
          </div>
        )}

        {/* Answer area */}
        {started && (
          <AITextArea
            placeholder="Write your answer here..."
            examBoard={examBoard}
            subject={subject}
            topic={topic ?? question}
            minWords={minWords}
            maxWords={maxWords}
            onSubmit={handleSubmit}
            disabled={timer.isExpired}
            rows={10}
          />
        )}

        {/* Time expired notice */}
        {timer.isExpired && !submitted && started && (
          <div className="mt-4 rounded-lg border border-warn-200 bg-warn-50 px-4 py-3 text-sm text-warn-600">
            <p className="font-medium">Time is up!</p>
            <p className="mt-0.5 text-warn-600">
              You can still submit your answer or get AI feedback on what you
              have written.
            </p>
          </div>
        )}

        {/* ── Model Answer (revealed after submission) ──────────── */}
        {modelAnswer && submitted && (
          <div className="mt-6 border-t border-border pt-5">
            <button
              type="button"
              onClick={() => setShowModelAnswer(!showModelAnswer)}
              className="flex w-full items-center justify-between rounded-lg bg-primary/10 px-4 py-3 text-sm font-medium text-primary transition-colors hover:bg-primary/20"
              aria-expanded={showModelAnswer}
            >
              <span className="flex items-center gap-2">
                <svg
                  className="h-4 w-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
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
                className={`h-4 w-4 transform transition-transform ${showModelAnswer ? 'rotate-180' : ''}`}
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </button>

            {showModelAnswer && (
              <div className="mt-3 rounded-lg border border-primary/20 bg-primary/5 p-4">
                <p className="mb-2 text-xs font-medium uppercase tracking-wide text-primary">
                  Model Answer
                </p>
                <div className="whitespace-pre-wrap text-sm leading-relaxed text-foreground">
                  {modelAnswer}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export { PracticeQuestion, type PracticeQuestionProps };
