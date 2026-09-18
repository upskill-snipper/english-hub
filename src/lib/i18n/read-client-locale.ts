// ─── Which language a client component should render in ─────────────────────
//
// THE DEFECT THIS FIXES (verified live on 18 September 2026)
//
// `readLocale()` in use-t.ts and `readCookie()` in use-locale.ts both read the
// `eh-lang` cookie and nothing else. A visitor arriving at /ar from Google has
// no cookie, so every `'use client'` component rendered English while the
// server components on the same page rendered Arabic.
//
// Probed on https://theenglishhub.app/ar and /ar/ielts: `document.cookie` had
// no `eh-lang`, `<html data-lang>` was "ar", and yet the header read "Your Hub,
// Mark an essay, Mock exams, IELTS, Pricing" and the cookie banner read
// "Accept All, Reject All, Manage Preferences".
//
// Two consequences, one commercial and one regulatory:
//
//   • /ar is the only indexed Arabic entry point, and IELTS at GBP 39/month is
//     the highest-priced plan. Every Gulf visitor from search met a half-English
//     product before reading a word of the offer.
//   • Consent was being collected on a banner the reader could not read. PECR
//     consent has to be informed, and the Children's Code transparency standard
//     applies to a product with child users. A regulator reads that literally.
//
// THE FIX
//
// The root layout already stamps `data-lang` on <html> from the middleware's
// `x-lang` header, which is derived from the URL prefix. So the answer is
// present in the DOM on the first paint; nothing was reading it.
//
// HYDRATION: this is deliberately NOT used for the first render. Both hooks
// still start at 'en' and call this from an effect, because the server rendered
// the client component's initial HTML with the English strings and a different
// first client render would be a hydration mismatch. The effect flips it
// immediately afterwards.
// ────────────────────────────────────────────────────────────────────────────

export type Locale = 'en' | 'ar' | 'es'

/** Coerce anything to a supported locale. Legacy 'bi' folds to 'en'. */
function coerce(raw: string | null | undefined): Locale | null {
  if (raw === 'ar') return 'ar'
  if (raw === 'es') return 'es'
  if (raw === 'en' || raw === 'bi') return 'en'
  return null
}

/**
 * The locale a client component should show, in priority order:
 *
 *   1. the `eh-lang` cookie - an explicit choice by this reader, which must
 *      win even on a prefixed URL, otherwise the language toggle would appear
 *      to do nothing on /ar;
 *   2. `<html data-lang>`, stamped by the root layout from the URL prefix -
 *      this is the case that was missing and that every search visitor hits;
 *   3. 'en'.
 */
export function readClientLocale(): Locale {
  if (typeof document === 'undefined') return 'en'

  // Match legacy 'bi' too so old sessions upgrade cleanly.
  const cookie = coerce(document.cookie.match(/(?:^|;\s*)eh-lang=(en|bi|ar|es)\b/)?.[1])
  if (cookie) return cookie

  const stamped = coerce(document.documentElement.dataset.lang)
  if (stamped) return stamped

  return 'en'
}
