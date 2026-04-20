-- ─── update_updated_at() trigger helper (ordering prerequisite) ──────────
--
-- Many later migrations (`20260322_new_features.sql`,
-- `20260420_human_review_requests.sql`, `002_affiliate_system.sql`, etc.)
-- create tables with an `updated_at` column + `BEFORE UPDATE ... EXECUTE
-- FUNCTION public.update_updated_at()` trigger. They assumed the helper
-- was created in `001_initial_schema.sql`, but in practice the function
-- was absent on prod when we inspected it on 2026-04-20 — so those
-- migrations cascaded-failed on a fresh apply.
--
-- Filename prefixed `000_` so it sorts BEFORE `001_initial_schema.sql`
-- and runs first. Idempotent: `CREATE OR REPLACE` is safe on re-apply.
--
-- ─────────────────────────────────────────────────────────────────────

CREATE OR REPLACE FUNCTION public.update_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

COMMENT ON FUNCTION public.update_updated_at() IS
  'Generic BEFORE UPDATE trigger: sets NEW.updated_at = now(). Shared by every public.* table with an updated_at column.';
