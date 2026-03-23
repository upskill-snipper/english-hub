"use client";

import { useState } from "react";
import Link from "next/link";

// ─── Types ──────────────────────────────────────────────────────────────

type CancelStep = 1 | 2 | 3 | 4;

const FEEDBACK_REASONS = [
  "Too expensive",
  "Not using it enough",
  "Found an alternative",
  "Missing features I need",
  "Finished my exams",
  "Technical issues",
  "Other",
] as const;

// ─── Cancellation Flow (4 steps, no dark patterns) ──────────────────────

export default function CancelSubscriptionPage() {
  const [step, setStep] = useState<CancelStep>(1);
  const [selectedReason, setSelectedReason] = useState<string>("");
  const [feedbackText, setFeedbackText] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [accessEndDate, setAccessEndDate] = useState<string | null>(null);

  async function handleConfirmCancel() {
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch("/api/stripe/cancel", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          reason: selectedReason || undefined,
          feedback: feedbackText || undefined,
          cancelImmediately: false,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to cancel subscription");
      }

      setAccessEndDate(data.accessEndsAt);
      setStep(4);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "An unexpected error occurred"
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-2xl mx-auto px-4 py-12">
        {/* Progress indicator */}
        <div className="mb-8">
          <div className="flex items-center justify-between max-w-md mx-auto">
            {[1, 2, 3, 4].map((s) => (
              <div key={s} className="flex items-center">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                    s <= step
                      ? "bg-[#1A5276] text-white"
                      : "bg-gray-200 text-gray-500"
                  }`}
                >
                  {s < step ? (
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2.5}
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                  ) : (
                    s
                  )}
                </div>
                {s < 4 && (
                  <div
                    className={`w-16 sm:w-24 h-0.5 mx-1 ${
                      s < step ? "bg-[#1A5276]" : "bg-gray-200"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Step 1: Review what you'll lose */}
        {step === 1 && (
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
            <h1 className="text-2xl font-bold text-gray-900 mb-2">
              Cancel Your Subscription
            </h1>
            <p className="text-gray-600 mb-8">
              Here is what will change if you cancel:
            </p>

            <div className="space-y-4 mb-8">
              {[
                "AI-powered essay feedback on unlimited submissions",
                "Detailed grammar, structure, and vocabulary analysis",
                "Progress tracking and revision insights",
                "Human review request access",
                "Exam preparation resources and tools",
              ].map((feature, i) => (
                <div key={i} className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>

            <p className="text-sm text-gray-600 mb-8">
              Your access will continue until the end of your current billing
              period. Your essays and data will be retained in accordance with
              our data retention policy.
            </p>

            {/* Equal-weight buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/dashboard/subscription"
                className="flex-1 py-3 px-4 text-center rounded-lg font-medium border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors"
              >
                Keep Subscription
              </Link>
              <button
                onClick={() => setStep(2)}
                className="flex-1 py-3 px-4 rounded-lg font-medium border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors"
              >
                Continue Cancellation
              </button>
            </div>
          </div>
        )}

        {/* Step 2: Optional feedback (skippable) */}
        {step === 2 && (
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
            <h1 className="text-2xl font-bold text-gray-900 mb-2">
              Quick Feedback (Optional)
            </h1>
            <p className="text-gray-600 mb-6">
              This step is entirely optional. Your feedback helps us improve.
            </p>

            <div className="space-y-3 mb-6">
              {FEEDBACK_REASONS.map((reason) => (
                <label
                  key={reason}
                  className="flex items-center gap-3 cursor-pointer"
                >
                  <input
                    type="radio"
                    name="reason"
                    value={reason}
                    checked={selectedReason === reason}
                    onChange={(e) => setSelectedReason(e.target.value)}
                    className="h-4 w-4 text-[#1A5276] focus:ring-[#1A5276] border-gray-300"
                  />
                  <span className="text-gray-700">{reason}</span>
                </label>
              ))}
            </div>

            <div className="mb-8">
              <label
                htmlFor="feedback"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Anything else you&apos;d like to share? (Optional)
              </label>
              <textarea
                id="feedback"
                rows={3}
                value={feedbackText}
                onChange={(e) => setFeedbackText(e.target.value)}
                placeholder="Your thoughts..."
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-[#1A5276] focus:border-[#1A5276] resize-none"
                maxLength={2000}
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => setStep(1)}
                className="flex-1 py-3 px-4 rounded-lg font-medium border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors"
              >
                Back
              </button>
              <button
                onClick={() => setStep(3)}
                className="flex-1 py-3 px-4 rounded-lg font-medium border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors"
              >
                Skip & Continue
              </button>
              <button
                onClick={() => setStep(3)}
                className="flex-1 py-3 px-4 rounded-lg font-medium border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors"
              >
                Submit & Continue
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Confirm cancellation */}
        {step === 3 && (
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
            <h1 className="text-2xl font-bold text-gray-900 mb-2">
              Confirm Cancellation
            </h1>
            <p className="text-gray-600 mb-6">
              Please review the details below before confirming.
            </p>

            <div className="bg-gray-50 rounded-xl p-6 mb-6 space-y-3">
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">What happens next</span>
                <span className="text-sm text-gray-900 font-medium">
                  Access continues until period end
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Future charges</span>
                <span className="text-sm text-gray-900 font-medium">
                  No further charges
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Your data</span>
                <span className="text-sm text-gray-900 font-medium">
                  Retained per privacy policy
                </span>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-8">
              <p className="text-sm text-blue-800">
                <strong>Cooling-off information:</strong> If you subscribed
                within the last 14 days and did not waive your cooling-off
                rights, you may be entitled to a full refund under consumer
                protection regulations. Contact us at{" "}
                <a
                  href="mailto:support@theenglishhub.co.uk"
                  className="underline"
                >
                  support@theenglishhub.co.uk
                </a>{" "}
                for refund requests.
              </p>
            </div>

            {error && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
                <p className="text-sm text-red-700">{error}</p>
              </div>
            )}

            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => setStep(2)}
                className="flex-1 py-3 px-4 rounded-lg font-medium border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors"
              >
                Go Back
              </button>
              <button
                onClick={handleConfirmCancel}
                disabled={isSubmitting}
                className="flex-1 py-3 px-4 rounded-lg font-medium border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Cancelling..." : "Confirm Cancellation"}
              </button>
            </div>
          </div>
        )}

        {/* Step 4: Confirmation */}
        {step === 4 && (
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg
                className="w-8 h-8 text-green-600"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12.75l6 6 9-13.5"
                />
              </svg>
            </div>

            <h1 className="text-2xl font-bold text-gray-900 mb-2">
              Subscription Cancelled
            </h1>
            <p className="text-gray-600 mb-6">
              Your subscription has been cancelled successfully.
            </p>

            <div className="bg-gray-50 rounded-xl p-6 mb-8 text-left space-y-3">
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Access until</span>
                <span className="text-sm text-gray-900 font-medium">
                  {accessEndDate
                    ? new Date(accessEndDate).toLocaleDateString("en-GB", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })
                    : "End of current billing period"}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Your essays</span>
                <span className="text-sm text-gray-900 font-medium">
                  Saved and accessible
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Your data</span>
                <span className="text-sm text-gray-900 font-medium">
                  Retained per privacy policy
                </span>
              </div>
            </div>

            <p className="text-sm text-gray-500 mb-8">
              You can request a copy or deletion of your data at any time from
              your{" "}
              <Link
                href="/dashboard/settings"
                className="text-[#1A5276] underline"
              >
                account settings
              </Link>
              .
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/dashboard"
                className="py-3 px-6 rounded-lg font-medium border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors"
              >
                Return to Dashboard
              </Link>
              <Link
                href="/pricing"
                className="py-3 px-6 rounded-lg font-medium border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors"
              >
                Resubscribe
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
