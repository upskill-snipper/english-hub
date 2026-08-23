-- School pilot / B2B inquiry capture.
--
-- The /schools and /school-pilot lead forms POST to /api/school-inquiry, which
-- inserts into `school_inquiries` - but no migration ever created the table, so
-- in any environment where it was not hand-created the insert failed with
-- 42P01 and the highest-value leads were lost. This creates it.
--
-- Idempotent: safe to re-run. Writes go through the Supabase service-role key
-- (which bypasses RLS), so RLS is enabled with NO permissive policies -
-- matching the repo convention (20260506_enable_rls_on_prisma_tables) that
-- every table has RLS on and is reachable only via service role or an explicit
-- policy. There is no anon/authenticated read path to these leads by design.

CREATE TABLE IF NOT EXISTS public.school_inquiries (
  id           UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  school_name  TEXT NOT NULL,
  teacher_name TEXT NOT NULL,
  email        TEXT NOT NULL,
  role         TEXT NOT NULL,
  num_students TEXT NOT NULL,
  message      TEXT,
  status       TEXT DEFAULT 'new',
  created_at   TIMESTAMPTZ DEFAULT now()
);

CREATE INDEX IF NOT EXISTS school_inquiries_created_at_idx
  ON public.school_inquiries (created_at DESC);

CREATE INDEX IF NOT EXISTS school_inquiries_status_idx
  ON public.school_inquiries (status);

ALTER TABLE public.school_inquiries ENABLE ROW LEVEL SECURITY;
