# Database Migrations

This directory contains SQL migrations for The English Hub Supabase database. Migrations are numbered in order and should be run sequentially.

## Migration Index

| File | Description | Date |
|------|-------------|------|
| `001_initial_schema.sql` | Core tables: profiles, courses, modules, quiz_questions, enrolments, module_progress, assessment_attempts, certificates, practice_sessions. RLS policies, triggers, indexes. | Initial |
| `002_affiliate_system.sql` | LearnRight affiliate programme: affiliates, affiliate_referrals, affiliate_payouts, affiliate_commission_defaults. Helper function for commission calculation. | 2026-03-21 |
| `003_school_analytics.sql` | Schools platform: schools, school_members, classes, class_students, school_join_codes, analytics_snapshots. | 2026-03-21 |
| `20260322_new_features.sql` | QA/QC Cycle 6: parental_consents table (GDPR), invite token expiration on school_members, contact_submissions table, date_of_birth on profiles. | 2026-03-22 |

## New Features Migration (20260322)

This migration adds database support for four features identified during the QA/QC audit:

### 1. Parental Consent Tracking (GDPR)

**Table:** `parental_consents`

Tracks consent requests sent to parents/guardians of students under 16 (UK GDPR requirement). A student triggers a consent request via the `/api/school/consent` endpoint, which creates a record with a unique token. The parent clicks a link containing the token to approve or deny.

**Columns:**
- `student_user_id` — references `profiles(id)`
- `school_id` — references `schools(id)`
- `parent_email` — the guardian's email address
- `consent_token` — unique hex token (set to NULL after use)
- `status` — `pending`, `approved`, or `denied`
- `consented_at` — timestamp when parent responded

**Also adds:** `date_of_birth` column on `profiles` (used by the consent route to determine if a student is under 16).

### 2. Invite Token Expiration

**Column added:** `school_members.invite_expires_at`

Pending school member invites now have an expiration timestamp. A cron job at `/api/cron/expire-invites` runs daily and marks expired invites as `'expired'`. Existing pending invites are backfilled with a 7-day window.

### 3. Contact Form Submissions

**Table:** `contact_submissions`

Stores submissions from the help/contact page. All access is via the service role client (no public RLS policies), so rows are invisible to regular authenticated users.

**Columns:** `name`, `email`, `subject`, `message`, `status` (`new` / `read` / `replied` / `archived`).

### 4. Subscription End Date

The `profiles.subscription_end_date` column already exists in `001_initial_schema.sql` — no migration needed. Documented here for completeness since the billing page and Stripe webhook reference it.

## How to Run

**Option A — Supabase CLI:**
```bash
supabase db push
```

**Option B — SQL Editor:**
Copy the contents of the `.sql` file and run it in the Supabase dashboard SQL editor.

**Option C — psql:**
```bash
psql "$DATABASE_URL" -f supabase/migrations/20260322_new_features.sql
```

## Schema Overview

After all migrations, the database contains these tables:

**Core (001):** profiles, courses, modules, quiz_questions, enrolments, module_progress, assessment_attempts, certificates, practice_sessions

**Affiliates (002):** affiliates, affiliate_referrals, affiliate_payouts, affiliate_commission_defaults

**Schools (003):** schools, school_members, classes, class_students, school_join_codes, analytics_snapshots

**New Features (20260322):** parental_consents, contact_submissions (+ columns on profiles and school_members)
