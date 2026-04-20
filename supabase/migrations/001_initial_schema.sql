-- Users table (extends Supabase auth.users)
CREATE TABLE IF NOT EXISTS public.profiles (
  id UUID REFERENCES auth.users(id) ON DELETE CASCADE PRIMARY KEY,
  email TEXT NOT NULL,
  full_name TEXT,
  year_group TEXT CHECK (year_group IN ('Year 7','Year 8','Year 9','Year 10','Year 11','Year 12','Adult')),
  exam_board TEXT CHECK (exam_board IN ('AQA','Edexcel','OCR','WJEC','Other')),
  subscription_status TEXT DEFAULT 'free' CHECK (subscription_status IN ('free','pro','cancelled','past_due','unpaid','incomplete','paused')),
  subscription_end_date TIMESTAMPTZ,
  stripe_customer_id TEXT UNIQUE,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS public.courses (
  id TEXT PRIMARY KEY,
  title TEXT NOT NULL,
  subtitle TEXT,
  description TEXT,
  level TEXT CHECK (level IN ('KS3','GCSE','A-Level')),
  category TEXT,
  price_gbp INTEGER,
  stripe_price_id TEXT,
  is_subscription_only BOOLEAN DEFAULT FALSE,
  thumbnail_url TEXT,
  module_count INTEGER DEFAULT 0,
  duration_hours NUMERIC(4,1),
  published BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS public.modules (
  id TEXT PRIMARY KEY,
  course_id TEXT REFERENCES public.courses(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  description TEXT,
  content_html TEXT,
  order_index INTEGER NOT NULL,
  duration_mins INTEGER,
  is_preview BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS public.quiz_questions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  module_id TEXT REFERENCES public.modules(id) ON DELETE CASCADE,
  course_id TEXT REFERENCES public.courses(id),
  question TEXT NOT NULL,
  options JSONB NOT NULL,
  correct_option TEXT NOT NULL,
  explanation TEXT,
  question_type TEXT DEFAULT 'multiple_choice',
  difficulty INTEGER DEFAULT 2 CHECK (difficulty BETWEEN 1 AND 5),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS public.enrolments (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
  course_id TEXT REFERENCES public.courses(id),
  enrolled_at TIMESTAMPTZ DEFAULT NOW(),
  payment_type TEXT CHECK (payment_type IN ('free','one_time','subscription')),
  stripe_payment_intent_id TEXT,
  UNIQUE(user_id, course_id)
);

CREATE TABLE IF NOT EXISTS public.module_progress (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
  course_id TEXT REFERENCES public.courses(id),
  module_id TEXT REFERENCES public.modules(id),
  completed BOOLEAN DEFAULT FALSE,
  quiz_score INTEGER,
  quiz_attempts INTEGER DEFAULT 0,
  time_spent_seconds INTEGER DEFAULT 0,
  completed_at TIMESTAMPTZ,
  UNIQUE(user_id, module_id)
);

CREATE TABLE IF NOT EXISTS public.assessment_attempts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
  course_id TEXT REFERENCES public.courses(id),
  score INTEGER NOT NULL,
  passed BOOLEAN NOT NULL,
  questions_answered JSONB,
  time_taken_seconds INTEGER,
  attempted_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS public.certificates (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
  course_id TEXT REFERENCES public.courses(id),
  assessment_attempt_id UUID REFERENCES public.assessment_attempts(id),
  score INTEGER NOT NULL,
  grade TEXT CHECK (grade IN ('Pass','Merit','Distinction')),
  issued_at TIMESTAMPTZ DEFAULT NOW(),
  verification_url TEXT GENERATED ALWAYS AS ('https://theenglishhub.app/verify/' || id::TEXT) STORED
);

CREATE TABLE IF NOT EXISTS public.practice_sessions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
  exam_board TEXT,
  paper TEXT,
  question_type TEXT,
  question_data JSONB,
  user_answer TEXT,
  self_rating INTEGER CHECK (self_rating BETWEEN 1 AND 5),
  time_spent_seconds INTEGER,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- RLS
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.enrolments ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.module_progress ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.assessment_attempts ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.certificates ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.practice_sessions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.courses ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.modules ENABLE ROW LEVEL SECURITY;

-- Policies
-- NOTE: The original policies on profiles, enrolments, module_progress,
-- assessment_attempts, certificates, courses, modules (preview), and
-- practice_sessions were renamed on prod (e.g. "Users can view own profile"
-- -> "Users view own profile"). The live-name versions are tracked under
-- supabase/migrations/20260420_track_untracked_*.sql. The permissive
-- "Public can verify certificates" policy was intentionally dropped
-- (see 20260420_drop_permissive_certificate_policy.sql +
-- 20260420_drop_untracked_public_verify_certs.sql); certificate verification
-- now goes through the verify_certificate SECURITY DEFINER RPC.
-- Enrolment inserts are handled by the Stripe webhook using the service role client.
-- Certificate inserts are handled server-side using the service role client.
CREATE POLICY "Enrolled users view modules" ON public.modules FOR SELECT USING (
  EXISTS (SELECT 1 FROM public.enrolments WHERE user_id = auth.uid() AND course_id = modules.course_id)
);

-- Trigger: auto-create profile on signup
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (id, email, full_name)
  VALUES (NEW.id, NEW.email, NEW.raw_user_meta_data->>'full_name');
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- Updated_at trigger
CREATE OR REPLACE FUNCTION public.update_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER profiles_updated_at
  BEFORE UPDATE ON public.profiles
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at();

-- Add unique constraint for certificate deduplication
ALTER TABLE public.certificates ADD CONSTRAINT unique_user_course_cert UNIQUE (user_id, course_id);

-- Performance indexes
CREATE INDEX IF NOT EXISTS idx_module_progress_user_course ON public.module_progress(user_id, course_id);
CREATE INDEX IF NOT EXISTS idx_module_progress_user_completed ON public.module_progress(user_id, completed, completed_at);
CREATE INDEX IF NOT EXISTS idx_enrolments_user_course ON public.enrolments(user_id, course_id);
CREATE INDEX IF NOT EXISTS idx_assessment_attempts_user_course ON public.assessment_attempts(user_id, course_id);
CREATE INDEX IF NOT EXISTS idx_practice_sessions_user ON public.practice_sessions(user_id);
CREATE INDEX IF NOT EXISTS idx_modules_course ON public.modules(course_id);
CREATE INDEX IF NOT EXISTS idx_certificates_user_course ON public.certificates(user_id, course_id);
