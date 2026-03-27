"use client";

import { useState } from "react";
import Link from "next/link";

interface HumanReviewButtonProps {
  essayId?: string;
}

export function HumanReviewButton({ essayId }: HumanReviewButtonProps) {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  return (
    <div
      role="complementary"
      aria-label="Request human review"
      className="mt-6 rounded-xl border border-accent/30 bg-accent/5 p-5"
    >
      <div className="flex items-start gap-4">
        {/* Friendly icon */}
        <div className="hidden sm:flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            />
          </svg>
        </div>

        <div className="flex-1">
          <p className="text-sm font-medium text-gray-800">
            Not sure about the AI feedback? You can ask a real person to review
            it.
          </p>
          <p className="mt-1 text-xs text-gray-500">
            This is your right under UK data protection law — it&apos;s not a
            complaint, and there&apos;s no wrong reason to ask.
          </p>

          <div className="mt-3 flex flex-wrap items-center gap-3">
            <Link
              href={
                essayId
                  ? `/dashboard/review/request?essayId=${essayId}`
                  : "/dashboard/review/request"
              }
              className="btn-accent text-xs px-4 py-2"
            >
              Request Human Review
            </Link>
            <button
              type="button"
              onClick={() => setDismissed(true)}
              className="text-xs text-gray-500 hover:text-gray-600 transition-colors"
            >
              Dismiss
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
