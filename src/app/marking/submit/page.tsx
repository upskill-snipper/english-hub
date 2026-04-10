"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

/* ─── Constants ────────────────────────────────────────────── */

const BOARDS = [
  { value: "AQA", label: "AQA" },
  { value: "Edexcel", label: "Edexcel" },
  { value: "OCR", label: "OCR" },
  { value: "Eduqas", label: "Eduqas" },
] as const;

const PAPERS = [
  { value: "lit-p1", label: "English Literature — Paper 1" },
  { value: "lit-p2", label: "English Literature — Paper 2" },
  { value: "lang-p1", label: "English Language — Paper 1" },
  { value: "lang-p2", label: "English Language — Paper 2" },
] as const;

const QUESTIONS_BY_PAPER: Record<string, { value: string; label: string }[]> = {
  "lit-p1": [
    {
      value: "macbeth",
      label: "Macbeth — How does Shakespeare present ambition?",
    },
    {
      value: "romeo-juliet",
      label: "Romeo and Juliet — How is conflict presented?",
    },
    {
      value: "jekyll",
      label: "Jekyll and Hyde — How is duality presented?",
    },
  ],
  "lit-p2": [
    {
      value: "inspector",
      label: "An Inspector Calls — How is responsibility presented?",
    },
    {
      value: "dna",
      label: "DNA — How is power presented?",
    },
    {
      value: "power",
      label: "Unseen poetry — Comparison question",
    },
  ],
  "lang-p1": [
    { value: "q2", label: "Q2 — Language analysis" },
    { value: "q3", label: "Q3 — Structural analysis" },
    { value: "q4", label: "Q4 — Evaluation" },
    { value: "q5", label: "Q5 — Creative writing" },
  ],
  "lang-p2": [
    { value: "q2", label: "Q2 — Summary / comparison" },
    { value: "q3", label: "Q3 — Language analysis" },
    { value: "q4", label: "Q4 — Comparing viewpoints" },
    { value: "q5", label: "Q5 — Transactional writing" },
  ],
};

/* ─── Helpers ──────────────────────────────────────────────── */

function countWords(text: string): number {
  const trimmed = text.trim();
  if (trimmed.length === 0) return 0;
  return trimmed.split(/\s+/).length;
}

/** Deterministic-ish fake band score generator. */
function fakeResult(essay: string) {
  const words = countWords(essay);
  const lexicalDiversity =
    new Set(essay.toLowerCase().split(/\W+/).filter(Boolean)).size;
  const base =
    Math.min(9, Math.max(3, Math.round((words / 250 + lexicalDiversity / 120))));

  // AOs sum roughly to the grade band
  const aos = [
    {
      code: "AO1",
      label: "Read, understand and respond; use textual references",
      score: Math.min(12, base + 3),
      max: 12,
    },
    {
      code: "AO2",
      label: "Analyse language, form and structure",
      score: Math.min(12, base + 2),
      max: 12,
    },
    {
      code: "AO3",
      label: "Show understanding of context",
      score: Math.min(6, Math.max(2, Math.round(base / 1.5))),
      max: 6,
    },
    {
      code: "AO4",
      label: "Accurate spelling, punctuation and grammar",
      score: Math.min(4, Math.max(1, Math.round(base / 2))),
      max: 4,
    },
  ];

  return {
    grade: base,
    confidence: 70 + ((words + lexicalDiversity) % 25),
    aos,
  };
}

/* ─── Page ─────────────────────────────────────────────────── */

export default function SubmitEssayPage() {
  const router = useRouter();
  const [board, setBoard] = useState<string>("");
  const [paper, setPaper] = useState<string>("");
  const [question, setQuestion] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [essay, setEssay] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const wordCount = countWords(essay);
  const questionOptions = useMemo(
    () => (paper ? QUESTIONS_BY_PAPER[paper] ?? [] : []),
    [paper]
  );
  const canSubmit =
    board && paper && question && essay.trim().length > 0 && wordCount >= 50;

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!canSubmit || isSubmitting) return;
    setIsSubmitting(true);

    // TODO: call /api/mark endpoint
    const result = fakeResult(essay);
    const id = `mk_${Date.now().toString(36)}`;
    const boardLabel =
      BOARDS.find((b) => b.value === board)?.label ?? board;
    const paperLabel = PAPERS.find((p) => p.value === paper)?.label ?? paper;
    const questionLabel =
      questionOptions.find((q) => q.value === question)?.label ?? question;

    const entry = {
      id,
      title: title.trim() || questionLabel,
      board: boardLabel,
      paper: paperLabel,
      question: questionLabel,
      essay,
      wordCount,
      grade: result.grade,
      confidence: result.confidence,
      aos: result.aos,
      submittedAt: new Date().toISOString(),
    };

    try {
      const raw = localStorage.getItem("english-hub-marking-history");
      const prev = raw ? JSON.parse(raw) : [];
      const next = [entry, ...prev];
      localStorage.setItem(
        "english-hub-marking-history",
        JSON.stringify(next)
      );
    } catch {
      /* ignore */
    }

    // Fake latency so the spinner is believable
    await new Promise((r) => setTimeout(r, 800));
    router.push(`/marking/results/${id}`);
  }

  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 lg:px-8">
      {/* ── Breadcrumb ────────────────────────────────────── */}
      <nav aria-label="Breadcrumb" className="mb-6">
        <ol className="flex items-center gap-1.5 text-sm text-muted-foreground">
          <li>
            <Link href="/marking" className="hover:text-primary">
              Marking
            </Link>
          </li>
          <li aria-hidden>/</li>
          <li className="font-medium text-foreground">New submission</li>
        </ol>
      </nav>

      <h1 className="font-heading text-3xl font-extrabold tracking-tight text-foreground">
        Submit an essay for marking
      </h1>
      <p className="mt-1 text-sm text-muted-foreground">
        Paste your essay below. We&apos;ll return a predicted grade, AO
        breakdown and examiner-style feedback.
      </p>

      <Card className="mt-8">
        <CardHeader>
          <CardTitle>Essay details</CardTitle>
          <CardDescription>
            Pick your exam board, paper and question so we can apply the right
            mark scheme.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* ── Board / Paper ───────────────────────────── */}
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-1.5">
                <label
                  htmlFor="board"
                  className="text-sm font-medium text-foreground"
                >
                  Exam board
                </label>
                <select
                  id="board"
                  value={board}
                  onChange={(e) => setBoard(e.target.value)}
                  required
                  className="h-10 w-full rounded-lg border border-border bg-input px-3 text-sm text-foreground focus-visible:border-ring focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/30"
                >
                  <option value="" disabled>
                    Select board
                  </option>
                  {BOARDS.map((b) => (
                    <option key={b.value} value={b.value}>
                      {b.label}
                    </option>
                  ))}
                </select>
              </div>

              <div className="space-y-1.5">
                <label
                  htmlFor="paper"
                  className="text-sm font-medium text-foreground"
                >
                  Paper
                </label>
                <select
                  id="paper"
                  value={paper}
                  onChange={(e) => {
                    setPaper(e.target.value);
                    setQuestion("");
                  }}
                  required
                  className="h-10 w-full rounded-lg border border-border bg-input px-3 text-sm text-foreground focus-visible:border-ring focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/30"
                >
                  <option value="" disabled>
                    Select paper
                  </option>
                  {PAPERS.map((p) => (
                    <option key={p.value} value={p.value}>
                      {p.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* ── Question ───────────────────────────────── */}
            <div className="space-y-1.5">
              <label
                htmlFor="question"
                className="text-sm font-medium text-foreground"
              >
                Question
              </label>
              <select
                id="question"
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                required
                disabled={!paper}
                className="h-10 w-full rounded-lg border border-border bg-input px-3 text-sm text-foreground focus-visible:border-ring focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/30 disabled:opacity-50"
              >
                <option value="" disabled>
                  {paper ? "Select question" : "Choose a paper first"}
                </option>
                {questionOptions.map((q) => (
                  <option key={q.value} value={q.value}>
                    {q.label}
                  </option>
                ))}
              </select>
            </div>

            {/* ── Title ──────────────────────────────────── */}
            <div className="space-y-1.5">
              <label
                htmlFor="title"
                className="text-sm font-medium text-foreground"
              >
                Title{" "}
                <span className="text-xs font-normal text-muted-foreground">
                  (optional)
                </span>
              </label>
              <input
                id="title"
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="e.g. Macbeth — ambition essay, draft 2"
                className="h-10 w-full rounded-lg border border-border bg-input px-3 text-sm text-foreground focus-visible:border-ring focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/30"
              />
            </div>

            {/* ── Essay body ─────────────────────────────── */}
            <div className="space-y-1.5">
              <label
                htmlFor="essay"
                className="text-sm font-medium text-foreground"
              >
                Your essay
              </label>
              <textarea
                id="essay"
                value={essay}
                onChange={(e) => setEssay(e.target.value)}
                placeholder="Paste or type your full essay here..."
                required
                rows={14}
                className="w-full resize-y rounded-lg border border-border bg-input px-3 py-2.5 text-sm leading-relaxed text-foreground focus-visible:border-ring focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/30"
              />
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <span>
                  {wordCount} {wordCount === 1 ? "word" : "words"}
                  {wordCount > 0 && wordCount < 50 && (
                    <span className="ml-1 text-destructive">
                      (minimum 50 words)
                    </span>
                  )}
                </span>
                <span>No upper limit</span>
              </div>
            </div>

            {/* ── Submit ─────────────────────────────────── */}
            <div className="flex flex-col-reverse items-stretch gap-3 sm:flex-row sm:justify-end">
              <Button
                variant="outline"
                type="button"
                render={<Link href="/marking" />}
              >
                Cancel
              </Button>
              <Button
                type="submit"
                size="lg"
                disabled={!canSubmit || isSubmitting}
              >
                {isSubmitting ? "Marking..." : "Submit for marking"}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
