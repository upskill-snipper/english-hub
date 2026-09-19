import { describe, it, expect } from 'vitest'
import { readFileSync } from 'node:fs'
import { join } from 'node:path'
import { lookup } from '@/lib/i18n/dictionary'
import { EN_MESSAGES } from '@/lib/i18n/generated/en'
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

// ─── The pricing page ───────────────────────────────────────────────────

describe('the pricing page follows the positioning house', () => {
  const COMPETITORS = ['seneca', 'gcsepod', 'tassomai', 'quizlet', 'sparx', 'century tech']

  it('names no competitor in pricing or marketing copy', () => {
    // Section 5 of the positioning house forbids any comparison table carrying
    // a competitor's name: naming one is disparaging, unverifiable and
    // unnecessary. /pricing carried a "Compare to competitors" table naming
    // three, with a hardcoded rival price and a footnote admitting the figures
    // were "as of April 2026 - may be out of date" - screenshottable by a
    // prospect or by the competitor.
    // Scoped to the selling surfaces. Seneca is also a Roman tragedian who
    // appears legitimately in the Hamlet and Romeo and Juliet revision notes,
    // so a whole-dictionary sweep would flag the study content it is there to
    // protect.
    const SELLING_PREFIXES = ['pricing.', 'home.', 'teachers.', 'schools.', 'faqs.']
    const offenders: string[] = []
    for (const [key, value] of Object.entries(EN_MESSAGES)) {
      if (typeof value !== 'string') continue
      if (!SELLING_PREFIXES.some((p) => key.startsWith(p))) continue
      const lower = value.toLowerCase()
      for (const name of COMPETITORS) {
        if (lower.includes(name)) offenders.push(`${key}: ${value.slice(0, 80)}`)
      }
    }
    expect(offenders, 'a competitor is named in customer-facing copy').toEqual([])
  })

  it('applies no unevidenced urgency to the price', () => {
    // "Early Access - Founding Price · limited time" on both cards. The offer
    // architecture bans unevidenced pressure, and there is no date behind it.
    const en = lookup('pricing.limited_time', 'en')
    // The key may still exist; what matters is that the page stopped using it.
    const page = readFileSync(join(process.cwd(), 'src/app/pricing/page.tsx'), 'utf8')
    expect(page, `still renders "${en}" on the cards`).not.toContain("t('pricing.limited_time')")
  })

  it('does not print "no card required" above a button that takes a card', () => {
    // The card trial line sat directly above "Start 7-day free trial", which
    // POSTs /api/stripe/checkout with trial_period_days. The no-card trial is
    // real - it is the one you get by creating an account - but it is not the
    // one that button starts.
    const page = readFileSync(join(process.cwd(), 'src/app/pricing/page.tsx'), 'utf8')
    expect(page).not.toContain("t('pricing.trial_line_card_required')")
    expect(lookup('pricing.trial_line_card_on_file', 'en')).toMatch(/card on file/i)
  })

  it('states the promo code applies to both annual plans, as the code allows', () => {
    // faq.a5 said "Only applies to annual student billing" while the Teacher
    // card on the same page offered the annual rate with the code, and
    // /api/promo/redeem lists teacher_annual among the allowed products.
    for (const locale of LOCALES) {
      const a5 = lookup('pricing.faq.a5', locale)
      expect(a5.toLowerCase(), `${locale}`).not.toMatch(
        /only applies to annual student|solo se aplica a la facturación anual de estudiante/,
      )
      expect(a5, `${locale}`).not.toMatch(/ينطبق فقط على فوترة الطالب السنوية/)
    }
    expect(lookup('pricing.faq.a5', 'en')).toMatch(/teacher/i)
  })
})

// ─── Hardcoded claims outside the dictionary ────────────────────────────

describe('billing surfaces that hardcode their own copy', () => {
  // The dictionary sweep above cannot see these: they are string literals
  // inside page components. The cancel page listed "AI-powered essay feedback
  // on unlimited submissions" and slipped through the checker for exactly that
  // reason, alongside two features that do not exist for the customer at all.
  const BILLING_PAGES = [
    'src/app/dashboard/subscription/cancel/page.tsx',
    'src/app/dashboard/subscription/page.tsx',
  ]

  function code(rel: string): string {
    const raw = readFileSync(join(process.cwd(), rel), 'utf8')
    // Comments explain the defect and quote the old wording, so strip them.
    return raw.replace(/\/\*[\s\S]*?\*\//g, '').replace(/(^|[^:])\/\/.*$/gm, '$1')
  }

  it.each(BILLING_PAGES)('%s makes no unlimited claim', (rel) => {
    expect(code(rel).toLowerCase()).not.toMatch(/\bunlimited\b/)
  })

  it('does not tell a cancelling customer they lose human review', () => {
    // human_review_requests holds 0 rows in production and there is no
    // user-facing route to create one. Listing it as a loss at the moment
    // someone cancels is the worst place to overstate the product.
    expect(code(BILLING_PAGES[0]!)).not.toMatch(/Human review request/i)
  })
})
