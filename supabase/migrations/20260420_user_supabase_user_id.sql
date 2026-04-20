-- ─── Identity convergence PR-1: add User.supabaseUserId ─────────────────
--
-- See the full plan in EH_QA_MASTER_LOG.md Cycle 3 "Schema convergence":
--
--   Prisma `User.id` is a `cuid()`; Supabase `auth.users.id` is a UUID.
--   Privacy / parent / admin endpoints currently join the two by email
--   (e.g. `prisma.user.findUnique({ where: { email: authUser.email } })`),
--   which breaks when `anonymiseUser` rewrites the email to
--   `deleted-${userId}@anonymised.invalid`. Prisma-owned tables
--   therefore survive Supabase user deletion.
--
-- Recommended option (C): add an additive `supabaseUserId` UUID column
-- on Prisma `User`, backfill, then switch all lookups. This is the
-- PR-1 step — SAFE and ADDITIVE:
--   * Adds `supabaseUserId` as NULLABLE UUID with UNIQUE constraint.
--   * Adds an index for fast lookup.
--   * Does NOT drop or change any existing column.
--   * Does NOT require any code change to land first.
--
-- Subsequent PRs will:
--   PR-2: write-side — new users carry `supabaseUserId` at signup; one-shot
--         backfill `UPDATE ... FROM auth.users WHERE lower(email)=lower(email)`.
--   PR-3: read-side — every `where: { email: ... }` in Prisma queries
--         switches to `where: { supabaseUserId: ... }` (with email as fallback
--         while any nulls remain).
--   PR-4: enforce NOT NULL once prod shows zero null rows for 7+ days.
--
-- The Prisma `User` table is owned by Prisma's `$executeRaw` / `db push`
-- path; the table quoting here matches Prisma's default (`"User"`).
-- ──────────────────────────────────────────────────────────────────────

ALTER TABLE IF EXISTS "User"
  ADD COLUMN IF NOT EXISTS "supabaseUserId" uuid;

-- Unique constraint separately (named to match Prisma's @unique convention).
-- CREATE UNIQUE INDEX IF NOT EXISTS is idempotent; re-running the migration
-- is a no-op.
CREATE UNIQUE INDEX IF NOT EXISTS "User_supabaseUserId_key"
  ON "User" ("supabaseUserId")
  WHERE "supabaseUserId" IS NOT NULL;

-- Lookup index for the "find Prisma user by Supabase id" hot path that
-- every privacy / parent endpoint will use after PR-3.
CREATE INDEX IF NOT EXISTS "User_supabaseUserId_idx"
  ON "User" ("supabaseUserId");

COMMENT ON COLUMN "User"."supabaseUserId" IS
  'Identity link to auth.users(id). Added for identity convergence PR-1. Nullable during transition; switches to NOT NULL in a later migration after backfill is verified.';
