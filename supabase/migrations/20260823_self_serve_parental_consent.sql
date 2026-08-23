-- Self-serve (non-school) parental consent for 13-15 year-old signups.
--
-- Defect this fixes
-- -----------------
-- The direct-signup guardian consent flow wrote its token to
-- `consent_tokens` (see 20260419_consent_tokens_table.sql) while the
-- parent-facing /consent page resolves tokens through
-- /api/school/consent/details, which reads `parental_consents.consent_token`.
-- Two stores, one link: every guardian who clicked the emailed link saw
-- "invalid or has already been used". Worse, `checkParentalConsent()`
-- (src/lib/consent-check.ts) only ever reads an approved `parental_consents`
-- row or a linked parent, so even a successful approval written to
-- `consent_tokens` could never unblock AI marking for the student.
--
-- The fix collapses the two stores onto `parental_consents`, because that
-- is the table the AI gate already reads. `parental_consents` was built for
-- the school flow and required a school, so this migration makes the school
-- optional and adds the send-throttling / expiry columns the self-serve
-- flow needs. `consent_tokens` is left in place (it may hold historic rows)
-- but is no longer written by application code.
--
-- Idempotent and additive: safe to re-run, no data is dropped or rewritten.
-- Follows the house style of 20260823_school_inquiries.sql.

-- 1. School becomes optional --------------------------------------------
-- A 13-15 year-old who signs up directly has no school. DROP NOT NULL is a
-- no-op when the column is already nullable, so this is re-runnable.
ALTER TABLE public.parental_consents
  ALTER COLUMN school_id DROP NOT NULL;

COMMENT ON COLUMN public.parental_consents.school_id IS
  'School the consent was requested for. NULL = self-serve signup (no school). '
  'The school-admin SELECT policy matches on school_id, so NULL rows are '
  'correctly invisible to every school - a direct signup is not a school''s data.';

-- 2. Link expiry ---------------------------------------------------------
-- The self-serve email promises a link that stops working after 7 days.
-- Existing school rows keep NULL, which the API treats as "no expiry" so
-- their behaviour is unchanged.
ALTER TABLE public.parental_consents
  ADD COLUMN IF NOT EXISTS expires_at TIMESTAMPTZ;

-- 3. Send throttling -----------------------------------------------------
-- Upstash rate limiting degrades to a per-instance in-memory map when Redis
-- is not configured, which is no limit at all on serverless. These two
-- columns are the durable backstop that stops a guardian's inbox being used
-- as a spam target: the API refuses to send again inside the cooldown or
-- past the lifetime cap.
ALTER TABLE public.parental_consents
  ADD COLUMN IF NOT EXISTS last_sent_at TIMESTAMPTZ;

ALTER TABLE public.parental_consents
  ADD COLUMN IF NOT EXISTS send_count INTEGER NOT NULL DEFAULT 0;

-- 4. One self-serve consent row per student ------------------------------
-- The table's UNIQUE (student_user_id, school_id) does not constrain
-- self-serve rows, because Postgres treats NULLs as distinct - a student
-- could accumulate a new row per resend, and the token lookup would then
-- resolve an arbitrary one. This partial index gives self-serve rows the
-- same one-row-per-student guarantee the school flow has.
CREATE UNIQUE INDEX IF NOT EXISTS parental_consents_self_serve_student_uniq
  ON public.parental_consents (student_user_id)
  WHERE school_id IS NULL;

-- 5. Token lookup --------------------------------------------------------
-- The parent-facing page looks a row up by token on every page load. The
-- UNIQUE constraint already indexes consent_token; this partial index keeps
-- the used/cleared tokens (set to NULL on decision) out of it.
CREATE INDEX IF NOT EXISTS parental_consents_token_idx
  ON public.parental_consents (consent_token)
  WHERE consent_token IS NOT NULL;

-- 6. Expiry housekeeping -------------------------------------------------
CREATE INDEX IF NOT EXISTS parental_consents_pending_expiry_idx
  ON public.parental_consents (expires_at)
  WHERE status = 'pending';

COMMENT ON TABLE public.parental_consents IS
  'Parental/guardian consent records. Two sources: the school flow '
  '(school_id set, requested by the student from their school page) and '
  'self-serve signups (school_id NULL, requested by /api/auth/parent-notify). '
  'An approved row is what checkParentalConsent() reads to unblock AI '
  'features for a minor. Read and written via the service role only; RLS '
  'lets a student SELECT their own row and school admins SELECT their '
  'school''s rows.';
