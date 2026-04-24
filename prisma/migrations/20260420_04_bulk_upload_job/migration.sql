-- Wave 5 — School admin bulk-upload job log.
--
-- Writes one row per POST /api/school/bulk-upload/commit. The transactional
-- commit handler inserts the row with status='pending' before doing any
-- user writes and flips it to 'completed' (or 'failed') at the end. The
-- idempotency_key is the client-supplied token; a unique index lets the
-- handler short-circuit duplicate submissions without re-doing work.

CREATE TABLE "BulkUploadJob" (
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

CREATE UNIQUE INDEX "BulkUploadJob_idempotency_key_key"
  ON "BulkUploadJob"("idempotency_key");

CREATE INDEX "BulkUploadJob_admin_user_id_idx"
  ON "BulkUploadJob"("admin_user_id");

CREATE INDEX "BulkUploadJob_school_id_created_at_idx"
  ON "BulkUploadJob"("school_id", "created_at" DESC);
