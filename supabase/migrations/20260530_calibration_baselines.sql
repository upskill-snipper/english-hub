-- ─── Calibration Baselines — persisted ML calibration results ─────────────
--
-- Stores a measured/promoted calibration run per marking AREA (board +
-- qualification + paper), so the "train the ML" loop can:
--   1. record a calibration run's agreement metrics, and
--   2. PROMOTE a green run as the baseline that flips the G-LIVE gate live
--      for that area (loadCurrentCalibrationBaseline reads the latest promoted
--      row; assertCalibrationGreen gates on within_half_band etc.).
--
-- This persists the in-memory CalibrationBaseline shape from
-- src/lib/marking/engine/calibration/gate.ts (n, withinHalfBand,
-- perBandCoverage, report, priorBaseline) which until now had NO storage —
-- that gap is exactly why loadCurrentCalibrationBaseline() returned null and
-- the gate stayed fail-closed. New table, additive: nothing else changes.
--
-- area_key: a stable string identifying the marking area, e.g.
--   'ielts:academic:writing-task-2', 'aqa:gcse:paper-1'. The run/promote route
--   computes it from the batch's board+qualification+paper.
--
-- status:
--   'measured'  — a calibration run was recorded but NOT promoted (e.g. it
--                 failed a gate check, or is kept for history/audit).
--   'promoted'  — this is THE live baseline for its area. At most one row per
--                 area should be 'promoted'; the run route demotes the prior
--                 promoted row when promoting a new one (handled in code).
--
-- Style: idempotent / replay-safe, RLS deny-by-default + service_role ALL
-- (the calibration loop runs server-side via the admin route only; no client
-- ever reads this directly).
-- ──────────────────────────────────────────────────────────────────────────

CREATE TABLE IF NOT EXISTS public.calibration_baselines (
  id                  UUID        PRIMARY KEY DEFAULT gen_random_uuid(),
  area_key            TEXT        NOT NULL,                 -- board:qualification:paper
  exam_board          TEXT,
  qualification       TEXT,
  paper               TEXT,
  n                   INTEGER     NOT NULL,                 -- pairs measured
  within_half_band    DOUBLE PRECISION NOT NULL,           -- headline agreement (0..1)
  exact_band          DOUBLE PRECISION,                    -- exact-agreement (0..1)
  per_band_coverage   JSONB       NOT NULL DEFAULT '{}'::jsonb,  -- { "6": 12, ... }
  report              JSONB       NOT NULL DEFAULT '{}'::jsonb,  -- full CalibrationReport
  prior_baseline_id   UUID,                                -- regression link
  status              TEXT        NOT NULL DEFAULT 'measured'
                      CHECK (status IN ('measured','promoted')),
  gate_passed         BOOLEAN     NOT NULL DEFAULT FALSE,  -- did assertCalibrationGreen pass?
  gate_detail         JSONB,                               -- per-check pass/fail + messages
  created_by          UUID,                                -- admin auth.uid who ran it
  created_at          TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

DO $$ BEGIN
  ALTER TABLE public.calibration_baselines
    ADD CONSTRAINT calibration_baselines_prior_fkey
    FOREIGN KEY (prior_baseline_id) REFERENCES public.calibration_baselines(id) ON DELETE SET NULL;
EXCEPTION WHEN duplicate_object THEN NULL; END $$;

CREATE INDEX IF NOT EXISTS idx_calibration_baselines_area
  ON public.calibration_baselines(area_key, created_at DESC);
-- The hot lookup: the latest PROMOTED baseline for an area.
CREATE INDEX IF NOT EXISTS idx_calibration_baselines_promoted
  ON public.calibration_baselines(area_key, status, created_at DESC);

-- RLS: deny-by-default; the admin calibration route uses the service-role
-- client (RLS-independent) so no permissive policy for other roles is needed.
ALTER TABLE public.calibration_baselines ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "calibration_baselines_service_role_all" ON public.calibration_baselines;
CREATE POLICY "calibration_baselines_service_role_all"
  ON public.calibration_baselines FOR ALL TO service_role USING (true) WITH CHECK (true);
