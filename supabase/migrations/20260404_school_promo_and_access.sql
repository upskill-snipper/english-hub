-- Promo codes table
CREATE TABLE IF NOT EXISTS public.promo_codes (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  code TEXT UNIQUE NOT NULL,
  description TEXT,
  discount_type TEXT NOT NULL CHECK (discount_type IN ('percent', 'fixed', 'free_until_date')),
  discount_value NUMERIC, -- percent or fixed amount
  free_until_date DATE, -- for free_until_date type
  max_uses INTEGER, -- null = unlimited
  uses INTEGER DEFAULT 0,
  valid_from TIMESTAMPTZ DEFAULT NOW(),
  valid_until TIMESTAMPTZ, -- null = no expiry
  is_active BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Insert FOUNDER code
INSERT INTO public.promo_codes (code, description, discount_type, free_until_date, is_active)
VALUES ('FOUNDER', 'Pilot school free access until August 2026', 'free_until_date', '2026-08-31', TRUE)
ON CONFLICT (code) DO NOTHING;

-- School access periods (tracks when access was granted and expires)
CREATE TABLE IF NOT EXISTS public.school_access_periods (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  school_id UUID NOT NULL REFERENCES public.schools(id) ON DELETE CASCADE,
  promo_code_id UUID REFERENCES public.promo_codes(id),
  access_type TEXT NOT NULL CHECK (access_type IN ('founder', 'paid', 'trial', 'custom')),
  access_until DATE NOT NULL,
  granted_at TIMESTAMPTZ DEFAULT NOW(),
  is_active BOOLEAN DEFAULT TRUE,
  stripe_subscription_id TEXT,
  notes TEXT
);

-- Bulk import jobs table
CREATE TABLE IF NOT EXISTS public.bulk_import_jobs (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  school_id UUID NOT NULL REFERENCES public.schools(id) ON DELETE CASCADE,
  import_type TEXT NOT NULL CHECK (import_type IN ('students', 'teachers')),
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'processing', 'completed', 'failed')),
  total_rows INTEGER DEFAULT 0,
  success_count INTEGER DEFAULT 0,
  error_count INTEGER DEFAULT 0,
  error_details JSONB DEFAULT '[]',
  created_by UUID REFERENCES auth.users(id),
  started_at TIMESTAMPTZ DEFAULT NOW(),
  completed_at TIMESTAMPTZ,
  expires_at TIMESTAMPTZ DEFAULT (NOW() + INTERVAL '7 days')
);

-- Import results (credentials to download)
CREATE TABLE IF NOT EXISTS public.import_results (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  job_id UUID NOT NULL REFERENCES public.bulk_import_jobs(id) ON DELETE CASCADE,
  user_id UUID REFERENCES auth.users(id),
  email TEXT NOT NULL,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  role TEXT NOT NULL,
  year_group TEXT,
  class_name TEXT,
  temporary_password TEXT NOT NULL,
  status TEXT DEFAULT 'created' CHECK (status IN ('created', 'failed', 'duplicate')),
  error_message TEXT
);

-- School students table (link students to schools)
CREATE TABLE IF NOT EXISTS public.school_students (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  school_id UUID NOT NULL REFERENCES public.schools(id) ON DELETE CASCADE,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  year_group TEXT,
  class_name TEXT,
  status TEXT DEFAULT 'active' CHECK (status IN ('active', 'suspended', 'removed')),
  joined_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(school_id, user_id)
);

-- Add founder access columns to schools if not exists
ALTER TABLE public.schools
  ADD COLUMN IF NOT EXISTS access_type TEXT DEFAULT 'trial' CHECK (access_type IN ('trial', 'founder', 'paid', 'expired')),
  ADD COLUMN IF NOT EXISTS access_until DATE,
  ADD COLUMN IF NOT EXISTS promo_code_used TEXT;

-- RLS policies
ALTER TABLE public.promo_codes ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.school_access_periods ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.bulk_import_jobs ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.import_results ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.school_students ENABLE ROW LEVEL SECURITY;

-- School admins can view their school's data
CREATE POLICY "school_admins_view_import_jobs" ON public.bulk_import_jobs
  FOR ALL USING (
    school_id IN (
      SELECT school_id FROM public.school_members
      WHERE user_id = auth.uid() AND role = 'admin'
    )
  );

CREATE POLICY "school_admins_view_import_results" ON public.import_results
  FOR ALL USING (
    job_id IN (
      SELECT id FROM public.bulk_import_jobs
      WHERE school_id IN (
        SELECT school_id FROM public.school_members
        WHERE user_id = auth.uid() AND role = 'admin'
      )
    )
  );

CREATE POLICY "school_admins_view_students" ON public.school_students
  FOR ALL USING (
    school_id IN (
      SELECT school_id FROM public.school_members
      WHERE user_id = auth.uid() AND role IN ('admin', 'head_of_department')
    )
  );

-- Students can view their own record
CREATE POLICY "students_view_own" ON public.school_students
  FOR SELECT USING (user_id = auth.uid());

-- Promo codes: public read for validation
CREATE POLICY "promo_codes_public_read" ON public.promo_codes
  FOR SELECT USING (is_active = TRUE);

-- Indexes for performance
CREATE INDEX IF NOT EXISTS idx_bulk_import_jobs_school ON public.bulk_import_jobs(school_id);
CREATE INDEX IF NOT EXISTS idx_import_results_job ON public.import_results(job_id);
CREATE INDEX IF NOT EXISTS idx_school_students_school ON public.school_students(school_id);
CREATE INDEX IF NOT EXISTS idx_school_students_user ON public.school_students(user_id);
CREATE INDEX IF NOT EXISTS idx_school_access_periods_school ON public.school_access_periods(school_id);
