-- Migration: New features from QA/QC audit Cycle 6
-- Date: 2026-03-22
--
-- This migration adds support for:
-- 1. Parental consent tracking (GDPR compliance)
-- 2. Invite token expiration
-- 3. Contact form submissions
-- 4. Date of birth on profiles (required by consent system)
--
-- NOTE: subscription_end_date already exists in 001_initial_schema.sql
--
-- Run with: supabase db push  (or paste into Supabase SQL editor)

-- ============================================================================
-- 0. Profiles — add date_of_birth (used by consent route to check age < 16)
-- ============================================================================
ALTER TABLE public.profiles
  ADD COLUMN IF NOT EXISTS date_of_birth DATE;

-- ============================================================================
-- 1. Parental Consents Table
-- ============================================================================
CREATE TABLE IF NOT EXISTS public.parental_consents (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  student_user_id uuid NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  school_id uuid NOT NULL REFERENCES public.schools(id) ON DELETE CASCADE,
  parent_email text NOT NULL,
  consent_token text UNIQUE DEFAULT encode(gen_random_bytes(32), 'hex'),
  status text NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'approved', 'denied')),
  consented_at timestamptz,
  created_at timestamptz DEFAULT now() NOT NULL,
  updated_at timestamptz DEFAULT now() NOT NULL,
  UNIQUE(student_user_id, school_id)
);

-- RLS policies
ALTER TABLE public.parental_consents ENABLE ROW LEVEL SECURITY;

CREATE POLICY "School admins can view consent records"
  ON public.parental_consents FOR SELECT
  USING (
    school_id IN (
      SELECT school_id FROM public.school_members
      WHERE user_id = auth.uid()
      AND role IN ('admin', 'head_of_department')
      AND invite_status = 'accepted'
    )
  );

CREATE POLICY "Students can view own consent"
  ON public.parental_consents FOR SELECT
  USING (student_user_id = auth.uid());

-- Service role can do everything (used by consent API routes)
CREATE POLICY "Service role full access on parental_consents"
  ON public.parental_consents FOR ALL
  USING (true) WITH CHECK (true);

-- Updated_at trigger (reuses function from 001_initial_schema)
CREATE TRIGGER parental_consents_updated_at
  BEFORE UPDATE ON public.parental_consents
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at();

-- ============================================================================
-- 2. Invite Token Expiration
-- ============================================================================
ALTER TABLE public.school_members
  ADD COLUMN IF NOT EXISTS invite_expires_at timestamptz;

-- Set default expiration for existing pending invites (7 days from now)
UPDATE public.school_members
SET invite_expires_at = now() + interval '7 days'
WHERE invite_status = 'pending' AND invite_expires_at IS NULL;

-- ============================================================================
-- 3. Contact Form Submissions
-- ============================================================================
CREATE TABLE IF NOT EXISTS public.contact_submissions (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  name text NOT NULL,
  email text NOT NULL,
  subject text NOT NULL,
  message text NOT NULL,
  status text NOT NULL DEFAULT 'new' CHECK (status IN ('new', 'read', 'replied', 'archived')),
  created_at timestamptz DEFAULT now() NOT NULL
);

ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;

-- Only service role can insert/read (no public RLS policies needed)
-- The contact API route uses the service role client.

-- ============================================================================
-- 4. Indexes
-- ============================================================================
CREATE INDEX IF NOT EXISTS idx_parental_consents_student ON public.parental_consents(student_user_id);
CREATE INDEX IF NOT EXISTS idx_parental_consents_school ON public.parental_consents(school_id);
CREATE INDEX IF NOT EXISTS idx_parental_consents_token ON public.parental_consents(consent_token);
CREATE INDEX IF NOT EXISTS idx_school_members_invite_expires ON public.school_members(invite_expires_at) WHERE invite_status = 'pending';
CREATE INDEX IF NOT EXISTS idx_contact_submissions_status ON public.contact_submissions(status);
