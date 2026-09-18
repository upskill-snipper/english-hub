-- ─── profiles.year_group: accept every value the signup form offers ─────────
--
-- src/lib/utils.ts YEAR_GROUPS offers 'Year 7' to 'Year 13', 'Adult' and
-- 'Other'. The CHECK from 001_initial_schema.sql stops at 'Year 12' and has no
-- 'Other', so a Year 13 or 'Other' signup would have been refused by the
-- database even once the profile write reaches it. Widen the constraint to
-- the form's list. Broadening only; no row can become invalid. Idempotent.
-- ────────────────────────────────────────────────────────────────────────────

ALTER TABLE public.profiles DROP CONSTRAINT IF EXISTS profiles_year_group_check;

ALTER TABLE public.profiles
  ADD CONSTRAINT profiles_year_group_check CHECK (
    year_group IS NULL OR year_group IN (
      'Year 7', 'Year 8', 'Year 9', 'Year 10', 'Year 11', 'Year 12', 'Year 13', 'Adult', 'Other'
    )
  );
