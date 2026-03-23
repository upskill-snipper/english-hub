"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ExamBoardDisclaimer } from "@/components/ExamBoardDisclaimer";
import { useExamBoard } from "@/contexts/ExamBoardContext";

/* ─── Constants ──────────────────────────────────────────────── */

const SUBJECTS = ["English Language", "English Literature"] as const;

const EXAM_BOARDS = [
  { value: "AQA", label: "AQA" },
  { value: "Edexcel", label: "Edexcel" },
  { value: "CAIE", label: "Cambridge (CAIE)" },
  { value: "OCR", label: "OCR" },
] as const;

/* ─── Board display helper ───────────────────────────────────── */

function boardLabel(value: string): string {
  const found = EXAM_BOARDS.find((b) => b.value === value || b.value.toUpperCase() === value.toUpperCase());
  return found?.label ?? value;
}

/* ─── Word counter helper ────────────────────────────────────── */

function countWords(text: string): number {
  const trimmed = text.trim();
  if (trimmed.length === 0) return 0;
  return trimmed.split(/\s+/).length;
}

/* ─── Page ───────────────────────────────────────────────────── */

export default function NewEssayPage() {
  const { selectedBoard: contextBoard } = useExamBoard();

  const [title, setTitle] = useState("");
  const [subject, setSubject] = useState<string>("");
  const [examBoard, setExamBoard] = useState<string>("");
  const [showBoardSelector, setShowBoardSelector] = useState(false);
  const [topic, setTopic] = useState("");
  const [content, setContent] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Pre-fill exam board from context when available
  useEffect(() => {
    if (contextBoard && !examBoard) {
      setExamBoard(contextBoard);
    }
  }, [contextBoard, examBoard]);

  const wordCount = countWords(content);
  const canSubmit = title.trim() && subject && examBoard && wordCount >= 50;

  // Determine if the board was pre-filled (user has a saved board)
  const boardIsPreFilled = !!contextBoard && examBoard === contextBoard && !showBoardSelector;

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!canSubmit || isSubmitting) return;

    setIsSubmitting(true);

    // TODO: Replace with real API call
    try {
      const payload = { title, subject, examBoard, topic, content };
      console.log("Submitting essay:", payload);

      // Simulate API delay
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Redirect to the essay feedback page
      window.location.href = "/dashboard/essay/1";
    } catch {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6 lg:px-8">
      {/* ── Breadcrumb ──────────────────────────────────────── */}
      <nav aria-label="Breadcrumb" className="mb-6">
        <ol className="flex items-center gap-1.5 text-sm text-gray-500">
          <li>
            <Link href="/dashboard" className="hover:text-accent">
              Dashboard
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li className="font-medium text-gray-900">New Essay</li>
        </ol>
      </nav>

      <h1 className="text-2xl font-bold text-primary sm:text-3xl">
        Write a New Essay
      </h1>
      <p className="mt-1 text-sm text-gray-500">
        Submit your essay below and get instant AI-powered feedback.
      </p>

      <form onSubmit={handleSubmit} className="mt-8 space-y-6">
        {/* ── Title ──────────────────────────────────────────── */}
        <div>
          <label htmlFor="essay-title" className="block text-sm font-medium text-gray-700">
            Essay Title <span className="text-warn">*</span>
          </label>
          <input
            id="essay-title"
            type="text"
            className="input-field mt-1"
            placeholder="e.g. An Inspector Calls: Responsibility Theme"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            maxLength={200}
          />
        </div>

        {/* ── Subject & Exam Board ───────────────────────────── */}
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
              Subject <span className="text-warn">*</span>
            </label>
            <select
              id="subject"
              className="input-field mt-1"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              required
            >
              <option value="" disabled>
                Select subject
              </option>
              {SUBJECTS.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="exam-board" className="block text-sm font-medium text-gray-700">
              Exam Board <span className="text-warn">*</span>
            </label>

            {boardIsPreFilled ? (
              /* ── Pre-filled: show the board name with a Change link ── */
              <div className="mt-1 flex items-center gap-2">
                <span className="inline-flex items-center rounded-lg border border-accent/30 bg-accent-50 px-3 py-2 text-sm font-medium text-primary">
                  {boardLabel(examBoard)}
                </span>
                <button
                  type="button"
                  onClick={() => setShowBoardSelector(true)}
                  className="text-xs font-medium text-accent hover:text-accent-600 underline underline-offset-2"
                >
                  Change
                </button>
              </div>
            ) : (
              /* ── Full selector ── */
              <select
                id="exam-board"
                className="input-field mt-1"
                value={examBoard}
                onChange={(e) => setExamBoard(e.target.value)}
                required
              >
                <option value="" disabled>
                  Select exam board
                </option>
                {EXAM_BOARDS.map((eb) => (
                  <option key={eb.value} value={eb.value}>
                    {eb.label}
                  </option>
                ))}
              </select>
            )}
          </div>
        </div>

        {/* ── Topic / Prompt (optional) ─────────────────────── */}
        <div>
          <label htmlFor="topic" className="block text-sm font-medium text-gray-700">
            Topic / Prompt{" "}
            <span className="text-xs font-normal text-gray-400">(optional)</span>
          </label>
          <input
            id="topic"
            type="text"
            className="input-field mt-1"
            placeholder='e.g. "How does Priestley present responsibility in An Inspector Calls?"'
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            maxLength={500}
          />
        </div>

        {/* ── Essay content ─────────────────────────────────── */}
        <div>
          <label htmlFor="essay-content" className="block text-sm font-medium text-gray-700">
            Your Essay <span className="text-warn">*</span>
          </label>
          <textarea
            id="essay-content"
            className="input-field mt-1 min-h-[320px] resize-y leading-relaxed"
            placeholder="Paste or type your essay here..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />
          <div className="mt-1.5 flex items-center justify-between text-xs text-gray-400">
            <span>
              {wordCount} {wordCount === 1 ? "word" : "words"}
              {wordCount > 0 && wordCount < 50 && (
                <span className="ml-1 text-warn">(minimum 50 words)</span>
              )}
            </span>
            <span>No word limit</span>
          </div>
        </div>

        {/* ── Exam board disclaimer ─────────────────────────── */}
        <ExamBoardDisclaimer variant="content" selectedBoard={examBoard || contextBoard} />

        {/* ── AI consent reminder ───────────────────────────── */}
        <div className="flex items-start gap-2 rounded-lg border border-accent-200 bg-accent-50 px-3 py-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="mt-0.5 h-4 w-4 shrink-0 text-accent"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <p className="text-xs leading-relaxed text-accent-800">
            Your essay will be analysed by AI to provide feedback.{" "}
            <Link
              href="/legal/ai-transparency"
              className="font-medium underline underline-offset-2 hover:text-accent-600"
            >
              See our AI Transparency page
            </Link>{" "}
            for details on how your data is handled.
          </p>
        </div>

        {/* ── Submit ────────────────────────────────────────── */}
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-end">
          <Link
            href="/dashboard"
            className="btn-outline order-2 sm:order-1"
          >
            Cancel
          </Link>
          <button
            type="submit"
            disabled={!canSubmit || isSubmitting}
            className="btn-primary order-1 gap-2 sm:order-2"
          >
            {isSubmitting ? (
              <>
                <svg className="h-4 w-4 animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                Submitting...
              </>
            ) : (
              <>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
                Submit for AI Feedback
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
