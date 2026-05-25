/**
 * Placeholder override - 2026-05-16
 *
 * A deep SEO audit found the /pricing and /for-teachers pages rendering
 * literal "Heading", "Subheading Intro", "Apply Code" as visible body
 * text. Root cause: the embedded <AffiliateCodeField> and
 * <PromoCodePrompt> components call `billing.affiliate.*` /
 * `billing.trial.*` keys that exist ONLY in dictionary-audit-fix.ts
 * with auto-generated junk values (the Title-cased last path segment).
 *
 * This file supplies real UK-English copy for every billing.* key the
 * two components touch, plus `billing.affiliate.on_annual_label` which
 * was MISSING entirely (rendered as the literal [[billing.affiliate.on_annual_label]]).
 *
 * It is wired into lookup() BEFORE AUDIT_FIX_DICTIONARY so it wins on
 * collision (same precedence slot as PRESS_AND_VERIFIED_FIX). AR mirrors
 * EN as a graceful fallback until the next ar_translator sweep.
 */

import type { Dictionary } from './dictionary'

export const PLACEHOLDER_FIX_MAY16: Dictionary = {
  // ── Affiliate / access-code field (pricing + teacher pages) ──────
  'billing.affiliate.heading': {
    en: 'Have an access code?',
    ar: 'Have an access code?',
  },
  'billing.affiliate.subheading_intro': {
    en: 'Enter a partner or teacher code to unlock your discounted annual rate.',
    ar: 'Enter a partner or teacher code to unlock your discounted annual rate.',
  },
  'billing.affiliate.prompt_heading': {
    en: 'Got a code from a teacher or partner?',
    ar: 'Got a code from a teacher or partner?',
  },
  'billing.affiliate.apply_code': { en: 'Apply code', ar: 'Apply code' },
  'billing.affiliate.apply_short': { en: 'Apply', ar: 'Apply' },
  'billing.affiliate.aria_apply': { en: 'Apply discount code', ar: 'Apply discount code' },
  'billing.affiliate.checking': { en: 'Checking…', ar: 'Checking…' },
  'billing.affiliate.eg_prefix': { en: 'e.g.', ar: 'e.g.' },
  'billing.affiliate.placeholder_compact': { en: 'Enter code', ar: 'Enter code' },
  'billing.affiliate.error.empty': {
    en: 'Enter a code first.',
    ar: 'Enter a code first.',
  },
  'billing.affiliate.error.invalid': {
    en: "That code isn't valid or has expired.",
    ar: "That code isn't valid or has expired.",
  },
  'billing.affiliate.error.network': {
    en: "Couldn't check that code just now - please try again.",
    ar: "Couldn't check that code just now - please try again.",
  },
  'billing.affiliate.applied_prefix': { en: 'Code applied:', ar: 'Code applied:' },
  'billing.affiliate.applied_suffix': {
    en: '- your discount is locked in.',
    ar: '- your discount is locked in.',
  },
  'billing.affiliate.remove': { en: 'Remove', ar: 'Remove' },
  'billing.affiliate.saves_prefix': { en: 'Saves you', ar: 'Saves you' },
  'billing.affiliate.instead_of': { en: 'instead of', ar: 'instead of' },
  'billing.affiliate.or': { en: 'or', ar: 'or' },
  'billing.affiliate.per_year_short': { en: '/yr', ar: '/yr' },
  'billing.affiliate.label_student': { en: 'Student plan', ar: 'Student plan' },
  'billing.affiliate.label_student_annual': {
    en: 'Student annual',
    ar: 'Student annual',
  },
  'billing.affiliate.label_teacher': { en: 'Teacher plan', ar: 'Teacher plan' },
  'billing.affiliate.label_teacher_annual': {
    en: 'Teacher annual',
    ar: 'Teacher annual',
  },
  'billing.affiliate.no_monthly_discount': {
    en: 'Codes apply to annual plans only.',
    ar: 'Codes apply to annual plans only.',
  },
  'billing.affiliate.compact_blurb_saves': { en: 'Save', ar: 'Save' },
  'billing.affiliate.compact_blurb_on_annual': {
    en: 'on the annual plan',
    ar: 'on the annual plan',
  },
  'billing.affiliate.subheading_on_student_annual': {
    en: 'Applied to your Student annual plan.',
    ar: 'Applied to your Student annual plan.',
  },
  'billing.affiliate.subheading_on_teacher_annual': {
    en: 'Applied to your Teacher annual plan.',
    ar: 'Applied to your Teacher annual plan.',
  },
  'billing.affiliate.subheading_save_prefix': { en: 'You save', ar: 'You save' },
  // Was MISSING entirely - rendered as [[billing.affiliate.on_annual_label]]
  'billing.affiliate.on_annual_label': { en: 'on annual', ar: 'on annual' },

  // ── Trial countdown banner ───────────────────────────────────────
  'billing.trial.cta_upgrade_now': { en: 'Upgrade now', ar: 'Upgrade now' },
  'billing.trial.left_suffix': { en: 'left', ar: 'left' },
  'billing.trial.subline_default': {
    en: "You're on a free trial - upgrade any time to keep full access.",
    ar: "You're on a free trial - upgrade any time to keep full access.",
  },
  'billing.trial.subline_last_day': {
    en: 'Last day of your free trial - upgrade now to avoid losing access.',
    ar: 'Last day of your free trial - upgrade now to avoid losing access.',
  },
  'billing.trial.unit_day': { en: 'day', ar: 'day' },
  'billing.trial.unit_days': { en: 'days', ar: 'days' },
  'billing.trial.unit_h': { en: 'h', ar: 'h' },
  'billing.trial.unit_m': { en: 'm', ar: 'm' },
}
