-- ─── Marker Board Access — per-board request/approval lifecycle ───────────
--
-- An examiner is qualified for SPECIFIC boards. Until now markers.boards[] was a
-- flat array set by an admin — no concept of a marker REQUESTING a board and an
-- approver granting it per board. This table is that lifecycle: one row per
-- (marker, board), each with its own status:
--
--   requested → approved | rejected   (and approved → revoked)
--
-- This is the keystone of self-service onboarding: a marker registers, ticks the
-- boards they're qualified for (→ rows status='requested'), and may MARK NOTHING
-- on a board until that board's row is 'approved'. Approval is per board and is
-- logged (decided_by/decided_at + the marker's own qualification note).
--
-- markers.boards[] is retained for backward compatibility (existing pay/QA reads
-- it), but the AUTHORITATIVE "may this marker work this board" answer is an
-- approved row here. The Stage B/C code reads this table for access decisions.
--
-- Style: idempotent / replay-safe, FK-guarded, RLS deny-by-default + service_role
-- ALL + a self-select for the owning marker. Depends on markers (20260519).
-- ──────────────────────────────────────────────────────────────────────────

CREATE TABLE IF NOT EXISTS public.marker_board_access (
  id                 UUID        PRIMARY KEY DEFAULT gen_random_uuid(),
  marker_id          UUID        NOT NULL,
  board              TEXT        NOT NULL,                  -- e.g. 'AQA', 'IELTS', 'KS3'
  qualification_note TEXT,                                  -- the marker's own evidence
  status             TEXT        NOT NULL DEFAULT 'requested'
                     CHECK (status IN ('requested','approved','rejected','revoked')),
  requested_at       TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  decided_at         TIMESTAMPTZ,
  decided_by         UUID,                                  -- approver auth.uid
  created_at         TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  UNIQUE (marker_id, board)
);

DO $$ BEGIN
  ALTER TABLE public.marker_board_access
    ADD CONSTRAINT marker_board_access_marker_fkey
    FOREIGN KEY (marker_id) REFERENCES public.markers(id) ON DELETE CASCADE;
EXCEPTION WHEN duplicate_object THEN NULL; END $$;

CREATE INDEX IF NOT EXISTS idx_marker_board_access_marker ON public.marker_board_access(marker_id);
CREATE INDEX IF NOT EXISTS idx_marker_board_access_status ON public.marker_board_access(status);
-- The hot lookup: approved boards for a marker.
CREATE INDEX IF NOT EXISTS idx_marker_board_access_marker_status
  ON public.marker_board_access(marker_id, status);

-- RLS: deny-by-default; service_role manages it; a marker may read only their
-- own access rows (so the board picker can show their statuses).
ALTER TABLE public.marker_board_access ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "marker_board_access_service_role_all" ON public.marker_board_access;
CREATE POLICY "marker_board_access_service_role_all"
  ON public.marker_board_access FOR ALL TO service_role USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "marker_board_access_self_select" ON public.marker_board_access;
CREATE POLICY "marker_board_access_self_select"
  ON public.marker_board_access FOR SELECT TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM public.markers m
      WHERE m.id = marker_board_access.marker_id
        AND m.user_id = auth.uid()
    )
  );

COMMENT ON TABLE public.marker_board_access IS
  'Per-(marker,board) access lifecycle (requested/approved/rejected/revoked). The authoritative answer to "may this marker work this board"; markers.boards[] is legacy.';
