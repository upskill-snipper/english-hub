# API Rate Limit Audit

**Date:** 2026-04-12
**Total routes:** 97

---

## Summary

- 90 routes have rate limiting
- 5 cron routes skipped (protected by CRON_SECRET)
- 1 webhook route skipped (Stripe signature verification)
- 1 health check route skipped (trivial, read-only)

---

## Priority Routes (fixed/verified)

| Route | Status | Limit | Key | Action Taken |
|---|---|---|---|---|
| `/api/mark` | Has RL | 10/day per user | `mark:{userId}` | No change needed |
| `/api/mark/stream` | Has RL | 10/day per user | `mark:{userId}` | No change needed |
| `/api/essay/feedback` | Has RL | 10/day per user | `essay-feedback-v2:{userId}` | **Tightened** from 20/hr to 10/day |
| `/api/auth/register` | Has RL | 5/hr per IP | `register:{ip}` | **Tightened** from 10/15min to 5/hr |
| `/api/contact` | Has RL | 3/hr per IP | `contact:{ip}` | **Tightened** from 5/hr to 3/hr |
| `/api/affiliate/track-click` | Has RL | 100/min per IP | `affiliate-click:{ip}` | **Tightened** from 120/min to 100/min |
| `/api/board` | Has RL | 10/min per IP | `board:{ip}` | **Added** rate limiting |

---

## Routes Added Rate Limiting

| Route | Limit | Key |
|---|---|---|
| `/api/board` | 10/min per IP | `board:{ip}` |
| `/api/generate-pptx` | 20/hr per IP | `generate-pptx:{ip}` |
| `/api/affiliate/payouts` | 30/min per user | `affiliate-payouts:{userId}` |
| `/api/safeguarding/report/[id]` | 30/min per user | `safeguarding-report:{userId}` |
| `/api/school/export/template` | 30/min per IP | `school-export-template:{ip}` |
| `/api/school/import/[jobId]` | 60/min per user | `school-import-job:{userId}` |

---

## Routes OK Without Rate Limiting

| Route | Reason |
|---|---|
| `/api/health` | Trivial read-only status check |
| `/api/analytics/aggregate` | Cached public aggregate data (GET only, 1hr cache) |
| `/api/cron/affiliate-confirm` | Protected by CRON_SECRET |
| `/api/cron/data-retention` | Protected by CRON_SECRET |
| `/api/cron/expire-invites` | Protected by CRON_SECRET |
| `/api/cron/school-access` | Protected by CRON_SECRET |
| `/api/cron/weekly-reports` | Protected by CRON_SECRET |
| `/api/stripe/webhook` | Protected by Stripe signature verification |

---

## All Routes With Existing Rate Limiting (no changes)

| Route | Limit |
|---|---|
| `/api/account/delete` | Existing RL |
| `/api/admin/affiliates` | Existing RL |
| `/api/admin/affiliates/approve` | Existing RL |
| `/api/admin/affiliates/payout` | Existing RL |
| `/api/admin/stats` | Existing RL |
| `/api/admin/users` | Existing RL |
| `/api/admin/users/[id]` | Existing RL |
| `/api/admin/users/[id]/consents` | Existing RL |
| `/api/affiliate/generate-link` | Existing RL |
| `/api/affiliate/signup` | Existing RL |
| `/api/affiliate/track-conversion` | Existing RL |
| `/api/affiliates/apply` | Existing RL |
| `/api/auth/parent-notify` | Existing RL |
| `/api/auth/teacher-signup` | Existing RL |
| `/api/auth/validate-age` | Existing RL |
| `/api/breach` | Existing RL |
| `/api/certificates` | Existing RL |
| `/api/consent` | Existing RL |
| `/api/consent/history` | Existing RL |
| `/api/creator-apply` | Existing RL |
| `/api/dsar` | Existing RL |
| `/api/dsar/[id]` | Existing RL |
| `/api/dsar/export` | Existing RL |
| `/api/essay-feedback` | Existing RL |
| `/api/feedback` | Existing RL |
| `/api/parent/invite` | Existing RL |
| `/api/parent/invite/validate` | Existing RL |
| `/api/parent/link` | Existing RL |
| `/api/parent/link-child` | Existing RL |
| `/api/parent/progress` | Existing RL |
| `/api/parent/progress/[childId]` | Existing RL |
| `/api/parent/unlink` | Existing RL |
| `/api/privacy/delete-account` | Existing RL |
| `/api/privacy/delete-essay` | Existing RL |
| `/api/privacy/export` | Existing RL |
| `/api/privacy/settings` | Existing RL |
| `/api/review` | Existing RL |
| `/api/review/[id]` | Existing RL |
| `/api/safeguarding/report` | Existing RL |
| `/api/school-inquiry` | Existing RL |
| `/api/school/access` | Existing RL |
| `/api/school/analytics` | Existing RL |
| `/api/school/analytics/class-performance` | Existing RL |
| `/api/school/analytics/department-overview` | Existing RL |
| `/api/school/analytics/student-insights` | Existing RL |
| `/api/school/assignments` | Existing RL |
| `/api/school/assignments/[id]` | Existing RL |
| `/api/school/classes` | Existing RL |
| `/api/school/classes/[classId]` | Existing RL |
| `/api/school/classes/[classId]/analytics` | Existing RL |
| `/api/school/classes/[classId]/students` | Existing RL |
| `/api/school/consent` | Existing RL |
| `/api/school/consent/details` | Existing RL |
| `/api/school/contact` | Existing RL |
| `/api/school/export` | Existing RL |
| `/api/school/export/logins` | Existing RL |
| `/api/school/export/report` | Existing RL |
| `/api/school/export/users` | Existing RL |
| `/api/school/import` | Existing RL |
| `/api/school/interventions` | Existing RL |
| `/api/school/invite` | Existing RL |
| `/api/school/invite/[token]` | Existing RL |
| `/api/school/invite/accept` | Existing RL |
| `/api/school/join` | Existing RL |
| `/api/school/join-codes` | Existing RL |
| `/api/school/join-codes/[code]` | Existing RL |
| `/api/school/members` | Existing RL |
| `/api/school/members/[id]` | Existing RL |
| `/api/school/overview` | Existing RL |
| `/api/school/promo/validate` | Existing RL |
| `/api/school/register` | Existing RL |
| `/api/school/reports/generate` | Existing RL |
| `/api/school/roles` | Existing RL |
| `/api/school/settings` | Existing RL |
| `/api/school/students` | Existing RL |
| `/api/school/students/[studentId]` | Existing RL |
| `/api/school/students/[studentId]/trends` | Existing RL |
| `/api/stripe/cancel` | Existing RL |
| `/api/stripe/checkout` | Existing RL |
| `/api/stripe/portal` | Existing RL |
| `/api/teacher-signup` | Existing RL |
| `/api/user/password` | Existing RL |
| `/api/user/profile` | Existing RL |
| `/api/waitlist` | Existing RL |
