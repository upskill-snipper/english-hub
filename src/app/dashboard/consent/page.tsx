"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";

// ─── Types ──────────────────────────────────────────────────────────────

interface ConsentRecord {
  id: string;
  consentType: string;
  version: string;
  granted: boolean;
  grantedAt: string;
  withdrawnAt: string | null;
  method: string;
  isEssential: boolean;
}

interface HistoryRecord {
  id: string;
  consentType: string;
  version: string;
  granted: boolean;
  grantedAt: string;
  withdrawnAt: string | null;
  method: string;
}

// ─── Display labels ─────────────────────────────────────────────────────

const CONSENT_LABELS: Record<string, { label: string; description: string }> = {
  TERMS: {
    label: "Terms & Conditions",
    description: "Agreement to the platform terms of service.",
  },
  PRIVACY: {
    label: "Privacy Policy",
    description: "Acknowledgement of how your personal data is processed.",
  },
  AI_PROCESSING: {
    label: "AI Essay Analysis",
    description:
      "Consent for AI-powered analysis of your essays to provide feedback.",
  },
  DATA_TRANSFER: {
    label: "International Data Transfer",
    description:
      "Consent for transfer of data outside the UK (required for Qatar-based users).",
  },
  MARKETING: {
    label: "Marketing Communications",
    description: "Receive promotional emails and product updates.",
  },
  COOLING_OFF_WAIVER: {
    label: "Cooling-Off Period Waiver",
    description:
      "Waiver of the 14-day cooling-off period for immediate service access.",
  },
  COOKIE_ANALYTICS: {
    label: "Analytics Cookies",
    description:
      "Allow analytics cookies to help us understand how you use the site.",
  },
  COOKIE_MARKETING: {
    label: "Marketing Cookies",
    description: "Allow marketing cookies for personalised advertising.",
  },
};

function getLabel(type: string): string {
  return CONSENT_LABELS[type]?.label ?? type;
}

function getDescription(type: string): string {
  return CONSENT_LABELS[type]?.description ?? "";
}

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

// ─── Component ──────────────────────────────────────────────────────────

export default function ConsentManagementPage() {
  const [consents, setConsents] = useState<ConsentRecord[]>([]);
  const [history, setHistory] = useState<HistoryRecord[]>([]);
  const [showHistory, setShowHistory] = useState(false);
  const [loading, setLoading] = useState(true);
  const [withdrawing, setWithdrawing] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const fetchConsents = useCallback(async () => {
    try {
      const res = await fetch("/api/consent");
      if (!res.ok) throw new Error("Failed to load consents");
      const data = await res.json();
      setConsents(data.consents);
    } catch {
      setError("Could not load your consent records. Please try again.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchConsents();
  }, [fetchConsents]);

  async function fetchHistory() {
    try {
      const res = await fetch("/api/consent/history");
      if (!res.ok) throw new Error("Failed to load history");
      const data = await res.json();
      setHistory(data.history);
      setShowHistory(true);
    } catch {
      setError("Could not load consent history.");
    }
  }

  async function handleWithdraw(consentType: string) {
    const confirmed = window.confirm(
      `Are you sure you want to withdraw your "${getLabel(consentType)}" consent? This action will be recorded.`
    );
    if (!confirmed) return;

    setWithdrawing(consentType);
    setError(null);
    setSuccess(null);

    try {
      const res = await fetch("/api/consent", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ consentType }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => null);
        throw new Error(data?.error ?? "Failed to withdraw consent");
      }

      setSuccess(`"${getLabel(consentType)}" consent has been withdrawn.`);
      await fetchConsents();
      if (showHistory) await fetchHistory();
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Failed to withdraw consent."
      );
    } finally {
      setWithdrawing(null);
    }
  }

  function downloadConsentRecord() {
    const data = {
      exportedAt: new Date().toISOString(),
      activeConsents: consents,
      fullHistory: history.length > 0 ? history : undefined,
    };

    const blob = new Blob([JSON.stringify(data, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `consent-record-${new Date().toISOString().split("T")[0]}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }

  // ─── Loading state ─────────────────────────────────────────────────

  if (loading) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-12">
        <p className="text-muted-foreground">Loading your consent records...</p>
      </div>
    );
  }

  // ─── Render ─────────────────────────────────────────────────────────

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
        Manage Your Consents
      </h1>
      <p className="mt-2 text-sm text-muted-foreground">
        View and manage the consents you have given. Under UK GDPR, you have the
        right to withdraw optional consents at any time. Essential consents are
        required for the service to function.
      </p>

      {/* Alerts */}
      {error && (
        <div
          role="alert"
          className="mt-4 rounded-lg border border-red-500/30 bg-red-950/20 p-3 text-sm text-red-400"
        >
          {error}
        </div>
      )}
      {success && (
        <div
          role="status"
          className="mt-4 rounded-lg border border-green-500/30 bg-green-950/20 p-3 text-sm text-green-400"
        >
          {success}
        </div>
      )}

      {/* Active consents */}
      <section className="mt-8">
        <h2 className="text-lg font-medium text-foreground">Active Consents</h2>

        {consents.length === 0 ? (
          <p className="mt-4 text-sm text-muted-foreground">
            No active consents found.
          </p>
        ) : (
          <div className="mt-4 space-y-4">
            {consents.map((consent) => (
              <div
                key={consent.id}
                className="rounded-lg border border-border bg-card p-4 shadow-sm"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <h3 className="font-medium text-foreground">
                        {getLabel(consent.consentType)}
                      </h3>
                      {consent.isEssential ? (
                        <span className="inline-flex items-center rounded-full bg-blue-950/20 px-2 py-0.5 text-xs font-medium text-blue-400">
                          Essential
                        </span>
                      ) : (
                        <span className="inline-flex items-center rounded-full bg-muted px-2 py-0.5 text-xs font-medium text-muted-foreground">
                          Optional
                        </span>
                      )}
                    </div>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {getDescription(consent.consentType)}
                    </p>
                    <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted-foreground">
                      <span>
                        Granted: {formatDate(consent.grantedAt)}
                      </span>
                      <span>Policy version: {consent.version}</span>
                      <span>Method: {consent.method.replace("_", " ").toLowerCase()}</span>
                    </div>
                  </div>

                  {!consent.isEssential && (
                    <button
                      onClick={() => handleWithdraw(consent.consentType)}
                      disabled={withdrawing === consent.consentType}
                      className="ml-4 shrink-0 rounded-md border border-red-500/30 bg-card px-3 py-1.5 text-sm font-medium text-red-600 hover:bg-red-950/20 disabled:opacity-50 transition-colors"
                    >
                      {withdrawing === consent.consentType
                        ? "Withdrawing..."
                        : "Withdraw"}
                    </button>
                  )}
                </div>

                {consent.isEssential && (
                  <p className="mt-2 text-xs text-muted-foreground italic">
                    This consent is required for the service to function. To
                    withdraw it, you must{" "}
                    <Link
                      href="/dashboard/privacy"
                      className="text-primary underline"
                    >
                      request account deletion
                    </Link>
                    .
                  </p>
                )}
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Actions */}
      <section className="mt-8 flex flex-wrap gap-3">
        <button
          onClick={showHistory ? () => setShowHistory(false) : fetchHistory}
          className="btn-outline text-sm"
        >
          {showHistory ? "Hide Full History" : "View Full History"}
        </button>

        <button
          onClick={async () => {
            if (history.length === 0) await fetchHistory();
            downloadConsentRecord();
          }}
          className="btn-outline text-sm"
        >
          Download Consent Record (JSON)
        </button>
      </section>

      {/* Consent history */}
      {showHistory && (
        <section className="mt-8">
          <h2 className="text-lg font-medium text-foreground">
            Full Consent History
          </h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Complete audit trail of all consent changes, in chronological order.
          </p>

          {history.length === 0 ? (
            <p className="mt-4 text-sm text-muted-foreground">No history found.</p>
          ) : (
            <div className="mt-4 overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border text-left text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    <th className="px-3 py-2">Type</th>
                    <th className="px-3 py-2">Action</th>
                    <th className="px-3 py-2">Version</th>
                    <th className="px-3 py-2">Date</th>
                    <th className="px-3 py-2">Method</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {history.map((record) => (
                    <tr key={record.id} className="hover:bg-muted">
                      <td className="px-3 py-2 font-medium text-foreground">
                        {getLabel(record.consentType)}
                      </td>
                      <td className="px-3 py-2">
                        {record.granted ? (
                          <span className="text-green-600">Granted</span>
                        ) : (
                          <span className="text-red-600">Withdrawn</span>
                        )}
                      </td>
                      <td className="px-3 py-2 text-muted-foreground">
                        {record.version}
                      </td>
                      <td className="px-3 py-2 text-muted-foreground">
                        {formatDate(record.grantedAt)}
                      </td>
                      <td className="px-3 py-2 text-muted-foreground">
                        {record.method.replace("_", " ").toLowerCase()}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </section>
      )}

      {/* Rights notice */}
      <section className="mt-10 rounded-lg border border-primary/20 bg-primary/5 p-4 text-sm text-foreground">
        <p className="font-medium text-primary">Your data rights</p>
        <p className="mt-1">
          Under UK GDPR, you can withdraw optional consents at any time without
          affecting the lawfulness of processing carried out before withdrawal.
          Essential consents (Terms, Privacy Policy, AI Processing) are required
          for the service to operate. If you wish to withdraw these, you can
          request account deletion from your privacy settings.
        </p>
      </section>
    </div>
  );
}
