-- Users table (extends Supabase auth.users)
CREATE TABLE IF NOT EXISTS public.profiles (
  id UUID REFERENCES auth.users(id) ON DELETE CASCADE PRIMARY KEY,
  email TEXT NOT NULL,
  full_name TEXT,
  year_group TEXT CHECK (year_group IN ('Year 7','Year 8','Year 9','Year 10','Year 11','Year 12','Adult')),
  exam_board TEXT CHECK (exam_board IN ('AQA','Edexcel','OCR','WJEC','Other')),
  subscription_status TEXT DEFAULT 'free' CHECK (subscription_status IN ('free','pro','cancelled')),
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
CREATE POLICY "Users can view own profile" ON public.profiles FOR SELECT USING (auth.uid() = id);
CREATE POLICY "Users can update own profile" ON public.profiles FOR UPDATE USING (auth.uid() = id);
CREATE POLICY "Users can insert own profile" ON public.profiles FOR INSERT WITH CHECK (auth.uid() = id);
CREATE POLICY "Users can view own enrolments" ON public.enrolments FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can insert own enrolments" ON public.enrolments FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can manage own progress" ON public.module_progress FOR ALL USING (auth.uid() = user_id);
CREATE POLICY "Users can manage own assessments" ON public.assessment_attempts FOR ALL USING (auth.uid() = user_id);
CREATE POLICY "Users can view own certificates" ON public.certificates FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can insert own certificates" ON public.certificates FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Public can verify certificates" ON public.certificates FOR SELECT USING (TRUE);
CREATE POLICY "Courses are public" ON public.courses FOR SELECT USING (published = TRUE);
CREATE POLICY "Modules preview public" ON public.modules FOR SELECT USING (is_preview = TRUE);
CREATE POLICY "Enrolled users view modules" ON public.modules FOR SELECT USING (
  EXISTS (SELECT 1 FROM public.enrolments WHERE user_id = auth.uid() AND course_id = modules.course_id)
);
CREATE POLICY "Users can manage own practice" ON public.practice_sessions FOR ALL USING (auth.uid() = user_id);

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
