-- Per-(marker,board) access lifecycle: requested → approved | rejected | revoked.
-- The keystone of self-service onboarding — a marker may mark nothing on a board
-- until that board's row is 'approved'. New table, additive. Mirrors
-- supabase/migrations/20260530_marker_board_access.sql.
CREATE TABLE IF NOT EXISTS "marker_board_access" (
  "id"                 uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  "marker_id"          uuid NOT NULL,
  "board"              text NOT NULL,
  "qualification_note" text,
  "status"             text NOT NULL DEFAULT 'requested',
  "requested_at"       timestamptz NOT NULL DEFAULT now(),
  "decided_at"         timestamptz,
  "decided_by"         uuid,
  "created_at"         timestamptz NOT NULL DEFAULT now(),
  CONSTRAINT "marker_board_access_marker_board_key" UNIQUE ("marker_id", "board")
);
DO $$ BEGIN
  ALTER TABLE "marker_board_access"
    ADD CONSTRAINT "marker_board_access_marker_fkey"
    FOREIGN KEY ("marker_id") REFERENCES "markers"("id") ON DELETE CASCADE;
EXCEPTION WHEN duplicate_object THEN NULL; END $$;
CREATE INDEX IF NOT EXISTS "idx_marker_board_access_marker" ON "marker_board_access" ("marker_id");
CREATE INDEX IF NOT EXISTS "idx_marker_board_access_status" ON "marker_board_access" ("status");
CREATE INDEX IF NOT EXISTS "idx_marker_board_access_marker_status" ON "marker_board_access" ("marker_id", "status");
