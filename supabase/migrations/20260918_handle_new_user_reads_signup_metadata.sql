-- ─── handle_new_user(): write the whole profile from the signup metadata ────
--
-- THE DEFECT (18 September 2026, verified against production)
-- Both signup pages create the auth user, then upsert the profile from the
-- browser. That upsert has never been able to succeed:
--
--   1. With email confirmation on there is no session at that moment, so
--      auth.uid() is null and row-level security refuses the write.
--   2. Even with a session, public.profiles has SELECT and UPDATE policies for
--      the owner but no INSERT policy, and an upsert is INSERT ... ON CONFLICT,
--      so PostgREST refuses it for every authenticated user.
--   3. The student page also named ten columns that did not exist until
--      20260918_profiles_signup_privacy_columns.sql.
--
-- The pages log the failure as non-blocking and carry on. Result on 206 of
-- 206 accounts: role = 'student' (the column default, teachers included),
-- date_of_birth NULL, is_minor false, no exam board, year group, school or
-- guardian email, and no attribution although 11 auth users carry utm_source
-- in their metadata.
--
-- THE FIX
-- The one write that always runs with the right privileges is this trigger,
-- which fires inside the auth insert as SECURITY DEFINER. The pages now put
-- every profile field into signUp({ options: { data } }), which lands in
-- NEW.raw_user_meta_data, and this function copies it into the profile row
-- with per-field validation against the table's CHECK constraints. Children's
-- Code high-privacy defaults are computed here from the date of birth for
-- everyone under 18 (Standard 8 applies to the whole under-18 cohort, not just
-- under-16s), so a client cannot send adult defaults for a child.
--
-- A trigger failure would abort account creation, so every conversion sits in
-- its own sub-block and the whole insert has a fallback to the original
-- three-column row. Nothing here can stop a signup.
--
-- Same trigger (on_auth_user_created, AFTER INSERT ON auth.users), same
-- function name, so nothing else changes. Idempotent.
-- ────────────────────────────────────────────────────────────────────────────

CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  m            jsonb := COALESCE(NEW.raw_user_meta_data, '{}'::jsonb);
  v_full_name  text;
  v_role       text;
  v_year       text;
  v_board      text;
  v_school     text;
  v_guardian   text;
  v_country    text;
  v_dob        date;
  v_minor      boolean := false;
  v_qa_consent boolean;
  v_utm_source text;
  v_utm_medium text;
  v_utm_campaign text;
BEGIN
  v_full_name := LEFT(COALESCE(NULLIF(TRIM(m->>'full_name'), ''), NULLIF(TRIM(m->>'name'), ''), NEW.email), 200);

  -- Role: only the three self-service roles. 'admin' can never arrive by signup.
  v_role := COALESCE(m->>'role', m->>'account_type');
  IF v_role IS NULL OR v_role NOT IN ('student', 'teacher', 'parent') THEN
    v_role := 'student';
  END IF;

  -- Year group and exam board must satisfy the table's CHECK constraints.
  v_year := NULLIF(TRIM(m->>'year_group'), '');
  IF v_year IS NOT NULL AND v_year NOT IN ('Year 7', 'Year 8', 'Year 9', 'Year 10', 'Year 11', 'Year 12', 'Year 13', 'Adult', 'Other') THEN
    v_year := NULL;
  END IF;

  v_board := NULLIF(TRIM(m->>'exam_board'), '');
  IF v_board IS NOT NULL THEN
    IF v_board ILIKE 'eduqas%' OR v_board ILIKE 'wjec%' THEN
      v_board := 'WJEC';
    ELSIF v_board NOT IN ('AQA', 'Edexcel', 'OCR', 'WJEC', 'Other') THEN
      v_board := 'Other';
    END IF;
  END IF;

  v_school   := LEFT(NULLIF(TRIM(m->>'school_name'), ''), 200);
  v_guardian := LEFT(NULLIF(TRIM(m->>'parent_guardian_email'), ''), 320);
  IF v_guardian IS NOT NULL AND v_guardian !~ '^[^@\s]+@[^@\s]+\.[^@\s]+$' THEN
    v_guardian := NULL;
  END IF;

  v_country := UPPER(NULLIF(TRIM(m->>'country'), ''));
  IF v_country IS NOT NULL AND v_country !~ '^[A-Z]{2}$' THEN
    v_country := NULL;
  END IF;

  -- Date of birth: its own sub-block, because an impossible date raises on cast.
  BEGIN
    IF (m->>'date_of_birth') ~ '^\d{4}-\d{2}-\d{2}$' THEN
      v_dob := (m->>'date_of_birth')::date;
      IF v_dob < DATE '1900-01-01' OR v_dob > CURRENT_DATE THEN
        v_dob := NULL;
      END IF;
    END IF;
  EXCEPTION WHEN OTHERS THEN
    v_dob := NULL;
  END;

  -- Under 18 at signup. Computed here, never trusted from the client.
  v_minor := v_dob IS NOT NULL AND v_dob > (CURRENT_DATE - INTERVAL '18 years');

  -- Qatar cross-border consent is only meaningful when the country is QA.
  BEGIN
    IF v_country = 'QA' AND (m->>'data_transfer_consent_qa') IS NOT NULL THEN
      v_qa_consent := (m->>'data_transfer_consent_qa')::boolean;
    END IF;
  EXCEPTION WHEN OTHERS THEN
    v_qa_consent := NULL;
  END;

  v_utm_source   := LEFT(NULLIF(TRIM(m->>'utm_source'), ''), 200);
  v_utm_medium   := LEFT(NULLIF(TRIM(m->>'utm_medium'), ''), 200);
  v_utm_campaign := LEFT(NULLIF(TRIM(m->>'utm_campaign'), ''), 200);

  BEGIN
    INSERT INTO public.profiles (
      id, email, full_name, role, year_group, exam_board, school_name,
      date_of_birth, is_minor, parent_guardian_email,
      utm_source, utm_medium, utm_campaign,
      country, data_transfer_consent_qa, data_transfer_consent_qa_at,
      streaks_enabled, personalised_recommendations, streak_notifications,
      nudge_notifications, analytics_opt_in, marketing_opt_in, social_share_nudge
    ) VALUES (
      NEW.id, NEW.email, v_full_name, v_role, v_year, v_board, v_school,
      v_dob, v_minor, v_guardian,
      v_utm_source, v_utm_medium, v_utm_campaign,
      v_country, v_qa_consent, CASE WHEN v_qa_consent IS TRUE THEN NOW() ELSE NULL END,
      -- Children's Code Standards 6 and 8: high-privacy defaults for under-18s.
      NOT v_minor, NOT v_minor, NOT v_minor,
      NOT v_minor, FALSE, FALSE, FALSE
    )
    ON CONFLICT (id) DO NOTHING;
  EXCEPTION WHEN OTHERS THEN
    -- Never let a profile detail block account creation. Fall back to the
    -- original three-column row and leave a trace in the Postgres log.
    RAISE WARNING 'handle_new_user: full profile insert failed for %, falling back (%)', NEW.id, SQLERRM;
    INSERT INTO public.profiles (id, email, full_name)
    VALUES (NEW.id, NEW.email, v_full_name)
    ON CONFLICT (id) DO NOTHING;
  END;

  RETURN NEW;
END;
$$;

-- The trigger already exists in production as on_auth_user_created; recreate
-- it idempotently so a fresh database gets the same wiring.
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();
