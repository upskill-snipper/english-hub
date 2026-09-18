-- ─── Examiner Marking Tool ──────────────────────────────────────────────────
--
-- Two new tables for the teacher-facing examiner tool at /toolkit/examiner.
-- Both are keyed on the Supabase auth uuid (the tool's user is a signed-in
-- teacher; there is no student account involved, which is why this does not
-- reuse marking_submissions, whose student_id and school_id are NOT NULL).
--
--   examiner_mark_schemes  - the teacher's library of pasted or uploaded mark
--                            scheme text, one row per scheme per pack. Not
--                            personal data.
--   examiner_marking_runs  - saved results: transcript, notes, commentary and
--                            mark for one candidate script. A transcript is a
--                            child's writing and the candidate label is a name
--                            the teacher typed or the tool read off the page,
--                            so rows carry an expires_at (180 days) that the
--                            runs route sweeps for the owner on every read,
--                            and ON DELETE CASCADE so an account erasure
--                            removes them. Photographs of scripts are NEVER
--                            stored anywhere on the server.
--
-- All API access is service-role. RLS is defence in depth: owners can read
-- and delete their own rows from an authenticated client; nothing else can.
--
-- Idempotent.
-- ────────────────────────────────────────────────────────────────────────────

CREATE TABLE IF NOT EXISTS public.examiner_mark_schemes (
  id            UUID        PRIMARY KEY DEFAULT gen_random_uuid(),
  owner_id      UUID        NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  pack_id       TEXT        NOT NULL,
  name          TEXT        NOT NULL,
  body          TEXT        NOT NULL,
  char_count    INTEGER     NOT NULL DEFAULT 0,
  source_kind   TEXT        CHECK (source_kind IS NULL OR source_kind IN ('pdf', 'docx', 'text', 'paste')),
  created_at    TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at    TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS examiner_mark_schemes_owner_pack_idx
  ON public.examiner_mark_schemes (owner_id, pack_id, updated_at DESC);

ALTER TABLE public.examiner_mark_schemes ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "examiner_mark_schemes_service_role_all" ON public.examiner_mark_schemes;
DROP POLICY IF EXISTS "examiner_mark_schemes_owner_select"     ON public.examiner_mark_schemes;
DROP POLICY IF EXISTS "examiner_mark_schemes_owner_delete"     ON public.examiner_mark_schemes;

CREATE POLICY "examiner_mark_schemes_service_role_all"
  ON public.examiner_mark_schemes FOR ALL TO service_role
  USING (true) WITH CHECK (true);

CREATE POLICY "examiner_mark_schemes_owner_select"
  ON public.examiner_mark_schemes FOR SELECT TO authenticated
  USING (auth.uid() = owner_id);

CREATE POLICY "examiner_mark_schemes_owner_delete"
  ON public.examiner_mark_schemes FOR DELETE TO authenticated
  USING (auth.uid() = owner_id);


CREATE TABLE IF NOT EXISTS public.examiner_marking_runs (
  id                    UUID        PRIMARY KEY DEFAULT gen_random_uuid(),
  owner_id              UUID        NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  pack_id               TEXT        NOT NULL,
  question_id           TEXT        NOT NULL,
  batch_id              UUID,
  candidate_label       TEXT,
  page_count            INTEGER     NOT NULL DEFAULT 0,
  transcript            TEXT,
  transcript_notes      TEXT,
  commentary            TEXT,
  mark                  INTEGER,
  max_mark              INTEGER,
  mark_note             TEXT,
  doubtful_readings     INTEGER     NOT NULL DEFAULT 0,
  unreadable_stretches  INTEGER     NOT NULL DEFAULT 0,
  model_transcribe      TEXT,
  model_mark            TEXT,
  expires_at            TIMESTAMPTZ NOT NULL DEFAULT (NOW() + INTERVAL '180 days'),
  created_at            TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS examiner_marking_runs_owner_created_idx
  ON public.examiner_marking_runs (owner_id, created_at DESC);

CREATE INDEX IF NOT EXISTS examiner_marking_runs_expires_idx
  ON public.examiner_marking_runs (expires_at);

ALTER TABLE public.examiner_marking_runs ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "examiner_marking_runs_service_role_all" ON public.examiner_marking_runs;
DROP POLICY IF EXISTS "examiner_marking_runs_owner_select"     ON public.examiner_marking_runs;
DROP POLICY IF EXISTS "examiner_marking_runs_owner_delete"     ON public.examiner_marking_runs;

CREATE POLICY "examiner_marking_runs_service_role_all"
  ON public.examiner_marking_runs FOR ALL TO service_role
  USING (true) WITH CHECK (true);

CREATE POLICY "examiner_marking_runs_owner_select"
  ON public.examiner_marking_runs FOR SELECT TO authenticated
  USING (auth.uid() = owner_id);

CREATE POLICY "examiner_marking_runs_owner_delete"
  ON public.examiner_marking_runs FOR DELETE TO authenticated
  USING (auth.uid() = owner_id);
