# 19 — Design: Data Protection Scaffolding for the Marking Path (§5)

> Status: design (markdown only — no code changes in this phase).
> Scope: the data-protection layer of the grounded Marking Engine, focused on the IELTS Writing Task 2 MVP marking path but written so the same scaffolding serves the existing GCSE/IGCSE and EAL marking paths.
> Source of truth: `00-architecture-source.md` §5 ("Private by design"), `01-ielts-writing-task2-spec.md` §5 (data-protection operational detail and the "we don't train on your work" UI-claim build-note).
> Sibling compliance artefacts this doc cross-references (and partly corrects): `business-docs/compliance/childrens-code/03-dpias/dpia-ai-features-v1.md` (DPIA), `src/config/subprocessors.ts` (subprocessor register), `business-docs/compliance/eu-ai-act/17-anthropic-dpa-zdr-pack.md` (DPA/ZDR pack), `human-action-checklist.md` item 4.

---

## 0. The one rule that governs this whole document

Every data-protection claim in the product UI, the DPIA, the subprocessor register, and the marketing copy MUST match the **real, partly-pending** posture that is encoded in code as the single source of truth: `ANTHROPIC_DATA_POLICY` and `isZeroRetentionConfigured()` in `src/lib/anthropic-client.ts`.

The posture is deliberately split three ways and must never be collapsed:

| Tier | What it means | Where it is proven | May be claimed in UI? |
|------|---------------|--------------------|------------------------|
| **ENFORCED IN CODE** | A guarantee the codebase mechanically makes on every call | `prompt-builder.ts`, `mark/route.ts`, `ai-audit-log.ts`, `ai-preferences.ts` | YES — present tense |
| **CONTRACTUAL** | A guarantee that exists in the Anthropic Commercial Terms + DPA, NOT as any request flag/header | `ANTHROPIC_DATA_POLICY.contractual.*` | YES — but worded as "under our agreement with our AI provider", NOT "the system is configured to…" |
| **PENDING (counsel residual)** | A guarantee whose written confirmation is not yet in hand; flags hard-coded `false` | `dpaCountersigned=false`, `writtenZdrConfirmation=false`, `writtenNoTrainingConfirmation=false` → `isZeroRetentionConfigured()===false` | NO — must NOT be claimed until the flag flips |

This document's deliverable is **scaffolding that makes the wrong claim structurally impossible**: a single typed posture object that both the model call and the UI read from, so privacy copy cannot drift ahead of the legal/technical reality.

---

## 1. Current state in THIS codebase (verified)

### 1.1 Data minimisation before the model call — STRONG, but implicit
`src/lib/marking/prompt-builder.ts` exposes `buildMarkingPrompt(input)` where `PromptInput = { scheme, questionId, questionText, essay, studiedText? }`. The user message (`buildUserMessage`) contains **only** question text (sliced to 2000 chars) + student essay (sliced to 30000 chars). The system prompt is examiner persona + mark-scheme AO/band descriptors + board/subject/paper/title + optional `studiedText`.

Crucially, **the `PromptInput` type has no field that can carry `name`, `email`, `DOB`, `school`, `class`, or `userId`** — so PII structurally cannot reach the model through this path. Confirmed at the call site `src/app/api/mark/route.ts`: `messages.create()` sends only `system` + the user message; `userId` is used for auth / rate-limit / audit only, never in the prompt body. (The same holds for `/api/marking/run`, and the existing IELTS routes `src/app/api/ielts/writing-feedback/route.ts` and `speaking-feedback/route.ts`.)

This matches `subprocessors.ts` `AI_SUBPROCESSOR.dataCategories` ("learner essay/response free text", "question text", "exam board + year", "NO name, email, date of birth or school is sent") and DPIA §2.

GAP vs target: the minimisation is **enforced by the accident of the type shape**, not by an explicit allow-list with a test. There is no `assertNoIdentifiersInPayload()` guard, no shared allow-list constant, and **no test asserting the outbound Anthropic request body carries no surrounding identifiers**. When the IELTS engine adds a Router, retrieval context, exemplars, and integrity flags, new fields will be assembled into the prompt and the implicit guarantee can silently regress.

### 1.2 No-train posture — CONTRACTUAL, correctly NOT faked in code
`src/lib/anthropic-client.ts` is the canonical statement. The header documents that `@anthropic-ai/sdk@0.90.0` `ClientOptions` exposes **no** retention / no-training / privacy / ZDR option, and per-message `Metadata` exposes only `user_id`. So:
- `ANTHROPIC_DATA_POLICY.contractual.noModelTrainingByDefault = true`
- `ANTHROPIC_DATA_POLICY.contractual.zeroDataRetentionAvailableContractually = true`
- `processingRegion = 'US'`, `transferMechanism = 'Anthropic DPA + SCCs'`
- `enforcedInCode`: prompt-level minimisation, no training-programme enrolment, centralised client + bounded timeout (`ANTHROPIC_CLIENT_TIMEOUT_MS = 50000`), audit logging of hash+length only.
- `pending`: `dpaCountersigned=false`, `writtenZdrConfirmation=false`, `writtenNoTrainingConfirmation=false` → `isZeroRetentionConfigured()` returns `false` today.

Every marking call routes through `getAnthropicClient()` on the standard commercial Messages API; **no training opt-in flag is sent** (the SDK has none to send). This is correct and honest.

GAP vs target: there is **no UI-layer binding** that forces displayed privacy copy to read from these flags. Nothing structurally prevents a marking-UI component from rendering "we never train on your work / your essays are deleted immediately" while `isZeroRetentionConfigured()` is `false`.

### 1.3 Anonymisation for analytics — partial, lives outside the marking path
- Audit log (`src/lib/ai-audit-log.ts`) stores by default only `inputSha256` + `inputLength` (raw retention gated behind hard opt-in env `AI_AUDIT_STORE_RAW_INPUT`, default OFF), plus `isMinor` + `consentSnapshot`. Good.
- The training corpus is de-identified at the training stage only: `src/lib/training/anonymise.ts` (`anonymiseRecord`, `FORBIDDEN_EXPORT_KEYS`) and `prepare.ts` (8 ordered consent gates) — thoroughly tested (`src/__tests__/smart-ip/anonymise.test.ts`).
- `redactPII` exists for the analytics/`gtag` boundary (`gtag-pii.test.ts`).

GAP vs target (§5 "Anonymize for analytics"): the §4 learner-model / cohort analytics that the engine will feed (per-criterion mastery over time, error-taxonomy aggregation) have **no demonstrated de-identification contract** on the marking path itself. EAL `cefr-aggregate.ts` aggregates placement %s with PII redaction, but the new error-taxonomy aggregation has no equivalent yet.

### 1.4 Retention + deletion — divergent across the two marking paths
- `POST /api/mark` (B2C synchronous) returns the result **without persisting the essay** (README `[PHASE:db-integration]` TODO still open).
- `POST /api/marking/run` (spine) **does** persist via `persistence.ts` into `marking_submissions.essay_text` (+ AI result fields) in Supabase (`subprocessors.ts`: "essay submissions (at rest)", EU/UK, `dpaStatus='pending'`).
- Deletion/retention handled by `privacy/delete-essay`, `account/delete`, `cron/data-retention` routes — **not** by the marking modules, and not verified to actually purge `marking_submissions.essay_text`.

GAP vs target: two divergent persistence behaviours on one marking path; the IELTS engine must pick one spine and ensure retention + deletion cover it. Supabase DPA is `pending`.

### 1.5 Children's-Code alignment — strong gating, present
`mark/route.ts` runs, before the model call: auth → active subscription → `checkMinorAIConsent()` (parental consent for minors) → `isAiOptedOutServer()` (DB-authoritative AI opt-out, Children's-Code GAP-12B; reads `PrivacySettings.aiOptOut` server-side so a client localStorage flag cannot bypass) → rate limit (10/day) → `contentSafetyCheck()`. The audit log records `isMinor` + `consentSnapshot`. Parent portal, DSAR, data-retention crons, parent-report eligibility gates all exist.

GAP vs target: the gating is implemented per-route. The new IELTS marking entrypoint must re-use the **same** ordered gate chain rather than re-implement it, and the IELTS feedback policy must respect the Children's-Code "no model-answer rewrites for minors" choice already baked into GCSE/EAL (the adult-IELTS rewrite policy from spec §3 must be age-gated, not applied uniformly).

### 1.6 The critical DPIA-vs-code mismatch (load-bearing)
The DPIA v1.0 (FINAL) asserts ZDR as an **active, present-tense** control: §2 "Zero-retention configuration with Anthropic API", §4 R3/R6 "Anthropic zero-retention endpoint + no-training contractual term", and §5 rates R6 (children's essays in training data) **Low** *because* "Contractual + ZDR endpoints are the standard remedy".

The code is explicit that **there is no ZDR endpoint in this SDK** and the written ZDR/DPA/no-training confirmations are **not in hand** (all three flags `false`; `isZeroRetentionConfigured()===false`). So the DPIA **overstates** the current technical posture. Any UI mirroring the DPIA's wording would overstate the same way. The spec §5 build-note explicitly warns the "we don't train on your work" marking-UI claim must match the real (contractual + pending) posture.

---

## 2. Target state (what §5 requires)

A grounded Marking Engine where data protection is **structural, single-sourced, and provably honest**:

1. **Explicit data-minimisation allow-list before the model call.** A single exported allow-list of fields permitted in any outbound marking payload, enforced by a guard function on the assembled request, with a test that fails if any identifier appears. The essay text itself is sent verbatim (it is the markable signal — this is deliberate and must NOT be redacted); minimisation means "no surrounding identifiers", not "redact the essay".
2. **No-train posture wired to the real policy.** A single typed posture object (`ANTHROPIC_DATA_POLICY` + a derived `describeDataPosture()`) is the only source any UI, DPIA generator, or subprocessor page reads from. UI privacy claims render from it; pending guarantees cannot be shown.
3. **Anonymisation for analytics.** The §4 learner-model / error-taxonomy aggregation consumes a de-identified projection of the validated mark (no `essay_text`, no identifiers, hashed learner id), with a forbidden-key guard reused from the training anonymiser.
4. **Retention + deletion that actually covers the marking spine.** One persistence spine for the engine; documented retention windows per data class; deletion routes verified to purge `marking_submissions.essay_text` (and any new IELTS result rows) and the AI audit rows; ZDR-pending tracked.
5. **Children's-Code alignment.** Re-used ordered gate chain; minor-aware feedback policy; minimisation + opt-out honoured on every engine entrypoint; data-protection-by-default for under-18s.
6. **Reconciled DPIA + subprocessor register** so neither overstates the technical posture, and both are (or can be) generated from the typed posture object.

---

## 3. The gap (one paragraph)

The codebase already does the *hard* parts well — minimisation by type shape, honest contractual/pending flags, hash-only audit, a strong Children's-Code gate chain — but the guarantees are **implicit and unbound**: minimisation rests on a type shape with no allow-list and no test; the honest no-train flags are not wired to the UI so copy can drift ahead of reality; the DPIA already overstates ZDR as active; analytics de-identification exists only at the training boundary, not on the new analytics projection; and retention/deletion diverges across the two marking paths with Supabase + Anthropic DPAs both pending. The IELTS engine will add a Router, retrieval, exemplars, integrity flags, a second feedback call, and a learner-model store — each a new surface where an identifier could leak or a claim could overstate. The work is to convert the implicit guarantees into **explicit, tested, single-sourced scaffolding** before those surfaces are built.

---

## 4. Build steps (ordered)

Each step names the files it touches and its acceptance/verification criteria. Steps 1–4 are pure scaffolding with no behaviour change to the existing marking output; they should land before the IELTS marker call is wired so the engine is born compliant.

### Step 1 — Explicit outbound data-minimisation allow-list + guard
**Touches (new):** `src/lib/marking/data-protection/outbound-allowlist.ts`, `src/lib/marking/data-protection/assert-minimised.ts`
**Touches (test, new):** `src/__tests__/marking/outbound-minimisation.test.ts`
- Export `OUTBOUND_MARKING_FIELDS` — the exact allow-list of fields permitted in any marking model payload: `{ system: ['examinerPersona','rubricDescriptors','bandDescriptors','exemplars','marking conventions','board','subject','qualification','questionType','studiedText'], user: ['questionText','studentEssay'] }`. Export `FORBIDDEN_OUTBOUND_KEYS` (name, email, DOB, school, schoolId, classId, userId, studentId, ip, postcode, etc.) re-using the training anonymiser's `FORBIDDEN_EXPORT_KEYS` as the seed so the two lists cannot diverge.
- Export `assertMinimisedPayload({ system, messages })`: deep-scans the assembled request for any forbidden key or any obvious PII pattern (email regex) and throws `OutboundPiiError` if found. Pure, no network.
**Acceptance:** unit test asserts (a) a clean GCSE payload passes; (b) a payload with `studentId`/`email`/a name field anywhere throws; (c) the essay text containing an email-looking string does NOT throw (essay is verbatim signal — must not be flagged); (d) `FORBIDDEN_OUTBOUND_KEYS ⊇ FORBIDDEN_EXPORT_KEYS`. `npm test` green.
**Depends on:** none.

### Step 2 — Single typed data-posture object + UI/DPIA/register binding
**Touches:** `src/lib/anthropic-client.ts` (add `describeDataPosture()` deriving a UI-safe, claim-classified view from `ANTHROPIC_DATA_POLICY` + `isZeroRetentionConfigured()`), new `src/lib/marking/data-protection/posture.ts` (re-export + `MARKING_PRIVACY_CLAIMS` map of claim-key → `{ text, tier, claimable }`).
**Touches (test, new):** `src/__tests__/marking/data-posture.test.ts`
- `describeDataPosture()` returns, per claim (`no_training`, `zero_retention`, `no_pii_to_model`, `eu_uk_at_rest`, `human_review_for_minors`): `{ claimable: boolean, tense: 'present'|'contractual'|'pending', text }`. `no_pii_to_model` and `human_review_for_minors` → `present` (enforced in code). `no_training` and `zero_retention` → `contractual` IF the relevant pending flag is set, else `pending` and `claimable:false`.
- `MARKING_PRIVACY_CLAIMS` is the ONLY source any marking-UI privacy component may import.
**Acceptance:** test asserts that while `isZeroRetentionConfigured()===false`, `zero_retention.claimable===false` and `no_training.tense!=='present'`; flipping the pending flags (in a test fixture) makes them claimable. A lint/grep guard (documented, optionally a test) asserts no marking UI component hardcodes the strings "never train" / "deleted immediately" / "zero retention" outside `MARKING_PRIVACY_CLAIMS`.
**Depends on:** none.

### Step 3 — Analytics de-identification projection for the §4 learner model
**Touches (new):** `src/lib/marking/data-protection/analytics-projection.ts`
**Touches (test, new):** `src/__tests__/marking/analytics-projection.test.ts`
- Export `toAnalyticsRecord(validatedMark, { hashedLearnerId })`: returns ONLY criterion bands, error-taxonomy tags/counts, confidence, integrity flags, pack/model/prompt versions, timestamps, and a hashed learner id. Strips `essay_text`, evidence quotes (which contain verbatim essay substrings), and all identifiers via the shared `FORBIDDEN_OUTBOUND_KEYS`/`FORBIDDEN_EXPORT_KEYS` guard.
**Acceptance:** adversarial test (mirroring `anonymise.test.ts`): name/email/essay/quote shoved into the input never appear in the output; output is idempotent; hashed learner id is stable and non-reversible. Cross-checks `FORBIDDEN_EXPORT_KEYS` reuse.
**Depends on:** Step 1.

### Step 4 — Retention + deletion spec wired to one spine
**Touches (docs/code):** `src/lib/marking/data-protection/retention.ts` (new — typed `RETENTION_POLICY` constant per data class: `marking_submissions.essay_text`, `ai_result`, AI audit rows, analytics projection), and an audit of `src/app/api/privacy/delete-essay`, `account/delete`, `cron/data-retention` to confirm each purges `marking_submissions.essay_text` + AI audit rows + analytics rows.
**Touches (test, new):** `src/__tests__/marking/retention-deletion.test.ts` (route-level: deleting a learner purges essay_text and analytics projection; asserts no orphaned essay text remains).
- Decide the single engine spine: the IELTS engine persists via the `marking_submissions` spine (so `/api/mark`'s no-persist path is reconciled or the IELTS MVP uses the spine). Document retention windows and the ZDR-pending caveat (provider-side retention is contractual + unconfirmed until `writtenZdrConfirmation` flips).
**Acceptance:** deletion test green; `RETENTION_POLICY` covers every data class the engine writes; doc states which spine the IELTS MVP uses.
**Depends on:** Steps 1, 3.

### Step 5 — Children's-Code gate chain re-use on the IELTS engine entrypoint
**Touches:** the future IELTS marking route (`src/app/api/ielts/mark` or the unified engine route) — re-use `checkMinorAIConsent`, `isAiOptedOutServer`, rate-limit, `contentSafetyCheck`, `logAiDecision` in the SAME order as `mark/route.ts`; age-gate the spec §3 "better-version rewrite" feedback policy (allowed for confirmed-adult IELTS candidates, forbidden for minors — matching GCSE/EAL).
**Touches (test, new):** `src/__tests__/marking/ielts-gate-chain.test.ts`
**Acceptance:** test asserts the engine entrypoint refuses to call the model when (a) minor lacks parental consent, (b) `aiOptOut` is set server-side, and that rewrites are suppressed for minors. Gate order matches `mark/route.ts`.
**Depends on:** Steps 1, 2 (uses `assertMinimisedPayload` + posture).

### Step 6 — Reconcile DPIA + subprocessor register to the real posture
**Touches (docs):** `business-docs/compliance/childrens-code/03-dpias/dpia-ai-features-v1.md` (rewrite §2/§4 R3/R6 + §5 R6 residual from present-tense "ZDR endpoint active" to "ZDR contractually available; written confirmation PENDING; residual rating contingent on confirmation"), `src/config/subprocessors.ts` (confirm `dpaStatus`/`zeroRetention` stay `unconfirmed`/`pending` and Anthropic + Supabase remain in `SUBPROCESSORS_NEEDING_CONFIRMATION`), and `business-docs/compliance/eu-ai-act/17-anthropic-dpa-zdr-pack.md` + `human-action-checklist.md` item 4 (the action to obtain the three written confirmations that flip the flags).
**Acceptance:** DPIA no longer asserts ZDR as an active control; R6 residual explicitly conditioned on the pending confirmation; register matches `ANTHROPIC_DATA_POLICY` flags exactly; a documented check (or test in Step 2) ties register/DPIA wording to `describeDataPosture()`.
**Depends on:** Step 2 (so the reconciled wording is generated from / matches the typed posture).

### Step 7 — Public legal pages read from the register
**Touches:** `/data-processing`, `/legal/privacy` pages (currently hand-maintained, divergent lists) → render the subprocessor list and the "no name/email/DOB/school sent" minimisation claim from `src/config/subprocessors.ts` + `MARKING_PRIVACY_CLAIMS`.
**Acceptance:** the public list is generated from the typed register; no hardcoded divergent subprocessor list remains; claims shown match `describeDataPosture()` tiers.
**Depends on:** Steps 2, 6.

---

## 5. Risks

- **Claim drift (highest).** If the UI binding (Step 2) is not landed before any IELTS marking UI ships, a "we don't train on your work / instantly deleted" claim can appear while the pending flags are `false` — a Children's-Code and consumer-protection exposure. Mitigation: Steps 1–2 are prerequisites for the marker wiring.
- **DPIA overstatement is live now.** The signed DPIA v1.0 already asserts ZDR as active. Until Step 6 reconciles it, the organisation is relying on a control its own code says is not configured. This is a pre-existing compliance gap, not introduced by this work, but the engine build must not deepen it.
- **Minimisation regression as the prompt grows.** Router output, retrieval context, exemplars, and integrity-flag plumbing add new fields to the assembled payload; without the Step 1 guard+test, an identifier can leak silently. The essay-is-verbatim carve-out (do NOT flag PII inside the essay body) must be implemented carefully or the guard will produce false positives and get disabled.
- **Pending DPAs (Anthropic + Supabase).** At-rest (Supabase) and processor (Anthropic) DPAs are both `pending`/`unconfirmed`. Retention/deletion guarantees (Step 4) are partly contractual and not fully papered; the design must surface this rather than imply completeness.
- **Two persistence paths.** `/api/mark` does not persist; `/api/marking/run` does. If the IELTS MVP lands on the non-persisting path, retention/deletion scaffolding (Step 4) will not cover it; if it lands on the spine, deletion routes must be verified against the new IELTS result rows.
- **Analytics evidence leakage.** Evidence quotes are verbatim essay substrings; if the §4 analytics projection (Step 3) forgets to strip them, "anonymised" analytics will contain raw student writing. The adversarial test is the backstop.
- **Model/effort reconciliation is out of scope here but adjacent.** The spec names `claude-sonnet-4-6 @ xhigh` / `opus-4-8`; live code uses `claude-sonnet-4-20250514` with no effort tier. Any new model id must still route through `getAnthropicClient()` so the no-training/minimisation posture is inherited; a bespoke client would bypass these guarantees.
