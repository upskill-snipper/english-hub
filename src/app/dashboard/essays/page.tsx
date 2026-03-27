"use client";

import { useState, useMemo } from "react";
import Link from "next/link";

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
  if (score >= 80) return "text-success";
  if (score >= 60) return "text-accent";
  return "text-warn";
}

function scoreBadgeBg(score: number): string {
  if (score >= 80) return "bg-success-50 text-success";
  if (score >= 60) return "bg-accent-50 text-accent";
  return "bg-warn-50 text-warn";
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
        <ol className="flex items-center gap-1.5 text-sm text-gray-500">
          <li>
            <Link href="/dashboard" className="hover:text-accent">
              Dashboard
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li className="font-medium text-gray-900">All Essays</li>
        </ol>
      </nav>

      {/* ── Header ──────────────────────────────────────────── */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-primary sm:text-3xl">
            Your Essays
          </h1>
          <p className="mt-1 text-sm text-gray-500">
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
        <span className="text-gray-500">Sort by:</span>
        <button
          type="button"
          onClick={() => toggleSort("date")}
          className={`rounded-md px-3 py-1 font-medium transition-colors ${
            sortField === "date"
              ? "bg-primary text-white"
              : "bg-gray-100 text-gray-600 hover:bg-gray-200"
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
              : "bg-gray-100 text-gray-600 hover:bg-gray-200"
          }`}
        >
          Score
          <SortIndicator field="score" />
        </button>
      </div>

      {/* ── Essays list ─────────────────────────────────────── */}
      {sorted.length === 0 ? (
        <div className="mt-8 card text-center">
          <p className="text-gray-500">You haven&apos;t submitted any essays yet.</p>
          <Link href="/dashboard/essay/new" className="btn-primary mt-4 inline-flex">
            Write Your First Essay
          </Link>
        </div>
      ) : (
        <>
          {/* ── Desktop table ─────────────────────────────────── */}
          <div className="mt-6 hidden sm:block">
            <div className="overflow-hidden rounded-xl border border-gray-200">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-200 bg-gray-50">
                    <th className="px-4 py-3 text-left font-medium text-gray-500">
                      Title
                    </th>
                    <th className="px-4 py-3 text-left font-medium text-gray-500">
                      Subject
                    </th>
                    <th className="px-4 py-3 text-left font-medium text-gray-500">
                      Board
                    </th>
                    <th
                      className="cursor-pointer px-4 py-3 text-left font-medium text-gray-500 hover:text-gray-700"
                      onClick={() => toggleSort("score")}
                    >
                      Score
                      <SortIndicator field="score" />
                    </th>
                    <th
                      className="cursor-pointer px-4 py-3 text-left font-medium text-gray-500 hover:text-gray-700"
                      onClick={() => toggleSort("date")}
                    >
                      Date
                      <SortIndicator field="date" />
                    </th>
                    <th className="px-4 py-3 text-right font-medium text-gray-500">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {sorted.map((essay) => (
                    <tr
                      key={essay.id}
                      className="hover:bg-gray-50/50 transition-colors"
                    >
                      <td className="px-4 py-3">
                        <Link
                          href={`/dashboard/essay/${essay.id}`}
                          className="font-medium text-gray-900 hover:text-accent"
                        >
                          {essay.title}
                        </Link>
                      </td>
                      <td className="px-4 py-3 text-gray-500">{essay.subject}</td>
                      <td className="px-4 py-3 text-gray-500">{essay.examBoard}</td>
                      <td className="px-4 py-3">
                        <span
                          className={`inline-flex rounded-full px-2 py-0.5 text-xs font-bold ${scoreBadgeBg(
                            essay.score
                          )}`}
                        >
                          {essay.score}%
                        </span>
                      </td>
                      <td className="px-4 py-3 text-gray-500">
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
                              className="text-xs font-medium text-warn hover:text-warn-600"
                            >
                              Confirm
                            </button>
                            <button
                              type="button"
                              onClick={() => setDeletingId(null)}
                              className="text-xs text-gray-500 hover:text-gray-600"
                            >
                              Cancel
                            </button>
                          </div>
                        ) : (
                          <div className="flex items-center justify-end gap-3">
                            <Link
                              href={`/dashboard/essay/${essay.id}`}
                              className="text-xs font-medium text-accent hover:text-accent-600"
                            >
                              View
                            </Link>
                            <button
                              type="button"
                              onClick={() => setDeletingId(essay.id)}
                              className="text-xs text-gray-500 hover:text-warn"
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
                    <p className="truncate font-medium text-gray-900 hover:text-accent">
                      {essay.title}
                    </p>
                    <p className="mt-0.5 text-xs text-gray-500">
                      {essay.subject} &middot; {essay.examBoard}
                    </p>
                    <p className="mt-0.5 text-xs text-gray-500">
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
                    {essay.score}%
                  </span>
                </div>

                <div className="mt-3 flex items-center gap-3 border-t border-gray-100 pt-3">
                  <Link
                    href={`/dashboard/essay/${essay.id}`}
                    className="text-xs font-medium text-accent hover:text-accent-600"
                  >
                    View Feedback
                  </Link>
                  {deletingId === essay.id ? (
                    <>
                      <button
                        type="button"
                        onClick={() => handleDelete(essay.id)}
                        className="text-xs font-medium text-warn hover:text-warn-600"
                      >
                        Confirm Delete
                      </button>
                      <button
                        type="button"
                        onClick={() => setDeletingId(null)}
                        className="text-xs text-gray-500 hover:text-gray-600"
                      >
                        Cancel
                      </button>
                    </>
                  ) : (
                    <button
                      type="button"
                      onClick={() => setDeletingId(essay.id)}
                      className="text-xs text-gray-500 hover:text-warn"
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
