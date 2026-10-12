-- ─── School tables: access rules that work, and that stop pupils escalating ──
--
-- CONTEXT (12 October 2026)
--
-- THIS FILE CHANGES WHO CAN READ AND WRITE SCHOOL DATA, MUCH OF IT ABOUT
-- CHILDREN. It needs Calum's approval before it is pushed: every file in this
-- folder runs against production in the build of the first deploy that
-- contains it.
--
-- Three faults, all found on 12 October while checking what a real school's
-- pilot would meet. Production held no schools, so none had been seen.
--
-- 1. INFINITE RECURSION. The SELECT policy "Users can view members of their
--    schools" on school_members queried school_members itself, and classes
--    and class_students referenced each other (students_select_own_classes
--    reads class_students; "School staff can view class students" reads
--    classes). Postgres refuses such policies at query time with 42P17. Proved
--    on production read-only: as role `authenticated`, a count on
--    school_members, school_students, school_join_codes, classes,
--    class_students, marking_submissions, teacher_moderations,
--    bulk_import_jobs and import_results each failed with "infinite recursion
--    detected in policy". Every browser-side read of these tables, and
--    /api/school/marking (which reads with the user's session and turns any
--    error into an empty list), would have shown a teacher nothing.
--
-- 2. A PUPIL COULD MAKE THEMSELVES A SCHOOL ADMIN. "members_update_own_row"
--    let any member update every column of their own school_members row,
--    role included. The recursion above was, by accident, all that stopped
--    it: fixing (1) alone would have opened it. No application code updates
--    school_members through a user's session (every write goes through the
--    service role), so the policy is dropped, not narrowed.
--
-- 3. PUPILS SAW TOO MUCH. Any member, pupils included, could read every
--    member's name and email, every class enrolment and every join code in
--    their school (so a pupil could read a teacher join code), and could add
--    any user to any class. Reads of the roster are now for staff; a pupil
--    sees their own membership, their own classes and their own enrolments.
--
-- THE RULE USED THROUGHOUT
--
-- A policy never selects from its own table, or from a table whose policies
-- select back. Membership is checked through SECURITY DEFINER functions,
-- which read with the definer's rights and so do not re-enter RLS.
-- get_user_school_role and get_user_school_ids already exist (accepted
-- members only); get_class_school_id and is_active_class_student are added
-- here in the same shape.
--
-- Staff means role admin, head_of_department or teacher with an accepted
-- membership. Policies that already used the functions correctly (schools,
-- the admin and head-of-department write policies, marking_submissions,
-- teacher_moderations) are untouched; their subqueries on school_members now
-- evaluate without recursion because a member can always read their own row.
--
-- Tested before writing, against a local Postgres 17 (PGlite) holding the
-- production policies verbatim: the recursion reproduced, then this file
-- removed it, and the access scenarios in the commit message held.

-- ─── Helper functions ───────────────────────────────────────────────────────

CREATE OR REPLACE FUNCTION public.get_class_school_id(p_class_id uuid)
RETURNS uuid
LANGUAGE sql
STABLE SECURITY DEFINER
SET search_path TO 'public'
AS $function$
  SELECT school_id FROM public.classes WHERE id = p_class_id;
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
      AND is_active = TRUE
  );
$function$;

-- Policies call these as the querying user, so `authenticated` needs EXECUTE.
-- Nobody else does: they would otherwise be callable over the REST API.
REVOKE ALL ON FUNCTION public.get_class_school_id(uuid) FROM PUBLIC, anon;
REVOKE ALL ON FUNCTION public.is_active_class_student(uuid, uuid) FROM PUBLIC, anon;
GRANT EXECUTE ON FUNCTION public.get_class_school_id(uuid) TO authenticated, service_role;
GRANT EXECUTE ON FUNCTION public.is_active_class_student(uuid, uuid) TO authenticated, service_role;

-- ─── school_members ─────────────────────────────────────────────────────────

DROP POLICY IF EXISTS "Users can view members of their schools" ON public.school_members;
DROP POLICY IF EXISTS "members_update_own_row" ON public.school_members;
DROP POLICY IF EXISTS "school_members_select_own_or_staff" ON public.school_members;

CREATE POLICY "school_members_select_own_or_staff" ON public.school_members
  FOR SELECT TO authenticated
  USING (
    user_id = auth.uid()
    OR public.get_user_school_role(auth.uid(), school_id)
       IN ('admin', 'head_of_department', 'teacher')
  );

-- ─── classes ────────────────────────────────────────────────────────────────

DROP POLICY IF EXISTS "School members can view classes" ON public.classes;
DROP POLICY IF EXISTS "students_select_own_classes" ON public.classes;
DROP POLICY IF EXISTS "classes_select_staff" ON public.classes;
DROP POLICY IF EXISTS "classes_select_own_pupil" ON public.classes;

CREATE POLICY "classes_select_staff" ON public.classes
  FOR SELECT TO authenticated
  USING (
    public.get_user_school_role(auth.uid(), school_id)
      IN ('admin', 'head_of_department', 'teacher')
  );

CREATE POLICY "classes_select_own_pupil" ON public.classes
  FOR SELECT TO authenticated
  USING (public.is_active_class_student(id, auth.uid()));

-- ─── class_students ─────────────────────────────────────────────────────────
-- "Students can view own class enrolment" (student_id = auth.uid()) stays.

DROP POLICY IF EXISTS "School staff can view class students" ON public.class_students;
DROP POLICY IF EXISTS "school_staff_insert_class_students" ON public.class_students;
DROP POLICY IF EXISTS "school_staff_update_class_students" ON public.class_students;
DROP POLICY IF EXISTS "school_admin_delete_class_students" ON public.class_students;
DROP POLICY IF EXISTS "class_students_select_staff" ON public.class_students;
DROP POLICY IF EXISTS "class_students_insert_staff" ON public.class_students;
DROP POLICY IF EXISTS "class_students_update_staff" ON public.class_students;
DROP POLICY IF EXISTS "class_students_delete_admin" ON public.class_students;

CREATE POLICY "class_students_select_staff" ON public.class_students
  FOR SELECT TO authenticated
  USING (
    public.get_user_school_role(auth.uid(), public.get_class_school_id(class_id))
      IN ('admin', 'head_of_department', 'teacher')
  );

CREATE POLICY "class_students_insert_staff" ON public.class_students
  FOR INSERT TO authenticated
  WITH CHECK (
    public.get_user_school_role(auth.uid(), public.get_class_school_id(class_id))
      IN ('admin', 'head_of_department', 'teacher')
  );

CREATE POLICY "class_students_update_staff" ON public.class_students
  FOR UPDATE TO authenticated
  USING (
    public.get_user_school_role(auth.uid(), public.get_class_school_id(class_id))
      IN ('admin', 'head_of_department', 'teacher')
  )
  WITH CHECK (
    public.get_user_school_role(auth.uid(), public.get_class_school_id(class_id))
      IN ('admin', 'head_of_department', 'teacher')
  );

CREATE POLICY "class_students_delete_admin" ON public.class_students
  FOR DELETE TO authenticated
  USING (
    public.get_user_school_role(auth.uid(), public.get_class_school_id(class_id)) = 'admin'
  );

-- ─── school_join_codes ──────────────────────────────────────────────────────
-- Redeeming a code reads it with the service role (/api/school/join), so a
-- pupil never needs to read this table.

DROP POLICY IF EXISTS "School members can view join codes" ON public.school_join_codes;
DROP POLICY IF EXISTS "school_join_codes_select_staff" ON public.school_join_codes;

CREATE POLICY "school_join_codes_select_staff" ON public.school_join_codes
  FOR SELECT TO authenticated
  USING (
    public.get_user_school_role(auth.uid(), school_id)
      IN ('admin', 'head_of_department', 'teacher')
  );
