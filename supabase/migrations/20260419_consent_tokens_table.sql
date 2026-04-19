-- ─── Parental consent tokens (P0-DATA-3, P0-SEC parent consent path) ────
--
-- Referenced by `src/app/api/auth/parent-notify/route.ts:110` which
-- upserts a row when a minor triggers the parental consent email, and
-- is read by `src/app/api/school/consent/route.ts` (and the /consent
-- page) when the parent clicks through the emailed link.
--
-- No CREATE TABLE for this lived in committed migrations. The upsert
-- was wrapped in a try/catch that logs and continues, so parent emails
-- have been going out with a consent_token that the /consent page
-- cannot actually validate. Result: the parental consent flow for
-- under-16s has been non-functional since it shipped.
--
-- Columns:
--   token          — URL-safe hex string, unique; the parent's "key".
--   student_id     — FK to auth.users; the minor whose consent is
--                    being sought. CASCADE so account deletion cleans up.
--   parent_email   — the email the token was sent to.
--   student_name   — denormalised for email-template use; not security
--                    critical (same value is on profiles).
--   expires_at     — 7 days by default (see parent-notify route).
--   status         — 'pending' | 'approved' | 'denied' | 'expired'.
-- ──────────────────────────────────────────────────────────────────────

CREATE TABLE IF NOT EXISTS public.consent_tokens (
  token         TEXT PRIMARY KEY,
  student_id    UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  parent_email  TEXT NOT NULL,
  student_name  TEXT,
  expires_at    TIMESTAMPTZ NOT NULL,
  status        TEXT NOT NULL DEFAULT 'pending'
                CHECK (status IN ('pending', 'approved', 'denied', 'expired')),
  created_at    TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  acted_at      TIMESTAMPTZ
);

-- Look up the latest pending token per student (rare case: a parent
-- loses the email and the student re-requests — the upsert replaces
-- the token for that student + email combo).
CREATE INDEX IF NOT EXISTS idx_consent_tokens_student
  ON public.consent_tokens(student_id, status);

-- Housekeeping cron hook — expire old tokens.
CREATE INDEX IF NOT EXISTS idx_consent_tokens_expires
  ON public.consent_tokens(expires_at)
  WHERE status = 'pending';

-- RLS: only service role (bypasses RLS) writes; no authenticated client
-- has any reason to read this table directly. The /consent page hits
-- the token via a server route that uses service role. Enabling RLS
-- with no policies = deny-by-default for anon + authenticated.
ALTER TABLE public.consent_tokens ENABLE ROW LEVEL SECURITY;

COMMENT ON TABLE public.consent_tokens IS
  'Parental consent tokens emitted to parents of under-16 users. Token is a 32-byte hex crypto-random string. CASCADE on student_id so user deletion cleans up. Read and written only via service role.';
