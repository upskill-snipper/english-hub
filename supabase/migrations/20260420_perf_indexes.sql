-- ============================================================================
-- Migration: 20260420_perf_indexes.sql
-- Date: 2026-04-20
-- Source: Cycle 2 performance audit (QA Cycle 1 follow-up, Agent-DB-PERF)
--
-- PURPOSE
-- -------
-- Add missing indexes for hot query paths that the Cycle 2 perf audit
-- identified as causing full-table scans. Each index below is paired with a
-- file:line reference to the query it supports so future auditors can trace
-- the rationale.
--
-- EXISTING COVERAGE (from prior migrations) — NOT re-added here:
--   001: idx_module_progress_user_course            (user_id, course_id)
--   001: idx_module_progress_user_completed         (user_id, completed, completed_at)
--        ^ Does NOT help analytics queries that filter on completed_at without
--          a `completed` predicate in position 2 — hence the new indexes below.
--   001: idx_assessment_attempts_user_course        (user_id, course_id)
--   001: idx_practice_sessions_user                 (user_id)
--   003: idx_class_students_class                   (class_id) WHERE is_active
--   003: idx_class_students_student                 (student_id) WHERE is_active
--   004: idx_class_students_student_active          (student_id, is_active)
--        ^ Leading col student_id does not accelerate IN-list scans on class_id.
--
-- OPERATOR NOTE — CREATE INDEX CONCURRENTLY
-- -----------------------------------------
-- On large production tables, `CREATE INDEX` takes an ACCESS EXCLUSIVE lock
-- that blocks writes for the duration of the build. `CREATE INDEX CONCURRENTLY`
-- avoids this but CANNOT run inside a transaction block, and the Supabase
-- migration runner wraps each migration in a transaction. We therefore ship
-- this migration with plain `CREATE INDEX IF NOT EXISTS`. For very large prod
-- tables, the operator may prefer to run each statement manually as
-- `CREATE INDEX CONCURRENTLY IF NOT EXISTS <name> ...;` via psql BEFORE applying
-- this migration — the `IF NOT EXISTS` guard makes this migration a no-op when
-- the indexes already exist.
--
-- PRISMA-SIDE FOLLOW-UPS (out of scope for this migration)
-- --------------------------------------------------------
-- Cycle 2 also flagged two composite indexes on Prisma-managed tables which
-- must be declared in `prisma/schema.prisma` via `@@index`, then applied via
-- `prisma migrate`. These are OUT OF SCOPE for this file (Agent-DB-PERF is
-- restricted to the Supabase migrations dir) and should be raised as a
-- separate PR touching `prisma/schema.prisma`:
--   1. AuditLog:  @@index([userId, timestamp(sort: Desc)])
--                 — supports the admin audit-log timeline queries.
--   2. Essay:     @@index([userId, deletedAt, createdAt])
--                 — supports the "my essays" list which filters out soft-
--                   deleted rows and orders by createdAt.
-- ============================================================================


-- ── module_progress ────────────────────────────────────────────────────────
-- Analytics/reporting queries filter on completed_at across ALL students,
-- either with no user filter or with a large IN (...) user list, and with
-- no `completed` predicate. The existing (user_id, completed, completed_at)
-- composite from 001 can't serve these scans because `completed` is not in
-- the WHERE clause, so Postgres falls back to a seq scan.
--
-- Query: src/app/api/school/reports/generate/route.ts:362-366
--   .in('user_id', studentIds).gte('completed_at', from).lte('completed_at', to)
-- Query: src/app/api/school/analytics/class-performance/route.ts:145-147
--   .in('user_id', studentIds) — large IN-list, benefits from user_id leading col
CREATE INDEX IF NOT EXISTS idx_module_progress_completed_at
  ON public.module_progress(completed_at DESC)
  WHERE completed_at IS NOT NULL;

CREATE INDEX IF NOT EXISTS idx_module_progress_user_completed_at
  ON public.module_progress(user_id, completed_at DESC)
  WHERE completed_at IS NOT NULL;

-- Query: src/app/api/school/analytics/class-performance/route.ts:149-151
--   .from('module_progress').select('quiz_score').not('quiz_score', 'is', null)
-- This scans the entire table to pull non-null quiz scores for the school-wide
-- comparison baseline. A partial index on quiz_score IS NOT NULL keeps only
-- the relevant rows and is far smaller than a full-column index.
CREATE INDEX IF NOT EXISTS idx_module_progress_quiz_score_not_null
  ON public.module_progress(quiz_score)
  WHERE quiz_score IS NOT NULL;


-- ── assessment_attempts ────────────────────────────────────────────────────
-- Per-student timelines order by attempted_at DESC. The existing
-- (user_id, course_id) index from 001 serves course-scoped queries but not
-- the pure timeline case.
--
-- Query: src/app/api/school/students/[studentId]/route.ts:67
--   .eq('user_id', studentId).order('attempted_at', { ascending: false })
-- Query: src/app/dashboard/grades/page.tsx:168 (ascending variant, same index)
CREATE INDEX IF NOT EXISTS idx_assessment_attempts_user_attempted_at
  ON public.assessment_attempts(user_id, attempted_at DESC);


-- ── practice_sessions ──────────────────────────────────────────────────────
-- Per-student practice history ordered by created_at DESC. The existing
-- single-column (user_id) index from 001 finds the user's rows but then
-- requires a sort by created_at, which is slow for heavy practicers.
--
-- Query: src/app/api/school/students/[studentId]/route.ts:68
--   .eq('user_id', studentId).order('created_at', { ascending: false })
-- Query: src/app/api/school/students/[studentId]/trends/route.ts:72
CREATE INDEX IF NOT EXISTS idx_practice_sessions_user_created_at
  ON public.practice_sessions(user_id, created_at DESC);


-- ── class_students ─────────────────────────────────────────────────────────
-- The bulk class-membership check filters with `class_id IN (...)` combined
-- with `student_id = X` and `is_active = TRUE`. Existing indexes:
--   idx_class_students_class (class_id)      — helps `class_id IN (...)`
--   idx_class_students_student (student_id)  — helps equality on student_id
--   idx_class_students_student_active (student_id, is_active) — same leading col
-- Postgres can only use one of them and then filters the remaining predicate.
-- A composite (student_id, class_id) partial index lets Postgres do an index
-- scan driven by student_id and then a range/IN scan on class_id without a
-- separate Bitmap-Or combine step.
--
-- Query: src/lib/school-student-auth.ts:22-26
--   .in('class_id', classIds).eq('student_id', studentId).eq('is_active', true)
CREATE INDEX IF NOT EXISTS idx_class_students_student_class_active
  ON public.class_students(student_id, class_id)
  WHERE is_active = TRUE;


-- ============================================================================
-- End of migration. Post-apply verification (run manually):
--   SELECT indexname, indexdef FROM pg_indexes
--    WHERE schemaname = 'public'
--      AND tablename IN ('module_progress','assessment_attempts',
--                        'practice_sessions','class_students')
--    ORDER BY tablename, indexname;
-- ============================================================================
