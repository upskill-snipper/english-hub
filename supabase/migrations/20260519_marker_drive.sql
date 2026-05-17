-- ─── Smart IP — Paid Marker Drive ─────────────────────────────────────────
--
-- Adds the operational layer for a paid external-marker corpus drive on top
-- of the existing marking_submissions spine (20260518_smart_ip_marking.sql):
--   • markers           — paid external markers (auth-linked, contracted)
--   • marker_batches     — an ingested set of scripts to mark
--   • marking_submissions extensions: assignment, batch, gold-set, and the
--     two new corpus sources (commissioned, specimen) + nullable student_id
--     (commissioned/specimen answers have NO pupil data subject).
--
-- SOURCE-AWARE CONSENT (load-bearing): only source='b2c_self'|'b2b_class'
-- (real pupil work) is consent-gated. 'commissioned' and 'specimen' carry
-- no personal data of a living identifiable pupil, so prepareTrainingRecord
-- treats them as consent-exempt (enforced in code, documented in the pack).
--
-- Style: idempotent / replay-safe, FK-guarded, RLS deny-by-default +
-- service_role ALL + scoped SELECT. Depends on marking_submissions (created
-- by 20260518); guarded so this file is safe to run before/after it.
-- ──────────────────────────────────────────────────────────────────────────

-- ===========================================================================
-- 1. markers — paid external markers
-- ===========================================================================
CREATE TABLE IF NOT EXISTS public.markers (
  id               UUID        PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id          UUID        UNIQUE,                    -- auth.users link (login)
  display_name     TEXT        NOT NULL,
  email            TEXT,
  boards           TEXT[]      NOT NULL DEFAULT '{}',     -- board specialisms
  qualification    TEXT,                                  -- e.g. "AQA examiner, 8 yrs"
  status           TEXT        NOT NULL DEFAULT 'active'
                   CHECK (status IN ('active','paused','offboarded')),
  contract_signed_at TIMESTAMPTZ,
  nda_signed_at      TIMESTAMPTZ,
  pay_rate_pence   INTEGER,                               -- per approved script
  notes            TEXT,
  created_at       TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

DO $$ BEGIN
  ALTER TABLE public.markers
    ADD CONSTRAINT markers_user_id_fkey
    FOREIGN KEY (user_id) REFERENCES auth.users(id) ON DELETE SET NULL;
EXCEPTION WHEN duplicate_object THEN NULL; END $$;

CREATE INDEX IF NOT EXISTS idx_markers_user   ON public.markers(user_id);
CREATE INDEX IF NOT EXISTS idx_markers_status ON public.markers(status);

-- ===========================================================================
-- 2. marker_batches — an ingested set of scripts to mark
-- ===========================================================================
CREATE TABLE IF NOT EXISTS public.marker_batches (
  id           UUID        PRIMARY KEY DEFAULT gen_random_uuid(),
  label        TEXT        NOT NULL,
  board        TEXT        NOT NULL,
  paper        TEXT,
  source_type  TEXT        NOT NULL
               CHECK (source_type IN ('commissioned','platform','specimen')),
  target_count INTEGER     NOT NULL DEFAULT 0,
  status       TEXT        NOT NULL DEFAULT 'open'
               CHECK (status IN ('open','closed')),
  created_by   UUID,
  created_at   TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

DO $$ BEGIN
  ALTER TABLE public.marker_batches
    ADD CONSTRAINT marker_batches_created_by_fkey
    FOREIGN KEY (created_by) REFERENCES auth.users(id) ON DELETE SET NULL;
EXCEPTION WHEN duplicate_object THEN NULL; END $$;

CREATE INDEX IF NOT EXISTS idx_marker_batches_board ON public.marker_batches(board, status);

-- ===========================================================================
-- 3. Extend marking_submissions — assignment / batch / gold-set / sources
-- ===========================================================================
DO $$ BEGIN
  IF to_regclass('public.marking_submissions') IS NULL THEN
    RAISE NOTICE 'marking_submissions absent — run 20260518_smart_ip_marking.sql first';
    RETURN;
  END IF;

  -- commissioned/specimen answers have NO pupil → student_id must be nullable.
  EXECUTE 'ALTER TABLE public.marking_submissions ALTER COLUMN student_id DROP NOT NULL';

  EXECUTE 'ALTER TABLE public.marking_submissions
    ADD COLUMN IF NOT EXISTS assigned_marker_id UUID';
  EXECUTE 'ALTER TABLE public.marking_submissions
    ADD COLUMN IF NOT EXISTS batch_id UUID';
  EXECUTE 'ALTER TABLE public.marking_submissions
    ADD COLUMN IF NOT EXISTS is_gold BOOLEAN NOT NULL DEFAULT FALSE';
  EXECUTE 'ALTER TABLE public.marking_submissions
    ADD COLUMN IF NOT EXISTS gold_expected JSONB';
END $$;

DO $$ BEGIN
  ALTER TABLE public.marking_submissions
    ADD CONSTRAINT marking_submissions_assigned_marker_fkey
    FOREIGN KEY (assigned_marker_id) REFERENCES public.markers(id) ON DELETE SET NULL;
EXCEPTION WHEN duplicate_object THEN NULL; END $$;

DO $$ BEGIN
  ALTER TABLE public.marking_submissions
    ADD CONSTRAINT marking_submissions_batch_fkey
    FOREIGN KEY (batch_id) REFERENCES public.marker_batches(id) ON DELETE SET NULL;
EXCEPTION WHEN duplicate_object THEN NULL; END $$;

-- Extend the source set: add commissioned + specimen (keep existing values).
ALTER TABLE public.marking_submissions
  DROP CONSTRAINT IF EXISTS marking_submissions_source_check;
ALTER TABLE public.marking_submissions
  ADD CONSTRAINT marking_submissions_source_check
  CHECK (source IN ('b2c_self','b2b_class','commissioned','specimen'));

CREATE INDEX IF NOT EXISTS idx_marking_submissions_marker
  ON public.marking_submissions(assigned_marker_id, status);
CREATE INDEX IF NOT EXISTS idx_marking_submissions_batch
  ON public.marking_submissions(batch_id);

-- ===========================================================================
-- 4. RLS — deny-by-default; service_role ALL; markers see only own work
-- ===========================================================================
ALTER TABLE public.markers        ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.marker_batches ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "markers_service_role_all"        ON public.markers;
DROP POLICY IF EXISTS "markers_self_select"             ON public.markers;
DROP POLICY IF EXISTS "marker_batches_service_role_all" ON public.marker_batches;

CREATE POLICY "markers_service_role_all"
  ON public.markers FOR ALL TO service_role USING (true) WITH CHECK (true);

-- A marker may read only their own profile row.
CREATE POLICY "markers_self_select"
  ON public.markers FOR SELECT TO authenticated
  USING (user_id = auth.uid());

CREATE POLICY "marker_batches_service_role_all"
  ON public.marker_batches FOR ALL TO service_role USING (true) WITH CHECK (true);

-- Markers may SELECT marking_submissions rows assigned to them (defence in
-- depth; the marker console acts via the service-role API which applies
-- explicit authz, but RLS must not leak other markers' / pupils' work).
DROP POLICY IF EXISTS "marking_submissions_marker_select" ON public.marking_submissions;
CREATE POLICY "marking_submissions_marker_select"
  ON public.marking_submissions FOR SELECT TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM public.markers m
      WHERE m.id = marking_submissions.assigned_marker_id
        AND m.user_id = auth.uid()
        AND m.status = 'active'
    )
  );

COMMENT ON TABLE public.markers IS
  'Smart IP: paid external markers (contracted/NDA''d). Auth-linked; RLS lets a marker read only their own row.';
COMMENT ON TABLE public.marker_batches IS
  'Smart IP: an ingested set of scripts for the paid-marker drive (commissioned|platform|specimen).';
