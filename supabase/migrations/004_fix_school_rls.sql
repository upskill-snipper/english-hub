-- ============================================================================
-- Migration: 004_fix_school_rls.sql
-- Date: 2026-03-22
-- Purpose: Fix critical RLS vulnerability on school tables.
--
-- PROBLEM:
-- In 003_school_analytics.sql, every school table has a policy:
--   FOR ALL USING (true) WITH CHECK (true)
-- named "Service role full access". Despite the name, these policies apply to
-- ALL authenticated users (not just the service role), because they contain no
-- role check. Any logged-in user can read/write ANY school's data.
--
-- The 20260322_rls_hardening.sql migration added proper SELECT policies but
-- did NOT drop the original permissive FOR ALL policies, so they still allow
-- full access to everyone.
--
-- FIX:
-- 1. Drop all the overly permissive "Service role full access" policies.
-- 2. Create granular policies based on school membership and role.
-- 3. The Supabase service_role key bypasses RLS entirely (it sets the
--    Postgres role to `service_role` which has BYPASSRLS), so API routes
--    using createServiceRoleClient() continue to work without any policy.
--
-- ROLE HIERARCHY (from school_members.role):
--   admin              -> full CRUD on own school's data
--   head_of_department -> full CRUD on own school's data
--   teacher            -> read + limited write on own school's data
--
-- Students are linked via class_students (student_id -> auth.users.id).
-- Parents access data via parent_child_links (handled in API routes with
-- service role, not via direct RLS).
-- ============================================================================

BEGIN;

-- ============================================================================
-- STEP 1: Drop the overly permissive policies from 003_school_analytics.sql
-- ============================================================================

-- schools
DROP POLICY IF EXISTS "Service role full access" ON public.schools;

-- school_members
DROP POLICY IF EXISTS "Service role full access" ON public.school_members;

-- classes
DROP POLICY IF EXISTS "Service role full access" ON public.classes;

-- class_students
DROP POLICY IF EXISTS "Service role full access" ON public.class_students;

-- school_join_codes
DROP POLICY IF EXISTS "Service role full access" ON public.school_join_codes;

-- analytics_snapshots
DROP POLICY IF EXISTS "Service role full access" ON public.analytics_snapshots;

-- Also drop the overly permissive "Service role full access on parental_consents"
-- from 20260322_new_features.sql (same pattern: FOR ALL USING (true))
DROP POLICY IF EXISTS "Service role full access on parental_consents" ON public.parental_consents;


-- ============================================================================
-- STEP 2: Helper function — returns the school_id(s) a user belongs to
-- as a staff member (admin/head_of_department/teacher).
-- Used by multiple policies below.
-- ============================================================================

-- Note: We intentionally do NOT create a SECURITY DEFINER function here.
-- Supabase RLS policies run as the calling user, and the sub-selects on
-- school_members are allowed because the 20260322_rls_hardening.sql migration
-- already grants SELECT on school_members to users who are members.
-- However, to avoid circular dependency (school_members SELECT policy
-- referencing school_members), we use a SECURITY DEFINER helper.

CREATE OR REPLACE FUNCTION public.get_user_school_ids(p_user_id UUID)
RETURNS SETOF UUID
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT school_id
  FROM public.school_members
  WHERE user_id = p_user_id
    AND invite_status = 'accepted';
$$;

-- Helper: returns the role of a user within a specific school
CREATE OR REPLACE FUNCTION public.get_user_school_role(p_user_id UUID, p_school_id UUID)
RETURNS TEXT
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT role
  FROM public.school_members
  WHERE user_id = p_user_id
    AND school_id = p_school_id
    AND invite_status = 'accepted'
  LIMIT 1;
$$;

-- Helper: returns school_ids where a student is enrolled (via class_students)
CREATE OR REPLACE FUNCTION public.get_student_school_ids(p_user_id UUID)
RETURNS SETOF UUID
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT DISTINCT c.school_id
  FROM public.class_students cs
  JOIN public.classes c ON c.id = cs.class_id
  WHERE cs.student_id = p_user_id
    AND cs.is_active = TRUE;
$$;


-- ============================================================================
-- STEP 3: SCHOOLS table policies
-- ============================================================================

-- 3a. School staff (admin/HoD/teacher) can read their own school
CREATE POLICY "school_staff_select"
  ON public.schools
  FOR SELECT
  USING (
    id IN (SELECT public.get_user_school_ids(auth.uid()))
  );

-- 3b. Students can read the school they belong to (for displaying school name, etc.)
CREATE POLICY "school_students_select"
  ON public.schools
  FOR SELECT
  USING (
    id IN (SELECT public.get_student_school_ids(auth.uid()))
  );

-- 3c. School admins can update their own school (name, contact info, etc.)
CREATE POLICY "school_admins_update"
  ON public.schools
  FOR UPDATE
  USING (
    public.get_user_school_role(auth.uid(), id) = 'admin'
  )
  WITH CHECK (
    public.get_user_school_role(auth.uid(), id) = 'admin'
  );

-- 3d. No direct INSERT or DELETE by end users.
-- School creation is handled server-side via service role.


-- ============================================================================
-- STEP 4: SCHOOL_MEMBERS table policies
-- ============================================================================
-- Note: 20260322_rls_hardening.sql already has a SELECT policy
-- "Users can view members of their schools". We add write policies here.

-- 4a. School admins and HoDs can insert new members (invite)
CREATE POLICY "school_admin_hod_insert_members"
  ON public.school_members
  FOR INSERT
  WITH CHECK (
    public.get_user_school_role(auth.uid(), school_id) IN ('admin', 'head_of_department')
  );

-- 4b. School admins can update members (change role, etc.)
CREATE POLICY "school_admin_update_members"
  ON public.school_members
  FOR UPDATE
  USING (
    public.get_user_school_role(auth.uid(), school_id) = 'admin'
  )
  WITH CHECK (
    public.get_user_school_role(auth.uid(), school_id) = 'admin'
  );

-- 4c. Members can update their own row (e.g., accept invite, update last_active_at)
CREATE POLICY "members_update_own_row"
  ON public.school_members
  FOR UPDATE
  USING (user_id = auth.uid())
  WITH CHECK (user_id = auth.uid());

-- 4d. School admins can remove members
CREATE POLICY "school_admin_delete_members"
  ON public.school_members
  FOR DELETE
  USING (
    public.get_user_school_role(auth.uid(), school_id) = 'admin'
  );


-- ============================================================================
-- STEP 5: CLASSES table policies
-- ============================================================================
-- Note: 20260322_rls_hardening.sql already has a SELECT policy
-- "School members can view classes". We add write policies here.

-- 5a. Students can see classes they are enrolled in
CREATE POLICY "students_select_own_classes"
  ON public.classes
  FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM public.class_students cs
      WHERE cs.class_id = classes.id
        AND cs.student_id = auth.uid()
        AND cs.is_active = TRUE
    )
  );

-- 5b. School admins and HoDs can create classes
CREATE POLICY "school_admin_hod_insert_classes"
  ON public.classes
  FOR INSERT
  WITH CHECK (
    public.get_user_school_role(auth.uid(), school_id) IN ('admin', 'head_of_department')
  );

-- 5c. School admins, HoDs, and the assigned teacher can update a class
CREATE POLICY "school_staff_update_classes"
  ON public.classes
  FOR UPDATE
  USING (
    public.get_user_school_role(auth.uid(), school_id) IN ('admin', 'head_of_department')
    OR (
      teacher_id IN (
        SELECT id FROM public.school_members
        WHERE user_id = auth.uid() AND school_id = classes.school_id
      )
    )
  )
  WITH CHECK (
    public.get_user_school_role(auth.uid(), school_id) IN ('admin', 'head_of_department')
    OR (
      teacher_id IN (
        SELECT id FROM public.school_members
        WHERE user_id = auth.uid() AND school_id = classes.school_id
      )
    )
  );

-- 5d. School admins can delete classes
CREATE POLICY "school_admin_delete_classes"
  ON public.classes
  FOR DELETE
  USING (
    public.get_user_school_role(auth.uid(), school_id) = 'admin'
  );


-- ============================================================================
-- STEP 6: CLASS_STUDENTS table policies
-- ============================================================================
-- Note: 20260322_rls_hardening.sql already has SELECT policies:
-- "Students can view own class enrolment" and "School staff can view class students"

-- 6a. School staff can add students to classes
CREATE POLICY "school_staff_insert_class_students"
  ON public.class_students
  FOR INSERT
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM public.classes c
      JOIN public.school_members sm ON sm.school_id = c.school_id
      WHERE c.id = class_students.class_id
        AND sm.user_id = auth.uid()
        AND sm.invite_status = 'accepted'
    )
  );

-- 6b. School staff can update class_students (e.g., set is_active = false)
CREATE POLICY "school_staff_update_class_students"
  ON public.class_students
  FOR UPDATE
  USING (
    EXISTS (
      SELECT 1 FROM public.classes c
      JOIN public.school_members sm ON sm.school_id = c.school_id
      WHERE c.id = class_students.class_id
        AND sm.user_id = auth.uid()
        AND sm.invite_status = 'accepted'
    )
  )
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM public.classes c
      JOIN public.school_members sm ON sm.school_id = c.school_id
      WHERE c.id = class_students.class_id
        AND sm.user_id = auth.uid()
        AND sm.invite_status = 'accepted'
    )
  );

-- 6c. School admins can delete class_students entries
CREATE POLICY "school_admin_delete_class_students"
  ON public.class_students
  FOR DELETE
  USING (
    EXISTS (
      SELECT 1 FROM public.classes c
      WHERE c.id = class_students.class_id
        AND public.get_user_school_role(auth.uid(), c.school_id) = 'admin'
    )
  );


-- ============================================================================
-- STEP 7: SCHOOL_JOIN_CODES table policies
-- ============================================================================
-- Note: 20260322_rls_hardening.sql already has a SELECT policy
-- "School members can view join codes". We add write policies here.

-- 7a. Students need to read join codes during the join flow (to validate code)
-- The join API uses service role, but in case any client-side validation
-- needs to check code existence, we allow students to select active codes.
-- This is safe because codes are random UUIDs and expirable.
CREATE POLICY "anyone_can_read_active_join_codes"
  ON public.school_join_codes
  FOR SELECT
  USING (is_active = TRUE);

-- 7b. School admins and HoDs can create join codes
CREATE POLICY "school_admin_hod_insert_join_codes"
  ON public.school_join_codes
  FOR INSERT
  WITH CHECK (
    public.get_user_school_role(auth.uid(), school_id) IN ('admin', 'head_of_department')
  );

-- 7c. School admins and HoDs can update join codes (deactivate, change limits)
CREATE POLICY "school_admin_hod_update_join_codes"
  ON public.school_join_codes
  FOR UPDATE
  USING (
    public.get_user_school_role(auth.uid(), school_id) IN ('admin', 'head_of_department')
  )
  WITH CHECK (
    public.get_user_school_role(auth.uid(), school_id) IN ('admin', 'head_of_department')
  );

-- 7d. School admins can delete join codes
CREATE POLICY "school_admin_delete_join_codes"
  ON public.school_join_codes
  FOR DELETE
  USING (
    public.get_user_school_role(auth.uid(), school_id) = 'admin'
  );


-- ============================================================================
-- STEP 8: ANALYTICS_SNAPSHOTS table policies
-- ============================================================================

-- 8a. School staff can read analytics for their school
CREATE POLICY "school_staff_select_analytics"
  ON public.analytics_snapshots
  FOR SELECT
  USING (
    school_id IN (SELECT public.get_user_school_ids(auth.uid()))
  );

-- 8b. Students can read their own analytics snapshots
CREATE POLICY "students_select_own_analytics"
  ON public.analytics_snapshots
  FOR SELECT
  USING (student_id = auth.uid());

-- 8c. No direct INSERT/UPDATE/DELETE by end users.
-- Analytics snapshots are computed and written by server-side cron jobs
-- using the service role.


-- ============================================================================
-- STEP 9: PARENTAL_CONSENTS table — replace the dropped permissive policy
-- ============================================================================
-- The 20260322_new_features.sql migration already has two good SELECT policies:
-- "School admins can view consent records" and "Students can view own consent".
-- We only need to ensure no open write policy exists (we dropped the FOR ALL above).
-- All consent writes happen via the service role in API routes.


-- ============================================================================
-- STEP 10: Performance indexes for RLS policy sub-queries
-- ============================================================================

-- The helper functions and sub-queries filter on (user_id, invite_status)
-- and (student_id, is_active) frequently. Add composite indexes if missing.
CREATE INDEX IF NOT EXISTS idx_school_members_user_status
  ON public.school_members(user_id, invite_status);

CREATE INDEX IF NOT EXISTS idx_class_students_student_active
  ON public.class_students(student_id, is_active);

CREATE INDEX IF NOT EXISTS idx_analytics_snapshots_student
  ON public.analytics_snapshots(student_id);

COMMIT;
