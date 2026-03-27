"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

const REASON_OPTIONS = [
  { value: "", label: "Select a reason..." },
  { value: "inaccurate", label: "Feedback seems inaccurate" },
  { value: "unclear", label: "I don't understand the feedback" },
  { value: "unfair-score", label: "Score seems unfair" },
  { value: "missed-points", label: "AI missed important points" },
  { value: "other", label: "Other" },
] as const;

const DETAIL_MAX = 2000;
const SELF_ASSESSMENT_MAX = 1500;

interface Essay {
  id: string;
  title: string;
}

interface SubmissionResult {
  referenceNumber: string;
  estimatedResponse: string;
}

export default function ReviewRequestPage() {
  const searchParams = useSearchParams();
  const preselectedEssayId = searchParams.get("essayId") ?? "";

  const [essays, setEssays] = useState<Essay[]>([]);
  const [essayId, setEssayId] = useState(preselectedEssayId);
  const [reason, setReason] = useState("");
  const [detail, setDetail] = useState("");
  const [selfAssessment, setSelfAssessment] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<SubmissionResult | null>(null);

  // Fetch user's essays for the dropdown
  useEffect(() => {
    async function fetchEssays() {
      try {
        const res = await fetch("/api/essays");
        if (res.ok) {
          const data = await res.json();
          setEssays(data.essays ?? []);
        }
      } catch {
        // Silently fail — user can still type an ID manually
      }
    }
    fetchEssays();
  }, []);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);

    if (!essayId) {
      setError("Please select an essay to review.");
      return;
    }
    if (!reason) {
      setError("Please select a reason for your review request.");
      return;
    }
    if (!detail.trim()) {
      setError("Please provide some detail about your request.");
      return;
    }

    setSubmitting(true);

    try {
      const res = await fetch("/api/review", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          essayId,
          reason,
          detail: detail.trim(),
          selfAssessment: selfAssessment.trim() || undefined,
        }),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => null);
        throw new Error(body?.error ?? "Something went wrong. Please try again.");
      }

      const data = await res.json();
      setResult({
        referenceNumber: data.referenceNumber,
        estimatedResponse: data.estimatedResponse,
      });
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
    } finally {
      setSubmitting(false);
    }
  }

  // ---------- Confirmation screen ----------
  if (result) {
    return (
      <div className="mx-auto max-w-2xl px-4 py-12">
        <div className="card text-center">
          {/* Checkmark */}
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-green-100 text-green-600">
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
            Review Request Submitted
          </h1>
          <p className="mt-2 text-gray-600">
            Your request has been received. A qualified reviewer will look at
            your essay and the AI feedback.
          </p>

          <div className="mt-6 rounded-lg bg-gray-50 p-4 text-sm">
            <p className="text-gray-500">Your reference number</p>
            <p className="mt-1 text-lg font-mono font-semibold text-primary">
              {result.referenceNumber}
            </p>
          </div>

          <div className="mt-4 rounded-lg bg-accent/5 border border-accent/20 p-4 text-sm text-gray-700">
            <p>
              <strong>Estimated response time:</strong>{" "}
              {result.estimatedResponse}
            </p>
            <p className="mt-1 text-xs text-gray-500">
              We&apos;ll notify you by email when the review is complete.
            </p>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link href="/dashboard" className="btn-primary text-sm">
              Back to Dashboard
            </Link>
            <Link
              href={`/dashboard/review/${result.referenceNumber}`}
              className="btn-outline text-sm"
            >
              Track This Request
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // ---------- Form ----------
  return (
    <div className="mx-auto max-w-2xl px-4 py-12">
      <div className="mb-2">
        <Link
          href="/dashboard"
          className="text-sm text-gray-500 hover:text-primary transition-colors"
        >
          &larr; Back to Dashboard
        </Link>
      </div>

      <h1 className="text-2xl font-semibold text-primary">
        Request a Human Review
      </h1>
      <p className="mt-2 text-sm text-gray-600">
        If you&apos;re unsure about the AI&apos;s feedback on your essay, you
        can ask a real person to take a look. This is completely normal and
        it&apos;s your right — not a complaint.
      </p>

      {/* Rights notice */}
      <div className="mt-4 rounded-lg border border-primary/20 bg-primary/5 p-4 text-sm text-gray-700">
        <p className="font-medium text-primary">Your rights</p>
        <p className="mt-1">
          Under UK data protection law (UK GDPR &amp; the Data Use and Access
          Act 2025), you have the right to request human intervention when
          decisions are made by automated systems. This is that right in action
          — it&apos;s not a complaint, and there&apos;s no wrong reason to use
          it.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="mt-8 space-y-6">
        {/* Essay selector */}
        <div>
          <label htmlFor="essayId" className="block text-sm font-medium text-gray-700">
            Which essay? <span className="text-red-500">*</span>
          </label>
          <select
            id="essayId"
            value={essayId}
            onChange={(e) => setEssayId(e.target.value)}
            className="input-field mt-1"
            required
          >
            <option value="">Select an essay...</option>
            {essays.map((essay) => (
              <option key={essay.id} value={essay.id}>
                {essay.title}
              </option>
            ))}
            {/* If preselected ID isn't in the list, still show it */}
            {preselectedEssayId &&
              !essays.find((e) => e.id === preselectedEssayId) && (
                <option value={preselectedEssayId}>
                  Essay {preselectedEssayId}
                </option>
              )}
          </select>
        </div>

        {/* Reason */}
        <div>
          <label htmlFor="reason" className="block text-sm font-medium text-gray-700">
            Why are you requesting a review? <span className="text-red-500">*</span>
          </label>
          <select
            id="reason"
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            className="input-field mt-1"
            required
          >
            {REASON_OPTIONS.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>

        {/* Detail */}
        <div>
          <label htmlFor="detail" className="block text-sm font-medium text-gray-700">
            Tell us more <span className="text-red-500">*</span>
          </label>
          <p className="mt-0.5 text-xs text-gray-500">
            What specifically would you like a human to look at?
          </p>
          <textarea
            id="detail"
            value={detail}
            onChange={(e) =>
              setDetail(e.target.value.slice(0, DETAIL_MAX))
            }
            rows={5}
            className="input-field mt-1 resize-y"
            placeholder="e.g. The AI said my conclusion was weak, but I think I addressed the question clearly..."
            required
          />
          <p
            className={`mt-1 text-right text-xs ${
              detail.length >= DETAIL_MAX ? "text-red-500 font-medium" : "text-gray-500"
            }`}
          >
            {detail.length}/{DETAIL_MAX}
          </p>
        </div>

        {/* Self-assessment (optional) */}
        <div>
          <label
            htmlFor="selfAssessment"
            className="block text-sm font-medium text-gray-700"
          >
            Your own thoughts on your essay{" "}
            <span className="text-gray-500 font-normal">(optional)</span>
          </label>
          <p className="mt-0.5 text-xs text-gray-500">
            If you&apos;d like, share what you think you did well or what you
            were trying to achieve. This helps the reviewer understand your
            perspective.
          </p>
          <textarea
            id="selfAssessment"
            value={selfAssessment}
            onChange={(e) =>
              setSelfAssessment(e.target.value.slice(0, SELF_ASSESSMENT_MAX))
            }
            rows={4}
            className="input-field mt-1 resize-y"
            placeholder="e.g. I was trying to argue that Lady Macbeth is more ambitious than Macbeth..."
          />
          <p
            className={`mt-1 text-right text-xs ${
              selfAssessment.length >= SELF_ASSESSMENT_MAX
                ? "text-red-500 font-medium"
                : "text-gray-500"
            }`}
          >
            {selfAssessment.length}/{SELF_ASSESSMENT_MAX}
          </p>
        </div>

        {/* Error */}
        {error && (
          <div
            role="alert"
            className="rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-700"
          >
            {error}
          </div>
        )}

        {/* Submit */}
        <button
          type="submit"
          disabled={submitting}
          className="btn-primary w-full"
        >
          {submitting ? "Submitting..." : "Submit Review Request"}
        </button>
      </form>
    </div>
  );
}
