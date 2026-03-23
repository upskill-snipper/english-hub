'use client';

import React, { useState, useCallback, useRef, useEffect } from 'react';

// ─── Types ──────────────────────────────────────────────────────────────

interface AIFeedbackResult {
  feedback: string;
  disclaimer: string;
  contentWarnings: string[];
  flagged: boolean;
  escalationRequired: boolean;
  humanReviewUrl: string | null;
  warnings: { category: string; message: string }[];
}

interface ParsedFeedback {
  score: number | null;
  strengths: string[];
  improvements: string[];
  detailed: string;
}

interface AITextAreaProps {
  /** Placeholder text for the textarea */
  placeholder?: string;
  /** Label shown above the textarea */
  label?: string;
  /** Exam board to tailor feedback (overrides context) */
  examBoard?: string;
  /** Subject area */
  subject?: string;
  /** Topic or question context for the AI */
  topic?: string;
  /** Minimum word count before AI feedback is available */
  minWords?: number;
  /** Maximum word count (soft limit shown in counter) */
  maxWords?: number;
  /** Callback when user submits their answer */
  onSubmit?: (text: string) => void;
  /** Callback when feedback is received */
  onFeedback?: (feedback: AIFeedbackResult) => void;
  /** Additional CSS classes */
  className?: string;
  /** Initial value */
  value?: string;
  /** Controlled onChange */
  onChange?: (value: string) => void;
  /** Whether to show the textarea as disabled */
  disabled?: boolean;
  /** Number of visible rows */
  rows?: number;
}

// ─── Helpers ────────────────────────────────────────────────────────────

function countWords(text: string): number {
  return text.trim() === '' ? 0 : text.trim().split(/\s+/).length;
}

function parseFeedback(raw: string): ParsedFeedback {
  const lines = raw.split('\n').filter((l) => l.trim());

  let score: number | null = null;
  const strengths: string[] = [];
  const improvements: string[] = [];

  // Attempt to find a score (e.g. "Score: 7/10" or "Band 4")
  const scoreMatch = raw.match(
    /(?:score|band|mark)[:\s]*(\d+)\s*(?:\/\s*\d+)?/i
  );
  if (scoreMatch) {
    score = parseInt(scoreMatch[1], 10);
  }

  let currentSection: 'none' | 'strengths' | 'improvements' = 'none';

  for (const line of lines) {
    const lower = line.toLowerCase();

    if (
      lower.includes('strength') ||
      lower.includes('well done') ||
      lower.includes('positive')
    ) {
      currentSection = 'strengths';
      continue;
    }
    if (
      lower.includes('improv') ||
      lower.includes('develop') ||
      lower.includes('consider') ||
      lower.includes('target')
    ) {
      currentSection = 'improvements';
      continue;
    }

    const bulletMatch = line.match(/^[\s]*[-*\u2022]\s*(.+)/);
    if (bulletMatch) {
      const text = bulletMatch[1].trim();
      if (currentSection === 'strengths' && strengths.length < 3) {
        strengths.push(text);
      } else if (currentSection === 'improvements' && improvements.length < 3) {
        improvements.push(text);
      }
    }
  }

  if (strengths.length === 0) {
    strengths.push('Your response addresses the question prompt');
  }
  if (improvements.length === 0) {
    improvements.push(
      'Review the detailed feedback below for specific suggestions'
    );
  }

  return { score, strengths, improvements, detailed: raw };
}

// ─── Optional ExamBoard context hook ────────────────────────────────────

function useOptionalExamBoard(): {
  selectedBoard: string | null;
  subject: string;
} {
  const [board, setBoard] = useState<string | null>(null);
  const [subject, setSubject] = useState<string>('LANGUAGE');

  useEffect(() => {
    try {
      const storedBoard = localStorage.getItem('teh_selected_exam_board');
      const storedSubject = localStorage.getItem('teh_selected_subject');
      if (storedBoard) setBoard(storedBoard);
      if (storedSubject) setSubject(storedSubject);
    } catch {
      // localStorage unavailable
    }
  }, []);

  return { selectedBoard: board, subject };
}

// ─── Skeleton Loader ────────────────────────────────────────────────────

function FeedbackSkeleton() {
  return (
    <div className="animate-pulse space-y-3 p-4" aria-label="Loading feedback">
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 rounded-full bg-gray-200" />
        <div className="h-4 w-32 rounded bg-gray-200" />
      </div>
      <div className="space-y-2">
        <div className="h-3 w-24 rounded bg-gray-200" />
        <div className="h-3 w-full rounded bg-gray-100" />
        <div className="h-3 w-5/6 rounded bg-gray-100" />
      </div>
      <div className="space-y-2">
        <div className="h-3 w-28 rounded bg-gray-200" />
        <div className="h-3 w-full rounded bg-gray-100" />
        <div className="h-3 w-4/6 rounded bg-gray-100" />
      </div>
    </div>
  );
}

// ─── Score Badge ────────────────────────────────────────────────────────

function ScoreBadge({ score }: { score: number | null }) {
  if (score === null) return null;

  const color =
    score >= 7
      ? 'bg-success-50 text-success-600 border-success-300'
      : score >= 4
        ? 'bg-accent-50 text-accent-600 border-accent-200'
        : 'bg-warn-50 text-warn-600 border-warn-200';

  return (
    <div
      className={`inline-flex h-11 w-11 items-center justify-center rounded-full border-2 text-lg font-bold ${color}`}
      aria-label={`Score: ${score}`}
    >
      {score}
    </div>
  );
}

// ─── Main Component ─────────────────────────────────────────────────────

function AITextArea({
  placeholder = 'Write your answer here...',
  label,
  examBoard: examBoardProp,
  subject: subjectProp,
  topic = 'General English',
  minWords = 30,
  maxWords,
  onSubmit,
  onFeedback,
  className = '',
  value: controlledValue,
  onChange: controlledOnChange,
  disabled = false,
  rows = 8,
}: AITextAreaProps) {
  // ── State ──────────────────────────────────────────────────────────
  const [internalValue, setInternalValue] = useState('');
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState<ParsedFeedback | null>(null);
  const [rawFeedback, setRawFeedback] = useState<AIFeedbackResult | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [showDetailed, setShowDetailed] = useState(false);
  const [feedbackVisible, setFeedbackVisible] = useState(false);

  const feedbackRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const text = controlledValue ?? internalValue;
  const setText = controlledOnChange ?? setInternalValue;
  const wordCount = countWords(text);
  const canGetFeedback = wordCount >= minWords && !loading;
  const isOverLimit = maxWords ? wordCount > maxWords : false;

  // ── Exam board from context or props ───────────────────────────────
  const { selectedBoard: contextBoard, subject: contextSubject } =
    useOptionalExamBoard();
  const examBoard = examBoardProp ?? contextBoard ?? 'AQA';
  const subject = subjectProp ?? contextSubject ?? 'LANGUAGE';

  // Keep subject in scope (used in exam board badge text)
  void subject;

  // ── Slide-in animation ─────────────────────────────────────────────
  useEffect(() => {
    if (feedback) {
      const timer = setTimeout(() => setFeedbackVisible(true), 50);
      return () => clearTimeout(timer);
    }
    setFeedbackVisible(false);
  }, [feedback]);

  // ── Auto-resize textarea ───────────────────────────────────────────
  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setText(e.target.value);

      // Auto-resize
      if (textareaRef.current) {
        textareaRef.current.style.height = 'auto';
        const lineHeight = 24;
        const minHeight = rows * lineHeight;
        const maxHeight = 20 * lineHeight;
        const scrollHeight = textareaRef.current.scrollHeight;
        textareaRef.current.style.height = `${Math.min(Math.max(scrollHeight, minHeight), maxHeight)}px`;
      }
    },
    [setText, rows]
  );

  // ── Fetch feedback ─────────────────────────────────────────────────
  const handleGetFeedback = useCallback(async () => {
    if (!canGetFeedback) return;

    setLoading(true);
    setError(null);
    setFeedback(null);
    setRawFeedback(null);

    try {
      const res = await fetch('/api/essay/feedback', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          essayText: text,
          examBoard,
          topic,
          userCountry: 'UK',
        }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(
          (data as { error?: string }).error ?? `Request failed (${res.status})`
        );
      }

      const data: AIFeedbackResult = await res.json();
      const parsed = parseFeedback(data.feedback);

      setRawFeedback(data);
      setFeedback(parsed);
      onFeedback?.(data);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : 'Failed to get feedback. Please try again.'
      );
    } finally {
      setLoading(false);
    }
  }, [canGetFeedback, text, examBoard, topic, onFeedback]);

  // ── Submit handler ─────────────────────────────────────────────────
  const handleSubmit = useCallback(() => {
    onSubmit?.(text);
  }, [onSubmit, text]);

  // ── Word count styling ─────────────────────────────────────────────
  const wordCountColor = isOverLimit
    ? 'text-warn-500'
    : wordCount >= minWords
      ? 'text-success-600'
      : 'text-gray-400';

  // ── Render ─────────────────────────────────────────────────────────
  return (
    <div className={`w-full ${className}`}>
      {/* Label */}
      {label && (
        <label className="mb-1.5 block text-sm font-medium text-gray-700">
          {label}
        </label>
      )}

      {/* Textarea wrapper */}
      <div className="relative rounded-xl border-2 border-gray-200 bg-white transition-colors focus-within:border-accent focus-within:ring-4 focus-within:ring-accent/10">
        <textarea
          ref={textareaRef}
          value={text}
          onChange={handleChange}
          placeholder={placeholder}
          disabled={disabled || loading}
          rows={rows}
          className={[
            'block w-full resize-none rounded-xl border-0 bg-transparent px-4 py-3 text-sm leading-relaxed text-gray-900',
            'placeholder:text-gray-400',
            'focus:outline-none focus:ring-0',
            'disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500',
            isOverLimit ? 'text-warn-600' : '',
          ]
            .filter(Boolean)
            .join(' ')}
          aria-label={label ?? placeholder}
        />

        {/* Bottom bar inside textarea */}
        <div className="flex flex-wrap items-center justify-between gap-2 border-t border-gray-100 px-4 py-2">
          {/* Left: word count + clear */}
          <div className="flex items-center gap-3">
            <span className={`text-xs font-medium tabular-nums ${wordCountColor}`}>
              {wordCount}
              {maxWords ? ` / ${maxWords}` : ''} words
              {wordCount < minWords && (
                <span className="ml-1 text-gray-400">(min {minWords})</span>
              )}
            </span>
            {text.length > 0 && (
              <button
                type="button"
                onClick={() => {
                  setText('');
                  setFeedback(null);
                  setRawFeedback(null);
                  setError(null);
                }}
                className="text-xs text-gray-400 transition-colors hover:text-gray-600"
              >
                Clear
              </button>
            )}
          </div>

          {/* Right: buttons */}
          <div className="flex items-center gap-2">
            {/* AI badge */}
            <span className="hidden items-center gap-1 text-[10px] font-medium text-accent sm:inline-flex">
              <svg
                className="h-3 w-3"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z"
                />
              </svg>
              AI-powered feedback built in
            </span>

            {/* Get AI Feedback button */}
            <button
              type="button"
              onClick={handleGetFeedback}
              disabled={!canGetFeedback || disabled}
              className={[
                'inline-flex items-center gap-1.5 rounded-lg px-4 py-2 text-sm font-medium transition-all',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 focus-visible:ring-offset-2',
                canGetFeedback && !disabled
                  ? 'bg-accent text-white shadow-sm hover:bg-accent-600 active:bg-accent-700'
                  : 'cursor-not-allowed bg-gray-100 text-gray-400',
              ].join(' ')}
              aria-label="Get AI feedback on your answer"
            >
              {loading ? (
                <>
                  <svg
                    className="h-4 w-4 animate-spin"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden="true"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                    />
                  </svg>
                  Analysing...
                </>
              ) : (
                <>
                  <svg
                    className="h-4 w-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z"
                    />
                  </svg>
                  Get AI Feedback
                </>
              )}
            </button>

            {/* Submit button */}
            {onSubmit && (
              <button
                type="button"
                onClick={handleSubmit}
                disabled={wordCount < minWords || disabled}
                className={[
                  'inline-flex items-center gap-1.5 rounded-lg px-4 py-2 text-sm font-medium transition-all',
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2',
                  wordCount >= minWords && !disabled
                    ? 'bg-primary text-white shadow-sm hover:bg-primary-600 active:bg-primary-700'
                    : 'cursor-not-allowed bg-gray-100 text-gray-400',
                ].join(' ')}
              >
                Submit Answer
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Error message */}
      {error && (
        <div
          className="mt-3 rounded-lg border border-warn-200 bg-warn-50 px-4 py-3 text-sm text-warn-700"
          role="alert"
        >
          <p className="font-medium">Could not get feedback</p>
          <p className="mt-0.5 text-warn-600">{error}</p>
        </div>
      )}

      {/* Loading skeleton */}
      {loading && (
        <div className="mt-3 rounded-xl border border-gray-200 bg-white shadow-sm">
          <FeedbackSkeleton />
        </div>
      )}

      {/* ── Inline Feedback Panel ──────────────────────────────────── */}
      {feedback && !loading && (
        <div
          ref={feedbackRef}
          className={[
            'mt-3 overflow-hidden rounded-xl border border-accent-200 bg-gradient-to-b from-accent-50/50 to-white shadow-sm',
            'transform transition-all duration-300 ease-out',
            feedbackVisible
              ? 'translate-y-0 opacity-100'
              : 'translate-y-2 opacity-0',
          ].join(' ')}
          role="region"
          aria-label="AI Feedback"
        >
          <div className="p-4 sm:p-5">
            {/* Header with score badge */}
            <div className="flex items-center gap-3">
              <ScoreBadge score={feedback.score} />
              <div>
                <h4 className="text-sm font-semibold text-primary">
                  AI Feedback
                </h4>
                <p className="text-xs text-gray-500">
                  Based on {examBoard} marking criteria
                </p>
              </div>
            </div>

            {/* Key Strengths */}
            <div className="mt-4">
              <h5 className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-success-600">
                <svg
                  className="h-3.5 w-3.5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
                Key Strengths
              </h5>
              <ul className="mt-2 space-y-1.5">
                {feedback.strengths.map((s, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-sm text-gray-700"
                  >
                    <span className="mt-1.5 block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-success" />
                    {s}
                  </li>
                ))}
              </ul>
            </div>

            {/* Areas to Improve */}
            <div className="mt-4">
              <h5 className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-accent-600">
                <svg
                  className="h-3.5 w-3.5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm.75-11.25a.75.75 0 00-1.5 0v2.5h-2.5a.75.75 0 000 1.5h2.5v2.5a.75.75 0 001.5 0v-2.5h2.5a.75.75 0 000-1.5h-2.5v-2.5z"
                    clipRule="evenodd"
                  />
                </svg>
                Areas to Improve
              </h5>
              <ul className="mt-2 space-y-1.5">
                {feedback.improvements.map((imp, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-sm text-gray-700"
                  >
                    <span className="mt-1.5 block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                    {imp}
                  </li>
                ))}
              </ul>
            </div>

            {/* Expandable detailed feedback */}
            <div className="mt-4 border-t border-gray-100 pt-3">
              <button
                type="button"
                onClick={() => setShowDetailed(!showDetailed)}
                className="flex w-full items-center justify-between text-xs font-medium text-primary transition-colors hover:text-primary-600"
                aria-expanded={showDetailed}
              >
                <span>See detailed feedback</span>
                <svg
                  className={`h-4 w-4 transform transition-transform ${showDetailed ? 'rotate-180' : ''}`}
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

              {showDetailed && (
                <div className="mt-3 rounded-lg bg-gray-50 p-3 text-sm leading-relaxed text-gray-700 whitespace-pre-wrap">
                  {feedback.detailed}
                </div>
              )}
            </div>

            {/* Content warnings */}
            {rawFeedback?.contentWarnings &&
              rawFeedback.contentWarnings.length > 0 && (
                <div className="mt-3 rounded-lg border border-warn-200 bg-warn-50 px-3 py-2 text-xs text-warn-700">
                  {rawFeedback.contentWarnings.map((w, i) => (
                    <p key={i}>{w}</p>
                  ))}
                </div>
              )}

            {/* Disclaimer */}
            <p className="mt-3 text-[10px] leading-snug text-gray-400">
              AI feedback is for practice only. It does not replace teacher
              assessment or official marking. Always check with your teacher for
              exam preparation guidance.
              {rawFeedback?.disclaimer && ` ${rawFeedback.disclaimer}`}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export { AITextArea, type AITextAreaProps, type AIFeedbackResult };
