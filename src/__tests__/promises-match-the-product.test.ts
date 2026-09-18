import { describe, it, expect } from 'vitest'
import { lookup } from '@/lib/i18n/dictionary'
import { IELTS_LIMITS } from '@/constants/ielts-limits'

/**
 * Two promises the product could not keep, pinned in all three locales.
 *
 * The claim sheet is the only permitted source of public factual claims, and
 * the launch-readiness review recorded both of these as corrected. Neither
 * was. What survives a review is the thing a test asserts, so these are tests.
 *
 * 1. IELTS "unlimited" AI band feedback, against routes that enforce
 *    10 Writing and 30 Speaking assessments per rolling 24 hours. IELTS is the
 *    GBP 39/month adult product, so an unlimited promise against a 10-a-day
 *    cap is a refund and a CAP complaint on the first heavy user's first day.
 *
 * 2. The weekly parent email. The cron is gated on
 *    WEEKLY_PARENT_REPORTS_ENABLED, unset in production, so not one has ever
 *    been sent — while the FAQ, the parent signup subtitle, the notification
 *    toggle and the parent settings blurb all promised it. /for-parents
 *    hedged honestly, so the site contradicted itself.
 *
 * Both sets of copy must change back only when the feature changes: turning on
 * the parent cron, or lifting the rate limits, is what makes these assertions
 * wrong.
 */

const LOCALES = ['en', 'ar', 'es'] as const

/** The three keys that advertised IELTS AI feedback as unbounded. */
const IELTS_CLAIM_KEYS = [
  'pricing.ielts.subtitle',
  'ielts.modelans.upsell.body',
  'ielts.diagnostic.usage.last_free_note',
] as const

/** Every key that promised a weekly parent email. */
const PARENT_EMAIL_KEYS = [
  'faqs.pr4.a',
  'parent.create_account_subtitle',
  'parent.notif_weekly_desc',
  'parent.weekly_email_reports_desc',
  'dashboard.parent_settings.free_access_desc',
] as const

// ─── IELTS ──────────────────────────────────────────────────────────────

describe('IELTS AI feedback is never advertised as unlimited', () => {
  it.each(IELTS_CLAIM_KEYS)('%s says no such thing, in any locale', (key) => {
    for (const locale of LOCALES) {
      const s = lookup(key, locale)
      expect(s, `${key}/${locale} is missing`).toBeTruthy()
      expect(s.toLowerCase(), `${key}/${locale}`).not.toMatch(/\bunlimited\b/)
      // The Spanish and Arabic equivalents, which is how two of the three
      // originally survived an English-only review.
      expect(s.toLowerCase(), `${key}/${locale}`).not.toMatch(/ilimitad/)
      expect(s, `${key}/${locale}`).not.toMatch(/غير محدود|بلا حدود/)
    }
  })

  it('states the real allowance rather than staying vague', () => {
    const en = lookup('pricing.ielts.subtitle', 'en')
    expect(en).toContain(String(IELTS_LIMITS.WRITING_PER_DAY))
    expect(en).toContain(String(IELTS_LIMITS.SPEAKING_PER_DAY))
  })

  it('renders the numbers from the constants the routes enforce', () => {
    // If someone raises the Writing cap to 25, this fails until the copy is
    // regenerated - which it is, because the string interpolates the constant.
    for (const key of IELTS_CLAIM_KEYS) {
      const en = lookup(key, 'en')
      expect(en, `${key} should carry a real number`).toMatch(
        new RegExp(`\\b${IELTS_LIMITS.WRITING_PER_DAY}\\b`),
      )
    }
  })

  it('does not claim the feedback is examiner-calibrated', () => {
    // The claim sheet permits "calibrated to IELTS band descriptors".
    // "examiner-calibrated" asserts a human examiner calibration that has not
    // been performed.
    expect(lookup('pricing.ielts.subtitle', 'en').toLowerCase()).not.toContain(
      'examiner-calibrated',
    )
  })
})

// ─── The weekly parent email ────────────────────────────────────────────

describe('the weekly parent email is not promised while it does not send', () => {
  it.each(PARENT_EMAIL_KEYS)('%s makes no unqualified promise, in any locale', (key) => {
    for (const locale of LOCALES) {
      const s = lookup(key, locale)
      expect(s, `${key}/${locale} is missing`).toBeTruthy()

      const promisesWeekly =
        /weekly (email )?(report|summar)/i.test(s) ||
        /informe[s]? semanal/i.test(s) ||
        /resumen de la semana/i.test(s) ||
        /تقرير أسبوعي|تقارير أسبوعية|ملخّص أسبوع/.test(s)

      if (!promisesWeekly) continue

      // Where it is still mentioned, it must be qualified as not yet sending.
      const qualified =
        /not (being )?sent yet|being finalised|not yet|from the first sunday/i.test(s) ||
        /todav[íi]a no se env[íi]a|se est[áa]n finalizando|primer domingo/i.test(s) ||
        /ما تُرسل|ما يُرسل|قيد الإعداد|أول يوم أحد/.test(s)

      expect(qualified, `${key}/${locale} promises a weekly email with no caveat:\n${s}`).toBe(true)
    }
  })

  it('keeps the FAQ in step with the honest /for-parents wording', () => {
    const en = lookup('faqs.pr4.a', 'en')
    // The dashboard is real and should still be claimed.
    expect(en.toLowerCase()).toContain('dashboard')
    expect(en).toMatch(/not sent yet|being finalised/i)
  })

  it('still records the parent preference rather than hiding the toggle', () => {
    // Removing the toggle would lose the signal of who wants the report when
    // it ships. The label stays; only the promise is qualified.
    expect(lookup('parent.notif_weekly_label', 'en')).toBeTruthy()
    expect(lookup('parent.weekly_email_reports', 'en')).toBeTruthy()
  })
})
