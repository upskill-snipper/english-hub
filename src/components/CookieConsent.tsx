"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import {
  getConsent,
  setConsent,
  DEFAULT_PREFERENCES,
  type ConsentPreferences,
} from "@/lib/cookies";

/* ─── Toggle Switch ──────────────────────────────────────────── */

function Toggle({
  checked,
  disabled,
  onChange,
  id,
}: {
  checked: boolean;
  disabled?: boolean;
  onChange: (v: boolean) => void;
  id: string;
}) {
  return (
    <button
      id={id}
      role="switch"
      aria-checked={checked}
      disabled={disabled}
      onClick={() => !disabled && onChange(!checked)}
      className={`relative inline-flex h-6 w-11 shrink-0 items-center rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 ${
        disabled
          ? "cursor-not-allowed bg-primary opacity-70"
          : checked
            ? "cursor-pointer bg-primary"
            : "cursor-pointer bg-gray-300"
      }`}
    >
      <span
        className={`inline-block h-4 w-4 transform rounded-full bg-white shadow transition-transform ${
          checked ? "translate-x-6" : "translate-x-1"
        }`}
      />
    </button>
  );
}

/* ─── Category descriptions (teen-friendly) ──────────────────── */

const CATEGORIES = [
  {
    key: "necessary" as const,
    label: "Strictly Necessary",
    description:
      "These keep the site working properly — things like keeping you logged in and remembering your settings. They can't be turned off.",
    alwaysOn: true,
  },
  {
    key: "analytics" as const,
    label: "Analytics",
    description:
      "These help us understand how people use the site so we can make it better. No personal info is shared — just things like which pages are popular.",
    alwaysOn: false,
  },
  {
    key: "marketing" as const,
    label: "Marketing",
    description:
      "These are used to show you relevant ads or content across other sites. We only use them if you say it's okay.",
    alwaysOn: false,
  },
];

/* ─── Preferences Modal ─────────────────────────────────────── */

function PreferencesModal({
  isOpen,
  onClose,
  onSave,
  initial,
}: {
  isOpen: boolean;
  onClose: () => void;
  onSave: (prefs: Pick<ConsentPreferences, "analytics" | "marketing">) => void;
  initial: Pick<ConsentPreferences, "analytics" | "marketing">;
}) {
  const [prefs, setPrefs] = useState(initial);
  const modalRef = useRef<HTMLDivElement>(null);
  const firstFocusRef = useRef<HTMLButtonElement>(null);

  // Reset local prefs when modal opens with new initial values
  useEffect(() => {
    if (isOpen) {
      setPrefs(initial);
    }
  }, [isOpen, initial]);

  // Focus trap
  useEffect(() => {
    if (!isOpen) return;

    // Focus the first interactive element
    firstFocusRef.current?.focus();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }

      if (e.key !== "Tab") return;

      const modal = modalRef.current;
      if (!modal) return;

      const focusable = modal.querySelectorAll<HTMLElement>(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    // Prevent body scroll
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-black/50 p-4"
      role="dialog"
      aria-modal="true"
      aria-label="Cookie preferences"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        ref={modalRef}
        className="w-full max-w-lg rounded-xl bg-white p-6 shadow-2xl max-h-[90vh] overflow-y-auto"
      >
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-lg font-semibold text-primary">
            Cookie Preferences
          </h2>
          <button
            ref={firstFocusRef}
            onClick={onClose}
            aria-label="Close preferences"
            className="rounded-lg p-1 text-gray-500 hover:bg-gray-100 hover:text-gray-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <p className="mb-6 text-sm text-gray-600">
          Choose which cookies you're happy for us to use. Strictly necessary
          ones are always on because the site needs them to work.
        </p>

        <div className="space-y-5">
          {CATEGORIES.map((cat) => (
            <div
              key={cat.key}
              className="flex items-start justify-between gap-4 rounded-lg border border-gray-200 p-4"
            >
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2">
                  <label
                    htmlFor={`toggle-${cat.key}`}
                    className="text-sm font-medium text-gray-900"
                  >
                    {cat.label}
                  </label>
                  {cat.alwaysOn && (
                    <span className="rounded bg-primary-50 px-2 py-0.5 text-xs font-medium text-primary">
                      Always on
                    </span>
                  )}
                </div>
                <p className="mt-1 text-xs text-gray-500">{cat.description}</p>
              </div>
              <Toggle
                id={`toggle-${cat.key}`}
                checked={
                  cat.alwaysOn ? true : prefs[cat.key as "analytics" | "marketing"]
                }
                disabled={cat.alwaysOn}
                onChange={(v) =>
                  setPrefs((p) => ({
                    ...p,
                    [cat.key]: v,
                  }))
                }
              />
            </div>
          ))}
        </div>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-end">
          <button
            onClick={onClose}
            className="rounded-lg border border-gray-300 px-5 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            Cancel
          </button>
          <button
            onClick={() => onSave(prefs)}
            className="rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          >
            Save Preferences
          </button>
        </div>
      </div>
    </div>
  );
}

/* ─── Main CookieConsent Component ───────────────────────────── */

export function CookieConsentBanner() {
  const [showBanner, setShowBanner] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [showFloatingIcon, setShowFloatingIcon] = useState(false);

  // Check for existing consent on mount
  useEffect(() => {
    const consent = getConsent();
    if (consent) {
      setShowFloatingIcon(true);
    } else {
      setShowBanner(true);
    }
  }, []);

  const handleAcceptAll = useCallback(() => {
    setConsent({ analytics: true, marketing: true });
    setShowBanner(false);
    setShowPreferences(false);
    setShowFloatingIcon(true);
  }, []);

  const handleRejectAll = useCallback(() => {
    setConsent({ analytics: false, marketing: false });
    setShowBanner(false);
    setShowPreferences(false);
    setShowFloatingIcon(true);
  }, []);

  const handleSavePreferences = useCallback(
    (prefs: Pick<ConsentPreferences, "analytics" | "marketing">) => {
      setConsent(prefs);
      setShowBanner(false);
      setShowPreferences(false);
      setShowFloatingIcon(true);
    },
    []
  );

  const handleReopenBanner = useCallback(() => {
    setShowFloatingIcon(false);
    setShowBanner(true);
  }, []);

  const currentConsent = getConsent();
  const initialPrefs = {
    analytics: currentConsent?.analytics ?? false,
    marketing: currentConsent?.marketing ?? false,
  };

  return (
    <>
      {/* ── Banner ─────────────────────────────────────────── */}
      {showBanner && (
        <div
          role="region"
          aria-label="Cookie consent"
          className="fixed inset-x-0 bottom-0 z-50 border-t border-gray-200 bg-white p-4 shadow-[0_-4px_20px_rgba(0,0,0,0.1)] sm:p-6"
        >
          <div className="mx-auto max-w-5xl">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div className="flex-1">
                <h2 className="text-base font-semibold text-gray-900">
                  We use cookies 🍪
                </h2>
                <p className="mt-1 text-sm text-gray-600">
                  We use cookies to make this site work and to understand how
                  it's used. Some are essential (the site won't work without
                  them), and others help us improve your experience. You're in
                  control — pick what you're comfortable with.
                </p>
              </div>

              <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-3 lg:shrink-0">
                <button
                  onClick={() => setShowPreferences(true)}
                  className="rounded-lg border border-gray-300 px-5 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                >
                  Manage Preferences
                </button>
                <button
                  onClick={handleRejectAll}
                  className="rounded-lg border-2 border-primary bg-white px-5 py-2.5 text-sm font-semibold text-primary hover:bg-primary-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                >
                  Reject All
                </button>
                <button
                  onClick={handleAcceptAll}
                  className="rounded-lg border-2 border-primary bg-primary px-5 py-2.5 text-sm font-semibold text-white hover:bg-primary-600 hover:border-primary-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                >
                  Accept All
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ── Floating re-open icon ──────────────────────────── */}
      {showFloatingIcon && !showBanner && (
        <button
          onClick={handleReopenBanner}
          aria-label="Manage cookie preferences"
          className="fixed bottom-4 left-4 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white shadow-lg hover:bg-primary-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 transition-transform hover:scale-110"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
        </button>
      )}

      {/* ── Preferences Modal ──────────────────────────────── */}
      <PreferencesModal
        isOpen={showPreferences}
        onClose={() => setShowPreferences(false)}
        onSave={handleSavePreferences}
        initial={initialPrefs}
      />
    </>
  );
}
