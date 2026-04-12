-- Student progress tracking tables
CREATE TABLE IF NOT EXISTS student_progress (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  progress_type TEXT NOT NULL CHECK (progress_type IN ('poem_studied', 'game_played', 'quiz_completed', 'text_studied', 'reading_assessment', 'essay_marked', 'flashcard_session')),
  slug TEXT, -- poem/text/game slug
  score INTEGER,
  max_score INTEGER,
  grade TEXT, -- GCSE grade equivalent
  duration_seconds INTEGER,
  metadata JSONB DEFAULT '{}',
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX idx_progress_user ON student_progress(user_id);
CREATE INDEX idx_progress_type ON student_progress(progress_type);
CREATE INDEX idx_progress_created ON student_progress(created_at DESC);

-- RLS
ALTER TABLE student_progress ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users can read own progress" ON student_progress FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can insert own progress" ON student_progress FOR INSERT WITH CHECK (auth.uid() = user_id);
