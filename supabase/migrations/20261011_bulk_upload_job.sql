-- ─── BulkUploadJob: the table the school bulk upload was written against ────
--
-- WHY THIS FILE EXISTS (11 October 2026)
--
-- prisma/schema.prisma has declared `model BulkUploadJob` since April, and its
-- DDL sits in prisma/migrations/20260420_04_bulk_upload_job/migration.sql. But
-- nothing applies prisma/migrations/: the build runs
-- scripts/apply-migrations.mjs over supabase/migrations/ only. So the table was
-- never created. On 11 October 2026 information_schema had no BulkUploadJob,
-- `_prisma_migrations` held only `0_init`, and scripts/schema-drift-known.json
-- listed it under DATA-9. POST /api/school/bulk-upload/commit, GET
-- /api/school/bulk-upload/latest-status and /school/admin/bulk-upload/log all
-- failed at their first query: no school has ever completed a bulk upload.
--
-- This is that DDL, the same columns and indexes, made idempotent as every
-- file after the runner's BASELINE_CUTOFF is, plus the row-level security every
-- Prisma-owned table carries (20260506_enable_rls_on_prisma_tables.sql).
--
-- WHAT IT HOLDS. One row per upload: the uploading admin's Supabase uuid, the
-- school, the file name, the counts, and `errors_json`, whose messages can name
-- a pupil's email address. It is read and written only on the server, through
-- Prisma.
-- ────────────────────────────────────────────────────────────────────────────

CREATE TABLE IF NOT EXISTS public."BulkUploadJob" (
    "id"              TEXT NOT NULL,
    "admin_user_id"   TEXT NOT NULL,
    "school_id"       TEXT NOT NULL,
    "file_name"       TEXT NOT NULL,
    "idempotency_key" TEXT NOT NULL,
    "row_count"       INTEGER NOT NULL DEFAULT 0,
    "success_count"   INTEGER NOT NULL DEFAULT 0,
    "error_count"     INTEGER NOT NULL DEFAULT 0,
    "created_count"   INTEGER NOT NULL DEFAULT 0,
    "updated_count"   INTEGER NOT NULL DEFAULT 0,
    "skipped_count"   INTEGER NOT NULL DEFAULT 0,
    "errors_json"     JSONB,
    "status"          TEXT NOT NULL DEFAULT 'pending',
    "created_at"      TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "completed_at"    TIMESTAMPTZ(6),

    CONSTRAINT "BulkUploadJob_pkey" PRIMARY KEY ("id")
);

CREATE UNIQUE INDEX IF NOT EXISTS "BulkUploadJob_idempotency_key_key"
  ON public."BulkUploadJob"("idempotency_key");

CREATE INDEX IF NOT EXISTS "BulkUploadJob_admin_user_id_idx"
  ON public."BulkUploadJob"("admin_user_id");

CREATE INDEX IF NOT EXISTS "BulkUploadJob_school_id_created_at_idx"
  ON public."BulkUploadJob"("school_id", "created_at" DESC);

-- Server-only, like every Prisma-owned table: RLS on, nothing for anon or
-- authenticated, and the explicit service-role policy that records the intent.
ALTER TABLE public."BulkUploadJob" ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "service_role_full_access" ON public."BulkUploadJob";
CREATE POLICY "service_role_full_access" ON public."BulkUploadJob"
  FOR ALL TO service_role USING (true) WITH CHECK (true);
REVOKE ALL ON public."BulkUploadJob" FROM anon, authenticated;
