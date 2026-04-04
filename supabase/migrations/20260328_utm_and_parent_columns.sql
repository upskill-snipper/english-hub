-- Add UTM tracking columns to profiles
DO $$ BEGIN
  ALTER TABLE profiles ADD COLUMN IF NOT EXISTS utm_source TEXT;
  ALTER TABLE profiles ADD COLUMN IF NOT EXISTS utm_medium TEXT;
  ALTER TABLE profiles ADD COLUMN IF NOT EXISTS utm_campaign TEXT;
  ALTER TABLE profiles ADD COLUMN IF NOT EXISTS parent_guardian_email TEXT;
EXCEPTION WHEN others THEN NULL;
END $$;
