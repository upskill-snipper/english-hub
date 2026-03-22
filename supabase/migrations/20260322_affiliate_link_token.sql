-- Add column to store the Rewardful affiliate link token (used in ?via= URLs)
ALTER TABLE public.affiliates
  ADD COLUMN IF NOT EXISTS rewardful_link_token TEXT;
