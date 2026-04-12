-- Cache personalised recommendations (refreshed daily)
CREATE TABLE IF NOT EXISTS recommendation_cache (
  user_id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  recommendations JSONB NOT NULL DEFAULT '[]',
  generated_at TIMESTAMPTZ DEFAULT NOW(),
  expires_at TIMESTAMPTZ DEFAULT NOW() + INTERVAL '24 hours'
);

ALTER TABLE recommendation_cache ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users read own recs" ON recommendation_cache FOR SELECT USING (auth.uid() = user_id);
