-- ─── School tables: the browser may read some rows, only the server writes ──
--
-- CONTEXT (16 October 2026)
--
-- THIS FILE CHANGES WHO CAN READ AND WRITE SCHOOL DATA, MUCH OF IT ABOUT
-- CHILDREN. It needs Calum's approval before it is pushed: every file in this
-- folder runs against production in the build of the first deploy that
-- contains it. It was prepared on the branch approval/school-rls-2026-10-16
-- and is explained in plain English in the approval note of the same date.
--
-- On 16 October the school API was made to show staff only their own classes
-- and pupils (commit 980c6e78). The database rules underneath still allowed
-- more than the API does. Any signed-in user can call Supabase's REST API
-- directly with their own session, so these rules are the last line:
--
-- 1. A TEACHER COULD PUT ANY CHILD ON THE PLATFORM INTO THEIR CLASS.
--    class_students_insert_staff (12 October) let any teacher insert any user
--    id into any class of their school, around the API rule that only the
--    school's own pupils can be enrolled. An enrolled child's work reaches the
--    teacher through the class.
-- 2. A HEAD OF DEPARTMENT COULD MAKE AN ADMIN, AND AN ADMIN COULD CLAIM ANY
--    ACCOUNT AS A PUPIL. school_admin_hod_insert_members checked the
--    inserter's role, not the role being written, and neither it nor
--    school_admin_update_members limited user_id.
-- 3. A SCHOOL ADMIN COULD EXTEND THEIR OWN ACCESS AND AUTHORISE AI FOR THEIR
--    PUPILS. school_admins_update allowed every column of the school row:
--    access_type, access_until, seat_limit, subscription_status and
--    ai_authorised_at/by, the operator's record that the school authorised AI
--    marking. The settings page saves six named fields through
--    /api/school/settings (a strict schema); nothing else should write here.
-- 4. Pupils could read every analytics snapshot of their school. Teachers
--    could read the school's join codes, teacher codes included, which only
--    admins and heads of department can list through the API. The import
--    tables (import_results was built to hold pupils' temporary passwords)
--    were open to read and write for any admin row, accepted or not. And
--    anyone, signed in or not, could list every active promo code: on 16
--    October that was one code giving a school free access until a date.
-- 5. anon, a visitor who is not signed in, holds every privilege on these
--    tables, and can call the three older helper functions, which take ANY
--    user id and answer which schools that user is in and their role there.
--    A signed-in user could ask the same about anyone else.
--
-- THE RULE APPLIED
--
-- No application code writes these tables through a user's session: every
-- write goes through the service role, in an API route that first checks who
-- is asking (grep of src/ and of the mobile app, 16 October 2026). So the
-- browser-side write policies are dropped, not narrowed. The service role
-- bypasses row-level security and is unaffected. Read policies stay where a
-- page reads through the session (a member's own school_members row and
-- their school's name on the dashboard and header, a pupil's own classes and
-- enrolments) and are narrowed to whole-school staff where nothing in the
-- browser needs them.
--
-- WHAT IT TOUCHES
--
-- Production held no schools, members, classes, enrolments, join codes,
-- snapshots or import rows on 16 October, so nobody's current access
-- changes. Every policy that calls a helper passes auth.uid() as the user
-- (pg_policies, 16 October: 21 policies; no function or view calls them),
-- so the guard added to the helpers changes no policy's answer.
--
-- Tested before writing against a local Postgres 17 (PGlite) holding the
-- production policies and grants verbatim (pg_policies and
-- information_schema, 16 October): the holes reproduced before this file
-- and were closed after it, every read the site relies on still worked, and
-- the file applies twice without error.
--
-- Every dropped policy is listed in scripts/schema-drift-known.json, because
-- the schema manifest does not follow DROP POLICY.

-- ─── Helper functions: they answer only about the caller ───────────────────

CREATE OR REPLACE FUNCTION public.get_user_school_ids(p_user_id uuid)
RETURNS SETOF uuid
LANGUAGE sql
STABLE SECURITY DEFINER
SET search_path TO 'public'
AS $function$
  SELECT school_id
  FROM public.school_members
  WHERE user_id = p_user_id
    AND p_user_id = auth.uid()
    AND invite_status = 'accepted';
$function$;

CREATE OR REPLACE FUNCTION public.get_user_school_role(p_user_id uuid, p_school_id uuid)
RETURNS text
LANGUAGE sql
STABLE SECURITY DEFINER
SET search_path TO 'public'
AS $function$
  SELECT role
  FROM public.school_members
  WHERE user_id = p_user_id
    AND p_user_id = auth.uid()
    AND school_id = p_school_id
    AND invite_status = 'accepted'
  LIMIT 1;
$function$;

CREATE OR REPLACE FUNCTION public.get_student_school_ids(p_user_id uuid)
RETURNS SETOF uuid
LANGUAGE sql
STABLE SECURITY DEFINER
SET search_path TO 'public'
AS $function$
  SELECT DISTINCT c.school_id
  FROM public.class_students cs
  JOIN public.classes c ON c.id = cs.class_id
  WHERE cs.student_id = p_user_id
    AND p_user_id = auth.uid()
    AND cs.is_active = TRUE;
$function$;

CREATE OR REPLACE FUNCTION public.is_active_class_student(p_class_id uuid, p_user_id uuid)
RETURNS boolean
LANGUAGE sql
STABLE SECURITY DEFINER
SET search_path TO 'public'
AS $function$
  SELECT EXISTS (
    SELECT 1
    FROM public.class_students
    WHERE class_id = p_class_id
      AND student_id = p_user_id
      AND p_user_id = auth.uid()
      AND is_active = TRUE
  );
$function$;

-- Policies call these as the querying user, so `authenticated` needs
-- EXECUTE. Nobody else does, as 20261012_school_access_rules.sql already
-- settled for the two newer helpers.
REVOKE ALL ON FUNCTION public.get_user_school_ids(uuid) FROM PUBLIC, anon;
REVOKE ALL ON FUNCTION public.get_user_school_role(uuid, uuid) FROM PUBLIC, anon;
REVOKE ALL ON FUNCTION public.get_student_school_ids(uuid) FROM PUBLIC, anon;
GRANT EXECUTE ON FUNCTION public.get_user_school_ids(uuid) TO authenticated, service_role;
GRANT EXECUTE ON FUNCTION public.get_user_school_role(uuid, uuid) TO authenticated, service_role;
GRANT EXECUTE ON FUNCTION public.get_student_school_ids(uuid) TO authenticated, service_role;

-- ─── anon holds nothing on the school tables ───────────────────────────────
-- Supabase grants anon every privilege on new tables in public and leaves
-- the rest to row-level security. These grants were inert only while every
-- policy stayed false for a visitor; promo_codes_public_read was not.

REVOKE ALL ON public.schools, public.school_members, public.classes,
  public.class_students, public.school_join_codes, public.school_students,
  public.analytics_snapshots, public.bulk_import_jobs, public.import_results,
  public.marking_submissions, public.teacher_moderations, public.promo_codes,
  public.consent_tokens, public.school_inquiries
  FROM anon;

-- ─── schools ────────────────────────────────────────────────────────────────
-- Reads stay as they are: the dashboard shows a member their school's name.

DROP POLICY IF EXISTS "school_admins_update" ON public.schools;

-- ─── school_members ─────────────────────────────────────────────────────────
-- school_members_select_own_or_staff stays: the header and dashboards read a
-- member's own row through the session.

DROP POLICY IF EXISTS "school_admin_hod_insert_members" ON public.school_members;
DROP POLICY IF EXISTS "school_admin_update_members" ON public.school_members;
DROP POLICY IF EXISTS "school_admin_delete_members" ON public.school_members;

-- ─── classes ────────────────────────────────────────────────────────────────
-- classes_select_staff and classes_select_own_pupil stay.

DROP POLICY IF EXISTS "school_admin_hod_insert_classes" ON public.classes;
DROP POLICY IF EXISTS "school_staff_update_classes" ON public.classes;
DROP POLICY IF EXISTS "school_admin_delete_classes" ON public.classes;

-- ─── class_students ─────────────────────────────────────────────────────────
-- class_students_select_staff and "Students can view own class enrolment"
-- stay.

DROP POLICY IF EXISTS "class_students_insert_staff" ON public.class_students;
DROP POLICY IF EXISTS "class_students_update_staff" ON public.class_students;
DROP POLICY IF EXISTS "class_students_delete_admin" ON public.class_students;

-- ─── school_join_codes ──────────────────────────────────────────────────────
-- Read by admins and heads of department only, as GET /api/school/join-codes
-- is. Redeeming a code reads it through lookup_school_join_code and the
-- service role, so nobody else needs the table.

DROP POLICY IF EXISTS "school_admin_hod_insert_join_codes" ON public.school_join_codes;
DROP POLICY IF EXISTS "school_admin_hod_update_join_codes" ON public.school_join_codes;
DROP POLICY IF EXISTS "school_admin_delete_join_codes" ON public.school_join_codes;
DROP POLICY IF EXISTS "school_join_codes_select_staff" ON public.school_join_codes;
DROP POLICY IF EXISTS "school_join_codes_select_admin_hod" ON public.school_join_codes;

CREATE POLICY "school_join_codes_select_admin_hod" ON public.school_join_codes
  FOR SELECT TO authenticated
  USING (
    public.get_user_school_role(auth.uid(), school_id)
      IN ('admin', 'head_of_department')
  );

-- ─── school_students ────────────────────────────────────────────────────────
-- Was FOR ALL, with no check that the membership had been accepted. Now a
-- read for accepted admins and heads of department. students_view_own stays.

DROP POLICY IF EXISTS "school_admins_view_students" ON public.school_students;
DROP POLICY IF EXISTS "school_students_select_admin_hod" ON public.school_students;

CREATE POLICY "school_students_select_admin_hod" ON public.school_students
  FOR SELECT TO authenticated
  USING (
    public.get_user_school_role(auth.uid(), school_id)
      IN ('admin', 'head_of_department')
  );

-- ─── analytics_snapshots ────────────────────────────────────────────────────
-- Nothing in src/ reads or writes this table yet. Whole-school staff may read
-- it; students_select_own_analytics (a pupil's own rows) stays.

DROP POLICY IF EXISTS "school_staff_select_analytics" ON public.analytics_snapshots;
DROP POLICY IF EXISTS "analytics_snapshots_select_admin_hod" ON public.analytics_snapshots;

CREATE POLICY "analytics_snapshots_select_admin_hod" ON public.analytics_snapshots
  FOR SELECT TO authenticated
  USING (
    public.get_user_school_role(auth.uid(), school_id)
      IN ('admin', 'head_of_department')
  );

-- ─── bulk_import_jobs, import_results ───────────────────────────────────────
-- Nothing in src/ uses either table (bulk upload moved to BulkUploadJob on 11
-- October). Service role only.

DROP POLICY IF EXISTS "school_admins_view_import_jobs" ON public.bulk_import_jobs;
DROP POLICY IF EXISTS "school_admins_view_import_results" ON public.import_results;

-- ─── promo_codes ────────────────────────────────────────────────────────────
-- Both readers, /api/school/promo/validate and /api/school/register, use the
-- service role and check one code at a time. Service role only.

DROP POLICY IF EXISTS "promo_codes_public_read" ON public.promo_codes;
