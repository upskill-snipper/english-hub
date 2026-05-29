# 16 — Design: Feedback Generator (Marking Engine §1.6 / arch §3 / IELTS spec §7)

> **Status:** design only. No code is written in this phase. This doc is the
> build contract for the Feedback Generator component. It traces to
> `00-architecture-source.md` §1.6 + §3 and `01-ielts-writing-task2-spec.md` §7.
> Author: feedback design agent, 2026-05-29.

---

## 0. Scope and the one hard contract

The Feedback Generator is the **last** stage of the Marking Engine pipeline. It is a
**second model call** that takes the **already-validated structured mark** (from the
Validator, doc 14/15 territory) plus the candidate essay, and produces **student-facing
teaching feedback**:

1. encouraging summary, **strengths first**;
2. per-criterion (TR / CC / LR / GRA) "the ONE change that raises it";
3. **two upgrade rewrites** of the learner's own weak sentences;
4. **one concrete next action**;
5. warm, confidence-building tone for younger learners.

**THE HARD CONTRACT (load-bearing, non-negotiable):** the feedback can **NEVER**
contradict the validated mark. It may not assert a different band, invent an error not in
the validated `errors[]`, claim a criterion is weak that the mark scored strong (or vice
versa), or rewrite a sentence in a way that contradicts the criterion judgement. This is
the spec's central feedback requirement (arch §3 final paragraph; IELTS §7 "Your feedback
MUST be consistent with the provided assessment — never contradict a band or invent new
errors"). Everything in this design exists to make that contract **structurally
guaranteed**, not merely prompted.

This component depends on, but does not include: the Router (doc-series 11), the Knowledge
Pack / retrieval (12/13), the Marker forced-tool call (13/14), the Validator + confidence +
self-consistency (14/15). It consumes the Validator's output. It writes nothing the
analytics layer (§4) depends on for taxonomy — analytics reads the **mark**, not the
feedback; feedback is presentation only.

---

## 1. Current state in THIS codebase

There is **no separate feedback-model call anywhere in the repo today.** There are two
different "feedback" code paths, both of which diverge from the spec in the same direction.

### 1.1 GCSE path — `src/lib/marking/feedback-generator.ts` (the file we must reconcile with)

Despite its name, `feedback-generator.ts` is **not** a feedback generator in the spec's
sense. It is a **pure parser/normaliser** of the single GCSE marker JSON. Verified shape
(289 lines):

- `generateFeedback({ scheme, questionId, rawResponseText })` makes **no model call**. It
  consumes the raw text returned by the *one* marking call in
  `POST /api/mark` and `POST /api/marking/run`.
- `tryParseJSON` strips ```` ```json ```` fences, `JSON.parse`s, falls back to
  first-`{`…last-`}` substring recovery.
- Maps `{"error":"INVALID_SUBMISSION"}` / `{"error":"OFF_TOPIC"}` sentinels to a
  `FeedbackError` (routes map these to HTTP 400).
- `normaliseAOScores` **clamps** each AO mark to `0..maxMarks` and rounds — the only
  code-side numeric guardrail.
- Caps: `strengths` ≤ 5, `improvements` ≤ 5, `nextStepsToNextGrade` ≤ 4; truncates
  `suggestion` ≤ 250 chars, `quote` ≤ 200 chars, `justification` ≤ 800 chars. The 250-char
  `suggestion` cap is an **explicit anti-rewrite guard** ("prevent smuggled rewrites" — the
  GCSE product deliberately forbids better-version rewrites for exam minors, an
  academic-integrity choice).
- Calls `predictGrade(aoScores, question.totalMarks, scheme.board)` (grade-predictor +
  grade-boundaries) to compute the headline grade **in code**.
- Returns a `MarkingResult` whose `strengths`/`improvements`/`nextStepsToNextGrade` are
  parsed from the **same marker JSON** that produced the scores.

**Key property to preserve:** because the GCSE "feedback" comes from the same JSON as the
scores, it is *consistent-by-construction* — it literally cannot contradict the mark because
it is part of the mark. The new IELTS feedback generator (a *separate* call) loses this
free guarantee and must re-earn it through validation (§5 below).

Tone rules already live in the GCSE **marker** prompt (`prompt-builder.ts`,
age-14-16 examiner persona, "age-appropriate", "no model answers / no rewrites"), not in a
feedback stage.

### 1.2 IELTS path — `src/app/api/ielts/writing-feedback/route.ts` (712 lines, the closest existing analogue)

The live IELTS Writing feedback route already does LLM marking + feedback **in one call**:

- Model: hardcoded `claude-sonnet-4-20250514`, `max_tokens` 2048, single call, no tools.
- Descriptors hardcoded as paraphrased prose in `src/lib/ielts/band-descriptors.ts`
  (`TASK2_DESCRIPTORS` bands 4-9, `WRITING_TASK2_CRITERIA`).
- Output is **JSON-in-prose**: `{ overallBand, criteria[], strengths[], improvements[],
  modelPointers[] }`, parsed by `extractJson` / `parseModelFeedback`.
- Band: model proposes `overallBand`; code clamps via `roundToBand` and only falls back to
  the criteria mean when the model diverges from the mean by **>1 band**.
- **Deliberately refuses better-version rewrites** ("modelPointers ... NOT a rewritten
  model answer") — the opposite of IELTS §7 item 3.
- Strong, reusable compliance scaffolding: auth → Premium → `checkMinorAIConsent` →
  `isAiOptedOutServer` (Children's Code) → `rateLimit` → `contentSafetyCheck` →
  `filterAIResponse` → `logAiDecision` (EU AI Act Art.12/19, stores SHA-256 hash + length
  only).

`src/lib/ielts/bands.ts` already exports `overallBand(bands[])` implementing the spec's
**exact** half-band rounding (`<.25`→floor, `<.75`→+0.5, else +1) and `roundToBand` —
reuse, do not duplicate.

`src/lib/eal/assess.ts` is the same pattern for EAL (single call, JSON-in-prose, "NEVER
rewrites"). Both EAL and IELTS embed strengths/improvements in the **same** call as the
band, so they too are consistent-by-construction today — but they are *not grounded,
validated, or structured-first*, and the IELTS one is single-call so it has no separate
feedback stage to make warmer or richer.

### 1.3 What exists that the feedback generator can lean on

- Compliance/audit chain (above) — reuse verbatim.
- `withArabicDirective` (used in `/api/mark`) for bilingual output direction.
- `logAiDecision` AiAuditFeature union already has IELTS members.
- `filterAIResponse` output safety filter.
- No micro-lesson catalogue exists yet to link to (gap — see §3.4).

---

## 2. Target state

A discrete, **stateless, pure-where-possible** module:

```
src/lib/marking/ielts/feedback-generator.ts   (new — IELTS feedback generator)
```

with a single entry point:

```ts
generateIeltsFeedback(input: {
  validatedMark: ValidatedIeltsMark;   // the Validator's output, §1.5/§5
  essayText: string;                   // verbatim candidate essay
  taskPrompt: string;
  learnerProfile?: { likelyYounger?: boolean; locale?: 'en' | 'ar'; targetBand?: number };
  microLessonCatalogue?: MicroLessonRef[]; // optional, §3.4
}): Promise<IeltsFeedbackResult>;
```

Behaviour:

1. **Second model call** (Sonnet tier @ `high` per IELTS §7, reconciled to the real callable
   model id in Phase 0 — see Risks). System prompt = IELTS §7 prompt verbatim, cached.
2. The **user message** carries the **validated mark JSON** + the essay + task prompt. The
   model is told to ground every point in the supplied mark.
3. Output is a **forced-tool call** (`submit_ielts_feedback`) — not prose-JSON — so the
   feedback is itself structured and machine-checkable against the mark.
4. A **code-side consistency validator** runs after the call and **rejects/repairs** any
   feedback that contradicts the validated mark (the hard contract enforced in code, §5).
5. Returns a structured `IeltsFeedbackResult` (strengths, per-criterion one-change,
   two rewrites, one next action, optional micro-lesson links, tone metadata) plus a
   `feedbackConfidence` and a `consistencyChecksPassed` boolean.
6. Same compliance chain as the marker; same audit logging; bilingual via
   `withArabicDirective`.

Critically: the feedback generator **never re-scores**. It receives bands and errors as
**fixed inputs** and may only *explain, illustrate, and motivate*. The band fields are not
in the feedback tool schema at all (§4) — the model is structurally unable to emit a band,
so it cannot contradict one.

### 2.1 Target output shape (`IeltsFeedbackResult`)

```ts
interface IeltsFeedbackResult {
  summary: LocalizedString;                 // encouraging, strengths-first, 2–4 sentences
  strengths: LocalizedString[];             // genuine, named (1–4)
  perCriterion: {
    name: 'Task Response' | 'Coherence and Cohesion'
        | 'Lexical Resource' | 'Grammatical Range and Accuracy';
    band: number;                           // ECHOED from the validated mark, read-only
    why: LocalizedString;                   // plain-language, tied to the criterion
    oneChange: LocalizedString;             // the single highest-leverage change
    microLesson?: MicroLessonRef;           // §3.4, optional
  }[];                                      // exactly 4, order fixed
  upgradeRewrites: {
    original: string;                       // MUST be a verbatim span from the essay
    rewrite: string;
    note: LocalizedString;                  // one line: what changed and why
    sourceErrorType: ErrorTaxonomyType;     // the errors[] item this rewrite targets
  }[];                                      // exactly 2 (or 1 if <2 eligible errors)
  nextAction: LocalizedString;              // ONE sentence, specific
  tone: 'standard' | 'younger-learner';
  feedbackConfidence: number;               // 0–1, generation confidence (NOT the mark's)
  consistencyChecksPassed: boolean;         // §5 gate result
  packVersion: string;                      // echoed from the mark for provenance
}
```

`band` per criterion and `packVersion` are **echoed** from the validated mark by code, not
produced by the model.

---

## 3. The gap (target − current), per spec requirement

| Spec requirement (arch §3 / IELTS §7) | Current | Gap |
|---|---|---|
| **Separate second model call** for feedback | GCSE: none (pure parse). IELTS: folded into the single marking call. | Build a dedicated second call that consumes the *validated* mark. |
| **Strengths first**, encouraging summary | Partially (GCSE `strengths[]`, IELTS `strengths[]`) but unordered relative to weaknesses; tone in marker prompt only. | Enforce strengths-first ordering + dedicated warm-summary field. |
| **Per-criterion "one change that raises it"** | GCSE: free `improvements[]` not keyed to criterion. IELTS: `improvements[]`/`modelPointers[]` not 1-per-criterion. | Force exactly-4 per-criterion blocks, each a *single* highest-leverage change. |
| **Two upgrade rewrites of learner's own sentences** | **Deliberately forbidden** in both GCSE (250-char anti-rewrite cap) and IELTS (`modelPointers ... NOT a rewrite`). | Add rewrites for **adult IELTS candidates**; keep the no-rewrite policy for school-age GCSE/EAL minors (per-area policy, §6). |
| **One concrete next action** | GCSE: `nextStepsToNextGrade[]` (≤4, plural). IELTS: none discrete. | Force exactly **one** specific next action. |
| **Micro-lesson links** | None anywhere. | New optional catalogue + mapping (error-type → lesson). |
| **Warm tone for younger learners** | Tone rules in marker prompt; not a feedback-stage toggle. | Tone toggle driven by `learnerProfile.likelyYounger`. |
| **Feedback can NEVER contradict the mark** | Free *by construction* today (feedback shares the marker JSON). A *separate* call loses this guarantee. | **Re-earn the guarantee in code**: forced-tool schema with no band fields + post-call consistency validator (§5). |
| **Generated FROM the structured mark** | Yes structurally for GCSE/IELTS (same JSON). | Preserve the property across the new call boundary by passing the validated mark as the sole source of truth and validating outputs against it. |
| Bilingual (EN/AR) | IELTS/EAL/`withArabicDirective` present. | Reuse. |
| Compliance/audit/consent | Present on IELTS route. | Reuse verbatim. |

### 3.4 Micro-lesson linking (sub-gap)

The spec wants each weakness linked to a targeted micro-lesson. **No micro-lesson
catalogue exists.** Minimum viable: a static `MicroLessonRef[]` keyed by error-taxonomy
prefix (`grammar.article` → "Articles: a/an/the", `discourse.cohesion` → "Cohesive
devices", etc.). The mapping is **code-side and deterministic** (do not let the model
invent lesson URLs — that would be a hallucination vector). The feedback model only selects
*which* criterion is weakest; code attaches the lesson. This keeps links non-fabricatable.

---

## 4. The feedback forced-tool schema (`submit_ielts_feedback`)

Force `tool_choice` to this tool. **It contains no band, no overall band, no error-type
enum the model can mint, and no confidence-on-the-mark field** — by omission the model
cannot restate or alter the score. Rewrites must reference an *index* into the
already-validated `errors[]`, not a free-text error.

```jsonc
{
  "name": "submit_ielts_feedback",
  "description": "Submit student-facing teaching feedback derived from the validated mark.",
  "input_schema": {
    "type": "object",
    "required": ["summary", "strengths", "per_criterion", "upgrade_rewrites", "next_action"],
    "properties": {
      "summary": { "type": "string" },
      "strengths": { "type": "array", "minItems": 1, "maxItems": 4, "items": { "type": "string" } },
      "per_criterion": {
        "type": "array", "minItems": 4, "maxItems": 4,
        "items": {
          "type": "object",
          "required": ["name", "why", "one_change"],
          "properties": {
            "name": { "type": "string",
              "enum": ["Task Response","Coherence and Cohesion","Lexical Resource","Grammatical Range and Accuracy"] },
            "why": { "type": "string" },
            "one_change": { "type": "string" }
          }
        }
      },
      "upgrade_rewrites": {
        "type": "array", "minItems": 0, "maxItems": 2,
        "items": {
          "type": "object",
          "required": ["error_index", "original", "rewrite", "note"],
          "properties": {
            "error_index": { "type": "integer", "description": "Index into the supplied errors[] this rewrite fixes." },
            "original": { "type": "string", "description": "Verbatim span from the essay (must match errors[error_index].quote)." },
            "rewrite": { "type": "string" },
            "note": { "type": "string", "description": "One line: what changed and why." }
          }
        }
      },
      "next_action": { "type": "string" }
    }
  }
}
```

Note: no `band`, no `overall_band`, no free error `type`. The model selects an
`error_index`; **code** resolves the taxonomy type, the verbatim quote, and the micro-lesson
— removing the model's ability to fabricate any of them.

---

## 5. The consistency validator (the hard contract, enforced in code)

After the model returns, run `validateFeedbackAgainstMark(feedback, validatedMark, essay)`
**before** anything reaches the learner. This is the analogue of the marker's
verbatim-evidence backstop (IELTS §5.2) applied to feedback. Checks, all hard-fail unless
noted:

1. **Exactly 4 criteria, names match** the four validated criterion names (set equality).
2. **Strengths-first / no contradiction:** every `per_criterion[i].why` is checked to not
   assert a band; bands are stripped from the model's reach by schema, but a regex/lint
   guard rejects any "Band N"/"score" claim in free text (defence in depth).
3. **Rewrite provenance:** for each rewrite, `errors[error_index]` must exist; `original`
   must equal `errors[error_index].quote` (whitespace-normalised); and that quote must
   appear **verbatim in the essay** (re-run the §5.2 substring check — the essay is stored
   verbatim, no rehydration). Any miss → drop that rewrite (soft) and, if it leaves <1
   rewrite for an adult IELTS candidate with ≥2 eligible errors, flag for regeneration.
4. **No invented errors:** a rewrite may only target an error already in the validated
   `errors[]` (guaranteed by `error_index`, re-asserted here).
5. **Strength sanity (soft):** flag (do not block) if a "strength" names a criterion whose
   band is the lowest of the four — log for calibration; the prompt should prevent it.
6. **One next action:** exactly one non-empty `next_action`.
7. **Length/safety caps** mirroring the GCSE caps (summary, why, one_change, note) +
   `filterAIResponse`.

On hard-fail: **one** bounded regeneration retry with the violated constraints appended to
the prompt; on second failure, **degrade gracefully** to a deterministic, template feedback
built *purely from the validated mark in code* (strengths = highest-banded criteria,
one-change = canned per-criterion tips keyed to band, next action = canned). The degraded
path is the ultimate guarantee that **a student never sees feedback that contradicts the
mark**, because the fallback is computed from the mark with no model in the loop.

`consistencyChecksPassed` records whether the model output (vs the fallback) was used.

---

## 6. Per-area feedback policy (rewrites)

The spec's "show a better version" (arch §3 / IELTS §7 item 3) is written for **adult IELTS
candidates**. The existing GCSE and EAL paths deliberately **forbid** rewrites for
school-age minors (academic integrity). Resolve, do not flatten:

- **IELTS Writing Task 2 (adult candidates):** rewrites **enabled** (this module's MVP).
- **GCSE / school-age EAL minors:** rewrites **disabled**; the feedback generator emits the
  per-criterion one-change + next action only, preserving the current 250-char anti-rewrite
  posture.

Drive this with an explicit `allowRewrites` flag resolved from the Knowledge Pack /
learner profile, defaulting to **false** (safe). The younger-learner tone toggle is
independent and always available.

---

## 7. Ordered build steps

> Each step names the files it touches and its acceptance criteria. Steps 1–3 are pure and
> testable without a model. Phase 0 (model-string reconciliation) is a prerequisite owned by
> the engine-foundation docs, referenced here.

1. **Define the feedback types + tool schema.**
   Files: `src/lib/marking/ielts/feedback-types.ts` (new),
   `src/lib/marking/ielts/feedback-tool-schema.ts` (new).
   Acceptance: `IeltsFeedbackResult`, `submit_ielts_feedback` JSON schema, and a Zod (or
   equivalent) parser compile; a unit test asserts the schema has **no** band/overall/error-
   type-enum field the model can set (guards the hard contract at the type level).
   Depends on: the Validator's `ValidatedIeltsMark` type (doc 14/15).

2. **Build the consistency validator (`validateFeedbackAgainstMark`).**
   Files: `src/lib/marking/ielts/feedback-validator.ts` (new) + colocated
   `feedback-validator.test.ts`.
   Acceptance: parametrised tests prove every §5 check: (a) wrong/missing criterion name
   rejected; (b) rewrite whose `original` is not verbatim in the essay rejected; (c)
   rewrite `error_index` out of range rejected; (d) "Band 7" smuggled into `why` rejected;
   (e) >1 or 0 next actions rejected; (f) a clean feedback passes. Pure function, no model,
   `@vitest-environment node` not required.

3. **Build the deterministic fallback generator.**
   Files: `src/lib/marking/ielts/feedback-fallback.ts` (new) + test.
   Acceptance: given any `ValidatedIeltsMark`, returns a complete `IeltsFeedbackResult` that
   **passes `validateFeedbackAgainstMark` by construction** (strengths = top-banded criteria,
   one-change keyed to band, single next action). Test asserts fallback output always passes
   the §5 validator for a matrix of marks.

4. **Author the feedback system prompt + user-message builder.**
   Files: `src/lib/marking/ielts/feedback-prompt.ts` (new) + test.
   Acceptance: system prompt is IELTS §7 verbatim, marked cacheable (`cache_control` on the
   stable block — closes the spec §2 caching gap for this stage); user message embeds the
   validated mark JSON + essay + task prompt; `allowRewrites` and younger-learner tone toggles
   alter the prompt deterministically (snapshot test). No learner PII (name/email/school) in
   the payload — assert via an outbound-minimisation unit test (the load-bearing privacy test
   the test-inventory flagged missing).

5. **Wire the model call (`generateIeltsFeedback`).**
   Files: `src/lib/marking/ielts/feedback-generator.ts` (new).
   Acceptance: calls the reconciled model (Phase 0) with forced `tool_choice:
   submit_ielts_feedback`; parses via the Zod schema; runs `validateFeedbackAgainstMark`;
   on hard-fail does **one** bounded retry then falls back to step 3; returns
   `IeltsFeedbackResult` with `consistencyChecksPassed` set correctly. Integration test with
   a mocked Anthropic client covers: clean pass, retry-then-pass, retry-then-fallback.
   Depends on: steps 1–4; `getAnthropicClient`, `ANTHROPIC_MODEL` (or new IELTS constant).

6. **Apply compliance + audit + bilingual wrappers.**
   Files: route that owns IELTS marking (new `src/app/api/ielts/mark/route.ts` or the
   engine route the marker docs define) — feedback generator is invoked **after** the
   validated mark.
   Acceptance: reuses auth → Premium → `checkMinorAIConsent` → `isAiOptedOutServer` →
   `rateLimit` → `contentSafetyCheck` → `filterAIResponse` → `logAiDecision`
   (feature `'ielts/feedback'`); audit stores only hash+length; route test asserts the
   compliance chain runs before the feedback call and that opt-out blocks it.

7. **Add the micro-lesson mapping (deterministic, code-side).**
   Files: `src/lib/marking/ielts/micro-lessons.ts` (new) + test.
   Acceptance: a static map from error-taxonomy prefix → `MicroLessonRef`; code attaches
   lessons to `perCriterion`/rewrites; model never emits a URL. Test asserts every taxonomy
   type resolves to a lesson or `undefined` (never a fabricated link).

8. **Persist feedback alongside the mark.**
   Files: `src/lib/marking/persistence.ts` (extend), the marking-spine migration.
   Acceptance: `IeltsFeedbackResult` stored in a feedback column/jsonb on the submission
   row, linked to the same `pack_version` and mark; `consistencyChecksPassed` and
   `feedbackConfidence` recorded for §4/§8 analytics and drift monitoring. Test asserts
   feedback row references the exact mark it was generated from.

9. **Reconcile the legacy GCSE `feedback-generator.ts` naming/role.**
   Files: `src/lib/marking/feedback-generator.ts` (rename/document, do **not** break).
   Acceptance: either rename to `mark-parser.ts` (it parses a mark; it is not a feedback
   generator) **or** add a top-of-file doc-comment clarifying it is the GCSE single-call
   parser, distinct from the new IELTS feedback generator, to prevent future confusion.
   No behaviour change; existing GCSE tests stay green. (Low-risk hygiene; can trail.)

10. **Calibration hook for feedback quality (trails, ties to §8).**
    Files: `src/lib/marker-qa/` (extend) + test.
    Acceptance: log `consistencyChecksPassed` rate and fallback-rate per pack_version so the
    calibration dashboard (doc-series for §8) can alarm if feedback consistency degrades when
    the prompt/model/pack changes.

---

## 8. Risks

- **Model-string / effort-tier reconciliation (Phase-0 blocker, spec-flagged).** IELTS §7
  names Sonnet 4.6 @ `high`; the installed `@anthropic-ai/sdk@0.90.0` standardises on
  `claude-sonnet-4-20250514` with **no** effort-tier surface. Do **not** hardcode
  `claude-sonnet-4-6` or an `effort` field. The feedback generator must consume whatever
  `ANTHROPIC_MODEL` (or a new IELTS constant) resolves to after Phase 0. Until confirmed,
  step 5 is blocked on the engine-foundation Phase 0.
- **The separate call breaks consistency-by-construction.** Today GCSE/IELTS feedback
  cannot contradict the mark because it shares the marker JSON. A second call *can*
  contradict it. The schema-omission + consistency-validator + deterministic-fallback stack
  (§4/§5) is what re-earns the guarantee; if any of those three is dropped, the hard
  contract is unenforced. Treat them as one inseparable unit.
- **Rewrite hallucination.** A rewrite is the highest-risk output — it puts new sentences in
  front of the learner. Mitigated by forcing `original` to be a verbatim error span and
  validating it against the essay; a rewrite whose `original` is fabricated is dropped, never
  shown.
- **Academic-integrity / per-area policy.** Enabling rewrites uniformly would regress the
  deliberate GCSE/EAL minor protection. `allowRewrites` defaults false; only adult IELTS
  enables it (§6). Getting this flag wrong shows rewrites to children — a product/safeguarding
  risk, not just a quality one.
- **Tone for minors.** Warm-tone toggle must be driven by a *server-authoritative* age
  signal (not a client flag), consistent with `isAiOptedOutServer`'s posture.
- **Micro-lesson links don't exist yet.** Step 7 ships a stub map; until a real lesson
  catalogue exists, links may be sparse. Code-side mapping prevents fabricated URLs but
  cannot invent content that isn't built.
- **Latency / cost.** A second model call per submission roughly doubles marking latency and
  cost. Cache the stable system block (step 4); consider generating feedback lazily (on
  first student view) rather than eagerly at mark time for non-mock submissions.
- **Privacy claims.** Any "we don't train on your work" copy on the feedback UI must match
  the contractual-only, ZDR-pending posture in `ANTHROPIC_DATA_POLICY`
  (`isZeroRetentionConfigured()` is false today). Do not overstate.
- **Degraded-fallback quality.** The deterministic fallback guarantees consistency but is
  blander than model feedback. Acceptable as a safety net; monitor fallback-rate (step 10)
  so a silently-high rate (e.g. a prompt regression) is caught.
- **Dependency ordering.** This component is meaningless without a *validated* mark. If the
  Validator (doc 14/15) ships incomplete (no confidence, no verbatim-evidence check), the
  feedback generator inherits unvalidated bands and the hard contract weakens upstream.
  Build order: Validator → Feedback Generator.
