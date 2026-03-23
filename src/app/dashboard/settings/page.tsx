"use client";

import { useEffect, useState, useCallback } from "react";
import Link from "next/link";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Toggle } from "@/components/ui/Toggle";
import { Modal } from "@/components/ui/Modal";
import { ToastProvider, useToast } from "@/components/ui/Toast";

// ─── Inline wrappers ────────────────────────────────────────────────────

/** Input with label, error, and helpText support wrapping the base shadcn Input */
function LabeledInput({
  label,
  error,
  helpText,
  id,
  className,
  ...props
}: React.ComponentProps<typeof Input> & {
  label?: string;
  error?: string;
  helpText?: string;
}) {
  const inputId = id ?? label?.toLowerCase().replace(/\s+/g, "-");
  return (
    <div className="space-y-1.5">
      {label && (
        <Label htmlFor={inputId} className="text-sm font-medium text-gray-700">
          {label}
        </Label>
      )}
      <Input
        id={inputId}
        aria-invalid={!!error}
        className={className}
        {...props}
      />
      {error && <p className="text-xs text-destructive">{error}</p>}
      {!error && helpText && (
        <p className="text-xs text-muted-foreground">{helpText}</p>
      )}
    </div>
  );
}

/** Button wrapper that adds a loading spinner and disables while loading */
function LoadingButton({
  loading,
  disabled,
  children,
  ...props
}: React.ComponentProps<typeof Button> & { loading?: boolean }) {
  return (
    <Button disabled={disabled || loading} {...props}>
      {loading && (
        <svg
          className="mr-2 h-4 w-4 animate-spin"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
          />
        </svg>
      )}
      {children}
    </Button>
  );
}

// ─── Types ──────────────────────────────────────────────────────────────

interface UserProfile {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  age: number;
  isMinor: boolean;
  school: string | null;
  country: string;
  createdAt: string;
}

interface BillingEntry {
  id: string;
  date: string;
  description: string;
  amount: string;
  status: "paid" | "pending" | "failed";
}

interface SubscriptionInfo {
  plan: string;
  status: string;
  nextBillingDate: string | null;
}

// ─── Mock data ──────────────────────────────────────────────────────────

const MOCK_SUBSCRIPTION: SubscriptionInfo = {
  plan: "Monthly",
  status: "Active",
  nextBillingDate: "2026-04-22",
};

const MOCK_BILLING: BillingEntry[] = [
  {
    id: "inv_1",
    date: "2026-03-22",
    description: "Monthly plan",
    amount: "\u00a34.99",
    status: "paid",
  },
  {
    id: "inv_2",
    date: "2026-02-22",
    description: "Monthly plan",
    amount: "\u00a34.99",
    status: "paid",
  },
  {
    id: "inv_3",
    date: "2026-01-22",
    description: "Monthly plan",
    amount: "\u00a34.99",
    status: "paid",
  },
];

// ─── Country labels ─────────────────────────────────────────────────────

const COUNTRY_LABELS: Record<string, string> = {
  UK: "United Kingdom",
  QA: "Qatar",
  OTHER: "Other",
};

// ─── Password requirements helper ───────────────────────────────────────

interface PasswordCheck {
  label: string;
  met: boolean;
}

function getPasswordChecks(password: string): PasswordCheck[] {
  return [
    { label: "At least 8 characters", met: password.length >= 8 },
    { label: "One uppercase letter", met: /[A-Z]/.test(password) },
    { label: "One lowercase letter", met: /[a-z]/.test(password) },
    { label: "One number", met: /[0-9]/.test(password) },
  ];
}

// ═══════════════════════════════════════════════════════════════════════
// Profile Tab
// ═══════════════════════════════════════════════════════════════════════

function ProfileTab({
  profile,
  onProfileUpdated,
}: {
  profile: UserProfile;
  onProfileUpdated: (p: UserProfile) => void;
}) {
  const { toast } = useToast();
  const [firstName, setFirstName] = useState(profile.firstName);
  const [lastName, setLastName] = useState(profile.lastName);
  const [school, setSchool] = useState(profile.school ?? "");
  const [saving, setSaving] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const isDirty =
    firstName !== profile.firstName ||
    lastName !== profile.lastName ||
    (school || null) !== profile.school;

  async function handleSave(e: React.FormEvent) {
    e.preventDefault();
    setErrors({});

    if (!firstName.trim()) {
      setErrors({ firstName: "First name is required" });
      return;
    }
    if (!lastName.trim()) {
      setErrors({ lastName: "Last name is required" });
      return;
    }

    setSaving(true);
    try {
      const res = await fetch("/api/user/profile", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: firstName.trim(),
          lastName: lastName.trim(),
          school: school.trim() || null,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        if (data.errors) {
          const flat: Record<string, string> = {};
          for (const [key, msgs] of Object.entries(data.errors)) {
            flat[key] = (msgs as string[])[0];
          }
          setErrors(flat);
        } else {
          toast("error", data.message || "Failed to save profile.");
        }
        return;
      }

      onProfileUpdated({
        ...profile,
        firstName: data.user.firstName,
        lastName: data.user.lastName,
        school: data.user.school,
      });
      toast("success", "Profile updated successfully.");
    } catch {
      toast("error", "Something went wrong. Please try again.");
    } finally {
      setSaving(false);
    }
  }

  return (
    <form onSubmit={handleSave} className="space-y-6 max-w-lg">
      <div className="grid gap-4 sm:grid-cols-2">
        <LabeledInput
          label="First name"
          required
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          error={errors.firstName}
          maxLength={50}
        />
        <LabeledInput
          label="Last name"
          required
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          error={errors.lastName}
          maxLength={50}
        />
      </div>

      <LabeledInput
        label="School"
        value={school}
        onChange={(e) => setSchool(e.target.value)}
        helpText="Optional"
        maxLength={200}
      />

      <div className="space-y-3">
        <div>
          <p className="text-sm font-medium text-gray-700">Email</p>
          <p className="mt-1 text-sm text-gray-500">{profile.email}</p>
          <p className="text-xs text-gray-400 mt-0.5">
            Contact support to change your email address.
          </p>
        </div>

        <div className="grid gap-3 sm:grid-cols-3">
          <div>
            <p className="text-sm font-medium text-gray-700">Age</p>
            <p className="mt-1 text-sm text-gray-500">{profile.age}</p>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-700">Minor status</p>
            <p className="mt-1 text-sm text-gray-500">
              {profile.isMinor ? (
                <span className="inline-flex items-center rounded-full bg-yellow-100 px-2.5 py-0.5 text-xs font-medium text-yellow-800">
                  Under 18
                </span>
              ) : (
                <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                  Adult
                </span>
              )}
            </p>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-700">Country</p>
            <p className="mt-1 text-sm text-gray-500">
              {COUNTRY_LABELS[profile.country] ?? profile.country}
            </p>
          </div>
        </div>
      </div>

      <LoadingButton type="submit" loading={saving} disabled={!isDirty}>
        Save changes
      </LoadingButton>
    </form>
  );
}

// ═══════════════════════════════════════════════════════════════════════
// Password Tab
// ═══════════════════════════════════════════════════════════════════════

function PasswordTab() {
  const { toast } = useToast();
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [saving, setSaving] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const checks = getPasswordChecks(newPassword);
  const allChecksMet = checks.every((c) => c.met);
  const passwordsMatch = newPassword === confirmPassword;
  const canSubmit =
    currentPassword.length > 0 &&
    allChecksMet &&
    confirmPassword.length > 0 &&
    passwordsMatch;

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setErrors({});

    if (!canSubmit) return;

    setSaving(true);
    try {
      const res = await fetch("/api/user/password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          currentPassword,
          newPassword,
          confirmNewPassword: confirmPassword,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        if (data.errors) {
          const flat: Record<string, string> = {};
          for (const [key, msgs] of Object.entries(data.errors)) {
            flat[key] = (msgs as string[])[0];
          }
          setErrors(flat);
        } else {
          toast("error", data.message || "Failed to change password.");
        }
        return;
      }

      toast("success", "Password changed successfully.");
      setCurrentPassword("");
      setNewPassword("");
      setConfirmPassword("");
    } catch {
      toast("error", "Something went wrong. Please try again.");
    } finally {
      setSaving(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-lg">
      <LabeledInput
        label="Current password"
        type="password"
        required
        value={currentPassword}
        onChange={(e) => setCurrentPassword(e.target.value)}
        error={errors.currentPassword}
        autoComplete="current-password"
      />

      <div>
        <LabeledInput
          label="New password"
          type="password"
          required
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          error={errors.newPassword}
          autoComplete="new-password"
        />
        {newPassword.length > 0 && (
          <ul className="mt-2 space-y-1" aria-label="Password requirements">
            {checks.map((check) => (
              <li
                key={check.label}
                className={`flex items-center gap-2 text-xs ${
                  check.met ? "text-success-600" : "text-gray-400"
                }`}
              >
                {check.met ? (
                  <svg
                    className="h-3.5 w-3.5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    className="h-3.5 w-3.5"
                    fill="none"
                    viewBox="0 0 20 20"
                    stroke="currentColor"
                    strokeWidth={2}
                    aria-hidden="true"
                  >
                    <circle cx="10" cy="10" r="7" />
                  </svg>
                )}
                {check.label}
              </li>
            ))}
          </ul>
        )}
      </div>

      <LabeledInput
        label="Confirm new password"
        type="password"
        required
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        error={
          errors.confirmNewPassword ||
          (confirmPassword.length > 0 && !passwordsMatch
            ? "Passwords do not match"
            : undefined)
        }
        autoComplete="new-password"
      />

      <LoadingButton type="submit" loading={saving} disabled={!canSubmit}>
        Change password
      </LoadingButton>
    </form>
  );
}

// ═══════════════════════════════════════════════════════════════════════
// Communication Tab
// ═══════════════════════════════════════════════════════════════════════

function CommunicationTab() {
  const { toast } = useToast();
  const [productUpdates, setProductUpdates] = useState(true);
  const [tipsContent, setTipsContent] = useState(false);
  const [marketing, setMarketing] = useState(false);
  const [saving, setSaving] = useState(false);

  // Track initial values to detect changes
  const [initial, setInitial] = useState({
    productUpdates: true,
    tipsContent: false,
    marketing: false,
  });

  const isDirty =
    productUpdates !== initial.productUpdates ||
    tipsContent !== initial.tipsContent ||
    marketing !== initial.marketing;

  async function handleSave() {
    setSaving(true);
    try {
      // TODO: Replace with real API call to save communication preferences
      // and record consent changes via the consent system
      // await fetch("/api/user/communication", {
      //   method: "PUT",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify({ productUpdates, tipsContent, marketing }),
      // });

      await new Promise((resolve) => setTimeout(resolve, 500));

      setInitial({ productUpdates, tipsContent, marketing });
      toast("success", "Communication preferences saved.");
    } catch {
      toast("error", "Failed to save preferences. Please try again.");
    } finally {
      setSaving(false);
    }
  }

  return (
    <div className="space-y-6 max-w-lg">
      <div>
        <h3 className="text-sm font-semibold text-gray-900">
          Email notifications
        </h3>
        <p className="mt-1 text-xs text-gray-500">
          Choose which emails you would like to receive.
        </p>
      </div>

      <div className="space-y-5">
        {/* Essential - always on */}
        <div className="flex items-start gap-3">
          <div className="relative inline-flex h-6 w-11 shrink-0 cursor-not-allowed rounded-full bg-primary-500 opacity-70">
            <span
              aria-hidden="true"
              className="pointer-events-none inline-block h-5 w-5 translate-x-5 transform rounded-full bg-white shadow-sm"
            />
          </div>
          <div>
            <p className="text-sm font-medium text-gray-700">
              Essential emails
            </p>
            <p className="text-xs text-gray-500">
              Billing confirmations, security alerts, and account notifications.
              These cannot be disabled.
            </p>
          </div>
        </div>

        <Toggle
          checked={productUpdates}
          onChange={setProductUpdates}
          label="Product updates"
          description="New features, improvements, and platform updates."
        />

        <Toggle
          checked={tipsContent}
          onChange={setTipsContent}
          label="Tips and learning content"
          description="Revision tips, study techniques, and educational content."
        />

        <div>
          <Toggle
            checked={marketing}
            onChange={setMarketing}
            label="Marketing emails"
            description="Promotions, offers, and partner content."
          />
          {marketing && (
            <p className="mt-2 ml-14 text-xs text-yellow-700 bg-yellow-50 rounded-lg px-3 py-2">
              By enabling marketing emails, you explicitly consent to receiving
              promotional communications. You can withdraw this consent at any
              time.
            </p>
          )}
        </div>
      </div>

      <LoadingButton onClick={handleSave} loading={saving} disabled={!isDirty}>
        Save preferences
      </LoadingButton>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════
// Subscription Tab
// ═══════════════════════════════════════════════════════════════════════

function SubscriptionTab() {
  const subscription = MOCK_SUBSCRIPTION;
  const billing = MOCK_BILLING;

  return (
    <div className="space-y-8 max-w-2xl">
      {/* Current plan */}
      <div className="card">
        <h3 className="text-sm font-semibold text-gray-900">Current plan</h3>
        <div className="mt-3 grid gap-3 sm:grid-cols-3">
          <div>
            <p className="text-xs text-gray-500">Plan</p>
            <p className="mt-0.5 text-sm font-medium text-gray-900">
              {subscription.plan}
            </p>
          </div>
          <div>
            <p className="text-xs text-gray-500">Status</p>
            <p className="mt-0.5">
              <span
                className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                  subscription.status === "Active"
                    ? "bg-success-50 text-success-700"
                    : "bg-gray-100 text-gray-700"
                }`}
              >
                {subscription.status}
              </span>
            </p>
          </div>
          <div>
            <p className="text-xs text-gray-500">Next billing date</p>
            <p className="mt-0.5 text-sm font-medium text-gray-900">
              {subscription.nextBillingDate
                ? new Date(subscription.nextBillingDate).toLocaleDateString(
                    "en-GB",
                    { day: "numeric", month: "long", year: "numeric" }
                  )
                : "N/A"}
            </p>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap gap-3">
          <Link href="/dashboard/subscription" className="btn-primary text-sm">
            Manage plan
          </Link>
          <Link
            href="/dashboard/subscription/cancel"
            className="text-sm font-medium text-warn-500 hover:text-warn-600 transition-colors px-2 py-2"
          >
            Cancel subscription
          </Link>
        </div>
      </div>

      {/* Billing history */}
      <div>
        <h3 className="text-sm font-semibold text-gray-900">
          Billing history
        </h3>
        {billing.length === 0 ? (
          <p className="mt-3 text-sm text-gray-500">
            No billing history available.
          </p>
        ) : (
          <div className="mt-3 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200">
                  <th
                    scope="col"
                    className="pb-2 pr-4 text-left text-xs font-medium text-gray-500"
                  >
                    Date
                  </th>
                  <th
                    scope="col"
                    className="pb-2 pr-4 text-left text-xs font-medium text-gray-500"
                  >
                    Description
                  </th>
                  <th
                    scope="col"
                    className="pb-2 pr-4 text-left text-xs font-medium text-gray-500"
                  >
                    Amount
                  </th>
                  <th
                    scope="col"
                    className="pb-2 text-left text-xs font-medium text-gray-500"
                  >
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {billing.map((entry) => (
                  <tr key={entry.id}>
                    <td className="py-2.5 pr-4 text-gray-700">
                      {new Date(entry.date).toLocaleDateString("en-GB", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      })}
                    </td>
                    <td className="py-2.5 pr-4 text-gray-700">
                      {entry.description}
                    </td>
                    <td className="py-2.5 pr-4 font-medium text-gray-900">
                      {entry.amount}
                    </td>
                    <td className="py-2.5">
                      <span
                        className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ${
                          entry.status === "paid"
                            ? "bg-success-50 text-success-700"
                            : entry.status === "pending"
                              ? "bg-yellow-50 text-yellow-700"
                              : "bg-warn-50 text-warn-700"
                        }`}
                      >
                        {entry.status.charAt(0).toUpperCase() +
                          entry.status.slice(1)}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════
// Data & Privacy Tab
// ═══════════════════════════════════════════════════════════════════════

function DataPrivacyTab() {
  const { toast } = useToast();
  const [downloading, setDownloading] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deleteConfirm, setDeleteConfirm] = useState("");
  const [deleting, setDeleting] = useState(false);

  async function handleDownloadData() {
    setDownloading(true);
    try {
      // TODO: Replace with real API call
      // const res = await fetch("/api/user/data-export", { method: "POST" });
      await new Promise((resolve) => setTimeout(resolve, 1000));
      toast(
        "success",
        "Your data export has been requested. You will receive an email when it is ready."
      );
    } catch {
      toast("error", "Failed to request data export. Please try again.");
    } finally {
      setDownloading(false);
    }
  }

  async function handleDeleteAccount() {
    if (deleteConfirm !== "DELETE") return;

    setDeleting(true);
    try {
      // TODO: Replace with real API call
      // await fetch("/api/user/account", { method: "DELETE" });
      await new Promise((resolve) => setTimeout(resolve, 1000));
      toast("info", "Account deletion has been initiated.");
      setShowDeleteModal(false);
    } catch {
      toast("error", "Failed to delete account. Please try again.");
    } finally {
      setDeleting(false);
    }
  }

  return (
    <div className="space-y-8 max-w-lg">
      {/* Links */}
      <div className="space-y-3">
        <h3 className="text-sm font-semibold text-gray-900">
          Privacy management
        </h3>
        <nav className="space-y-2" aria-label="Privacy settings navigation">
          <Link
            href="/dashboard/privacy"
            className="flex items-center justify-between rounded-lg border border-gray-200 px-4 py-3 text-sm text-gray-700 hover:border-accent/40 hover:bg-gray-50 transition-colors"
          >
            <span>Privacy Settings</span>
            <ChevronRightIcon />
          </Link>
          <Link
            href="/dashboard/data-requests"
            className="flex items-center justify-between rounded-lg border border-gray-200 px-4 py-3 text-sm text-gray-700 hover:border-accent/40 hover:bg-gray-50 transition-colors"
          >
            <span>Data Rights (DSAR)</span>
            <ChevronRightIcon />
          </Link>
          <Link
            href="/dashboard/consent"
            className="flex items-center justify-between rounded-lg border border-gray-200 px-4 py-3 text-sm text-gray-700 hover:border-accent/40 hover:bg-gray-50 transition-colors"
          >
            <span>Consent Management</span>
            <ChevronRightIcon />
          </Link>
        </nav>
      </div>

      {/* Data export */}
      <div>
        <h3 className="text-sm font-semibold text-gray-900">
          Download your data
        </h3>
        <p className="mt-1 text-xs text-gray-500">
          Request a copy of all data we hold about you. You will receive an
          email with a download link once the export is ready.
        </p>
        <LoadingButton
          variant="outline"
          size="sm"
          onClick={handleDownloadData}
          loading={downloading}
          className="mt-3"
        >
          Download all my data
        </LoadingButton>
      </div>

      {/* Delete account */}
      <div className="rounded-lg border border-warn-200 bg-warn-50 p-4">
        <h3 className="text-sm font-semibold text-warn-800">
          Delete your account
        </h3>
        <p className="mt-1 text-xs text-warn-700">
          This action is permanent and cannot be undone. All your data, essays,
          feedback, and subscription will be permanently deleted.
        </p>
        <LoadingButton
          variant="destructive"
          size="sm"
          onClick={() => setShowDeleteModal(true)}
          className="mt-3"
        >
          Delete my account
        </LoadingButton>
      </div>

      {/* Delete confirmation modal */}
      <Modal
        open={showDeleteModal}
        onClose={() => {
          setShowDeleteModal(false);
          setDeleteConfirm("");
        }}
        title="Delete your account?"
        actions={
          <>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => {
                setShowDeleteModal(false);
                setDeleteConfirm("");
              }}
            >
              Cancel
            </Button>
            <LoadingButton
              variant="destructive"
              size="sm"
              onClick={handleDeleteAccount}
              loading={deleting}
              disabled={deleteConfirm !== "DELETE"}
            >
              Permanently delete
            </LoadingButton>
          </>
        }
      >
        <div className="space-y-4">
          <div className="rounded-lg bg-warn-50 border border-warn-200 p-3">
            <p className="text-sm text-warn-800 font-medium">
              This cannot be undone.
            </p>
            <ul className="mt-2 space-y-1 text-xs text-warn-700 list-disc list-inside">
              <li>All your essays and feedback will be permanently deleted</li>
              <li>Your subscription will be cancelled immediately</li>
              <li>
                You will lose access to all data associated with this account
              </li>
              <li>This action complies with your right to erasure under GDPR</li>
            </ul>
          </div>
          <div>
            <label
              htmlFor="delete-confirm"
              className="block text-sm font-medium text-gray-700"
            >
              Type <span className="font-mono font-bold">DELETE</span> to
              confirm
            </label>
            <input
              id="delete-confirm"
              type="text"
              value={deleteConfirm}
              onChange={(e) => setDeleteConfirm(e.target.value)}
              className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-warn-500 focus:ring-1 focus:ring-warn-500"
              autoComplete="off"
              spellCheck={false}
            />
          </div>
        </div>
      </Modal>
    </div>
  );
}

// ─── Chevron icon ───────────────────────────────────────────────────────

function ChevronRightIcon() {
  return (
    <svg
      className="h-4 w-4 text-gray-400"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 5l7 7-7 7"
      />
    </svg>
  );
}

// ═══════════════════════════════════════════════════════════════════════
// Main Settings Page (inner, with toast access)
// ═══════════════════════════════════════════════════════════════════════

function SettingsContent() {
  const { toast } = useToast();
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchProfile = useCallback(async () => {
    try {
      const res = await fetch("/api/user/profile");
      if (!res.ok) throw new Error("Failed to load profile");
      const data: UserProfile = await res.json();
      setProfile(data);
    } catch {
      toast("error", "Failed to load your profile. Please refresh the page.");
    } finally {
      setLoading(false);
    }
  }, [toast]);

  useEffect(() => {
    fetchProfile();
  }, [fetchProfile]);

  if (loading) {
    return (
      <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="animate-pulse space-y-4">
          <div className="h-8 w-48 rounded bg-gray-200" />
          <div className="h-4 w-64 rounded bg-gray-100" />
          <div className="mt-6 h-10 w-full rounded bg-gray-100" />
          <div className="h-40 w-full rounded bg-gray-100" />
        </div>
      </div>
    );
  }

  if (!profile) {
    return (
      <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
        <p className="text-sm text-gray-500">
          Unable to load your profile.{" "}
          <button
            type="button"
            onClick={() => {
              setLoading(true);
              fetchProfile();
            }}
            className="font-medium text-accent hover:text-accent-600"
          >
            Try again
          </button>
        </p>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-primary sm:text-3xl">
          Account Settings
        </h1>
        <p className="mt-1 text-sm text-gray-500">
          Manage your profile, security, and preferences.
        </p>
      </div>

      <Tabs defaultValue="profile">
        <TabsList className="bg-transparent gap-1.5 p-0 flex-wrap">
          <TabsTrigger value="profile" className="rounded-full bg-card border border-border text-muted-foreground data-active:bg-primary data-active:text-primary-foreground data-active:border-primary hover:border-primary/40">Profile</TabsTrigger>
          <TabsTrigger value="password" className="rounded-full bg-card border border-border text-muted-foreground data-active:bg-primary data-active:text-primary-foreground data-active:border-primary hover:border-primary/40">Password</TabsTrigger>
          <TabsTrigger value="communication" className="rounded-full bg-card border border-border text-muted-foreground data-active:bg-primary data-active:text-primary-foreground data-active:border-primary hover:border-primary/40">Communication</TabsTrigger>
          <TabsTrigger value="subscription" className="rounded-full bg-card border border-border text-muted-foreground data-active:bg-primary data-active:text-primary-foreground data-active:border-primary hover:border-primary/40">Subscription</TabsTrigger>
          <TabsTrigger value="data-privacy" className="rounded-full bg-card border border-border text-muted-foreground data-active:bg-primary data-active:text-primary-foreground data-active:border-primary hover:border-primary/40">Data &amp; Privacy</TabsTrigger>
        </TabsList>

        <TabsContent value="profile">
          <ProfileTab profile={profile} onProfileUpdated={setProfile} />
        </TabsContent>
        <TabsContent value="password">
          <PasswordTab />
        </TabsContent>
        <TabsContent value="communication">
          <CommunicationTab />
        </TabsContent>
        <TabsContent value="subscription">
          <SubscriptionTab />
        </TabsContent>
        <TabsContent value="data-privacy">
          <DataPrivacyTab />
        </TabsContent>
      </Tabs>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════
// Page export (wraps content with ToastProvider)
// ═══════════════════════════════════════════════════════════════════════

export default function SettingsPage() {
  return (
    <ToastProvider>
      <SettingsContent />
    </ToastProvider>
  );
}
