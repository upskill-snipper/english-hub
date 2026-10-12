// ─── Access and billing ─────────────────────────────────────────────────────
// /school/billing
//
// REPLACED 12 OCTOBER 2026. The page offered four per-pupil price tiers
// (£12, £15, £22 and £26 a pupil, with "founder" halves), a "founding schools
// remaining" counter and renewal pricing, none of it from
// src/constants/pricing.ts, and all of it contradicting what schools are
// actually sold: a pilot for a term or a founding place for a year, agreed
// in writing and invoiced, with no billing inside the portal. A head of
// department reading it would have seen prices nobody had offered them.
//
// It now states the school's real access, read server-side by
// requireSchoolAdmin (the same rule as the portal gate), that schools are
// invoiced, and whom to ask. It names no prices: the price is in the
// school's own agreement, and the one place prices live in code is
// src/constants/pricing.ts.
//
// Admins and heads of department only, matching the sidebar.

import { requireSchoolAdmin } from '@/lib/school-access'
import { SCHOOLS_CONTACT_EMAIL } from '@/config/company'
import { getLocale, t } from '@/lib/i18n/t'
import { formatDate, type FormatLocale } from '@/lib/utils'

export const dynamic = 'force-dynamic'

export default async function SchoolBillingPage() {
  const access = await requireSchoolAdmin()
  const locale = await getLocale()

  if (!access) {
    return (
      <div className="mx-auto max-w-2xl rounded-xl border border-border bg-card p-6">
        <p className="text-sm text-muted-foreground">
          {await t('school.portal.billing.staff_only')}
        </p>
      </div>
    )
  }

  const statusKey =
    access.accessType === 'founder'
      ? 'school.portal.billing.status_founder'
      : access.accessType === 'trial'
        ? 'school.portal.billing.status_trial'
        : 'school.portal.billing.status_paid'

  const [title, status, until, noEnd, invoiced, contact] = await Promise.all([
    t('school.portal.nav.billing'),
    t(statusKey),
    t('school.portal.billing.until'),
    t('school.portal.billing.no_end'),
    t('school.portal.billing.invoiced'),
    t('school.portal.billing.contact'),
  ])
  const [before, after] = contact.split('{email}')

  return (
    <div className="mx-auto max-w-2xl space-y-6">
      <h1 className="text-2xl font-bold text-foreground">{title}</h1>

      <section className="rounded-xl border border-border bg-card p-6">
        <p className="text-base font-semibold text-foreground">{access.schoolName}</p>
        <p className="mt-2 text-sm text-foreground">{status}</p>
        <p className="mt-1 text-sm text-muted-foreground">
          {access.accessUntil
            ? until.replace(
                '{date}',
                // Provisioning stores the end of the last day in UTC; noon UTC
                // on that date reads as the same date in any timezone.
                formatDate(`${access.accessUntil.slice(0, 10)}T12:00:00Z`, locale as FormatLocale),
              )
            : noEnd}
        </p>
      </section>

      <section className="space-y-3 rounded-xl border border-border bg-card p-6 text-sm text-muted-foreground">
        <p>{invoiced}</p>
        <p>
          {before}
          <a
            href={`mailto:${SCHOOLS_CONTACT_EMAIL}`}
            className="font-medium text-primary underline-offset-4 hover:underline"
          >
            {SCHOOLS_CONTACT_EMAIL}
          </a>
          {after}
        </p>
      </section>
    </div>
  )
}
