-- ============================================================
-- LEARNRIGHT AFFILIATE SYSTEM
-- Migration: 002_affiliate_system
-- Date: 2026-03-21
-- ============================================================

-- AFFILIATES TABLE
-- One row per approved creator in the programme
CREATE TABLE IF NOT EXISTS public.affiliates (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE SET NULL,

  -- Rewardful affiliate ID (set after Rewardful account creation)
  rewardful_affiliate_id TEXT UNIQUE,

  -- Creator details
  full_name TEXT NOT NULL,
  email TEXT NOT NULL UNIQUE,
  tiktok_handle TEXT,
  instagram_handle TEXT,

  -- Application info (stored for admin review)
  approx_follower_count TEXT,
  audience_description TEXT,
  best_post_url TEXT,
  content_plan TEXT,

  -- Programme tier: 1, 2, or 3
  tier INTEGER NOT NULL DEFAULT 1 CHECK (tier IN (1, 2, 3)),

  -- Status flow: pending → agreement_sent → agreement_signed → active → suspended → terminated
  status TEXT NOT NULL DEFAULT 'pending'
    CHECK (status IN ('pending', 'agreement_sent', 'agreement_signed', 'active', 'suspended', 'terminated')),

  -- Age and legal compliance
  date_of_birth DATE NOT NULL,
  -- is_minor maintained by affiliates_set_is_minor trigger (see end of file).
  -- Cannot use GENERATED ALWAYS AS (...) STORED because AGE() calls now(),
  -- which is not immutable — Postgres rejects non-immutable expressions in
  -- generated columns (applies even in Postgres 16+).
  is_minor BOOLEAN NOT NULL DEFAULT FALSE,

  -- Legal documents
  affiliate_agreement_signed_at TIMESTAMPTZ,
  affiliate_agreement_version TEXT,
  parental_consent_signed_at TIMESTAMPTZ,
  parental_consent_guardian_name TEXT,
  parental_consent_guardian_email TEXT,

  -- Disclosure compliance
  last_disclosure_check_at TIMESTAMPTZ,
  disclosure_violations INTEGER NOT NULL DEFAULT 0,

  -- Commission configuration (overrides defaults if set)
  commission_monthly_gbp NUMERIC(10,2),
  commission_annual_gbp NUMERIC(10,2),
  commission_crammer_gbp NUMERIC(10,2),

  -- Payout details
  bank_account_name TEXT,
  bank_sort_code TEXT,
  bank_account_number TEXT,
  payout_to_guardian BOOLEAN DEFAULT FALSE,

  -- Metadata
  notes TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  activated_at TIMESTAMPTZ,
  terminated_at TIMESTAMPTZ,
  termination_reason TEXT
);

-- AFFILIATE_REFERRALS TABLE
-- One row per click on an affiliate link that resulted in a paid signup
CREATE TABLE IF NOT EXISTS public.affiliate_referrals (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  affiliate_id UUID NOT NULL REFERENCES public.affiliates(id) ON DELETE RESTRICT,

  -- The user who signed up
  referred_user_id UUID REFERENCES auth.users(id) ON DELETE SET NULL,

  -- Rewardful referral token
  rewardful_referral_id TEXT UNIQUE,

  -- Attribution
  clicked_at TIMESTAMPTZ,
  signed_up_at TIMESTAMPTZ,
  converted_to_paid_at TIMESTAMPTZ,

  -- Conversion details
  stripe_checkout_session_id TEXT,
  stripe_subscription_id TEXT,
  stripe_customer_id TEXT,
  plan_type TEXT CHECK (plan_type IN ('monthly', 'annual', 'crammer')),
  plan_amount_gbp NUMERIC(10,2),

  -- Commission
  commission_amount_gbp NUMERIC(10,2),
  commission_status TEXT NOT NULL DEFAULT 'pending'
    CHECK (commission_status IN ('pending', 'confirmed', 'paid', 'voided', 'refunded')),
  commission_voided_reason TEXT,

  -- Payout batch this was included in
  payout_id UUID,

  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- AFFILIATE_PAYOUTS TABLE
-- One row per monthly payout batch per affiliate
CREATE TABLE IF NOT EXISTS public.affiliate_payouts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  affiliate_id UUID NOT NULL REFERENCES public.affiliates(id) ON DELETE RESTRICT,

  -- Period covered
  period_start DATE NOT NULL,
  period_end DATE NOT NULL,

  -- Amounts
  referral_count INTEGER NOT NULL DEFAULT 0,
  gross_commission_gbp NUMERIC(10,2) NOT NULL DEFAULT 0,

  -- Status flow: calculated → disclosure_checked → approved → paid → failed
  status TEXT NOT NULL DEFAULT 'calculated'
    CHECK (status IN ('calculated', 'disclosure_checked', 'approved', 'paid', 'failed')),

  -- Compliance gate
  disclosure_check_passed BOOLEAN,
  disclosure_check_notes TEXT,
  disclosure_checked_by TEXT,
  disclosure_checked_at TIMESTAMPTZ,

  -- Payment
  paid_at TIMESTAMPTZ,
  payment_reference TEXT,
  payment_method TEXT DEFAULT 'bank_transfer',

  -- Admin
  approved_by TEXT,
  approved_at TIMESTAMPTZ,
  notes TEXT,

  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Add FK from referrals to payouts (now that payouts table exists)
ALTER TABLE public.affiliate_referrals
  ADD CONSTRAINT fk_referral_payout
  FOREIGN KEY (payout_id) REFERENCES public.affiliate_payouts(id);

-- AFFILIATE COMMISSION DEFAULTS TABLE
CREATE TABLE IF NOT EXISTS public.affiliate_commission_defaults (
  tier INTEGER PRIMARY KEY CHECK (tier IN (1, 2, 3)),
  commission_monthly_gbp NUMERIC(10,2) NOT NULL,
  commission_annual_gbp NUMERIC(10,2) NOT NULL,
  commission_crammer_gbp NUMERIC(10,2) NOT NULL,
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Insert default commission rates
INSERT INTO public.affiliate_commission_defaults (tier, commission_monthly_gbp, commission_annual_gbp, commission_crammer_gbp)
VALUES
  (1, 5.99, 10.00, 5.00),
  (2, 8.00, 15.00, 7.00),
  (3, 12.00, 20.00, 10.00)
ON CONFLICT (tier) DO NOTHING;

-- ============================================================
-- ROW LEVEL SECURITY
-- ============================================================

ALTER TABLE public.affiliates ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.affiliate_referrals ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.affiliate_payouts ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.affiliate_commission_defaults ENABLE ROW LEVEL SECURITY;

-- Affiliates: creators can read their own row
CREATE POLICY "affiliates_select_own" ON public.affiliates
  FOR SELECT USING (auth.uid() = user_id);

-- Affiliates: service role can do everything (used by admin APIs and webhooks)
CREATE POLICY "affiliates_service_all" ON public.affiliates
  FOR ALL USING (
    (SELECT current_setting('role', true)) = 'service_role'
  );

-- Referrals: affiliates can see their own referrals
CREATE POLICY "referrals_select_own" ON public.affiliate_referrals
  FOR SELECT USING (
    affiliate_id IN (
      SELECT id FROM public.affiliates WHERE user_id = auth.uid()
    )
  );

-- Referrals: service role can do everything
CREATE POLICY "referrals_service_all" ON public.affiliate_referrals
  FOR ALL USING (
    (SELECT current_setting('role', true)) = 'service_role'
  );

-- Payouts: affiliates can see their own payouts
CREATE POLICY "payouts_select_own" ON public.affiliate_payouts
  FOR SELECT USING (
    affiliate_id IN (
      SELECT id FROM public.affiliates WHERE user_id = auth.uid()
    )
  );

-- Payouts: service role can do everything
CREATE POLICY "payouts_service_all" ON public.affiliate_payouts
  FOR ALL USING (
    (SELECT current_setting('role', true)) = 'service_role'
  );

-- Commission defaults: readable by all authenticated users
CREATE POLICY "commission_defaults_select" ON public.affiliate_commission_defaults
  FOR SELECT TO authenticated USING (true);

-- Commission defaults: service role can update
CREATE POLICY "commission_defaults_service_all" ON public.affiliate_commission_defaults
  FOR ALL USING (
    (SELECT current_setting('role', true)) = 'service_role'
  );

-- ============================================================
-- INDEXES
-- ============================================================

CREATE INDEX IF NOT EXISTS idx_affiliates_user_id ON public.affiliates(user_id);
CREATE INDEX IF NOT EXISTS idx_affiliates_status ON public.affiliates(status);
CREATE INDEX IF NOT EXISTS idx_affiliates_email ON public.affiliates(email);
CREATE INDEX IF NOT EXISTS idx_affiliates_rewardful_id ON public.affiliates(rewardful_affiliate_id);
CREATE INDEX IF NOT EXISTS idx_referrals_affiliate_id ON public.affiliate_referrals(affiliate_id);
CREATE INDEX IF NOT EXISTS idx_referrals_referred_user ON public.affiliate_referrals(referred_user_id);
CREATE INDEX IF NOT EXISTS idx_referrals_commission_status ON public.affiliate_referrals(commission_status);
CREATE INDEX IF NOT EXISTS idx_referrals_converted_at ON public.affiliate_referrals(converted_to_paid_at);
CREATE INDEX IF NOT EXISTS idx_payouts_affiliate_id ON public.affiliate_payouts(affiliate_id);
CREATE INDEX IF NOT EXISTS idx_payouts_status ON public.affiliate_payouts(status);
CREATE INDEX IF NOT EXISTS idx_payouts_period ON public.affiliate_payouts(period_start, period_end);

-- ============================================================
-- HELPER FUNCTION: get commission amount for a referral
-- ============================================================

CREATE OR REPLACE FUNCTION public.get_commission_amount(
  p_affiliate_id UUID,
  p_plan_type TEXT
) RETURNS NUMERIC AS $$
DECLARE
  v_tier INTEGER;
  v_custom_monthly NUMERIC;
  v_custom_annual NUMERIC;
  v_custom_crammer NUMERIC;
  v_default_monthly NUMERIC;
  v_default_annual NUMERIC;
  v_default_crammer NUMERIC;
BEGIN
  -- Get affiliate tier and custom rates
  SELECT tier, commission_monthly_gbp, commission_annual_gbp, commission_crammer_gbp
  INTO v_tier, v_custom_monthly, v_custom_annual, v_custom_crammer
  FROM public.affiliates WHERE id = p_affiliate_id;

  IF NOT FOUND THEN
    RETURN 0;
  END IF;

  -- Get default rates for this tier
  SELECT commission_monthly_gbp, commission_annual_gbp, commission_crammer_gbp
  INTO v_default_monthly, v_default_annual, v_default_crammer
  FROM public.affiliate_commission_defaults WHERE tier = v_tier;

  -- Return custom rate if set, otherwise default
  RETURN CASE p_plan_type
    WHEN 'monthly' THEN COALESCE(v_custom_monthly, v_default_monthly)
    WHEN 'annual' THEN COALESCE(v_custom_annual, v_default_annual)
    WHEN 'crammer' THEN COALESCE(v_custom_crammer, v_default_crammer)
    ELSE 0
  END;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- ============================================================
-- UPDATED_AT TRIGGERS
-- ============================================================

CREATE TRIGGER affiliates_updated_at
  BEFORE UPDATE ON public.affiliates
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at();

CREATE TRIGGER referrals_updated_at
  BEFORE UPDATE ON public.affiliate_referrals
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at();

CREATE TRIGGER payouts_updated_at
  BEFORE UPDATE ON public.affiliate_payouts
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at();

-- is_minor auto-compute trigger (replaces the non-immutable generated column above).
-- Fires BEFORE INSERT and BEFORE UPDATE OF date_of_birth so is_minor stays accurate
-- without requiring application code to compute it.
CREATE OR REPLACE FUNCTION public.set_affiliate_is_minor()
RETURNS TRIGGER AS $$
BEGIN
  NEW.is_minor = EXTRACT(YEAR FROM AGE(NEW.date_of_birth)) < 18;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER affiliates_set_is_minor
  BEFORE INSERT OR UPDATE OF date_of_birth ON public.affiliates
  FOR EACH ROW EXECUTE FUNCTION public.set_affiliate_is_minor();
