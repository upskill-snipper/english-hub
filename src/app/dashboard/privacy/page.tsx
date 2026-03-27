"use client";

import { useEffect, useState } from "react";

// ── Types ──────────────────────────────────────────────

type Tab = "settings" | "data" | "download" | "delete" | "rights";

interface PrivacySettings {
  analyticsEnabled: boolean;
  marketingEnabled: boolean;
  aiTrainingOptIn: boolean;
  schoolSharingEnabled: boolean;
  researchDataEnabled: boolean;
  profileVisibility: "PRIVATE" | "SCHOOL_ONLY" | "PUBLIC";
}

interface DataSummary {
  email: string;
  firstName: string;
  lastName: string;
  school: string | null;
  essayCount: number;
  feedbackCount: number;
  daysActive: number;
  createdAt: string;
}

interface EssayItem {
  id: string;
  title: string;
  subject: string;
  createdAt: string;
}

const DEFAULT_SETTINGS: PrivacySettings = {
  analyticsEnabled: false,
  marketingEnabled: false,
  aiTrainingOptIn: false,
  schoolSharingEnabled: false,
  researchDataEnabled: false,
  profileVisibility: "PRIVATE",
};

const TABS: { id: Tab; label: string; icon: string }[] = [
  { id: "settings", label: "Privacy Settings", icon: "\u{1F6E1}\uFE0F" },
  { id: "data", label: "Your Data", icon: "\u{1F4CA}" },
  { id: "download", label: "Download", icon: "\u{1F4E5}" },
  { id: "delete", label: "Delete", icon: "\u{1F5D1}\uFE0F" },
  { id: "rights", label: "Your Rights", icon: "\u2696\uFE0F" },
];

// ── Main Page Component ────────────────────────────────

export default function PrivacyDashboard() {
  const [activeTab, setActiveTab] = useState<Tab>("settings");
  const [settings, setSettings] = useState<PrivacySettings>(DEFAULT_SETTINGS);
  const [dataSummary, setDataSummary] = useState<DataSummary | null>(null);
  const [essays, setEssays] = useState<EssayItem[]>([]);
  const [saving, setSaving] = useState(false);
  const [toast, setToast] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  // Fetch settings on mount
  useEffect(() => {
    async function load() {
      try {
        const res = await fetch("/api/privacy/settings");
        if (res.ok) {
          const data = await res.json();
          setSettings(data.settings);
          setDataSummary(data.summary);
          setEssays(data.essays ?? []);
        }
      } catch {
        // fail silently - defaults are safe
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  // Toast auto-dismiss
  useEffect(() => {
    if (toast) {
      const t = setTimeout(() => setToast(null), 3000);
      return () => clearTimeout(t);
    }
  }, [toast]);

  async function saveSettings() {
    setSaving(true);
    try {
      const res = await fetch("/api/privacy/settings", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(settings),
      });
      if (res.ok) {
        setToast("Settings saved successfully!");
      } else {
        setToast("Something went wrong. Please try again.");
      }
    } catch {
      setToast("Network error. Please check your connection.");
    } finally {
      setSaving(false);
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
          <p className="mt-3 text-sm text-gray-500">Loading your privacy settings...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Toast */}
      {toast && (
        <div className="fixed top-4 right-4 z-50 animate-fade-in rounded-lg bg-success px-5 py-3 text-sm font-medium text-white shadow-lg">
          {toast}
        </div>
      )}

      <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
            {"\u{1F512}"} Privacy &amp; Data
          </h1>
          <p className="mt-2 text-gray-600">
            You&apos;re in control. Manage how your data is used, download it, or delete it anytime.
          </p>
        </div>

        {/* Tabs */}
        <div className="mb-6 overflow-x-auto">
          <nav className="flex gap-1 rounded-xl bg-white p-1.5 shadow-sm border border-gray-200" role="tablist">
            {TABS.map((tab) => (
              <button
                key={tab.id}
                role="tab"
                aria-selected={activeTab === tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-1.5 whitespace-nowrap rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                  activeTab === tab.id
                    ? "bg-primary text-white shadow-sm"
                    : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                }`}
              >
                <span className="text-base">{tab.icon}</span>
                <span className="hidden sm:inline">{tab.label}</span>
              </button>
            ))}
          </nav>
        </div>

        {/* Tab Content */}
        <div className="card">
          {activeTab === "settings" && (
            <SettingsTab
              settings={settings}
              onChange={setSettings}
              onSave={saveSettings}
              saving={saving}
            />
          )}
          {activeTab === "data" && <DataTab summary={dataSummary} />}
          {activeTab === "download" && <DownloadTab onToast={setToast} />}
          {activeTab === "delete" && (
            <DeleteTab
              essays={essays}
              onEssayDeleted={(id) => setEssays((prev) => prev.filter((e) => e.id !== id))}
              onToast={setToast}
            />
          )}
          {activeTab === "rights" && <RightsTab />}
        </div>
      </div>
    </div>
  );
}

// ── Settings Tab ───────────────────────────────────────

function SettingsTab({
  settings,
  onChange,
  onSave,
  saving,
}: {
  settings: PrivacySettings;
  onChange: (s: PrivacySettings) => void;
  onSave: () => void;
  saving: boolean;
}) {
  function toggle(key: keyof Omit<PrivacySettings, "profileVisibility">) {
    onChange({ ...settings, [key]: !settings[key] });
  }

  const toggles: {
    key: keyof Omit<PrivacySettings, "profileVisibility">;
    label: string;
    description: string;
    icon: string;
  }[] = [
    {
      key: "analyticsEnabled",
      label: "Usage Analytics",
      description: "Help us improve by sharing anonymous usage data (e.g. which features you use most)",
      icon: "\u{1F4C8}",
    },
    {
      key: "marketingEnabled",
      label: "Marketing Emails",
      description: "Receive tips, new feature announcements, and study reminders by email",
      icon: "\u{1F4E7}",
    },
    {
      key: "aiTrainingOptIn",
      label: "AI Improvement",
      description: "Allow your essays to help train our AI to give better feedback (fully anonymised)",
      icon: "\u{1F916}",
    },
    {
      key: "schoolSharingEnabled",
      label: "Share with School",
      description: "Let your school see your progress and scores (if your school uses The English Hub)",
      icon: "\u{1F3EB}",
    },
    {
      key: "researchDataEnabled",
      label: "Research Data",
      description: "Contribute anonymised data to educational research studies",
      icon: "\u{1F52C}",
    },
  ];

  return (
    <div>
      <h2 className="text-lg font-semibold text-gray-900 mb-1">Privacy Settings</h2>
      <p className="text-sm text-gray-500 mb-6">
        Everything is <strong>off by default</strong> to keep your data private. Turn things on only if you want to.
      </p>

      <div className="space-y-4">
        {toggles.map((item) => (
          <label
            key={item.key}
            className="flex items-start gap-4 rounded-xl border border-gray-200 p-4 cursor-pointer hover:border-primary-200 hover:bg-primary-50/30 transition-colors"
          >
            <span className="text-2xl mt-0.5">{item.icon}</span>
            <div className="flex-1 min-w-0">
              <span className="block text-sm font-medium text-gray-900">{item.label}</span>
              <span className="block text-xs text-gray-500 mt-0.5">{item.description}</span>
            </div>
            <button
              type="button"
              role="switch"
              aria-checked={settings[item.key]}
              onClick={() => toggle(item.key)}
              className={`relative mt-0.5 inline-flex h-6 w-11 shrink-0 items-center rounded-full transition-colors focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 ${
                settings[item.key] ? "bg-success" : "bg-gray-300"
              }`}
            >
              <span
                className={`inline-block h-4 w-4 rounded-full bg-white shadow-sm transition-transform ${
                  settings[item.key] ? "translate-x-6" : "translate-x-1"
                }`}
              />
            </button>
          </label>
        ))}
      </div>

      {/* Profile Visibility */}
      <div className="mt-6 rounded-xl border border-gray-200 p-4">
        <div className="flex items-start gap-4">
          <span className="text-2xl mt-0.5">{"\u{1F464}"}</span>
          <div className="flex-1">
            <span className="block text-sm font-medium text-gray-900">Profile Visibility</span>
            <span className="block text-xs text-gray-500 mt-0.5">
              Control who can see your profile information
            </span>
            <div className="mt-3 flex flex-wrap gap-2">
              {(
                [
                  { value: "PRIVATE", label: "\u{1F512} Private", desc: "Only you" },
                  { value: "SCHOOL_ONLY", label: "\u{1F3EB} School Only", desc: "You + your school" },
                  { value: "PUBLIC", label: "\u{1F30D} Public", desc: "Anyone" },
                ] as const
              ).map((opt) => (
                <button
                  key={opt.value}
                  type="button"
                  onClick={() => onChange({ ...settings, profileVisibility: opt.value })}
                  className={`rounded-lg border-2 px-3 py-2 text-xs font-medium transition-colors ${
                    settings.profileVisibility === opt.value
                      ? "border-primary bg-primary-50 text-primary"
                      : "border-gray-200 text-gray-600 hover:border-gray-300"
                  }`}
                >
                  {opt.label}
                  <span className="block text-[10px] font-normal text-gray-500 mt-0.5">{opt.desc}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Save */}
      <div className="mt-6 flex justify-end">
        <button
          onClick={onSave}
          disabled={saving}
          className="btn-primary"
        >
          {saving ? "Saving..." : "Save Changes"}
        </button>
      </div>
    </div>
  );
}

// ── Data Tab ───────────────────────────────────────────

function DataTab({ summary }: { summary: DataSummary | null }) {
  if (!summary) {
    return <p className="text-sm text-gray-500">Unable to load your data summary.</p>;
  }

  const cards = [
    {
      icon: "\u{1F464}",
      label: "Account Info",
      value: `${summary.firstName} ${summary.lastName}`,
      sub: summary.email,
      color: "bg-primary-50 text-primary",
    },
    {
      icon: "\u{1F4DD}",
      label: "Essays Submitted",
      value: String(summary.essayCount),
      sub: "total essays",
      color: "bg-accent-50 text-accent",
    },
    {
      icon: "\u{1F4AC}",
      label: "Feedback Received",
      value: String(summary.feedbackCount),
      sub: "AI feedback reports",
      color: "bg-success-50 text-success",
    },
    {
      icon: "\u{1F4C5}",
      label: "Days Active",
      value: String(summary.daysActive),
      sub: `since ${new Date(summary.createdAt).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" })}`,
      color: "bg-warn-50 text-warn",
    },
  ];

  return (
    <div>
      <h2 className="text-lg font-semibold text-gray-900 mb-1">Your Data at a Glance</h2>
      <p className="text-sm text-gray-500 mb-6">
        Here&apos;s a summary of what we hold about you. No surprises.
      </p>

      <div className="grid gap-4 sm:grid-cols-2">
        {cards.map((card) => (
          <div
            key={card.label}
            className="rounded-xl border border-gray-200 p-5 hover:shadow-md transition-shadow"
          >
            <div className={`inline-flex items-center justify-center h-10 w-10 rounded-lg ${card.color} text-xl mb-3`}>
              {card.icon}
            </div>
            <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">{card.label}</p>
            <p className="text-xl font-bold text-gray-900 mt-1">{card.value}</p>
            <p className="text-xs text-gray-500 mt-0.5">{card.sub}</p>
          </div>
        ))}
      </div>

      {summary.school && (
        <div className="mt-4 rounded-xl border border-gray-200 p-4 flex items-center gap-3">
          <span className="text-xl">{"\u{1F3EB}"}</span>
          <div>
            <p className="text-xs font-medium text-gray-500">School</p>
            <p className="text-sm font-semibold text-gray-900">{summary.school}</p>
          </div>
        </div>
      )}
    </div>
  );
}

// ── Download Tab ───────────────────────────────────────

function DownloadTab({ onToast }: { onToast: (msg: string) => void }) {
  const [format, setFormat] = useState<"JSON" | "PDF">("JSON");
  const [requesting, setRequesting] = useState(false);
  const [requested, setRequested] = useState(false);

  async function requestExport() {
    setRequesting(true);
    try {
      const res = await fetch("/api/privacy/export", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ format }),
      });
      if (res.ok) {
        setRequested(true);
        onToast("Export requested! Check your email within 48 hours.");
      } else {
        onToast("Failed to request export. Please try again.");
      }
    } catch {
      onToast("Network error. Please check your connection.");
    } finally {
      setRequesting(false);
    }
  }

  const includedItems = [
    { icon: "\u{1F464}", text: "Your account details (name, email, school)" },
    { icon: "\u{1F4DD}", text: "All your essays and their content" },
    { icon: "\u{1F4AC}", text: "All AI feedback you've received" },
    { icon: "\u2699\uFE0F", text: "Your privacy settings and consent history" },
    { icon: "\u{1F4C5}", text: "Activity log and timestamps" },
  ];

  return (
    <div>
      <h2 className="text-lg font-semibold text-gray-900 mb-1">Download Your Data</h2>
      <p className="text-sm text-gray-500 mb-6">
        You have the right to take your data with you. Request a copy and we&apos;ll email it to you.
      </p>

      {/* What's included */}
      <div className="rounded-xl border border-gray-200 p-5 mb-6">
        <h3 className="text-sm font-semibold text-gray-900 mb-3">What&apos;s included in your export</h3>
        <ul className="space-y-2">
          {includedItems.map((item) => (
            <li key={item.text} className="flex items-center gap-2.5 text-sm text-gray-600">
              <span className="text-base">{item.icon}</span>
              {item.text}
            </li>
          ))}
        </ul>
      </div>

      {/* Format picker */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">Choose format</label>
        <div className="flex gap-3">
          {(["JSON", "PDF"] as const).map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setFormat(f)}
              className={`rounded-lg border-2 px-5 py-3 text-sm font-medium transition-colors ${
                format === f
                  ? "border-primary bg-primary-50 text-primary"
                  : "border-gray-200 text-gray-600 hover:border-gray-300"
              }`}
            >
              {f === "JSON" ? "\u{1F4C4}" : "\u{1F4D1}"} {f}
              <span className="block text-[10px] font-normal text-gray-500 mt-0.5">
                {f === "JSON" ? "Machine-readable" : "Human-readable"}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Delivery info */}
      <div className="rounded-xl bg-accent-50 border border-accent-200 p-4 mb-6 flex items-start gap-3">
        <span className="text-xl mt-0.5">{"\u23F0"}</span>
        <div>
          <p className="text-sm font-medium text-accent-700">Estimated delivery: within 48 hours</p>
          <p className="text-xs text-accent-600 mt-0.5">
            We&apos;ll email a secure download link to your registered email address.
          </p>
        </div>
      </div>

      {/* Request button */}
      <button
        onClick={requestExport}
        disabled={requesting || requested}
        className="btn-primary"
      >
        {requested
          ? "\u2705 Export Requested"
          : requesting
          ? "Requesting..."
          : `Request ${format} Export`}
      </button>
    </div>
  );
}

// ── Delete Tab ─────────────────────────────────────────

function DeleteTab({
  essays,
  onEssayDeleted,
  onToast,
}: {
  essays: EssayItem[];
  onEssayDeleted: (id: string) => void;
  onToast: (msg: string) => void;
}) {
  const [confirmation, setConfirmation] = useState("");
  const [deleting, setDeleting] = useState(false);
  const [deletingEssay, setDeletingEssay] = useState<string | null>(null);

  async function deleteEssay(id: string) {
    setDeletingEssay(id);
    try {
      const res = await fetch("/api/privacy/delete-essay", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ essayId: id }),
      });
      if (res.ok) {
        onEssayDeleted(id);
        onToast("Essay deleted successfully.");
      } else {
        onToast("Failed to delete essay. Please try again.");
      }
    } catch {
      onToast("Network error. Please check your connection.");
    } finally {
      setDeletingEssay(null);
    }
  }

  async function deleteAccount() {
    if (confirmation !== "DELETE MY ACCOUNT") return;
    setDeleting(true);
    try {
      const res = await fetch("/api/privacy/delete-account", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ confirmation }),
      });
      if (res.ok) {
        onToast("Account deletion requested. You have 30 days to change your mind.");
      } else {
        const data = await res.json().catch(() => ({}));
        onToast(data.error ?? "Failed to request deletion. Please try again.");
      }
    } catch {
      onToast("Network error. Please check your connection.");
    } finally {
      setDeleting(false);
    }
  }

  return (
    <div>
      <h2 className="text-lg font-semibold text-gray-900 mb-1">Delete Your Data</h2>
      <p className="text-sm text-gray-500 mb-6">
        You can delete individual essays or your entire account. Take your time - there&apos;s no pressure.
      </p>

      {/* Delete individual essays */}
      <div className="mb-8">
        <h3 className="text-sm font-semibold text-gray-900 mb-3">{"\u{1F4DD}"} Delete Individual Essays</h3>
        {essays.length === 0 ? (
          <div className="rounded-xl border border-dashed border-gray-300 p-6 text-center">
            <p className="text-sm text-gray-500">No essays to show.</p>
          </div>
        ) : (
          <div className="space-y-2 max-h-64 overflow-y-auto">
            {essays.map((essay) => (
              <div
                key={essay.id}
                className="flex items-center justify-between rounded-lg border border-gray-200 px-4 py-3 hover:bg-gray-50 transition-colors"
              >
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-medium text-gray-900 truncate">{essay.title}</p>
                  <p className="text-xs text-gray-500">
                    {essay.subject} &middot;{" "}
                    {new Date(essay.createdAt).toLocaleDateString("en-GB", {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    })}
                  </p>
                </div>
                <button
                  onClick={() => deleteEssay(essay.id)}
                  disabled={deletingEssay === essay.id}
                  className="ml-3 shrink-0 rounded-lg border border-warn-200 bg-warn-50 px-3 py-1.5 text-xs font-medium text-warn hover:bg-warn-100 transition-colors disabled:opacity-50"
                >
                  {deletingEssay === essay.id ? "Deleting..." : "\u{1F5D1}\uFE0F Delete"}
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Delete account */}
      <div className="rounded-xl border-2 border-warn-200 bg-warn-50/50 p-5">
        <h3 className="text-sm font-semibold text-warn-700 mb-2">
          {"\u26A0\uFE0F"} Delete Your Account
        </h3>
        <p className="text-sm text-gray-600 mb-3">
          This will schedule your account for deletion. You&apos;ll have a <strong>30-day grace period</strong> to
          change your mind. After that, all your data will be permanently erased.
        </p>

        <div className="rounded-lg bg-white border border-warn-200 p-4 mb-4">
          <p className="text-xs font-medium text-gray-700 mb-1">What happens when you delete your account:</p>
          <ul className="text-xs text-gray-500 space-y-1">
            <li>{"\u2022"} Your account is deactivated immediately</li>
            <li>{"\u2022"} You have 30 days to log back in and cancel the deletion</li>
            <li>{"\u2022"} After 30 days, all data is permanently and irreversibly deleted</li>
            <li>{"\u2022"} Any active subscription will be cancelled</li>
          </ul>
        </div>

        <label className="block text-xs font-medium text-gray-700 mb-1.5">
          Type <span className="font-mono font-bold text-warn">DELETE MY ACCOUNT</span> to confirm
        </label>
        <input
          type="text"
          value={confirmation}
          onChange={(e) => setConfirmation(e.target.value)}
          placeholder="DELETE MY ACCOUNT"
          className="input-field mb-3 border-warn-300 focus:border-warn focus:ring-warn"
        />
        <button
          onClick={deleteAccount}
          disabled={confirmation !== "DELETE MY ACCOUNT" || deleting}
          className="inline-flex items-center justify-center rounded-lg bg-warn px-5 py-2.5 text-sm font-medium text-white hover:bg-warn-600 focus-visible:ring-2 focus-visible:ring-warn focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-colors"
        >
          {deleting ? "Processing..." : "\u{1F5D1}\uFE0F Delete My Account"}
        </button>
      </div>
    </div>
  );
}

// ── Rights Tab ─────────────────────────────────────────

function RightsTab() {
  const rights = [
    {
      icon: "\u{1F441}\uFE0F",
      title: "Right of Access",
      description: "You can ask to see all the data we hold about you at any time.",
      action: "View your data",
      tab: "data" as Tab,
    },
    {
      icon: "\u270F\uFE0F",
      title: "Right to Rectification",
      description: "If any of your personal data is wrong, you can ask us to fix it.",
      action: "Contact us to correct",
      href: "mailto:privacy@theenglishhub.app?subject=Data%20Rectification%20Request",
    },
    {
      icon: "\u{1F5D1}\uFE0F",
      title: "Right to Erasure",
      description: "You can ask us to delete your data. We call this the \"right to be forgotten\".",
      action: "Delete your data",
      tab: "delete" as Tab,
    },
    {
      icon: "\u{1F4E6}",
      title: "Right to Portability",
      description: "You can download a copy of your data in a standard format to take elsewhere.",
      action: "Download your data",
      tab: "download" as Tab,
    },
    {
      icon: "\u270B",
      title: "Right to Restrict Processing",
      description: "You can ask us to stop using your data in certain ways while we resolve a concern.",
      action: "Contact us to restrict",
      href: "mailto:privacy@theenglishhub.app?subject=Data%20Restriction%20Request",
    },
    {
      icon: "\u{1F6D1}",
      title: "Right to Object",
      description: "You can object to us using your data for things like marketing or research.",
      action: "Manage settings",
      tab: "settings" as Tab,
    },
  ];

  return (
    <div>
      <h2 className="text-lg font-semibold text-gray-900 mb-1">Your Data Rights</h2>
      <p className="text-sm text-gray-500 mb-6">
        Under UK GDPR and the ICO Children&apos;s Code, you have powerful rights over your data. Here&apos;s what they mean
        in plain English.
      </p>

      <div className="grid gap-4 sm:grid-cols-2">
        {rights.map((right) => (
          <div
            key={right.title}
            className="rounded-xl border border-gray-200 p-5 hover:shadow-md hover:border-primary-200 transition-all"
          >
            <div className="text-2xl mb-2">{right.icon}</div>
            <h3 className="text-sm font-semibold text-gray-900">{right.title}</h3>
            <p className="text-xs text-gray-500 mt-1 mb-3">{right.description}</p>
            {"href" in right && right.href ? (
              <a
                href={right.href}
                className="inline-flex items-center gap-1 text-xs font-medium text-primary hover:text-primary-600 transition-colors"
              >
                {right.action} {"\u2192"}
              </a>
            ) : (
              <span className="inline-flex items-center gap-1 text-xs font-medium text-primary">
                {right.action} {"\u2192"}
              </span>
            )}
          </div>
        ))}
      </div>

      <div className="mt-6 rounded-xl bg-primary-50 border border-primary-200 p-4">
        <p className="text-sm text-primary-700">
          <strong>Need help?</strong> If you want to exercise any of these rights or have questions, email us at{" "}
          <a href="mailto:privacy@theenglishhub.app" className="underline font-medium">
            privacy@theenglishhub.app
          </a>{" "}
          and we&apos;ll respond within 30 days (usually much sooner).
        </p>
      </div>
    </div>
  );
}
