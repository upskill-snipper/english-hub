-- ──────────────────────────────────────────────────────────────────────────
-- 20260917_identity_nullable_dob_country.sql
--
-- WIDENS "User"."dateOfBirth" and "User"."country" to NULL-able.
--
-- WHY
-- Only 8 of 200 real accounts have a Prisma "User" row. The other ~192 exist
-- in Supabase Auth and public.profiles only, so the consent ledger, the
-- erasure pipeline and the AI decision log - all of which key on "User".id -
-- address nothing for them.
--
-- Creating the missing rows was blocked by these two NOT NULL columns: a
-- projection had to supply a date of birth and a country it does not hold.
-- The 2026-04-20 backfill script supplied 2000-01-01 and 'GB', and both
-- inventions did harm:
--   * 2000-01-01 computes to an adult age, so the row was written with
--     isMinor = false, and checkParentalConsent short-circuits on that. A
--     child with no recorded date of birth was waved through the parental
--     gate.
--   * country is copied into the UK GDPR Art.15 subject access export, so a
--     guessed 'GB' was returned to the data subject as fact.
--
-- NULL is the honest representation of "we do not hold this". The identity
-- layer (src/lib/identity/age.ts) resolves a missing date of birth to the
-- UNKNOWN age band, which BLOCKS the AI gate and asks the learner for the
-- date, rather than treating the account as an adult.
--
-- SAFETY
--   * Widening only. No existing value is read, changed or deleted, and no
--     row is rewritten - DROP NOT NULL is a catalogue-only change in
--     PostgreSQL, so there is no table rewrite and no lock held for scanning.
--   * Idempotent: guarded on the current nullability, so a re-run is a no-op
--     and the migration runner's tracking table is belt-and-braces only.
--   * Reversible only if every row is non-null again; see the rollback note
--     at the end. Do NOT re-add NOT NULL by filling in placeholder values -
--     that is the defect this migration exists to remove.
--
-- NOT IN THIS MIGRATION (deliberately): remediation of the rows still
-- carrying the 2000-01-01 placeholder (2 of the 8 existing rows, checked 17 September 2026). That is a data change, not a schema
-- change, and it is owned by the backfill/remediation script. Until it runs,
-- src/lib/identity/age.ts refuses to read an age from that exact date.
-- ──────────────────────────────────────────────────────────────────────────

BEGIN;

DO $$
BEGIN
  IF EXISTS (
    SELECT 1 FROM information_schema.columns
     WHERE table_schema = 'public'
       AND table_name   = 'User'
       AND column_name  = 'dateOfBirth'
       AND is_nullable  = 'NO'
  ) THEN
    ALTER TABLE public."User" ALTER COLUMN "dateOfBirth" DROP NOT NULL;
  END IF;

  IF EXISTS (
    SELECT 1 FROM information_schema.columns
     WHERE table_schema = 'public'
       AND table_name   = 'User'
       AND column_name  = 'country'
       AND is_nullable  = 'NO'
  ) THEN
    ALTER TABLE public."User" ALTER COLUMN "country" DROP NOT NULL;
  END IF;
END
$$;

COMMENT ON COLUMN public."User"."dateOfBirth" IS
  'NULL means NOT HELD. Never substitute a placeholder: a guessed date sets '
  'isMinor and therefore decides whether a child needs guardian consent. '
  'Resolve age through src/lib/identity/age.ts resolveAgeBand().';

COMMENT ON COLUMN public."User"."country" IS
  'NULL means NOT HELD. This column is returned to the data subject in the '
  'UK GDPR Art.15 export, so it must never carry a guessed value.';

COMMIT;

-- ── Rollback (manual, and only once every row holds a real value) ─────────
-- BEGIN;
-- ALTER TABLE public."User" ALTER COLUMN "dateOfBirth" SET NOT NULL;
-- ALTER TABLE public."User" ALTER COLUMN "country"     SET NOT NULL;
-- COMMIT;
