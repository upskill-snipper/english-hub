-- ───────────────────────────────────────────────────────────────────────────
-- Parent Tier — Accounts, Link Codes, Parent-Child Links
--
-- STATUS: PENDING / DRAFT — do NOT apply in production without DPO sign-off.
--
-- This migration introduces the data model for the paid Parent tier:
--
--   1. parent_accounts       — per-parent subscription / billing state
--   2. parent_link_codes     — short-lived 6-char codes used by students
--                              to invite a parent to link
--   3. parent_child_links    — the actual active/pending/unlinked link
--                              between a parent and a student, with audit
--                              columns
--
-- Key design decisions:
--
--   * parent identity = auth.users row, with role stored in
--     user_metadata.role = 'parent' (enforced in the app layer) and
--     mirrored into profiles.role for RLS predicates.
--   * link codes are single-use and TTL'd (15 min default).
--   * parent_child_links.status lifecycle: pending → active → unlinked.
--     unlinked rows are kept for audit, never hard-deleted.
--   * All three tables are protected by RLS so parents can only see
--     their own rows, students can only see rows about themselves,
--     and the service role bypasses RLS for server-side operations.
--
-- Pre-apply checklist (see src/app/api/parent/README.md):
--
--   [ ] Stripe parent price created and env var `STRIPE_PRICE_PARENT` set
--   [ ] Parent DPA / privacy notice published
--   [ ] Student consent flow reviewed by Safeguarding lead
--   [ ] RLS policies dry-run on staging with realistic data
--   [ ] Backfill plan for existing profiles.role = 'parent' rows
-- ───────────────────────────────────────────────────────────────────────────

-- ── Extensions (no-op if already enabled) ───────────────────────────────────
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- ── 1. parent_accounts ──────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS public.parent_accounts (
  id                          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id                     UUID NOT NULL UNIQUE
                              REFERENCES auth.users(id) ON DELETE CASCADE,
  stripe_customer_id          TEXT UNIQUE,
  stripe_subscription_id      TEXT UNIQUE,
  subscription_status         TEXT NOT NULL DEFAULT 'inactive'
                              CHECK (subscription_status IN (
                                'inactive', 'trialing', 'active',
                                'past_due', 'canceled', 'incomplete'
                              )),
  current_period_end          TIMESTAMPTZ,
  max_children                SMALLINT NOT NULL DEFAULT 3
                              CHECK (max_children BETWEEN 1 AND 10),
  weekly_reports_enabled      BOOLEAN NOT NULL DEFAULT TRUE,
  dpa_accepted_at             TIMESTAMPTZ,
  created_at                  TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at                  TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS parent_accounts_user_id_idx
  ON public.parent_accounts(user_id);
CREATE INDEX IF NOT EXISTS parent_accounts_stripe_customer_idx
  ON public.parent_accounts(stripe_customer_id);

-- ── 2. parent_link_codes ────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS public.parent_link_codes (
  id                          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  code                        VARCHAR(6) NOT NULL,
  child_id                    UUID NOT NULL
                              REFERENCES auth.users(id) ON DELETE CASCADE,
  created_at                  TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  expires_at                  TIMESTAMPTZ NOT NULL,
  consumed_at                 TIMESTAMPTZ,
  consumed_by_parent_id       UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  CONSTRAINT parent_link_codes_code_format
    CHECK (code ~ '^[A-HJ-NP-Z2-9]{6}$')
);

-- Unique only among *unconsumed* codes so we can recycle values safely.
CREATE UNIQUE INDEX IF NOT EXISTS parent_link_codes_active_code_uidx
  ON public.parent_link_codes(code)
  WHERE consumed_at IS NULL;

CREATE INDEX IF NOT EXISTS parent_link_codes_child_idx
  ON public.parent_link_codes(child_id);
CREATE INDEX IF NOT EXISTS parent_link_codes_expires_at_idx
  ON public.parent_link_codes(expires_at);

-- ── 3. parent_child_links ───────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS public.parent_child_links (
  id                          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  parent_id                   UUID NOT NULL
                              REFERENCES auth.users(id) ON DELETE CASCADE,
  child_id                    UUID NOT NULL
                              REFERENCES auth.users(id) ON DELETE CASCADE,
  status                      TEXT NOT NULL DEFAULT 'pending'
                              CHECK (status IN ('pending', 'active', 'unlinked')),
  link_code_id                UUID REFERENCES public.parent_link_codes(id)
                              ON DELETE SET NULL,
  requested_at                TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  linked_at                   TIMESTAMPTZ,
  unlinked_at                 TIMESTAMPTZ,
  created_at                  TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at                  TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  CONSTRAINT parent_child_links_no_self_link
    CHECK (parent_id <> child_id),
  CONSTRAINT parent_child_links_unique_pair
    UNIQUE (parent_id, child_id)
);

CREATE INDEX IF NOT EXISTS parent_child_links_parent_idx
  ON public.parent_child_links(parent_id);
CREATE INDEX IF NOT EXISTS parent_child_links_child_idx
  ON public.parent_child_links(child_id);
CREATE INDEX IF NOT EXISTS parent_child_links_status_idx
  ON public.parent_child_links(status);

-- ── updated_at trigger (shared helper) ──────────────────────────────────────
CREATE OR REPLACE FUNCTION public.set_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS set_parent_accounts_updated_at ON public.parent_accounts;
CREATE TRIGGER set_parent_accounts_updated_at
  BEFORE UPDATE ON public.parent_accounts
  FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();

DROP TRIGGER IF EXISTS set_parent_child_links_updated_at ON public.parent_child_links;
CREATE TRIGGER set_parent_child_links_updated_at
  BEFORE UPDATE ON public.parent_child_links
  FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();

-- ── RLS ─────────────────────────────────────────────────────────────────────
ALTER TABLE public.parent_accounts      ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.parent_link_codes    ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.parent_child_links   ENABLE ROW LEVEL SECURITY;

-- parent_accounts: a parent can read/update only their own row.
DROP POLICY IF EXISTS parent_accounts_select_own ON public.parent_accounts;
CREATE POLICY parent_accounts_select_own ON public.parent_accounts
  FOR SELECT TO authenticated
  USING (user_id = auth.uid());

DROP POLICY IF EXISTS parent_accounts_update_own ON public.parent_accounts;
CREATE POLICY parent_accounts_update_own ON public.parent_accounts
  FOR UPDATE TO authenticated
  USING (user_id = auth.uid())
  WITH CHECK (user_id = auth.uid());

-- parent_link_codes: the child who owns the code can read their own.
-- Parents never read this table directly; they submit a code and
-- the server-side service role resolves it.
DROP POLICY IF EXISTS parent_link_codes_select_own_child ON public.parent_link_codes;
CREATE POLICY parent_link_codes_select_own_child ON public.parent_link_codes
  FOR SELECT TO authenticated
  USING (child_id = auth.uid());

DROP POLICY IF EXISTS parent_link_codes_insert_own_child ON public.parent_link_codes;
CREATE POLICY parent_link_codes_insert_own_child ON public.parent_link_codes
  FOR INSERT TO authenticated
  WITH CHECK (child_id = auth.uid());

-- parent_child_links: parent sees their own rows, child sees rows about them.
DROP POLICY IF EXISTS parent_child_links_select_party ON public.parent_child_links;
CREATE POLICY parent_child_links_select_party ON public.parent_child_links
  FOR SELECT TO authenticated
  USING (parent_id = auth.uid() OR child_id = auth.uid());

-- Parent can unlink (soft-delete) their own active link.
DROP POLICY IF EXISTS parent_child_links_update_parent ON public.parent_child_links;
CREATE POLICY parent_child_links_update_parent ON public.parent_child_links
  FOR UPDATE TO authenticated
  USING (parent_id = auth.uid())
  WITH CHECK (parent_id = auth.uid());

-- Child can revoke access (status = unlinked) for their own links.
DROP POLICY IF EXISTS parent_child_links_update_child ON public.parent_child_links;
CREATE POLICY parent_child_links_update_child ON public.parent_child_links
  FOR UPDATE TO authenticated
  USING (child_id = auth.uid())
  WITH CHECK (child_id = auth.uid());

-- Inserts happen via service role only (server routes).
-- No INSERT policy is granted to `authenticated`.

-- ── Comments ────────────────────────────────────────────────────────────────
COMMENT ON TABLE  public.parent_accounts     IS 'Per-parent Stripe subscription + prefs (Parent tier).';
COMMENT ON TABLE  public.parent_link_codes   IS 'Short-lived 6-char codes a student generates to invite a parent.';
COMMENT ON TABLE  public.parent_child_links  IS 'Parent ↔ Student link lifecycle (pending → active → unlinked).';
COMMENT ON COLUMN public.parent_child_links.status IS 'pending: awaiting child consent; active: read-only access granted; unlinked: audit-retained, revoked';
