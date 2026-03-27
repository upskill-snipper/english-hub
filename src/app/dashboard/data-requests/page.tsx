"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";

// ─── Types ─────────────────────────────────────────────────────────────

interface DSARRequest {
  id: string;
  type: "ACCESS" | "PORTABILITY" | "ERASURE" | "RECTIFICATION";
  status: "PENDING" | "PROCESSING" | "COMPLETED" | "REFUSED";
  requestedAt: string;
  completedAt: string | null;
  deadline: string;
  daysRemaining: number | null;
}

interface CreateResult {
  referenceNumber: string;
  deadlineFormatted: string;
  type: string;
}

// ─── Constants ─────────────────────────────────────────────────────────

const TYPE_LABELS: Record<string, string> = {
  ACCESS: "Access Request",
  PORTABILITY: "Data Download",
  ERASURE: "Erasure Request",
  RECTIFICATION: "Rectification Request",
};

const STATUS_STYLES: Record<string, string> = {
  PENDING: "bg-yellow-100 text-yellow-800",
  PROCESSING: "bg-accent-100 text-accent-700",
  COMPLETED: "bg-success-100 text-success-700",
  REFUSED: "bg-warn-100 text-warn-700",
};

// ─── Component ─────────────────────────────────────────────────────────

export default function DataRequestsPage() {
  const [requests, setRequests] = useState<DSARRequest[]>([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<CreateResult | null>(null);
  const [showEraseConfirm, setShowEraseConfirm] = useState(false);
  const [eraseConfirmText, setEraseConfirmText] = useState("");

  const fetchRequests = useCallback(async () => {
    try {
      const res = await fetch("/api/dsar");
      if (res.ok) {
        const data = await res.json();
        setRequests(data.requests ?? []);
      }
    } catch {
      // Silently fail on load
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchRequests();
  }, [fetchRequests]);

  async function createRequest(type: "ACCESS" | "PORTABILITY" | "ERASURE") {
    setError(null);
    setSubmitting(type);

    try {
      const res = await fetch("/api/dsar", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type }),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => null);
        throw new Error(body?.error ?? "Something went wrong. Please try again.");
      }

      const data = await res.json();
      setResult({
        referenceNumber: data.referenceNumber,
        deadlineFormatted: data.deadlineFormatted,
        type: data.type,
      });

      // Refresh the list
      fetchRequests();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
    } finally {
      setSubmitting(null);
      setShowEraseConfirm(false);
      setEraseConfirmText("");
    }
  }

  function handleDownloadData() {
    // Trigger a file download via the export endpoint
    window.location.href = "/api/dsar/export?format=json";
    createRequest("PORTABILITY");
  }

  // ────── Success confirmation ──────
  if (result) {
    return (
      <div className="mx-auto max-w-2xl px-4 py-12">
        <div className="card text-center">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-success-100 text-success-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>

          <h1 className="text-2xl font-semibold text-primary">
            Request Submitted
          </h1>
          <p className="mt-2 text-muted-foreground">
            Your {TYPE_LABELS[result.type]?.toLowerCase() ?? "data request"} has been received.
          </p>

          <div className="mt-6 rounded-lg bg-muted p-4 text-sm">
            <p className="text-muted-foreground">Your reference number</p>
            <p className="mt-1 text-lg font-mono font-semibold text-primary">
              {result.referenceNumber}
            </p>
          </div>

          <div className="mt-4 rounded-lg bg-accent-50 border border-accent-200 p-4 text-sm text-foreground">
            <p>
              <strong>Estimated completion:</strong> {result.deadlineFormatted}
            </p>
            <p className="mt-1 text-xs text-muted-foreground">
              Under UK GDPR, we must respond within one calendar month of your request.
            </p>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={() => setResult(null)}
              className="btn-primary text-sm"
            >
              Back to Data Requests
            </button>
            <Link href="/dashboard" className="btn-outline text-sm">
              Dashboard
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // ────── Main page ──────
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <div className="mb-2">
        <Link
          href="/dashboard"
          className="text-sm text-muted-foreground hover:text-primary transition-colors"
        >
          &larr; Back to Dashboard
        </Link>
      </div>

      <h1 className="text-2xl font-semibold text-primary">
        Your Data Rights
      </h1>
      <p className="mt-2 text-sm text-muted-foreground">
        Under UK GDPR, you have rights over your personal data. Use the options
        below to exercise these rights. All requests are processed within one
        calendar month.
      </p>

      {/* Rights notice */}
      <div className="mt-4 rounded-lg border border-primary-200 bg-primary-50 p-4 text-sm text-foreground">
        <p className="font-medium text-primary">Your data protection rights</p>
        <ul className="mt-2 space-y-1 text-muted-foreground">
          <li>
            <strong>Article 15</strong> &mdash; Right of Access: request a copy
            of all personal data we hold about you.
          </li>
          <li>
            <strong>Article 16</strong> &mdash; Right to Rectification: correct
            any inaccurate personal data.
          </li>
          <li>
            <strong>Article 17</strong> &mdash; Right to Erasure: request deletion
            of your personal data.
          </li>
          <li>
            <strong>Article 20</strong> &mdash; Right to Data Portability: receive
            your data in a machine-readable format.
          </li>
        </ul>
      </div>

      {/* Action cards */}
      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {/* Access */}
        <div className="card">
          <div className="flex items-start gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent-100 text-accent-600">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <div className="flex-1">
              <h3 className="font-medium text-foreground">Request My Data</h3>
              <p className="mt-1 text-xs text-muted-foreground">
                Article 15 &mdash; Get a full copy of all personal data we hold
                about you.
              </p>
            </div>
          </div>
          <button
            onClick={() => createRequest("ACCESS")}
            disabled={submitting !== null}
            className="btn-primary mt-4 w-full text-sm"
          >
            {submitting === "ACCESS" ? "Submitting..." : "Request My Data"}
          </button>
        </div>

        {/* Portability */}
        <div className="card">
          <div className="flex items-start gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-success-100 text-success-600">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
            </div>
            <div className="flex-1">
              <h3 className="font-medium text-foreground">Download My Data</h3>
              <p className="mt-1 text-xs text-muted-foreground">
                Article 20 &mdash; Download your data in a machine-readable
                format (JSON).
              </p>
            </div>
          </div>
          <button
            onClick={handleDownloadData}
            disabled={submitting !== null}
            className="btn-accent mt-4 w-full text-sm"
          >
            {submitting === "PORTABILITY" ? "Preparing..." : "Download My Data"}
          </button>
        </div>

        {/* Rectification */}
        <div className="card">
          <div className="flex items-start gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary-100 text-primary-600">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
              </svg>
            </div>
            <div className="flex-1">
              <h3 className="font-medium text-foreground">Correct My Data</h3>
              <p className="mt-1 text-xs text-muted-foreground">
                Article 16 &mdash; Update or correct any inaccurate personal
                information.
              </p>
            </div>
          </div>
          <Link
            href="/dashboard/privacy"
            className="btn-outline mt-4 w-full text-sm"
          >
            Edit My Profile
          </Link>
        </div>

        {/* Erasure */}
        <div className="card border-warn-200">
          <div className="flex items-start gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-warn-100 text-warn-600">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
            </div>
            <div className="flex-1">
              <h3 className="font-medium text-foreground">Delete My Data</h3>
              <p className="mt-1 text-xs text-muted-foreground">
                Article 17 &mdash; Request erasure of your personal data. This
                action cannot be undone.
              </p>
            </div>
          </div>
          {!showEraseConfirm ? (
            <button
              onClick={() => setShowEraseConfirm(true)}
              disabled={submitting !== null}
              className="mt-4 w-full inline-flex items-center justify-center rounded-lg border-2 border-warn bg-card px-5 py-2.5 text-sm font-medium text-warn hover:bg-warn hover:text-white transition-colors disabled:opacity-50"
            >
              Delete My Data
            </button>
          ) : (
            <div className="mt-4 space-y-3">
              <div className="rounded-lg border border-warn-200 bg-warn-50 p-3 text-sm text-foreground">
                <p className="font-medium">Are you sure?</p>
                <p className="mt-1 text-xs">
                  This will anonymise your account and remove your essays,
                  feedback, and personal data. Your subscription will be
                  cancelled. This cannot be undone.
                </p>
                <p className="mt-2 text-xs">
                  Type <strong>DELETE</strong> to confirm:
                </p>
              </div>
              <input
                type="text"
                value={eraseConfirmText}
                onChange={(e) => setEraseConfirmText(e.target.value)}
                placeholder='Type "DELETE" to confirm'
                className="input-field text-sm"
                autoFocus
              />
              <div className="flex gap-2">
                <button
                  onClick={() => {
                    setShowEraseConfirm(false);
                    setEraseConfirmText("");
                  }}
                  className="btn-outline flex-1 text-sm"
                >
                  Cancel
                </button>
                <button
                  onClick={() => createRequest("ERASURE")}
                  disabled={eraseConfirmText !== "DELETE" || submitting !== null}
                  className="flex-1 inline-flex items-center justify-center rounded-lg bg-warn px-5 py-2.5 text-sm font-medium text-white hover:bg-warn-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {submitting === "ERASURE" ? "Submitting..." : "Confirm Deletion"}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Error */}
      {error && (
        <div
          role="alert"
          className="mt-6 rounded-lg border border-warn-200 bg-warn-50 p-3 text-sm text-foreground"
        >
          {error}
        </div>
      )}

      {/* Request history */}
      <div className="mt-12">
        <h2 className="text-lg font-semibold text-primary">Request History</h2>
        <p className="mt-1 text-sm text-muted-foreground">
          Track the status of your data requests below.
        </p>

        {loading ? (
          <div className="mt-4 text-center text-sm text-muted-foreground">
            Loading your requests...
          </div>
        ) : requests.length === 0 ? (
          <div className="mt-4 card text-center text-sm text-muted-foreground">
            You have not made any data requests yet.
          </div>
        ) : (
          <div className="mt-4 space-y-3">
            {requests.map((req) => (
              <div key={req.id} className="card">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-medium text-foreground">
                        {TYPE_LABELS[req.type] ?? req.type}
                      </span>
                      <span
                        className={`inline-flex rounded-full px-2.5 py-0.5 text-xs font-medium ${STATUS_STYLES[req.status] ?? "bg-muted text-foreground"}`}
                      >
                        {req.status}
                      </span>
                    </div>
                    <p className="mt-1 text-xs text-muted-foreground">
                      Submitted{" "}
                      {new Date(req.requestedAt).toLocaleDateString("en-GB", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                      {req.completedAt && (
                        <>
                          {" "}&middot; Completed{" "}
                          {new Date(req.completedAt).toLocaleDateString("en-GB", {
                            day: "numeric",
                            month: "long",
                            year: "numeric",
                          })}
                        </>
                      )}
                    </p>
                  </div>
                  <div className="text-right">
                    {req.daysRemaining !== null && (
                      <p
                        className={`text-sm font-medium ${
                          req.daysRemaining <= 5
                            ? "text-warn"
                            : req.daysRemaining <= 14
                              ? "text-yellow-600"
                              : "text-muted-foreground"
                        }`}
                      >
                        {req.daysRemaining > 0
                          ? `${req.daysRemaining} day${req.daysRemaining !== 1 ? "s" : ""} remaining`
                          : "Overdue"}
                      </p>
                    )}
                    <p className="text-xs text-muted-foreground">
                      Deadline:{" "}
                      {new Date(req.deadline).toLocaleDateString("en-GB", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      })}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Processing time info */}
      <div className="mt-8 rounded-lg border border-border bg-muted p-4 text-sm text-muted-foreground">
        <p className="font-medium text-foreground">Processing times</p>
        <p className="mt-1">
          Under UK GDPR, we are required to respond to your request within{" "}
          <strong>one calendar month</strong>. In exceptional cases (complex or
          numerous requests), this may be extended by a further two months, but we
          will inform you within the first month if this is necessary.
        </p>
        <p className="mt-2">
          If you are not satisfied with our response, you have the right to lodge
          a complaint with the{" "}
          <a
            href="https://ico.org.uk/make-a-complaint/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:underline"
          >
            Information Commissioner&apos;s Office (ICO)
          </a>
          .
        </p>
      </div>
    </div>
  );
}
