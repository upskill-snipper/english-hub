"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

// ─── Types ──────────────────────────────────────────────────────────────

interface SubscriptionData {
  plan: "MONTHLY";
  status: "ACTIVE" | "CANCELLED" | "PAST_DUE" | "TRIALING";
  currentPeriodEnd: string;
  currentPeriodStart: string;
  cancelledAt: string | null;
  paymentCount: number;
  coolingOffWaived: boolean;
}

// ─── Subscription Management Page ───────────────────────────────────────

export default function SubscriptionPage() {
  const [subscription, setSubscription] = useState<SubscriptionData | null>(
    null
  );
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchSubscription();
  }, []);

  async function fetchSubscription() {
    try {
      const response = await fetch("/api/user/subscription");
      if (!response.ok) {
        if (response.status === 404) {
          setSubscription(null);
          setLoading(false);
          return;
        }
        throw new Error("Failed to fetch subscription");
      }
      const data = await response.json();
      setSubscription(data);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Failed to load subscription"
      );
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-muted flex items-center justify-center">
        <div className="animate-pulse text-muted-foreground">
          Loading subscription details...
        </div>
      </div>
    );
  }

  // No subscription
  if (!subscription) {
    return (
      <div className="min-h-screen bg-muted">
        <div className="max-w-2xl mx-auto px-4 py-16">
          <div className="bg-card rounded-2xl shadow-sm border border-border p-8 text-center">
            <h1 className="text-2xl font-bold text-foreground mb-4">
              No Active Subscription
            </h1>
            <p className="text-muted-foreground mb-8">
              You don&apos;t currently have an active subscription. Subscribe to
              get access to AI-powered essay feedback and exam preparation tools.
            </p>
            <Link
              href="/pricing"
              className="inline-block bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              View Plans
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const periodEnd = new Date(subscription.currentPeriodEnd);
  const isCancelled = subscription.cancelledAt !== null;
  const isTrialing = subscription.status === "TRIALING";
  const isPastDue = subscription.status === "PAST_DUE";

  const monthlyPrice = 9.99;
  const currentPrice = monthlyPrice;
  const billingCycle = "month";

  return (
    <div className="min-h-screen bg-muted">
      <div className="max-w-2xl mx-auto px-4 py-12">
        <h1 className="text-2xl font-bold text-foreground mb-8">
          Subscription Management
        </h1>

        {/* Status banner */}
        {isPastDue && (
          <div className="bg-red-950/20 border border-red-900/40 rounded-lg p-4 mb-6">
            <p className="text-sm text-red-400 font-medium">
              Your last payment failed. Please update your payment method to
              avoid losing access.
            </p>
          </div>
        )}

        {isCancelled && (
          <div className="bg-amber-950/20 border border-amber-900/40 rounded-lg p-4 mb-6">
            <p className="text-sm text-amber-400">
              Your subscription has been cancelled. You will retain access until{" "}
              <strong>{periodEnd.toLocaleDateString("en-GB")}</strong>.
            </p>
          </div>
        )}

        {isTrialing && (
          <div className="bg-blue-950/20 border border-blue-900/40 rounded-lg p-4 mb-6">
            <p className="text-sm text-blue-400">
              You are currently on a free trial. Your trial ends on{" "}
              <strong>{periodEnd.toLocaleDateString("en-GB")}</strong>.
              After that, you will be charged &pound;{currentPrice.toFixed(2)}/
              {billingCycle}.
            </p>
          </div>
        )}

        {/* Current plan card */}
        <div className="bg-card rounded-2xl shadow-sm border border-border p-8 mb-6">
          <div className="flex items-start justify-between mb-6">
            <div>
              <h2 className="text-lg font-semibold text-foreground">
                Monthly Plan
              </h2>
              <p className="text-sm text-muted-foreground mt-1">
                {isTrialing
                  ? "Free trial"
                  : isCancelled
                    ? "Cancelled"
                    : "Active"}
              </p>
            </div>
            <span
              className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                isPastDue
                  ? "bg-red-950/30 text-red-300"
                  : isCancelled
                    ? "bg-muted text-foreground"
                    : isTrialing
                      ? "bg-blue-950/30 text-blue-800"
                      : "bg-green-950/30 text-green-300"
              }`}
            >
              {isPastDue
                ? "Past Due"
                : isCancelled
                  ? "Cancelled"
                  : isTrialing
                    ? "Trial"
                    : "Active"}
            </span>
          </div>

          <div className="space-y-4">
            <div className="flex justify-between py-3 border-b border-border">
              <span className="text-sm text-muted-foreground">
                {isCancelled ? "Access ends" : "Next billing date"}
              </span>
              <span className="text-sm font-medium text-foreground">
                {periodEnd.toLocaleDateString("en-GB", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </span>
            </div>

            {!isCancelled && (
              <div className="flex justify-between py-3 border-b border-border">
                <span className="text-sm text-muted-foreground">
                  {isTrialing ? "Amount after trial" : "Billing amount"}
                </span>
                <span className="text-sm font-medium text-foreground">
                  &pound;{currentPrice.toFixed(2)}/{billingCycle}
                </span>
              </div>
            )}

            <div className="flex justify-between py-3 border-b border-border">
              <span className="text-sm text-muted-foreground">Payments made</span>
              <span className="text-sm font-medium text-foreground">
                {subscription.paymentCount}
              </span>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="space-y-4">

          {/* Cancel subscription */}
          {!isCancelled && (
            <div className="bg-card rounded-2xl shadow-sm border border-border p-6">
              <h3 className="text-base font-semibold text-foreground mb-2">
                Cancel Subscription
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                You can cancel your subscription at any time. You will retain
                access until the end of your current billing period.
              </p>
              <Link
                href="/dashboard/subscription/cancel"
                className="inline-block px-4 py-2 text-sm font-medium rounded-lg border border-border text-foreground hover:bg-muted transition-colors"
              >
                Cancel Subscription
              </Link>
            </div>
          )}

          {/* Resubscribe */}
          {isCancelled && (
            <div className="bg-card rounded-2xl shadow-sm border border-border p-6 text-center">
              <h3 className="text-base font-semibold text-foreground mb-2">
                Want to come back?
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                You can resubscribe at any time to regain full access.
              </p>
              <Link
                href="/pricing"
                className="inline-block px-6 py-2 text-sm font-medium rounded-lg bg-primary text-white hover:bg-primary/90 transition-colors"
              >
                View Plans
              </Link>
            </div>
          )}
        </div>

        {/* Error */}
        {error && (
          <div className="mt-6 bg-red-950/20 border border-red-900/40 rounded-lg p-4">
            <p className="text-sm text-red-400">{error}</p>
          </div>
        )}
      </div>
    </div>
  );
}
