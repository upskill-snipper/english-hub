-- Add role column to profiles table
-- Supports: student (default), teacher, parent, admin
ALTER TABLE public.profiles
  ADD COLUMN IF NOT EXISTS role TEXT DEFAULT 'student'
    CHECK (role IN ('student', 'teacher', 'parent', 'admin'));

-- Add school_name for teacher profiles
ALTER TABLE public.profiles
  ADD COLUMN IF NOT EXISTS school_name TEXT;

-- Index for role-based queries
CREATE INDEX IF NOT EXISTS idx_profiles_role ON public.profiles(role);
