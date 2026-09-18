-- ─── Five tables that public forms write to and no migration ever created ───
--
-- THE DEFECT (18 September 2026, verified against information_schema: 78 live
-- tables, none of these among them, and no migration declares them)
--
--   creator_applications     POST /api/creator-apply     the /creators form
--   school_contact_requests  POST /api/school/contact    the schools contact form
--   waitlist                 POST /api/waitlist          course waitlist
--   feedback_entries         POST/GET/PATCH /api/feedback suggestions and issues
--   teacher_referrals        POST /api/teacher-signup    the teacher lead form
--
-- Each route inserts into its table with the service-role client. With the
-- table absent, PostgREST answers 42P01 and the route returns 500 (the waitlist
-- route catches the code and tells the visitor they are on a list that does
-- not exist). So the creator programme has had no working entry point, the
-- schools contact form has never recorded an enquiry, and feedback has never
-- been stored. Column names and types below are taken from the routes' own
-- insert payloads and read filters, so no route changes.
--
-- All five hold personal data supplied by the public (names, emails, a phone
-- number). Service-role only; no user-facing policy. Retention: these are
-- enquiry records, so they belong on the same 2-year "support comms" clock the
-- retention chapter defines; adding them to /api/cron/data-retention is a
-- follow-up recorded in docs/HANDOVER.md.
--
-- Idempotent.
-- ────────────────────────────────────────────────────────────────────────────

CREATE TABLE IF NOT EXISTS public.creator_applications (
  id                  UUID        PRIMARY KEY DEFAULT gen_random_uuid(),
  name                TEXT        NOT NULL,
  email               TEXT        NOT NULL,
  platform            TEXT        NOT NULL,
  handle              TEXT,
  follower_count      TEXT        NOT NULL,
  content_description TEXT        NOT NULL,
  status              TEXT        NOT NULL DEFAULT 'pending',
  created_at          TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at          TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS creator_applications_email_idx ON public.creator_applications (email);
CREATE INDEX IF NOT EXISTS creator_applications_status_idx ON public.creator_applications (status, created_at DESC);
ALTER TABLE public.creator_applications ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "creator_applications_service_role_all" ON public.creator_applications;
CREATE POLICY "creator_applications_service_role_all" ON public.creator_applications
  FOR ALL TO service_role USING (true) WITH CHECK (true);


CREATE TABLE IF NOT EXISTS public.school_contact_requests (
  id                UUID        PRIMARY KEY DEFAULT gen_random_uuid(),
  school_name       TEXT        NOT NULL,
  contact_name      TEXT        NOT NULL,
  email             TEXT        NOT NULL,
  phone             TEXT,
  country_code      TEXT,
  preferred_contact TEXT,
  role              TEXT,
  student_count     TEXT,
  exam_board        TEXT,
  message           TEXT,
  status            TEXT        NOT NULL DEFAULT 'new',
  created_at        TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at        TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS school_contact_requests_status_idx ON public.school_contact_requests (status, created_at DESC);
ALTER TABLE public.school_contact_requests ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "school_contact_requests_service_role_all" ON public.school_contact_requests;
CREATE POLICY "school_contact_requests_service_role_all" ON public.school_contact_requests
  FOR ALL TO service_role USING (true) WITH CHECK (true);


CREATE TABLE IF NOT EXISTS public.waitlist (
  id         UUID        PRIMARY KEY DEFAULT gen_random_uuid(),
  email      TEXT        NOT NULL,
  subject    TEXT        NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  CONSTRAINT waitlist_email_subject_key UNIQUE (email, subject)
);
ALTER TABLE public.waitlist ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "waitlist_service_role_all" ON public.waitlist;
CREATE POLICY "waitlist_service_role_all" ON public.waitlist
  FOR ALL TO service_role USING (true) WITH CHECK (true);


CREATE TABLE IF NOT EXISTS public.feedback_entries (
  id          UUID        PRIMARY KEY DEFAULT gen_random_uuid(),
  type        TEXT        NOT NULL CHECK (type IN ('suggestion', 'issue')),
  status      TEXT        NOT NULL DEFAULT 'new',
  page_url    TEXT        NOT NULL,
  email       TEXT,
  -- The signed-in reporter's Supabase auth id, when there was one. Set null on
  -- account erasure rather than deleting the feedback itself.
  user_id     UUID        REFERENCES auth.users(id) ON DELETE SET NULL,
  subject     TEXT,
  message     TEXT,
  category    TEXT,
  issue_type  TEXT,
  description TEXT,
  severity    TEXT,
  created_at  TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at  TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS feedback_entries_type_status_idx ON public.feedback_entries (type, status, created_at DESC);
ALTER TABLE public.feedback_entries ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "feedback_entries_service_role_all" ON public.feedback_entries;
CREATE POLICY "feedback_entries_service_role_all" ON public.feedback_entries
  FOR ALL TO service_role USING (true) WITH CHECK (true);


CREATE TABLE IF NOT EXISTS public.teacher_referrals (
  id             UUID        PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name      TEXT        NOT NULL,
  school_email   TEXT        NOT NULL,
  school_name    TEXT        NOT NULL,
  exam_board     TEXT,
  student_count  TEXT,
  referral_code  TEXT        NOT NULL,
  status         TEXT        NOT NULL DEFAULT 'pending',
  referral_count INTEGER     NOT NULL DEFAULT 0,
  created_at     TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at     TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  CONSTRAINT teacher_referrals_school_email_key UNIQUE (school_email),
  CONSTRAINT teacher_referrals_referral_code_key UNIQUE (referral_code)
);
ALTER TABLE public.teacher_referrals ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "teacher_referrals_service_role_all" ON public.teacher_referrals;
CREATE POLICY "teacher_referrals_service_role_all" ON public.teacher_referrals
  FOR ALL TO service_role USING (true) WITH CHECK (true);
