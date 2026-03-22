-- Schools table
CREATE TABLE IF NOT EXISTS public.schools (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  address TEXT,
  city TEXT,
  postcode TEXT,
  contact_email TEXT NOT NULL,
  contact_phone TEXT,
  school_type TEXT CHECK (school_type IN ('secondary','sixth_form','independent','academy','mat','other')),
  stripe_customer_id TEXT UNIQUE,
  subscription_status TEXT DEFAULT 'trialing' CHECK (subscription_status IN ('trialing','active','past_due','cancelled')),
  subscription_plan TEXT DEFAULT 'department' CHECK (subscription_plan IN ('department','school','mat','custom')),
  seat_limit INTEGER NOT NULL DEFAULT 50,
  seats_used INTEGER DEFAULT 0,
  logo_url TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- School members (teachers/admins)
CREATE TABLE IF NOT EXISTS public.school_members (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  school_id UUID NOT NULL REFERENCES public.schools(id) ON DELETE CASCADE,
  user_id UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  role TEXT NOT NULL DEFAULT 'teacher' CHECK (role IN ('admin','head_of_department','teacher')),
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  department TEXT DEFAULT 'English',
  invite_status TEXT DEFAULT 'pending' CHECK (invite_status IN ('pending','accepted','expired')),
  invite_token TEXT UNIQUE,
  invited_at TIMESTAMPTZ DEFAULT NOW(),
  accepted_at TIMESTAMPTZ,
  last_active_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(school_id, email)
);

-- Classes
CREATE TABLE IF NOT EXISTS public.classes (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  school_id UUID NOT NULL REFERENCES public.schools(id) ON DELETE CASCADE,
  teacher_id UUID REFERENCES public.school_members(id) ON DELETE SET NULL,
  name TEXT NOT NULL,
  year_group TEXT,
  exam_board TEXT,
  academic_year TEXT DEFAULT '2025-2026',
  student_count INTEGER DEFAULT 0,
  is_active BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Class students (links students to classes)
CREATE TABLE IF NOT EXISTS public.class_students (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  class_id UUID NOT NULL REFERENCES public.classes(id) ON DELETE CASCADE,
  student_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  joined_at TIMESTAMPTZ DEFAULT NOW(),
  removed_at TIMESTAMPTZ,
  is_active BOOLEAN DEFAULT TRUE,
  UNIQUE(class_id, student_id)
);

-- School join codes (for students to join a school)
CREATE TABLE IF NOT EXISTS public.school_join_codes (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  school_id UUID NOT NULL REFERENCES public.schools(id) ON DELETE CASCADE,
  class_id UUID REFERENCES public.classes(id) ON DELETE SET NULL,
  code TEXT UNIQUE NOT NULL,
  max_uses INTEGER DEFAULT 200,
  uses INTEGER DEFAULT 0,
  expires_at TIMESTAMPTZ,
  created_by UUID REFERENCES public.school_members(id),
  is_active BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Analytics snapshots (pre-computed weekly rollups)
CREATE TABLE IF NOT EXISTS public.analytics_snapshots (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  school_id UUID NOT NULL REFERENCES public.schools(id) ON DELETE CASCADE,
  class_id UUID REFERENCES public.classes(id) ON DELETE CASCADE,
  student_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  snapshot_date DATE NOT NULL,
  period TEXT DEFAULT 'weekly' CHECK (period IN ('weekly','monthly')),
  metrics JSONB NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Indexes
CREATE INDEX idx_school_members_school ON public.school_members(school_id);
CREATE INDEX idx_school_members_user ON public.school_members(user_id);
CREATE INDEX idx_classes_school ON public.classes(school_id);
CREATE INDEX idx_classes_teacher ON public.classes(teacher_id);
CREATE INDEX idx_class_students_class ON public.class_students(class_id) WHERE is_active = TRUE;
CREATE INDEX idx_class_students_student ON public.class_students(student_id) WHERE is_active = TRUE;
CREATE INDEX idx_school_join_codes_code ON public.school_join_codes(code) WHERE is_active = TRUE;
CREATE INDEX idx_analytics_snapshots_lookup ON public.analytics_snapshots(school_id, class_id, snapshot_date);

-- RLS
ALTER TABLE public.schools ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.school_members ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.classes ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.class_students ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.school_join_codes ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.analytics_snapshots ENABLE ROW LEVEL SECURITY;

-- Service role has full access (for API routes)
CREATE POLICY "Service role full access" ON public.schools FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Service role full access" ON public.school_members FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Service role full access" ON public.classes FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Service role full access" ON public.class_students FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Service role full access" ON public.school_join_codes FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Service role full access" ON public.analytics_snapshots FOR ALL USING (true) WITH CHECK (true);

-- Updated_at triggers for schools and classes
CREATE TRIGGER schools_updated_at
  BEFORE UPDATE ON public.schools
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at();

CREATE TRIGGER classes_updated_at
  BEFORE UPDATE ON public.classes
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at();
