# IELTS Writing Task 2 — Marking Engine (Claude Code build spec)

> **Canonical source spec.** Pasted by the founder 2026-05-24. The first
> concrete instantiation of the grounded Marking Engine (see
> `00-architecture-source.md`). Build the engine foundation first, then
> this module on top.

Everything Claude Code needs to build the first marking module. Grounded, structured, calibratable. Drop this into the Marking Engine architecture from `00-architecture-source.md`.

Reminder on sourcing: inject the official band descriptors and your own expert-marked exemplars from the versioned Knowledge Pack at runtime. Do not hardcode boards' secure materials. The prompt below uses placeholders the pack fills.

## 1. How the pieces fit

```
Essay + task prompt
   → assemble user message (inject descriptors + exemplars from pack)
   → call MARKER model (Sonnet 4.6 @ xhigh) with FORCED tool use → structured mark
   → run 2–3× for high-stakes (self-consistency), compare
   → VALIDATOR (code): recompute overall band, range-check, verify evidence spans exist
   → confidence < threshold OR criteria disagree across runs → route to human
   → FEEDBACK GENERATOR model call → student-facing teaching feedback (from the mark)
   → persist structured mark + feedback to analytics store
```

Model tiering: marking runs on `claude-sonnet-4-6` at `xhigh` effort. Escalate a flagged/borderline mark to `claude-opus-4-8` for a re-mark. Never mark on Haiku.

## 2. The marking system prompt

Send this as the `system` block (cache it — it's stable). Placeholders in `{{double_braces}}` are filled from the Knowledge Pack and submission at runtime; the essay and task go in the user message, not here.

```text
You are an experienced, certified IELTS examiner marking a Writing Task 2 response.
You mark strictly and ONLY against the official band descriptors provided to you in
this conversation. You never invent criteria, never guess, and never award a band you
cannot justify with specific evidence quoted from the candidate's text.

YOUR MARKING IS:
- Criterion-referenced: assess each of the four criteria independently.
- Descriptor-anchored: for each band you award, identify the specific descriptor
  language that matches the candidate's performance at that band.
- Evidence-based: for every band, quote 1–3 exact spans from the candidate's essay
  that justify it. Every quoted span MUST appear verbatim in the essay. Never fabricate.
- Calibrated: use the graded exemplars provided as anchors for what each band looks like.
- Honest about uncertainty: where you are torn between two bands, flag it as borderline
  and explain which descriptor features push each way.

THE FOUR CRITERIA (each scored as a WHOLE band, 0–9):
1. Task Response (TR) — Does the response fully address all parts of the task? Is the
   position clear and sustained throughout? Are main ideas relevant, developed, and
   supported? (Under-length and off-topic responses are limited here.)
2. Coherence and Cohesion (CC) — Is information logically organised? Is paragraphing
   appropriate? Are cohesive devices and referencing used accurately and not mechanically?
3. Lexical Resource (LR) — Range and precision of vocabulary; collocation; appropriacy
   and register; spelling and word formation.
4. Grammatical Range and Accuracy (GRA) — Range of structures; accuracy; error density;
   punctuation.

OFFICIAL BAND DESCRIPTORS (mark only against these):
{{BAND_DESCRIPTORS}}

CALIBRATION EXEMPLARS (graded anchors — use to judge where this essay sits):
{{EXEMPLARS}}

MANDATORY INTEGRITY CHECKS (perform before scoring):
- Word count is provided as {{WORD_COUNT}}. If under 250 words, apply the under-length
  consideration to Task Response and flag under_length = true.
- Words copied directly from the task prompt do NOT count as the candidate's own work,
  do not count toward length, and must not inflate Lexical or Grammatical judgements.
- If the essay does not address the task, is off-topic, or appears partly/fully memorised,
  Task Response is severely limited — flag the relevant integrity flag and explain.
- Task 2 requires a clear position maintained throughout; if absent/unclear, TR is limited.

ERROR TAGGING:
Tag every notable error to exactly one type from this fixed taxonomy (use the exact
string): grammar.subject_verb_agreement, grammar.article, grammar.tense,
grammar.preposition, grammar.word_order, grammar.sentence_structure, grammar.punctuation,
lexical.word_choice, lexical.collocation, lexical.register, lexical.spelling,
lexical.word_formation, discourse.cohesion, discourse.referencing, discourse.paragraphing,
discourse.coherence, task.relevance, task.completeness, task.position, task.development.

OUTPUT:
Submit your assessment by calling the tool `submit_ielts_writing_assessment` with the
required structure. Output nothing outside the tool call. Provide, for each criterion:
the whole-band score, the matched descriptor language, 1–3 evidence spans (each an exact
quote plus why it justifies the band), and your confidence (0–1). Then the tagged error
list, integrity flags, borderline flags, a holistic note, your own proposed overall band,
and overall confidence.

ABSOLUTE RULES:
- Assess only against the descriptors provided. If you rely on a rule not in them, stop —
  it does not apply.
- Every evidence span must be a verbatim quote from the candidate's essay.
- Do not award a band you cannot tie to a descriptor and evidence.
- If you are uncertain, lower your confidence and flag it — do not bluff.
```

## 3. User message template

```text
TASK PROMPT:
{{TASK_PROMPT}}

TASK TYPE: {{ACADEMIC_OR_GENERAL}}

CANDIDATE'S ESSAY (verbatim, {{WORD_COUNT}} words):
---
{{ESSAY_TEXT}}
---

Mark this essay now using the tool.
```

## 4. The result schema (forced tool-use)

Define this as a tool and set `tool_choice` to force it, so output always conforms. `band` per criterion is an integer 0–9 (whole bands). The overall band is computed in code (§5), not trusted from the model — `proposed_overall_band` is only a cross-check.

```json
{
  "name": "submit_ielts_writing_assessment",
  "description": "Submit the structured IELTS Writing Task 2 assessment.",
  "input_schema": {
    "type": "object",
    "required": ["criteria", "errors", "integrity_flags", "proposed_overall_band", "overall_confidence", "holistic_note"],
    "properties": {
      "criteria": {
        "type": "array",
        "minItems": 4,
        "maxItems": 4,
        "items": {
          "type": "object",
          "required": ["name", "band", "descriptor_matched", "evidence", "confidence"],
          "properties": {
            "name": { "type": "string", "enum": ["Task Response", "Coherence and Cohesion", "Lexical Resource", "Grammatical Range and Accuracy"] },
            "band": { "type": "integer", "minimum": 0, "maximum": 9 },
            "descriptor_matched": { "type": "string", "description": "The specific descriptor language for the awarded band." },
            "evidence": {
              "type": "array",
              "minItems": 1,
              "maxItems": 3,
              "items": {
                "type": "object",
                "required": ["quote", "explanation"],
                "properties": {
                  "quote": { "type": "string", "description": "Exact verbatim span from the essay." },
                  "explanation": { "type": "string" }
                }
              }
            },
            "confidence": { "type": "number", "minimum": 0, "maximum": 1 }
          }
        }
      },
      "errors": {
        "type": "array",
        "items": {
          "type": "object",
          "required": ["type", "quote", "correction", "explanation"],
          "properties": {
            "type": { "type": "string", "enum": [
              "grammar.subject_verb_agreement","grammar.article","grammar.tense","grammar.preposition",
              "grammar.word_order","grammar.sentence_structure","grammar.punctuation",
              "lexical.word_choice","lexical.collocation","lexical.register","lexical.spelling","lexical.word_formation",
              "discourse.cohesion","discourse.referencing","discourse.paragraphing","discourse.coherence",
              "task.relevance","task.completeness","task.position","task.development"
            ]},
            "quote": { "type": "string", "description": "Exact verbatim span containing the error." },
            "correction": { "type": "string" },
            "explanation": { "type": "string" },
            "severity": { "type": "string", "enum": ["minor","moderate","major"] }
          }
        }
      },
      "integrity_flags": {
        "type": "object",
        "required": ["under_length","off_topic","likely_memorised","copied_from_prompt"],
        "properties": {
          "under_length": { "type": "boolean" },
          "off_topic": { "type": "boolean" },
          "likely_memorised": { "type": "boolean" },
          "copied_from_prompt": { "type": "boolean" }
        }
      },
      "borderline_flags": {
        "type": "array",
        "items": { "type": "string", "description": "e.g. 'TR borderline 6/7: addresses all parts but development thin'" }
      },
      "proposed_overall_band": { "type": "number", "description": "Model's own overall (cross-check only)." },
      "overall_confidence": { "type": "number", "minimum": 0, "maximum": 1 },
      "holistic_note": { "type": "string", "description": "2–4 sentences, examiner's overall impression." }
    }
  }
}
```

## 5. Validation & overall-band computation (code, not model)

Compute the overall band from the four criterion scores using the official rounding, in code. Never let the model's arithmetic be the source of truth.

```python
import math

def ielts_overall(tr: int, cc: int, lr: int, gra: int) -> float:
    """Mean of the four criteria, rounded to the nearest half band.
    .25 rounds up to .5; .75 rounds up to the next whole band."""
    mean = (tr + cc + lr + gra) / 4
    whole = math.floor(mean)
    frac = mean - whole
    if frac < 0.25:
        return float(whole)
    elif frac < 0.75:
        return whole + 0.5
    else:
        return float(whole + 1)
```

The validator must, before any mark reaches a learner:

1. Recompute `overall_band` with `ielts_overall(...)`; if `proposed_overall_band` disagrees by more than 0.5, flag for human review.
2. Verify every `evidence[].quote` and every `errors[].quote` appears verbatim in the essay (substring match, whitespace-normalised). Any fabricated span → reject the mark and re-run; persistent fabrication → human review. This is the anti-hallucination backstop.
3. Range-check: all four criteria present, each 0–9.
4. Compute `overall_confidence`; if below threshold (start at 0.7) OR any criterion confidence < 0.6 OR any integrity flag is true → set `needs_human_review = true` and route accordingly.

## 6. Self-consistency for high-stakes marks

For marks the learner treats as a serious estimate (e.g., a mock-exam submission), run the marking call 3× (temperature low but non-zero) and compare criterion bands. If the spread on any criterion is >1 band, the essay is genuinely borderline — surface a range to the learner rather than a false-precision single band, and flag for human review. Average agreement across runs also feeds your calibration analytics.

## 7. Feedback generator (turns the mark into teaching)

A second call (Sonnet 4.6 @ high) takes the validated structured mark and the essay, and produces student-facing feedback. System prompt:

```text
You are a supportive, expert IELTS writing coach. You are given a completed, validated
assessment of a candidate's Task 2 essay (criterion bands, evidence, tagged errors) and
the essay itself. Write feedback that helps the learner improve — never harsh, never vague.

Your feedback MUST be consistent with the provided assessment (never contradict a band or
invent new errors). For the learner, produce:
1. A brief encouraging summary naming their genuine strengths first.
2. For each of the four criteria: in plain language, why they're at this band and the ONE
   change that would most raise it.
3. Two "upgrade" rewrites: take two of the learner's own weak sentences (from the error
   list) and show a stronger version, with a one-line note on what changed and why.
4. A single concrete next action for their next essay (one sentence, specific).
5. If the learner is likely a younger student, keep tone warm and confidence-building.

Be specific and kind. Ground every point in the assessment you were given.
```

Feed it the validated mark JSON + the essay as the user message.

## 8. Calibration (build this alongside, not after)

Maintain a growing set of essays marked by qualified humans. Nightly/weekly, run the marker against the calibration set and log: exact-band agreement, within-half-band agreement, and per-criterion correlation (TR/CC/LR/GRA separately). Store in the analytics DB and surface on a dashboard. This is what proves the marker examiner-grade, catches drift when you change the prompt/pack/model, and tells you which criterion to improve. Treat the calibration set as a core asset.

## 9. Build order for Claude Code

1. Knowledge Pack loader (versioned descriptors + exemplars for IELTS Writing Task 2).
2. Marker call with forced tool use + the schema above.
3. Validator (overall-band recompute + verbatim-evidence check + confidence routing).
4. Self-consistency wrapper for high-stakes marks.
5. Feedback generator.
6. Persist structured mark + feedback to the analytics store (error taxonomy intact).
7. Calibration harness + agreement metrics.
8. Only then expose to learners, framed as "AI practice feedback," distinct from an official score.

---

## Build notes for THIS codebase (added 2026-05-24, not in the original spec)

- **Model strings:** the spec names `claude-sonnet-4-6` / `claude-opus-4-8` and effort tiers. The live codebase currently standardises on `claude-sonnet-4-20250514` via `src/lib/anthropic-client.ts` (`ANTHROPIC_MODEL`). Reconcile model strings against what the installed `@anthropic-ai/sdk` actually accepts at build time — do NOT invent a model id. Phase 0 must confirm the exact callable model + whether effort tiers are exposed by the installed SDK before any marker code assumes them.
- **Language vs IELTS:** the live product marks GCSE/IGCSE English (AQA/Edexcel/OCR/Eduqas/WJEC/Cambridge) with an existing `src/lib/marking/` stack. IELTS is the spec's chosen first module but may not yet exist in code. Phase 0 confirms IELTS presence and decides whether the engine refactor lands on the existing GCSE path first or stands up IELTS greenfield alongside it.
- **Data-protection backstop is already partly built:** `src/lib/anthropic-client.ts` documents the no-training / retention posture honestly (it is contractual, not a request flag, and the counter-signed DPA/ZDR is still pending counsel). Any "we don't train on your work" claim in marking UI must match that real posture, not overstate it.
