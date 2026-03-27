"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";

type ReviewStage = "submitted" | "under-review" | "completed";

interface TimelineEvent {
  stage: ReviewStage;
  label: string;
  timestamp: string | null;
  description?: string;
}

interface ReviewData {
  referenceNumber: string;
  essayTitle: string;
  reason: string;
  detail: string;
  selfAssessment?: string;
  status: ReviewStage;
  reviewerResponse?: string;
  timeline: TimelineEvent[];
  createdAt: string;
}

const STAGE_ORDER: ReviewStage[] = ["submitted", "under-review", "completed"];

function stageIndex(stage: ReviewStage): number {
  return STAGE_ORDER.indexOf(stage);
}

function StageIcon({
  stage,
  currentStage,
}: {
  stage: ReviewStage;
  currentStage: ReviewStage;
}) {
  const current = stageIndex(currentStage);
  const this_ = stageIndex(stage);

  if (this_ < current) {
    // Completed
    return (
      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-500 text-white">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={3}
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      </div>
    );
  }

  if (this_ === current) {
    // Active
    return (
      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-accent text-white">
        <div className="h-2.5 w-2.5 rounded-full bg-white animate-pulse" />
      </div>
    );
  }

  // Pending
  return (
    <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-gray-300 bg-white">
      <div className="h-2 w-2 rounded-full bg-gray-300" />
    </div>
  );
}

export default function ReviewStatusPage() {
  const params = useParams();
  const id = params.id as string;

  const [review, setReview] = useState<ReviewData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchReview() {
      try {
        const res = await fetch(`/api/review/${encodeURIComponent(id)}`);
        if (!res.ok) {
          if (res.status === 404) {
            setError("Review request not found. Please check your reference number.");
          } else {
            setError("Unable to load review details. Please try again later.");
          }
          return;
        }
        const data = await res.json();
        setReview(data);
      } catch {
        setError("Unable to connect. Please check your internet and try again.");
      } finally {
        setLoading(false);
      }
    }
    fetchReview();
  }, [id]);

  if (loading) {
    return (
      <div className="mx-auto max-w-2xl px-4 py-12">
        <div className="card animate-pulse space-y-4">
          <div className="h-6 w-48 rounded bg-gray-200" />
          <div className="h-4 w-full rounded bg-gray-100" />
          <div className="h-4 w-3/4 rounded bg-gray-100" />
        </div>
      </div>
    );
  }

  if (error || !review) {
    return (
      <div className="mx-auto max-w-2xl px-4 py-12">
        <div className="card text-center">
          <p className="text-gray-600">{error ?? "Review not found."}</p>
          <Link href="/dashboard" className="btn-primary mt-6 inline-block text-sm">
            Back to Dashboard
          </Link>
        </div>
      </div>
    );
  }

  const stageLabels: Record<ReviewStage, string> = {
    submitted: "Submitted",
    "under-review": "Under Review",
    completed: "Completed",
  };

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

      <h1 className="text-2xl font-semibold text-primary">Review Status</h1>
      <p className="mt-1 text-sm text-gray-500">
        Reference:{" "}
        <span className="font-mono font-medium text-gray-700">
          {review.referenceNumber}
        </span>
      </p>

      {/* ---------- Progress tracker ---------- */}
      <div className="card mt-6">
        <h2 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-6">
          Progress
        </h2>

        <div className="relative">
          {STAGE_ORDER.map((stage, idx) => {
            const event = review.timeline.find((t) => t.stage === stage);
            const isLast = idx === STAGE_ORDER.length - 1;

            return (
              <div key={stage} className="flex gap-4">
                {/* Vertical line + icon */}
                <div className="flex flex-col items-center">
                  <StageIcon stage={stage} currentStage={review.status} />
                  {!isLast && (
                    <div
                      className={`w-0.5 flex-1 my-1 ${
                        stageIndex(review.status) > idx
                          ? "bg-green-400"
                          : "bg-gray-200"
                      }`}
                    />
                  )}
                </div>

                {/* Content */}
                <div className={`pb-8 ${isLast ? "pb-0" : ""}`}>
                  <p
                    className={`text-sm font-medium ${
                      stageIndex(review.status) >= idx
                        ? "text-gray-900"
                        : "text-gray-500"
                    }`}
                  >
                    {stageLabels[stage]}
                  </p>
                  {event?.timestamp && (
                    <p className="mt-0.5 text-xs text-gray-500">
                      {new Date(event.timestamp).toLocaleDateString("en-GB", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </p>
                  )}
                  {event?.description && (
                    <p className="mt-1 text-sm text-gray-600">
                      {event.description}
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ---------- Reviewer response ---------- */}
      {review.status === "completed" && review.reviewerResponse && (
        <div className="card mt-6">
          <h2 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-3">
            Reviewer Response
          </h2>
          <div className="rounded-lg bg-primary/5 border border-primary/15 p-4 text-sm text-gray-800 leading-relaxed whitespace-pre-wrap">
            {review.reviewerResponse}
          </div>
        </div>
      )}

      {/* ---------- Your request details ---------- */}
      <div className="card mt-6">
        <h2 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-3">
          Your Request
        </h2>
        <dl className="space-y-3 text-sm">
          <div>
            <dt className="text-gray-500">Essay</dt>
            <dd className="mt-0.5 text-gray-800">{review.essayTitle}</dd>
          </div>
          <div>
            <dt className="text-gray-500">Reason</dt>
            <dd className="mt-0.5 text-gray-800">{review.reason}</dd>
          </div>
          <div>
            <dt className="text-gray-500">Details</dt>
            <dd className="mt-0.5 text-gray-800 whitespace-pre-wrap">
              {review.detail}
            </dd>
          </div>
          {review.selfAssessment && (
            <div>
              <dt className="text-gray-500">Your self-assessment</dt>
              <dd className="mt-0.5 text-gray-800 whitespace-pre-wrap">
                {review.selfAssessment}
              </dd>
            </div>
          )}
          <div>
            <dt className="text-gray-500">Submitted</dt>
            <dd className="mt-0.5 text-gray-800">
              {new Date(review.createdAt).toLocaleDateString("en-GB", {
                day: "numeric",
                month: "long",
                year: "numeric",
                hour: "2-digit",
                minute: "2-digit",
              })}
            </dd>
          </div>
        </dl>
      </div>

      {/* ---------- Timeline ---------- */}
      <div className="card mt-6">
        <h2 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-3">
          Timeline
        </h2>
        <ul className="space-y-3">
          {review.timeline
            .filter((e) => e.timestamp)
            .sort(
              (a, b) =>
                new Date(b.timestamp!).getTime() -
                new Date(a.timestamp!).getTime()
            )
            .map((event, idx) => (
              <li key={idx} className="flex gap-3 text-sm">
                <span className="shrink-0 text-xs text-gray-500 w-32">
                  {new Date(event.timestamp!).toLocaleDateString("en-GB", {
                    day: "numeric",
                    month: "short",
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </span>
                <span className="text-gray-700">
                  {event.label}
                  {event.description && (
                    <span className="text-gray-500">
                      {" "}
                      — {event.description}
                    </span>
                  )}
                </span>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}
