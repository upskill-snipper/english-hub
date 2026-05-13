// ─── AI Language Directive ───────────────────────────────────────────────────
// Augment LLM system prompts with a language directive when the user is in
// AR mode. The directive is appended AT THE END of the existing prompt so EN
// behaviour stays byte-identical for EN users.
//
// Resolution order matches the rest of the codebase:
//   1. `x-lang` request header (stamped by middleware from URL or cookie)
//   2. `eh-lang` cookie (fallback if header was lost en route)
//   3. Default 'en'
//
// Only `ar` triggers augmentation; `en` passes through unchanged.
//
// Bilingual mode ('bi') was removed in May 2026 — the stacked layout
// didn't work for AI feedback content (model would emit one language
// or the other anyway). Legacy 'bi' cookie/header values are coerced
// to 'en' so old sessions degrade gracefully.
// ────────────────────────────────────────────────────────────────────────────

import type { NextRequest } from 'next/server'

const LANG_COOKIE = 'eh-lang'

/** Read the user's language preference from a NextRequest. */
export function resolveLocaleFromRequest(request: NextRequest): 'en' | 'ar' {
  const headerLang = request.headers.get('x-lang')
  if (headerLang === 'ar') return 'ar'
  if (headerLang === 'en' || headerLang === 'bi') return 'en'
  const cookieLang = request.cookies.get(LANG_COOKIE)?.value
  if (cookieLang === 'ar') return 'ar'
  // Legacy 'bi' folds to 'en'; anything unrecognised also falls through.
  return 'en'
}

/**
 * The Khaleeji Arabic directive appended to AI feedback prompts when the user
 * is in AR mode. Kept verbatim in one place so all essay-feedback / marking
 * routes stay consistent.
 */
export const KHALEEJI_LANGUAGE_DIRECTIVE = `LANGUAGE DIRECTIVE: The user has selected Arabic mode. Respond entirely in Khaleeji (Gulf) Arabic — use markers like شنو, شوف, الحين, إحنا, ببلاش, روح, شلون, دوّر, لحظة. Do NOT use Levantine forms (شو, بحكي, كيفك, ليش). Keep these terms in Latin script within Arabic text: The English Hub, GCSE, IGCSE, KS3, AO1-AO6, AQA, OCR, Edexcel, Cambridge, WJEC, Eduqas. Keep the student's English essay quotations IN ENGLISH (verbatim) when referring to their work — they're being taught English. Gender: binary M/F only; use masculine-default singular verbs when addressing the student.`

/**
 * If the request is in AR mode, append the Khaleeji language directive to the
 * given system prompt. Otherwise return the prompt unchanged.
 *
 * The directive is appended AT THE END so the existing prompt — including the
 * JSON response contract — is untouched. The model produces the same JSON
 * shape; only the natural-language text inside the JSON values changes.
 */
export function withArabicDirective(systemPrompt: string, request: NextRequest): string {
  const locale = resolveLocaleFromRequest(request)
  if (locale !== 'ar') return systemPrompt
  return `${systemPrompt}\n\n${KHALEEJI_LANGUAGE_DIRECTIVE}`
}
