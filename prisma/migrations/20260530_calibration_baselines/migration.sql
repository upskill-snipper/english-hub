-- Calibration baselines: persists a measured/promoted ML calibration run per
-- marking area so the train-the-ML loop can record agreement metrics and
-- promote a green baseline that flips the G-LIVE gate live. New table, additive
-- (nothing else changes). Mirrors supabase/migrations/20260530_calibration_baselines.sql.
CREATE TABLE IF NOT EXISTS "calibration_baselines" (
  "id"                uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  "area_key"          text NOT NULL,
  "exam_board"        text,
  "qualification"     text,
  "paper"             text,
  "n"                 integer NOT NULL,
  "within_half_band"  double precision NOT NULL,
  "exact_band"        double precision,
  "per_band_coverage" jsonb NOT NULL DEFAULT '{}',
  "report"            jsonb NOT NULL DEFAULT '{}',
  "prior_baseline_id" uuid,
  "status"            text NOT NULL DEFAULT 'measured',
  "gate_passed"       boolean NOT NULL DEFAULT false,
  "gate_detail"       jsonb,
  "created_by"        uuid,
  "created_at"        timestamptz NOT NULL DEFAULT now()
);
CREATE INDEX IF NOT EXISTS "idx_calibration_baselines_area"
  ON "calibration_baselines" ("area_key", "created_at" DESC);
CREATE INDEX IF NOT EXISTS "idx_calibration_baselines_promoted"
  ON "calibration_baselines" ("area_key", "status", "created_at" DESC);
