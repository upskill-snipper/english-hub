"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { percentageToGCSEGradeLabel, formatPercentageWithGrade } from "@/lib/grades";

/* ─── Types ──────────────────────────────────────────────────── */

interface Essay {
  id: string;
  title: string;
  subject: string;
  examBoard: string;
  score: number;
  createdAt: string;
}

/* ─── Mock data (replace with real data fetching) ────────────── */

const MOCK_ESSAYS: Essay[] = [
  {
    id: "1",
    title: "An Inspector Calls: Responsibility Theme",
    subject: "English Literature",
    examBoard: "AQA",
    score: 82,
    createdAt: "2026-03-20T14:30:00Z",
  },
  {
    id: "2",
    title: "Persuasive Writing: Social Media in Schools",
    subject: "English Language",
    examBoard: "Edexcel",
    score: 68,
    createdAt: "2026-03-17T10:15:00Z",
  },
  {
    id: "3",
    title: "Macbeth: Power and Ambition",
    subject: "English Literature",
    examBoard: "AQA",
    score: 77,
    createdAt: "2026-03-14T16:45:00Z",
  },
  {
    id: "4",
    title: "Descriptive Writing: A Storm at Sea",
    subject: "English Language",
    examBoard: "CAIE",
    score: 85,
    createdAt: "2026-03-10T09:00:00Z",
  },
  {
    id: "5",
    title: "A Christmas Carol: Scrooge's Transformation",
    subject: "English Literature",
    examBoard: "AQA",
    score: 72,
    createdAt: "2026-03-06T11:30:00Z",
  },
  {
    id: "6",
    title: "Narrative Writing: The Journey Home",
    subject: "English Language",
    examBoard: "OCR",
    score: 60,
    createdAt: "2026-03-02T14:00:00Z",
  },
];

/* ─── Helpers ────────────────────────────────────────────────── */

type SortField = "date" | "score";
type SortDir = "asc" | "desc";

function scoreColour(score: number): string {
  if (score >= 80) return "text-green-500";
  if (score >= 60) return "text-amber-500";
  return "text-red-500";
}

function scoreBadgeBg(score: number): string {
  if (score >= 80) return "bg-green-500/10 text-green-500";
  if (score >= 60) return "bg-primary/10 text-amber-500";
  return "bg-red-500/10 text-red-500";
}

/* ─── Page ───────────────────────────────────────────────────── */

export default function AllEssaysPage() {
  const [sortField, setSortField] = useState<SortField>("date");
  const [sortDir, setSortDir] = useState<SortDir>("desc");
  const [deletingId, setDeletingId] = useState<string | null>(null);

  const sorted = useMemo(() => {
    const copy = [...MOCK_ESSAYS];
    copy.sort((a, b) => {
      if (sortField === "date") {
        const diff =
          new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
        return sortDir === "asc" ? diff : -diff;
      }
      const diff = a.score - b.score;
      return sortDir === "asc" ? diff : -diff;
    });
    return copy;
  }, [sortField, sortDir]);

  function toggleSort(field: SortField) {
    if (sortField === field) {
      setSortDir((d) => (d === "asc" ? "desc" : "asc"));
    } else {
      setSortField(field);
      setSortDir("desc");
    }
  }

  function handleDelete(id: string) {
    // TODO: Replace with real API call
    setDeletingId(null);
  }

  function SortIndicator({ field }: { field: SortField }) {
    if (sortField !== field) return null;
    return (
      <span className="ml-1" aria-hidden="true">
        {sortDir === "asc" ? "\u2191" : "\u2193"}
      </span>
    );
  }

  return (
    <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
      {/* ── Breadcrumb ──────────────────────────────────────── */}
      <nav aria-label="Breadcrumb" className="mb-6">
        <ol className="flex items-center gap-1.5 text-sm text-muted-foreground">
          <li>
            <Link href="/dashboard" className="hover:text-accent">
              Dashboard
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li className="font-medium text-foreground">All Essays</li>
        </ol>
      </nav>

      {/* ── Header ──────────────────────────────────────────── */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-primary sm:text-3xl">
            Your Essays
          </h1>
          <p className="mt-1 text-sm text-muted-foreground">
            {sorted.length} {sorted.length === 1 ? "essay" : "essays"} submitted
          </p>
        </div>
        <Link href="/dashboard/essay/new" className="btn-primary gap-2 self-start">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
          </svg>
          New Essay
        </Link>
      </div>

      {/* ── Sort controls ───────────────────────────────────── */}
      <div className="mt-6 flex items-center gap-2 text-sm">
        <span className="text-muted-foreground">Sort by:</span>
        <button
          type="button"
          onClick={() => toggleSort("date")}
          className={`rounded-md px-3 py-1 font-medium transition-colors ${
            sortField === "date"
              ? "bg-primary text-white"
              : "bg-muted text-muted-foreground hover:bg-muted"
          }`}
        >
          Date
          <SortIndicator field="date" />
        </button>
        <button
          type="button"
          onClick={() => toggleSort("score")}
          className={`rounded-md px-3 py-1 font-medium transition-colors ${
            sortField === "score"
              ? "bg-primary text-white"
              : "bg-muted text-muted-foreground hover:bg-muted"
          }`}
        >
          Score
          <SortIndicator field="score" />
        </button>
      </div>

      {/* ── Essays list ─────────────────────────────────────── */}
      {sorted.length === 0 ? (
        <div className="mt-8 card text-center">
          <p className="text-muted-foreground">You haven&apos;t submitted any essays yet.</p>
          <Link href="/dashboard/essay/new" className="btn-primary mt-4 inline-flex">
            Write Your First Essay
          </Link>
        </div>
      ) : (
        <>
          {/* ── Desktop table ─────────────────────────────────── */}
          <div className="mt-6 hidden sm:block">
            <div className="overflow-hidden rounded-xl border border-border">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border bg-muted">
                    <th className="px-4 py-3 text-left font-medium text-muted-foreground">
                      Title
                    </th>
                    <th className="px-4 py-3 text-left font-medium text-muted-foreground">
                      Subject
                    </th>
                    <th className="px-4 py-3 text-left font-medium text-muted-foreground">
                      Board
                    </th>
                    <th
                      className="cursor-pointer px-4 py-3 text-left font-medium text-muted-foreground hover:text-foreground"
                      onClick={() => toggleSort("score")}
                    >
                      Score
                      <SortIndicator field="score" />
                    </th>
                    <th
                      className="cursor-pointer px-4 py-3 text-left font-medium text-muted-foreground hover:text-foreground"
                      onClick={() => toggleSort("date")}
                    >
                      Date
                      <SortIndicator field="date" />
                    </th>
                    <th className="px-4 py-3 text-right font-medium text-muted-foreground">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {sorted.map((essay) => (
                    <tr
                      key={essay.id}
                      className="hover:bg-muted/50 transition-colors"
                    >
                      <td className="px-4 py-3">
                        <Link
                          href={`/dashboard/essay/${essay.id}`}
                          className="font-medium text-foreground hover:text-accent"
                        >
                          {essay.title}
                        </Link>
                      </td>
                      <td className="px-4 py-3 text-muted-foreground">{essay.subject}</td>
                      <td className="px-4 py-3 text-muted-foreground">{essay.examBoard}</td>
                      <td className="px-4 py-3">
                        <span
                          className={`inline-flex rounded-full px-2 py-0.5 text-xs font-bold ${scoreBadgeBg(
                            essay.score
                          )}`}
                        >
                          {percentageToGCSEGradeLabel(essay.score)}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-muted-foreground">
                        {new Date(essay.createdAt).toLocaleDateString("en-GB", {
                          day: "numeric",
                          month: "short",
                          year: "numeric",
                        })}
                      </td>
                      <td className="px-4 py-3 text-right">
                        {deletingId === essay.id ? (
                          <div className="flex items-center justify-end gap-2">
                            <button
                              type="button"
                              onClick={() => handleDelete(essay.id)}
                              className="text-xs font-medium text-red-500 hover:text-red-600"
                            >
                              Confirm
                            </button>
                            <button
                              type="button"
                              onClick={() => setDeletingId(null)}
                              className="text-xs text-muted-foreground hover:text-muted-foreground"
                            >
                              Cancel
                            </button>
                          </div>
                        ) : (
                          <div className="flex items-center justify-end gap-3">
                            <Link
                              href={`/dashboard/essay/${essay.id}`}
                              className="text-xs font-medium text-accent hover:text-primary"
                            >
                              View
                            </Link>
                            <button
                              type="button"
                              onClick={() => setDeletingId(essay.id)}
                              className="text-xs text-muted-foreground hover:text-red-500"
                            >
                              Delete
                            </button>
                          </div>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* ── Mobile cards ──────────────────────────────────── */}
          <ul className="mt-6 space-y-3 sm:hidden" role="list">
            {sorted.map((essay) => (
              <li key={essay.id} className="card">
                <div className="flex items-start justify-between gap-3">
                  <Link
                    href={`/dashboard/essay/${essay.id}`}
                    className="min-w-0 flex-1"
                  >
                    <p className="truncate font-medium text-foreground hover:text-accent">
                      {essay.title}
                    </p>
                    <p className="mt-0.5 text-xs text-muted-foreground">
                      {essay.subject} &middot; {essay.examBoard}
                    </p>
                    <p className="mt-0.5 text-xs text-muted-foreground">
                      {new Date(essay.createdAt).toLocaleDateString("en-GB", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      })}
                    </p>
                  </Link>
                  <span
                    className={`shrink-0 text-lg font-bold ${scoreColour(
                      essay.score
                    )}`}
                  >
                    {percentageToGCSEGradeLabel(essay.score)}
                  </span>
                </div>

                <div className="mt-3 flex items-center gap-3 border-t border-border pt-3">
                  <Link
                    href={`/dashboard/essay/${essay.id}`}
                    className="text-xs font-medium text-accent hover:text-primary"
                  >
                    View Feedback
                  </Link>
                  {deletingId === essay.id ? (
                    <>
                      <button
                        type="button"
                        onClick={() => handleDelete(essay.id)}
                        className="text-xs font-medium text-red-500 hover:text-red-600"
                      >
                        Confirm Delete
                      </button>
                      <button
                        type="button"
                        onClick={() => setDeletingId(null)}
                        className="text-xs text-muted-foreground hover:text-muted-foreground"
                      >
                        Cancel
                      </button>
                    </>
                  ) : (
                    <button
                      type="button"
                      onClick={() => setDeletingId(essay.id)}
                      className="text-xs text-muted-foreground hover:text-red-500"
                    >
                      Delete
                    </button>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}
