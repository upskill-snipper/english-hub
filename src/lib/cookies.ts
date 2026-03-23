/**
 * Cookie consent utilities for The English Hub
 * PECR-compliant cookie management
 */

export const CONSENT_VERSION = "1.0";
export const CONSENT_COOKIE_NAME = "cc_consent";
export const CONSENT_EVENT_NAME = "cookie-consent-update";

/** Max-age in seconds: 365 days */
const COOKIE_MAX_AGE = 365 * 24 * 60 * 60;

export interface ConsentPreferences {
  necessary: true; // always on
  analytics: boolean;
  marketing: boolean;
  version: string;
  timestamp: string;
}

export const DEFAULT_PREFERENCES: ConsentPreferences = {
  necessary: true,
  analytics: false,
  marketing: false,
  version: CONSENT_VERSION,
  timestamp: "",
};

function parseCookie(name: string): string | null {
  if (typeof document === "undefined") return null;
  const match = document.cookie.match(
    new RegExp("(?:^|;\\s*)" + name + "=([^;]*)")
  );
  return match ? decodeURIComponent(match[1]) : null;
}

function writeCookie(name: string, value: string, maxAge: number): void {
  if (typeof document === "undefined") return;
  document.cookie = `${name}=${encodeURIComponent(value)};path=/;max-age=${maxAge};SameSite=Lax;Secure`;
}

function deleteCookie(name: string): void {
  if (typeof document === "undefined") return;
  document.cookie = `${name}=;path=/;max-age=0;SameSite=Lax;Secure`;
}

/**
 * Returns the current consent object, or null if no consent has been given
 * or if the stored version is outdated.
 */
export function getConsent(): ConsentPreferences | null {
  const raw = parseCookie(CONSENT_COOKIE_NAME);
  if (!raw) return null;

  try {
    const parsed: ConsentPreferences = JSON.parse(raw);
    // Invalidate if version has changed
    if (parsed.version !== CONSENT_VERSION) return null;
    return parsed;
  } catch {
    return null;
  }
}

/**
 * Saves consent preferences as a cookie and dispatches a custom event
 * so other components can react immediately.
 */
export function setConsent(
  preferences: Pick<ConsentPreferences, "analytics" | "marketing">
): ConsentPreferences {
  const consent: ConsentPreferences = {
    necessary: true,
    analytics: preferences.analytics,
    marketing: preferences.marketing,
    version: CONSENT_VERSION,
    timestamp: new Date().toISOString(),
  };

  writeCookie(CONSENT_COOKIE_NAME, JSON.stringify(consent), COOKIE_MAX_AGE);

  if (typeof window !== "undefined") {
    window.dispatchEvent(
      new CustomEvent(CONSENT_EVENT_NAME, { detail: consent })
    );
  }

  return consent;
}

/**
 * Check whether a specific category is currently allowed.
 */
export function isAllowed(category: keyof Pick<ConsentPreferences, "necessary" | "analytics" | "marketing">): boolean {
  if (category === "necessary") return true;
  const consent = getConsent();
  if (!consent) return false;
  return consent[category] === true;
}

/**
 * Clears the consent cookie so the banner re-appears.
 */
export function resetConsent(): void {
  deleteCookie(CONSENT_COOKIE_NAME);

  if (typeof window !== "undefined") {
    window.dispatchEvent(
      new CustomEvent(CONSENT_EVENT_NAME, { detail: null })
    );
  }
}
