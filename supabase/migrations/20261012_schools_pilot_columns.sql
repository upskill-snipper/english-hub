-- ─── schools: the columns provisioning writes, and the school's AI authorisation ──
--
-- CONTEXT (12 October 2026)
--
-- THIS FILE CHANGES THE PRODUCTION DATABASE and needs Calum's approval before
-- it is pushed. It only adds nullable columns; it touches no row and no
-- access rule.
--
-- 1. PROVISIONING COULD NOT CREATE A SCHOOL. /api/school/register inserts
--    exam_board and curriculum (the provisioning page requires both), but no
--    migration ever created them and production's schools table has neither
--    (information_schema, 12 October). PostgREST rejects the whole insert when
--    one column is unknown, so every attempt to create a school would have
--    failed. Production held no schools, which is why nobody saw it.
--
-- 2. THE SETTINGS PAGE COULD NOT LOAD. /api/school/settings selects and
--    saves website and timezone, which no migration created either.
--
-- 3. THE SCHOOL'S AI AUTHORISATION. Calum decided on 12 October 2026 that a
--    school's pupils get permission for AI marking from the school, as data
--    controller, recorded once per school, instead of an email to each parent.
--    ai_authorised_at records when the school confirmed in writing that its
--    privacy notice covers AI marking and that parents have been told;
--    ai_authorised_by records who entered it. NULL means not authorised, and
--    the consent gate then falls back to its existing per-pupil rules.

ALTER TABLE public.schools ADD COLUMN IF NOT EXISTS exam_board text;
ALTER TABLE public.schools ADD COLUMN IF NOT EXISTS curriculum text[];
ALTER TABLE public.schools ADD COLUMN IF NOT EXISTS website text;
ALTER TABLE public.schools ADD COLUMN IF NOT EXISTS timezone text;
ALTER TABLE public.schools ADD COLUMN IF NOT EXISTS ai_authorised_at timestamptz;
ALTER TABLE public.schools ADD COLUMN IF NOT EXISTS ai_authorised_by uuid
  REFERENCES auth.users (id) ON DELETE SET NULL;

COMMENT ON COLUMN public.schools.ai_authorised_at IS
  'When the school, as data controller, confirmed in writing that its privacy notice covers AI marking and parents have been told. NULL = not authorised.';
COMMENT ON COLUMN public.schools.ai_authorised_by IS
  'auth.users id of the person who recorded the school''s AI authorisation.';
