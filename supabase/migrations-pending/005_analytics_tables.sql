-- Aggregate analytics (computed daily by cron)
CREATE TABLE IF NOT EXISTS analytics_daily (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  metric_date DATE NOT NULL,
  metric_type TEXT NOT NULL,
  metric_key TEXT, -- e.g., poem slug, question ID, board ID
  metric_value NUMERIC NOT NULL DEFAULT 0,
  sample_size INTEGER NOT NULL DEFAULT 0,
  metadata JSONB DEFAULT '{}',
  created_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(metric_date, metric_type, metric_key)
);

-- Email preferences
CREATE TABLE IF NOT EXISTS email_preferences (
  user_id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  weekly_summary BOOLEAN DEFAULT true,
  parent_reports BOOLEAN DEFAULT true,
  product_updates BOOLEAN DEFAULT false,
  unsubscribed_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- RLS
ALTER TABLE analytics_daily ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Analytics readable by all" ON analytics_daily FOR SELECT USING (true);
CREATE POLICY "Analytics writable by service role" ON analytics_daily FOR INSERT USING (auth.role() = 'service_role');

ALTER TABLE email_preferences ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users manage own email prefs" ON email_preferences FOR ALL USING (auth.uid() = user_id);
