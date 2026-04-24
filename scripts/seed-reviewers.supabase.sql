-- ─────────────────────────────────────────────────────────────────────────────
-- seed-reviewers.sql
-- Provision App Store / Play Store reviewer demo accounts with realistic data.
--
-- Preconditions (hard):
--   1. Both reviewer accounts already exist in the "User" table, created via
--      the normal web sign-up flow (so passwordHash and Supabase auth rows
--      are set properly).  This script never writes passwords.
--   2. Both accounts are STUDENT role. This script never grants ADMIN.
--
-- Operations (per reviewer, idempotent via ON CONFLICT DO UPDATE):
--   a. Look up the User.id via email.
--   b. Upsert a Subscription row — ACTIVE, ANNUAL, platform IOS / ANDROID.
--   c. Upsert two Essay rows (AQA Language Paper 1 + Edexcel Literature Paper 2).
--   d. Upsert AIFeedback per essay with realistic AO1..AO5 scores.
--   e. Upsert PrivacySettings — adult defaults, profile PRIVATE.
--   f. Upsert Consent rows — ToS + Privacy granted at current version.
--
-- Safety: wrapped in a single transaction. Partial failure rolls back.
-- Re-run: safe. Every write uses ON CONFLICT DO UPDATE or a delete-then-insert
-- pattern keyed on a stable synthetic id.
--
-- Rollback: see scripts/seed-reviewers-rollback.sql (snippet in the runbook).
-- ─────────────────────────────────────────────────────────────────────────────

BEGIN;

-- Sanity — ensure both users exist before we do anything.
DO $$
DECLARE
  missing text;
BEGIN
  SELECT string_agg(e, ', ')
    INTO missing
    FROM (VALUES
      ('reviewer+apple@theenglishhub.app'),
      ('reviewer+google@theenglishhub.app')
    ) AS v(e)
   WHERE NOT EXISTS (SELECT 1 FROM "User" u WHERE u.email = v.e);

  IF missing IS NOT NULL THEN
    RAISE EXCEPTION
      'Reviewer account(s) not found: %. Sign them up via the web first.',
      missing;
  END IF;
END
$$;

-- ── Subscriptions ───────────────────────────────────────────────────────────
-- ANNUAL, ACTIVE, 24h ago → +365d. Stable synthetic id so re-runs upsert.
INSERT INTO "Subscription" (
  id, "userId", plan, status,
  "currentPeriodStart", "currentPeriodEnd",
  "paymentCount", "isTeacherPlan",
  platform, original_purchase_date,
  revenuecat_app_user_id, revenuecat_product_id
)
SELECT
  'sub_reviewer_' || u.id,
  u.id,
  'ANNUAL'::"SubscriptionPlan",
  'ACTIVE'::"SubscriptionStatus",
  NOW() - INTERVAL '24 hours',
  NOW() + INTERVAL '365 days',
  1,
  FALSE,
  'IOS'::"SubscriptionPlatform",
  NOW() - INTERVAL '24 hours',
  u.id,
  'com.upskillenergy.theenglishhub.student.annual'
FROM "User" u
WHERE u.email = 'reviewer+apple@theenglishhub.app'
ON CONFLICT ("userId") DO UPDATE SET
  plan                   = EXCLUDED.plan,
  status                 = EXCLUDED.status,
  "currentPeriodStart"   = EXCLUDED."currentPeriodStart",
  "currentPeriodEnd"     = EXCLUDED."currentPeriodEnd",
  platform               = EXCLUDED.platform,
  original_purchase_date = EXCLUDED.original_purchase_date,
  revenuecat_app_user_id = EXCLUDED.revenuecat_app_user_id,
  revenuecat_product_id  = EXCLUDED.revenuecat_product_id,
  cancelled_at           = NULL,
  refunded_at            = NULL;

INSERT INTO "Subscription" (
  id, "userId", plan, status,
  "currentPeriodStart", "currentPeriodEnd",
  "paymentCount", "isTeacherPlan",
  platform, original_purchase_date,
  revenuecat_app_user_id, revenuecat_product_id
)
SELECT
  'sub_reviewer_' || u.id,
  u.id,
  'ANNUAL'::"SubscriptionPlan",
  'ACTIVE'::"SubscriptionStatus",
  NOW() - INTERVAL '24 hours',
  NOW() + INTERVAL '365 days',
  1,
  FALSE,
  'ANDROID'::"SubscriptionPlatform",
  NOW() - INTERVAL '24 hours',
  u.id,
  'com.upskillenergy.theenglishhub.student.annual'
FROM "User" u
WHERE u.email = 'reviewer+google@theenglishhub.app'
ON CONFLICT ("userId") DO UPDATE SET
  plan                   = EXCLUDED.plan,
  status                 = EXCLUDED.status,
  "currentPeriodStart"   = EXCLUDED."currentPeriodStart",
  "currentPeriodEnd"     = EXCLUDED."currentPeriodEnd",
  platform               = EXCLUDED.platform,
  original_purchase_date = EXCLUDED.original_purchase_date,
  revenuecat_app_user_id = EXCLUDED.revenuecat_app_user_id,
  revenuecat_product_id  = EXCLUDED.revenuecat_product_id,
  cancelled_at           = NULL,
  refunded_at            = NULL;

-- ── Privacy settings (adult reviewer defaults) ─────────────────────────────
INSERT INTO "PrivacySettings" (
  id, "userId",
  "analyticsEnabled", "marketingEnabled",
  "aiTrainingOptIn", "aiOptOut",
  "schoolSharingEnabled", "researchDataEnabled",
  "profileVisibility"
)
SELECT
  'prv_reviewer_' || u.id, u.id,
  FALSE, FALSE,
  FALSE, FALSE,
  FALSE, FALSE,
  'PRIVATE'::"ProfileVisibility"
FROM "User" u
WHERE u.email IN (
  'reviewer+apple@theenglishhub.app',
  'reviewer+google@theenglishhub.app'
)
ON CONFLICT ("userId") DO UPDATE SET
  "analyticsEnabled"     = EXCLUDED."analyticsEnabled",
  "marketingEnabled"     = EXCLUDED."marketingEnabled",
  "aiTrainingOptIn"      = EXCLUDED."aiTrainingOptIn",
  "aiOptOut"             = EXCLUDED."aiOptOut",
  "schoolSharingEnabled" = EXCLUDED."schoolSharingEnabled",
  "researchDataEnabled"  = EXCLUDED."researchDataEnabled",
  "profileVisibility"    = EXCLUDED."profileVisibility";

-- ── Consent (ToS + Privacy @ version 1.0) ──────────────────────────────────
-- Keyed by stable synthetic id so re-runs upsert cleanly.
INSERT INTO "Consent" (
  id, "userId", "consentType", version, granted, method, "ipAddress"
)
SELECT
  'cns_reviewer_' || u.id || '_TERMS',
  u.id, 'TERMS'::"ConsentType", '1.0', TRUE,
  'ACTIVE_CHECKBOX'::"ConsentMethod", '127.0.0.1'
FROM "User" u
WHERE u.email IN (
  'reviewer+apple@theenglishhub.app',
  'reviewer+google@theenglishhub.app'
)
ON CONFLICT (id) DO UPDATE SET
  granted     = TRUE,
  "grantedAt" = NOW(),
  "withdrawnAt" = NULL;

INSERT INTO "Consent" (
  id, "userId", "consentType", version, granted, method, "ipAddress"
)
SELECT
  'cns_reviewer_' || u.id || '_PRIVACY',
  u.id, 'PRIVACY'::"ConsentType", '1.0', TRUE,
  'ACTIVE_CHECKBOX'::"ConsentMethod", '127.0.0.1'
FROM "User" u
WHERE u.email IN (
  'reviewer+apple@theenglishhub.app',
  'reviewer+google@theenglishhub.app'
)
ON CONFLICT (id) DO UPDATE SET
  granted     = TRUE,
  "grantedAt" = NOW(),
  "withdrawnAt" = NULL;

-- ── Essays ──────────────────────────────────────────────────────────────────
-- Two per reviewer, both keyed by synthetic id for idempotency.
-- Essay 1: AQA Language Paper 1, Section B, 2019 specimen-style question.
-- Essay 2: Edexcel Literature Paper 2, 19th Century Novel (A Christmas Carol).

INSERT INTO "Essay" (id, "userId", title, content, subject, "examBoard")
SELECT
  'ess_reviewer_' || u.id || '_01',
  u.id,
  'AQA Language Paper 1 — Descriptive writing: the abandoned pier',
  E'The pier lay slumped against the tide like something the sea had tried to swallow and spat back out. Planks had gone soft at the edges, rotting into the salt, and the wrought-iron spine curved down towards the shingle in a slow, rusted grimace. Gulls wheeled above it, not hunting, just watching — the way an old dog watches a door it no longer expects to open.\n\nI walked the boardwalk in the last of the afternoon light. The wind came in thick bands off the water and every second one of them carried the smell of creosote and cold stone. Beneath my boots the wood gave a little, the sort of give you feel in a bridge that remembers being load-bearing. The slot machines at the far end still stood in their painted cabinets, their bulbs long since looted, their mirrored hoods catching the sun in flat, blind flashes.\n\nI stopped where the railings ended. Below, the sea moved like a great grey sheet being shaken out, and the shadow of the pier stretched across it, broken up by the missing slats into a bar code no one would scan. Somewhere further along a child was shouting at a kite; the wind took the sound and dropped it into the water before it reached me. This, I thought, was the proper kind of silence — not the absence of noise, but the noise of a place still finishing a conversation with the tide.\n\nI thought of my grandmother, who had once eaten chips here out of a paper cone, and who used to say that every seaside town is really a museum that charges on the way in and nothing on the way out. The pier was the exhibit and the empty promenade was the gift shop. I pushed my hands deeper into my pockets. The sun went behind a cloud and the whole structure, for a moment, looked less like a ruin and more like a question; one that the tide, endlessly patient, had been asking for a hundred years.',
  'LANGUAGE'::"Subject",
  'AQA'::"ExamBoard"
FROM "User" u
WHERE u.email IN (
  'reviewer+apple@theenglishhub.app',
  'reviewer+google@theenglishhub.app'
)
ON CONFLICT (id) DO UPDATE SET
  title   = EXCLUDED.title,
  content = EXCLUDED.content;

INSERT INTO "Essay" (id, "userId", title, content, subject, "examBoard")
SELECT
  'ess_reviewer_' || u.id || '_02',
  u.id,
  'Edexcel Literature Paper 2 — A Christmas Carol: how does Dickens present Scrooge''s transformation?',
  E'Dickens presents Scrooge''s transformation in A Christmas Carol as both spiritual reclamation and social correction — a man re-made not only for his own sake but for the sake of the poor whose suffering his greed had helped perpetuate. From the outset, Scrooge is drawn in a vocabulary of cold: he is "hard and sharp as flint", carrying "his own low temperature always about with him". The triadic list — "squeezing, wrenching, grasping, scraping, clutching, covetous" — refuses the reader any quarter: Dickens wants us in no doubt that Scrooge is the embodiment of 1840s laissez-faire capitalism as it appeared to the Victorian poor.\n\nThe arrival of Marley''s ghost, "captive, bound, and double-ironed", gives Scrooge''s transformation its moral engine. The chains forged "link by link, and yard by yard" literalise the Christian idea that actions in life become burdens in death, and Dickens pointedly sets this warning in a commercial idiom — chains of "cash-boxes, keys, padlocks, ledgers" — so that the reader cannot miss the connection between Scrooge''s ledger and Marley''s fate.\n\nThe transformation itself is staged across three stave-journeys. The Ghost of Christmas Past softens him through grief: the image of the "solitary child, neglected by his friends" reframes the miser as a victim of emotional poverty before he became an agent of economic poverty. The Ghost of Christmas Present widens the lens — Tiny Tim''s "active little crutch" and the allegorical children Ignorance and Want compel Scrooge, and the reader, to recognise systemic cruelty. The Ghost of Yet To Come is silent, and Dickens''s silence is deliberate: Scrooge must fill the vacuum himself, reading his own gravestone as a verdict he has earned.\n\nBy stave five Dickens rewards the changed Scrooge not with private peace but with public action — a prize turkey for the Cratchits, a raise for Bob, a pledge to honour Christmas "in my heart". The transformation is therefore theological and political at once: Dickens uses the novella form to stage a conversion, but one whose proof is distribution, not prayer. In a society which, as the narrator drily notes, had "decreased" its surplus population through the workhouse, Dickens insists on a redemption measured in coal, food, and wages.',
  'LITERATURE'::"Subject",
  'EDEXCEL'::"ExamBoard"
FROM "User" u
WHERE u.email IN (
  'reviewer+apple@theenglishhub.app',
  'reviewer+google@theenglishhub.app'
)
ON CONFLICT (id) DO UPDATE SET
  title   = EXCLUDED.title,
  content = EXCLUDED.content;

-- ── AIFeedback ──────────────────────────────────────────────────────────────
-- AO1..AO5 scores packed into the JSON `criteria` field. `feedbackText` carries
-- predictedGrade + strengths/improvements/nextSteps as structured text for UI
-- parity with production feedback payloads.

INSERT INTO "AIFeedback" (
  id, "essayId",
  "overallScore", "grammarScore", "structureScore", "argumentScore", "vocabularyScore",
  "feedbackText", criteria, limitations, "modelVersion"
)
SELECT
  'aif_reviewer_' || e.id,
  e.id,
  32.0, 6.5, 7.0, 7.0, 7.5,
  E'{"predictedGrade":"7","strengths":["Controlled, evocative imagery (\\"bar code no one would scan\\") sustains a clear narrative voice.","Varied sentence lengths create rhythm; short sentences land with weight after longer descriptive sweeps.","Ambitious vocabulary used with precision (\\"creosote\\", \\"grimace\\", \\"load-bearing\\")."],"improvements":["Push further with structural experimentation — consider a circular return to the opening image.","Some metaphors (\\"museum that charges on the way in\\") are strong but unexplored; extend them by one beat.","Dialogue or direct speech could widen tonal range in a piece otherwise dominated by narration."],"nextSteps":["Draft a 40-word opening that uses only sensory detail — no metaphor — and compare effect.","Practise AO6 technical accuracy on semi-colon use: aim for three correct uses in your next piece."]}',
  E'{"AO5":{"score":17,"max":24,"band":"Level 3 — Clear","note":"Clear, consistent tone; structural shifts could be more purposeful."},"AO6":{"score":15,"max":16,"band":"Level 4 — Convincing","note":"Accurate spelling and punctuation; ambitious vocabulary used mostly correctly."}}',
  E'AI feedback is indicative and aligned to published AO descriptors. A human examiner may weight structural choices differently. Request a human review if the AO5 score feels low relative to your target grade.',
  'claude-opus-4-5-v1'
FROM "Essay" e
JOIN "User" u ON u.id = e."userId"
WHERE e.id IN (
  'ess_reviewer_' || u.id || '_01'
)
  AND u.email IN (
    'reviewer+apple@theenglishhub.app',
    'reviewer+google@theenglishhub.app'
  )
ON CONFLICT ("essayId") DO UPDATE SET
  "overallScore"    = EXCLUDED."overallScore",
  "grammarScore"    = EXCLUDED."grammarScore",
  "structureScore"  = EXCLUDED."structureScore",
  "argumentScore"   = EXCLUDED."argumentScore",
  "vocabularyScore" = EXCLUDED."vocabularyScore",
  "feedbackText"    = EXCLUDED."feedbackText",
  criteria          = EXCLUDED.criteria,
  limitations       = EXCLUDED.limitations,
  "modelVersion"    = EXCLUDED."modelVersion";

INSERT INTO "AIFeedback" (
  id, "essayId",
  "overallScore", "grammarScore", "structureScore", "argumentScore", "vocabularyScore",
  "feedbackText", criteria, limitations, "modelVersion"
)
SELECT
  'aif_reviewer_' || e.id,
  e.id,
  34.0, 7.5, 7.5, 8.0, 7.5,
  E'{"predictedGrade":"8","strengths":["Confident integrated quotation; textual references chosen for analytical yield, not decoration.","Consistent conceptual argument — reads Dickens politically as well as morally.","Strong contextual interweaving (laissez-faire capitalism, workhouse, Malthus) tied to writer''s craft rather than bolted on."],"improvements":["Occasional sweeping generalisations could be narrowed to specific effects on specific readers.","AO2 could go deeper at word-level — e.g. unpack the verb \\"decreased\\" to expose Dickens''s irony.","Conclusion recapitulates argument; a final re-contextualisation would lift the grade further."],"nextSteps":["Re-read the Ignorance and Want passage and annotate five language features with precise effect.","Rewrite the final paragraph to end on a single-sentence critical claim."]}',
  E'{"AO1":{"score":10,"max":12,"band":"Level 5 — Convincing","note":"Informed personal response; well-chosen textual evidence."},"AO2":{"score":9,"max":12,"band":"Level 4 — Thoughtful","note":"Analyses language and structure; could go further at word-level."},"AO3":{"score":5,"max":6,"band":"Level 5","note":"Context integrated with interpretation, not listed."},"AO4":{"score":3,"max":4,"band":"Level 4","note":"Accurate, varied expression."}}',
  E'AI feedback is indicative and benchmarked against the Edexcel 1ET0 generic grid. Context-led marks (AO3) are notoriously variable between examiners — treat this as a guide, not a ceiling.',
  'claude-opus-4-5-v1'
FROM "Essay" e
JOIN "User" u ON u.id = e."userId"
WHERE e.id IN (
  'ess_reviewer_' || u.id || '_02'
)
  AND u.email IN (
    'reviewer+apple@theenglishhub.app',
    'reviewer+google@theenglishhub.app'
  )
ON CONFLICT ("essayId") DO UPDATE SET
  "overallScore"    = EXCLUDED."overallScore",
  "grammarScore"    = EXCLUDED."grammarScore",
  "structureScore"  = EXCLUDED."structureScore",
  "argumentScore"   = EXCLUDED."argumentScore",
  "vocabularyScore" = EXCLUDED."vocabularyScore",
  "feedbackText"    = EXCLUDED."feedbackText",
  criteria          = EXCLUDED.criteria,
  limitations       = EXCLUDED.limitations,
  "modelVersion"    = EXCLUDED."modelVersion";

COMMIT;

-- ── Verification ───────────────────────────────────────────────────────────

SELECT
  u.email,
  u.role,
  s.status        AS subscription_status,
  s.plan,
  s.platform,
  s."currentPeriodEnd"::date AS renews_on,
  (SELECT COUNT(*) FROM "Essay"      e WHERE e."userId" = u.id) AS essay_count,
  (SELECT COUNT(*) FROM "AIFeedback" a
     JOIN "Essay" e ON e.id = a."essayId"
    WHERE e."userId" = u.id) AS feedback_count,
  (SELECT COUNT(*) FROM "Consent"    c WHERE c."userId" = u.id) AS consent_count,
  (SELECT COUNT(*) FROM "PrivacySettings" p WHERE p."userId" = u.id) AS privacy_rows
FROM "User" u
LEFT JOIN "Subscription" s ON s."userId" = u.id
WHERE u.email IN (
  'reviewer+apple@theenglishhub.app',
  'reviewer+google@theenglishhub.app'
)
ORDER BY u.email;

