-- ─── LifecycleEmail: one row per (user, kind) for the trial lifecycle emails ─
--
-- WHY THIS FILE EXISTS (23 October 2026)
--
-- The registration-to-subscription emails (the account-ready email at
-- confirmation, the day-3 first-essay nudge, the trial-ending and trial-ended
-- notices, the day-14 and day-30 emails, the payment-failed notice and the
-- cancellation confirmations) each go to a person once. The only ledger that
-- existed was RenewalReminder, keyed on a Subscription row and an enum of three
-- reminder types, so the trial-ending cron told its two sends apart by
-- comparing two timestamps, and nothing at all stopped the Stripe webhook or
-- an auth callback sending the same email twice.
--
-- WHAT IT HOLDS. The Prisma user id (a cuid, never the Supabase uuid), a kind
-- such as 'M0_ACCOUNT_READY' or 'M6_PAYMENT_FAILED:in_123', and when the row
-- was claimed. Nothing of the email's contents.
--
-- HOW IT IS USED. The row is inserted BEFORE the send and deleted again if the
-- send fails. The unique index on (user_id, kind) is the whole guarantee: two
-- overlapping cron runs, or two auth callbacks racing, cannot both claim it.
--
-- SERVER-ONLY, like every Prisma-owned table: row-level security on, the
-- service-role policy that records the intent, nothing for anon or
-- authenticated. Cascades with the user.
--
-- NOT APPLIED BY THE AUTHOR. The build's runner (scripts/apply-migrations.mjs)
-- applies files after its BASELINE_CUTOFF on deploy. Whether it did is a fact
-- about the database, not about `_migrations_applied`, so verify with
--
--   SELECT column_name, data_type FROM information_schema.columns
--    WHERE table_schema = 'public' AND table_name = 'LifecycleEmail';
--
-- which must list id, user_id, kind and sent_at. Until it does, every lifecycle
-- send refuses at its ledger claim (the payment-failed notice excepted: see
-- src/lib/email/lifecycle/send.ts), so nothing goes out twice.
--
-- Idempotent, like every file after the runner's BASELINE_CUTOFF.

CREATE TABLE IF NOT EXISTS public."LifecycleEmail" (
  "id"      TEXT NOT NULL,
  "user_id" TEXT NOT NULL,
  "kind"    TEXT NOT NULL,
  "sent_at" TIMESTAMPTZ(6) NOT NULL DEFAULT now(),

  CONSTRAINT "LifecycleEmail_pkey" PRIMARY KEY ("id")
);

-- FK added separately so the file stays re-runnable on a database where the
-- table already exists (ADD CONSTRAINT has no IF NOT EXISTS in Postgres).
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_constraint WHERE conname = 'LifecycleEmail_user_id_fkey'
  ) THEN
    ALTER TABLE public."LifecycleEmail"
      ADD CONSTRAINT "LifecycleEmail_user_id_fkey"
      FOREIGN KEY ("user_id") REFERENCES public."User"(id)
      ON DELETE CASCADE ON UPDATE CASCADE;
  END IF;
END $$;

-- The double-send guarantee.
CREATE UNIQUE INDEX IF NOT EXISTS "LifecycleEmail_user_id_kind_key"
  ON public."LifecycleEmail" ("user_id", "kind");

-- For counting sends by kind and day, which is how a send is measured.
CREATE INDEX IF NOT EXISTS "LifecycleEmail_kind_sent_at_idx"
  ON public."LifecycleEmail" ("kind", "sent_at");

ALTER TABLE public."LifecycleEmail" ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "service_role_full_access" ON public."LifecycleEmail";
CREATE POLICY "service_role_full_access" ON public."LifecycleEmail"
  FOR ALL TO service_role USING (true) WITH CHECK (true);
REVOKE ALL ON public."LifecycleEmail" FROM anon, authenticated;
