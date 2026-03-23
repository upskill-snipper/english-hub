"use client";

import dynamic from "next/dynamic";

const CookieConsentBanner = dynamic(
  () =>
    import("@/components/CookieConsent").then((mod) => mod.CookieConsentBanner),
  { ssr: false }
);

/**
 * Client-only wrapper that lazy-loads the cookie consent banner.
 * This ensures no hydration mismatch since the banner reads from
 * document.cookie which is unavailable during SSR.
 */
export function CookieConsent() {
  return <CookieConsentBanner />;
}
