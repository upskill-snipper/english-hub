-- RLS Hardening: Enable Row Level Security on tables that were missing it.
-- For all five tables, only SELECT policies are defined; INSERT/UPDATE/DELETE
-- are implicitly denied to non-service-role callers once RLS is enabled.

-- ============================================================================
-- 1. quiz_questions
-- ============================================================================
ALTER TABLE public.quiz_questions ENABLE ROW LEVEL SECURITY;

-- Authenticated users can read questions for modules in courses they are enrolled in.
CREATE POLICY "Enrolled users can view quiz questions"
  ON public.quiz_questions
  FOR SELECT
  USING (
    EXISTS (
      SELECT 1
        FROM public.modules m
        JOIN public.enrolments e ON e.course_id = m.course_id
       WHERE m.id = quiz_questions.module_id
         AND e.user_id = auth.uid()
    )
  );

-- ============================================================================
-- 2. school_members
-- ============================================================================
ALTER TABLE public.school_members ENABLE ROW LEVEL SECURITY;

-- Users can see members of schools they themselves belong to.
CREATE POLICY "Users can view members of their schools"
  ON public.school_members
  FOR SELECT
  USING (
    EXISTS (
      SELECT 1
        FROM public.school_members my
       WHERE my.school_id = school_members.school_id
         AND my.user_id = auth.uid()
    )
  );

-- ============================================================================
-- 3. classes
-- ============================================================================
ALTER TABLE public.classes ENABLE ROW LEVEL SECURITY;

-- Users who are members of the owning school can see its classes.
CREATE POLICY "School members can view classes"
  ON public.classes
  FOR SELECT
  USING (
    EXISTS (
      SELECT 1
        FROM public.school_members sm
       WHERE sm.school_id = classes.school_id
         AND sm.user_id = auth.uid()
    )
  );

-- ============================================================================
-- 4. class_students
-- ============================================================================
ALTER TABLE public.class_students ENABLE ROW LEVEL SECURITY;

-- Students can see their own enrolment row.
CREATE POLICY "Students can view own class enrolment"
  ON public.class_students
  FOR SELECT
  USING (
    class_students.student_id = auth.uid()
  );

-- Teachers / admins of the school that owns the class can see all rows.
CREATE POLICY "School staff can view class students"
  ON public.class_students
  FOR SELECT
  USING (
    EXISTS (
      SELECT 1
        FROM public.classes c
        JOIN public.school_members sm ON sm.school_id = c.school_id
       WHERE c.id = class_students.class_id
         AND sm.user_id = auth.uid()
    )
  );

-- ============================================================================
-- 5. school_join_codes
-- ============================================================================
ALTER TABLE public.school_join_codes ENABLE ROW LEVEL SECURITY;

-- Members of the school that owns the code can view it.
CREATE POLICY "School members can view join codes"
  ON public.school_join_codes
  FOR SELECT
  USING (
    EXISTS (
      SELECT 1
        FROM public.school_members sm
       WHERE sm.school_id = school_join_codes.school_id
         AND sm.user_id = auth.uid()
    )
  );
